<template>
    <div class="card">
        <div class="card-header">
            <div class="row align-items-center">
                <div class="col">
                    <h5 class="mb-0">Lowest Stream views needed to get to Top Streams</h5>
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
        <div class="card-body">
            <p
                v-if="!loading && fetching_followed_streams"
            >We currently getting your followed streams from twitch. click the refresh button on this card to try again.</p>
            <p v-else-if="!loading && stream && !stream.exists">You have no followed streams.</p>
            <h3 v-else-if="!loading && stream && stream.exists" class="mt-3 mb-3">{{ displayCount }}</h3>
            <p v-else>Loading...</p>
        </div>
    </div>
</template>

<script>
import axios from "@/axios";

export default {
    data() {
        return {
            stream: null,
            count: 0,
            loading: false,
            fetching_followed_streams: false,
        };
    },
    computed: {
        displayCount() {
            if (this.stream) {
                let abscount = Math.abs(this.count);

                return this.count > 0 ? `${this.stream.title} needs ${this.count} streams to be in the top streams.` : `${this.stream.title} has ${abscount} streams more than the least top stream.`
            }

            return '...'
        }
    },
    methods: {
        refresh() {
            this.loadData()
        },
        async loadData() {
            this.loading = true;

            await axios
                .get('/stats/lowest-followed-stream')
                .then((res) => {
                    this.fetching_followed_streams = !!res.data.data.fetching_followed_streams
                    this.stream = res.data.data.stream
                    this.count = res.data.data.streams_needed;
                    this.loading = false
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false
                });
        },
    },
    mounted() {
        this.loadData()
    }
}
</script>