import { TestBed, inject } from '@angular/core/testing';

import { UsuarioProviderService } from './usuario-provider.service';

describe('UsuarioProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioProviderService]
    });
  });

  it('should be created', inject([UsuarioProviderService], (service: UsuarioProviderService) => {
    expect(service).toBeTruthy();
  }));
});
