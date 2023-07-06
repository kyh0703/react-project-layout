import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

import { API_URI, REFRESH_API_URL } from '@/config';
import storage from '@/lib/storage/storage.lib';

const client = axios.create({
  baseURL: API_URI,
});

const logOnDev = (message: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(message);
  }
};

const onLoading = async (type: string) => {
  // const baseStore = useBaseStore();
  // const { startLoading, stopLoading, cancelLoading } = baseStore;
  // switch (type) {
  //   case 'request':
  //     startLoading();
  //     break;
  //   case 'response':
  //     stopLoading();
  //     break;
  //   case 'error':
  //     cancelLoading();
  //     break;
  //   default:
  //     break;
  // }

  return Promise.resolve();
};

const onError = async (message: string) => {
  // const baseStore = useBaseStore();
  // const { setAlertMessage } = baseStore;
  // setAlertMessage({
  //   type: 'error',
  //   message,
  // });
  return Promise.resolve();
};

const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const { method, url } = config;
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);
  onLoading('request');
  if (method === 'get') {
    config.params = {
      ...config.params,
      _t: Date.now(),
    };
    config.timeout = 15000;
  }
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config;
  const { status } = response;
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
  onLoading('response');
  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as AxiosRequestConfig;
    const { statusText, status } = error.response as AxiosResponse;

    logOnDev(
      `🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`,
    );

    switch (status) {
      case 401: {
        onError('로그인이 필요합니다.');
        break;
      }
      case 403: {
        onError('권한이 없습니다.');
        break;
      }
      case 404: {
        onError('잘못된 요청입니다.');
        break;
      }
      case 500: {
        onError('서버에 문제가 발생했습니다.');
        break;
      }
      default: {
        onError('알 수 없는 오류가 발생했습니다.');
        break;
      }
    }
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`);
    onError(error.message);
  }

  onLoading('error');
  return Promise.reject(error);
};

client.interceptors.request.use(onRequest);
client.interceptors.response.use(onResponse, onErrorResponse);
export default client;

// const getRefreshToken = async (): Promise<string | void> => {
//   try {
//     const {
//       data: { accessToken, refreshToken },
//     } = await axios.get<{ accessToken: string; refreshToken: string | null }>(
//       REFRESH_URL,
//     );
//     storage.setItem('access_token', accessToken);
//     if (refreshToken !== null) {
//       storage.setItem('refresh_token', refreshToken);
//     }
//     return accessToken;
//   } catch (e) {
//     storage.removeItem('access_token');
//     storage.removeItem('refresh_token');
//   }
// };

// function authRequestInterceptor(config: AxiosRequestConfig) {
//   if (!config.headers) return config;
//   let token: string | null = null;

//   if (config.url === REFRESH_API_URL) {
//     token = storage.getItem('refresh_token');
//   } else {
//     token = storage.getItem('access_token');
//   }

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   config.headers.Accept = 'application/json';
//   return config;
// }
