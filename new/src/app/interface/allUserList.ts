
export interface User  {    //interface 与 class 都是可以的

    userName:any
    userPassWord:any
  }

  export let managerUser: User[]=  //管理员    // 没打等号吃大亏了  一直报错ERROR TypeError: Cannot read properties of undefined (reading '0')
[
    {
        userName:"jgys",
        userPassWord:"jgys010906"
    },
    {
        userName:"sjzy",
        userPassWord:"sjzy010906"
    }
]
export var long_term_User:User[]=    //长期
[
    {
        userName:"wwww",
        userPassWord:"wwww8888"
    }
]

export var set_term_User:User[]=     //定期
[
    {
        userName:"mmmm",
        userPassWord:"mmmm8888"
    }
]