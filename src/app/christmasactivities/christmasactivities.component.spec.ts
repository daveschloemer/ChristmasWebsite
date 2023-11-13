import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmasactivitiesComponent } from './christmasactivities.component';

describe('ChristmasactivitiesComponent', () => {
  let component: ChristmasactivitiesComponent;
  let fixture: ComponentFixture<ChristmasactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmasactivitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChristmasactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
