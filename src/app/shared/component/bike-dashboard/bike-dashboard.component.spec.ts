import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDashboardComponent } from './bike-dashboard.component';

describe('BikeDashboardComponent', () => {
  let component: BikeDashboardComponent;
  let fixture: ComponentFixture<BikeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
