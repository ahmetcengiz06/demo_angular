import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

declare let jsPanel:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }
  searchSite:string="";
  searchSiteFunc(text):void{
    if (text.length<1) {
      this.alertifyService.error("Bir Şey Yazılmadı");
      return;
    }
    this.alertifyService.success(text);
  }
 

}
