import React, { ErrorInfo } from "react";

class ErrorBoundary extends React.Component {
  state: { hasError: boolean, error?: Error };


  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  logError(error: Error, errorInfo: ErrorInfo): void  {
    console.error(error, errorInfo)
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to trigger fallback UI
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error or send logging data to log management tool
    this.logError(error, errorInfo)
  }
  render() {
    if (this.state.hasError) {
      return <>
              <h1>Der er noget der ikke virker korrekt...</h1>
            </>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

