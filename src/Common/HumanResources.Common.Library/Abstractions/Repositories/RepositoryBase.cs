using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace HumanResources.Common.Library.Abstractions.Repositories
{
    public abstract class RepositoryBase<TEntity> : IRepositoryBase<TEntity>
        where TEntity : class
    {
        private readonly DbContext _dbContext;

        protected RepositoryBase(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public TEntity Create(TEntity entity)
        {
            return SetEntity().Add(entity).Entity;
        }

        public TEntity Delete(TEntity entity)
        {
            return SetEntity().Remove(entity).Entity;
        }

        public IQueryable<TEntity> FindAll()
        {
            return SetEntity();
        }

        public IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> condition)
        {
            return SetEntity().Where(condition);
        }

        public TEntity Update(TEntity entity)
        {
            return SetEntity().Update(entity).Entity;
        }

        private DbSet<TEntity> SetEntity() => _dbContext.Set<TEntity>();
    }
}