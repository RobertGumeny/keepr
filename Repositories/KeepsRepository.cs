using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    //SECTION Get requests
    //NOTE Get all keeps
    internal IEnumerable<Keep> Get()
    {
      string sql = "SELECT * FROM keeps WHERE isPrivate = 0;";
      return _db.Query<Keep>(sql);
    }
    //NOTE Get keep by id
    internal Keep GetById(int id)
    {
      string sql = "SELECT * FROM keeps WHERE id = @Id";
      return _db.QueryFirstOrDefault<Keep>(sql, new { id });
    }
    //NOTE  Get keeps by userId
    internal IEnumerable<Keep> GetUserKeeps(string userId)
    {
      string sql = "SELECT * FROM keeps WHERE userId = @UserId;";
      return _db.Query<Keep>(sql, new { userId });
    }
    //NOTE Get keeps by vaultId
    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int vaultId, string userId)
    {
      string sql = @"SELECT 
          k.*,
          vk.id as vaultKeepId
          FROM vaultkeeps vk
          INNER JOIN keeps k ON k.id = vk.keepId 
          WHERE (vaultId = @vaultId AND vk.userId = @userId)";
      return _db.Query<VaultKeepViewModel>(sql, new { vaultId, userId });
    }
    //!SECTION
    //SECTION Put requests
    //!SECTION
    //SECTION Post requests
    internal Keep Create(Keep newKeep)
    {
      string sql = @"
            INSERT INTO keeps
            (name, description, userId, img, isPrivate, views, shares, keeps)
            VALUES
            (@Name, @Description, @UserId, @Img, @IsPrivate, @Views, @Shares, @Keeps);
            SELECT LAST_INSERT_ID()";
      newKeep.Id = _db.ExecuteScalar<int>(sql, newKeep);
      return newKeep;
    }
    //!SECTION
    //SECTION Delete requests
    internal bool Delete(int id, string userId)
    {
      string sql = "DELETE FROM keeps WHERE id = @Id AND userId = @UserID LIMIT 1";
      int affectedRows = _db.Execute(sql, new { id, userId });
      return affectedRows == 1;
    }
    //!SECTION
  }
}