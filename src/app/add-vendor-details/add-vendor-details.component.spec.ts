import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorDetailsComponent } from './add-vendor-details.component';

describe('AddVendorDetailsComponent', () => {
  let component: AddVendorDetailsComponent;
  let fixture: ComponentFixture<AddVendorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddVendorDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
