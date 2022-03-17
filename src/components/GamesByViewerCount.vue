<template>
    <div class="card">
        <div class="card-header">
            <h5>Top Games By Viewer Count</h5>
        </div>
        <div class="card-body">
            <table v-if="!loading" class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Views</th>
                    </tr>
                </thead>
                <tbody v-if="games.length > 0">
                    <tr v-for="game in games" :key="game.name">
                        <td>{{ game.name }}</td>
                        <td>{{ game.views }}</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="2">No data to display</td>
                    </tr>
                </tbody>
            </table>
            <p v-else>Loading</p>
        </div>
    </div>
</template>

<script>
import axios from "@/axios";

export default {
    data() {
        return {
            games: [],
            loading: true,
        };
    },
    methods: {
        async loadData() {
            await axios
                .get('/stats/top-games-by-views')
                .then((res) => {
                    this.games = res.data.data;
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
