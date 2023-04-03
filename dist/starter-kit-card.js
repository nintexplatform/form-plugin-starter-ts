import { _ as _decorate, s, x, a as _taggedTemplateLiteral, e as e$1, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized } from './query-assigned-elements-9426a3cc.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

var config = {
  controlName: 'starter-kit-card',
  fallbackDisableSubmit: false,
  description: 'Example of a visual card',
  groupName: 'Starter Kit',
  version: '1.0',
  properties: {
    cardTitle: {
      type: 'string',
      title: 'Title'
    },
    cardText: {
      type: 'string',
      title: 'Text'
    },
    imageUrl: {
      type: 'string',
      title: 'Image URL'
    },
    link: {
      type: 'string',
      title: 'Link URL'
    },
    darkMode: {
      type: 'boolean',
      title: 'Dark mode'
    },
    centerText: {
      type: 'boolean',
      title: 'Center text'
    }
  },
  standardProperties: {
    fieldLabel: false,
    description: false,
    defaultValue: false,
    readOnly: false
  }
};

var _templateObject;
var MyCardTS = _decorate([e$1('starter-kit-card')], function (_initialize, _LitElement) {
  var MyCardTS = /*#__PURE__*/function (_LitElement2) {
    _inherits(MyCardTS, _LitElement2);
    var _super = _createSuper(MyCardTS);
    function MyCardTS() {
      var _this;
      _classCallCheck(this, MyCardTS);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(MyCardTS);
  }(_LitElement);
  return {
    F: MyCardTS,
    d: [{
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "cardTitle",
      value: function value() {
        return 'Card Title';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "cardText",
      value: function value() {
        return 'This is a bootstrap card';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "imageUrl",
      value: function value() {
        return 'https://www.nintex.com/wp-content/themes/portent_nintex/ui/images/nintex_logo.svg';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "link",
      value: function value() {
        return 'https://www.nintex.com/';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "darkMode",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "centerText",
      value: function value() {
        return false;
      }
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return config;
      }
    }, {
      kind: "field",
      key: "render",
      value: function value() {
        var _this2 = this;
        return function () {
          var cardStyle = _this2.darkMode ? 'text-white bg-dark' : '';
          var centerTextStyle = _this2.centerText ? 'text-center' : '';
          return x(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\"\n                integrity=\"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC\" crossorigin=\"anonymous\">\n            <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\"\n                integrity=\"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM\" crossorigin=\"anonymous\">\n            </script>\n            <div class=\"card ", " ", " mb-3\" style=\"max-width: 18rem;\">\n                <h5 class=\"card-header\">", "</h5>\n                <img src=\"", "\" class=\"card-img-top p-3\" alt=\"\" />\n                <div class=\"card-body\">\n                    <p class=\"card-text\">", "</p>\n                    <a href=\"", "\" class=\"btn btn-primary\">Go!</a>\n                </div>\n            </div>"])), centerTextStyle, cardStyle, _this2.cardTitle, _this2.imageUrl, _this2.cardText, _this2.link);
        };
      }
    }]
  };
}, s);

export { MyCardTS };
//# sourceMappingURL=starter-kit-card.js.map
