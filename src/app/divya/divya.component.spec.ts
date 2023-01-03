import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivyaComponent } from './divya.component';

describe('DivyaComponent', () => {
  let component: DivyaComponent;
  let fixture: ComponentFixture<DivyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
