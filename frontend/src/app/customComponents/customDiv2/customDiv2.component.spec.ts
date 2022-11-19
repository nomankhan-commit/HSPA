/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CustomDiv2Component } from './customDiv2.component';

describe('CustomDiv2Component', () => {
  let component: CustomDiv2Component;
  let fixture: ComponentFixture<CustomDiv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDiv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDiv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
