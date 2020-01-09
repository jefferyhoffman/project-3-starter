import React from 'react';

const StatusContext = React.createContext({
  error: undefined,
  success: undefined,
  onSuccess: () => undefined,
  onError: () => undefined,
  onClear: () => undefined
});

export default StatusContext;
