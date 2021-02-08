import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorPlaygroundComponent } from './indoor-playground.component';

describe('IndoorPlaygroundComponent', () => {
  let component: IndoorPlaygroundComponent;
  let fixture: ComponentFixture<IndoorPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndoorPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
