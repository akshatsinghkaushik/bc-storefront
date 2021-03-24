import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MockCartProvider } from './MockCartProvider';

const Wrapper = ({ children }) => {
  return (
    <MockCartProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </MockCartProvider>
  );
};

const customRender = (ui, options) => {
  return render(ui, { Wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
