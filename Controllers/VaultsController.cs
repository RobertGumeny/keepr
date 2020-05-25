using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Keepr.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class VaultsController : ControllerBase
  {
    private readonly VaultsService _vs;
    private readonly KeepsService _ks;

    public VaultsController(VaultsService vs, KeepsService ks)
    {
      _vs = vs;
      _ks = ks;
    }
    //SECTION Get requests
    //NOTE Get all vaults belonging to current user
    [Authorize]
    [HttpGet("user")]
    public ActionResult<IEnumerable<Vault>> GetUserVaults()
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user == null)
        {
          throw new Exception("You must be logged in to view your Vaults!");
        }
        string userId = user.Value;
        return Ok(_vs.GetUserVaults(userId));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      };
    }
    //NOTE Get vault by vault ID
    [Authorize]
    [HttpGet("{id}")]
    public ActionResult<Vault> GetById(int id)
    {
      try
      {
        return Ok(_vs.GetById(id));
      }
      catch (System.Exception)
      {

        throw;
      }
    }
    //NOTE Get all keeps belonging to a specific vault
    [Authorize]
    [HttpGet("{id}/keeps")]
    public ActionResult<IEnumerable<VaultKeepViewModel>> GetKeepsByVaultId(int id)
    {
      try
      {
        Vault vault = _vs.GetById(id);
        if (vault == null)
        {
          throw new Exception("Vault does not exist!");
        }
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user == null)
        {
          throw new Exception("You must be logged in to view your Vaults!");
        }
        string userId = user.Value;
        return Ok(_ks.GetKeepsByVaultId(id, userId));
      }
      catch (System.Exception err)
      {
        return BadRequest(err.Message);
      }
    }
    //!SECTION
    //SECTION Put requests
    //!SECTION
    //SECTION Post requests
    [HttpPost]
    [Authorize]
    public ActionResult<Vault> Post([FromBody] Vault newVault)
    {
      try
      {
        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
        newVault.UserId = userId;
        return Ok(_vs.Create(newVault));
      }
      catch (Exception e)
      {
        return BadRequest(e.Message);
      }
    }
    //!SECTION
    //SECTION Delete requests
    [Authorize]
    [HttpDelete("{id}")]
    public ActionResult<string> Delete(int id)
    {
      try
      {
        Claim user = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        if (user == null)
        {
          throw new Exception("You must be logged in to delete!");
        }
        string userId = user.Value;
        return Ok(_vs.Delete(id, userId));
      }
      catch (System.Exception err)
      {
        return BadRequest(err.Message);
      }
    }
    //!SECTION
  }
}