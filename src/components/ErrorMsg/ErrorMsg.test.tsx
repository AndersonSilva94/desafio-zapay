import React from 'react';
import { render } from '@testing-library/react';
import ErrorMsg from '.';

describe('<ErrorMsg />', () => {
  it('Se possui um texto', () => {
    const { getByRole } = render(<ErrorMsg />);

    const text = getByRole('heading', { name: 'Erro no servidor' });
    expect(text).toBeInTheDocument();
  });
});
