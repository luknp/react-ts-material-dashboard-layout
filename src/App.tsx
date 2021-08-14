import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import customTheme from 'styles/customTheme';
import Routes from 'Routes';

function App() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const handleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <ThemeProvider theme={customTheme(isDarkMode)}>
      <Routes />
      <Button variant='contained' onClick={handleDarkMode}>
        Change mode
      </Button>
    </ThemeProvider>
  );
}

export default App;
