import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';

@Component({
  selector: 'app-show-daily-special',
  templateUrl: './show-daily-special.component.html',
  styleUrls: ['./show-daily-special.component.css']
})
export class ShowDailySpecialComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private allbridge:AllBridgeListsService) { }

  ngOnInit(): void {


    this.get_daily_table()  //日常巡检表
    this.get_special_table()
    this.get_technology_table()
    this.get_monitor_table()
    this.get_spe_stru_info_table()
    this.get_structure_checking_table()



    setTimeout(() => {
      console.log(this.all_daily_table.data);
      
    }, 100);
  }

  daily: any = false    //日常
  specia: any = false    //特殊检测
  technology: any = false   //技术
  monitor:any = false //检测
  stru:any = false       //特殊构件
  stru_check:any = false         //结构状况

  showdaily() {
    this.daily = true
    this.specia = false
    this.technology = false
    this.monitor = false
    this.stru = false
    this.stru_check=false
  }
  showspecia() {
    this.specia = true
    this.technology = false
    this.daily = false
    this.monitor = false
    this.stru = false
    this.stru_check=false
  }
  showtechnology() {
    this.technology = true
    this.specia = false
    this.daily = false
    this.monitor = false
    this.stru = false
    this.stru_check=false
  }
  showmonitor(){
    this.monitor = true
    this.technology = false
    this.specia = false
    this.daily = false
    this.stru = false
    this.stru_check=false
  }
  showstru()
  {
    this.stru = true
    this.monitor = false
    this.technology = false
    this.specia = false
    this.daily = false
    this.stru_check=false
  }
  showstru_check()
  {
    this.stru_check=true
    this.stru = false
    this.monitor = false
    this.technology = false
    this.specia = false
    this.daily = false
  }


  //表单信息储存地
  all_daily_table:any=[]
  all_special_table:any=[]
  all_technology_table:any=[]
  all_monitor_table:any=[]
  all_spe_stru_info_table:any=[]
  all_structure_checking_table:any=[]
  //显示所有日常表单
  get_daily_table()
  {
    this.allbridge.getdailytable()
    .subscribe(res=>this.all_daily_table=res)
  }
  //特殊巡检
  get_special_table()
  {
    this.allbridge.getspecialchecktable()
    .subscribe(res=>this.all_special_table=res)
  }
  //技术检测表
  get_technology_table()
  {
    this.allbridge.gettechnologytable()
    .subscribe(res=>this.all_technology_table=res)
  }
  //监测表
  get_monitor_table()
  {
    this.allbridge.getmonitortable()
    .subscribe(res=>this.all_monitor_table=res)
  }
  //获取ALL特殊结构信息表
  get_spe_stru_info_table()
  {
    this.allbridge.getspe_stru_info_table()
    .subscribe(res=>this.all_spe_stru_info_table=res)
  }
  //获取ALL结构状况记录表
  get_structure_checking_table()
  {
    this.allbridge.getstructure_checking_table()
    .subscribe(res=>this.all_structure_checking_table=res)
  }

  //显示完整信息
  showInformation1(e:any)
  {
    this.router.navigate(["/looktable"],{ queryParams:{ id:e,n:1}})
  }
  showInformation2(e:any)
  {
    this.router.navigate(["/looktable"],{ queryParams:{ id:e,n:2}})
  }
  showInformation3(e:any)
  {
    this.router.navigate(["/looktable"],{ queryParams:{ id:e,n:3}})
  }
  showInformation4(e:any)
  {
    this.router.navigate(["/looktable"],{ queryParams:{ id:e,n:4}})
  }
  showInformation5(e:any)
  {
    this.router.navigate(["/looktable"],{ queryParams:{ id:e,n:5}})
  }
  showInformation6(e:any)
  {
    this.router.navigate(["/looktable"],{ queryParams:{ id:e,n:6}})
  }

  //删除信息
  deleteInformation(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let daily_api='http://localhost:8080/bridge/deletedailytable'
    this.http.post(daily_api,{'check_table_no':e,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("删除一般资料卡成功");
      console.log(res);
      
    }) 
  }
  deleteInformation2(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let special_api='http://localhost:8080/bridge/deletespecialchecktable '
    this.http.post(special_api,{'check_table_no':e,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("删除特殊资料卡成功");
      console.log(res);
      
    })
  }
  deleteInformation3(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let technology_api='http://localhost:8080/bridge/deletetechnologytable'
    this.http.post(technology_api,{'eva_no':e,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("删除技术资料卡成功");
      console.log(res);
      
    })
  }
  deleteInformation4(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let monitor_api='http://localhost:8080/bridge/deletemonitortable'
    this.http.post(monitor_api,{'monit_content_no':e,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("删除监测资料卡成功");
      console.log(res);
      
    })
  }
  deleteInformation5(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let structure_checking_table_table='http://localhost:8080/bridge/deletestructure_checking_table'
    this.http.post(structure_checking_table_table,{'regular_check_table':e,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("删除结构状况记录表成功");
      console.log(res);
      
    })
  }
  deleteInformation6(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let spe_stru_info_table_api='http://localhost:8080/bridge/deletespe_stru_info_table'
    this.http.post(spe_stru_info_table_api,{'comp_no':e},httpOption).subscribe((res:any)=>
    {
      // console.log("删除特殊构建信息表成功");
     console.log(res);
      if(res.code!='200')
      {
        alert("请先将结构状况中的成员删除")
      }
    })
  }

     //跳转到查询表 
     headingbtn()
     {
      this.router.navigateByUrl("/dailyspecialtable")
     }



}
