exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "dupa";
  return {
    statusCode: 200,
    body: `czesc ${subject}`,
  };
};
