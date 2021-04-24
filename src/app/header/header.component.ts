import { SocialsService } from './../services/socials.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private services: SocialsService) { }

  public socials;

  ngOnInit(): void {
    this.services.getAllSocials().subscribe(
      Response => {
        this.socials = Response;
      },
      error => {
        alert("An error occured: " + error);
      }
    )
  }

}
