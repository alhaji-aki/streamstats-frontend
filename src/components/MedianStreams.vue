<template>
    <div class="card">
        <div class="card-body">
            <h5 class="text-muted fw-normal mt-0" title="Median Streams">Median Number of Streams</h5>
            <h3 class="mt-3 mb-3">{{ count }}</h3>
        </div>
    </div>
</template>

<script>
import axios from "@/axios";

export default {
    data() {
        return {
            count: 0,
            loading: false,
        };
    },
    methods: {
        async loadData() {
            this.loading = true;

            await axios
                .get('/stats/median-views')
                .then((res) => {
                    this.count = res.data.data.value;
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