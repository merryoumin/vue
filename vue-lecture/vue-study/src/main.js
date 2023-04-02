import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
   en: {
      hi: 'Hello!',
      save: 'save'
   },
   ko: {
    hi: '안녕하세요.',
    save: '저장' 
   }
}

const app = createApp(App)
app.use(router)
app.use(i18nPlugin, i18nStrings)
app.mount('#app')
app.mixin(mixins)
app.use(store)
app.directive('focus',{
    mounted(el) {
       el.focus(); 
    },
});

window.Kakao.init("331c2758b2699a806f80e20c37f92e94");//발급 받은 앱키
