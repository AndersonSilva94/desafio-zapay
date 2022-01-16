import React from 'react';
import {
  render, cleanup, waitFor, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import Home from '.';
import apiSpaceX from '../../services/api';
import { mockLatest, mockNext } from './mock';
import notFound from '../../assets/not-found.png';

jest.mock('../../services/api');
const mockedAxios = apiSpaceX as jest.Mocked<typeof axios>;

describe('<Home />', () => {
  afterEach(cleanup);

  it('Se a página possui uma animação ao iniciar', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {},
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: {},
    });
    act(() => {
      render(<Home />);
    });

    const animation = await waitFor(
      () => screen.getByTestId('img-loading'),
    );
    expect(animation).toBeInTheDocument();
  });

  it('Se a página exibe os títulos dos cards ao retornar os dados', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: mockLatest,
    });
    mockedAxios.get.mockResolvedValueOnce({
      data: mockNext,
    });
    act(() => {
      render(<Home />);
    });

    const getTitle = await waitFor(
      () => screen.getAllByRole('heading', { level: 1 }) as HTMLHeadingElement[],
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
    act(() => {
      render(<Home />);
    });

    const getNames = await waitFor(
      () => screen.getAllByRole('heading', { level: 3 }) as HTMLHeadingElement[],
    );

    expect(getNames[0].textContent).toBe('Transporter-3');
    expect(getNames[1].textContent).toBe('Starlink 4-6 (v1.5)');

    const getImages = await waitFor(
      () => screen.getAllByRole('img') as HTMLImageElement[],
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
    act(() => {
      render(<Home />);
    });

    const getError = await waitFor(
      () => screen.getByText('Erro no servidor'),
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
    act(() => {
      render(<Home />);
    });

    const getError = await waitFor(
      () => screen.getByText('Erro no servidor'),
    );

    expect(getError).toBeInTheDocument();
  });
});
