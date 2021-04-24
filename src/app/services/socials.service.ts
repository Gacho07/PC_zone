import { paths } from './../paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private service: HttpClient) { }

  getAllSocials() {
    let socials = this.service.get(paths.socials);
    return socials;
  }
}
