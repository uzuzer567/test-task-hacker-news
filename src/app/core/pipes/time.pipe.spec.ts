import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  const pipe = new TimePipe();
  let date: Date;

  beforeEach(async () => {
    date = new Date();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should check 1 hour difference', () => {
    date.setHours(date.getHours() - 1);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('1 hour ago');
  });

  it('should check 2 hours difference', () => {
    date.setHours(date.getHours() - 2);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('2 hours ago');
  });

  it('should check 1 minute difference', () => {
    date.setMinutes(date.getMinutes() - 1);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('1 minute ago');
  });

  it('should check 10 minutes difference', () => {
    date.setMinutes(date.getMinutes() - 10);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('10 minutes ago');
  });

  it('should check 1 day difference', () => {
    date.setDate(date.getDate() - 1);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('1 day ago');
  });

  it('should check 4 days difference', () => {
    date.setDate(date.getDate() - 4);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('4 days ago');
  });

  it('should check 10 days difference', () => {
    date.setDate(date.getDate() - 10);
    const seconds = Math.floor(date.getTime() / 1000);
    const result = pipe.transform(seconds);
    expect(result).toBe('over a week ago');
  });
});
