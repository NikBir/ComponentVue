<template>  
    <div class="container">
        <h1>{{ message }}</h1>
        <div class="currency-transfer">
            <div class="col">
                <input type="text" value="1" name="curr_input" id="curr_input">
            </div>
            <div class="col">
                <select name="selectFrom" id="selectFrom"/>
            </div>
            <div class="col col_to">
                <button id="text-convert-to">{{ textBtn }}</button>
            </div>
            <div class="col">
                <select name="selectTo" id="selectTo"/>
            </div>
            <div class="col">
                <input type="text" name="curr_output" id="curr_output" disabled>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: null,
            textBtn: null
        }
    },
    created () {
        this.message = this.$store.getters.getMessage,
        this.textBtn = this.$store.getters.getTextBtn
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: rgb(248, 248, 248);
    padding: 30px;
    border-radius: 10px;
    width: 800px;
    box-shadow: 0 0 10px rgba($color: #9e9e9e, $alpha: 1);
}
h1 {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    margin-bottom: 30px;
    text-align: center;
}
</style>