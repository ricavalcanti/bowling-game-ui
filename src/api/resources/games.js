import gamesBaseUrl from './constants';

const getResponseBody = async response => {
  const responseBody = await response.json();

  return responseBody;
};

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export const getAllGames = async () => {
  const response = await fetch(gamesBaseUrl, {
    defaultHeaders,
  });

  const responseBody = await getResponseBody(response);

  return responseBody;
};

export const getOneGame = async id => {
  const response = await fetch(`${gamesBaseUrl}/${id}`, {
    defaultHeaders,
  });

  const responseBody = await getResponseBody(response);

  return responseBody;
};

export const createGame = async () => {
  const response = await fetch(gamesBaseUrl, {
    defaultHeaders,
    method: 'POST',
  });

  const responseBody = await getResponseBody(response);

  return responseBody;
};

export default { getAllGames, getOneGame };
