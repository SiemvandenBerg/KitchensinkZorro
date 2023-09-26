import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffixComponent } from './affix.component';

describe('AffixComponent', () => {
  let component: AffixComponent;
  let fixture: ComponentFixture<AffixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffixComponent]
    });
    fixture = TestBed.createComponent(AffixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
