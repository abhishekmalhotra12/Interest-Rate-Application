using Microsoft.AspNetCore.Mvc;
using InterestRateAPI.Models;
using InterestRateAPI.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class InterestRatesController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _config;

    public InterestRatesController(AppDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> AddRate([FromBody] InterestRate rate)
    {
        decimal min = _config.GetValue<decimal>("RateRange:Min");
        decimal max = _config.GetValue<decimal>("RateRange:Max");

        if (rate.RateValue < min || rate.RateValue > max)
            return BadRequest($"Rate must be between {min}% and {max}%");

        _context.InterestRates.Add(rate);
        await _context.SaveChangesAsync();
        return Ok(rate);
    }

    [HttpGet("{date}")]
    public async Task<IActionResult> GetRates(DateTime date)
    {
        var results = await _context.InterestRates
            .Where(r => r.BusinessDate == date)
            .ToListAsync();

        return Ok(results);
    }
}
