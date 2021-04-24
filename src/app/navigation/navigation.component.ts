import { Navigation } from './../navigation';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private services:NavigationService) { }

  public navigation:Navigation[];

  ngOnInit(): void {
    this.services.getAllNavLinks().subscribe(
      (Response:Navigation[]) => {
        this.navigation = Response;
      },
      error => {
        alert("An error occured: " + error);
      }
    )
  }

}
