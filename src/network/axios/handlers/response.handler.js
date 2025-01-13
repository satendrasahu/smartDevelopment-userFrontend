import { languageTranslator } from "../../../helpers/general.helpers";
import { openSuccessToaster } from "../../../helpers/toaster.helpers";

export const responseSuccessHandler = (response) => {
  response?.config?.message &&
    openSuccessToaster({
      message: languageTranslator(response?.config?.message),
    });
  return response;
};
