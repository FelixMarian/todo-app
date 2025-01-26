namespace Backend.DTO
{
    public class RegisterAccountDTO
    {
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }

        public RegisterAccountDTO(string username, string email, string password)
        {
            this.username = username;
            this.password = password;
            this.email = email;
        }
    }
}
