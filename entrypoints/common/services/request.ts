interface RequestConfig extends RequestInit {
  params?: Record<string, any>;
  timeout?: number;
}

export interface ResponseData<T = any> {
  code: number | string;
  data: T;
  msg: string | undefined;
  remark?: string | undefined;
}

const baseUrl = process.env.BASE_URL

console.log(baseUrl)

const request = async <T>(url: string, config: RequestConfig): Promise<T> => {
  try {
    const { params, timeout = 10000, headers = {}, ...rest } = config;

    // 处理 URL
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    const queryString = params ? `?${new URLSearchParams(params as Record<string, string>)}` : '';

    // 统一处理 headers
    const defaultHeaders = {
      ...headers,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(`${fullUrl}${queryString}`, {
      ...rest,
      headers: defaultHeaders,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ResponseData<T> = await response.json();

    if (result.code !== 10000) {
      throw new Error(result.msg || 'Request failed');
    }

    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Request failed: ${error.message}`);
    }
    throw new Error('Unknown error occurred');
  }
};

// GET 请求
export const get = <T>(url: string, params?: Record<string, any>, headers = {}) => {
  return request<T>(url, {
    method: 'GET',
    params,
    headers: {
      ...headers
    }
  });
};

// POST 请求
export const post = <T>(url: string, data?: any, headers = {}) => {
  return request<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      ...headers
    }
  });
};