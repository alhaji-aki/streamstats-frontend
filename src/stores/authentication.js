import { defineStore } from "pinia";
import axios from "@/axios";

export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    isLoggedIn: (store) => !!store.user,
  },
  actions: {
    setAuthData(user, token) {
      this.user = user;
      this.token = token;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    clearAuthData() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.token = null;
      this.user = null;
    },
  },
});
