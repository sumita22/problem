import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamelistComponent } from './namelist.component';

describe('NamelistComponent', () => {
  let component: NamelistComponent;
  let fixture: ComponentFixture<NamelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamelistComponent]
    });
    fixture = TestBed.createComponent(NamelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
