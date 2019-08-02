import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PokemonTypeDetailPage } from './pokemon-type-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonTypeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PokemonTypeDetailPage]
})
export class PokemonTypeDetailPageModule {}
