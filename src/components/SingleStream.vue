<template>
    <li class="list-group-item list-group-item-action py-3 lh-tight">
        <div class="d-flex align-items-center position-relative">
            <img class="rounded-1 border border-200" :src="imageUrl" width="60" alt="sadsa" />
            <div class="flex-1 ms-3">
                <h6 class="mb-1 fw-semi-bold">{{ stream.title }}</h6>
                <p class="fw-semi-bold mb-0 text-500">Game: {{ stream.game.name }}</p>
                <p class="fw-semi-bold mb-0 text-500">Streamer: {{ stream.streamer.name }}</p>
                <p class="fw-semi-bold mb-0 text-500">Views: {{ stream.viewer_count }}</p>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['stream'],
    computed: {
        imageUrl() {
            return this.stream.thumbnail_url.replace('{width}', 600).replace('{height}', 600)
        }
    }
}
</script>