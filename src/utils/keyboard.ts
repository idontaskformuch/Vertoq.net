// Registrerar Enter-lyssnare på ett konverter-element.
// Alla inputs och selects inuti elementet triggar beräkning vid Enter.
export function enableEnterCalc(containerId: string, calcFn: () => void) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.querySelectorAll<HTMLElement>('input, select').forEach((el) => {
    el.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        calcFn();
        // Fokusera nästa fokuserbart element om det finns
        const focusables = Array.from(
          container.querySelectorAll<HTMLElement>('input, select, button')
        );
        const idx = focusables.indexOf(el);
        if (idx >= 0 && idx < focusables.length - 1) {
          focusables[idx + 1].focus();
        }
      }
    });
  });
}
