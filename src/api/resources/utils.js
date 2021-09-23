export const getResponseBody = async response => {
  const responseBody = await response.json();

  return responseBody;
};

export default { getResponseBody };
