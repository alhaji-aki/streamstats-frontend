<template>
  <main>
    <div class="container-fluid mb-5">
      <div class="row g-3 mb-5">
        <div class="col-md-6 col-xxl-4">
          <TopFollowedStreams />
        </div>
        <div class="col-md-6 col-xxl-4">
          <GamesPerStreamCount />
        </div>
        <div class="col-md-6 col-xxl-4">
          <GamesByViewerCount />
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-6">
          <div class="row">
            <div class="col-12">
              <SharedTags />
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row">
            <div class="col-12 mb-3">
              <MedianStreams />
            </div>

            <div class="col-12 mb-3">
              <LowestStream />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="row">
            <div class="col-12 mb-3">
              <TopStreams />
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <StreamsTimeChart />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GamesByViewerCount from "../components/GamesByViewerCount.vue"
import GamesPerStreamCount from "../components/GamesPerStreamCount.vue"
import TopFollowedStreams from "../components/TopFollowedStreams.vue"
import MedianStreams from "../components/MedianStreams.vue"
import LowestStream from "../components/LowestStream.vue"
import SharedTags from "../components/SharedTags.vue"
import StreamsTimeChart from "../components/StreamsTimeChart.vue"
import TopStreams from "../components/TopStreams.vue"

export default {

  components: {
    GamesByViewerCount,
    GamesPerStreamCount,
    TopFollowedStreams,
    MedianStreams,
    LowestStream,
    SharedTags,
    StreamsTimeChart,
    TopStreams
  }
}
</script>
