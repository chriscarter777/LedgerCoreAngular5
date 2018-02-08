using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using pla5.Models;

namespace pla5.Data
{
    public interface IDataRepository
    {
        Task<Account[]> GetAccountsAsync();
        Task<int> AddAccountAsync(Account a);
        Task<int> DeleteAccountAsync(int id);
        Task<int> UpdateAccountAsync(Account a);

        Task<Category[]> GetCategoriesAsync();
        Task<int> AddCategoryAsync(Category c);
        Task<int> DeleteCategoryAsync(int id);
        Task<int> UpdateCategoryAsync(Category c);

        Task<Transaction[]> GetTransactionsAsync();
        Task<int> AddTransactionAsync(Transaction t);
        Task<int> DeleteTransactionAsync(int id);
        Task<int> UpdateTransactionAsync(Transaction t);

        Task<AppUser[]> GetUsersAsync();
  }  //interface
}  //namespace
