import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { mySharedModule } from '@my/shared.module';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { myConfigService, my_CONFIG } from '@my/services/config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexeddbService } from 'app/main/indexeddb.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let validUser = {email: 'anvita@gmail.com', password: '123'};
  let blankUser = {email: '', password: ''};
  let indexeddb = new IndexeddbService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        mySharedModule,
        MatSnackBarModule, 
        CommonModule, 
        BrowserAnimationsModule,
        RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [{ provide: my_CONFIG, useValue: myConfigService }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  function updateForm(userEmail, userPassword) {
    component.loginForm.controls['email'].setValue(userEmail);
    component.loginForm.controls['password'].setValue(userPassword);
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('form value should update from when you change the input', (() => {
    updateForm(validUser.email, validUser.password);
    expect(component.loginForm.value).toEqual(validUser);
  }));

  it('Form invalid should be true when form is invalid', (() => {
    updateForm(blankUser.email, blankUser.password);
    expect(component.loginForm.invalid).toBeTruthy();
  }));

  it('indexedDB Service checkIfUserExists should called ', (() => {
    updateForm(validUser.email, validUser.password);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    spyOn(indexeddb, 'checkUserExists');
    indexeddb.checkUserExists(validUser);
    expect(indexeddb.checkUserExists).toHaveBeenCalledWith(validUser);
  }));

});
