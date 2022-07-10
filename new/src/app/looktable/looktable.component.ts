import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';

@Component({
  selector: 'app-looktable',
  templateUrl: './looktable.component.html',
  styleUrls: ['./looktable.component.css']
})
export class LooktableComponent implements OnInit {

  constructor(private allbridge:AllBridgeListsService,private Index:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    //获取由showinfomation所传递的桥梁id （不能删）
    this.Index.queryParams.subscribe((Data) =>   
    {
      this.data = Data

      console.log(this.data.id);
      console.log(this.data.n);
      
    })
    
    //跳转到此页面是 进行对于数据的跳出
    setTimeout(() => {
      if(this.data.n==1)
      {
        this.selectInformation()
      }
      if(this.data.n==2)
      {
        this.selectInformation2()
      }
      if(this.data.n==3)
      {
        this.selectInformation3()
      }
      if(this.data.n==4)
      {
        this.selectInformation4()
      }
      if(this.data.n==5)
      {
        this.selectInformation5()
      }
      if(this.data.n==6)
      {
        this.selectInformation6()
      }
    }, 100);

  }

   //网页传值粗存地（不删） data.id  data.n
   data: any



  daily: any = false    //日常
  specia: any = false    //特殊检测
  technology: any = false   //技术
  monitor:any = false //检测
  stru:any = false       //特殊构件
  stru_check:any = false         //结构状况

   //表单信息储存地
   all_daily_table:any=[]
   all_special_table:any=[]
   all_technology_table:any=[]
   all_monitor_table:any=[]
   all_spe_stru_info_table:any=[]
   all_structure_checking_table:any=[]



  //查询信息
  selectInformation()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let daily_api='http://localhost:8080/bridge/selectdailytable'
    this.http.post(daily_api,{'check_table_no':this.data.id,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("查询一般资料卡成功");
      console.log(res);
      if(res.code=='200')
      {
        this.daily=true
      this.specia=false
      this.technology=false
      this.monitor=false
      this.stru=false
      this.stru_check=false
      }
      this.all_daily_table=res.data
      
    }) 
  }
  selectInformation2()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let special_api='http://localhost:8080/bridge/selectspecialchecktable'
    this.http.post(special_api,{'check_table_no':this.data.id,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("查询特殊资料卡成功");
      console.log(res);
      if(res.code=='200')
      {
        this.daily=false
      this.specia=true
      this.technology=false
      this.monitor=false
      this.stru=false
      this.stru_check=false
      }
      this.all_special_table=res.data
      
    })
  }
  selectInformation3()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let technology_api='http://localhost:8080/bridge/selecttechnologytable'
    this.http.post(technology_api,{'eva_no':this.data.id,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("查询技术资料卡成功");
      console.log(res);
      if(res.code=='200')
      {
        this.daily=false
      this.specia=false
      this.technology=true
      this.monitor=false
      this.stru=false
      this.stru_check=false
      }
      this.all_technology_table=res.data
      
    })
  }
  selectInformation4()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let monitor_api='http://localhost:8080/bridge/selectmonitortable'
    this.http.post(monitor_api,{'monit_content_no':this.data.id,'bri_no':''},httpOption).subscribe((res:any)=>
    {
      // console.log("查询监测资料卡成功");
      console.log(res);
      if(res.code=='200')
      {
        this.daily=false
      this.specia=false
      this.technology=false
      this.monitor=true
      this.stru=false
      this.stru_check=false
      }
      this.all_monitor_table=res.data
      
    })
  }
  selectInformation5()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let structure_checking_table_table='http://localhost:8080/bridge/selectstructure_checking_table'
    this.http.post(structure_checking_table_table,{'regular_check_table':this.data.id},httpOption).subscribe((res:any)=>
    {
      // console.log("查询结构状况记录表成功");
      console.log(res);
      if(res.code=='200')
      {
        this.daily=false
        this.specia=false
        this.technology=false
        this.monitor=false
        this.stru=true
        this.stru_check=false
      }
      this.all_spe_stru_info_table=res.data
    })
  }
  selectInformation6()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let spe_stru_info_table_api='http://localhost:8080/bridge/selectspe_stru_info_table'
    this.http.post(spe_stru_info_table_api,{'comp_no':this.data.id},httpOption).subscribe((res:any)=>
    {
      // console.log("查询特殊构建信息表成功");
     console.log(res);
     if(res.code=='200')
      {
        this.daily=false
      this.specia=false
      this.technology=false
      this.monitor=false
      this.stru=false
      this.stru_check=true
      }
     this.all_structure_checking_table=res.data
     console.log(this.all_structure_checking_table);
     
     
    })
  }
}
