using System;

namespace ReactJs
{
    // ReSharper disable InconsistentNaming
    public class ToDoTask
    {
        public Guid Id { get; set; }
        public string text { get; set; }
        public bool completed { get; set; }

        public string date
        {
            //get { return dateCreated.ToString("yyyy-MM-ddTHH:mm:sszzz"); }
            get { return dateCreated.ToString("yyyy-MM-dd HH:mm:ss"); }
            set{}
        }
        public DateTime dateCreated { get; set; } 
    }
}