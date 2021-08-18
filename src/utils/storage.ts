const storageThemeModeKey = 'themeKey';

const saveThemeMode = (isDark: boolean) => {
  localStorage.setItem(storageThemeModeKey, String(isDark));
};

const loadThemeMode = () => {
  const darkMode = localStorage.getItem(storageThemeModeKey);
  if (darkMode) {
    return JSON.parse(darkMode);
  }

  return null;
};

const storage = {
  saveThemeMode,
  loadThemeMode,
};

export default storage;
