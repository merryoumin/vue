import axios from "axios";

export default {
    mounted(){
        console.log('믹스인 mounted() 1.');
    },
    unmounted(){},
    methods:{
        async $callAPI(url, method, data){
            return (await axios({
                method: method,
                url: url,
                data: data
            }).catch(e => {
               console.log(e);
            })).data;
        }
    }
}