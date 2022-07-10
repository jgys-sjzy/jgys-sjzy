import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule}from '@angular/material/divider';
import { AimComponent } from './aim/aim.component';
import { ShowmetheinfermationComponent } from './showmetheinfermation/showmetheinfermation.component';
import { AllUserListsService } from './serves/all-user-lists.service';
import { AllBridgeListsService } from './serves/all-bridge-lists.service';
import { CreatenewbridgeComponent } from './createnewbridge/createnewbridge.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeinfoComponent } from './changeinfo/changeinfo.component';
import { PipeTransform } from '@angular/core';
import { DailySpecialTableComponent } from './daily-special-table/daily-special-table.component';
import { ShowDailySpecialComponent } from './show-daily-special/show-daily-special.component';
import { LooktableComponent } from './looktable/looktable.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    AimComponent,
    ShowmetheinfermationComponent,
    CreatenewbridgeComponent,
    ChangeinfoComponent,
    DailySpecialTableComponent,
    ShowDailySpecialComponent,
    LooktableComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,    //按钮od
    MatIconModule,      //icon图标mod
    MatDividerModule,    //
    HttpClientModule,    //数据传输
  ],
  providers: [AllUserListsService,AllBridgeListsService],//服务的注入
  bootstrap: [AppComponent]
})
export class AppModule { }
