import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAniahComponent } from './staff-aniah.component';

describe('StaffAniahComponent', () => {
  let component: StaffAniahComponent;
  let fixture: ComponentFixture<StaffAniahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffAniahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAniahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
