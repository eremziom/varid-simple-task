<template>
   <div style="margin-top: 20px;">
        <div class="container">
            <label for="currency-select">Choose currency</label>
            <select name="currency" id="currency-select" v-model="select">
                <option value="usd">US Dollar</option>
                <option value="eur">EURO</option>
                <option value="gbp">GB Pound</option>
            </select>
            <label for="rate-input">Enter quantity</label>
            <input type="number" id="rate-input" v-model="quantity"/>
            <div style="margin-top: 20px;">
                <button v-on:click="count()">Result in PLN</button>
            </div>
            <p v-if="result">Result: {{result}} PLN </p>
        </div>
   </div>
</template>

<script>
export default {
    name: 'ExchangeConverter',
    computed: {
        stateData(){
            return this.$store.state;
        }
    },
    methods: {
        count(){
            this.result = this.quantity * this.stateData[this.select]
        }
    },
    data: function(){
        return {
            quantity: null,
            select: 'usd',
            result: null,
        }
    },
}
</script>
<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        max-width: 200px;
        margin: 0 auto;
    }
</style>