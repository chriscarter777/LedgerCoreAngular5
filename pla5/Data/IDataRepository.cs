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
        Task<Account> AddAccountAsync(Account a);
        Task<Account> DeleteAccountAsync(int id);
        Task<Account> GetAccountAsync(int id);
        Task<Account[]> GetAccountsAsync();
        Task<Account> UpdateAccountAsync(Account a);

        Task<Category> AddCategoryAsync(Category c);
        Task<Category> DeleteCategoryAsync(int id);
        Task<Category[]> GetCategoriesAsync();
        Task<Category> GetCategoryAsync(int id);
        Task<Category> UpdateCategoryAsync(Category c);

        Task<Transaction> AddTransactionAsync(Transaction t);
        Task<Transaction> DeleteTransactionAsync(int id);
        Task<Transaction> GetTransactionAsync(int id);
        Task<Transaction[]> GetTransactionsAsync();
        Task<Transaction> UpdateTransactionAsync(Transaction t);
    }  //interface
}  //namespace
