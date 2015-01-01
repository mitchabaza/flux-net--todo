using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Raven.Client;
using Raven.Client.Document;
using Raven.Client.Embedded;
using Raven.Client.Extensions;
using Raven.Database.Config;
using Raven.Database.Server;
using ReactJs.Controllers;

namespace ReactJs
{
    public class AutoFac
    {
        public static void Init()
        {
            var builder = new ContainerBuilder();
            builder.RegisterControllers(typeof(TaskController).Assembly);
            builder.Register<IDocumentStore>(c =>
            {

                var documentStore = new EmbeddableDocumentStore()
                {
                   
                    DataDirectory = @"~/App_Data",
                    UseEmbeddedHttpServer =true,
                    Configuration = new RavenConfiguration()
                    {
                        DatabaseName = "ToDo",
                        Port = 1234
                    }
                };
                NonAdminHttp.EnsureCanListenToWhenInNonAdminContext(1234);
                documentStore.Initialize();
                return documentStore;


            }
                ).As<IDocumentStore>().SingleInstance();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(builder.Build()));

        }
    }
}