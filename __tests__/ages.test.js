import { PersonAge } from './../src/ages';

describe('PersonAge', () => {
  let person;
  beforeEach(() => {
    person = new PersonAge(35, 79);
  });
  test('should create a Person object with earth age property', ()=> {
    expect(person.earthAge).toEqual(35);
  });
  test('should return a Person objects age on Mercury', ()=> {
    expect(person.mercuryAge).toEqual(146);
  });
  test('should return a Person objects age on Venus', ()=> {
    expect(person.venusAge).toEqual(56);
  });
  test('should return a Person objects age on Mars', () => {
    expect(person.marsAge).toEqual(19);
  });
  test('should return a Person objects age on Jupiter', () => {
    expect(person.jupiterAge).toEqual(3)
  });
  test('should return a Person object with life expectancy on Earth property', () => {
    expect(person.lifeEarth).toEqual(79);
  });
  test('should return a Person objects remaining years on Earth', () => {
    expect(person.earthRemaining).toEqual(44);
  });
  test('should return the number of years over life expectancy on earth', () => {
    let person2 = new PersonAge (90, 71);
    expect(person.earthOver()).toEqual('--');
    expect(person2.earthOver()).toEqual(19);
  });
  test('should return a Person objects remaining years on Mercury', () => {
    expect(person.mercuryRemaining).toEqual(183);
  });
  test('should return the number of years over life expectancy on Mercury', () => {
    expect(person.mercuryOver()).toEqual('--');
  });
  test('should return a Person objects remaining years on Venus', () => {
    expect(person.venusRemaining).toEqual(127);
  });
})
