import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import axios from 'axios';
import PastLaunch from '.';
import apiSpaceX from '../../services/api';
import mock from './mock';

jest.mock('../../services/api');
const mockedAxios = apiSpaceX as jest.Mocked<typeof axios>;

describe('<PastLaunch />', () => {
  afterEach(cleanup);

  it('Se a página possui uma animação ao iniciar', () => {
    const { getByRole } = render(<PastLaunch />);
    const animation = getByRole('button', { name: 'animation' });
    expect(animation).toBeInTheDocument();
  });

  it('Se a página exibe o texto Lançamentos Passados ao retornar os dados', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mock,
    });
    const { getByText } = render(<PastLaunch />);

    const getTitle = await waitFor(
      () => getByText('Lançamentos Passados') as HTMLHeadingElement,
    );

    expect(getTitle).toBeInTheDocument();
  });

  it('Se a página retorna os dados dos lançamentos passados', async () => {
    mockedAxios.get.mockResolvedValue({
      data: mock,
    });
    const { getAllByRole } = render(<PastLaunch />);

    const getNames = await waitFor(
      () => getAllByRole('heading', { level: 3 }) as HTMLHeadingElement[],
    );

    expect(getNames[0].textContent).toBe('FalconSat');
    expect(getNames[1].textContent).toBe('DemoSat');

    const getImages = await waitFor(
      () => getAllByRole('img') as HTMLImageElement[],
    );

    expect(getImages[0].src).toBe('https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png');
    expect(getImages[1].src).toBe('https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png');
  });

  it('Retorna mensagem de erro no servidor caso não encontre os dados', async () => {
    mockedAxios.get.mockRejectedValue({
      data: 'Not Found',
    });

    const { getByText } = render(<PastLaunch />);

    const getError = await waitFor(
      () => getByText('Erro no servidor'),
    );

    expect(getError).toBeInTheDocument();
  });
});
