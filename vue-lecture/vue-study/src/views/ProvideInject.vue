<template>
    <div>
        <ProvideInjectChild/> 
    </div>
</template>
<script>
    import ProvideInjectChild from "./ProvideInjectChild";
    export default {
        components: {ProvideInjectChild},
        data() {
            return{
                item:["A", "B"],
            };
        },
        provide(){
            return {
                itemLength: this.item.length,
            };
        },
    };
</script>
<style scoped>
</style>