import { paths } from './../paths';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private service:HttpClient) { }

  getAllNavLinks() {
    let navigation = this.service.get(paths.navigation);
    return navigation;
  }
}
