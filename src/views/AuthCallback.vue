<template>
    <p>Please wait...</p>
</template>

<script>
import api from "../axios"
import { mapActions } from "pinia"
import { useAuthenticationStore } from '@/stores/authentication'

export default {
    data() {
        return {
            token: this.$route.query.token ? this.$route.query.token : null
        }
    },
    methods: {
        ...mapActions(useAuthenticationStore, ['setAuthData', 'clearAuthData'])
    },
    async mounted() {
        await api.get('/auth/user', {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).then((res) => {
            this.setAuthData(res.data, this.token);
            this.$router.push('/')
        }).catch((error) => {
            let message = this.$route.query.error ? this.$route.query.error : 'We failed to log you in. Please try again shortly.';

            this.clearAuthData();
            this.$router.push(`/auth?error=${message}`);
        });
    }
}
</script>

<style>
</style>