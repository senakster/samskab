import React from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, themes } from '_themes';
import ErrorBoundary from 'components/global/ErrorBoundary/ErrorBoundary';
import Router from 'components/global/Router/Router';
import Themes from 'components/global/Themes/Themes';
import Footer from 'components/ui/Footer/Footer.lazy';

function App() {
  const [theme, setTheme] = React.useState('dark');
  const [font, setFont] = React.useState('Didact Gothic');

  function handleThemeChange(event: any) {
    const target = event.target;
    const theme = themes.find((t) => t.id === parseInt(target.value));
    theme && setTheme(theme.name);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleFontChange(event: any) {
    const target = event.target;
    setFont(target.value);
  }
  return (
    <div className="App" style={{ '--ff': `'${font}'` } as React.CSSProperties}>
      <ThemeProvider theme={themes.find(t => t.name === theme)?.theme} >
        <GlobalStyles />
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
        <Footer>
          {/* <Counter /> */}
          <Themes variant="minimal" theme={theme} font={font} handlers={{ handleThemeChange, handleFontChange }} />
        </Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
