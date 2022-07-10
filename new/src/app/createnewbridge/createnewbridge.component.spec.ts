import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewbridgeComponent } from './createnewbridge.component';

describe('CreatenewbridgeComponent', () => {
  let component: CreatenewbridgeComponent;
  let fixture: ComponentFixture<CreatenewbridgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewbridgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatenewbridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
