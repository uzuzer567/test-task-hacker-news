import { UrlPipe } from './url.pipe';

describe('UrlPipe', () => {
  const pipe = new UrlPipe();
  const firstUrl = 'https://www.wired.com/story/ads-b-exchange-jetnet-sale/';
  const secondUrl = 'https://metastable.org/alien.html';

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return domain of the link with www', () => {
    const domain = pipe.transform(firstUrl, 'domain');
    expect(domain).toBe('wired.com');
  });

  it('should return domain of the link without www', () => {
    const domain = pipe.transform(secondUrl, 'domain');
    expect(domain).toBe('metastable.org');
  });

  it('should return host of the link', () => {
    const host = pipe.transform(firstUrl, 'host');
    expect(host).toBe('www.wired.com');
  });
});
