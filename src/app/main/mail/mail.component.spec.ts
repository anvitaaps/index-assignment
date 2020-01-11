import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComponent } from './mail.component';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatToolbarModule, MatTooltipModule, MatSnackBarModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { mySharedModule } from '@my/shared.module';
import { ComposeMailComponent } from './compose-mail/compose-mail.component';
import { MailListItemComponent } from './mail-list-item/mail-list-item.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { my_CONFIG, myConfigService } from '@my/services/config.service';

const routes = [
  {
      path     : 'mail/inbox',
      component: MailComponent
  }, 
  {
      path     : 'mail/sent',
      component: MailComponent
  }
];

describe('MailComponent', () => {
  let component: MailComponent;
  let fixture: ComponentFixture<MailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatToolbarModule,
        TranslateModule,
        MatTooltipModule,
        MatSnackBarModule,
        mySharedModule,
        RouterTestingModule
    ],
      declarations: [ MailComponent,MailListItemComponent,
        ComposeMailComponent ],
      providers: [{ provide: my_CONFIG, useValue: myConfigService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
