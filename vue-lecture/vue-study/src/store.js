import {
    createStore
} from 'vuex'

import persistedstate from 'vuex-persistedstate'

const store = createStore({
    state(){
        return {
            user:{},
            count: 0,
            cart:[
                {product_id: 1, product_name:'아이폰', cartegory: 'A' },
                {product_id: 2, product_name:'아이폰 거치대', cartegory: 'B'}
            ]
        }
    },
    mutations:{
        increment(state){
            state.count = state.count +1;  
        },
        user(state, data){
            state.user = data;
        }
    },
    plugins:[
        persistedstate({paths:['user']})
    ],
    getters:{
        cartCount: (state) => {
            return state.cart.length;
        },
        productACount: (state)=>{
            return state.cart.filter(p => p.cartegory == 'A').length;
        }
    }
})

export default store;