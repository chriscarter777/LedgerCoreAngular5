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
          public async Task GetAppUsersIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockUserManager.Object);

               var result = await controller.GetAppUsers();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<AppUser[]>(res.Value);
          }

          [Fact]
          public async Task GetAppUserIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockUserManager.Object);

               var result = await controller.GetAppUser("tester");

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<AppUser>(res.Value);
          }

          [Fact]
          public async Task MakeAdminIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockUserManager.Object);

               var result = await controller.MakeAdminAsync("tester");

               var res = Assert.IsType<OkResult>(result);
          }

          [Fact]
          public async Task UnmakeAdminIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockUserManager.Object);

               var result = await controller.UnmakeAdminAsync("tester");

               var res = Assert.IsType<OkResult>(result);
          }

          [Theory]
          [InlineData("Password_123")]
          [InlineData("password_123")]
          [InlineData("Password123")]
          [InlineData("Password_")]
          public async Task ResetPasswordIsOk(string value)
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockUserManager.Object);
               Assert.IsType<OkResult>(await controller.ResetPasswordAsync("tester", "token", value));
          }

          [Fact]
          public async Task DeleteUserIsOk()
          {
               var mockLogger = Mocks.ILogger<UsersController>();
               var mockUserManager = Mocks.IUserManager();
               var controller = new UsersController(mockLogger.Object, mockUserManager.Object);

               var result = await controller.DeleteUser("tester");

               var res = Assert.IsType<OkObjectResult>(result);
          }
     }  //test class
}  //namespace
