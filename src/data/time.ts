// Enheter som går att lägga till/dra av från ett datum.
// Ungefärlig millisekund-längd används för "months"/"years" vid grov uppskattning,
// men exakt addering görs via Date-objektets egna metoder i komponenten (kalenderkorrekt).
export const durationUnits = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
