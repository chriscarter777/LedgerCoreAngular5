using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using pla5.Data;
using pla5.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System.IO;

namespace pla5.Controllers
{
    [Produces("application/json")]
    [Route("api/Payees")]
    public class PayeesController : Controller
    {
        private readonly ILogger _logger;
        private readonly IDataRepository _repo;

        public PayeesController(ILogger<PayeesController> logger, IDataRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }  //ctor

        // GET: api/Payees
        [HttpGet]
        public async Task<IActionResult> GetPayees()
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                IEnumerable<Payee> payees = await _repo.GetPayeesAsync();

                if (payees == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(payees);
                }
            }
            catch (Exception e)
            {
                HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
                return NotFound();
            }
        } //GetPayees

        // GET: api/Payees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPayee([FromRoute] int id)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Payee payee = await _repo.GetPayeeAsync(id);

                if (payee == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(payee);
                }
            }
            catch (Exception e)
            {
                HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
                return NotFound();
            }
        } //GetPayee

        // PUT: api/Payees/5
        [HttpPut]
        public async Task<IActionResult> PutPayee([FromBody] Payee payee)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Payee response = await _repo.UpdatePayeeAsync(payee);

                if (response == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(response);
                }
            }
            catch (Exception e)
            {
                HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
                return NotFound();
            }
        } //PutPayee

        // POST: api/Payees
        [HttpPost]
        public async Task<IActionResult> PostPayee([FromBody] Payee payee)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Payee response = await _repo.AddPayeeAsync(payee);

                if (response == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(response);

                }
            }
            catch (Exception e)
            {
                HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
                return NotFound();
            }
        } //PostPayee

        // DELETE: api/Payees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePayee([FromRoute] int id)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                Payee response = await _repo.DeletePayeeAsync(id);

                if (response == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(response);
                }
            }
            catch (Exception e)
            {
                HandleException(e, ControllerContext.RouteData.Values["action"].ToString(), "", false);
                return NotFound();
            }
        } //DeletePayee

        #region Infrastructure
        private void HandleException(Exception e, string method, string userMessage, bool redirect)
        {
            _logger.LogError("{0}: An error occurred in PayeesController/{1}.\n{2}\n{3}", DateTime.Now, method, e.Message, userMessage);
            if (redirect)
            {
                RedirectToAction("Error");
            }
        }  //HandleException
        #endregion
    }  //controller
}  //namespace
