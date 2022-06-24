import test from 'node:test';
import { PersonAge } from './../src/ages';

describe('PersonAge', () => {
  let person;
  beforeEach(() => {
    person = new PersonAge(35);
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
  
})
