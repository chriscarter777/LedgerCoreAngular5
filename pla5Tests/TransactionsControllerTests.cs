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
     public class TransactionsControllerTests
    {
          [Fact]
          public async Task GetTransactionsIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetTransactions();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction[]>(res.Value);
          }

          [Fact]
          public async Task GetTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.GetTransaction(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }

          [Fact]
          public async Task PutTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PutTransaction(new Transaction());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }

          [Fact]
          public async Task PostTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.PostTransaction(new Transaction());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }

          [Fact]
          public async Task DeleteTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object);

               var result = await controller.DeleteTransaction(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }
     }  //test class
}  //namespace
