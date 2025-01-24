using System.Data.SqlTypes;

namespace Backend.Models
{
    public class Account
    {
        [System.ComponentModel.DataAnnotations.Key]
        public string guid { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public DateTime createdAt { get; set; }

        public Account( string username, string password, string email)
        {
            guid = Guid.NewGuid().ToString();
            username = username;
            password = password;
            email = email;
            createdAt = DateTime.Now;
        }
    }
}
