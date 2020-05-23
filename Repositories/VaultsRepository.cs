using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }
    //SECTION Get requests
    internal IEnumerable<Vault> GetUserVaults(string userId)
    {
      string sql = "SELECT * FROM vaults WHERE userId = @UserId;";
      return _db.Query<Vault>(sql, new { userId });
    }
    //!SECTION
    //SECTION Put requests
    //!SECTION
    //SECTION Post requests
    internal Vault Create(Vault newVault)
    {
      string sql = @"
            INSERT INTO vaults
            (name, description, userId)
            VALUES
            (@Name, @Description, @UserId);
            SELECT LAST_INSERT_ID()";
      newVault.Id = _db.ExecuteScalar<int>(sql, newVault);
      return newVault;
    }
    //!SECTION
    //SECTION Delete requests
    //!SECTION
  }
}