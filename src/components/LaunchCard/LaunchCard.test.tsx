import React from 'react';
import { render } from '@testing-library/react';
import LaunchCard from '.';
import mock from './mock';

describe('<LaunchCard />', () => {
  it('Se LaunchCard possui uma imagem', () => {
    const { getByRole } = render(<LaunchCard launch={mock} />);
    expect(getByRole('img')).toBeInTheDocument();
  });

  it('Se a imagem possui um alt text', () => {
    const { getByRole } = render(<LaunchCard launch={mock} />);
    const img = getByRole('img') as HTMLImageElement;
    expect(img.alt).toBe('Starlink 4-5 (v1.5)');
  });

  it('Se LaunchCard possui um link', () => {
    const { getByRole } = render(<LaunchCard launch={mock} />);
    const link = getByRole('link') as HTMLLinkElement;
    expect(link.innerHTML).toBe('Starlink 4-5 (v1.5)');
    expect(link.href).toBe('https://en.wikipedia.org/wiki/Starlink');
  });
});
