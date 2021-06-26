using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL_7224.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<List<T>> GetAllAsnc();
        Task UpdateAsync(T entity);
        Task InsertAsync(T entity);
        Task DeleteAsync(int id);
        Boolean Exists(int id);
        Task<T> FindOneAsync(int id);
    }
}
