// 项目的JS入口文件
console.log('ok')


import Vue from 'vue'
import login from './login.vue'


var vm = new Vue({
	el: '#app',
	data:{
		msg:'12333'
	},
	render: function (createElements) {
		return createElements(login)
	}

})

