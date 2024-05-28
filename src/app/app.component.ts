import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(@Inject(DOCUMENT) private document: Document, public translateService:TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

}
