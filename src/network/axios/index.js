import axiosInstance from './instances';

export const axiosInstanceService = (method, uri, data = {}, configs = {}) => {
  return axiosInstance({
    method,
    url: uri,
    data,
    ...configs,
  }).then(response => response?.data);
};


