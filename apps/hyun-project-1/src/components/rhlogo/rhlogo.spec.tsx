import { render } from '@testing-library/react';

import RHLogo from './rhlogo';

describe('RHLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RHLogo />);
    expect(baseElement).toBeTruthy();
  });
});
