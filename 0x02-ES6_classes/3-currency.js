class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string!');
    }
    this.code = code;
  }

  get code() {
    return this.code;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string!');
    }
    this.code = name;
  }

  get name() {
    return this.code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
export default Currency;
