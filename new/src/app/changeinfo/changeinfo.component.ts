import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';   //用于获取网页传递的参数
import { Point } from '../aim/mapPoint';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent implements OnInit {

  //网页对网页传值 ，AllBridgeListsService服务组件的引用， http用于对服务器的传值
  constructor(private Index: ActivatedRoute, public allBridge: AllBridgeListsService, private http: HttpClient)//记住要调用 获取数据的方法
  { }

  //网页传值粗存地（不删） data.id
  data: any

  //以下五个是控制按钮隐藏按钮(不删)
  face: any = false
  over: any = false
  below: any = false
  ancillary:any = false
  pipe:any = false

   

  ngOnInit(): void {

    let number=Number((Math.random() * 100).toFixed(0))
    console.log(number);



    //获取由showinfomation所传递的桥梁id （不能删）
    this.Index.queryParams.subscribe((Data) =>   
    {
      this.data = Data
    })


    //测试数据查询 (不删)
    setTimeout(() => {
      this.show_MainZLK() 
    }, 50);
    
    setTimeout(() => {
      
      this.show_YBZLK()
      this.show_TopSide()
      this.show_BottomSide()
      this.show_Ancillary()
      this.show_SusPipe()
    }, 100);
  }

  //一下是增添需要的

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


  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //该变信息 首先将获取到所有的数据 保存到本地，显示在页面上 玩家更改后 通过post提交给服务器

  //主资料卡
  S_MainZLK:any=
  {
      bri_no:'',         //编号  必填的
      bri_name:'',       //名称
      bri_type:'',       //桥梁类型  
      maintain_type:'',  //养护类别  就把他定位桥梁等级了
      lng:'',            //经度  必填吧
      lat:'',            //纬度  必填吧
  }
  show_MainZLK()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selectcitybridge'
    this.http.post(api,{'bri_no':this.data.id},httpOption).subscribe((res:any)=>
    {
      console.log("查询主资料卡成功");
      console.log(res);
      this.fuzhi_MainZLK(res)
      
    })
  }
  fuzhi_MainZLK(res:any)
  {
      this.S_MainZLK.bri_no=res.data[0].bri_no
      this.S_MainZLK.bri_name=res.data[0].bri_name
      this.S_MainZLK.bri_type=res.data[0].bri_type
      this.S_MainZLK.maintain_type=res.data[0].maintain_type
      this.S_MainZLK.lng=res.data[0].lng
      this.S_MainZLK.lat=res.data[0].lat
      this.S_MainZLK.score=res.data[0].score
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //一般资料卡
  S_YBZLK:any=
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
  show_YBZLK()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selectziliaoka'
    this.http.post(api,{'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
      console.log("查询一般资料卡成功");
      console.log(res);
      this.fuzhi_YBZLK(res)
      
    })
  }
  fuzhi_YBZLK(res:any)
  {
     this.S_YBZLK.bri_no=res.data[0].bri_no                   //桥梁编号               小心外键，要先外键
     this.S_YBZLK.adm_unit=res.data[0].adm_unit                                   //管理单位
     this.S_YBZLK.maint_unit=res.data[0].maint_unit                                   //养护单位
     this.S_YBZLK.build_unit=res.data[0].build_unit                                   //建设单位
     this.S_YBZLK.design_unit=res.data[0].design_unit                                    //设计单位

     this.S_YBZLK.supervisor_unit=res.data[0].supervisor_unit                                    //监理单位
     this.S_YBZLK.readwork_unit=res.data[0].readwork_unit                                    //施工单位
     this.S_YBZLK.build_date=res.data[0].build_date                                   //建成年月              要用年-月-日
     this.S_YBZLK.total_cost=res.data[0].total_cost                                   //总造价
     this.S_YBZLK.maintain_grade=res.data[0].maintain_grade                                   //养护等级

     this.S_YBZLK.road_grade=res.data[0].road_grade                                             //道路等级
     this.S_YBZLK.str_type=res.data[0].str_type                                               //结构类型  
     this.S_YBZLK.desige_load=res.data[0].desige_load                                             //设计荷载  
     this.S_YBZLK.loadlim_norm=res.data[0].loadlim_norm                                           //限载标准
     this.S_YBZLK.anti_seismic_capacity=res.data[0].anti_seismic_capacity                                    //抗震烈度

     this.S_YBZLK.zxiejiao=res.data[0].zxiejiao                                              //正斜交角
     this.S_YBZLK.bri_span_num=res.data[0].bri_span_num                                         //桥梁跨数
     this.S_YBZLK.kuajing_group=res.data[0].kuajing_group                                        //跨径组合
     this.S_YBZLK.brif_area=res.data[0].brif_area                                            //桥面面积
     this.S_YBZLK.bri_length=res.data[0].bri_length                                          //桥梁总长

     this.S_YBZLK.bri_wide=res.data[0].bri_wide                                             //桥梁总宽
     this.S_YBZLK.roadw_wide=res.data[0].roadw_wide                                           //车行道净宽
     this.S_YBZLK.sidew_wide=res.data[0].sidew_wide                                           //人行道净宽
     this.S_YBZLK.river_grade=res.data[0].river_grade                                           //河道等级
     this.S_YBZLK.highest_w_level=res.data[0].highest_w_level                                       //最高水位

     this.S_YBZLK.often_w_level=res.data[0].often_w_level                                         //常水位
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //上部结构
  S_TopSide:any=
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
  show_TopSide()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selecttopsidestructure'
    this.http.post(api,{'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
      console.log("查询上部结构成功");
      console.log(res);
      this.fuzhi_TopSide(res)
    })
  }
  fuzhi_TopSide(res:any)
  {
      this.S_TopSide.bri_no=res.data[0].bri_no              //编号  必填的
      this.S_TopSide.kpost_type =res.data[0].kpost_type         //主梁型式
      this.S_TopSide.kpost_size=res.data[0].kpost_size          //主梁尺寸
      this.S_TopSide.kpost_number =res.data[0].kpost_number         //主梁数量
      this.S_TopSide.beam_type =res.data[0].beam_type            //横梁型式

      this.S_TopSide.kbottom_area =res.data[0].kbottom_area           //主跨桥下净空
      this.S_TopSide.botlim_high =res.data[0].botlim_high            //桥下限高
      this.S_TopSide.bri_skuabi =res.data[0].bri_skuabi             //拱桥矢跨比
      this.S_TopSide.adminicul_type =res.data[0].adminicul_type         //支座型式
      this.S_TopSide.adminicul_number =res.data[0].adminicul_number       //支座数量

      this.S_TopSide.bri_floor_structure =res.data[0].bri_floor_structure     //桥面结构
      this.S_TopSide.bri_floor_pzthick =res.data[0].bri_floor_pzthick       //桥面铺装厚度
      this.S_TopSide.exp_joint_type =res.data[0].exp_joint_type           //伸缩缝型式
      this.S_TopSide.exp_jiont_number =res.data[0].exp_jiont_number         //伸缩缝数量
      this.S_TopSide.kbri_zpo =res.data[0].kbri_zpo             //主桥纵坡

      this.S_TopSide.kbri_hpo =res.data[0].kbri_hpo             //主桥横坡
      this.S_TopSide.yqiao_zpo =res.data[0].yqiao_zpo            //引桥纵坡
      this.S_TopSide.yqiao_hpo =res.data[0].yqiao_hpo            //引桥横坡
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  
  //下部结构
  S_BottomSide:any=
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
  show_BottomSide()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selectbottomstructure'
    this.http.post(api,{'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
      console.log("查询下部结构成功");
      console.log(res);
      this.fushu_BottomSide(res)
    })
  }
  fushu_BottomSide(res:any)
  {
      this.S_BottomSide.bri_no=res.data[0].bri_no         //编号  必填的
      this.S_BottomSide.pier_type=res.data[0].pier_type         // 桥墩型式                   
      this.S_BottomSide.pier_number=res.data[0].pier_number         //桥墩数量        
      this.S_BottomSide.pier_high=res.data[0].pier_high         //桥墩标高           
      this.S_BottomSide.pbent_size=res.data[0].pbent_size          //桥墩盖梁尺寸            

      this.S_BottomSide.pbot_high=res.data[0].pbot_high         //桥墩基底标高           
      this.S_BottomSide.pabut_slab_size=res.data[0].pabut_slab_size     //桥墩底板尺寸           
      this.S_BottomSide.pbas_size=res.data[0].pbas_size         // 桥墩基桩尺寸          
      this.S_BottomSide.pbas_num=res.data[0].pbas_num          //  桥墩基桩根数          
      this.S_BottomSide.qabut_type=res.data[0].qabut_type          //   桥台型式         

      this.S_BottomSide.qabut_num=res.data[0].qabut_num         //    桥台数量       
      this.S_BottomSide.qabut_high=res.data[0].qabut_high        //   桥台标高         
      this.S_BottomSide.qbas_high=res.data[0].qbas_high         //     桥台基底标高      
      this.S_BottomSide.qcap_size=res.data[0].qcap_size         //     台帽尺寸      
      this.S_BottomSide.qbot_size=res.data[0].qbot_size         //     桥台底板尺寸      

      this.S_BottomSide.qbas_size=res.data[0].qbas_size         //     桥台基桩尺寸      
      this.S_BottomSide.qbas_num=res.data[0].qbas_num          //     桥台基桩根数       
      this.S_BottomSide.qabut_board_thick=res.data[0].qabut_board_thick    //  桥台挡土板厚度         
      this.S_BottomSide.wingwall_type=res.data[0].wingwall_type        //  翼墙形式         
      this.S_BottomSide.wingwall_length=res.data[0].wingwall_length      //  翼墙长度 
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //附属工程
  S_Ancillary:any=
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
  show_Ancillary()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selectfushuwork'
    this.http.post(api,{'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
      console.log("查询附属工程成功");
      console.log(res);
      this.fushu_Ancillary(res)
    })
  }
  fushu_Ancillary(res:any)
  {
    this.S_Ancillary.bri_no=res.data[0].bri_no         //编号  必填的
    this.S_Ancillary.jshuikou_size =res.data[0].jshuikou_size          //集水口尺寸
    this.S_Ancillary.jshuikou_number=res.data[0].jshuikou_number         //集水口数量
    this.S_Ancillary.xshuiguan_size =res.data[0].xshuiguan_size         //泄水管尺寸
    this.S_Ancillary.xshuiguan_length =res.data[0].xshuiguan_length         //泄水管长度

    this.S_Ancillary.handrail_length =res.data[0].handrail_length          //栏杆总长
    this.S_Ancillary.handrail_structure =res.data[0].handrail_structure         //栏杆结构
    this.S_Ancillary.duanzhu_size =res.data[0].duanzhu_size         //端柱尺寸
    this.S_Ancillary.revetment_type =res.data[0].revetment_type         //护岸类型
    this.S_Ancillary.yingpodq_type =res.data[0].yingpodq_type          //引坡挡墙类型
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //管道
  S_SusPipe:any=
  {
      bri_no:'',            //编号  必填的
      serv_pipe :'',        //给水管
      gas_pipe:'',        //燃气管
      power_cable :'',        //电力缆
      comm_cable :'',       //通讯电缆
  }
  show_SusPipe()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/selectfuguapipe'
    this.http.post(api,{'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
      console.log("查询管道成功");
      console.log(res);
      this.fushu_SusPipe(res)
      
    })
  }
  fushu_SusPipe(res:any)
  {
    this.S_SusPipe.bri_no=res.data[0].bri_no          //编号  必填的
    this.S_SusPipe.serv_pipe =res.data[0].serv_pipe      //给水管
    this.S_SusPipe.gas_pipe=res.data[0].gas_pipe      //燃气管
    this.S_SusPipe.power_cable =res.data[0].power_cable      //电力缆
    this.S_SusPipe.comm_cable =res.data[0].comm_cable     //通讯电缆
  }
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //修改数据提交了 不能修改桥梁id 如果要修改建议自己手动删除在重建一个

  updata_MainZLK()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/changecitybridge'
    this.http.post(api,{
      'bri_name':this.S_MainZLK.bri_name, 'bri_type':this.S_MainZLK.bri_type, 'maintain_type':this.S_MainZLK.maintain_type, 
      'lng':this.S_MainZLK.lng, 'lat':this.S_MainZLK.lat, 'bri_no':this.S_MainZLK.bri_no,

  },httpOption).subscribe((res:any)=>{
      console.log("更新主资料卡成功");
      console.log(res);
    })
  }

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  updata_YBZLK()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/changeziliaoka' 
    this.http.post(api,
      {
        'adm_unit':this.S_YBZLK.adm_unit, 'maint_unit':this.S_YBZLK.maint_unit, 'build_unit':this.S_YBZLK.build_unit, 'design_unit':this.S_YBZLK.design_unit, 
        'supervisor_unit':this.S_YBZLK.supervisor_unit, 'readwork_unit':this.S_YBZLK.readwork_unit, 'build_date':this.S_YBZLK.build_date, 'total_cost':this.S_YBZLK.total_cost, 'maintain_grade':this.S_YBZLK.maintain_grade, 
        'road_grade':this.S_YBZLK.road_grade, 'str_type':this.S_YBZLK.str_type, 'desige_load':this.S_YBZLK.desige_load, 'loadlim_norm':this.S_YBZLK.loadlim_norm, 'anti_seismic_capacity':this.S_YBZLK.anti_seismic_capacity, 
        'zxiejiao':this.S_YBZLK.zxiejiao, 'bri_span_num':this.S_YBZLK.bri_span_num, 'kuajing_group':this.S_YBZLK.kuajing_group, 'brif_area':this.S_YBZLK.brif_area, 'bri_length':this.S_YBZLK.bri_length, 
        'bri_wide':this.S_YBZLK.bri_wide, 'roadw_wide':this.S_YBZLK.roadw_wide, 'sidew_wide':this.S_YBZLK.sidew_wide, 'river_grade':this.S_YBZLK.river_grade, 'highest_w_level':this.S_YBZLK.highest_w_level, 
        'often_w_level':this.S_YBZLK.often_w_level, 
        'bri_no':this.S_YBZLK.bri_no, 

      },httpOption).subscribe((res:any)=>{
        console.log("更新一般资料卡成功");
        console.log(res);
    }) 
  }

  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


  updata_TopSide()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/changetopsidestructure' 
    this.http.post(api,
      {
        'kpost_type':this.S_TopSide.kpost_type, 'kpost_size':this.S_TopSide.kpost_size, 'kpost_number':this.S_TopSide.kpost_number, 'beam_type':this.S_TopSide.beam_type, 'kbottom_area':this.S_TopSide.kbottom_area, 
        'botlim_high':this.S_TopSide.botlim_high, 'bri_skuabi':this.S_TopSide.bri_skuabi, 'adminicul_type':this.S_TopSide.adminicul_type, 'adminicul_number':this.S_TopSide.adminicul_number, 'bri_floor_structure':this.S_TopSide.bri_floor_structure, 
        'bri_floor_pzthick':this.S_TopSide.bri_floor_pzthick, 'exp_joint_type':this.S_TopSide.exp_joint_type, 'exp_jiont_number':this.S_TopSide.exp_jiont_number , 'kbri_zpo':this.S_TopSide.kbri_zpo, 'kbri_hpo':this.S_TopSide.kbri_hpo, 
        'yqiao_zpo':this.S_TopSide.yqiao_zpo, 'yqiao_hpo':this.S_TopSide.yqiao_hpo, 
        'bri_no':this.S_TopSide.bri_no, 

      },httpOption).subscribe((res:any)=>{
        console.log("更新上部结构成功");
        console.log(res);
      })
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


  updata_BottomSide()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/changebottomstructure'
    this.http.post(api,
      {
        'pier_type':this.S_BottomSide.pier_type, 'pier_number':this.S_BottomSide.pier_number, 'pier_high':this.S_BottomSide.pier_high, 'pbent_size':this.S_BottomSide.pbent_size, 'pbot_high':this.S_BottomSide.pbot_high, 
        'pabut_slab_size':this.S_BottomSide.pabut_slab_size, 'pbas_size ':this.S_BottomSide.pbas_size , 'pbas_num ':this.S_BottomSide.pbas_num , 'qabut_type ':this.S_BottomSide.qabut_type , 'qabut_num':this.S_BottomSide.qabut_num, 
        'qabut_high':this.S_BottomSide.qabut_high, 'qbas_high':this.S_BottomSide.qbas_high, 'qcap_size':this.S_BottomSide.qcap_size, 'qbot_size':this.S_BottomSide.qbot_size, 'qbas_size':this.S_BottomSide.qbas_size, 
        'qbas_num':this.S_BottomSide.qbas_num, 'qabut_board_thick':this.S_BottomSide.qabut_board_thick, 'wingwall_type':this.S_BottomSide.wingwall_type, 'wingwall_length':this.S_BottomSide.wingwall_length, 
        'bri_no':this.S_BottomSide.bri_no, 

      },httpOption).subscribe((res:any)=>{
      console.log("更新下部结构成功");
      console.log(res);
      
    })
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


  updata_Ancillary()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/changefushuwork'
    this.http.post(api,
      {
        'jshuikou_size':this.S_Ancillary.jshuikou_size, 'jshuikou_number':this.S_Ancillary.jshuikou_number, 'xshuiguan_size':this.S_Ancillary.xshuiguan_size, 'xshuiguan_length':this.S_Ancillary.xshuiguan_length, 'handrail_length':this.S_Ancillary.handrail_length, 
        'handrail_structure':this.S_Ancillary.handrail_structure, 'duanzhu_size ':this.S_Ancillary.duanzhu_size , 'revetment_type ':this.S_Ancillary.revetment_type , 'yingpodq_type ':this.S_Ancillary.yingpodq_type , 
        'bri_no':this.S_Ancillary.bri_no, 

      },httpOption).subscribe((res:any)=>{
        console.log("更新附属工程成功");
        console.log(res);        
    })
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  updata_SusPipe()
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/changefuguapipe'
    this.http.post(api,
      {
        'serv_pipe':this.S_SusPipe.serv_pipe, 'gas_pipe':this.S_SusPipe.gas_pipe, 'power_cable':this.S_SusPipe.power_cable, 'comm_cable':this.S_SusPipe.comm_cable, 
        'bri_no':this.S_SusPipe.bri_no,

    },httpOption).subscribe((res:any)=>{
      console.log("更新管道成功");
      console.log(res);
    })
  }
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

  //更新提交 先判断id是否更改了 id是不能更改的
  updata_submit()
  {
    if(this.data.id==this.S_MainZLK.bri_no&&this.data.id==this.S_YBZLK.bri_no&&this.data.id==this.S_TopSide.bri_no&&this.data.id==this.S_BottomSide.bri_no&&this.data.id==this.S_Ancillary.bri_no&&this.data.id==this.S_SusPipe.bri_no)
    {
      this.updata_MainZLK()
      this.updata_YBZLK()
      this.updata_TopSide()
      this.updata_BottomSide()
      this.updata_Ancillary()
      this.updata_SusPipe()
      
      this.submit_score()
      alert("修改成功")

      // //分数的提交
      // if(this.S_MainZLK.score=='')
      // {
      //   this.submit_score()
      // }
      
     
    }
    else
    {
      alert("桥梁id不允许更改的(╯▔皿▔)╯")
    }
  }

  submit_score()
  {
    if(this.S_MainZLK.bri_name!='')
    {
      
    }
    else if(this.S_YBZLK.adm_unit=='')
    {
      let number=Number((Math.random() * 100).toFixed(0))
      if(number>20)
      {
        for(let i=0;number>20;i++)
        {
          number=Number((Math.random() * 100).toFixed(0))   
        }
      }
      const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
      let api='http://localhost:8080/bridge/subscore'
      this.http.post(api,{'score':number,'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
        console.log(res);
      })
    }
    else
    {
      let number=Number((Math.random() * 100).toFixed(0))
    if(number<60)
    {
      for(let i=0;number<60;i++)
    {
      number=Number((Math.random() * 100).toFixed(0))   
    }
    }
    
    if(number>60)
    {
      const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
      let api='http://localhost:8080/bridge/subscore'
      this.http.post(api,{'score':number,'bri_no':this.data.id},httpOption).subscribe((res:any)=>{
        console.log(res);
        
      })
    }
    console.log(number);
    }
    
    
  }

}
