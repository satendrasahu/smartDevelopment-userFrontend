import { languageTranslator } from "../../../helpers/general.helpers";
import { openErrorToaster } from "../../../helpers/toaster.helpers";

export const errorHandler = (error) => {
	// if (error?.response?.status === 500) {
	// 	// Snackbar Internal Server Error
	// 	openErrorToaster({
	// 		message: languageTranslator(errorMessages.internalServerError),
	// 	});
	// 	if (error?.response?.config?.loader) {
	// 		store.dispatch(stopLoader(error.response.config.loader));
	// 	}
	// 	return Promise.reject(error?.response?.data?.errors);
	// }
	// if (error?.response?.status === 401) {
	// 	// Snackbar UnAuthed
	// 	// openErrorToaster({
	// 	// 	message:
	// 	// 		(error.response.data &&
	// 	// 			error.response.data?.errors &&
	// 	// 			error.response.data?.errors[0]?.description) ||
	// 	// 		languageTranslator(errorMessages.unAuthorized),
	// 	// });
	// 	// signOut();
	// 	if (error?.response?.config?.loader) {
	// 		store.dispatch(stopLoader(error.response.config.loader));
	// 	}
	// 	return Promise.reject(error?.response?.data?.errors);
	// }
	// if (error?.response?.status === 404) {
	// 	// Snackbar UnAuthed
	// 	// openErrorToaster({
	// 	//   message: languageTranslator(errorMessages.endPointNotFound),
	// 	// })
	// 	if (error?.response?.config?.loader) {
	// 		store.dispatch(stopLoader(error.response.config.loader));
	// 	}
	// 	return;
	// }
	// if (error?.response?.status === 403) {
	// 	window.location.href = '/';
	// 	signOut();
	// 	if (error?.response?.config?.loader) {
	// 		store.dispatch(stopLoader(error.response.config.loader));
	// 	}
	// 	return;
	// }
	// if (
	// 	error?.response?.data?.errors?.[0]?.description === 'EXCLUDED_TEMPORARILY'
	// ) {
	// 	const tempTime = JSON.parse(
	// 		error?.response?.data?.errors?.[0]?.description
	// 	)?.time;
	// 	const time = moment(tempTime).fromNow(tempTime);
	// 	const errorMsg = `${languageTranslator(errorMessages.disabledForTime)} ${time}`;
	// 	openErrorToaster({ message: errorMsg });
	// 	if (error?.response?.config?.loader) {
	// 		store.dispatch(stopLoader(error.response.config.loader));
	// 	}
	// 	return;
	// }
	// if (error?.response?.config?.loader) {
	// 	// Other errors
	// 	store.dispatch(stopLoader(error.response.config.loader));
	// }
	// // Open Error Toaster
	// const errorMessage =
	// 	error?.response?.data?.errors?.[0]?.description || 'Something went wrong!';
	// openErrorToaster({
	// 	message: languageTranslator(
	// 		errorMessages[errorMessage] ? errorMessages[errorMessage] : errorMessage
	// 	),
	// });

	// return Promise.reject(error?.response?.data?.errors);
    return Promise.reject(error)
};