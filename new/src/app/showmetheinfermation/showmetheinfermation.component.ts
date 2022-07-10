import { Component, OnInit } from '@angular/core';
import { Point } from '../aim/mapPoint';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';
import { searBridgeSign } from './searchBS';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-showmetheinfermation',
  templateUrl: './showmetheinfermation.component.html',
  styleUrls: ['./showmetheinfermation.component.css']
})
export class ShowmetheinfermationComponent implements OnInit {

  constructor(private allbridge:AllBridgeListsService,private router:Router,private http:HttpClient) //声明了 但没有数据
  { 
    // this.getBridge()
  }
  
  // searchBridge:searBridgeSign =     //搜索的元素
  // {
  //   bridgeIbri_nod:'',
  //   bridgeName:'',
  //   level:'',
  //   sort:'desc',
  // }

  // newBrideg:Point[]=[]  //储存数据

  ngOnInit(): void {

    // this.getBridge() //要删掉的是过度品

    this.T_getbridge()
    

    setTimeout(() => {
      this.judgeSearch();
      
    }, 100);

    
  }

  // getBridge()//获得一个承诺 而不是一个确定的数
  // {
  //   this.allbridge.getBridge()         //获得数据
  //   .subscribe(newBrideg2=>this.newBrideg=newBrideg2)//箭头函数将 获得的newbrideg2 传到this.newbridge中
  // }

  //判断是否按下search
  Ifsearch:any=false

  //本地数据缓存
  bendishujuhuancun:any[]=[]

   //查询返回的数据储存在此
   searchinfomation:any[]=[] 

   //查询需要输入的数据
  searchBridge:any=
  {
    bri_no:'',
    bri_name:'',
    maintain_type:'',
    sort:'desc',
  }

  //搜索按钮 按下按钮之后 表格改变
  searchbtn()
  {
    

    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/sousuocitybridge'
    this.http.post(api,
      {
        'bri_no':this.searchBridge.bri_no,'bri_name':this.searchBridge.bri_name,'maintain_type':this.searchBridge.maintain_type,
        
      },httpOption).subscribe((res:any)=>{
      console.log(res);
      if(res.code=='100'||res.code=='-200')
      {
        alert("查询失败")
      }
      else
      {
        alert("查询成功")
        this.searchinfomation=res.data
        //按下search按钮
        this.Ifsearch=true
        this.judgeSearch()
      }
    })
  }

  judgeSearch()
  {
    if(this.Ifsearch==true)
    {
      this.bendishujuhuancun=this.searchinfomation
    }
    else
    {
      this.bendishujuhuancun=this.bridgeList
    }
  }


  //一下是确定无误的

  changeInformation(bri_no:any)//修改桥梁信息 新建一个网页？
  {
    
    this.router.navigate(["/changeinfo"],{ queryParams:{ id:bri_no}})
    
  }

  jumpToAddBridge()//跳转到增加页面
  {
    this.router.navigateByUrl("/createnewbridge")
  }

  //桥梁著资料卡的信息列表
  bridgeList:any[]=[]

  //通过服务得到著资料卡的数据
  T_getbridge()
  {
    this.allbridge.getcitybridge()
    .subscribe((newlist)=>{
      this.bridgeList=newlist.data
    })
  }

  //删除桥梁信息通过数据库
  deleteInformation(no:any)
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let APIziliaoka='http://localhost:8080/bridge/deleteziliaoka'
    this.http.post(APIziliaoka,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除一般资料卡成功");
      console.log(res);
    })

    let APIbottomstructure='http://localhost:8080/bridge/deletebottomstructure'
    this.http.post(APIbottomstructure,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除下部结构成功");
      console.log(res);
    })

    let APItopside='http://localhost:8080/bridge/deletetopsidestructure'
    this.http.post(APItopside,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除上部结构成功");
      console.log(res);
    })

    let APIfushuwork='http://localhost:8080/bridge/deletefushuwork'
    this.http.post(APIfushuwork,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除附属工程成功");
      console.log(res);
    })

    let APIfuguapipe='http://localhost:8080/bridge/deletefuguapipe'
    this.http.post(APIfuguapipe,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除符挂件管道成功");
      console.log(res);
    })
    
    setTimeout(() => {
      let APIMain='http://localhost:8080/bridge/deletecitybridge'
      this.http.post(APIMain,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除主资料卡成功");
      console.log(res);
      alert("删除成功！")
    })
    }, 150);

    //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    let daily='http://localhost:8080/bridge/deletedailytable'
    this.http.post(daily,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除日常表格成功");
      console.log(res);
    })

    let sepcial='http://localhost:8080/bridge/deletespecialchecktable '
    this.http.post(sepcial,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除特殊表格成功");
      console.log(res);
    })

    let technology='http://localhost:8080/bridge/deletetechnologytable'
    this.http.post(technology,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除技术表格成功");
      console.log(res);
    })

    let monitor='http://localhost:8080/bridge/deletemonitortable'
    this.http.post(monitor,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除监测表格成功");
      console.log(res);
    })

    let structure_checking='http://localhost:8080/bridge/deletestructure_checking_table'
    this.http.post(structure_checking,{'bri_no':no},httpOption).subscribe((res:any)=>{
      console.log("删除结构状况记录表成功");
      console.log(res);
    })
    
  }
}
