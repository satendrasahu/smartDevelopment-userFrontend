export const requestHandler = (request) => {
  console.log("Request:", request);
//   openErrorToaster({ message: languageTranslator(request?.config?.message) });
  return request;
};
