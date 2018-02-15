using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using Moq;
using pla5.Controllers;
using pla5.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace pla5Tests
{
     public class AccountsControllerTests
    {
          [Fact]
          public void GetAccountsIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new AccountsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.GetAccounts();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account[]>(res.Value);
          }

          [Fact]
          public void GetAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new AccountsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.GetAccount(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }

          [Fact]
          public void PutAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new AccountsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.PutAccount(new Account());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }

          [Fact]
          public void PostAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new AccountsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.PostAccount(new Account());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }

          [Fact]
          public void DeleteAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<AccountsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new AccountsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.DeleteAccount(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Account>(res.Value);
          }
     }  //test class
}  //namespace
