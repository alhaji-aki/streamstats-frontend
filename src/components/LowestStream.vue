<template>
    <div class="card">
        <div class="card-body">
            <h5
                class="text-muted fw-normal mt-0"
                title="Views Needed"
            >Views Needed for Lowest Stream to get to Top Streams</h5>
            <h3 class="mt-3 mb-3">{{ displayCount }}</h3>
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
        async loadData() {
            this.loading = true;

            await axios
                .get('/stats/lowest-followed-stream')
                .then((res) => {
                    this.stream = res.data.data.stream
                    this.count = res.data.data.streams_needed;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally((this.loading = false));
        },
    },
    mounted() {
        this.loadData()
    }
}
</script>