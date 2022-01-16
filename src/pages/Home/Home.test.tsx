import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import axios from 'axios';
import Home from '.';
import apiSpaceX from '../../services/api';
import { mockLatest, mockNext } from './mock';
import notFound from '../../assets/not-found.png';

jest.mock('../../services/api');
const mockedAxios = apiSpaceX as jest.Mocked<typeof axios>;

describe('<Home />', () => {
  afterEach(cleanup);

  it('Se a página possui uma animação ao iniciar', () => {
    const { getByRole } = render(<Home />);
    const animation = getByRole('button', { name: 'animation' });
    expect(animation).toBeInTheDocument();
  });

  it('Se a página exibe os títulos dos cards ao retornar os dados', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockLatest,
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: mockNext,
    });
    const { getAllByRole } = render(<Home />);

    const getTitle = await waitFor(
      () => getAllByRole('heading', { level: 1 }) as HTMLHeadingElement[],
    );

    expect(getTitle[0].textContent).toBe('Último lançamento');
    expect(getTitle[1].textContent).toBe('Próximo lançamento');
  });

  it('Se a página retorna os dados dos lançamentos passados', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockLatest,
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: mockNext,
    });
    const { getAllByRole } = render(<Home />);

    const getNames = await waitFor(
      () => getAllByRole('heading', { level: 3 }) as HTMLHeadingElement[],
    );

    expect(getNames[0].textContent).toBe('Transporter-3');
    expect(getNames[1].textContent).toBe('Starlink 4-6 (v1.5)');

    const getImages = await waitFor(
      () => getAllByRole('img') as HTMLImageElement[],
    );

    expect(getImages[0].src).toContain(notFound);
    expect(getImages[1].src).toBe('https://imgur.com/BrW201S.png');
  });

  it('Se a requisição para retornar o último lançamento der erro, exibir texto', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      data: 'Not Found',
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: mockNext,
    });
    const { getByText } = render(<Home />);

    const getError = await waitFor(
      () => getByText('Erro no servidor'),
    );

    expect(getError).toBeInTheDocument();
  });

  it('Se a requisição para retornar o próximo lançamento der erro, exibir texto', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockLatest,
    });
    mockedAxios.get.mockRejectedValueOnce({
      data: 'Not Found',
    });
    const { getByText } = render(<Home />);

    const getError = await waitFor(
      () => getByText('Erro no servidor'),
    );

    expect(getError).toBeInTheDocument();
  });
});
