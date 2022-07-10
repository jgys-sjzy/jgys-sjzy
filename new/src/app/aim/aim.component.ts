import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { AllBridgeListsService } from '../serves/all-bridge-lists.service';
import { AllPoint, Point } from './mapPoint';

declare var BMap: any;
@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrls: ['./aim.component.css']
})
export class AimComponent implements OnInit {

 
 
  constructor(public allbridge:AllBridgeListsService,private http:HttpClient) { 
  }

  //￥￥服务器传给本地的粗存
  allNewBridge:any={}


  mapPoint: any = 0

  bug:any                           //本程序有bug：无法消除addeventlistener
  map: any;                        //创建地图实例
  AllBridge:Point[]=[]             //创建一个数据接受的数组

  ngOnInit(): void {

    //将服务上的数据传输到这个组件中
    this.addNewBridge()
    this.getbridge()

    setTimeout(() => {
      //通过服务访问数据
    for (const iterator of this.allNewBridge.data) {
      var point = new BMap.Point(iterator.lng, iterator.lat);
      var marker = new BMap.Marker(point);
       this.map.addOverlay(marker)
       
       //mark的监听事件
       marker.addEventListener("click",(e:any)=>{
         this.addMarker(iterator);
       });
   }
    }, 200);
    
    //一下并没有设置点
    this.map = new BMap.Map("map");
    var point = new BMap.Point(116.407, 39.915);//创建点坐标
    this.map.centerAndZoom(point, 15);//初始化地图，设置中心点坐标和地图级别
    this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    var scaleCtrl = new BMap.ScaleControl();  // 添加比例尺控件
    this.map.addControl(scaleCtrl);
    
  }

  //点击获得窗口信息
  addMarker(item:any)
  {
    
    var Content = "桥梁名:"+item.bri_name+"\n"+"经纬度:"+item.lng+item.lat
    var Content1 = 
    `
    桥梁ID:${item.bri_no}</br>
    桥梁名称:${item.bri_name}</br>
    桥梁等级:${item.maintain_type}</br>
    桥梁得分:${item.score}</br>
    经度:${item.lng}</br>
    纬度:${item.lat}</br>
    `
    //重新创建经纬度坐标对象，防止覆盖
		var points = new BMap.Point(item.lng,item.lat);
		var opts = {
				width: 250,  // 信息窗口宽度 
				height: 150,  // 信息窗口高度 
				title: item.bridgeId, // 信息窗口标题 
        // message:"22"
			} 
		//创建信息窗口对象
		var infoWindow = new BMap.InfoWindow(Content1 , opts); 
		//对标注对象和信息窗口进行绑定	
		this.map.openInfoWindow(infoWindow, points);
  }



  //获取服务商的数据  (要删的)
  addNewBridge()
  {
    this.allbridge.getBridge()
    .subscribe(NewBridge=>this.AllBridge=NewBridge)
  }

  //￥￥获取服务器的数据
  getbridge()
  {
    this.allbridge.getcitybridge()
    .subscribe(newbridge=>this.allNewBridge=newbridge)
  }
 

  //撤回监听函数
  goBack() {
    alert("已回归初始")
    this.map.removeEventListener('click', this.handle,false);  //移出监听
  }

  //点击按钮开始 调用监听函数开始增加点 并将点push到原始数据中
  addSign() {
        alert("请开始在地图上点击添加点")
        this.map.addEventListener('click', this.handle,false);  //加入监听
        this.map.addEventListener('click', ()=>
        {

        });  //加入监听
            }
  handle=(e:any)=>
    {
            alert('点击的经纬度：' + e.point.lng + ', ' + e.point.lat)
            var point = new BMap.Point(e.point.lng, e.point.lat);
            var markerMouse = new BMap.Marker(point);//创建点坐标 
            this.map.addOverlay(markerMouse);

            this.addnewbridgepoint(e)
            this.post_yibanziliaoka(e)
            this.post_TopSide(e)
            this.post_BottomSide(e)
            this.post_Ancillary(e)
            this.post_SusPipe(e)
            // this.AllBridge.push({
            //   lng:e.point.lng,
            //   lat: e.point.lat,
            //   url:'',
            //   bridgeId:e.point.lat+'$'+e.point.lng,
            //   bridgeName:"无",
            //   bridgeLevel:"无",
            //   bridgeScore:"无",
            // })
            //对新加入点的 mark信息窗口显示   
            // var last = this.AllBridge[this.AllBridge.length-1]
            // markerMouse.addEventListener("click",(e:any)=>{
            //   this.addMarker(last);
            // });
    }

    //在服务器中添加点
  addnewbridgepoint(e:any)
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addcitybridge'
    this.http.post(api,
      {
        'bri_no':e.point.lng+'$'+e.point.lat, 'bri_name':'', 'bri_type':'', 'maintain_type':'',
        'lng':e.point.lng,'lat':e.point.lat,'score':'100'

    },httpOption).subscribe((res:any)=>{
      console.log("添加成功");
      console.log(res);
    })
  }

  post_yibanziliaoka(e:any) {
    const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = 'http://localhost:8080/bridge/addziliaoka'
    this.http.post(api, { 
      'bri_no':e.point.lng+'$'+e.point.lat ,'adm_unit':'','maint_unit':'','build_unit':'','design_unit':'',
    'supervisor_unit':'','readwork_unit':'','build_date':'','total_cost':'','maintain_grade':'',
    'road_grade':'','str_type':'','desige_load':'' ,'loadlim_norm':'' ,'anti_seismic_capacity':'',
    'zxiejiao':'' ,'bri_span_num':'','kuajing_group':'' ,'brif_area':'' ,'bri_length':'' ,
    'bri_wide':'' ,'roadw_wide':'' ,'sidew_wide':'' ,'river_grade':'' ,'highest_w_level':'' ,
    'often_w_level':'' 
      }, httpOption).subscribe((res: any) => {
      console.log("添加一般资料卡成功");
      console.log(res);//查看提交的数据
      
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
  post_TopSide(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api = 'http://localhost:8080/bridge/addtopsidestructure'
    this.http.post(api,{'bri_no':e.point.lng+'$'+e.point.lat, 'kpost_type':this.TopSide.kpost_type, 'kpost_size':this.TopSide.kpost_size, 'kpost_number':this.TopSide.kpost_number, 'beam_type':this.TopSide.beam_type,
     'kbottom_area':this.TopSide.kbottom_area, 'botlim_high':this.TopSide.botlim_high, 'bri_skuabi':this.TopSide.bri_skuabi, 'adminicul_type':this.TopSide.adminicul_type, 'adminicul_number':this.TopSide.adminicul_number,
     'bri_floor_structure':this.TopSide.bri_floor_structure, 'bri_floor_pzthick':this.TopSide.bri_floor_pzthick, 'exp_joint_type':this.TopSide.exp_joint_type, 'exp_jiont_number':this.TopSide.exp_jiont_number, 'kbri_zpo':this.TopSide.kbri_zpo,
     'kbri_hpo':this.TopSide.kbri_hpo, 'yqiao_zpo':this.TopSide.yqiao_zpo, 'yqiao_hpo':this.TopSide.yqiao_hpo

    },httpOption).subscribe((res:any)=>
    {
      console.log("添加上部结构成功");
      console.log(res);//查看提交的数据
      
      
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

  post_BottomSide(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addbottomstructure'
    this.http.post(api,{'bri_no':e.point.lng+'$'+e.point.lat, 'pier_type':this.BottomSide.pier_type, 'pier_number':this.BottomSide.pier_number, 'pier_high':this.BottomSide.pier_high, 'pbent_size':this.BottomSide.pbent_size, 
    'pbot_high':this.BottomSide.pbot_high, 'pabut_slab_size':this.BottomSide.pabut_slab_size, 'pbas_size':this.BottomSide.pbas_size, 'pbas_num':this.BottomSide.pbas_num, 'qabut_type':this.BottomSide.qabut_type, 
    'qabut_num':this.BottomSide.qabut_num, 'qabut_high':this.BottomSide.qabut_high, 'qbas_high':this.BottomSide.qbas_high, 'qcap_size':this.BottomSide.qcap_size, 'qbot_size':this.BottomSide.qbot_size, 
    'qbas_size':this.BottomSide.qbas_size, 'qbas_num':this.BottomSide.qbas_num, 'qabut_board_thick':this.BottomSide.qabut_board_thick, 'wingwall_type':this.BottomSide.wingwall_type, 'wingwall_length':this.BottomSide.wingwall_length, 

    },httpOption).subscribe((res:any)=>
    {
      console.log("添加下部结构成功");
      console.log(res);
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

  post_Ancillary(e:any)
  {
    const httpOption = {headers: new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addfushuwork'
    this.http.post(api,{'bri_no':e.point.lng+'$'+e.point.lat, 'jshuikou_size':this.Ancillary.jshuikou_size, 'jshuikou_number':this.Ancillary.jshuikou_number, 'xshuiguan_size':this.Ancillary.xshuiguan_size, 'xshuiguan_length':this.Ancillary.xshuiguan_length, 
    'handrail_length':this.Ancillary.handrail_length, 'handrail_structure':this.Ancillary.handrail_structure, 'duanzhu_size':this.Ancillary.duanzhu_size, 'revetment_type':this.Ancillary.revetment_type, 'yingpodq_type':this.Ancillary.yingpodq_type, 

    },httpOption).subscribe((res:any)=>{
      console.log("添加附属工程成功");
      console.log(res);
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
  post_SusPipe(e:any)
  {
    const httpOption = {headers:new HttpHeaders({'Content-Type':'application/json'})}
    let api='http://localhost:8080/bridge/addfuguapipe'
    this.http.post(api,{'bri_no':e.point.lng+'$'+e.point.lat, 'serv_pipe':this.SusPipe.serv_pipe, 'gas_pipe':this.SusPipe.gas_pipe, 
    'power_cable':this.SusPipe.power_cable, 'comm_cable':this.SusPipe.comm_cable, 

    },httpOption).subscribe((res:any)=>{
      console.log("添加挂件管道成功");
      console.log(res);
      
    })
  }

  
}
