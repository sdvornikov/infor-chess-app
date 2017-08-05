import { Component, OnInit } from '@angular/core';
import { AdminService } from '../model/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  passcode: string;

  constructor(private adminService: AdminService) { }

  unlockAdmin() {
    this.adminService.enterAdminMode(this.passcode)
  }

  ngOnInit() {
  }

}
