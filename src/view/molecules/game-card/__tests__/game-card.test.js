import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { runningGame, finishedGame } from '../__fixtures__/game';
import GameCard from '..';

afterEach(cleanup);

const defaultGame = runningGame;

const setup = ({ game = defaultGame }) => render(<GameCard game={game} />);

describe('GameCard', () => {
  it('should render correctly', () => {
    const { getByText, getByRole } = setup({});

    const button = getByRole('button');

    expect(getByText(`Game ${defaultGame.id}`)).toBeInTheDocument();
    expect(getByText(`Status: ${defaultGame?.status}`)).toBeInTheDocument();
    expect(
      getByText(`Frames played: ${defaultGame.frames.length}`)
    ).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('should show button disabled when game is finished', () => {
    const { getByRole } = setup({ game: finishedGame });

    const button = getByRole('button');

    expect(button).toBeDisabled();
  });
});
