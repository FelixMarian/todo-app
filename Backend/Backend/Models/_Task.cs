using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class _Task
    {
        [Key]
        public string guid { get; set; }
        public string user_id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public string Created_At { get; set; }
        public DateTime Deadline { get; set; }

        public _Task(string user_id, string title, string description, DateTime deadline)
        {
            this.guid = Guid.NewGuid().ToString();
            this.user_id = user_id;
            this.title = title;
            this.description = description;
            Created_At = DateTime.Now.ToString();
            Deadline = deadline;
        }
    }
}
