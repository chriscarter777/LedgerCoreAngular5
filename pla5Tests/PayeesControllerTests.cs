using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using Moq;
using pla5.Controllers;
using pla5.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Principal;
using System.Web;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace pla5Tests
{
     public class PayeesControllerTests
     {
          [Fact]
          public async Task GetPayeesIsOk()
          {
               var mockLogger = Mocks.ILogger<PayeesController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new PayeesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetPayees();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Payee[]>(res.Value);
          }

          [Fact]
          public async Task GetPayeeIsOk()
          {
               var mockLogger = Mocks.ILogger<PayeesController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new PayeesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetPayee(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Payee>(res.Value);
          }

          [Fact]
          public async Task PutPayeeIsOk()
          {
               var mockLogger = Mocks.ILogger<PayeesController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new PayeesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PutPayee(new Payee());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Payee>(res.Value);
          }

          [Fact]
          public async Task PostPayeeIsOk()
          {
               var mockLogger = Mocks.ILogger<PayeesController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new PayeesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PostPayee(new Payee());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Payee>(res.Value);
          }

          [Fact]
          public async Task DeletePayeeIsOk()
          {
               var mockLogger = Mocks.ILogger<PayeesController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new PayeesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.DeletePayee(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Payee>(res.Value);
          }
     }  //test class
}  //namespace
