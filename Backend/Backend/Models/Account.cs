using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
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
        public string createdAt { get; set; }

        public Account( string username, string email, string password)
        {
            guid = Guid.NewGuid().ToString();
            this.username = username;
            this.password = password;
            this.email = email;
            createdAt = DateTime.Now.ToString();
        }
    }
}
