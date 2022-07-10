import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';

@Component({
  selector: 'app-daily-special-table',
  templateUrl: './daily-special-table.component.html',
  styleUrls: ['./daily-special-table.component.css']
})
export class DailySpecialTableComponent implements OnInit {

   //网页对网页传值 ，AllBridgeListsService服务组件的引用（弃用了）， http用于对服务器的传值
   constructor(private Index: ActivatedRoute, public allBridge: AllBridgeListsService, private http: HttpClient,private router:Router)//记住要调用 获取数据的方法
   { }
 
   data: any

   daily: any = false    //日常
   specia: any = false    //特殊检测
   technology: any = false   //技术
   monitor:any = false //检测
   stru:any = false       //特殊构件
   stru_check:any = false         //结构状况
    
 
   ngOnInit(): void {
     
     this.Index.queryParams.subscribe((Data) =>   //获取由showinfomation所传递的data
     {
       this.data = Data
     })
 
     
   }
 
   //以上是修改需要的
   //一下是增添需要的
   //删除的话需要先把有关于桥梁的id所有在其他全部删除，才能删掉主资料卡的信息
 
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
 
   
   //日常特殊巡检员 账号登录地
   daily_sepcial_user:any=
{
  DS_user:'',
  DS_pwd:'',
}

  //桥梁ID储存地
  input_bridgeID:any=''

  //各表编号
    table_ID:any=''

   //著资料卡桥梁信息
    get_BMZLK:any={}

  //通过桥梁id获取桥梁著资料卡相关信息
    getMZLK()
    {
      const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
      let api='http://localhost:8080/bridge/selectcitybridge'
      this.http.post(api,{'bri_no':this.input_bridgeID},httpOption).subscribe((res:any)=>{
        console.log(res);
        this.get_BMZLK=res.data
        // console.log(this.get_BMZLK[0]); 才是真正的数据

        //关键 再次赋值
        this.auto_ID(res)
      })
    }

    //关键 再次赋值
    auto_ID(res:any)
    {
        this.daily_table.check_table_no=res.data[0].lng+'#'+res.data[0].lat
        this.daily_table.bri_no=this.input_bridgeID
        this.daily_table.bri_name=this.get_BMZLK[0].bri_name

        this.special_table.check_table_no=res.data[0].lng+'#'+res.data[0].lat
        this.special_table.bri_no=this.input_bridgeID
        this.special_table.bri_name=this.get_BMZLK[0].bri_name

        this.technology_table.eva_no=res.data[0].lng+'#'+res.data[0].lat
        this.technology_table.bri_no=this.input_bridgeID
        this.technology_table.bri_name=this.get_BMZLK[0].bri_name

        this.monitor_table.monit_content_no=res.data[0].lng+'#'+res.data[0].lat
        this.monitor_table.bri_no=this.input_bridgeID
        this.monitor_table.bri_name=this.get_BMZLK[0].bri_name


        this.stru_table.comp_no=res.data[0].lng+'@'+res.data[0].lat
        // this.stru_table.bri_no=this.input_bridgeID
        this.stru_table.bri_name=this.get_BMZLK[0].bri_name
        this.stru_table.check_people=this.daily_sepcial_user.DS_user, //检测人员

        this.stru_check_table.regular_check_table=res.data[0].lng+'#'+res.data[0].lat
        this.stru_check_table.bri_no=this.input_bridgeID
        this.stru_check_table.bri_name=this.get_BMZLK[0].bri_name
        this.stru_check_table.comp_name=this.stru_table.comp_name          //构件名称
        this.stru_check_table.comp_no=this.stru_table.comp_no             //构件编号
        this.stru_check_table.check_people=this.daily_sepcial_user.DS_user        //检测人员
    }

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //日常巡检表
  daily_table:any=
  {
    check_table_no:'',    //日常巡检报表编号 默认值
    bri_no:'',            //桥梁编号   不用写了

    check_unit:'',        //巡检单位
    bri_name:'',          //桥梁名称  通过桥梁ID查询 不用写了在html中 
    whether_intact:'',    //是否完好
    dam_type:'',          //损坏类型
    dam_number:'',        //损坏数量

    dam_location:'',      //损坏位置
    remark:'',            //备注
    check_people:'',      //巡检人
    check_date:'',        //巡检日期
  }
  post_daily_table()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/adddailytable'
    this.http.post(api,
      {
        'check_table_no':this.daily_table.check_table_no, 'bri_no':this.daily_table.bri_no, 
        'check_unit':this.daily_table.check_unit, 'bri_name':this.daily_table.bri_name, 'whether_intact':this.daily_table.whether_intact, 'dam_type':this.daily_table.dam_type, 'dam_number':this.daily_table.dam_number, 
        'dam_location':this.daily_table.dam_location, 'remark':this.daily_table.remark, 'check_people':this.daily_table.check_people, 'check_date':this.daily_table.check_date, 
      },httpOption).subscribe((res:any)=>{
      // console.log("添加日常巡检成功");
      console.log(res);
    })
  }

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //特殊检测表
  special_table:any=
  {
    check_table_no:'',      //特殊检测报表编号
    bri_no:'',              //桥梁编号  不用谢
    check_unit:'',          //检测单位
    bri_name:'',            //桥梁名称  不用谢
    check_place:'',         //检测部位

    check_date:'',          //检测时间
    check_pro:'',           //检测过程
    bri_tec_info:'',        //桥梁技术状况
    bri_test:'',            //桥梁试验
    check_aim:'',           //检测项目

    check_way:'',           //检测方法
    dam_cause:'',           //损坏原因
    dam_deg:'',             //损坏程度
    use_safe:'',            //继续使用安全性
    man_way:'',             //维护管理方案
  }
  post_special_table()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addspecialchecktable'
    this.http.post(api,
      {
        'check_table_no':this.special_table.check_table_no, 'bri_no':this.special_table.bri_no, 'check_unit':this.special_table.check_unit, 'bri_name':this.special_table.bri_name, 'check_place':this.special_table.check_place, 
        'check_date':this.special_table.check_date, 'check_pro':this.special_table.check_pro, 'bri_tec_info':this.special_table.bri_tec_info, 'bri_test':this.special_table.bri_test, 'check_aim':this.special_table.check_aim, 
        'check_way':this.special_table.check_way, 'dam_cause':this.special_table.dam_cause, 'dam_deg':this.special_table.dam_deg, 'use_safe':this.special_table.use_safe, 'man_way':this.special_table.man_way, 
      },httpOption).subscribe((res:any)=>{
      // console.log("特殊巡检成功");
      console.log(res);
    })
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  technology_table:any=
  {
    eva_no:'',        //技术评估编号
    bri_no:'',        //桥梁编号    不用写
    bri_deck_pave:'', //桥面铺装
    bri_name:'',      //桥梁名称    不用写
    bri_table:'',     //桥头平顶

    exp_joint:'',     //伸缩缝
    dra_system:'',    //排水系统
    emsto_type:'',    //空腹式
    resto_type:'',    //实腹式
    skew_back:'',     //拱脚

    abutment:'',      //墩台
    base:'',          //基础
    behwwall:'',      //耳背翼墙
    cap_cover:'',     //台帽梁盖
    handrall:'',      //栏杆

    sid_piece:'',     //人行道块件
    st_stru:'',       //钢结构物
    eva_date:'',      //评估日期
  }
  post_technology_table()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addtechnologytable'
    this.http.post(api,
      {
        'eva_no':this.technology_table.eva_no, 'bri_no':this.technology_table.bri_no, 'bri_deck_pave':this.technology_table.bri_deck_pave, 'bri_name':this.technology_table.bri_name, 'bri_table':this.technology_table.bri_table, 
        'exp_joint':this.technology_table.exp_joint, 'dra_system':this.technology_table.dra_system, 'emsto_type':this.technology_table.emsto_type, 'resto_type':this.technology_table.resto_type, 'skew_back':this.technology_table.skew_back, 
        'abutment':this.technology_table.abutment, 'base':this.technology_table.base, 'behwwall':this.technology_table.behwwall, 'cap_cover':this.technology_table.cap_cover, 'handrall':this.technology_table.handrall, 
        'sid_piece':this.technology_table.sid_piece, 'st_stru':this.technology_table.st_stru, 'eva_date':this.technology_table.eva_date, 
      },httpOption).subscribe((res:any)=>{
      // console.log("技术表成功");
      console.log(res);
      
    })
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //检测表
  monitor_table:any=
  {
    monit_content_no:'',    //监测内容编号
    bri_no:'',            //桥梁编号
    bri_name:'',          //桥梁名称
    bri_type:'',          //桥梁类型
    bri_control_section:'', //桥梁控制截面

    pier_corner:'',       //桥墩转角
    base_corner:'',       //基础转角
    admi_cerner:'',       //支座转角
    haw_pull:'',          //缆索拉力
    stwire_flabby:'',     //预应力钢丝的松弛

    stru_shake:'',        //结构的震动
    monit_date:'',        //监测日期
  }
  post_monitor_table()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addmonitortable'
    this.http.post(api,
      {
        'monit_content_no':this.monitor_table.monit_content_no,'bri_no':this.monitor_table.bri_no,'bri_name':this.monitor_table.bri_name,'bri_type':this.monitor_table.bri_type,'bri_control_section':this.monitor_table.bri_control_section,
        'pier_corner':this.monitor_table.pier_corner,'base_corner':this.monitor_table.base_corner,'admi_cerner':this.monitor_table.admi_cerner,'haw_pull':this.monitor_table.haw_pull,'stwire_flabby':this.monitor_table.stwire_flabby,
        'stru_shake':this.monitor_table.stru_shake,'monit_date':this.monitor_table.monit_date,
      },httpOption).subscribe((res:any)=>{
        // console.log("检测表成功");
        console.log(res);
        
    })
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //先要有特殊结构表才能由结构状况表
  stru_table:any=
  {
    bri_name:'',    //桥梁名称
    check_unit:'',  //监测单位
    date:'',        //日期
    assembly:'',    //部件
    comp_name:'',   //构件名称

    comp_no:'',     //构件编号
    info_remark:'', //信息或注释
    check_people:'', //检测人员
  }
  post_stru_table()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addspe_stru_info_table'
    this.http.post(api,
      {
        'bri_name':this.stru_table.bri_name,'check_unit':this.stru_table.check_unit,'date':this.stru_table.date,'assembly':this.stru_table.assembly,'comp_name':this.stru_table.comp_name,
        'comp_no':this.stru_table.comp_no,'info_remark':this.stru_table.info_remark,'check_people':this.stru_table.check_people,
      },httpOption).subscribe((res:any)=>{
      // console.log("特殊结构表创建成功");
      console.log(res);
    })
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //结构状况表
  stru_check_table:any=
  {
    regular_check_table:'', //定期检查编号
    bri_no:'',              //桥梁编号
    check_unit:'',          //检测单位
    check_date:'',          //巡检日期
    bri_name:'',            //桥梁名称

    assembly:'',            //部件
    comp_name:'',           //构件名称
    comp_no:'',             //构件编号
    state:'',               //状态
    dam_type:'',            //损坏类型

    dam_degree:'',          //损坏程度
    dam_location:'',        //损坏位置
    eros_type:'',           //侵蚀分类
    remark:'',              //备注
    check_people:'',        //检测人员
  }
  post_stru_check_table()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addstructure_checking_table'
    this.http.post(api,
      {
        'regular_check_table':this.stru_check_table.regular_check_table, 'bri_no':this.stru_check_table.bri_no, 'check_unit':this.stru_check_table.check_unit, 'check_date':this.stru_check_table.check_date, 'bri_name':this.stru_check_table.bri_name, 
        'assembly':this.stru_check_table.assembly, 'comp_name':this.stru_check_table.comp_name, 'comp_no':this.stru_check_table.comp_no, 'state':this.stru_check_table.state, 'dam_type':this.stru_check_table.dam_type, 
        'dam_degree':this.stru_check_table.dam_degree, 'dam_location':this.stru_check_table.dam_location, 'eros_type':this.stru_check_table.eros_type, 'remark':this.stru_check_table.remark, 'check_people':this.stru_check_table.check_people, 
      },httpOption).subscribe((res:any)=>{
      // console.log("特殊状况表成功");
      console.log(res);
      
    })
  }

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  //人员等级
  newlevel:any=''

  //判断账号是否正确
  //判断桥梁ID是否输入正确

  judge_user():any
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selectusers'
    this.http.post(api,{'users':this.daily_sepcial_user.DS_user,'pwd':this.daily_sepcial_user.DS_pwd},httpOption).subscribe((res:any)=>{
      console.log(res);
      
      if(res.code!='200')
      {
        alert('请输入正确的密码或用户名')
      }
      else if(res.data[0].level=='0')
      {
        alert('游客无权限更改数据')
      }
      else
      {
        this.newlevel=res.data[0].level
      }
    })
  }


  //提交按钮 先进行 著资料卡的查询 在进行特殊构建表的创建 最后进剩下4个表的创建
  submit_daily_special()
  {

  this.judge_user()

  setTimeout(() => {
  console.log(this.newlevel);
  
  if(this.newlevel=='10'||this.newlevel=='20'||this.newlevel=='999')
    {
    // this.getMZLK()  //著资料卡的查询

    //先把构建建好
    this.post_stru_table()

    //在创建其他表
    setTimeout(() => {
      this.post_stru_check_table()
      this.post_monitor_table()
      this.post_technology_table()
      this.post_special_table()
      this.post_daily_table()
    }, 100);
    }

}, 200);
    
  }

   //跳转到查询表 可以删除
   headingbtn()
   {
    this.router.navigateByUrl("/show_daily_special")
   }






}
