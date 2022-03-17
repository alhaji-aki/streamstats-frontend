<template>
    <div class="card list-item">
        <div class="card-header">
            <div class="row align-items-center">
                <div class="col">
                    <h5 class="mb-0">Top Followed Streams</h5>
                </div>
                <div class="col-auto text-center pe-card">
                    <button
                        class="btn btn-secondary"
                        :disabled="loading"
                        type="button"
                        @click="refresh"
                    >Refresh</button>
                </div>
            </div>
        </div>
        <div v-if="!loading && fetching_followed_streams" class="card-body">
            <p>We currently getting your followed streams from twitch. click the refresh button on this card to try again.</p>
        </div>
        <div v-else-if="!loading && streams.length === 0" class="card-body">
            <p>You are not following any streams in the top 1000 streams.</p>
        </div>
        <ul
            v-else-if="!loading && streams.length > 0"
            class="list-group list-group-flush border-bottom scrollarea"
        >
            <SingleStream v-for="stream in streams" :stream="stream" :key="stream.id" />
        </ul>
        <p v-else>Loading...</p>
    </div>
</template>

<script>
import axios from "@/axios";
import SingleStream from "./SingleStream.vue";

export default {
    data() {
        return {
            streams: [],
            fetching_followed_streams: false,
            loading: false,
        };
    },
    methods: {
        refresh() {
            this.loadData()
        },
        async loadData() {
            this.loading = true;
            await axios
                .get("/stats/top-streams-user-follows")
                .then((res) => {
                    this.fetching_followed_streams = !!res.data.data.fetching_followed_streams
                    this.streams = res.data.data;
                    this.loading = false
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false
                });
        },
    },
    created() {
        this.loadData();
    },
    components: { SingleStream }
}
</script>

<style scoped>
.list-item {
    max-height: 465px;
}

.scrollarea {
    overflow-y: auto;
}
</style>