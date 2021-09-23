import React from 'react';
import { render, cleanup } from '@testing-library/react';
import frame from '../__fixtures__/frame';
import FrameCard from '..';

afterEach(cleanup);

const defaultFrame = frame;

const setup = () => render(<FrameCard frame={defaultFrame} />);

describe('FrameCard', () => {
  it('should render the correctly', () => {
    const { getByText } = setup();

    expect(getByText('First ball: 10')).toBeInTheDocument();
    expect(getByText('Second ball:')).toBeInTheDocument();
    expect(getByText('Score: 10')).toBeInTheDocument();
    expect(getByText('Type: strike')).toBeInTheDocument();
  });
});
