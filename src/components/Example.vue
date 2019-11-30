<template>  
    <div class="container">
        <h1>Webpack message: {{ message }}</h1>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: null
        }
    },
    created () {
        this.message = this.$store.getters.getMessage
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: rgb(248, 248, 248);
    padding: 30px;
    border-radius: 10px;
    width: 800px;
    margin: auto;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .15)
}
h1 {
    font-family: 'Roboto', sans-serif;
    margin: 0;
}
</style>