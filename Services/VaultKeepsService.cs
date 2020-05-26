using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;

    public VaultKeepsService(VaultKeepsRepository repo)
    {
      _repo = repo;
    }
    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      return _repo.Create(newVaultKeep);
    }
    internal string Delete(int id)
    {
      if (_repo.Delete(id))
      {
        return ("Successfully deleted!");
      }
      throw new Exception("Delete request unsuccessful");
    }
  }
}