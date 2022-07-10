import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySpecialTableComponent } from './daily-special-table.component';

describe('DailySpecialTableComponent', () => {
  let component: DailySpecialTableComponent;
  let fixture: ComponentFixture<DailySpecialTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySpecialTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySpecialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
