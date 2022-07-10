import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';   //用于获取网页传递的参数
import { Point } from '../aim/mapPoint';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';

@Component({
  selector: 'app-createnewbridge',
  templateUrl: './createnewbridge.component.html',
  styleUrls: ['./createnewbridge.component.css']
})
export class CreatenewbridgeComponent implements OnInit {

  //网页对网页传值 ，AllBridgeListsService服务组件的引用（弃用了）， http用于对服务器的传值
  constructor(private Index: ActivatedRoute, public allBridge: AllBridgeListsService, private http: HttpClient)//记住要调用 获取数据的方法
  { }

  data: any
  face: any = false
  over: any = false
  below: any = false
  ancillary:any = false
  pipe:any = false

   

  ngOnInit(): void {
    
    this.Index.queryParams.subscribe((Data) =>   //获取由showinfomation所传递的data
    {
      this.data = Data
    })

    
  }

  //以上是修改需要的
  //一下是增添需要的
  //删除的话需要先把有关于桥梁的id所有在其他全部删除，才能删掉主资料卡的信息

  showface() {
    this.face = true
    this.over = false
    this.below = false
    this.ancillary = false
    this.pipe = false
  }
  showover() {
    this.over = true
    this.below = false
    this.face = false
    this.ancillary = false
    this.pipe = false
  }
  showbelow() {
    this.below = true
    this.over = false
    this.face = false
    this.ancillary = false
    this.pipe = false
  }
  showancillary(){
    this.ancillary = true
    this.below = false
    this.over = false
    this.face = false
    this.pipe = false
  }
  showpipe()
  {
    this.pipe = true
    this.ancillary = false
    this.below = false
    this.over = false
    this.face = false
  }


  //#######################################################################################
  //#######################################################################################

  //提交返回CODE所在地
  BackSubmit:any=
  {
    SUBMZLK:'',
    SUByibanziliaoka:'',
    SUBTopSide:'',
    SUBBottomSide:'',
    SUBAncillary:'',
    SUBPipe:'',
  }

  //#######################################################################################
  //#######################################################################################

  //主桥梁资料卡 First提交的  6个
  MainZLK:any = 
  {
      bri_no:'',         //编号  必填的
      bri_name:'',       //名称
      bri_type:'',       //桥梁类型  
      maintain_type:'',  //养护类别  就把他定位桥梁等级了
      lng:'',            //经度  必填吧
      lat:'',            //纬度  必填吧
  }

  post_MainZLK()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'}) }
    let api='http://localhost:8080/bridge/addcitybridge'
    this.http.post(api,{
      'bri_no':this.MainZLK.bri_no,'bri_name':this.MainZLK.bri_name,'bri_type':this.MainZLK.bri_type,'maintain_type':this.MainZLK.maintain_type,
      'lng':this.MainZLK.lng,'lat':this.MainZLK.lat,'score':100

    },httpOption).subscribe((res:any)=>
    {
      console.log("提交主资料卡成功");
      console.log(res);
      this.BackSubmit.SUBMZLK=res.code
    })
  }
  //#######################################################################################
  //#######################################################################################

   //一般资料卡本地输入缓存的地方   21个
   YBZLK: any =  
   {
     bri_no: "", //桥梁编号               小心外键，要先外键
     adm_unit: '',//管理单位
     maint_unit: '',//养护单位
     build_unit: '',//建设单位
     design_unit: '',//设计单位

     supervisor_unit: '',//监理单位
     readwork_unit: '',//施工单位
     build_date: '',//建成年月              要用年-月-日
     total_cost: '',//总造价
     maintain_grade: '',//养护等级

     road_grade: '',          //道路等级
     str_type: '',            //结构类型  
     desige_load: '',         //设计荷载  
     loadlim_norm: '',        //限载标准
     anti_seismic_capacity: '',//抗震烈度

     zxiejiao: '',           //正斜交角
     bri_span_num: '',      //桥梁跨数
     kuajing_group: '',    //跨径组合
     brif_area: '',        //桥面面积
     bri_length: '',       //桥梁总长

     bri_wide: '',          //桥梁总宽
     roadw_wide: '',        //车行道净宽
     sidew_wide: '',        //人行道净宽
     river_grade: '',       //河道等级
     highest_w_level: '',   //最高水位

     often_w_level: '',     //常水位
   }
  post_yibanziliaoka() {
    const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = 'http://localhost:8080/bridge/addziliaoka'
    this.http.post(api, { 
      'bri_no':this.YBZLK.bri_no ,'adm_unit':this.YBZLK.adm_unit,'maint_unit':this.YBZLK.maint_unit,'build_unit':this.YBZLK.build_unit,'design_unit':this.YBZLK.design_unit,
    'supervisor_unit':this.YBZLK.supervisor_unit,'readwork_unit':this.YBZLK.readwork_unit,'build_date':this.YBZLK.build_date,'total_cost':this.YBZLK.total_cost,'maintain_grade':this.YBZLK.maintain_grade,
    'road_grade':this.YBZLK.road_grade ,'str_type':this.YBZLK.str_type ,'desige_load':this.YBZLK.desige_load ,'loadlim_norm':this.YBZLK.loadlim_norm ,'anti_seismic_capacity':this.YBZLK.anti_seismic_capacity ,
    'zxiejiao':this.YBZLK.zxiejiao ,'bri_span_num':this.YBZLK.bri_span_num ,'kuajing_group':this.YBZLK.kuajing_group ,'brif_area':this.YBZLK.brif_area ,'bri_length':this.YBZLK.bri_length ,
    'bri_wide':this.YBZLK.bri_wide ,'roadw_wide':this.YBZLK.roadw_wide ,'sidew_wide':this.YBZLK.sidew_wide ,'river_grade':this.YBZLK.river_grade ,'highest_w_level':this.YBZLK.highest_w_level ,
    'often_w_level':this.YBZLK.often_w_level 

      }, httpOption).subscribe((res: any) => {

      console.log("添加一般资料卡成功");
      console.log(res);//查看提交的数据
      this.BackSubmit.SUByibanziliaoka=res.code//将一般资料卡提交是否成功的结果返回
      
    })
  }
  //#######################################################################################
  //#######################################################################################

  //上部18个
  TopSide:any=
  {
      bri_no:'',              //编号  必填的
      kpost_type :'',         //主梁型式
      kpost_size:'',          //主梁尺寸
      kpost_number :'',         //主梁数量
      beam_type :'',            //横梁型式

      kbottom_area :'',           //主跨桥下净空
      botlim_high :'',            //桥下限高
      bri_skuabi :'',             //拱桥矢跨比
      adminicul_type :'',         //支座型式
      adminicul_number :'',       //支座数量

      bri_floor_structure :'',     //桥面结构
      bri_floor_pzthick :'',       //桥面铺装厚度
      exp_joint_type :'',           //伸缩缝型式
      exp_jiont_number :'',         //伸缩缝数量
      kbri_zpo :'',             //主桥纵坡

      kbri_hpo :'',             //主桥横坡
      yqiao_zpo :'',            //引桥纵坡
      yqiao_hpo :'',            //引桥横坡
  }
  post_TopSide()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api = 'http://localhost:8080/bridge/addtopsidestructure'
    this.http.post(api,{'bri_no':this.TopSide.bri_no, 'kpost_type':this.TopSide.kpost_type, 'kpost_size':this.TopSide.kpost_size, 'kpost_number':this.TopSide.kpost_number, 'beam_type':this.TopSide.beam_type,
     'kbottom_area':this.TopSide.kbottom_area, 'botlim_high':this.TopSide.botlim_high, 'bri_skuabi':this.TopSide.bri_skuabi, 'adminicul_type':this.TopSide.adminicul_type, 'adminicul_number':this.TopSide.adminicul_number,
     'bri_floor_structure':this.TopSide.bri_floor_structure, 'bri_floor_pzthick':this.TopSide.bri_floor_pzthick, 'exp_joint_type':this.TopSide.exp_joint_type, 'exp_jiont_number':this.TopSide.exp_jiont_number, 'kbri_zpo':this.TopSide.kbri_zpo,
     'kbri_hpo':this.TopSide.kbri_hpo, 'yqiao_zpo':this.TopSide.yqiao_zpo, 'yqiao_hpo':this.TopSide.yqiao_hpo

    },httpOption).subscribe((res:any)=>
    {
      console.log("添加上部结构成功");
      console.log(res);//查看提交的数据
      this.BackSubmit.SUBTopSide=res.code
      
      
    })
  }
  //#######################################################################################
  //#######################################################################################

  //下部结构 20个
  BottomSide:any=
  {
      bri_no:'',         //编号  必填的
      pier_type:'',         // 桥墩型式                   
      pier_number:'',         //桥墩数量        
      pier_high:'',         //桥墩标高           
      pbent_size:'',          //桥墩盖梁尺寸            

      pbot_high:'',         //桥墩基底标高           
      pabut_slab_size:'',     //桥墩底板尺寸           
      pbas_size:'',         // 桥墩基桩尺寸          
      pbas_num:'',          //  桥墩基桩根数          
      qabut_type:'',          //   桥台型式         

      qabut_num:'',         //    桥台数量       
      qabut_high:'',        //   桥台标高         
      qbas_high:'',         //     桥台基底标高      
      qcap_size:'',         //     台帽尺寸      
      qbot_size:'',         //     桥台底板尺寸      

      qbas_size:'',         //     桥台基桩尺寸      
      qbas_num:'',          //     桥台基桩根数       
      qabut_board_thick:'',    //  桥台挡土板厚度         
      wingwall_type:'',        //  翼墙形式         
      wingwall_length:'',      //  翼墙长度         
  }

  post_BottomSide()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addbottomstructure'
    this.http.post(api,{'bri_no':this.BottomSide.bri_no, 'pier_type':this.BottomSide.pier_type, 'pier_number':this.BottomSide.pier_number, 'pier_high':this.BottomSide.pier_high, 'pbent_size':this.BottomSide.pbent_size, 
    'pbot_high':this.BottomSide.pbot_high, 'pabut_slab_size':this.BottomSide.pabut_slab_size, 'pbas_size':this.BottomSide.pbas_size, 'pbas_num':this.BottomSide.pbas_num, 'qabut_type':this.BottomSide.qabut_type, 
    'qabut_num':this.BottomSide.qabut_num, 'qabut_high':this.BottomSide.qabut_high, 'qbas_high':this.BottomSide.qbas_high, 'qcap_size':this.BottomSide.qcap_size, 'qbot_size':this.BottomSide.qbot_size, 
    'qbas_size':this.BottomSide.qbas_size, 'qbas_num':this.BottomSide.qbas_num, 'qabut_board_thick':this.BottomSide.qabut_board_thick, 'wingwall_type':this.BottomSide.wingwall_type, 'wingwall_length':this.BottomSide.wingwall_length, 

    },httpOption).subscribe((res:any)=>
    {
      console.log("添加下部结构成功");
      console.log(res);
      this.BackSubmit.SUBBottomSide=res.code
    })
  }
  //#######################################################################################
  //#######################################################################################

  //附属工程 10个
  Ancillary:any=
  {
      bri_no:'',          //编号  必填的
      jshuikou_size :'',          //集水口尺寸
      jshuikou_number:'',         //集水口数量
      xshuiguan_size :'',         //泄水管尺寸
      xshuiguan_length :'',         //泄水管长度

      handrail_length :'',          //栏杆总长
      handrail_structure :'',         //栏杆结构
      duanzhu_size :'',         //端柱尺寸
      revetment_type :'',         //护岸类型
      yingpodq_type :'',          //引坡挡墙类型
  }

  post_Ancillary()
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addfushuwork'
    this.http.post(api,{'bri_no':this.Ancillary.bri_no, 'jshuikou_size':this.Ancillary.jshuikou_size, 'jshuikou_number':this.Ancillary.jshuikou_number, 'xshuiguan_size':this.Ancillary.xshuiguan_size, 'xshuiguan_length':this.Ancillary.xshuiguan_length, 
    'handrail_length':this.Ancillary.handrail_length, 'handrail_structure':this.Ancillary.handrail_structure, 'duanzhu_size':this.Ancillary.duanzhu_size, 'revetment_type':this.Ancillary.revetment_type, 'yingpodq_type':this.Ancillary.yingpodq_type, 

    },httpOption).subscribe((res:any)=>{
      console.log("添加附属工程成功");
      console.log(res);
      this.BackSubmit.SUBAncillary=res.code
    })
  }

  //#######################################################################################
  //#######################################################################################

  //附属管道 5个
  SusPipe:any=
  {
      bri_no:'',            //编号  必填的
      serv_pipe :'',        //给水管
      gas_pipe:'',        //燃气管
      power_cable :'',        //电力缆
      comm_cable :'',       //通讯电缆
  }
  post_SusPipe()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addfuguapipe'
    this.http.post(api,{'bri_no':this.SusPipe.bri_no, 'serv_pipe':this.SusPipe.serv_pipe, 'gas_pipe':this.SusPipe.gas_pipe, 
    'power_cable':this.SusPipe.power_cable, 'comm_cable':this.SusPipe.comm_cable, 

    },httpOption).subscribe((res:any)=>{
      console.log("添加挂件管道成功");
      console.log(res);
      this.BackSubmit.SUBPipe=res.code
      
    })
  }

  //#######################################################################################
  //#######################################################################################

  // 提交按钮所有一并提交按钮
  ALLsubmit()
  {
     //默认
     let MZLK=true;let ZLKA=true;let TSA=true;let BSA=true;let ANC=true;let PipeA=true;

     //主资料卡
     if (this.MainZLK.bri_no!='') 
     {  
       this.post_MainZLK()
       setTimeout(() => {
         MZLK=this.BackSubmit.SUBMZLK=='200'
       }, 100);
     }

     //增加一般桥梁资料卡
      if(this.YBZLK.bri_no!='')
    {
    this.post_yibanziliaoka()
    setTimeout(() => {
      ZLKA = this.BackSubmit.SUByibanziliaoka=='200'
    }, 200);
    }
    
    //添加上部结构
    if(this.TopSide.bri_no!='')
    {
    this.post_TopSide()
    setTimeout(() => {
      TSA = this.BackSubmit.SUBTopSide=='200'
    }, 200);
    }

    //下部结构
    if(this.BottomSide.bri_no!='')
    {
      this.post_BottomSide()
      setTimeout(() => {
        BSA=this.BackSubmit.SUBBottomSide=='200'
      }, 200);
    }

    //附属结构
    if(this.Ancillary.bri_no!='')
    {
      this.post_Ancillary()
      setTimeout(() => {
        ANC=this.BackSubmit.SUBAncillary=='200'
      }, 200);
    }
    
    //附属挂件
    if(this.SusPipe.bri_no!='')
    {
      this.post_SusPipe()
      setTimeout(() => {
        PipeA=this.BackSubmit.SUBPipe=='200'
      }, 200);
    }

    //提交提示
    setTimeout(() => {
      if(MZLK&&ZLKA&&TSA&&BSA&&ANC&&PipeA)
    {
      alert("提交成功")
    }
    else 
    {
      alert("提交失败,请检查桥梁编号是否正确")
    }
    }, 300);
    

  }
}
