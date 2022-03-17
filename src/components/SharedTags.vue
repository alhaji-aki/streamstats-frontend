<template>
    <div class="card list-item">
        <div class="card-header">
            <div class="row align-items-center">
                <div class="col">
                    <h5 class="mb-0">Shared Tags</h5>
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
        <div
            v-else-if="!loading && tags.length > 0"
            class="card-body"
            style="max-height:250px; overflow-y:scroll"
        >
            <Tag
                v-for="( tag, index ) in tags"
                :class="{ 'ms-2': index > 0 }"
                :tag="tag"
                :key="tag.tag_id"
            />
        </div>
        <div v-else-if="!loading && tags.length === 0" class="card-body">
            <p>You have no shared tags with the top 1000 streams.</p>
        </div>
        <div v-else class="card-body">
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
import axios from "@/axios";
import Tag from "./Tag.vue";
export default {
    components: { Tag },
    data() {
        return {
            tags: [],
            loading: true,
            fetching_followed_streams: false,
        };
    },
    methods: {
        refresh() {
            this.loadData()
        },
        async loadData() {
            this.loading = true;

            await axios
                .get('/stats/tags')
                .then((res) => {
                    this.fetching_followed_streams = !!res.data.data.fetching_followed_streams
                    this.tags = res.data.data
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
