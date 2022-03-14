<template>
  <main>
    <div class="container-fluid">
      <div class="row g-3">
        <div class="col-md-6 col-xxl-4">
          <Games title="Top Followed Streams" />
        </div>
        <div class="col-md-6 col-xxl-4">
          <Games title="Top Games By No. of Streams" />
        </div>
        <div class="col-md-6 col-xxl-4">
          <Games title="Top Games By Viewer Count" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Games from "../components/Games.vue"

export default {
  components: {
    Games
  }
}
</script>
