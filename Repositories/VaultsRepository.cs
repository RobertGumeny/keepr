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
    //NOTE Get Vaults by userId
    internal IEnumerable<Vault> GetUserVaults(string userId)
    {
      string sql = "SELECT * FROM vaults WHERE userId = @UserId;";
      return _db.Query<Vault>(sql, new { userId });
    }
    //NOTE Get vault by id
    internal Vault GetById(int id)
    {
      string sql = "SELECT * FROM vaults WHERE id = @Id";
      return _db.QueryFirstOrDefault<Vault>(sql, new { id });
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
    internal bool Delete(int id, string userId)
    {
      string sql = "DELETE FROM vaults WHERE id = @Id AND userId = @UserID LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id, userId });
      return affectedRows == 1;
    }
    //!SECTION
  }
}