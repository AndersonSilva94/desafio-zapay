import React from 'react';
import { render } from '@testing-library/react';
import Loading from '.';

describe('<Loading />', () => {
  it('Se possui uma animação', () => {
    const { getByRole } = render(<Loading />);

    const animation = getByRole('button', { name: 'animation' });
    expect(animation).toBeInTheDocument();
  });
});
