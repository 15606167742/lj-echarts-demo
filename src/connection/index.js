import axios from 'axios'
import {
	Loading
} from 'element-ui';

let loading = null;

// 创建一个连接实例
const connection = axios.create({
	// baseURL: WEBCONFIG.connectPath,
	baseURL: 'http://192.168.1.22:13999',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	},
});

// 添加请求拦截器
connection.interceptors.request.use(config => {
	// 打开loading页面
	loading = Loading.service({
		lock: true,
		text: 'Loading',
		spinner: 'el-icon-loading',
		background: 'rgba(0, 0, 0, 0.7)'
	});
	return config;
}, error => {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
connection.interceptors.response.use(response => {
	// 关闭loading页面
	if (loading) {
		loading.close();
	}
	return response;
}, error => {
	// 关闭loading页面
	if (loading) {
		loading.close();
	}
	return Promise.reject(error);
});

export {
	connection
}
