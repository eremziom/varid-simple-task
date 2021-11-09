<template>
    <div style="margin-top: 20px;">
        <div class="container">
            <label for="currency-select">Choose currency</label>
            <select name="currency" id="currency-select" v-model="select">
                <option value="usd">US Dollar</option>
                <option value="eur">EURO</option>
                <option value="gbp">GB Pound</option>
            </select>
            <label for="rate-input">Enter rate</label>
            <input type="number" id="rate-input" v-model="rate"/>
            <div style="margin-top: 20px;">
                <button v-on:click="setRate()">Save Currency</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddCurrency',
    methods: {
        setRate(){
            let payload = this.rate;
            switch (this.select){
                case 'usd':
                    this.$store.commit('saveUsdRate', payload);
                    break;
                case 'eur':
                    this.$store.commit('saveEurRate', payload);
                    break;
                case 'gbp':
                    this.$store.commit('saveGbpRate', payload);
                    break;
            }
            this.rate = null;

        }
    },
    data: function(){
        return {
            rate: null,
            select: 'usd',
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