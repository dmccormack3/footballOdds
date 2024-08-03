import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

interface teams {
    premTeam: string
      premOdds: string
      championshipTeam: string
      championshipOdds: string
      league1Team: string
      league1Odds: string
      league2Team: string
      league2odds: string
      lowlandTeam: string
      lowlandOdds: string
      eplTeam: string
      eplOdds: string
      championsLeagueTeam: string,
      championsLeagueOdds: string

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-predictions';
  
  gordonTeams: teams =  {
    premTeam: "Celtic",
    premOdds: "",
    championshipTeam: "Partick Thistle",
    championshipOdds: "",
    league1Team: "Alloa",
    league1Odds: "",
    league2Team: "Spartans",
    league2odds: "",
    lowlandTeam: "East Kilbride",
    lowlandOdds: "",
    eplTeam: "Man City",
    eplOdds: "",
    championsLeagueTeam: "Man City",
    championsLeagueOdds: ""
  }
  
  lyleTeams: teams = {
    premTeam: "Celtic",
    premOdds: "",
    championshipTeam: "Partick Thistle",
    championshipOdds: "",
    league1Team: "Alloa",
    league1Odds: "",
    league2Team: "Clyde",
    league2odds: "",
    lowlandTeam: "Albion Rovers",
    lowlandOdds: "",
    eplTeam: "Arsenal",
    eplOdds: "",
    championsLeagueTeam: "Bayern Munich",
    championsLeagueOdds: ""
  }

  danTeams: teams = {
    premTeam: "Celtic",
    premOdds: "",
    championshipTeam: "Livingston",
    championshipOdds: "",
    league1Team: "Inverness",
    league1Odds: "",
    league2Team: "Forfar",
    league2odds: "",
    lowlandTeam: "Linlithgow Rose",
    lowlandOdds: "",
    eplTeam: "Man City",
    eplOdds: "",
    championsLeagueTeam: "Bayern Munich",
    championsLeagueOdds: ""
  }
 
  loadingSpin = true;

  ngOnInit() {
    this.loadingSpin = true;
    setTimeout(() => {
      this.loadingSpin = false;
    }, 4000)
  }

}
