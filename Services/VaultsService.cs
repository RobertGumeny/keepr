using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsService
  {

    private readonly VaultsRepository _repo;
    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }
    //SECTION Get requests
    public IEnumerable<Vault> GetUserVaults(string userId)
    {
      return _repo.GetUserVaults(userId);
    }
    public Vault GetById(int id)
    {
      Vault foundVault = _repo.GetById(id);
      if (foundVault == null)
      {
        throw new Exception("Invalid Vault ID");
      }
      return foundVault;
    }
    //!SECTION
    //SECTION Put requests
    //!SECTION
    //SECTION Post requests
    public Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }
    //!SECTION
    //SECTION Delete requests
    internal string Delete(int id, string userId)
    {
      Vault foundVault = GetById(id);
      if (foundVault.UserId != userId)
      {
        throw new Exception("This isn't your vault!");
      }
      if (_repo.Delete(id, userId))
      {
        return "Vault deleted";
      }
      throw new Exception("Catastrophic Error!");
    }
    //!SECTION
  }
}