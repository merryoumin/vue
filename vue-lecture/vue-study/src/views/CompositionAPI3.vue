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
    import {reactive, computed, toRefs} from 'vue';
        function plusCalculator(){
            let state = reactive({ 
                num1: 0,
                num2: 0,
                result: computed(() => state.num1 +  state.num2)
            });
            return toRefs(state);
        }

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