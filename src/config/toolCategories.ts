// schema.org applicationCategory per verktyg, använt av ToolSchema.astro för
// WebApplication JSON-LD. Håller kategoriseringen på ett ställe i stället för
// att duplicera den i 18 sidfiler.
export const toolCategories = {
  bmi: 'HealthApplication',
  bmr: 'HealthApplication',
  bodyfat: 'HealthApplication',
  calorie: 'HealthApplication',
  idealweight: 'HealthApplication',
  tdee: 'HealthApplication',

  loan: 'FinanceApplication',
  loancost: 'FinanceApplication',
  salary: 'FinanceApplication',
  savingsgoal: 'FinanceApplication',

  age: 'UtilitiesApplication',
  fraction: 'UtilitiesApplication',
  percent: 'UtilitiesApplication',
  ratio: 'UtilitiesApplication',
  stddev: 'UtilitiesApplication',
  time: 'UtilitiesApplication',
  tip: 'UtilitiesApplication',
  units: 'UtilitiesApplication',
} as const;

export type ToolSlug = keyof typeof toolCategories;
