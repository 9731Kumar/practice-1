import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUdemyComponent } from './template-udemy.component';

describe('TemplateUdemyComponent', () => {
  let component: TemplateUdemyComponent;
  let fixture: ComponentFixture<TemplateUdemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateUdemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUdemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
