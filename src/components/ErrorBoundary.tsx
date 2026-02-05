import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <section className="error-fallback" role="alert" aria-label="Error">
          <h1>Something went wrong</h1>
          <p>We’re sorry — something broke. Try refreshing the page.</p>
          {process.env.NODE_ENV === "development" && (
            <pre className="error-fallback-details">
              {this.state.error.message}
            </pre>
          )}
        </section>
      );
    }
    return this.props.children;
  }
}
