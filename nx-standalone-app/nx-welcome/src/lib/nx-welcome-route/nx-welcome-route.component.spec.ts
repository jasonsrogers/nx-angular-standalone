import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxWelcomeRouteComponent } from './nx-welcome-route.component';

describe('NxWelcomeRouteComponent', () => {
  let component: NxWelcomeRouteComponent;
  let fixture: ComponentFixture<NxWelcomeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NxWelcomeRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NxWelcomeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
