import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooktableComponent } from './looktable.component';

describe('LooktableComponent', () => {
  let component: LooktableComponent;
  let fixture: ComponentFixture<LooktableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LooktableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LooktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
