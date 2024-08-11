import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthorized: false,
  user: {},
  setAuth: (payload: any) => set((state: any) => ({ ...state, ...payload })),
}));

export { useAuthStore };
  