### JS和TS学习总结

### 什么是JS

JavaScript 是一种脚本，一门编程语言，它可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新，交互式的地图，2D/3D 动画，滚动播放的视频等等。

### JS的基础

在编程语言中，变量用于存储数据值。
JavaScript 使用 var 关键词来声明变量

值可以是多种类型，比如数值和字符串。
例如，"Bill" + " " + "Gates"

其余的+-*/或者是&&,||等其他的都与基本语法大致相同

js的数组声明列子：

var colors = ['1', 'bl2', '3']; 

js的声明函数例子：

function say1(name) {

  console.log(name);

}

js常用的基本函数：

push() 末尾推入

pop() 末尾弹出

shift() 首项弹出

unshift() 在数组前端添加任意项并返回新数组长度

reverse() 反转数组

slice() 分片，参数为起始和终止位置，返回分片后的数组,不会影响原始数组

### 什么是TS

ts是js的超集，意味着js本身的语法在ts里面也能跑的通。ts一方面是对js加上了很多条条框框的限制，另一方面是拓展了js的一些能力，也就是说许多基础的语法功能以及+-等符号运算都是与js大致相同的。

### TS的基础

使用let或const申明变量，并加上类型说明，作用域为块级，用｛｝进行包含。

TS的数组例子：

aa：string[]=['1' ,'2' ,'3']


TS中的函数大部分和JS相同,不同之处在于ts会在函数的（参数）这中间和后面加上类型声明

TS的函数声明例子：

function say1(name:string):void {

  console.log(name);

}

TS函数的基本运用：

函数定义：

function greet():string { // 返回一个字符串

return "Hello World" 

} 
 
function caller() { 

var msg = greet() // 调用 greet() 函数 

console.log(msg) 

} 
 

caller() 调用函数