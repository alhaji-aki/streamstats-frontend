<template>
    <div class="card list-item">
        <div class="card-header">
            <h5 class="mb-0">Top Followed Streams</h5>
        </div>
        <ul
            v-if="!loading && streams.length > 0"
            class="list-group list-group-flush border-bottom scrollarea"
        >
            <SingleStream v-for="stream in streams" :stream="stream" :key="stream.id" />
        </ul>
        <p v-else-if="loading">Loading</p>
        <p v-else>No data to display</p>
    </div>
</template>

<script>
import axios from "@/axios";
import SingleStream from "./SingleStream.vue";

export default {
    data() {
        return {
            streams: [],
            loading: false,
        };
    },
    methods: {
        async loadData() {
            this.loading = true;
            await axios
                .get("/stats/top-streams-user-follows")
                .then((res) => {
                    this.streams = res.data.data;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally((this.loading = false));
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