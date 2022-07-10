//路由模块
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component'; //导入界面组件
import { AimComponent } from './aim/aim.component'; //导入主页组件
import { ShowmetheinfermationComponent } from './showmetheinfermation/showmetheinfermation.component';//导入桥梁信息组件
import { CreatenewbridgeComponent } from './createnewbridge/createnewbridge.component';
import { ChangeinfoComponent } from './changeinfo/changeinfo.component';
import { DailySpecialTableComponent } from './daily-special-table/daily-special-table.component';
import { ShowDailySpecialComponent } from './show-daily-special/show-daily-special.component';
import { LooktableComponent } from './looktable/looktable.component';

const routes: Routes = [
  {
    path:'interface',component:InterfaceComponent
  },
  {
    path:'aim',component:AimComponent
  },
  {
    path:'showmetheinfermation',component:ShowmetheinfermationComponent
  },
  {
    path:'createnewbridge',component:CreatenewbridgeComponent
  },
  {
    path:'changeinfo',component:ChangeinfoComponent
  },
  {
    path:'dailyspecialtable',component:DailySpecialTableComponent
  },
  {
    path:'show_daily_special',component:ShowDailySpecialComponent
  },
  {
    path:'looktable',component:LooktableComponent
  },
  {
    path:"**",redirectTo:"interface"  //匹配不到时跳转到登录界面
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
