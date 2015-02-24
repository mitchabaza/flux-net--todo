using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Raven.Client;
using Raven.Client.Linq;

namespace ReactJs.Controllers
{
    public class TaskController : Controller
    {
        private static readonly Random Rnd = new Random();
        private readonly IDocumentStore _store;

        public TaskController(IDocumentStore store)
        {
            _store = store;
        }

        public ActionResult Index()
        {
            //serve up the client-side application
            return View();
        }
        #region API Actions

        public ActionResult Create(ToDoTask task)
        {
            task.dateCreated = DateTime.UtcNow;
            //
            using (IDocumentSession session = _store.OpenSession())
            {
                session.Store(task);
                session.SaveChanges();
            }
            return Json(task, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Seed()
        {
            var tasks = new[]
            {
                "Grocery Shopping",
                "Fill Prescriptions",
                "Learn Flux",
                "Finish Mortgage Application",
                "Pick Up Drycleaning",
                "Deposit Checks"
            };
            using (IDocumentSession session = _store.OpenSession())
            {
                foreach (string taskText in tasks)
                {
                    DateTime date = GenerateRandomDate(StartDate(),DateTime.UtcNow);
                    var task = new ToDoTask
                    {
                        dateCreated = date,
                        text = taskText,
                        completed = GenerateRandomInteger()%2 == 0
                    };

                    session.Store(task);
                }
                session.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        private DateTime StartDate()
        {
            return GenerateRandomInteger() %2 == 0 ? DateTime.UtcNow.AddHours(-24) : DateTime.UtcNow.AddDays(-35);
        }

        public ActionResult Update(ToDoTask task)
        {
            using (IDocumentSession session = _store.OpenSession())
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
            using (IDocumentSession session = _store.OpenSession())
            {
                foreach (ToDoTask toDoTask in tasks)
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
            using (IDocumentSession session = _store.OpenSession())
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
            using (IDocumentSession session = _store.OpenSession())
            {
                IRavenQueryable<ToDoTask> tasks = session.Query<ToDoTask>();
                var payload = new {items = tasks.OrderByDescending(s => s.dateCreated).ToList()};

                return Json(payload, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        private DateTime GenerateRandomDate(DateTime from, DateTime to)
        {
            TimeSpan range = to - from;

            var randTimeSpan = new TimeSpan((long) (Rnd.NextDouble()*range.Ticks));

            return from + randTimeSpan;
        }

        private int GenerateRandomInteger()
        {
            return Rnd.Next(0, 100);
        }

    }
}