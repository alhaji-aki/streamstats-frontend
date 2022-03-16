<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Stream Stats</h1>
    <div class="col-lg-6 mx-auto">
      <p
        class="lead mb-4"
      >Welcome to the Stream Stats App... Where you can find all some awesome statistics about the streams you follow and the top 1000 streams on Twitch.</p>

      <div
        class="alert alert-danger d-flex align-items-center alert-dismissible fade show mb-3"
        role="alert"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="Warning:"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
        <div>{{ $route.query.error }}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>

      <LoginButton />
    </div>
  </div>
</template>

<script>
import LoginButton from "../components/LoginButton.vue";
export default {
  components: {
    LoginButton
  }
}
</script>


