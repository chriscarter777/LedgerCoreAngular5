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
using System.Security.Claims;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Linq;

namespace pla5Tests
{
    static class Mocks
    {
          internal static Mock<ILogger<T>> ILogger<T>()
          {
               return new Mock<ILogger<T>>();
          }

          internal static Mock<SignInManager<IdentityUser>> ISignInManager()
          {
               var mockSIM = new Mock<SignInManager<IdentityUser>>(MockBehavior.Strict);
               mockSIM.Setup(mock => mock.Context.User.Identity.Name).Returns("tester");
               mockSIM.Setup(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).Returns(Task.FromResult(new SignInResult()));
               mockSIM.Setup(mock => mock.IsSignedIn(It.IsAny<ClaimsPrincipal>())).Returns(true);
               mockSIM.Setup(mock => mock.Context.User.Identity.IsAuthenticated).Returns(true);
               mockSIM.Setup(mock => mock.Context.User.IsInRole("Administrator")).Returns(false);
               return mockSIM;
          }

          internal static Mock<SignInManager<IdentityUser>> ISignInManagerAdmin()
          {
               var mockSIM = new Mock<SignInManager<IdentityUser>>(MockBehavior.Strict);
               mockSIM.Setup(mock => mock.Context.User.Identity.Name).Returns("tester");
               mockSIM.Setup(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).Returns(Task.FromResult(new SignInResult()));
               mockSIM.Setup(mock => mock.IsSignedIn(It.IsAny<ClaimsPrincipal>())).Returns(true);
               mockSIM.Setup(mock => mock.Context.User.Identity.IsAuthenticated).Returns(true);
               mockSIM.Setup(mock => mock.Context.User.IsInRole("Administrator")).Returns(true);
               return mockSIM;
          }

          internal static Mock<SignInManager<IdentityUser>> ISignInManagerAnon()
          {
               var mockSIM = new Mock<SignInManager<IdentityUser>>(MockBehavior.Strict);
               mockSIM.Setup(mock => mock.Context.User.Identity.Name).Returns("tester");
               mockSIM.Setup(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).Returns(Task.FromResult(new SignInResult()));
               mockSIM.Setup(mock => mock.IsSignedIn(It.IsAny<ClaimsPrincipal>())).Returns(false);
               mockSIM.Setup(mock => mock.Context.User.Identity.IsAuthenticated).Returns(false);
               mockSIM.Setup(mock => mock.Context.User.IsInRole("Administrator")).Returns(false);
               return mockSIM;
          }


          internal static Mock<UserManager<IdentityUser>> IUserManager()
          {
               var mockUM = new Mock<UserManager<IdentityUser>>(MockBehavior.Strict);
               mockUM.Setup(mock => mock.Users).Returns(new IdentityUser[0].AsQueryable());
               mockUM.Setup(mock => mock.CreateAsync(It.IsAny<IdentityUser>(), It.IsAny<string>())).Returns(Task.FromResult(new IdentityResult()));
               mockUM.Setup(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), "Administrator")).Returns(Task.FromResult(new IdentityResult()));
               mockUM.Setup(mock => mock.IsInRoleAsync(It.IsAny<IdentityUser>(), "Adminstrator")).Returns(Task.FromResult(true));
               mockUM.Setup(mock => mock.FindByNameAsync(It.IsAny<string>())).Returns(Task.FromResult(new IdentityUser()));
               mockUM.Setup(mock => mock.FindByIdAsync(It.IsAny<string>())).Returns(Task.FromResult(new IdentityUser()));
               mockUM.Setup(mock => mock.AddClaimAsync(It.IsAny<IdentityUser>(), new Claim(ClaimTypes.Role, "Administrator"))).Returns(Task.FromResult(new IdentityResult()));
               mockUM.Setup(mock => mock.RemoveClaimAsync(It.IsAny<IdentityUser>(), new Claim(ClaimTypes.Role, "Administrator"))).Returns(Task.FromResult(new IdentityResult()));
               mockUM.Setup(mock => mock.ResetPasswordAsync(It.IsAny<IdentityUser>(), It.IsAny<string>(), It.IsAny<string>())).Returns(Task.FromResult(new IdentityResult()));
               mockUM.Setup(mock => mock.DeleteAsync(It.IsAny<IdentityUser>())).Returns(Task.FromResult(new IdentityResult()));
               return mockUM;
          }

          internal static Mock<RoleManager<IdentityRole>> IRoleManager()
          {
               var mockRM = new Mock<RoleManager<IdentityRole>>(MockBehavior.Strict);
               mockRM.Setup(mock => mock.Roles).Returns(new IdentityRole[0].AsQueryable());
               return mockRM;
          }

          internal static Mock<IDataRepository> IDataRepository()
          {
               var mockRepo = new Mock<IDataRepository>(MockBehavior.Strict);
               mockRepo.Setup(repo => repo.AddAccountAsync(It.IsAny<Account>())).Returns(Task.FromResult(new Account()));
               mockRepo.Setup(repo => repo.DeleteAccountAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Account()));
               mockRepo.Setup(repo => repo.GetAccountAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Account()));
               mockRepo.Setup(repo => repo.GetAccountsAsync()).Returns(Task.FromResult(new Account[0]));
               mockRepo.Setup(repo => repo.UpdateAccountAsync(It.IsAny<Account>())).Returns(Task.FromResult(new Account()));
               mockRepo.Setup(repo => repo.AddCategoryAsync(It.IsAny<Category>())).Returns(Task.FromResult(new Category()));
               mockRepo.Setup(repo => repo.DeleteCategoryAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Category()));
               mockRepo.Setup(repo => repo.GetCategoriesAsync()).Returns(Task.FromResult(new Category[0]));
               mockRepo.Setup(repo => repo.GetCategoryAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Category()));
               mockRepo.Setup(repo => repo.UpdateCategoryAsync(It.IsAny<Category>())).Returns(Task.FromResult(new Category()));
               mockRepo.Setup(repo => repo.AddTransactionAsync(It.IsAny<Transaction>())).Returns(Task.FromResult(new Transaction()));
               mockRepo.Setup(repo => repo.DeleteTransactionAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Transaction()));
               mockRepo.Setup(repo => repo.GetTransactionAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Transaction()));
               mockRepo.Setup(repo => repo.GetTransactionsAsync()).Returns(Task.FromResult(new Transaction[0]));
               mockRepo.Setup(repo => repo.UpdateTransactionAsync(It.IsAny<Transaction>())).Returns(Task.FromResult(new Transaction()));
               return mockRepo;
          }

     }  //class
}  //namespace
