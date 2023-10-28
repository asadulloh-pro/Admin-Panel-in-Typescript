import React, { HTMLProps } from "react";
import { Button, Result } from "antd";

export class ErrorBoundary extends React.Component<
  HTMLProps<HTMLElement>,
  { hasError: boolean }
> {
  constructor(props: HTMLProps<HTMLElement>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.log(
      "%c Caught an error!",
      "padding: 5px; background: #e5e0d4; color: #ff1f1f;"
    );
    console.log(error);
  }

  render() {
    const { children, ...rest } = this.props;
    return this.state.hasError ? (
      <Result
        {...rest}
        status="warning"
        title="Oops! Something went wrong!"
        extra={
          <Button type="primary" key="console">
            Go Home
          </Button>
        }
      />
    ) : (
      children
    );
  }
}
