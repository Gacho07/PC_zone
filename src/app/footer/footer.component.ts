import { Navigation } from './../navigation';
import { NavigationService } from './../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private services: NavigationService) { }

  public navigation: Navigation[];

  ngOnInit(): void {
    this.loadLinks();
  }

  private loadLinks() : void {
    this.services.getAllNavLinks().subscribe(
      (data: Navigation[]) => this.navigation = data,
      error => alert("Error: " + error)
    );
  }

}
