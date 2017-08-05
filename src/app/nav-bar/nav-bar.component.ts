import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../model/admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit() {
  }

}
