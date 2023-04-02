<template>
    <div>
        <div>
            {{htmlString}}
        </div>   
        <div v-html="htmlString"></div> 
    </div>
</template>
<script>
export default {
    name : '',
    // 이름 안적어도 됨
    components: {},
   // 만들어진 컨포넌트는 다른 뷰에서 임포트 시켜 사용 가능
   data() {
       return{
           htmlString: '<p style="color:red;">this is a red string.</p>'
           //데이터 값을 키로 정의 해서 사용할 수 있다 
           //{{title}} : html 안에서
       };
   },
   setup(){},
   created(){}, //뷰 컨퍼런트 실행 시 바로 실헹
   mounted(){}, //<template> 로딩이 되는 순간 바로 실행
   unmounted(){}, //컴퍼넌트에서 다른 컨퍼넌트로 이동하는 순간 바로 실행
   methods:{
       //함수를 정의 해서 사용
   }

}
</script>
<style scoped>

</style>

