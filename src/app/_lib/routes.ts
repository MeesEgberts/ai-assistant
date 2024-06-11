export const routes = {
  dashboard: "/",
  chats: "/chat",
  chat: (id: string) => `/chat/${id}`,
  keys: "/keys",
} as const;
