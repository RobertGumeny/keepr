using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;
    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }
    //SECTION Get requests
    //NOTE Get all Keeps
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }
    //NOTE Get keep by id
    public Keep GetById(int id)
    {
      Keep foundKeep = _repo.GetById(id);
      if (foundKeep == null)
      {
        throw new Exception("Invalid Keep ID");
      }
      return foundKeep;
    }
    //NOTE Get keeps by userId
    public IEnumerable<Keep> GetUserKeeps(string userId)
    {
      return _repo.GetUserKeeps(userId);
    }
    //NOTE Get keeps by vaultId
    internal IEnumerable<VaultKeepViewModel> GetKeepsByVaultId(int id, string userId)
    {
      return _repo.GetKeepsByVaultId(id, userId);
    }
    //!SECTION
    //SECTION Put requests
    internal Keep Edit(Keep keepToUpdate, string userId)
    {
      Keep foundKeep = GetById(keepToUpdate.Id);
      if (foundKeep.UserId != userId)
      {
        if (_repo.UpdateKeepCounts(keepToUpdate))
        {
          foundKeep.Keeps = keepToUpdate.Keeps;
          foundKeep.Views = keepToUpdate.Views;
          foundKeep.Shares = keepToUpdate.Shares;
          return foundKeep;
        }
        throw new Exception("Couldn't update this Keep");
      }
      if (_repo.Edit(keepToUpdate, userId))
      {
        return keepToUpdate;
      }
      throw new Exception("Could not edit this Keep.");
    }
    //!SECTION
    //SECTION Post requests
    public Keep Create(Keep newKeep)
    {
      return _repo.Create(newKeep);
    }
    //!SECTION
    //SECTION Delete requests
    internal string Delete(int id, string userId)
    {
      Keep foundKeep = GetById(id);
      if (foundKeep.IsPrivate == false)
      {
        throw new Exception("You cannot delete a public Keep!");
      }
      if (foundKeep.UserId != userId)
      {
        throw new Exception("This isn't your keep!");
      }
      if (_repo.Delete(id, userId))
      {
        return "Keep deleted";
      }
      throw new Exception("Catastrophic Error!");
    }
    //!SECTION 
  }
}