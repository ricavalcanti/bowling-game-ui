import { gamesBaseUrl, defaultHeaders } from './constants';
import { getResponseBody } from './utils';

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

export const deleteGame = async id => {
  const response = await fetch(`${gamesBaseUrl}/${id}`, {
    defaultHeaders,
    method: 'DELETE',
  });

  const responseBody = await getResponseBody(response);

  return responseBody;
};
