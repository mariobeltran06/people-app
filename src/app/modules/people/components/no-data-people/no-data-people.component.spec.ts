import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataPeopleComponent } from './no-data-people.component';

describe('NoDataPeopleComponent', () => {
  let component: NoDataPeopleComponent;
  let fixture: ComponentFixture<NoDataPeopleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoDataPeopleComponent]
    });
    fixture = TestBed.createComponent(NoDataPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
