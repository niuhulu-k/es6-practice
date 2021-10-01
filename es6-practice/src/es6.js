/////////////////
//////////proxy
//利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。//
// var double = n=>n*2
// var pow = n=>n*n
// var reverseInt= n=>n.toString().split("").reverse().join('')|0
// export const pipe = function(value){
//     var funcStack = [];
//     var oproxy = new Proxy({} , {
//       get : function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//               console.log(fn,'lllll')
//             return fn(val);
//           },value);
//         }
//         console.log(window,fnName,'rr')
//         funcStack.push(window[fnName]);
//         return oproxy;
//       }
//     });
  
//     return oproxy;
// }

// export const res = pipe(3).double.pow.reverseInt.get

// console.log(window.double,'pppp')
//////


/////
// //////////计算fps
// let tick = null, fps = 0, raf = null, flag = true
//     function FPS() {
//       clearInterval(tick)
//       tick = setInterval(() => {
//         console.log('fps: ', fps)
//         window.cancelAnimationFrame(raf)
//         fps = 0
//         flag = true

//         const callback = (timeStamp) => {
//           ++fps
//           if (flag) {
//             raf = window.requestAnimationFrame(callback)
//           }
//         }
//         raf = window.requestAnimationFrame(callback)
//       }, 1000);
//     }

/********************** 写一个方法探测CPU占比情况  *******************************/
// var data=[]
// var t
// function pulse(){
//   t && data.push(Date.now()-t)
//   t = Date.now()
//   setTimeout(pulse,50)
// }
// pulse()



/********************** javascript什么时候会占CPU？  *******************************/
// 页面在浏览器打开的时候，产生重绘，js动画，以及定时器的时候




/********************** this  *******************************/
// https://camo.githubusercontent.com/8bdc4059a6be877ff2915728d7eaba5d459e119533f1771dab4980b374608900/687474703a2f2f7777312e73696e61696d672e636e2f6c617267652f3661613363356530677931676e68326f38306876636a32306b6f3065726a72762e6a7067




//     {判断函数类型}
// this =>{普通函数、箭头函数、(bind,apply,call)}=>{
//     1、包裹箭头函数的第一个非箭头函数
//     2、bind,apply,call,this值的是第一个参数
//     3、普通函数==={ 1,new 的方式，this被固化在事例上 2, (1)foo()，this是window (2)obj.foo(),this为obj()}
// }


/********************** 用js实现无限累加  *******************************/

// 1、
// var add = function (a, b) {
//     return a + b;
// }
// var currying = function (fn, defineVal = 0) {
//     return function (...args) {
//         var sum = defineVal;

//         function func(...argts) {
//             if (args.length === 0) {
//                 return func.toString();
//             } else {
//                 argts.unshift(sum);
//                 sum = argts.reduce(fn);
//                 return func;
//             }
//         }
//         func.toString = () => sum;
//         return func(...args);
//     }
// }
// var add = currying(add);

// 2、function sum (...args) {
//     const f = (...rest) => sum(...args, ...rest)
//     f.valueOf = () => args.reduce((x, y) => x + y, 0)
//     return f
//   }


//   3  
//   function add () {
//       let args = Array.prototype.slice.call(arguments);
//       let fn = function () {
//           let arg_fn = Array.prototype.slice.call(arguments);
//           return add.apply(null, args.concat(arg_fn));
//       }
//       fn.toString = function(){
//           args.reduce(function(a, b){
//               return a + b
//           })
//       }
//       return fn;
//   }
  
//   // es6
//   function add () {
//       let args = [...arguments];
//       let fn = function(){
//           return add.apply(null, args.concat([...arguments]))
//       } 
//       fn.toString = () =&gt; args.reduce((a, b) =&gt; a + b)
//       return fn;
//   }

