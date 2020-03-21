import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithAsyncDataComponent } from './form-with-async-data.component';

describe('FormWithAsyncDataComponent', () => {
  let component: FormWithAsyncDataComponent;
  let fixture: ComponentFixture<FormWithAsyncDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithAsyncDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithAsyncDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
