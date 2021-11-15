import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'
//  ./router 代表 router 文件夹里的index文件，其他文件要加名字
Vue.use(Router)

//输出
export default new Router({
	mode: 'history',	//mode-->hash/history
	base: process.env.BASE_URL,
	routes: [
		movieRouter,
		cinemaRouter,
		mineRouter,
		{
			path: '/*',
			redirect: '/movie'
		}
	]
})

