<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >Stream Stats</a>

        <div class="dropdown text-end d-flex">
          <div v-if="isLoggedIn">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img :src="user.avatar" alt="mdo" width="32" height="32" class="rounded-circle me-2" />
              <h5 class="d-inline me-1">{{ user.username }}</h5>
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style>
              <li>
                <a @click="logout" class="dropdown-item">Sign out</a>
              </li>
            </ul>
          </div>
          <LoginButton v-else />
        </div>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useAuthenticationStore } from './stores/authentication'
import axios from "@/axios"
import LoginButton from "@/components/LoginButton.vue"

export default {
  computed: {
    ...mapState(useAuthenticationStore, ["isLoggedIn", 'user']),
  },
  methods: {
    ...mapActions(useAuthenticationStore, ["setAuthData", "clearAuthData"]),
    logout() {
      this.clearAuthData();
      this.$router.push('/auth')
    }
  },
  created() {
    const userInfo = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (userInfo && token) {
      const userData = JSON.parse(userInfo);
      this.setAuthData(userData, token);
    }
    axios.interceptors.response.use(response => response, error => {
      if (error.response.status === 401) {
        console.log("error", 401);
        this.logout();
      }
      return Promise.reject(error);
    });
  },
  components: { LoginButton }
}
</script>

<style>
</style>
