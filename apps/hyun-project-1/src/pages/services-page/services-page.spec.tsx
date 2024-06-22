import { render } from '@testing-library/react';

import ServicesPage from './services-page';

describe('ServicesPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServicesPage />);
    expect(baseElement).toBeTruthy();
  });
});
