import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { managerUser, User } from './allUserList';
import { Router } from '@angular/router'; //引入路由
import { AllUserListsService } from '../serves/all-user-lists.service';//对服务的引入 以后传，调数据给服务器就靠这条

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  constructor(private router:Router,private allUser:AllUserListsService)
   {
     //在构造函数中引入路由
     //在狗在函数中引入服务
    }

  ngOnInit(): void {
  }

  login_user:User =
  {
    userName:"",
    userPassWord:""
  }

  Mlogin_user = managerUser

  userLogin(e:Event)  //用户登录
  {

    var regx='^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$'
    var isMatch=this.login_user.userPassWord.match(regx)
    console.log(isMatch);

    if (this.login_user.userName=='') {
      alert("用户名不能为空")
      
    }
    else if(this.login_user.userPassWord == ''){
      alert("密码不能为空")
    }
    else if(this.login_user.userPassWord.length<6)
    {
      alert("最少需要6位")
    }
    else if (isMatch==null) {
      alert("密码格式错误需要英文与数字")
    }  
    else if(1){
        let YZ = 0
        for (const iterator of this.Mlogin_user)
         {
            if (this.login_user.userName==iterator.userName||this.login_user.userPassWord==iterator.userPassWord)
             {
            alert("欢迎登录  我的管理人员")
            this.router.navigateByUrl("/aim")
            YZ=1
            break
            }
        }
        if(YZ==0)
        {
            alert("密码或用户名错误")
        }
    }

  }


  userSign()//用户注册
  {
    
  }
  

  
}
