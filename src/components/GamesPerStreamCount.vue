<template>
    <div class="card">
        <div class="card-header">
            <h5>Top Games per streams count</h5>
        </div>
        <div class="card-body">
            <table v-if="!loading" class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">Game</th>
                        <th scope="col">Streams</th>
                    </tr>
                </thead>
                <tbody v-if="games.length > 0">
                    <tr v-for="game in games" :key="game.name">
                        <td>{{ game.name }}</td>
                        <td>{{ game.streams_count }}</td>
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
            loading: false,
        };
    },
    methods: {
        async loadData() {
            this.loading = true;

            await axios
                .get('/stats/streams-per-game')
                .then((res) => {
                    this.games = res.data.data;
                    this.loading = false
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false
                });
        },
    },
    created() {
        this.loadData()
    }
}
</script>
