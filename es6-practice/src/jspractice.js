/********************** js中Iterable对象和Array有什么区别  *******************************/

// 1、可以应用 for..of 的对象被称为 可迭代的。

// 2、技术上来说，可迭代对象必须实现 【Symbol.iterator 】方法。

//    1、 obj[Symbol.iterator]() 的结果被称为 迭代器（iterator）
//    2、 一个迭代器必须有 next() 方法，它返回一个 {done: Boolean, value: any} 对象，这里 done:true 表明迭代结束，否则 value 就是下一个值。
//    3、Symbol.iterator 方法会被 for..of 自动调用，但我们也可以直接调用它
// 3 、内置的可迭代对象例如字符串和数组，都实现了 Symbol.iterator。
// 4、字符串迭代器能够识别代理对（surrogate pair）。

// Array是特殊的iterable对象，除了itearable的方式不遍历外，还 提供了 for in foreach map等方式
// 通过调用可迭代对象的@@iterator方法产生的迭代器(iterator)的功能并不属于iterable.
/********************** 实现promise.race()  *******************************/


//  function promiseRace(PromiseArr){
//     return new Promise(function(resolve,reject){
//         for(let i=0;i<PromiseArr.length;i++){
//             Promise.resolve(PromiseArr[i]).then((res)=>{
//                 resolve(res)
//             },(err)=>{
//                 reject(err)
//             })
//         }
//     })
// }


/********************** 实现promise.all()  *******************************/

//  function promiseRace(PromiseArr){
//     return new Promise(function(resolve,reject){
//         let count=0
//         let value=[]
//         for(let i=0;i<PromiseArr.length;i++){
//             Promise.resolve(PromiseArr[i]).then((res)=>{
//                 count++
//                 value[i]=res
//                 if(count===PromiseArr.length){
//                     resolve(value)
//                 } 
//             },(err)=>{
//                 reject(err)
//             })
//         }
//     })
// }

//          **********************      如何实现选中复制的功能  **********************///
////方法1
// const selection = window.getSelection();
// const range = document.createRange();

// range.selectNodeContents(element);
// selection.removeAllRanges();
// selection.addRange(range);

//{ selectedText = selection.toString();
// window.getSelection().removeAllRanges();}

//实现复制
//document.exec('copy')
///方法2


///const copyButton = document.getElementById('ddd')
//  copyButton.select()
// document.exec('copy')




