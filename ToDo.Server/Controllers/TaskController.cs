using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Raven.Client;

namespace ReactJs.Controllers
{
    public class TaskController : Controller
    {
        private readonly IDocumentStore _store;

        private static readonly Random Rnd = new Random();

        private DateTime GetRandomDate(DateTime from, DateTime to)
        {
            var range = to - from;

            var randTimeSpan = new TimeSpan((long) (Rnd.NextDouble()*range.Ticks));

            return from + randTimeSpan;
        }

        private int GetRandomInt()
        {
            return Rnd.Next(0, 100);
        }

        public ActionResult Index()
        {
            //serve up the clientside application
            return View();
        }

        public TaskController(IDocumentStore store)
        {
            _store = store;
        }

        #region API Actions

        public ActionResult Create(ToDoTask task)
        {
            task.dateCreated = DateTime.UtcNow;
            //
            using (var session = _store.OpenSession())
            {
                session.Store(task);
                session.SaveChanges();
            }
            return Json(task, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Seed()
        {
            var tasks = new string[]
            {
                "Grocery Shopping", "Fill Prescriptions", "Finish Mortgage Application", "Pick Up Drycleaning",
                "Deposit Checks"
            };
            using (var session = _store.OpenSession())
            {
                foreach (var taskText in tasks)
                {
                    DateTime date;
                    date = GetRandomDate(GetRandomInt()%2 == 0 ? DateTime.UtcNow.AddHours(-24) : DateTime.UtcNow.AddDays(-35), DateTime.UtcNow);
                    var task = new ToDoTask
                    {
                        dateCreated = date,
                        text = taskText
                    };

                    session.Store(task);
                }
                session.SaveChanges();
            }


            return Json("", JsonRequestBehavior.AllowGet);
        }

        public ActionResult Update(ToDoTask task)
        {
            using (var session = _store.OpenSession())
            {
                var e = session.Load<ToDoTask>(task.Id);
                e.completed = task.completed;
                session.Store(e);
                session.SaveChanges();
            }
            return Json(task, JsonRequestBehavior.AllowGet);
        }

        public ActionResult UpdateAll(List<ToDoTask> tasks)
        {
            using (var session = _store.OpenSession())
            {
                foreach (var toDoTask in tasks)
                {
                    var e = session.Load<ToDoTask>(toDoTask.Id);
                    e.completed = toDoTask.completed;
                    session.Store(e);
                }
                session.SaveChanges();
            }
            return Json(tasks, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Delete(ToDoTask task)
        {
            if (task.Id == Guid.Empty)
            {
                return Json(new {success = true}, JsonRequestBehavior.AllowGet);
            }
            //
            using (var session = _store.OpenSession())
            {
                var e = session.Load<ToDoTask>(task.Id);
                session.Delete(e);
                session.SaveChanges();
            }
            return Json(new {success = true}, JsonRequestBehavior.AllowGet);
        }

        public ActionResult List()
        {
            //
            using (var session = _store.OpenSession())
            {
                var tasks = session.Query<ToDoTask>();
                var payload = new {items = tasks.OrderByDescending(s => s.dateCreated).ToList()};

                return Json(payload, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion
    }
}