//            ********************************************      实现 apply **********************////////
//      ********************************************      实现 apply **********************////////
  
// eslint-disable-next-line no-extend-native
// Function.prototype.myApply = function(thisArg, arrArg) {
//     //1、类型检测
//     if(typeof this  !== 'function'){
//          throw new TypeError(`${this}.apply is not a function`)
//     }
//     //2、参数判断
//     if (thisArg ==undefined|| null){
//        thisArg = [];
//     }
//     if(arrArg == undefined||null){
//         arrArg=[]
//     }
//     //创建对象，函数赋值，调用对象方法
//     const obj = new Object(thisArg)
//     obj['_fn_']= this
//     const result = obj['fn'](...arrArg)
//     delete obj['_fn_']
//     return result
// }

//            ********************************************      实现 call **********************////////
// Function.prototype.myCall=function(thisArg){
//      if(typeof this !=='function'){
//          throw new TypeError(`${this}.call is not a function`)
//      }
//      if(thisArg ===undefined||null){
//         thisArg = _self
//      }
//      for(let i=1;i<arguments.length;i++){
//          arg.push(arguments[i])
//      }
//      const obj = new Object(thisArg)
//      obj['_fn'] = this
//      const res = obj['_fn'](...arg)
//      delete  obj['_fn']
//      return res

// }


//   ********************************************      实现 bind **********************////////


//bind与call，apply的区别就是：bind方法不会立即调用函数，它只是改变了新函数的this绑定。

// Function.prototype.myBind = function(obj){
//     ///1 类型检测。。。。
//     // 2 参数处理
//    const args = Array.prototype.shift.call(arguments)||[];
//    const fn = this
//    //定义函数   
//    var bindFn = function(){
//        return this.apply(obj,[].concat(args, arguments))
//    }
//    bindFn.prototype = fn.prototype
//    return bindFn
// }

//softbind 生成的函数，在没有调用者时，内部 this 指向绑定对象，与 bind 表现一致。
//当有调用者时，指向当前调用对象，这与普通函数一致。
/** ******************************************** softBind的实现 *********************************************/
/** ******************************************** softBind的实现 *********************************************/

//  Function.prototype.softBind = function(obj) {
//     //#1 类型校验
//     if (typeof this === 'function') {
//         throw new TypeError(`${this}.softBind is not a function`);
//     }
// ​
//     //#2 取参
//     const args = Array.prototype.shift.call(arguments) || [];
//     const fn = this;
// ​
//     //#3 定义函数，调用apply，此处注意对this的判断，改变新函数的原型
//     var softBindFn = function() {
//         return fn.apply((!this || this === (window || global) ? obj : this), [].concat(args, arguments));
//     }
//     softBindFn.prototype = fn.prototype;
//     return softBindFn;
// }


///map 对没有赋值或者已经删除的元素直接返回。
// new Array(3) 是新建了3个空元素，所以result最后的是[empty × 3]