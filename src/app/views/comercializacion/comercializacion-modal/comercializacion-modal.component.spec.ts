import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercializacionModalComponent } from './comercializacion-modal.component';

describe('ComercializacionModalComponent', () => {
  let component: ComercializacionModalComponent;
  let fixture: ComponentFixture<ComercializacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercializacionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercializacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
