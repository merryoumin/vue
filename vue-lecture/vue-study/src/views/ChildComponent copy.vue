<template>
    <div>
        likes : {{likes}}
        isOk : {{isOk}}
        authoer name: {{author.name}}
        authoer company: {{author.company}}
    </div>
</template>
<script>
    export default {
        name : '',
        props:{
            likes:{
                type: Number,
                default:0
            },
            isOk:{
                type: Boolean,
                default: false
            },
            commentIds:{
                type: Array
            },
            author:{
                type: Object
            }
        },
        components: {},
        data() {
            return{
                title: ''
            };
        },
        setup(){},
        created(){},
        mounted(){},
        unmounted(){},
        methods:{}
    }
</script>
<style scoped>
</style>