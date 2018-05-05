(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var Log = exports.Log = __webpack_require__(1).default;
	var OidcClient = exports.OidcClient = __webpack_require__(2).default;
	var OidcClientSettings = exports.OidcClientSettings = __webpack_require__(3).default;
	var WebStorageStateStore = exports.WebStorageStateStore = __webpack_require__(4).default;
	var InMemoryWebStorage = exports.InMemoryWebStorage = __webpack_require__(40).default;
	var UserManager = exports.UserManager = __webpack_require__(41).default;
	var AccessTokenEvents = exports.AccessTokenEvents = __webpack_require__(48).default;
	var MetadataService = exports.MetadataService = __webpack_require__(7).default;
	var CheckSessionIFrame = exports.CheckSessionIFrame = __webpack_require__(53).default;
	var TokenRevocationClient = exports.TokenRevocationClient = __webpack_require__(54).default;
	var SessionMonitor = exports.SessionMonitor = __webpack_require__(52).default;
	var Global = exports.Global = __webpack_require__(5).default;
	var User = exports.User = __webpack_require__(46).default;
	
	exports.default = {
	    Log: Log,
	    OidcClient: OidcClient,
	    OidcClientSettings: OidcClientSettings,
	    WebStorageStateStore: WebStorageStateStore,
	    InMemoryWebStorage: InMemoryWebStorage,
	    UserManager: UserManager,
	    AccessTokenEvents: AccessTokenEvents,
	    MetadataService: MetadataService,
	    CheckSessionIFrame: CheckSessionIFrame,
	    TokenRevocationClient: TokenRevocationClient,
	    SessionMonitor: SessionMonitor,
	    Global: Global,
	    User: User
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var nopLogger = {
	    debug: function debug() {},
	    info: function info() {},
	    warn: function warn() {},
	    error: function error() {}
	};
	
	var NONE = 0;
	var ERROR = 1;
	var WARN = 2;
	var INFO = 3;
	var DEBUG = 4;
	
	var logger = void 0;
	var level = void 0;
	
	var Log = function () {
	    function Log() {
	        _classCallCheck(this, Log);
	    }
	
	    _createClass(Log, null, [{
	        key: "reset",
	        value: function reset() {
	            level = DEBUG;
	            logger = console;
	        }
	    }, {
	        key: "debug",
	        value: function debug() {
	            if (level >= DEBUG) {
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }
	
	                logger.debug.apply(logger, Array.from(args));
	            }
	        }
	    }, {
	        key: "info",
	        value: function info() {
	            if (level >= INFO) {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }
	
	                logger.info.apply(logger, Array.from(args));
	            }
	        }
	    }, {
	        key: "warn",
	        value: function warn() {
	            if (level >= WARN) {
	                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                    args[_key3] = arguments[_key3];
	                }
	
	                logger.warn.apply(logger, Array.from(args));
	            }
	        }
	    }, {
	        key: "error",
	        value: function error() {
	            if (level >= ERROR) {
	                for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	                    args[_key4] = arguments[_key4];
	                }
	
	                logger.error.apply(logger, Array.from(args));
	            }
	        }
	    }, {
	        key: "NONE",
	        get: function get() {
	            return NONE;
	        }
	    }, {
	        key: "ERROR",
	        get: function get() {
	            return ERROR;
	        }
	    }, {
	        key: "WARN",
	        get: function get() {
	            return WARN;
	        }
	    }, {
	        key: "INFO",
	        get: function get() {
	            return INFO;
	        }
	    }, {
	        key: "DEBUG",
	        get: function get() {
	            return DEBUG;
	        }
	    }, {
	        key: "level",
	        get: function get() {
	            return level;
	        },
	        set: function set(value) {
	            if (NONE <= value && value <= DEBUG) {
	                level = value;
	            } else {
	                throw new Error("Invalid log level");
	            }
	        }
	    }, {
	        key: "logger",
	        get: function get() {
	            return logger;
	        },
	        set: function set(value) {
	            if (!value.debug && value.info) {
	                // just to stay backwards compat. can remove in 2.0
	                value.debug = value.info;
	            }
	
	            if (value.debug && value.info && value.warn && value.error) {
	                logger = value;
	            } else {
	                throw new Error("Invalid logger");
	            }
	        }
	    }]);
	
	    return Log;
	}();
	
	exports.default = Log;
	
	
	Log.reset();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _OidcClientSettings = __webpack_require__(3);
	
	var _OidcClientSettings2 = _interopRequireDefault(_OidcClientSettings);
	
	var _ErrorResponse = __webpack_require__(10);
	
	var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);
	
	var _SigninRequest = __webpack_require__(32);
	
	var _SigninRequest2 = _interopRequireDefault(_SigninRequest);
	
	var _SigninResponse = __webpack_require__(37);
	
	var _SigninResponse2 = _interopRequireDefault(_SigninResponse);
	
	var _SignoutRequest = __webpack_require__(38);
	
	var _SignoutRequest2 = _interopRequireDefault(_SignoutRequest);
	
	var _SignoutResponse = __webpack_require__(39);
	
	var _SignoutResponse2 = _interopRequireDefault(_SignoutResponse);
	
	var _SigninState = __webpack_require__(34);
	
	var _SigninState2 = _interopRequireDefault(_SigninState);
	
	var _State = __webpack_require__(35);
	
	var _State2 = _interopRequireDefault(_State);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OidcClient = function () {
	    function OidcClient() {
	        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	        _classCallCheck(this, OidcClient);
	
	        if (settings instanceof _OidcClientSettings2.default) {
	            this._settings = settings;
	        } else {
	            this._settings = new _OidcClientSettings2.default(settings);
	        }
	    }
	
	    _createClass(OidcClient, [{
	        key: 'createSigninRequest',
	        value: function createSigninRequest() {
	            var _this = this;
	
	            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	                response_type = _ref.response_type,
	                scope = _ref.scope,
	                redirect_uri = _ref.redirect_uri,
	                data = _ref.data,
	                state = _ref.state,
	                prompt = _ref.prompt,
	                display = _ref.display,
	                max_age = _ref.max_age,
	                ui_locales = _ref.ui_locales,
	                id_token_hint = _ref.id_token_hint,
	                login_hint = _ref.login_hint,
	                acr_values = _ref.acr_values,
	                resource = _ref.resource,
	                request = _ref.request,
	                request_uri = _ref.request_uri,
	                extraQueryParams = _ref.extraQueryParams;
	
	            var stateStore = arguments[1];
	
	            _Log2.default.debug("OidcClient.createSigninRequest");
	
	            var client_id = this._settings.client_id;
	            response_type = response_type || this._settings.response_type;
	            scope = scope || this._settings.scope;
	            redirect_uri = redirect_uri || this._settings.redirect_uri;
	
	            // id_token_hint, login_hint aren't allowed on _settings
	            prompt = prompt || this._settings.prompt;
	            display = display || this._settings.display;
	            max_age = max_age || this._settings.max_age;
	            ui_locales = ui_locales || this._settings.ui_locales;
	            acr_values = acr_values || this._settings.acr_values;
	            resource = resource || this._settings.resource;
	            extraQueryParams = extraQueryParams || this._settings.extraQueryParams;
	
	            var authority = this._settings.authority;
	
	            return this._metadataService.getAuthorizationEndpoint().then(function (url) {
	                _Log2.default.debug("Received authorization endpoint", url);
	
	                var signinRequest = new _SigninRequest2.default({
	                    url: url,
	                    client_id: client_id,
	                    redirect_uri: redirect_uri,
	                    response_type: response_type,
	                    scope: scope,
	                    data: data || state,
	                    authority: authority,
	                    prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values,
	                    resource: resource, request: request, request_uri: request_uri, extraQueryParams: extraQueryParams
	                });
	
	                var signinState = signinRequest.state;
	                stateStore = stateStore || _this._stateStore;
	
	                return stateStore.set(signinState.id, signinState.toStorageString()).then(function () {
	                    return signinRequest;
	                });
	            });
	        }
	    }, {
	        key: 'processSigninResponse',
	        value: function processSigninResponse(url, stateStore) {
	            var _this2 = this;
	
	            _Log2.default.debug("OidcClient.processSigninResponse");
	
	            var response = new _SigninResponse2.default(url);
	
	            if (!response.state) {
	                _Log2.default.error("No state in response");
	                return Promise.reject(new Error("No state in response"));
	            }
	
	            stateStore = stateStore || this._stateStore;
	
	            return stateStore.remove(response.state).then(function (storedStateString) {
	                if (!storedStateString) {
	                    _Log2.default.error("No matching state found in storage");
	                    throw new Error("No matching state found in storage");
	                }
	
	                var state = _SigninState2.default.fromStorageString(storedStateString);
	
	                _Log2.default.debug("Received state from storage; validating response");
	                return _this2._validator.validateSigninResponse(state, response);
	            });
	        }
	    }, {
	        key: 'createSignoutRequest',
	        value: function createSignoutRequest() {
	            var _this3 = this;
	
	            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	                id_token_hint = _ref2.id_token_hint,
	                data = _ref2.data,
	                state = _ref2.state,
	                post_logout_redirect_uri = _ref2.post_logout_redirect_uri;
	
	            var stateStore = arguments[1];
	
	            _Log2.default.debug("OidcClient.createSignoutRequest");
	
	            post_logout_redirect_uri = post_logout_redirect_uri || this._settings.post_logout_redirect_uri;
	
	            return this._metadataService.getEndSessionEndpoint().then(function (url) {
	                if (!url) {
	                    _Log2.default.error("No end session endpoint url returned");
	                    throw new Error("no end session endpoint");
	                }
	
	                _Log2.default.debug("Received end session endpoint", url);
	
	                var request = new _SignoutRequest2.default({
	                    url: url,
	                    id_token_hint: id_token_hint,
	                    post_logout_redirect_uri: post_logout_redirect_uri,
	                    data: data || state
	                });
	
	                var signoutState = request.state;
	                if (signoutState) {
	                    _Log2.default.debug("Signout request has state to persist");
	
	                    stateStore = stateStore || _this3._stateStore;
	                    stateStore.set(signoutState.id, signoutState.toStorageString());
	                }
	
	                return request;
	            });
	        }
	    }, {
	        key: 'processSignoutResponse',
	        value: function processSignoutResponse(url, stateStore) {
	            var _this4 = this;
	
	            _Log2.default.debug("OidcClient.processSignoutResponse");
	
	            var response = new _SignoutResponse2.default(url);
	            if (!response.state) {
	                _Log2.default.debug("No state in response");
	
	                if (response.error) {
	                    _Log2.default.warn("Response was error", response.error);
	                    return Promise.reject(new _ErrorResponse2.default(response));
	                }
	
	                return Promise.resolve(response);
	            }
	
	            var stateKey = response.state;
	
	            stateStore = stateStore || this._stateStore;
	
	            return stateStore.remove(stateKey).then(function (storedStateString) {
	                if (!storedStateString) {
	                    _Log2.default.error("No matching state found in storage");
	                    throw new Error("No matching state found in storage");
	                }
	
	                var state = _State2.default.fromStorageString(storedStateString);
	
	                _Log2.default.debug("Received state from storage; validating response");
	                return _this4._validator.validateSignoutResponse(state, response);
	            });
	        }
	    }, {
	        key: 'clearStaleState',
	        value: function clearStaleState(stateStore) {
	            _Log2.default.debug("OidcClient.clearStaleState");
	
	            stateStore = stateStore || this._stateStore;
	
	            return _State2.default.clearStaleState(stateStore, this.settings.staleStateAge);
	        }
	    }, {
	        key: '_stateStore',
	        get: function get() {
	            return this.settings.stateStore;
	        }
	    }, {
	        key: '_validator',
	        get: function get() {
	            return this.settings.validator;
	        }
	    }, {
	        key: '_metadataService',
	        get: function get() {
	            return this.settings.metadataService;
	        }
	    }, {
	        key: 'settings',
	        get: function get() {
	            return this._settings;
	        }
	    }, {
	        key: 'metadataService',
	        get: function get() {
	            return this._metadataService;
	        }
	    }]);
	
	    return OidcClient;
	}();
	
	exports.default = OidcClient;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _WebStorageStateStore = __webpack_require__(4);
	
	var _WebStorageStateStore2 = _interopRequireDefault(_WebStorageStateStore);
	
	var _ResponseValidator = __webpack_require__(6);
	
	var _ResponseValidator2 = _interopRequireDefault(_ResponseValidator);
	
	var _MetadataService = __webpack_require__(7);
	
	var _MetadataService2 = _interopRequireDefault(_MetadataService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OidcMetadataUrlPath = '.well-known/openid-configuration';
	
	var DefaultResponseType = "id_token";
	var DefaultScope = "openid";
	var DefaultStaleStateAge = 60 * 5; // seconds
	var DefaultClockSkewInSeconds = 59;
	
	var OidcClientSettings = function () {
	    function OidcClientSettings() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            authority = _ref.authority,
	            metadataUrl = _ref.metadataUrl,
	            metadata = _ref.metadata,
	            signingKeys = _ref.signingKeys,
	            client_id = _ref.client_id,
	            client_secret = _ref.client_secret,
	            _ref$response_type = _ref.response_type,
	            response_type = _ref$response_type === undefined ? DefaultResponseType : _ref$response_type,
	            _ref$scope = _ref.scope,
	            scope = _ref$scope === undefined ? DefaultScope : _ref$scope,
	            redirect_uri = _ref.redirect_uri,
	            post_logout_redirect_uri = _ref.post_logout_redirect_uri,
	            prompt = _ref.prompt,
	            display = _ref.display,
	            max_age = _ref.max_age,
	            ui_locales = _ref.ui_locales,
	            acr_values = _ref.acr_values,
	            resource = _ref.resource,
	            _ref$filterProtocolCl = _ref.filterProtocolClaims,
	            filterProtocolClaims = _ref$filterProtocolCl === undefined ? true : _ref$filterProtocolCl,
	            _ref$loadUserInfo = _ref.loadUserInfo,
	            loadUserInfo = _ref$loadUserInfo === undefined ? true : _ref$loadUserInfo,
	            _ref$staleStateAge = _ref.staleStateAge,
	            staleStateAge = _ref$staleStateAge === undefined ? DefaultStaleStateAge : _ref$staleStateAge,
	            _ref$clockSkew = _ref.clockSkew,
	            clockSkew = _ref$clockSkew === undefined ? DefaultClockSkewInSeconds : _ref$clockSkew,
	            _ref$stateStore = _ref.stateStore,
	            stateStore = _ref$stateStore === undefined ? new _WebStorageStateStore2.default() : _ref$stateStore,
	            _ref$ResponseValidato = _ref.ResponseValidatorCtor,
	            ResponseValidatorCtor = _ref$ResponseValidato === undefined ? _ResponseValidator2.default : _ref$ResponseValidato,
	            _ref$MetadataServiceC = _ref.MetadataServiceCtor,
	            MetadataServiceCtor = _ref$MetadataServiceC === undefined ? _MetadataService2.default : _ref$MetadataServiceC,
	            _ref$extraQueryParams = _ref.extraQueryParams,
	            extraQueryParams = _ref$extraQueryParams === undefined ? {} : _ref$extraQueryParams;
	
	        _classCallCheck(this, OidcClientSettings);
	
	        this._authority = authority;
	        this._metadataUrl = metadataUrl;
	        this._metadata = metadata;
	        this._signingKeys = signingKeys;
	
	        this._client_id = client_id;
	        this._client_secret = client_secret;
	        this._response_type = response_type;
	        this._scope = scope;
	        this._redirect_uri = redirect_uri;
	        this._post_logout_redirect_uri = post_logout_redirect_uri;
	
	        this._prompt = prompt;
	        this._display = display;
	        this._max_age = max_age;
	        this._ui_locales = ui_locales;
	        this._acr_values = acr_values;
	        this._resource = resource;
	
	        this._filterProtocolClaims = !!filterProtocolClaims;
	        this._loadUserInfo = !!loadUserInfo;
	        this._staleStateAge = staleStateAge;
	        this._clockSkew = clockSkew;
	
	        this._stateStore = stateStore;
	        this._validator = new ResponseValidatorCtor(this);
	        this._metadataService = new MetadataServiceCtor(this);
	
	        this._extraQueryParams = (typeof extraQueryParams === 'undefined' ? 'undefined' : _typeof(extraQueryParams)) === 'object' ? extraQueryParams : {};
	    }
	
	    // client config
	
	
	    _createClass(OidcClientSettings, [{
	        key: 'client_id',
	        get: function get() {
	            return this._client_id;
	        },
	        set: function set(value) {
	            if (!this._client_id) {
	                // one-time set only
	                this._client_id = value;
	            } else {
	                _Log2.default.error("client_id has already been assigned.");
	                throw new Error("client_id has already been assigned.");
	            }
	        }
	    }, {
	        key: 'client_secret',
	        get: function get() {
	            return this._client_secret;
	        }
	    }, {
	        key: 'response_type',
	        get: function get() {
	            return this._response_type;
	        }
	    }, {
	        key: 'scope',
	        get: function get() {
	            return this._scope;
	        }
	    }, {
	        key: 'redirect_uri',
	        get: function get() {
	            return this._redirect_uri;
	        }
	    }, {
	        key: 'post_logout_redirect_uri',
	        get: function get() {
	            return this._post_logout_redirect_uri;
	        }
	
	        // optional protocol params
	
	    }, {
	        key: 'prompt',
	        get: function get() {
	            return this._prompt;
	        }
	    }, {
	        key: 'display',
	        get: function get() {
	            return this._display;
	        }
	    }, {
	        key: 'max_age',
	        get: function get() {
	            return this._max_age;
	        }
	    }, {
	        key: 'ui_locales',
	        get: function get() {
	            return this._ui_locales;
	        }
	    }, {
	        key: 'acr_values',
	        get: function get() {
	            return this._acr_values;
	        }
	    }, {
	        key: 'resource',
	        get: function get() {
	            return this._resource;
	        }
	
	        // metadata
	
	    }, {
	        key: 'authority',
	        get: function get() {
	            return this._authority;
	        },
	        set: function set(value) {
	            if (!this._authority) {
	                // one-time set only
	                this._authority = value;
	            } else {
	                _Log2.default.error("authority has already been assigned.");
	                throw new Error("authority has already been assigned.");
	            }
	        }
	    }, {
	        key: 'metadataUrl',
	        get: function get() {
	            if (!this._metadataUrl) {
	                this._metadataUrl = this.authority;
	
	                if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
	                    if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
	                        this._metadataUrl += '/';
	                    }
	                    this._metadataUrl += OidcMetadataUrlPath;
	                }
	            }
	
	            return this._metadataUrl;
	        }
	
	        // settable/cachable metadata values
	
	    }, {
	        key: 'metadata',
	        get: function get() {
	            return this._metadata;
	        },
	        set: function set(value) {
	            this._metadata = value;
	        }
	    }, {
	        key: 'signingKeys',
	        get: function get() {
	            return this._signingKeys;
	        },
	        set: function set(value) {
	            this._signingKeys = value;
	        }
	
	        // behavior flags
	
	    }, {
	        key: 'filterProtocolClaims',
	        get: function get() {
	            return this._filterProtocolClaims;
	        }
	    }, {
	        key: 'loadUserInfo',
	        get: function get() {
	            return this._loadUserInfo;
	        }
	    }, {
	        key: 'staleStateAge',
	        get: function get() {
	            return this._staleStateAge;
	        }
	    }, {
	        key: 'clockSkew',
	        get: function get() {
	            return this._clockSkew;
	        }
	    }, {
	        key: 'stateStore',
	        get: function get() {
	            return this._stateStore;
	        }
	    }, {
	        key: 'validator',
	        get: function get() {
	            return this._validator;
	        }
	    }, {
	        key: 'metadataService',
	        get: function get() {
	            return this._metadataService;
	        }
	
	        // extra query params
	
	    }, {
	        key: 'extraQueryParams',
	        get: function get() {
	            return this._extraQueryParams;
	        },
	        set: function set(value) {
	            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	                this._extraQueryParams = value;
	            } else {
	                this._extraQueryParams = {};
	            }
	        }
	    }]);
	
	    return OidcClientSettings;
	}();
	
	exports.default = OidcClientSettings;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _Global = __webpack_require__(5);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WebStorageStateStore = function () {
	    function WebStorageStateStore() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            _ref$prefix = _ref.prefix,
	            prefix = _ref$prefix === undefined ? "oidc." : _ref$prefix,
	            _ref$store = _ref.store,
	            store = _ref$store === undefined ? _Global2.default.localStorage : _ref$store;
	
	        _classCallCheck(this, WebStorageStateStore);
	
	        this._store = store;
	        this._prefix = prefix;
	    }
	
	    _createClass(WebStorageStateStore, [{
	        key: 'set',
	        value: function set(key, value) {
	            _Log2.default.debug("WebStorageStateStore.set", key);
	
	            key = this._prefix + key;
	
	            this._store.setItem(key, value);
	
	            return Promise.resolve();
	        }
	    }, {
	        key: 'get',
	        value: function get(key) {
	            _Log2.default.debug("WebStorageStateStore.get", key);
	
	            key = this._prefix + key;
	
	            var item = this._store.getItem(key);
	
	            return Promise.resolve(item);
	        }
	    }, {
	        key: 'remove',
	        value: function remove(key) {
	            _Log2.default.debug("WebStorageStateStore.remove", key);
	
	            key = this._prefix + key;
	
	            var item = this._store.getItem(key);
	            this._store.removeItem(key);
	
	            return Promise.resolve(item);
	        }
	    }, {
	        key: 'getAllKeys',
	        value: function getAllKeys() {
	            _Log2.default.debug("WebStorageStateStore.getAllKeys");
	
	            var keys = [];
	
	            for (var index = 0; index < this._store.length; index++) {
	                var key = this._store.key(index);
	
	                if (key.indexOf(this._prefix) === 0) {
	                    keys.push(key.substr(this._prefix.length));
	                }
	            }
	
	            return Promise.resolve(keys);
	        }
	    }]);
	
	    return WebStorageStateStore;
	}();
	
	exports.default = WebStorageStateStore;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var timer = {
	    setInterval: function (_setInterval) {
	        function setInterval(_x, _x2) {
	            return _setInterval.apply(this, arguments);
	        }
	
	        setInterval.toString = function () {
	            return _setInterval.toString();
	        };
	
	        return setInterval;
	    }(function (cb, duration) {
	        return setInterval(cb, duration);
	    }),
	    clearInterval: function (_clearInterval) {
	        function clearInterval(_x3) {
	            return _clearInterval.apply(this, arguments);
	        }
	
	        clearInterval.toString = function () {
	            return _clearInterval.toString();
	        };
	
	        return clearInterval;
	    }(function (handle) {
	        return clearInterval(handle);
	    })
	};
	
	var testing = false;
	var request = null;
	
	var Global = function () {
	    function Global() {
	        _classCallCheck(this, Global);
	    }
	
	    _createClass(Global, null, [{
	        key: "_testing",
	        value: function _testing() {
	            testing = true;
	        }
	    }, {
	        key: "setXMLHttpRequest",
	        value: function setXMLHttpRequest(newRequest) {
	            request = newRequest;
	        }
	    }, {
	        key: "location",
	        get: function get() {
	            if (!testing) {
	                return location;
	            }
	        }
	    }, {
	        key: "localStorage",
	        get: function get() {
	            if (!testing) {
	                return localStorage;
	            }
	        }
	    }, {
	        key: "sessionStorage",
	        get: function get() {
	            if (!testing) {
	                return sessionStorage;
	            }
	        }
	    }, {
	        key: "XMLHttpRequest",
	        get: function get() {
	            if (!testing) {
	                return request || XMLHttpRequest;
	            }
	        }
	    }, {
	        key: "timer",
	        get: function get() {
	            if (!testing) {
	                return timer;
	            }
	        }
	    }]);
	
	    return Global;
	}();
	
	exports.default = Global;
	;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _MetadataService = __webpack_require__(7);
	
	var _MetadataService2 = _interopRequireDefault(_MetadataService);
	
	var _UserInfoService = __webpack_require__(9);
	
	var _UserInfoService2 = _interopRequireDefault(_UserInfoService);
	
	var _ErrorResponse = __webpack_require__(10);
	
	var _ErrorResponse2 = _interopRequireDefault(_ErrorResponse);
	
	var _JoseUtil = __webpack_require__(11);
	
	var _JoseUtil2 = _interopRequireDefault(_JoseUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ProtocolClaims = ["nonce", "at_hash", "iat", "nbf", "exp", "aud", "iss", "c_hash"];
	
	var ResponseValidator = function () {
	    function ResponseValidator(settings) {
	        var MetadataServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _MetadataService2.default;
	        var UserInfoServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _UserInfoService2.default;
	        var joseUtil = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _JoseUtil2.default;
	
	        _classCallCheck(this, ResponseValidator);
	
	        if (!settings) {
	            _Log2.default.error("No settings passed to ResponseValidator");
	            throw new Error("settings");
	        }
	
	        this._settings = settings;
	        this._metadataService = new MetadataServiceCtor(this._settings);
	        this._userInfoService = new UserInfoServiceCtor(this._settings);
	        this._joseUtil = joseUtil;
	    }
	
	    _createClass(ResponseValidator, [{
	        key: 'validateSigninResponse',
	        value: function validateSigninResponse(state, response) {
	            var _this = this;
	
	            _Log2.default.debug("ResponseValidator.validateSigninResponse");
	
	            return this._processSigninParams(state, response).then(function (response) {
	                _Log2.default.debug("state processed");
	                return _this._validateTokens(state, response).then(function (response) {
	                    _Log2.default.debug("tokens validated");
	                    return _this._processClaims(response).then(function (response) {
	                        _Log2.default.debug("claims processed");
	                        return response;
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'validateSignoutResponse',
	        value: function validateSignoutResponse(state, response) {
	            _Log2.default.debug("ResponseValidator.validateSignoutResponse");
	
	            if (state.id !== response.state) {
	                _Log2.default.error("State does not match");
	                return Promise.reject(new Error("State does not match"));
	            }
	
	            // now that we know the state matches, take the stored data
	            // and set it into the response so callers can get their state
	            // this is important for both success & error outcomes
	            _Log2.default.debug("state validated");
	            response.state = state.data;
	
	            if (response.error) {
	                _Log2.default.warn("Response was error", response.error);
	                return Promise.reject(new _ErrorResponse2.default(response));
	            }
	
	            return Promise.resolve(response);
	        }
	    }, {
	        key: '_processSigninParams',
	        value: function _processSigninParams(state, response) {
	            _Log2.default.debug("ResponseValidator._processSigninParams");
	
	            if (state.id !== response.state) {
	                _Log2.default.error("State does not match");
	                return Promise.reject(new Error("State does not match"));
	            }
	
	            if (!state.client_id) {
	                _Log2.default.error("No client_id on state");
	                return Promise.reject(new Error("No client_id on state"));
	            }
	
	            if (!state.authority) {
	                _Log2.default.error("No authority on state");
	                return Promise.reject(new Error("No authority on state"));
	            }
	
	            // this allows the authority to be loaded from the signin state
	            if (!this._settings.authority) {
	                this._settings.authority = state.authority;
	            }
	            // ensure we're using the correct authority if the authority is not loaded from signin state
	            else if (this._settings.authority && this._settings.authority !== state.authority) {
	                    _Log2.default.error("authority mismatch on settings vs. signin state");
	                    return Promise.reject(new Error("authority mismatch on settings vs. signin state"));
	                }
	            // this allows the client_id to be loaded from the signin state
	            if (!this._settings.client_id) {
	                this._settings.client_id = state.client_id;
	            }
	            // ensure we're using the correct client_id if the client_id is not loaded from signin state
	            else if (this._settings.client_id && this._settings.client_id !== state.client_id) {
	                    _Log2.default.error("client_id mismatch on settings vs. signin state");
	                    return Promise.reject(new Error("client_id mismatch on settings vs. signin state"));
	                }
	
	            // now that we know the state matches, take the stored data
	            // and set it into the response so callers can get their state
	            // this is important for both success & error outcomes
	            _Log2.default.debug("state validated");
	            response.state = state.data;
	
	            if (response.error) {
	                _Log2.default.warn("Response was error", response.error);
	                return Promise.reject(new _ErrorResponse2.default(response));
	            }
	
	            if (state.nonce && !response.id_token) {
	                _Log2.default.error("Expecting id_token in response");
	                return Promise.reject(new Error("No id_token in response"));
	            }
	
	            if (!state.nonce && response.id_token) {
	                _Log2.default.error("Not expecting id_token in response");
	                return Promise.reject(new Error("Unexpected id_token in response"));
	            }
	
	            return Promise.resolve(response);
	        }
	    }, {
	        key: '_processClaims',
	        value: function _processClaims(response) {
	            var _this2 = this;
	
	            _Log2.default.debug("ResponseValidator._processClaims");
	
	            if (response.isOpenIdConnect) {
	                _Log2.default.debug("response is OIDC, processing claims");
	
	                response.profile = this._filterProtocolClaims(response.profile);
	
	                if (this._settings.loadUserInfo && response.access_token) {
	                    _Log2.default.debug("loading user info");
	
	                    return this._userInfoService.getClaims(response.access_token).then(function (claims) {
	                        _Log2.default.debug("user info claims received from user info endpoint");
	
	                        if (claims.sub !== response.profile.sub) {
	                            _Log2.default.error("sub from user info endpoint does not match sub in access_token");
	                            return Promise.reject(new Error("sub from user info endpoint does not match sub in access_token"));
	                        }
	
	                        response.profile = _this2._mergeClaims(response.profile, claims);
	                        _Log2.default.debug("user info claims received, updated profile:", response.profile);
	
	                        return response;
	                    });
	                } else {
	                    _Log2.default.debug("not loading user info");
	                }
	            } else {
	                _Log2.default.debug("response is not OIDC, not processing claims");
	            }
	
	            return Promise.resolve(response);
	        }
	    }, {
	        key: '_mergeClaims',
	        value: function _mergeClaims(claims1, claims2) {
	            var result = Object.assign({}, claims1);
	
	            for (var name in claims2) {
	                var values = claims2[name];
	                if (!Array.isArray(values)) {
	                    values = [values];
	                }
	
	                for (var i = 0; i < values.length; i++) {
	                    var value = values[i];
	                    if (!result[name]) {
	                        result[name] = value;
	                    } else if (Array.isArray(result[name])) {
	                        if (result[name].indexOf(value) < 0) {
	                            result[name].push(value);
	                        }
	                    } else if (result[name] !== value) {
	                        result[name] = [result[name], value];
	                    }
	                }
	            }
	
	            return result;
	        }
	    }, {
	        key: '_filterProtocolClaims',
	        value: function _filterProtocolClaims(claims) {
	            _Log2.default.debug("ResponseValidator._filterProtocolClaims, incoming claims:", claims);
	
	            var result = Object.assign({}, claims);
	
	            if (this._settings._filterProtocolClaims) {
	                ProtocolClaims.forEach(function (type) {
	                    delete result[type];
	                });
	
	                _Log2.default.debug("protocol claims filtered", result);
	            } else {
	                _Log2.default.debug("protocol claims not filtered");
	            }
	
	            return result;
	        }
	    }, {
	        key: '_validateTokens',
	        value: function _validateTokens(state, response) {
	            _Log2.default.debug("ResponseValidator._validateTokens");
	
	            if (response.id_token) {
	
	                if (response.access_token) {
	                    _Log2.default.debug("Validating id_token and access_token");
	                    return this._validateIdTokenAndAccessToken(state, response);
	                }
	
	                _Log2.default.debug("Validating id_token");
	                return this._validateIdToken(state, response);
	            }
	
	            _Log2.default.debug("No id_token to validate");
	            return Promise.resolve(response);
	        }
	    }, {
	        key: '_validateIdTokenAndAccessToken',
	        value: function _validateIdTokenAndAccessToken(state, response) {
	            var _this3 = this;
	
	            _Log2.default.debug("ResponseValidator._validateIdTokenAndAccessToken");
	
	            return this._validateIdToken(state, response).then(function (response) {
	                return _this3._validateAccessToken(response);
	            });
	        }
	    }, {
	        key: '_validateIdToken',
	        value: function _validateIdToken(state, response) {
	            var _this4 = this;
	
	            _Log2.default.debug("ResponseValidator._validateIdToken");
	
	            if (!state.nonce) {
	                _Log2.default.error("No nonce on state");
	                return Promise.reject(new Error("No nonce on state"));
	            }
	
	            var jwt = this._joseUtil.parseJwt(response.id_token);
	            if (!jwt || !jwt.header || !jwt.payload) {
	                _Log2.default.error("Failed to parse id_token", jwt);
	                return Promise.reject(new Error("Failed to parse id_token"));
	            }
	
	            if (state.nonce !== jwt.payload.nonce) {
	                _Log2.default.error("Invalid nonce in id_token");
	                return Promise.reject(new Error("Invalid nonce in id_token"));
	            }
	
	            var kid = jwt.header.kid;
	
	            return this._metadataService.getIssuer().then(function (issuer) {
	                _Log2.default.debug("Received issuer");
	
	                return _this4._metadataService.getSigningKeys().then(function (keys) {
	                    if (!keys) {
	                        _Log2.default.error("No signing keys from metadata");
	                        return Promise.reject(new Error("No signing keys from metadata"));
	                    }
	
	                    _Log2.default.debug("Received signing keys");
	                    var key = void 0;
	                    if (!kid) {
	                        keys = _this4._filterByAlg(keys, jwt.header.alg);
	
	                        if (keys.length > 1) {
	                            _Log2.default.error("No kid found in id_token and more than one key found in metadata");
	                            return Promise.reject(new Error("No kid found in id_token and more than one key found in metadata"));
	                        } else {
	                            // kid is mandatory only when there are multiple keys in the referenced JWK Set document
	                            // see http://openid.net/specs/openid-connect-core-1_0.html#Signing
	                            key = keys[0];
	                        }
	                    } else {
	                        key = keys.filter(function (key) {
	                            return key.kid === kid;
	                        })[0];
	                    }
	
	                    if (!key) {
	                        _Log2.default.error("No key matching kid or alg found in signing keys");
	                        return Promise.reject(new Error("No key matching kid or alg found in signing keys"));
	                    }
	
	                    var audience = state.client_id;
	
	                    var clockSkewInSeconds = _this4._settings.clockSkew;
	                    _Log2.default.debug("Validaing JWT; using clock skew (in seconds) of: ", clockSkewInSeconds);
	
	                    return _this4._joseUtil.validateJwt(response.id_token, key, issuer, audience, clockSkewInSeconds).then(function () {
	                        _Log2.default.debug("JWT validation successful");
	
	                        if (!jwt.payload.sub) {
	                            _Log2.default.error("No sub present in id_token");
	                            return Promise.reject(new Error("No sub present in id_token"));
	                        }
	
	                        response.profile = jwt.payload;
	
	                        return response;
	                    });
	                });
	            });
	        }
	    }, {
	        key: '_filterByAlg',
	        value: function _filterByAlg(keys, alg) {
	            _Log2.default.debug("ResponseValidator._filterByAlg", alg);
	
	            var kty = null;
	            if (alg.startsWith("RS")) {
	                kty = "RSA";
	            } else if (alg.startsWith("PS")) {
	                kty = "PS";
	            } else if (alg.startsWith("ES")) {
	                kty = "EC";
	            } else {
	                _Log2.default.debug("alg not supported: ", alg);
	                return [];
	            }
	
	            _Log2.default.debug("Looking for keys that match kty: ", kty);
	
	            keys = keys.filter(function (key) {
	                return key.kty === kty;
	            });
	
	            _Log2.default.debug("Number of keys that match kty: ", kty, keys.length);
	
	            return keys;
	        }
	    }, {
	        key: '_validateAccessToken',
	        value: function _validateAccessToken(response) {
	            _Log2.default.debug("ResponseValidator._validateAccessToken");
	
	            if (!response.profile) {
	                _Log2.default.error("No profile loaded from id_token");
	                return Promise.reject(new Error("No profile loaded from id_token"));
	            }
	
	            if (!response.profile.at_hash) {
	                _Log2.default.error("No at_hash in id_token");
	                return Promise.reject(new Error("No at_hash in id_token"));
	            }
	
	            if (!response.id_token) {
	                _Log2.default.error("No id_token");
	                return Promise.reject(new Error("No id_token"));
	            }
	
	            var jwt = this._joseUtil.parseJwt(response.id_token);
	            if (!jwt || !jwt.header) {
	                _Log2.default.error("Failed to parse id_token", jwt);
	                return Promise.reject(new Error("Failed to parse id_token"));
	            }
	
	            var hashAlg = jwt.header.alg;
	            if (!hashAlg || hashAlg.length !== 5) {
	                _Log2.default.error("Unsupported alg:", hashAlg);
	                return Promise.reject(new Error("Unsupported alg: " + hashAlg));
	            }
	
	            var hashBits = hashAlg.substr(2, 3);
	            if (!hashBits) {
	                _Log2.default.error("Unsupported alg:", hashAlg, hashBits);
	                return Promise.reject(new Error("Unsupported alg: " + hashAlg));
	            }
	
	            hashBits = parseInt(hashBits);
	            if (hashBits !== 256 && hashBits !== 384 && hashBits !== 512) {
	                _Log2.default.error("Unsupported alg:", hashAlg, hashBits);
	                return Promise.reject(new Error("Unsupported alg: " + hashAlg));
	            }
	
	            var sha = "sha" + hashBits;
	            var hash = this._joseUtil.hashString(response.access_token, sha);
	            if (!hash) {
	                _Log2.default.error("access_token hash failed:", sha);
	                return Promise.reject(new Error("Failed to validate at_hash"));
	            }
	
	            var left = hash.substr(0, hash.length / 2);
	            var left_b64u = this._joseUtil.hexToBase64Url(left);
	            if (left_b64u !== response.profile.at_hash) {
	                _Log2.default.error("Failed to validate at_hash", left_b64u, response.profile.at_hash);
	                return Promise.reject(new Error("Failed to validate at_hash"));
	            }
	
	            return Promise.resolve(response);
	        }
	    }]);
	
	    return ResponseValidator;
	}();
	
	exports.default = ResponseValidator;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _JsonService = __webpack_require__(8);
	
	var _JsonService2 = _interopRequireDefault(_JsonService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OidcMetadataUrlPath = '.well-known/openid-configuration';
	
	var MetadataService = function () {
	    function MetadataService(settings) {
	        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService2.default;
	
	        _classCallCheck(this, MetadataService);
	
	        if (!settings) {
	            _Log2.default.error("No settings passed to MetadataService");
	            throw new Error("settings");
	        }
	
	        this._settings = settings;
	        this._jsonService = new JsonServiceCtor();
	    }
	
	    _createClass(MetadataService, [{
	        key: 'getMetadata',
	        value: function getMetadata() {
	            var _this = this;
	
	            _Log2.default.debug("MetadataService.getMetadata");
	
	            if (this._settings.metadata) {
	                _Log2.default.debug("Returning metadata from settings");
	                return Promise.resolve(this._settings.metadata);
	            }
	
	            if (!this.metadataUrl) {
	                _Log2.default.error("No authority or metadataUrl configured on settings");
	                return Promise.reject(new Error("No authority or metadataUrl configured on settings"));
	            }
	
	            _Log2.default.debug("getting metadata from", this.metadataUrl);
	
	            return this._jsonService.getJson(this.metadataUrl).then(function (metadata) {
	                _Log2.default.debug("json received");
	                _this._settings.metadata = metadata;
	                return metadata;
	            });
	        }
	    }, {
	        key: 'getIssuer',
	        value: function getIssuer() {
	            _Log2.default.debug("MetadataService.getIssuer");
	            return this._getMetadataProperty("issuer");
	        }
	    }, {
	        key: 'getAuthorizationEndpoint',
	        value: function getAuthorizationEndpoint() {
	            _Log2.default.debug("MetadataService.getAuthorizationEndpoint");
	            return this._getMetadataProperty("authorization_endpoint");
	        }
	    }, {
	        key: 'getUserInfoEndpoint',
	        value: function getUserInfoEndpoint() {
	            _Log2.default.debug("MetadataService.getUserInfoEndpoint");
	            return this._getMetadataProperty("userinfo_endpoint");
	        }
	    }, {
	        key: 'getTokenEndpoint',
	        value: function getTokenEndpoint() {
	            _Log2.default.debug("MetadataService.getTokenEndpoint");
	            return this._getMetadataProperty("token_endpoint", true);
	        }
	    }, {
	        key: 'getCheckSessionIframe',
	        value: function getCheckSessionIframe() {
	            _Log2.default.debug("MetadataService.getCheckSessionIframe");
	            return this._getMetadataProperty("check_session_iframe", true);
	        }
	    }, {
	        key: 'getEndSessionEndpoint',
	        value: function getEndSessionEndpoint() {
	            _Log2.default.debug("MetadataService.getEndSessionEndpoint");
	            return this._getMetadataProperty("end_session_endpoint", true);
	        }
	    }, {
	        key: 'getRevocationEndpoint',
	        value: function getRevocationEndpoint() {
	            _Log2.default.debug("MetadataService.getRevocationEndpoint");
	            return this._getMetadataProperty("revocation_endpoint", true);
	        }
	    }, {
	        key: '_getMetadataProperty',
	        value: function _getMetadataProperty(name) {
	            var optional = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	            _Log2.default.debug("MetadataService._getMetadataProperty", name);
	
	            return this.getMetadata().then(function (metadata) {
	                _Log2.default.debug("metadata recieved");
	
	                if (metadata[name] === undefined) {
	
	                    if (optional === true) {
	                        _Log2.default.warn("Metadata does not contain optional property " + name);
	                        return undefined;
	                    } else {
	                        _Log2.default.error("Metadata does not contain property " + name);
	                        throw new Error("Metadata does not contain property " + name);
	                    }
	                }
	
	                return metadata[name];
	            });
	        }
	    }, {
	        key: 'getSigningKeys',
	        value: function getSigningKeys() {
	            var _this2 = this;
	
	            _Log2.default.debug("MetadataService.getSigningKeys");
	
	            if (this._settings.signingKeys) {
	                _Log2.default.debug("Returning signingKeys from settings");
	                return Promise.resolve(this._settings.signingKeys);
	            }
	
	            return this._getMetadataProperty("jwks_uri").then(function (jwks_uri) {
	                _Log2.default.debug("jwks_uri received", jwks_uri);
	
	                return _this2._jsonService.getJson(jwks_uri).then(function (keySet) {
	                    _Log2.default.debug("key set received", keySet);
	
	                    if (!keySet.keys) {
	                        _Log2.default.error("Missing keys on keyset");
	                        throw new Error("Missing keys on keyset");
	                    }
	
	                    _this2._settings.signingKeys = keySet.keys;
	                    return _this2._settings.signingKeys;
	                });
	            });
	        }
	    }, {
	        key: 'metadataUrl',
	        get: function get() {
	            if (!this._metadataUrl) {
	                if (this._settings.metadataUrl) {
	                    this._metadataUrl = this._settings.metadataUrl;
	                } else {
	                    this._metadataUrl = this._settings.authority;
	
	                    if (this._metadataUrl && this._metadataUrl.indexOf(OidcMetadataUrlPath) < 0) {
	                        if (this._metadataUrl[this._metadataUrl.length - 1] !== '/') {
	                            this._metadataUrl += '/';
	                        }
	                        this._metadataUrl += OidcMetadataUrlPath;
	                    }
	                }
	            }
	
	            return this._metadataUrl;
	        }
	    }]);
	
	    return MetadataService;
	}();
	
	exports.default = MetadataService;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _Global = __webpack_require__(5);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var JsonService = function () {
	    function JsonService() {
	        var XMLHttpRequestCtor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Global2.default.XMLHttpRequest;
	
	        _classCallCheck(this, JsonService);
	
	        this._XMLHttpRequest = XMLHttpRequestCtor;
	    }
	
	    _createClass(JsonService, [{
	        key: 'getJson',
	        value: function getJson(url, token) {
	            var _this = this;
	
	            _Log2.default.debug("JsonService.getJson", url);
	
	            if (!url) {
	                _Log2.default.error("No url passed");
	                throw new Error("url");
	            }
	
	            return new Promise(function (resolve, reject) {
	
	                var req = new _this._XMLHttpRequest();
	                req.open('GET', url);
	
	                req.onload = function () {
	                    _Log2.default.debug("HTTP response received, status", req.status);
	
	                    if (req.status === 200) {
	                        try {
	                            resolve(JSON.parse(req.responseText));
	                        } catch (e) {
	                            _Log2.default.error("Error parsing JSON response", e.message);
	                            reject(e);
	                        }
	                    } else {
	                        reject(Error(req.statusText + " (" + req.status + ")"));
	                    }
	                };
	
	                req.onerror = function () {
	                    _Log2.default.error("network error");
	                    reject(Error("Network Error"));
	                };
	
	                if (token) {
	                    _Log2.default.debug("token passed, setting Authorization header");
	                    req.setRequestHeader("Authorization", "Bearer " + token);
	                }
	
	                req.send();
	            });
	        }
	    }]);
	
	    return JsonService;
	}();
	
	exports.default = JsonService;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _JsonService = __webpack_require__(8);
	
	var _JsonService2 = _interopRequireDefault(_JsonService);
	
	var _MetadataService = __webpack_require__(7);
	
	var _MetadataService2 = _interopRequireDefault(_MetadataService);
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserInfoService = function () {
	    function UserInfoService(settings) {
	        var JsonServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _JsonService2.default;
	        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService2.default;
	
	        _classCallCheck(this, UserInfoService);
	
	        if (!settings) {
	            _Log2.default.error("No settings passed to UserInfoService");
	            throw new Error("settings");
	        }
	
	        this._settings = settings;
	        this._jsonService = new JsonServiceCtor();
	        this._metadataService = new MetadataServiceCtor(this._settings);
	    }
	
	    _createClass(UserInfoService, [{
	        key: 'getClaims',
	        value: function getClaims(token) {
	            var _this = this;
	
	            _Log2.default.debug("UserInfoService.getClaims");
	
	            if (!token) {
	                _Log2.default.error("No token passed");
	                return Promise.reject(new Error("A token is required"));
	            }
	
	            return this._metadataService.getUserInfoEndpoint().then(function (url) {
	                _Log2.default.debug("received userinfo url", url);
	
	                return _this._jsonService.getJson(url, token).then(function (claims) {
	                    _Log2.default.debug("claims received", claims);
	                    return claims;
	                });
	            });
	        }
	    }]);
	
	    return UserInfoService;
	}();
	
	exports.default = UserInfoService;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var ErrorResponse = function (_Error) {
	    _inherits(ErrorResponse, _Error);
	
	    function ErrorResponse() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            error = _ref.error,
	            error_description = _ref.error_description,
	            error_uri = _ref.error_uri,
	            state = _ref.state;
	
	        _classCallCheck(this, ErrorResponse);
	
	        if (!error) {
	            _Log2.default.error("No error passed to ErrorResponse");
	            throw new Error("error");
	        }
	
	        var _this = _possibleConstructorReturn(this, (ErrorResponse.__proto__ || Object.getPrototypeOf(ErrorResponse)).call(this, error_description || error));
	
	        _this.name = "ErrorResponse";
	
	        _this.error = error;
	        _this.error_description = error_description;
	        _this.error_uri = error_uri;
	
	        _this.state = state;
	        return _this;
	    }
	
	    return ErrorResponse;
	}(Error);
	
	exports.default = ErrorResponse;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	// import { jws, KEYUTIL as KeyUtil, X509, crypto, hextob64u } from 'jsrsasign';
	
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _idtokenVerifier = __webpack_require__(12);
	
	var _idtokenVerifier2 = _interopRequireDefault(_idtokenVerifier);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AllowedSigningAlgs = ['RS256', 'RS384', 'RS512', 'PS256', 'PS384', 'PS512', 'ES256', 'ES384', 'ES512'];
	
	var JoseUtil = function () {
	    function JoseUtil() {
	        _classCallCheck(this, JoseUtil);
	    }
	
	    _createClass(JoseUtil, null, [{
	        key: 'parseJwt',
	        value: function parseJwt(jwt) {
	            _Log2.default.debug("JoseUtil.parseJwt");
	            try {
	                var parameters = {
	                    expectedAlg: 'RS256'
	                };
	                var idTokenVerifier = new _idtokenVerifier2.default(parameters);
	
	                var token = idTokenVerifier.decode(jwt);
	                if (token.header && token.payload) {
	                    return {
	                        header: token.header,
	                        payload: token.payload
	                    };
	                }
	            } catch (e) {
	                _Log2.default.error(e);
	            }
	        }
	    }, {
	        key: 'validateJwt',
	        value: function validateJwt(jwt, key, issuer, audience, clockSkew, now, cb) {
	            _Log2.default.debug("JoseUtil.validateJwt");
	
	            try {
	
	                // if (key.kty === "RSA") {
	                //     if (key.e && key.n) {
	                //         key = KeyUtil.getKey(key);
	                //     }
	                //     else if (key.x5c && key.x5c.length) {
	                //         key = KeyUtil.getKey(X509.getPublicKeyFromCertPEM(key.x5c[0]));
	                //     }
	                //     else {
	                //         Log.error("RSA key missing key material", key);
	                //         return Promise.reject(new Error("RSA key missing key material"));
	                //     }
	                // }
	                // else if (key.kty === "EC") {
	                //     if (key.crv && key.x && key.y) {
	                //         key = KeyUtil.getKey(key);
	                //     }
	                //     else {
	                //         Log.error("EC key missing key material", key);
	                //         return Promise.reject(new Error("EC key missing key material"));
	                //     }
	                // }
	                // else {
	                //     Log.error("Unsupported key type", key && key.kty);
	                //     return Promise.reject(new Error("Unsupported key type: " + key && key.kty));
	                // }
	                //
	                return JoseUtil._validateJwt(jwt, key, issuer, audience, clockSkew, now);
	            } catch (e) {
	                _Log2.default.error(e && e.message || e);
	                return Promise.reject("JWT validation failed");
	            }
	        }
	    }, {
	        key: '_validateJwt',
	        value: function _validateJwt(jwt, key, issuer, audience, clockSkew, now) {
	            _Log2.default.debug("JoseUtil._validateJwt");
	            var parameters = {
	                issuer: issuer,
	                audience: audience,
	                leeway: clockSkew,
	                expectedAlg: 'RS256'
	            };
	            var idTokenVerifier = new _idtokenVerifier2.default(parameters);
	
	            if (!clockSkew) {
	                clockSkew = 0;
	            }
	
	            if (!now) {
	                now = parseInt(Date.now() / 1000);
	            }
	
	            var payload = JoseUtil.parseJwt(jwt).payload;
	
	            if (!payload.iss) {
	                _Log2.default.error("issuer was not provided");
	                return Promise.reject(new Error("issuer was not provided"));
	            }
	            if (payload.iss !== issuer) {
	                _Log2.default.error("Invalid issuer in token", payload.iss);
	                return Promise.reject(new Error("Invalid issuer in token: " + payload.iss));
	            }
	
	            if (!payload.aud) {
	                _Log2.default.error("aud was not provided");
	                return Promise.reject(new Error("aud was not provided"));
	            }
	            var validAudience = payload.aud === audience || Array.isArray(payload.aud) && payload.aud.indexOf(audience) >= 0;
	            if (!validAudience) {
	                _Log2.default.error("Invalid audience in token", payload.aud);
	                return Promise.reject(new Error("Invalid audience in token: " + payload.aud));
	            }
	
	            var lowerNow = now + clockSkew;
	            var upperNow = now - clockSkew;
	
	            if (!payload.iat) {
	                _Log2.default.error("iat was not provided");
	                return Promise.reject(new Error("iat was not provided"));
	            }
	            if (lowerNow < payload.iat) {
	                _Log2.default.error("iat is in the future", payload.iat);
	                return Promise.reject(new Error("iat is in the future: " + payload.iat));
	            }
	
	            if (payload.nbf && lowerNow < payload.nbf) {
	                _Log2.default.error("nbf is in the future", payload.nbf);
	                return Promise.reject(new Error("nbf is in the future: " + payload.nbf));
	            }
	
	            if (!payload.exp) {
	                _Log2.default.error("exp was not provided");
	                return Promise.reject(new Error("exp was not provided"));
	            }
	            if (payload.exp < upperNow) {
	                _Log2.default.error("exp is in the past", payload.exp);
	                return Promise.reject(new Error("exp is in the past:" + payload.exp));
	            }
	
	            try {
	                // if (!jws.JWS.verify(jwt, key, AllowedSigningAlgs)) {
	                if (!idTokenVerifier.verify(jwt)) {
	                    return Promise.reject(new Error("signature validation failed"));
	                }
	            } catch (e) {
	                _Log2.default.error(e && e.message || e);
	                return Promise.reject(new Error("signature validation failed"));
	            }
	
	            return Promise.resolve();
	        }
	    }, {
	        key: 'hashString',
	        value: function hashString(value, alg) {
	            _Log2.default.debug("JoseUtil.hashString", value, alg);
	            try {
	                return crypto.Util.hashString(value, alg);
	            } catch (e) {
	                _Log2.default.error(e);
	            }
	        }
	    }, {
	        key: 'hexToBase64Url',
	        value: function hexToBase64Url(value) {
	            _Log2.default.debug("JoseUtil.hexToBase64Url", value);
	            try {
	                return hextob64u(value);
	            } catch (e) {
	                _Log2.default.error(e);
	            }
	        }
	    }]);
	
	    return JoseUtil;
	}();
	
	exports.default = JoseUtil;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var sha256 = __webpack_require__(13);
	var cryptoBase64 = __webpack_require__(15);
	var cryptoHex = __webpack_require__(16);
	
	var RSAVerifier = __webpack_require__(17);
	var base64 = __webpack_require__(19);
	var jwks = __webpack_require__(21);
	var error = __webpack_require__(30);
	var DummyCache = __webpack_require__(31);
	var supportedAlgs = ['RS256'];
	
	/**
	 * Creates a new id_token verifier
	 * @constructor
	 * @param {Object} parameters
	 * @param {String} parameters.issuer name of the issuer of the token
	 * that should match the `iss` claim in the id_token
	 * @param {String} parameters.audience identifies the recipients that the JWT is intended for
	 * and should match the `aud` claim
	 * @param {Object} [parameters.jwksCache] cache for JSON Web Token Keys. By default it has no cache
	 * @param {String} [parameters.jwksURI] A valid, direct URI to fetch the JSON Web Key Set (JWKS).
	 * @param {String} [parameters.expectedAlg='RS256'] algorithm in which the id_token was signed
	 * and will be used to validate
	 * @param {number} [parameters.leeway=0] number of seconds that the clock can be out of sync
	 * while validating expiration of the id_token
	 */
	function IdTokenVerifier(parameters) {
	    var options = parameters || {};
	
	    this.jwksCache = options.jwksCache || new DummyCache();
	    this.expectedAlg = options.expectedAlg || 'RS256';
	    this.issuer = options.issuer;
	    this.audience = options.audience;
	    this.leeway = options.leeway || 0;
	    this.__disableExpirationCheck = options.__disableExpirationCheck || false;
	    this.jwksURI = options.jwksURI;
	
	    if (this.leeway < 0 || this.leeway > 60) {
	        throw new error.ConfigurationError('The leeway should be positive and lower than a minute.');
	    }
	
	    if (supportedAlgs.indexOf(this.expectedAlg) === -1) {
	        throw new error.ConfigurationError('Algorithm ' + this.expectedAlg + ' is not supported. (Expected algs: [' + supportedAlgs.join(',') + '])');
	    }
	}
	
	/**
	 * @param {Error} [err] error returned if the verify cannot be performed
	 * @param {boolean} [status] if the token is valid or not
	 */
	
	/**
	 * Verifies an id_token
	 *
	 * It will validate:
	 * - signature according to the algorithm configured in the verifier.
	 * - if nonce is present and matches the one provided
	 * - if `iss` and `aud` claims matches the configured issuer and audience
	 * - if token is not expired and valid (if the `nbf` claim is in the past)
	 *
	 * @method verify
	 * @param {String} token id_token to verify
	 * @param {String} [nonce] nonce value that should match the one in the id_token claims
	 */
	IdTokenVerifier.prototype.verify = function (token, nonce) {
	    var jwt = this.decode(token);
	
	    if (jwt instanceof Error) {
	        return Promise.reject(jwt);
	    }
	
	    /* eslint-disable vars-on-top */
	    var headAndPayload = jwt.encoded.header + '.' + jwt.encoded.payload;
	    var signature = base64.decodeToHEX(jwt.encoded.signature);
	
	    var alg = jwt.header.alg;
	    var kid = jwt.header.kid;
	
	    var aud = jwt.payload.aud;
	    var iss = jwt.payload.iss;
	    var exp = jwt.payload.exp;
	    var nbf = jwt.payload.nbf;
	    var tnonce = jwt.payload.nonce || null;
	    /* eslint-enable vars-on-top */
	
	    if (this.issuer !== iss) {
	        return Promise.reject(new error.TokenValidationError('Issuer ' + iss + ' is not valid.'), false);
	    }
	
	    if (this.audience !== aud) {
	        return Promise.reject(new error.TokenValidationError('Audience ' + aud + ' is not valid.'), false);
	    }
	
	    if (this.expectedAlg !== alg) {
	        return Promise.reject(new error.TokenValidationError('Algorithm ' + alg + ' is not supported. (Expected algs: [' + supportedAlgs.join(',') + '])'), false);
	    }
	
	    if (tnonce !== nonce) {
	        return Promise.reject(new error.TokenValidationError('Nonce does not match.'), false);
	    }
	
	    var expirationError = this.verifyExpAndNbf(exp, nbf); // eslint-disable-line vars-on-top
	
	    if (expirationError) {
	        return expirationError, false;
	    }
	
	    return this.getRsaVerifier(iss, kid).then(function (rsaVerifier) {
	        if (rsaVerifier.verify(headAndPayload, signature)) {
	            return Promise.resolve(jwt.payload);
	        }
	        return Promise.reject(new error.TokenValidationError('Invalid signature.'));
	    }).catch(function (e) {
	        return Promise.reject(e);
	    });
	};
	
	/**
	 * Verifies that the `exp` and `nbf` claims are valid in the current moment.
	 *
	 * @method verifyExpAndNbf
	 * @param {String} exp value of `exp` claim
	 * @param {String} nbf value of `nbf` claim
	 * @return {boolean} if token is valid according to `exp` and `nbf`
	 */
	IdTokenVerifier.prototype.verifyExpAndNbf = function (exp, nbf) {
	    var now = new Date();
	    var expDate = new Date(0);
	    var nbfDate = new Date(0);
	
	    if (this.__disableExpirationCheck) {
	        return null;
	    }
	
	    expDate.setUTCSeconds(exp + this.leeway);
	
	    if (now > expDate) {
	        return new error.TokenValidationError('Expired token.');
	    }
	
	    if (typeof nbf === 'undefined') {
	        return null;
	    }
	    nbfDate.setUTCSeconds(nbf - this.leeway);
	    if (now < nbfDate) {
	        return new error.TokenValidationError('The token is not valid until later in the future. ' + 'Please check your computed clock.');
	    }
	
	    return null;
	};
	
	/**
	 * Verifies that the `exp` and `iat` claims are valid in the current moment.
	 *
	 * @method verifyExpAndIat
	 * @param {String} exp value of `exp` claim
	 * @param {String} iat value of `iat` claim
	 * @return {boolean} if token is valid according to `exp` and `iat`
	 */
	IdTokenVerifier.prototype.verifyExpAndIat = function (exp, iat) {
	    var now = new Date();
	    var expDate = new Date(0);
	    var iatDate = new Date(0);
	
	    if (this.__disableExpirationCheck) {
	        return null;
	    }
	
	    expDate.setUTCSeconds(exp + this.leeway);
	
	    if (now > expDate) {
	        return new error.TokenValidationError('Expired token.');
	    }
	
	    iatDate.setUTCSeconds(iat - this.leeway);
	
	    if (now < iatDate) {
	        return new error.TokenValidationError('The token was issued in the future. ' + 'Please check your computed clock.');
	    }
	    return null;
	};
	
	IdTokenVerifier.prototype.getRsaVerifier = function (iss, kid) {
	    var _this = this;
	    var cachekey = iss + kid;
	
	    if (!this.jwksCache.has(cachekey)) {
	        jwks.getJWKS({
	            jwksURI: this.jwksURI,
	            iss: iss,
	            kid: kid
	        }).then(function (keyInfo) {
	            _this.jwksCache.set(cachekey, keyInfo);
	            return Promise.resolve(null, new RSAVerifier(keyInfo.modulus, keyInfo.exp));
	        }).catch(function (e) {
	            Promise.reject(e);
	        });
	    } else {
	        var keyInfo = this.jwksCache.get(cachekey); // eslint-disable-line vars-on-top
	        Promise.resolve(null, new RSAVerifier(keyInfo.modulus, keyInfo.exp));
	    }
	};
	
	/**
	 * @typedef DecodedToken
	 * @type {Object}
	 * @property {Object} header - content of the JWT header.
	 * @property {Object} payload - token claims.
	 * @property {Object} encoded - encoded parts of the token.
	 */
	
	/**
	 * Decodes a well formed JWT without any verification
	 *
	 * @method decode
	 * @param {String} token decodes the token
	 * @return {DecodedToken} if token is valid according to `exp` and `nbf`
	 */
	IdTokenVerifier.prototype.decode = function (token) {
	    var parts = token.split('.');
	    var header;
	    var payload;
	
	    if (parts.length !== 3) {
	        return new error.TokenValidationError('Cannot decode a malformed JWT');
	    }
	
	    try {
	        header = JSON.parse(base64.decodeToString(parts[0]));
	        payload = JSON.parse(base64.decodeToString(parts[1]));
	    } catch (e) {
	        return new error.TokenValidationError('Token header or payload is not valid JSON');
	    }
	
	    return {
	        header: header,
	        payload: payload,
	        encoded: {
	            header: parts[0],
	            payload: parts[1],
	            signature: parts[2]
	        }
	    };
	};
	
	/**
	 * @callback validateAccessTokenCallback
	 * @param {Error} [err] error returned if the validation cannot be performed
	 * or the token is invalid. If there is no error, then the access_token is valid.
	 */
	
	/**
	 * Validates an access_token based on {@link http://openid.net/specs/openid-connect-core-1_0.html#ImplicitTokenValidation}.
	 * The id_token from where the alg and atHash parameters are taken,
	 * should be decoded and verified before using thisfunction
	 *
	 * @method validateAccessToken
	 * @param {String} access_token the access_token
	 * @param {String} alg The algorithm defined in the header of the
	 * previously verified id_token under the "alg" claim.
	 * @param {String} atHash The "at_hash" value included in the payload
	 * of the previously verified id_token.
	 * @param {validateAccessTokenCallback} cb callback used to notify the results of the validation.
	 */
	IdTokenVerifier.prototype.validateAccessToken = function (accessToken, alg, atHash) {
	    if (this.expectedAlg !== alg) {
	        return Promise.reject(new error.TokenValidationError('Algorithm ' + alg + ' is not supported. (Expected alg: ' + this.expectedAlg + ')'));
	    }
	    var sha256AccessToken = sha256(accessToken);
	    var hashToHex = cryptoHex.stringify(sha256AccessToken);
	    var hashToHexFirstHalf = hashToHex.substring(0, hashToHex.length / 2);
	    var hashFirstHalfWordArray = cryptoHex.parse(hashToHexFirstHalf);
	    var hashFirstHalfBase64 = cryptoBase64.stringify(hashFirstHalfWordArray);
	    var hashFirstHalfBase64SafeUrl = base64.base64ToBase64Url(hashFirstHalfBase64);
	    if (hashFirstHalfBase64SafeUrl !== atHash) {
	        return Promise.reject(new error.TokenValidationError('Invalid access_token'));
	    }
	    return Promise.resolve(null);
	};
	
	module.exports = IdTokenVerifier;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	;(function (root, factory) {
		if (( false ? "undefined" : _typeof(exports)) === "object") {
			// CommonJS
			module.exports = exports = factory(__webpack_require__(14));
		} else if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Global (browser)
			factory(root.CryptoJS);
		}
	})(undefined, function (CryptoJS) {
	
		(function (Math) {
			// Shortcuts
			var C = CryptoJS;
			var C_lib = C.lib;
			var WordArray = C_lib.WordArray;
			var Hasher = C_lib.Hasher;
			var C_algo = C.algo;
	
			// Initialization and round constants tables
			var H = [];
			var K = [];
	
			// Compute constants
			(function () {
				function isPrime(n) {
					var sqrtN = Math.sqrt(n);
					for (var factor = 2; factor <= sqrtN; factor++) {
						if (!(n % factor)) {
							return false;
						}
					}
	
					return true;
				}
	
				function getFractionalBits(n) {
					return (n - (n | 0)) * 0x100000000 | 0;
				}
	
				var n = 2;
				var nPrime = 0;
				while (nPrime < 64) {
					if (isPrime(n)) {
						if (nPrime < 8) {
							H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
						}
						K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
	
						nPrime++;
					}
	
					n++;
				}
			})();
	
			// Reusable object
			var W = [];
	
			/**
	   * SHA-256 hash algorithm.
	   */
			var SHA256 = C_algo.SHA256 = Hasher.extend({
				_doReset: function _doReset() {
					this._hash = new WordArray.init(H.slice(0));
				},
	
				_doProcessBlock: function _doProcessBlock(M, offset) {
					// Shortcut
					var H = this._hash.words;
	
					// Working variables
					var a = H[0];
					var b = H[1];
					var c = H[2];
					var d = H[3];
					var e = H[4];
					var f = H[5];
					var g = H[6];
					var h = H[7];
	
					// Computation
					for (var i = 0; i < 64; i++) {
						if (i < 16) {
							W[i] = M[offset + i] | 0;
						} else {
							var gamma0x = W[i - 15];
							var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
	
							var gamma1x = W[i - 2];
							var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
	
							W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
						}
	
						var ch = e & f ^ ~e & g;
						var maj = a & b ^ a & c ^ b & c;
	
						var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
						var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
	
						var t1 = h + sigma1 + ch + K[i] + W[i];
						var t2 = sigma0 + maj;
	
						h = g;
						g = f;
						f = e;
						e = d + t1 | 0;
						d = c;
						c = b;
						b = a;
						a = t1 + t2 | 0;
					}
	
					// Intermediate hash value
					H[0] = H[0] + a | 0;
					H[1] = H[1] + b | 0;
					H[2] = H[2] + c | 0;
					H[3] = H[3] + d | 0;
					H[4] = H[4] + e | 0;
					H[5] = H[5] + f | 0;
					H[6] = H[6] + g | 0;
					H[7] = H[7] + h | 0;
				},
	
				_doFinalize: function _doFinalize() {
					// Shortcuts
					var data = this._data;
					var dataWords = data.words;
	
					var nBitsTotal = this._nDataBytes * 8;
					var nBitsLeft = data.sigBytes * 8;
	
					// Add padding
					dataWords[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
					dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
					dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
					data.sigBytes = dataWords.length * 4;
	
					// Hash final blocks
					this._process();
	
					// Return final computed hash
					return this._hash;
				},
	
				clone: function clone() {
					var clone = Hasher.clone.call(this);
					clone._hash = this._hash.clone();
	
					return clone;
				}
			});
	
			/**
	   * Shortcut function to the hasher's object interface.
	   *
	   * @param {WordArray|string} message The message to hash.
	   *
	   * @return {WordArray} The hash.
	   *
	   * @static
	   *
	   * @example
	   *
	   *     var hash = CryptoJS.SHA256('message');
	   *     var hash = CryptoJS.SHA256(wordArray);
	   */
			C.SHA256 = Hasher._createHelper(SHA256);
	
			/**
	   * Shortcut function to the HMAC's object interface.
	   *
	   * @param {WordArray|string} message The message to hash.
	   * @param {WordArray|string} key The secret key.
	   *
	   * @return {WordArray} The HMAC.
	   *
	   * @static
	   *
	   * @example
	   *
	   *     var hmac = CryptoJS.HmacSHA256(message, key);
	   */
			C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
		})(Math);
	
		return CryptoJS.SHA256;
	});

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	;(function (root, factory) {
		if (( false ? "undefined" : _typeof(exports)) === "object") {
			// CommonJS
			module.exports = exports = factory();
		} else if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Global (browser)
			root.CryptoJS = factory();
		}
	})(undefined, function () {
	
		/**
	  * CryptoJS core components.
	  */
		var CryptoJS = CryptoJS || function (Math, undefined) {
			/*
	   * Local polyfil of Object.create
	   */
			var create = Object.create || function () {
				function F() {};
	
				return function (obj) {
					var subtype;
	
					F.prototype = obj;
	
					subtype = new F();
	
					F.prototype = null;
	
					return subtype;
				};
			}();
	
			/**
	   * CryptoJS namespace.
	   */
			var C = {};
	
			/**
	   * Library namespace.
	   */
			var C_lib = C.lib = {};
	
			/**
	   * Base object for prototypal inheritance.
	   */
			var Base = C_lib.Base = function () {
	
				return {
					/**
	     * Creates a new object that inherits from this object.
	     *
	     * @param {Object} overrides Properties to copy into the new object.
	     *
	     * @return {Object} The new object.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var MyType = CryptoJS.lib.Base.extend({
	     *         field: 'value',
	     *
	     *         method: function () {
	     *         }
	     *     });
	     */
					extend: function extend(overrides) {
						// Spawn
						var subtype = create(this);
	
						// Augment
						if (overrides) {
							subtype.mixIn(overrides);
						}
	
						// Create default initializer
						if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
							subtype.init = function () {
								subtype.$super.init.apply(this, arguments);
							};
						}
	
						// Initializer's prototype is the subtype object
						subtype.init.prototype = subtype;
	
						// Reference supertype
						subtype.$super = this;
	
						return subtype;
					},
	
					/**
	     * Extends this object and runs the init method.
	     * Arguments to create() will be passed to init().
	     *
	     * @return {Object} The new object.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var instance = MyType.create();
	     */
					create: function create() {
						var instance = this.extend();
						instance.init.apply(instance, arguments);
	
						return instance;
					},
	
					/**
	     * Initializes a newly created object.
	     * Override this method to add some logic when your objects are created.
	     *
	     * @example
	     *
	     *     var MyType = CryptoJS.lib.Base.extend({
	     *         init: function () {
	     *             // ...
	     *         }
	     *     });
	     */
					init: function init() {},
	
					/**
	     * Copies properties into this object.
	     *
	     * @param {Object} properties The properties to mix in.
	     *
	     * @example
	     *
	     *     MyType.mixIn({
	     *         field: 'value'
	     *     });
	     */
					mixIn: function mixIn(properties) {
						for (var propertyName in properties) {
							if (properties.hasOwnProperty(propertyName)) {
								this[propertyName] = properties[propertyName];
							}
						}
	
						// IE won't copy toString using the loop above
						if (properties.hasOwnProperty('toString')) {
							this.toString = properties.toString;
						}
					},
	
					/**
	     * Creates a copy of this object.
	     *
	     * @return {Object} The clone.
	     *
	     * @example
	     *
	     *     var clone = instance.clone();
	     */
					clone: function clone() {
						return this.init.prototype.extend(this);
					}
				};
			}();
	
			/**
	   * An array of 32-bit words.
	   *
	   * @property {Array} words The array of 32-bit words.
	   * @property {number} sigBytes The number of significant bytes in this word array.
	   */
			var WordArray = C_lib.WordArray = Base.extend({
				/**
	    * Initializes a newly created word array.
	    *
	    * @param {Array} words (Optional) An array of 32-bit words.
	    * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	    *
	    * @example
	    *
	    *     var wordArray = CryptoJS.lib.WordArray.create();
	    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	    *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	    */
				init: function init(words, sigBytes) {
					words = this.words = words || [];
	
					if (sigBytes != undefined) {
						this.sigBytes = sigBytes;
					} else {
						this.sigBytes = words.length * 4;
					}
				},
	
				/**
	    * Converts this word array to a string.
	    *
	    * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	    *
	    * @return {string} The stringified word array.
	    *
	    * @example
	    *
	    *     var string = wordArray + '';
	    *     var string = wordArray.toString();
	    *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	    */
				toString: function toString(encoder) {
					return (encoder || Hex).stringify(this);
				},
	
				/**
	    * Concatenates a word array to this word array.
	    *
	    * @param {WordArray} wordArray The word array to append.
	    *
	    * @return {WordArray} This word array.
	    *
	    * @example
	    *
	    *     wordArray1.concat(wordArray2);
	    */
				concat: function concat(wordArray) {
					// Shortcuts
					var thisWords = this.words;
					var thatWords = wordArray.words;
					var thisSigBytes = this.sigBytes;
					var thatSigBytes = wordArray.sigBytes;
	
					// Clamp excess bits
					this.clamp();
	
					// Concat
					if (thisSigBytes % 4) {
						// Copy one byte at a time
						for (var i = 0; i < thatSigBytes; i++) {
							var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
							thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
						}
					} else {
						// Copy one word at a time
						for (var i = 0; i < thatSigBytes; i += 4) {
							thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
						}
					}
					this.sigBytes += thatSigBytes;
	
					// Chainable
					return this;
				},
	
				/**
	    * Removes insignificant bits.
	    *
	    * @example
	    *
	    *     wordArray.clamp();
	    */
				clamp: function clamp() {
					// Shortcuts
					var words = this.words;
					var sigBytes = this.sigBytes;
	
					// Clamp
					words[sigBytes >>> 2] &= 0xffffffff << 32 - sigBytes % 4 * 8;
					words.length = Math.ceil(sigBytes / 4);
				},
	
				/**
	    * Creates a copy of this word array.
	    *
	    * @return {WordArray} The clone.
	    *
	    * @example
	    *
	    *     var clone = wordArray.clone();
	    */
				clone: function clone() {
					var clone = Base.clone.call(this);
					clone.words = this.words.slice(0);
	
					return clone;
				},
	
				/**
	    * Creates a word array filled with random bytes.
	    *
	    * @param {number} nBytes The number of random bytes to generate.
	    *
	    * @return {WordArray} The random word array.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var wordArray = CryptoJS.lib.WordArray.random(16);
	    */
				random: function random(nBytes) {
					var words = [];
	
					var r = function r(m_w) {
						var m_w = m_w;
						var m_z = 0x3ade68b1;
						var mask = 0xffffffff;
	
						return function () {
							m_z = 0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10) & mask;
							m_w = 0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10) & mask;
							var result = (m_z << 0x10) + m_w & mask;
							result /= 0x100000000;
							result += 0.5;
							return result * (Math.random() > .5 ? 1 : -1);
						};
					};
	
					for (var i = 0, rcache; i < nBytes; i += 4) {
						var _r = r((rcache || Math.random()) * 0x100000000);
	
						rcache = _r() * 0x3ade67b7;
						words.push(_r() * 0x100000000 | 0);
					}
	
					return new WordArray.init(words, nBytes);
				}
			});
	
			/**
	   * Encoder namespace.
	   */
			var C_enc = C.enc = {};
	
			/**
	   * Hex encoding strategy.
	   */
			var Hex = C_enc.Hex = {
				/**
	    * Converts a word array to a hex string.
	    *
	    * @param {WordArray} wordArray The word array.
	    *
	    * @return {string} The hex string.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	    */
				stringify: function stringify(wordArray) {
					// Shortcuts
					var words = wordArray.words;
					var sigBytes = wordArray.sigBytes;
	
					// Convert
					var hexChars = [];
					for (var i = 0; i < sigBytes; i++) {
						var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
						hexChars.push((bite >>> 4).toString(16));
						hexChars.push((bite & 0x0f).toString(16));
					}
	
					return hexChars.join('');
				},
	
				/**
	    * Converts a hex string to a word array.
	    *
	    * @param {string} hexStr The hex string.
	    *
	    * @return {WordArray} The word array.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	    */
				parse: function parse(hexStr) {
					// Shortcut
					var hexStrLength = hexStr.length;
	
					// Convert
					var words = [];
					for (var i = 0; i < hexStrLength; i += 2) {
						words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
					}
	
					return new WordArray.init(words, hexStrLength / 2);
				}
			};
	
			/**
	   * Latin1 encoding strategy.
	   */
			var Latin1 = C_enc.Latin1 = {
				/**
	    * Converts a word array to a Latin1 string.
	    *
	    * @param {WordArray} wordArray The word array.
	    *
	    * @return {string} The Latin1 string.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	    */
				stringify: function stringify(wordArray) {
					// Shortcuts
					var words = wordArray.words;
					var sigBytes = wordArray.sigBytes;
	
					// Convert
					var latin1Chars = [];
					for (var i = 0; i < sigBytes; i++) {
						var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
						latin1Chars.push(String.fromCharCode(bite));
					}
	
					return latin1Chars.join('');
				},
	
				/**
	    * Converts a Latin1 string to a word array.
	    *
	    * @param {string} latin1Str The Latin1 string.
	    *
	    * @return {WordArray} The word array.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	    */
				parse: function parse(latin1Str) {
					// Shortcut
					var latin1StrLength = latin1Str.length;
	
					// Convert
					var words = [];
					for (var i = 0; i < latin1StrLength; i++) {
						words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << 24 - i % 4 * 8;
					}
	
					return new WordArray.init(words, latin1StrLength);
				}
			};
	
			/**
	   * UTF-8 encoding strategy.
	   */
			var Utf8 = C_enc.Utf8 = {
				/**
	    * Converts a word array to a UTF-8 string.
	    *
	    * @param {WordArray} wordArray The word array.
	    *
	    * @return {string} The UTF-8 string.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	    */
				stringify: function stringify(wordArray) {
					try {
						return decodeURIComponent(escape(Latin1.stringify(wordArray)));
					} catch (e) {
						throw new Error('Malformed UTF-8 data');
					}
				},
	
				/**
	    * Converts a UTF-8 string to a word array.
	    *
	    * @param {string} utf8Str The UTF-8 string.
	    *
	    * @return {WordArray} The word array.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	    */
				parse: function parse(utf8Str) {
					return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
				}
			};
	
			/**
	   * Abstract buffered block algorithm template.
	   *
	   * The property blockSize must be implemented in a concrete subtype.
	   *
	   * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	   */
			var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
				/**
	    * Resets this block algorithm's data buffer to its initial state.
	    *
	    * @example
	    *
	    *     bufferedBlockAlgorithm.reset();
	    */
				reset: function reset() {
					// Initial values
					this._data = new WordArray.init();
					this._nDataBytes = 0;
				},
	
				/**
	    * Adds new data to this block algorithm's buffer.
	    *
	    * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	    *
	    * @example
	    *
	    *     bufferedBlockAlgorithm._append('data');
	    *     bufferedBlockAlgorithm._append(wordArray);
	    */
				_append: function _append(data) {
					// Convert string to WordArray, else assume WordArray already
					if (typeof data == 'string') {
						data = Utf8.parse(data);
					}
	
					// Append
					this._data.concat(data);
					this._nDataBytes += data.sigBytes;
				},
	
				/**
	    * Processes available data blocks.
	    *
	    * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	    *
	    * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	    *
	    * @return {WordArray} The processed data.
	    *
	    * @example
	    *
	    *     var processedData = bufferedBlockAlgorithm._process();
	    *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	    */
				_process: function _process(doFlush) {
					// Shortcuts
					var data = this._data;
					var dataWords = data.words;
					var dataSigBytes = data.sigBytes;
					var blockSize = this.blockSize;
					var blockSizeBytes = blockSize * 4;
	
					// Count blocks ready
					var nBlocksReady = dataSigBytes / blockSizeBytes;
					if (doFlush) {
						// Round up to include partial blocks
						nBlocksReady = Math.ceil(nBlocksReady);
					} else {
						// Round down to include only full blocks,
						// less the number of blocks that must remain in the buffer
						nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
					}
	
					// Count words ready
					var nWordsReady = nBlocksReady * blockSize;
	
					// Count bytes ready
					var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
	
					// Process blocks
					if (nWordsReady) {
						for (var offset = 0; offset < nWordsReady; offset += blockSize) {
							// Perform concrete-algorithm logic
							this._doProcessBlock(dataWords, offset);
						}
	
						// Remove processed words
						var processedWords = dataWords.splice(0, nWordsReady);
						data.sigBytes -= nBytesReady;
					}
	
					// Return processed words
					return new WordArray.init(processedWords, nBytesReady);
				},
	
				/**
	    * Creates a copy of this object.
	    *
	    * @return {Object} The clone.
	    *
	    * @example
	    *
	    *     var clone = bufferedBlockAlgorithm.clone();
	    */
				clone: function clone() {
					var clone = Base.clone.call(this);
					clone._data = this._data.clone();
	
					return clone;
				},
	
				_minBufferSize: 0
			});
	
			/**
	   * Abstract hasher template.
	   *
	   * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	   */
			var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
				/**
	    * Configuration options.
	    */
				cfg: Base.extend(),
	
				/**
	    * Initializes a newly created hasher.
	    *
	    * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	    *
	    * @example
	    *
	    *     var hasher = CryptoJS.algo.SHA256.create();
	    */
				init: function init(cfg) {
					// Apply config defaults
					this.cfg = this.cfg.extend(cfg);
	
					// Set initial values
					this.reset();
				},
	
				/**
	    * Resets this hasher to its initial state.
	    *
	    * @example
	    *
	    *     hasher.reset();
	    */
				reset: function reset() {
					// Reset data buffer
					BufferedBlockAlgorithm.reset.call(this);
	
					// Perform concrete-hasher logic
					this._doReset();
				},
	
				/**
	    * Updates this hasher with a message.
	    *
	    * @param {WordArray|string} messageUpdate The message to append.
	    *
	    * @return {Hasher} This hasher.
	    *
	    * @example
	    *
	    *     hasher.update('message');
	    *     hasher.update(wordArray);
	    */
				update: function update(messageUpdate) {
					// Append
					this._append(messageUpdate);
	
					// Update the hash
					this._process();
	
					// Chainable
					return this;
				},
	
				/**
	    * Finalizes the hash computation.
	    * Note that the finalize operation is effectively a destructive, read-once operation.
	    *
	    * @param {WordArray|string} messageUpdate (Optional) A final message update.
	    *
	    * @return {WordArray} The hash.
	    *
	    * @example
	    *
	    *     var hash = hasher.finalize();
	    *     var hash = hasher.finalize('message');
	    *     var hash = hasher.finalize(wordArray);
	    */
				finalize: function finalize(messageUpdate) {
					// Final message update
					if (messageUpdate) {
						this._append(messageUpdate);
					}
	
					// Perform concrete-hasher logic
					var hash = this._doFinalize();
	
					return hash;
				},
	
				blockSize: 512 / 32,
	
				/**
	    * Creates a shortcut function to a hasher's object interface.
	    *
	    * @param {Hasher} hasher The hasher to create a helper for.
	    *
	    * @return {Function} The shortcut function.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	    */
				_createHelper: function _createHelper(hasher) {
					return function (message, cfg) {
						return new hasher.init(cfg).finalize(message);
					};
				},
	
				/**
	    * Creates a shortcut function to the HMAC's object interface.
	    *
	    * @param {Hasher} hasher The hasher to use in this HMAC helper.
	    *
	    * @return {Function} The shortcut function.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	    */
				_createHmacHelper: function _createHmacHelper(hasher) {
					return function (message, key) {
						return new C_algo.HMAC.init(hasher, key).finalize(message);
					};
				}
			});
	
			/**
	   * Algorithm namespace.
	   */
			var C_algo = C.algo = {};
	
			return C;
		}(Math);
	
		return CryptoJS;
	});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	;(function (root, factory) {
		if (( false ? "undefined" : _typeof(exports)) === "object") {
			// CommonJS
			module.exports = exports = factory(__webpack_require__(14));
		} else if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Global (browser)
			factory(root.CryptoJS);
		}
	})(undefined, function (CryptoJS) {
	
		(function () {
			// Shortcuts
			var C = CryptoJS;
			var C_lib = C.lib;
			var WordArray = C_lib.WordArray;
			var C_enc = C.enc;
	
			/**
	   * Base64 encoding strategy.
	   */
			var Base64 = C_enc.Base64 = {
				/**
	    * Converts a word array to a Base64 string.
	    *
	    * @param {WordArray} wordArray The word array.
	    *
	    * @return {string} The Base64 string.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	    */
				stringify: function stringify(wordArray) {
					// Shortcuts
					var words = wordArray.words;
					var sigBytes = wordArray.sigBytes;
					var map = this._map;
	
					// Clamp excess bits
					wordArray.clamp();
	
					// Convert
					var base64Chars = [];
					for (var i = 0; i < sigBytes; i += 3) {
						var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
						var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
						var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
	
						var triplet = byte1 << 16 | byte2 << 8 | byte3;
	
						for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
							base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
						}
					}
	
					// Add padding
					var paddingChar = map.charAt(64);
					if (paddingChar) {
						while (base64Chars.length % 4) {
							base64Chars.push(paddingChar);
						}
					}
	
					return base64Chars.join('');
				},
	
				/**
	    * Converts a Base64 string to a word array.
	    *
	    * @param {string} base64Str The Base64 string.
	    *
	    * @return {WordArray} The word array.
	    *
	    * @static
	    *
	    * @example
	    *
	    *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	    */
				parse: function parse(base64Str) {
					// Shortcuts
					var base64StrLength = base64Str.length;
					var map = this._map;
					var reverseMap = this._reverseMap;
	
					if (!reverseMap) {
						reverseMap = this._reverseMap = [];
						for (var j = 0; j < map.length; j++) {
							reverseMap[map.charCodeAt(j)] = j;
						}
					}
	
					// Ignore padding
					var paddingChar = map.charAt(64);
					if (paddingChar) {
						var paddingIndex = base64Str.indexOf(paddingChar);
						if (paddingIndex !== -1) {
							base64StrLength = paddingIndex;
						}
					}
	
					// Convert
					return parseLoop(base64Str, base64StrLength, reverseMap);
				},
	
				_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
			};
	
			function parseLoop(base64Str, base64StrLength, reverseMap) {
				var words = [];
				var nBytes = 0;
				for (var i = 0; i < base64StrLength; i++) {
					if (i % 4) {
						var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
						var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
						words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
						nBytes++;
					}
				}
				return WordArray.create(words, nBytes);
			}
		})();
	
		return CryptoJS.enc.Base64;
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	;(function (root, factory) {
		if (( false ? "undefined" : _typeof(exports)) === "object") {
			// CommonJS
			module.exports = exports = factory(__webpack_require__(14));
		} else if (true) {
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Global (browser)
			factory(root.CryptoJS);
		}
	})(undefined, function (CryptoJS) {
	
		return CryptoJS.enc.Hex;
	});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	Based on the work of Tom Wu
	http://www-cs-students.stanford.edu/~tjw/jsbn/
	http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
	*/
	
	var BigInteger = __webpack_require__(18).BigInteger;
	var SHA256 = __webpack_require__(13);
	
	var DigestInfoHead = {
	  sha1: '3021300906052b0e03021a05000414',
	  sha224: '302d300d06096086480165030402040500041c',
	  sha256: '3031300d060960864801650304020105000420',
	  sha384: '3041300d060960864801650304020205000430',
	  sha512: '3051300d060960864801650304020305000440',
	  md2: '3020300c06082a864886f70d020205000410',
	  md5: '3020300c06082a864886f70d020505000410',
	  ripemd160: '3021300906052b2403020105000414'
	};
	
	var DigestAlgs = {
	  sha256: SHA256
	};
	
	function RSAVerifier(modulus, exp) {
	  this.n = null;
	  this.e = 0;
	
	  if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
	    this.n = new BigInteger(modulus, 16);
	    this.e = parseInt(exp, 16);
	  } else {
	    throw new Error('Invalid key data');
	  }
	}
	
	function getAlgorithmFromDigest(hDigestInfo) {
	  for (var algName in DigestInfoHead) {
	    var head = DigestInfoHead[algName];
	    var len = head.length;
	
	    if (hDigestInfo.substring(0, len) === head) {
	      return {
	        alg: algName,
	        hash: hDigestInfo.substring(len)
	      };
	    }
	  }
	  return [];
	}
	
	RSAVerifier.prototype.verify = function (msg, encsig) {
	  encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');
	
	  var sig = new BigInteger(encsig, 16);
	  if (sig.bitLength() > this.n.bitLength()) {
	    throw new Error('Signature does not match with the key modulus.');
	  }
	
	  var decryptedSig = sig.modPowInt(this.e, this.n);
	  var digest = decryptedSig.toString(16).replace(/^1f+00/, '');
	
	  var digestInfo = getAlgorithmFromDigest(digest);
	  if (digestInfo.length === 0) {
	    return false;
	  }
	
	  if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
	    throw new Error('Hashing algorithm is not supported.');
	  }
	
	  var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
	  return digestInfo.hash === msgHash;
	};
	
	module.exports = RSAVerifier;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	(function () {
	
	  // Copyright (c) 2005  Tom Wu
	  // All Rights Reserved.
	  // See "LICENSE" for details.
	
	  // Basic JavaScript BN library - subset useful for RSA encryption.
	
	  // Bits per digit
	  var dbits;
	
	  // JavaScript engine analysis
	  var canary = 0xdeadbeefcafe;
	  var j_lm = (canary & 0xffffff) == 0xefcafe;
	
	  // (public) Constructor
	  function BigInteger(a, b, c) {
	    if (a != null) if ("number" == typeof a) this.fromNumber(a, b, c);else if (b == null && "string" != typeof a) this.fromString(a, 256);else this.fromString(a, b);
	  }
	
	  // return new, unset BigInteger
	  function nbi() {
	    return new BigInteger(null);
	  }
	
	  // am: Compute w_j += (x*this_i), propagate carries,
	  // c is initial carry, returns final carry.
	  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
	  // We need to select the fastest one that works in this environment.
	
	  // am1: use a single mult and divide to get the high bits,
	  // max digit bits should be 26 because
	  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
	  function am1(i, x, w, j, c, n) {
	    while (--n >= 0) {
	      var v = x * this[i++] + w[j] + c;
	      c = Math.floor(v / 0x4000000);
	      w[j++] = v & 0x3ffffff;
	    }
	    return c;
	  }
	  // am2 avoids a big mult-and-extract completely.
	  // Max digit bits should be <= 30 because we do bitwise ops
	  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
	  function am2(i, x, w, j, c, n) {
	    var xl = x & 0x7fff,
	        xh = x >> 15;
	    while (--n >= 0) {
	      var l = this[i] & 0x7fff;
	      var h = this[i++] >> 15;
	      var m = xh * l + h * xl;
	      l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
	      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
	      w[j++] = l & 0x3fffffff;
	    }
	    return c;
	  }
	  // Alternately, set max digit bits to 28 since some
	  // browsers slow down when dealing with 32-bit numbers.
	  function am3(i, x, w, j, c, n) {
	    var xl = x & 0x3fff,
	        xh = x >> 14;
	    while (--n >= 0) {
	      var l = this[i] & 0x3fff;
	      var h = this[i++] >> 14;
	      var m = xh * l + h * xl;
	      l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
	      c = (l >> 28) + (m >> 14) + xh * h;
	      w[j++] = l & 0xfffffff;
	    }
	    return c;
	  }
	  var inBrowser = typeof navigator !== "undefined";
	  if (inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer") {
	    BigInteger.prototype.am = am2;
	    dbits = 30;
	  } else if (inBrowser && j_lm && navigator.appName != "Netscape") {
	    BigInteger.prototype.am = am1;
	    dbits = 26;
	  } else {
	    // Mozilla/Netscape seems to prefer am3
	    BigInteger.prototype.am = am3;
	    dbits = 28;
	  }
	
	  BigInteger.prototype.DB = dbits;
	  BigInteger.prototype.DM = (1 << dbits) - 1;
	  BigInteger.prototype.DV = 1 << dbits;
	
	  var BI_FP = 52;
	  BigInteger.prototype.FV = Math.pow(2, BI_FP);
	  BigInteger.prototype.F1 = BI_FP - dbits;
	  BigInteger.prototype.F2 = 2 * dbits - BI_FP;
	
	  // Digit conversions
	  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	  var BI_RC = new Array();
	  var rr, vv;
	  rr = "0".charCodeAt(0);
	  for (vv = 0; vv <= 9; ++vv) {
	    BI_RC[rr++] = vv;
	  }rr = "a".charCodeAt(0);
	  for (vv = 10; vv < 36; ++vv) {
	    BI_RC[rr++] = vv;
	  }rr = "A".charCodeAt(0);
	  for (vv = 10; vv < 36; ++vv) {
	    BI_RC[rr++] = vv;
	  }function int2char(n) {
	    return BI_RM.charAt(n);
	  }
	  function intAt(s, i) {
	    var c = BI_RC[s.charCodeAt(i)];
	    return c == null ? -1 : c;
	  }
	
	  // (protected) copy this to r
	  function bnpCopyTo(r) {
	    for (var i = this.t - 1; i >= 0; --i) {
	      r[i] = this[i];
	    }r.t = this.t;
	    r.s = this.s;
	  }
	
	  // (protected) set from integer value x, -DV <= x < DV
	  function bnpFromInt(x) {
	    this.t = 1;
	    this.s = x < 0 ? -1 : 0;
	    if (x > 0) this[0] = x;else if (x < -1) this[0] = x + this.DV;else this.t = 0;
	  }
	
	  // return bigint initialized to value
	  function nbv(i) {
	    var r = nbi();r.fromInt(i);return r;
	  }
	
	  // (protected) set from string and radix
	  function bnpFromString(s, b) {
	    var k;
	    if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 256) k = 8; // byte array
	    else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else {
	        this.fromRadix(s, b);return;
	      }
	    this.t = 0;
	    this.s = 0;
	    var i = s.length,
	        mi = false,
	        sh = 0;
	    while (--i >= 0) {
	      var x = k == 8 ? s[i] & 0xff : intAt(s, i);
	      if (x < 0) {
	        if (s.charAt(i) == "-") mi = true;
	        continue;
	      }
	      mi = false;
	      if (sh == 0) this[this.t++] = x;else if (sh + k > this.DB) {
	        this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
	        this[this.t++] = x >> this.DB - sh;
	      } else this[this.t - 1] |= x << sh;
	      sh += k;
	      if (sh >= this.DB) sh -= this.DB;
	    }
	    if (k == 8 && (s[0] & 0x80) != 0) {
	      this.s = -1;
	      if (sh > 0) this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
	    }
	    this.clamp();
	    if (mi) BigInteger.ZERO.subTo(this, this);
	  }
	
	  // (protected) clamp off excess high words
	  function bnpClamp() {
	    var c = this.s & this.DM;
	    while (this.t > 0 && this[this.t - 1] == c) {
	      --this.t;
	    }
	  }
	
	  // (public) return string representation in given radix
	  function bnToString(b) {
	    if (this.s < 0) return "-" + this.negate().toString(b);
	    var k;
	    if (b == 16) k = 4;else if (b == 8) k = 3;else if (b == 2) k = 1;else if (b == 32) k = 5;else if (b == 4) k = 2;else return this.toRadix(b);
	    var km = (1 << k) - 1,
	        d,
	        m = false,
	        r = "",
	        i = this.t;
	    var p = this.DB - i * this.DB % k;
	    if (i-- > 0) {
	      if (p < this.DB && (d = this[i] >> p) > 0) {
	        m = true;r = int2char(d);
	      }
	      while (i >= 0) {
	        if (p < k) {
	          d = (this[i] & (1 << p) - 1) << k - p;
	          d |= this[--i] >> (p += this.DB - k);
	        } else {
	          d = this[i] >> (p -= k) & km;
	          if (p <= 0) {
	            p += this.DB;--i;
	          }
	        }
	        if (d > 0) m = true;
	        if (m) r += int2char(d);
	      }
	    }
	    return m ? r : "0";
	  }
	
	  // (public) -this
	  function bnNegate() {
	    var r = nbi();BigInteger.ZERO.subTo(this, r);return r;
	  }
	
	  // (public) |this|
	  function bnAbs() {
	    return this.s < 0 ? this.negate() : this;
	  }
	
	  // (public) return + if this > a, - if this < a, 0 if equal
	  function bnCompareTo(a) {
	    var r = this.s - a.s;
	    if (r != 0) return r;
	    var i = this.t;
	    r = i - a.t;
	    if (r != 0) return this.s < 0 ? -r : r;
	    while (--i >= 0) {
	      if ((r = this[i] - a[i]) != 0) return r;
	    }return 0;
	  }
	
	  // returns bit length of the integer x
	  function nbits(x) {
	    var r = 1,
	        t;
	    if ((t = x >>> 16) != 0) {
	      x = t;r += 16;
	    }
	    if ((t = x >> 8) != 0) {
	      x = t;r += 8;
	    }
	    if ((t = x >> 4) != 0) {
	      x = t;r += 4;
	    }
	    if ((t = x >> 2) != 0) {
	      x = t;r += 2;
	    }
	    if ((t = x >> 1) != 0) {
	      x = t;r += 1;
	    }
	    return r;
	  }
	
	  // (public) return the number of bits in "this"
	  function bnBitLength() {
	    if (this.t <= 0) return 0;
	    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
	  }
	
	  // (protected) r = this << n*DB
	  function bnpDLShiftTo(n, r) {
	    var i;
	    for (i = this.t - 1; i >= 0; --i) {
	      r[i + n] = this[i];
	    }for (i = n - 1; i >= 0; --i) {
	      r[i] = 0;
	    }r.t = this.t + n;
	    r.s = this.s;
	  }
	
	  // (protected) r = this >> n*DB
	  function bnpDRShiftTo(n, r) {
	    for (var i = n; i < this.t; ++i) {
	      r[i - n] = this[i];
	    }r.t = Math.max(this.t - n, 0);
	    r.s = this.s;
	  }
	
	  // (protected) r = this << n
	  function bnpLShiftTo(n, r) {
	    var bs = n % this.DB;
	    var cbs = this.DB - bs;
	    var bm = (1 << cbs) - 1;
	    var ds = Math.floor(n / this.DB),
	        c = this.s << bs & this.DM,
	        i;
	    for (i = this.t - 1; i >= 0; --i) {
	      r[i + ds + 1] = this[i] >> cbs | c;
	      c = (this[i] & bm) << bs;
	    }
	    for (i = ds - 1; i >= 0; --i) {
	      r[i] = 0;
	    }r[ds] = c;
	    r.t = this.t + ds + 1;
	    r.s = this.s;
	    r.clamp();
	  }
	
	  // (protected) r = this >> n
	  function bnpRShiftTo(n, r) {
	    r.s = this.s;
	    var ds = Math.floor(n / this.DB);
	    if (ds >= this.t) {
	      r.t = 0;return;
	    }
	    var bs = n % this.DB;
	    var cbs = this.DB - bs;
	    var bm = (1 << bs) - 1;
	    r[0] = this[ds] >> bs;
	    for (var i = ds + 1; i < this.t; ++i) {
	      r[i - ds - 1] |= (this[i] & bm) << cbs;
	      r[i - ds] = this[i] >> bs;
	    }
	    if (bs > 0) r[this.t - ds - 1] |= (this.s & bm) << cbs;
	    r.t = this.t - ds;
	    r.clamp();
	  }
	
	  // (protected) r = this - a
	  function bnpSubTo(a, r) {
	    var i = 0,
	        c = 0,
	        m = Math.min(a.t, this.t);
	    while (i < m) {
	      c += this[i] - a[i];
	      r[i++] = c & this.DM;
	      c >>= this.DB;
	    }
	    if (a.t < this.t) {
	      c -= a.s;
	      while (i < this.t) {
	        c += this[i];
	        r[i++] = c & this.DM;
	        c >>= this.DB;
	      }
	      c += this.s;
	    } else {
	      c += this.s;
	      while (i < a.t) {
	        c -= a[i];
	        r[i++] = c & this.DM;
	        c >>= this.DB;
	      }
	      c -= a.s;
	    }
	    r.s = c < 0 ? -1 : 0;
	    if (c < -1) r[i++] = this.DV + c;else if (c > 0) r[i++] = c;
	    r.t = i;
	    r.clamp();
	  }
	
	  // (protected) r = this * a, r != this,a (HAC 14.12)
	  // "this" should be the larger one if appropriate.
	  function bnpMultiplyTo(a, r) {
	    var x = this.abs(),
	        y = a.abs();
	    var i = x.t;
	    r.t = i + y.t;
	    while (--i >= 0) {
	      r[i] = 0;
	    }for (i = 0; i < y.t; ++i) {
	      r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
	    }r.s = 0;
	    r.clamp();
	    if (this.s != a.s) BigInteger.ZERO.subTo(r, r);
	  }
	
	  // (protected) r = this^2, r != this (HAC 14.16)
	  function bnpSquareTo(r) {
	    var x = this.abs();
	    var i = r.t = 2 * x.t;
	    while (--i >= 0) {
	      r[i] = 0;
	    }for (i = 0; i < x.t - 1; ++i) {
	      var c = x.am(i, x[i], r, 2 * i, 0, 1);
	      if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
	        r[i + x.t] -= x.DV;
	        r[i + x.t + 1] = 1;
	      }
	    }
	    if (r.t > 0) r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
	    r.s = 0;
	    r.clamp();
	  }
	
	  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
	  // r != q, this != m.  q or r may be null.
	  function bnpDivRemTo(m, q, r) {
	    var pm = m.abs();
	    if (pm.t <= 0) return;
	    var pt = this.abs();
	    if (pt.t < pm.t) {
	      if (q != null) q.fromInt(0);
	      if (r != null) this.copyTo(r);
	      return;
	    }
	    if (r == null) r = nbi();
	    var y = nbi(),
	        ts = this.s,
	        ms = m.s;
	    var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
	    if (nsh > 0) {
	      pm.lShiftTo(nsh, y);pt.lShiftTo(nsh, r);
	    } else {
	      pm.copyTo(y);pt.copyTo(r);
	    }
	    var ys = y.t;
	    var y0 = y[ys - 1];
	    if (y0 == 0) return;
	    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
	    var d1 = this.FV / yt,
	        d2 = (1 << this.F1) / yt,
	        e = 1 << this.F2;
	    var i = r.t,
	        j = i - ys,
	        t = q == null ? nbi() : q;
	    y.dlShiftTo(j, t);
	    if (r.compareTo(t) >= 0) {
	      r[r.t++] = 1;
	      r.subTo(t, r);
	    }
	    BigInteger.ONE.dlShiftTo(ys, t);
	    t.subTo(y, y); // "negative" y so we can replace sub with am later
	    while (y.t < ys) {
	      y[y.t++] = 0;
	    }while (--j >= 0) {
	      // Estimate quotient digit
	      var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
	      if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
	        // Try it out
	        y.dlShiftTo(j, t);
	        r.subTo(t, r);
	        while (r[i] < --qd) {
	          r.subTo(t, r);
	        }
	      }
	    }
	    if (q != null) {
	      r.drShiftTo(ys, q);
	      if (ts != ms) BigInteger.ZERO.subTo(q, q);
	    }
	    r.t = ys;
	    r.clamp();
	    if (nsh > 0) r.rShiftTo(nsh, r); // Denormalize remainder
	    if (ts < 0) BigInteger.ZERO.subTo(r, r);
	  }
	
	  // (public) this mod a
	  function bnMod(a) {
	    var r = nbi();
	    this.abs().divRemTo(a, null, r);
	    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r, r);
	    return r;
	  }
	
	  // Modular reduction using "classic" algorithm
	  function Classic(m) {
	    this.m = m;
	  }
	  function cConvert(x) {
	    if (x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);else return x;
	  }
	  function cRevert(x) {
	    return x;
	  }
	  function cReduce(x) {
	    x.divRemTo(this.m, null, x);
	  }
	  function cMulTo(x, y, r) {
	    x.multiplyTo(y, r);this.reduce(r);
	  }
	  function cSqrTo(x, r) {
	    x.squareTo(r);this.reduce(r);
	  }
	
	  Classic.prototype.convert = cConvert;
	  Classic.prototype.revert = cRevert;
	  Classic.prototype.reduce = cReduce;
	  Classic.prototype.mulTo = cMulTo;
	  Classic.prototype.sqrTo = cSqrTo;
	
	  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
	  // justification:
	  //         xy == 1 (mod m)
	  //         xy =  1+km
	  //   xy(2-xy) = (1+km)(1-km)
	  // x[y(2-xy)] = 1-k^2m^2
	  // x[y(2-xy)] == 1 (mod m^2)
	  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
	  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
	  // JS multiply "overflows" differently from C/C++, so care is needed here.
	  function bnpInvDigit() {
	    if (this.t < 1) return 0;
	    var x = this[0];
	    if ((x & 1) == 0) return 0;
	    var y = x & 3; // y == 1/x mod 2^2
	    y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4
	    y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8
	    y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
	    // last step - calculate inverse mod DV directly;
	    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
	    y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
	    // we really want the negative inverse, and -DV < y < DV
	    return y > 0 ? this.DV - y : -y;
	  }
	
	  // Montgomery reduction
	  function Montgomery(m) {
	    this.m = m;
	    this.mp = m.invDigit();
	    this.mpl = this.mp & 0x7fff;
	    this.mph = this.mp >> 15;
	    this.um = (1 << m.DB - 15) - 1;
	    this.mt2 = 2 * m.t;
	  }
	
	  // xR mod m
	  function montConvert(x) {
	    var r = nbi();
	    x.abs().dlShiftTo(this.m.t, r);
	    r.divRemTo(this.m, null, r);
	    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r, r);
	    return r;
	  }
	
	  // x/R mod m
	  function montRevert(x) {
	    var r = nbi();
	    x.copyTo(r);
	    this.reduce(r);
	    return r;
	  }
	
	  // x = x/R mod m (HAC 14.32)
	  function montReduce(x) {
	    while (x.t <= this.mt2) {
	      // pad x so am has enough room later
	      x[x.t++] = 0;
	    }for (var i = 0; i < this.m.t; ++i) {
	      // faster way of calculating u0 = x[i]*mp mod DV
	      var j = x[i] & 0x7fff;
	      var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
	      // use am to combine the multiply-shift-add into one call
	      j = i + this.m.t;
	      x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
	      // propagate carry
	      while (x[j] >= x.DV) {
	        x[j] -= x.DV;x[++j]++;
	      }
	    }
	    x.clamp();
	    x.drShiftTo(this.m.t, x);
	    if (x.compareTo(this.m) >= 0) x.subTo(this.m, x);
	  }
	
	  // r = "x^2/R mod m"; x != r
	  function montSqrTo(x, r) {
	    x.squareTo(r);this.reduce(r);
	  }
	
	  // r = "xy/R mod m"; x,y != r
	  function montMulTo(x, y, r) {
	    x.multiplyTo(y, r);this.reduce(r);
	  }
	
	  Montgomery.prototype.convert = montConvert;
	  Montgomery.prototype.revert = montRevert;
	  Montgomery.prototype.reduce = montReduce;
	  Montgomery.prototype.mulTo = montMulTo;
	  Montgomery.prototype.sqrTo = montSqrTo;
	
	  // (protected) true iff this is even
	  function bnpIsEven() {
	    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
	  }
	
	  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
	  function bnpExp(e, z) {
	    if (e > 0xffffffff || e < 1) return BigInteger.ONE;
	    var r = nbi(),
	        r2 = nbi(),
	        g = z.convert(this),
	        i = nbits(e) - 1;
	    g.copyTo(r);
	    while (--i >= 0) {
	      z.sqrTo(r, r2);
	      if ((e & 1 << i) > 0) z.mulTo(r2, g, r);else {
	        var t = r;r = r2;r2 = t;
	      }
	    }
	    return z.revert(r);
	  }
	
	  // (public) this^e % m, 0 <= e < 2^32
	  function bnModPowInt(e, m) {
	    var z;
	    if (e < 256 || m.isEven()) z = new Classic(m);else z = new Montgomery(m);
	    return this.exp(e, z);
	  }
	
	  // protected
	  BigInteger.prototype.copyTo = bnpCopyTo;
	  BigInteger.prototype.fromInt = bnpFromInt;
	  BigInteger.prototype.fromString = bnpFromString;
	  BigInteger.prototype.clamp = bnpClamp;
	  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
	  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
	  BigInteger.prototype.lShiftTo = bnpLShiftTo;
	  BigInteger.prototype.rShiftTo = bnpRShiftTo;
	  BigInteger.prototype.subTo = bnpSubTo;
	  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
	  BigInteger.prototype.squareTo = bnpSquareTo;
	  BigInteger.prototype.divRemTo = bnpDivRemTo;
	  BigInteger.prototype.invDigit = bnpInvDigit;
	  BigInteger.prototype.isEven = bnpIsEven;
	  BigInteger.prototype.exp = bnpExp;
	
	  // public
	  BigInteger.prototype.toString = bnToString;
	  BigInteger.prototype.negate = bnNegate;
	  BigInteger.prototype.abs = bnAbs;
	  BigInteger.prototype.compareTo = bnCompareTo;
	  BigInteger.prototype.bitLength = bnBitLength;
	  BigInteger.prototype.mod = bnMod;
	  BigInteger.prototype.modPowInt = bnModPowInt;
	
	  // "constants"
	  BigInteger.ZERO = nbv(0);
	  BigInteger.ONE = nbv(1);
	
	  // Copyright (c) 2005-2009  Tom Wu
	  // All Rights Reserved.
	  // See "LICENSE" for details.
	
	  // Extended JavaScript BN functions, required for RSA private ops.
	
	  // Version 1.1: new BigInteger("0", 10) returns "proper" zero
	  // Version 1.2: square() API, isProbablePrime fix
	
	  // (public)
	  function bnClone() {
	    var r = nbi();this.copyTo(r);return r;
	  }
	
	  // (public) return value as integer
	  function bnIntValue() {
	    if (this.s < 0) {
	      if (this.t == 1) return this[0] - this.DV;else if (this.t == 0) return -1;
	    } else if (this.t == 1) return this[0];else if (this.t == 0) return 0;
	    // assumes 16 < DB < 32
	    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
	  }
	
	  // (public) return value as byte
	  function bnByteValue() {
	    return this.t == 0 ? this.s : this[0] << 24 >> 24;
	  }
	
	  // (public) return value as short (assumes DB>=16)
	  function bnShortValue() {
	    return this.t == 0 ? this.s : this[0] << 16 >> 16;
	  }
	
	  // (protected) return x s.t. r^x < DV
	  function bnpChunkSize(r) {
	    return Math.floor(Math.LN2 * this.DB / Math.log(r));
	  }
	
	  // (public) 0 if this == 0, 1 if this > 0
	  function bnSigNum() {
	    if (this.s < 0) return -1;else if (this.t <= 0 || this.t == 1 && this[0] <= 0) return 0;else return 1;
	  }
	
	  // (protected) convert to radix string
	  function bnpToRadix(b) {
	    if (b == null) b = 10;
	    if (this.signum() == 0 || b < 2 || b > 36) return "0";
	    var cs = this.chunkSize(b);
	    var a = Math.pow(b, cs);
	    var d = nbv(a),
	        y = nbi(),
	        z = nbi(),
	        r = "";
	    this.divRemTo(d, y, z);
	    while (y.signum() > 0) {
	      r = (a + z.intValue()).toString(b).substr(1) + r;
	      y.divRemTo(d, y, z);
	    }
	    return z.intValue().toString(b) + r;
	  }
	
	  // (protected) convert from radix string
	  function bnpFromRadix(s, b) {
	    this.fromInt(0);
	    if (b == null) b = 10;
	    var cs = this.chunkSize(b);
	    var d = Math.pow(b, cs),
	        mi = false,
	        j = 0,
	        w = 0;
	    for (var i = 0; i < s.length; ++i) {
	      var x = intAt(s, i);
	      if (x < 0) {
	        if (s.charAt(i) == "-" && this.signum() == 0) mi = true;
	        continue;
	      }
	      w = b * w + x;
	      if (++j >= cs) {
	        this.dMultiply(d);
	        this.dAddOffset(w, 0);
	        j = 0;
	        w = 0;
	      }
	    }
	    if (j > 0) {
	      this.dMultiply(Math.pow(b, j));
	      this.dAddOffset(w, 0);
	    }
	    if (mi) BigInteger.ZERO.subTo(this, this);
	  }
	
	  // (protected) alternate constructor
	  function bnpFromNumber(a, b, c) {
	    if ("number" == typeof b) {
	      // new BigInteger(int,int,RNG)
	      if (a < 2) this.fromInt(1);else {
	        this.fromNumber(a, c);
	        if (!this.testBit(a - 1)) // force MSB set
	          this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
	        if (this.isEven()) this.dAddOffset(1, 0); // force odd
	        while (!this.isProbablePrime(b)) {
	          this.dAddOffset(2, 0);
	          if (this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
	        }
	      }
	    } else {
	      // new BigInteger(int,RNG)
	      var x = new Array(),
	          t = a & 7;
	      x.length = (a >> 3) + 1;
	      b.nextBytes(x);
	      if (t > 0) x[0] &= (1 << t) - 1;else x[0] = 0;
	      this.fromString(x, 256);
	    }
	  }
	
	  // (public) convert to bigendian byte array
	  function bnToByteArray() {
	    var i = this.t,
	        r = new Array();
	    r[0] = this.s;
	    var p = this.DB - i * this.DB % 8,
	        d,
	        k = 0;
	    if (i-- > 0) {
	      if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) r[k++] = d | this.s << this.DB - p;
	      while (i >= 0) {
	        if (p < 8) {
	          d = (this[i] & (1 << p) - 1) << 8 - p;
	          d |= this[--i] >> (p += this.DB - 8);
	        } else {
	          d = this[i] >> (p -= 8) & 0xff;
	          if (p <= 0) {
	            p += this.DB;--i;
	          }
	        }
	        if ((d & 0x80) != 0) d |= -256;
	        if (k == 0 && (this.s & 0x80) != (d & 0x80)) ++k;
	        if (k > 0 || d != this.s) r[k++] = d;
	      }
	    }
	    return r;
	  }
	
	  function bnEquals(a) {
	    return this.compareTo(a) == 0;
	  }
	  function bnMin(a) {
	    return this.compareTo(a) < 0 ? this : a;
	  }
	  function bnMax(a) {
	    return this.compareTo(a) > 0 ? this : a;
	  }
	
	  // (protected) r = this op a (bitwise)
	  function bnpBitwiseTo(a, op, r) {
	    var i,
	        f,
	        m = Math.min(a.t, this.t);
	    for (i = 0; i < m; ++i) {
	      r[i] = op(this[i], a[i]);
	    }if (a.t < this.t) {
	      f = a.s & this.DM;
	      for (i = m; i < this.t; ++i) {
	        r[i] = op(this[i], f);
	      }r.t = this.t;
	    } else {
	      f = this.s & this.DM;
	      for (i = m; i < a.t; ++i) {
	        r[i] = op(f, a[i]);
	      }r.t = a.t;
	    }
	    r.s = op(this.s, a.s);
	    r.clamp();
	  }
	
	  // (public) this & a
	  function op_and(x, y) {
	    return x & y;
	  }
	  function bnAnd(a) {
	    var r = nbi();this.bitwiseTo(a, op_and, r);return r;
	  }
	
	  // (public) this | a
	  function op_or(x, y) {
	    return x | y;
	  }
	  function bnOr(a) {
	    var r = nbi();this.bitwiseTo(a, op_or, r);return r;
	  }
	
	  // (public) this ^ a
	  function op_xor(x, y) {
	    return x ^ y;
	  }
	  function bnXor(a) {
	    var r = nbi();this.bitwiseTo(a, op_xor, r);return r;
	  }
	
	  // (public) this & ~a
	  function op_andnot(x, y) {
	    return x & ~y;
	  }
	  function bnAndNot(a) {
	    var r = nbi();this.bitwiseTo(a, op_andnot, r);return r;
	  }
	
	  // (public) ~this
	  function bnNot() {
	    var r = nbi();
	    for (var i = 0; i < this.t; ++i) {
	      r[i] = this.DM & ~this[i];
	    }r.t = this.t;
	    r.s = ~this.s;
	    return r;
	  }
	
	  // (public) this << n
	  function bnShiftLeft(n) {
	    var r = nbi();
	    if (n < 0) this.rShiftTo(-n, r);else this.lShiftTo(n, r);
	    return r;
	  }
	
	  // (public) this >> n
	  function bnShiftRight(n) {
	    var r = nbi();
	    if (n < 0) this.lShiftTo(-n, r);else this.rShiftTo(n, r);
	    return r;
	  }
	
	  // return index of lowest 1-bit in x, x < 2^31
	  function lbit(x) {
	    if (x == 0) return -1;
	    var r = 0;
	    if ((x & 0xffff) == 0) {
	      x >>= 16;r += 16;
	    }
	    if ((x & 0xff) == 0) {
	      x >>= 8;r += 8;
	    }
	    if ((x & 0xf) == 0) {
	      x >>= 4;r += 4;
	    }
	    if ((x & 3) == 0) {
	      x >>= 2;r += 2;
	    }
	    if ((x & 1) == 0) ++r;
	    return r;
	  }
	
	  // (public) returns index of lowest 1-bit (or -1 if none)
	  function bnGetLowestSetBit() {
	    for (var i = 0; i < this.t; ++i) {
	      if (this[i] != 0) return i * this.DB + lbit(this[i]);
	    }if (this.s < 0) return this.t * this.DB;
	    return -1;
	  }
	
	  // return number of 1 bits in x
	  function cbit(x) {
	    var r = 0;
	    while (x != 0) {
	      x &= x - 1;++r;
	    }
	    return r;
	  }
	
	  // (public) return number of set bits
	  function bnBitCount() {
	    var r = 0,
	        x = this.s & this.DM;
	    for (var i = 0; i < this.t; ++i) {
	      r += cbit(this[i] ^ x);
	    }return r;
	  }
	
	  // (public) true iff nth bit is set
	  function bnTestBit(n) {
	    var j = Math.floor(n / this.DB);
	    if (j >= this.t) return this.s != 0;
	    return (this[j] & 1 << n % this.DB) != 0;
	  }
	
	  // (protected) this op (1<<n)
	  function bnpChangeBit(n, op) {
	    var r = BigInteger.ONE.shiftLeft(n);
	    this.bitwiseTo(r, op, r);
	    return r;
	  }
	
	  // (public) this | (1<<n)
	  function bnSetBit(n) {
	    return this.changeBit(n, op_or);
	  }
	
	  // (public) this & ~(1<<n)
	  function bnClearBit(n) {
	    return this.changeBit(n, op_andnot);
	  }
	
	  // (public) this ^ (1<<n)
	  function bnFlipBit(n) {
	    return this.changeBit(n, op_xor);
	  }
	
	  // (protected) r = this + a
	  function bnpAddTo(a, r) {
	    var i = 0,
	        c = 0,
	        m = Math.min(a.t, this.t);
	    while (i < m) {
	      c += this[i] + a[i];
	      r[i++] = c & this.DM;
	      c >>= this.DB;
	    }
	    if (a.t < this.t) {
	      c += a.s;
	      while (i < this.t) {
	        c += this[i];
	        r[i++] = c & this.DM;
	        c >>= this.DB;
	      }
	      c += this.s;
	    } else {
	      c += this.s;
	      while (i < a.t) {
	        c += a[i];
	        r[i++] = c & this.DM;
	        c >>= this.DB;
	      }
	      c += a.s;
	    }
	    r.s = c < 0 ? -1 : 0;
	    if (c > 0) r[i++] = c;else if (c < -1) r[i++] = this.DV + c;
	    r.t = i;
	    r.clamp();
	  }
	
	  // (public) this + a
	  function bnAdd(a) {
	    var r = nbi();this.addTo(a, r);return r;
	  }
	
	  // (public) this - a
	  function bnSubtract(a) {
	    var r = nbi();this.subTo(a, r);return r;
	  }
	
	  // (public) this * a
	  function bnMultiply(a) {
	    var r = nbi();this.multiplyTo(a, r);return r;
	  }
	
	  // (public) this^2
	  function bnSquare() {
	    var r = nbi();this.squareTo(r);return r;
	  }
	
	  // (public) this / a
	  function bnDivide(a) {
	    var r = nbi();this.divRemTo(a, r, null);return r;
	  }
	
	  // (public) this % a
	  function bnRemainder(a) {
	    var r = nbi();this.divRemTo(a, null, r);return r;
	  }
	
	  // (public) [this/a,this%a]
	  function bnDivideAndRemainder(a) {
	    var q = nbi(),
	        r = nbi();
	    this.divRemTo(a, q, r);
	    return new Array(q, r);
	  }
	
	  // (protected) this *= n, this >= 0, 1 < n < DV
	  function bnpDMultiply(n) {
	    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
	    ++this.t;
	    this.clamp();
	  }
	
	  // (protected) this += n << w words, this >= 0
	  function bnpDAddOffset(n, w) {
	    if (n == 0) return;
	    while (this.t <= w) {
	      this[this.t++] = 0;
	    }this[w] += n;
	    while (this[w] >= this.DV) {
	      this[w] -= this.DV;
	      if (++w >= this.t) this[this.t++] = 0;
	      ++this[w];
	    }
	  }
	
	  // A "null" reducer
	  function NullExp() {}
	  function nNop(x) {
	    return x;
	  }
	  function nMulTo(x, y, r) {
	    x.multiplyTo(y, r);
	  }
	  function nSqrTo(x, r) {
	    x.squareTo(r);
	  }
	
	  NullExp.prototype.convert = nNop;
	  NullExp.prototype.revert = nNop;
	  NullExp.prototype.mulTo = nMulTo;
	  NullExp.prototype.sqrTo = nSqrTo;
	
	  // (public) this^e
	  function bnPow(e) {
	    return this.exp(e, new NullExp());
	  }
	
	  // (protected) r = lower n words of "this * a", a.t <= n
	  // "this" should be the larger one if appropriate.
	  function bnpMultiplyLowerTo(a, n, r) {
	    var i = Math.min(this.t + a.t, n);
	    r.s = 0; // assumes a,this >= 0
	    r.t = i;
	    while (i > 0) {
	      r[--i] = 0;
	    }var j;
	    for (j = r.t - this.t; i < j; ++i) {
	      r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
	    }for (j = Math.min(a.t, n); i < j; ++i) {
	      this.am(0, a[i], r, i, 0, n - i);
	    }r.clamp();
	  }
	
	  // (protected) r = "this * a" without lower n words, n > 0
	  // "this" should be the larger one if appropriate.
	  function bnpMultiplyUpperTo(a, n, r) {
	    --n;
	    var i = r.t = this.t + a.t - n;
	    r.s = 0; // assumes a,this >= 0
	    while (--i >= 0) {
	      r[i] = 0;
	    }for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
	      r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
	    }r.clamp();
	    r.drShiftTo(1, r);
	  }
	
	  // Barrett modular reduction
	  function Barrett(m) {
	    // setup Barrett
	    this.r2 = nbi();
	    this.q3 = nbi();
	    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
	    this.mu = this.r2.divide(m);
	    this.m = m;
	  }
	
	  function barrettConvert(x) {
	    if (x.s < 0 || x.t > 2 * this.m.t) return x.mod(this.m);else if (x.compareTo(this.m) < 0) return x;else {
	      var r = nbi();x.copyTo(r);this.reduce(r);return r;
	    }
	  }
	
	  function barrettRevert(x) {
	    return x;
	  }
	
	  // x = x mod m (HAC 14.42)
	  function barrettReduce(x) {
	    x.drShiftTo(this.m.t - 1, this.r2);
	    if (x.t > this.m.t + 1) {
	      x.t = this.m.t + 1;x.clamp();
	    }
	    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
	    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
	    while (x.compareTo(this.r2) < 0) {
	      x.dAddOffset(1, this.m.t + 1);
	    }x.subTo(this.r2, x);
	    while (x.compareTo(this.m) >= 0) {
	      x.subTo(this.m, x);
	    }
	  }
	
	  // r = x^2 mod m; x != r
	  function barrettSqrTo(x, r) {
	    x.squareTo(r);this.reduce(r);
	  }
	
	  // r = x*y mod m; x,y != r
	  function barrettMulTo(x, y, r) {
	    x.multiplyTo(y, r);this.reduce(r);
	  }
	
	  Barrett.prototype.convert = barrettConvert;
	  Barrett.prototype.revert = barrettRevert;
	  Barrett.prototype.reduce = barrettReduce;
	  Barrett.prototype.mulTo = barrettMulTo;
	  Barrett.prototype.sqrTo = barrettSqrTo;
	
	  // (public) this^e % m (HAC 14.85)
	  function bnModPow(e, m) {
	    var i = e.bitLength(),
	        k,
	        r = nbv(1),
	        z;
	    if (i <= 0) return r;else if (i < 18) k = 1;else if (i < 48) k = 3;else if (i < 144) k = 4;else if (i < 768) k = 5;else k = 6;
	    if (i < 8) z = new Classic(m);else if (m.isEven()) z = new Barrett(m);else z = new Montgomery(m);
	
	    // precomputation
	    var g = new Array(),
	        n = 3,
	        k1 = k - 1,
	        km = (1 << k) - 1;
	    g[1] = z.convert(this);
	    if (k > 1) {
	      var g2 = nbi();
	      z.sqrTo(g[1], g2);
	      while (n <= km) {
	        g[n] = nbi();
	        z.mulTo(g2, g[n - 2], g[n]);
	        n += 2;
	      }
	    }
	
	    var j = e.t - 1,
	        w,
	        is1 = true,
	        r2 = nbi(),
	        t;
	    i = nbits(e[j]) - 1;
	    while (j >= 0) {
	      if (i >= k1) w = e[j] >> i - k1 & km;else {
	        w = (e[j] & (1 << i + 1) - 1) << k1 - i;
	        if (j > 0) w |= e[j - 1] >> this.DB + i - k1;
	      }
	
	      n = k;
	      while ((w & 1) == 0) {
	        w >>= 1;--n;
	      }
	      if ((i -= n) < 0) {
	        i += this.DB;--j;
	      }
	      if (is1) {
	        // ret == 1, don't bother squaring or multiplying it
	        g[w].copyTo(r);
	        is1 = false;
	      } else {
	        while (n > 1) {
	          z.sqrTo(r, r2);z.sqrTo(r2, r);n -= 2;
	        }
	        if (n > 0) z.sqrTo(r, r2);else {
	          t = r;r = r2;r2 = t;
	        }
	        z.mulTo(r2, g[w], r);
	      }
	
	      while (j >= 0 && (e[j] & 1 << i) == 0) {
	        z.sqrTo(r, r2);t = r;r = r2;r2 = t;
	        if (--i < 0) {
	          i = this.DB - 1;--j;
	        }
	      }
	    }
	    return z.revert(r);
	  }
	
	  // (public) gcd(this,a) (HAC 14.54)
	  function bnGCD(a) {
	    var x = this.s < 0 ? this.negate() : this.clone();
	    var y = a.s < 0 ? a.negate() : a.clone();
	    if (x.compareTo(y) < 0) {
	      var t = x;x = y;y = t;
	    }
	    var i = x.getLowestSetBit(),
	        g = y.getLowestSetBit();
	    if (g < 0) return x;
	    if (i < g) g = i;
	    if (g > 0) {
	      x.rShiftTo(g, x);
	      y.rShiftTo(g, y);
	    }
	    while (x.signum() > 0) {
	      if ((i = x.getLowestSetBit()) > 0) x.rShiftTo(i, x);
	      if ((i = y.getLowestSetBit()) > 0) y.rShiftTo(i, y);
	      if (x.compareTo(y) >= 0) {
	        x.subTo(y, x);
	        x.rShiftTo(1, x);
	      } else {
	        y.subTo(x, y);
	        y.rShiftTo(1, y);
	      }
	    }
	    if (g > 0) y.lShiftTo(g, y);
	    return y;
	  }
	
	  // (protected) this % n, n < 2^26
	  function bnpModInt(n) {
	    if (n <= 0) return 0;
	    var d = this.DV % n,
	        r = this.s < 0 ? n - 1 : 0;
	    if (this.t > 0) if (d == 0) r = this[0] % n;else for (var i = this.t - 1; i >= 0; --i) {
	      r = (d * r + this[i]) % n;
	    }return r;
	  }
	
	  // (public) 1/this % m (HAC 14.61)
	  function bnModInverse(m) {
	    var ac = m.isEven();
	    if (this.isEven() && ac || m.signum() == 0) return BigInteger.ZERO;
	    var u = m.clone(),
	        v = this.clone();
	    var a = nbv(1),
	        b = nbv(0),
	        c = nbv(0),
	        d = nbv(1);
	    while (u.signum() != 0) {
	      while (u.isEven()) {
	        u.rShiftTo(1, u);
	        if (ac) {
	          if (!a.isEven() || !b.isEven()) {
	            a.addTo(this, a);b.subTo(m, b);
	          }
	          a.rShiftTo(1, a);
	        } else if (!b.isEven()) b.subTo(m, b);
	        b.rShiftTo(1, b);
	      }
	      while (v.isEven()) {
	        v.rShiftTo(1, v);
	        if (ac) {
	          if (!c.isEven() || !d.isEven()) {
	            c.addTo(this, c);d.subTo(m, d);
	          }
	          c.rShiftTo(1, c);
	        } else if (!d.isEven()) d.subTo(m, d);
	        d.rShiftTo(1, d);
	      }
	      if (u.compareTo(v) >= 0) {
	        u.subTo(v, u);
	        if (ac) a.subTo(c, a);
	        b.subTo(d, b);
	      } else {
	        v.subTo(u, v);
	        if (ac) c.subTo(a, c);
	        d.subTo(b, d);
	      }
	    }
	    if (v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
	    if (d.compareTo(m) >= 0) return d.subtract(m);
	    if (d.signum() < 0) d.addTo(m, d);else return d;
	    if (d.signum() < 0) return d.add(m);else return d;
	  }
	
	  var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
	  var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
	
	  // (public) test primality with certainty >= 1-.5^t
	  function bnIsProbablePrime(t) {
	    var i,
	        x = this.abs();
	    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
	      for (i = 0; i < lowprimes.length; ++i) {
	        if (x[0] == lowprimes[i]) return true;
	      }return false;
	    }
	    if (x.isEven()) return false;
	    i = 1;
	    while (i < lowprimes.length) {
	      var m = lowprimes[i],
	          j = i + 1;
	      while (j < lowprimes.length && m < lplim) {
	        m *= lowprimes[j++];
	      }m = x.modInt(m);
	      while (i < j) {
	        if (m % lowprimes[i++] == 0) return false;
	      }
	    }
	    return x.millerRabin(t);
	  }
	
	  // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
	  function bnpMillerRabin(t) {
	    var n1 = this.subtract(BigInteger.ONE);
	    var k = n1.getLowestSetBit();
	    if (k <= 0) return false;
	    var r = n1.shiftRight(k);
	    t = t + 1 >> 1;
	    if (t > lowprimes.length) t = lowprimes.length;
	    var a = nbi();
	    for (var i = 0; i < t; ++i) {
	      //Pick bases at random, instead of starting at 2
	      a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
	      var y = a.modPow(r, this);
	      if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
	        var j = 1;
	        while (j++ < k && y.compareTo(n1) != 0) {
	          y = y.modPowInt(2, this);
	          if (y.compareTo(BigInteger.ONE) == 0) return false;
	        }
	        if (y.compareTo(n1) != 0) return false;
	      }
	    }
	    return true;
	  }
	
	  // protected
	  BigInteger.prototype.chunkSize = bnpChunkSize;
	  BigInteger.prototype.toRadix = bnpToRadix;
	  BigInteger.prototype.fromRadix = bnpFromRadix;
	  BigInteger.prototype.fromNumber = bnpFromNumber;
	  BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
	  BigInteger.prototype.changeBit = bnpChangeBit;
	  BigInteger.prototype.addTo = bnpAddTo;
	  BigInteger.prototype.dMultiply = bnpDMultiply;
	  BigInteger.prototype.dAddOffset = bnpDAddOffset;
	  BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
	  BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
	  BigInteger.prototype.modInt = bnpModInt;
	  BigInteger.prototype.millerRabin = bnpMillerRabin;
	
	  // public
	  BigInteger.prototype.clone = bnClone;
	  BigInteger.prototype.intValue = bnIntValue;
	  BigInteger.prototype.byteValue = bnByteValue;
	  BigInteger.prototype.shortValue = bnShortValue;
	  BigInteger.prototype.signum = bnSigNum;
	  BigInteger.prototype.toByteArray = bnToByteArray;
	  BigInteger.prototype.equals = bnEquals;
	  BigInteger.prototype.min = bnMin;
	  BigInteger.prototype.max = bnMax;
	  BigInteger.prototype.and = bnAnd;
	  BigInteger.prototype.or = bnOr;
	  BigInteger.prototype.xor = bnXor;
	  BigInteger.prototype.andNot = bnAndNot;
	  BigInteger.prototype.not = bnNot;
	  BigInteger.prototype.shiftLeft = bnShiftLeft;
	  BigInteger.prototype.shiftRight = bnShiftRight;
	  BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
	  BigInteger.prototype.bitCount = bnBitCount;
	  BigInteger.prototype.testBit = bnTestBit;
	  BigInteger.prototype.setBit = bnSetBit;
	  BigInteger.prototype.clearBit = bnClearBit;
	  BigInteger.prototype.flipBit = bnFlipBit;
	  BigInteger.prototype.add = bnAdd;
	  BigInteger.prototype.subtract = bnSubtract;
	  BigInteger.prototype.multiply = bnMultiply;
	  BigInteger.prototype.divide = bnDivide;
	  BigInteger.prototype.remainder = bnRemainder;
	  BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
	  BigInteger.prototype.modPow = bnModPow;
	  BigInteger.prototype.modInverse = bnModInverse;
	  BigInteger.prototype.pow = bnPow;
	  BigInteger.prototype.gcd = bnGCD;
	  BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
	
	  // JSBN-specific extension
	  BigInteger.prototype.square = bnSquare;
	
	  // Expose the Barrett function
	  BigInteger.prototype.Barrett = Barrett;
	
	  // BigInteger interfaces not implemented in jsbn:
	
	  // BigInteger(int signum, byte[] magnitude)
	  // double doubleValue()
	  // float floatValue()
	  // int hashCode()
	  // long longValue()
	  // static BigInteger valueOf(long val)
	
	  // Random number generator - requires a PRNG backend, e.g. prng4.js
	
	  // For best results, put code like
	  // <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
	  // in your main HTML document.
	
	  var rng_state;
	  var rng_pool;
	  var rng_pptr;
	
	  // Mix in a 32-bit integer into the pool
	  function rng_seed_int(x) {
	    rng_pool[rng_pptr++] ^= x & 255;
	    rng_pool[rng_pptr++] ^= x >> 8 & 255;
	    rng_pool[rng_pptr++] ^= x >> 16 & 255;
	    rng_pool[rng_pptr++] ^= x >> 24 & 255;
	    if (rng_pptr >= rng_psize) rng_pptr -= rng_psize;
	  }
	
	  // Mix in the current time (w/milliseconds) into the pool
	  function rng_seed_time() {
	    rng_seed_int(new Date().getTime());
	  }
	
	  // Initialize the pool with junk if needed.
	  if (rng_pool == null) {
	    rng_pool = new Array();
	    rng_pptr = 0;
	    var t;
	    if (typeof window !== "undefined" && window.crypto) {
	      if (window.crypto.getRandomValues) {
	        // Use webcrypto if available
	        var ua = new Uint8Array(32);
	        window.crypto.getRandomValues(ua);
	        for (t = 0; t < 32; ++t) {
	          rng_pool[rng_pptr++] = ua[t];
	        }
	      } else if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
	        // Extract entropy (256 bits) from NS4 RNG if available
	        var z = window.crypto.random(32);
	        for (t = 0; t < z.length; ++t) {
	          rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
	        }
	      }
	    }
	    while (rng_pptr < rng_psize) {
	      // extract some randomness from Math.random()
	      t = Math.floor(65536 * Math.random());
	      rng_pool[rng_pptr++] = t >>> 8;
	      rng_pool[rng_pptr++] = t & 255;
	    }
	    rng_pptr = 0;
	    rng_seed_time();
	    //rng_seed_int(window.screenX);
	    //rng_seed_int(window.screenY);
	  }
	
	  function rng_get_byte() {
	    if (rng_state == null) {
	      rng_seed_time();
	      rng_state = prng_newstate();
	      rng_state.init(rng_pool);
	      for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
	        rng_pool[rng_pptr] = 0;
	      }rng_pptr = 0;
	      //rng_pool = null;
	    }
	    // TODO: allow reseeding after first request
	    return rng_state.next();
	  }
	
	  function rng_get_bytes(ba) {
	    var i;
	    for (i = 0; i < ba.length; ++i) {
	      ba[i] = rng_get_byte();
	    }
	  }
	
	  function SecureRandom() {}
	
	  SecureRandom.prototype.nextBytes = rng_get_bytes;
	
	  // prng4.js - uses Arcfour as a PRNG
	
	  function Arcfour() {
	    this.i = 0;
	    this.j = 0;
	    this.S = new Array();
	  }
	
	  // Initialize arcfour context from key, an array of ints, each from [0..255]
	  function ARC4init(key) {
	    var i, j, t;
	    for (i = 0; i < 256; ++i) {
	      this.S[i] = i;
	    }j = 0;
	    for (i = 0; i < 256; ++i) {
	      j = j + this.S[i] + key[i % key.length] & 255;
	      t = this.S[i];
	      this.S[i] = this.S[j];
	      this.S[j] = t;
	    }
	    this.i = 0;
	    this.j = 0;
	  }
	
	  function ARC4next() {
	    var t;
	    this.i = this.i + 1 & 255;
	    this.j = this.j + this.S[this.i] & 255;
	    t = this.S[this.i];
	    this.S[this.i] = this.S[this.j];
	    this.S[this.j] = t;
	    return this.S[t + this.S[this.i] & 255];
	  }
	
	  Arcfour.prototype.init = ARC4init;
	  Arcfour.prototype.next = ARC4next;
	
	  // Plug in your RNG constructor here
	  function prng_newstate() {
	    return new Arcfour();
	  }
	
	  // Pool size must be a multiple of 4 and greater than 32.
	  // An array of bytes the size of the pool will be passed to init()
	  var rng_psize = 256;
	
	  BigInteger.SecureRandom = SecureRandom;
	  BigInteger.BigInteger = BigInteger;
	  if (true) {
	    exports = module.exports = BigInteger;
	  } else {
	    this.BigInteger = BigInteger;
	    this.SecureRandom = SecureRandom;
	  }
	}).call(undefined);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var base64 = __webpack_require__(20);
	
	function padding(str) {
	  var mod = str.length % 4;
	  var pad = 4 - mod;
	
	  if (mod === 0) {
	    return str;
	  }
	
	  return str + new Array(1 + pad).join('=');
	}
	
	function byteArrayToString(array) {
	  var result = "";
	  for (var i = 0; i < array.length; i++) {
	    result += String.fromCharCode(array[i]);
	  }
	  return result;
	}
	
	function stringToByteArray(str) {
	  var arr = new Array(str.length);
	  for (var a = 0; a < str.length; a++) {
	    arr[a] = str.charCodeAt(a);
	  }
	  return arr;
	}
	
	function byteArrayToHex(raw) {
	  var HEX = '';
	
	  for (var i = 0; i < raw.length; i++) {
	    var _hex = raw[i].toString(16);
	    HEX += _hex.length === 2 ? _hex : '0' + _hex;
	  }
	
	  return HEX;
	}
	
	function encodeString(str) {
	  return base64.fromByteArray(stringToByteArray(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
	    return String.fromCharCode('0x' + p1);
	  }))).replace(/\+/g, '-') // Convert '+' to '-'
	  .replace(/\//g, '_'); // Convert '/' to '_';
	}
	
	function decodeToString(str) {
	  str = padding(str).replace(/\-/g, '+') // Convert '-' to '+'
	  .replace(/_/g, '/'); // Convert '_' to '/'
	
	  return decodeURIComponent(byteArrayToString(base64.toByteArray(str)).split('').map(function (c) {
	    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	  }).join(''));
	}
	
	function decodeToHEX(str) {
	  return byteArrayToHex(base64.toByteArray(padding(str)));
	}
	
	function base64ToBase64Url(base64String) {
	  var SAFE_URL_ENCODING_MAPPING = {
	    "+": "-",
	    "/": "_",
	    "=": ""
	  };
	
	  return base64String.replace(/[+/=]/g, function (m) {
	    return SAFE_URL_ENCODING_MAPPING[m];
	  });
	}
	
	module.exports = {
	  encodeString: encodeString,
	  decodeToString: decodeToString,
	  byteArrayToString: byteArrayToString,
	  stringToByteArray: stringToByteArray,
	  padding: padding,
	  byteArrayToHex: byteArrayToHex,
	  decodeToHEX: decodeToHEX,
	  base64ToBase64Url: base64ToBase64Url
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;
	
	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}
	
	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;
	
	function getLens(b64) {
	  var len = b64.length;
	
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }
	
	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=');
	  if (validLen === -1) validLen = len;
	
	  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
	
	  return [validLen, placeHoldersLen];
	}
	
	// base64 is 4/3 + up to two characters of the original data
	function byteLength(b64) {
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}
	
	function _byteLength(b64, validLen, placeHoldersLen) {
	  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
	}
	
	function toByteArray(b64) {
	  var tmp;
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	
	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
	
	  var curByte = 0;
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
	
	  for (var i = 0; i < len; i += 4) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[curByte++] = tmp >> 16 & 0xFF;
	    arr[curByte++] = tmp >> 8 & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }
	
	  if (placeHoldersLen === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[curByte++] = tmp & 0xFF;
	  }
	
	  if (placeHoldersLen === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[curByte++] = tmp >> 8 & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }
	
	  return arr;
	}
	
	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}
	
	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}
	
	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
	  }
	
	  return parts.join('');
	}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var urljoin = __webpack_require__(22);
	var base64 = __webpack_require__(19);
	var request = __webpack_require__(23);
	
	function process(jwks) {
	  var modulus = base64.decodeToHEX(jwks.n);
	  var exp = base64.decodeToHEX(jwks.e);
	
	  return {
	    modulus: modulus,
	    exp: exp
	  };
	}
	
	function getJWKS(options) {
	  var url = options.jwksURI || urljoin(options.iss, '.well-known', 'jwks.json');
	
	  return request.get(url).end(function (err, data) {
	    var matchingKey = null;
	    var a;
	    var key;
	
	    if (err) {
	      return Promise.reject(err);
	    }
	
	    // eslint-disable-next-line no-plusplus
	    for (a = 0; a < data.body.keys.length && matchingKey === null; a++) {
	      key = data.body.keys[a];
	      if (key.kid === options.kid) {
	        matchingKey = key;
	      }
	    }
	
	    return Promise.resolve(process(matchingKey));
	  });
	}
	
	module.exports = {
	  process: process,
	  getJWKS: getJWKS
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (name, context, definition) {
	  if (typeof module !== 'undefined' && module.exports) module.exports = definition();else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else context[name] = definition();
	})('urljoin', undefined, function () {
	
	  function normalize(str, options) {
	
	    // make sure protocol is followed by two slashes
	    str = str.replace(/:\//g, '://');
	
	    // remove consecutive slashes
	    str = str.replace(/([^:\s])\/+/g, '$1/');
	
	    // remove trailing slash before parameters or hash
	    str = str.replace(/\/(\?|&|#[^!])/g, '$1');
	
	    // replace ? in parameters with &
	    str = str.replace(/(\?.+)\?/g, '$1&');
	
	    return str;
	  }
	
	  return function () {
	    var input = arguments;
	    var options = {};
	
	    if (_typeof(arguments[0]) === 'object') {
	      // new syntax with array and options
	      input = arguments[0];
	      options = arguments[1] || {};
	    }
	
	    var joined = [].slice.call(input, 0).join('/');
	    return normalize(joined, options);
	  };
	});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') {
	  // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') {
	  // Web Worker
	  root = self;
	} else {
	  // Other environments
	  console.warn("Using browser-only version of superagent in non-browser environment");
	  root = undefined;
	}
	
	var Emitter = __webpack_require__(24);
	var RequestBase = __webpack_require__(25);
	var isObject = __webpack_require__(26);
	var ResponseBase = __webpack_require__(27);
	var Agent = __webpack_require__(29);
	
	/**
	 * Noop.
	 */
	
	function noop() {};
	
	/**
	 * Expose `request`.
	 */
	
	var request = exports = module.exports = function (method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new exports.Request('GET', method).end(url);
	  }
	
	  // url first
	  if (1 == arguments.length) {
	    return new exports.Request('GET', method);
	  }
	
	  return new exports.Request(method, url);
	};
	
	exports.Request = Request;
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
	    return new XMLHttpRequest();
	  } else {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.6.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP.3.0');
	    } catch (e) {}
	    try {
	      return new ActiveXObject('Msxml2.XMLHTTP');
	    } catch (e) {}
	  }
	  throw Error("Browser-only version of superagent could not find XHR");
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim ? function (s) {
	  return s.trim();
	} : function (s) {
	  return s.replace(/(^\s*|\s*$)/g, '');
	};
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    pushEncodedKeyValuePair(pairs, key, obj[key]);
	  }
	  return pairs.join('&');
	}
	
	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */
	
	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (val != null) {
	    if (Array.isArray(val)) {
	      val.forEach(function (v) {
	        pushEncodedKeyValuePair(pairs, key, v);
	      });
	    } else if (isObject(val)) {
	      for (var subkey in val) {
	        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
	      }
	    } else {
	      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
	    }
	  } else if (val === null) {
	    pairs.push(encodeURIComponent(key));
	  }
	}
	
	/**
	 * Expose serialization method.
	 */
	
	request.serializeObject = serialize;
	
	/**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var pair;
	  var pos;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    pos = pair.indexOf('=');
	    if (pos == -1) {
	      obj[decodeURIComponent(pair)] = '';
	    } else {
	      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'text/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	request.serialize = {
	  'application/x-www-form-urlencoded': serialize,
	  'application/json': JSON.stringify
	};
	
	/**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    if (index === -1) {
	      // could be empty line, just skip it
	      continue;
	    }
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */
	
	function isJSON(mime) {
	  // should match /json or +json
	  // but not /json-seq
	  return (/[\/+]json($|[^-\w])/.test(mime)
	  );
	}
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req) {
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
	  this.statusText = this.req.xhr.statusText;
	  var status = this.xhr.status;
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	  this._setStatusProperties(status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this._setHeaderProperties(this.header);
	
	  if (null === this.text && req._responseType) {
	    this.body = this.xhr.response;
	  } else {
	    this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
	  }
	}
	
	ResponseBase(Response.prototype);
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype._parseBody = function (str) {
	  var parse = request.parse[this.type];
	  if (this.req._parser) {
	    return this.req._parser(this, str);
	  }
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function () {
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function () {
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch (e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      if (self.xhr) {
	        // ie9 doesn't have 'response' property
	        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
	        // issue #876: return the http status code if the response parsing fails
	        err.status = self.xhr.status ? self.xhr.status : null;
	        err.statusCode = err.status; // backwards-compat only
	      } else {
	        err.rawResponse = null;
	        err.status = null;
	      }
	
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    var new_err;
	    try {
	      if (!self._isResponseOK(res)) {
	        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	      }
	    } catch (custom_err) {
	      new_err = custom_err; // ok() callback can throw
	    }
	
	    // #1000 don't catch errors from the callback to avoid double calling it
	    if (new_err) {
	      new_err.original = err;
	      new_err.response = res;
	      new_err.status = res.status;
	      self.callback(new_err, res);
	    } else {
	      self.callback(null, res);
	    }
	  });
	}
	
	/**
	 * Mixin `Emitter` and `RequestBase`.
	 */
	
	Emitter(Request.prototype);
	RequestBase(Request.prototype);
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function (type) {
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function (type) {
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} [pass] optional in case of using 'bearer' as type
	 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function (user, pass, options) {
	  if (1 === arguments.length) pass = '';
	  if ((typeof pass === 'undefined' ? 'undefined' : _typeof(pass)) === 'object' && pass !== null) {
	    // pass is optional and can be replaced with options
	    options = pass;
	    pass = '';
	  }
	  if (!options) {
	    options = {
	      type: 'function' === typeof btoa ? 'basic' : 'auto'
	    };
	  }
	
	  var encoder = function encoder(string) {
	    if ('function' === typeof btoa) {
	      return btoa(string);
	    }
	    throw new Error('Cannot use basic auth, btoa is not a function');
	  };
	
	  return this._auth(user, pass, options, encoder);
	};
	
	/**
	 * Add query-string `val`.
	 *
	 * Examples:
	 *
	 *   request.get('/shoes')
	 *     .query('size=10')
	 *     .query({ color: 'blue' })
	 *
	 * @param {Object|String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.query = function (val) {
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `options` (or filename).
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String|Object} options
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function (field, file, options) {
	  if (file) {
	    if (this._data) {
	      throw Error("superagent can't mix .send() and .attach()");
	    }
	
	    this._getFormData().append(field, file, options || file.name);
	  }
	  return this;
	};
	
	Request.prototype._getFormData = function () {
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function (err, res) {
	  if (this._shouldRetry(err, res)) {
	    return this._retry();
	  }
	
	  var fn = this._callback;
	  this.clearTimeout();
	
	  if (err) {
	    if (this._maxRetries) err.retries = this._retries - 1;
	    this.emit('error', err);
	  }
	
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function () {
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;
	
	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;
	
	  this.callback(err);
	};
	
	// This only warns, because the request is still likely to work
	Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
	  console.warn("This is not supported in browser version of superagent");
	  return this;
	};
	
	// This throws, because it can't send/receive data as expected
	Request.prototype.pipe = Request.prototype.write = function () {
	  throw Error("Streaming is not supported in browser version of superagent");
	};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	Request.prototype._isHost = function _isHost(obj) {
	  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
	  return obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function (fn) {
	  if (this._endCalled) {
	    console.warn("Warning: .end() was called twice. This is not supported in superagent");
	  }
	  this._endCalled = true;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // querystring
	  this._finalizeQueryString();
	
	  return this._end();
	};
	
	Request.prototype._end = function () {
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var data = this._formData || this._data;
	
	  this._setTimeouts();
	
	  // state change
	  xhr.onreadystatechange = function () {
	    var readyState = xhr.readyState;
	    if (readyState >= 2 && self._responseTimeoutTimer) {
	      clearTimeout(self._responseTimeoutTimer);
	    }
	    if (4 != readyState) {
	      return;
	    }
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try {
	      status = xhr.status;
	    } catch (e) {
	      status = 0;
	    }
	
	    if (!status) {
	      if (self.timedout || self._aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function handleProgress(direction, e) {
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = direction;
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    try {
	      xhr.onprogress = handleProgress.bind(null, 'download');
	      if (xhr.upload) {
	        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
	      }
	    } catch (e) {
	      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	      // Reported here:
	      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	    }
	  }
	
	  // initiate request
	  try {
	    if (this.username && this.password) {
	      xhr.open(this.method, this.url, true, this.username, this.password);
	    } else {
	      xhr.open(this.method, this.url, true);
	    }
	  } catch (err) {
	    // see #1149
	    return this.callback(err);
	  }
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) {
	      serialize = request.serialize['application/json'];
	    }
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	
	    if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }
	
	  // send stuff
	  this.emit('request', this);
	
	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};
	
	request.agent = function () {
	  return new Agent();
	};
	
	["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
	  Agent.prototype[method.toLowerCase()] = function (url, fn) {
	    var req = new request.Request(method, url);
	    this._setDefaults(req);
	    if (fn) {
	      req.end(fn);
	    }
	    return req;
	  };
	});
	
	Agent.prototype.del = Agent.prototype['delete'];
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function (url, data, fn) {
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function (url, data, fn) {
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * OPTIONS query to `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.options = function (url, data, fn) {
	  var req = request('OPTIONS', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	function del(url, data, fn) {
	  var req = request('DELETE', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	}
	
	request['del'] = del;
	request['delete'] = del;
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function (url, data, fn) {
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} [data]
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function (url, data, fn) {
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} [data] or fn
	 * @param {Function} [fn]
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function (url, data, fn) {
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function (event, fn) {
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function (event) {
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1),
	      callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function (event) {
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function (event) {
	  return !!this.listeners(event).length;
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isObject = __webpack_require__(26);
	
	/**
	 * Expose `RequestBase`.
	 */
	
	module.exports = RequestBase;
	
	/**
	 * Initialize a new `RequestBase`.
	 *
	 * @api public
	 */
	
	function RequestBase(obj) {
	  if (obj) return mixin(obj);
	}
	
	/**
	 * Mixin the prototype properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in RequestBase.prototype) {
	    obj[key] = RequestBase.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.clearTimeout = function _clearTimeout() {
	  clearTimeout(this._timer);
	  clearTimeout(this._responseTimeoutTimer);
	  delete this._timer;
	  delete this._responseTimeoutTimer;
	  return this;
	};
	
	/**
	 * Override default response body parser
	 *
	 * This function will be called to convert incoming data into request.body
	 *
	 * @param {Function}
	 * @api public
	 */
	
	RequestBase.prototype.parse = function parse(fn) {
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Set format of binary response body.
	 * In browser valid formats are 'blob' and 'arraybuffer',
	 * which return Blob and ArrayBuffer, respectively.
	 *
	 * In Node all values result in Buffer.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.responseType = function (val) {
	  this._responseType = val;
	  return this;
	};
	
	/**
	 * Override default request body serializer
	 *
	 * This function will be called to convert data set via .send or .attach into payload to send
	 *
	 * @param {Function}
	 * @api public
	 */
	
	RequestBase.prototype.serialize = function serialize(fn) {
	  this._serializer = fn;
	  return this;
	};
	
	/**
	 * Set timeouts.
	 *
	 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
	 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
	 *
	 * Value of 0 or false means no timeout.
	 *
	 * @param {Number|Object} ms or {response, deadline}
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.timeout = function timeout(options) {
	  if (!options || 'object' !== (typeof options === 'undefined' ? 'undefined' : _typeof(options))) {
	    this._timeout = options;
	    this._responseTimeout = 0;
	    return this;
	  }
	
	  for (var option in options) {
	    switch (option) {
	      case 'deadline':
	        this._timeout = options.deadline;
	        break;
	      case 'response':
	        this._responseTimeout = options.response;
	        break;
	      default:
	        console.warn("Unknown timeout option", option);
	    }
	  }
	  return this;
	};
	
	/**
	 * Set number of retry attempts on error.
	 *
	 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
	 *
	 * @param {Number} count
	 * @param {Function} [fn]
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.retry = function retry(count, fn) {
	  // Default to 1 if no count passed or true
	  if (arguments.length === 0 || count === true) count = 1;
	  if (count <= 0) count = 0;
	  this._maxRetries = count;
	  this._retries = 0;
	  this._retryCallback = fn;
	  return this;
	};
	
	var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
	
	/**
	 * Determine if a request should be retried.
	 * (Borrowed from segmentio/superagent-retry)
	 *
	 * @param {Error} err
	 * @param {Response} [res]
	 * @returns {Boolean}
	 */
	RequestBase.prototype._shouldRetry = function (err, res) {
	  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
	    return false;
	  }
	  if (this._retryCallback) {
	    try {
	      var override = this._retryCallback(err, res);
	      if (override === true) return true;
	      if (override === false) return false;
	      // undefined falls back to defaults
	    } catch (e) {
	      console.error(e);
	    }
	  }
	  if (res && res.status && res.status >= 500 && res.status != 501) return true;
	  if (err) {
	    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
	    // Superagent timeout
	    if (err.timeout && err.code == 'ECONNABORTED') return true;
	    if (err.crossDomain) return true;
	  }
	  return false;
	};
	
	/**
	 * Retry request
	 *
	 * @return {Request} for chaining
	 * @api private
	 */
	
	RequestBase.prototype._retry = function () {
	
	  this.clearTimeout();
	
	  // node
	  if (this.req) {
	    this.req = null;
	    this.req = this.request();
	  }
	
	  this._aborted = false;
	  this.timedout = false;
	
	  return this._end();
	};
	
	/**
	 * Promise support
	 *
	 * @param {Function} resolve
	 * @param {Function} [reject]
	 * @return {Request}
	 */
	
	RequestBase.prototype.then = function then(resolve, reject) {
	  if (!this._fullfilledPromise) {
	    var self = this;
	    if (this._endCalled) {
	      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
	    }
	    this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
	      self.end(function (err, res) {
	        if (err) innerReject(err);else innerResolve(res);
	      });
	    });
	  }
	  return this._fullfilledPromise.then(resolve, reject);
	};
	
	RequestBase.prototype['catch'] = function (cb) {
	  return this.then(undefined, cb);
	};
	
	/**
	 * Allow for extension
	 */
	
	RequestBase.prototype.use = function use(fn) {
	  fn(this);
	  return this;
	};
	
	RequestBase.prototype.ok = function (cb) {
	  if ('function' !== typeof cb) throw Error("Callback required");
	  this._okCallback = cb;
	  return this;
	};
	
	RequestBase.prototype._isResponseOK = function (res) {
	  if (!res) {
	    return false;
	  }
	
	  if (this._okCallback) {
	    return this._okCallback(res);
	  }
	
	  return res.status >= 200 && res.status < 300;
	};
	
	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	RequestBase.prototype.get = function (field) {
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */
	
	RequestBase.prototype.getHeader = RequestBase.prototype.get;
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.set = function (field, val) {
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	RequestBase.prototype.unset = function (field) {
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Write the field `name` and `val`, or multiple fields with one object
	 * for "multipart/form-data" request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 *
	 * request.post('/upload')
	 *   .field({ foo: 'bar', baz: 'qux' })
	 *   .end(callback);
	 * ```
	 *
	 * @param {String|Object} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	RequestBase.prototype.field = function (name, val) {
	  // name should be either a string or an object.
	  if (null === name || undefined === name) {
	    throw new Error('.field(name, val) name can not be empty');
	  }
	
	  if (this._data) {
	    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
	  }
	
	  if (isObject(name)) {
	    for (var key in name) {
	      this.field(key, name[key]);
	    }
	    return this;
	  }
	
	  if (Array.isArray(val)) {
	    for (var i in val) {
	      this.field(name, val[i]);
	    }
	    return this;
	  }
	
	  // val should be defined now
	  if (null === val || undefined === val) {
	    throw new Error('.field(name, val) val can not be empty');
	  }
	  if ('boolean' === typeof val) {
	    val = '' + val;
	  }
	  this._getFormData().append(name, val);
	  return this;
	};
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	RequestBase.prototype.abort = function () {
	  if (this._aborted) {
	    return this;
	  }
	  this._aborted = true;
	  this.xhr && this.xhr.abort(); // browser
	  this.req && this.req.abort(); // node
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
	  switch (options.type) {
	    case 'basic':
	      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
	      break;
	
	    case 'auto':
	      this.username = user;
	      this.password = pass;
	      break;
	
	    case 'bearer':
	      // usage would be .auth(accessToken, { type: 'bearer' })
	      this.set('Authorization', 'Bearer ' + user);
	      break;
	  }
	  return this;
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	RequestBase.prototype.withCredentials = function (on) {
	  // This is browser-only functionality. Node side is no-op.
	  if (on == undefined) on = true;
	  this._withCredentials = on;
	  return this;
	};
	
	/**
	 * Set the max redirects to `n`. Does noting in browser XHR implementation.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.redirects = function (n) {
	  this._maxRedirects = n;
	  return this;
	};
	
	/**
	 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
	 * Default 200MB.
	 *
	 * @param {Number} n
	 * @return {Request} for chaining
	 */
	RequestBase.prototype.maxResponseSize = function (n) {
	  if ('number' !== typeof n) {
	    throw TypeError("Invalid argument");
	  }
	  this._maxResponseSize = n;
	  return this;
	};
	
	/**
	 * Convert to a plain javascript object (not JSON string) of scalar properties.
	 * Note as this method is designed to return a useful non-this value,
	 * it cannot be chained.
	 *
	 * @return {Object} describing method, url, and data of this request
	 * @api public
	 */
	
	RequestBase.prototype.toJSON = function () {
	  return {
	    method: this.method,
	    url: this.url,
	    data: this._data,
	    headers: this._header
	  };
	};
	
	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	 *      request.post('/user')
	 *        .send('name=tobi')
	 *        .send('species=ferret')
	 *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.send = function (data) {
	  var isObj = isObject(data);
	  var type = this._header['content-type'];
	
	  if (this._formData) {
	    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
	  }
	
	  if (isObj && !this._data) {
	    if (Array.isArray(data)) {
	      this._data = [];
	    } else if (!this._isHost(data)) {
	      this._data = {};
	    }
	  } else if (data && this._data && this._isHost(this._data)) {
	    throw Error("Can't merge these send calls");
	  }
	
	  // merge
	  if (isObj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    // default to x-www-form-urlencoded
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data ? this._data + '&' + data : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!isObj || this._isHost(data)) {
	    return this;
	  }
	
	  // default to json
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * Sort `querystring` by the sort function
	 *
	 *
	 * Examples:
	 *
	 *       // default order
	 *       request.get('/user')
	 *         .query('name=Nick')
	 *         .query('search=Manny')
	 *         .sortQuery()
	 *         .end(callback)
	 *
	 *       // customized sort function
	 *       request.get('/user')
	 *         .query('name=Nick')
	 *         .query('search=Manny')
	 *         .sortQuery(function(a, b){
	 *           return a.length - b.length;
	 *         })
	 *         .end(callback)
	 *
	 *
	 * @param {Function} sort
	 * @return {Request} for chaining
	 * @api public
	 */
	
	RequestBase.prototype.sortQuery = function (sort) {
	  // _sort default to true but otherwise can be a function or boolean
	  this._sort = typeof sort === 'undefined' ? true : sort;
	  return this;
	};
	
	/**
	 * Compose querystring to append to req.url
	 *
	 * @api private
	 */
	RequestBase.prototype._finalizeQueryString = function () {
	  var query = this._query.join('&');
	  if (query) {
	    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
	  }
	  this._query.length = 0; // Makes the call idempotent
	
	  if (this._sort) {
	    var index = this.url.indexOf('?');
	    if (index >= 0) {
	      var queryArr = this.url.substring(index + 1).split('&');
	      if ('function' === typeof this._sort) {
	        queryArr.sort(this._sort);
	      } else {
	        queryArr.sort();
	      }
	      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
	    }
	  }
	};
	
	// For backwards compat only
	RequestBase.prototype._appendQueryString = function () {
	  console.trace("Unsupported");
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
	  if (this._aborted) {
	    return;
	  }
	  var err = new Error(reason + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  err.code = 'ECONNABORTED';
	  err.errno = errno;
	  this.timedout = true;
	  this.abort();
	  this.callback(err);
	};
	
	RequestBase.prototype._setTimeouts = function () {
	  var self = this;
	
	  // deadline
	  if (this._timeout && !this._timer) {
	    this._timer = setTimeout(function () {
	      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
	    }, this._timeout);
	  }
	  // response timeout
	  if (this._responseTimeout && !this._responseTimeoutTimer) {
	    this._responseTimeoutTimer = setTimeout(function () {
	      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
	    }, this._responseTimeout);
	  }
	};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function isObject(obj) {
	  return null !== obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
	}
	
	module.exports = isObject;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies.
	 */
	
	var utils = __webpack_require__(28);
	
	/**
	 * Expose `ResponseBase`.
	 */
	
	module.exports = ResponseBase;
	
	/**
	 * Initialize a new `ResponseBase`.
	 *
	 * @api public
	 */
	
	function ResponseBase(obj) {
	  if (obj) return mixin(obj);
	}
	
	/**
	 * Mixin the prototype properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in ResponseBase.prototype) {
	    obj[key] = ResponseBase.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	ResponseBase.prototype.get = function (field) {
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	ResponseBase.prototype._setHeaderProperties = function (header) {
	  // TODO: moar!
	  // TODO: make this a util
	
	  // content-type
	  var ct = header['content-type'] || '';
	  this.type = utils.type(ct);
	
	  // params
	  var params = utils.params(ct);
	  for (var key in params) {
	    this[key] = params[key];
	  }this.links = {};
	
	  // links
	  try {
	    if (header.link) {
	      this.links = utils.parseLinks(header.link);
	    }
	  } catch (err) {
	    // ignore
	  }
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	ResponseBase.prototype._setStatusProperties = function (status) {
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.redirect = 3 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = 4 == type || 5 == type ? this.toError() : false;
	
	  // sugar
	  this.created = 201 == status;
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.forbidden = 403 == status;
	  this.notFound = 404 == status;
	  this.unprocessableEntity = 422 == status;
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	exports.type = function (str) {
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	exports.params = function (str) {
	  return str.split(/ *; */).reduce(function (obj, str) {
	    var parts = str.split(/ *= */);
	    var key = parts.shift();
	    var val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Parse Link header fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	exports.parseLinks = function (str) {
	  return str.split(/ *, */).reduce(function (obj, str) {
	    var parts = str.split(/ *; */);
	    var url = parts[0].slice(1, -1);
	    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
	    obj[rel] = url;
	    return obj;
	  }, {});
	};
	
	/**
	 * Strip content related fields from `header`.
	 *
	 * @param {Object} header
	 * @return {Object} header
	 * @api private
	 */
	
	exports.cleanHeader = function (header, changesOrigin) {
	  delete header['content-type'];
	  delete header['content-length'];
	  delete header['transfer-encoding'];
	  delete header['host'];
	  // secuirty
	  if (changesOrigin) {
	    delete header['authorization'];
	    delete header['cookie'];
	  }
	  return header;
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	"use strict";
	
	function Agent() {
	  this._defaults = [];
	}
	
	["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
	  /** Default setting for all requests from this agent */
	  Agent.prototype[fn] = function () /*varargs*/{
	    this._defaults.push({ fn: fn, arguments: arguments });
	    return this;
	  };
	});
	
	Agent.prototype._setDefaults = function (req) {
	  this._defaults.forEach(function (def) {
	    req[def.fn].apply(req, def.arguments);
	  });
	};
	
	module.exports = Agent;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	function ConfigurationError(message) {
	  this.name = 'ConfigurationError';
	  this.message = message || '';
	}
	ConfigurationError.prototype = Error.prototype;
	
	function TokenValidationError(message) {
	  this.name = 'TokenValidationError';
	  this.message = message || '';
	}
	TokenValidationError.prototype = Error.prototype;
	
	module.exports = {
	  ConfigurationError: ConfigurationError,
	  TokenValidationError: TokenValidationError
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	
	function DummyCache() {}
	
	DummyCache.prototype.get = function () {
	  return null;
	};
	
	DummyCache.prototype.has = function () {
	  return false;
	};
	
	DummyCache.prototype.set = function () {};
	
	module.exports = DummyCache;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _UrlUtility = __webpack_require__(33);
	
	var _UrlUtility2 = _interopRequireDefault(_UrlUtility);
	
	var _SigninState = __webpack_require__(34);
	
	var _SigninState2 = _interopRequireDefault(_SigninState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SigninRequest = function () {
	    function SigninRequest(_ref) {
	        var url = _ref.url,
	            client_id = _ref.client_id,
	            redirect_uri = _ref.redirect_uri,
	            response_type = _ref.response_type,
	            scope = _ref.scope,
	            authority = _ref.authority,
	            data = _ref.data,
	            prompt = _ref.prompt,
	            display = _ref.display,
	            max_age = _ref.max_age,
	            ui_locales = _ref.ui_locales,
	            id_token_hint = _ref.id_token_hint,
	            login_hint = _ref.login_hint,
	            acr_values = _ref.acr_values,
	            resource = _ref.resource,
	            request = _ref.request,
	            request_uri = _ref.request_uri,
	            extraQueryParams = _ref.extraQueryParams;
	
	        _classCallCheck(this, SigninRequest);
	
	        if (!url) {
	            _Log2.default.error("No url passed to SigninRequest");
	            throw new Error("url");
	        }
	        if (!client_id) {
	            _Log2.default.error("No client_id passed to SigninRequest");
	            throw new Error("client_id");
	        }
	        if (!redirect_uri) {
	            _Log2.default.error("No redirect_uri passed to SigninRequest");
	            throw new Error("redirect_uri");
	        }
	        if (!response_type) {
	            _Log2.default.error("No response_type passed to SigninRequest");
	            throw new Error("response_type");
	        }
	        if (!scope) {
	            _Log2.default.error("No scope passed to SigninRequest");
	            throw new Error("scope");
	        }
	        if (!authority) {
	            _Log2.default.error("No authority passed to SigninRequest");
	            throw new Error("authority");
	        }
	
	        var oidc = SigninRequest.isOidc(response_type);
	        this.state = new _SigninState2.default({ nonce: oidc, data: data, client_id: client_id, authority: authority });
	
	        url = _UrlUtility2.default.addQueryParam(url, "client_id", client_id);
	        url = _UrlUtility2.default.addQueryParam(url, "redirect_uri", redirect_uri);
	        url = _UrlUtility2.default.addQueryParam(url, "response_type", response_type);
	        url = _UrlUtility2.default.addQueryParam(url, "scope", scope);
	
	        url = _UrlUtility2.default.addQueryParam(url, "state", this.state.id);
	        if (oidc) {
	            url = _UrlUtility2.default.addQueryParam(url, "nonce", this.state.nonce);
	        }
	
	        var optional = { prompt: prompt, display: display, max_age: max_age, ui_locales: ui_locales, id_token_hint: id_token_hint, login_hint: login_hint, acr_values: acr_values, resource: resource, request: request, request_uri: request_uri };
	        for (var key in optional) {
	            if (optional[key]) {
	                url = _UrlUtility2.default.addQueryParam(url, key, optional[key]);
	            }
	        }
	
	        for (var _key in extraQueryParams) {
	            url = _UrlUtility2.default.addQueryParam(url, _key, extraQueryParams[_key]);
	        }
	
	        this.url = url;
	    }
	
	    _createClass(SigninRequest, null, [{
	        key: 'isOidc',
	        value: function isOidc(response_type) {
	            var result = response_type.split(/\s+/g).filter(function (item) {
	                return item === "id_token";
	            });
	            return !!result[0];
	        }
	    }, {
	        key: 'isOAuth',
	        value: function isOAuth(response_type) {
	            var result = response_type.split(/\s+/g).filter(function (item) {
	                return item === "token";
	            });
	            return !!result[0];
	        }
	    }]);
	
	    return SigninRequest;
	}();
	
	exports.default = SigninRequest;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _Global = __webpack_require__(5);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UrlUtility = function () {
	    function UrlUtility() {
	        _classCallCheck(this, UrlUtility);
	    }
	
	    _createClass(UrlUtility, null, [{
	        key: 'addQueryParam',
	        value: function addQueryParam(url, name, value) {
	            if (url.indexOf('?') < 0) {
	                url += "?";
	            }
	
	            if (url[url.length - 1] !== "?") {
	                url += "&";
	            }
	
	            url += encodeURIComponent(name);
	            url += "=";
	            url += encodeURIComponent(value);
	
	            return url;
	        }
	    }, {
	        key: 'parseUrlFragment',
	        value: function parseUrlFragment(value) {
	            var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#";
	            var global = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _Global2.default;
	
	            _Log2.default.debug("UrlUtility.parseUrlFragment");
	
	            if (typeof value !== 'string') {
	                value = global.location.href;
	            }
	
	            var idx = value.lastIndexOf(delimiter);
	            if (idx >= 0) {
	                value = value.substr(idx + 1);
	            }
	
	            var params = {},
	                regex = /([^&=]+)=([^&]*)/g,
	                m;
	
	            var counter = 0;
	            while (m = regex.exec(value)) {
	                params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	                if (counter++ > 50) {
	                    _Log2.default.error("response exceeded expected number of parameters", value);
	                    return {
	                        error: "Response exceeded expected number of parameters"
	                    };
	                }
	            }
	
	            for (var prop in params) {
	                return params;
	            }
	
	            return {};
	        }
	    }]);
	
	    return UrlUtility;
	}();
	
	exports.default = UrlUtility;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _State2 = __webpack_require__(35);
	
	var _State3 = _interopRequireDefault(_State2);
	
	var _random = __webpack_require__(36);
	
	var _random2 = _interopRequireDefault(_random);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var SigninState = function (_State) {
	    _inherits(SigninState, _State);
	
	    function SigninState() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            nonce = _ref.nonce,
	            authority = _ref.authority,
	            client_id = _ref.client_id;
	
	        _classCallCheck(this, SigninState);
	
	        var _this = _possibleConstructorReturn(this, (SigninState.__proto__ || Object.getPrototypeOf(SigninState)).call(this, arguments[0]));
	
	        if (nonce === true) {
	            _this._nonce = (0, _random2.default)();
	        } else if (nonce) {
	            _this._nonce = nonce;
	        }
	
	        _this._authority = authority;
	        _this._client_id = client_id;
	        return _this;
	    }
	
	    _createClass(SigninState, [{
	        key: 'toStorageString',
	        value: function toStorageString() {
	            _Log2.default.debug("SigninState.toStorageString");
	            return JSON.stringify({
	                id: this.id,
	                data: this.data,
	                created: this.created,
	                nonce: this.nonce,
	                authority: this.authority,
	                client_id: this.client_id
	            });
	        }
	    }, {
	        key: 'nonce',
	        get: function get() {
	            return this._nonce;
	        }
	    }, {
	        key: 'authority',
	        get: function get() {
	            return this._authority;
	        }
	    }, {
	        key: 'client_id',
	        get: function get() {
	            return this._client_id;
	        }
	    }], [{
	        key: 'fromStorageString',
	        value: function fromStorageString(storageString) {
	            _Log2.default.debug("SigninState.fromStorageString");
	            var data = JSON.parse(storageString);
	            return new SigninState(data);
	        }
	    }]);
	
	    return SigninState;
	}(_State3.default);
	
	exports.default = SigninState;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _random = __webpack_require__(36);
	
	var _random2 = _interopRequireDefault(_random);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var State = function () {
	    function State() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            id = _ref.id,
	            data = _ref.data,
	            created = _ref.created;
	
	        _classCallCheck(this, State);
	
	        this._id = id || (0, _random2.default)();
	        this._data = data;
	
	        if (typeof created === 'number' && created > 0) {
	            this._created = created;
	        } else {
	            this._created = parseInt(Date.now() / 1000);
	        }
	    }
	
	    _createClass(State, [{
	        key: 'toStorageString',
	        value: function toStorageString() {
	            _Log2.default.debug("State.toStorageString");
	            return JSON.stringify({
	                id: this.id,
	                data: this.data,
	                created: this.created
	            });
	        }
	    }, {
	        key: 'id',
	        get: function get() {
	            return this._id;
	        }
	    }, {
	        key: 'data',
	        get: function get() {
	            return this._data;
	        }
	    }, {
	        key: 'created',
	        get: function get() {
	            return this._created;
	        }
	    }], [{
	        key: 'fromStorageString',
	        value: function fromStorageString(storageString) {
	            _Log2.default.debug("State.fromStorageString");
	            return new State(JSON.parse(storageString));
	        }
	    }, {
	        key: 'clearStaleState',
	        value: function clearStaleState(storage, age) {
	            _Log2.default.debug("State.clearStaleState");
	
	            var cutoff = Date.now() / 1000 - age;
	
	            return storage.getAllKeys().then(function (keys) {
	                _Log2.default.debug("got keys", keys);
	
	                var promises = [];
	
	                var _loop = function _loop(i) {
	                    var key = keys[i];
	                    p = storage.get(key).then(function (item) {
	                        var remove = false;
	
	                        if (item) {
	                            try {
	                                var state = State.fromStorageString(item);
	
	                                _Log2.default.debug("got item from key: ", key, state.created);
	
	                                if (state.created <= cutoff) {
	                                    remove = true;
	                                }
	                            } catch (e) {
	                                _Log2.default.error("Error parsing state for key", key, e.message);
	                                remove = true;
	                            }
	                        } else {
	                            _Log2.default.debug("no item in storage for key: ", key);
	                            remove = true;
	                        }
	
	                        if (remove) {
	                            _Log2.default.debug("removed item for key: ", key);
	                            return storage.remove(key);
	                        }
	                    });
	
	
	                    promises.push(p);
	                };
	
	                for (var i = 0; i < keys.length; i++) {
	                    var p;
	
	                    _loop(i);
	                }
	
	                _Log2.default.debug("waiting on promise count:", promises.length);
	                return Promise.all(promises);
	            });
	        }
	    }]);
	
	    return State;
	}();
	
	exports.default = State;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = random;
	// NOTICE: the code in this file originally developed by Microsoft
	// original source: https://github.com/AzureAD/azure-activedirectory-library-for-js/blob/master/lib/adal.js#L1029
	//----------------------------------------------------------------------
	// AdalJS v1.0.8
	// @preserve Copyright (c) Microsoft Open Technologies, Inc.
	// All Rights Reserved
	// Apache License 2.0
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	//----------------------------------------------------------------------
	
	function random() {
	    var guidHolder = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx';
	    var hex = '0123456789abcdef';
	    var r = 0;
	    var guidResponse = "";
	    for (var i = 0; i < guidHolder.length; i++) {
	        if (guidHolder[i] !== '-' && guidHolder[i] !== '4') {
	            // each x and y needs to be random
	            r = Math.random() * 16 | 0;
	        }
	
	        if (guidHolder[i] === 'x') {
	            guidResponse += hex[r];
	        } else if (guidHolder[i] === 'y') {
	            // clock-seq-and-reserved first hex is filtered and remaining hex values are random
	            r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
	            r |= 0x8; // set pos 3 to 1 as 1???
	            guidResponse += hex[r];
	        } else {
	            guidResponse += guidHolder[i];
	        }
	    }
	    return guidResponse;
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _UrlUtility = __webpack_require__(33);
	
	var _UrlUtility2 = _interopRequireDefault(_UrlUtility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var OidcScope = "openid";
	
	var SigninResponse = function () {
	    function SigninResponse(url) {
	        _classCallCheck(this, SigninResponse);
	
	        var values = _UrlUtility2.default.parseUrlFragment(url, "#");
	
	        this.error = values.error;
	        this.error_description = values.error_description;
	        this.error_uri = values.error_uri;
	
	        this.state = values.state;
	        this.id_token = values.id_token;
	        this.session_state = values.session_state;
	        this.access_token = values.access_token;
	        this.token_type = values.token_type;
	        this.scope = values.scope;
	        this.profile = undefined; // will be set from ResponseValidator
	
	        var expires_in = parseInt(values.expires_in);
	        if (typeof expires_in === 'number' && expires_in > 0) {
	            var now = parseInt(Date.now() / 1000);
	            this.expires_at = now + expires_in;
	        }
	    }
	
	    _createClass(SigninResponse, [{
	        key: "expires_in",
	        get: function get() {
	            if (this.expires_at) {
	                var now = parseInt(Date.now() / 1000);
	                return this.expires_at - now;
	            }
	            return undefined;
	        }
	    }, {
	        key: "expired",
	        get: function get() {
	            var expires_in = this.expires_in;
	            if (expires_in !== undefined) {
	                return expires_in <= 0;
	            }
	            return undefined;
	        }
	    }, {
	        key: "scopes",
	        get: function get() {
	            return (this.scope || "").split(" ");
	        }
	    }, {
	        key: "isOpenIdConnect",
	        get: function get() {
	            return this.scopes.indexOf(OidcScope) >= 0 || !!this.id_token;
	        }
	    }]);
	
	    return SigninResponse;
	}();
	
	exports.default = SigninResponse;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _UrlUtility = __webpack_require__(33);
	
	var _UrlUtility2 = _interopRequireDefault(_UrlUtility);
	
	var _State = __webpack_require__(35);
	
	var _State2 = _interopRequireDefault(_State);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var SignoutRequest = function SignoutRequest(_ref) {
	    var url = _ref.url,
	        id_token_hint = _ref.id_token_hint,
	        post_logout_redirect_uri = _ref.post_logout_redirect_uri,
	        data = _ref.data;
	
	    _classCallCheck(this, SignoutRequest);
	
	    if (!url) {
	        _Log2.default.error("No url passed to SignoutRequest");
	        throw new Error("url");
	    }
	
	    if (id_token_hint) {
	        url = _UrlUtility2.default.addQueryParam(url, "id_token_hint", id_token_hint);
	    }
	
	    if (post_logout_redirect_uri) {
	        url = _UrlUtility2.default.addQueryParam(url, "post_logout_redirect_uri", post_logout_redirect_uri);
	
	        if (data) {
	            this.state = new _State2.default({ data: data });
	
	            url = _UrlUtility2.default.addQueryParam(url, "state", this.state.id);
	        }
	    }
	
	    this.url = url;
	};
	
	exports.default = SignoutRequest;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _UrlUtility = __webpack_require__(33);
	
	var _UrlUtility2 = _interopRequireDefault(_UrlUtility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var SignoutResponse = function SignoutResponse(url) {
	    _classCallCheck(this, SignoutResponse);
	
	    var values = _UrlUtility2.default.parseUrlFragment(url, "?");
	
	    this.error = values.error;
	    this.error_description = values.error_description;
	    this.error_uri = values.error_uri;
	
	    this.state = values.state;
	};
	
	exports.default = SignoutResponse;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var InMemoryWebStorage = function () {
	    function InMemoryWebStorage() {
	        _classCallCheck(this, InMemoryWebStorage);
	
	        this._data = {};
	    }
	
	    _createClass(InMemoryWebStorage, [{
	        key: "getItem",
	        value: function getItem(key) {
	            _Log2.default.debug("InMemoryWebStorage.getItem", key);
	            return this._data[key];
	        }
	    }, {
	        key: "setItem",
	        value: function setItem(key, value) {
	            _Log2.default.debug("InMemoryWebStorage.setItem", key);
	            this._data[key] = value;
	        }
	    }, {
	        key: "removeItem",
	        value: function removeItem(key) {
	            _Log2.default.debug("InMemoryWebStorage.removeItem", key);
	            delete this._data[key];
	        }
	    }, {
	        key: "key",
	        value: function key(index) {
	            return Object.getOwnPropertyNames(this._data)[index];
	        }
	    }, {
	        key: "length",
	        get: function get() {
	            return Object.getOwnPropertyNames(this._data).length;
	        }
	    }]);
	
	    return InMemoryWebStorage;
	}();
	
	exports.default = InMemoryWebStorage;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _OidcClient2 = __webpack_require__(2);
	
	var _OidcClient3 = _interopRequireDefault(_OidcClient2);
	
	var _UserManagerSettings = __webpack_require__(42);
	
	var _UserManagerSettings2 = _interopRequireDefault(_UserManagerSettings);
	
	var _User = __webpack_require__(46);
	
	var _User2 = _interopRequireDefault(_User);
	
	var _UserManagerEvents = __webpack_require__(47);
	
	var _UserManagerEvents2 = _interopRequireDefault(_UserManagerEvents);
	
	var _SilentRenewService = __webpack_require__(51);
	
	var _SilentRenewService2 = _interopRequireDefault(_SilentRenewService);
	
	var _SessionMonitor = __webpack_require__(52);
	
	var _SessionMonitor2 = _interopRequireDefault(_SessionMonitor);
	
	var _TokenRevocationClient = __webpack_require__(54);
	
	var _TokenRevocationClient2 = _interopRequireDefault(_TokenRevocationClient);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var UserManager = function (_OidcClient) {
	    _inherits(UserManager, _OidcClient);
	
	    function UserManager() {
	        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	        var SilentRenewServiceCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _SilentRenewService2.default;
	        var SessionMonitorCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _SessionMonitor2.default;
	        var TokenRevocationClientCtor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _TokenRevocationClient2.default;
	
	        _classCallCheck(this, UserManager);
	
	        if (!(settings instanceof _UserManagerSettings2.default)) {
	            settings = new _UserManagerSettings2.default(settings);
	        }
	
	        var _this = _possibleConstructorReturn(this, (UserManager.__proto__ || Object.getPrototypeOf(UserManager)).call(this, settings));
	
	        _this._events = new _UserManagerEvents2.default(settings);
	        _this._silentRenewService = new SilentRenewServiceCtor(_this);
	
	        // order is important for the following properties; these services depend upon the events.
	        if (_this.settings.automaticSilentRenew) {
	            _Log2.default.debug("automaticSilentRenew is configured, setting up silent renew");
	            _this.startSilentRenew();
	        }
	
	        if (_this.settings.monitorSession) {
	            _Log2.default.debug("monitorSession is configured, setting up session monitor");
	            _this._sessionMonitor = new SessionMonitorCtor(_this);
	        }
	
	        _this._tokenRevocationClient = new TokenRevocationClientCtor(_this._settings);
	        return _this;
	    }
	
	    _createClass(UserManager, [{
	        key: 'getUser',
	        value: function getUser() {
	            var _this2 = this;
	
	            _Log2.default.debug("UserManager.getUser");
	
	            return this._loadUser().then(function (user) {
	                if (user) {
	                    _Log2.default.info("user loaded");
	
	                    _this2._events.load(user, false);
	
	                    return user;
	                } else {
	                    _Log2.default.info("user not found in storage");
	                    return null;
	                }
	            });
	        }
	    }, {
	        key: 'removeUser',
	        value: function removeUser() {
	            var _this3 = this;
	
	            _Log2.default.debug("UserManager.removeUser");
	
	            return this.storeUser(null).then(function () {
	                _Log2.default.info("user removed from storage");
	                _this3._events.unload();
	            });
	        }
	    }, {
	        key: 'signinRedirect',
	        value: function signinRedirect(args) {
	            _Log2.default.debug("UserManager.signinRedirect");
	            return this._signinStart(args, this._redirectNavigator).then(function () {
	                _Log2.default.info("signinRedirect successful");
	            });
	        }
	    }, {
	        key: 'signinRedirectCallback',
	        value: function signinRedirectCallback(url) {
	            _Log2.default.debug("UserManager.signinRedirectCallback");
	            return this._signinEnd(url || this._redirectNavigator.url).then(function (user) {
	                if (user) {
	                    if (user.profile && user.profile.sub) {
	                        _Log2.default.info("signinRedirectCallback successful, signed in sub: ", user.profile.sub);
	                    } else {
	                        _Log2.default.info("signinRedirectCallback successful");
	                    }
	                }
	
	                return user;
	            });
	        }
	    }, {
	        key: 'signinPopup',
	        value: function signinPopup() {
	            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _Log2.default.debug("UserManager.signinPopup");
	
	            var url = args.redirect_uri || this.settings.popup_redirect_uri || this.settings.redirect_uri;
	            if (!url) {
	                _Log2.default.error("No popup_redirect_uri or redirect_uri configured");
	                return Promise.reject(new Error("No popup_redirect_uri or redirect_uri configured"));
	            }
	
	            args.redirect_uri = url;
	            args.display = "popup";
	
	            return this._signin(args, this._popupNavigator, {
	                startUrl: url,
	                popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
	                popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
	            }).then(function (user) {
	                if (user) {
	                    if (user.profile && user.profile.sub) {
	                        _Log2.default.info("signinPopup successful, signed in sub: ", user.profile.sub);
	                    } else {
	                        _Log2.default.info("signinPopup successful");
	                    }
	                }
	
	                return user;
	            });
	        }
	    }, {
	        key: 'signinPopupCallback',
	        value: function signinPopupCallback(url) {
	            _Log2.default.debug("UserManager.signinPopupCallback");
	            return this._signinCallback(url, this._popupNavigator).then(function (user) {
	                if (user) {
	                    if (user.profile && user.profile.sub) {
	                        _Log2.default.info("signinPopupCallback successful, signed in sub: ", user.profile.sub);
	                    } else {
	                        _Log2.default.info("signinPopupCallback successful");
	                    }
	                }
	
	                return user;
	            });
	        }
	    }, {
	        key: 'signinSilent',
	        value: function signinSilent() {
	            var _this4 = this;
	
	            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _Log2.default.debug("UserManager.signinSilent");
	
	            var url = args.redirect_uri || this.settings.silent_redirect_uri;
	            if (!url) {
	                _Log2.default.error("No silent_redirect_uri configured");
	                return Promise.reject(new Error("No silent_redirect_uri configured"));
	            }
	
	            args.redirect_uri = url;
	            args.prompt = "none";
	
	            var setIdToken = void 0;
	            if (args.id_token_hint || !this.settings.includeIdTokenInSilentRenew) {
	                setIdToken = Promise.resolve();
	            } else {
	                setIdToken = this._loadUser().then(function (user) {
	                    args.id_token_hint = user && user.id_token;
	                });
	            }
	
	            return setIdToken.then(function () {
	                return _this4._signin(args, _this4._iframeNavigator, {
	                    startUrl: url,
	                    silentRequestTimeout: args.silentRequestTimeout || _this4.settings.silentRequestTimeout
	                });
	            }).then(function (user) {
	                if (user) {
	                    if (user.profile && user.profile.sub) {
	                        _Log2.default.info("signinSilent successful, signed in sub: ", user.profile.sub);
	                    } else {
	                        _Log2.default.info("signinSilent successful");
	                    }
	                }
	
	                return user;
	            });
	        }
	    }, {
	        key: 'signinSilentCallback',
	        value: function signinSilentCallback(url) {
	            _Log2.default.debug("UserManager.signinSilentCallback");
	            return this._signinCallback(url, this._iframeNavigator).then(function (user) {
	                if (user) {
	                    if (user.profile && user.profile.sub) {
	                        _Log2.default.info("signinSilentCallback successful, signed in sub: ", user.profile.sub);
	                    } else {
	                        _Log2.default.info("signinSilentCallback successful");
	                    }
	                }
	
	                return user;
	            });
	        }
	    }, {
	        key: 'querySessionStatus',
	        value: function querySessionStatus() {
	            var _this5 = this;
	
	            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _Log2.default.debug("UserManager.querySessionStatus");
	
	            var url = args.redirect_uri || this.settings.silent_redirect_uri;
	            if (!url) {
	                _Log2.default.error("No silent_redirect_uri configured");
	                return Promise.reject(new Error("No silent_redirect_uri configured"));
	            }
	
	            args.redirect_uri = url;
	            args.prompt = "none";
	            args.response_type = "id_token";
	            args.scope = "openid";
	
	            return this._signinStart(args, this._iframeNavigator, {
	                startUrl: url,
	                silentRequestTimeout: args.silentRequestTimeout || this.settings.silentRequestTimeout
	            }).then(function (navResponse) {
	                return _this5.processSigninResponse(navResponse.url).then(function (signinResponse) {
	                    _Log2.default.debug("got signin response");
	
	                    if (signinResponse.session_state && signinResponse.profile.sub && signinResponse.profile.sid) {
	                        _Log2.default.info("querySessionStatus success for sub: ", signinResponse.profile.sub);
	                        return {
	                            session_state: signinResponse.session_state,
	                            sub: signinResponse.profile.sub,
	                            sid: signinResponse.profile.sid
	                        };
	                    } else {
	                        _Log2.default.info("querySessionStatus successful, user not authenticated");
	                    }
	                });
	            });
	        }
	    }, {
	        key: '_signin',
	        value: function _signin(args, navigator) {
	            var _this6 = this;
	
	            var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            _Log2.default.debug("_signin");
	            return this._signinStart(args, navigator, navigatorParams).then(function (navResponse) {
	                return _this6._signinEnd(navResponse.url);
	            });
	        }
	    }, {
	        key: '_signinStart',
	        value: function _signinStart(args, navigator) {
	            var _this7 = this;
	
	            var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            _Log2.default.debug("_signinStart");
	
	            return navigator.prepare(navigatorParams).then(function (handle) {
	                _Log2.default.debug("got navigator window handle");
	
	                return _this7.createSigninRequest(args).then(function (signinRequest) {
	                    _Log2.default.debug("got signin request");
	
	                    navigatorParams.url = signinRequest.url;
	                    navigatorParams.id = signinRequest.state.id;
	
	                    return handle.navigate(navigatorParams);
	                }).catch(function (err) {
	                    if (handle.close) {
	                        _Log2.default.debug("Error after preparing navigator, closing navigator window");
	                        handle.close();
	                    }
	                    throw err;
	                });
	            });
	        }
	    }, {
	        key: '_signinEnd',
	        value: function _signinEnd(url) {
	            var _this8 = this;
	
	            _Log2.default.debug("_signinEnd");
	
	            return this.processSigninResponse(url).then(function (signinResponse) {
	                _Log2.default.debug("got signin response");
	
	                var user = new _User2.default(signinResponse);
	
	                return _this8.storeUser(user).then(function () {
	                    _Log2.default.debug("user stored");
	
	                    _this8._events.load(user);
	
	                    return user;
	                });
	            });
	        }
	    }, {
	        key: '_signinCallback',
	        value: function _signinCallback(url, navigator) {
	            _Log2.default.debug("_signinCallback");
	            return navigator.callback(url);
	        }
	    }, {
	        key: 'signoutRedirect',
	        value: function signoutRedirect() {
	            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _Log2.default.debug("UserManager.signoutRedirect");
	            var postLogoutRedirectUri = args.post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
	            if (postLogoutRedirectUri) {
	                args.post_logout_redirect_uri = postLogoutRedirectUri;
	            }
	            return this._signoutStart(args, this._redirectNavigator).then(function () {
	                _Log2.default.info("signoutRedirect successful");
	            });
	        }
	    }, {
	        key: 'signoutRedirectCallback',
	        value: function signoutRedirectCallback(url) {
	            _Log2.default.debug("UserManager.signoutRedirectCallback");
	            return this._signoutEnd(url || this._redirectNavigator.url).then(function (response) {
	                _Log2.default.info("signoutRedirectCallback successful");
	                return response;
	            });
	        }
	    }, {
	        key: 'signoutPopup',
	        value: function signoutPopup() {
	            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            _Log2.default.debug("UserManager.signinPopup");
	
	            var url = args.post_logout_redirect_uri || this.settings.popup_post_logout_redirect_uri || this.settings.post_logout_redirect_uri;
	            args.post_logout_redirect_uri = url;
	            args.display = "popup";
	            if (args.post_logout_redirect_uri) {
	                // we're putting a dummy entry in here because we 
	                // need a unique id from the state for notification
	                // to the parent window, which is necessary if we
	                // plan to return back to the client after signout
	                // and so we can close the popup after signout
	                args.state = args.state || {};
	            }
	
	            return this._signout(args, this._popupNavigator, {
	                startUrl: url,
	                popupWindowFeatures: args.popupWindowFeatures || this.settings.popupWindowFeatures,
	                popupWindowTarget: args.popupWindowTarget || this.settings.popupWindowTarget
	            }).then(function () {
	                _Log2.default.info("signoutPopup successful");
	            });
	        }
	    }, {
	        key: 'signoutPopupCallback',
	        value: function signoutPopupCallback(url, keepOpen) {
	            if (typeof keepOpen === 'undefined' && typeof url === 'boolean') {
	                url = null;
	                keepOpen = true;
	            }
	            _Log2.default.debug("UserManager.signoutPopupCallback");
	            var delimiter = '?';
	            return this._popupNavigator.callback(url, keepOpen, delimiter).then(function () {
	                _Log2.default.info("signoutPopupCallback successful");
	            });
	        }
	    }, {
	        key: '_signout',
	        value: function _signout(args, navigator) {
	            var _this9 = this;
	
	            var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            _Log2.default.debug("_signout");
	            return this._signoutStart(args, navigator, navigatorParams).then(function (navResponse) {
	                return _this9._signoutEnd(navResponse.url);
	            });
	        }
	    }, {
	        key: '_signoutStart',
	        value: function _signoutStart() {
	            var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	            var _this10 = this;
	
	            var navigator = arguments[1];
	            var navigatorParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	            _Log2.default.debug("_signoutStart");
	
	            return navigator.prepare(navigatorParams).then(function (handle) {
	                _Log2.default.debug("got navigator window handle");
	
	                return _this10._loadUser().then(function (user) {
	                    _Log2.default.debug("loaded current user from storage");
	
	                    var revokePromise = _this10._settings.revokeAccessTokenOnSignout ? _this10._revokeInternal(user) : Promise.resolve();
	                    return revokePromise.then(function () {
	
	                        var id_token = args.id_token_hint || user && user.id_token;
	                        if (id_token) {
	                            _Log2.default.debug("Setting id_token into signout request");
	                            args.id_token_hint = id_token;
	                        }
	
	                        return _this10.removeUser().then(function () {
	                            _Log2.default.debug("user removed, creating signout request");
	
	                            return _this10.createSignoutRequest(args).then(function (signoutRequest) {
	                                _Log2.default.debug("got signout request");
	
	                                navigatorParams.url = signoutRequest.url;
	                                if (signoutRequest.state) {
	                                    navigatorParams.id = signoutRequest.state.id;
	                                }
	                                return handle.navigate(navigatorParams);
	                            });
	                        });
	                    });
	                }).catch(function (err) {
	                    if (handle.close) {
	                        _Log2.default.debug("Error after preparing navigator, closing navigator window");
	                        handle.close();
	                    }
	                    throw err;
	                });
	            });
	        }
	    }, {
	        key: '_signoutEnd',
	        value: function _signoutEnd(url) {
	            _Log2.default.debug("_signoutEnd");
	
	            return this.processSignoutResponse(url).then(function (signoutResponse) {
	                _Log2.default.debug("got signout response");
	
	                return signoutResponse;
	            });
	        }
	    }, {
	        key: 'revokeAccessToken',
	        value: function revokeAccessToken() {
	            var _this11 = this;
	
	            _Log2.default.debug("UserManager.revokeAccessToken");
	
	            return this._loadUser().then(function (user) {
	                return _this11._revokeInternal(user, true).then(function (success) {
	                    if (success) {
	                        _Log2.default.debug("removing token properties from user and re-storing");
	
	                        user.access_token = null;
	                        user.expires_at = null;
	                        user.token_type = null;
	
	                        return _this11.storeUser(user).then(function () {
	                            _Log2.default.debug("user stored");
	                            _this11._events.load(user);
	                        });
	                    }
	                });
	            }).then(function () {
	                _Log2.default.info("access token revoked successfully");
	            });
	        }
	    }, {
	        key: '_revokeInternal',
	        value: function _revokeInternal(user, required) {
	            _Log2.default.debug("checking if token revocation is necessary");
	
	            var access_token = user && user.access_token;
	
	            // check for JWT vs. reference token
	            if (!access_token || access_token.indexOf('.') >= 0) {
	                _Log2.default.debug("no need to revoke due to no user, token, or JWT format");
	                return Promise.resolve(false);
	            }
	
	            return this._tokenRevocationClient.revoke(access_token, required).then(function () {
	                return true;
	            });
	        }
	    }, {
	        key: 'startSilentRenew',
	        value: function startSilentRenew() {
	            this._silentRenewService.start();
	        }
	    }, {
	        key: 'stopSilentRenew',
	        value: function stopSilentRenew() {
	            this._silentRenewService.stop();
	        }
	    }, {
	        key: '_loadUser',
	        value: function _loadUser() {
	            _Log2.default.debug("_loadUser");
	
	            return this._userStore.get(this._userStoreKey).then(function (storageString) {
	                if (storageString) {
	                    _Log2.default.debug("user storageString loaded");
	                    return _User2.default.fromStorageString(storageString);
	                }
	
	                _Log2.default.debug("no user storageString");
	                return null;
	            });
	        }
	    }, {
	        key: 'storeUser',
	        value: function storeUser(user) {
	            if (user) {
	                _Log2.default.debug("storeUser storing user");
	
	                var storageString = user.toStorageString();
	                return this._userStore.set(this._userStoreKey, storageString);
	            } else {
	                _Log2.default.debug("storeUser removing user storage");
	                return this._userStore.remove(this._userStoreKey);
	            }
	        }
	    }, {
	        key: '_redirectNavigator',
	        get: function get() {
	            return this.settings.redirectNavigator;
	        }
	    }, {
	        key: '_popupNavigator',
	        get: function get() {
	            return this.settings.popupNavigator;
	        }
	    }, {
	        key: '_iframeNavigator',
	        get: function get() {
	            return this.settings.iframeNavigator;
	        }
	    }, {
	        key: '_userStore',
	        get: function get() {
	            return this.settings.userStore;
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            return this._events;
	        }
	    }, {
	        key: '_userStoreKey',
	        get: function get() {
	            return 'user:' + this.settings.authority + ':' + this.settings.client_id;
	        }
	    }]);
	
	    return UserManager;
	}(_OidcClient3.default);
	
	exports.default = UserManager;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _OidcClientSettings2 = __webpack_require__(3);
	
	var _OidcClientSettings3 = _interopRequireDefault(_OidcClientSettings2);
	
	var _RedirectNavigator = __webpack_require__(43);
	
	var _RedirectNavigator2 = _interopRequireDefault(_RedirectNavigator);
	
	var _IFrameNavigator = __webpack_require__(44);
	
	var _IFrameNavigator2 = _interopRequireDefault(_IFrameNavigator);
	
	var _WebStorageStateStore = __webpack_require__(4);
	
	var _WebStorageStateStore2 = _interopRequireDefault(_WebStorageStateStore);
	
	var _Global = __webpack_require__(5);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var DefaultAccessTokenExpiringNotificationTime = 60;
	var DefaultCheckSessionInterval = 2000;
	
	var UserManagerSettings = function (_OidcClientSettings) {
	    _inherits(UserManagerSettings, _OidcClientSettings);
	
	    function UserManagerSettings() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            popup_redirect_uri = _ref.popup_redirect_uri,
	            popup_post_logout_redirect_uri = _ref.popup_post_logout_redirect_uri,
	            popupWindowFeatures = _ref.popupWindowFeatures,
	            popupWindowTarget = _ref.popupWindowTarget,
	            silent_redirect_uri = _ref.silent_redirect_uri,
	            silentRequestTimeout = _ref.silentRequestTimeout,
	            _ref$automaticSilentR = _ref.automaticSilentRenew,
	            automaticSilentRenew = _ref$automaticSilentR === undefined ? false : _ref$automaticSilentR,
	            _ref$includeIdTokenIn = _ref.includeIdTokenInSilentRenew,
	            includeIdTokenInSilentRenew = _ref$includeIdTokenIn === undefined ? true : _ref$includeIdTokenIn,
	            _ref$monitorSession = _ref.monitorSession,
	            monitorSession = _ref$monitorSession === undefined ? true : _ref$monitorSession,
	            _ref$checkSessionInte = _ref.checkSessionInterval,
	            checkSessionInterval = _ref$checkSessionInte === undefined ? DefaultCheckSessionInterval : _ref$checkSessionInte,
	            _ref$revokeAccessToke = _ref.revokeAccessTokenOnSignout,
	            revokeAccessTokenOnSignout = _ref$revokeAccessToke === undefined ? false : _ref$revokeAccessToke,
	            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
	            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
	            _ref$redirectNavigato = _ref.redirectNavigator,
	            redirectNavigator = _ref$redirectNavigato === undefined ? new _RedirectNavigator2.default() : _ref$redirectNavigato,
	            _ref$popupNavigator = _ref.popupNavigator,
	            popupNavigator = _ref$popupNavigator === undefined ? new PopupNavigator() : _ref$popupNavigator,
	            _ref$iframeNavigator = _ref.iframeNavigator,
	            iframeNavigator = _ref$iframeNavigator === undefined ? new _IFrameNavigator2.default() : _ref$iframeNavigator,
	            _ref$userStore = _ref.userStore,
	            userStore = _ref$userStore === undefined ? new _WebStorageStateStore2.default({ store: _Global2.default.sessionStorage }) : _ref$userStore;
	
	        _classCallCheck(this, UserManagerSettings);
	
	        var _this = _possibleConstructorReturn(this, (UserManagerSettings.__proto__ || Object.getPrototypeOf(UserManagerSettings)).call(this, arguments[0]));
	
	        _this._popup_redirect_uri = popup_redirect_uri;
	        _this._popup_post_logout_redirect_uri = popup_post_logout_redirect_uri;
	        _this._popupWindowFeatures = popupWindowFeatures;
	        _this._popupWindowTarget = popupWindowTarget;
	
	        _this._silent_redirect_uri = silent_redirect_uri;
	        _this._silentRequestTimeout = silentRequestTimeout;
	        _this._automaticSilentRenew = !!automaticSilentRenew;
	        _this._includeIdTokenInSilentRenew = includeIdTokenInSilentRenew;
	        _this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;
	
	        _this._monitorSession = monitorSession;
	        _this._checkSessionInterval = checkSessionInterval;
	        _this._revokeAccessTokenOnSignout = revokeAccessTokenOnSignout;
	
	        _this._redirectNavigator = redirectNavigator;
	        _this._popupNavigator = popupNavigator;
	        _this._iframeNavigator = iframeNavigator;
	
	        _this._userStore = userStore;
	        return _this;
	    }
	
	    _createClass(UserManagerSettings, [{
	        key: 'popup_redirect_uri',
	        get: function get() {
	            return this._popup_redirect_uri;
	        }
	    }, {
	        key: 'popup_post_logout_redirect_uri',
	        get: function get() {
	            return this._popup_post_logout_redirect_uri;
	        }
	    }, {
	        key: 'popupWindowFeatures',
	        get: function get() {
	            return this._popupWindowFeatures;
	        }
	    }, {
	        key: 'popupWindowTarget',
	        get: function get() {
	            return this._popupWindowTarget;
	        }
	    }, {
	        key: 'silent_redirect_uri',
	        get: function get() {
	            return this._silent_redirect_uri;
	        }
	    }, {
	        key: 'silentRequestTimeout',
	        get: function get() {
	            return this._silentRequestTimeout;
	        }
	    }, {
	        key: 'automaticSilentRenew',
	        get: function get() {
	            return !!(this.silent_redirect_uri && this._automaticSilentRenew);
	        }
	    }, {
	        key: 'includeIdTokenInSilentRenew',
	        get: function get() {
	            return this._includeIdTokenInSilentRenew;
	        }
	    }, {
	        key: 'accessTokenExpiringNotificationTime',
	        get: function get() {
	            return this._accessTokenExpiringNotificationTime;
	        }
	    }, {
	        key: 'monitorSession',
	        get: function get() {
	            return this._monitorSession;
	        }
	    }, {
	        key: 'checkSessionInterval',
	        get: function get() {
	            return this._checkSessionInterval;
	        }
	    }, {
	        key: 'revokeAccessTokenOnSignout',
	        get: function get() {
	            return this._revokeAccessTokenOnSignout;
	        }
	    }, {
	        key: 'redirectNavigator',
	        get: function get() {
	            return this._redirectNavigator;
	        }
	    }, {
	        key: 'popupNavigator',
	        get: function get() {
	            return this._popupNavigator;
	        }
	    }, {
	        key: 'iframeNavigator',
	        get: function get() {
	            return this._iframeNavigator;
	        }
	    }, {
	        key: 'userStore',
	        get: function get() {
	            return this._userStore;
	        }
	    }]);
	
	    return UserManagerSettings;
	}(_OidcClientSettings3.default);
	
	exports.default = UserManagerSettings;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RedirectNavigator = function () {
	    function RedirectNavigator() {
	        _classCallCheck(this, RedirectNavigator);
	    }
	
	    _createClass(RedirectNavigator, [{
	        key: "prepare",
	        value: function prepare() {
	            return Promise.resolve(this);
	        }
	    }, {
	        key: "navigate",
	        value: function navigate(params) {
	            _Log2.default.debug("RedirectNavigator.navigate");
	
	            if (!params || !params.url) {
	                _Log2.default.error("No url provided");
	                return Promise.reject(new Error("No url provided"));
	            }
	
	            window.location = params.url;
	
	            return Promise.resolve();
	        }
	    }, {
	        key: "url",
	        get: function get() {
	            _Log2.default.debug("RedirectNavigator.url");
	            return window.location.href;
	        }
	    }]);
	
	    return RedirectNavigator;
	}();
	
	exports.default = RedirectNavigator;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _IFrameWindow = __webpack_require__(45);
	
	var _IFrameWindow2 = _interopRequireDefault(_IFrameWindow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var IFrameNavigator = function () {
	    function IFrameNavigator() {
	        _classCallCheck(this, IFrameNavigator);
	    }
	
	    _createClass(IFrameNavigator, [{
	        key: 'prepare',
	        value: function prepare(params) {
	            var frame = new _IFrameWindow2.default(params);
	            return Promise.resolve(frame);
	        }
	    }, {
	        key: 'callback',
	        value: function callback(url) {
	            _Log2.default.debug("IFrameNavigator.callback");
	
	            try {
	                _IFrameWindow2.default.notifyParent(url);
	                return Promise.resolve();
	            } catch (e) {
	                return Promise.reject(e);
	            }
	        }
	    }]);
	
	    return IFrameNavigator;
	}();
	
	exports.default = IFrameNavigator;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DefaultTimeout = 10000;
	
	var IFrameWindow = function () {
	    function IFrameWindow(params) {
	        var _this = this;
	
	        _classCallCheck(this, IFrameWindow);
	
	        _Log2.default.debug("IFrameWindow.ctor");
	
	        this._promise = new Promise(function (resolve, reject) {
	            _this._resolve = resolve;
	            _this._reject = reject;
	        });
	
	        this._boundMessageEvent = this._message.bind(this);
	        window.addEventListener("message", this._boundMessageEvent, false);
	
	        this._frame = window.document.createElement("iframe");
	
	        // shotgun approach
	        this._frame.style.visibility = "hidden";
	        this._frame.style.position = "absolute";
	        this._frame.style.display = "none";
	        this._frame.style.width = 0;
	        this._frame.style.height = 0;
	
	        window.document.body.appendChild(this._frame);
	    }
	
	    _createClass(IFrameWindow, [{
	        key: "navigate",
	        value: function navigate(params) {
	            _Log2.default.debug("IFrameWindow.navigate");
	
	            if (!params || !params.url) {
	                this._error("No url provided");
	            } else {
	                var timeout = params.silentRequestTimeout || DefaultTimeout;
	                _Log2.default.debug("Using timeout of:", timeout);
	                this._timer = window.setTimeout(this._timeout.bind(this), timeout);
	                this._frame.src = params.url;
	            }
	
	            return this.promise;
	        }
	    }, {
	        key: "_success",
	        value: function _success(data) {
	            this._cleanup();
	
	            _Log2.default.debug("Successful response from frame window");
	            this._resolve(data);
	        }
	    }, {
	        key: "_error",
	        value: function _error(message) {
	            this._cleanup();
	
	            _Log2.default.error(message);
	            this._reject(new Error(message));
	        }
	    }, {
	        key: "close",
	        value: function close() {
	            this._cleanup();
	        }
	    }, {
	        key: "_cleanup",
	        value: function _cleanup() {
	            if (this._frame) {
	                _Log2.default.debug("IFrameWindow._cleanup");
	
	                window.removeEventListener("message", this._boundMessageEvent, false);
	                window.clearTimeout(this._timer);
	                window.document.body.removeChild(this._frame);
	
	                this._timer = null;
	                this._frame = null;
	                this._boundMessageEvent = null;
	            }
	        }
	    }, {
	        key: "_timeout",
	        value: function _timeout() {
	            _Log2.default.debug("IFrameWindow._timeout");
	            this._error("Frame window timed out");
	        }
	    }, {
	        key: "_message",
	        value: function _message(e) {
	            _Log2.default.debug("IFrameWindow._message");
	
	            if (this._timer && e.origin === this._origin && e.source === this._frame.contentWindow) {
	                var url = e.data;
	                if (url) {
	                    this._success({ url: url });
	                } else {
	                    this._error("Invalid response from frame");
	                }
	            }
	        }
	    }, {
	        key: "promise",
	        get: function get() {
	            return this._promise;
	        }
	    }, {
	        key: "_origin",
	        get: function get() {
	            return location.protocol + "//" + location.host;
	        }
	    }], [{
	        key: "notifyParent",
	        value: function notifyParent(url) {
	            _Log2.default.debug("IFrameWindow.notifyParent");
	
	            if (window.parent && window !== window.parent) {
	                url = url || window.location.href;
	                if (url) {
	                    _Log2.default.debug("posting url message to parent");
	                    window.parent.postMessage(url, location.protocol + "//" + location.host);
	                }
	            }
	        }
	    }]);
	
	    return IFrameWindow;
	}();
	
	exports.default = IFrameWindow;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var User = function () {
	    function User(_ref) {
	        var id_token = _ref.id_token,
	            session_state = _ref.session_state,
	            access_token = _ref.access_token,
	            token_type = _ref.token_type,
	            scope = _ref.scope,
	            profile = _ref.profile,
	            expires_at = _ref.expires_at,
	            state = _ref.state;
	
	        _classCallCheck(this, User);
	
	        this.id_token = id_token;
	        this.session_state = session_state;
	        this.access_token = access_token;
	        this.token_type = token_type;
	        this.scope = scope;
	        this.profile = profile;
	        this.expires_at = expires_at;
	        this.state = state;
	    }
	
	    _createClass(User, [{
	        key: "toStorageString",
	        value: function toStorageString() {
	            _Log2.default.debug("User.toStorageString");
	            return JSON.stringify({
	                id_token: this.id_token,
	                session_state: this.session_state,
	                access_token: this.access_token,
	                token_type: this.token_type,
	                scope: this.scope,
	                profile: this.profile,
	                expires_at: this.expires_at
	            });
	        }
	    }, {
	        key: "expires_in",
	        get: function get() {
	            if (this.expires_at) {
	                var now = parseInt(Date.now() / 1000);
	                return this.expires_at - now;
	            }
	            return undefined;
	        }
	    }, {
	        key: "expired",
	        get: function get() {
	            var expires_in = this.expires_in;
	            if (expires_in !== undefined) {
	                return expires_in <= 0;
	            }
	            return undefined;
	        }
	    }, {
	        key: "scopes",
	        get: function get() {
	            return (this.scope || "").split(" ");
	        }
	    }], [{
	        key: "fromStorageString",
	        value: function fromStorageString(storageString) {
	            _Log2.default.debug("User.fromStorageString");
	            return new User(JSON.parse(storageString));
	        }
	    }]);
	
	    return User;
	}();
	
	exports.default = User;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _AccessTokenEvents2 = __webpack_require__(48);
	
	var _AccessTokenEvents3 = _interopRequireDefault(_AccessTokenEvents2);
	
	var _Event = __webpack_require__(50);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var UserManagerEvents = function (_AccessTokenEvents) {
	    _inherits(UserManagerEvents, _AccessTokenEvents);
	
	    function UserManagerEvents(settings) {
	        _classCallCheck(this, UserManagerEvents);
	
	        var _this = _possibleConstructorReturn(this, (UserManagerEvents.__proto__ || Object.getPrototypeOf(UserManagerEvents)).call(this, settings));
	
	        _this._userLoaded = new _Event2.default("User loaded");
	        _this._userUnloaded = new _Event2.default("User unloaded");
	        _this._silentRenewError = new _Event2.default("Silent renew error");
	        _this._userSignedOut = new _Event2.default("User signed out");
	        _this._userSessionChanged = new _Event2.default("User session changed");
	        return _this;
	    }
	
	    _createClass(UserManagerEvents, [{
	        key: 'load',
	        value: function load(user) {
	            var raiseEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            _Log2.default.debug("UserManagerEvents.load");
	            _get(UserManagerEvents.prototype.__proto__ || Object.getPrototypeOf(UserManagerEvents.prototype), 'load', this).call(this, user);
	            if (raiseEvent) {
	                this._userLoaded.raise(user);
	            }
	        }
	    }, {
	        key: 'unload',
	        value: function unload() {
	            _Log2.default.debug("UserManagerEvents.unload");
	            _get(UserManagerEvents.prototype.__proto__ || Object.getPrototypeOf(UserManagerEvents.prototype), 'unload', this).call(this);
	            this._userUnloaded.raise();
	        }
	    }, {
	        key: 'addUserLoaded',
	        value: function addUserLoaded(cb) {
	            this._userLoaded.addHandler(cb);
	        }
	    }, {
	        key: 'removeUserLoaded',
	        value: function removeUserLoaded(cb) {
	            this._userLoaded.removeHandler(cb);
	        }
	    }, {
	        key: 'addUserUnloaded',
	        value: function addUserUnloaded(cb) {
	            this._userUnloaded.addHandler(cb);
	        }
	    }, {
	        key: 'removeUserUnloaded',
	        value: function removeUserUnloaded(cb) {
	            this._userUnloaded.removeHandler(cb);
	        }
	    }, {
	        key: 'addSilentRenewError',
	        value: function addSilentRenewError(cb) {
	            this._silentRenewError.addHandler(cb);
	        }
	    }, {
	        key: 'removeSilentRenewError',
	        value: function removeSilentRenewError(cb) {
	            this._silentRenewError.removeHandler(cb);
	        }
	    }, {
	        key: '_raiseSilentRenewError',
	        value: function _raiseSilentRenewError(e) {
	            _Log2.default.debug("UserManagerEvents._raiseSilentRenewError", e.message);
	            this._silentRenewError.raise(e);
	        }
	    }, {
	        key: 'addUserSignedOut',
	        value: function addUserSignedOut(cb) {
	            this._userSignedOut.addHandler(cb);
	        }
	    }, {
	        key: 'removeUserSignedOut',
	        value: function removeUserSignedOut(cb) {
	            this._userSignedOut.removeHandler(cb);
	        }
	    }, {
	        key: '_raiseUserSignedOut',
	        value: function _raiseUserSignedOut(e) {
	            _Log2.default.debug("UserManagerEvents._raiseUserSignedOut");
	            this._userSignedOut.raise(e);
	        }
	    }, {
	        key: 'addUserSessionChanged',
	        value: function addUserSessionChanged(cb) {
	            this._userSessionChanged.addHandler(cb);
	        }
	    }, {
	        key: 'removeUserSessionChanged',
	        value: function removeUserSessionChanged(cb) {
	            this._userSessionChanged.removeHandler(cb);
	        }
	    }, {
	        key: '_raiseUserSessionChanged',
	        value: function _raiseUserSessionChanged(e) {
	            _Log2.default.debug("UserManagerEvents._raiseUserSessionChanged");
	            this._userSessionChanged.raise(e);
	        }
	    }]);
	
	    return UserManagerEvents;
	}(_AccessTokenEvents3.default);
	
	exports.default = UserManagerEvents;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _Timer = __webpack_require__(49);
	
	var _Timer2 = _interopRequireDefault(_Timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DefaultAccessTokenExpiringNotificationTime = 60; // seconds
	
	var AccessTokenEvents = function () {
	    function AccessTokenEvents() {
	        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	            _ref$accessTokenExpir = _ref.accessTokenExpiringNotificationTime,
	            accessTokenExpiringNotificationTime = _ref$accessTokenExpir === undefined ? DefaultAccessTokenExpiringNotificationTime : _ref$accessTokenExpir,
	            _ref$accessTokenExpir2 = _ref.accessTokenExpiringTimer,
	            accessTokenExpiringTimer = _ref$accessTokenExpir2 === undefined ? new _Timer2.default("Access token expiring") : _ref$accessTokenExpir2,
	            _ref$accessTokenExpir3 = _ref.accessTokenExpiredTimer,
	            accessTokenExpiredTimer = _ref$accessTokenExpir3 === undefined ? new _Timer2.default("Access token expired") : _ref$accessTokenExpir3;
	
	        _classCallCheck(this, AccessTokenEvents);
	
	        this._accessTokenExpiringNotificationTime = accessTokenExpiringNotificationTime;
	
	        this._accessTokenExpiring = accessTokenExpiringTimer;
	        this._accessTokenExpired = accessTokenExpiredTimer;
	    }
	
	    _createClass(AccessTokenEvents, [{
	        key: 'load',
	        value: function load(container) {
	            _Log2.default.debug("AccessTokenEvents.load");
	
	            this._cancelTimers();
	
	            // only register events if there's an access token where we care about expiration
	            if (container.access_token) {
	                var duration = container.expires_in;
	                _Log2.default.debug("access token present, remaining duration:", duration);
	
	                if (duration > 0) {
	                    // only register expiring if we still have time
	                    var expiring = duration - this._accessTokenExpiringNotificationTime;
	                    if (expiring <= 0) {
	                        expiring = 1;
	                    }
	                    _Log2.default.debug("registering expiring timer in:", expiring);
	                    this._accessTokenExpiring.init(expiring);
	                }
	
	                // always register expired. if it's negative, it will still fire
	                var expired = duration + 1;
	                _Log2.default.debug("registering expired timer in:", expired);
	                this._accessTokenExpired.init(expired);
	            }
	        }
	    }, {
	        key: 'unload',
	        value: function unload() {
	            _Log2.default.debug("AccessTokenEvents.unload");
	            this._cancelTimers();
	        }
	    }, {
	        key: '_cancelTimers',
	        value: function _cancelTimers() {
	            _Log2.default.debug("canceling existing access token timers");
	            this._accessTokenExpiring.cancel();
	            this._accessTokenExpired.cancel();
	        }
	    }, {
	        key: 'addAccessTokenExpiring',
	        value: function addAccessTokenExpiring(cb) {
	            this._accessTokenExpiring.addHandler(cb);
	        }
	    }, {
	        key: 'removeAccessTokenExpiring',
	        value: function removeAccessTokenExpiring(cb) {
	            this._accessTokenExpiring.removeHandler(cb);
	        }
	    }, {
	        key: 'addAccessTokenExpired',
	        value: function addAccessTokenExpired(cb) {
	            this._accessTokenExpired.addHandler(cb);
	        }
	    }, {
	        key: 'removeAccessTokenExpired',
	        value: function removeAccessTokenExpired(cb) {
	            this._accessTokenExpired.removeHandler(cb);
	        }
	    }]);
	
	    return AccessTokenEvents;
	}();
	
	exports.default = AccessTokenEvents;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _Global = __webpack_require__(5);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	var _Event2 = __webpack_require__(50);
	
	var _Event3 = _interopRequireDefault(_Event2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var TimerDuration = 5; // seconds
	
	var Timer = function (_Event) {
	    _inherits(Timer, _Event);
	
	    function Timer(name) {
	        var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global2.default.timer;
	
	        _classCallCheck(this, Timer);
	
	        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, name));
	
	        _this._timer = timer;
	        _this._nowFunc = function () {
	            return Date.now() / 1000;
	        };
	        return _this;
	    }
	
	    _createClass(Timer, [{
	        key: 'init',
	        value: function init(duration) {
	            this.cancel();
	
	            if (duration <= 0) {
	                duration = 1;
	            }
	            duration = parseInt(duration);
	
	            _Log2.default.debug("Timer.init timer " + this._name + " for duration:", duration);
	            this._expiration = this.now + duration;
	
	            // we're using a fairly short timer and then checking the expiration in the 
	            // callback to handle scenarios where the browser device sleeps, and then 
	            // the timers end up getting delayed.
	            var timerDuration = TimerDuration;
	            if (duration < timerDuration) {
	                timerDuration = duration;
	            }
	            this._timerHandle = this._timer.setInterval(this._callback.bind(this), timerDuration * 1000);
	        }
	    }, {
	        key: 'cancel',
	        value: function cancel() {
	            if (this._timerHandle) {
	                _Log2.default.debug("Timer.cancel: ", this._name);
	                this._timer.clearInterval(this._timerHandle);
	                this._timerHandle = null;
	            }
	        }
	    }, {
	        key: '_callback',
	        value: function _callback() {
	            var diff = this._expiration - this.now;
	            _Log2.default.debug("Timer._callback; " + this._name + " timer expires in:", diff);
	
	            if (this._expiration <= this.now) {
	                this.cancel();
	                _get(Timer.prototype.__proto__ || Object.getPrototypeOf(Timer.prototype), 'raise', this).call(this);
	            }
	        }
	    }, {
	        key: 'now',
	        get: function get() {
	            return parseInt(this._nowFunc());
	        }
	    }]);
	
	    return Timer;
	}(_Event3.default);
	
	exports.default = Timer;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Event = function () {
	    function Event(name) {
	        _classCallCheck(this, Event);
	
	        this._name = name;
	        this._callbacks = [];
	    }
	
	    _createClass(Event, [{
	        key: "addHandler",
	        value: function addHandler(cb) {
	            this._callbacks.push(cb);
	        }
	    }, {
	        key: "removeHandler",
	        value: function removeHandler(cb) {
	            var idx = this._callbacks.findIndex(function (item) {
	                return item === cb;
	            });
	            if (idx >= 0) {
	                this._callbacks.splice(idx, 1);
	            }
	        }
	    }, {
	        key: "raise",
	        value: function raise() {
	            _Log2.default.debug("Raising event: " + this._name);
	            for (var i = 0; i < this._callbacks.length; i++) {
	                var _callbacks;
	
	                (_callbacks = this._callbacks)[i].apply(_callbacks, arguments);
	            }
	        }
	    }]);
	
	    return Event;
	}();
	
	exports.default = Event;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SilentRenewService = function () {
	    function SilentRenewService(userManager) {
	        _classCallCheck(this, SilentRenewService);
	
	        this._userManager = userManager;
	    }
	
	    _createClass(SilentRenewService, [{
	        key: "start",
	        value: function start() {
	            if (!this._callback) {
	                this._callback = this._tokenExpiring.bind(this);
	                this._userManager.events.addAccessTokenExpiring(this._callback);
	
	                // this will trigger loading of the user so the expiring events can be initialized
	                this._userManager.getUser().then(function (user) {
	                    // deliberate nop
	                }).catch(function (err) {
	                    // catch to suppress errors since we're in a ctor
	                    _Log2.default.error("Error from getUser:", err.message);
	                });
	            }
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            if (this._callback) {
	                this._userManager.events.removeAccessTokenExpiring(this._callback);
	                delete this._callback;
	            }
	        }
	    }, {
	        key: "_tokenExpiring",
	        value: function _tokenExpiring() {
	            var _this = this;
	
	            _Log2.default.debug("SilentRenewService automatically renewing access token");
	
	            this._userManager.signinSilent().then(function (user) {
	                _Log2.default.debug("Silent token renewal successful");
	            }, function (err) {
	                _Log2.default.error("Error from signinSilent:", err.message);
	                _this._userManager.events._raiseSilentRenewError(err);
	            });
	        }
	    }]);
	
	    return SilentRenewService;
	}();
	
	exports.default = SilentRenewService;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _CheckSessionIFrame = __webpack_require__(53);
	
	var _CheckSessionIFrame2 = _interopRequireDefault(_CheckSessionIFrame);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SessionMonitor = function () {
	    function SessionMonitor(userManager) {
	        var _this = this;
	
	        var CheckSessionIFrameCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CheckSessionIFrame2.default;
	
	        _classCallCheck(this, SessionMonitor);
	
	        if (!userManager) {
	            _Log2.default.error("No user manager passed to SessionMonitor");
	            throw new Error("userManager");
	        }
	
	        this._userManager = userManager;
	        this._CheckSessionIFrameCtor = CheckSessionIFrameCtor;
	
	        this._userManager.events.addUserLoaded(this._start.bind(this));
	        this._userManager.events.addUserUnloaded(this._stop.bind(this));
	
	        this._userManager.getUser().then(function (user) {
	            if (user) {
	                _this._start(user);
	            }
	        }).catch(function (err) {
	            // catch to suppress errors since we're in a ctor
	            _Log2.default.error("SessionMonitor ctor; error from getUser:", err.message);
	        });
	    }
	
	    _createClass(SessionMonitor, [{
	        key: '_start',
	        value: function _start(user) {
	            var _this2 = this;
	
	            var session_state = user.session_state;
	
	            if (session_state) {
	                this._sub = user.profile.sub;
	                this._sid = user.profile.sid;
	                _Log2.default.debug("SessionMonitor._start; session_state:", session_state, ", sub:", this._sub);
	
	                if (!this._checkSessionIFrame) {
	                    this._metadataService.getCheckSessionIframe().then(function (url) {
	                        if (url) {
	                            _Log2.default.debug("Initializing check session iframe");
	
	                            var client_id = _this2._client_id;
	                            var interval = _this2._checkSessionInterval;
	
	                            _this2._checkSessionIFrame = new _this2._CheckSessionIFrameCtor(_this2._callback.bind(_this2), client_id, url, interval);
	                            _this2._checkSessionIFrame.load().then(function () {
	                                _this2._checkSessionIFrame.start(session_state);
	                            });
	                        } else {
	                            _Log2.default.warn("No check session iframe found in the metadata");
	                        }
	                    }).catch(function (err) {
	                        // catch to suppress errors since we're in non-promise callback
	                        _Log2.default.error("Error from getCheckSessionIframe:", err.message);
	                    });
	                } else {
	                    this._checkSessionIFrame.start(session_state);
	                }
	            }
	        }
	    }, {
	        key: '_stop',
	        value: function _stop() {
	            _Log2.default.debug("SessionMonitor._stop");
	
	            this._sub = null;
	            this._sid = null;
	
	            if (this._checkSessionIFrame) {
	                this._checkSessionIFrame.stop();
	            }
	        }
	    }, {
	        key: '_callback',
	        value: function _callback() {
	            var _this3 = this;
	
	            _Log2.default.debug("SessionMonitor._callback");
	
	            this._userManager.querySessionStatus().then(function (session) {
	                var raiseUserSignedOutEvent = true;
	
	                if (session) {
	                    if (session.sub === _this3._sub) {
	                        raiseUserSignedOutEvent = false;
	                        _this3._checkSessionIFrame.start(session.session_state);
	
	                        if (session.sid === _this3._sid) {
	                            _Log2.default.debug("Same sub still logged in at OP, restarting check session iframe; session_state:", session.session_state);
	                        } else {
	                            _Log2.default.debug("Same sub still logged in at OP, session state has changed, restarting check session iframe; session_state:", session.session_state);
	                            _this3._userManager.events._raiseUserSessionChanged();
	                        }
	                    } else {
	                        _Log2.default.debug("Different subject signed into OP:", session.sub);
	                    }
	                } else {
	                    _Log2.default.debug("Subject no longer signed into OP");
	                }
	
	                if (raiseUserSignedOutEvent) {
	                    _Log2.default.debug("SessionMonitor._callback; raising signed out event");
	                    _this3._userManager.events._raiseUserSignedOut();
	                }
	            }).catch(function (err) {
	                _Log2.default.debug("Error calling queryCurrentSigninSession; raising signed out event", err.message);
	                _this3._userManager.events._raiseUserSignedOut();
	            });
	        }
	    }, {
	        key: '_settings',
	        get: function get() {
	            return this._userManager.settings;
	        }
	    }, {
	        key: '_metadataService',
	        get: function get() {
	            return this._userManager.metadataService;
	        }
	    }, {
	        key: '_client_id',
	        get: function get() {
	            return this._settings.client_id;
	        }
	    }, {
	        key: '_checkSessionInterval',
	        get: function get() {
	            return this._settings.checkSessionInterval;
	        }
	    }]);
	
	    return SessionMonitor;
	}();
	
	exports.default = SessionMonitor;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DefaultInterval = 2000;
	
	var CheckSessionIFrame = function () {
	    function CheckSessionIFrame(callback, client_id, url, interval) {
	        _classCallCheck(this, CheckSessionIFrame);
	
	        this._callback = callback;
	        this._client_id = client_id;
	        this._url = url;
	        this._interval = interval || DefaultInterval;
	
	        var idx = url.indexOf("/", url.indexOf("//") + 2);
	        this._frame_origin = url.substr(0, idx);
	
	        this._frame = window.document.createElement("iframe");
	
	        // shotgun approach
	        this._frame.style.visibility = "hidden";
	        this._frame.style.position = "absolute";
	        this._frame.style.display = "none";
	        this._frame.style.width = 0;
	        this._frame.style.height = 0;
	
	        this._frame.src = url;
	    }
	
	    _createClass(CheckSessionIFrame, [{
	        key: "load",
	        value: function load() {
	            var _this = this;
	
	            return new Promise(function (resolve) {
	                _this._frame.onload = function () {
	                    resolve();
	                };
	
	                window.document.body.appendChild(_this._frame);
	                _this._boundMessageEvent = _this._message.bind(_this);
	                window.addEventListener("message", _this._boundMessageEvent, false);
	            });
	        }
	    }, {
	        key: "_message",
	        value: function _message(e) {
	            if (e.origin === this._frame_origin && e.source === this._frame.contentWindow) {
	                if (e.data === "error") {
	                    _Log2.default.error("error message from check session op iframe");
	                    this.stop();
	                } else if (e.data === "changed") {
	                    _Log2.default.debug("changed message from check session op iframe");
	                    this.stop();
	                    this._callback();
	                } else {
	                    _Log2.default.debug(e.data + " message from check session op iframe");
	                }
	            }
	        }
	    }, {
	        key: "start",
	        value: function start(session_state) {
	            var _this2 = this;
	
	            if (this._session_state !== session_state) {
	                _Log2.default.debug("CheckSessionIFrame.start");
	
	                this.stop();
	
	                this._session_state = session_state;
	
	                this._timer = window.setInterval(function () {
	                    _this2._frame.contentWindow.postMessage(_this2._client_id + " " + _this2._session_state, _this2._frame_origin);
	                }, this._interval);
	            }
	        }
	    }, {
	        key: "stop",
	        value: function stop() {
	            _Log2.default.debug("CheckSessionIFrame.stop");
	
	            this._session_state = null;
	
	            if (this._timer) {
	                window.clearInterval(this._timer);
	                this._timer = null;
	            }
	        }
	    }]);
	
	    return CheckSessionIFrame;
	}();
	
	exports.default = CheckSessionIFrame;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
	// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.
	
	var _Log = __webpack_require__(1);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	var _MetadataService = __webpack_require__(7);
	
	var _MetadataService2 = _interopRequireDefault(_MetadataService);
	
	var _Global = __webpack_require__(5);
	
	var _Global2 = _interopRequireDefault(_Global);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AccessTokenTypeHint = "access_token";
	
	var TokenRevocationClient = function () {
	    function TokenRevocationClient(settings) {
	        var XMLHttpRequestCtor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Global2.default.XMLHttpRequest;
	        var MetadataServiceCtor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _MetadataService2.default;
	
	        _classCallCheck(this, TokenRevocationClient);
	
	        if (!settings) {
	            _Log2.default.error("No settings provided");
	            throw new Error("No settings provided.");
	        }
	
	        this._settings = settings;
	        this._XMLHttpRequestCtor = XMLHttpRequestCtor;
	        this._metadataService = new MetadataServiceCtor(this._settings);
	    }
	
	    _createClass(TokenRevocationClient, [{
	        key: 'revoke',
	        value: function revoke(accessToken, required) {
	            var _this = this;
	
	            _Log2.default.debug("TokenRevocationClient.revoke");
	
	            if (!accessToken) {
	                _Log2.default.error("No accessToken provided");
	                throw new Error("No accessToken provided.");
	            }
	
	            return this._metadataService.getRevocationEndpoint().then(function (url) {
	                if (!url) {
	                    if (required) {
	                        _Log2.default.error("Revocation not supported");
	                        throw new Error("Revocation not supported");
	                    }
	
	                    // not required, so don't error and just return
	                    return;
	                }
	
	                var client_id = _this._settings.client_id;
	                var client_secret = _this._settings.client_secret;
	                return _this._revoke(url, client_id, client_secret, accessToken);
	            });
	        }
	    }, {
	        key: '_revoke',
	        value: function _revoke(url, client_id, client_secret, accessToken) {
	            var _this2 = this;
	
	            _Log2.default.debug("Calling revocation endpoint");
	
	            return new Promise(function (resolve, reject) {
	
	                var xhr = new _this2._XMLHttpRequestCtor();
	                xhr.open("POST", url);
	
	                xhr.onload = function () {
	                    _Log2.default.debug("HTTP response received, status", xhr.status);
	
	                    if (xhr.status === 200) {
	                        resolve();
	                    } else {
	                        reject(Error(xhr.statusText + " (" + xhr.status + ")"));
	                    }
	                };
	
	                var body = "client_id=" + encodeURIComponent(client_id);
	                if (client_secret) {
	                    body += "&client_secret=" + encodeURIComponent(client_secret);
	                }
	                body += "&token_type_hint=" + encodeURIComponent(AccessTokenTypeHint);
	                body += "&token=" + encodeURIComponent(accessToken);
	
	                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	                xhr.send(body);
	            });
	        }
	    }]);
	
	    return TokenRevocationClient;
	}();
	
	exports.default = TokenRevocationClient;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNTUyOGQyMzk2ODU3YTAwZjc3YiIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9NZXRhZGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VySW5mb1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsLmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcnlwdG8tanMvc2hhMjU2LmpzIiwid2VicGFjazovLy8uL34vY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcnlwdG8tanMvZW5jLWJhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NyeXB0by1qcy9lbmMtaGV4LmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9yc2EtdmVyaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qc2JuL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL2p3a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cmwtam9pbi9saWIvdXJsLWpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL3JlcXVlc3QtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL3Jlc3BvbnNlLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2FnZW50LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9kdW1teS1jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXJsVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWRpcmVjdE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TaWxlbnRSZW5ld1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Nlc3Npb25Nb25pdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyJdLCJuYW1lcyI6WyJMb2ciLCJyZXF1aXJlIiwiZGVmYXVsdCIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDaGVja1Nlc3Npb25JRnJhbWUiLCJUb2tlblJldm9jYXRpb25DbGllbnQiLCJTZXNzaW9uTW9uaXRvciIsIkdsb2JhbCIsIlVzZXIiLCJub3BMb2dnZXIiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJjb25zb2xlIiwiYXJncyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwidmFsdWUiLCJFcnJvciIsInJlc2V0Iiwic2V0dGluZ3MiLCJfc2V0dGluZ3MiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJyZWRpcmVjdF91cmkiLCJkYXRhIiwic3RhdGUiLCJwcm9tcHQiLCJkaXNwbGF5IiwibWF4X2FnZSIsInVpX2xvY2FsZXMiLCJpZF90b2tlbl9oaW50IiwibG9naW5faGludCIsImFjcl92YWx1ZXMiLCJyZXNvdXJjZSIsInJlcXVlc3QiLCJyZXF1ZXN0X3VyaSIsImV4dHJhUXVlcnlQYXJhbXMiLCJzdGF0ZVN0b3JlIiwiY2xpZW50X2lkIiwiYXV0aG9yaXR5IiwiX21ldGFkYXRhU2VydmljZSIsImdldEF1dGhvcml6YXRpb25FbmRwb2ludCIsInRoZW4iLCJ1cmwiLCJzaWduaW5SZXF1ZXN0IiwiU2lnbmluUmVxdWVzdCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJQcm9taXNlIiwicmVqZWN0IiwicmVtb3ZlIiwic3RvcmVkU3RhdGVTdHJpbmciLCJTaWduaW5TdGF0ZSIsImZyb21TdG9yYWdlU3RyaW5nIiwiX3ZhbGlkYXRvciIsInZhbGlkYXRlU2lnbmluUmVzcG9uc2UiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJnZXRFbmRTZXNzaW9uRW5kcG9pbnQiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsIkVycm9yUmVzcG9uc2UiLCJyZXNvbHZlIiwic3RhdGVLZXkiLCJTdGF0ZSIsInZhbGlkYXRlU2lnbm91dFJlc3BvbnNlIiwiY2xlYXJTdGFsZVN0YXRlIiwic3RhbGVTdGF0ZUFnZSIsInZhbGlkYXRvciIsIm1ldGFkYXRhU2VydmljZSIsIk9pZGNNZXRhZGF0YVVybFBhdGgiLCJEZWZhdWx0UmVzcG9uc2VUeXBlIiwiRGVmYXVsdFNjb3BlIiwiRGVmYXVsdFN0YWxlU3RhdGVBZ2UiLCJEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzIiwibWV0YWRhdGFVcmwiLCJtZXRhZGF0YSIsInNpZ25pbmdLZXlzIiwiY2xpZW50X3NlY3JldCIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwiY2xvY2tTa2V3IiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YVVybCIsIl9tZXRhZGF0YSIsIl9zaWduaW5nS2V5cyIsIl9jbGllbnRfaWQiLCJfY2xpZW50X3NlY3JldCIsIl9yZXNwb25zZV90eXBlIiwiX3Njb3BlIiwiX3JlZGlyZWN0X3VyaSIsIl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcHJvbXB0IiwiX2Rpc3BsYXkiLCJfbWF4X2FnZSIsIl91aV9sb2NhbGVzIiwiX2Fjcl92YWx1ZXMiLCJfcmVzb3VyY2UiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX2V4dHJhUXVlcnlQYXJhbXMiLCJpbmRleE9mIiwibGVuZ3RoIiwicHJlZml4Iiwic3RvcmUiLCJsb2NhbFN0b3JhZ2UiLCJfc3RvcmUiLCJfcHJlZml4Iiwia2V5Iiwic2V0SXRlbSIsIml0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImtleXMiLCJpbmRleCIsInB1c2giLCJzdWJzdHIiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2IiLCJkdXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGUiLCJ0ZXN0aW5nIiwibmV3UmVxdWVzdCIsImxvY2F0aW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJYTUxIdHRwUmVxdWVzdCIsIlByb3RvY29sQ2xhaW1zIiwiVXNlckluZm9TZXJ2aWNlQ3RvciIsIlVzZXJJbmZvU2VydmljZSIsImpvc2VVdGlsIiwiSm9zZVV0aWwiLCJfdXNlckluZm9TZXJ2aWNlIiwiX2pvc2VVdGlsIiwiX3Byb2Nlc3NTaWduaW5QYXJhbXMiLCJfdmFsaWRhdGVUb2tlbnMiLCJfcHJvY2Vzc0NsYWltcyIsIm5vbmNlIiwiaWRfdG9rZW4iLCJpc09wZW5JZENvbm5lY3QiLCJwcm9maWxlIiwiYWNjZXNzX3Rva2VuIiwiZ2V0Q2xhaW1zIiwiY2xhaW1zIiwic3ViIiwiX21lcmdlQ2xhaW1zIiwiY2xhaW1zMSIsImNsYWltczIiLCJyZXN1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lIiwidmFsdWVzIiwiaXNBcnJheSIsImkiLCJmb3JFYWNoIiwidHlwZSIsIl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbiIsIl92YWxpZGF0ZUlkVG9rZW4iLCJfdmFsaWRhdGVBY2Nlc3NUb2tlbiIsImp3dCIsInBhcnNlSnd0IiwiaGVhZGVyIiwicGF5bG9hZCIsImtpZCIsImdldElzc3VlciIsImdldFNpZ25pbmdLZXlzIiwiX2ZpbHRlckJ5QWxnIiwiYWxnIiwiZmlsdGVyIiwiYXVkaWVuY2UiLCJjbG9ja1NrZXdJblNlY29uZHMiLCJ2YWxpZGF0ZUp3dCIsImlzc3VlciIsImt0eSIsInN0YXJ0c1dpdGgiLCJhdF9oYXNoIiwiaGFzaEFsZyIsImhhc2hCaXRzIiwicGFyc2VJbnQiLCJzaGEiLCJoYXNoIiwiaGFzaFN0cmluZyIsImxlZnQiLCJsZWZ0X2I2NHUiLCJoZXhUb0Jhc2U2NFVybCIsIkpzb25TZXJ2aWNlQ3RvciIsIkpzb25TZXJ2aWNlIiwiX2pzb25TZXJ2aWNlIiwiZ2V0SnNvbiIsIl9nZXRNZXRhZGF0YVByb3BlcnR5Iiwib3B0aW9uYWwiLCJnZXRNZXRhZGF0YSIsInVuZGVmaW5lZCIsImp3a3NfdXJpIiwia2V5U2V0IiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiX1hNTEh0dHBSZXF1ZXN0IiwidG9rZW4iLCJyZXEiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImVycm9yX2Rlc2NyaXB0aW9uIiwiZXJyb3JfdXJpIiwiQWxsb3dlZFNpZ25pbmdBbGdzIiwicGFyYW1ldGVycyIsImV4cGVjdGVkQWxnIiwiaWRUb2tlblZlcmlmaWVyIiwiSWRUb2tlblZlcmlmaWVyIiwiZGVjb2RlIiwibm93IiwiX3ZhbGlkYXRlSnd0IiwibGVld2F5IiwiRGF0ZSIsImlzcyIsImF1ZCIsInZhbGlkQXVkaWVuY2UiLCJsb3dlck5vdyIsInVwcGVyTm93IiwiaWF0IiwibmJmIiwiZXhwIiwidmVyaWZ5IiwiY3J5cHRvIiwiVXRpbCIsImhleHRvYjY0dSIsInNoYTI1NiIsImNyeXB0b0Jhc2U2NCIsImNyeXB0b0hleCIsIlJTQVZlcmlmaWVyIiwiYmFzZTY0IiwiandrcyIsIkR1bW15Q2FjaGUiLCJzdXBwb3J0ZWRBbGdzIiwib3B0aW9ucyIsImp3a3NDYWNoZSIsIl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjayIsImp3a3NVUkkiLCJDb25maWd1cmF0aW9uRXJyb3IiLCJqb2luIiwicHJvdG90eXBlIiwiaGVhZEFuZFBheWxvYWQiLCJlbmNvZGVkIiwic2lnbmF0dXJlIiwiZGVjb2RlVG9IRVgiLCJ0bm9uY2UiLCJUb2tlblZhbGlkYXRpb25FcnJvciIsImV4cGlyYXRpb25FcnJvciIsInZlcmlmeUV4cEFuZE5iZiIsImdldFJzYVZlcmlmaWVyIiwicnNhVmVyaWZpZXIiLCJjYXRjaCIsImV4cERhdGUiLCJuYmZEYXRlIiwic2V0VVRDU2Vjb25kcyIsInZlcmlmeUV4cEFuZElhdCIsImlhdERhdGUiLCJfdGhpcyIsImNhY2hla2V5IiwiaGFzIiwiZ2V0SldLUyIsImtleUluZm8iLCJtb2R1bHVzIiwiZ2V0IiwicGFydHMiLCJzcGxpdCIsImRlY29kZVRvU3RyaW5nIiwidmFsaWRhdGVBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwiYXRIYXNoIiwic2hhMjU2QWNjZXNzVG9rZW4iLCJoYXNoVG9IZXgiLCJzdHJpbmdpZnkiLCJoYXNoVG9IZXhGaXJzdEhhbGYiLCJzdWJzdHJpbmciLCJoYXNoRmlyc3RIYWxmV29yZEFycmF5IiwiaGFzaEZpcnN0SGFsZkJhc2U2NCIsImhhc2hGaXJzdEhhbGZCYXNlNjRTYWZlVXJsIiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJtb2R1bGUiLCJleHBvcnRzIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJDcnlwdG9KUyIsIk1hdGgiLCJDIiwiQ19saWIiLCJsaWIiLCJXb3JkQXJyYXkiLCJIYXNoZXIiLCJDX2FsZ28iLCJhbGdvIiwiSCIsIksiLCJpc1ByaW1lIiwibiIsInNxcnROIiwic3FydCIsImZhY3RvciIsImdldEZyYWN0aW9uYWxCaXRzIiwiblByaW1lIiwicG93IiwiVyIsIlNIQTI1NiIsImV4dGVuZCIsIl9kb1Jlc2V0IiwiX2hhc2giLCJpbml0Iiwic2xpY2UiLCJfZG9Qcm9jZXNzQmxvY2siLCJNIiwib2Zmc2V0Iiwid29yZHMiLCJhIiwiYiIsImMiLCJkIiwiZiIsImciLCJoIiwiZ2FtbWEweCIsImdhbW1hMCIsImdhbW1hMXgiLCJnYW1tYTEiLCJjaCIsIm1haiIsInNpZ21hMCIsInNpZ21hMSIsInQxIiwidDIiLCJfZG9GaW5hbGl6ZSIsIl9kYXRhIiwiZGF0YVdvcmRzIiwibkJpdHNUb3RhbCIsIl9uRGF0YUJ5dGVzIiwibkJpdHNMZWZ0Iiwic2lnQnl0ZXMiLCJmbG9vciIsIl9wcm9jZXNzIiwiY2xvbmUiLCJjYWxsIiwiX2NyZWF0ZUhlbHBlciIsIkhtYWNTSEEyNTYiLCJfY3JlYXRlSG1hY0hlbHBlciIsImNyZWF0ZSIsIkYiLCJvYmoiLCJzdWJ0eXBlIiwiQmFzZSIsIm92ZXJyaWRlcyIsIm1peEluIiwiaGFzT3duUHJvcGVydHkiLCIkc3VwZXIiLCJhcmd1bWVudHMiLCJpbnN0YW5jZSIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJ0b1N0cmluZyIsImVuY29kZXIiLCJIZXgiLCJjb25jYXQiLCJ3b3JkQXJyYXkiLCJ0aGlzV29yZHMiLCJ0aGF0V29yZHMiLCJ0aGlzU2lnQnl0ZXMiLCJ0aGF0U2lnQnl0ZXMiLCJjbGFtcCIsInRoYXRCeXRlIiwiY2VpbCIsInJhbmRvbSIsIm5CeXRlcyIsInIiLCJtX3ciLCJtX3oiLCJtYXNrIiwicmNhY2hlIiwiX3IiLCJDX2VuYyIsImVuYyIsImhleENoYXJzIiwiYml0ZSIsImhleFN0ciIsImhleFN0ckxlbmd0aCIsIkxhdGluMSIsImxhdGluMUNoYXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibGF0aW4xU3RyIiwibGF0aW4xU3RyTGVuZ3RoIiwiY2hhckNvZGVBdCIsIlV0ZjgiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJ1dGY4U3RyIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJCdWZmZXJlZEJsb2NrQWxnb3JpdGhtIiwiX2FwcGVuZCIsImRvRmx1c2giLCJkYXRhU2lnQnl0ZXMiLCJibG9ja1NpemUiLCJibG9ja1NpemVCeXRlcyIsIm5CbG9ja3NSZWFkeSIsIm1heCIsIl9taW5CdWZmZXJTaXplIiwibldvcmRzUmVhZHkiLCJuQnl0ZXNSZWFkeSIsIm1pbiIsInByb2Nlc3NlZFdvcmRzIiwic3BsaWNlIiwiY2ZnIiwidXBkYXRlIiwibWVzc2FnZVVwZGF0ZSIsImZpbmFsaXplIiwiaGFzaGVyIiwiSE1BQyIsIkJhc2U2NCIsIm1hcCIsIl9tYXAiLCJiYXNlNjRDaGFycyIsImJ5dGUxIiwiYnl0ZTIiLCJieXRlMyIsInRyaXBsZXQiLCJqIiwiY2hhckF0IiwicGFkZGluZ0NoYXIiLCJiYXNlNjRTdHIiLCJiYXNlNjRTdHJMZW5ndGgiLCJyZXZlcnNlTWFwIiwiX3JldmVyc2VNYXAiLCJwYWRkaW5nSW5kZXgiLCJwYXJzZUxvb3AiLCJiaXRzMSIsImJpdHMyIiwiQmlnSW50ZWdlciIsIkRpZ2VzdEluZm9IZWFkIiwic2hhMSIsInNoYTIyNCIsInNoYTM4NCIsInNoYTUxMiIsIm1kMiIsIm1kNSIsInJpcGVtZDE2MCIsIkRpZ2VzdEFsZ3MiLCJnZXRBbGdvcml0aG1Gcm9tRGlnZXN0IiwiaERpZ2VzdEluZm8iLCJhbGdOYW1lIiwiaGVhZCIsImxlbiIsIm1zZyIsImVuY3NpZyIsInJlcGxhY2UiLCJzaWciLCJiaXRMZW5ndGgiLCJkZWNyeXB0ZWRTaWciLCJtb2RQb3dJbnQiLCJkaWdlc3QiLCJkaWdlc3RJbmZvIiwibXNnSGFzaCIsImRiaXRzIiwiY2FuYXJ5Iiwial9sbSIsImZyb21OdW1iZXIiLCJmcm9tU3RyaW5nIiwibmJpIiwiYW0xIiwieCIsInciLCJ2IiwiYW0yIiwieGwiLCJ4aCIsImwiLCJtIiwiYW0zIiwiaW5Ccm93c2VyIiwibmF2aWdhdG9yIiwiYXBwTmFtZSIsImFtIiwiREIiLCJETSIsIkRWIiwiQklfRlAiLCJGViIsIkYxIiwiRjIiLCJCSV9STSIsIkJJX1JDIiwicnIiLCJ2diIsImludDJjaGFyIiwiaW50QXQiLCJzIiwiYm5wQ29weVRvIiwidCIsImJucEZyb21JbnQiLCJuYnYiLCJmcm9tSW50IiwiYm5wRnJvbVN0cmluZyIsImsiLCJmcm9tUmFkaXgiLCJtaSIsInNoIiwiWkVSTyIsInN1YlRvIiwiYm5wQ2xhbXAiLCJiblRvU3RyaW5nIiwibmVnYXRlIiwidG9SYWRpeCIsImttIiwicCIsImJuTmVnYXRlIiwiYm5BYnMiLCJibkNvbXBhcmVUbyIsIm5iaXRzIiwiYm5CaXRMZW5ndGgiLCJibnBETFNoaWZ0VG8iLCJibnBEUlNoaWZ0VG8iLCJibnBMU2hpZnRUbyIsImJzIiwiY2JzIiwiYm0iLCJkcyIsImJucFJTaGlmdFRvIiwiYm5wU3ViVG8iLCJibnBNdWx0aXBseVRvIiwiYWJzIiwieSIsImJucFNxdWFyZVRvIiwiYm5wRGl2UmVtVG8iLCJxIiwicG0iLCJwdCIsImNvcHlUbyIsInRzIiwibXMiLCJuc2giLCJsU2hpZnRUbyIsInlzIiwieTAiLCJ5dCIsImQxIiwiZDIiLCJkbFNoaWZ0VG8iLCJjb21wYXJlVG8iLCJPTkUiLCJxZCIsImRyU2hpZnRUbyIsInJTaGlmdFRvIiwiYm5Nb2QiLCJkaXZSZW1UbyIsIkNsYXNzaWMiLCJjQ29udmVydCIsIm1vZCIsImNSZXZlcnQiLCJjUmVkdWNlIiwiY011bFRvIiwibXVsdGlwbHlUbyIsInJlZHVjZSIsImNTcXJUbyIsInNxdWFyZVRvIiwiY29udmVydCIsInJldmVydCIsIm11bFRvIiwic3FyVG8iLCJibnBJbnZEaWdpdCIsIk1vbnRnb21lcnkiLCJtcCIsImludkRpZ2l0IiwibXBsIiwibXBoIiwidW0iLCJtdDIiLCJtb250Q29udmVydCIsIm1vbnRSZXZlcnQiLCJtb250UmVkdWNlIiwidTAiLCJtb250U3FyVG8iLCJtb250TXVsVG8iLCJibnBJc0V2ZW4iLCJibnBFeHAiLCJ6IiwicjIiLCJibk1vZFBvd0ludCIsImlzRXZlbiIsImJuQ2xvbmUiLCJibkludFZhbHVlIiwiYm5CeXRlVmFsdWUiLCJiblNob3J0VmFsdWUiLCJibnBDaHVua1NpemUiLCJMTjIiLCJsb2ciLCJiblNpZ051bSIsImJucFRvUmFkaXgiLCJzaWdudW0iLCJjcyIsImNodW5rU2l6ZSIsImludFZhbHVlIiwiYm5wRnJvbVJhZGl4IiwiZE11bHRpcGx5IiwiZEFkZE9mZnNldCIsImJucEZyb21OdW1iZXIiLCJ0ZXN0Qml0IiwiYml0d2lzZVRvIiwic2hpZnRMZWZ0Iiwib3Bfb3IiLCJpc1Byb2JhYmxlUHJpbWUiLCJuZXh0Qnl0ZXMiLCJiblRvQnl0ZUFycmF5IiwiYm5FcXVhbHMiLCJibk1pbiIsImJuTWF4IiwiYm5wQml0d2lzZVRvIiwib3AiLCJvcF9hbmQiLCJibkFuZCIsImJuT3IiLCJvcF94b3IiLCJiblhvciIsIm9wX2FuZG5vdCIsImJuQW5kTm90IiwiYm5Ob3QiLCJiblNoaWZ0TGVmdCIsImJuU2hpZnRSaWdodCIsImxiaXQiLCJibkdldExvd2VzdFNldEJpdCIsImNiaXQiLCJibkJpdENvdW50IiwiYm5UZXN0Qml0IiwiYm5wQ2hhbmdlQml0IiwiYm5TZXRCaXQiLCJjaGFuZ2VCaXQiLCJibkNsZWFyQml0IiwiYm5GbGlwQml0IiwiYm5wQWRkVG8iLCJibkFkZCIsImFkZFRvIiwiYm5TdWJ0cmFjdCIsImJuTXVsdGlwbHkiLCJiblNxdWFyZSIsImJuRGl2aWRlIiwiYm5SZW1haW5kZXIiLCJibkRpdmlkZUFuZFJlbWFpbmRlciIsImJucERNdWx0aXBseSIsImJucERBZGRPZmZzZXQiLCJOdWxsRXhwIiwibk5vcCIsIm5NdWxUbyIsIm5TcXJUbyIsImJuUG93IiwiYm5wTXVsdGlwbHlMb3dlclRvIiwiYm5wTXVsdGlwbHlVcHBlclRvIiwiQmFycmV0dCIsInEzIiwibXUiLCJkaXZpZGUiLCJiYXJyZXR0Q29udmVydCIsImJhcnJldHRSZXZlcnQiLCJiYXJyZXR0UmVkdWNlIiwibXVsdGlwbHlVcHBlclRvIiwibXVsdGlwbHlMb3dlclRvIiwiYmFycmV0dFNxclRvIiwiYmFycmV0dE11bFRvIiwiYm5Nb2RQb3ciLCJrMSIsImcyIiwiaXMxIiwiYm5HQ0QiLCJnZXRMb3dlc3RTZXRCaXQiLCJibnBNb2RJbnQiLCJibk1vZEludmVyc2UiLCJhYyIsInUiLCJzdWJ0cmFjdCIsImFkZCIsImxvd3ByaW1lcyIsImxwbGltIiwiYm5Jc1Byb2JhYmxlUHJpbWUiLCJtb2RJbnQiLCJtaWxsZXJSYWJpbiIsImJucE1pbGxlclJhYmluIiwibjEiLCJzaGlmdFJpZ2h0IiwibW9kUG93IiwiYnl0ZVZhbHVlIiwic2hvcnRWYWx1ZSIsInRvQnl0ZUFycmF5IiwiZXF1YWxzIiwiYW5kIiwib3IiLCJ4b3IiLCJhbmROb3QiLCJub3QiLCJiaXRDb3VudCIsInNldEJpdCIsImNsZWFyQml0IiwiZmxpcEJpdCIsIm11bHRpcGx5IiwicmVtYWluZGVyIiwiZGl2aWRlQW5kUmVtYWluZGVyIiwibW9kSW52ZXJzZSIsImdjZCIsInNxdWFyZSIsInJuZ19zdGF0ZSIsInJuZ19wb29sIiwicm5nX3BwdHIiLCJybmdfc2VlZF9pbnQiLCJybmdfcHNpemUiLCJybmdfc2VlZF90aW1lIiwiZ2V0VGltZSIsIndpbmRvdyIsImdldFJhbmRvbVZhbHVlcyIsInVhIiwiVWludDhBcnJheSIsImFwcFZlcnNpb24iLCJybmdfZ2V0X2J5dGUiLCJwcm5nX25ld3N0YXRlIiwibmV4dCIsInJuZ19nZXRfYnl0ZXMiLCJiYSIsIlNlY3VyZVJhbmRvbSIsIkFyY2ZvdXIiLCJTIiwiQVJDNGluaXQiLCJBUkM0bmV4dCIsInBhZGRpbmciLCJzdHIiLCJwYWQiLCJieXRlQXJyYXlUb1N0cmluZyIsImFycmF5Iiwic3RyaW5nVG9CeXRlQXJyYXkiLCJhcnIiLCJieXRlQXJyYXlUb0hleCIsInJhdyIsIkhFWCIsIl9oZXgiLCJlbmNvZGVTdHJpbmciLCJmcm9tQnl0ZUFycmF5IiwibWF0Y2giLCJwMSIsImJhc2U2NFN0cmluZyIsIlNBRkVfVVJMX0VOQ09ESU5HX01BUFBJTkciLCJieXRlTGVuZ3RoIiwibG9va3VwIiwicmV2TG9va3VwIiwiQXJyIiwiY29kZSIsImdldExlbnMiLCJiNjQiLCJ2YWxpZExlbiIsInBsYWNlSG9sZGVyc0xlbiIsImxlbnMiLCJfYnl0ZUxlbmd0aCIsInRtcCIsImN1ckJ5dGUiLCJ0cmlwbGV0VG9CYXNlNjQiLCJudW0iLCJlbmNvZGVDaHVuayIsInVpbnQ4Iiwic3RhcnQiLCJlbmQiLCJvdXRwdXQiLCJleHRyYUJ5dGVzIiwibWF4Q2h1bmtMZW5ndGgiLCJsZW4yIiwidXJsam9pbiIsInByb2Nlc3MiLCJlcnIiLCJtYXRjaGluZ0tleSIsImJvZHkiLCJjb250ZXh0IiwiZGVmaW5pdGlvbiIsIm5vcm1hbGl6ZSIsImlucHV0Iiwiam9pbmVkIiwic2VsZiIsIkVtaXR0ZXIiLCJSZXF1ZXN0QmFzZSIsImlzT2JqZWN0IiwiUmVzcG9uc2VCYXNlIiwiQWdlbnQiLCJub29wIiwibWV0aG9kIiwiUmVxdWVzdCIsImdldFhIUiIsInByb3RvY29sIiwiQWN0aXZlWE9iamVjdCIsInRyaW0iLCJzZXJpYWxpemUiLCJwYWlycyIsInB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyIiwidmFsIiwic3Via2V5Iiwic2VyaWFsaXplT2JqZWN0IiwicGFyc2VTdHJpbmciLCJwYWlyIiwicG9zIiwidHlwZXMiLCJodG1sIiwianNvbiIsInhtbCIsInVybGVuY29kZWQiLCJwYXJzZUhlYWRlciIsImxpbmVzIiwiZmllbGRzIiwibGluZSIsImZpZWxkIiwidG9Mb3dlckNhc2UiLCJpc0pTT04iLCJtaW1lIiwidGVzdCIsIlJlc3BvbnNlIiwieGhyIiwidGV4dCIsInJlc3BvbnNlVHlwZSIsIl9zZXRTdGF0dXNQcm9wZXJ0aWVzIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImdldFJlc3BvbnNlSGVhZGVyIiwiX3NldEhlYWRlclByb3BlcnRpZXMiLCJfcmVzcG9uc2VUeXBlIiwiX3BhcnNlQm9keSIsIl9wYXJzZXIiLCJ0b0Vycm9yIiwiX3F1ZXJ5IiwiX2hlYWRlciIsIm9uIiwicmVzIiwib3JpZ2luYWwiLCJyYXdSZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjYWxsYmFjayIsImVtaXQiLCJuZXdfZXJyIiwiX2lzUmVzcG9uc2VPSyIsImN1c3RvbV9lcnIiLCJhY2NlcHQiLCJhdXRoIiwidXNlciIsInBhc3MiLCJidG9hIiwic3RyaW5nIiwiX2F1dGgiLCJxdWVyeSIsImF0dGFjaCIsImZpbGUiLCJfZ2V0Rm9ybURhdGEiLCJhcHBlbmQiLCJfZm9ybURhdGEiLCJGb3JtRGF0YSIsIl9zaG91bGRSZXRyeSIsIl9yZXRyeSIsImZuIiwiX2NhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX21heFJldHJpZXMiLCJyZXRyaWVzIiwiX3JldHJpZXMiLCJjcm9zc0RvbWFpbkVycm9yIiwiY3Jvc3NEb21haW4iLCJidWZmZXIiLCJjYSIsImFnZW50IiwicGlwZSIsIndyaXRlIiwiX2lzSG9zdCIsIl9lbmRDYWxsZWQiLCJfZmluYWxpemVRdWVyeVN0cmluZyIsIl9lbmQiLCJfc2V0VGltZW91dHMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiX3Jlc3BvbnNlVGltZW91dFRpbWVyIiwidGltZWRvdXQiLCJfYWJvcnRlZCIsImhhbmRsZVByb2dyZXNzIiwiZGlyZWN0aW9uIiwidG90YWwiLCJwZXJjZW50IiwibG9hZGVkIiwiaGFzTGlzdGVuZXJzIiwib25wcm9ncmVzcyIsImJpbmQiLCJ1cGxvYWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiX3dpdGhDcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImNvbnRlbnRUeXBlIiwiX3NlcmlhbGl6ZXIiLCJfc2V0RGVmYXVsdHMiLCJkZWwiLCJwYXRjaCIsInBvc3QiLCJwdXQiLCJtaXhpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwibGlzdGVuZXJzIiwiX2NsZWFyVGltZW91dCIsIl90aW1lciIsInRpbWVvdXQiLCJfdGltZW91dCIsIl9yZXNwb25zZVRpbWVvdXQiLCJvcHRpb24iLCJkZWFkbGluZSIsInJldHJ5IiwiY291bnQiLCJfcmV0cnlDYWxsYmFjayIsIkVSUk9SX0NPREVTIiwib3ZlcnJpZGUiLCJfZnVsbGZpbGxlZFByb21pc2UiLCJpbm5lclJlc29sdmUiLCJpbm5lclJlamVjdCIsInVzZSIsIm9rIiwiX29rQ2FsbGJhY2siLCJnZXRIZWFkZXIiLCJ1bnNldCIsImFib3J0IiwiYmFzZTY0RW5jb2RlciIsInJlZGlyZWN0cyIsIl9tYXhSZWRpcmVjdHMiLCJtYXhSZXNwb25zZVNpemUiLCJUeXBlRXJyb3IiLCJfbWF4UmVzcG9uc2VTaXplIiwidG9KU09OIiwiaXNPYmoiLCJzb3J0UXVlcnkiLCJzb3J0IiwiX3NvcnQiLCJxdWVyeUFyciIsIl9hcHBlbmRRdWVyeVN0cmluZyIsInRyYWNlIiwiX3RpbWVvdXRFcnJvciIsInJlYXNvbiIsImVycm5vIiwic2V0VGltZW91dCIsInV0aWxzIiwiY3QiLCJwYXJhbXMiLCJsaW5rcyIsImxpbmsiLCJwYXJzZUxpbmtzIiwic3RhdHVzVHlwZSIsInJlZGlyZWN0IiwiY2xpZW50RXJyb3IiLCJzZXJ2ZXJFcnJvciIsImNyZWF0ZWQiLCJhY2NlcHRlZCIsIm5vQ29udGVudCIsImJhZFJlcXVlc3QiLCJ1bmF1dGhvcml6ZWQiLCJub3RBY2NlcHRhYmxlIiwiZm9yYmlkZGVuIiwibm90Rm91bmQiLCJ1bnByb2Nlc3NhYmxlRW50aXR5Iiwic2hpZnQiLCJyZWwiLCJjbGVhbkhlYWRlciIsImNoYW5nZXNPcmlnaW4iLCJfZGVmYXVsdHMiLCJkZWYiLCJvaWRjIiwiaXNPaWRjIiwiVXJsVXRpbGl0eSIsImFkZFF1ZXJ5UGFyYW0iLCJkZWxpbWl0ZXIiLCJnbG9iYWwiLCJocmVmIiwiaWR4IiwibGFzdEluZGV4T2YiLCJyZWdleCIsImNvdW50ZXIiLCJleGVjIiwicHJvcCIsIl9ub25jZSIsInN0b3JhZ2VTdHJpbmciLCJfaWQiLCJfY3JlYXRlZCIsInN0b3JhZ2UiLCJhZ2UiLCJjdXRvZmYiLCJnZXRBbGxLZXlzIiwicHJvbWlzZXMiLCJhbGwiLCJndWlkSG9sZGVyIiwiaGV4IiwiZ3VpZFJlc3BvbnNlIiwiT2lkY1Njb3BlIiwicGFyc2VVcmxGcmFnbWVudCIsInNlc3Npb25fc3RhdGUiLCJ0b2tlbl90eXBlIiwiZXhwaXJlc19pbiIsImV4cGlyZXNfYXQiLCJzY29wZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciIsIlNpbGVudFJlbmV3U2VydmljZSIsIlNlc3Npb25Nb25pdG9yQ3RvciIsIlRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IiLCJVc2VyTWFuYWdlclNldHRpbmdzIiwiX2V2ZW50cyIsIlVzZXJNYW5hZ2VyRXZlbnRzIiwiX3NpbGVudFJlbmV3U2VydmljZSIsImF1dG9tYXRpY1NpbGVudFJlbmV3Iiwic3RhcnRTaWxlbnRSZW5ldyIsIm1vbml0b3JTZXNzaW9uIiwiX3Nlc3Npb25Nb25pdG9yIiwiX3Rva2VuUmV2b2NhdGlvbkNsaWVudCIsIl9sb2FkVXNlciIsImxvYWQiLCJzdG9yZVVzZXIiLCJ1bmxvYWQiLCJfc2lnbmluU3RhcnQiLCJfcmVkaXJlY3ROYXZpZ2F0b3IiLCJfc2lnbmluRW5kIiwicG9wdXBfcmVkaXJlY3RfdXJpIiwiX3NpZ25pbiIsIl9wb3B1cE5hdmlnYXRvciIsInN0YXJ0VXJsIiwicG9wdXBXaW5kb3dGZWF0dXJlcyIsInBvcHVwV2luZG93VGFyZ2V0IiwiX3NpZ25pbkNhbGxiYWNrIiwic2lsZW50X3JlZGlyZWN0X3VyaSIsInNldElkVG9rZW4iLCJpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lsZW50UmVxdWVzdFRpbWVvdXQiLCJwcm9jZXNzU2lnbmluUmVzcG9uc2UiLCJuYXZSZXNwb25zZSIsInNpZ25pblJlc3BvbnNlIiwic2lkIiwibmF2aWdhdG9yUGFyYW1zIiwicHJlcGFyZSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJuYXZpZ2F0ZSIsImNsb3NlIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiX3NpZ25vdXRTdGFydCIsIl9zaWdub3V0RW5kIiwicG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3NpZ25vdXQiLCJrZWVwT3BlbiIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInJlbW92ZVVzZXIiLCJjcmVhdGVTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRSZXF1ZXN0IiwicHJvY2Vzc1NpZ25vdXRSZXNwb25zZSIsInNpZ25vdXRSZXNwb25zZSIsInN1Y2Nlc3MiLCJyZXF1aXJlZCIsInJldm9rZSIsInN0b3AiLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsImFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiUmVkaXJlY3ROYXZpZ2F0b3IiLCJQb3B1cE5hdmlnYXRvciIsIklGcmFtZU5hdmlnYXRvciIsIl9wb3B1cF9yZWRpcmVjdF91cmkiLCJfcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3BvcHVwV2luZG93RmVhdHVyZXMiLCJfcG9wdXBXaW5kb3dUYXJnZXQiLCJfc2lsZW50X3JlZGlyZWN0X3VyaSIsIl9zaWxlbnRSZXF1ZXN0VGltZW91dCIsIl9hdXRvbWF0aWNTaWxlbnRSZW5ldyIsIl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJfbW9uaXRvclNlc3Npb24iLCJfY2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJfcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQiLCJmcmFtZSIsIklGcmFtZVdpbmRvdyIsIm5vdGlmeVBhcmVudCIsIkRlZmF1bHRUaW1lb3V0IiwiX3Byb21pc2UiLCJfcmVzb2x2ZSIsIl9yZWplY3QiLCJfYm91bmRNZXNzYWdlRXZlbnQiLCJfbWVzc2FnZSIsIl9mcmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJhcHBlbmRDaGlsZCIsIl9lcnJvciIsInNyYyIsInByb21pc2UiLCJfY2xlYW51cCIsInJlbW92ZUNoaWxkIiwib3JpZ2luIiwiX29yaWdpbiIsInNvdXJjZSIsImNvbnRlbnRXaW5kb3ciLCJfc3VjY2VzcyIsImhvc3QiLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsIl91c2VyTG9hZGVkIiwiRXZlbnQiLCJfdXNlclVubG9hZGVkIiwiX3NpbGVudFJlbmV3RXJyb3IiLCJfdXNlclNpZ25lZE91dCIsIl91c2VyU2Vzc2lvbkNoYW5nZWQiLCJyYWlzZUV2ZW50IiwicmFpc2UiLCJhZGRIYW5kbGVyIiwicmVtb3ZlSGFuZGxlciIsImFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciIsIlRpbWVyIiwiYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIiLCJfYWNjZXNzVG9rZW5FeHBpcmluZyIsIl9hY2Nlc3NUb2tlbkV4cGlyZWQiLCJjb250YWluZXIiLCJfY2FuY2VsVGltZXJzIiwiZXhwaXJpbmciLCJleHBpcmVkIiwiY2FuY2VsIiwiVGltZXJEdXJhdGlvbiIsIl9ub3dGdW5jIiwiX25hbWUiLCJfZXhwaXJhdGlvbiIsInRpbWVyRHVyYXRpb24iLCJfdGltZXJIYW5kbGUiLCJkaWZmIiwiZmluZEluZGV4IiwidXNlck1hbmFnZXIiLCJfdXNlck1hbmFnZXIiLCJfdG9rZW5FeHBpcmluZyIsImV2ZW50cyIsImFkZEFjY2Vzc1Rva2VuRXhwaXJpbmciLCJnZXRVc2VyIiwicmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyIsInNpZ25pblNpbGVudCIsIl9yYWlzZVNpbGVudFJlbmV3RXJyb3IiLCJDaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IiLCJhZGRVc2VyTG9hZGVkIiwiX3N0YXJ0IiwiYWRkVXNlclVubG9hZGVkIiwiX3N0b3AiLCJfc3ViIiwiX3NpZCIsIl9jaGVja1Nlc3Npb25JRnJhbWUiLCJnZXRDaGVja1Nlc3Npb25JZnJhbWUiLCJpbnRlcnZhbCIsInF1ZXJ5U2Vzc2lvblN0YXR1cyIsInJhaXNlVXNlclNpZ25lZE91dEV2ZW50Iiwic2Vzc2lvbiIsIl9yYWlzZVVzZXJTZXNzaW9uQ2hhbmdlZCIsIl9yYWlzZVVzZXJTaWduZWRPdXQiLCJEZWZhdWx0SW50ZXJ2YWwiLCJfdXJsIiwiX2ludGVydmFsIiwiX2ZyYW1lX29yaWdpbiIsIl9zZXNzaW9uX3N0YXRlIiwiQWNjZXNzVG9rZW5UeXBlSGludCIsIl9YTUxIdHRwUmVxdWVzdEN0b3IiLCJnZXRSZXZvY2F0aW9uRW5kcG9pbnQiLCJfcmV2b2tlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFD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O0FBRUEseUJBQUkrbUIsSUFBSS9tQixNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDcEJsSjtBQUNILHNCQUZELE1BR0s7QUFDRGIsZ0NBQU9yQyxNQUFNbXpCLElBQUl6bUIsVUFBSixHQUFpQixJQUFqQixHQUF3QnltQixJQUFJL21CLE1BQTVCLEdBQXFDLEdBQTNDLENBQVA7QUFDSDtBQUNKLGtCQVREOztBQVdBLHFCQUFJb2tCLE9BQU8sZUFBZXZYLG1CQUFtQjVYLFNBQW5CLENBQTFCO0FBQ0EscUJBQUk2QyxhQUFKLEVBQW1CO0FBQ2Zzc0IsNkJBQVEsb0JBQW9CdlgsbUJBQW1CL1UsYUFBbkIsQ0FBNUI7QUFDSDtBQUNEc3NCLHlCQUFRLHNCQUFzQnZYLG1CQUFtQit3QixtQkFBbkIsQ0FBOUI7QUFDQXhaLHlCQUFRLFlBQVl2WCxtQkFBbUJoSSxXQUFuQixDQUFwQjs7QUFFQWtpQixxQkFBSXZtQixnQkFBSixDQUFxQixjQUFyQixFQUFxQyxtQ0FBckM7QUFDQXVtQixxQkFBSXRtQixJQUFKLENBQVMyakIsSUFBVDtBQUNILGNBekJNLENBQVA7QUEwQkg7Ozs7OzttQkFsRWdCOXhCLHFCIiwiZmlsZSI6Im9pZGMtY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhNTUyOGQyMzk2ODU3YTAwZjc3YiIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmV4cG9ydCBjb25zdCBMb2cgPSByZXF1aXJlKCcuL3NyYy9Mb2cnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IE9pZGNDbGllbnQgPSByZXF1aXJlKCcuL3NyYy9PaWRjQ2xpZW50JykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBPaWRjQ2xpZW50U2V0dGluZ3MgPSByZXF1aXJlKCcuL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlID0gcmVxdWlyZSgnLi9zcmMvV2ViU3RvcmFnZVN0YXRlU3RvcmUnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IEluTWVtb3J5V2ViU3RvcmFnZSA9IHJlcXVpcmUoJy4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZScpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgVXNlck1hbmFnZXIgPSByZXF1aXJlKCcuL3NyYy9Vc2VyTWFuYWdlcicpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgQWNjZXNzVG9rZW5FdmVudHMgPSByZXF1aXJlKCcuL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cycpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgTWV0YWRhdGFTZXJ2aWNlID0gcmVxdWlyZSgnLi9zcmMvTWV0YWRhdGFTZXJ2aWNlJykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBDaGVja1Nlc3Npb25JRnJhbWUgPSByZXF1aXJlKCcuL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IFRva2VuUmV2b2NhdGlvbkNsaWVudCA9IHJlcXVpcmUoJy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudCcpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgU2Vzc2lvbk1vbml0b3IgPSByZXF1aXJlKCcuL3NyYy9TZXNzaW9uTW9uaXRvcicpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgR2xvYmFsID0gcmVxdWlyZSgnLi9zcmMvR2xvYmFsJykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBVc2VyID0gcmVxdWlyZSgnLi9zcmMvVXNlcicpLmRlZmF1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBMb2csXG4gICAgT2lkY0NsaWVudCxcbiAgICBPaWRjQ2xpZW50U2V0dGluZ3MsXG4gICAgV2ViU3RvcmFnZVN0YXRlU3RvcmUsXG4gICAgSW5NZW1vcnlXZWJTdG9yYWdlLFxuICAgIFVzZXJNYW5hZ2VyLFxuICAgIEFjY2Vzc1Rva2VuRXZlbnRzLFxuICAgIE1ldGFkYXRhU2VydmljZSxcbiAgICBDaGVja1Nlc3Npb25JRnJhbWUsXG4gICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50LFxuICAgIFNlc3Npb25Nb25pdG9yLFxuICAgIEdsb2JhbCxcbiAgICBVc2VyXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5sZXQgbm9wTG9nZ2VyID0ge1xuICAgIGRlYnVnKCl7fSxcbiAgICBpbmZvKCl7fSxcbiAgICB3YXJuKCl7fSxcbiAgICBlcnJvcigpe31cbn07XG5cbmNvbnN0IE5PTkUgPSAwO1xuY29uc3QgRVJST1IgPSAxO1xuY29uc3QgV0FSTiA9IDI7XG5jb25zdCBJTkZPID0gMztcbmNvbnN0IERFQlVHID0gNDtcblxubGV0IGxvZ2dlcjtcbmxldCBsZXZlbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIHtcbiAgICBzdGF0aWMgZ2V0IE5PTkUoKSB7cmV0dXJuIE5PTkV9O1xuICAgIHN0YXRpYyBnZXQgRVJST1IoKSB7cmV0dXJuIEVSUk9SfTtcbiAgICBzdGF0aWMgZ2V0IFdBUk4oKSB7cmV0dXJuIFdBUk59O1xuICAgIHN0YXRpYyBnZXQgSU5GTygpIHtyZXR1cm4gSU5GT307XG4gICAgc3RhdGljIGdldCBERUJVRygpIHtyZXR1cm4gREVCVUd9O1xuICAgIFxuICAgIHN0YXRpYyByZXNldCgpe1xuICAgICAgICBsZXZlbCA9IERFQlVHO1xuICAgICAgICBsb2dnZXIgPSBjb25zb2xlO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IGxldmVsKCl7XG4gICAgICAgIHJldHVybiBsZXZlbDtcbiAgICB9XG4gICAgc3RhdGljIHNldCBsZXZlbCh2YWx1ZSl7XG4gICAgICAgIGlmIChOT05FIDw9IHZhbHVlICYmIHZhbHVlIDw9IERFQlVHKXtcbiAgICAgICAgICAgIGxldmVsID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZyBsZXZlbFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IGxvZ2dlcigpe1xuICAgICAgICByZXR1cm4gbG9nZ2VyO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IGxvZ2dlcih2YWx1ZSl7XG4gICAgICAgIGlmICghdmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbykge1xuICAgICAgICAgICAgLy8ganVzdCB0byBzdGF5IGJhY2t3YXJkcyBjb21wYXQuIGNhbiByZW1vdmUgaW4gMi4wXG4gICAgICAgICAgICB2YWx1ZS5kZWJ1ZyA9IHZhbHVlLmluZm87XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuZGVidWcgJiYgdmFsdWUuaW5mbyAmJiB2YWx1ZS53YXJuICYmIHZhbHVlLmVycm9yKXtcbiAgICAgICAgICAgIGxvZ2dlciA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsb2dnZXJcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGRlYnVnKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gREVCVUcpe1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGluZm8oLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBJTkZPKXtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHdhcm4oLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBXQVJOKXtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGVycm9yKC4uLmFyZ3Mpe1xuICAgICAgICBpZiAobGV2ZWwgPj0gRVJST1Ipe1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yLmFwcGx5KGxvZ2dlciwgQXJyYXkuZnJvbShhcmdzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkxvZy5yZXNldCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Mb2cuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBPaWRjQ2xpZW50U2V0dGluZ3MgZnJvbSAnLi9PaWRjQ2xpZW50U2V0dGluZ3MnO1xuaW1wb3J0IEVycm9yUmVzcG9uc2UgZnJvbSAnLi9FcnJvclJlc3BvbnNlJztcbmltcG9ydCBTaWduaW5SZXF1ZXN0IGZyb20gJy4vU2lnbmluUmVxdWVzdCc7XG5pbXBvcnQgU2lnbmluUmVzcG9uc2UgZnJvbSAnLi9TaWduaW5SZXNwb25zZSc7XG5pbXBvcnQgU2lnbm91dFJlcXVlc3QgZnJvbSAnLi9TaWdub3V0UmVxdWVzdCc7XG5pbXBvcnQgU2lnbm91dFJlc3BvbnNlIGZyb20gJy4vU2lnbm91dFJlc3BvbnNlJztcbmltcG9ydCBTaWduaW5TdGF0ZSBmcm9tICcuL1NpZ25pblN0YXRlJztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2lkY0NsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSkge1xuICAgICAgICBpZiAoc2V0dGluZ3MgaW5zdGFuY2VvZiBPaWRjQ2xpZW50U2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IG5ldyBPaWRjQ2xpZW50U2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IF9zdGF0ZVN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5zdGF0ZVN0b3JlO1xuICAgIH1cbiAgICBnZXQgX3ZhbGlkYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudmFsaWRhdG9yO1xuICAgIH1cbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubWV0YWRhdGFTZXJ2aWNlO1xuICAgIH1cblxuICAgIGdldCBzZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzO1xuICAgIH1cbiAgICBnZXQgbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNpZ25pblJlcXVlc3Qoe1xuICAgICAgICByZXNwb25zZV90eXBlLCBzY29wZSwgcmVkaXJlY3RfdXJpLCBcbiAgICAgICAgLy8gZGF0YSB3YXMgbWVhbnQgdG8gYmUgdGhlIHBsYWNlIGEgY2FsbGVyIGNvdWxkIGluZGljYXRlIHRoZSBkYXRhIHRvXG4gICAgICAgIC8vIGhhdmUgcm91bmQgdHJpcHBlZCwgYnV0IHBlb3BsZSB3ZXJlIGdldHRpbmcgY29uZnVzZWQsIHNvIGkgYWRkZWQgc3RhdGUgKHNpbmNlIHRoYXQgbWF0Y2hlcyB0aGUgc3BlYykgXG4gICAgICAgIC8vIGFuZCBzbyBub3cgaWYgZGF0YSBpcyBub3QgcGFzc2VkLCBidXQgc3RhdGUgaXMgdGhlbiBzdGF0ZSB3aWxsIGJlIHVzZWRcbiAgICAgICAgZGF0YSwgc3RhdGUsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcyxcbiAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zIH0gPSB7fSxcbiAgICAgICAgc3RhdGVTdG9yZVxuICAgICkge1xuICAgICAgICBMb2cuZGVidWcoXCJPaWRjQ2xpZW50LmNyZWF0ZVNpZ25pblJlcXVlc3RcIik7XG5cbiAgICAgICAgbGV0IGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGUgfHwgdGhpcy5fc2V0dGluZ3MucmVzcG9uc2VfdHlwZTtcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzLl9zZXR0aW5ncy5zY29wZTtcbiAgICAgICAgcmVkaXJlY3RfdXJpID0gcmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnJlZGlyZWN0X3VyaTtcblxuICAgICAgICAvLyBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50IGFyZW4ndCBhbGxvd2VkIG9uIF9zZXR0aW5nc1xuICAgICAgICBwcm9tcHQgPSBwcm9tcHQgfHwgdGhpcy5fc2V0dGluZ3MucHJvbXB0O1xuICAgICAgICBkaXNwbGF5ID0gZGlzcGxheSB8fCB0aGlzLl9zZXR0aW5ncy5kaXNwbGF5O1xuICAgICAgICBtYXhfYWdlID0gbWF4X2FnZSB8fCB0aGlzLl9zZXR0aW5ncy5tYXhfYWdlO1xuICAgICAgICB1aV9sb2NhbGVzID0gdWlfbG9jYWxlcyB8fCB0aGlzLl9zZXR0aW5ncy51aV9sb2NhbGVzO1xuICAgICAgICBhY3JfdmFsdWVzID0gYWNyX3ZhbHVlcyB8fCB0aGlzLl9zZXR0aW5ncy5hY3JfdmFsdWVzO1xuICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlIHx8IHRoaXMuX3NldHRpbmdzLnJlc291cmNlO1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0gZXh0cmFRdWVyeVBhcmFtcyB8fCB0aGlzLl9zZXR0aW5ncy5leHRyYVF1ZXJ5UGFyYW1zO1xuICAgICAgICBcbiAgICAgICAgbGV0IGF1dGhvcml0eSA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlY2VpdmVkIGF1dGhvcml6YXRpb24gZW5kcG9pbnRcIiwgdXJsKTtcblxuICAgICAgICAgICAgbGV0IHNpZ25pblJlcXVlc3QgPSBuZXcgU2lnbmluUmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdF91cmksXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VfdHlwZSxcbiAgICAgICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhIHx8IHN0YXRlLFxuICAgICAgICAgICAgICAgIGF1dGhvcml0eSxcbiAgICAgICAgICAgICAgICBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2UsIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBzaWduaW5TdGF0ZSA9IHNpZ25pblJlcXVlc3Quc3RhdGU7XG4gICAgICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVTdG9yZS5zZXQoc2lnbmluU3RhdGUuaWQsIHNpZ25pblN0YXRlLnRvU3RvcmFnZVN0cmluZygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbmluUmVxdWVzdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9jZXNzU2lnbmluUmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25pblJlc3BvbnNlXCIpO1xuXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWduaW5SZXNwb25zZSh1cmwpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN0YXRlIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlU3RvcmUucmVtb3ZlKHJlc3BvbnNlLnN0YXRlKS50aGVuKHN0b3JlZFN0YXRlU3RyaW5nID0+IHtcbiAgICAgICAgICAgIGlmICghc3RvcmVkU3RhdGVTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IFNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JlZFN0YXRlU3RyaW5nKTtcblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVjZWl2ZWQgc3RhdGUgZnJvbSBzdG9yYWdlOyB2YWxpZGF0aW5nIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZVNpZ25pblJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZVNpZ25vdXRSZXF1ZXN0KHtpZF90b2tlbl9oaW50LCBkYXRhLCBzdGF0ZSwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpfSA9IHt9LFxuICAgICAgICBzdGF0ZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbm91dFJlcXVlc3RcIik7XG5cbiAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuX3NldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldEVuZFNlc3Npb25FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gZW5kIHNlc3Npb24gZW5kcG9pbnQgdXJsIHJldHVybmVkXCIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZWNlaXZlZCBlbmQgc2Vzc2lvbiBlbmRwb2ludFwiLCB1cmwpO1xuXG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBTaWdub3V0UmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGlkX3Rva2VuX2hpbnQsXG4gICAgICAgICAgICAgICAgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgc2lnbm91dFN0YXRlID0gcmVxdWVzdC5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChzaWdub3V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTaWdub3V0IHJlcXVlc3QgaGFzIHN0YXRlIHRvIHBlcnNpc3RcIik7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUuc2V0KHNpZ25vdXRTdGF0ZS5pZCwgc2lnbm91dFN0YXRlLnRvU3RvcmFnZVN0cmluZygpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsLCBzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQucHJvY2Vzc1NpZ25vdXRSZXNwb25zZVwiKTtcblxuICAgICAgICB2YXIgcmVzcG9uc2UgPSBuZXcgU2lnbm91dFJlc3BvbnNlKHVybCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk5vIHN0YXRlIGluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXRlS2V5ID0gcmVzcG9uc2Uuc3RhdGU7XG5cbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgICAgICByZXR1cm4gc3RhdGVTdG9yZS5yZW1vdmUoc3RhdGVLZXkpLnRoZW4oc3RvcmVkU3RhdGVTdHJpbmcgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY2xlYXJTdGFsZVN0YXRlXCIpO1xuXG4gICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgICAgcmV0dXJuIFN0YXRlLmNsZWFyU3RhbGVTdGF0ZShzdGF0ZVN0b3JlLCB0aGlzLnNldHRpbmdzLnN0YWxlU3RhdGVBZ2UpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PaWRjQ2xpZW50LmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgV2ViU3RvcmFnZVN0YXRlU3RvcmUgZnJvbSAnLi9XZWJTdG9yYWdlU3RhdGVTdG9yZSc7XG5pbXBvcnQgUmVzcG9uc2VWYWxpZGF0b3IgZnJvbSAnLi9SZXNwb25zZVZhbGlkYXRvcic7XG5pbXBvcnQgTWV0YWRhdGFTZXJ2aWNlIGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlJztcblxuY29uc3QgT2lkY01ldGFkYXRhVXJsUGF0aCA9ICcud2VsbC1rbm93bi9vcGVuaWQtY29uZmlndXJhdGlvbic7XG5cbmNvbnN0IERlZmF1bHRSZXNwb25zZVR5cGUgPSBcImlkX3Rva2VuXCI7XG5jb25zdCBEZWZhdWx0U2NvcGUgPSBcIm9wZW5pZFwiO1xuY29uc3QgRGVmYXVsdFN0YWxlU3RhdGVBZ2UgPSA2MCAqIDU7IC8vIHNlY29uZHNcbmNvbnN0IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMgPSA1OTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2lkY0NsaWVudFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIC8vIG1ldGFkYXRhIHJlbGF0ZWRcbiAgICAgICAgYXV0aG9yaXR5LCBtZXRhZGF0YVVybCwgbWV0YWRhdGEsIHNpZ25pbmdLZXlzLFxuICAgICAgICAvLyBjbGllbnQgcmVsYXRlZFxuICAgICAgICBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIHJlc3BvbnNlX3R5cGUgPSBEZWZhdWx0UmVzcG9uc2VUeXBlLCBzY29wZSA9IERlZmF1bHRTY29wZSxcbiAgICAgICAgcmVkaXJlY3RfdXJpLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIC8vIG9wdGlvbmFsIHByb3RvY29sXG4gICAgICAgIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgYWNyX3ZhbHVlcywgcmVzb3VyY2UsXG4gICAgICAgIC8vIGJlaGF2aW9yIGZsYWdzXG4gICAgICAgIGZpbHRlclByb3RvY29sQ2xhaW1zID0gdHJ1ZSwgbG9hZFVzZXJJbmZvID0gdHJ1ZSxcbiAgICAgICAgc3RhbGVTdGF0ZUFnZSA9IERlZmF1bHRTdGFsZVN0YXRlQWdlLCBjbG9ja1NrZXcgPSBEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzLFxuICAgICAgICAvLyBvdGhlciBiZWhhdmlvclxuICAgICAgICBzdGF0ZVN0b3JlID0gbmV3IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlKCksXG4gICAgICAgIFJlc3BvbnNlVmFsaWRhdG9yQ3RvciA9IFJlc3BvbnNlVmFsaWRhdG9yLFxuICAgICAgICBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLFxuICAgICAgICAvLyBleHRyYSBxdWVyeSBwYXJhbXNcbiAgICAgICAgZXh0cmFRdWVyeVBhcmFtcyA9IHt9XG4gICAgfSA9IHt9KSB7XG5cbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IG1ldGFkYXRhVXJsO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHNpZ25pbmdLZXlzO1xuXG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XG4gICAgICAgIHRoaXMuX3Jlc3BvbnNlX3R5cGUgPSByZXNwb25zZV90eXBlO1xuICAgICAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLl9yZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcblxuICAgICAgICB0aGlzLl9wcm9tcHQgPSBwcm9tcHQ7XG4gICAgICAgIHRoaXMuX2Rpc3BsYXkgPSBkaXNwbGF5O1xuICAgICAgICB0aGlzLl9tYXhfYWdlID0gbWF4X2FnZTtcbiAgICAgICAgdGhpcy5fdWlfbG9jYWxlcyA9IHVpX2xvY2FsZXM7XG4gICAgICAgIHRoaXMuX2Fjcl92YWx1ZXMgPSBhY3JfdmFsdWVzO1xuICAgICAgICB0aGlzLl9yZXNvdXJjZSA9IHJlc291cmNlO1xuXG4gICAgICAgIHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zID0gISFmaWx0ZXJQcm90b2NvbENsYWltcztcbiAgICAgICAgdGhpcy5fbG9hZFVzZXJJbmZvID0gISFsb2FkVXNlckluZm87XG4gICAgICAgIHRoaXMuX3N0YWxlU3RhdGVBZ2UgPSBzdGFsZVN0YXRlQWdlO1xuICAgICAgICB0aGlzLl9jbG9ja1NrZXcgPSBjbG9ja1NrZXc7XG5cbiAgICAgICAgdGhpcy5fc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmU7XG4gICAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IG5ldyBSZXNwb25zZVZhbGlkYXRvckN0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB0eXBlb2YgZXh0cmFRdWVyeVBhcmFtcyA9PT0gJ29iamVjdCcgPyBleHRyYVF1ZXJ5UGFyYW1zIDoge307XG4gICAgfVxuXG4gICAgLy8gY2xpZW50IGNvbmZpZ1xuICAgIGdldCBjbGllbnRfaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfaWQ7XG4gICAgfVxuICAgIHNldCBjbGllbnRfaWQodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnRfaWQpIHtcbiAgICAgICAgICAgIC8vIG9uZS10aW1lIHNldCBvbmx5XG4gICAgICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcImNsaWVudF9pZCBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IGNsaWVudF9zZWNyZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfc2VjcmV0O1xuICAgIH1cbiAgICBnZXQgcmVzcG9uc2VfdHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlX3R5cGU7XG4gICAgfVxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlO1xuICAgIH1cbiAgICBnZXQgcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICBnZXQgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIH1cblxuXG4gICAgLy8gb3B0aW9uYWwgcHJvdG9jb2wgcGFyYW1zXG4gICAgZ2V0IHByb21wdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21wdDtcbiAgICB9XG4gICAgZ2V0IGRpc3BsYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNwbGF5O1xuICAgIH1cbiAgICBnZXQgbWF4X2FnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heF9hZ2U7XG4gICAgfVxuICAgIGdldCB1aV9sb2NhbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdWlfbG9jYWxlcztcbiAgICB9XG4gICAgZ2V0IGFjcl92YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3JfdmFsdWVzO1xuICAgIH1cbiAgICBnZXQgcmVzb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNvdXJjZTtcbiAgICB9XG5cblxuICAgIC8vIG1ldGFkYXRhXG4gICAgZ2V0IGF1dGhvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcbiAgICB9XG4gICAgc2V0IGF1dGhvcml0eSh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2F1dGhvcml0eSkge1xuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcbiAgICAgICAgICAgIHRoaXMuX2F1dGhvcml0eSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiYXV0aG9yaXR5IGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5hdXRob3JpdHk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybFt0aGlzLl9tZXRhZGF0YVVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gT2lkY01ldGFkYXRhVXJsUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcbiAgICB9XG5cbiAgICAvLyBzZXR0YWJsZS9jYWNoYWJsZSBtZXRhZGF0YSB2YWx1ZXNcbiAgICBnZXQgbWV0YWRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YTtcbiAgICB9XG4gICAgc2V0IG1ldGFkYXRhKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IHNpZ25pbmdLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluZ0tleXM7XG4gICAgfVxuICAgIHNldCBzaWduaW5nS2V5cyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zaWduaW5nS2V5cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIGJlaGF2aW9yIGZsYWdzXG4gICAgZ2V0IGZpbHRlclByb3RvY29sQ2xhaW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXM7XG4gICAgfVxuICAgIGdldCBsb2FkVXNlckluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlckluZm87XG4gICAgfVxuICAgIGdldCBzdGFsZVN0YXRlQWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhbGVTdGF0ZUFnZTtcbiAgICB9XG4gICAgZ2V0IGNsb2NrU2tldygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb2NrU2tldztcbiAgICB9XG5cbiAgICBnZXQgc3RhdGVTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlU3RvcmU7XG4gICAgfVxuICAgIGdldCB2YWxpZGF0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3I7XG4gICAgfVxuICAgIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgLy8gZXh0cmEgcXVlcnkgcGFyYW1zXG4gICAgZ2V0IGV4dHJhUXVlcnlQYXJhbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zO1xuICAgIH1cbiAgICBzZXQgZXh0cmFRdWVyeVBhcmFtcyh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9leHRyYVF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvT2lkY0NsaWVudFNldHRpbmdzLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViU3RvcmFnZVN0YXRlU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKHtwcmVmaXggPSBcIm9pZGMuXCIsIHN0b3JlID0gR2xvYmFsLmxvY2FsU3RvcmFnZX0gPSB7fSkge1xuICAgICAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xuICAgICAgICB0aGlzLl9wcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuc2V0XCIsIGtleSk7XG5cbiAgICAgICAga2V5ID0gdGhpcy5fcHJlZml4ICsga2V5O1xuXG4gICAgICAgIHRoaXMuX3N0b3JlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5nZXRcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUucmVtb3ZlXCIsIGtleSk7XG5cbiAgICAgICAga2V5ID0gdGhpcy5fcHJlZml4ICsga2V5O1xuXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5fc3RvcmUuZ2V0SXRlbShrZXkpO1xuICAgICAgICB0aGlzLl9zdG9yZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGl0ZW0pO1xuICAgIH1cblxuICAgIGdldEFsbEtleXMoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldEFsbEtleXNcIik7XG5cbiAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fc3RvcmUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5fc3RvcmUua2V5KGluZGV4KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKHRoaXMuX3ByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5LnN1YnN0cih0aGlzLl9wcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoa2V5cyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuY29uc3QgdGltZXIgPSB7XG4gICAgc2V0SW50ZXJ2YWw6IGZ1bmN0aW9uIChjYiwgZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGNiLCBkdXJhdGlvbik7XG4gICAgfSxcbiAgICBjbGVhckludGVydmFsOiBmdW5jdGlvbiAoaGFuZGxlKSB7XG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGhhbmRsZSk7XG4gICAgfVxufTtcblxubGV0IHRlc3RpbmcgPSBmYWxzZTtcbmxldCByZXF1ZXN0ID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xvYmFsIHtcblxuICAgIHN0YXRpYyBfdGVzdGluZygpIHtcbiAgICAgICAgdGVzdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBsb2NhdGlvbigpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGxvY2FsU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBzZXNzaW9uU3RvcmFnZSgpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0WE1MSHR0cFJlcXVlc3QobmV3UmVxdWVzdCkge1xuICAgICAgICByZXF1ZXN0ID0gbmV3UmVxdWVzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFhNTEh0dHBSZXF1ZXN0KCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0IHx8IFhNTEh0dHBSZXF1ZXN0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCB0aW1lcigpIHtcbiAgICAgICAgaWYgKCF0ZXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dsb2JhbC5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IE1ldGFkYXRhU2VydmljZSBmcm9tICcuL01ldGFkYXRhU2VydmljZSc7XG5pbXBvcnQgVXNlckluZm9TZXJ2aWNlIGZyb20gJy4vVXNlckluZm9TZXJ2aWNlJztcbmltcG9ydCBFcnJvclJlc3BvbnNlIGZyb20gJy4vRXJyb3JSZXNwb25zZSc7XG5pbXBvcnQgSm9zZVV0aWwgZnJvbSAnLi9Kb3NlVXRpbCc7XG5cbmNvbnN0IFByb3RvY29sQ2xhaW1zID0gW1wibm9uY2VcIiwgXCJhdF9oYXNoXCIsIFwiaWF0XCIsIFwibmJmXCIsIFwiZXhwXCIsIFwiYXVkXCIsIFwiaXNzXCIsIFwiY19oYXNoXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZVZhbGlkYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSwgVXNlckluZm9TZXJ2aWNlQ3RvciA9IFVzZXJJbmZvU2VydmljZSwgam9zZVV0aWwgPSBKb3NlVXRpbCkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzZXR0aW5ncyBwYXNzZWQgdG8gUmVzcG9uc2VWYWxpZGF0b3JcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXR0aW5nc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fdXNlckluZm9TZXJ2aWNlID0gbmV3IFVzZXJJbmZvU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9qb3NlVXRpbCA9IGpvc2VVdGlsO1xuICAgIH1cblxuICAgIHZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2VcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInN0YXRlIHByb2Nlc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZVRva2VucyhzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInRva2VucyB2YWxpZGF0ZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3NDbGFpbXMocmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJjbGFpbXMgcHJvY2Vzc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVTaWdub3V0UmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLnZhbGlkYXRlU2lnbm91dFJlc3BvbnNlXCIpO1xuXG4gICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xuICAgICAgICBMb2cuZGVidWcoXCJzdGF0ZSB2YWxpZGF0ZWRcIik7XG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX3Byb2Nlc3NTaWduaW5QYXJhbXMoc3RhdGUsIHJlc3BvbnNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9wcm9jZXNzU2lnbmluUGFyYW1zXCIpO1xuXG4gICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gcmVzcG9uc2Uuc3RhdGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlN0YXRlIGRvZXMgbm90IG1hdGNoXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFzdGF0ZS5jbGllbnRfaWQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGNsaWVudF9pZCBvbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBjbGllbnRfaWQgb24gc3RhdGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIXN0YXRlLmF1dGhvcml0eSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gYXV0aG9yaXR5IG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF1dGhvcml0eSBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBhdXRob3JpdHkgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ID0gc3RhdGUuYXV0aG9yaXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBhdXRob3JpdHkgaWYgdGhlIGF1dGhvcml0eSBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAmJiB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgIT09IHN0YXRlLmF1dGhvcml0eSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXV0aG9yaXR5IG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgYWxsb3dzIHRoZSBjbGllbnRfaWQgdG8gYmUgbG9hZGVkIGZyb20gdGhlIHNpZ25pbiBzdGF0ZVxuICAgICAgICBpZiAoIXRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkID0gc3RhdGUuY2xpZW50X2lkO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuc3VyZSB3ZSdyZSB1c2luZyB0aGUgY29ycmVjdCBjbGllbnRfaWQgaWYgdGhlIGNsaWVudF9pZCBpcyBub3QgbG9hZGVkIGZyb20gc2lnbmluIHN0YXRlXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAmJiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgIT09IHN0YXRlLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiY2xpZW50X2lkIG1pc21hdGNoIG9uIHNldHRpbmdzIHZzLiBzaWduaW4gc3RhdGVcIikpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBub3cgdGhhdCB3ZSBrbm93IHRoZSBzdGF0ZSBtYXRjaGVzLCB0YWtlIHRoZSBzdG9yZWQgZGF0YVxuICAgICAgICAvLyBhbmQgc2V0IGl0IGludG8gdGhlIHJlc3BvbnNlIHNvIGNhbGxlcnMgY2FuIGdldCB0aGVpciBzdGF0ZVxuICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBmb3IgYm90aCBzdWNjZXNzICYgZXJyb3Igb3V0Y29tZXNcbiAgICAgICAgTG9nLmRlYnVnKFwic3RhdGUgdmFsaWRhdGVkXCIpO1xuICAgICAgICByZXNwb25zZS5zdGF0ZSA9IHN0YXRlLmRhdGE7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICBMb2cud2FybihcIlJlc3BvbnNlIHdhcyBlcnJvclwiLCByZXNwb25zZS5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAmJiAhcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkV4cGVjdGluZyBpZF90b2tlbiBpbiByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlICYmIHJlc3BvbnNlLmlkX3Rva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJOb3QgZXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX3Byb2Nlc3NDbGFpbXMocmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NDbGFpbXNcIik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmlzT3BlbklkQ29ubmVjdCkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwicmVzcG9uc2UgaXMgT0lEQywgcHJvY2Vzc2luZyBjbGFpbXNcIik7XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcyhyZXNwb25zZS5wcm9maWxlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLmxvYWRVc2VySW5mbyAmJiByZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJsb2FkaW5nIHVzZXIgaW5mb1wiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zKHJlc3BvbnNlLmFjY2Vzc190b2tlbikudGhlbihjbGFpbXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJ1c2VyIGluZm8gY2xhaW1zIHJlY2VpdmVkIGZyb20gdXNlciBpbmZvIGVuZHBvaW50XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFpbXMuc3ViICE9PSByZXNwb25zZS5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic3ViIGZyb20gdXNlciBpbmZvIGVuZHBvaW50IGRvZXMgbm90IG1hdGNoIHN1YiBpbiBhY2Nlc3NfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX21lcmdlQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUsIGNsYWltcyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQsIHVwZGF0ZWQgcHJvZmlsZTpcIiwgcmVzcG9uc2UucHJvZmlsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwibm90IGxvYWRpbmcgdXNlciBpbmZvXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwicmVzcG9uc2UgaXMgbm90IE9JREMsIG5vdCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIF9tZXJnZUNsYWltcyhjbGFpbXMxLCBjbGFpbXMyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMxKTtcblxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGNsYWltczIpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBjbGFpbXMyW25hbWVdO1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBbdmFsdWVzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0W25hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0W25hbWVdLmluZGV4T2YodmFsdWUpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdFtuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gW3Jlc3VsdFtuYW1lXSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX2ZpbHRlclByb3RvY29sQ2xhaW1zKGNsYWltcykge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyUHJvdG9jb2xDbGFpbXMsIGluY29taW5nIGNsYWltczpcIiwgY2xhaW1zKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgY2xhaW1zKTtcblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MuX2ZpbHRlclByb3RvY29sQ2xhaW1zKSB7XG4gICAgICAgICAgICBQcm90b2NvbENsYWltcy5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbdHlwZV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTG9nLmRlYnVnKFwicHJvdG9jb2wgY2xhaW1zIGZpbHRlcmVkXCIsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJwcm90b2NvbCBjbGFpbXMgbm90IGZpbHRlcmVkXCIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIF92YWxpZGF0ZVRva2VucyhzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlVG9rZW5zXCIpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5pZF90b2tlbikge1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuYWNjZXNzX3Rva2VuKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVmFsaWRhdGluZyBpZF90b2tlbiBhbmQgYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJWYWxpZGF0aW5nIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiTm8gaWRfdG9rZW4gdG8gdmFsaWRhdGVcIik7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUlkVG9rZW4oc3RhdGUsIHJlc3BvbnNlKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3ZhbGlkYXRlSWRUb2tlblwiKTtcblxuICAgICAgICBpZiAoIXN0YXRlLm5vbmNlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBub25jZSBvbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBub25jZSBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XG4gICAgICAgIGlmICghand0IHx8ICFqd3QuaGVhZGVyIHx8ICFqd3QucGF5bG9hZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIsIGp3dCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5ub25jZSAhPT0gand0LnBheWxvYWQubm9uY2UpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkludmFsaWQgbm9uY2UgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXIoKS50aGVuKGlzc3VlciA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZWNlaXZlZCBpc3N1ZXJcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0U2lnbmluZ0tleXMoKS50aGVuKGtleXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgha2V5cykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzaWduaW5nIGtleXMgZnJvbSBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJSZWNlaXZlZCBzaWduaW5nIGtleXNcIik7XG4gICAgICAgICAgICAgICAgbGV0IGtleTtcbiAgICAgICAgICAgICAgICBpZiAoIWtpZCkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzID0gdGhpcy5fZmlsdGVyQnlBbGcoa2V5cywgand0LmhlYWRlci5hbGcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGtpZCBmb3VuZCBpbiBpZF90b2tlbiBhbmQgbW9yZSB0aGFuIG9uZSBrZXkgZm91bmQgaW4gbWV0YWRhdGFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2lkIGlzIG1hbmRhdG9yeSBvbmx5IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGtleXMgaW4gdGhlIHJlZmVyZW5jZWQgSldLIFNldCBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGh0dHA6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjU2lnbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5cy5maWx0ZXIoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXkua2lkID09PSBraWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGtleSBtYXRjaGluZyBraWQgb3IgYWxnIGZvdW5kIGluIHNpZ25pbmcga2V5c1wiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGF1ZGllbmNlID0gc3RhdGUuY2xpZW50X2lkO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBjbG9ja1NrZXdJblNlY29uZHMgPSB0aGlzLl9zZXR0aW5ncy5jbG9ja1NrZXc7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiVmFsaWRhaW5nIEpXVDsgdXNpbmcgY2xvY2sgc2tldyAoaW4gc2Vjb25kcykgb2Y6IFwiLCBjbG9ja1NrZXdJblNlY29uZHMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pvc2VVdGlsLnZhbGlkYXRlSnd0KHJlc3BvbnNlLmlkX3Rva2VuLCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tld0luU2Vjb25kcykudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJKV1QgdmFsaWRhdGlvbiBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFqd3QucGF5bG9hZC5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHN1YiBwcmVzZW50IGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnByb2ZpbGUgPSBqd3QucGF5bG9hZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZmlsdGVyQnlBbGcoa2V5cywgYWxnKXtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX2ZpbHRlckJ5QWxnXCIsIGFsZyk7XG5cbiAgICAgICAgdmFyIGt0eSA9IG51bGw7XG4gICAgICAgIGlmIChhbGcuc3RhcnRzV2l0aChcIlJTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIlJTQVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiUFNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiUFNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhbGcuc3RhcnRzV2l0aChcIkVTXCIpKSB7XG4gICAgICAgICAgICBrdHkgPSBcIkVDXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJhbGcgbm90IHN1cHBvcnRlZDogXCIsIGFsZyk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIExvZy5kZWJ1ZyhcIkxvb2tpbmcgZm9yIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHkpO1xuXG4gICAgICAgIGtleXMgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5rdHkgPT09IGt0eTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiTnVtYmVyIG9mIGtleXMgdGhhdCBtYXRjaCBrdHk6IFwiLCBrdHksIGtleXMubGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVBY2Nlc3NUb2tlbihyZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVBY2Nlc3NUb2tlblwiKTtcblxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHByb2ZpbGUgbG9hZGVkIGZyb20gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gYXRfaGFzaCBpbiBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBqd3QgPSB0aGlzLl9qb3NlVXRpbC5wYXJzZUp3dChyZXNwb25zZS5pZF90b2tlbik7XG4gICAgICAgIGlmICghand0IHx8ICFqd3QuaGVhZGVyKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIiwgand0KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGhhc2hBbGcgPSBqd3QuaGVhZGVyLmFsZztcbiAgICAgICAgaWYgKCFoYXNoQWxnIHx8IGhhc2hBbGcubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFzaEJpdHMgPSBoYXNoQWxnLnN1YnN0cigyLCAzKTtcbiAgICAgICAgaWYgKCFoYXNoQml0cykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhc2hCaXRzID0gcGFyc2VJbnQoaGFzaEJpdHMpO1xuICAgICAgICBpZiAoaGFzaEJpdHMgIT09IDI1NiAmJiBoYXNoQml0cyAhPT0gMzg0ICYmIGhhc2hCaXRzICE9PSA1MTIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZywgaGFzaEJpdHMpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFsZzogXCIgKyBoYXNoQWxnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2hhID0gXCJzaGFcIiArIGhhc2hCaXRzO1xuICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2pvc2VVdGlsLmhhc2hTdHJpbmcocmVzcG9uc2UuYWNjZXNzX3Rva2VuLCBzaGEpO1xuICAgICAgICBpZiAoIWhhc2gpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcImFjY2Vzc190b2tlbiBoYXNoIGZhaWxlZDpcIiwgc2hhKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVmdCA9IGhhc2guc3Vic3RyKDAsIGhhc2gubGVuZ3RoIC8gMik7XG4gICAgICAgIHZhciBsZWZ0X2I2NHUgPSB0aGlzLl9qb3NlVXRpbC5oZXhUb0Jhc2U2NFVybChsZWZ0KTtcbiAgICAgICAgaWYgKGxlZnRfYjY0dSAhPT0gcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiLCBsZWZ0X2I2NHUsIHJlc3BvbnNlLnByb2ZpbGUuYXRfaGFzaCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiRmFpbGVkIHRvIHZhbGlkYXRlIGF0X2hhc2hcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNwb25zZVZhbGlkYXRvci5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IEpzb25TZXJ2aWNlIGZyb20gJy4vSnNvblNlcnZpY2UnO1xuXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YWRhdGFTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gc2V0dGluZ3MgcGFzc2VkIHRvIE1ldGFkYXRhU2VydmljZVwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XG4gICAgfVxuXG4gICAgZ2V0IG1ldGFkYXRhVXJsKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21ldGFkYXRhVXJsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhVXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmwgJiYgdGhpcy5fbWV0YWRhdGFVcmwuaW5kZXhPZihPaWRjTWV0YWRhdGFVcmxQYXRoKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9ICcvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSBPaWRjTWV0YWRhdGFVcmxQYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVVybDtcbiAgICB9XG5cbiAgICBnZXRNZXRhZGF0YSgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldE1ldGFkYXRhXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmV0dXJuaW5nIG1ldGFkYXRhIGZyb20gc2V0dGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXV0aG9yaXR5IG9yIG1ldGFkYXRhVXJsIGNvbmZpZ3VyZWQgb24gc2V0dGluZ3NcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiZ2V0dGluZyBtZXRhZGF0YSBmcm9tXCIsIHRoaXMubWV0YWRhdGFVcmwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKHRoaXMubWV0YWRhdGFVcmwpXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwianNvbiByZWNlaXZlZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBnZXRJc3N1ZXIoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRJc3N1ZXJcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiaXNzdWVyXCIpO1xuICAgIH1cblxuICAgIGdldEF1dGhvcml6YXRpb25FbmRwb2ludCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldEF1dGhvcml6YXRpb25FbmRwb2ludFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJhdXRob3JpemF0aW9uX2VuZHBvaW50XCIpO1xuICAgIH1cblxuICAgIGdldFVzZXJJbmZvRW5kcG9pbnQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRVc2VySW5mb0VuZHBvaW50XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcInVzZXJpbmZvX2VuZHBvaW50XCIpO1xuICAgIH1cblxuICAgIGdldFRva2VuRW5kcG9pbnQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRUb2tlbkVuZHBvaW50XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcInRva2VuX2VuZHBvaW50XCIsIHRydWUpO1xuICAgIH1cbiAgICBcbiAgICBnZXRDaGVja1Nlc3Npb25JZnJhbWUoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRDaGVja1Nlc3Npb25JZnJhbWVcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiY2hlY2tfc2Vzc2lvbl9pZnJhbWVcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkge1xuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImVuZF9zZXNzaW9uX2VuZHBvaW50XCIsIHRydWUpO1xuICAgIH1cblxuICAgIGdldFJldm9jYXRpb25FbmRwb2ludCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFJldm9jYXRpb25FbmRwb2ludFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJyZXZvY2F0aW9uX2VuZHBvaW50XCIsIHRydWUpO1xuICAgIH1cblxuICAgIF9nZXRNZXRhZGF0YVByb3BlcnR5KG5hbWUsIG9wdGlvbmFsPWZhbHNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5fZ2V0TWV0YWRhdGFQcm9wZXJ0eVwiLCBuYW1lKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRNZXRhZGF0YSgpLnRoZW4obWV0YWRhdGEgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwibWV0YWRhdGEgcmVjaWV2ZWRcIik7XG5cbiAgICAgICAgICAgIGlmIChtZXRhZGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLndhcm4oXCJNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIG9wdGlvbmFsIHByb3BlcnR5IFwiICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJNZXRhZGF0YSBkb2VzIG5vdCBjb250YWluIHByb3BlcnR5IFwiICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YVtuYW1lXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U2lnbmluZ0tleXMoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5c1wiKTtcblxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3Muc2lnbmluZ0tleXMpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJldHVybmluZyBzaWduaW5nS2V5cyBmcm9tIHNldHRpbmdzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImp3a3NfdXJpXCIpLnRoZW4oandrc191cmkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiandrc191cmkgcmVjZWl2ZWRcIiwgandrc191cmkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbihqd2tzX3VyaSkudGhlbihrZXlTZXQgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImtleSBzZXQgcmVjZWl2ZWRcIiwga2V5U2V0KTtcblxuICAgICAgICAgICAgICAgIGlmICgha2V5U2V0LmtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBrZXlzIG9uIGtleXNldFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cyA9IGtleVNldC5rZXlzO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWV0YWRhdGFTZXJ2aWNlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnNvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICB0aGlzLl9YTUxIdHRwUmVxdWVzdCA9IFhNTEh0dHBSZXF1ZXN0Q3RvcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0SnNvbih1cmwsIHRva2VuKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkpzb25TZXJ2aWNlLmdldEpzb25cIiwgdXJsKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdXJsKXtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHVybCBwYXNzZWRcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwpO1xuXG4gICAgICAgICAgICByZXEub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSFRUUCByZXNwb25zZSByZWNlaXZlZCwgc3RhdHVzXCIsIHJlcS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChyZXEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXEucmVzcG9uc2VUZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkVycm9yIHBhcnNpbmcgSlNPTiByZXNwb25zZVwiLCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IocmVxLnN0YXR1c1RleHQgKyBcIiAoXCIgKyByZXEuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIm5ldHdvcmsgZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KEVycm9yKFwiTmV0d29yayBFcnJvclwiKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJ0b2tlbiBwYXNzZWQsIHNldHRpbmcgQXV0aG9yaXphdGlvbiBoZWFkZXJcIik7XG4gICAgICAgICAgICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXEuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0pzb25TZXJ2aWNlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IEpzb25TZXJ2aWNlIGZyb20gJy4vSnNvblNlcnZpY2UnO1xuaW1wb3J0IE1ldGFkYXRhU2VydmljZSBmcm9tICcuL01ldGFkYXRhU2VydmljZSc7XG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm9TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgSnNvblNlcnZpY2VDdG9yID0gSnNvblNlcnZpY2UsIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gc2V0dGluZ3MgcGFzc2VkIHRvIFVzZXJJbmZvU2VydmljZVwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fanNvblNlcnZpY2UgPSBuZXcgSnNvblNlcnZpY2VDdG9yKCk7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhU2VydmljZSA9IG5ldyBNZXRhZGF0YVNlcnZpY2VDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICBnZXRDbGFpbXModG9rZW4pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlckluZm9TZXJ2aWNlLmdldENsYWltc1wiKTtcblxuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyB0b2tlbiBwYXNzZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiQSB0b2tlbiBpcyByZXF1aXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldFVzZXJJbmZvRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJyZWNlaXZlZCB1c2VyaW5mbyB1cmxcIiwgdXJsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLmdldEpzb24odXJsLCB0b2tlbikudGhlbihjbGFpbXMgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImNsYWltcyByZWNlaXZlZFwiLCBjbGFpbXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGFpbXM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXJJbmZvU2VydmljZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvclJlc3BvbnNlIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHtlcnJvciwgZXJyb3JfZGVzY3JpcHRpb24sIGVycm9yX3VyaSwgc3RhdGV9PXt9XG4gICAgKSB7XG4gICAgICAgICBpZiAoIWVycm9yKXtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGVycm9yIHBhc3NlZCB0byBFcnJvclJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXJyb3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uIHx8IGVycm9yKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmFtZSA9IFwiRXJyb3JSZXNwb25zZVwiOyBcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IGVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IGVycm9yX3VyaTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3JSZXNwb25zZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbi8vIGltcG9ydCB7IGp3cywgS0VZVVRJTCBhcyBLZXlVdGlsLCBYNTA5LCBjcnlwdG8sIGhleHRvYjY0dSB9IGZyb20gJ2pzcnNhc2lnbic7XG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBJZFRva2VuVmVyaWZpZXIgZnJvbSAnaWR0b2tlbi12ZXJpZmllcidcblxuY29uc3QgQWxsb3dlZFNpZ25pbmdBbGdzID0gWydSUzI1NicsICdSUzM4NCcsICdSUzUxMicsICdQUzI1NicsICdQUzM4NCcsICdQUzUxMicsICdFUzI1NicsICdFUzM4NCcsICdFUzUxMiddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3NlVXRpbCB7XG5cbiAgICBzdGF0aWMgcGFyc2VKd3Qoand0KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLnBhcnNlSnd0XCIpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgICAgICBleHBlY3RlZEFsZzogJ1JTMjU2J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaWRUb2tlblZlcmlmaWVyID0gbmV3IElkVG9rZW5WZXJpZmllcihwYXJhbWV0ZXJzKVxuXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGlkVG9rZW5WZXJpZmllci5kZWNvZGUoand0KVxuICAgICAgICAgICAgaWYgKHRva2VuLmhlYWRlciAmJiB0b2tlbi5wYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0b2tlbi5oZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHRva2VuLnBheWxvYWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyB2YWxpZGF0ZUp3dChqd3QsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3csIGNiKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLnZhbGlkYXRlSnd0XCIpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIC8vIGlmIChrZXkua3R5ID09PSBcIlJTQVwiKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKGtleS5lICYmIGtleS5uKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGtleSA9IEtleVV0aWwuZ2V0S2V5KGtleSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGVsc2UgaWYgKGtleS54NWMgJiYga2V5Lng1Yy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoWDUwOS5nZXRQdWJsaWNLZXlGcm9tQ2VydFBFTShrZXkueDVjWzBdKSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICBMb2cuZXJyb3IoXCJSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJSU0Ega2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIpKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBlbHNlIGlmIChrZXkua3R5ID09PSBcIkVDXCIpIHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoa2V5LmNydiAmJiBrZXkueCAmJiBrZXkueSkge1xuICAgICAgICAgICAgLy8gICAgICAgICBrZXkgPSBLZXlVdGlsLmdldEtleShrZXkpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgTG9nLmVycm9yKFwiRUMga2V5IG1pc3Npbmcga2V5IG1hdGVyaWFsXCIsIGtleSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgIExvZy5lcnJvcihcIlVuc3VwcG9ydGVkIGtleSB0eXBlXCIsIGtleSAmJiBrZXkua3R5KTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGU6IFwiICsga2V5ICYmIGtleS5rdHkpKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXR1cm4gSm9zZVV0aWwuX3ZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihlICYmIGUubWVzc2FnZSB8fCBlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkpXVCB2YWxpZGF0aW9uIGZhaWxlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBfdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkpvc2VVdGlsLl92YWxpZGF0ZUp3dFwiKTtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHtcbiAgICAgICAgICAgIGlzc3VlcixcbiAgICAgICAgICAgIGF1ZGllbmNlLFxuICAgICAgICAgICAgbGVld2F5OiBjbG9ja1NrZXcsXG4gICAgICAgICAgICBleHBlY3RlZEFsZzogJ1JTMjU2J1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkVG9rZW5WZXJpZmllciA9IG5ldyBJZFRva2VuVmVyaWZpZXIocGFyYW1ldGVycylcblxuICAgICAgICBpZiAoIWNsb2NrU2tldykge1xuICAgICAgICAgICAgY2xvY2tTa2V3ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbm93KSB7XG4gICAgICAgICAgICBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGF5bG9hZCA9IEpvc2VVdGlsLnBhcnNlSnd0KGp3dCkucGF5bG9hZDtcblxuICAgICAgICBpZiAoIXBheWxvYWQuaXNzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpc3N1ZXIgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQuaXNzICE9PSBpc3N1ZXIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkludmFsaWQgaXNzdWVyIGluIHRva2VuXCIsIHBheWxvYWQuaXNzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGlzc3VlciBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmlzcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkLmF1ZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiYXVkIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiYXVkIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWxpZEF1ZGllbmNlID0gcGF5bG9hZC5hdWQgPT09IGF1ZGllbmNlIHx8IChBcnJheS5pc0FycmF5KHBheWxvYWQuYXVkKSAmJiBwYXlsb2FkLmF1ZC5pbmRleE9mKGF1ZGllbmNlKSA+PSAwKTsgXG4gICAgICAgIGlmICghdmFsaWRBdWRpZW5jZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlblwiLCBwYXlsb2FkLmF1ZCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiSW52YWxpZCBhdWRpZW5jZSBpbiB0b2tlbjogXCIgKyBwYXlsb2FkLmF1ZCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxvd2VyTm93ID0gbm93ICsgY2xvY2tTa2V3O1xuICAgICAgICB2YXIgdXBwZXJOb3cgPSBub3cgLSBjbG9ja1NrZXc7XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkLmlhdCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiaWF0IHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb3dlck5vdyA8IHBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJpYXQgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLmlhdCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiaWF0IGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5pYXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXlsb2FkLm5iZiAmJiBsb3dlck5vdyA8IHBheWxvYWQubmJmKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJuYmYgaXMgaW4gdGhlIGZ1dHVyZVwiLCBwYXlsb2FkLm5iZik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibmJmIGlzIGluIHRoZSBmdXR1cmU6IFwiICsgcGF5bG9hZC5uYmYpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGF5bG9hZC5leHApIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcImV4cCB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCB3YXMgbm90IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5leHAgPCB1cHBlck5vdykge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiZXhwIGlzIGluIHRoZSBwYXN0XCIsIHBheWxvYWQuZXhwKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJleHAgaXMgaW4gdGhlIHBhc3Q6XCIgKyBwYXlsb2FkLmV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGlmICghandzLkpXUy52ZXJpZnkoand0LCBrZXksIEFsbG93ZWRTaWduaW5nQWxncykpIHtcbiAgICAgICAgICAgIGlmICghaWRUb2tlblZlcmlmaWVyLnZlcmlmeShqd3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihlICYmIGUubWVzc2FnZSB8fCBlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJzaWduYXR1cmUgdmFsaWRhdGlvbiBmYWlsZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYXNoU3RyaW5nKHZhbHVlLCBhbGcpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwuaGFzaFN0cmluZ1wiLCB2YWx1ZSwgYWxnKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBjcnlwdG8uVXRpbC5oYXNoU3RyaW5nKHZhbHVlLCBhbGcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGV4VG9CYXNlNjRVcmwodmFsdWUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwuaGV4VG9CYXNlNjRVcmxcIiwgdmFsdWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGhleHRvYjY0dSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Kb3NlVXRpbC5qcyIsInZhciBzaGEyNTYgPSByZXF1aXJlKCdjcnlwdG8tanMvc2hhMjU2Jyk7XG52YXIgY3J5cHRvQmFzZTY0ID0gcmVxdWlyZSgnY3J5cHRvLWpzL2VuYy1iYXNlNjQnKTtcbnZhciBjcnlwdG9IZXggPSByZXF1aXJlKCdjcnlwdG8tanMvZW5jLWhleCcpO1xuXG52YXIgUlNBVmVyaWZpZXIgPSByZXF1aXJlKCcuL2hlbHBlcnMvcnNhLXZlcmlmaWVyJyk7XG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Jhc2U2NCcpO1xudmFyIGp3a3MgPSByZXF1aXJlKCcuL2hlbHBlcnMvandrcycpO1xudmFyIGVycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2Vycm9yJyk7XG52YXIgRHVtbXlDYWNoZSA9IHJlcXVpcmUoJy4vaGVscGVycy9kdW1teS1jYWNoZScpO1xudmFyIHN1cHBvcnRlZEFsZ3MgPSBbJ1JTMjU2J107XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZF90b2tlbiB2ZXJpZmllclxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1ldGVyc1xuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtZXRlcnMuaXNzdWVyIG5hbWUgb2YgdGhlIGlzc3VlciBvZiB0aGUgdG9rZW5cbiAqIHRoYXQgc2hvdWxkIG1hdGNoIHRoZSBgaXNzYCBjbGFpbSBpbiB0aGUgaWRfdG9rZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbWV0ZXJzLmF1ZGllbmNlIGlkZW50aWZpZXMgdGhlIHJlY2lwaWVudHMgdGhhdCB0aGUgSldUIGlzIGludGVuZGVkIGZvclxuICogYW5kIHNob3VsZCBtYXRjaCB0aGUgYGF1ZGAgY2xhaW1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1ldGVycy5qd2tzQ2FjaGVdIGNhY2hlIGZvciBKU09OIFdlYiBUb2tlbiBLZXlzLiBCeSBkZWZhdWx0IGl0IGhhcyBubyBjYWNoZVxuICogQHBhcmFtIHtTdHJpbmd9IFtwYXJhbWV0ZXJzLmp3a3NVUkldIEEgdmFsaWQsIGRpcmVjdCBVUkkgdG8gZmV0Y2ggdGhlIEpTT04gV2ViIEtleSBTZXQgKEpXS1MpLlxuICogQHBhcmFtIHtTdHJpbmd9IFtwYXJhbWV0ZXJzLmV4cGVjdGVkQWxnPSdSUzI1NiddIGFsZ29yaXRobSBpbiB3aGljaCB0aGUgaWRfdG9rZW4gd2FzIHNpZ25lZFxuICogYW5kIHdpbGwgYmUgdXNlZCB0byB2YWxpZGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbWV0ZXJzLmxlZXdheT0wXSBudW1iZXIgb2Ygc2Vjb25kcyB0aGF0IHRoZSBjbG9jayBjYW4gYmUgb3V0IG9mIHN5bmNcbiAqIHdoaWxlIHZhbGlkYXRpbmcgZXhwaXJhdGlvbiBvZiB0aGUgaWRfdG9rZW5cbiAqL1xuZnVuY3Rpb24gSWRUb2tlblZlcmlmaWVyKHBhcmFtZXRlcnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHBhcmFtZXRlcnMgfHwge307XG5cbiAgICB0aGlzLmp3a3NDYWNoZSA9IG9wdGlvbnMuandrc0NhY2hlIHx8IG5ldyBEdW1teUNhY2hlKCk7XG4gICAgdGhpcy5leHBlY3RlZEFsZyA9IG9wdGlvbnMuZXhwZWN0ZWRBbGcgfHwgJ1JTMjU2JztcbiAgICB0aGlzLmlzc3VlciA9IG9wdGlvbnMuaXNzdWVyO1xuICAgIHRoaXMuYXVkaWVuY2UgPSBvcHRpb25zLmF1ZGllbmNlO1xuICAgIHRoaXMubGVld2F5ID0gb3B0aW9ucy5sZWV3YXkgfHwgMDtcbiAgICB0aGlzLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjayA9IG9wdGlvbnMuX19kaXNhYmxlRXhwaXJhdGlvbkNoZWNrIHx8IGZhbHNlO1xuICAgIHRoaXMuandrc1VSSSA9IG9wdGlvbnMuandrc1VSSTtcblxuICAgIGlmICh0aGlzLmxlZXdheSA8IDAgfHwgdGhpcy5sZWV3YXkgPiA2MCkge1xuICAgICAgICB0aHJvdyBuZXcgZXJyb3IuQ29uZmlndXJhdGlvbkVycm9yKCdUaGUgbGVld2F5IHNob3VsZCBiZSBwb3NpdGl2ZSBhbmQgbG93ZXIgdGhhbiBhIG1pbnV0ZS4nKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydGVkQWxncy5pbmRleE9mKHRoaXMuZXhwZWN0ZWRBbGcpID09PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgZXJyb3IuQ29uZmlndXJhdGlvbkVycm9yKCdBbGdvcml0aG0gJyArIHRoaXMuZXhwZWN0ZWRBbGcgK1xuICAgICAgICAgICAgJyBpcyBub3Qgc3VwcG9ydGVkLiAoRXhwZWN0ZWQgYWxnczogWycgKyBzdXBwb3J0ZWRBbGdzLmpvaW4oJywnKSArICddKScpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge0Vycm9yfSBbZXJyXSBlcnJvciByZXR1cm5lZCBpZiB0aGUgdmVyaWZ5IGNhbm5vdCBiZSBwZXJmb3JtZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N0YXR1c10gaWYgdGhlIHRva2VuIGlzIHZhbGlkIG9yIG5vdFxuICovXG5cbi8qKlxuICogVmVyaWZpZXMgYW4gaWRfdG9rZW5cbiAqXG4gKiBJdCB3aWxsIHZhbGlkYXRlOlxuICogLSBzaWduYXR1cmUgYWNjb3JkaW5nIHRvIHRoZSBhbGdvcml0aG0gY29uZmlndXJlZCBpbiB0aGUgdmVyaWZpZXIuXG4gKiAtIGlmIG5vbmNlIGlzIHByZXNlbnQgYW5kIG1hdGNoZXMgdGhlIG9uZSBwcm92aWRlZFxuICogLSBpZiBgaXNzYCBhbmQgYGF1ZGAgY2xhaW1zIG1hdGNoZXMgdGhlIGNvbmZpZ3VyZWQgaXNzdWVyIGFuZCBhdWRpZW5jZVxuICogLSBpZiB0b2tlbiBpcyBub3QgZXhwaXJlZCBhbmQgdmFsaWQgKGlmIHRoZSBgbmJmYCBjbGFpbSBpcyBpbiB0aGUgcGFzdClcbiAqXG4gKiBAbWV0aG9kIHZlcmlmeVxuICogQHBhcmFtIHtTdHJpbmd9IHRva2VuIGlkX3Rva2VuIHRvIHZlcmlmeVxuICogQHBhcmFtIHtTdHJpbmd9IFtub25jZV0gbm9uY2UgdmFsdWUgdGhhdCBzaG91bGQgbWF0Y2ggdGhlIG9uZSBpbiB0aGUgaWRfdG9rZW4gY2xhaW1zXG4gKi9cbklkVG9rZW5WZXJpZmllci5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gKHRva2VuLCBub25jZSkge1xuICAgIHZhciBqd3QgPSB0aGlzLmRlY29kZSh0b2tlbik7XG5cbiAgICBpZiAoand0IGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGp3dCk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgdmFycy1vbi10b3AgKi9cbiAgICB2YXIgaGVhZEFuZFBheWxvYWQgPSBqd3QuZW5jb2RlZC5oZWFkZXIgKyAnLicgKyBqd3QuZW5jb2RlZC5wYXlsb2FkO1xuICAgIHZhciBzaWduYXR1cmUgPSBiYXNlNjQuZGVjb2RlVG9IRVgoand0LmVuY29kZWQuc2lnbmF0dXJlKTtcblxuICAgIHZhciBhbGcgPSBqd3QuaGVhZGVyLmFsZztcbiAgICB2YXIga2lkID0gand0LmhlYWRlci5raWQ7XG5cbiAgICB2YXIgYXVkID0gand0LnBheWxvYWQuYXVkO1xuICAgIHZhciBpc3MgPSBqd3QucGF5bG9hZC5pc3M7XG4gICAgdmFyIGV4cCA9IGp3dC5wYXlsb2FkLmV4cDtcbiAgICB2YXIgbmJmID0gand0LnBheWxvYWQubmJmO1xuICAgIHZhciB0bm9uY2UgPSBqd3QucGF5bG9hZC5ub25jZSB8fCBudWxsO1xuICAgIC8qIGVzbGludC1lbmFibGUgdmFycy1vbi10b3AgKi9cblxuICAgIGlmICh0aGlzLmlzc3VlciAhPT0gaXNzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ0lzc3VlciAnICsgaXNzICsgJyBpcyBub3QgdmFsaWQuJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hdWRpZW5jZSAhPT0gYXVkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ0F1ZGllbmNlICcgKyBhdWQgKyAnIGlzIG5vdCB2YWxpZC4nKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmV4cGVjdGVkQWxnICE9PSBhbGcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignQWxnb3JpdGhtICcgKyBhbGcgK1xuICAgICAgICAgICAgJyBpcyBub3Qgc3VwcG9ydGVkLiAoRXhwZWN0ZWQgYWxnczogWycgKyBzdXBwb3J0ZWRBbGdzLmpvaW4oJywnKSArICddKScpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRub25jZSAhPT0gbm9uY2UpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignTm9uY2UgZG9lcyBub3QgbWF0Y2guJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICB2YXIgZXhwaXJhdGlvbkVycm9yID0gdGhpcy52ZXJpZnlFeHBBbmROYmYoZXhwLCBuYmYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhcnMtb24tdG9wXG5cbiAgICBpZiAoZXhwaXJhdGlvbkVycm9yKSB7XG4gICAgICAgIHJldHVybiBleHBpcmF0aW9uRXJyb3IsIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFJzYVZlcmlmaWVyKGlzcywga2lkKVxuICAgICAgICAudGhlbihyc2FWZXJpZmllciA9PiB7XG4gICAgICAgICAgICBpZiAocnNhVmVyaWZpZXIudmVyaWZ5KGhlYWRBbmRQYXlsb2FkLCBzaWduYXR1cmUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqd3QucGF5bG9hZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdJbnZhbGlkIHNpZ25hdHVyZS4nKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKVxuICAgICAgICB9KVxufTtcblxuLyoqXG4gKiBWZXJpZmllcyB0aGF0IHRoZSBgZXhwYCBhbmQgYG5iZmAgY2xhaW1zIGFyZSB2YWxpZCBpbiB0aGUgY3VycmVudCBtb21lbnQuXG4gKlxuICogQG1ldGhvZCB2ZXJpZnlFeHBBbmROYmZcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHAgdmFsdWUgb2YgYGV4cGAgY2xhaW1cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYmYgdmFsdWUgb2YgYG5iZmAgY2xhaW1cbiAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIHRva2VuIGlzIHZhbGlkIGFjY29yZGluZyB0byBgZXhwYCBhbmQgYG5iZmBcbiAqL1xuSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnlFeHBBbmROYmYgPSBmdW5jdGlvbiAoZXhwLCBuYmYpIHtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgZXhwRGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIHZhciBuYmZEYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAodGhpcy5fX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZXhwRGF0ZS5zZXRVVENTZWNvbmRzKGV4cCArIHRoaXMubGVld2F5KTtcblxuICAgIGlmIChub3cgPiBleHBEYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ0V4cGlyZWQgdG9rZW4uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYmYgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBuYmZEYXRlLnNldFVUQ1NlY29uZHMobmJmIC0gdGhpcy5sZWV3YXkpO1xuICAgIGlmIChub3cgPCBuYmZEYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ1RoZSB0b2tlbiBpcyBub3QgdmFsaWQgdW50aWwgbGF0ZXIgaW4gdGhlIGZ1dHVyZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIGNoZWNrIHlvdXIgY29tcHV0ZWQgY2xvY2suJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIFZlcmlmaWVzIHRoYXQgdGhlIGBleHBgIGFuZCBgaWF0YCBjbGFpbXMgYXJlIHZhbGlkIGluIHRoZSBjdXJyZW50IG1vbWVudC5cbiAqXG4gKiBAbWV0aG9kIHZlcmlmeUV4cEFuZElhdFxuICogQHBhcmFtIHtTdHJpbmd9IGV4cCB2YWx1ZSBvZiBgZXhwYCBjbGFpbVxuICogQHBhcmFtIHtTdHJpbmd9IGlhdCB2YWx1ZSBvZiBgaWF0YCBjbGFpbVxuICogQHJldHVybiB7Ym9vbGVhbn0gaWYgdG9rZW4gaXMgdmFsaWQgYWNjb3JkaW5nIHRvIGBleHBgIGFuZCBgaWF0YFxuICovXG5JZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeUV4cEFuZElhdCA9IGZ1bmN0aW9uIChleHAsIGlhdCkge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBleHBEYXRlID0gbmV3IERhdGUoMCk7XG4gICAgdmFyIGlhdERhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICh0aGlzLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjaykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBleHBEYXRlLnNldFVUQ1NlY29uZHMoZXhwICsgdGhpcy5sZWV3YXkpO1xuXG4gICAgaWYgKG5vdyA+IGV4cERhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignRXhwaXJlZCB0b2tlbi4nKTtcbiAgICB9XG5cbiAgICBpYXREYXRlLnNldFVUQ1NlY29uZHMoaWF0IC0gdGhpcy5sZWV3YXkpO1xuXG4gICAgaWYgKG5vdyA8IGlhdERhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignVGhlIHRva2VuIHdhcyBpc3N1ZWQgaW4gdGhlIGZ1dHVyZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIGNoZWNrIHlvdXIgY29tcHV0ZWQgY2xvY2suJyk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS5nZXRSc2FWZXJpZmllciA9IGZ1bmN0aW9uIChpc3MsIGtpZCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGNhY2hla2V5ID0gaXNzICsga2lkO1xuXG4gICAgaWYgKCF0aGlzLmp3a3NDYWNoZS5oYXMoY2FjaGVrZXkpKSB7XG4gICAgICAgIGp3a3MuZ2V0SldLUyh7XG4gICAgICAgICAgICBqd2tzVVJJOiB0aGlzLmp3a3NVUkksXG4gICAgICAgICAgICBpc3M6IGlzcyxcbiAgICAgICAgICAgIGtpZDoga2lkXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihrZXlJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5qd2tzQ2FjaGUuc2V0KGNhY2hla2V5LCBrZXlJbmZvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwsIG5ldyBSU0FWZXJpZmllcihrZXlJbmZvLm1vZHVsdXMsIGtleUluZm8uZXhwKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVqZWN0KGUpXG4gICAgICAgICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlJbmZvID0gdGhpcy5qd2tzQ2FjaGUuZ2V0KGNhY2hla2V5KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSB2YXJzLW9uLXRvcFxuICAgICAgICBQcm9taXNlLnJlc29sdmUobnVsbCwgbmV3IFJTQVZlcmlmaWVyKGtleUluZm8ubW9kdWx1cywga2V5SW5mby5leHApKTtcbiAgICB9XG59O1xuXG5cbi8qKlxuICogQHR5cGVkZWYgRGVjb2RlZFRva2VuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IGhlYWRlciAtIGNvbnRlbnQgb2YgdGhlIEpXVCBoZWFkZXIuXG4gKiBAcHJvcGVydHkge09iamVjdH0gcGF5bG9hZCAtIHRva2VuIGNsYWltcy5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBlbmNvZGVkIC0gZW5jb2RlZCBwYXJ0cyBvZiB0aGUgdG9rZW4uXG4gKi9cblxuLyoqXG4gKiBEZWNvZGVzIGEgd2VsbCBmb3JtZWQgSldUIHdpdGhvdXQgYW55IHZlcmlmaWNhdGlvblxuICpcbiAqIEBtZXRob2QgZGVjb2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gdG9rZW4gZGVjb2RlcyB0aGUgdG9rZW5cbiAqIEByZXR1cm4ge0RlY29kZWRUb2tlbn0gaWYgdG9rZW4gaXMgdmFsaWQgYWNjb3JkaW5nIHRvIGBleHBgIGFuZCBgbmJmYFxuICovXG5JZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHZhciBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gICAgdmFyIGhlYWRlcjtcbiAgICB2YXIgcGF5bG9hZDtcblxuICAgIGlmIChwYXJ0cy5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignQ2Fubm90IGRlY29kZSBhIG1hbGZvcm1lZCBKV1QnKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBoZWFkZXIgPSBKU09OLnBhcnNlKGJhc2U2NC5kZWNvZGVUb1N0cmluZyhwYXJ0c1swXSkpO1xuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShiYXNlNjQuZGVjb2RlVG9TdHJpbmcocGFydHNbMV0pKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ1Rva2VuIGhlYWRlciBvciBwYXlsb2FkIGlzIG5vdCB2YWxpZCBKU09OJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgIGVuY29kZWQ6IHtcbiAgICAgICAgICAgIGhlYWRlcjogcGFydHNbMF0sXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXJ0c1sxXSxcbiAgICAgICAgICAgIHNpZ25hdHVyZTogcGFydHNbMl1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayB2YWxpZGF0ZUFjY2Vzc1Rva2VuQ2FsbGJhY2tcbiAqIEBwYXJhbSB7RXJyb3J9IFtlcnJdIGVycm9yIHJldHVybmVkIGlmIHRoZSB2YWxpZGF0aW9uIGNhbm5vdCBiZSBwZXJmb3JtZWRcbiAqIG9yIHRoZSB0b2tlbiBpcyBpbnZhbGlkLiBJZiB0aGVyZSBpcyBubyBlcnJvciwgdGhlbiB0aGUgYWNjZXNzX3Rva2VuIGlzIHZhbGlkLlxuICovXG5cbi8qKlxuICogVmFsaWRhdGVzIGFuIGFjY2Vzc190b2tlbiBiYXNlZCBvbiB7QGxpbmsgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNJbXBsaWNpdFRva2VuVmFsaWRhdGlvbn0uXG4gKiBUaGUgaWRfdG9rZW4gZnJvbSB3aGVyZSB0aGUgYWxnIGFuZCBhdEhhc2ggcGFyYW1ldGVycyBhcmUgdGFrZW4sXG4gKiBzaG91bGQgYmUgZGVjb2RlZCBhbmQgdmVyaWZpZWQgYmVmb3JlIHVzaW5nIHRoaXNmdW5jdGlvblxuICpcbiAqIEBtZXRob2QgdmFsaWRhdGVBY2Nlc3NUb2tlblxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2Vzc190b2tlbiB0aGUgYWNjZXNzX3Rva2VuXG4gKiBAcGFyYW0ge1N0cmluZ30gYWxnIFRoZSBhbGdvcml0aG0gZGVmaW5lZCBpbiB0aGUgaGVhZGVyIG9mIHRoZVxuICogcHJldmlvdXNseSB2ZXJpZmllZCBpZF90b2tlbiB1bmRlciB0aGUgXCJhbGdcIiBjbGFpbS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhdEhhc2ggVGhlIFwiYXRfaGFzaFwiIHZhbHVlIGluY2x1ZGVkIGluIHRoZSBwYXlsb2FkXG4gKiBvZiB0aGUgcHJldmlvdXNseSB2ZXJpZmllZCBpZF90b2tlbi5cbiAqIEBwYXJhbSB7dmFsaWRhdGVBY2Nlc3NUb2tlbkNhbGxiYWNrfSBjYiBjYWxsYmFjayB1c2VkIHRvIG5vdGlmeSB0aGUgcmVzdWx0cyBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52YWxpZGF0ZUFjY2Vzc1Rva2VuID0gZnVuY3Rpb24gKGFjY2Vzc1Rva2VuLCBhbGcsIGF0SGFzaCkge1xuICAgIGlmICh0aGlzLmV4cGVjdGVkQWxnICE9PSBhbGcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignQWxnb3JpdGhtICcgKyBhbGcgK1xuICAgICAgICAgICAgJyBpcyBub3Qgc3VwcG9ydGVkLiAoRXhwZWN0ZWQgYWxnOiAnICsgdGhpcy5leHBlY3RlZEFsZyArICcpJykpO1xuICAgIH1cbiAgICB2YXIgc2hhMjU2QWNjZXNzVG9rZW4gPSBzaGEyNTYoYWNjZXNzVG9rZW4pO1xuICAgIHZhciBoYXNoVG9IZXggPSBjcnlwdG9IZXguc3RyaW5naWZ5KHNoYTI1NkFjY2Vzc1Rva2VuKTtcbiAgICB2YXIgaGFzaFRvSGV4Rmlyc3RIYWxmID0gaGFzaFRvSGV4LnN1YnN0cmluZygwLCBoYXNoVG9IZXgubGVuZ3RoIC8gMik7XG4gICAgdmFyIGhhc2hGaXJzdEhhbGZXb3JkQXJyYXkgPSBjcnlwdG9IZXgucGFyc2UoaGFzaFRvSGV4Rmlyc3RIYWxmKTtcbiAgICB2YXIgaGFzaEZpcnN0SGFsZkJhc2U2NCA9IGNyeXB0b0Jhc2U2NC5zdHJpbmdpZnkoaGFzaEZpcnN0SGFsZldvcmRBcnJheSk7XG4gICAgdmFyIGhhc2hGaXJzdEhhbGZCYXNlNjRTYWZlVXJsID0gYmFzZTY0LmJhc2U2NFRvQmFzZTY0VXJsKGhhc2hGaXJzdEhhbGZCYXNlNjQpO1xuICAgIGlmIChoYXNoRmlyc3RIYWxmQmFzZTY0U2FmZVVybCAhPT0gYXRIYXNoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ0ludmFsaWQgYWNjZXNzX3Rva2VuJykpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJZFRva2VuVmVyaWZpZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2lkdG9rZW4tdmVyaWZpZXIvc3JjL2luZGV4LmpzIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgcm91bmQgY29uc3RhbnRzIHRhYmxlc1xuXHQgICAgdmFyIEggPSBbXTtcblx0ICAgIHZhciBLID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIGlzUHJpbWUobikge1xuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobikge1xuXHQgICAgICAgICAgICByZXR1cm4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBuID0gMjtcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcblx0ICAgICAgICB3aGlsZSAoblByaW1lIDwgNjQpIHtcblx0ICAgICAgICAgICAgaWYgKGlzUHJpbWUobikpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDIpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XG5cblx0ICAgICAgICAgICAgICAgIG5QcmltZSsrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbisrO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIGcgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgaCA9IEhbN107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwICA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpICBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4ID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWExeCA+Pj4gMTApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1haiA9IChhICYgYikgXiAoYSAmIGMpIF4gKGIgJiBjKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpICB8IChlID4+PiAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IHNpZ21hMCArIG1hajtcblxuXHQgICAgICAgICAgICAgICAgaCA9IGc7XG5cdCAgICAgICAgICAgICAgICBnID0gZjtcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xuXHQgICAgICAgICAgICAgICAgZSA9IChkICsgdDEpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IGI7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNV0gPSAoSFs1XSArIGYpIHwgMDtcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xuXHQgICAgICAgICAgICBIWzddID0gKEhbN10gKyBoKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMjU2KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTI1NjtcblxufSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY3J5cHRvLWpzL3NoYTI1Ni5qcyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeSgpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuXHQvKipcblx0ICogQ3J5cHRvSlMgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcblx0ICAgIC8qXG5cdCAgICAgKiBMb2NhbCBwb2x5ZmlsIG9mIE9iamVjdC5jcmVhdGVcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBGKCkge307XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSlcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGlicmFyeSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2xpYiA9IEMubGliID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZSBvYmplY3QgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdmVycmlkZXMgUHJvcGVydGllcyB0byBjb3B5IGludG8gdGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTcGF3blxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEF1Z21lbnRcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLm1peEluKG92ZXJyaWRlcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGluaXRpYWxpemVyXG5cdCAgICAgICAgICAgICAgICBpZiAoIXN1YnR5cGUuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCB0aGlzLmluaXQgPT09IHN1YnR5cGUuaW5pdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemVyJ3MgcHJvdG90eXBlIGlzIHRoZSBzdWJ0eXBlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSBzdXBlcnR5cGVcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuXHQgICAgICAgICAgICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XG5cdCAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBvYmplY3QuXG5cdCAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCBzb21lIGxvZ2ljIHdoZW4geW91ciBvYmplY3RzIGFyZSBjcmVhdGVkLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgICAgICAvLyAuLi5cblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgTXlUeXBlLm1peEluKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBtaXhJbjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXG5cdCAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TdHJpbmcgPSBwcm9wZXJ0aWVzLnRvU3RyaW5nO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSwgNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZW5jb2RlciB8fCBIZXgpLnN0cmluZ2lmeSh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5IHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkxLmNvbmNhdCh3b3JkQXJyYXkyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB0aGlzV29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRTaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB0aGlzLmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29uY2F0XG5cdCAgICAgICAgICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSA9IHRoYXRXb3Jkc1tpID4+PiAyXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcFxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlcyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblxuXHQgICAgICAgICAgICB2YXIgciA9IChmdW5jdGlvbiAobV93KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV93ID0gbV93O1xuXHQgICAgICAgICAgICAgICAgdmFyIG1feiA9IDB4M2FkZTY4YjE7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFzayA9IDB4ZmZmZmZmZmY7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbV96ID0gKDB4OTA2OSAqIChtX3ogJiAweEZGRkYpICsgKG1feiA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIG1fdyA9ICgweDQ2NTAgKiAobV93ICYgMHhGRkZGKSArIChtX3cgPj4gMHgxMCkpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gKChtX3ogPDwgMHgxMCkgKyBtX3cpICYgbWFzaztcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgLz0gMHgxMDAwMDAwMDA7XG5cdCAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IDAuNTtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0ICogKE1hdGgucmFuZG9tKCkgPiAuNSA/IDEgOiAtMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0pO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCByY2FjaGU7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIF9yID0gcigocmNhY2hlIHx8IE1hdGgucmFuZG9tKCkpICogMHgxMDAwMDAwMDApO1xuXG5cdCAgICAgICAgICAgICAgICByY2FjaGUgPSBfcigpICogMHgzYWRlNjdiNztcblx0ICAgICAgICAgICAgICAgIHdvcmRzLnB1c2goKF9yKCkgKiAweDEwMDAwMDAwMCkgfCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIG5CeXRlcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgSGV4ID0gQ19lbmMuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBoZXhDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoaGV4U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGV4U3RyTGVuZ3RoOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIExhdGluMSA9IENfZW5jLkxhdGluMSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIExhdGluMSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChsYXRpbjFTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZikgPDwgKDI0IC0gKGkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtOCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjhTdHIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcblx0ICAgICAqL1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGRhdGEgYnVmZmVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBkYXRhID0gVXRmOC5wYXJzZShkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRhdGEgYmxvY2tzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcHJvY2Vzc2VkIGRhdGEuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYmxvY2tzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcblx0ICAgICAgICAgICAgaWYgKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIHVwIHRvIGluY2x1ZGUgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgZG93biB0byBpbmNsdWRlIG9ubHkgZnVsbCBibG9ja3MsXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5tYXgoKG5CbG9ja3NSZWFkeSB8IDApIC0gdGhpcy5fbWluQnVmZmVyU2l6ZSwgMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudCB3b3JkcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbldvcmRzUmVhZHkgPSBuQmxvY2tzUmVhZHkgKiBibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgYnl0ZXMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCBkYXRhU2lnQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYmxvY2tzXG5cdCAgICAgICAgICAgIGlmIChuV29yZHNSZWFkeSkge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWFsZ29yaXRobSBsb2dpY1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGRhdGFXb3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG5cdCAgICAgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG5cdCAgICAgKi9cblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgaGFzaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxuXHQgICAgICAgICAgICBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdGhpcy5fZG9SZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgaGFzaGVyIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc2hcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDUxMi8zMixcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byBhIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19hbGdvLkhNQUMuaW5pdChoYXNoZXIsIGtleSkuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWxnb3JpdGhtIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbyA9IHt9O1xuXG5cdCAgICByZXR1cm4gQztcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NyeXB0by1qcy9jb3JlLmpzIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZTY0IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZTY0ID0gQ19lbmMuQmFzZTY0ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGJhc2U2NFN0cmluZyA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIG1hcCA9IHRoaXMuX21hcDtcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDMpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMSA9ICh3b3Jkc1tpID4+PiAyXSAgICAgICA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAgICAgICAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTIgPSAod29yZHNbKGkgKyAxKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDEpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUzID0gKHdvcmRzWyhpICsgMikgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAyKSAlIDQpICogOCkpICYgMHhmZjtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZTEgPDwgMTYpIHwgKGJ5dGUyIDw8IDgpIHwgYnl0ZTM7XG5cblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyAoaiA8IDQpICYmIChpICsgaiAqIDAuNzUgPCBzaWdCeXRlcyk7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NENoYXJzLnB1c2gobWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gKDYgKiAoMyAtIGopKSkgJiAweDNmKSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB3aGlsZSAoYmFzZTY0Q2hhcnMubGVuZ3RoICUgNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NENoYXJzLnB1c2gocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGJhc2U2NENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIEJhc2U2NCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2U2NFN0ciBUaGUgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnBhcnNlKGJhc2U2NFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChiYXNlNjRTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRTdHJMZW5ndGggPSBiYXNlNjRTdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuXHQgICAgICAgICAgICB2YXIgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXA7XG5cblx0ICAgICAgICAgICAgaWYgKCFyZXZlcnNlTWFwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXAgPSBbXTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hcC5sZW5ndGg7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSWdub3JlIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xuXHQgICAgICAgICAgICAgICAgdmFyIHBhZGRpbmdJbmRleCA9IGJhc2U2NFN0ci5pbmRleE9mKHBhZGRpbmdDaGFyKTtcblx0ICAgICAgICAgICAgICAgIGlmIChwYWRkaW5nSW5kZXggIT09IC0xKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyTGVuZ3RoID0gcGFkZGluZ0luZGV4O1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICByZXR1cm4gcGFyc2VMb29wKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKTtcblxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nXG5cdCAgICB9O1xuXG5cdCAgICBmdW5jdGlvbiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApIHtcblx0ICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgIHZhciBuQnl0ZXMgPSAwO1xuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICBpZiAoaSAlIDQpIHtcblx0ICAgICAgICAgICAgICB2YXIgYml0czEgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkgLSAxKV0gPDwgKChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICB2YXIgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgd29yZHNbbkJ5dGVzID4+PiAyXSB8PSAoYml0czEgfCBiaXRzMikgPDwgKDI0IC0gKG5CeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgbkJ5dGVzKys7XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIG5CeXRlcyk7XG5cdCAgICB9XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuZW5jLkJhc2U2NDtcblxufSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY3J5cHRvLWpzL2VuYy1iYXNlNjQuanMiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdHJldHVybiBDcnlwdG9KUy5lbmMuSGV4O1xuXG59KSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jcnlwdG8tanMvZW5jLWhleC5qcyIsIi8qXG5CYXNlZCBvbiB0aGUgd29yayBvZiBUb20gV3Vcbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9cbmh0dHA6Ly93d3ctY3Mtc3R1ZGVudHMuc3RhbmZvcmQuZWR1L350ancvanNibi9MSUNFTlNFXG4qL1xuXG52YXIgQmlnSW50ZWdlciA9IHJlcXVpcmUoJ2pzYm4nKS5CaWdJbnRlZ2VyO1xudmFyIFNIQTI1NiA9IHJlcXVpcmUoJ2NyeXB0by1qcy9zaGEyNTYnKTtcblxudmFyIERpZ2VzdEluZm9IZWFkID0ge1xuICBzaGExOiAnMzAyMTMwMDkwNjA1MmIwZTAzMDIxYTA1MDAwNDE0JyxcbiAgc2hhMjI0OiAnMzAyZDMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjA0MDUwMDA0MWMnLFxuICBzaGEyNTY6ICczMDMxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDEwNTAwMDQyMCcsXG4gIHNoYTM4NDogJzMwNDEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMjA1MDAwNDMwJyxcbiAgc2hhNTEyOiAnMzA1MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAzMDUwMDA0NDAnLFxuICBtZDI6ICczMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjAyMDUwMDA0MTAnLFxuICBtZDU6ICczMDIwMzAwYzA2MDgyYTg2NDg4NmY3MGQwMjA1MDUwMDA0MTAnLFxuICByaXBlbWQxNjA6ICczMDIxMzAwOTA2MDUyYjI0MDMwMjAxMDUwMDA0MTQnXG59O1xuXG52YXIgRGlnZXN0QWxncyA9IHtcbiAgc2hhMjU2OiBTSEEyNTZcbn07XG5cbmZ1bmN0aW9uIFJTQVZlcmlmaWVyKG1vZHVsdXMsIGV4cCkge1xuICB0aGlzLm4gPSBudWxsO1xuICB0aGlzLmUgPSAwO1xuXG4gIGlmIChtb2R1bHVzICE9IG51bGwgJiYgZXhwICE9IG51bGwgJiYgbW9kdWx1cy5sZW5ndGggPiAwICYmIGV4cC5sZW5ndGggPiAwKSB7XG4gICAgdGhpcy5uID0gbmV3IEJpZ0ludGVnZXIobW9kdWx1cywgMTYpO1xuICAgIHRoaXMuZSA9IHBhcnNlSW50KGV4cCwgMTYpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBrZXkgZGF0YScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFsZ29yaXRobUZyb21EaWdlc3QoaERpZ2VzdEluZm8pIHtcbiAgZm9yICh2YXIgYWxnTmFtZSBpbiBEaWdlc3RJbmZvSGVhZCkge1xuICAgIHZhciBoZWFkID0gRGlnZXN0SW5mb0hlYWRbYWxnTmFtZV07XG4gICAgdmFyIGxlbiA9IGhlYWQubGVuZ3RoO1xuXG4gICAgaWYgKGhEaWdlc3RJbmZvLnN1YnN0cmluZygwLCBsZW4pID09PSBoZWFkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhbGc6IGFsZ05hbWUsXG4gICAgICAgIGhhc2g6IGhEaWdlc3RJbmZvLnN1YnN0cmluZyhsZW4pXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cblxuUlNBVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeSA9IGZ1bmN0aW9uIChtc2csIGVuY3NpZykge1xuICBlbmNzaWcgPSBlbmNzaWcucmVwbGFjZSgvW14wLTlhLWZdfFtcXHNcXG5dXS9pZywgJycpO1xuXG4gIHZhciBzaWcgPSBuZXcgQmlnSW50ZWdlcihlbmNzaWcsIDE2KTtcbiAgaWYgKHNpZy5iaXRMZW5ndGgoKSA+IHRoaXMubi5iaXRMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2lnbmF0dXJlIGRvZXMgbm90IG1hdGNoIHdpdGggdGhlIGtleSBtb2R1bHVzLicpO1xuICB9XG5cbiAgdmFyIGRlY3J5cHRlZFNpZyA9IHNpZy5tb2RQb3dJbnQodGhpcy5lLCB0aGlzLm4pO1xuICB2YXIgZGlnZXN0ID0gZGVjcnlwdGVkU2lnLnRvU3RyaW5nKDE2KS5yZXBsYWNlKC9eMWYrMDAvLCAnJyk7XG5cbiAgdmFyIGRpZ2VzdEluZm8gPSBnZXRBbGdvcml0aG1Gcm9tRGlnZXN0KGRpZ2VzdCk7XG4gIGlmIChkaWdlc3RJbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghRGlnZXN0QWxncy5oYXNPd25Qcm9wZXJ0eShkaWdlc3RJbmZvLmFsZykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0hhc2hpbmcgYWxnb3JpdGhtIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH1cblxuICB2YXIgbXNnSGFzaCA9IERpZ2VzdEFsZ3NbZGlnZXN0SW5mby5hbGddKG1zZykudG9TdHJpbmcoKTtcbiAgcmV0dXJuIChkaWdlc3RJbmZvLmhhc2ggPT09IG1zZ0hhc2gpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSU0FWZXJpZmllcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9yc2EtdmVyaWZpZXIuanMiLCIoZnVuY3Rpb24oKXtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBCYXNpYyBKYXZhU2NyaXB0IEJOIGxpYnJhcnkgLSBzdWJzZXQgdXNlZnVsIGZvciBSU0EgZW5jcnlwdGlvbi5cblxuICAgIC8vIEJpdHMgcGVyIGRpZ2l0XG4gICAgdmFyIGRiaXRzO1xuXG4gICAgLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbiAgICB2YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG4gICAgdmFyIGpfbG0gPSAoKGNhbmFyeSYweGZmZmZmZik9PTB4ZWZjYWZlKTtcblxuICAgIC8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLGIsYykge1xuICAgICAgaWYoYSAhPSBudWxsKVxuICAgICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBhKSB0aGlzLmZyb21OdW1iZXIoYSxiLGMpO1xuICAgICAgICBlbHNlIGlmKGIgPT0gbnVsbCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBhKSB0aGlzLmZyb21TdHJpbmcoYSwyNTYpO1xuICAgICAgICBlbHNlIHRoaXMuZnJvbVN0cmluZyhhLGIpO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbiAgICBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuXG4gICAgLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuICAgIC8vIGMgaXMgaW5pdGlhbCBjYXJyeSwgcmV0dXJucyBmaW5hbCBjYXJyeS5cbiAgICAvLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4gICAgLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cblxuICAgIC8vIGFtMTogdXNlIGEgc2luZ2xlIG11bHQgYW5kIGRpdmlkZSB0byBnZXQgdGhlIGhpZ2ggYml0cyxcbiAgICAvLyBtYXggZGlnaXQgYml0cyBzaG91bGQgYmUgMjYgYmVjYXVzZVxuICAgIC8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbiAgICBmdW5jdGlvbiBhbTEoaSx4LHcsaixjLG4pIHtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCp0aGlzW2krK10rd1tqXStjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2LzB4NDAwMDAwMCk7XG4gICAgICAgIHdbaisrXSA9IHYmMHgzZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIGZ1bmN0aW9uIGFtMihpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDdmZmYsIHhoID0geD4+MTU7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTU7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHg3ZmZmKTw8MTUpK3dbal0rKGMmMHgzZmZmZmZmZik7XG4gICAgICAgIGMgPSAobD4+PjMwKSsobT4+PjE1KSt4aCpoKyhjPj4+MzApO1xuICAgICAgICB3W2orK10gPSBsJjB4M2ZmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gQWx0ZXJuYXRlbHksIHNldCBtYXggZGlnaXQgYml0cyB0byAyOCBzaW5jZSBzb21lXG4gICAgLy8gYnJvd3NlcnMgc2xvdyBkb3duIHdoZW4gZGVhbGluZyB3aXRoIDMyLWJpdCBudW1iZXJzLlxuICAgIGZ1bmN0aW9uIGFtMyhpLHgsdyxqLGMsbikge1xuICAgICAgdmFyIHhsID0geCYweDNmZmYsIHhoID0geD4+MTQ7XG4gICAgICB3aGlsZSgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0mMHgzZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXT4+MTQ7XG4gICAgICAgIHZhciBtID0geGgqbCtoKnhsO1xuICAgICAgICBsID0geGwqbCsoKG0mMHgzZmZmKTw8MTQpK3dbal0rYztcbiAgICAgICAgYyA9IChsPj4yOCkrKG0+PjE0KSt4aCpoO1xuICAgICAgICB3W2orK10gPSBsJjB4ZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgaW5Ccm93c2VyID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIikpIHtcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0yO1xuICAgICAgZGJpdHMgPSAzMDtcbiAgICB9XG4gICAgZWxzZSBpZihpbkJyb3dzZXIgJiYgal9sbSAmJiAobmF2aWdhdG9yLmFwcE5hbWUgIT0gXCJOZXRzY2FwZVwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTE7XG4gICAgICBkYml0cyA9IDI2O1xuICAgIH1cbiAgICBlbHNlIHsgLy8gTW96aWxsYS9OZXRzY2FwZSBzZWVtcyB0byBwcmVmZXIgYW0zXG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMztcbiAgICAgIGRiaXRzID0gMjg7XG4gICAgfVxuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuREIgPSBkYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMTw8ZGJpdHMpLTEpO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDE8PGRiaXRzKTtcblxuICAgIHZhciBCSV9GUCA9IDUyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkZWID0gTWF0aC5wb3coMixCSV9GUCk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRjEgPSBCSV9GUC1kYml0cztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMiA9IDIqZGJpdHMtQklfRlA7XG5cbiAgICAvLyBEaWdpdCBjb252ZXJzaW9uc1xuICAgIHZhciBCSV9STSA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XG4gICAgdmFyIEJJX1JDID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIHJyLHZ2O1xuICAgIHJyID0gXCIwXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAwOyB2diA8PSA5OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJhXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcbiAgICByciA9IFwiQVwiLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG5cbiAgICBmdW5jdGlvbiBpbnQyY2hhcihuKSB7IHJldHVybiBCSV9STS5jaGFyQXQobik7IH1cbiAgICBmdW5jdGlvbiBpbnRBdChzLGkpIHtcbiAgICAgIHZhciBjID0gQklfUkNbcy5jaGFyQ29kZUF0KGkpXTtcbiAgICAgIHJldHVybiAoYz09bnVsbCk/LTE6YztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb3B5IHRoaXMgdG8gclxuICAgIGZ1bmN0aW9uIGJucENvcHlUbyhyKSB7XG4gICAgICBmb3IodmFyIGkgPSB0aGlzLnQtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gdGhpcy50O1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHNldCBmcm9tIGludGVnZXIgdmFsdWUgeCwgLURWIDw9IHggPCBEVlxuICAgIGZ1bmN0aW9uIGJucEZyb21JbnQoeCkge1xuICAgICAgdGhpcy50ID0gMTtcbiAgICAgIHRoaXMucyA9ICh4PDApPy0xOjA7XG4gICAgICBpZih4ID4gMCkgdGhpc1swXSA9IHg7XG4gICAgICBlbHNlIGlmKHggPCAtMSkgdGhpc1swXSA9IHgrdGhpcy5EVjtcbiAgICAgIGVsc2UgdGhpcy50ID0gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gYmlnaW50IGluaXRpYWxpemVkIHRvIHZhbHVlXG4gICAgZnVuY3Rpb24gbmJ2KGkpIHsgdmFyIHIgPSBuYmkoKTsgci5mcm9tSW50KGkpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gc3RyaW5nIGFuZCByYWRpeFxuICAgIGZ1bmN0aW9uIGJucEZyb21TdHJpbmcocyxiKSB7XG4gICAgICB2YXIgaztcbiAgICAgIGlmKGIgPT0gMTYpIGsgPSA0O1xuICAgICAgZWxzZSBpZihiID09IDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihiID09IDI1NikgayA9IDg7IC8vIGJ5dGUgYXJyYXlcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHsgdGhpcy5mcm9tUmFkaXgocyxiKTsgcmV0dXJuOyB9XG4gICAgICB0aGlzLnQgPSAwO1xuICAgICAgdGhpcy5zID0gMDtcbiAgICAgIHZhciBpID0gcy5sZW5ndGgsIG1pID0gZmFsc2UsIHNoID0gMDtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSB7XG4gICAgICAgIHZhciB4ID0gKGs9PTgpP3NbaV0mMHhmZjppbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiKSBtaSA9IHRydWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWkgPSBmYWxzZTtcbiAgICAgICAgaWYoc2ggPT0gMClcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IHg7XG4gICAgICAgIGVsc2UgaWYoc2grayA+IHRoaXMuREIpIHtcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSAoeCYoKDE8PCh0aGlzLkRCLXNoKSktMSkpPDxzaDtcbiAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4Pj4odGhpcy5EQi1zaCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzW3RoaXMudC0xXSB8PSB4PDxzaDtcbiAgICAgICAgc2ggKz0gaztcbiAgICAgICAgaWYoc2ggPj0gdGhpcy5EQikgc2ggLT0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGsgPT0gOCAmJiAoc1swXSYweDgwKSAhPSAwKSB7XG4gICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICBpZihzaCA+IDApIHRoaXNbdGhpcy50LTFdIHw9ICgoMTw8KHRoaXMuREItc2gpKS0xKTw8c2g7XG4gICAgICB9XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgZnVuY3Rpb24gYm5wQ2xhbXAoKSB7XG4gICAgICB2YXIgYyA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgd2hpbGUodGhpcy50ID4gMCAmJiB0aGlzW3RoaXMudC0xXSA9PSBjKSAtLXRoaXMudDtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIGluIGdpdmVuIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5Ub1N0cmluZyhiKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gXCItXCIrdGhpcy5uZWdhdGUoKS50b1N0cmluZyhiKTtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMikgayA9IDE7XG4gICAgICBlbHNlIGlmKGIgPT0gMzIpIGsgPSA1O1xuICAgICAgZWxzZSBpZihiID09IDQpIGsgPSAyO1xuICAgICAgZWxzZSByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgdmFyIGttID0gKDE8PGspLTEsIGQsIG0gPSBmYWxzZSwgciA9IFwiXCIsIGkgPSB0aGlzLnQ7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklaztcbiAgICAgIGlmKGktLSA+IDApIHtcbiAgICAgICAgaWYocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldPj5wKSA+IDApIHsgbSA9IHRydWU7IHIgPSBpbnQyY2hhcihkKTsgfVxuICAgICAgICB3aGlsZShpID49IDApIHtcbiAgICAgICAgICBpZihwIDwgaykge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldJigoMTw8cCktMSkpPDwoay1wKTtcbiAgICAgICAgICAgIGQgfD0gdGhpc1stLWldPj4ocCs9dGhpcy5EQi1rKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0+PihwLT1rKSkma207XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZCA+IDApIG0gPSB0cnVlO1xuICAgICAgICAgIGlmKG0pIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtP3I6XCIwXCI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBmdW5jdGlvbiBibk5lZ2F0ZSgpIHsgdmFyIHIgPSBuYmkoKTsgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBmdW5jdGlvbiBibkFicygpIHsgcmV0dXJuICh0aGlzLnM8MCk/dGhpcy5uZWdhdGUoKTp0aGlzOyB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gKyBpZiB0aGlzID4gYSwgLSBpZiB0aGlzIDwgYSwgMCBpZiBlcXVhbFxuICAgIGZ1bmN0aW9uIGJuQ29tcGFyZVRvKGEpIHtcbiAgICAgIHZhciByID0gdGhpcy5zLWEucztcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuIHI7XG4gICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgIHIgPSBpLWEudDtcbiAgICAgIGlmKHIgIT0gMCkgcmV0dXJuICh0aGlzLnM8MCk/LXI6cjtcbiAgICAgIHdoaWxlKC0taSA+PSAwKSBpZigocj10aGlzW2ldLWFbaV0pICE9IDApIHJldHVybiByO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbiAgICBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgICB2YXIgciA9IDEsIHQ7XG4gICAgICBpZigodD14Pj4+MTYpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh0PXg+PjgpICE9IDApIHsgeCA9IHQ7IHIgKz0gODsgfVxuICAgICAgaWYoKHQ9eD4+NCkgIT0gMCkgeyB4ID0gdDsgciArPSA0OyB9XG4gICAgICBpZigodD14Pj4yKSAhPSAwKSB7IHggPSB0OyByICs9IDI7IH1cbiAgICAgIGlmKCh0PXg+PjEpICE9IDApIHsgeCA9IHQ7IHIgKz0gMTsgfVxuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHRoZSBudW1iZXIgb2YgYml0cyBpbiBcInRoaXNcIlxuICAgIGZ1bmN0aW9uIGJuQml0TGVuZ3RoKCkge1xuICAgICAgaWYodGhpcy50IDw9IDApIHJldHVybiAwO1xuICAgICAgcmV0dXJuIHRoaXMuREIqKHRoaXMudC0xKStuYml0cyh0aGlzW3RoaXMudC0xXV4odGhpcy5zJnRoaXMuRE0pKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpK25dID0gdGhpc1tpXTtcbiAgICAgIGZvcihpID0gbi0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByLnQgPSB0aGlzLnQrbjtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgZnVuY3Rpb24gYm5wRFJTaGlmdFRvKG4scikge1xuICAgICAgZm9yKHZhciBpID0gbjsgaSA8IHRoaXMudDsgKytpKSByW2ktbl0gPSB0aGlzW2ldO1xuICAgICAgci50ID0gTWF0aC5tYXgodGhpcy50LW4sMCk7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPDwgblxuICAgIGZ1bmN0aW9uIGJucExTaGlmdFRvKG4scikge1xuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8Y2JzKS0xO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpLCBjID0gKHRoaXMuczw8YnMpJnRoaXMuRE0sIGk7XG4gICAgICBmb3IoaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkge1xuICAgICAgICByW2krZHMrMV0gPSAodGhpc1tpXT4+Y2JzKXxjO1xuICAgICAgICBjID0gKHRoaXNbaV0mYm0pPDxicztcbiAgICAgIH1cbiAgICAgIGZvcihpID0gZHMtMTsgaSA+PSAwOyAtLWkpIHJbaV0gPSAwO1xuICAgICAgcltkc10gPSBjO1xuICAgICAgci50ID0gdGhpcy50K2RzKzE7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJucFJTaGlmdFRvKG4scikge1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoZHMgPj0gdGhpcy50KSB7IHIudCA9IDA7IHJldHVybjsgfVxuICAgICAgdmFyIGJzID0gbiV0aGlzLkRCO1xuICAgICAgdmFyIGNicyA9IHRoaXMuREItYnM7XG4gICAgICB2YXIgYm0gPSAoMTw8YnMpLTE7XG4gICAgICByWzBdID0gdGhpc1tkc10+PmJzO1xuICAgICAgZm9yKHZhciBpID0gZHMrMTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgIHJbaS1kcy0xXSB8PSAodGhpc1tpXSZibSk8PGNicztcbiAgICAgICAgcltpLWRzXSA9IHRoaXNbaV0+PmJzO1xuICAgICAgfVxuICAgICAgaWYoYnMgPiAwKSByW3RoaXMudC1kcy0xXSB8PSAodGhpcy5zJmJtKTw8Y2JzO1xuICAgICAgci50ID0gdGhpcy50LWRzO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJucFN1YlRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldLWFbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjIC09IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjIC09IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjIDwgLTEpIHJbaSsrXSA9IHRoaXMuRFYrYztcbiAgICAgIGVsc2UgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICogYSwgciAhPSB0aGlzLGEgKEhBQyAxNC4xMilcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlUbyhhLHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKSwgeSA9IGEuYWJzKCk7XG4gICAgICB2YXIgaSA9IHgudDtcbiAgICAgIHIudCA9IGkreS50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeS50OyArK2kpIHJbaSt4LnRdID0geC5hbSgwLHlbaV0scixpLDAseC50KTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZih0aGlzLnMgIT0gYS5zKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocixyKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpc14yLCByICE9IHRoaXMgKEhBQyAxNC4xNilcbiAgICBmdW5jdGlvbiBibnBTcXVhcmVUbyhyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICB2YXIgaSA9IHIudCA9IDIqeC50O1xuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgeC50LTE7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICAgIGlmKChyW2kreC50XSs9eC5hbShpKzEsMip4W2ldLHIsMippKzEsYyx4LnQtaS0xKSkgPj0geC5EVikge1xuICAgICAgICAgIHJbaSt4LnRdIC09IHguRFY7XG4gICAgICAgICAgcltpK3gudCsxXSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHIudCA+IDApIHJbci50LTFdICs9IHguYW0oaSx4W2ldLHIsMippLDAsMSk7XG4gICAgICByLnMgPSAwO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGRpdmlkZSB0aGlzIGJ5IG0sIHF1b3RpZW50IGFuZCByZW1haW5kZXIgdG8gcSwgciAoSEFDIDE0LjIwKVxuICAgIC8vIHIgIT0gcSwgdGhpcyAhPSBtLiAgcSBvciByIG1heSBiZSBudWxsLlxuICAgIGZ1bmN0aW9uIGJucERpdlJlbVRvKG0scSxyKSB7XG4gICAgICB2YXIgcG0gPSBtLmFicygpO1xuICAgICAgaWYocG0udCA8PSAwKSByZXR1cm47XG4gICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgaWYocHQudCA8IHBtLnQpIHtcbiAgICAgICAgaWYocSAhPSBudWxsKSBxLmZyb21JbnQoMCk7XG4gICAgICAgIGlmKHIgIT0gbnVsbCkgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmKHIgPT0gbnVsbCkgciA9IG5iaSgpO1xuICAgICAgdmFyIHkgPSBuYmkoKSwgdHMgPSB0aGlzLnMsIG1zID0gbS5zO1xuICAgICAgdmFyIG5zaCA9IHRoaXMuREItbmJpdHMocG1bcG0udC0xXSk7ICAgLy8gbm9ybWFsaXplIG1vZHVsdXNcbiAgICAgIGlmKG5zaCA+IDApIHsgcG0ubFNoaWZ0VG8obnNoLHkpOyBwdC5sU2hpZnRUbyhuc2gscik7IH1cbiAgICAgIGVsc2UgeyBwbS5jb3B5VG8oeSk7IHB0LmNvcHlUbyhyKTsgfVxuICAgICAgdmFyIHlzID0geS50O1xuICAgICAgdmFyIHkwID0geVt5cy0xXTtcbiAgICAgIGlmKHkwID09IDApIHJldHVybjtcbiAgICAgIHZhciB5dCA9IHkwKigxPDx0aGlzLkYxKSsoKHlzPjEpP3lbeXMtMl0+PnRoaXMuRjI6MCk7XG4gICAgICB2YXIgZDEgPSB0aGlzLkZWL3l0LCBkMiA9ICgxPDx0aGlzLkYxKS95dCwgZSA9IDE8PHRoaXMuRjI7XG4gICAgICB2YXIgaSA9IHIudCwgaiA9IGkteXMsIHQgPSAocT09bnVsbCk/bmJpKCk6cTtcbiAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICBpZihyLmNvbXBhcmVUbyh0KSA+PSAwKSB7XG4gICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgfVxuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLHQpO1xuICAgICAgdC5zdWJUbyh5LHkpOyAgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgIHdoaWxlKHkudCA8IHlzKSB5W3kudCsrXSA9IDA7XG4gICAgICB3aGlsZSgtLWogPj0gMCkge1xuICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICB2YXIgcWQgPSAoclstLWldPT15MCk/dGhpcy5ETTpNYXRoLmZsb29yKHJbaV0qZDErKHJbaS0xXStlKSpkMik7XG4gICAgICAgIGlmKChyW2ldKz15LmFtKDAscWQscixqLDAseXMpKSA8IHFkKSB7ICAgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgIHkuZGxTaGlmdFRvKGosdCk7XG4gICAgICAgICAgci5zdWJUbyh0LHIpO1xuICAgICAgICAgIHdoaWxlKHJbaV0gPCAtLXFkKSByLnN1YlRvKHQscik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHEgIT0gbnVsbCkge1xuICAgICAgICByLmRyU2hpZnRUbyh5cyxxKTtcbiAgICAgICAgaWYodHMgIT0gbXMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLHEpO1xuICAgICAgfVxuICAgICAgci50ID0geXM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICBpZihuc2ggPiAwKSByLnJTaGlmdFRvKG5zaCxyKTsgLy8gRGVub3JtYWxpemUgcmVtYWluZGVyXG4gICAgICBpZih0cyA8IDApIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBmdW5jdGlvbiBibk1vZChhKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLG51bGwscik7XG4gICAgICBpZih0aGlzLnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSBhLnN1YlRvKHIscik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHsgdGhpcy5tID0gbTsgfVxuICAgIGZ1bmN0aW9uIGNDb252ZXJ0KHgpIHtcbiAgICAgIGlmKHgucyA8IDAgfHwgeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgcmV0dXJuIHg7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuICAgIGZ1bmN0aW9uIGNSZWR1Y2UoeCkgeyB4LmRpdlJlbVRvKHRoaXMubSxudWxsLHgpOyB9XG4gICAgZnVuY3Rpb24gY011bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuICAgIGZ1bmN0aW9uIGNTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBjQ29udmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBjUmV2ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4gXCItMS90aGlzICUgMl5EQlwiOyB1c2VmdWwgZm9yIE1vbnQuIHJlZHVjdGlvblxuICAgIC8vIGp1c3RpZmljYXRpb246XG4gICAgLy8gICAgICAgICB4eSA9PSAxIChtb2QgbSlcbiAgICAvLyAgICAgICAgIHh5ID0gIDEra21cbiAgICAvLyAgIHh5KDIteHkpID0gKDEra20pKDEta20pXG4gICAgLy8geFt5KDIteHkpXSA9IDEta14ybV4yXG4gICAgLy8geFt5KDIteHkpXSA9PSAxIChtb2QgbV4yKVxuICAgIC8vIGlmIHkgaXMgMS94IG1vZCBtLCB0aGVuIHkoMi14eSkgaXMgMS94IG1vZCBtXjJcbiAgICAvLyBzaG91bGQgcmVkdWNlIHggYW5kIHkoMi14eSkgYnkgbV4yIGF0IGVhY2ggc3RlcCB0byBrZWVwIHNpemUgYm91bmRlZC5cbiAgICAvLyBKUyBtdWx0aXBseSBcIm92ZXJmbG93c1wiIGRpZmZlcmVudGx5IGZyb20gQy9DKyssIHNvIGNhcmUgaXMgbmVlZGVkIGhlcmUuXG4gICAgZnVuY3Rpb24gYm5wSW52RGlnaXQoKSB7XG4gICAgICBpZih0aGlzLnQgPCAxKSByZXR1cm4gMDtcbiAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgIGlmKCh4JjEpID09IDApIHJldHVybiAwO1xuICAgICAgdmFyIHkgPSB4JjM7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXjJcbiAgICAgIHkgPSAoeSooMi0oeCYweGYpKnkpKSYweGY7IC8vIHkgPT0gMS94IG1vZCAyXjRcbiAgICAgIHkgPSAoeSooMi0oeCYweGZmKSp5KSkmMHhmZjsgICAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICB5ID0gKHkqKDItKCgoeCYweGZmZmYpKnkpJjB4ZmZmZikpKSYweGZmZmY7ICAgIC8vIHkgPT0gMS94IG1vZCAyXjE2XG4gICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgIHkgPSAoeSooMi14KnkldGhpcy5EVikpJXRoaXMuRFY7ICAgICAgIC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAvLyB3ZSByZWFsbHkgd2FudCB0aGUgbmVnYXRpdmUgaW52ZXJzZSwgYW5kIC1EViA8IHkgPCBEVlxuICAgICAgcmV0dXJuICh5PjApP3RoaXMuRFYteToteTtcbiAgICB9XG5cbiAgICAvLyBNb250Z29tZXJ5IHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIE1vbnRnb21lcnkobSkge1xuICAgICAgdGhpcy5tID0gbTtcbiAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICB0aGlzLm1wbCA9IHRoaXMubXAmMHg3ZmZmO1xuICAgICAgdGhpcy5tcGggPSB0aGlzLm1wPj4xNTtcbiAgICAgIHRoaXMudW0gPSAoMTw8KG0uREItMTUpKS0xO1xuICAgICAgdGhpcy5tdDIgPSAyKm0udDtcbiAgICB9XG5cbiAgICAvLyB4UiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRDb252ZXJ0KHgpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCxyKTtcbiAgICAgIHIuZGl2UmVtVG8odGhpcy5tLG51bGwscik7XG4gICAgICBpZih4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB0aGlzLm0uc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHgvUiBtb2QgbVxuICAgIGZ1bmN0aW9uIG1vbnRSZXZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguY29weVRvKHIpO1xuICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyB4ID0geC9SIG1vZCBtIChIQUMgMTQuMzIpXG4gICAgZnVuY3Rpb24gbW9udFJlZHVjZSh4KSB7XG4gICAgICB3aGlsZSh4LnQgPD0gdGhpcy5tdDIpIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICB4W3gudCsrXSA9IDA7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAvLyBmYXN0ZXIgd2F5IG9mIGNhbGN1bGF0aW5nIHUwID0geFtpXSptcCBtb2QgRFZcbiAgICAgICAgdmFyIGogPSB4W2ldJjB4N2ZmZjtcbiAgICAgICAgdmFyIHUwID0gKGoqdGhpcy5tcGwrKCgoaip0aGlzLm1waCsoeFtpXT4+MTUpKnRoaXMubXBsKSZ0aGlzLnVtKTw8MTUpKSZ4LkRNO1xuICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgaiA9IGkrdGhpcy5tLnQ7XG4gICAgICAgIHhbal0gKz0gdGhpcy5tLmFtKDAsdTAseCxpLDAsdGhpcy5tLnQpO1xuICAgICAgICAvLyBwcm9wYWdhdGUgY2FycnlcbiAgICAgICAgd2hpbGUoeFtqXSA+PSB4LkRWKSB7IHhbal0gLT0geC5EVjsgeFsrK2pdKys7IH1cbiAgICAgIH1cbiAgICAgIHguY2xhbXAoKTtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LHgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBtb250U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgZnVuY3Rpb24gbW9udE11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuY29udmVydCA9IG1vbnRDb252ZXJ0O1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmVkdWNlID0gbW9udFJlZHVjZTtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIGZ1bmN0aW9uIGJucElzRXZlbigpIHsgcmV0dXJuICgodGhpcy50PjApPyh0aGlzWzBdJjEpOnRoaXMucykgPT0gMDsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpc15lLCBlIDwgMl4zMiwgZG9pbmcgc3FyIGFuZCBtdWwgd2l0aCBcInJcIiAoSEFDIDE0Ljc5KVxuICAgIGZ1bmN0aW9uIGJucEV4cChlLHopIHtcbiAgICAgIGlmKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICB2YXIgciA9IG5iaSgpLCByMiA9IG5iaSgpLCBnID0gei5jb252ZXJ0KHRoaXMpLCBpID0gbmJpdHMoZSktMTtcbiAgICAgIGcuY29weVRvKHIpO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgei5zcXJUbyhyLHIyKTtcbiAgICAgICAgaWYoKGUmKDE8PGkpKSA+IDApIHoubXVsVG8ocjIsZyxyKTtcbiAgICAgICAgZWxzZSB7IHZhciB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3dJbnQoZSxtKSB7XG4gICAgICB2YXIgejtcbiAgICAgIGlmKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkgeiA9IG5ldyBDbGFzc2ljKG0pOyBlbHNlIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgIHJldHVybiB0aGlzLmV4cChlLHopO1xuICAgIH1cblxuICAgIC8vIHByb3RlY3RlZFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvcHlUbyA9IGJucENvcHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tSW50ID0gYm5wRnJvbUludDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGFtcCA9IGJucENsYW1wO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRsU2hpZnRUbyA9IGJucERMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kclNoaWZ0VG8gPSBibnBEUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubFNoaWZ0VG8gPSBibnBMU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yU2hpZnRUbyA9IGJucFJTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YlRvID0gYm5wU3ViVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBibnBTcXVhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGJucERpdlJlbVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gYm5Ub1N0cmluZztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBibkNvbXBhcmVUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcblxuICAgIC8vIFwiY29uc3RhbnRzXCJcbiAgICBCaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG4gICAgQmlnSW50ZWdlci5PTkUgPSBuYnYoMSk7XG5cbiAgICAvLyBDb3B5cmlnaHQgKGMpIDIwMDUtMjAwOSAgVG9tIFd1XG4gICAgLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAvLyBTZWUgXCJMSUNFTlNFXCIgZm9yIGRldGFpbHMuXG5cbiAgICAvLyBFeHRlbmRlZCBKYXZhU2NyaXB0IEJOIGZ1bmN0aW9ucywgcmVxdWlyZWQgZm9yIFJTQSBwcml2YXRlIG9wcy5cblxuICAgIC8vIFZlcnNpb24gMS4xOiBuZXcgQmlnSW50ZWdlcihcIjBcIiwgMTApIHJldHVybnMgXCJwcm9wZXJcIiB6ZXJvXG4gICAgLy8gVmVyc2lvbiAxLjI6IHNxdWFyZSgpIEFQSSwgaXNQcm9iYWJsZVByaW1lIGZpeFxuXG4gICAgLy8gKHB1YmxpYylcbiAgICBmdW5jdGlvbiBibkNsb25lKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmNvcHlUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgZnVuY3Rpb24gYm5JbnRWYWx1ZSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHtcbiAgICAgICAgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdLXRoaXMuRFY7XG4gICAgICAgIGVsc2UgaWYodGhpcy50ID09IDApIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYodGhpcy50ID09IDEpIHJldHVybiB0aGlzWzBdO1xuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPCAzMlxuICAgICAgcmV0dXJuICgodGhpc1sxXSYoKDE8PCgzMi10aGlzLkRCKSktMSkpPDx0aGlzLkRCKXx0aGlzWzBdO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgZnVuY3Rpb24gYm5CeXRlVmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDI0KT4+MjQ7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBzaG9ydCAoYXNzdW1lcyBEQj49MTYpXG4gICAgZnVuY3Rpb24gYm5TaG9ydFZhbHVlKCkgeyByZXR1cm4gKHRoaXMudD09MCk/dGhpcy5zOih0aGlzWzBdPDwxNik+PjE2OyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgZnVuY3Rpb24gYm5wQ2h1bmtTaXplKHIpIHsgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIqdGhpcy5EQi9NYXRoLmxvZyhyKSk7IH1cblxuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgZnVuY3Rpb24gYm5TaWdOdW0oKSB7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gLTE7XG4gICAgICBlbHNlIGlmKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSByZXR1cm4gMDtcbiAgICAgIGVsc2UgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBUb1JhZGl4KGIpIHtcbiAgICAgIGlmKGIgPT0gbnVsbCkgYiA9IDEwO1xuICAgICAgaWYodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikgcmV0dXJuIFwiMFwiO1xuICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICB2YXIgYSA9IE1hdGgucG93KGIsY3MpO1xuICAgICAgdmFyIGQgPSBuYnYoYSksIHkgPSBuYmkoKSwgeiA9IG5iaSgpLCByID0gXCJcIjtcbiAgICAgIHRoaXMuZGl2UmVtVG8oZCx5LHopO1xuICAgICAgd2hpbGUoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgciA9IChhK3ouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgeS5kaXZSZW1UbyhkLHkseik7XG4gICAgICB9XG4gICAgICByZXR1cm4gei5pbnRWYWx1ZSgpLnRvU3RyaW5nKGIpICsgcjtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IGZyb20gcmFkaXggc3RyaW5nXG4gICAgZnVuY3Rpb24gYm5wRnJvbVJhZGl4KHMsYikge1xuICAgICAgdGhpcy5mcm9tSW50KDApO1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBkID0gTWF0aC5wb3coYixjcyksIG1pID0gZmFsc2UsIGogPSAwLCB3ID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciB4ID0gaW50QXQocyxpKTtcbiAgICAgICAgaWYoeCA8IDApIHtcbiAgICAgICAgICBpZihzLmNoYXJBdChpKSA9PSBcIi1cIiAmJiB0aGlzLnNpZ251bSgpID09IDApIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB3ID0gYip3K3g7XG4gICAgICAgIGlmKCsraiA+PSBjcykge1xuICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LDApO1xuICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIHcgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihqID4gMCkge1xuICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLGopKTtcbiAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICB9XG4gICAgICBpZihtaSkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gYm5wRnJvbU51bWJlcihhLGIsYykge1xuICAgICAgaWYoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgaWYoYSA8IDIpIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsYyk7XG4gICAgICAgICAgaWYoIXRoaXMudGVzdEJpdChhLTEpKVx0Ly8gZm9yY2UgTVNCIHNldFxuICAgICAgICAgICAgdGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEtMSksb3Bfb3IsdGhpcyk7XG4gICAgICAgICAgaWYodGhpcy5pc0V2ZW4oKSkgdGhpcy5kQWRkT2Zmc2V0KDEsMCk7IC8vIGZvcmNlIG9kZFxuICAgICAgICAgIHdoaWxlKCF0aGlzLmlzUHJvYmFibGVQcmltZShiKSkge1xuICAgICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KDIsMCk7XG4gICAgICAgICAgICBpZih0aGlzLmJpdExlbmd0aCgpID4gYSkgdGhpcy5zdWJUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSx0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsUk5HKVxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheSgpLCB0ID0gYSY3O1xuICAgICAgICB4Lmxlbmd0aCA9IChhPj4zKSsxO1xuICAgICAgICBiLm5leHRCeXRlcyh4KTtcbiAgICAgICAgaWYodCA+IDApIHhbMF0gJj0gKCgxPDx0KS0xKTsgZWxzZSB4WzBdID0gMDtcbiAgICAgICAgdGhpcy5mcm9tU3RyaW5nKHgsMjU2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBjb252ZXJ0IHRvIGJpZ2VuZGlhbiBieXRlIGFycmF5XG4gICAgZnVuY3Rpb24gYm5Ub0J5dGVBcnJheSgpIHtcbiAgICAgIHZhciBpID0gdGhpcy50LCByID0gbmV3IEFycmF5KCk7XG4gICAgICByWzBdID0gdGhpcy5zO1xuICAgICAgdmFyIHAgPSB0aGlzLkRCLShpKnRoaXMuREIpJTgsIGQsIGsgPSAwO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApICE9ICh0aGlzLnMmdGhpcy5ETSk+PnApXG4gICAgICAgICAgcltrKytdID0gZHwodGhpcy5zPDwodGhpcy5EQi1wKSk7XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCA4KSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PCg4LXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLTgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPTgpKSYweGZmO1xuICAgICAgICAgICAgaWYocCA8PSAwKSB7IHAgKz0gdGhpcy5EQjsgLS1pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKChkJjB4ODApICE9IDApIGQgfD0gLTI1NjtcbiAgICAgICAgICBpZihrID09IDAgJiYgKHRoaXMucyYweDgwKSAhPSAoZCYweDgwKSkgKytrO1xuICAgICAgICAgIGlmKGsgPiAwIHx8IGQgIT0gdGhpcy5zKSByW2srK10gPSBkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBibkVxdWFscyhhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT09MCk7IH1cbiAgICBmdW5jdGlvbiBibk1pbihhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKTwwKT90aGlzOmE7IH1cbiAgICBmdW5jdGlvbiBibk1heChhKSB7IHJldHVybih0aGlzLmNvbXBhcmVUbyhhKT4wKT90aGlzOmE7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIG9wIGEgKGJpdHdpc2UpXG4gICAgZnVuY3Rpb24gYm5wQml0d2lzZVRvKGEsb3Ascikge1xuICAgICAgdmFyIGksIGYsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIGZvcihpID0gMDsgaSA8IG07ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sYVtpXSk7XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgZiA9IGEucyZ0aGlzLkRNO1xuICAgICAgICBmb3IoaSA9IG07IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IG9wKHRoaXNbaV0sZik7XG4gICAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IGEudDsgKytpKSByW2ldID0gb3AoZixhW2ldKTtcbiAgICAgICAgci50ID0gYS50O1xuICAgICAgfVxuICAgICAgci5zID0gb3AodGhpcy5zLGEucyk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIGFcbiAgICBmdW5jdGlvbiBvcF9hbmQoeCx5KSB7IHJldHVybiB4Jnk7IH1cbiAgICBmdW5jdGlvbiBibkFuZChhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfYW5kLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyB8IGFcbiAgICBmdW5jdGlvbiBvcF9vcih4LHkpIHsgcmV0dXJuIHh8eTsgfVxuICAgIGZ1bmN0aW9uIGJuT3IoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX29yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeIGFcbiAgICBmdW5jdGlvbiBvcF94b3IoeCx5KSB7IHJldHVybiB4Xnk7IH1cbiAgICBmdW5jdGlvbiBiblhvcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3BfeG9yLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH5hXG4gICAgZnVuY3Rpb24gb3BfYW5kbm90KHgseSkgeyByZXR1cm4geCZ+eTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kTm90KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmRub3Qscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB+dGhpc1xuICAgIGZ1bmN0aW9uIGJuTm90KCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkgcltpXSA9IHRoaXMuRE0mfnRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB+dGhpcy5zO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdExlZnQobikge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIGlmKG4gPCAwKSB0aGlzLnJTaGlmdFRvKC1uLHIpOyBlbHNlIHRoaXMubFNoaWZ0VG8obixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgPj4gblxuICAgIGZ1bmN0aW9uIGJuU2hpZnRSaWdodChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMubFNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5yU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGluZGV4IG9mIGxvd2VzdCAxLWJpdCBpbiB4LCB4IDwgMl4zMVxuICAgIGZ1bmN0aW9uIGxiaXQoeCkge1xuICAgICAgaWYoeCA9PSAwKSByZXR1cm4gLTE7XG4gICAgICB2YXIgciA9IDA7XG4gICAgICBpZigoeCYweGZmZmYpID09IDApIHsgeCA+Pj0gMTY7IHIgKz0gMTY7IH1cbiAgICAgIGlmKCh4JjB4ZmYpID09IDApIHsgeCA+Pj0gODsgciArPSA4OyB9XG4gICAgICBpZigoeCYweGYpID09IDApIHsgeCA+Pj0gNDsgciArPSA0OyB9XG4gICAgICBpZigoeCYzKSA9PSAwKSB7IHggPj49IDI7IHIgKz0gMjsgfVxuICAgICAgaWYoKHgmMSkgPT0gMCkgKytyO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJucyBpbmRleCBvZiBsb3dlc3QgMS1iaXQgKG9yIC0xIGlmIG5vbmUpXG4gICAgZnVuY3Rpb24gYm5HZXRMb3dlc3RTZXRCaXQoKSB7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpXG4gICAgICAgIGlmKHRoaXNbaV0gIT0gMCkgcmV0dXJuIGkqdGhpcy5EQitsYml0KHRoaXNbaV0pO1xuICAgICAgaWYodGhpcy5zIDwgMCkgcmV0dXJuIHRoaXMudCp0aGlzLkRCO1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBudW1iZXIgb2YgMSBiaXRzIGluIHhcbiAgICBmdW5jdGlvbiBjYml0KHgpIHtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIHdoaWxlKHggIT0gMCkgeyB4ICY9IHgtMTsgKytyOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gbnVtYmVyIG9mIHNldCBiaXRzXG4gICAgZnVuY3Rpb24gYm5CaXRDb3VudCgpIHtcbiAgICAgIHZhciByID0gMCwgeCA9IHRoaXMucyZ0aGlzLkRNO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByICs9IGNiaXQodGhpc1tpXV54KTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRydWUgaWZmIG50aCBiaXQgaXMgc2V0XG4gICAgZnVuY3Rpb24gYm5UZXN0Qml0KG4pIHtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihuL3RoaXMuREIpO1xuICAgICAgaWYoaiA+PSB0aGlzLnQpIHJldHVybih0aGlzLnMhPTApO1xuICAgICAgcmV0dXJuKCh0aGlzW2pdJigxPDwobiV0aGlzLkRCKSkpIT0wKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzIG9wICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJucENoYW5nZUJpdChuLG9wKSB7XG4gICAgICB2YXIgciA9IEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChuKTtcbiAgICAgIHRoaXMuYml0d2lzZVRvKHIsb3Ascik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5TZXRCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF9vcik7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJiB+KDE8PG4pXG4gICAgZnVuY3Rpb24gYm5DbGVhckJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX2FuZG5vdCk7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgXiAoMTw8bilcbiAgICBmdW5jdGlvbiBibkZsaXBCaXQobikgeyByZXR1cm4gdGhpcy5jaGFuZ2VCaXQobixvcF94b3IpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyArIGFcbiAgICBmdW5jdGlvbiBibnBBZGRUbyhhLHIpIHtcbiAgICAgIHZhciBpID0gMCwgYyA9IDAsIG0gPSBNYXRoLm1pbihhLnQsdGhpcy50KTtcbiAgICAgIHdoaWxlKGkgPCBtKSB7XG4gICAgICAgIGMgKz0gdGhpc1tpXSthW2ldO1xuICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICB9XG4gICAgICBpZihhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgYyArPSBhLnM7XG4gICAgICAgIHdoaWxlKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIHdoaWxlKGkgPCBhLnQpIHtcbiAgICAgICAgICBjICs9IGFbaV07XG4gICAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgYyArPSBhLnM7XG4gICAgICB9XG4gICAgICByLnMgPSAoYzwwKT8tMTowO1xuICAgICAgaWYoYyA+IDApIHJbaSsrXSA9IGM7XG4gICAgICBlbHNlIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgci50ID0gaTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJuQWRkKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5hZGRUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAtIGFcbiAgICBmdW5jdGlvbiBiblN1YnRyYWN0KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zdWJUbyhhLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAqIGFcbiAgICBmdW5jdGlvbiBibk11bHRpcGx5KGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5tdWx0aXBseVRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzXjJcbiAgICBmdW5jdGlvbiBiblNxdWFyZSgpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5zcXVhcmVUbyhyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgLyBhXG4gICAgZnVuY3Rpb24gYm5EaXZpZGUoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEscixudWxsKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgJSBhXG4gICAgZnVuY3Rpb24gYm5SZW1haW5kZXIoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmRpdlJlbVRvKGEsbnVsbCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIFt0aGlzL2EsdGhpcyVhXVxuICAgIGZ1bmN0aW9uIGJuRGl2aWRlQW5kUmVtYWluZGVyKGEpIHtcbiAgICAgIHZhciBxID0gbmJpKCksIHIgPSBuYmkoKTtcbiAgICAgIHRoaXMuZGl2UmVtVG8oYSxxLHIpO1xuICAgICAgcmV0dXJuIG5ldyBBcnJheShxLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKj0gbiwgdGhpcyA+PSAwLCAxIDwgbiA8IERWXG4gICAgZnVuY3Rpb24gYm5wRE11bHRpcGx5KG4pIHtcbiAgICAgIHRoaXNbdGhpcy50XSA9IHRoaXMuYW0oMCxuLTEsdGhpcywwLDAsdGhpcy50KTtcbiAgICAgICsrdGhpcy50O1xuICAgICAgdGhpcy5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgKz0gbiA8PCB3IHdvcmRzLCB0aGlzID49IDBcbiAgICBmdW5jdGlvbiBibnBEQWRkT2Zmc2V0KG4sdykge1xuICAgICAgaWYobiA9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSh0aGlzLnQgPD0gdykgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgdGhpc1t3XSArPSBuO1xuICAgICAgd2hpbGUodGhpc1t3XSA+PSB0aGlzLkRWKSB7XG4gICAgICAgIHRoaXNbd10gLT0gdGhpcy5EVjtcbiAgICAgICAgaWYoKyt3ID49IHRoaXMudCkgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgICArK3RoaXNbd107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQSBcIm51bGxcIiByZWR1Y2VyXG4gICAgZnVuY3Rpb24gTnVsbEV4cCgpIHt9XG4gICAgZnVuY3Rpb24gbk5vcCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gbk11bFRvKHgseSxyKSB7IHgubXVsdGlwbHlUbyh5LHIpOyB9XG4gICAgZnVuY3Rpb24gblNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB9XG5cbiAgICBOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLm11bFRvID0gbk11bFRvO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnNxclRvID0gblNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lXG4gICAgZnVuY3Rpb24gYm5Qb3coZSkgeyByZXR1cm4gdGhpcy5leHAoZSxuZXcgTnVsbEV4cCgpKTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IGxvd2VyIG4gd29yZHMgb2YgXCJ0aGlzICogYVwiLCBhLnQgPD0gblxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseUxvd2VyVG8oYSxuLHIpIHtcbiAgICAgIHZhciBpID0gTWF0aC5taW4odGhpcy50K2EudCxuKTtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHIudCA9IGk7XG4gICAgICB3aGlsZShpID4gMCkgclstLWldID0gMDtcbiAgICAgIHZhciBqO1xuICAgICAgZm9yKGogPSByLnQtdGhpcy50OyBpIDwgajsgKytpKSByW2krdGhpcy50XSA9IHRoaXMuYW0oMCxhW2ldLHIsaSwwLHRoaXMudCk7XG4gICAgICBmb3IoaiA9IE1hdGgubWluKGEudCxuKTsgaSA8IGo7ICsraSkgdGhpcy5hbSgwLGFbaV0scixpLDAsbi1pKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gXCJ0aGlzICogYVwiIHdpdGhvdXQgbG93ZXIgbiB3b3JkcywgbiA+IDBcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgZnVuY3Rpb24gYm5wTXVsdGlwbHlVcHBlclRvKGEsbixyKSB7XG4gICAgICAtLW47XG4gICAgICB2YXIgaSA9IHIudCA9IHRoaXMudCthLnQtbjtcbiAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgIHdoaWxlKC0taSA+PSAwKSByW2ldID0gMDtcbiAgICAgIGZvcihpID0gTWF0aC5tYXgobi10aGlzLnQsMCk7IGkgPCBhLnQ7ICsraSlcbiAgICAgICAgclt0aGlzLnQraS1uXSA9IHRoaXMuYW0obi1pLGFbaV0sciwwLDAsdGhpcy50K2ktbik7XG4gICAgICByLmNsYW1wKCk7XG4gICAgICByLmRyU2hpZnRUbygxLHIpO1xuICAgIH1cblxuICAgIC8vIEJhcnJldHQgbW9kdWxhciByZWR1Y3Rpb25cbiAgICBmdW5jdGlvbiBCYXJyZXR0KG0pIHtcbiAgICAgIC8vIHNldHVwIEJhcnJldHRcbiAgICAgIHRoaXMucjIgPSBuYmkoKTtcbiAgICAgIHRoaXMucTMgPSBuYmkoKTtcbiAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbygyKm0udCx0aGlzLnIyKTtcbiAgICAgIHRoaXMubXUgPSB0aGlzLnIyLmRpdmlkZShtKTtcbiAgICAgIHRoaXMubSA9IG07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmFycmV0dENvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LnQgPiAyKnRoaXMubS50KSByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgIGVsc2UgaWYoeC5jb21wYXJlVG8odGhpcy5tKSA8IDApIHJldHVybiB4O1xuICAgICAgZWxzZSB7IHZhciByID0gbmJpKCk7IHguY29weVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgcmV0dXJuIHI7IH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0UmV2ZXJ0KHgpIHsgcmV0dXJuIHg7IH1cblxuICAgIC8vIHggPSB4IG1vZCBtIChIQUMgMTQuNDIpXG4gICAgZnVuY3Rpb24gYmFycmV0dFJlZHVjZSh4KSB7XG4gICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udC0xLHRoaXMucjIpO1xuICAgICAgaWYoeC50ID4gdGhpcy5tLnQrMSkgeyB4LnQgPSB0aGlzLm0udCsxOyB4LmNsYW1wKCk7IH1cbiAgICAgIHRoaXMubXUubXVsdGlwbHlVcHBlclRvKHRoaXMucjIsdGhpcy5tLnQrMSx0aGlzLnEzKTtcbiAgICAgIHRoaXMubS5tdWx0aXBseUxvd2VyVG8odGhpcy5xMyx0aGlzLm0udCsxLHRoaXMucjIpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5yMikgPCAwKSB4LmRBZGRPZmZzZXQoMSx0aGlzLm0udCsxKTtcbiAgICAgIHguc3ViVG8odGhpcy5yMix4KTtcbiAgICAgIHdoaWxlKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkgeC5zdWJUbyh0aGlzLm0seCk7XG4gICAgfVxuXG4gICAgLy8gciA9IHheMiBtb2QgbTsgeCAhPSByXG4gICAgZnVuY3Rpb24gYmFycmV0dFNxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgLy8gciA9IHgqeSBtb2QgbTsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBCYXJyZXR0LnByb3RvdHlwZS5jb252ZXJ0ID0gYmFycmV0dENvbnZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUucmV2ZXJ0ID0gYmFycmV0dFJldmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZWR1Y2UgPSBiYXJyZXR0UmVkdWNlO1xuICAgIEJhcnJldHQucHJvdG90eXBlLm11bFRvID0gYmFycmV0dE11bFRvO1xuICAgIEJhcnJldHQucHJvdG90eXBlLnNxclRvID0gYmFycmV0dFNxclRvO1xuXG4gICAgLy8gKHB1YmxpYykgdGhpc15lICUgbSAoSEFDIDE0Ljg1KVxuICAgIGZ1bmN0aW9uIGJuTW9kUG93KGUsbSkge1xuICAgICAgdmFyIGkgPSBlLmJpdExlbmd0aCgpLCBrLCByID0gbmJ2KDEpLCB6O1xuICAgICAgaWYoaSA8PSAwKSByZXR1cm4gcjtcbiAgICAgIGVsc2UgaWYoaSA8IDE4KSBrID0gMTtcbiAgICAgIGVsc2UgaWYoaSA8IDQ4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoaSA8IDE0NCkgayA9IDQ7XG4gICAgICBlbHNlIGlmKGkgPCA3NjgpIGsgPSA1O1xuICAgICAgZWxzZSBrID0gNjtcbiAgICAgIGlmKGkgPCA4KVxuICAgICAgICB6ID0gbmV3IENsYXNzaWMobSk7XG4gICAgICBlbHNlIGlmKG0uaXNFdmVuKCkpXG4gICAgICAgIHogPSBuZXcgQmFycmV0dChtKTtcbiAgICAgIGVsc2VcbiAgICAgICAgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuXG4gICAgICAvLyBwcmVjb21wdXRhdGlvblxuICAgICAgdmFyIGcgPSBuZXcgQXJyYXkoKSwgbiA9IDMsIGsxID0gay0xLCBrbSA9ICgxPDxrKS0xO1xuICAgICAgZ1sxXSA9IHouY29udmVydCh0aGlzKTtcbiAgICAgIGlmKGsgPiAxKSB7XG4gICAgICAgIHZhciBnMiA9IG5iaSgpO1xuICAgICAgICB6LnNxclRvKGdbMV0sZzIpO1xuICAgICAgICB3aGlsZShuIDw9IGttKSB7XG4gICAgICAgICAgZ1tuXSA9IG5iaSgpO1xuICAgICAgICAgIHoubXVsVG8oZzIsZ1tuLTJdLGdbbl0pO1xuICAgICAgICAgIG4gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaiA9IGUudC0xLCB3LCBpczEgPSB0cnVlLCByMiA9IG5iaSgpLCB0O1xuICAgICAgaSA9IG5iaXRzKGVbal0pLTE7XG4gICAgICB3aGlsZShqID49IDApIHtcbiAgICAgICAgaWYoaSA+PSBrMSkgdyA9IChlW2pdPj4oaS1rMSkpJmttO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3ID0gKGVbal0mKCgxPDwoaSsxKSktMSkpPDwoazEtaSk7XG4gICAgICAgICAgaWYoaiA+IDApIHcgfD0gZVtqLTFdPj4odGhpcy5EQitpLWsxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG4gPSBrO1xuICAgICAgICB3aGlsZSgodyYxKSA9PSAwKSB7IHcgPj49IDE7IC0tbjsgfVxuICAgICAgICBpZigoaSAtPSBuKSA8IDApIHsgaSArPSB0aGlzLkRCOyAtLWo7IH1cbiAgICAgICAgaWYoaXMxKSB7XHQvLyByZXQgPT0gMSwgZG9uJ3QgYm90aGVyIHNxdWFyaW5nIG9yIG11bHRpcGx5aW5nIGl0XG4gICAgICAgICAgZ1t3XS5jb3B5VG8ocik7XG4gICAgICAgICAgaXMxID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgd2hpbGUobiA+IDEpIHsgei5zcXJUbyhyLHIyKTsgei5zcXJUbyhyMixyKTsgbiAtPSAyOyB9XG4gICAgICAgICAgaWYobiA+IDApIHouc3FyVG8ocixyMik7IGVsc2UgeyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7IH1cbiAgICAgICAgICB6Lm11bFRvKHIyLGdbd10scik7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZShqID49IDAgJiYgKGVbal0mKDE8PGkpKSA9PSAwKSB7XG4gICAgICAgICAgei5zcXJUbyhyLHIyKTsgdCA9IHI7IHIgPSByMjsgcjIgPSB0O1xuICAgICAgICAgIGlmKC0taSA8IDApIHsgaSA9IHRoaXMuREItMTsgLS1qOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSBnY2QodGhpcyxhKSAoSEFDIDE0LjU0KVxuICAgIGZ1bmN0aW9uIGJuR0NEKGEpIHtcbiAgICAgIHZhciB4ID0gKHRoaXMuczwwKT90aGlzLm5lZ2F0ZSgpOnRoaXMuY2xvbmUoKTtcbiAgICAgIHZhciB5ID0gKGEuczwwKT9hLm5lZ2F0ZSgpOmEuY2xvbmUoKTtcbiAgICAgIGlmKHguY29tcGFyZVRvKHkpIDwgMCkgeyB2YXIgdCA9IHg7IHggPSB5OyB5ID0gdDsgfVxuICAgICAgdmFyIGkgPSB4LmdldExvd2VzdFNldEJpdCgpLCBnID0geS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGcgPCAwKSByZXR1cm4geDtcbiAgICAgIGlmKGkgPCBnKSBnID0gaTtcbiAgICAgIGlmKGcgPiAwKSB7XG4gICAgICAgIHguclNoaWZ0VG8oZyx4KTtcbiAgICAgICAgeS5yU2hpZnRUbyhnLHkpO1xuICAgICAgfVxuICAgICAgd2hpbGUoeC5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgaWYoKGkgPSB4LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHguclNoaWZ0VG8oaSx4KTtcbiAgICAgICAgaWYoKGkgPSB5LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHkuclNoaWZ0VG8oaSx5KTtcbiAgICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPj0gMCkge1xuICAgICAgICAgIHguc3ViVG8oeSx4KTtcbiAgICAgICAgICB4LnJTaGlmdFRvKDEseCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgeS5zdWJUbyh4LHkpO1xuICAgICAgICAgIHkuclNoaWZ0VG8oMSx5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoZyA+IDApIHkubFNoaWZ0VG8oZyx5KTtcbiAgICAgIHJldHVybiB5O1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgJSBuLCBuIDwgMl4yNlxuICAgIGZ1bmN0aW9uIGJucE1vZEludChuKSB7XG4gICAgICBpZihuIDw9IDApIHJldHVybiAwO1xuICAgICAgdmFyIGQgPSB0aGlzLkRWJW4sIHIgPSAodGhpcy5zPDApP24tMTowO1xuICAgICAgaWYodGhpcy50ID4gMClcbiAgICAgICAgaWYoZCA9PSAwKSByID0gdGhpc1swXSVuO1xuICAgICAgICBlbHNlIGZvcih2YXIgaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgciA9IChkKnIrdGhpc1tpXSklbjtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIDEvdGhpcyAlIG0gKEhBQyAxNC42MSlcbiAgICBmdW5jdGlvbiBibk1vZEludmVyc2UobSkge1xuICAgICAgdmFyIGFjID0gbS5pc0V2ZW4oKTtcbiAgICAgIGlmKCh0aGlzLmlzRXZlbigpICYmIGFjKSB8fCBtLnNpZ251bSgpID09IDApIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICB2YXIgdSA9IG0uY2xvbmUoKSwgdiA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIHZhciBhID0gbmJ2KDEpLCBiID0gbmJ2KDApLCBjID0gbmJ2KDApLCBkID0gbmJ2KDEpO1xuICAgICAgd2hpbGUodS5zaWdudW0oKSAhPSAwKSB7XG4gICAgICAgIHdoaWxlKHUuaXNFdmVuKCkpIHtcbiAgICAgICAgICB1LnJTaGlmdFRvKDEsdSk7XG4gICAgICAgICAgaWYoYWMpIHtcbiAgICAgICAgICAgIGlmKCFhLmlzRXZlbigpIHx8ICFiLmlzRXZlbigpKSB7IGEuYWRkVG8odGhpcyxhKTsgYi5zdWJUbyhtLGIpOyB9XG4gICAgICAgICAgICBhLnJTaGlmdFRvKDEsYSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYoIWIuaXNFdmVuKCkpIGIuc3ViVG8obSxiKTtcbiAgICAgICAgICBiLnJTaGlmdFRvKDEsYik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUodi5pc0V2ZW4oKSkge1xuICAgICAgICAgIHYuclNoaWZ0VG8oMSx2KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWMuaXNFdmVuKCkgfHwgIWQuaXNFdmVuKCkpIHsgYy5hZGRUbyh0aGlzLGMpOyBkLnN1YlRvKG0sZCk7IH1cbiAgICAgICAgICAgIGMuclNoaWZ0VG8oMSxjKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighZC5pc0V2ZW4oKSkgZC5zdWJUbyhtLGQpO1xuICAgICAgICAgIGQuclNoaWZ0VG8oMSxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZih1LmNvbXBhcmVUbyh2KSA+PSAwKSB7XG4gICAgICAgICAgdS5zdWJUbyh2LHUpO1xuICAgICAgICAgIGlmKGFjKSBhLnN1YlRvKGMsYSk7XG4gICAgICAgICAgYi5zdWJUbyhkLGIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHYuc3ViVG8odSx2KTtcbiAgICAgICAgICBpZihhYykgYy5zdWJUbyhhLGMpO1xuICAgICAgICAgIGQuc3ViVG8oYixkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYodi5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDApIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICBpZihkLmNvbXBhcmVUbyhtKSA+PSAwKSByZXR1cm4gZC5zdWJ0cmFjdChtKTtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSBkLmFkZFRvKG0sZCk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgICBpZihkLnNpZ251bSgpIDwgMCkgcmV0dXJuIGQuYWRkKG0pOyBlbHNlIHJldHVybiBkO1xuICAgIH1cblxuICAgIHZhciBsb3dwcmltZXMgPSBbMiwzLDUsNywxMSwxMywxNywxOSwyMywyOSwzMSwzNyw0MSw0Myw0Nyw1Myw1OSw2MSw2Nyw3MSw3Myw3OSw4Myw4OSw5NywxMDEsMTAzLDEwNywxMDksMTEzLDEyNywxMzEsMTM3LDEzOSwxNDksMTUxLDE1NywxNjMsMTY3LDE3MywxNzksMTgxLDE5MSwxOTMsMTk3LDE5OSwyMTEsMjIzLDIyNywyMjksMjMzLDIzOSwyNDEsMjUxLDI1NywyNjMsMjY5LDI3MSwyNzcsMjgxLDI4MywyOTMsMzA3LDMxMSwzMTMsMzE3LDMzMSwzMzcsMzQ3LDM0OSwzNTMsMzU5LDM2NywzNzMsMzc5LDM4MywzODksMzk3LDQwMSw0MDksNDE5LDQyMSw0MzEsNDMzLDQzOSw0NDMsNDQ5LDQ1Nyw0NjEsNDYzLDQ2Nyw0NzksNDg3LDQ5MSw0OTksNTAzLDUwOSw1MjEsNTIzLDU0MSw1NDcsNTU3LDU2Myw1NjksNTcxLDU3Nyw1ODcsNTkzLDU5OSw2MDEsNjA3LDYxMyw2MTcsNjE5LDYzMSw2NDEsNjQzLDY0Nyw2NTMsNjU5LDY2MSw2NzMsNjc3LDY4Myw2OTEsNzAxLDcwOSw3MTksNzI3LDczMyw3MzksNzQzLDc1MSw3NTcsNzYxLDc2OSw3NzMsNzg3LDc5Nyw4MDksODExLDgyMSw4MjMsODI3LDgyOSw4MzksODUzLDg1Nyw4NTksODYzLDg3Nyw4ODEsODgzLDg4Nyw5MDcsOTExLDkxOSw5MjksOTM3LDk0MSw5NDcsOTUzLDk2Nyw5NzEsOTc3LDk4Myw5OTEsOTk3XTtcbiAgICB2YXIgbHBsaW0gPSAoMTw8MjYpL2xvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdO1xuXG4gICAgLy8gKHB1YmxpYykgdGVzdCBwcmltYWxpdHkgd2l0aCBjZXJ0YWludHkgPj0gMS0uNV50XG4gICAgZnVuY3Rpb24gYm5Jc1Byb2JhYmxlUHJpbWUodCkge1xuICAgICAgdmFyIGksIHggPSB0aGlzLmFicygpO1xuICAgICAgaWYoeC50ID09IDEgJiYgeFswXSA8PSBsb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aC0xXSkge1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBsb3dwcmltZXMubGVuZ3RoOyArK2kpXG4gICAgICAgICAgaWYoeFswXSA9PSBsb3dwcmltZXNbaV0pIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZih4LmlzRXZlbigpKSByZXR1cm4gZmFsc2U7XG4gICAgICBpID0gMTtcbiAgICAgIHdoaWxlKGkgPCBsb3dwcmltZXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBtID0gbG93cHJpbWVzW2ldLCBqID0gaSsxO1xuICAgICAgICB3aGlsZShqIDwgbG93cHJpbWVzLmxlbmd0aCAmJiBtIDwgbHBsaW0pIG0gKj0gbG93cHJpbWVzW2orK107XG4gICAgICAgIG0gPSB4Lm1vZEludChtKTtcbiAgICAgICAgd2hpbGUoaSA8IGopIGlmKG0lbG93cHJpbWVzW2krK10gPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHgubWlsbGVyUmFiaW4odCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZiBwcm9iYWJseSBwcmltZSAoSEFDIDQuMjQsIE1pbGxlci1SYWJpbilcbiAgICBmdW5jdGlvbiBibnBNaWxsZXJSYWJpbih0KSB7XG4gICAgICB2YXIgbjEgPSB0aGlzLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKTtcbiAgICAgIHZhciBrID0gbjEuZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICBpZihrIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICAgIHZhciByID0gbjEuc2hpZnRSaWdodChrKTtcbiAgICAgIHQgPSAodCsxKT4+MTtcbiAgICAgIGlmKHQgPiBsb3dwcmltZXMubGVuZ3RoKSB0ID0gbG93cHJpbWVzLmxlbmd0aDtcbiAgICAgIHZhciBhID0gbmJpKCk7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdDsgKytpKSB7XG4gICAgICAgIC8vUGljayBiYXNlcyBhdCByYW5kb20sIGluc3RlYWQgb2Ygc3RhcnRpbmcgYXQgMlxuICAgICAgICBhLmZyb21JbnQobG93cHJpbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpsb3dwcmltZXMubGVuZ3RoKV0pO1xuICAgICAgICB2YXIgeSA9IGEubW9kUG93KHIsdGhpcyk7XG4gICAgICAgIGlmKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICAgIHdoaWxlKGorKyA8IGsgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICAgIHkgPSB5Lm1vZFBvd0ludCgyLHRoaXMpO1xuICAgICAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpID09IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoeS5jb21wYXJlVG8objEpICE9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gcHJvdGVjdGVkXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2h1bmtTaXplID0gYm5wQ2h1bmtTaXplO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvUmFkaXggPSBibnBUb1JhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21SYWRpeCA9IGJucEZyb21SYWRpeDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tTnVtYmVyID0gYm5wRnJvbU51bWJlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXR3aXNlVG8gPSBibnBCaXR3aXNlVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2hhbmdlQml0ID0gYm5wQ2hhbmdlQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZFRvID0gYm5wQWRkVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZE11bHRpcGx5ID0gYm5wRE11bHRpcGx5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRBZGRPZmZzZXQgPSBibnBEQWRkT2Zmc2V0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5TG93ZXJUbyA9IGJucE11bHRpcGx5TG93ZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVVwcGVyVG8gPSBibnBNdWx0aXBseVVwcGVyVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW50ID0gYm5wTW9kSW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbGxlclJhYmluID0gYm5wTWlsbGVyUmFiaW47XG5cbiAgICAvLyBwdWJsaWNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbG9uZSA9IGJuQ2xvbmU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW50VmFsdWUgPSBibkludFZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJ5dGVWYWx1ZSA9IGJuQnl0ZVZhbHVlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNob3J0VmFsdWUgPSBiblNob3J0VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2lnbnVtID0gYm5TaWdOdW07XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9CeXRlQXJyYXkgPSBiblRvQnl0ZUFycmF5O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IGJuRXF1YWxzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbiA9IGJuTWluO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1heCA9IGJuTWF4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGJuQW5kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gYm5PcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBiblhvcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmROb3QgPSBibkFuZE5vdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBibk5vdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBiblNoaWZ0TGVmdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gYm5TaGlmdFJpZ2h0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdldExvd2VzdFNldEJpdCA9IGJuR2V0TG93ZXN0U2V0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdENvdW50ID0gYm5CaXRDb3VudDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50ZXN0Qml0ID0gYm5UZXN0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNldEJpdCA9IGJuU2V0Qml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsZWFyQml0ID0gYm5DbGVhckJpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mbGlwQml0ID0gYm5GbGlwQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGJuQWRkO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gYm5TdWJ0cmFjdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGJuTXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gYm5EaXZpZGU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gYm5SZW1haW5kZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlQW5kUmVtYWluZGVyID0gYm5EaXZpZGVBbmRSZW1haW5kZXI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gYm5Nb2RQb3c7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ZXJzZSA9IGJuTW9kSW52ZXJzZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBiblBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2QgPSBibkdDRDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBibklzUHJvYmFibGVQcmltZTtcblxuICAgIC8vIEpTQk4tc3BlY2lmaWMgZXh0ZW5zaW9uXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gYm5TcXVhcmU7XG5cbiAgICAvLyBFeHBvc2UgdGhlIEJhcnJldHQgZnVuY3Rpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5CYXJyZXR0ID0gQmFycmV0dFxuXG4gICAgLy8gQmlnSW50ZWdlciBpbnRlcmZhY2VzIG5vdCBpbXBsZW1lbnRlZCBpbiBqc2JuOlxuXG4gICAgLy8gQmlnSW50ZWdlcihpbnQgc2lnbnVtLCBieXRlW10gbWFnbml0dWRlKVxuICAgIC8vIGRvdWJsZSBkb3VibGVWYWx1ZSgpXG4gICAgLy8gZmxvYXQgZmxvYXRWYWx1ZSgpXG4gICAgLy8gaW50IGhhc2hDb2RlKClcbiAgICAvLyBsb25nIGxvbmdWYWx1ZSgpXG4gICAgLy8gc3RhdGljIEJpZ0ludGVnZXIgdmFsdWVPZihsb25nIHZhbClcblxuXHQvLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG5cblx0Ly8gRm9yIGJlc3QgcmVzdWx0cywgcHV0IGNvZGUgbGlrZVxuXHQvLyA8Ym9keSBvbkNsaWNrPSdybmdfc2VlZF90aW1lKCk7JyBvbktleVByZXNzPSdybmdfc2VlZF90aW1lKCk7Jz5cblx0Ly8gaW4geW91ciBtYWluIEhUTUwgZG9jdW1lbnQuXG5cblx0dmFyIHJuZ19zdGF0ZTtcblx0dmFyIHJuZ19wb29sO1xuXHR2YXIgcm5nX3BwdHI7XG5cblx0Ly8gTWl4IGluIGEgMzItYml0IGludGVnZXIgaW50byB0aGUgcG9vbFxuXHRmdW5jdGlvbiBybmdfc2VlZF9pbnQoeCkge1xuXHQgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49IHggJiAyNTU7XG5cdCAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gOCkgJiAyNTU7XG5cdCAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gMTYpICYgMjU1O1xuXHQgIHJuZ19wb29sW3JuZ19wcHRyKytdIF49ICh4ID4+IDI0KSAmIDI1NTtcblx0ICBpZihybmdfcHB0ciA+PSBybmdfcHNpemUpIHJuZ19wcHRyIC09IHJuZ19wc2l6ZTtcblx0fVxuXG5cdC8vIE1peCBpbiB0aGUgY3VycmVudCB0aW1lICh3L21pbGxpc2Vjb25kcykgaW50byB0aGUgcG9vbFxuXHRmdW5jdGlvbiBybmdfc2VlZF90aW1lKCkge1xuXHQgIHJuZ19zZWVkX2ludChuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIHRoZSBwb29sIHdpdGgganVuayBpZiBuZWVkZWQuXG5cdGlmKHJuZ19wb29sID09IG51bGwpIHtcblx0ICBybmdfcG9vbCA9IG5ldyBBcnJheSgpO1xuXHQgIHJuZ19wcHRyID0gMDtcblx0ICB2YXIgdDtcblx0ICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5jcnlwdG8pIHtcblx0XHRpZiAod2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcblx0XHQgIC8vIFVzZSB3ZWJjcnlwdG8gaWYgYXZhaWxhYmxlXG5cdFx0ICB2YXIgdWEgPSBuZXcgVWludDhBcnJheSgzMik7XG5cdFx0ICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh1YSk7XG5cdFx0ICBmb3IodCA9IDA7IHQgPCAzMjsgKyt0KVxuXHRcdFx0cm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB1YVt0XTtcblx0XHR9XG5cdFx0ZWxzZSBpZihuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk5ldHNjYXBlXCIgJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24gPCBcIjVcIikge1xuXHRcdCAgLy8gRXh0cmFjdCBlbnRyb3B5ICgyNTYgYml0cykgZnJvbSBOUzQgUk5HIGlmIGF2YWlsYWJsZVxuXHRcdCAgdmFyIHogPSB3aW5kb3cuY3J5cHRvLnJhbmRvbSgzMik7XG5cdFx0ICBmb3IodCA9IDA7IHQgPCB6Lmxlbmd0aDsgKyt0KVxuXHRcdFx0cm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB6LmNoYXJDb2RlQXQodCkgJiAyNTU7XG5cdFx0fVxuXHQgIH1cblx0ICB3aGlsZShybmdfcHB0ciA8IHJuZ19wc2l6ZSkgeyAgLy8gZXh0cmFjdCBzb21lIHJhbmRvbW5lc3MgZnJvbSBNYXRoLnJhbmRvbSgpXG5cdFx0dCA9IE1hdGguZmxvb3IoNjU1MzYgKiBNYXRoLnJhbmRvbSgpKTtcblx0XHRybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgPj4+IDg7XG5cdFx0cm5nX3Bvb2xbcm5nX3BwdHIrK10gPSB0ICYgMjU1O1xuXHQgIH1cblx0ICBybmdfcHB0ciA9IDA7XG5cdCAgcm5nX3NlZWRfdGltZSgpO1xuXHQgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5YKTtcblx0ICAvL3JuZ19zZWVkX2ludCh3aW5kb3cuc2NyZWVuWSk7XG5cdH1cblxuXHRmdW5jdGlvbiBybmdfZ2V0X2J5dGUoKSB7XG5cdCAgaWYocm5nX3N0YXRlID09IG51bGwpIHtcblx0XHRybmdfc2VlZF90aW1lKCk7XG5cdFx0cm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuXHRcdHJuZ19zdGF0ZS5pbml0KHJuZ19wb29sKTtcblx0XHRmb3Iocm5nX3BwdHIgPSAwOyBybmdfcHB0ciA8IHJuZ19wb29sLmxlbmd0aDsgKytybmdfcHB0cilcblx0XHQgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG5cdFx0cm5nX3BwdHIgPSAwO1xuXHRcdC8vcm5nX3Bvb2wgPSBudWxsO1xuXHQgIH1cblx0ICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuXHQgIHJldHVybiBybmdfc3RhdGUubmV4dCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcm5nX2dldF9ieXRlcyhiYSkge1xuXHQgIHZhciBpO1xuXHQgIGZvcihpID0gMDsgaSA8IGJhLmxlbmd0aDsgKytpKSBiYVtpXSA9IHJuZ19nZXRfYnl0ZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gU2VjdXJlUmFuZG9tKCkge31cblxuXHRTZWN1cmVSYW5kb20ucHJvdG90eXBlLm5leHRCeXRlcyA9IHJuZ19nZXRfYnl0ZXM7XG5cblx0Ly8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG5cblx0ZnVuY3Rpb24gQXJjZm91cigpIHtcblx0ICB0aGlzLmkgPSAwO1xuXHQgIHRoaXMuaiA9IDA7XG5cdCAgdGhpcy5TID0gbmV3IEFycmF5KCk7XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGFyY2ZvdXIgY29udGV4dCBmcm9tIGtleSwgYW4gYXJyYXkgb2YgaW50cywgZWFjaCBmcm9tIFswLi4yNTVdXG5cdGZ1bmN0aW9uIEFSQzRpbml0KGtleSkge1xuXHQgIHZhciBpLCBqLCB0O1xuXHQgIGZvcihpID0gMDsgaSA8IDI1NjsgKytpKVxuXHRcdHRoaXMuU1tpXSA9IGk7XG5cdCAgaiA9IDA7XG5cdCAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcblx0XHRqID0gKGogKyB0aGlzLlNbaV0gKyBrZXlbaSAlIGtleS5sZW5ndGhdKSAmIDI1NTtcblx0XHR0ID0gdGhpcy5TW2ldO1xuXHRcdHRoaXMuU1tpXSA9IHRoaXMuU1tqXTtcblx0XHR0aGlzLlNbal0gPSB0O1xuXHQgIH1cblx0ICB0aGlzLmkgPSAwO1xuXHQgIHRoaXMuaiA9IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBBUkM0bmV4dCgpIHtcblx0ICB2YXIgdDtcblx0ICB0aGlzLmkgPSAodGhpcy5pICsgMSkgJiAyNTU7XG5cdCAgdGhpcy5qID0gKHRoaXMuaiArIHRoaXMuU1t0aGlzLmldKSAmIDI1NTtcblx0ICB0ID0gdGhpcy5TW3RoaXMuaV07XG5cdCAgdGhpcy5TW3RoaXMuaV0gPSB0aGlzLlNbdGhpcy5qXTtcblx0ICB0aGlzLlNbdGhpcy5qXSA9IHQ7XG5cdCAgcmV0dXJuIHRoaXMuU1sodCArIHRoaXMuU1t0aGlzLmldKSAmIDI1NV07XG5cdH1cblxuXHRBcmNmb3VyLnByb3RvdHlwZS5pbml0ID0gQVJDNGluaXQ7XG5cdEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBBUkM0bmV4dDtcblxuXHQvLyBQbHVnIGluIHlvdXIgUk5HIGNvbnN0cnVjdG9yIGhlcmVcblx0ZnVuY3Rpb24gcHJuZ19uZXdzdGF0ZSgpIHtcblx0ICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcblx0fVxuXG5cdC8vIFBvb2wgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCBhbmQgZ3JlYXRlciB0aGFuIDMyLlxuXHQvLyBBbiBhcnJheSBvZiBieXRlcyB0aGUgc2l6ZSBvZiB0aGUgcG9vbCB3aWxsIGJlIHBhc3NlZCB0byBpbml0KClcblx0dmFyIHJuZ19wc2l6ZSA9IDI1NjtcblxuICBCaWdJbnRlZ2VyLlNlY3VyZVJhbmRvbSA9IFNlY3VyZVJhbmRvbTtcbiAgQmlnSW50ZWdlci5CaWdJbnRlZ2VyID0gQmlnSW50ZWdlcjtcbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IEJpZ0ludGVnZXI7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5CaWdJbnRlZ2VyID0gQmlnSW50ZWdlcjtcbiAgICB0aGlzLlNlY3VyZVJhbmRvbSA9IFNlY3VyZVJhbmRvbTtcbiAgfVxuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9qc2JuL2luZGV4LmpzIiwidmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpO1xuXG5mdW5jdGlvbiBwYWRkaW5nKHN0cikge1xuICB2YXIgbW9kID0gKHN0ci5sZW5ndGggJSA0KTtcbiAgdmFyIHBhZCA9IDQgLSBtb2Q7XG5cbiAgaWYgKG1vZCA9PT0gMCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICByZXR1cm4gc3RyICsgKG5ldyBBcnJheSgxICsgcGFkKSkuam9pbignPScpO1xufVxuXG5mdW5jdGlvbiBieXRlQXJyYXlUb1N0cmluZyhhcnJheSkge1xuICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFycmF5W2ldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVBcnJheShzdHIpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheShzdHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgYSA9IDA7IGEgPCBzdHIubGVuZ3RoOyBhKyspIHtcbiAgICBhcnJbYV0gPSBzdHIuY2hhckNvZGVBdChhKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBieXRlQXJyYXlUb0hleChyYXcpIHtcbiAgdmFyIEhFWCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9oZXggPSByYXdbaV0udG9TdHJpbmcoMTYpO1xuICAgIEhFWCArPSAoX2hleC5sZW5ndGggPT09IDIgPyBfaGV4IDogJzAnICsgX2hleCk7XG4gIH1cblxuICByZXR1cm4gSEVYO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShzdHJpbmdUb0J5dGVBcnJheShlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC8lKFswLTlBLUZdezJ9KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHAxKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoJzB4JyArIHAxKTtcbiAgfSkpKVxuICAucmVwbGFjZSgvXFwrL2csICctJykgLy8gQ29udmVydCAnKycgdG8gJy0nXG4gIC5yZXBsYWNlKC9cXC8vZywgJ18nKTsgLy8gQ29udmVydCAnLycgdG8gJ18nO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVUb1N0cmluZyhzdHIpIHtcbiAgc3RyID0gcGFkZGluZyhzdHIpXG4gICAgLnJlcGxhY2UoL1xcLS9nLCAnKycpIC8vIENvbnZlcnQgJy0nIHRvICcrJ1xuICAgIC5yZXBsYWNlKC9fL2csICcvJyk7IC8vIENvbnZlcnQgJ18nIHRvICcvJ1xuXG4gIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoYnl0ZUFycmF5VG9TdHJpbmcoYmFzZTY0LnRvQnl0ZUFycmF5KHN0cikpLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gJyUnICsgKCcwMCcgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gIH0pLmpvaW4oJycpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlVG9IRVgoc3RyKSB7XG4gIHJldHVybiBieXRlQXJyYXlUb0hleChiYXNlNjQudG9CeXRlQXJyYXkocGFkZGluZyhzdHIpKSk7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQmFzZTY0VXJsKGJhc2U2NFN0cmluZykge1xuICB2YXIgU0FGRV9VUkxfRU5DT0RJTkdfTUFQUElORyA9IHtcbiAgICBcIitcIjogXCItXCIsXG4gICAgXCIvXCI6IFwiX1wiLFxuICAgIFwiPVwiOiBcIlwiXG4gIH07XG5cbiAgcmV0dXJuIGJhc2U2NFN0cmluZy5yZXBsYWNlKC9bKy89XS9nLCBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIFNBRkVfVVJMX0VOQ09ESU5HX01BUFBJTkdbbV07XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW5jb2RlU3RyaW5nOiBlbmNvZGVTdHJpbmcsXG4gIGRlY29kZVRvU3RyaW5nOiBkZWNvZGVUb1N0cmluZyxcbiAgYnl0ZUFycmF5VG9TdHJpbmc6IGJ5dGVBcnJheVRvU3RyaW5nLFxuICBzdHJpbmdUb0J5dGVBcnJheTogc3RyaW5nVG9CeXRlQXJyYXksXG4gIHBhZGRpbmc6IHBhZGRpbmcsXG4gIGJ5dGVBcnJheVRvSGV4OiBieXRlQXJyYXlUb0hleCxcbiAgZGVjb2RlVG9IRVg6IGRlY29kZVRvSEVYLFxuICBiYXNlNjRUb0Jhc2U2NFVybDogYmFzZTY0VG9CYXNlNjRVcmxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2lkdG9rZW4tdmVyaWZpZXIvc3JjL2hlbHBlcnMvYmFzZTY0LmpzIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2Jhc2U2NC1qcy9pbmRleC5qcyIsInZhciB1cmxqb2luID0gcmVxdWlyZSgndXJsLWpvaW4nKTtcbnZhciBiYXNlNjQgPSByZXF1aXJlKCcuL2Jhc2U2NCcpO1xudmFyIHJlcXVlc3QgPSByZXF1aXJlKCdzdXBlcmFnZW50Jyk7XG5cbmZ1bmN0aW9uIHByb2Nlc3Moandrcykge1xuICB2YXIgbW9kdWx1cyA9IGJhc2U2NC5kZWNvZGVUb0hFWChqd2tzLm4pO1xuICB2YXIgZXhwID0gYmFzZTY0LmRlY29kZVRvSEVYKGp3a3MuZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtb2R1bHVzOiBtb2R1bHVzLFxuICAgIGV4cDogZXhwXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEpXS1Mob3B0aW9ucykge1xuICB2YXIgdXJsID0gb3B0aW9ucy5qd2tzVVJJIHx8IHVybGpvaW4ob3B0aW9ucy5pc3MsICcud2VsbC1rbm93bicsICdqd2tzLmpzb24nKTtcblxuICByZXR1cm4gcmVxdWVzdFxuICAgIC5nZXQodXJsKVxuICAgIC5lbmQoZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgdmFyIG1hdGNoaW5nS2V5ID0gbnVsbDtcbiAgICAgIHZhciBhO1xuICAgICAgdmFyIGtleTtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICBmb3IgKGEgPSAwOyBhIDwgZGF0YS5ib2R5LmtleXMubGVuZ3RoICYmIG1hdGNoaW5nS2V5ID09PSBudWxsOyBhKyspIHtcbiAgICAgICAga2V5ID0gZGF0YS5ib2R5LmtleXNbYV07XG4gICAgICAgIGlmIChrZXkua2lkID09PSBvcHRpb25zLmtpZCkge1xuICAgICAgICAgIG1hdGNoaW5nS2V5ID0ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvY2VzcyhtYXRjaGluZ0tleSkpO1xuICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvY2VzczogcHJvY2VzcyxcbiAgZ2V0SldLUzogZ2V0SldLU1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9qd2tzLmpzIiwiKGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pO1xuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKCk7XG59KSgndXJsam9pbicsIHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICBmdW5jdGlvbiBub3JtYWxpemUgKHN0ciwgb3B0aW9ucykge1xuXG4gICAgLy8gbWFrZSBzdXJlIHByb3RvY29sIGlzIGZvbGxvd2VkIGJ5IHR3byBzbGFzaGVzXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLzpcXC8vZywgJzovLycpO1xuXG4gICAgLy8gcmVtb3ZlIGNvbnNlY3V0aXZlIHNsYXNoZXNcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFteOlxcc10pXFwvKy9nLCAnJDEvJyk7XG5cbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2ggYmVmb3JlIHBhcmFtZXRlcnMgb3IgaGFzaFxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXC8oXFw/fCZ8I1teIV0pL2csICckMScpO1xuXG4gICAgLy8gcmVwbGFjZSA/IGluIHBhcmFtZXRlcnMgd2l0aCAmXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoLyhcXD8uKylcXD8vZywgJyQxJicpO1xuXG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0ID0gYXJndW1lbnRzO1xuICAgIHZhciBvcHRpb25zID0ge307XG5cbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIG5ldyBzeW50YXggd2l0aCBhcnJheSBhbmQgb3B0aW9uc1xuICAgICAgaW5wdXQgPSBhcmd1bWVudHNbMF07XG4gICAgICBvcHRpb25zID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIH1cblxuICAgIHZhciBqb2luZWQgPSBbXS5zbGljZS5jYWxsKGlucHV0LCAwKS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShqb2luZWQsIG9wdGlvbnMpO1xuICB9O1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdXJsLWpvaW4vbGliL3VybC1qb2luLmpzIiwiLyoqXG4gKiBSb290IHJlZmVyZW5jZSBmb3IgaWZyYW1lcy5cbiAqL1xuXG52YXIgcm9vdDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgeyAvLyBCcm93c2VyIHdpbmRvd1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gV2ViIFdvcmtlclxuICByb290ID0gc2VsZjtcbn0gZWxzZSB7IC8vIE90aGVyIGVudmlyb25tZW50c1xuICBjb25zb2xlLndhcm4oXCJVc2luZyBicm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGluIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuICByb290ID0gdGhpcztcbn1cblxudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIFJlcXVlc3RCYXNlID0gcmVxdWlyZSgnLi9yZXF1ZXN0LWJhc2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG52YXIgUmVzcG9uc2VCYXNlID0gcmVxdWlyZSgnLi9yZXNwb25zZS1iYXNlJyk7XG52YXIgQWdlbnQgPSByZXF1aXJlKCcuL2FnZW50LWJhc2UnKTtcblxuLyoqXG4gKiBOb29wLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9O1xuXG4vKipcbiAqIEV4cG9zZSBgcmVxdWVzdGAuXG4gKi9cblxudmFyIHJlcXVlc3QgPSBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXRob2QsIHVybCkge1xuICAvLyBjYWxsYmFja1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdXJsKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCkuZW5kKHVybCk7XG4gIH1cblxuICAvLyB1cmwgZmlyc3RcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgZXhwb3J0cy5SZXF1ZXN0KCdHRVQnLCBtZXRob2QpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QobWV0aG9kLCB1cmwpO1xufVxuXG5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIERldGVybWluZSBYSFIuXG4gKi9cblxucmVxdWVzdC5nZXRYSFIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChyb290LlhNTEh0dHBSZXF1ZXN0XG4gICAgICAmJiAoIXJvb3QubG9jYXRpb24gfHwgJ2ZpbGU6JyAhPSByb290LmxvY2F0aW9uLnByb3RvY29sXG4gICAgICAgICAgfHwgIXJvb3QuQWN0aXZlWE9iamVjdCkpIHtcbiAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0O1xuICB9IGVsc2Uge1xuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuNi4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQLjMuMCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gIH1cbiAgdGhyb3cgRXJyb3IoXCJCcm93c2VyLW9ubHkgdmVyc2lvbiBvZiBzdXBlcmFnZW50IGNvdWxkIG5vdCBmaW5kIFhIUlwiKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLCBhZGRlZCB0byBzdXBwb3J0IElFLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgdHJpbSA9ICcnLnRyaW1cbiAgPyBmdW5jdGlvbihzKSB7IHJldHVybiBzLnRyaW0oKTsgfVxuICA6IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqfFxccyokKS9nLCAnJyk7IH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBnaXZlbiBgb2JqYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUob2JqKSB7XG4gIGlmICghaXNPYmplY3Qob2JqKSkgcmV0dXJuIG9iajtcbiAgdmFyIHBhaXJzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCBvYmpba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuLyoqXG4gKiBIZWxwcyAnc2VyaWFsaXplJyB3aXRoIHNlcmlhbGl6aW5nIGFycmF5cy5cbiAqIE11dGF0ZXMgdGhlIHBhaXJzIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2YWwpIHtcbiAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgdmFsLmZvckVhY2goZnVuY3Rpb24odikge1xuICAgICAgICBwdXNoRW5jb2RlZEtleVZhbHVlUGFpcihwYWlycywga2V5LCB2KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgZm9yKHZhciBzdWJrZXkgaW4gdmFsKSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXkgKyAnWycgKyBzdWJrZXkgKyAnXScsIHZhbFtzdWJrZXldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KVxuICAgICAgICArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcGFpcnMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2Ugc2VyaWFsaXphdGlvbiBtZXRob2QuXG4gKi9cblxucmVxdWVzdC5zZXJpYWxpemVPYmplY3QgPSBzZXJpYWxpemU7XG5cbi8qKlxuICAqIFBhcnNlIHRoZSBnaXZlbiB4LXd3dy1mb3JtLXVybGVuY29kZWQgYHN0cmAuXG4gICpcbiAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICogQHJldHVybiB7T2JqZWN0fVxuICAqIEBhcGkgcHJpdmF0ZVxuICAqL1xuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHIpIHtcbiAgdmFyIG9iaiA9IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoJyYnKTtcbiAgdmFyIHBhaXI7XG4gIHZhciBwb3M7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhaXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgcGFpciA9IHBhaXJzW2ldO1xuICAgIHBvcyA9IHBhaXIuaW5kZXhPZignPScpO1xuICAgIGlmIChwb3MgPT0gLTEpIHtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFpcildID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZSgwLCBwb3MpKV0gPVxuICAgICAgICBkZWNvZGVVUklDb21wb25lbnQocGFpci5zbGljZShwb3MgKyAxKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHBvc2UgcGFyc2VyLlxuICovXG5cbnJlcXVlc3QucGFyc2VTdHJpbmcgPSBwYXJzZVN0cmluZztcblxuLyoqXG4gKiBEZWZhdWx0IE1JTUUgdHlwZSBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICovXG5cbnJlcXVlc3QudHlwZXMgPSB7XG4gIGh0bWw6ICd0ZXh0L2h0bWwnLFxuICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gIHhtbDogJ3RleHQveG1sJyxcbiAgdXJsZW5jb2RlZDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICdmb3JtLWRhdGEnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IHNlcmlhbGl6YXRpb24gbWFwLlxuICpcbiAqICAgICBzdXBlcmFnZW50LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihvYmope1xuICogICAgICAgcmV0dXJuICdnZW5lcmF0ZWQgeG1sIGhlcmUnO1xuICogICAgIH07XG4gKlxuICovXG5cbnJlcXVlc3Quc2VyaWFsaXplID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogc2VyaWFsaXplLFxuICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5XG59O1xuXG4vKipcbiAgKiBEZWZhdWx0IHBhcnNlcnMuXG4gICpcbiAgKiAgICAgc3VwZXJhZ2VudC5wYXJzZVsnYXBwbGljYXRpb24veG1sJ10gPSBmdW5jdGlvbihzdHIpe1xuICAqICAgICAgIHJldHVybiB7IG9iamVjdCBwYXJzZWQgZnJvbSBzdHIgfTtcbiAgKiAgICAgfTtcbiAgKlxuICAqL1xuXG5yZXF1ZXN0LnBhcnNlID0ge1xuICAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzogcGFyc2VTdHJpbmcsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5wYXJzZVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gaGVhZGVyIGBzdHJgIGludG9cbiAqIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtYXBwZWQgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHN0cikge1xuICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoL1xccj9cXG4vKTtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgaW5kZXg7XG4gIHZhciBsaW5lO1xuICB2YXIgZmllbGQ7XG4gIHZhciB2YWw7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgbGluZSA9IGxpbmVzW2ldO1xuICAgIGluZGV4ID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgeyAvLyBjb3VsZCBiZSBlbXB0eSBsaW5lLCBqdXN0IHNraXAgaXRcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmaWVsZCA9IGxpbmUuc2xpY2UoMCwgaW5kZXgpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdHJpbShsaW5lLnNsaWNlKGluZGV4ICsgMSkpO1xuICAgIGZpZWxkc1tmaWVsZF0gPSB2YWw7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBtaW1lYCBpcyBqc29uIG9yIGhhcyAranNvbiBzdHJ1Y3R1cmVkIHN5bnRheCBzdWZmaXguXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1pbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0pTT04obWltZSkge1xuICAvLyBzaG91bGQgbWF0Y2ggL2pzb24gb3IgK2pzb25cbiAgLy8gYnV0IG5vdCAvanNvbi1zZXFcbiAgcmV0dXJuIC9bXFwvK11qc29uKCR8W14tXFx3XSkvLnRlc3QobWltZSk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VgIHdpdGggdGhlIGdpdmVuIGB4aHJgLlxuICpcbiAqICAtIHNldCBmbGFncyAoLm9rLCAuZXJyb3IsIGV0YylcbiAqICAtIHBhcnNlIGhlYWRlclxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICBBbGlhc2luZyBgc3VwZXJhZ2VudGAgYXMgYHJlcXVlc3RgIGlzIG5pY2U6XG4gKlxuICogICAgICByZXF1ZXN0ID0gc3VwZXJhZ2VudDtcbiAqXG4gKiAgV2UgY2FuIHVzZSB0aGUgcHJvbWlzZS1saWtlIEFQSSwgb3IgcGFzcyBjYWxsYmFja3M6XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnLycpLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICogICAgICByZXF1ZXN0LmdldCgnLycsIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIFNlbmRpbmcgZGF0YSBjYW4gYmUgY2hhaW5lZDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgT3IgcGFzc2VkIHRvIGAuc2VuZCgpYDpcbiAqXG4gKiAgICAgIHJlcXVlc3RcbiAqICAgICAgICAucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5wb3N0KClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgIC5lbmQoZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiBPciBmdXJ0aGVyIHJlZHVjZWQgdG8gYSBzaW5nbGUgY2FsbCBmb3Igc2ltcGxlIGNhc2VzOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicsIHsgbmFtZTogJ3RqJyB9LCBmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIEBwYXJhbSB7WE1MSFRUUFJlcXVlc3R9IHhoclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlKHJlcSkge1xuICB0aGlzLnJlcSA9IHJlcTtcbiAgdGhpcy54aHIgPSB0aGlzLnJlcS54aHI7XG4gIC8vIHJlc3BvbnNlVGV4dCBpcyBhY2Nlc3NpYmxlIG9ubHkgaWYgcmVzcG9uc2VUeXBlIGlzICcnIG9yICd0ZXh0JyBhbmQgb24gb2xkZXIgYnJvd3NlcnNcbiAgdGhpcy50ZXh0ID0gKCh0aGlzLnJlcS5tZXRob2QgIT0nSEVBRCcgJiYgKHRoaXMueGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgfHwgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcpKSB8fCB0eXBlb2YgdGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAndW5kZWZpbmVkJylcbiAgICAgPyB0aGlzLnhoci5yZXNwb25zZVRleHRcbiAgICAgOiBudWxsO1xuICB0aGlzLnN0YXR1c1RleHQgPSB0aGlzLnJlcS54aHIuc3RhdHVzVGV4dDtcbiAgdmFyIHN0YXR1cyA9IHRoaXMueGhyLnN0YXR1cztcbiAgLy8gaGFuZGxlIElFOSBidWc6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTAwNDY5NzIvbXNpZS1yZXR1cm5zLXN0YXR1cy1jb2RlLW9mLTEyMjMtZm9yLWFqYXgtcmVxdWVzdFxuICBpZiAoc3RhdHVzID09PSAxMjIzKSB7XG4gICAgc3RhdHVzID0gMjA0O1xuICB9XG4gIHRoaXMuX3NldFN0YXR1c1Byb3BlcnRpZXMoc3RhdHVzKTtcbiAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlcnMgPSBwYXJzZUhlYWRlcih0aGlzLnhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7XG4gIC8vIGdldEFsbFJlc3BvbnNlSGVhZGVycyBzb21ldGltZXMgZmFsc2VseSByZXR1cm5zIFwiXCIgZm9yIENPUlMgcmVxdWVzdHMsIGJ1dFxuICAvLyBnZXRSZXNwb25zZUhlYWRlciBzdGlsbCB3b3Jrcy4gc28gd2UgZ2V0IGNvbnRlbnQtdHlwZSBldmVuIGlmIGdldHRpbmdcbiAgLy8gb3RoZXIgaGVhZGVycyBmYWlscy5cbiAgdGhpcy5oZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpO1xuICB0aGlzLl9zZXRIZWFkZXJQcm9wZXJ0aWVzKHRoaXMuaGVhZGVyKTtcblxuICBpZiAobnVsbCA9PT0gdGhpcy50ZXh0ICYmIHJlcS5fcmVzcG9uc2VUeXBlKSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy54aHIucmVzcG9uc2U7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy5yZXEubWV0aG9kICE9ICdIRUFEJ1xuICAgICAgPyB0aGlzLl9wYXJzZUJvZHkodGhpcy50ZXh0ID8gdGhpcy50ZXh0IDogdGhpcy54aHIucmVzcG9uc2UpXG4gICAgICA6IG51bGw7XG4gIH1cbn1cblxuUmVzcG9uc2VCYXNlKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGJvZHkgYHN0cmAuXG4gKlxuICogVXNlZCBmb3IgYXV0by1wYXJzaW5nIG9mIGJvZGllcy4gUGFyc2Vyc1xuICogYXJlIGRlZmluZWQgb24gdGhlIGBzdXBlcmFnZW50LnBhcnNlYCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUuX3BhcnNlQm9keSA9IGZ1bmN0aW9uKHN0cikge1xuICB2YXIgcGFyc2UgPSByZXF1ZXN0LnBhcnNlW3RoaXMudHlwZV07XG4gIGlmICh0aGlzLnJlcS5fcGFyc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxLl9wYXJzZXIodGhpcywgc3RyKTtcbiAgfVxuICBpZiAoIXBhcnNlICYmIGlzSlNPTih0aGlzLnR5cGUpKSB7XG4gICAgcGFyc2UgPSByZXF1ZXN0LnBhcnNlWydhcHBsaWNhdGlvbi9qc29uJ107XG4gIH1cbiAgcmV0dXJuIHBhcnNlICYmIHN0ciAmJiAoc3RyLmxlbmd0aCB8fCBzdHIgaW5zdGFuY2VvZiBPYmplY3QpXG4gICAgPyBwYXJzZShzdHIpXG4gICAgOiBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYW4gYEVycm9yYCByZXByZXNlbnRhdGl2ZSBvZiB0aGlzIHJlc3BvbnNlLlxuICpcbiAqIEByZXR1cm4ge0Vycm9yfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZS5wcm90b3R5cGUudG9FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciByZXEgPSB0aGlzLnJlcTtcbiAgdmFyIG1ldGhvZCA9IHJlcS5tZXRob2Q7XG4gIHZhciB1cmwgPSByZXEudXJsO1xuXG4gIHZhciBtc2cgPSAnY2Fubm90ICcgKyBtZXRob2QgKyAnICcgKyB1cmwgKyAnICgnICsgdGhpcy5zdGF0dXMgKyAnKSc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gbWV0aG9kO1xuICBlcnIudXJsID0gdXJsO1xuXG4gIHJldHVybiBlcnI7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VgLlxuICovXG5cbnJlcXVlc3QuUmVzcG9uc2UgPSBSZXNwb25zZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0YCB3aXRoIHRoZSBnaXZlbiBgbWV0aG9kYCBhbmQgYHVybGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0KG1ldGhvZCwgdXJsKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fcXVlcnkgPSB0aGlzLl9xdWVyeSB8fCBbXTtcbiAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gIHRoaXMudXJsID0gdXJsO1xuICB0aGlzLmhlYWRlciA9IHt9OyAvLyBwcmVzZXJ2ZXMgaGVhZGVyIG5hbWUgY2FzZVxuICB0aGlzLl9oZWFkZXIgPSB7fTsgLy8gY29lcmNlcyBoZWFkZXIgbmFtZXMgdG8gbG93ZXJjYXNlXG4gIHRoaXMub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGVyciA9IG51bGw7XG4gICAgdmFyIHJlcyA9IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gbmV3IFJlc3BvbnNlKHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgZXJyID0gbmV3IEVycm9yKCdQYXJzZXIgaXMgdW5hYmxlIHRvIHBhcnNlIHRoZSByZXNwb25zZScpO1xuICAgICAgZXJyLnBhcnNlID0gdHJ1ZTtcbiAgICAgIGVyci5vcmlnaW5hbCA9IGU7XG4gICAgICAvLyBpc3N1ZSAjNjc1OiByZXR1cm4gdGhlIHJhdyByZXNwb25zZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgaWYgKHNlbGYueGhyKSB7XG4gICAgICAgIC8vIGllOSBkb2Vzbid0IGhhdmUgJ3Jlc3BvbnNlJyBwcm9wZXJ0eVxuICAgICAgICBlcnIucmF3UmVzcG9uc2UgPSB0eXBlb2Ygc2VsZi54aHIucmVzcG9uc2VUeXBlID09ICd1bmRlZmluZWQnID8gc2VsZi54aHIucmVzcG9uc2VUZXh0IDogc2VsZi54aHIucmVzcG9uc2U7XG4gICAgICAgIC8vIGlzc3VlICM4NzY6IHJldHVybiB0aGUgaHR0cCBzdGF0dXMgY29kZSBpZiB0aGUgcmVzcG9uc2UgcGFyc2luZyBmYWlsc1xuICAgICAgICBlcnIuc3RhdHVzID0gc2VsZi54aHIuc3RhdHVzID8gc2VsZi54aHIuc3RhdHVzIDogbnVsbDtcbiAgICAgICAgZXJyLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzOyAvLyBiYWNrd2FyZHMtY29tcGF0IG9ubHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVyci5yYXdSZXNwb25zZSA9IG51bGw7XG4gICAgICAgIGVyci5zdGF0dXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZi5jYWxsYmFjayhlcnIpO1xuICAgIH1cblxuICAgIHNlbGYuZW1pdCgncmVzcG9uc2UnLCByZXMpO1xuXG4gICAgdmFyIG5ld19lcnI7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghc2VsZi5faXNSZXNwb25zZU9LKHJlcykpIHtcbiAgICAgICAgbmV3X2VyciA9IG5ldyBFcnJvcihyZXMuc3RhdHVzVGV4dCB8fCAnVW5zdWNjZXNzZnVsIEhUVFAgcmVzcG9uc2UnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGN1c3RvbV9lcnIpIHtcbiAgICAgIG5ld19lcnIgPSBjdXN0b21fZXJyOyAvLyBvaygpIGNhbGxiYWNrIGNhbiB0aHJvd1xuICAgIH1cblxuICAgIC8vICMxMDAwIGRvbid0IGNhdGNoIGVycm9ycyBmcm9tIHRoZSBjYWxsYmFjayB0byBhdm9pZCBkb3VibGUgY2FsbGluZyBpdFxuICAgIGlmIChuZXdfZXJyKSB7XG4gICAgICBuZXdfZXJyLm9yaWdpbmFsID0gZXJyO1xuICAgICAgbmV3X2Vyci5yZXNwb25zZSA9IHJlcztcbiAgICAgIG5ld19lcnIuc3RhdHVzID0gcmVzLnN0YXR1cztcbiAgICAgIHNlbGYuY2FsbGJhY2sobmV3X2VyciwgcmVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5jYWxsYmFjayhudWxsLCByZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogTWl4aW4gYEVtaXR0ZXJgIGFuZCBgUmVxdWVzdEJhc2VgLlxuICovXG5cbkVtaXR0ZXIoUmVxdWVzdC5wcm90b3R5cGUpO1xuUmVxdWVzdEJhc2UoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNldCBDb250ZW50LVR5cGUgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMueG1sID0gJ2FwcGxpY2F0aW9uL3htbCc7XG4gKlxuICogICAgICByZXF1ZXN0LnBvc3QoJy8nKVxuICogICAgICAgIC50eXBlKCd4bWwnKVxuICogICAgICAgIC5zZW5kKHhtbHN0cmluZylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUudHlwZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBY2NlcHQgdG8gYHR5cGVgLCBtYXBwaW5nIHZhbHVlcyBmcm9tIGByZXF1ZXN0LnR5cGVzYC5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHN1cGVyYWdlbnQudHlwZXMuanNvbiA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvYWdlbnQnKVxuICogICAgICAgIC5hY2NlcHQoJ2pzb24nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFjY2VwdFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFjY2VwdCA9IGZ1bmN0aW9uKHR5cGUpe1xuICB0aGlzLnNldCgnQWNjZXB0JywgcmVxdWVzdC50eXBlc1t0eXBlXSB8fCB0eXBlKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBBdXRob3JpemF0aW9uIGZpZWxkIHZhbHVlIHdpdGggYHVzZXJgIGFuZCBgcGFzc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVzZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBbcGFzc10gb3B0aW9uYWwgaW4gY2FzZSBvZiB1c2luZyAnYmVhcmVyJyBhcyB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyB3aXRoICd0eXBlJyBwcm9wZXJ0eSAnYXV0bycsICdiYXNpYycgb3IgJ2JlYXJlcicgKGRlZmF1bHQgJ2Jhc2ljJylcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcywgb3B0aW9ucyl7XG4gIGlmICgxID09PSBhcmd1bWVudHMubGVuZ3RoKSBwYXNzID0gJyc7XG4gIGlmICh0eXBlb2YgcGFzcyA9PT0gJ29iamVjdCcgJiYgcGFzcyAhPT0gbnVsbCkgeyAvLyBwYXNzIGlzIG9wdGlvbmFsIGFuZCBjYW4gYmUgcmVwbGFjZWQgd2l0aCBvcHRpb25zXG4gICAgb3B0aW9ucyA9IHBhc3M7XG4gICAgcGFzcyA9ICcnO1xuICB9XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiAnZnVuY3Rpb24nID09PSB0eXBlb2YgYnRvYSA/ICdiYXNpYycgOiAnYXV0bycsXG4gICAgfTtcbiAgfVxuXG4gIHZhciBlbmNvZGVyID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBidG9hKSB7XG4gICAgICByZXR1cm4gYnRvYShzdHJpbmcpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgYmFzaWMgYXV0aCwgYnRvYSBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9O1xuXG4gIHJldHVybiB0aGlzLl9hdXRoKHVzZXIsIHBhc3MsIG9wdGlvbnMsIGVuY29kZXIpO1xufTtcblxuLyoqXG4gKiBBZGQgcXVlcnktc3RyaW5nIGB2YWxgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgcmVxdWVzdC5nZXQoJy9zaG9lcycpXG4gKiAgICAgLnF1ZXJ5KCdzaXplPTEwJylcbiAqICAgICAucXVlcnkoeyBjb2xvcjogJ2JsdWUnIH0pXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHZhbCl7XG4gIGlmICgnc3RyaW5nJyAhPSB0eXBlb2YgdmFsKSB2YWwgPSBzZXJpYWxpemUodmFsKTtcbiAgaWYgKHZhbCkgdGhpcy5fcXVlcnkucHVzaCh2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUXVldWUgdGhlIGdpdmVuIGBmaWxlYCBhcyBhbiBhdHRhY2htZW50IHRvIHRoZSBzcGVjaWZpZWQgYGZpZWxkYCxcbiAqIHdpdGggb3B0aW9uYWwgYG9wdGlvbnNgIChvciBmaWxlbmFtZSkuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuYXR0YWNoKCdjb250ZW50JywgbmV3IEJsb2IoWyc8YSBpZD1cImFcIj48YiBpZD1cImJcIj5oZXkhPC9iPjwvYT4nXSwgeyB0eXBlOiBcInRleHQvaHRtbFwifSkpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKiBAcGFyYW0ge0Jsb2J8RmlsZX0gZmlsZVxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24oZmllbGQsIGZpbGUsIG9wdGlvbnMpe1xuICBpZiAoZmlsZSkge1xuICAgIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgICB0aHJvdyBFcnJvcihcInN1cGVyYWdlbnQgY2FuJ3QgbWl4IC5zZW5kKCkgYW5kIC5hdHRhY2goKVwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChmaWVsZCwgZmlsZSwgb3B0aW9ucyB8fCBmaWxlLm5hbWUpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2dldEZvcm1EYXRhID0gZnVuY3Rpb24oKXtcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSkge1xuICAgIHRoaXMuX2Zvcm1EYXRhID0gbmV3IHJvb3QuRm9ybURhdGEoKTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZm9ybURhdGE7XG59O1xuXG4vKipcbiAqIEludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCBgZXJyYCBhbmQgYHJlc2BcbiAqIGFuZCBoYW5kbGUgYXJpdHkgY2hlY2suXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNhbGxiYWNrID0gZnVuY3Rpb24oZXJyLCByZXMpe1xuICBpZiAodGhpcy5fc2hvdWxkUmV0cnkoZXJyLCByZXMpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JldHJ5KCk7XG4gIH1cblxuICB2YXIgZm4gPSB0aGlzLl9jYWxsYmFjaztcbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcblxuICBpZiAoZXJyKSB7XG4gICAgaWYgKHRoaXMuX21heFJldHJpZXMpIGVyci5yZXRyaWVzID0gdGhpcy5fcmV0cmllcyAtIDE7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIH1cblxuICBmbihlcnIsIHJlcyk7XG59O1xuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHgtZG9tYWluIGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNyb3NzRG9tYWluRXJyb3IgPSBmdW5jdGlvbigpe1xuICB2YXIgZXJyID0gbmV3IEVycm9yKCdSZXF1ZXN0IGhhcyBiZWVuIHRlcm1pbmF0ZWRcXG5Qb3NzaWJsZSBjYXVzZXM6IHRoZSBuZXR3b3JrIGlzIG9mZmxpbmUsIE9yaWdpbiBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4sIHRoZSBwYWdlIGlzIGJlaW5nIHVubG9hZGVkLCBldGMuJyk7XG4gIGVyci5jcm9zc0RvbWFpbiA9IHRydWU7XG5cbiAgZXJyLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xuICBlcnIubWV0aG9kID0gdGhpcy5tZXRob2Q7XG4gIGVyci51cmwgPSB0aGlzLnVybDtcblxuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG4vLyBUaGlzIG9ubHkgd2FybnMsIGJlY2F1c2UgdGhlIHJlcXVlc3QgaXMgc3RpbGwgbGlrZWx5IHRvIHdvcmtcblJlcXVlc3QucHJvdG90eXBlLmJ1ZmZlciA9IFJlcXVlc3QucHJvdG90eXBlLmNhID0gUmVxdWVzdC5wcm90b3R5cGUuYWdlbnQgPSBmdW5jdGlvbigpe1xuICBjb25zb2xlLndhcm4oXCJUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlciB2ZXJzaW9uIG9mIHN1cGVyYWdlbnRcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gVGhpcyB0aHJvd3MsIGJlY2F1c2UgaXQgY2FuJ3Qgc2VuZC9yZWNlaXZlIGRhdGEgYXMgZXhwZWN0ZWRcblJlcXVlc3QucHJvdG90eXBlLnBpcGUgPSBSZXF1ZXN0LnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKCl7XG4gIHRocm93IEVycm9yKFwiU3RyZWFtaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gYnJvd3NlciB2ZXJzaW9uIG9mIHN1cGVyYWdlbnRcIik7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgaG9zdCBvYmplY3QsXG4gKiB3ZSBkb24ndCB3YW50IHRvIHNlcmlhbGl6ZSB0aGVzZSA6KVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUmVxdWVzdC5wcm90b3R5cGUuX2lzSG9zdCA9IGZ1bmN0aW9uIF9pc0hvc3Qob2JqKSB7XG4gIC8vIE5hdGl2ZSBvYmplY3RzIHN0cmluZ2lmeSB0byBbb2JqZWN0IEZpbGVdLCBbb2JqZWN0IEJsb2JdLCBbb2JqZWN0IEZvcm1EYXRhXSwgZXRjLlxuICByZXR1cm4gb2JqICYmICdvYmplY3QnID09PSB0eXBlb2Ygb2JqICYmICFBcnJheS5pc0FycmF5KG9iaikgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuXG4vKipcbiAqIEluaXRpYXRlIHJlcXVlc3QsIGludm9raW5nIGNhbGxiYWNrIGBmbihyZXMpYFxuICogd2l0aCBhbiBpbnN0YW5jZW9mIGBSZXNwb25zZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihmbil7XG4gIGlmICh0aGlzLl9lbmRDYWxsZWQpIHtcbiAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiAuZW5kKCkgd2FzIGNhbGxlZCB0d2ljZS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkIGluIHN1cGVyYWdlbnRcIik7XG4gIH1cbiAgdGhpcy5fZW5kQ2FsbGVkID0gdHJ1ZTtcblxuICAvLyBzdG9yZSBjYWxsYmFja1xuICB0aGlzLl9jYWxsYmFjayA9IGZuIHx8IG5vb3A7XG5cbiAgLy8gcXVlcnlzdHJpbmdcbiAgdGhpcy5fZmluYWxpemVRdWVyeVN0cmluZygpO1xuXG4gIHJldHVybiB0aGlzLl9lbmQoKTtcbn07XG5cblJlcXVlc3QucHJvdG90eXBlLl9lbmQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgeGhyID0gKHRoaXMueGhyID0gcmVxdWVzdC5nZXRYSFIoKSk7XG4gIHZhciBkYXRhID0gdGhpcy5fZm9ybURhdGEgfHwgdGhpcy5fZGF0YTtcblxuICB0aGlzLl9zZXRUaW1lb3V0cygpO1xuXG4gIC8vIHN0YXRlIGNoYW5nZVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcmVhZHlTdGF0ZSA9IHhoci5yZWFkeVN0YXRlO1xuICAgIGlmIChyZWFkeVN0YXRlID49IDIgJiYgc2VsZi5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gICAgfVxuICAgIGlmICg0ICE9IHJlYWR5U3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJbiBJRTksIHJlYWRzIHRvIGFueSBwcm9wZXJ0eSAoZS5nLiBzdGF0dXMpIG9mZiBvZiBhbiBhYm9ydGVkIFhIUiB3aWxsXG4gICAgLy8gcmVzdWx0IGluIHRoZSBlcnJvciBcIkNvdWxkIG5vdCBjb21wbGV0ZSB0aGUgb3BlcmF0aW9uIGR1ZSB0byBlcnJvciBjMDBjMDIzZlwiXG4gICAgdmFyIHN0YXR1cztcbiAgICB0cnkgeyBzdGF0dXMgPSB4aHIuc3RhdHVzIH0gY2F0Y2goZSkgeyBzdGF0dXMgPSAwOyB9XG5cbiAgICBpZiAoIXN0YXR1cykge1xuICAgICAgaWYgKHNlbGYudGltZWRvdXQgfHwgc2VsZi5fYWJvcnRlZCkgcmV0dXJuO1xuICAgICAgcmV0dXJuIHNlbGYuY3Jvc3NEb21haW5FcnJvcigpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoJ2VuZCcpO1xuICB9O1xuXG4gIC8vIHByb2dyZXNzXG4gIHZhciBoYW5kbGVQcm9ncmVzcyA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgZSkge1xuICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgZS5wZXJjZW50ID0gZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwO1xuICAgIH1cbiAgICBlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICBzZWxmLmVtaXQoJ3Byb2dyZXNzJywgZSk7XG4gIH07XG4gIGlmICh0aGlzLmhhc0xpc3RlbmVycygncHJvZ3Jlc3MnKSkge1xuICAgIHRyeSB7XG4gICAgICB4aHIub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ2Rvd25sb2FkJyk7XG4gICAgICBpZiAoeGhyLnVwbG9hZCkge1xuICAgICAgICB4aHIudXBsb2FkLm9ucHJvZ3Jlc3MgPSBoYW5kbGVQcm9ncmVzcy5iaW5kKG51bGwsICd1cGxvYWQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIC8vIEFjY2Vzc2luZyB4aHIudXBsb2FkIGZhaWxzIGluIElFIGZyb20gYSB3ZWIgd29ya2VyLCBzbyBqdXN0IHByZXRlbmQgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgIC8vIFJlcG9ydGVkIGhlcmU6XG4gICAgICAvLyBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzgzNzI0NS94bWxodHRwcmVxdWVzdC11cGxvYWQtdGhyb3dzLWludmFsaWQtYXJndW1lbnQtd2hlbi11c2VkLWZyb20td2ViLXdvcmtlci1jb250ZXh0XG4gICAgfVxuICB9XG5cbiAgLy8gaW5pdGlhdGUgcmVxdWVzdFxuICB0cnkge1xuICAgIGlmICh0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSwgdGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBzZWUgIzExNDlcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhlcnIpO1xuICB9XG5cbiAgLy8gQ09SU1xuICBpZiAodGhpcy5fd2l0aENyZWRlbnRpYWxzKSB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAvLyBib2R5XG4gIGlmICghdGhpcy5fZm9ybURhdGEgJiYgJ0dFVCcgIT0gdGhpcy5tZXRob2QgJiYgJ0hFQUQnICE9IHRoaXMubWV0aG9kICYmICdzdHJpbmcnICE9IHR5cGVvZiBkYXRhICYmICF0aGlzLl9pc0hvc3QoZGF0YSkpIHtcbiAgICAvLyBzZXJpYWxpemUgc3R1ZmZcbiAgICB2YXIgY29udGVudFR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuICAgIHZhciBzZXJpYWxpemUgPSB0aGlzLl9zZXJpYWxpemVyIHx8IHJlcXVlc3Quc2VyaWFsaXplW2NvbnRlbnRUeXBlID8gY29udGVudFR5cGUuc3BsaXQoJzsnKVswXSA6ICcnXTtcbiAgICBpZiAoIXNlcmlhbGl6ZSAmJiBpc0pTT04oY29udGVudFR5cGUpKSB7XG4gICAgICBzZXJpYWxpemUgPSByZXF1ZXN0LnNlcmlhbGl6ZVsnYXBwbGljYXRpb24vanNvbiddO1xuICAgIH1cbiAgICBpZiAoc2VyaWFsaXplKSBkYXRhID0gc2VyaWFsaXplKGRhdGEpO1xuICB9XG5cbiAgLy8gc2V0IGhlYWRlciBmaWVsZHNcbiAgZm9yICh2YXIgZmllbGQgaW4gdGhpcy5oZWFkZXIpIHtcbiAgICBpZiAobnVsbCA9PSB0aGlzLmhlYWRlcltmaWVsZF0pIGNvbnRpbnVlO1xuXG4gICAgaWYgKHRoaXMuaGVhZGVyLmhhc093blByb3BlcnR5KGZpZWxkKSlcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGZpZWxkLCB0aGlzLmhlYWRlcltmaWVsZF0pO1xuICB9XG5cbiAgaWYgKHRoaXMuX3Jlc3BvbnNlVHlwZSkge1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLl9yZXNwb25zZVR5cGU7XG4gIH1cblxuICAvLyBzZW5kIHN0dWZmXG4gIHRoaXMuZW1pdCgncmVxdWVzdCcsIHRoaXMpO1xuXG4gIC8vIElFMTEgeGhyLnNlbmQodW5kZWZpbmVkKSBzZW5kcyAndW5kZWZpbmVkJyBzdHJpbmcgYXMgUE9TVCBwYXlsb2FkIChpbnN0ZWFkIG9mIG5vdGhpbmcpXG4gIC8vIFdlIG5lZWQgbnVsbCBoZXJlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gIHhoci5zZW5kKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJyA/IGRhdGEgOiBudWxsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5yZXF1ZXN0LmFnZW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgQWdlbnQoKTtcbn07XG5cbltcIkdFVFwiLCBcIlBPU1RcIiwgXCJPUFRJT05TXCIsIFwiUEFUQ0hcIiwgXCJQVVRcIiwgXCJERUxFVEVcIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgQWdlbnQucHJvdG90eXBlW21ldGhvZC50b0xvd2VyQ2FzZSgpXSA9IGZ1bmN0aW9uKHVybCwgZm4pIHtcbiAgICB2YXIgcmVxID0gbmV3IHJlcXVlc3QuUmVxdWVzdChtZXRob2QsIHVybCk7XG4gICAgdGhpcy5fc2V0RGVmYXVsdHMocmVxKTtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHJlcS5lbmQoZm4pO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xuICB9O1xufSk7XG5cbkFnZW50LnByb3RvdHlwZS5kZWwgPSBBZ2VudC5wcm90b3R5cGVbJ2RlbGV0ZSddO1xuXG4vKipcbiAqIEdFVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QuZ2V0ID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnR0VUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBIRUFEIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5oZWFkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnSEVBRCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5xdWVyeShkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogT1BUSU9OUyBxdWVyeSB0byBgdXJsYCB3aXRoIG9wdGlvbmFsIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfEZ1bmN0aW9ufSBbZGF0YV0gb3IgZm5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3Qub3B0aW9ucyA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ09QVElPTlMnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogREVMRVRFIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkZWwodXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnREVMRVRFJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59XG5cbnJlcXVlc3RbJ2RlbCddID0gZGVsO1xucmVxdWVzdFsnZGVsZXRlJ10gPSBkZWw7XG5cbi8qKlxuICogUEFUQ0ggYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucGF0Y2ggPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQQVRDSCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBQT1NUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZH0gW2RhdGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnBvc3QgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQT1NUJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBVVCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wdXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdQVVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N1cGVyYWdlbnQvbGliL2NsaWVudC5qcyIsIlxyXG4vKipcclxuICogRXhwb3NlIGBFbWl0dGVyYC5cclxuICovXHJcblxyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cclxuICpcclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xyXG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcclxuICogQHJldHVybiB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcclxuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcclxuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcclxuICB9XHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuLyoqXHJcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cclxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gICh0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXSlcclxuICAgIC5wdXNoKGZuKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcclxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgZnVuY3Rpb24gb24oKSB7XHJcbiAgICB0aGlzLm9mZihldmVudCwgb24pO1xyXG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9XHJcblxyXG4gIG9uLmZuID0gZm47XHJcbiAgdGhpcy5vbihldmVudCwgb24pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXHJcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgLy8gYWxsXHJcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHNwZWNpZmljIGV2ZW50XHJcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xyXG5cclxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXHJcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXHJcbiAgdmFyIGNiO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcclxuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XHJcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIG9mIG1peGVkLWluIGZ1bmN0aW9ucyBzaGFyZWQgYmV0d2VlbiBub2RlIGFuZCBjbGllbnQgY29kZVxuICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzLW9iamVjdCcpO1xuXG4vKipcbiAqIEV4cG9zZSBgUmVxdWVzdEJhc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdEJhc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVxdWVzdEJhc2VgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdEJhc2Uob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufVxuXG4vKipcbiAqIE1peGluIHRoZSBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIFJlcXVlc3RCYXNlLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gUmVxdWVzdEJhc2UucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDbGVhciBwcmV2aW91cyB0aW1lb3V0LlxuICpcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gX2NsZWFyVGltZW91dCgpe1xuICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICBjbGVhclRpbWVvdXQodGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpO1xuICBkZWxldGUgdGhpcy5fdGltZXI7XG4gIGRlbGV0ZSB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE92ZXJyaWRlIGRlZmF1bHQgcmVzcG9uc2UgYm9keSBwYXJzZXJcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHRvIGNvbnZlcnQgaW5jb21pbmcgZGF0YSBpbnRvIHJlcXVlc3QuYm9keVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGZuKXtcbiAgdGhpcy5fcGFyc2VyID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgZm9ybWF0IG9mIGJpbmFyeSByZXNwb25zZSBib2R5LlxuICogSW4gYnJvd3NlciB2YWxpZCBmb3JtYXRzIGFyZSAnYmxvYicgYW5kICdhcnJheWJ1ZmZlcicsXG4gKiB3aGljaCByZXR1cm4gQmxvYiBhbmQgQXJyYXlCdWZmZXIsIHJlc3BlY3RpdmVseS5cbiAqXG4gKiBJbiBOb2RlIGFsbCB2YWx1ZXMgcmVzdWx0IGluIEJ1ZmZlci5cbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC5yZXNwb25zZVR5cGUoJ2Jsb2InKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmVzcG9uc2VUeXBlID0gZnVuY3Rpb24odmFsKXtcbiAgdGhpcy5fcmVzcG9uc2VUeXBlID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXF1ZXN0IGJvZHkgc2VyaWFsaXplclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBkYXRhIHNldCB2aWEgLnNlbmQgb3IgLmF0dGFjaCBpbnRvIHBheWxvYWQgdG8gc2VuZFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZm4pe1xuICB0aGlzLl9zZXJpYWxpemVyID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgdGltZW91dHMuXG4gKlxuICogLSByZXNwb25zZSB0aW1lb3V0IGlzIHRpbWUgYmV0d2VlbiBzZW5kaW5nIHJlcXVlc3QgYW5kIHJlY2VpdmluZyB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgcmVzcG9uc2UuIEluY2x1ZGVzIEROUyBhbmQgY29ubmVjdGlvbiB0aW1lLlxuICogLSBkZWFkbGluZSBpcyB0aGUgdGltZSBmcm9tIHN0YXJ0IG9mIHRoZSByZXF1ZXN0IHRvIHJlY2VpdmluZyByZXNwb25zZSBib2R5IGluIGZ1bGwuIElmIHRoZSBkZWFkbGluZSBpcyB0b28gc2hvcnQgbGFyZ2UgZmlsZXMgbWF5IG5vdCBsb2FkIGF0IGFsbCBvbiBzbG93IGNvbm5lY3Rpb25zLlxuICpcbiAqIFZhbHVlIG9mIDAgb3IgZmFsc2UgbWVhbnMgbm8gdGltZW91dC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IG1zIG9yIHtyZXNwb25zZSwgZGVhZGxpbmV9XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiB0aW1lb3V0KG9wdGlvbnMpe1xuICBpZiAoIW9wdGlvbnMgfHwgJ29iamVjdCcgIT09IHR5cGVvZiBvcHRpb25zKSB7XG4gICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnM7XG4gICAgdGhpcy5fcmVzcG9uc2VUaW1lb3V0ID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGZvcih2YXIgb3B0aW9uIGluIG9wdGlvbnMpIHtcbiAgICBzd2l0Y2gob3B0aW9uKSB7XG4gICAgICBjYXNlICdkZWFkbGluZSc6XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBvcHRpb25zLmRlYWRsaW5lO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VUaW1lb3V0ID0gb3B0aW9ucy5yZXNwb25zZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oXCJVbmtub3duIHRpbWVvdXQgb3B0aW9uXCIsIG9wdGlvbik7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXQgbnVtYmVyIG9mIHJldHJ5IGF0dGVtcHRzIG9uIGVycm9yLlxuICpcbiAqIEZhaWxlZCByZXF1ZXN0cyB3aWxsIGJlIHJldHJpZWQgJ2NvdW50JyB0aW1lcyBpZiB0aW1lb3V0IG9yIGVyci5jb2RlID49IDUwMC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmV0cnkgPSBmdW5jdGlvbiByZXRyeShjb3VudCwgZm4pe1xuICAvLyBEZWZhdWx0IHRvIDEgaWYgbm8gY291bnQgcGFzc2VkIG9yIHRydWVcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHwgY291bnQgPT09IHRydWUpIGNvdW50ID0gMTtcbiAgaWYgKGNvdW50IDw9IDApIGNvdW50ID0gMDtcbiAgdGhpcy5fbWF4UmV0cmllcyA9IGNvdW50O1xuICB0aGlzLl9yZXRyaWVzID0gMDtcbiAgdGhpcy5fcmV0cnlDYWxsYmFjayA9IGZuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnZhciBFUlJPUl9DT0RFUyA9IFtcbiAgJ0VDT05OUkVTRVQnLFxuICAnRVRJTUVET1VUJyxcbiAgJ0VBRERSSU5GTycsXG4gICdFU09DS0VUVElNRURPVVQnXG5dO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHJlcXVlc3Qgc2hvdWxkIGJlIHJldHJpZWQuXG4gKiAoQm9ycm93ZWQgZnJvbSBzZWdtZW50aW8vc3VwZXJhZ2VudC1yZXRyeSlcbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IFtyZXNdXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9zaG91bGRSZXRyeSA9IGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gIGlmICghdGhpcy5fbWF4UmV0cmllcyB8fCB0aGlzLl9yZXRyaWVzKysgPj0gdGhpcy5fbWF4UmV0cmllcykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5fcmV0cnlDYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgb3ZlcnJpZGUgPSB0aGlzLl9yZXRyeUNhbGxiYWNrKGVyciwgcmVzKTtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gdHJ1ZSkgcmV0dXJuIHRydWU7XG4gICAgICBpZiAob3ZlcnJpZGUgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAvLyB1bmRlZmluZWQgZmFsbHMgYmFjayB0byBkZWZhdWx0c1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKHJlcyAmJiByZXMuc3RhdHVzICYmIHJlcy5zdGF0dXMgPj0gNTAwICYmIHJlcy5zdGF0dXMgIT0gNTAxKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKGVycikge1xuICAgIGlmIChlcnIuY29kZSAmJiB+RVJST1JfQ09ERVMuaW5kZXhPZihlcnIuY29kZSkpIHJldHVybiB0cnVlO1xuICAgIC8vIFN1cGVyYWdlbnQgdGltZW91dFxuICAgIGlmIChlcnIudGltZW91dCAmJiBlcnIuY29kZSA9PSAnRUNPTk5BQk9SVEVEJykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGVyci5jcm9zc0RvbWFpbikgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZXRyeSByZXF1ZXN0XG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3JldHJ5ID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5jbGVhclRpbWVvdXQoKTtcblxuICAvLyBub2RlXG4gIGlmICh0aGlzLnJlcSkge1xuICAgIHRoaXMucmVxID0gbnVsbDtcbiAgICB0aGlzLnJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICB9XG5cbiAgdGhpcy5fYWJvcnRlZCA9IGZhbHNlO1xuICB0aGlzLnRpbWVkb3V0ID0gZmFsc2U7XG5cbiAgcmV0dXJuIHRoaXMuX2VuZCgpO1xufTtcblxuLyoqXG4gKiBQcm9taXNlIHN1cHBvcnRcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVqZWN0XVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIHRoZW4ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gIGlmICghdGhpcy5fZnVsbGZpbGxlZFByb21pc2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHRoaXMuX2VuZENhbGxlZCkge1xuICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogc3VwZXJhZ2VudCByZXF1ZXN0IHdhcyBzZW50IHR3aWNlLCBiZWNhdXNlIGJvdGggLmVuZCgpIGFuZCAudGhlbigpIHdlcmUgY2FsbGVkLiBOZXZlciBjYWxsIC5lbmQoKSBpZiB5b3UgdXNlIHByb21pc2VzXCIpO1xuICAgIH1cbiAgICB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKGlubmVyUmVzb2x2ZSwgaW5uZXJSZWplY3QpIHtcbiAgICAgIHNlbGYuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIGlubmVyUmVqZWN0KGVycik7XG4gICAgICAgIGVsc2UgaW5uZXJSZXNvbHZlKHJlcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGhpcy5fZnVsbGZpbGxlZFByb21pc2UudGhlbihyZXNvbHZlLCByZWplY3QpO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlWydjYXRjaCddID0gZnVuY3Rpb24oY2IpIHtcbiAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIGNiKTtcbn07XG5cbi8qKlxuICogQWxsb3cgZm9yIGV4dGVuc2lvblxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZm4pIHtcbiAgZm4odGhpcyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLm9rID0gZnVuY3Rpb24oY2IpIHtcbiAgaWYgKCdmdW5jdGlvbicgIT09IHR5cGVvZiBjYikgdGhyb3cgRXJyb3IoXCJDYWxsYmFjayByZXF1aXJlZFwiKTtcbiAgdGhpcy5fb2tDYWxsYmFjayA9IGNiO1xuICByZXR1cm4gdGhpcztcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5faXNSZXNwb25zZU9LID0gZnVuY3Rpb24ocmVzKSB7XG4gIGlmICghcmVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuX29rQ2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fb2tDYWxsYmFjayhyZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDA7XG59O1xuXG4vKipcbiAqIEdldCByZXF1ZXN0IGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgaGVhZGVyIGBmaWVsZGAgdmFsdWUuXG4gKiBUaGlzIGlzIGEgZGVwcmVjYXRlZCBpbnRlcm5hbCBBUEkuIFVzZSBgLmdldChmaWVsZClgIGluc3RlYWQuXG4gKlxuICogKGdldEhlYWRlciBpcyBubyBsb25nZXIgdXNlZCBpbnRlcm5hbGx5IGJ5IHRoZSBzdXBlcmFnZW50IGNvZGUgYmFzZSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICogQGRlcHJlY2F0ZWRcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0SGVhZGVyID0gUmVxdWVzdEJhc2UucHJvdG90eXBlLmdldDtcblxuLyoqXG4gKiBTZXQgaGVhZGVyIGBmaWVsZGAgdG8gYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3QuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICogICAgICAgIC5zZXQoJ1gtQVBJLUtleScsICdmb29iYXInKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnNldCh7IEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLCAnWC1BUEktS2V5JzogJ2Zvb2JhcicgfSlcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGZpZWxkXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGZpZWxkLCB2YWwpe1xuICBpZiAoaXNPYmplY3QoZmllbGQpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGZpZWxkKSB7XG4gICAgICB0aGlzLnNldChrZXksIGZpZWxkW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV0gPSB2YWw7XG4gIHRoaXMuaGVhZGVyW2ZpZWxkXSA9IHZhbDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBoZWFkZXIgYGZpZWxkYC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgIHJlcS5nZXQoJy8nKVxuICogICAgICAgIC51bnNldCgnVXNlci1BZ2VudCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGZpZWxkXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uKGZpZWxkKXtcbiAgZGVsZXRlIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbiAgZGVsZXRlIHRoaXMuaGVhZGVyW2ZpZWxkXTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFdyaXRlIHRoZSBmaWVsZCBgbmFtZWAgYW5kIGB2YWxgLCBvciBtdWx0aXBsZSBmaWVsZHMgd2l0aCBvbmUgb2JqZWN0XG4gKiBmb3IgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgcmVxdWVzdCBib2RpZXMuXG4gKlxuICogYGBgIGpzXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoJ2ZvbycsICdiYXInKVxuICogICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiByZXF1ZXN0LnBvc3QoJy91cGxvYWQnKVxuICogICAuZmllbGQoeyBmb286ICdiYXInLCBiYXo6ICdxdXgnIH0pXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ3xCbG9ifEZpbGV8QnVmZmVyfGZzLlJlYWRTdHJlYW19IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZmllbGQgPSBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgLy8gbmFtZSBzaG91bGQgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIG9iamVjdC5cbiAgaWYgKG51bGwgPT09IG5hbWUgfHwgdW5kZWZpbmVkID09PSBuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcuZmllbGQobmFtZSwgdmFsKSBuYW1lIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgfVxuXG4gIGlmICh0aGlzLl9kYXRhKSB7XG4gICAgY29uc29sZS5lcnJvcihcIi5maWVsZCgpIGNhbid0IGJlIHVzZWQgaWYgLnNlbmQoKSBpcyB1c2VkLiBQbGVhc2UgdXNlIG9ubHkgLnNlbmQoKSBvciBvbmx5IC5maWVsZCgpICYgLmF0dGFjaCgpXCIpO1xuICB9XG5cbiAgaWYgKGlzT2JqZWN0KG5hbWUpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgIHRoaXMuZmllbGQoa2V5LCBuYW1lW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICBmb3IgKHZhciBpIGluIHZhbCkge1xuICAgICAgdGhpcy5maWVsZChuYW1lLCB2YWxbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHZhbCBzaG91bGQgYmUgZGVmaW5lZCBub3dcbiAgaWYgKG51bGwgPT09IHZhbCB8fCB1bmRlZmluZWQgPT09IHZhbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignLmZpZWxkKG5hbWUsIHZhbCkgdmFsIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgfVxuICBpZiAoJ2Jvb2xlYW4nID09PSB0eXBlb2YgdmFsKSB7XG4gICAgdmFsID0gJycgKyB2YWw7XG4gIH1cbiAgdGhpcy5fZ2V0Rm9ybURhdGEoKS5hcHBlbmQobmFtZSwgdmFsKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFib3J0IHRoZSByZXF1ZXN0LCBhbmQgY2xlYXIgcG90ZW50aWFsIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCl7XG4gIGlmICh0aGlzLl9hYm9ydGVkKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5fYWJvcnRlZCA9IHRydWU7XG4gIHRoaXMueGhyICYmIHRoaXMueGhyLmFib3J0KCk7IC8vIGJyb3dzZXJcbiAgdGhpcy5yZXEgJiYgdGhpcy5yZXEuYWJvcnQoKTsgLy8gbm9kZVxuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICB0aGlzLmVtaXQoJ2Fib3J0Jyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9hdXRoID0gZnVuY3Rpb24odXNlciwgcGFzcywgb3B0aW9ucywgYmFzZTY0RW5jb2Rlcikge1xuICBzd2l0Y2ggKG9wdGlvbnMudHlwZSkge1xuICAgIGNhc2UgJ2Jhc2ljJzpcbiAgICAgIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBiYXNlNjRFbmNvZGVyKHVzZXIgKyAnOicgKyBwYXNzKSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXI7XG4gICAgICB0aGlzLnBhc3N3b3JkID0gcGFzcztcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYmVhcmVyJzogLy8gdXNhZ2Ugd291bGQgYmUgLmF1dGgoYWNjZXNzVG9rZW4sIHsgdHlwZTogJ2JlYXJlcicgfSlcbiAgICAgIHRoaXMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgdXNlcik7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW5hYmxlIHRyYW5zbWlzc2lvbiBvZiBjb29raWVzIHdpdGggeC1kb21haW4gcmVxdWVzdHMuXG4gKlxuICogTm90ZSB0aGF0IGZvciB0aGlzIHRvIHdvcmsgdGhlIG9yaWdpbiBtdXN0IG5vdCBiZVxuICogdXNpbmcgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiB3aXRoIGEgd2lsZGNhcmQsXG4gKiBhbmQgYWxzbyBtdXN0IHNldCBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCJcbiAqIHRvIFwidHJ1ZVwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLndpdGhDcmVkZW50aWFscyA9IGZ1bmN0aW9uKG9uKSB7XG4gIC8vIFRoaXMgaXMgYnJvd3Nlci1vbmx5IGZ1bmN0aW9uYWxpdHkuIE5vZGUgc2lkZSBpcyBuby1vcC5cbiAgaWYgKG9uID09IHVuZGVmaW5lZCkgb24gPSB0cnVlO1xuICB0aGlzLl93aXRoQ3JlZGVudGlhbHMgPSBvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4IHJlZGlyZWN0cyB0byBgbmAuIERvZXMgbm90aW5nIGluIGJyb3dzZXIgWEhSIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnJlZGlyZWN0cyA9IGZ1bmN0aW9uKG4pe1xuICB0aGlzLl9tYXhSZWRpcmVjdHMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTWF4aW11bSBzaXplIG9mIGJ1ZmZlcmVkIHJlc3BvbnNlIGJvZHksIGluIGJ5dGVzLiBDb3VudHMgdW5jb21wcmVzc2VkIHNpemUuXG4gKiBEZWZhdWx0IDIwME1CLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLm1heFJlc3BvbnNlU2l6ZSA9IGZ1bmN0aW9uKG4pe1xuICBpZiAoJ251bWJlcicgIT09IHR5cGVvZiBuKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgfVxuICB0aGlzLl9tYXhSZXNwb25zZVNpemUgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29udmVydCB0byBhIHBsYWluIGphdmFzY3JpcHQgb2JqZWN0IChub3QgSlNPTiBzdHJpbmcpIG9mIHNjYWxhciBwcm9wZXJ0aWVzLlxuICogTm90ZSBhcyB0aGlzIG1ldGhvZCBpcyBkZXNpZ25lZCB0byByZXR1cm4gYSB1c2VmdWwgbm9uLXRoaXMgdmFsdWUsXG4gKiBpdCBjYW5ub3QgYmUgY2hhaW5lZC5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlc2NyaWJpbmcgbWV0aG9kLCB1cmwsIGFuZCBkYXRhIG9mIHRoaXMgcmVxdWVzdFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgbWV0aG9kOiB0aGlzLm1ldGhvZCxcbiAgICB1cmw6IHRoaXMudXJsLFxuICAgIGRhdGE6IHRoaXMuX2RhdGEsXG4gICAgaGVhZGVyczogdGhpcy5faGVhZGVyLFxuICB9O1xufTtcblxuLyoqXG4gKiBTZW5kIGBkYXRhYCBhcyB0aGUgcmVxdWVzdCBib2R5LCBkZWZhdWx0aW5nIHRoZSBgLnR5cGUoKWAgdG8gXCJqc29uXCIgd2hlblxuICogYW4gb2JqZWN0IGlzIGdpdmVuLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgIC8vIG1hbnVhbCBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2pzb24nKVxuICogICAgICAgICAuc2VuZCgne1wibmFtZVwiOlwidGpcIn0nKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8ganNvblxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC5zZW5kKHsgbmFtZTogJ3RqJyB9KVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIG1hbnVhbCB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnZm9ybScpXG4gKiAgICAgICAgIC5zZW5kKCduYW1lPXRqJylcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBhdXRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gZGVmYXVsdHMgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgIC5zZW5kKCduYW1lPXRvYmknKVxuICogICAgICAgIC5zZW5kKCdzcGVjaWVzPWZlcnJldCcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGRhdGFcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpe1xuICB2YXIgaXNPYmogPSBpc09iamVjdChkYXRhKTtcbiAgdmFyIHR5cGUgPSB0aGlzLl9oZWFkZXJbJ2NvbnRlbnQtdHlwZSddO1xuXG4gIGlmICh0aGlzLl9mb3JtRGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCIuc2VuZCgpIGNhbid0IGJlIHVzZWQgaWYgLmF0dGFjaCgpIG9yIC5maWVsZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIik7XG4gIH1cblxuICBpZiAoaXNPYmogJiYgIXRoaXMuX2RhdGEpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChkYXRhICYmIHRoaXMuX2RhdGEgJiYgdGhpcy5faXNIb3N0KHRoaXMuX2RhdGEpKSB7XG4gICAgdGhyb3cgRXJyb3IoXCJDYW4ndCBtZXJnZSB0aGVzZSBzZW5kIGNhbGxzXCIpO1xuICB9XG5cbiAgLy8gbWVyZ2VcbiAgaWYgKGlzT2JqICYmIGlzT2JqZWN0KHRoaXMuX2RhdGEpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGRhdGEpIHtcbiAgICAvLyBkZWZhdWx0IHRvIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgIGlmICghdHlwZSkgdGhpcy50eXBlKCdmb3JtJyk7XG4gICAgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG4gICAgaWYgKCdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnID09IHR5cGUpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSB0aGlzLl9kYXRhXG4gICAgICAgID8gdGhpcy5fZGF0YSArICcmJyArIGRhdGFcbiAgICAgICAgOiBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kYXRhID0gKHRoaXMuX2RhdGEgfHwgJycpICsgZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gIH1cblxuICBpZiAoIWlzT2JqIHx8IHRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZGVmYXVsdCB0byBqc29uXG4gIGlmICghdHlwZSkgdGhpcy50eXBlKCdqc29uJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTb3J0IGBxdWVyeXN0cmluZ2AgYnkgdGhlIHNvcnQgZnVuY3Rpb25cbiAqXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gZGVmYXVsdCBvcmRlclxuICogICAgICAgcmVxdWVzdC5nZXQoJy91c2VyJylcbiAqICAgICAgICAgLnF1ZXJ5KCduYW1lPU5pY2snKVxuICogICAgICAgICAucXVlcnkoJ3NlYXJjaD1NYW5ueScpXG4gKiAgICAgICAgIC5zb3J0UXVlcnkoKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGN1c3RvbWl6ZWQgc29ydCBmdW5jdGlvblxuICogICAgICAgcmVxdWVzdC5nZXQoJy91c2VyJylcbiAqICAgICAgICAgLnF1ZXJ5KCduYW1lPU5pY2snKVxuICogICAgICAgICAucXVlcnkoJ3NlYXJjaD1NYW5ueScpXG4gKiAgICAgICAgIC5zb3J0UXVlcnkoZnVuY3Rpb24oYSwgYil7XG4gKiAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoIC0gYi5sZW5ndGg7XG4gKiAgICAgICAgIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNvcnRcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc29ydFF1ZXJ5ID0gZnVuY3Rpb24oc29ydCkge1xuICAvLyBfc29ydCBkZWZhdWx0IHRvIHRydWUgYnV0IG90aGVyd2lzZSBjYW4gYmUgYSBmdW5jdGlvbiBvciBib29sZWFuXG4gIHRoaXMuX3NvcnQgPSB0eXBlb2Ygc29ydCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogc29ydDtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENvbXBvc2UgcXVlcnlzdHJpbmcgdG8gYXBwZW5kIHRvIHJlcS51cmxcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5fcXVlcnkuam9pbignJicpO1xuICBpZiAocXVlcnkpIHtcbiAgICB0aGlzLnVybCArPSAodGhpcy51cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPycpICsgcXVlcnk7XG4gIH1cbiAgdGhpcy5fcXVlcnkubGVuZ3RoID0gMDsgLy8gTWFrZXMgdGhlIGNhbGwgaWRlbXBvdGVudFxuXG4gIGlmICh0aGlzLl9zb3J0KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy51cmwuaW5kZXhPZignPycpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgcXVlcnlBcnIgPSB0aGlzLnVybC5zdWJzdHJpbmcoaW5kZXggKyAxKS5zcGxpdCgnJicpO1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLl9zb3J0KSB7XG4gICAgICAgIHF1ZXJ5QXJyLnNvcnQodGhpcy5fc29ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeUFyci5zb3J0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnN1YnN0cmluZygwLCBpbmRleCkgKyAnPycgKyBxdWVyeUFyci5qb2luKCcmJyk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBGb3IgYmFja3dhcmRzIGNvbXBhdCBvbmx5XG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2FwcGVuZFF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oKSB7Y29uc29sZS50cmFjZShcIlVuc3VwcG9ydGVkXCIpO31cblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2l0aCB0aW1lb3V0IGVycm9yLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fdGltZW91dEVycm9yID0gZnVuY3Rpb24ocmVhc29uLCB0aW1lb3V0LCBlcnJubyl7XG4gIGlmICh0aGlzLl9hYm9ydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IocmVhc29uICsgdGltZW91dCArICdtcyBleGNlZWRlZCcpO1xuICBlcnIudGltZW91dCA9IHRpbWVvdXQ7XG4gIGVyci5jb2RlID0gJ0VDT05OQUJPUlRFRCc7XG4gIGVyci5lcnJubyA9IGVycm5vO1xuICB0aGlzLnRpbWVkb3V0ID0gdHJ1ZTtcbiAgdGhpcy5hYm9ydCgpO1xuICB0aGlzLmNhbGxiYWNrKGVycik7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3NldFRpbWVvdXRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvLyBkZWFkbGluZVxuICBpZiAodGhpcy5fdGltZW91dCAmJiAhdGhpcy5fdGltZXIpIHtcbiAgICB0aGlzLl90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcignVGltZW91dCBvZiAnLCBzZWxmLl90aW1lb3V0LCAnRVRJTUUnKTtcbiAgICB9LCB0aGlzLl90aW1lb3V0KTtcbiAgfVxuICAvLyByZXNwb25zZSB0aW1lb3V0XG4gIGlmICh0aGlzLl9yZXNwb25zZVRpbWVvdXQgJiYgIXRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyKSB7XG4gICAgdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzZWxmLl90aW1lb3V0RXJyb3IoJ1Jlc3BvbnNlIHRpbWVvdXQgb2YgJywgc2VsZi5fcmVzcG9uc2VUaW1lb3V0LCAnRVRJTUVET1VUJyk7XG4gICAgfSwgdGhpcy5fcmVzcG9uc2VUaW1lb3V0KTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3VwZXJhZ2VudC9saWIvcmVxdWVzdC1iYXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBudWxsICE9PSBvYmogJiYgJ29iamVjdCcgPT09IHR5cGVvZiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N1cGVyYWdlbnQvbGliL2lzLW9iamVjdC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuLyoqXG4gKiBFeHBvc2UgYFJlc3BvbnNlQmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNwb25zZUJhc2U7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgUmVzcG9uc2VCYXNlYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlc3BvbnNlQmFzZShvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59XG5cbi8qKlxuICogTWl4aW4gdGhlIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gUmVzcG9uc2VCYXNlLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gUmVzcG9uc2VCYXNlLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogR2V0IGNhc2UtaW5zZW5zaXRpdmUgYGZpZWxkYCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihmaWVsZCkge1xuICByZXR1cm4gdGhpcy5oZWFkZXJbZmllbGQudG9Mb3dlckNhc2UoKV07XG59O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgcmVsYXRlZCBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBgLnR5cGVgIHRoZSBjb250ZW50IHR5cGUgd2l0aG91dCBwYXJhbXNcbiAqXG4gKiBBIHJlc3BvbnNlIG9mIFwiQ29udGVudC1UeXBlOiB0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCJcbiAqIHdpbGwgcHJvdmlkZSB5b3Ugd2l0aCBhIGAudHlwZWAgb2YgXCJ0ZXh0L3BsYWluXCIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5fc2V0SGVhZGVyUHJvcGVydGllcyA9IGZ1bmN0aW9uKGhlYWRlcil7XG4gICAgLy8gVE9ETzogbW9hciFcbiAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYSB1dGlsXG5cbiAgICAvLyBjb250ZW50LXR5cGVcbiAgICB2YXIgY3QgPSBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddIHx8ICcnO1xuICAgIHRoaXMudHlwZSA9IHV0aWxzLnR5cGUoY3QpO1xuXG4gICAgLy8gcGFyYW1zXG4gICAgdmFyIHBhcmFtcyA9IHV0aWxzLnBhcmFtcyhjdCk7XG4gICAgZm9yICh2YXIga2V5IGluIHBhcmFtcykgdGhpc1trZXldID0gcGFyYW1zW2tleV07XG5cbiAgICB0aGlzLmxpbmtzID0ge307XG5cbiAgICAvLyBsaW5rc1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChoZWFkZXIubGluaykge1xuICAgICAgICAgICAgdGhpcy5saW5rcyA9IHV0aWxzLnBhcnNlTGlua3MoaGVhZGVyLmxpbmspO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIGlnbm9yZVxuICAgIH1cbn07XG5cbi8qKlxuICogU2V0IGZsYWdzIHN1Y2ggYXMgYC5va2AgYmFzZWQgb24gYHN0YXR1c2AuXG4gKlxuICogRm9yIGV4YW1wbGUgYSAyeHggcmVzcG9uc2Ugd2lsbCBnaXZlIHlvdSBhIGAub2tgIG9mIF9fdHJ1ZV9fXG4gKiB3aGVyZWFzIDV4eCB3aWxsIGJlIF9fZmFsc2VfXyBhbmQgYC5lcnJvcmAgd2lsbCBiZSBfX3RydWVfXy4gVGhlXG4gKiBgLmNsaWVudEVycm9yYCBhbmQgYC5zZXJ2ZXJFcnJvcmAgYXJlIGFsc28gYXZhaWxhYmxlIHRvIGJlIG1vcmVcbiAqIHNwZWNpZmljLCBhbmQgYC5zdGF0dXNUeXBlYCBpcyB0aGUgY2xhc3Mgb2YgZXJyb3IgcmFuZ2luZyBmcm9tIDEuLjVcbiAqIHNvbWV0aW1lcyB1c2VmdWwgZm9yIG1hcHBpbmcgcmVzcG9uZCBjb2xvcnMgZXRjLlxuICpcbiAqIFwic3VnYXJcIiBwcm9wZXJ0aWVzIGFyZSBhbHNvIGRlZmluZWQgZm9yIGNvbW1vbiBjYXNlcy4gQ3VycmVudGx5IHByb3ZpZGluZzpcbiAqXG4gKiAgIC0gLm5vQ29udGVudFxuICogICAtIC5iYWRSZXF1ZXN0XG4gKiAgIC0gLnVuYXV0aG9yaXplZFxuICogICAtIC5ub3RBY2NlcHRhYmxlXG4gKiAgIC0gLm5vdEZvdW5kXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXR1c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVzcG9uc2VCYXNlLnByb3RvdHlwZS5fc2V0U3RhdHVzUHJvcGVydGllcyA9IGZ1bmN0aW9uKHN0YXR1cyl7XG4gICAgdmFyIHR5cGUgPSBzdGF0dXMgLyAxMDAgfCAwO1xuXG4gICAgLy8gc3RhdHVzIC8gY2xhc3NcbiAgICB0aGlzLnN0YXR1cyA9IHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcbiAgICB0aGlzLnN0YXR1c1R5cGUgPSB0eXBlO1xuXG4gICAgLy8gYmFzaWNzXG4gICAgdGhpcy5pbmZvID0gMSA9PSB0eXBlO1xuICAgIHRoaXMub2sgPSAyID09IHR5cGU7XG4gICAgdGhpcy5yZWRpcmVjdCA9IDMgPT0gdHlwZTtcbiAgICB0aGlzLmNsaWVudEVycm9yID0gNCA9PSB0eXBlO1xuICAgIHRoaXMuc2VydmVyRXJyb3IgPSA1ID09IHR5cGU7XG4gICAgdGhpcy5lcnJvciA9ICg0ID09IHR5cGUgfHwgNSA9PSB0eXBlKVxuICAgICAgICA/IHRoaXMudG9FcnJvcigpXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICAvLyBzdWdhclxuICAgIHRoaXMuY3JlYXRlZCA9IDIwMSA9PSBzdGF0dXM7XG4gICAgdGhpcy5hY2NlcHRlZCA9IDIwMiA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub0NvbnRlbnQgPSAyMDQgPT0gc3RhdHVzO1xuICAgIHRoaXMuYmFkUmVxdWVzdCA9IDQwMCA9PSBzdGF0dXM7XG4gICAgdGhpcy51bmF1dGhvcml6ZWQgPSA0MDEgPT0gc3RhdHVzO1xuICAgIHRoaXMubm90QWNjZXB0YWJsZSA9IDQwNiA9PSBzdGF0dXM7XG4gICAgdGhpcy5mb3JiaWRkZW4gPSA0MDMgPT0gc3RhdHVzO1xuICAgIHRoaXMubm90Rm91bmQgPSA0MDQgPT0gc3RhdHVzO1xuICAgIHRoaXMudW5wcm9jZXNzYWJsZUVudGl0eSA9IDQyMiA9PSBzdGF0dXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zdXBlcmFnZW50L2xpYi9yZXNwb25zZS1iYXNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICo7ICovKS5zaGlmdCgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJhbXMgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnJlZHVjZShmdW5jdGlvbihvYmosIHN0cil7XG4gICAgdmFyIHBhcnRzID0gc3RyLnNwbGl0KC8gKj0gKi8pO1xuICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgIHZhciB2YWwgPSBwYXJ0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGtleSAmJiB2YWwpIG9ialtrZXldID0gdmFsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogUGFyc2UgTGluayBoZWFkZXIgZmllbGRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucGFyc2VMaW5rcyA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqLCAqLykucmVkdWNlKGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqOyAqLyk7XG4gICAgdmFyIHVybCA9IHBhcnRzWzBdLnNsaWNlKDEsIC0xKTtcbiAgICB2YXIgcmVsID0gcGFydHNbMV0uc3BsaXQoLyAqPSAqLylbMV0uc2xpY2UoMSwgLTEpO1xuICAgIG9ialtyZWxdID0gdXJsO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIHt9KTtcbn07XG5cbi8qKlxuICogU3RyaXAgY29udGVudCByZWxhdGVkIGZpZWxkcyBmcm9tIGBoZWFkZXJgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJcbiAqIEByZXR1cm4ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmNsZWFuSGVhZGVyID0gZnVuY3Rpb24oaGVhZGVyLCBjaGFuZ2VzT3JpZ2luKXtcbiAgZGVsZXRlIGhlYWRlclsnY29udGVudC10eXBlJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtbGVuZ3RoJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ3RyYW5zZmVyLWVuY29kaW5nJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ2hvc3QnXTtcbiAgLy8gc2VjdWlydHlcbiAgaWYgKGNoYW5nZXNPcmlnaW4pIHtcbiAgICBkZWxldGUgaGVhZGVyWydhdXRob3JpemF0aW9uJ107XG4gICAgZGVsZXRlIGhlYWRlclsnY29va2llJ107XG4gIH1cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N1cGVyYWdlbnQvbGliL3V0aWxzLmpzIiwiZnVuY3Rpb24gQWdlbnQoKSB7XG4gIHRoaXMuX2RlZmF1bHRzID0gW107XG59XG5cbltcInVzZVwiLCBcIm9uXCIsIFwib25jZVwiLCBcInNldFwiLCBcInF1ZXJ5XCIsIFwidHlwZVwiLCBcImFjY2VwdFwiLCBcImF1dGhcIiwgXCJ3aXRoQ3JlZGVudGlhbHNcIiwgXCJzb3J0UXVlcnlcIiwgXCJyZXRyeVwiLCBcIm9rXCIsIFwicmVkaXJlY3RzXCIsXG4gXCJ0aW1lb3V0XCIsIFwiYnVmZmVyXCIsIFwic2VyaWFsaXplXCIsIFwicGFyc2VcIiwgXCJjYVwiLCBcImtleVwiLCBcInBmeFwiLCBcImNlcnRcIl0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuICAvKiogRGVmYXVsdCBzZXR0aW5nIGZvciBhbGwgcmVxdWVzdHMgZnJvbSB0aGlzIGFnZW50ICovXG4gIEFnZW50LnByb3RvdHlwZVtmbl0gPSBmdW5jdGlvbigvKnZhcmFyZ3MqLykge1xuICAgIHRoaXMuX2RlZmF1bHRzLnB1c2goe2ZuOmZuLCBhcmd1bWVudHM6YXJndW1lbnRzfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn0pO1xuXG5BZ2VudC5wcm90b3R5cGUuX3NldERlZmF1bHRzID0gZnVuY3Rpb24ocmVxKSB7XG4gICAgdGhpcy5fZGVmYXVsdHMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgIHJlcVtkZWYuZm5dLmFwcGx5KHJlcSwgZGVmLmFyZ3VtZW50cyk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFnZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zdXBlcmFnZW50L2xpYi9hZ2VudC1iYXNlLmpzIiwiZnVuY3Rpb24gQ29uZmlndXJhdGlvbkVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5uYW1lID0gJ0NvbmZpZ3VyYXRpb25FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9IChtZXNzYWdlIHx8ICcnKTtcbn1cbkNvbmZpZ3VyYXRpb25FcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIFRva2VuVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5uYW1lID0gJ1Rva2VuVmFsaWRhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gKG1lc3NhZ2UgfHwgJycpO1xufVxuVG9rZW5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ29uZmlndXJhdGlvbkVycm9yOiBDb25maWd1cmF0aW9uRXJyb3IsXG4gIFRva2VuVmFsaWRhdGlvbkVycm9yOiBUb2tlblZhbGlkYXRpb25FcnJvclxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9lcnJvci5qcyIsImZ1bmN0aW9uIER1bW15Q2FjaGUoKSB7fVxuXG5EdW1teUNhY2hlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBudWxsO1xufTtcblxuRHVtbXlDYWNoZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5EdW1teUNhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1bW15Q2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2lkdG9rZW4tdmVyaWZpZXIvc3JjL2hlbHBlcnMvZHVtbXktY2FjaGUuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBVcmxVdGlsaXR5IGZyb20gJy4vVXJsVXRpbGl0eSc7XG5pbXBvcnQgU2lnbmluU3RhdGUgZnJvbSAnLi9TaWduaW5TdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pblJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgLy8gbWFuZGF0b3J5XG4gICAgICAgIHVybCwgY2xpZW50X2lkLCByZWRpcmVjdF91cmksIHJlc3BvbnNlX3R5cGUsIHNjb3BlLCBhdXRob3JpdHksXG4gICAgICAgIC8vIG9wdGlvbmFsXG4gICAgICAgIGRhdGEsIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcywgcmVzb3VyY2UsXG4gICAgICAgIHJlcXVlc3QsIHJlcXVlc3RfdXJpLCBleHRyYVF1ZXJ5UGFyYW1zLFxuICAgIH0pIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHVybCBwYXNzZWQgdG8gU2lnbmluUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gY2xpZW50X2lkIHBhc3NlZCB0byBTaWduaW5SZXF1ZXN0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2xpZW50X2lkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVkaXJlY3RfdXJpKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyByZWRpcmVjdF91cmkgcGFzc2VkIHRvIFNpZ25pblJlcXVlc3RcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZWRpcmVjdF91cmlcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZV90eXBlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyByZXNwb25zZV90eXBlIHBhc3NlZCB0byBTaWduaW5SZXF1ZXN0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVzcG9uc2VfdHlwZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzY29wZSBwYXNzZWQgdG8gU2lnbmluUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNjb3BlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBhdXRob3JpdHkgcGFzc2VkIHRvIFNpZ25pblJlcXVlc3RcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRob3JpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb2lkYyA9IFNpZ25pblJlcXVlc3QuaXNPaWRjKHJlc3BvbnNlX3R5cGUpO1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFNpZ25pblN0YXRlKHsgbm9uY2U6IG9pZGMsIGRhdGEsIGNsaWVudF9pZCwgYXV0aG9yaXR5IH0pO1xuXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiY2xpZW50X2lkXCIsIGNsaWVudF9pZCk7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVkaXJlY3RfdXJpXCIsIHJlZGlyZWN0X3VyaSk7XG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwicmVzcG9uc2VfdHlwZVwiLCByZXNwb25zZV90eXBlKTtcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJzY29wZVwiLCBzY29wZSk7XG4gICAgICAgIFxuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgICBpZiAob2lkYykge1xuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJub25jZVwiLCB0aGlzLnN0YXRlLm5vbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25hbCA9IHsgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLCByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmkgfTtcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gb3B0aW9uYWwpe1xuICAgICAgICAgICAgaWYgKG9wdGlvbmFsW2tleV0pIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBrZXksIG9wdGlvbmFsW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZXh0cmFRdWVyeVBhcmFtcyl7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBrZXksIGV4dHJhUXVlcnlQYXJhbXNba2V5XSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc09pZGMocmVzcG9uc2VfdHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVzcG9uc2VfdHlwZS5zcGxpdCgvXFxzKy9nKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gPT09IFwiaWRfdG9rZW5cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhIShyZXN1bHRbMF0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgaXNPQXV0aChyZXNwb25zZV90eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJ0b2tlblwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaWduaW5SZXF1ZXN0LmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsVXRpbGl0eSB7XG4gICAgc3RhdGljIGFkZFF1ZXJ5UGFyYW0odXJsLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA8IDApIHtcbiAgICAgICAgICAgIHVybCArPSBcIj9cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmxbdXJsLmxlbmd0aCAtIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgdXJsICs9IFwiJlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsICs9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcbiAgICAgICAgdXJsICs9IFwiPVwiO1xuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIHN0YXRpYyBwYXJzZVVybEZyYWdtZW50KHZhbHVlLCBkZWxpbWl0ZXIgPSBcIiNcIiwgZ2xvYmFsID0gR2xvYmFsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudFwiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyl7XG4gICAgICAgICAgICB2YWx1ZSA9IGdsb2JhbC5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlkeCA9IHZhbHVlLmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoaWR4ICsgMSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFyYW1zID0ge30sXG4gICAgICAgICAgICByZWdleCA9IC8oW14mPV0rKT0oW14mXSopL2csXG4gICAgICAgICAgICBtO1xuXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgd2hpbGUgKG0gPSByZWdleC5leGVjKHZhbHVlKSkge1xuICAgICAgICAgICAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudChtWzFdKV0gPSBkZWNvZGVVUklDb21wb25lbnQobVsyXSk7XG4gICAgICAgICAgICBpZiAoY291bnRlcisrID4gNTApIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJyZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiUmVzcG9uc2UgZXhjZWVkZWQgZXhwZWN0ZWQgbnVtYmVyIG9mIHBhcmFtZXRlcnNcIlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXJsVXRpbGl0eS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUnO1xuaW1wb3J0IHJhbmRvbSBmcm9tICcuL3JhbmRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pblN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHtub25jZSwgYXV0aG9yaXR5LCBjbGllbnRfaWR9ID0ge30pIHtcbiAgICAgICAgc3VwZXIoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChub25jZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSByYW5kb20oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChub25jZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9uY2UgPSBub25jZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gYXV0aG9yaXR5O1xuICAgICAgICB0aGlzLl9jbGllbnRfaWQgPSBjbGllbnRfaWQ7XG4gICAgfVxuXG4gICAgZ2V0IG5vbmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9uY2U7XG4gICAgfVxuICAgIGdldCBhdXRob3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JpdHk7XG4gICAgfVxuICAgIGdldCBjbGllbnRfaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRfaWQ7XG4gICAgfVxuICAgIFxuICAgIHRvU3RvcmFnZVN0cmluZygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgICAgICBjcmVhdGVkOiB0aGlzLmNyZWF0ZWQsXG4gICAgICAgICAgICBub25jZTogdGhpcy5ub25jZSxcbiAgICAgICAgICAgIGF1dGhvcml0eTogdGhpcy5hdXRob3JpdHksXG4gICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50X2lkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25pblN0YXRlLmZyb21TdG9yYWdlU3RyaW5nXCIpO1xuICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2Uoc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIHJldHVybiBuZXcgU2lnbmluU3RhdGUoZGF0YSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpZ25pblN0YXRlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKHtpZCwgZGF0YSwgY3JlYXRlZH0gPSB7fSkge1xuICAgICAgICB0aGlzLl9pZCA9IGlkIHx8IHJhbmRvbSgpO1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcblxuICAgICAgICBpZiAodHlwZW9mIGNyZWF0ZWQgPT09ICdudW1iZXInICYmIGNyZWF0ZWQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gY3JlYXRlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG4gICAgZ2V0IGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgICBnZXQgY3JlYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZWQ7XG4gICAgfVxuXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBuZXcgU3RhdGUoSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFyU3RhbGVTdGF0ZShzdG9yYWdlLCBhZ2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU3RhdGUuY2xlYXJTdGFsZVN0YXRlXCIpO1xuXG4gICAgICAgIHZhciBjdXRvZmYgPSBEYXRlLm5vdygpIC8gMTAwMCAtIGFnZTtcblxuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRBbGxLZXlzKCkudGhlbihrZXlzID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcImdvdCBrZXlzXCIsIGtleXMpO1xuXG4gICAgICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBwID0gc3RvcmFnZS5nZXQoa2V5KS50aGVuKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoaXRlbSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImdvdCBpdGVtIGZyb20ga2V5OiBcIiwga2V5LCBzdGF0ZS5jcmVhdGVkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jcmVhdGVkIDw9IGN1dG9mZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiRXJyb3IgcGFyc2luZyBzdGF0ZSBmb3Iga2V5XCIsIGtleSwgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwibm8gaXRlbSBpbiBzdG9yYWdlIGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInJlbW92ZWQgaXRlbSBmb3Iga2V5OiBcIiwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlLnJlbW92ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJ3YWl0aW5nIG9uIHByb21pc2UgY291bnQ6XCIsIHByb21pc2VzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RhdGUuanMiLCIvLyBOT1RJQ0U6IHRoZSBjb2RlIGluIHRoaXMgZmlsZSBvcmlnaW5hbGx5IGRldmVsb3BlZCBieSBNaWNyb3NvZnRcbi8vIG9yaWdpbmFsIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL0F6dXJlQUQvYXp1cmUtYWN0aXZlZGlyZWN0b3J5LWxpYnJhcnktZm9yLWpzL2Jsb2IvbWFzdGVyL2xpYi9hZGFsLmpzI0wxMDI5XG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFkYWxKUyB2MS4wLjhcbi8vIEBwcmVzZXJ2ZSBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBPcGVuIFRlY2hub2xvZ2llcywgSW5jLlxuLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQXBhY2hlIExpY2Vuc2UgMi4wXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tKCkge1xuICAgIHZhciBndWlkSG9sZGVyID0gJ3h4eHh4eHh4eHh4eDR4eHh5eHh4eHh4eHh4eHh4eHh4JztcbiAgICB2YXIgaGV4ID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuICAgIHZhciByID0gMDtcbiAgICB2YXIgZ3VpZFJlc3BvbnNlID0gXCJcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGd1aWRIb2xkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gIT09ICctJyAmJiBndWlkSG9sZGVyW2ldICE9PSAnNCcpIHtcbiAgICAgICAgICAgIC8vIGVhY2ggeCBhbmQgeSBuZWVkcyB0byBiZSByYW5kb21cbiAgICAgICAgICAgIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGd1aWRIb2xkZXJbaV0gPT09ICd4Jykge1xuICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgfSBlbHNlIGlmIChndWlkSG9sZGVyW2ldID09PSAneScpIHtcbiAgICAgICAgICAgIC8vIGNsb2NrLXNlcS1hbmQtcmVzZXJ2ZWQgZmlyc3QgaGV4IGlzIGZpbHRlcmVkIGFuZCByZW1haW5pbmcgaGV4IHZhbHVlcyBhcmUgcmFuZG9tXG4gICAgICAgICAgICByICY9IDB4MzsgLy8gYml0IGFuZCB3aXRoIDAwMTEgdG8gc2V0IHBvcyAyIHRvIHplcm8gPzA/P1xuICAgICAgICAgICAgciB8PSAweDg7IC8vIHNldCBwb3MgMyB0byAxIGFzIDE/Pz9cbiAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBoZXhbcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gZ3VpZEhvbGRlcltpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3VpZFJlc3BvbnNlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yYW5kb20uanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgVXJsVXRpbGl0eSBmcm9tICcuL1VybFV0aWxpdHknO1xuXG5jb25zdCBPaWRjU2NvcGUgPSBcIm9wZW5pZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduaW5SZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IodXJsKSB7XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIFwiI1wiKTtcblxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gdmFsdWVzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IHZhbHVlcy5lcnJvcl91cmk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0gdmFsdWVzLnN0YXRlO1xuICAgICAgICB0aGlzLmlkX3Rva2VuID0gdmFsdWVzLmlkX3Rva2VuO1xuICAgICAgICB0aGlzLnNlc3Npb25fc3RhdGUgPSB2YWx1ZXMuc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSB2YWx1ZXMuYWNjZXNzX3Rva2VuO1xuICAgICAgICB0aGlzLnRva2VuX3R5cGUgPSB2YWx1ZXMudG9rZW5fdHlwZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHZhbHVlcy5zY29wZTtcbiAgICAgICAgdGhpcy5wcm9maWxlID0gdW5kZWZpbmVkOyAvLyB3aWxsIGJlIHNldCBmcm9tIFJlc3BvbnNlVmFsaWRhdG9yXG5cbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSBwYXJzZUludCh2YWx1ZXMuZXhwaXJlc19pbik7XG4gICAgICAgIGlmICh0eXBlb2YgZXhwaXJlc19pbiA9PT0gJ251bWJlcicgJiYgZXhwaXJlc19pbiA+IDApIHtcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICB0aGlzLmV4cGlyZXNfYXQgPSBub3cgKyBleHBpcmVzX2luO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGV4cGlyZXNfaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmV4cGlyZXNfYXQpIHtcbiAgICAgICAgICAgIGxldCBub3cgPSBwYXJzZUludChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBpcmVzX2F0IC0gbm93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0IGV4cGlyZWQoKSB7XG4gICAgICAgIGxldCBleHBpcmVzX2luID0gdGhpcy5leHBpcmVzX2luO1xuICAgICAgICBpZiAoZXhwaXJlc19pbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwaXJlc19pbiA8PSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgZ2V0IHNjb3BlcygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjb3BlIHx8IFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGlzT3BlbklkQ29ubmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGVzLmluZGV4T2YoT2lkY1Njb3BlKSA+PSAwIHx8ICEhdGhpcy5pZF90b2tlbjtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2lnbmluUmVzcG9uc2UuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBVcmxVdGlsaXR5IGZyb20gJy4vVXJsVXRpbGl0eSc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9TdGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25vdXRSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3Rvcih7dXJsLCBpZF90b2tlbl9oaW50LCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksIGRhdGF9KSB7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyB1cmwgcGFzc2VkIHRvIFNpZ25vdXRSZXF1ZXN0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkX3Rva2VuX2hpbnQpIHtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwiaWRfdG9rZW5faGludFwiLCBpZF90b2tlbl9oaW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSkge1xuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmlcIiwgcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gbmV3IFN0YXRlKHsgZGF0YSB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInN0YXRlXCIsIHRoaXMuc3RhdGUuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2lnbm91dFJlcXVlc3QuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgVXJsVXRpbGl0eSBmcm9tICcuL1VybFV0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWdub3V0UmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBVcmxVdGlsaXR5LnBhcnNlVXJsRnJhZ21lbnQodXJsLCBcIj9cIik7XG5cbiAgICAgICAgdGhpcy5lcnJvciA9IHZhbHVlcy5lcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvcl9kZXNjcmlwdGlvbiA9IHZhbHVlcy5lcnJvcl9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lcnJvcl91cmkgPSB2YWx1ZXMuZXJyb3JfdXJpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaWdub3V0UmVzcG9uc2UuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5NZW1vcnlXZWJTdG9yYWdle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SXRlbShrZXkpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLmdldEl0ZW1cIiwga2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFba2V5XTtcbiAgICB9XG4gICAgXG4gICAgc2V0SXRlbShrZXksIHZhbHVlKXtcbiAgICAgICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnNldEl0ZW1cIiwga2V5KTtcbiAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gdmFsdWU7XG4gICAgfSAgIFxuICAgIFxuICAgIHJlbW92ZUl0ZW0oa2V5KXtcbiAgICAgICAgTG9nLmRlYnVnKFwiSW5NZW1vcnlXZWJTdG9yYWdlLnJlbW92ZUl0ZW1cIiwga2V5KTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGFba2V5XTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpLmxlbmd0aDtcbiAgICB9XG4gICAgXG4gICAga2V5KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9kYXRhKVtpbmRleF07XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBPaWRjQ2xpZW50IGZyb20gJy4vT2lkY0NsaWVudCc7XG5pbXBvcnQgVXNlck1hbmFnZXJTZXR0aW5ncyBmcm9tICcuL1VzZXJNYW5hZ2VyU2V0dGluZ3MnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBVc2VyTWFuYWdlckV2ZW50cyBmcm9tICcuL1VzZXJNYW5hZ2VyRXZlbnRzJztcbmltcG9ydCBTaWxlbnRSZW5ld1NlcnZpY2UgZnJvbSAnLi9TaWxlbnRSZW5ld1NlcnZpY2UnO1xuaW1wb3J0IFNlc3Npb25Nb25pdG9yIGZyb20gJy4vU2Vzc2lvbk1vbml0b3InO1xuaW1wb3J0IFRva2VuUmV2b2NhdGlvbkNsaWVudCBmcm9tICcuL1Rva2VuUmV2b2NhdGlvbkNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgT2lkY0NsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7fSxcbiAgICAgICAgU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciA9IFNpbGVudFJlbmV3U2VydmljZSxcbiAgICAgICAgU2Vzc2lvbk1vbml0b3JDdG9yID0gU2Vzc2lvbk1vbml0b3IsXG4gICAgICAgIFRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IgPSBUb2tlblJldm9jYXRpb25DbGllbnRcbiAgICApIHtcblxuICAgICAgICBpZiAoIShzZXR0aW5ncyBpbnN0YW5jZW9mIFVzZXJNYW5hZ2VyU2V0dGluZ3MpKSB7XG4gICAgICAgICAgICBzZXR0aW5ncyA9IG5ldyBVc2VyTWFuYWdlclNldHRpbmdzKHNldHRpbmdzKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG5cbiAgICAgICAgdGhpcy5fZXZlbnRzID0gbmV3IFVzZXJNYW5hZ2VyRXZlbnRzKHNldHRpbmdzKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlID0gbmV3IFNpbGVudFJlbmV3U2VydmljZUN0b3IodGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczsgdGhlc2Ugc2VydmljZXMgZGVwZW5kIHVwb24gdGhlIGV2ZW50cy5cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b21hdGljU2lsZW50UmVuZXcpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcImF1dG9tYXRpY1NpbGVudFJlbmV3IGlzIGNvbmZpZ3VyZWQsIHNldHRpbmcgdXAgc2lsZW50IHJlbmV3XCIpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFNpbGVudFJlbmV3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5tb25pdG9yU2Vzc2lvbikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwibW9uaXRvclNlc3Npb24gaXMgY29uZmlndXJlZCwgc2V0dGluZyB1cCBzZXNzaW9uIG1vbml0b3JcIik7XG4gICAgICAgICAgICB0aGlzLl9zZXNzaW9uTW9uaXRvciA9IG5ldyBTZXNzaW9uTW9uaXRvckN0b3IodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90b2tlblJldm9jYXRpb25DbGllbnQgPSBuZXcgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgZ2V0IF9yZWRpcmVjdE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnBvcHVwTmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgX2lmcmFtZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaWZyYW1lTmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgX3VzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudXNlclN0b3JlO1xuICAgIH1cblxuICAgIGdldCBldmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHM7XG4gICAgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuZ2V0VXNlclwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInVzZXIgbG9hZGVkXCIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInVzZXIgbm90IGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZVVzZXIoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJlbW92ZVVzZXJcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgTG9nLmluZm8oXCJ1c2VyIHJlbW92ZWQgZnJvbSBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzLnVubG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5SZWRpcmVjdChhcmdzKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluUmVkaXJlY3Qgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblJlZGlyZWN0Q2FsbGJhY2tcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQodXJsIHx8IHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yLnVybCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluUmVkaXJlY3RDYWxsYmFjayBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25pblJlZGlyZWN0Q2FsbGJhY2sgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgc2lnbmluUG9wdXAoYXJncyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwXCIpO1xuXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvcHVwX3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnJlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHBvcHVwX3JlZGlyZWN0X3VyaSBvciByZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwb3B1cF9yZWRpcmVjdF91cmkgb3IgcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MuZGlzcGxheSA9IFwicG9wdXBcIjtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluKGFyZ3MsIHRoaXMuX3BvcHVwTmF2aWdhdG9yLCB7XG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxuICAgICAgICAgICAgcG9wdXBXaW5kb3dGZWF0dXJlczogYXJncy5wb3B1cFdpbmRvd0ZlYXR1cmVzIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyxcbiAgICAgICAgICAgIHBvcHVwV2luZG93VGFyZ2V0OiBhcmdzLnBvcHVwV2luZG93VGFyZ2V0IHx8IHRoaXMuc2V0dGluZ3MucG9wdXBXaW5kb3dUYXJnZXRcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluUG9wdXAgc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5Qb3B1cCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWduaW5Qb3B1cENhbGxiYWNrKHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cENhbGxiYWNrXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9wb3B1cE5hdmlnYXRvcikudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluUG9wdXBDYWxsYmFjayBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25pblBvcHVwQ2FsbGJhY2sgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduaW5TaWxlbnQoYXJncyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudFwiKTtcblxuICAgICAgICBsZXQgdXJsID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICAgICAgYXJncy5wcm9tcHQgPSBcIm5vbmVcIjtcblxuICAgICAgICBsZXQgc2V0SWRUb2tlbjtcbiAgICAgICAgaWYgKGFyZ3MuaWRfdG9rZW5faGludCB8fCAhdGhpcy5zZXR0aW5ncy5pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcpIHtcbiAgICAgICAgICAgIHNldElkVG9rZW4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldElkVG9rZW4gPSB0aGlzLl9sb2FkVXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgYXJncy5pZF90b2tlbl9oaW50ID0gdXNlciAmJiB1c2VyLmlkX3Rva2VuO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2V0SWRUb2tlbi50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduaW4oYXJncywgdGhpcy5faWZyYW1lTmF2aWdhdG9yLCB7XG4gICAgICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dDogYXJncy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCB0aGlzLnNldHRpbmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXIucHJvZmlsZSAmJiB1c2VyLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluU2lsZW50IHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluU2lsZW50IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblNpbGVudENhbGxiYWNrKHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWduaW5TaWxlbnRDYWxsYmFja1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkNhbGxiYWNrKHVybCwgdGhpcy5faWZyYW1lTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5TaWxlbnRDYWxsYmFjayBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25pblNpbGVudENhbGxiYWNrIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcXVlcnlTZXNzaW9uU3RhdHVzKGFyZ3MgPSB7fSkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5xdWVyeVNlc3Npb25TdGF0dXNcIik7XG5cbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJncy5yZWRpcmVjdF91cmkgPSB1cmw7XG4gICAgICAgIGFyZ3MucHJvbXB0ID0gXCJub25lXCI7XG4gICAgICAgIGFyZ3MucmVzcG9uc2VfdHlwZSA9IFwiaWRfdG9rZW5cIjtcbiAgICAgICAgYXJncy5zY29wZSA9IFwib3BlbmlkXCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIHRoaXMuX2lmcmFtZU5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OiBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXRcbiAgICAgICAgfSkudGhlbihuYXZSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbmluUmVzcG9uc2UobmF2UmVzcG9uc2UudXJsKS50aGVuKHNpZ25pblJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJnb3Qgc2lnbmluIHJlc3BvbnNlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUgJiYgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIgJiYgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2VzcyBmb3Igc3ViOiBcIiwgIHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25fc3RhdGU6IHNpZ25pblJlc3BvbnNlLnNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWI6IHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc3ViLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkOiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnNpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJxdWVyeVNlc3Npb25TdGF0dXMgc3VjY2Vzc2Z1bCwgdXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NpZ25pbihhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIl9zaWduaW5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluRW5kKG5hdlJlc3BvbnNlLnVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbmluU3RhcnQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xuICAgICAgICBMb2cuZGVidWcoXCJfc2lnbmluU3RhcnRcIik7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5wcmVwYXJlKG5hdmlnYXRvclBhcmFtcykudGhlbihoYW5kbGUgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiZ290IG5hdmlnYXRvciB3aW5kb3cgaGFuZGxlXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWduaW5SZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbmluUmVxdWVzdCA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiZ290IHNpZ25pbiByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25pblJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvclBhcmFtcy5pZCA9IHNpZ25pblJlcXVlc3Quc3RhdGUuaWQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5uYXZpZ2F0ZShuYXZpZ2F0b3JQYXJhbXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkVycm9yIGFmdGVyIHByZXBhcmluZyBuYXZpZ2F0b3IsIGNsb3NpbmcgbmF2aWdhdG9yIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25pbkVuZCh1cmwpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiX3NpZ25pbkVuZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbmluUmVzcG9uc2UodXJsKS50aGVuKHNpZ25pblJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcImdvdCBzaWduaW4gcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIoc2lnbmluUmVzcG9uc2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIodXNlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwidXNlciBzdG9yZWRcIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbmluQ2FsbGJhY2sodXJsLCBuYXZpZ2F0b3IpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiX3NpZ25pbkNhbGxiYWNrXCIpO1xuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmNhbGxiYWNrKHVybCk7XG4gICAgfVxuXG4gICAgc2lnbm91dFJlZGlyZWN0KGFyZ3MgPSB7fSkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWdub3V0UmVkaXJlY3RcIik7XG4gICAgICAgIGxldCBwb3N0TG9nb3V0UmVkaXJlY3RVcmkgPSBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTtcbiAgICAgICAgaWYgKHBvc3RMb2dvdXRSZWRpcmVjdFVyaSl7XG4gICAgICAgICAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHBvc3RMb2dvdXRSZWRpcmVjdFVyaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yKS50aGVuKCgpPT57XG4gICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25vdXRSZWRpcmVjdCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdENhbGxiYWNrXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dEVuZCh1cmwgfHwgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IudXJsKS50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25vdXRSZWRpcmVjdENhbGxiYWNrIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25vdXRQb3B1cChhcmdzID0ge30pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBcIik7XG5cbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgICAgICBhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSA9IHVybDtcbiAgICAgICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xuICAgICAgICBpZiAoYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpe1xuICAgICAgICAgICAgLy8gd2UncmUgcHV0dGluZyBhIGR1bW15IGVudHJ5IGluIGhlcmUgYmVjYXVzZSB3ZSBcbiAgICAgICAgICAgIC8vIG5lZWQgYSB1bmlxdWUgaWQgZnJvbSB0aGUgc3RhdGUgZm9yIG5vdGlmaWNhdGlvblxuICAgICAgICAgICAgLy8gdG8gdGhlIHBhcmVudCB3aW5kb3csIHdoaWNoIGlzIG5lY2Vzc2FyeSBpZiB3ZVxuICAgICAgICAgICAgLy8gcGxhbiB0byByZXR1cm4gYmFjayB0byB0aGUgY2xpZW50IGFmdGVyIHNpZ25vdXRcbiAgICAgICAgICAgIC8vIGFuZCBzbyB3ZSBjYW4gY2xvc2UgdGhlIHBvcHVwIGFmdGVyIHNpZ25vdXRcbiAgICAgICAgICAgIGFyZ3Muc3RhdGUgPSBhcmdzLnN0YXRlIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXQoYXJncywgdGhpcy5fcG9wdXBOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxuICAgICAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQ6IGFyZ3MucG9wdXBXaW5kb3dUYXJnZXQgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd1RhcmdldFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbm91dFBvcHVwIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWdub3V0UG9wdXBDYWxsYmFjayh1cmwsIGtlZXBPcGVuKSB7XG4gICAgICAgIGlmICh0eXBlb2Yoa2VlcE9wZW4pID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YodXJsKSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB1cmwgPSBudWxsO1xuICAgICAgICAgICAga2VlcE9wZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRQb3B1cENhbGxiYWNrXCIpO1xuICAgICAgICBsZXQgZGVsaW1pdGVyID0gJz8nO1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBOYXZpZ2F0b3IuY2FsbGJhY2sodXJsLCBrZWVwT3BlbiwgZGVsaW1pdGVyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbm91dFBvcHVwQ2FsbGJhY2sgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NpZ25vdXQoYXJncywgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xuICAgICAgICBMb2cuZGVidWcoXCJfc2lnbm91dFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25vdXRTdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcykudGhlbihuYXZSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dEVuZChuYXZSZXNwb25zZS51cmwpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25vdXRTdGFydChhcmdzID0ge30sIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiX3NpZ25vdXRTdGFydFwiKTtcblxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwibG9hZGVkIGN1cnJlbnQgdXNlciBmcm9tIHN0b3JhZ2VcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgcmV2b2tlUHJvbWlzZSA9IHRoaXMuX3NldHRpbmdzLnJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID8gdGhpcy5fcmV2b2tlSW50ZXJuYWwodXNlcikgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2b2tlUHJvbWlzZS50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRfdG9rZW4gPSBhcmdzLmlkX3Rva2VuX2hpbnQgfHwgdXNlciAmJiB1c2VyLmlkX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWRfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNldHRpbmcgaWRfdG9rZW4gaW50byBzaWdub3V0IHJlcXVlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmlkX3Rva2VuX2hpbnQgPSBpZF90b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZVVzZXIoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInVzZXIgcmVtb3ZlZCwgY3JlYXRpbmcgc2lnbm91dCByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTaWdub3V0UmVxdWVzdChhcmdzKS50aGVuKHNpZ25vdXRSZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJnb3Qgc2lnbm91dCByZXF1ZXN0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLnVybCA9IHNpZ25vdXRSZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2lnbm91dFJlcXVlc3Quc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbm91dFJlcXVlc3Quc3RhdGUuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGUubmF2aWdhdGUobmF2aWdhdG9yUGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZS5jbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJFcnJvciBhZnRlciBwcmVwYXJpbmcgbmF2aWdhdG9yLCBjbG9zaW5nIG5hdmlnYXRvciB3aW5kb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWdub3V0RW5kKHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJfc2lnbm91dEVuZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzU2lnbm91dFJlc3BvbnNlKHVybCkudGhlbihzaWdub3V0UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiZ290IHNpZ25vdXQgcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBzaWdub3V0UmVzcG9uc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldm9rZUFjY2Vzc1Rva2VuKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5yZXZva2VBY2Nlc3NUb2tlblwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZFVzZXIoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUludGVybmFsKHVzZXIsIHRydWUpLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwicmVtb3ZpbmcgdG9rZW4gcHJvcGVydGllcyBmcm9tIHVzZXIgYW5kIHJlLXN0b3JpbmdcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdXNlci5hY2Nlc3NfdG9rZW4gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLmV4cGlyZXNfYXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLnRva2VuX3R5cGUgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInVzZXIgc3RvcmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzLmxvYWQodXNlcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICBMb2cuaW5mbyhcImFjY2VzcyB0b2tlbiByZXZva2VkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZUludGVybmFsKHVzZXIsIHJlcXVpcmVkKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcImNoZWNraW5nIGlmIHRva2VuIHJldm9jYXRpb24gaXMgbmVjZXNzYXJ5XCIpO1xuXG4gICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB1c2VyICYmIHVzZXIuYWNjZXNzX3Rva2VuO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBKV1QgdnMuIHJlZmVyZW5jZSB0b2tlblxuICAgICAgICBpZiAoIWFjY2Vzc190b2tlbiB8fCBhY2Nlc3NfdG9rZW4uaW5kZXhPZignLicpID49IDApIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIm5vIG5lZWQgdG8gcmV2b2tlIGR1ZSB0byBubyB1c2VyLCB0b2tlbiwgb3IgSldUIGZvcm1hdFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudC5yZXZva2UoYWNjZXNzX3Rva2VuLCByZXF1aXJlZCkudGhlbigoKSA9PiB0cnVlKTtcbiAgICB9XG5cbiAgICBzdGFydFNpbGVudFJlbmV3KCkge1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2Uuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdG9wU2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgZ2V0IF91c2VyU3RvcmVLZXkoKSB7XG4gICAgICAgIHJldHVybiBgdXNlcjoke3RoaXMuc2V0dGluZ3MuYXV0aG9yaXR5fToke3RoaXMuc2V0dGluZ3MuY2xpZW50X2lkfWA7XG4gICAgfVxuXG4gICAgX2xvYWRVc2VyKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJfbG9hZFVzZXJcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5nZXQodGhpcy5fdXNlclN0b3JlS2V5KS50aGVuKHN0b3JhZ2VTdHJpbmcgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJ1c2VyIHN0b3JhZ2VTdHJpbmcgbG9hZGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBVc2VyLmZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJubyB1c2VyIHN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RvcmVVc2VyKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInN0b3JlVXNlciBzdG9yaW5nIHVzZXJcIik7XG5cbiAgICAgICAgICAgIHZhciBzdG9yYWdlU3RyaW5nID0gdXNlci50b1N0b3JhZ2VTdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91c2VyU3RvcmUuc2V0KHRoaXMuX3VzZXJTdG9yZUtleSwgc3RvcmFnZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJzdG9yZVVzZXIgcmVtb3ZpbmcgdXNlciBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5yZW1vdmUodGhpcy5fdXNlclN0b3JlS2V5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Vc2VyTWFuYWdlci5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IE9pZGNDbGllbnRTZXR0aW5ncyBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncyc7XG5pbXBvcnQgUmVkaXJlY3ROYXZpZ2F0b3IgZnJvbSAnLi9SZWRpcmVjdE5hdmlnYXRvcic7XG5pbXBvcnQgSUZyYW1lTmF2aWdhdG9yIGZyb20gJy4vSUZyYW1lTmF2aWdhdG9yJztcbmltcG9ydCBXZWJTdG9yYWdlU3RhdGVTdG9yZSBmcm9tICcuL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlJztcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnO1xuXG5jb25zdCBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSA2MDtcbmNvbnN0IERlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCA9IDIwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNYW5hZ2VyU2V0dGluZ3MgZXh0ZW5kcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgcG9wdXBfcmVkaXJlY3RfdXJpLFxuICAgICAgICBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgIHBvcHVwV2luZG93VGFyZ2V0LFxuICAgICAgICBzaWxlbnRfcmVkaXJlY3RfdXJpLFxuICAgICAgICBzaWxlbnRSZXF1ZXN0VGltZW91dCxcbiAgICAgICAgYXV0b21hdGljU2lsZW50UmVuZXcgPSBmYWxzZSxcbiAgICAgICAgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gdHJ1ZSxcbiAgICAgICAgbW9uaXRvclNlc3Npb24gPSB0cnVlLFxuICAgICAgICBjaGVja1Nlc3Npb25JbnRlcnZhbCA9IERlZmF1bHRDaGVja1Nlc3Npb25JbnRlcnZhbCxcbiAgICAgICAgcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPSBmYWxzZSxcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXG4gICAgICAgIHJlZGlyZWN0TmF2aWdhdG9yID0gbmV3IFJlZGlyZWN0TmF2aWdhdG9yKCksXG4gICAgICAgIHBvcHVwTmF2aWdhdG9yID0gbmV3IFBvcHVwTmF2aWdhdG9yKCksXG4gICAgICAgIGlmcmFtZU5hdmlnYXRvciA9IG5ldyBJRnJhbWVOYXZpZ2F0b3IoKSxcbiAgICAgICAgdXNlclN0b3JlID0gbmV3IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlKHsgc3RvcmU6IEdsb2JhbC5zZXNzaW9uU3RvcmFnZSB9KVxuICAgIH0gPSB7fSkge1xuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xuXG4gICAgICAgIHRoaXMuX3BvcHVwX3JlZGlyZWN0X3VyaSA9IHBvcHVwX3JlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9wb3B1cFdpbmRvd0ZlYXR1cmVzID0gcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgICAgICAgdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQgPSBwb3B1cFdpbmRvd1RhcmdldDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3NpbGVudF9yZWRpcmVjdF91cmkgPSBzaWxlbnRfcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9zaWxlbnRSZXF1ZXN0VGltZW91dCA9IHNpbGVudFJlcXVlc3RUaW1lb3V0O1xuICAgICAgICB0aGlzLl9hdXRvbWF0aWNTaWxlbnRSZW5ldyA9ICEhYXV0b21hdGljU2lsZW50UmVuZXc7XG4gICAgICAgIHRoaXMuX2luY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldyA9IGluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldztcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcblxuICAgICAgICB0aGlzLl9tb25pdG9yU2Vzc2lvbiA9IG1vbml0b3JTZXNzaW9uO1xuICAgICAgICB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbCA9IGNoZWNrU2Vzc2lvbkludGVydmFsO1xuICAgICAgICB0aGlzLl9yZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xuXG4gICAgICAgIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yID0gcmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgICAgIHRoaXMuX3BvcHVwTmF2aWdhdG9yID0gcG9wdXBOYXZpZ2F0b3I7XG4gICAgICAgIHRoaXMuX2lmcmFtZU5hdmlnYXRvciA9IGlmcmFtZU5hdmlnYXRvcjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX3VzZXJTdG9yZSA9IHVzZXJTdG9yZTtcbiAgICB9XG5cbiAgICBnZXQgcG9wdXBfcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICBnZXQgcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICBnZXQgcG9wdXBXaW5kb3dGZWF0dXJlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXM7XG4gICAgfVxuICAgIGdldCBwb3B1cFdpbmRvd1RhcmdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcHVwV2luZG93VGFyZ2V0O1xuICAgIH1cblxuICAgIGdldCBzaWxlbnRfcmVkaXJlY3RfdXJpKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaTtcbiAgICB9XG4gICAgIGdldCBzaWxlbnRSZXF1ZXN0VGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0O1xuICAgIH1cbiAgICBnZXQgYXV0b21hdGljU2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHJldHVybiAhISh0aGlzLnNpbGVudF9yZWRpcmVjdF91cmkgJiYgdGhpcy5fYXV0b21hdGljU2lsZW50UmVuZXcpO1xuICAgIH1cbiAgICBnZXQgaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xuICAgIH1cbiAgICBnZXQgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZTtcbiAgICB9XG5cbiAgICBnZXQgbW9uaXRvclNlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb25pdG9yU2Vzc2lvbjtcbiAgICB9XG4gICAgZ2V0IGNoZWNrU2Vzc2lvbkludGVydmFsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgfVxuICAgIGdldCByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0O1xuICAgIH1cblxuICAgIGdldCByZWRpcmVjdE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZGlyZWN0TmF2aWdhdG9yO1xuICAgIH1cbiAgICBnZXQgcG9wdXBOYXZpZ2F0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cE5hdmlnYXRvcjtcbiAgICB9XG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lmcmFtZU5hdmlnYXRvcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHVzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlck1hbmFnZXJTZXR0aW5ncy5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciB7XG4gICAgXG4gICAgcHJlcGFyZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVkaXJlY3ROYXZpZ2F0b3IubmF2aWdhdGVcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudXJsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlZGlyZWN0TmF2aWdhdG9yLnVybFwiKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWRpcmVjdE5hdmlnYXRvci5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IElGcmFtZVdpbmRvdyBmcm9tICcuL0lGcmFtZVdpbmRvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElGcmFtZU5hdmlnYXRvciB7XG5cbiAgICBwcmVwYXJlKHBhcmFtcykge1xuICAgICAgICBsZXQgZnJhbWUgPSBuZXcgSUZyYW1lV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZnJhbWUpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVOYXZpZ2F0b3IuY2FsbGJhY2tcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIElGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnQodXJsKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5jb25zdCBEZWZhdWx0VGltZW91dCA9IDEwMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRnJhbWVXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5jdG9yXCIpO1xuXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5uYXZpZ2F0ZVwiKTtcblxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHBhcmFtcy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCBEZWZhdWx0VGltZW91dDtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzaW5nIHRpbWVvdXQgb2Y6XCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl90aW1lb3V0LmJpbmQodGhpcyksIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUuc3JjID0gcGFyYW1zLnVybDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB9XG5cbiAgICBfY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cuX2NsZWFudXBcIik7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9mcmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lb3V0KCkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cuX3RpbWVvdXRcIik7XG4gICAgICAgIHRoaXMuX2Vycm9yKFwiRnJhbWUgd2luZG93IHRpbWVkIG91dFwiKTtcbiAgICB9XG5cbiAgICBfbWVzc2FnZShlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5fbWVzc2FnZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdGltZXIgJiZcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZnJvbSBmcmFtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBfb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgIH1cblxuICAgIHN0YXRpYyBub3RpZnlQYXJlbnQodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93ICE9PSB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwicG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh1cmwsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSUZyYW1lV2luZG93LmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSBpZF90b2tlbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHRva2VuX3R5cGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gZXhwaXJlc19hdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVzX2luKCkge1xuICAgICAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcbiAgICAgICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBzY29wZXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgfVxuXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkX3Rva2VuOiB0aGlzLmlkX3Rva2VuLFxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgcHJvZmlsZTogdGhpcy5wcm9maWxlLFxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXIuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBBY2Nlc3NUb2tlbkV2ZW50cyBmcm9tICcuL0FjY2Vzc1Rva2VuRXZlbnRzJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIGxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkID0gbmV3IEV2ZW50KFwiVXNlciB1bmxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dCA9IG5ldyBFdmVudChcIlVzZXIgc2lnbmVkIG91dFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkID0gbmV3IEV2ZW50KFwiVXNlciBzZXNzaW9uIGNoYW5nZWRcIik7XG4gICAgfVxuXG4gICAgbG9hZCh1c2VyLCByYWlzZUV2ZW50PXRydWUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcbiAgICAgICAgc3VwZXIubG9hZCh1c2VyKTtcbiAgICAgICAgaWYgKHJhaXNlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5sb2FkKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy51bmxvYWRcIik7XG4gICAgICAgIHN1cGVyLnVubG9hZCgpO1xuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgXG4gICAgYWRkVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVNpbGVudFJlbmV3RXJyb3JcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yYWlzZShlKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlVXNlclNpZ25lZE91dChlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXRcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoZSk7XG4gICAgfVxuXG4gICAgYWRkVXNlclNlc3Npb25DaGFuZ2VkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlVXNlclNlc3Npb25DaGFuZ2VkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkKGUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmFpc2UoZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmluZ1wiKSxcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJlZFwiKVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXI7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZCA9IGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyO1xuICAgIH1cblxuICAgIGxvYWQoY29udGFpbmVyKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWRcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jYW5jZWxUaW1lcnMoKTtcblxuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiB3aGVyZSB3ZSBjYXJlIGFib3V0IGV4cGlyYXRpb25cbiAgICAgICAgaWYgKGNvbnRhaW5lci5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNvbnRhaW5lci5leHBpcmVzX2luO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiYWNjZXNzIHRva2VuIHByZXNlbnQsIHJlbWFpbmluZyBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSByZWdpc3RlciBleHBpcmluZyBpZiB3ZSBzdGlsbCBoYXZlIHRpbWVcbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJpbmcgPSBkdXJhdGlvbiAtIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgICAgICAgICAgICAgIGlmIChleHBpcmluZyA8PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJpbmcgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJyZWdpc3RlcmluZyBleHBpcmluZyB0aW1lciBpbjpcIiwgZXhwaXJpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuaW5pdChleHBpcmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFsd2F5cyByZWdpc3RlciBleHBpcmVkLiBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcbiAgICAgICAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwicmVnaXN0ZXJpbmcgZXhwaXJlZCB0aW1lciBpbjpcIiwgZXhwaXJlZCk7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMudW5sb2FkXCIpO1xuICAgICAgICB0aGlzLl9jYW5jZWxUaW1lcnMoKTtcbiAgICB9XG4gICAgXG4gICAgX2NhbmNlbFRpbWVycygpe1xuICAgICAgICBMb2cuZGVidWcoXCJjYW5jZWxpbmcgZXhpc3RpbmcgYWNjZXNzIHRva2VuIHRpbWVyc1wiKTtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cblxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY2Vzc1Rva2VuRXZlbnRzLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxuY29uc3QgVGltZXJEdXJhdGlvbiA9IDU7IC8vIHNlY29uZHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBFdmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aW1lciA9IEdsb2JhbC50aW1lcikge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5fbm93RnVuYyA9ICgpID0+IERhdGUubm93KCkgLyAxMDAwO1xuICAgIH1cblxuICAgIGdldCBub3coKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9ub3dGdW5jKCkpO1xuICAgIH1cblxuICAgIGluaXQoZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgICAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoZHVyYXRpb24pO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmluaXQgdGltZXIgXCIgKyB0aGlzLl9uYW1lICsgXCIgZm9yIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSB0aGlzLm5vdyArIGR1cmF0aW9uO1xuXG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgZmFpcmx5IHNob3J0IHRpbWVyIGFuZCB0aGVuIGNoZWNraW5nIHRoZSBleHBpcmF0aW9uIGluIHRoZSBcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gaGFuZGxlIHNjZW5hcmlvcyB3aGVyZSB0aGUgYnJvd3NlciBkZXZpY2Ugc2xlZXBzLCBhbmQgdGhlbiBcbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxuICAgICAgICB2YXIgdGltZXJEdXJhdGlvbiA9IFRpbWVyRHVyYXRpb247XG4gICAgICAgIGlmIChkdXJhdGlvbiA8IHRpbWVyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksIHRpbWVyRHVyYXRpb24gKiAxMDAwKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl90aW1lckhhbmRsZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XG4gICAgICAgICAgICB0aGlzLl90aW1lci5jbGVhckludGVydmFsKHRoaXMuX3RpbWVySGFuZGxlKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVySGFuZGxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLl9leHBpcmF0aW9uIC0gdGhpcy5ub3c7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLl9jYWxsYmFjazsgXCIgKyB0aGlzLl9uYW1lICsgXCIgdGltZXIgZXhwaXJlcyBpbjpcIiwgZGlmZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4cGlyYXRpb24gPD0gdGhpcy5ub3cpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICBzdXBlci5yYWlzZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1RpbWVyLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXIoY2IpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goY2IpO1xuICAgIH1cblxuICAgIHJlbW92ZUhhbmRsZXIoY2IpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2NhbGxiYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBjYik7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFpc2UoLi4ucGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJhaXNpbmcgZXZlbnQ6IFwiICsgdGhpcy5fbmFtZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbaV0oLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudC5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IodXNlck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSB0aGlzLl90b2tlbkV4cGlyaW5nLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCB0cmlnZ2VyIGxvYWRpbmcgb2YgdGhlIHVzZXIgc28gdGhlIGV4cGlyaW5nIGV2ZW50cyBjYW4gYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXI9PntcbiAgICAgICAgICAgICAgICAvLyBkZWxpYmVyYXRlIG5vcFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkVycm9yIGZyb20gZ2V0VXNlcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2tlbkV4cGlyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJTaWxlbnRSZW5ld1NlcnZpY2UgYXV0b21hdGljYWxseSByZW5ld2luZyBhY2Nlc3MgdG9rZW5cIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2lsZW50IHRva2VuIHJlbmV3YWwgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkVycm9yIGZyb20gc2lnbmluU2lsZW50OlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgQ2hlY2tTZXNzaW9uSUZyYW1lIGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbk1vbml0b3Ige1xuXG4gICAgY29uc3RydWN0b3IodXNlck1hbmFnZXIsIENoZWNrU2Vzc2lvbklGcmFtZUN0b3IgPSBDaGVja1Nlc3Npb25JRnJhbWUpIHtcbiAgICAgICAgaWYgKCF1c2VyTWFuYWdlcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gdXNlciBtYW5hZ2VyIHBhc3NlZCB0byBTZXNzaW9uTW9uaXRvclwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZUN0b3I7XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJMb2FkZWQodGhpcy5fc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQodGhpcy5fc3RvcC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOyBlcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLnNldHRpbmdzO1xuICAgIH1cbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLm1ldGFkYXRhU2VydmljZTtcbiAgICB9XG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgfVxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICB9XG5cbiAgICBfc3RhcnQodXNlcikge1xuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcblxuICAgICAgICBpZiAoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcbiAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldENoZWNrU2Vzc2lvbklmcmFtZSgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSW5pdGlhbGl6aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRfaWQgPSB0aGlzLl9jbGllbnRfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IodGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSwgY2xpZW50X2lkLCB1cmwsIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk5vIGNoZWNrIHNlc3Npb24gaWZyYW1lIGZvdW5kIGluIHRoZSBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJFcnJvciBmcm9tIGdldENoZWNrU2Vzc2lvbklmcmFtZTpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N0b3AoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdG9wXCIpO1xuXG4gICAgICAgIHRoaXMuX3N1YiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NpZCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrXCIpO1xuXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICB2YXIgcmFpc2VVc2VyU2lnbmVkT3V0RXZlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiA9PT0gdGhpcy5fc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhaXNlVXNlclNpZ25lZE91dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uLnNlc3Npb25fc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnNpZCA9PT0gdGhpcy5fc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHNlc3Npb24gc3RhdGUgaGFzIGNoYW5nZWQsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkRpZmZlcmVudCBzdWJqZWN0IHNpZ25lZCBpbnRvIE9QOlwiLCBzZXNzaW9uLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYWlzZVVzZXJTaWduZWRPdXRFdmVudCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJFcnJvciBjYWxsaW5nIHF1ZXJ5Q3VycmVudFNpZ25pblNlc3Npb247IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcblxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tTZXNzaW9uSUZyYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgY2xpZW50X2lkLCB1cmwsIGludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcblxuICAgICAgICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIHVybC5pbmRleE9mKFwiLy9cIikgKyAyKTtcbiAgICAgICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHVybDtcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX21lc3NhZ2UoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJlcnJvciBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLmRhdGEgPT09IFwiY2hhbmdlZFwiKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiY2hhbmdlZCBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhlLmRhdGEgKyBcIiBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbl9zdGF0ZSAhPT0gc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0XCIpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHRoaXMuX2NsaWVudF9pZCArIFwiIFwiICsgdGhpcy5fc2Vzc2lvbl9zdGF0ZSwgdGhpcy5fZnJhbWVfb3JpZ2luKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdG9wXCIpO1xuXG4gICAgICAgIHRoaXMuX3Nlc3Npb25fc3RhdGUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IE1ldGFkYXRhU2VydmljZSBmcm9tICcuL01ldGFkYXRhU2VydmljZSc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcblxuY29uc3QgQWNjZXNzVG9rZW5UeXBlSGludCA9IFwiYWNjZXNzX3Rva2VuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzZXR0aW5ncyBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcmV2b2tlKGFjY2Vzc1Rva2VuLCByZXF1aXJlZCkge1xuICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlXCIpO1xuXG4gICAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGFjY2Vzc1Rva2VuIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjZXNzVG9rZW4gcHJvdmlkZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRSZXZvY2F0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJldm9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBub3QgcmVxdWlyZWQsIHNvIGRvbid0IGVycm9yIGFuZCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiQ2FsbGluZyByZXZvY2F0aW9uIGVuZHBvaW50XCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yKCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoeGhyLnN0YXR1c1RleHQgKyBcIiAoXCIgKyB4aHIuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgYm9keSA9IFwiY2xpZW50X2lkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudF9pZCk7IFxuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcbiAgICAgICAgICAgICAgICBib2R5ICs9IFwiJmNsaWVudF9zZWNyZXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X3NlY3JldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChBY2Nlc3NUb2tlblR5cGVIaW50KTtcbiAgICAgICAgICAgIGJvZHkgKz0gXCImdG9rZW49XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGJvZHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==