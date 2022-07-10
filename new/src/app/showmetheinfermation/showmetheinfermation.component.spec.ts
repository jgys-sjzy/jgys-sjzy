import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmetheinfermationComponent } from './showmetheinfermation.component';

describe('ShowmetheinfermationComponent', () => {
  let component: ShowmetheinfermationComponent;
  let fixture: ComponentFixture<ShowmetheinfermationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmetheinfermationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmetheinfermationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
