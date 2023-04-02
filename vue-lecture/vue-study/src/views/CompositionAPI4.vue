<template>
<div>
    <div>
        <h2>calculator</h2>
    </div>
    <div>
        <input type="text" v-model.number="num1"/>
        <span>+</span>
        <input type="text" v-model.number="num2"/>
        <span>=</span>
        <span>{{result}}</span>
    </div>
</div>    
</template> 
<script>
    import {plusCalculator} from '../common.js';

    export default {
        name : 'calculator',
        setup() {
           let{ num1, num2, result} = plusCalculator();

           return {
               num1,
               num2,
               result,
           };
        },
    };
</script>
<style scoped>
</style>