export const getResponseBody = async response => {
  if (response.ok !== true || response.status === 204) {
    return {};
  }
  const responseBody = await response.json();

  return responseBody;
};

export default { getResponseBody };
