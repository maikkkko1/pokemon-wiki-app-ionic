/*
 * @Author: Maikon Ferreira 
 * @Date: 2019-08-02 16:56:24 
 * @Last Modified by: Maikon Ferreira
 * @Last Modified time: 2019-08-02 17:38:09
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit {
  public pokemon: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pokemon = this.router.getCurrentNavigation().extras.state.details;
        
        this._formatValues();
      }
    });
  }

  /**
   * Compartilha de forma simplória utilizando apenas texto as informações do pokemon em questão.
   */
  shareContent() {
    let share_data = 'Pokemon Wiki - ' + this._capitalizeFirstLetter(this.pokemon['name']) + '\n\n' +
    'Ficha Técnica \n\n' +
    'Nome: ' + this._capitalizeFirstLetter(this.pokemon['name']) + '\n' +
    'Altura: ' + this._capitalizeFirstLetter(this.pokemon['height']) + ' m\n' +
    'Peso: ' + this._capitalizeFirstLetter(this.pokemon['weight']) + ' kg\n\n' +
    'Habilidades \n\n';

    this.pokemon['abilities'].forEach(pok_ability => {
      share_data += this._capitalizeFirstLetter(pok_ability.ability.name) + '\n';
    });

    this.socialSharing.share(share_data, null, null, null);
  }

  /**
   * Formata os valores de peso e altura de acordo.
   */
  _formatValues(): void {
    let height = this.pokemon['height'];
    let weight = this.pokemon['weight'];

    this.pokemon['height'] = this._formatHeight(height);
    this.pokemon['weight'] = this._formatWeight(weight);
  }

  /**
   * Retorna a altura do pokemon formatada.
   * @param height 
   */
  _formatHeight(height: string): string {
    height = height.toString();
    let len = height.length;

    let formatted_height: string;
    if (len > 1) {
      formatted_height = height.substring(0, len - 1) + "," + height.substring(len - 1);
    } else {
      formatted_height = '0,' + height;
    }

    return formatted_height;
  }

  /**
   * Retorna o peso do pokemon formatado.
   * @param weight 
   */
  _formatWeight(weight: string): string {
    weight = weight.toString();
    let len = weight.length;

    let formatted_weight: string;
    if (len > 1) {
      formatted_weight = weight.substring(0, len - 1) + "," + weight.substring(len - 1);
    } else {
      formatted_weight = '0,' + weight;
    }

    return formatted_weight;
  }

  _capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
