import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * @param {Number} amount
   */

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  /**
   * @param {Currency} currency
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a currency');
    }
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * @param {Number} amount
   * @param {Number} conversionRate
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('parameters must be a numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
