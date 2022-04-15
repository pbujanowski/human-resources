using System.Linq.Expressions;

namespace HumanResources.Common.Library.Abstractions.Repositories;

public interface IRepositoryBase<TEntity>
{
    TEntity Create(TEntity entity);

    TEntity Delete(TEntity entity);

    IQueryable<TEntity> FindAll();

    IQueryable<TEntity> FindByCondition(Expression<Func<TEntity, bool>> condition);

    TEntity Update(TEntity entity);
}