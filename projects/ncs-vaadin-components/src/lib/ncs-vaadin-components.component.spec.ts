import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcsVaadinComponentsComponent } from './ncs-vaadin-components.component';

describe('NcsVaadinComponentsComponent', () => {
  let component: NcsVaadinComponentsComponent;
  let fixture: ComponentFixture<NcsVaadinComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NcsVaadinComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NcsVaadinComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
