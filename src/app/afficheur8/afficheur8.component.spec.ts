import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Afficheur8Component } from './afficheur8.component';

describe('Afficheur8Component', () => {
  let component: Afficheur8Component;
  let fixture: ComponentFixture<Afficheur8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Afficheur8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Afficheur8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
