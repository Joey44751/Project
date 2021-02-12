import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaygroundComponent } from './addplayground.component';

describe('AddplaygroundComponent', () => {
  let component: AddplaygroundComponent;
  let fixture: ComponentFixture<AddplaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
