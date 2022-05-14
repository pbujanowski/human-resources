import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title?: string;

  constructor(private _translate: TranslateService) {
    _translate.setDefaultLang('en');
    _translate.use('en');
  }

  async ngOnInit(): Promise<void> {
    const title = this._translate.get('brand');
    this.title = await lastValueFrom(title);
  }
}
