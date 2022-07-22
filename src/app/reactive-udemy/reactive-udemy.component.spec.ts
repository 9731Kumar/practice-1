import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUdemyComponent } from './reactive-udemy.component';

describe('ReactiveUdemyComponent', () => {
  let component: ReactiveUdemyComponent;
  let fixture: ComponentFixture<ReactiveUdemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveUdemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
