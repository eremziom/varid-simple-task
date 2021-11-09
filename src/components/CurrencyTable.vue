<template>
    <div style="margin-top: 20px;">
        <div class="container">
            <table>
                <tr>
                    <th>Currency</th>
                    <th>Exchange rate</th>
                </tr>
                <tr v-for="(value, name) in stateData" :key="name">
                    <td>{{name}}</td>
                    <td>{{value ? value : 'Not Set'}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CurrencyTable',
    computed: {
        stateData(){
            return this.$store.state;
        },
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
    }
    table, th, td {
        border: 1px solid white;
        border-collapse: collapse;
    }
    th, td {
        background-color: lightgray;
        width: 50%;
    }
</style>