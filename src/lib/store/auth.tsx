import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthorized: false,
      user: {},
      setAuth: (payload: any) =>
        set((state: any) => ({ ...state, ...payload })),
    }),
    {
      name: "auth",
    }
  )
);

export { useAuthStore };
