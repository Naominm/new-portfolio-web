import React, { useEffect, useState } from 'react';
import { BsPalette } from 'react-icons/bs';

const STORAGE_KEY = 'theme';
const SIGNATURE = 'signature';
const PROFESSIONAL = 'professional';

// Read whatever the inline script in index.html already applied, so the
// button label matches the paint on first render.
function initialTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === PROFESSIONAL
      ? PROFESSIONAL
      : SIGNATURE;
  } catch (e) {
    return SIGNATURE;
  }
}

function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // signature is the bare :root block, so it carries no attribute
    if (theme === PROFESSIONAL) {
      document.documentElement.dataset.theme = PROFESSIONAL;
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* private mode: the choice just will not persist */
    }
  }, [theme]);

  const next = theme === SIGNATURE ? PROFESSIONAL : SIGNATURE;

  return (
    <button
      type='button'
      onClick={() => setTheme(next)}
      aria-label={`Switch to the ${next} colour theme`}
      title={`Switch to the ${next} colour theme`}
      className='flex items-center gap-x-2 h-[48px] px-5 rounded-full border border-white/25 text-white font-secondary text-sm capitalize hover:bg-white/10 transition-colors duration-300'
    >
      <BsPalette className='text-accent' />
      <span className='hidden sm:inline'>{next}</span>
    </button>
  );
}

export default ThemeToggle;
