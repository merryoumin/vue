<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>제품카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productlist">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td>{{product.category}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import MonitoringMixin from '../monitoring.js';
    export default {
        name : '',
        mixins : [MonitoringMixin],
        components: {},
        data() {
            return{
                productlist: []
            };
        },
        setup(){},
        beforeCreate(){},
        created(){},
        beforeMount(){},
        mounted(){
            console.log('컴포넌트 mounted()');
        },
        beforeUpdate(){},
        updated(){},
        beforeUnmount(){},
        unmounted(){},
        methods:{
            async getProductList(){
                this.productlist =  await this.$api('https://c4840a47-69b2-4e47-9658-fc16fe7535a2.mock.pstmn.io/productlist','get',{})
                console.log(this.productlist);
            }
        }
    }
</script>
<style scoped>
</style>