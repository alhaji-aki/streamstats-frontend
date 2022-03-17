<template>
    <div class="card">
        <h5 class="card-header">Streams by Start Time</h5>
        <div class="card-body" style="height: 510px">
            <canvas id="time-chart"></canvas>
        </div>
    </div>
</template>

<script>
import axios from "@/axios";
import Chart from "chart.js/auto"

export default {
    data() {
        return {
            chartData: [],
        }
    },
    methods: {
        async loadData(chart) {
            await axios
                .get('/stats/streams-by-start-time')
                .then((res) => {
                    chart.data.labels = res.data.data.labels
                    chart.data.datasets = res.data.data.datasets
                    chart.update()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        const ctx = document.getElementById('time-chart');
        let chart = new Chart(ctx, {
            type: "line",
            options: {
                responsive: true,
                lineTension: 1,
            }
        });

        this.loadData(chart)
    }
}
</script>

<style>
</style>