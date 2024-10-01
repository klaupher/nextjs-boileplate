import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { describe } from 'node:test';
import Main from '@/app/Components/Main';

describe('<Main />', () => {
  it('shoudl render the heading', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });

  it('should render the color specific', () => {
    const {container} = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color':'#06092b'})
  })
});
