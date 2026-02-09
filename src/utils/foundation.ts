/**
 * Calculates the number of years since the foundation of the Orquesta Sinfónica de Carabobo.
 * Founded in October 1976.
 * 
 * @returns The number of years as an integer.
 */
export function getFoundationYears(): number {
  const foundationMonth = 9; // October (0-indexed)
  const foundationYear = 1976;
  
  const now = new Date();
  let years = now.getFullYear() - foundationYear;
  
  // If we haven't reached October yet (month < 9), subtract a year
  if (now.getMonth() < foundationMonth) {
    years--;
  }
  
  return years;
}
