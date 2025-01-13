import axiosInstance from './instances';

export const axiosInstanceService = (method, uri, data = {}, configs = {}) => {
  //  for see config keys
  // const {message} = configs
  return axiosInstance({
    method,
    url: uri,
    data,
    ...configs,
  }).then(response => response?.data);
};


