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
using Microsoft.AspNetCore.Builder;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Options;

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
               var mockUM = IUserManager();
               var mockHCA = new Mock<IHttpContextAccessor>();
               var mockCPF = new Mock<IUserClaimsPrincipalFactory<IdentityUser>>();
               var mockIO = new Mock<IOptions<IdentityOptions>>();
               var mockL = new Mock<ILogger<SignInManager<IdentityUser>>>();
               var mockASP = new Mock<IAuthenticationSchemeProvider> ();

               var mockSignInManager = new Mock<SignInManager<IdentityUser>>(mockUM.Object, mockHCA.Object, mockCPF.Object, mockIO.Object, mockL.Object, mockASP.Object);

               //mockSignInManager.SetupProperty(mock => mock.Context.User.Identity.Name).Returns("tester");
               //mockSignInManager.SetupGet(mock => mock.Context.User.Identity.IsAuthenticated).Returns(true);
               //mockSignInManager.SetupGet(mock => mock.Context.User.IsInRole("Administrator")).Returns(false);
               mockSignInManager.Setup(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).Returns(Task.FromResult(SignInResult.Success));
               mockSignInManager.Setup(mock => mock.IsSignedIn(It.IsAny<ClaimsPrincipal>())).Returns(true);

               return mockSignInManager;
          }

          internal static Mock<SignInManager<IdentityUser>> ISignInManagerAdmin()
          {
               var mockUM = IUserManager();
               var mockHCA = new Mock<IHttpContextAccessor>();
               var mockCPF = new Mock<IUserClaimsPrincipalFactory<IdentityUser>>();
               var mockIO = new Mock<IOptions<IdentityOptions>>();
               var mockL = new Mock<ILogger<SignInManager<IdentityUser>>>();
               var mockASP = new Mock<IAuthenticationSchemeProvider>();

               var mockSignInManager = new Mock<SignInManager<IdentityUser>>(mockUM.Object, mockHCA.Object, mockCPF.Object, mockIO.Object, mockL.Object, mockASP.Object);

               //mockSignInManager.Setup(mock => mock.Context.User.Identity.Name).Returns("tester");
               //mockSignInManager.Setup(mock => mock.Context.User.Identity.IsAuthenticated).Returns(true);
               //mockSignInManager.Setup(mock => mock.Context.User.IsInRole("Administrator")).Returns(true);
               mockSignInManager.Setup(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).Returns(Task.FromResult(SignInResult.Success));
               mockSignInManager.Setup(mock => mock.IsSignedIn(It.IsAny<ClaimsPrincipal>())).Returns(true);

               return mockSignInManager;
          }

          internal static Mock<SignInManager<IdentityUser>> ISignInManagerAnon()
          {
               var mockUM = IUserManager();
               var mockHCA = new Mock<IHttpContextAccessor>();
               var mockCPF = new Mock<IUserClaimsPrincipalFactory<IdentityUser>>();
               var mockIO = new Mock<IOptions<IdentityOptions>>();
               var mockL = new Mock<ILogger<SignInManager<IdentityUser>>>();
               var mockASP = new Mock<IAuthenticationSchemeProvider>();

               var mockSignInManager = new Mock<SignInManager<IdentityUser>>(mockUM.Object, mockHCA.Object, mockCPF.Object, mockIO.Object, mockL.Object, mockASP.Object);

               //mockSignInManager.Setup(mock => mock.Context.User.Identity.Name).Returns("tester");
               //mockSignInManager.Setup(mock => mock.Context.User.Identity.IsAuthenticated).Returns(false);
               //mockSignInManager.Setup(mock => mock.Context.User.IsInRole("Administrator")).Returns(false);
               mockSignInManager.Setup(mock => mock.PasswordSignInAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<bool>(), It.IsAny<bool>())).Returns(Task.FromResult(SignInResult.Success));
               mockSignInManager.Setup(mock => mock.IsSignedIn(It.IsAny<ClaimsPrincipal>())).Returns(false);

               return mockSignInManager;
          }

          internal static Mock<UserManager<IdentityUser>> IUserManager()
          {
               var mockUS = new Mock<IUserStore<IdentityUser>>();
               var mockO = new Mock<IOptions<IdentityOptions>>();
               var mockPH = new Mock<IPasswordHasher<IdentityUser>>();
               var mockUV = new IUserValidator<IdentityUser>[0];
               var mockPV = new IPasswordValidator<IdentityUser>[0];
               var mockLN = new Mock<ILookupNormalizer>();
               var mockIED = new Mock<IdentityErrorDescriber>();
               var mockSP = new Mock<IServiceProvider>();
               var mockL = new Mock<ILogger<UserManager<IdentityUser>>>();

               var mockUM = new Mock<UserManager<IdentityUser>>(mockUS.Object, mockO.Object, mockPH.Object, mockUV, mockPV, mockLN.Object, mockIED.Object, mockSP.Object, mockL.Object);

               mockUM.Setup(mock => mock.Users).Returns(new IdentityUser[0].AsQueryable());
               mockUM.Setup(mock => mock.CreateAsync(It.IsAny<IdentityUser>(), It.IsAny<string>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), It.IsAny<string>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.IsInRoleAsync(It.IsAny<IdentityUser>(), It.IsAny<string>())).Returns(Task.FromResult(true));
               mockUM.Setup(mock => mock.FindByNameAsync(It.IsAny<string>())).Returns(Task.FromResult(new IdentityUser()));
               mockUM.Setup(mock => mock.FindByIdAsync(It.IsAny<string>())).Returns(Task.FromResult(new IdentityUser()));
               mockUM.Setup(mock => mock.AddClaimAsync(It.IsAny<IdentityUser>(), It.IsAny<Claim>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.AddToRoleAsync(It.IsAny<IdentityUser>(), It.IsAny<string>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.RemoveClaimAsync(It.IsAny<IdentityUser>(), It.IsAny<Claim>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.RemoveFromRoleAsync(It.IsAny<IdentityUser>(), It.IsAny<string>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.ResetPasswordAsync(It.IsAny<IdentityUser>(), It.IsAny<string>(), It.IsAny<string>())).Returns(Task.FromResult(IdentityResult.Success));
               mockUM.Setup(mock => mock.DeleteAsync(It.IsAny<IdentityUser>())).Returns(Task.FromResult(IdentityResult.Success));

               return mockUM;
          }

          internal static Mock<RoleManager<IdentityRole>> IRoleManager()
          {
               var mockRS = new Mock<IRoleStore<IdentityRole>>();
               var mockRV = new IRoleValidator<IdentityRole>[0];
               var mockLN = new Mock<ILookupNormalizer>();
               var mockIED = new Mock<IdentityErrorDescriber>();
               var mockL = new Mock<ILogger<RoleManager<IdentityRole>>>();

               var mockRM = new Mock<RoleManager<IdentityRole>>(mockRS.Object, mockRV, mockLN.Object, mockIED.Object, mockL.Object);

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

               mockRepo.Setup(repo => repo.AddPayeeAsync(It.IsAny<Payee>())).Returns(Task.FromResult(new Payee()));
               mockRepo.Setup(repo => repo.DeletePayeeAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Payee()));
               mockRepo.Setup(repo => repo.GetPayeeAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Payee()));
               mockRepo.Setup(repo => repo.GetPayeesAsync()).Returns(Task.FromResult(new Payee[0]));
               mockRepo.Setup(repo => repo.UpdatePayeeAsync(It.IsAny<Payee>())).Returns(Task.FromResult(new Payee()));

               mockRepo.Setup(repo => repo.AddTransactionAsync(It.IsAny<Transaction>())).Returns(Task.FromResult(new Transaction()));
               mockRepo.Setup(repo => repo.DeleteTransactionAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Transaction()));
               mockRepo.Setup(repo => repo.GetTransactionAsync(It.Is<int>(x => x >= 0))).Returns(Task.FromResult(new Transaction()));
               mockRepo.Setup(repo => repo.GetTransactionsAsync()).Returns(Task.FromResult(new Transaction[0]));
               mockRepo.Setup(repo => repo.UpdateTransactionAsync(It.IsAny<Transaction>())).Returns(Task.FromResult(new Transaction()));
               return mockRepo;
          }

     }  //class

     public class FakeUserManager : UserManager<IdentityUser>
     {
          public FakeUserManager()
              : base(new Mock<IUserStore<IdentityUser>>().Object,
                    new Mock<IOptions<IdentityOptions>>().Object,
                    new Mock<IPasswordHasher<IdentityUser>>().Object,
                    new IUserValidator<IdentityUser>[0],
                    new IPasswordValidator<IdentityUser>[0],
                    new Mock<ILookupNormalizer>().Object,
                    new Mock<IdentityErrorDescriber>().Object,
                    new Mock<IServiceProvider>().Object,
                    new Mock<ILogger<UserManager<IdentityUser>>>().Object)
          { }

     }

     public class FakeSignInManager : SignInManager<IdentityUser>
     {
          public FakeSignInManager()
              : base(new Mock<FakeUserManager>().Object,
                    new HttpContextAccessor(),
                    new Mock<IUserClaimsPrincipalFactory<IdentityUser>>().Object,
                    new Mock<IOptions<IdentityOptions>>().Object,
                    new Mock<ILogger<SignInManager<IdentityUser>>>().Object,
                    new Mock<IAuthenticationSchemeProvider>().Object)
          { }
     }
}  //namespace
