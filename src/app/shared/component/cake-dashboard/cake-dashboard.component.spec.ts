import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDashboardComponent } from './cake-dashboard.component';

describe('CakeDashboardComponent', () => {
  let component: CakeDashboardComponent;
  let fixture: ComponentFixture<CakeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
