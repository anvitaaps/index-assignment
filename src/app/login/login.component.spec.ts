import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { mySharedModule } from '@my/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { myConfigService, my_CONFIG } from '@my/services/config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// const routes = [
//   {
//       path     : '',
//       component: LoginComponent
//   }
// ];

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        mySharedModule,
        MatSnackBarModule, CommonModule, BrowserAnimationsModule,
        // RouterModule.forChild(routes),
        RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [{ provide: my_CONFIG, useValue: myConfigService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
