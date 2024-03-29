import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PesquisaNoticiaComponent } from './../pesquisa-noticia/pesquisa-noticia.page';
import { PesquisaNoticiaModule } from './../pesquisa-noticia/pesquisa-noticia.module';
import { CardSelecionarNoticiaModeloComponent } from './cards/card-selecionar-noticia-modelo/card-selecionar-noticia-modelo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// material
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from 'src/app/modules/material.module';

// shared
import { SysPipesModule } from 'src/app/shared/pipes/sys-pipes.module';

// aplicação
import { NoticiaComponent } from './noticia.page';
import { CardNoticiaTextoComponent } from './cards/card-noticia-texto/card-noticia-texto.component';
import { CardNoticiaCabecalhoComponent } from './cards/card-noticia-cabecalho/card-noticia-cabecalho.component';
import { TokenInterceptor } from 'src/app/shared/interceptors/token-interceptor.interceptor';

import { EditorModule } from '@tinymce/tinymce-angular';
import { CardNewsletterScheduleComponent } from './cards/card-newsletter-schedule/card-newsletter-schedule.component';
import { NewsletterQuartzTasksService } from 'src/app/pages/noticias/services/newsletter-quartz-tasks.service';
import { QuartzTasksService } from 'src/app/pages/noticias/services/quartz-tasks.service';

const routes: Routes = [
  { path: '', redirectTo: 'manutencao', pathMatch: 'full' },
  { path: 'manutencao', component: NoticiaComponent },
  { path: 'manutencao/:id', component: NoticiaComponent },
  { path: 'pesquisa', component: PesquisaNoticiaComponent },
];

@NgModule({
  declarations: [
    NoticiaComponent,

    // cards
    CardNoticiaCabecalhoComponent,
    CardNoticiaTextoComponent,
    CardSelecionarNoticiaModeloComponent,
    CardNewsletterScheduleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // material
    MaterialModule,
    MatProgressSpinnerModule,

    // shared
    SysPipesModule,

    EditorModule,
    MatCheckboxModule,

    MatDialogModule,

    PesquisaNoticiaModule,
  ],
  exports: [],
  providers: [
    TokenInterceptor,
    NewsletterQuartzTasksService,
    QuartzTasksService,
    DatePipe,

    // interceptors
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true, },
  ],
})
export class NoticiaModule { }
