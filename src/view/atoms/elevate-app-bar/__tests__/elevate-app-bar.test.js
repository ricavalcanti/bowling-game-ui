import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ElevateAppBar from '..';

afterEach(cleanup);

const defaultTitle = 'Default title';

const setup = () => render(<ElevateAppBar title={defaultTitle} />);

describe('ElevateAppBar', () => {
  it('should render the correctly', () => {
    const { getByText } = setup();

    expect(getByText(defaultTitle)).toBeInTheDocument();
  });
});
