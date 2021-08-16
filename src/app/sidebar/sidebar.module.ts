import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos/videos.component';



@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ VideosComponent]
})
export class SidebarModule { }
