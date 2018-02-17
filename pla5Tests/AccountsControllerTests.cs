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
     public class AccountsControllerTests
     {
          [Fact]
          public async Task GetAccountsIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new AccountsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetAccounts();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account[]>(res.Value);
          }

          [Fact]
          public async Task GetAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new AccountsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetAccount(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }

          [Fact]
          public async Task PutAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new AccountsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PutAccount(new Account());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }

          [Fact]
          public async Task PostAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new AccountsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PostAccount(new Account());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }

          [Fact]
          public async Task DeleteAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();

               var controller = new AccountsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.DeleteAccount(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }
     }  //test class
}  //namespace
