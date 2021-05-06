"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * NationalId class
 */
var NationalId = /*#__PURE__*/function () {
  /**
   * NationalId constructor
   * @param value NationalId value as string
   * @param isValid pass in true if you are sure this instance is valid and you would like to skip internal validation.
   *  otherwise, internal validation would be triggered
   */
  function NationalId(value, isValid) {
    var _this = this;

    _classCallCheck(this, NationalId);

    _defineProperty(this, "_value", void 0);

    _defineProperty(this, "_isValid", void 0);

    _defineProperty(this, "ToString", function () {
      return _this.Value.toString();
    });

    _defineProperty(this, "ToFormattedString", function () {
      return "".concat(_this.getSectorCode, "-").concat(_this.getUID, "-").concat(_this.getParity);
    });

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


  _createClass(NationalId, [{
    key: "getUID",
    get: function get() {
      return this.Value.substring(3, 9);
    }
    /**
     * get parity code
     */

  }, {
    key: "getParity",
    get: function get() {
      return this.Value[9];
    }
    /**
     * get sector code for national Id
     */

  }, {
    key: "getSectorCode",
    get: function get() {
      return this.Value.substring(0, 3);
    }
    /**
     * returns validity of national id isntance
     */

  }, {
    key: "IsValid",
    get: function get() {
      return this._isValid;
    }
    /**
     * National id Value
     */

  }, {
    key: "Value",
    get: function get() {
      return this._value;
    }
    /**
     * Not valid national id instance
     * @static
     */

  }], [{
    key: "create",
    value:
    /**
     * create new instance of national id
     * @param value national id value
     * @returns new national id instance if it is valid or NationalId.NotValid instance
     * @static
     */
    function create(value) {
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

  }, {
    key: "IsValid",
    value: function IsValid(value) {
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


      var c = parseInt(value.charAt(9));
      var n = parseInt(value.charAt(0)) * 10 + parseInt(value.charAt(1)) * 9 + parseInt(value.charAt(2)) * 8 + parseInt(value.charAt(3)) * 7 + parseInt(value.charAt(4)) * 6 + parseInt(value.charAt(5)) * 5 + parseInt(value.charAt(6)) * 4 + parseInt(value.charAt(7)) * 3 + parseInt(value.charAt(8)) * 2;
      var r = n % 11;

      if (r === 0 && r === c || r === 1 && c === 1 || r > 1 && c === 11 - r) {
        return true;
      }

      return false;
    }
  }]);

  return NationalId;
}();

_defineProperty(NationalId, "NotValid", new NationalId('XXXXXXXXXX', false));

var _default = NationalId;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map