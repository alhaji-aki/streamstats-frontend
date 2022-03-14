<template>
  <main>
    <div class="container-fluid mb-5">
      <div class="row g-3 mb-5">
        <div class="col-md-6 col-xxl-4">
          <Games>
            <template #title>
              <h5 class="mb-0">Top Followed Streams</h5>
            </template>
          </Games>
        </div>
        <div class="col-md-6 col-xxl-4">
          <Games>
            <template #title>
              <h5 class="mb-0">Top Games By No. of Streams</h5>
            </template>
          </Games>
        </div>
        <div class="col-md-6 col-xxl-4">
          <Games>
            <template #title>
              <h5 class="mb-0">Top Games By Viewer Count</h5>
            </template>
          </Games>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-4">
          <div class="row">
            <div class="col-12 mb-3">
              <Games>
                <template #title>
                  <div class="row align-items-center">
                    <div class="col">
                      <h6 class="mb-0">Top Streams</h6>
                    </div>
                    <div class="col-auto text-center pe-card">
                      <select class="form-select form-select-sm">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                      </select>
                    </div>
                  </div>
                </template>
              </Games>
            </div>
          </div>
        </div>

        <div class="col-md-8">
          <div class="card">
            <h5 class="card-header">Streams by Start Time</h5>
            <div class="card-body h-100">
              Graph here
              <canvas height="415"></canvas>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <h5 class="card-header">Shared Tags</h5>
                <div class="card-body">
                  <Tag tag="Something so" />
                  <Tag tag="Something so" class="ms-2" />
                  <Tag tag="Something so" class="ms-2" />
                  <Tag tag="Something so" class="ms-2" />
                  <Tag tag="Something so" class="ms-2" />
                  <Tag tag="Something so" class="ms-2" />
                  <Tag tag="Something so" class="ms-2" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row">
            <div class="col-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5
                    class="text-muted fw-normal mt-0"
                    title="Median Streams"
                  >Median Number of Streams</h5>
                  <h3 class="mt-3 mb-3">36,254</h3>
                </div>
              </div>
            </div>

            <div class="col-12 mb-3">
              <div class="card">
                <div class="card-body">
                  <h5
                    class="text-muted fw-normal mt-0"
                    title="Views Needed"
                  >Views Needed for Lowest Stream to get to Top Streams</h5>
                  <h3 class="mt-3 mb-3">5,543</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Games from "../components/Games.vue"
import Tag from "../components/Tag.vue"

export default {
  components: {
    Games, Tag
  }
}
</script>
