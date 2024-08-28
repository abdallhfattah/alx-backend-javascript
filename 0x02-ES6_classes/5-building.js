class Building {
  constructor(sqft) {
    if (this.constuctor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  /**
   * @param {Number} sqft
   */
  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('square feet must be an number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
