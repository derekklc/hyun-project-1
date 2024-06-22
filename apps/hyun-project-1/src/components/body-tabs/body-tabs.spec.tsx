import { render } from '@testing-library/react';

import BodyTabs from './body-tabs';

describe('BodyTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BodyTabs />);
    expect(baseElement).toBeTruthy();
  });
});
