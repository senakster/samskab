import React from 'react';
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, themes } from '_themes';
import ErrorBoundary from 'components/global/ErrorBoundary/ErrorBoundary';
import Router from 'components/global/Router/Router';
import Footer from 'components/ui/Footer/Footer.lazy';
import { State } from '_state/store';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state: State) => state.layout.theme)
  const font = useSelector((state: State) => state.layout.fontFamily)
  const headerFont = useSelector((state: State) => state.layout.headerFont)
  return (
    <div className="App" style={{ '--ff': `'${font}'`,'--hf': `'${headerFont}'` } as React.CSSProperties}>
      <ThemeProvider theme={themes.find(t => t.name === theme)?.theme}>
        <GlobalStyles />
        <ErrorBoundary>
          <Router />
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;
