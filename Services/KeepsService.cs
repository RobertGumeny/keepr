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
    public IEnumerable<Keep> Get()
    {
      return _repo.Get();
    }

    public IEnumerable<Keep> GetUserKeeps(string userId)
    {
      return _repo.GetUserKeeps(userId);
    }
    //!SECTION
    //SECTION Put requests
    //!SECTION
    //SECTION Post requests
    public Keep Create(Keep newKeep)
    {
      return _repo.Create(newKeep);
    }
    //!SECTION
    //SECTION Delete requests
    //!SECTION 
  }
}