import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { CompaniesComponent } from './companies';
import { HeaderComponent } from './shared/header';
import { SearchComponent } from './shared/search';
import { FooterComponent } from './shared/footer';
import { TranslateService } from './translate/translate.service';

@Component({
  moduleId: module.id,
  selector: 'op-root',
  templateUrl: 'op.component.html',
  styleUrls: ['op.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CompaniesComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent
  ]
})
export class OpComponent {
  title: 'hello app!';


}
