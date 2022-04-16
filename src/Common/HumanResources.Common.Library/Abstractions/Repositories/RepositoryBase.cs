using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace HumanResources.Common.Library.Abstractions.Repositories;

public abstract class RepositoryBase<TEntity, TKey> : IRepositoryBase<TEntity, TKey>
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
        return SetEntity().AsNoTracking();
    }

    public IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> condition)
    {
        return FindAll().Where(condition);
    }

    public TEntity? FindById(TKey id)
    {
        var entity = SetEntity().Find(id);
        if (entity != null)
        {
            _dbContext.Entry(entity).State = EntityState.Detached;
        }
        return entity;
    }

    public async Task<TEntity?> FindByIdAsync(TKey id)
    {
        var entity = await SetEntity().FindAsync(id);
        if (entity != null)
        {
            _dbContext.Entry(entity).State = EntityState.Detached;
        }
        return entity;
    }

    public TEntity Update(TEntity entity)
    {
        return SetEntity().Update(entity).Entity;
    }

    private DbSet<TEntity> SetEntity() => _dbContext.Set<TEntity>();
}