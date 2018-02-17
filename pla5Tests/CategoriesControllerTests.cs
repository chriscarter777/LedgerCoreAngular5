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
          public async Task GetCategoriesIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetCategories();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category[]>(res.Value);
          }

          [Fact]
          public async Task GetCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetCategory(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }

          [Fact]
          public async Task PutCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PutCategory(new Category());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }

          [Fact]
          public async Task PostCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PostCategory(new Category());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }

          [Fact]
          public async Task DeleteCategoryIsOk()
          {
               var mockLogger = Mocks.ILogger<CategoriesController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new CategoriesController(mockLogger.Object, mockRepo.Object);

               var result = await controller.DeleteCategory(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Category>(res.Value);
          }
     }  //test class
}  //namespace
