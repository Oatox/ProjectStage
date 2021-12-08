import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageAniahComponent } from './stage-aniah.component';

describe('StageAniahComponent', () => {
  let component: StageAniahComponent;
  let fixture: ComponentFixture<StageAniahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageAniahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageAniahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
