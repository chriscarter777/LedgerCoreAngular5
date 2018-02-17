using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pla5.Data;
using pla5.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;

namespace pla5.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger _logger;
        private readonly IDataRepository _repo;
        private readonly SignInManager<IdentityUser> _signInManager;

        public HomeController(ILogger<HomeController> logger, IDataRepository repo, SignInManager<IdentityUser> signInManager)
        {
            _logger = logger;
            _repo = repo;
            _signInManager = signInManager;
        }  //ctor

        public async Task<IActionResult> Index()
        {
            if (_signInManager.IsSignedIn(User))
            {
                await _signInManager.SignOutAsync();
            }
            return View("Index");
        }

        [Authorize]
        public IActionResult Main()
        {
            return View("Main");
        }

        #region Infrastructure
        private void HandleException(Exception e, string method, string userMessage, bool redirect)
        {
            _logger.LogError("{0}: An error occurred in HomeController/{1.\n{2}\n{3}", DateTime.Now, method, e.Message, userMessage);
            if (redirect)
            {
                RedirectToAction("Error");
            }
        }  //HandleException

        public IActionResult Error()
        {
            //this method is the target of the --app.UseExceptionHandler("/Home/Error");-- middleware configured in Startup.cs, called for application exceptions
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        [Route("Home/403")]
        public IActionResult Status403()
        {
            //this method is the target of the --app.UseStatusCodePagesWithRedirects("/Home/{0}");-- middleware configured in Startup.cs
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View("403");
        }

        [Route("Home/404")]
        public IActionResult Status404()
        {
            //this method is the target of the --app.UseStatusCodePagesWithRedirects("/Home/{0}");-- middleware configured in Startup.cs
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View("404");
        }

        [Route("Home/500")]
        public IActionResult Status500()
        {
            //this method is the target of the --app.UseStatusCodePagesWithRedirects("/Home/{0}");-- middleware configured in Startup.cs
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View("500");
        }
        #endregion
    }  //controller
}  //namespace
