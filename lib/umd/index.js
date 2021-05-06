(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   * NationalId class
   */
  class NationalId {
    /**
     * NationalId constructor
     * @param value NationalId value as string
     * @param isValid pass in true if you are sure this instance is valid and you would like to skip internal validation.
     *  otherwise, internal validation would be triggered
     */
    constructor(value, isValid) {
      this._value = value;

      if (isValid == undefined) {
        this._isValid = NationalId.IsValid(value);
      } else {
        this._isValid = isValid;
      }
    }
    /**
     * get nationalId UID
     */


    get getUID() {
      return this.Value.substring(3, 9);
    }
    /**
     * get parity code
     */


    get getParity() {
      return this.Value[9];
    }
    /**
     * get sector code for national Id
     */


    get getSectorCode() {
      return this.Value.substring(0, 3);
    }
    /**
     * returns validity of national id isntance
     */


    get IsValid() {
      return this._isValid;
    }
    /**
     * National id Value
     */


    get Value() {
      return this._value;
    }
    /**
     * Not valid national id instance
     * @static
     */


    static NotValid = new NationalId('XXXXXXXXXX', false);
    ToString = () => {
      return this.Value.toString();
    };
    /**
     * Format national id with following format XXX-XXXXXX-X
     * @returns Formatted NationalId
     *
     */

    ToFormattedString = () => {
      return `${this.getSectorCode}-${this.getUID}-${this.getParity}`;
    };
    /**
     * create new instance of national id
     * @param value national id value
     * @returns new national id instance if it is valid or NationalId.NotValid instance
     * @static
     */

    static create(value) {
      if (this.IsValid(value)) {
        return new NationalId(value.toString(), true);
      }

      return NationalId.NotValid;
    }
    /**
     * Validate national id
     * @param value National Id value
     * @returns true whether provided national id is valid
     */


    static IsValid(value) {
      if (value === undefined) return false;
      if (value === '') return false; // validate is number

      if (isNaN(Number(value))) {
        return false;
      } // validate length
      // input format must match 0000000000


      if (value.length !== 10) {
        return false;
      } // examp validation


      if ( // 1111111111 is valid
      //v === '1111111111' ||
      value === '0000000000' || value === '2222222222' || value === '3333333333' || value === '4444444444' || value === '5555555555' || value === '6666666666' || value === '7777777777' || value === '8888888888' || value === '9999999999' || value === '0123456789') {
        return false;
      } // calculate national Id


      const c = parseInt(value.charAt(9));
      const n = parseInt(value.charAt(0)) * 10 + parseInt(value.charAt(1)) * 9 + parseInt(value.charAt(2)) * 8 + parseInt(value.charAt(3)) * 7 + parseInt(value.charAt(4)) * 6 + parseInt(value.charAt(5)) * 5 + parseInt(value.charAt(6)) * 4 + parseInt(value.charAt(7)) * 3 + parseInt(value.charAt(8)) * 2;
      const r = n % 11;

      if (r === 0 && r === c || r === 1 && c === 1 || r > 1 && c === 11 - r) {
        return true;
      }

      return false;
    }

  }

  var _default = NationalId;
  _exports.default = _default;
});
//# sourceMappingURL=index.js.map