import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionHistoryComponent } from './suggestion-history.component';

describe('SuggestionHistoryComponent', () => {
  let component: SuggestionHistoryComponent;
  let fixture: ComponentFixture<SuggestionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
