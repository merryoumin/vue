<template>
<div>
    <div>
        <h2>calculator</h2>
    </div>
    <div>
        <input type="text" v-model.number="state.num1"/>
        <span>+</span>
        <input type="text" v-model.number="state.num2"/>
        <span>=</span>
        <span>{{state.result}}</span>
    </div>
</div>    
</template> 
<script>
    import {reactive, computed} from 'vue';
    export default {
        name : 'calculator',
        setup() {
            let state = reactive({ //reactive를 이용해서 num1, num2, result를 실시간 변경사항에 대해 반응형 적용 (data랑 비슷)   
                num1: 0,
                num2: 0,
                result: computed(() => state.num1 +  state.num2)
            });

            return {
                state
            };
        },
    };
</script>
<style scoped>
</style>