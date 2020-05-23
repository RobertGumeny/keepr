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
    //!SECTION
  }
}