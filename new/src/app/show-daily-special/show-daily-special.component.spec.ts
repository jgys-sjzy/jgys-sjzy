import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDailySpecialComponent } from './show-daily-special.component';

describe('ShowDailySpecialComponent', () => {
  let component: ShowDailySpecialComponent;
  let fixture: ComponentFixture<ShowDailySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDailySpecialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDailySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
