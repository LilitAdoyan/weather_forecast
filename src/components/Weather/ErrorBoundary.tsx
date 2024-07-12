import { useState } from 'react';

export const ErrorBoundary = ({...props}) => {
  const [hasError, setHasError] = useState(false);

  function logErrorToMyService(error:any, componentStack:any) {
    // Example implementation
    console.log(error, componentStack);
  }

  function componentDidCatch(error:any, info:any) {
    setHasError(true);
    logErrorToMyService(error, info.componentStack);
  }

  if (hasError) {
    return props.fallback;
  }

  return props.children;
}