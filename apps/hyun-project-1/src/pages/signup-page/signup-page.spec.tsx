import { render } from '@testing-library/react';

import SignupPage from './signup-page';

describe('SignupPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupPage />);
    expect(baseElement).toBeTruthy();
  });
});
