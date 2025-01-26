using Backend.Data;
using Backend.DTO;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : Controller
    {

        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }


        [HttpPost("register")]
        public async Task<IActionResult> register(AccountDbContext db, RegisterAccountDTO new_acc)
        {
            // Search for entereed email into the DB;
            var foundMail = db.accounts.SingleOrDefault(_dbAcc => _dbAcc.email.Equals(new_acc.email));
            // Check if inputs are empty or if the email is already registred
            if ((!string.IsNullOrWhiteSpace(new_acc.email) && !string.IsNullOrWhiteSpace(new_acc.password) && !string.IsNullOrWhiteSpace(new_acc.username))
                && foundMail == null)
            {
                string hashedPass = BCrypt.Net.BCrypt.HashPassword(new_acc.password);
                Account acc = new Account(new_acc.username, new_acc.email.ToLower(), hashedPass);
                Console.WriteLine(acc);
                await db.accounts.AddAsync(acc);
                await db.SaveChangesAsync();
                return StatusCode(200);
            }
            else return StatusCode(500);
        }

        [HttpPost("login")]
        public async Task<IActionResult> login(AccountDbContext db, LoginAccountDTO acc)
        {
            var foundAcc =  db.accounts.FirstOrDefaultAsync(_dbAcc => _dbAcc.email.Equals(acc.email));

            if ((!string.IsNullOrWhiteSpace(acc.email) && !string.IsNullOrWhiteSpace(acc.password))
                && BCrypt.Net.BCrypt.Verify(acc.password, foundAcc.Result.password))
            {
                HttpContext.Session.SetString("guid", foundAcc.Result.guid);
                return StatusCode(200); ;
            }
            else
                return StatusCode(500);
        }
    }
}
