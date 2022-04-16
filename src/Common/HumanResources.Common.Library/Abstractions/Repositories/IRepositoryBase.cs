using System.Linq.Expressions;

namespace HumanResources.Common.Library.Abstractions.Repositories;

public interface IRepositoryBase<TEntity, TKey>
{
    TEntity Create(TEntity entity);

    TEntity Delete(TEntity entity);

    IQueryable<TEntity> FindAll();

    IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> condition);

    TEntity? FindById(TKey id);

    Task<TEntity?> FindByIdAsync(TKey id);

    TEntity Update(TEntity entity);
}