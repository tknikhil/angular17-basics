import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEmulatedComponent } from './child-emulated.component';

describe('ChildEmulatedComponent', () => {
  let component: ChildEmulatedComponent;
  let fixture: ComponentFixture<ChildEmulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildEmulatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
