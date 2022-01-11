import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('Se Header tem uma logo com o texto SpaceX', () => {
    const { getByText } = render(<Header />);
    expect(getByText('SpaceX')).toBeInTheDocument();
  });
  it('Se Header possui um elemento Nav', () => {
    const { getByRole } = render(<Header />);
    expect(getByRole('navigation')).toBeInTheDocument();
  });
  it('Possui os links Home, Últimos Lançamentos e Próximos Lançamentos', () => {
    const { getAllByRole } = render(<Header />);
    const links = getAllByRole('link');
    expect(links[0].innerHTML).toBe('Home');
    expect(links[1].innerHTML).toBe('Últimos Lançamentos');
    expect(links[2].innerHTML).toBe('Próximos Lançamentos');
  });
});
