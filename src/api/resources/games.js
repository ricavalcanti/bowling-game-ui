import { getAllGamesUrl } from './constants';

const getResponseBody = async response => {
  const responseBody = await response.json();

  return responseBody;
};

export const getAllGames = async () => {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(getAllGamesUrl, {
    defaultHeaders,
  });

  const responseBody = await getResponseBody(response);

  return responseBody;
};

export default { getAllGames };
