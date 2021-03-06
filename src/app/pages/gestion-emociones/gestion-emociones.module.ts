import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEmocionesPageRoutingModule } from './gestion-emociones-routing.module';

import { GestionEmocionesPage } from './gestion-emociones.page';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEmocionesPageRoutingModule
  ],
  declarations: [
    GestionEmocionesPage,
    ToolbarComponent,
    FooterComponent
  ]
})
export class GestionEmocionesPageModule {}
