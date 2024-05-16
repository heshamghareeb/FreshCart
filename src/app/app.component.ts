import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(@Inject(DOCUMENT) private document: Document, public translateService:TranslateService) {}
  //Make sure to add the import statement to the top of the file
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
  htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
  this.translateService.setDefaultLang(lang);
  this.translateService.use(lang);
  this.changeCssFile(lang);
  }


  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "ar" ?       "arabicStyle.css":"englishStyle.css";
    if (existingLink) {
       existingLink.href = bundleName;
    } else {
       let newLink = this.document.createElement("link");
       newLink.rel = "stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
    }


}
