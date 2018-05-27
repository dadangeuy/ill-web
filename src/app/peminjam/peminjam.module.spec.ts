import {PeminjamModule} from './peminjam.module';

describe('PeminjamModule', () => {
  let peminjamModule: PeminjamModule;

  beforeEach(() => {
    peminjamModule = new PeminjamModule();
  });

  it('should create an instance', () => {
    expect(peminjamModule).toBeTruthy();
  });
});
