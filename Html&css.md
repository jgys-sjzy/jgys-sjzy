# HTML & CSS 学习总结

## 对HTMLl与css的大致了解

HTML全称为（HyperText Markup Language），它是构成 Web 世界的一砖一瓦。

Css全称为（Cascading Style Sheets），它是决定这些内容该如何在屏幕上呈现

简单来说HTML的工作就如同刚修筑了房子，能住单很丑陋，什么东西都没有空荡荡的。而css就是给这栋房子刷漆，铺地板，装上基本的修饰使它变得好看。

## 较为深入的了解HTML

### 1.如何创建一个属于我们自己的HTML

本人所使用的软件[vscode](https://code.visualstudio.com/),因此就用此举例。

首先运行该软件，打开/新建一个文件夹，如下图所示：

![这是图片](https://qige.io/web/brief-html/img/67005cb1533a3f66.png)

接下来在该文件夹下新建一个 后缀名为html 的文件，如下图所示：

![这是图片](https://qige.io/web/brief-html/img/f0f2f4fda1403798.png)

就可以得到如下内容了：

````
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<title>页面标题</title>
</head>
<body>
<h1>我的第一个Web页</h1>
<p>当前有点丑：)</p>
</body>
</html>
````
完成后想要运行代码看看成品效果该怎么办呢？

这里建议安装vscode中的插件，按住ctrl+shift+x进入插件安装页面选择live Server进行安装就可以了，安装完成后，软件右下角将会出现一个Go Live的图标，点击它就会在默认浏览器上显示出你的代码所呈现的效果了

### 3.HTML 文档结构分析

HTML 使用"标记"（markup）来注明文本、图片和其他内容，以便于在浏览器中显示。HTML 标记包含一些规定的"元素"如 `<head>，<title>，<body>，<header>，<footer>，<article>，<section>，<p>，<div>，<span>，<img>，<aside>，<audio>，<canvas>，<datalist>，<details>，<embed>，<nav>，<output>，<progress>，<video>` 等等。

简单来说HTML就是由这样的一个一个标签所组成的，通过不同类型的标签的组合形成我们想要的页面

### 3.1首先先来介绍几个相较于其他较为重要的

\<!DOCTYPE html>: 声明文档类型。出于历史原因需要，现在可有可无。

`<html></html>: \<html>`元素。这个元素包裹了整个完整的页面，是一个根元素，其它元素都嵌套到其中。

`<head></head>: <head>`元素。 这个元素是一个容器，它包含了所有你想包含在HTML页面中但不想在HTML页面中显示的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述，CSS样式，字符集声明等等。

`<meta charset="utf-8">`: 这个元素设置文档使用utf-8字符集编码，utf-8字符集包含了人类大部分的文字。基本上他能识别你放上去的所有文本内容。毫无疑问要使用它，并且它能在以后避免很多其他问题。

`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`: 指定页面的图标，出现在浏览器标签上。(试一试：你可随意下载一个.ico图标文件到工作目录中)

`<title></title>`: 设置页面标题，出现在浏览器标签上，当你标记/收藏页面时它可用来描述页面。

`<body></body>: <body>`元素。 包含你能在页面看到的所有内容，包括文本，图片，音频，游戏等等。

### 3.2接着我们来说一下其他几个不太重要的首先

Ctrl + / 可以进行快速注释

\<br>换行符,

\<hr>水平分割线 , 

\<input>输入框, 

\<img>引入图片相关的, 例子`<img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" alt="MDB Logo" width="200" height="200">`

显示出来的效果如图

<img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" alt="MDB Logo" width="200" height="200">

`<img src="./images/picture.jpg">`该图片文件在当前目录下的images目录中(./表示当前目录下)

`<img src="../picture.jpg">`该图片文件在上一级目录中（../表示上一级目录下）

\<a>超链接，实现跳转。基本语法`<a href="https://www.baidu.com/" target="_blank">百度一下</a>`

`<h1> ~ <h6>`是有关于标题大小的

有时，页面的内容需要用表格来进行呈现。那这时我们使用<table>等标签即可：
运用\<tr>(table row)表示行,\<td>(table data)表示行中的单元, \<th>(table head)是表头的单元来进行表示

语法例子：
```
<table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
</table>
```
显示出来的效果：

<table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
</table>

列表的显示：
```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

有序列表的显示：
```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

form表单
```
<form>
  <!-- 文本框，注意有 placeholder 提示符 -->
  用户名：<br>
  <input type="text" name="name" placeholder="请输入用户名"><br>
  <!-- 密码框 -->
  密码：<br>
  <input type="password" name="ps" placeholder="请输入密码"><br>
  年龄：<br>
  <!-- 数字输入框，注意 min 和 value 属性-->
  <input type="number" name="age" min="18" value="18"><br>
  <!-- 单选按钮, 注意 checked 属性 -->
  性别：<br>
  <input type="radio" name="gender" value="male" checked> 男<br>
  <input type="radio" name="gender" value="female"> 女<br>
  <input type="radio" name="gender" value="other"> 其它<br>
  <!-- 下拉列表，注意 selected 属性 -->
  党派：<br>
  <select name="party">
    <option value="D">民主党</option>
    <option value="R" selected>共和党</option>
    <option value="N">无党派</option>
  </select><br>
  <!-- 多选框 -->
  您有哪些交通工具：<br>
  <input type="checkbox" name="vehicle1" value="Bike"> 自行车<br>
  <input type="checkbox" name="vehicle2" value="Motocycle" checked> 摩托车<br>
  <input type="checkbox" name="vehicle3" value="Car"> 轿车<br>
  <input type="checkbox" name="vehicle4" value="Jet"> 飞机<br>
  <!-- 日期选择器 -->
  您的工作日期：<br>
  <input type="date"><br>
  <!-- 文件选择器 -->
  上传您的照片:<br>
  <input type="file" name="photo"><br>
  <!-- 文本输入区域，注意 rows 和 cols 属性 -->
  您的建议：<br>
  <textarea name="message" rows="5" cols="30">
    The cat was playing in the garden.
  </textarea><br><hr>
  <!-- 表单提交/重置按钮，将表单中的数据取消或传输给服务器端进行处理 -->
  <input type="submit" value="提 交">
  <input type="reset" value="重 置">
</form>
```
显示出来的效果：
<form>
  <!-- 文本框，注意有 placeholder 提示符 -->
  用户名：<br>
  <input type="text" name="name" placeholder="请输入用户名"><br>
  <!-- 密码框 -->
  密码：<br>
  <input type="password" name="ps" placeholder="请输入密码"><br>
  年龄：<br>
  <!-- 数字输入框，注意 min 和 value 属性-->
  <input type="number" name="age" min="18" value="18"><br>
  <!-- 单选按钮, 注意 checked 属性 -->
  性别：<br>
  <input type="radio" name="gender" value="male" checked> 男<br>
  <input type="radio" name="gender" value="female"> 女<br>
  <input type="radio" name="gender" value="other"> 其它<br>
  <!-- 下拉列表，注意 selected 属性 -->
  党派：<br>
  <select name="party">
    <option value="D">民主党</option>
    <option value="R" selected>共和党</option>
    <option value="N">无党派</option>
  </select><br>
  <!-- 多选框 -->
  您有哪些交通工具：<br>
  <input type="checkbox" name="vehicle1" value="Bike"> 自行车<br>
  <input type="checkbox" name="vehicle2" value="Motocycle" checked> 摩托车<br>
  <input type="checkbox" name="vehicle3" value="Car"> 轿车<br>
  <input type="checkbox" name="vehicle4" value="Jet"> 飞机<br>
  <!-- 日期选择器 -->
  您的工作日期：<br>
  <input type="date"><br>
  <!-- 文件选择器 -->
  上传您的照片:<br>
  <input type="file" name="photo"><br>
  <!-- 文本输入区域，注意 rows 和 cols 属性 -->
  您的建议：<br>
  <textarea name="message" rows="5" cols="30">
    The cat was playing in the garden.
  </textarea><br><hr>
  <!-- 表单提交/重置按钮，将表单中的数据取消或传输给服务器端进行处理 -->
  <input type="submit" value="提 交">
  <input type="reset" value="重 置">
</form>

## 较为深入的了解css

### 1.何为 CSS（Cascading Style Sheets）

网页的内容是由 HTML的元素构建的，这些元素如何呈现，涉及许多方面，如整个页面的布局，元素的位置、距离、颜色、大小、是否显示、是否浮动、透明度等等都是由css来决定这些内容该如何在屏幕上呈现。

 ### 2.CSS 语法

 一条CSS样式规则由两个主要的部分构成：选择器，以{}包裹的一条或多条声明:

![这是图片](https://qige.io/web/brief-css/img/86e63894cd2a6e2f.jpg)

选择器是您需要改变样式的对象（上图的规则就一级标题生效）。

每条声明由一个属性和一个值组成。（无论是一条或多条声明，都需要用{}包裹，且声明用;分割）

属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。

### 2.1css 选择器

选择器一般来说最常用的时ID选择器与class选择器

ID选择器 如同名字来说一个ID名对应一个元素 不可能不会出现二个元素同时使用同意ID的情况，如果要2个元素同时使用一个就用class选择器。

举例：

```
.heading
{
    font-size: 20px;
    width: 70vw;
    height: 5vh;
    line-height: 5vh;  
    background-color: rgb(127, 102, 102);
    margin-inline: auto;
    border-radius: 8px;
    text-align: center;
}
```
这就是最简单的class='heading'的元素的css 而如果是ID选择器的话就将.换成#即可

### 2.2css如何生效

我们一般有三种方法来书写css：外部样式表，内部样式表，内联样式（外部样式最为重要）

外部样式:就在同一目录新建一个样式表文件mycss.css（注意后缀名为css）如下：
```
body {
  background-color: linen;
  text-align: center;
}
h1 {
  color: red;
}

```

内部样式表:就是在html中\<head>元素中引入了\<style>标签
```
<head>
 ...
 ...
  <style>
    body {
      background-color: linen;
      text-align: center;
    }
    h1 {
      color: red;
    }
    .haha {
      margin-top: 100px;
      color: chocolate;
      font-size: 50px;
    }
  </style>
</head>
```

内敛样式表：`<h3 style="color:green;">I am a heading</h3>`直接在元素中中进行相关样式的书写，


部分引用https://qige.io/web/web.html