import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQueueManagerComponent } from './add-queue-manager.component';

describe('AddQueueManagerComponent', () => {
  let component: AddQueueManagerComponent;
  let fixture: ComponentFixture<AddQueueManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQueueManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQueueManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
