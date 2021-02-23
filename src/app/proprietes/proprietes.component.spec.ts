import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietesComponent } from './proprietes.component';

describe('ProprietesComponent', () => {
  let component: ProprietesComponent;
  let fixture: ComponentFixture<ProprietesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
