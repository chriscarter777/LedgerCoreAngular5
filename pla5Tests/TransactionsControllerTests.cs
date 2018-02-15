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
          public void GetTransactionsIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.GetTransactions();

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction[]>(res.Value);
          }

          [Fact]
          public void GetTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.GetTransaction(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }

          [Fact]
          public void PutTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.PutTransaction(new Transaction());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }

          [Fact]
          public void PostTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.PostTransaction(new Transaction());

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }

          [Fact]
          public void DeleteTransactionIsOk()
          {
               var mockLogger = Mocks.ILogger<TransactionsController>();
               var mockRepo = Mocks.IDataRepository();
               var mockSIManager = Mocks.ISignInManager();
               var controller = new TransactionsController(mockLogger.Object, mockRepo.Object, mockSIManager.Object);

               var result = controller.DeleteTransaction(0);

               var res = Assert.IsType<OkObjectResult>(result);
               Assert.IsType<Transaction>(res.Value);
          }
     }  //test class
}  //namespace
