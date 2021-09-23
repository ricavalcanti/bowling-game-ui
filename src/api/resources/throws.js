import { throwBaseUrl, defaultHeaders } from './constants';
import { getResponseBody } from './utils';

export const createThrow = async (knockedPins, gameId) => {
  const request = {
    throw: {
      knocked_pins: knockedPins,
    },
    game: {
      id: gameId,
    },
  };

  const response = await fetch(throwBaseUrl, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(request),
  });

  const responseBody = await getResponseBody(response);

  return responseBody;
};

export default { createThrow };
