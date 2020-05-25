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

    public VaultsController(VaultsService vs)
    {
      _vs = vs;
    }
    //SECTION Get requests
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
    //!SECTION
  }
}