import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { runningGame, finishedGame } from '../__fixtures__/game';
import GameCard from '..';

afterEach(cleanup);

const defaultGame = runningGame;

const setup = ({ game = defaultGame }) =>
  render(<GameCard game={game} onDelete={jest.fn()} />);

describe('GameCard', () => {
  it('should render correctly', () => {
    const { getByText, queryAllByRole } = setup({});

    const deleteGame = queryAllByRole('button')[0];
    const continueGame = queryAllByRole('button')[1];

    expect(getByText(`Game ${defaultGame.id}`)).toBeInTheDocument();
    expect(getByText(`Status: ${defaultGame?.status}`)).toBeInTheDocument();
    expect(
      getByText(`Frames played: ${defaultGame.frames.length}`)
    ).toBeInTheDocument();
    expect(deleteGame).toBeEnabled();
    expect(continueGame).toBeEnabled();
  });

  it('should show button disabled when game is finished', () => {
    const { queryAllByRole } = setup({ game: finishedGame });

    const deleteGame = queryAllByRole('button')[0];
    const continueGame = queryAllByRole('button')[1];

    expect(deleteGame).toBeEnabled();
    expect(continueGame).toBeDisabled();
  });
});
