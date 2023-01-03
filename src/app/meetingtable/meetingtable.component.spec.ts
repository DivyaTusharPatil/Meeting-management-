import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingtableComponent } from './meetingtable.component';

describe('MeetingtableComponent', () => {
  let component: MeetingtableComponent;
  let fixture: ComponentFixture<MeetingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
