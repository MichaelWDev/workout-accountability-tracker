import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDashboardComponent } from './dashboard-dashboard.component';

describe('DashboardDashboardComponent', () => {
  let component: DashboardDashboardComponent;
  let fixture: ComponentFixture<DashboardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
