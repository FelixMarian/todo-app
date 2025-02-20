using System.Security.Claims;
using Backend.Data;
using Backend.DTO;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;

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

        [HttpGet("nextDl")]
        public IActionResult getNextDl(TasksDbContext _db)
        {
            var user_id = User.Claims.FirstOrDefault(c => c.Type == "guid")?.Value;
            var tasksList = _db.Tasks.Where(acc => acc.user_id == user_id).ToList();

            if(tasksList is not null)
            {
                var sortedTasks = tasksList.OrderBy(t => t.Deadline).ToList();
                DateTime today = DateTime.Now;
                foreach(_Task t in sortedTasks)
                {
                    if (DateTime.Compare(t.Deadline, today)>0)
                    {
                        return Ok(t.title);
                    }
                }
            }
            return Unauthorized();
        }

        [HttpGet("getFiveDl")]
        public IActionResult getFiveDl(TasksDbContext _db)
        {
            var user_id = User.Claims.FirstOrDefault(c => c.Type == "guid")?.Value;
            var tasksList = _db.Tasks.Where(t => t.user_id == user_id).ToList();
            string[] nextTasks = new string[5];
            if(tasksList is not null)
            {
                var sortedList = tasksList.OrderBy(c => c.Deadline);
                DateTime today = DateTime.Now;
                int k = 0;
                foreach(_Task t in sortedList)
                {
                    if (k <= 5 && DateTime.Compare(t.Deadline, today)>0)
                    {
                        nextTasks[k] = t.title;
                        k++;
                    }
                }
                return Ok(nextTasks);
            }
            return Unauthorized();
        }

        [HttpGet("overdue")]
        public IActionResult getOverdues(TasksDbContext _db)
        {
            var user_id = User.Claims.FirstOrDefault(c => c.Type == "guid")?.Value;
            var tasksList = _db.Tasks.Where(t => t.user_id == user_id).ToList();
            string[] overdues = new string[tasksList.Count()];
            int k = -1;
            if(tasksList is not null)
            {
                DateTime today = DateTime.Now;
                var sortedList = tasksList.OrderBy(c => c.Deadline);
                foreach(_Task t in sortedList)
                {
                    if(DateTime.Compare(t.Deadline, today) < 0)
                    {
                        k++;
                        overdues[k] = t.title;
                    }
                }
                return Ok(overdues);
            }
            return Unauthorized();
        }
    }
}
