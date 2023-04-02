<template>
    <div>
        <input type="text" v-model="name"/>
        <input type="text" v-model.number="age"/>
        <input type="text" v-model="job"/>
        <button type="button" @click="saveUserInfo">save</button>
    </div>   
</template>
<script>
    export default {
        name: '',
        components: {},
        data(){
            return{
                name: '',
                age:0 ,
                job:''
            };
        },
        methods: {
           saveUserInfo(){
                if(this.name == ''){
                    //return alert("사용자 이름을 입력 하세요.");
                    return this.$swal('사용자 이름을 입력 하세요');
                }
                if(this.age == 0 || this.age == ''){
                    return alert("사용자 나이를 입력 하세요.");
                }

                const params = {
                    name :  this.name,
                    age :  this.age,
                    job : this.job
                }

                const r = this.saveData(params);
                    //오브젝트 사용시 this.userInfo
                if(r == 'S'){
                    alert('사용자 정보가 생성되었습니다.');
                }
            },
            saveData(params){
                console.log(params);
                const r = 'S';
                return r;
            }
        }
    }         
</script>
