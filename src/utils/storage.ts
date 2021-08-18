const storageThemeModeKey = 'darkMode';

const saveThemeMode = (isDark: boolean) => {
  localStorage.setItem(storageThemeModeKey, String(isDark));
};

const loadThemeMode = (): boolean => {
  const darkMode = localStorage.getItem(storageThemeModeKey);
  if (darkMode) {
    return JSON.parse(darkMode);
  }
  return true;
};

const storage = {
  saveThemeMode,
  loadThemeMode,
};

export default storage;
