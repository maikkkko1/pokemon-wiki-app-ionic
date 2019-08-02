/*
 * @Author: Maikon Ferreira 
 * @Date: 2019-08-02 16:56:37 
 * @Last Modified by:   Maikon Ferreira 
 * @Last Modified time: 2019-08-02 16:56:37 
 */

import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private pokemon_types_url = 'https://pokeapi.co/api/v2/type/';

  public types_list: any[] = [];

  constructor(
    private http: HTTP,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.get(this.pokemon_types_url, {}, {})
      .then((types) => {
        let parse_json = JSON.parse(types.data);
        this.types_list = parse_json['results'];
    }),(error) => {
      console.log(error);
    }
  }

  pokemonsDetail(type): void {
    let params: NavigationExtras = {
      state: {
        details: type
      }
    };

    this.router.navigate(['pokemon-type-detail'], params);
  }
}
