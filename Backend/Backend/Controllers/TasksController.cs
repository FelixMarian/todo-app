using System.Security.Claims;
using Backend.Data;
using Backend.DTO;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;

namespace Backend.Controllers
{

    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : Controller
    {

 

        [HttpGet("index")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("add")]
        public async Task<IActionResult> addTask(TasksDbContext _db, TaskAddDTO taskAdd)
        {
            var user_id = User.Claims.FirstOrDefault(c => c.Type == "guid")?.Value;
            _Task newTask = new _Task(user_id, taskAdd.title, taskAdd.description, taskAdd.Deadline);
            if(newTask != null)
            {
                await _db.AddAsync(newTask);
                await _db.SaveChangesAsync();
                return StatusCode(200);
            }
            else
            {
                return StatusCode(500);
            }
        }

        [HttpGet("get")]
        public async Task<IActionResult> getTasks(TasksDbContext _db)
        {
            var user_id = User.Claims.FirstOrDefault(c => c.Type == "guid")?.Value;
            var tasksList = _db.Tasks.Where(task => task.user_id == user_id).ToList() ;
            if (tasksList is null)
                return StatusCode(500);
            else
                return Ok(tasksList);

        }
    }
}
