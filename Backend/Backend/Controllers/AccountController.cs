using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> register(AccountDbContext db, string username, string email, string password)
        {
            Account acc = new Account(username, email, password);
            db.AddAsync(acc);
            db.SaveChangesAsync();
            return Ok();
        }
    }
}
