import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from 'styles/customTheme';
import Routes from 'Routes';
import storage from 'utils/storage';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const { loadThemeMode } = storage;
  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <ThemeProvider theme={customTheme(loadThemeMode())}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
