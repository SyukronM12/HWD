import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  constructor(private route: Router) { }
  info: any = {};
  ngOnInit() {
  }

  homePage() {
    this.route.navigate(['/home']);
  }

  no: number = 0;

  up() {
    this.no = this.no + 1;
  }

  down() {
    if (this.no > 0){
      this.no = this.no - 1;
    }
  }

}
