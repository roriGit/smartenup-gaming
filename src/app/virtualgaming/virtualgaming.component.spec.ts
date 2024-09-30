import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualgamingComponent } from './virtualgaming.component';

describe('VirtualgamingComponent', () => {
  let component: VirtualgamingComponent;
  let fixture: ComponentFixture<VirtualgamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualgamingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualgamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
