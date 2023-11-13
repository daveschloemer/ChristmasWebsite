import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristmaslistComponent } from './christmaslist.component';

describe('ChristmaslistComponent', () => {
  let component: ChristmaslistComponent;
  let fixture: ComponentFixture<ChristmaslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChristmaslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChristmaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
