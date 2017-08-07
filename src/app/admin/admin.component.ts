import { Component, OnInit } from '@angular/core';
import { AdminService } from '../model/admin.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  passcode: string;
  loading: boolean;
  errorMsg: string;

  constructor(private adminService: AdminService) { }

  unlockAdmin() {
    this.loading = true;
    this.adminService.enterAdminMode(this.passcode)
      .subscribe((res: Response) => {
                  this.loading = false;
                  this.passcode = '';
              }, (err) => {
                  this.errorMsg = "Failed to unlock admin mode"
                  this.loading = false;
              });
  }

  exitAdmin() {
    this.adminService.exitAdminMode();
  }

  onPasscodeChange(val) {
    this.errorMsg = "";
  }

  ngOnInit() {
  }

}
