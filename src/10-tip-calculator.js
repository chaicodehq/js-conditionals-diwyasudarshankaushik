/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  // 1. Validate bill amount
  if (billAmount <= 0) return null;

  // 2. Map service rating to tip percentage
  const tipMap = {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 25
  };

  const tipPercentage = tipMap[serviceRating];

  // 3. Validate service rating (must be 1-5)
  if (tipPercentage === undefined) return null;

  // 4. Perform calculations
  const rawTip = billAmount * (tipPercentage / 100);
  const rawTotal = billAmount + rawTip;

  // 5. Return object with values rounded to 2 decimal places
  // Note: parseFloat is used because .toFixed() returns a string
  return {
    tipPercentage: tipPercentage,
    tipAmount: parseFloat(rawTip.toFixed(2)),
    totalAmount: parseFloat(rawTotal.toFixed(2))
  };
}
