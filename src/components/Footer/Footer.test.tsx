import React from 'react';
import { render } from '@testing-library/react';
import Footer from '.';

describe('<Footer />', () => {
  it('Se Footer possui um link', () => {
    const { getByRole } = render(<Footer />);
    const link = getByRole('link') as HTMLLinkElement;
    expect(link.href).toBe('https://www.linkedin.com/in/andssilva/');
  });
});
