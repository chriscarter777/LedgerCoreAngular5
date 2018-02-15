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
     public class UsersControllerTests
    {
          [Fact]
          public void GetAppUsersIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.GetAppUsers();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<AppUser[]>(res.Value);
          }

          [Fact]
          public void GetAppUserIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockSIManager.Object, mockUserManager.Object);
               var result = controller.GetAppUser("tester");

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<AppUser>(res.Value);
          }

          [Fact]
          public void MakeAdminIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockSIManager.Object, mockUserManager.Object);
               var result = controller.MakeAdminAsync("tester");

               var res = Assert.IsType<OkObjectResult>(result);
          }

          [Fact]
          public void UnmakeAdminIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockSIManager.Object, mockUserManager.Object);
               var result = controller.UnmakeAdminAsync("tester");

               var res = Assert.IsType<OkObjectResult>(result);
          }

          [Theory]
          [InlineData("Password_123")]
          [InlineData("password_123")]
          [InlineData("Password123")]
          [InlineData("Password_")]
          public void ResetPasswordIsOk(string value)
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockSIManager.Object, mockUserManager.Object);
               Assert.IsType<OkObjectResult>(controller.ResetPasswordAsync("tester", "token", value));
          }

          [Fact]
          public void DeleteAccountIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.DeleteUser("tester");

               var res = Assert.IsType<OkObjectResult>(result);
          }
     }  //test class
}  //namespace
