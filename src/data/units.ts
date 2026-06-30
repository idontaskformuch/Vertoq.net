// Alla linjära kategorier konverteras via en bas-enhet: value_in_base = value * factor
// Temperatur är specialfall (icke-linjärt) och hanteras separat i UnitConverter.

export const categories = {
  length: {
    base: 'm',
    units: ['mm', 'cm', 'm', 'km', 'in', 'ft', 'yd', 'mi'],
    factors: {
      mm: 0.001, cm: 0.01, m: 1, km: 1000,
      in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344,
    },
    defaultFrom: 'm',
    defaultTo: 'ft',
  },
  weight: {
    base: 'kg',
    units: ['mg', 'g', 'kg', 't', 'oz', 'lb'],
    factors: {
      mg: 0.000001, g: 0.001, kg: 1, t: 1000,
      oz: 0.0283495, lb: 0.45359237,
    },
    defaultFrom: 'kg',
    defaultTo: 'lb',
  },
  volume: {
    base: 'l',
    units: ['ml', 'l', 'm3', 'tsp', 'tbsp', 'cup', 'pt', 'qt', 'gal'],
    factors: {
      ml: 0.001, l: 1, m3: 1000,
      tsp: 0.00492892, tbsp: 0.0147868, cup: 0.236588,
      pt: 0.473176, qt: 0.946353, gal: 3.78541,
    },
    defaultFrom: 'l',
    defaultTo: 'gal',
  },
  temperature: {
    base: 'c',
    units: ['c', 'f', 'k'],
    special: true,
    defaultFrom: 'c',
    defaultTo: 'f',
  },
  pressure: {
    base: 'pa',
    units: ['pa', 'kpa', 'bar', 'psi', 'atm'],
    factors: {
      pa: 1, kpa: 1000, bar: 100000,
      psi: 6894.757293168, atm: 101325,
    },
    defaultFrom: 'bar',
    defaultTo: 'psi',
  },
  torque: {
    base: 'nm',
    units: ['nm', 'kgfm', 'lbft', 'lbin'],
    factors: {
      nm: 1, kgfm: 9.80665,
      lbft: 1.3558179483, lbin: 0.1129848290,
    },
    defaultFrom: 'nm',
    defaultTo: 'lbft',
  },
};

export type CategoryKey = keyof typeof categories;
export const categoryKeys = Object.keys(categories) as CategoryKey[];
