<template>
    <div>
        <h1>cart: {{cartCount}}</h1>
        <h2>count :  {{count}}</h2>
        <h2>count A :  {{productACount}}</h2>
        <button type="button" @click="increment">increment</button>
    </div>
</template>
<script>
    export default {
       computed: {
           count(){
               return this.$store.state.count;
           },
           cartCount(){
               return this.$store.getters.cartCount;
           },
           productACount(){
               return this.$store.getters.productACount;
           }
       },
       methods: {
           increment(){
               this.$store.commit("increment");
           }
       },
    }
</script>
<style scoped>
</style>