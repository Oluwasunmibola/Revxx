import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevxxformComponent } from './revxxform.component';

describe('RevxxformComponent', () => {
  let component: RevxxformComponent;
  let fixture: ComponentFixture<RevxxformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevxxformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevxxformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
