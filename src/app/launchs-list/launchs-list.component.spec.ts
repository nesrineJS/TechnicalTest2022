import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchsListComponent } from './launchs-list.component';

describe('LaunchsListComponent', () => {
  let component: LaunchsListComponent;
  let fixture: ComponentFixture<LaunchsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
