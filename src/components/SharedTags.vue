<template>
    <div class="card list-item">
        <h5 class="card-header">Shared Tags</h5>
        <div class="card-body" style="max-height:250px; overflow-y:scroll">
            <Tag
                v-for="( tag, index ) in tags"
                :class="{ 'ms-2': index > 0 }"
                :tag="tag"
                :key="tag.id"
            />
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
            loading: false,
        };
    },
    methods: {
        async loadData() {
            this.loading = true;

            await axios
                .get('/stats/tags')
                .then((res) => {
                    this.tags = res.data.data
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally((this.loading = false));
        },
    },
    created() {
        this.loadData()
    }
}
</script>
