using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using Moq;
using pla5.Controllers;
using pla5.Data;
using pla5.Models;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace pla5Tests
{
    public class HomeControllerTests
    {
          [Fact]
          public async Task IndexReturnsViewForAnon()
          {
               var mockLogger = Mocks.ILogger<HomeController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRepo = Mocks.IDataRepository();
               var controller = new HomeController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = await controller.Index();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Index", res.ViewName);
          }

          [Fact]
          public async Task IndexSignsOutAndReturnsViewForUser()
          {
               var mockLogger = Mocks.ILogger<HomeController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRepo = Mocks.IDataRepository();
               var controller = new HomeController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = await controller.Index();

               mockSIManager.Verify(mock => mock.SignOutAsync(), Times.Once());
               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Index", res.ViewName);
          }

          [Fact]
          public void MainRedirectsToIndexForAnon()
          {
               var mockLogger = Mocks.ILogger<HomeController>();
               var mockSIManager = Mocks.ISignInManagerAnon();
               var mockRepo = Mocks.IDataRepository();
               var controller = new HomeController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.Main();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Index", res.ViewName);
          }

          [Fact]
          public void MainReturnsViewForUser()
          {
               var mockLogger = Mocks.ILogger<HomeController>();
               var mockSIManager = Mocks.ISignInManager();
               var mockRepo = Mocks.IDataRepository();
               var controller = new HomeController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.Main();

               var res = Assert.IsType<ViewResult>(result);
               Assert.Equal("Main", res.ViewName);
          }

     }  //test class
}  //namespace
