



# taro-request

<p align="center">
    <img src="https://img.shields.io/npm/dm/taro-request.svg?style=flat-square" />
    <img src="https://img.shields.io/npm/v/taro-request.svg?style=flat-square" />
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" />
</p>

> 基于PromiseTarohttp请求，轻便，小巧，api友好，功能丰富


## 特别之处
- 支持Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换为JSON数据
- 超时请求
- 告别callback
- 支持默认请求前缀
- 支持并发请求

## 使用方式

```yarn add @bucai/taro-request``` <br />
```npm install @bucai/taro-request --save ```<br />
```import taroRequest from '@bucai/taro-request';```<br />

## 一步上手

首先来一个简单的```get```请求
```js
// 向具有给定ID的用户发出请求
taroRequest.get('/user?id=12345')
.then(function (response) {
	console.log(response);
})
.catch(function (error) {
	console.log(error);
});

// 可选地，上面的请求也可以按照
taroRequest.get('/user', {
	params: {
			id: 'number'
	}
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

// 想要使用 async/await？ 将`async`关键字添加到外部函数/method
async function getUser() {
	try {
		const response = await taroRequest.get('/user?ID=12345');
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}
```
> 多种方法使用async/waait，开启代码便捷、畅快之旅

接着再来一个```post```请求

```js
taroRequest.post('/user', {
	firstname : 'firstname',
	lastname : 'lastname'
}).then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});
```

执行多并发请求例子

```js
function getUserAccount() {
  return taroRequest.get('/user/12345');
}

function getUserPermissions() {
  return taroRequest.get('/user/12345/permissions');
}

taroRequest.all([getUserAccount(), getUserPermissions()])
	.then(response =>{
			// dosoming ...
	});
```

## 请求方法别名
当然除了常见的```get```,```post```其他的请求也统一封装

- ```taroRequest.request(config)```
- ```taroRequest.get(url[, config])```
- ```taroRequest.delete(url[, config])```
- ```taroRequest.head(url[, config])```
- ```taroRequest.options(url[, config])```
- ```taroRequest.post(url[, data[, config]])```
- ```taroRequest.put(url[, data[, config]])```
- ```taroRequest.patch(url[, data[, config]])```

> note: 当使用别名方法`url`时，`method`和`data`属性不需要在config中指定。


### 全局配置

使用场景用户请求需要token,或者地址前缀，一次配置，省时省心。

```js
taroRequest.defaults.baseURL = 'https://api.example.com';
taroRequest.defaults.headers['Authorization'] = AUTH_TOKEN;
taroRequest.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

## 致谢 && 参考
* [axios](https://github.com/axios/axios)
* [wechat-request](https://github.com/hatedMe/wechat-request)


## License

MIT