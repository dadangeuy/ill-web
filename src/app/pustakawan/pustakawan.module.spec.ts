import {PustakawanModule} from './pustakawan.module';

describe('PustakawanModule', () => {
  let pustakawanModule: PustakawanModule;

  beforeEach(() => {
    pustakawanModule = new PustakawanModule();
  });

  it('should create an instance', () => {
    expect(pustakawanModule).toBeTruthy();
  });
});
