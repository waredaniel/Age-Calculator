import { PersonAge } from './../src/ages';

describe('PersonAge', () => {
  let person;
  beforeEach(() => {
    person = new PersonAge(35);
  });

  test('should create a Person object with earth age property', ()=> {
    expect(person.earthAge).toEqual(35);
  }

)});