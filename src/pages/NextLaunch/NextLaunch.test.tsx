import React from 'react';
import {
  render, cleanup, waitFor, screen,
} from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import NextLaunch from '.';
import apiSpaceX from '../../services/api';
import mock from './mock';
import notFound from '../../assets/not-found.png';

jest.mock('../../services/api');
const mockedAxios = apiSpaceX as jest.Mocked<typeof axios>;

describe('<NextLaunch />', () => {
  afterEach(cleanup);

  it('Se a página possui uma animação ao iniciar', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });
    act(() => {
      render(<NextLaunch />);
    });
    const animation = await waitFor(
      () => screen.getByTestId('img-loading'),
    );
    expect(animation).toBeInTheDocument();
  });

  it('Se a página exibe o texto Próximos Lançamentos ao retornar os dados', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mock,
    });
    act(() => {
      render(<NextLaunch />);
    });

    const getTitle = await waitFor(
      () => screen.getByText('Próximos Lançamentos') as HTMLHeadingElement,
    );

    expect(getTitle).toBeInTheDocument();
  });

  it('Se a página retorna os dados dos próximos lançamentos', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mock,
    });
    act(() => {
      render(<NextLaunch />);
    });

    const getNames = await waitFor(
      () => screen.getAllByRole('heading', { level: 3 }) as HTMLHeadingElement[],
    );

    expect(getNames[0].textContent).toBe('Starlink 4-6 (v1.5)');
    expect(getNames[1].textContent).toBe('CSG-2');

    const getImages = await waitFor(
      () => screen.getAllByRole('img') as HTMLImageElement[],
    );

    expect(getImages[0].src).toBe('https://imgur.com/BrW201S.png');
    expect(getImages[1].src).toContain(notFound);
  });
});
