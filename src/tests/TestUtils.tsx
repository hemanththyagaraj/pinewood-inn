import { RenderOptions, render } from '@testing-library/react';
import React from 'react';
import AllProviders from './AllProvider';

const customRender = (ui: React.ReactNode, options?: RenderOptions) => {
  return render(ui, { wrapper: AllProviders, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export * from '@testing-library/user-event';

export { customRender as render };
