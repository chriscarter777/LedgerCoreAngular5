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
     public class CategoriesControllerTests
    {
          [Fact]
          public void GetCategoriesIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.GetCategories();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category[]>(res.Value);
          }

          [Fact]
          public void GetCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.GetCategory(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }

          [Fact]
          public void PutCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.PutCategory(new Category());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }

          [Fact]
          public void PostCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.PostCategory(new Category());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }

          [Fact]
          public void DeleteCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.DeleteCategory(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }
     }  //test class
}  //namespace
