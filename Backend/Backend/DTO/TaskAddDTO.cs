namespace Backend.DTO
{
    public class TaskAddDTO
    {
 
        public string title { get; set; }
        public string description { get; set; }
        public DateTime Deadline { get; set; }

        public TaskAddDTO(string title, string description, DateTime deadline)
        {
            this.title = title;
            this.description = description;
            this.Deadline = deadline;
        }
    }
}
