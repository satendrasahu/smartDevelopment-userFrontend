import { getAuthToken } from "../../../helpers/cookie.helpers";
export const requestHandler = (request) => {

  console.log(request?.handlerEnabled)
  if(getAuthToken()){
    console.log(getAuthToken())
  }


  // if (request?.handlerEnabled) {
	// 	const authToken = getAuthToken();
	// 	request.withCredentials = true;
	// 	if (authToken) {
	// 		request.headers.Authorization = `Bearer ${authToken}`;
	// 		// request.headers.Authorization = `AccessToken=${authToken}`;
	// 		// request.headers.cookie = `AccessToken=${authToken}`;
	// 		// request.headers.Cookie = `AccessToken=${authToken}`;
	// 	}
	// 	const { params } = request;
	// 	const filteredParams = {};
	// 	Object.keys(params || {}).forEach((key) => {
	// 		if (
	// 			params[key] === '' ||
	// 			params[key] === '' ||
	// 			params[key] === null ||
	// 			params[key] === undefined
	// 		) {
	// 			// filteredParams[key] = params[key];
	// 		} else {
	// 			filteredParams[key] = params[key];
	// 		}
	// 	});
	// 	request.params = { ...filteredParams };
	// }
  return request;
};
