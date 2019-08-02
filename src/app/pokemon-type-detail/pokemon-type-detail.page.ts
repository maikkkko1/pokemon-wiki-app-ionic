/*
 * @Author: Maikon Ferreira 
 * @Date: 2019-08-02 16:56:15 
 * @Last Modified by:   Maikon Ferreira 
 * @Last Modified time: 2019-08-02 16:56:15 
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-pokemon-type-detail',
  templateUrl: './pokemon-type-detail.page.html',
  styleUrls: ['./pokemon-type-detail.page.scss'],
})
export class PokemonTypeDetailPage implements OnInit {
  public pokemon_type: string;
  public pokemons_from_type: any[] = [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HTTP
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        let details = this.router.getCurrentNavigation().extras.state.details;
        
        this.pokemon_type = details.name;
        this.http.get(details.url, {}, {})
          .then((pokemons) => {
            let list_all_pokemons = JSON.parse(pokemons.data);
            this.pokemons_from_type = list_all_pokemons.pokemon;
          }), (error) => {
            console.log(error);
          }
      }
    });
  }

  pokemonDetail(data): void {
    this.http.get(data.url, {}, {})
    .then((pokemon) => {
      let pokemon_data = JSON.parse(pokemon.data);
      let params: NavigationExtras = {
        state: {
          details: pokemon_data
        }
      };
  
      this.router.navigate(['pokemon-detail'], params);
    }), (error) => {
      console.log(error);
    }
  }
}
