import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  

  constructor(private leagueService: LeagueService) { }
  matches:any = [];

  ngOnInit(): void {
    this.getMatchData();
  }

  getMatchData(){
    this.leagueService.getMatches().subscribe(
      data => {
        this.matches = data;	 // FILL THE ARRAY WITH DATA.
        console.log(this.matches[1]);
      },
      (err: any) => {
        console.log (err.message);
      }
    );
    }
  }
