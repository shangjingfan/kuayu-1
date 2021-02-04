

const request = new XMLHttpRequest()
request.open("GET", 'http://qq.com:9999/friends.json')
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response)
  }
}
request.send()


// 封装jsonp
/* function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = 'hackersJSONPCallbackName' + Math.random()
    window[random] = data => {
      // console.log(data)
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${random}` //jsonp约定函数名叫做callback
    script.onload = () => {
      script.remove()
    }
    script.onerror = (err) => {
      reject(err)
    }
    document.body.appendChild(script)
  })
}

jsonp('http://qq.com:9999/friends.js').then((data) => { console.log(data) }) */

// JSONP
/* window.xxx = (data)=>{ //第一版
  console.log(data)
} */
// const random ='hackersJSONPCallbackName' + Math.random()
// console.log(random)
// window[random] = (data) =>{
//   console.log(data)
// }
// const script = document.createElement('script')
// // script.src = 'http://qq.com:9999/friends.js'// 第一版
// script.src = `http://qq.com:9999/friends.js?functionName=${random}`
// script.onload = () =>{
//   script.remove()
// }
// document.body.appendChild(script)

