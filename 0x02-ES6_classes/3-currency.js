class Currency {
  constructor(code, name) {
      this._code = code;
      this._name = name;
    }
    getCode() {
      return this._code;
    }
    setCode(code) {
      this._code = code;
    }
    getName() {
      return this._name;
    }
    setName(name) {
      this._name = name;
    }
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
}