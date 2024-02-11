import { TestBed } from '@angular/core/testing';

import { NcsVaadinComponentsService } from './ncs-vaadin-components.service';

describe('NcsVaadinComponentsService', () => {
  let service: NcsVaadinComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcsVaadinComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
