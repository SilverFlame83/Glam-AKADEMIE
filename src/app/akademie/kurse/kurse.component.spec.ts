import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurseComponent } from './kurse.component';

describe('KurseComponent', () => {
  let component: KurseComponent;
  let fixture: ComponentFixture<KurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
