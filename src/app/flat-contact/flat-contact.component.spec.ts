import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatContactComponent } from './flat-contact.component';

describe('FlatContactComponent', () => {
  let component: FlatContactComponent;
  let fixture: ComponentFixture<FlatContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
