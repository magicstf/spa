import HelloWorld from './hello.vue'
// 这里是重点
const Hello = {
    install: function(Vue){
        Vue.component('Hello',HelloWorld)
    }
}

// 导出组件
export default Hello