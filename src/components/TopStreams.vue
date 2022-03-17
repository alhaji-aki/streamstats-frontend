<template>
    <div class="card list-item">
        <div class="card-header">
            <div class="row align-items-center">
                <div class="col">
                    <h6 class="mb-0">Top Streams</h6>
                </div>
                <div class="col-auto text-center pe-card">
                    <select
                        :disabled="disableSelect"
                        v-model="direction"
                        @change="onSelectChange"
                        class="form-select form-select-sm"
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
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
    components: { SingleStream },
    data() {
        return {
            streams: [],
            direction: 'asc',
            loading: false,
            disableSelect: true
        };
    },
    methods: {
        onSelectChange() {
            this.loadData()
        },
        async loadData() {
            this.loading = true;
            this.disableSelect = true
            await axios
                .get(`/stats/top-streams?direction=${this.direction}`)
                .then((res) => {
                    this.streams = res.data.data;
                    this.loading = false
                    this.disableSelect = false
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false
                    this.disableSelect = false
                });
        },
    },
    created() {
        this.loadData();
    },
}
</script>

<style scoped>
.list-item {
    max-height: 550px;
}

.scrollarea {
    overflow-y: auto;
}
</style>