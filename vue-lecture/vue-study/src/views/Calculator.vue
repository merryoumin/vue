<template>
<div>
    <div>
        <h2>calculator</h2>
    </div>
    <div>
        <input type="text" v-model.number="num1" @keyup="plusNumbers" />
        <span>+</span>
        <input type="text" v-model.number="num2" @keyup="plusNumbers" />
        <span>=</span>
        <span>{{result}}</span>
    </div>
</div>    
</template> s
<script>
    export default {
        name : 'calculator',
        data() {
            return{
                num1: 0,
                num2: 0,
                result: 0
            };
        },
        methods:{
            plusNumbers(){
                //this.result = parseInt(this.num1) + parseInt(this.num2);
                this.result = this.num1 + this.num2;
            }
        }
    }
</script>
<style scoped>
</style>