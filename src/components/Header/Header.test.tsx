import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '.';

describe('<Header />', () => {
  it('Se Header tem uma logo', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const img = getByRole('img') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.alt).toBe('logo');
  });

  it('Se Header possui um elemento Nav', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(getByRole('navigation')).toBeInTheDocument();
  });

  it('Possui os links Home, Lançamentos Passados e Próximos Lançamentos', () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const links = getAllByRole('link');
    expect(links[0].innerHTML).toBe('Home');
    expect(links[1].innerHTML).toBe('Lançamentos Passados');
    expect(links[2].innerHTML).toBe('Próximos Lançamentos');
  });
});
