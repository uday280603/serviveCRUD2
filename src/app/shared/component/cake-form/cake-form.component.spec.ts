import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeFormComponent } from './cake-form.component';

describe('CakeFormComponent', () => {
  let component: CakeFormComponent;
  let fixture: ComponentFixture<CakeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
