import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavgamesComponent } from './favgames.component';

describe('FavgamesComponent', () => {
  let component: FavgamesComponent;
  let fixture: ComponentFixture<FavgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavgamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
