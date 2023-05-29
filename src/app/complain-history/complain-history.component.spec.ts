import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainHistoryComponent } from './complain-history.component';

describe('ComplainHistoryComponent', () => {
  let component: ComplainHistoryComponent;
  let fixture: ComponentFixture<ComplainHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
