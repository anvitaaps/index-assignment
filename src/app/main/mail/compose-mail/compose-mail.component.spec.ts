import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatToolbarModule, MatTooltipModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMailComponent } from './compose-mail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { mySharedModule } from '@my/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { my_CONFIG, myConfigService } from '@my/services/config.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IndexeddbService } from 'app/main/indexeddb.service';

describe('ComposeMailComponent', () => {
  let component: ComposeMailComponent;
  let fixture: ComponentFixture<ComposeMailComponent>;

  beforeEach(async(() => {
    console.log('t1')
    TestBed.configureTestingModule({
      imports     : [
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
        MatTooltipModule,
        ReactiveFormsModule,
        mySharedModule,
        RouterTestingModule,
        BrowserAnimationsModule
    ],
      declarations: [ ComposeMailComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        // { provide: IndexeddbService },
        { provide: my_CONFIG, useValue: myConfigService }]
    })
    .compileComponents();
  }));
  console.log('t2')
  beforeEach(() => {
    console.log('t3')
    fixture = TestBed.createComponent(ComposeMailComponent);
    console.log('t4')
    component = fixture.componentInstance;
    console.log('t5')
    fixture.detectChanges();
    console.log('t6')
  });

  it('should create', () => {
    console.log('t7')
    expect(component).toBeTruthy();
    console.log('t8')
  });
});
