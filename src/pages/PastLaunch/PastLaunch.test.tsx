import React from 'react';
import {
  render, cleanup, waitFor, screen,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import PastLaunch from '.';
import apiSpaceX from '../../services/api';
import mock from './mock';

jest.mock('../../services/api');
const mockedAxios = apiSpaceX as jest.Mocked<typeof axios>;

describe('<PastLaunch />', () => {
  afterEach(cleanup);

  it('Se a página possui uma animação ao iniciar', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });
    act(() => {
      render(<PastLaunch />);
    });
    const animation = await waitFor(
      () => screen.getByTestId('img-loading'),
    );
    expect(animation).toBeInTheDocument();
  });

  it('Se a página exibe o texto Lançamentos Passados ao retornar os dados', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mock,
    });
    act(() => {
      render(<PastLaunch />);
    });

    const getTitle = await waitFor(
      () => screen.getByText('Lançamentos Passados') as HTMLHeadingElement,
    );

    expect(getTitle).toBeInTheDocument();
  });

  it('Se a página retorna os dados dos lançamentos passados', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mock,
    });
    act(() => {
      render(<PastLaunch />);
    });

    const getNames = await waitFor(
      () => screen.getAllByRole('heading', { level: 3 }) as HTMLHeadingElement[],
    );

    expect(getNames[0].textContent).toBe('FalconSat');
    expect(getNames[1].textContent).toBe('DemoSat');

    const getImages = await waitFor(
      () => screen.getAllByRole('img') as HTMLImageElement[],
    );

    expect(getImages[0].src).toBe('https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png');
    expect(getImages[1].src).toBe('https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png');
  });

  it('Retorna mensagem de erro no servidor caso não encontre os dados', async () => {
    mockedAxios.get.mockRejectedValue({
      data: 'Not Found',
    });

    act(() => {
      render(<PastLaunch />);
    });

    const getError = await waitFor(
      () => screen.getByText('Erro no servidor'),
    );

    expect(getError).toBeInTheDocument();
  });
});
