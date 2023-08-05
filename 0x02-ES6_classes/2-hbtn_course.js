export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._verifyString(name);
    this._length = this._verifyNumber(length);
    this._students = this._verifyArrayOfStrings(students);
    }
    verifyString(value) {
      if (typeof value !== 'string') {
        throw new Error('Value must be a string.');
      }
      return value;
    }
    verifyNumber(value) {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('Value must be a number.');
      }
      return value;
    }
    verifyArrayOfStrings(value) {
      if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
        throw new Error('Value must be an array of strings.');
      }
      return value;
    }
    get name() {
      return this._name;
    }
    set name(newName) {
      this._name = this._verifyString(newName);
    }
    get length() {
      return this._length;
    }
    set length(newLength) {
      this._length = this._verifyNumber(newLength);
    }
    get students() {
      return this._students;
    }
    set students(newStudents) {
      this._students = this._verifyArrayOfStrings(newStudents);
    }
}