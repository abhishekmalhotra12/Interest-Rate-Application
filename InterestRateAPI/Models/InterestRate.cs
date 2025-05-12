namespace InterestRateAPI.Models;

public class InterestRate
{
    public int Id { get; set; }
    public DateTime BusinessDate { get; set; }
    public string Term { get; set; }       // E.g., "1M", "3M", "30Y"
    public string RateType { get; set; }   // E.g., "Euribor", "Libor"
    public decimal RateValue { get; set; } // Percentage
}
