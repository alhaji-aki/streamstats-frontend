<template>
    <div class="card list-item">
        <div class="card-header">
            <slot name="title"></slot>
        </div>
        <ul class="list-group list-group-flush border-bottom scrollarea">
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
            <SingleGame />
        </ul>
        <div class="card-footer d-flex justify-content-between">
            <button class="btn btn-primary">Prev</button>
            <button class="btn btn-primary">Next</button>
        </div>
    </div>
</template>

<script>
import SingleGame from "@/components/SingleGame.vue"
import gameSetup from "@/mixins/gameSetup"

export default {
    mixins: [gameSetup],
    components: {
        SingleGame
    }
}
</script>

<style scoped>
.list-item {
    max-height: 80vh;
}

.scrollarea {
    overflow-y: auto;
}
</style>