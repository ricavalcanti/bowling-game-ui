export const runningGame = {
  id: 15,
  total_score: 5,
  created_at: '2021-09-23T12:39:26.392Z',
  updated_at: '2021-09-23T16:00:50.366Z',
  status: 'running',
  frames: [
    {
      id: 2,
      frame_score: 5,
      waiting_how_much_throws: 1,
      frame_number: 1,
      created_at: '2021-09-23T12:39:26.414Z',
      updated_at: '2021-09-23T16:00:50.341Z',
      game_id: 15,
      frame_type: 'normal',
      throws: [
        {
          id: 142,
          knocked_pins: 5,
          created_at: '2021-09-23T16:00:50.283Z',
          updated_at: '2021-09-23T16:00:50.283Z',
        },
      ],
    },
  ],
};

export const finishedGame = {
  ...runningGame,
  status: 'finished',
};
