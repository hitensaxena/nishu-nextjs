'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import ProButton from './ui/ProButton'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-text-secondary mb-6">
              We apologize for the inconvenience. Please try again.
            </p>
            <ProButton variant="primary" onClick={this.handleReset}>
              Try Again
            </ProButton>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}