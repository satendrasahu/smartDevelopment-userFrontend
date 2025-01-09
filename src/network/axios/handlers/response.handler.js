export const responseSuccessHandler = (response) => {
    console.log('Response:', response);
  //   // alert("record get successfully")
  //   openSuccessToaster({message:languageTranslator(response?.config?.message)})
    return response;
};
