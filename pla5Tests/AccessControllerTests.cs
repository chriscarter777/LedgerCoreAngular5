using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using Moq;
using pla5.Controllers;
using pla5.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace pla5Tests
{
    public class AccessControllerTests
    {
          [Fact]
          public void AccessDeniedReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.AccessDenied();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("AccessDenied", res.ViewName);
          }

          [Fact]
          public async Task LoginGetSignsOutAndReturnsViewForUser()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Login();

               mockSIManager.Verify(mock => mock.SignOutAsync(), Times.Once());
               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Login", res.ViewName);
          }

          [Fact]
          public async Task LoginGetReturnsViewForAnon()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Login();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Login", res.ViewName);
          }

          [Fact]
          public async Task LoginPostSignsInAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               LoginViewModel model = new LoginViewModel{
                    UserName = "Tester", Password = "Password_123", RememberMe = false
               };
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Login(model);

               mockSIManager.Verify(mock => mock.PasswordSignInAsync(model.UserName, model.Password, model.RememberMe, false), Times.Once());
               var res = Assert.IsType<RedirectToActionResult>(result);
          }


          [Fact]
          public async Task LogoutSignsOutAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Logout();

               mockSIManager.Verify(mock => mock.SignOutAsync(), Times.Once());
               var res = Assert.IsType<RedirectToActionResult>(result);
               Assert.Equal("Index", res.ActionName);
          }

          [Fact]
          public async Task RegisterGetReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Register();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Register", res.ViewName);
          }

          [Fact]
          public async Task RegisterPostCreatesUserAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               RegisterViewModel model = new RegisterViewModel {UserName = "tester", Password = "Password_123", Administrator = false };
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Register(model);

               mockUserManager.Verify(mock => mock.CreateAsync(It.IsAny<IdentityUser>(), model.Password), Times.Once());
               mockUserManager.Verify(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), "Administrator"), Times.Never());
               var res = Assert.IsType<RedirectToActionResult>(result);
               Assert.Equal("Login", res.ActionName);
          }

          [Fact]
          public async Task RegisterPostCreatesAdminAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               RegisterViewModel model = new RegisterViewModel { UserName = "tester", Password = "Password_123", Administrator = true };
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = await controller.Register(model);

               mockUserManager.Verify(mock => mock.CreateAsync(It.IsAny<IdentityUser>(), It.IsAny<string>()), Times.Once());
               mockUserManager.Verify(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), "Administrator"), Times.Once());
               var res = Assert.IsType<RedirectToActionResult>(result);
               Assert.Equal("Login", res.ActionName);
          }

     }  //test class
}  //namespace
