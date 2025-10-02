export function apiClient() {
  return {
    get: () => Promise.resolve({ data: null }),
    post: () => Promise.resolve({ data: null })
  };
}


