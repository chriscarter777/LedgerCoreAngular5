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
          public void LoginGetSignsOutAndReturnsViewForUser()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Login();

               mockSIManager.Verify(mock => mock.SignOutAsync(), Times.Once());
               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Login", res.ViewName);
          }

          [Fact]
          public void LoginGetReturnsViewForAnon()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Login();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Login", res.ViewName);
          }

          [Fact]
          public void LoginPostSignsInAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               LoginViewModel model = new LoginViewModel();
               string returnUrl = "Main";
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Login(model, returnUrl);

               mockSIManager.Verify(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>()), Times.Once());
               var res = Assert.IsType<ViewResult>(result);
          }


          [Fact]
          public void LogoutSignsOutAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Logout();

               mockSIManager.Verify(mock => mock.SignOutAsync(), Times.Once());
               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal(nameof(HomeController.Index), res.ViewName);
          }

          [Fact]
          public void RegisterGetReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Register();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Register", res.ViewName);
          }

          [Fact]
          public void RegisterPostCreatesUserAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               RegisterViewModel model = new RegisterViewModel {UserName = "tester", Password = "Password_123" };
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Register(model);

               mockUserManager.Verify(mock => mock.CreateAsync(It.IsAny<IdentityUser>(), It.IsAny<string>()), Times.Once());
               mockUserManager.Verify(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), "Administrator"), Times.Never());
               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Login", res.ViewName);
          }

          [Fact]
          public void RegisterPostCreatesAdminAndReturnsView()
          {
               var mockLogger = Mocks.ILogger<AccessController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRoleManager = Mocks.IRoleManager();
               var mockUserManager = Mocks.IUserManager();
               RegisterViewModel model = new RegisterViewModel { UserName = "tester", Password = "Password_123", Administrator = true };
               var controller = new AccessController(mockLogger.Object, mockRoleManager.Object, mockSIManager.Object, mockUserManager.Object);

               var result = controller.Register(model);

               mockUserManager.Verify(mock => mock.CreateAsync(It.IsAny<IdentityUser>(), It.IsAny<string>()), Times.Once());
               mockUserManager.Verify(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), "Administrator"), Times.Once());
               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Login", res.ViewName);
          }

     }  //test class
}  //namespace
