import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoCalComponent } from './histo-cal.component';

describe('HistoCalComponent', () => {
  let component: HistoCalComponent;
  let fixture: ComponentFixture<HistoCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
