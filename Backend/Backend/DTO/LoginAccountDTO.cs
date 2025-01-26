namespace Backend.DTO
{
    public class LoginAccountDTO
    {
        public string email { get; set; }
        public string password { get; set; }

        public LoginAccountDTO(string email, string password)
        {
            this.email = email;
            this.password = password;
        }
    }
}
