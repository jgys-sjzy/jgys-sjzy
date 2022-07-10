import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { AllPoint, Point } from '../aim/mapPoint';

@Injectable({
  providedIn: 'root'
})
export class AllBridgeListsService {

  constructor(private http:HttpClient) { }

  // Allbridge=AllPoint
  getBridge():Observable<Point[]>
  {
    let Allbridge=of(AllPoint)                    //获取all'point中的信息   为什么要用of需要去查一下
    return Allbridge
  }


  
  //获取ALL一般桥梁资料卡
  getziliaoka():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLziliaoka'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取主要资料卡  这里优先这个
  getcitybridge():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLcitybridge'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL下部结构
  getbottomstructure():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api=' http://localhost:8080/bridge/ALLbottomstructure'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL上部结构
  gettopsidestructure():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLtopsidestructure'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL附属工程
  getfushuwork():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLfushuwork'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL附挂线管
  getfuguapipe():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLfuguapipe'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL日常巡检表
  getdailytable():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLdailytable'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL特殊巡检表
  getspecialchecktable():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLspecialchecktable'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL技术评估表
  gettechnologytable():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLtechnologytable'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL监测内容表
  getmonitortable():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLmonitortable'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL特殊结构信息表
  getspe_stru_info_table():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api='http://localhost:8080/bridge/ALLspe_stru_info_table'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }

  //获取ALL结构状况记录表
  getstructure_checking_table():Observable<any>
  {
    return new Observable<any>((observer)=>
    {
      var api=' http://localhost:8080/bridge/ALLstructure_checking_table'//api地址

      this.http.get(api).subscribe((res:any)=>{

        observer.next(res)
      })
    })
  }


  
}
