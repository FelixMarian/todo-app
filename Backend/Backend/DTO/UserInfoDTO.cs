namespace Backend.DTO
{
    public class UserInfoDTO
    {
        public string mail { get; set; }
        public string createdAt { get; set; }
        public string username { get; set; }

        public UserInfoDTO(string mail, string createdAt, string username)
        {
            this.mail = mail;
            this.createdAt = createdAt;
            this.username = username;
        }
    }
}
