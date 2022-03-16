<template>
    <button
        @click="login"
        type="button"
        class="btn btn-dark btn-lg px-4 gap-3"
    >Login With Your Twitch Account</button>
</template>

<script>
export default {
    methods: {
        login() {
            window.location.href = import.meta.env.VITE_API_URL + '/auth/redirect'
        }
    }
}
</script>
