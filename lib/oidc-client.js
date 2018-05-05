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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYTFhMDY4ZjgxNzY4NTQ2YWNhYyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9HbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc3BvbnNlVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9NZXRhZGF0YVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pzb25TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VySW5mb1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pvc2VVdGlsLmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcnlwdG8tanMvc2hhMjU2LmpzIiwid2VicGFjazovLy8uL34vY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcnlwdG8tanMvZW5jLWJhc2U2NC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NyeXB0by1qcy9lbmMtaGV4LmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9yc2EtdmVyaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qc2JuL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL2p3a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi91cmwtam9pbi9saWIvdXJsLWpvaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L2xpYi9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL3JlcXVlc3QtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL3Jlc3BvbnNlLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdXBlcmFnZW50L2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3N1cGVyYWdlbnQvbGliL2FnZW50LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9kdW1teS1jYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXJsVXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbmluU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NpZ25pblJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9TaWdub3V0UmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2lnbm91dFJlc3BvbnNlLmpzIiwid2VicGFjazovLy8uL3NyYy9Jbk1lbW9yeVdlYlN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9Vc2VyTWFuYWdlclNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWRpcmVjdE5hdmlnYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUZyYW1lTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9JRnJhbWVXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9BY2Nlc3NUb2tlbkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9TaWxlbnRSZW5ld1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Nlc3Npb25Nb25pdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGVja1Nlc3Npb25JRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Rva2VuUmV2b2NhdGlvbkNsaWVudC5qcyJdLCJuYW1lcyI6WyJMb2ciLCJyZXF1aXJlIiwiZGVmYXVsdCIsIk9pZGNDbGllbnQiLCJPaWRjQ2xpZW50U2V0dGluZ3MiLCJXZWJTdG9yYWdlU3RhdGVTdG9yZSIsIkluTWVtb3J5V2ViU3RvcmFnZSIsIlVzZXJNYW5hZ2VyIiwiQWNjZXNzVG9rZW5FdmVudHMiLCJNZXRhZGF0YVNlcnZpY2UiLCJDaGVja1Nlc3Npb25JRnJhbWUiLCJUb2tlblJldm9jYXRpb25DbGllbnQiLCJTZXNzaW9uTW9uaXRvciIsIkdsb2JhbCIsIlVzZXIiLCJub3BMb2dnZXIiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJOT05FIiwiRVJST1IiLCJXQVJOIiwiSU5GTyIsIkRFQlVHIiwibG9nZ2VyIiwibGV2ZWwiLCJjb25zb2xlIiwiYXJncyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwidmFsdWUiLCJFcnJvciIsInJlc2V0Iiwic2V0dGluZ3MiLCJfc2V0dGluZ3MiLCJyZXNwb25zZV90eXBlIiwic2NvcGUiLCJyZWRpcmVjdF91cmkiLCJkYXRhIiwic3RhdGUiLCJwcm9tcHQiLCJkaXNwbGF5IiwibWF4X2FnZSIsInVpX2xvY2FsZXMiLCJpZF90b2tlbl9oaW50IiwibG9naW5faGludCIsImFjcl92YWx1ZXMiLCJyZXNvdXJjZSIsInJlcXVlc3QiLCJyZXF1ZXN0X3VyaSIsImV4dHJhUXVlcnlQYXJhbXMiLCJzdGF0ZVN0b3JlIiwiY2xpZW50X2lkIiwiYXV0aG9yaXR5IiwiX21ldGFkYXRhU2VydmljZSIsImdldEF1dGhvcml6YXRpb25FbmRwb2ludCIsInRoZW4iLCJ1cmwiLCJzaWduaW5SZXF1ZXN0IiwiU2lnbmluUmVxdWVzdCIsInNpZ25pblN0YXRlIiwiX3N0YXRlU3RvcmUiLCJzZXQiLCJpZCIsInRvU3RvcmFnZVN0cmluZyIsInJlc3BvbnNlIiwiU2lnbmluUmVzcG9uc2UiLCJQcm9taXNlIiwicmVqZWN0IiwicmVtb3ZlIiwic3RvcmVkU3RhdGVTdHJpbmciLCJTaWduaW5TdGF0ZSIsImZyb21TdG9yYWdlU3RyaW5nIiwiX3ZhbGlkYXRvciIsInZhbGlkYXRlU2lnbmluUmVzcG9uc2UiLCJwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJnZXRFbmRTZXNzaW9uRW5kcG9pbnQiLCJTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRTdGF0ZSIsIlNpZ25vdXRSZXNwb25zZSIsIkVycm9yUmVzcG9uc2UiLCJyZXNvbHZlIiwic3RhdGVLZXkiLCJTdGF0ZSIsInZhbGlkYXRlU2lnbm91dFJlc3BvbnNlIiwiY2xlYXJTdGFsZVN0YXRlIiwic3RhbGVTdGF0ZUFnZSIsInZhbGlkYXRvciIsIm1ldGFkYXRhU2VydmljZSIsIk9pZGNNZXRhZGF0YVVybFBhdGgiLCJEZWZhdWx0UmVzcG9uc2VUeXBlIiwiRGVmYXVsdFNjb3BlIiwiRGVmYXVsdFN0YWxlU3RhdGVBZ2UiLCJEZWZhdWx0Q2xvY2tTa2V3SW5TZWNvbmRzIiwibWV0YWRhdGFVcmwiLCJtZXRhZGF0YSIsInNpZ25pbmdLZXlzIiwiY2xpZW50X3NlY3JldCIsImZpbHRlclByb3RvY29sQ2xhaW1zIiwibG9hZFVzZXJJbmZvIiwiY2xvY2tTa2V3IiwiUmVzcG9uc2VWYWxpZGF0b3JDdG9yIiwiUmVzcG9uc2VWYWxpZGF0b3IiLCJNZXRhZGF0YVNlcnZpY2VDdG9yIiwiX2F1dGhvcml0eSIsIl9tZXRhZGF0YVVybCIsIl9tZXRhZGF0YSIsIl9zaWduaW5nS2V5cyIsIl9jbGllbnRfaWQiLCJfY2xpZW50X3NlY3JldCIsIl9yZXNwb25zZV90eXBlIiwiX3Njb3BlIiwiX3JlZGlyZWN0X3VyaSIsIl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkiLCJfcHJvbXB0IiwiX2Rpc3BsYXkiLCJfbWF4X2FnZSIsIl91aV9sb2NhbGVzIiwiX2Fjcl92YWx1ZXMiLCJfcmVzb3VyY2UiLCJfZmlsdGVyUHJvdG9jb2xDbGFpbXMiLCJfbG9hZFVzZXJJbmZvIiwiX3N0YWxlU3RhdGVBZ2UiLCJfY2xvY2tTa2V3IiwiX2V4dHJhUXVlcnlQYXJhbXMiLCJpbmRleE9mIiwibGVuZ3RoIiwicHJlZml4Iiwic3RvcmUiLCJsb2NhbFN0b3JhZ2UiLCJfc3RvcmUiLCJfcHJlZml4Iiwia2V5Iiwic2V0SXRlbSIsIml0ZW0iLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsImtleXMiLCJpbmRleCIsInB1c2giLCJzdWJzdHIiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2IiLCJkdXJhdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGUiLCJ0ZXN0aW5nIiwibmV3UmVxdWVzdCIsImxvY2F0aW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJYTUxIdHRwUmVxdWVzdCIsIlByb3RvY29sQ2xhaW1zIiwiVXNlckluZm9TZXJ2aWNlQ3RvciIsIlVzZXJJbmZvU2VydmljZSIsImpvc2VVdGlsIiwiSm9zZVV0aWwiLCJfdXNlckluZm9TZXJ2aWNlIiwiX2pvc2VVdGlsIiwiX3Byb2Nlc3NTaWduaW5QYXJhbXMiLCJfdmFsaWRhdGVUb2tlbnMiLCJfcHJvY2Vzc0NsYWltcyIsIm5vbmNlIiwiaWRfdG9rZW4iLCJpc09wZW5JZENvbm5lY3QiLCJwcm9maWxlIiwiYWNjZXNzX3Rva2VuIiwiZ2V0Q2xhaW1zIiwiY2xhaW1zIiwic3ViIiwiX21lcmdlQ2xhaW1zIiwiY2xhaW1zMSIsImNsYWltczIiLCJyZXN1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJuYW1lIiwidmFsdWVzIiwiaXNBcnJheSIsImkiLCJmb3JFYWNoIiwidHlwZSIsIl92YWxpZGF0ZUlkVG9rZW5BbmRBY2Nlc3NUb2tlbiIsIl92YWxpZGF0ZUlkVG9rZW4iLCJfdmFsaWRhdGVBY2Nlc3NUb2tlbiIsImp3dCIsInBhcnNlSnd0IiwiaGVhZGVyIiwicGF5bG9hZCIsImtpZCIsImdldElzc3VlciIsImdldFNpZ25pbmdLZXlzIiwiX2ZpbHRlckJ5QWxnIiwiYWxnIiwiZmlsdGVyIiwiYXVkaWVuY2UiLCJjbG9ja1NrZXdJblNlY29uZHMiLCJ2YWxpZGF0ZUp3dCIsImlzc3VlciIsImt0eSIsInN0YXJ0c1dpdGgiLCJhdF9oYXNoIiwiaGFzaEFsZyIsImhhc2hCaXRzIiwicGFyc2VJbnQiLCJzaGEiLCJoYXNoIiwiaGFzaFN0cmluZyIsImxlZnQiLCJsZWZ0X2I2NHUiLCJoZXhUb0Jhc2U2NFVybCIsIkpzb25TZXJ2aWNlQ3RvciIsIkpzb25TZXJ2aWNlIiwiX2pzb25TZXJ2aWNlIiwiZ2V0SnNvbiIsIl9nZXRNZXRhZGF0YVByb3BlcnR5Iiwib3B0aW9uYWwiLCJnZXRNZXRhZGF0YSIsInVuZGVmaW5lZCIsImp3a3NfdXJpIiwia2V5U2V0IiwiWE1MSHR0cFJlcXVlc3RDdG9yIiwiX1hNTEh0dHBSZXF1ZXN0IiwidG9rZW4iLCJyZXEiLCJvcGVuIiwib25sb2FkIiwic3RhdHVzIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZSIsIm1lc3NhZ2UiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZ2V0VXNlckluZm9FbmRwb2ludCIsImVycm9yX2Rlc2NyaXB0aW9uIiwiZXJyb3JfdXJpIiwiQWxsb3dlZFNpZ25pbmdBbGdzIiwicGFyYW1ldGVycyIsImV4cGVjdGVkQWxnIiwiaWRUb2tlblZlcmlmaWVyIiwiSWRUb2tlblZlcmlmaWVyIiwiZGVjb2RlIiwibm93IiwiX3ZhbGlkYXRlSnd0IiwibGVld2F5IiwiRGF0ZSIsImlzcyIsImF1ZCIsInZhbGlkQXVkaWVuY2UiLCJsb3dlck5vdyIsInVwcGVyTm93IiwiaWF0IiwibmJmIiwiZXhwIiwidmVyaWZ5IiwiY3J5cHRvIiwiVXRpbCIsImhleHRvYjY0dSIsInNoYTI1NiIsImNyeXB0b0Jhc2U2NCIsImNyeXB0b0hleCIsIlJTQVZlcmlmaWVyIiwiYmFzZTY0IiwiandrcyIsIkR1bW15Q2FjaGUiLCJzdXBwb3J0ZWRBbGdzIiwib3B0aW9ucyIsImp3a3NDYWNoZSIsIl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjayIsImp3a3NVUkkiLCJDb25maWd1cmF0aW9uRXJyb3IiLCJqb2luIiwicHJvdG90eXBlIiwiaGVhZEFuZFBheWxvYWQiLCJlbmNvZGVkIiwic2lnbmF0dXJlIiwiZGVjb2RlVG9IRVgiLCJ0bm9uY2UiLCJUb2tlblZhbGlkYXRpb25FcnJvciIsImV4cGlyYXRpb25FcnJvciIsInZlcmlmeUV4cEFuZE5iZiIsImdldFJzYVZlcmlmaWVyIiwicnNhVmVyaWZpZXIiLCJjYXRjaCIsImV4cERhdGUiLCJuYmZEYXRlIiwic2V0VVRDU2Vjb25kcyIsInZlcmlmeUV4cEFuZElhdCIsImlhdERhdGUiLCJfdGhpcyIsImNhY2hla2V5IiwiaGFzIiwiZ2V0SldLUyIsImtleUluZm8iLCJtb2R1bHVzIiwiZ2V0IiwicGFydHMiLCJzcGxpdCIsImRlY29kZVRvU3RyaW5nIiwidmFsaWRhdGVBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwiYXRIYXNoIiwic2hhMjU2QWNjZXNzVG9rZW4iLCJoYXNoVG9IZXgiLCJzdHJpbmdpZnkiLCJoYXNoVG9IZXhGaXJzdEhhbGYiLCJzdWJzdHJpbmciLCJoYXNoRmlyc3RIYWxmV29yZEFycmF5IiwiaGFzaEZpcnN0SGFsZkJhc2U2NCIsImhhc2hGaXJzdEhhbGZCYXNlNjRTYWZlVXJsIiwiYmFzZTY0VG9CYXNlNjRVcmwiLCJtb2R1bGUiLCJleHBvcnRzIiwicm9vdCIsImZhY3RvcnkiLCJkZWZpbmUiLCJDcnlwdG9KUyIsIk1hdGgiLCJDIiwiQ19saWIiLCJsaWIiLCJXb3JkQXJyYXkiLCJIYXNoZXIiLCJDX2FsZ28iLCJhbGdvIiwiSCIsIksiLCJpc1ByaW1lIiwibiIsInNxcnROIiwic3FydCIsImZhY3RvciIsImdldEZyYWN0aW9uYWxCaXRzIiwiblByaW1lIiwicG93IiwiVyIsIlNIQTI1NiIsImV4dGVuZCIsIl9kb1Jlc2V0IiwiX2hhc2giLCJpbml0Iiwic2xpY2UiLCJfZG9Qcm9jZXNzQmxvY2siLCJNIiwib2Zmc2V0Iiwid29yZHMiLCJhIiwiYiIsImMiLCJkIiwiZiIsImciLCJoIiwiZ2FtbWEweCIsImdhbW1hMCIsImdhbW1hMXgiLCJnYW1tYTEiLCJjaCIsIm1haiIsInNpZ21hMCIsInNpZ21hMSIsInQxIiwidDIiLCJfZG9GaW5hbGl6ZSIsIl9kYXRhIiwiZGF0YVdvcmRzIiwibkJpdHNUb3RhbCIsIl9uRGF0YUJ5dGVzIiwibkJpdHNMZWZ0Iiwic2lnQnl0ZXMiLCJmbG9vciIsIl9wcm9jZXNzIiwiY2xvbmUiLCJjYWxsIiwiX2NyZWF0ZUhlbHBlciIsIkhtYWNTSEEyNTYiLCJfY3JlYXRlSG1hY0hlbHBlciIsImNyZWF0ZSIsIkYiLCJvYmoiLCJzdWJ0eXBlIiwiQmFzZSIsIm92ZXJyaWRlcyIsIm1peEluIiwiaGFzT3duUHJvcGVydHkiLCIkc3VwZXIiLCJhcmd1bWVudHMiLCJpbnN0YW5jZSIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eU5hbWUiLCJ0b1N0cmluZyIsImVuY29kZXIiLCJIZXgiLCJjb25jYXQiLCJ3b3JkQXJyYXkiLCJ0aGlzV29yZHMiLCJ0aGF0V29yZHMiLCJ0aGlzU2lnQnl0ZXMiLCJ0aGF0U2lnQnl0ZXMiLCJjbGFtcCIsInRoYXRCeXRlIiwiY2VpbCIsInJhbmRvbSIsIm5CeXRlcyIsInIiLCJtX3ciLCJtX3oiLCJtYXNrIiwicmNhY2hlIiwiX3IiLCJDX2VuYyIsImVuYyIsImhleENoYXJzIiwiYml0ZSIsImhleFN0ciIsImhleFN0ckxlbmd0aCIsIkxhdGluMSIsImxhdGluMUNoYXJzIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibGF0aW4xU3RyIiwibGF0aW4xU3RyTGVuZ3RoIiwiY2hhckNvZGVBdCIsIlV0ZjgiLCJkZWNvZGVVUklDb21wb25lbnQiLCJlc2NhcGUiLCJ1dGY4U3RyIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJCdWZmZXJlZEJsb2NrQWxnb3JpdGhtIiwiX2FwcGVuZCIsImRvRmx1c2giLCJkYXRhU2lnQnl0ZXMiLCJibG9ja1NpemUiLCJibG9ja1NpemVCeXRlcyIsIm5CbG9ja3NSZWFkeSIsIm1heCIsIl9taW5CdWZmZXJTaXplIiwibldvcmRzUmVhZHkiLCJuQnl0ZXNSZWFkeSIsIm1pbiIsInByb2Nlc3NlZFdvcmRzIiwic3BsaWNlIiwiY2ZnIiwidXBkYXRlIiwibWVzc2FnZVVwZGF0ZSIsImZpbmFsaXplIiwiaGFzaGVyIiwiSE1BQyIsIkJhc2U2NCIsIm1hcCIsIl9tYXAiLCJiYXNlNjRDaGFycyIsImJ5dGUxIiwiYnl0ZTIiLCJieXRlMyIsInRyaXBsZXQiLCJqIiwiY2hhckF0IiwicGFkZGluZ0NoYXIiLCJiYXNlNjRTdHIiLCJiYXNlNjRTdHJMZW5ndGgiLCJyZXZlcnNlTWFwIiwiX3JldmVyc2VNYXAiLCJwYWRkaW5nSW5kZXgiLCJwYXJzZUxvb3AiLCJiaXRzMSIsImJpdHMyIiwiQmlnSW50ZWdlciIsIkRpZ2VzdEluZm9IZWFkIiwic2hhMSIsInNoYTIyNCIsInNoYTM4NCIsInNoYTUxMiIsIm1kMiIsIm1kNSIsInJpcGVtZDE2MCIsIkRpZ2VzdEFsZ3MiLCJnZXRBbGdvcml0aG1Gcm9tRGlnZXN0IiwiaERpZ2VzdEluZm8iLCJhbGdOYW1lIiwiaGVhZCIsImxlbiIsIm1zZyIsImVuY3NpZyIsInJlcGxhY2UiLCJzaWciLCJiaXRMZW5ndGgiLCJkZWNyeXB0ZWRTaWciLCJtb2RQb3dJbnQiLCJkaWdlc3QiLCJkaWdlc3RJbmZvIiwibXNnSGFzaCIsImRiaXRzIiwiY2FuYXJ5Iiwial9sbSIsImZyb21OdW1iZXIiLCJmcm9tU3RyaW5nIiwibmJpIiwiYW0xIiwieCIsInciLCJ2IiwiYW0yIiwieGwiLCJ4aCIsImwiLCJtIiwiYW0zIiwiaW5Ccm93c2VyIiwibmF2aWdhdG9yIiwiYXBwTmFtZSIsImFtIiwiREIiLCJETSIsIkRWIiwiQklfRlAiLCJGViIsIkYxIiwiRjIiLCJCSV9STSIsIkJJX1JDIiwicnIiLCJ2diIsImludDJjaGFyIiwiaW50QXQiLCJzIiwiYm5wQ29weVRvIiwidCIsImJucEZyb21JbnQiLCJuYnYiLCJmcm9tSW50IiwiYm5wRnJvbVN0cmluZyIsImsiLCJmcm9tUmFkaXgiLCJtaSIsInNoIiwiWkVSTyIsInN1YlRvIiwiYm5wQ2xhbXAiLCJiblRvU3RyaW5nIiwibmVnYXRlIiwidG9SYWRpeCIsImttIiwicCIsImJuTmVnYXRlIiwiYm5BYnMiLCJibkNvbXBhcmVUbyIsIm5iaXRzIiwiYm5CaXRMZW5ndGgiLCJibnBETFNoaWZ0VG8iLCJibnBEUlNoaWZ0VG8iLCJibnBMU2hpZnRUbyIsImJzIiwiY2JzIiwiYm0iLCJkcyIsImJucFJTaGlmdFRvIiwiYm5wU3ViVG8iLCJibnBNdWx0aXBseVRvIiwiYWJzIiwieSIsImJucFNxdWFyZVRvIiwiYm5wRGl2UmVtVG8iLCJxIiwicG0iLCJwdCIsImNvcHlUbyIsInRzIiwibXMiLCJuc2giLCJsU2hpZnRUbyIsInlzIiwieTAiLCJ5dCIsImQxIiwiZDIiLCJkbFNoaWZ0VG8iLCJjb21wYXJlVG8iLCJPTkUiLCJxZCIsImRyU2hpZnRUbyIsInJTaGlmdFRvIiwiYm5Nb2QiLCJkaXZSZW1UbyIsIkNsYXNzaWMiLCJjQ29udmVydCIsIm1vZCIsImNSZXZlcnQiLCJjUmVkdWNlIiwiY011bFRvIiwibXVsdGlwbHlUbyIsInJlZHVjZSIsImNTcXJUbyIsInNxdWFyZVRvIiwiY29udmVydCIsInJldmVydCIsIm11bFRvIiwic3FyVG8iLCJibnBJbnZEaWdpdCIsIk1vbnRnb21lcnkiLCJtcCIsImludkRpZ2l0IiwibXBsIiwibXBoIiwidW0iLCJtdDIiLCJtb250Q29udmVydCIsIm1vbnRSZXZlcnQiLCJtb250UmVkdWNlIiwidTAiLCJtb250U3FyVG8iLCJtb250TXVsVG8iLCJibnBJc0V2ZW4iLCJibnBFeHAiLCJ6IiwicjIiLCJibk1vZFBvd0ludCIsImlzRXZlbiIsImJuQ2xvbmUiLCJibkludFZhbHVlIiwiYm5CeXRlVmFsdWUiLCJiblNob3J0VmFsdWUiLCJibnBDaHVua1NpemUiLCJMTjIiLCJsb2ciLCJiblNpZ051bSIsImJucFRvUmFkaXgiLCJzaWdudW0iLCJjcyIsImNodW5rU2l6ZSIsImludFZhbHVlIiwiYm5wRnJvbVJhZGl4IiwiZE11bHRpcGx5IiwiZEFkZE9mZnNldCIsImJucEZyb21OdW1iZXIiLCJ0ZXN0Qml0IiwiYml0d2lzZVRvIiwic2hpZnRMZWZ0Iiwib3Bfb3IiLCJpc1Byb2JhYmxlUHJpbWUiLCJuZXh0Qnl0ZXMiLCJiblRvQnl0ZUFycmF5IiwiYm5FcXVhbHMiLCJibk1pbiIsImJuTWF4IiwiYm5wQml0d2lzZVRvIiwib3AiLCJvcF9hbmQiLCJibkFuZCIsImJuT3IiLCJvcF94b3IiLCJiblhvciIsIm9wX2FuZG5vdCIsImJuQW5kTm90IiwiYm5Ob3QiLCJiblNoaWZ0TGVmdCIsImJuU2hpZnRSaWdodCIsImxiaXQiLCJibkdldExvd2VzdFNldEJpdCIsImNiaXQiLCJibkJpdENvdW50IiwiYm5UZXN0Qml0IiwiYm5wQ2hhbmdlQml0IiwiYm5TZXRCaXQiLCJjaGFuZ2VCaXQiLCJibkNsZWFyQml0IiwiYm5GbGlwQml0IiwiYm5wQWRkVG8iLCJibkFkZCIsImFkZFRvIiwiYm5TdWJ0cmFjdCIsImJuTXVsdGlwbHkiLCJiblNxdWFyZSIsImJuRGl2aWRlIiwiYm5SZW1haW5kZXIiLCJibkRpdmlkZUFuZFJlbWFpbmRlciIsImJucERNdWx0aXBseSIsImJucERBZGRPZmZzZXQiLCJOdWxsRXhwIiwibk5vcCIsIm5NdWxUbyIsIm5TcXJUbyIsImJuUG93IiwiYm5wTXVsdGlwbHlMb3dlclRvIiwiYm5wTXVsdGlwbHlVcHBlclRvIiwiQmFycmV0dCIsInEzIiwibXUiLCJkaXZpZGUiLCJiYXJyZXR0Q29udmVydCIsImJhcnJldHRSZXZlcnQiLCJiYXJyZXR0UmVkdWNlIiwibXVsdGlwbHlVcHBlclRvIiwibXVsdGlwbHlMb3dlclRvIiwiYmFycmV0dFNxclRvIiwiYmFycmV0dE11bFRvIiwiYm5Nb2RQb3ciLCJrMSIsImcyIiwiaXMxIiwiYm5HQ0QiLCJnZXRMb3dlc3RTZXRCaXQiLCJibnBNb2RJbnQiLCJibk1vZEludmVyc2UiLCJhYyIsInUiLCJzdWJ0cmFjdCIsImFkZCIsImxvd3ByaW1lcyIsImxwbGltIiwiYm5Jc1Byb2JhYmxlUHJpbWUiLCJtb2RJbnQiLCJtaWxsZXJSYWJpbiIsImJucE1pbGxlclJhYmluIiwibjEiLCJzaGlmdFJpZ2h0IiwibW9kUG93IiwiYnl0ZVZhbHVlIiwic2hvcnRWYWx1ZSIsInRvQnl0ZUFycmF5IiwiZXF1YWxzIiwiYW5kIiwib3IiLCJ4b3IiLCJhbmROb3QiLCJub3QiLCJiaXRDb3VudCIsInNldEJpdCIsImNsZWFyQml0IiwiZmxpcEJpdCIsIm11bHRpcGx5IiwicmVtYWluZGVyIiwiZGl2aWRlQW5kUmVtYWluZGVyIiwibW9kSW52ZXJzZSIsImdjZCIsInNxdWFyZSIsInJuZ19zdGF0ZSIsInJuZ19wb29sIiwicm5nX3BwdHIiLCJybmdfc2VlZF9pbnQiLCJybmdfcHNpemUiLCJybmdfc2VlZF90aW1lIiwiZ2V0VGltZSIsIndpbmRvdyIsImdldFJhbmRvbVZhbHVlcyIsInVhIiwiVWludDhBcnJheSIsImFwcFZlcnNpb24iLCJybmdfZ2V0X2J5dGUiLCJwcm5nX25ld3N0YXRlIiwibmV4dCIsInJuZ19nZXRfYnl0ZXMiLCJiYSIsIlNlY3VyZVJhbmRvbSIsIkFyY2ZvdXIiLCJTIiwiQVJDNGluaXQiLCJBUkM0bmV4dCIsInBhZGRpbmciLCJzdHIiLCJwYWQiLCJieXRlQXJyYXlUb1N0cmluZyIsImFycmF5Iiwic3RyaW5nVG9CeXRlQXJyYXkiLCJhcnIiLCJieXRlQXJyYXlUb0hleCIsInJhdyIsIkhFWCIsIl9oZXgiLCJlbmNvZGVTdHJpbmciLCJmcm9tQnl0ZUFycmF5IiwibWF0Y2giLCJwMSIsImJhc2U2NFN0cmluZyIsIlNBRkVfVVJMX0VOQ09ESU5HX01BUFBJTkciLCJieXRlTGVuZ3RoIiwibG9va3VwIiwicmV2TG9va3VwIiwiQXJyIiwiY29kZSIsImdldExlbnMiLCJiNjQiLCJ2YWxpZExlbiIsInBsYWNlSG9sZGVyc0xlbiIsImxlbnMiLCJfYnl0ZUxlbmd0aCIsInRtcCIsImN1ckJ5dGUiLCJ0cmlwbGV0VG9CYXNlNjQiLCJudW0iLCJlbmNvZGVDaHVuayIsInVpbnQ4Iiwic3RhcnQiLCJlbmQiLCJvdXRwdXQiLCJleHRyYUJ5dGVzIiwibWF4Q2h1bmtMZW5ndGgiLCJsZW4yIiwidXJsam9pbiIsInByb2Nlc3MiLCJlcnIiLCJtYXRjaGluZ0tleSIsImJvZHkiLCJjb250ZXh0IiwiZGVmaW5pdGlvbiIsIm5vcm1hbGl6ZSIsImlucHV0Iiwiam9pbmVkIiwic2VsZiIsIkVtaXR0ZXIiLCJSZXF1ZXN0QmFzZSIsImlzT2JqZWN0IiwiUmVzcG9uc2VCYXNlIiwiQWdlbnQiLCJub29wIiwibWV0aG9kIiwiUmVxdWVzdCIsImdldFhIUiIsInByb3RvY29sIiwiQWN0aXZlWE9iamVjdCIsInRyaW0iLCJzZXJpYWxpemUiLCJwYWlycyIsInB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyIiwidmFsIiwic3Via2V5Iiwic2VyaWFsaXplT2JqZWN0IiwicGFyc2VTdHJpbmciLCJwYWlyIiwicG9zIiwidHlwZXMiLCJodG1sIiwianNvbiIsInhtbCIsInVybGVuY29kZWQiLCJwYXJzZUhlYWRlciIsImxpbmVzIiwiZmllbGRzIiwibGluZSIsImZpZWxkIiwidG9Mb3dlckNhc2UiLCJpc0pTT04iLCJtaW1lIiwidGVzdCIsIlJlc3BvbnNlIiwieGhyIiwidGV4dCIsInJlc3BvbnNlVHlwZSIsIl9zZXRTdGF0dXNQcm9wZXJ0aWVzIiwiaGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsImdldFJlc3BvbnNlSGVhZGVyIiwiX3NldEhlYWRlclByb3BlcnRpZXMiLCJfcmVzcG9uc2VUeXBlIiwiX3BhcnNlQm9keSIsIl9wYXJzZXIiLCJ0b0Vycm9yIiwiX3F1ZXJ5IiwiX2hlYWRlciIsIm9uIiwicmVzIiwib3JpZ2luYWwiLCJyYXdSZXNwb25zZSIsInN0YXR1c0NvZGUiLCJjYWxsYmFjayIsImVtaXQiLCJuZXdfZXJyIiwiX2lzUmVzcG9uc2VPSyIsImN1c3RvbV9lcnIiLCJhY2NlcHQiLCJhdXRoIiwidXNlciIsInBhc3MiLCJidG9hIiwic3RyaW5nIiwiX2F1dGgiLCJxdWVyeSIsImF0dGFjaCIsImZpbGUiLCJfZ2V0Rm9ybURhdGEiLCJhcHBlbmQiLCJfZm9ybURhdGEiLCJGb3JtRGF0YSIsIl9zaG91bGRSZXRyeSIsIl9yZXRyeSIsImZuIiwiX2NhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX21heFJldHJpZXMiLCJyZXRyaWVzIiwiX3JldHJpZXMiLCJjcm9zc0RvbWFpbkVycm9yIiwiY3Jvc3NEb21haW4iLCJidWZmZXIiLCJjYSIsImFnZW50IiwicGlwZSIsIndyaXRlIiwiX2lzSG9zdCIsIl9lbmRDYWxsZWQiLCJfZmluYWxpemVRdWVyeVN0cmluZyIsIl9lbmQiLCJfc2V0VGltZW91dHMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiX3Jlc3BvbnNlVGltZW91dFRpbWVyIiwidGltZWRvdXQiLCJfYWJvcnRlZCIsImhhbmRsZVByb2dyZXNzIiwiZGlyZWN0aW9uIiwidG90YWwiLCJwZXJjZW50IiwibG9hZGVkIiwiaGFzTGlzdGVuZXJzIiwib25wcm9ncmVzcyIsImJpbmQiLCJ1cGxvYWQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiX3dpdGhDcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImNvbnRlbnRUeXBlIiwiX3NlcmlhbGl6ZXIiLCJfc2V0RGVmYXVsdHMiLCJkZWwiLCJwYXRjaCIsInBvc3QiLCJwdXQiLCJtaXhpbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwibGlzdGVuZXJzIiwiX2NsZWFyVGltZW91dCIsIl90aW1lciIsInRpbWVvdXQiLCJfdGltZW91dCIsIl9yZXNwb25zZVRpbWVvdXQiLCJvcHRpb24iLCJkZWFkbGluZSIsInJldHJ5IiwiY291bnQiLCJfcmV0cnlDYWxsYmFjayIsIkVSUk9SX0NPREVTIiwib3ZlcnJpZGUiLCJfZnVsbGZpbGxlZFByb21pc2UiLCJpbm5lclJlc29sdmUiLCJpbm5lclJlamVjdCIsInVzZSIsIm9rIiwiX29rQ2FsbGJhY2siLCJnZXRIZWFkZXIiLCJ1bnNldCIsImFib3J0IiwiYmFzZTY0RW5jb2RlciIsInJlZGlyZWN0cyIsIl9tYXhSZWRpcmVjdHMiLCJtYXhSZXNwb25zZVNpemUiLCJUeXBlRXJyb3IiLCJfbWF4UmVzcG9uc2VTaXplIiwidG9KU09OIiwiaXNPYmoiLCJzb3J0UXVlcnkiLCJzb3J0IiwiX3NvcnQiLCJxdWVyeUFyciIsIl9hcHBlbmRRdWVyeVN0cmluZyIsInRyYWNlIiwiX3RpbWVvdXRFcnJvciIsInJlYXNvbiIsImVycm5vIiwic2V0VGltZW91dCIsInV0aWxzIiwiY3QiLCJwYXJhbXMiLCJsaW5rcyIsImxpbmsiLCJwYXJzZUxpbmtzIiwic3RhdHVzVHlwZSIsInJlZGlyZWN0IiwiY2xpZW50RXJyb3IiLCJzZXJ2ZXJFcnJvciIsImNyZWF0ZWQiLCJhY2NlcHRlZCIsIm5vQ29udGVudCIsImJhZFJlcXVlc3QiLCJ1bmF1dGhvcml6ZWQiLCJub3RBY2NlcHRhYmxlIiwiZm9yYmlkZGVuIiwibm90Rm91bmQiLCJ1bnByb2Nlc3NhYmxlRW50aXR5Iiwic2hpZnQiLCJyZWwiLCJjbGVhbkhlYWRlciIsImNoYW5nZXNPcmlnaW4iLCJfZGVmYXVsdHMiLCJkZWYiLCJvaWRjIiwiaXNPaWRjIiwiVXJsVXRpbGl0eSIsImFkZFF1ZXJ5UGFyYW0iLCJkZWxpbWl0ZXIiLCJnbG9iYWwiLCJocmVmIiwiaWR4IiwibGFzdEluZGV4T2YiLCJyZWdleCIsImNvdW50ZXIiLCJleGVjIiwicHJvcCIsIl9ub25jZSIsInN0b3JhZ2VTdHJpbmciLCJfaWQiLCJfY3JlYXRlZCIsInN0b3JhZ2UiLCJhZ2UiLCJjdXRvZmYiLCJnZXRBbGxLZXlzIiwicHJvbWlzZXMiLCJhbGwiLCJndWlkSG9sZGVyIiwiaGV4IiwiZ3VpZFJlc3BvbnNlIiwiT2lkY1Njb3BlIiwicGFyc2VVcmxGcmFnbWVudCIsInNlc3Npb25fc3RhdGUiLCJ0b2tlbl90eXBlIiwiZXhwaXJlc19pbiIsImV4cGlyZXNfYXQiLCJzY29wZXMiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiU2lsZW50UmVuZXdTZXJ2aWNlQ3RvciIsIlNpbGVudFJlbmV3U2VydmljZSIsIlNlc3Npb25Nb25pdG9yQ3RvciIsIlRva2VuUmV2b2NhdGlvbkNsaWVudEN0b3IiLCJVc2VyTWFuYWdlclNldHRpbmdzIiwiX2V2ZW50cyIsIlVzZXJNYW5hZ2VyRXZlbnRzIiwiX3NpbGVudFJlbmV3U2VydmljZSIsImF1dG9tYXRpY1NpbGVudFJlbmV3Iiwic3RhcnRTaWxlbnRSZW5ldyIsIm1vbml0b3JTZXNzaW9uIiwiX3Nlc3Npb25Nb25pdG9yIiwiX3Rva2VuUmV2b2NhdGlvbkNsaWVudCIsIl9sb2FkVXNlciIsImxvYWQiLCJzdG9yZVVzZXIiLCJ1bmxvYWQiLCJfc2lnbmluU3RhcnQiLCJfcmVkaXJlY3ROYXZpZ2F0b3IiLCJfc2lnbmluRW5kIiwicG9wdXBfcmVkaXJlY3RfdXJpIiwiX3NpZ25pbiIsIl9wb3B1cE5hdmlnYXRvciIsInN0YXJ0VXJsIiwicG9wdXBXaW5kb3dGZWF0dXJlcyIsInBvcHVwV2luZG93VGFyZ2V0IiwiX3NpZ25pbkNhbGxiYWNrIiwic2lsZW50X3JlZGlyZWN0X3VyaSIsInNldElkVG9rZW4iLCJpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXciLCJfaWZyYW1lTmF2aWdhdG9yIiwic2lsZW50UmVxdWVzdFRpbWVvdXQiLCJwcm9jZXNzU2lnbmluUmVzcG9uc2UiLCJuYXZSZXNwb25zZSIsInNpZ25pblJlc3BvbnNlIiwic2lkIiwibmF2aWdhdG9yUGFyYW1zIiwicHJlcGFyZSIsImNyZWF0ZVNpZ25pblJlcXVlc3QiLCJuYXZpZ2F0ZSIsImNsb3NlIiwicG9zdExvZ291dFJlZGlyZWN0VXJpIiwiX3NpZ25vdXRTdGFydCIsIl9zaWdub3V0RW5kIiwicG9wdXBfcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIiwiX3NpZ25vdXQiLCJrZWVwT3BlbiIsInJldm9rZVByb21pc2UiLCJyZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCIsIl9yZXZva2VJbnRlcm5hbCIsInJlbW92ZVVzZXIiLCJjcmVhdGVTaWdub3V0UmVxdWVzdCIsInNpZ25vdXRSZXF1ZXN0IiwicHJvY2Vzc1NpZ25vdXRSZXNwb25zZSIsInNpZ25vdXRSZXNwb25zZSIsInN1Y2Nlc3MiLCJyZXF1aXJlZCIsInJldm9rZSIsInN0b3AiLCJfdXNlclN0b3JlIiwiX3VzZXJTdG9yZUtleSIsInJlZGlyZWN0TmF2aWdhdG9yIiwicG9wdXBOYXZpZ2F0b3IiLCJpZnJhbWVOYXZpZ2F0b3IiLCJ1c2VyU3RvcmUiLCJEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUiLCJEZWZhdWx0Q2hlY2tTZXNzaW9uSW50ZXJ2YWwiLCJjaGVja1Nlc3Npb25JbnRlcnZhbCIsImFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiUmVkaXJlY3ROYXZpZ2F0b3IiLCJJRnJhbWVOYXZpZ2F0b3IiLCJfcG9wdXBfcmVkaXJlY3RfdXJpIiwiX3BvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSIsIl9wb3B1cFdpbmRvd0ZlYXR1cmVzIiwiX3BvcHVwV2luZG93VGFyZ2V0IiwiX3NpbGVudF9yZWRpcmVjdF91cmkiLCJfc2lsZW50UmVxdWVzdFRpbWVvdXQiLCJfYXV0b21hdGljU2lsZW50UmVuZXciLCJfaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3IiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lIiwiX21vbml0b3JTZXNzaW9uIiwiX2NoZWNrU2Vzc2lvbkludGVydmFsIiwiX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0IiwiZnJhbWUiLCJJRnJhbWVXaW5kb3ciLCJub3RpZnlQYXJlbnQiLCJEZWZhdWx0VGltZW91dCIsIl9wcm9taXNlIiwiX3Jlc29sdmUiLCJfcmVqZWN0IiwiX2JvdW5kTWVzc2FnZUV2ZW50IiwiX21lc3NhZ2UiLCJfZnJhbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJfZXJyb3IiLCJzcmMiLCJwcm9taXNlIiwiX2NsZWFudXAiLCJyZW1vdmVDaGlsZCIsIm9yaWdpbiIsIl9vcmlnaW4iLCJzb3VyY2UiLCJjb250ZW50V2luZG93IiwiX3N1Y2Nlc3MiLCJob3N0IiwicGFyZW50IiwicG9zdE1lc3NhZ2UiLCJfdXNlckxvYWRlZCIsIkV2ZW50IiwiX3VzZXJVbmxvYWRlZCIsIl9zaWxlbnRSZW5ld0Vycm9yIiwiX3VzZXJTaWduZWRPdXQiLCJfdXNlclNlc3Npb25DaGFuZ2VkIiwicmFpc2VFdmVudCIsInJhaXNlIiwiYWRkSGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXIiLCJUaW1lciIsImFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyIiwiX2FjY2Vzc1Rva2VuRXhwaXJpbmciLCJfYWNjZXNzVG9rZW5FeHBpcmVkIiwiY29udGFpbmVyIiwiX2NhbmNlbFRpbWVycyIsImV4cGlyaW5nIiwiZXhwaXJlZCIsImNhbmNlbCIsIlRpbWVyRHVyYXRpb24iLCJfbm93RnVuYyIsIl9uYW1lIiwiX2V4cGlyYXRpb24iLCJ0aW1lckR1cmF0aW9uIiwiX3RpbWVySGFuZGxlIiwiZGlmZiIsImZpbmRJbmRleCIsInVzZXJNYW5hZ2VyIiwiX3VzZXJNYW5hZ2VyIiwiX3Rva2VuRXhwaXJpbmciLCJldmVudHMiLCJhZGRBY2Nlc3NUb2tlbkV4cGlyaW5nIiwiZ2V0VXNlciIsInJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJpbmciLCJzaWduaW5TaWxlbnQiLCJfcmFpc2VTaWxlbnRSZW5ld0Vycm9yIiwiQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciIsIl9DaGVja1Nlc3Npb25JRnJhbWVDdG9yIiwiYWRkVXNlckxvYWRlZCIsIl9zdGFydCIsImFkZFVzZXJVbmxvYWRlZCIsIl9zdG9wIiwiX3N1YiIsIl9zaWQiLCJfY2hlY2tTZXNzaW9uSUZyYW1lIiwiZ2V0Q2hlY2tTZXNzaW9uSWZyYW1lIiwiaW50ZXJ2YWwiLCJxdWVyeVNlc3Npb25TdGF0dXMiLCJyYWlzZVVzZXJTaWduZWRPdXRFdmVudCIsInNlc3Npb24iLCJfcmFpc2VVc2VyU2Vzc2lvbkNoYW5nZWQiLCJfcmFpc2VVc2VyU2lnbmVkT3V0IiwiRGVmYXVsdEludGVydmFsIiwiX3VybCIsIl9pbnRlcnZhbCIsIl9mcmFtZV9vcmlnaW4iLCJfc2Vzc2lvbl9zdGF0ZSIsIkFjY2Vzc1Rva2VuVHlwZUhpbnQiLCJfWE1MSHR0cFJlcXVlc3RDdG9yIiwiZ2V0UmV2b2NhdGlvbkVuZHBvaW50IiwiX3Jldm9rZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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R0FBM0MsQ0FBUDtBQUNIO0FBQ0osa0JBVEQ7O0FBV0EscUJBQUlva0IsT0FBTyxlQUFldlgsbUJBQW1CNVgsU0FBbkIsQ0FBMUI7QUFDQSxxQkFBSTZDLGFBQUosRUFBbUI7QUFDZnNzQiw2QkFBUSxvQkFBb0J2WCxtQkFBbUIvVSxhQUFuQixDQUE1QjtBQUNIO0FBQ0Rzc0IseUJBQVEsc0JBQXNCdlgsbUJBQW1COHdCLG1CQUFuQixDQUE5QjtBQUNBdloseUJBQVEsWUFBWXZYLG1CQUFtQmhJLFdBQW5CLENBQXBCOztBQUVBa2lCLHFCQUFJdm1CLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG1DQUFyQztBQUNBdW1CLHFCQUFJdG1CLElBQUosQ0FBUzJqQixJQUFUO0FBQ0gsY0F6Qk0sQ0FBUDtBQTBCSDs7Ozs7O21CQWxFZ0I5eEIscUIiLCJmaWxlIjoib2lkYy1jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZhMWEwNjhmODE3Njg1NDZhY2FjIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuZXhwb3J0IGNvbnN0IExvZyA9IHJlcXVpcmUoJy4vc3JjL0xvZycpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgT2lkY0NsaWVudCA9IHJlcXVpcmUoJy4vc3JjL09pZGNDbGllbnQnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IE9pZGNDbGllbnRTZXR0aW5ncyA9IHJlcXVpcmUoJy4vc3JjL09pZGNDbGllbnRTZXR0aW5ncycpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgV2ViU3RvcmFnZVN0YXRlU3RvcmUgPSByZXF1aXJlKCcuL3NyYy9XZWJTdG9yYWdlU3RhdGVTdG9yZScpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgSW5NZW1vcnlXZWJTdG9yYWdlID0gcmVxdWlyZSgnLi9zcmMvSW5NZW1vcnlXZWJTdG9yYWdlJykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBVc2VyTWFuYWdlciA9IHJlcXVpcmUoJy4vc3JjL1VzZXJNYW5hZ2VyJykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBBY2Nlc3NUb2tlbkV2ZW50cyA9IHJlcXVpcmUoJy4vc3JjL0FjY2Vzc1Rva2VuRXZlbnRzJykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBNZXRhZGF0YVNlcnZpY2UgPSByZXF1aXJlKCcuL3NyYy9NZXRhZGF0YVNlcnZpY2UnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IENoZWNrU2Vzc2lvbklGcmFtZSA9IHJlcXVpcmUoJy4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZScpLmRlZmF1bHQ7XG5leHBvcnQgY29uc3QgVG9rZW5SZXZvY2F0aW9uQ2xpZW50ID0gcmVxdWlyZSgnLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50JykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBTZXNzaW9uTW9uaXRvciA9IHJlcXVpcmUoJy4vc3JjL1Nlc3Npb25Nb25pdG9yJykuZGVmYXVsdDtcbmV4cG9ydCBjb25zdCBHbG9iYWwgPSByZXF1aXJlKCcuL3NyYy9HbG9iYWwnKS5kZWZhdWx0O1xuZXhwb3J0IGNvbnN0IFVzZXIgPSByZXF1aXJlKCcuL3NyYy9Vc2VyJykuZGVmYXVsdDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIExvZyxcbiAgICBPaWRjQ2xpZW50LFxuICAgIE9pZGNDbGllbnRTZXR0aW5ncyxcbiAgICBXZWJTdG9yYWdlU3RhdGVTdG9yZSxcbiAgICBJbk1lbW9yeVdlYlN0b3JhZ2UsXG4gICAgVXNlck1hbmFnZXIsXG4gICAgQWNjZXNzVG9rZW5FdmVudHMsXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENoZWNrU2Vzc2lvbklGcmFtZSxcbiAgICBUb2tlblJldm9jYXRpb25DbGllbnQsXG4gICAgU2Vzc2lvbk1vbml0b3IsXG4gICAgR2xvYmFsLFxuICAgIFVzZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmxldCBub3BMb2dnZXIgPSB7XG4gICAgZGVidWcoKXt9LFxuICAgIGluZm8oKXt9LFxuICAgIHdhcm4oKXt9LFxuICAgIGVycm9yKCl7fVxufTtcblxuY29uc3QgTk9ORSA9IDA7XG5jb25zdCBFUlJPUiA9IDE7XG5jb25zdCBXQVJOID0gMjtcbmNvbnN0IElORk8gPSAzO1xuY29uc3QgREVCVUcgPSA0O1xuXG5sZXQgbG9nZ2VyO1xubGV0IGxldmVsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICAgIHN0YXRpYyBnZXQgTk9ORSgpIHtyZXR1cm4gTk9ORX07XG4gICAgc3RhdGljIGdldCBFUlJPUigpIHtyZXR1cm4gRVJST1J9O1xuICAgIHN0YXRpYyBnZXQgV0FSTigpIHtyZXR1cm4gV0FSTn07XG4gICAgc3RhdGljIGdldCBJTkZPKCkge3JldHVybiBJTkZPfTtcbiAgICBzdGF0aWMgZ2V0IERFQlVHKCkge3JldHVybiBERUJVR307XG4gICAgXG4gICAgc3RhdGljIHJlc2V0KCl7XG4gICAgICAgIGxldmVsID0gREVCVUc7XG4gICAgICAgIGxvZ2dlciA9IGNvbnNvbGU7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBnZXQgbGV2ZWwoKXtcbiAgICAgICAgcmV0dXJuIGxldmVsO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0IGxldmVsKHZhbHVlKXtcbiAgICAgICAgaWYgKE5PTkUgPD0gdmFsdWUgJiYgdmFsdWUgPD0gREVCVUcpe1xuICAgICAgICAgICAgbGV2ZWwgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbG9nIGxldmVsXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBnZXQgbG9nZ2VyKCl7XG4gICAgICAgIHJldHVybiBsb2dnZXI7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQgbG9nZ2VyKHZhbHVlKXtcbiAgICAgICAgaWYgKCF2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvKSB7XG4gICAgICAgICAgICAvLyBqdXN0IHRvIHN0YXkgYmFja3dhcmRzIGNvbXBhdC4gY2FuIHJlbW92ZSBpbiAyLjBcbiAgICAgICAgICAgIHZhbHVlLmRlYnVnID0gdmFsdWUuaW5mbztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5kZWJ1ZyAmJiB2YWx1ZS5pbmZvICYmIHZhbHVlLndhcm4gJiYgdmFsdWUuZXJyb3Ipe1xuICAgICAgICAgICAgbG9nZ2VyID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxvZ2dlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZGVidWcoLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBERUJVRyl7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcuYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaW5mbyguLi5hcmdzKXtcbiAgICAgICAgaWYgKGxldmVsID49IElORk8pe1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgd2FybiguLi5hcmdzKXtcbiAgICAgICAgaWYgKGxldmVsID49IFdBUk4pe1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4uYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZXJyb3IoLi4uYXJncyl7XG4gICAgICAgIGlmIChsZXZlbCA+PSBFUlJPUil7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IuYXBwbHkobG9nZ2VyLCBBcnJheS5mcm9tKGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTG9nLnJlc2V0KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xvZy5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IE9pZGNDbGllbnRTZXR0aW5ncyBmcm9tICcuL09pZGNDbGllbnRTZXR0aW5ncyc7XG5pbXBvcnQgRXJyb3JSZXNwb25zZSBmcm9tICcuL0Vycm9yUmVzcG9uc2UnO1xuaW1wb3J0IFNpZ25pblJlcXVlc3QgZnJvbSAnLi9TaWduaW5SZXF1ZXN0JztcbmltcG9ydCBTaWduaW5SZXNwb25zZSBmcm9tICcuL1NpZ25pblJlc3BvbnNlJztcbmltcG9ydCBTaWdub3V0UmVxdWVzdCBmcm9tICcuL1NpZ25vdXRSZXF1ZXN0JztcbmltcG9ydCBTaWdub3V0UmVzcG9uc2UgZnJvbSAnLi9TaWdub3V0UmVzcG9uc2UnO1xuaW1wb3J0IFNpZ25pblN0YXRlIGZyb20gJy4vU2lnbmluU3RhdGUnO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vU3RhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPaWRjQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9KSB7XG4gICAgICAgIGlmIChzZXR0aW5ncyBpbnN0YW5jZW9mIE9pZGNDbGllbnRTZXR0aW5ncykge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzID0gbmV3IE9pZGNDbGllbnRTZXR0aW5ncyhzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgX3N0YXRlU3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldHRpbmdzLnN0YXRlU3RvcmU7XG4gICAgfVxuICAgIGdldCBfdmFsaWRhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy52YWxpZGF0b3I7XG4gICAgfVxuICAgIGdldCBfbWV0YWRhdGFTZXJ2aWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0IHNldHRpbmdzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3M7XG4gICAgfVxuICAgIGdldCBtZXRhZGF0YVNlcnZpY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lnbmluUmVxdWVzdCh7XG4gICAgICAgIHJlc3BvbnNlX3R5cGUsIHNjb3BlLCByZWRpcmVjdF91cmksIFxuICAgICAgICAvLyBkYXRhIHdhcyBtZWFudCB0byBiZSB0aGUgcGxhY2UgYSBjYWxsZXIgY291bGQgaW5kaWNhdGUgdGhlIGRhdGEgdG9cbiAgICAgICAgLy8gaGF2ZSByb3VuZCB0cmlwcGVkLCBidXQgcGVvcGxlIHdlcmUgZ2V0dGluZyBjb25mdXNlZCwgc28gaSBhZGRlZCBzdGF0ZSAoc2luY2UgdGhhdCBtYXRjaGVzIHRoZSBzcGVjKSBcbiAgICAgICAgLy8gYW5kIHNvIG5vdyBpZiBkYXRhIGlzIG5vdCBwYXNzZWQsIGJ1dCBzdGF0ZSBpcyB0aGVuIHN0YXRlIHdpbGwgYmUgdXNlZFxuICAgICAgICBkYXRhLCBzdGF0ZSwgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLFxuICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMgfSA9IHt9LFxuICAgICAgICBzdGF0ZVN0b3JlXG4gICAgKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk9pZGNDbGllbnQuY3JlYXRlU2lnbmluUmVxdWVzdFwiKTtcblxuICAgICAgICBsZXQgY2xpZW50X2lkID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkO1xuICAgICAgICByZXNwb25zZV90eXBlID0gcmVzcG9uc2VfdHlwZSB8fCB0aGlzLl9zZXR0aW5ncy5yZXNwb25zZV90eXBlO1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXMuX3NldHRpbmdzLnNjb3BlO1xuICAgICAgICByZWRpcmVjdF91cmkgPSByZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuXG4gICAgICAgIC8vIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQgYXJlbid0IGFsbG93ZWQgb24gX3NldHRpbmdzXG4gICAgICAgIHByb21wdCA9IHByb21wdCB8fCB0aGlzLl9zZXR0aW5ncy5wcm9tcHQ7XG4gICAgICAgIGRpc3BsYXkgPSBkaXNwbGF5IHx8IHRoaXMuX3NldHRpbmdzLmRpc3BsYXk7XG4gICAgICAgIG1heF9hZ2UgPSBtYXhfYWdlIHx8IHRoaXMuX3NldHRpbmdzLm1heF9hZ2U7XG4gICAgICAgIHVpX2xvY2FsZXMgPSB1aV9sb2NhbGVzIHx8IHRoaXMuX3NldHRpbmdzLnVpX2xvY2FsZXM7XG4gICAgICAgIGFjcl92YWx1ZXMgPSBhY3JfdmFsdWVzIHx8IHRoaXMuX3NldHRpbmdzLmFjcl92YWx1ZXM7XG4gICAgICAgIHJlc291cmNlID0gcmVzb3VyY2UgfHwgdGhpcy5fc2V0dGluZ3MucmVzb3VyY2U7XG4gICAgICAgIGV4dHJhUXVlcnlQYXJhbXMgPSBleHRyYVF1ZXJ5UGFyYW1zIHx8IHRoaXMuX3NldHRpbmdzLmV4dHJhUXVlcnlQYXJhbXM7XG4gICAgICAgIFxuICAgICAgICBsZXQgYXV0aG9yaXR5ID0gdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5O1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmVjZWl2ZWQgYXV0aG9yaXphdGlvbiBlbmRwb2ludFwiLCB1cmwpO1xuXG4gICAgICAgICAgICBsZXQgc2lnbmluUmVxdWVzdCA9IG5ldyBTaWduaW5SZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkLFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaSxcbiAgICAgICAgICAgICAgICByZXNwb25zZV90eXBlLFxuICAgICAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEgfHwgc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aG9yaXR5LFxuICAgICAgICAgICAgICAgIHByb21wdCwgZGlzcGxheSwgbWF4X2FnZSwgdWlfbG9jYWxlcywgaWRfdG9rZW5faGludCwgbG9naW5faGludCwgYWNyX3ZhbHVlcyxcbiAgICAgICAgICAgICAgICByZXNvdXJjZSwgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIHNpZ25pblN0YXRlID0gc2lnbmluUmVxdWVzdC5zdGF0ZTtcbiAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVN0b3JlLnNldChzaWduaW5TdGF0ZS5pZCwgc2lnbmluU3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduaW5SZXF1ZXN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbmluUmVzcG9uc2VcIik7XG5cbiAgICAgICAgdmFyIHJlc3BvbnNlID0gbmV3IFNpZ25pblJlc3BvbnNlKHVybCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgICAgICByZXR1cm4gc3RhdGVTdG9yZS5yZW1vdmUocmVzcG9uc2Uuc3RhdGUpLnRoZW4oc3RvcmVkU3RhdGVTdHJpbmcgPT4ge1xuICAgICAgICAgICAgaWYgKCFzdG9yZWRTdGF0ZVN0cmluZykge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIG1hdGNoaW5nIHN0YXRlIGZvdW5kIGluIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0YXRlID0gU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmVkU3RhdGVTdHJpbmcpO1xuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZWNlaXZlZCBzdGF0ZSBmcm9tIHN0b3JhZ2U7IHZhbGlkYXRpbmcgcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlU2lnbmluUmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2lnbm91dFJlcXVlc3Qoe2lkX3Rva2VuX2hpbnQsIGRhdGEsIHN0YXRlLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cml9ID0ge30sXG4gICAgICAgIHN0YXRlU3RvcmVcbiAgICApIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jcmVhdGVTaWdub3V0UmVxdWVzdFwiKTtcblxuICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5fc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0RW5kU2Vzc2lvbkVuZHBvaW50KCkudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBlbmQgc2Vzc2lvbiBlbmRwb2ludCB1cmwgcmV0dXJuZWRcIik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gZW5kIHNlc3Npb24gZW5kcG9pbnRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlY2VpdmVkIGVuZCBzZXNzaW9uIGVuZHBvaW50XCIsIHVybCk7XG5cbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFNpZ25vdXRSZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgaWRfdG9rZW5faGludCxcbiAgICAgICAgICAgICAgICBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSB8fCBzdGF0ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBzaWdub3V0U3RhdGUgPSByZXF1ZXN0LnN0YXRlO1xuICAgICAgICAgICAgaWYgKHNpZ25vdXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNpZ25vdXQgcmVxdWVzdCBoYXMgc3RhdGUgdG8gcGVyc2lzdFwiKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlU3RvcmUgPSBzdGF0ZVN0b3JlIHx8IHRoaXMuX3N0YXRlU3RvcmU7XG4gICAgICAgICAgICAgICAgc3RhdGVTdG9yZS5zZXQoc2lnbm91dFN0YXRlLmlkLCBzaWdub3V0U3RhdGUudG9TdG9yYWdlU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc1NpZ25vdXRSZXNwb25zZSh1cmwsIHN0YXRlU3RvcmUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5wcm9jZXNzU2lnbm91dFJlc3BvbnNlXCIpO1xuXG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBTaWdub3V0UmVzcG9uc2UodXJsKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTm8gc3RhdGUgaW4gcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yUmVzcG9uc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhdGVLZXkgPSByZXNwb25zZS5zdGF0ZTtcblxuICAgICAgICBzdGF0ZVN0b3JlID0gc3RhdGVTdG9yZSB8fCB0aGlzLl9zdGF0ZVN0b3JlO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZVN0b3JlLnJlbW92ZShzdGF0ZUtleSkudGhlbihzdG9yZWRTdGF0ZVN0cmluZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRlU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gbWF0Y2hpbmcgc3RhdGUgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtYXRjaGluZyBzdGF0ZSBmb3VuZCBpbiBzdG9yYWdlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhzdG9yZWRTdGF0ZVN0cmluZyk7XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlY2VpdmVkIHN0YXRlIGZyb20gc3RvcmFnZTsgdmFsaWRhdGluZyByZXNwb25zZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2Uoc3RhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJTdGFsZVN0YXRlKHN0YXRlU3RvcmUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiT2lkY0NsaWVudC5jbGVhclN0YWxlU3RhdGVcIik7XG5cbiAgICAgICAgc3RhdGVTdG9yZSA9IHN0YXRlU3RvcmUgfHwgdGhpcy5fc3RhdGVTdG9yZTtcblxuICAgICAgICByZXR1cm4gU3RhdGUuY2xlYXJTdGFsZVN0YXRlKHN0YXRlU3RvcmUsIHRoaXMuc2V0dGluZ3Muc3RhbGVTdGF0ZUFnZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL09pZGNDbGllbnQuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBXZWJTdG9yYWdlU3RhdGVTdG9yZSBmcm9tICcuL1dlYlN0b3JhZ2VTdGF0ZVN0b3JlJztcbmltcG9ydCBSZXNwb25zZVZhbGlkYXRvciBmcm9tICcuL1Jlc3BvbnNlVmFsaWRhdG9yJztcbmltcG9ydCBNZXRhZGF0YVNlcnZpY2UgZnJvbSAnLi9NZXRhZGF0YVNlcnZpY2UnO1xuXG5jb25zdCBPaWRjTWV0YWRhdGFVcmxQYXRoID0gJy53ZWxsLWtub3duL29wZW5pZC1jb25maWd1cmF0aW9uJztcblxuY29uc3QgRGVmYXVsdFJlc3BvbnNlVHlwZSA9IFwiaWRfdG9rZW5cIjtcbmNvbnN0IERlZmF1bHRTY29wZSA9IFwib3BlbmlkXCI7XG5jb25zdCBEZWZhdWx0U3RhbGVTdGF0ZUFnZSA9IDYwICogNTsgLy8gc2Vjb25kc1xuY29uc3QgRGVmYXVsdENsb2NrU2tld0luU2Vjb25kcyA9IDU5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPaWRjQ2xpZW50U2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgLy8gbWV0YWRhdGEgcmVsYXRlZFxuICAgICAgICBhdXRob3JpdHksIG1ldGFkYXRhVXJsLCBtZXRhZGF0YSwgc2lnbmluZ0tleXMsXG4gICAgICAgIC8vIGNsaWVudCByZWxhdGVkXG4gICAgICAgIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgcmVzcG9uc2VfdHlwZSA9IERlZmF1bHRSZXNwb25zZVR5cGUsIHNjb3BlID0gRGVmYXVsdFNjb3BlLFxuICAgICAgICByZWRpcmVjdF91cmksIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgLy8gb3B0aW9uYWwgcHJvdG9jb2xcbiAgICAgICAgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBhY3JfdmFsdWVzLCByZXNvdXJjZSxcbiAgICAgICAgLy8gYmVoYXZpb3IgZmxhZ3NcbiAgICAgICAgZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSB0cnVlLCBsb2FkVXNlckluZm8gPSB0cnVlLFxuICAgICAgICBzdGFsZVN0YXRlQWdlID0gRGVmYXVsdFN0YWxlU3RhdGVBZ2UsIGNsb2NrU2tldyA9IERlZmF1bHRDbG9ja1NrZXdJblNlY29uZHMsXG4gICAgICAgIC8vIG90aGVyIGJlaGF2aW9yXG4gICAgICAgIHN0YXRlU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoKSxcbiAgICAgICAgUmVzcG9uc2VWYWxpZGF0b3JDdG9yID0gUmVzcG9uc2VWYWxpZGF0b3IsXG4gICAgICAgIE1ldGFkYXRhU2VydmljZUN0b3IgPSBNZXRhZGF0YVNlcnZpY2UsXG4gICAgICAgIC8vIGV4dHJhIHF1ZXJ5IHBhcmFtc1xuICAgICAgICBleHRyYVF1ZXJ5UGFyYW1zID0ge31cbiAgICB9ID0ge30pIHtcblxuICAgICAgICB0aGlzLl9hdXRob3JpdHkgPSBhdXRob3JpdHk7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gbWV0YWRhdGFVcmw7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gc2lnbmluZ0tleXM7XG5cbiAgICAgICAgdGhpcy5fY2xpZW50X2lkID0gY2xpZW50X2lkO1xuICAgICAgICB0aGlzLl9jbGllbnRfc2VjcmV0ID0gY2xpZW50X3NlY3JldDtcbiAgICAgICAgdGhpcy5fcmVzcG9uc2VfdHlwZSA9IHJlc3BvbnNlX3R5cGU7XG4gICAgICAgIHRoaXMuX3Njb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuX3JlZGlyZWN0X3VyaSA9IHJlZGlyZWN0X3VyaTtcbiAgICAgICAgdGhpcy5fcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuXG4gICAgICAgIHRoaXMuX3Byb21wdCA9IHByb21wdDtcbiAgICAgICAgdGhpcy5fZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgICAgIHRoaXMuX21heF9hZ2UgPSBtYXhfYWdlO1xuICAgICAgICB0aGlzLl91aV9sb2NhbGVzID0gdWlfbG9jYWxlcztcbiAgICAgICAgdGhpcy5fYWNyX3ZhbHVlcyA9IGFjcl92YWx1ZXM7XG4gICAgICAgIHRoaXMuX3Jlc291cmNlID0gcmVzb3VyY2U7XG5cbiAgICAgICAgdGhpcy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMgPSAhIWZpbHRlclByb3RvY29sQ2xhaW1zO1xuICAgICAgICB0aGlzLl9sb2FkVXNlckluZm8gPSAhIWxvYWRVc2VySW5mbztcbiAgICAgICAgdGhpcy5fc3RhbGVTdGF0ZUFnZSA9IHN0YWxlU3RhdGVBZ2U7XG4gICAgICAgIHRoaXMuX2Nsb2NrU2tldyA9IGNsb2NrU2tldztcblxuICAgICAgICB0aGlzLl9zdGF0ZVN0b3JlID0gc3RhdGVTdG9yZTtcbiAgICAgICAgdGhpcy5fdmFsaWRhdG9yID0gbmV3IFJlc3BvbnNlVmFsaWRhdG9yQ3Rvcih0aGlzKTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZXh0cmFRdWVyeVBhcmFtcyA9IHR5cGVvZiBleHRyYVF1ZXJ5UGFyYW1zID09PSAnb2JqZWN0JyA/IGV4dHJhUXVlcnlQYXJhbXMgOiB7fTtcbiAgICB9XG5cbiAgICAvLyBjbGllbnQgY29uZmlnXG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgICB9XG4gICAgc2V0IGNsaWVudF9pZCh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX2NsaWVudF9pZCkge1xuICAgICAgICAgICAgLy8gb25lLXRpbWUgc2V0IG9ubHlcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiY2xpZW50X2lkIGhhcyBhbHJlYWR5IGJlZW4gYXNzaWduZWQuXCIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWQgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgY2xpZW50X3NlY3JldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9zZWNyZXQ7XG4gICAgfVxuICAgIGdldCByZXNwb25zZV90eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VfdHlwZTtcbiAgICB9XG4gICAgZ2V0IHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGU7XG4gICAgfVxuICAgIGdldCByZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgfVxuXG5cbiAgICAvLyBvcHRpb25hbCBwcm90b2NvbCBwYXJhbXNcbiAgICBnZXQgcHJvbXB0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvbXB0O1xuICAgIH1cbiAgICBnZXQgZGlzcGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3BsYXk7XG4gICAgfVxuICAgIGdldCBtYXhfYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4X2FnZTtcbiAgICB9XG4gICAgZ2V0IHVpX2xvY2FsZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91aV9sb2NhbGVzO1xuICAgIH1cbiAgICBnZXQgYWNyX3ZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fjcl92YWx1ZXM7XG4gICAgfVxuICAgIGdldCByZXNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc291cmNlO1xuICAgIH1cblxuXG4gICAgLy8gbWV0YWRhdGFcbiAgICBnZXQgYXV0aG9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aG9yaXR5O1xuICAgIH1cbiAgICBzZXQgYXV0aG9yaXR5KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAvLyBvbmUtdGltZSBzZXQgb25seVxuICAgICAgICAgICAgdGhpcy5fYXV0aG9yaXR5ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJhdXRob3JpdHkgaGFzIGFscmVhZHkgYmVlbiBhc3NpZ25lZC5cIilcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eSBoYXMgYWxyZWFkeSBiZWVuIGFzc2lnbmVkLlwiKVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBtZXRhZGF0YVVybCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgPSB0aGlzLmF1dGhvcml0eTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsICYmIHRoaXMuX21ldGFkYXRhVXJsLmluZGV4T2YoT2lkY01ldGFkYXRhVXJsUGF0aCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21ldGFkYXRhVXJsW3RoaXMuX21ldGFkYXRhVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCArPSBPaWRjTWV0YWRhdGFVcmxQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xuICAgIH1cblxuICAgIC8vIHNldHRhYmxlL2NhY2hhYmxlIG1ldGFkYXRhIHZhbHVlc1xuICAgIGdldCBtZXRhZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhO1xuICAgIH1cbiAgICBzZXQgbWV0YWRhdGEodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgc2lnbmluZ0tleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5nS2V5cztcbiAgICB9XG4gICAgc2V0IHNpZ25pbmdLZXlzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NpZ25pbmdLZXlzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLy8gYmVoYXZpb3IgZmxhZ3NcbiAgICBnZXQgZmlsdGVyUHJvdG9jb2xDbGFpbXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJQcm90b2NvbENsYWltcztcbiAgICB9XG4gICAgZ2V0IGxvYWRVc2VySW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VySW5mbztcbiAgICB9XG4gICAgZ2V0IHN0YWxlU3RhdGVBZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFsZVN0YXRlQWdlO1xuICAgIH1cbiAgICBnZXQgY2xvY2tTa2V3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2xvY2tTa2V3O1xuICAgIH1cblxuICAgIGdldCBzdGF0ZVN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVTdG9yZTtcbiAgICB9XG4gICAgZ2V0IHZhbGlkYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRvcjtcbiAgICB9XG4gICAgZ2V0IG1ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZTtcbiAgICB9XG5cbiAgICAvLyBleHRyYSBxdWVyeSBwYXJhbXNcbiAgICBnZXQgZXh0cmFRdWVyeVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXM7XG4gICAgfVxuICAgIHNldCBleHRyYVF1ZXJ5UGFyYW1zKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2V4dHJhUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9PaWRjQ2xpZW50U2V0dGluZ3MuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJTdG9yYWdlU3RhdGVTdG9yZSB7XG4gICAgY29uc3RydWN0b3Ioe3ByZWZpeCA9IFwib2lkYy5cIiwgc3RvcmUgPSBHbG9iYWwubG9jYWxTdG9yYWdlfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gICAgICAgIHRoaXMuX3ByZWZpeCA9IHByZWZpeDtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5zZXRcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgdGhpcy5fc3RvcmUuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIldlYlN0b3JhZ2VTdGF0ZVN0b3JlLmdldFwiLCBrZXkpO1xuXG4gICAgICAgIGtleSA9IHRoaXMuX3ByZWZpeCArIGtleTtcblxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX3N0b3JlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICBMb2cuZGVidWcoXCJXZWJTdG9yYWdlU3RhdGVTdG9yZS5yZW1vdmVcIiwga2V5KTtcblxuICAgICAgICBrZXkgPSB0aGlzLl9wcmVmaXggKyBrZXk7XG5cbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9zdG9yZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIHRoaXMuX3N0b3JlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0QWxsS2V5cygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiV2ViU3RvcmFnZVN0YXRlU3RvcmUuZ2V0QWxsS2V5c1wiKTtcblxuICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zdG9yZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLl9zdG9yZS5rZXkoaW5kZXgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YodGhpcy5fcHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkuc3Vic3RyKHRoaXMuX3ByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShrZXlzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2ViU3RvcmFnZVN0YXRlU3RvcmUuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5jb25zdCB0aW1lciA9IHtcbiAgICBzZXRJbnRlcnZhbDogZnVuY3Rpb24gKGNiLCBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoY2IsIGR1cmF0aW9uKTtcbiAgICB9LFxuICAgIGNsZWFySW50ZXJ2YWw6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaGFuZGxlKTtcbiAgICB9XG59O1xuXG5sZXQgdGVzdGluZyA9IGZhbHNlO1xubGV0IHJlcXVlc3QgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWwge1xuXG4gICAgc3RhdGljIF90ZXN0aW5nKCkge1xuICAgICAgICB0ZXN0aW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgbG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHNlc3Npb25TdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRYTUxIdHRwUmVxdWVzdChuZXdSZXF1ZXN0KSB7XG4gICAgICAgIHJlcXVlc3QgPSBuZXdSZXF1ZXN0O1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgWE1MSHR0cFJlcXVlc3QoKSB7XG4gICAgICAgIGlmICghdGVzdGluZykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QgfHwgWE1MSHR0cFJlcXVlc3Q7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHRpbWVyKCkge1xuICAgICAgICBpZiAoIXRlc3RpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR2xvYmFsLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgTWV0YWRhdGFTZXJ2aWNlIGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlJztcbmltcG9ydCBVc2VySW5mb1NlcnZpY2UgZnJvbSAnLi9Vc2VySW5mb1NlcnZpY2UnO1xuaW1wb3J0IEVycm9yUmVzcG9uc2UgZnJvbSAnLi9FcnJvclJlc3BvbnNlJztcbmltcG9ydCBKb3NlVXRpbCBmcm9tICcuL0pvc2VVdGlsJztcblxuY29uc3QgUHJvdG9jb2xDbGFpbXMgPSBbXCJub25jZVwiLCBcImF0X2hhc2hcIiwgXCJpYXRcIiwgXCJuYmZcIiwgXCJleHBcIiwgXCJhdWRcIiwgXCJpc3NcIiwgXCJjX2hhc2hcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlVmFsaWRhdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBNZXRhZGF0YVNlcnZpY2VDdG9yID0gTWV0YWRhdGFTZXJ2aWNlLCBVc2VySW5mb1NlcnZpY2VDdG9yID0gVXNlckluZm9TZXJ2aWNlLCBqb3NlVXRpbCA9IEpvc2VVdGlsKSB7XG4gICAgICAgIGlmICghc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHNldHRpbmdzIHBhc3NlZCB0byBSZXNwb25zZVZhbGlkYXRvclwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldHRpbmdzXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl91c2VySW5mb1NlcnZpY2UgPSBuZXcgVXNlckluZm9TZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX2pvc2VVdGlsID0gam9zZVV0aWw7XG4gICAgfVxuXG4gICAgdmFsaWRhdGVTaWduaW5SZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWduaW5SZXNwb25zZVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc1NpZ25pblBhcmFtcyhzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwic3RhdGUgcHJvY2Vzc2VkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwidG9rZW5zIHZhbGlkYXRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvY2Vzc0NsYWltcyhyZXNwb25zZSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImNsYWltcyBwcm9jZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZVNpZ25vdXRSZXNwb25zZShzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IudmFsaWRhdGVTaWdub3V0UmVzcG9uc2VcIik7XG5cbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGUgbWF0Y2hlcywgdGFrZSB0aGUgc3RvcmVkIGRhdGFcbiAgICAgICAgLy8gYW5kIHNldCBpdCBpbnRvIHRoZSByZXNwb25zZSBzbyBjYWxsZXJzIGNhbiBnZXQgdGhlaXIgc3RhdGVcbiAgICAgICAgLy8gdGhpcyBpcyBpbXBvcnRhbnQgZm9yIGJvdGggc3VjY2VzcyAmIGVycm9yIG91dGNvbWVzXG4gICAgICAgIExvZy5kZWJ1ZyhcInN0YXRlIHZhbGlkYXRlZFwiKTtcbiAgICAgICAgcmVzcG9uc2Uuc3RhdGUgPSBzdGF0ZS5kYXRhO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgICAgTG9nLndhcm4oXCJSZXNwb25zZSB3YXMgZXJyb3JcIiwgcmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvclJlc3BvbnNlKHJlc3BvbnNlKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc1NpZ25pblBhcmFtcyhzdGF0ZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVzcG9uc2VWYWxpZGF0b3IuX3Byb2Nlc3NTaWduaW5QYXJhbXNcIik7XG5cbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSByZXNwb25zZS5zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiU3RhdGUgZG9lcyBub3QgbWF0Y2hcIikpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIXN0YXRlLmNsaWVudF9pZCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gY2xpZW50X2lkIG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGNsaWVudF9pZCBvbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICghc3RhdGUuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBhdXRob3JpdHkgb24gc3RhdGVcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gYXV0aG9yaXR5IG9uIHN0YXRlXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGF1dGhvcml0eSB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5hdXRob3JpdHkgPSBzdGF0ZS5hdXRob3JpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGF1dGhvcml0eSBpZiB0aGUgYXV0aG9yaXR5IGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuYXV0aG9yaXR5ICYmIHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eSAhPT0gc3RhdGUuYXV0aG9yaXR5KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdXRob3JpdHkgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyBhbGxvd3MgdGhlIGNsaWVudF9pZCB0byBiZSBsb2FkZWQgZnJvbSB0aGUgc2lnbmluIHN0YXRlXG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQgPSBzdGF0ZS5jbGllbnRfaWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZW5zdXJlIHdlJ3JlIHVzaW5nIHRoZSBjb3JyZWN0IGNsaWVudF9pZCBpZiB0aGUgY2xpZW50X2lkIGlzIG5vdCBsb2FkZWQgZnJvbSBzaWduaW4gc3RhdGVcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2V0dGluZ3MuY2xpZW50X2lkICYmIHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZCAhPT0gc3RhdGUuY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJjbGllbnRfaWQgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJjbGllbnRfaWQgbWlzbWF0Y2ggb24gc2V0dGluZ3MgdnMuIHNpZ25pbiBzdGF0ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIG5vdyB0aGF0IHdlIGtub3cgdGhlIHN0YXRlIG1hdGNoZXMsIHRha2UgdGhlIHN0b3JlZCBkYXRhXG4gICAgICAgIC8vIGFuZCBzZXQgaXQgaW50byB0aGUgcmVzcG9uc2Ugc28gY2FsbGVycyBjYW4gZ2V0IHRoZWlyIHN0YXRlXG4gICAgICAgIC8vIHRoaXMgaXMgaW1wb3J0YW50IGZvciBib3RoIHN1Y2Nlc3MgJiBlcnJvciBvdXRjb21lc1xuICAgICAgICBMb2cuZGVidWcoXCJzdGF0ZSB2YWxpZGF0ZWRcIik7XG4gICAgICAgIHJlc3BvbnNlLnN0YXRlID0gc3RhdGUuZGF0YTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgIExvZy53YXJuKFwiUmVzcG9uc2Ugd2FzIGVycm9yXCIsIHJlc3BvbnNlLmVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3JSZXNwb25zZShyZXNwb25zZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLm5vbmNlICYmICFyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiRXhwZWN0aW5nIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGlkX3Rva2VuIGluIHJlc3BvbnNlXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3RhdGUubm9uY2UgJiYgcmVzcG9uc2UuaWRfdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vdCBleHBlY3RpbmcgaWRfdG9rZW4gaW4gcmVzcG9uc2VcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5leHBlY3RlZCBpZF90b2tlbiBpbiByZXNwb25zZVwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBfcHJvY2Vzc0NsYWltcyhyZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fcHJvY2Vzc0NsYWltc1wiKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuaXNPcGVuSWRDb25uZWN0KSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJyZXNwb25zZSBpcyBPSURDLCBwcm9jZXNzaW5nIGNsYWltc1wiKTtcblxuICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IHRoaXMuX2ZpbHRlclByb3RvY29sQ2xhaW1zKHJlc3BvbnNlLnByb2ZpbGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubG9hZFVzZXJJbmZvICYmIHJlc3BvbnNlLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImxvYWRpbmcgdXNlciBpbmZvXCIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvU2VydmljZS5nZXRDbGFpbXMocmVzcG9uc2UuYWNjZXNzX3Rva2VuKS50aGVuKGNsYWltcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInVzZXIgaW5mbyBjbGFpbXMgcmVjZWl2ZWQgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYWltcy5zdWIgIT09IHJlc3BvbnNlLnByb2ZpbGUuc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJzdWIgZnJvbSB1c2VyIGluZm8gZW5kcG9pbnQgZG9lcyBub3QgbWF0Y2ggc3ViIGluIGFjY2Vzc190b2tlblwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9maWxlID0gdGhpcy5fbWVyZ2VDbGFpbXMocmVzcG9uc2UucHJvZmlsZSwgY2xhaW1zKTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwidXNlciBpbmZvIGNsYWltcyByZWNlaXZlZCwgdXBkYXRlZCBwcm9maWxlOlwiLCByZXNwb25zZS5wcm9maWxlKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJub3QgbG9hZGluZyB1c2VyIGluZm9cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJyZXNwb25zZSBpcyBub3QgT0lEQywgbm90IHByb2Nlc3NpbmcgY2xhaW1zXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX21lcmdlQ2xhaW1zKGNsYWltczEsIGNsYWltczIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIGNsYWltczEpO1xuXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gY2xhaW1zMikge1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGNsYWltczJbbmFtZV07XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHZhbHVlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdFtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXN1bHRbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbbmFtZV0uaW5kZXhPZih2YWx1ZSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0W25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRbbmFtZV0gPSBbcmVzdWx0W25hbWVdLCB2YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBfZmlsdGVyUHJvdG9jb2xDbGFpbXMoY2xhaW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl9maWx0ZXJQcm90b2NvbENsYWltcywgaW5jb21pbmcgY2xhaW1zOlwiLCBjbGFpbXMpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBPYmplY3QuYXNzaWduKHt9LCBjbGFpbXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5fZmlsdGVyUHJvdG9jb2xDbGFpbXMpIHtcbiAgICAgICAgICAgIFByb3RvY29sQ2xhaW1zLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFt0eXBlXTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBMb2cuZGVidWcoXCJwcm90b2NvbCBjbGFpbXMgZmlsdGVyZWRcIiwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInByb3RvY29sIGNsYWltcyBub3QgZmlsdGVyZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlVG9rZW5zKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVUb2tlbnNcIik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmlkX3Rva2VuKSB7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJWYWxpZGF0aW5nIGlkX3Rva2VuIGFuZCBhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlZhbGlkYXRpbmcgaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJObyBpZF90b2tlbiB0byB2YWxpZGF0ZVwiKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgX3ZhbGlkYXRlSWRUb2tlbkFuZEFjY2Vzc1Rva2VuKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuQW5kQWNjZXNzVG9rZW5cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlSWRUb2tlbihzdGF0ZSwgcmVzcG9uc2UpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQWNjZXNzVG9rZW4ocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfdmFsaWRhdGVJZFRva2VuKHN0YXRlLCByZXNwb25zZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fdmFsaWRhdGVJZFRva2VuXCIpO1xuXG4gICAgICAgIGlmICghc3RhdGUubm9uY2UpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIG5vbmNlIG9uIHN0YXRlXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIgfHwgIWp3dC5wYXlsb2FkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIiwgand0KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLm5vbmNlICE9PSBqd3QucGF5bG9hZC5ub25jZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiSW52YWxpZCBub25jZSBpbiBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIG5vbmNlIGluIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBraWQgPSBqd3QuaGVhZGVyLmtpZDtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlcigpLnRoZW4oaXNzdWVyID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlY2VpdmVkIGlzc3VlclwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRTaWduaW5nS2V5cygpLnRoZW4oa2V5cyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHNpZ25pbmcga2V5cyBmcm9tIG1ldGFkYXRhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lnbmluZyBrZXlzIGZyb20gbWV0YWRhdGFcIikpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlJlY2VpdmVkIHNpZ25pbmcga2V5c1wiKTtcbiAgICAgICAgICAgICAgICBsZXQga2V5O1xuICAgICAgICAgICAgICAgIGlmICgha2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSB0aGlzLl9maWx0ZXJCeUFsZyhrZXlzLCBqd3QuaGVhZGVyLmFsZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8ga2lkIGZvdW5kIGluIGlkX3Rva2VuIGFuZCBtb3JlIHRoYW4gb25lIGtleSBmb3VuZCBpbiBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBraWQgZm91bmQgaW4gaWRfdG9rZW4gYW5kIG1vcmUgdGhhbiBvbmUga2V5IGZvdW5kIGluIG1ldGFkYXRhXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraWQgaXMgbWFuZGF0b3J5IG9ubHkgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUga2V5cyBpbiB0aGUgcmVmZXJlbmNlZCBKV0sgU2V0IGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWUgaHR0cDovL29wZW5pZC5uZXQvc3BlY3Mvb3BlbmlkLWNvbm5lY3QtY29yZS0xXzAuaHRtbCNTaWduaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXlzLmZpbHRlcihrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleS5raWQgPT09IGtpZDtcbiAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8ga2V5IG1hdGNoaW5nIGtpZCBvciBhbGcgZm91bmQgaW4gc2lnbmluZyBrZXlzXCIpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgYXVkaWVuY2UgPSBzdGF0ZS5jbGllbnRfaWQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGNsb2NrU2tld0luU2Vjb25kcyA9IHRoaXMuX3NldHRpbmdzLmNsb2NrU2tldztcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJWYWxpZGFpbmcgSldUOyB1c2luZyBjbG9jayBza2V3IChpbiBzZWNvbmRzKSBvZjogXCIsIGNsb2NrU2tld0luU2Vjb25kcyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fam9zZVV0aWwudmFsaWRhdGVKd3QocmVzcG9uc2UuaWRfdG9rZW4sIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3SW5TZWNvbmRzKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkpXVCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWp3dC5wYXlsb2FkLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc3ViIHByZXNlbnQgaW4gaWRfdG9rZW5cIikpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZmlsZSA9IGp3dC5wYXlsb2FkO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9maWx0ZXJCeUFsZyhrZXlzLCBhbGcpe1xuICAgICAgICBMb2cuZGVidWcoXCJSZXNwb25zZVZhbGlkYXRvci5fZmlsdGVyQnlBbGdcIiwgYWxnKTtcblxuICAgICAgICB2YXIga3R5ID0gbnVsbDtcbiAgICAgICAgaWYgKGFsZy5zdGFydHNXaXRoKFwiUlNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiUlNBXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWxnLnN0YXJ0c1dpdGgoXCJQU1wiKSkge1xuICAgICAgICAgICAga3R5ID0gXCJQU1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFsZy5zdGFydHNXaXRoKFwiRVNcIikpIHtcbiAgICAgICAgICAgIGt0eSA9IFwiRUNcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcImFsZyBub3Qgc3VwcG9ydGVkOiBcIiwgYWxnKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgTG9nLmRlYnVnKFwiTG9va2luZyBmb3Iga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSk7XG5cbiAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKGtleSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga2V5Lmt0eSA9PT0ga3R5O1xuICAgICAgICB9KTtcblxuICAgICAgICBMb2cuZGVidWcoXCJOdW1iZXIgb2Yga2V5cyB0aGF0IG1hdGNoIGt0eTogXCIsIGt0eSwga2V5cy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cblxuICAgIF92YWxpZGF0ZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlc3BvbnNlVmFsaWRhdG9yLl92YWxpZGF0ZUFjY2Vzc1Rva2VuXCIpO1xuXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gcHJvZmlsZSBsb2FkZWQgZnJvbSBpZF90b2tlblwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBwcm9maWxlIGxvYWRlZCBmcm9tIGlkX3Rva2VuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBhdF9oYXNoIGluIGlkX3Rva2VuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIGF0X2hhc2ggaW4gaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5pZF90b2tlbikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gaWRfdG9rZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gaWRfdG9rZW5cIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGp3dCA9IHRoaXMuX2pvc2VVdGlsLnBhcnNlSnd0KHJlc3BvbnNlLmlkX3Rva2VuKTtcbiAgICAgICAgaWYgKCFqd3QgfHwgIWp3dC5oZWFkZXIpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiLCBqd3QpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBpZF90b2tlblwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFzaEFsZyA9IGp3dC5oZWFkZXIuYWxnO1xuICAgICAgICBpZiAoIWhhc2hBbGcgfHwgaGFzaEFsZy5sZW5ndGggIT09IDUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIlVuc3VwcG9ydGVkIGFsZzpcIiwgaGFzaEFsZyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYXNoQml0cyA9IGhhc2hBbGcuc3Vic3RyKDIsIDMpO1xuICAgICAgICBpZiAoIWhhc2hCaXRzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6XCIsIGhhc2hBbGcsIGhhc2hCaXRzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBhbGc6IFwiICsgaGFzaEFsZykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFzaEJpdHMgPSBwYXJzZUludChoYXNoQml0cyk7XG4gICAgICAgIGlmIChoYXNoQml0cyAhPT0gMjU2ICYmIGhhc2hCaXRzICE9PSAzODQgJiYgaGFzaEJpdHMgIT09IDUxMikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOlwiLCBoYXNoQWxnLCBoYXNoQml0cyk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiVW5zdXBwb3J0ZWQgYWxnOiBcIiArIGhhc2hBbGcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzaGEgPSBcInNoYVwiICsgaGFzaEJpdHM7XG4gICAgICAgIHZhciBoYXNoID0gdGhpcy5fam9zZVV0aWwuaGFzaFN0cmluZyhyZXNwb25zZS5hY2Nlc3NfdG9rZW4sIHNoYSk7XG4gICAgICAgIGlmICghaGFzaCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiYWNjZXNzX3Rva2VuIGhhc2ggZmFpbGVkOlwiLCBzaGEpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZWZ0ID0gaGFzaC5zdWJzdHIoMCwgaGFzaC5sZW5ndGggLyAyKTtcbiAgICAgICAgdmFyIGxlZnRfYjY0dSA9IHRoaXMuX2pvc2VVdGlsLmhleFRvQmFzZTY0VXJsKGxlZnQpO1xuICAgICAgICBpZiAobGVmdF9iNjR1ICE9PSByZXNwb25zZS5wcm9maWxlLmF0X2hhc2gpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkZhaWxlZCB0byB2YWxpZGF0ZSBhdF9oYXNoXCIsIGxlZnRfYjY0dSwgcmVzcG9uc2UucHJvZmlsZS5hdF9oYXNoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdmFsaWRhdGUgYXRfaGFzaFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc3BvbnNlVmFsaWRhdG9yLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgSnNvblNlcnZpY2UgZnJvbSAnLi9Kc29uU2VydmljZSc7XG5cbmNvbnN0IE9pZGNNZXRhZGF0YVVybFBhdGggPSAnLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhZGF0YVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzZXR0aW5ncyBwYXNzZWQgdG8gTWV0YWRhdGFTZXJ2aWNlXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IoKTtcbiAgICB9XG5cbiAgICBnZXQgbWV0YWRhdGFVcmwoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWV0YWRhdGFVcmwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5tZXRhZGF0YVVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsID0gdGhpcy5fc2V0dGluZ3MubWV0YWRhdGFVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tZXRhZGF0YVVybCA9IHRoaXMuX3NldHRpbmdzLmF1dGhvcml0eTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tZXRhZGF0YVVybCAmJiB0aGlzLl9tZXRhZGF0YVVybC5pbmRleE9mKE9pZGNNZXRhZGF0YVVybFBhdGgpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWV0YWRhdGFVcmxbdGhpcy5fbWV0YWRhdGFVcmwubGVuZ3RoIC0gMV0gIT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFVcmwgKz0gJy8nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhVXJsICs9IE9pZGNNZXRhZGF0YVVybFBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhVXJsO1xuICAgIH1cblxuICAgIGdldE1ldGFkYXRhKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0TWV0YWRhdGFcIik7XG5cbiAgICAgICAgaWYgKHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJSZXR1cm5pbmcgbWV0YWRhdGEgZnJvbSBzZXR0aW5nc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fc2V0dGluZ3MubWV0YWRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm1ldGFkYXRhVXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBhdXRob3JpdHkgb3IgbWV0YWRhdGFVcmwgY29uZmlndXJlZCBvbiBzZXR0aW5nc1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBMb2cuZGVidWcoXCJnZXR0aW5nIG1ldGFkYXRhIGZyb21cIiwgdGhpcy5tZXRhZGF0YVVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2pzb25TZXJ2aWNlLmdldEpzb24odGhpcy5tZXRhZGF0YVVybClcbiAgICAgICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJqc29uIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdldElzc3VlcigpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldElzc3VlclwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJpc3N1ZXJcIik7XG4gICAgfVxuXG4gICAgZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50KCkge1xuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0QXV0aG9yaXphdGlvbkVuZHBvaW50XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcImF1dGhvcml6YXRpb25fZW5kcG9pbnRcIik7XG4gICAgfVxuXG4gICAgZ2V0VXNlckluZm9FbmRwb2ludCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFVzZXJJbmZvRW5kcG9pbnRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidXNlcmluZm9fZW5kcG9pbnRcIik7XG4gICAgfVxuXG4gICAgZ2V0VG9rZW5FbmRwb2ludCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFRva2VuRW5kcG9pbnRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwidG9rZW5fZW5kcG9pbnRcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIFxuICAgIGdldENoZWNrU2Vzc2lvbklmcmFtZSgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldENoZWNrU2Vzc2lvbklmcmFtZVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1ldGFkYXRhUHJvcGVydHkoXCJjaGVja19zZXNzaW9uX2lmcmFtZVwiLCB0cnVlKTtcbiAgICB9XG5cbiAgICBnZXRFbmRTZXNzaW9uRW5kcG9pbnQoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIk1ldGFkYXRhU2VydmljZS5nZXRFbmRTZXNzaW9uRW5kcG9pbnRcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiZW5kX3Nlc3Npb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgZ2V0UmV2b2NhdGlvbkVuZHBvaW50KCkge1xuICAgICAgICBMb2cuZGVidWcoXCJNZXRhZGF0YVNlcnZpY2UuZ2V0UmV2b2NhdGlvbkVuZHBvaW50XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWV0YWRhdGFQcm9wZXJ0eShcInJldm9jYXRpb25fZW5kcG9pbnRcIiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgX2dldE1ldGFkYXRhUHJvcGVydHkobmFtZSwgb3B0aW9uYWw9ZmFsc2UpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLl9nZXRNZXRhZGF0YVByb3BlcnR5XCIsIG5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldE1ldGFkYXRhKCkudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJtZXRhZGF0YSByZWNpZXZlZFwiKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFkYXRhW25hbWVdID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gb3B0aW9uYWwgcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIk1ldGFkYXRhIGRvZXMgbm90IGNvbnRhaW4gcHJvcGVydHkgXCIgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YWRhdGEgZG9lcyBub3QgY29udGFpbiBwcm9wZXJ0eSBcIiArIG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhW25hbWVdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRTaWduaW5nS2V5cygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWV0YWRhdGFTZXJ2aWNlLmdldFNpZ25pbmdLZXlzXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zaWduaW5nS2V5cykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiUmV0dXJuaW5nIHNpZ25pbmdLZXlzIGZyb20gc2V0dGluZ3NcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNZXRhZGF0YVByb3BlcnR5KFwiandrc191cmlcIikudGhlbihqd2tzX3VyaSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJqd2tzX3VyaSByZWNlaXZlZFwiLCBqd2tzX3VyaSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9qc29uU2VydmljZS5nZXRKc29uKGp3a3NfdXJpKS50aGVuKGtleVNldCA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwia2V5IHNldCByZWNlaXZlZFwiLCBrZXlTZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQua2V5cykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIGtleXMgb24ga2V5c2V0XCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzID0ga2V5U2V0LmtleXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NldHRpbmdzLnNpZ25pbmdLZXlzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NZXRhZGF0YVNlcnZpY2UuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoWE1MSHR0cFJlcXVlc3RDdG9yID0gR2xvYmFsLlhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgIHRoaXMuX1hNTEh0dHBSZXF1ZXN0ID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xuICAgIH1cbiAgICBcbiAgICBnZXRKc29uKHVybCwgdG9rZW4pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSnNvblNlcnZpY2UuZ2V0SnNvblwiLCB1cmwpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF1cmwpe1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gdXJsIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVybFwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyB0aGlzLl9YTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgcmVxLm9wZW4oJ0dFVCcsIHVybCk7XG5cbiAgICAgICAgICAgIHJlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgcmVxLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHJlcS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlcS5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmVycm9yKFwiRXJyb3IgcGFyc2luZyBKU09OIHJlc3BvbnNlXCIsIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChFcnJvcihyZXEuc3RhdHVzVGV4dCArIFwiIChcIiArIHJlcS5zdGF0dXMgKyBcIilcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9nLmVycm9yKFwibmV0d29yayBlcnJvclwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoXCJOZXR3b3JrIEVycm9yXCIpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInRva2VuIHBhc3NlZCwgc2V0dGluZyBBdXRob3JpemF0aW9uIGhlYWRlclwiKTtcbiAgICAgICAgICAgICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyB0b2tlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcS5zZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSnNvblNlcnZpY2UuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgSnNvblNlcnZpY2UgZnJvbSAnLi9Kc29uU2VydmljZSc7XG5pbXBvcnQgTWV0YWRhdGFTZXJ2aWNlIGZyb20gJy4vTWV0YWRhdGFTZXJ2aWNlJztcbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mb1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBKc29uU2VydmljZUN0b3IgPSBKc29uU2VydmljZSwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzZXR0aW5ncyBwYXNzZWQgdG8gVXNlckluZm9TZXJ2aWNlXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0dGluZ3NcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLl9qc29uU2VydmljZSA9IG5ldyBKc29uU2VydmljZUN0b3IoKTtcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlID0gbmV3IE1ldGFkYXRhU2VydmljZUN0b3IodGhpcy5fc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIGdldENsYWltcyh0b2tlbikge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VySW5mb1NlcnZpY2UuZ2V0Q2xhaW1zXCIpO1xuXG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHRva2VuIHBhc3NlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJBIHRva2VuIGlzIHJlcXVpcmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXRhZGF0YVNlcnZpY2UuZ2V0VXNlckluZm9FbmRwb2ludCgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInJlY2VpdmVkIHVzZXJpbmZvIHVybFwiLCB1cmwpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvblNlcnZpY2UuZ2V0SnNvbih1cmwsIHRva2VuKS50aGVuKGNsYWltcyA9PiB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiY2xhaW1zIHJlY2VpdmVkXCIsIGNsYWltcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYWltcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlckluZm9TZXJ2aWNlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUmVzcG9uc2UgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3Ioe2Vycm9yLCBlcnJvcl9kZXNjcmlwdGlvbiwgZXJyb3JfdXJpLCBzdGF0ZX09e31cbiAgICApIHtcbiAgICAgICAgIGlmICghZXJyb3Ipe1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gZXJyb3IgcGFzc2VkIHRvIEVycm9yUmVzcG9uc2VcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlcnJvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3VwZXIoZXJyb3JfZGVzY3JpcHRpb24gfHwgZXJyb3IpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFcnJvclJlc3BvbnNlXCI7IFxuICAgICAgICBcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gZXJyb3JfdXJpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvclJlc3BvbnNlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuLy8gaW1wb3J0IHsgandzLCBLRVlVVElMIGFzIEtleVV0aWwsIFg1MDksIGNyeXB0bywgaGV4dG9iNjR1IH0gZnJvbSAnanNyc2FzaWduJztcbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IElkVG9rZW5WZXJpZmllciBmcm9tICdpZHRva2VuLXZlcmlmaWVyJ1xuXG5jb25zdCBBbGxvd2VkU2lnbmluZ0FsZ3MgPSBbJ1JTMjU2JywgJ1JTMzg0JywgJ1JTNTEyJywgJ1BTMjU2JywgJ1BTMzg0JywgJ1BTNTEyJywgJ0VTMjU2JywgJ0VTMzg0JywgJ0VTNTEyJ107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpvc2VVdGlsIHtcblxuICAgIHN0YXRpYyBwYXJzZUp3dChqd3QpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwucGFyc2VKd3RcIik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgICAgIGV4cGVjdGVkQWxnOiAnUlMyNTYnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpZFRva2VuVmVyaWZpZXIgPSBuZXcgSWRUb2tlblZlcmlmaWVyKHBhcmFtZXRlcnMpXG5cbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gaWRUb2tlblZlcmlmaWVyLmRlY29kZShqd3QpXG4gICAgICAgICAgICBpZiAodG9rZW4uaGVhZGVyICYmIHRva2VuLnBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHRva2VuLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogdG9rZW4ucGF5bG9hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlSnd0KGp3dCwga2V5LCBpc3N1ZXIsIGF1ZGllbmNlLCBjbG9ja1NrZXcsIG5vdywgY2IpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwudmFsaWRhdGVKd3RcIik7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gaWYgKGtleS5rdHkgPT09IFwiUlNBXCIpIHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoa2V5LmUgJiYga2V5Lm4pIHtcbiAgICAgICAgICAgIC8vICAgICAgICAga2V5ID0gS2V5VXRpbC5nZXRLZXkoa2V5KTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgZWxzZSBpZiAoa2V5Lng1YyAmJiBrZXkueDVjLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBrZXkgPSBLZXlVdGlsLmdldEtleShYNTA5LmdldFB1YmxpY0tleUZyb21DZXJ0UEVNKGtleS54NWNbMF0pKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIExvZy5lcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlJTQSBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIikpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKGtleS5rdHkgPT09IFwiRUNcIikge1xuICAgICAgICAgICAgLy8gICAgIGlmIChrZXkuY3J2ICYmIGtleS54ICYmIGtleS55KSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGtleSA9IEtleVV0aWwuZ2V0S2V5KGtleSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAgICAgICBMb2cuZXJyb3IoXCJFQyBrZXkgbWlzc2luZyBrZXkgbWF0ZXJpYWxcIiwga2V5KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkVDIGtleSBtaXNzaW5nIGtleSBtYXRlcmlhbFwiKSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgTG9nLmVycm9yKFwiVW5zdXBwb3J0ZWQga2V5IHR5cGVcIiwga2V5ICYmIGtleS5rdHkpO1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCBrZXkgdHlwZTogXCIgKyBrZXkgJiYga2V5Lmt0eSkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJldHVybiBKb3NlVXRpbC5fdmFsaWRhdGVKd3Qoand0LCBrZXksIGlzc3VlciwgYXVkaWVuY2UsIGNsb2NrU2tldywgbm93KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiSldUIHZhbGlkYXRpb24gZmFpbGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIF92YWxpZGF0ZUp3dChqd3QsIGtleSwgaXNzdWVyLCBhdWRpZW5jZSwgY2xvY2tTa2V3LCBub3cpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiSm9zZVV0aWwuX3ZhbGlkYXRlSnd0XCIpO1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge1xuICAgICAgICAgICAgaXNzdWVyLFxuICAgICAgICAgICAgYXVkaWVuY2UsXG4gICAgICAgICAgICBsZWV3YXk6IGNsb2NrU2tldyxcbiAgICAgICAgICAgIGV4cGVjdGVkQWxnOiAnUlMyNTYnXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWRUb2tlblZlcmlmaWVyID0gbmV3IElkVG9rZW5WZXJpZmllcihwYXJhbWV0ZXJzKVxuXG4gICAgICAgIGlmICghY2xvY2tTa2V3KSB7XG4gICAgICAgICAgICBjbG9ja1NrZXcgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFub3cpIHtcbiAgICAgICAgICAgIG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXlsb2FkID0gSm9zZVV0aWwucGFyc2VKd3Qoand0KS5wYXlsb2FkO1xuXG4gICAgICAgIGlmICghcGF5bG9hZC5pc3MpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcImlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImlzc3VlciB3YXMgbm90IHByb3ZpZGVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5pc3MgIT09IGlzc3Vlcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiSW52YWxpZCBpc3N1ZXIgaW4gdG9rZW5cIiwgcGF5bG9hZC5pc3MpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIkludmFsaWQgaXNzdWVyIGluIHRva2VuOiBcIiArIHBheWxvYWQuaXNzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBheWxvYWQuYXVkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJhdWQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbGlkQXVkaWVuY2UgPSBwYXlsb2FkLmF1ZCA9PT0gYXVkaWVuY2UgfHwgKEFycmF5LmlzQXJyYXkocGF5bG9hZC5hdWQpICYmIHBheWxvYWQuYXVkLmluZGV4T2YoYXVkaWVuY2UpID49IDApOyBcbiAgICAgICAgaWYgKCF2YWxpZEF1ZGllbmNlKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuXCIsIHBheWxvYWQuYXVkKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJJbnZhbGlkIGF1ZGllbmNlIGluIHRva2VuOiBcIiArIHBheWxvYWQuYXVkKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbG93ZXJOb3cgPSBub3cgKyBjbG9ja1NrZXc7XG4gICAgICAgIHZhciB1cHBlck5vdyA9IG5vdyAtIGNsb2NrU2tldztcblxuICAgICAgICBpZiAoIXBheWxvYWQuaWF0KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJpYXQgd2FzIG5vdCBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpYXQgd2FzIG5vdCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvd2VyTm93IDwgcGF5bG9hZC5pYXQpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcImlhdCBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQuaWF0KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJpYXQgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLmlhdCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheWxvYWQubmJmICYmIGxvd2VyTm93IDwgcGF5bG9hZC5uYmYpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIm5iZiBpcyBpbiB0aGUgZnV0dXJlXCIsIHBheWxvYWQubmJmKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJuYmYgaXMgaW4gdGhlIGZ1dHVyZTogXCIgKyBwYXlsb2FkLm5iZikpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXlsb2FkLmV4cCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiZXhwIHdhcyBub3QgcHJvdmlkZWRcIikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLmV4cCA8IHVwcGVyTm93KSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJleHAgaXMgaW4gdGhlIHBhc3RcIiwgcGF5bG9hZC5leHApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcImV4cCBpcyBpbiB0aGUgcGFzdDpcIiArIHBheWxvYWQuZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gaWYgKCFqd3MuSldTLnZlcmlmeShqd3QsIGtleSwgQWxsb3dlZFNpZ25pbmdBbGdzKSkge1xuICAgICAgICAgICAgaWYgKCFpZFRva2VuVmVyaWZpZXIudmVyaWZ5KGp3dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwic2lnbmF0dXJlIHZhbGlkYXRpb24gZmFpbGVkXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKGUgJiYgZS5tZXNzYWdlIHx8IGUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcInNpZ25hdHVyZSB2YWxpZGF0aW9uIGZhaWxlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGhhc2hTdHJpbmcodmFsdWUsIGFsZykge1xuICAgICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC5oYXNoU3RyaW5nXCIsIHZhbHVlLCBhbGcpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5VdGlsLmhhc2hTdHJpbmcodmFsdWUsIGFsZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBoZXhUb0Jhc2U2NFVybCh2YWx1ZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJKb3NlVXRpbC5oZXhUb0Jhc2U2NFVybFwiLCB2YWx1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gaGV4dG9iNjR1KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTG9nLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0pvc2VVdGlsLmpzIiwidmFyIHNoYTI1NiA9IHJlcXVpcmUoJ2NyeXB0by1qcy9zaGEyNTYnKTtcbnZhciBjcnlwdG9CYXNlNjQgPSByZXF1aXJlKCdjcnlwdG8tanMvZW5jLWJhc2U2NCcpO1xudmFyIGNyeXB0b0hleCA9IHJlcXVpcmUoJ2NyeXB0by1qcy9lbmMtaGV4Jyk7XG5cbnZhciBSU0FWZXJpZmllciA9IHJlcXVpcmUoJy4vaGVscGVycy9yc2EtdmVyaWZpZXInKTtcbnZhciBiYXNlNjQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmFzZTY0Jyk7XG52YXIgandrcyA9IHJlcXVpcmUoJy4vaGVscGVycy9qd2tzJyk7XG52YXIgZXJyb3IgPSByZXF1aXJlKCcuL2hlbHBlcnMvZXJyb3InKTtcbnZhciBEdW1teUNhY2hlID0gcmVxdWlyZSgnLi9oZWxwZXJzL2R1bW15LWNhY2hlJyk7XG52YXIgc3VwcG9ydGVkQWxncyA9IFsnUlMyNTYnXTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkX3Rva2VuIHZlcmlmaWVyXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1ldGVycy5pc3N1ZXIgbmFtZSBvZiB0aGUgaXNzdWVyIG9mIHRoZSB0b2tlblxuICogdGhhdCBzaG91bGQgbWF0Y2ggdGhlIGBpc3NgIGNsYWltIGluIHRoZSBpZF90b2tlblxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtZXRlcnMuYXVkaWVuY2UgaWRlbnRpZmllcyB0aGUgcmVjaXBpZW50cyB0aGF0IHRoZSBKV1QgaXMgaW50ZW5kZWQgZm9yXG4gKiBhbmQgc2hvdWxkIG1hdGNoIHRoZSBgYXVkYCBjbGFpbVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbWV0ZXJzLmp3a3NDYWNoZV0gY2FjaGUgZm9yIEpTT04gV2ViIFRva2VuIEtleXMuIEJ5IGRlZmF1bHQgaXQgaGFzIG5vIGNhY2hlXG4gKiBAcGFyYW0ge1N0cmluZ30gW3BhcmFtZXRlcnMuandrc1VSSV0gQSB2YWxpZCwgZGlyZWN0IFVSSSB0byBmZXRjaCB0aGUgSlNPTiBXZWIgS2V5IFNldCAoSldLUykuXG4gKiBAcGFyYW0ge1N0cmluZ30gW3BhcmFtZXRlcnMuZXhwZWN0ZWRBbGc9J1JTMjU2J10gYWxnb3JpdGhtIGluIHdoaWNoIHRoZSBpZF90b2tlbiB3YXMgc2lnbmVkXG4gKiBhbmQgd2lsbCBiZSB1c2VkIHRvIHZhbGlkYXRlXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtZXRlcnMubGVld2F5PTBdIG51bWJlciBvZiBzZWNvbmRzIHRoYXQgdGhlIGNsb2NrIGNhbiBiZSBvdXQgb2Ygc3luY1xuICogd2hpbGUgdmFsaWRhdGluZyBleHBpcmF0aW9uIG9mIHRoZSBpZF90b2tlblxuICovXG5mdW5jdGlvbiBJZFRva2VuVmVyaWZpZXIocGFyYW1ldGVycykge1xuICAgIHZhciBvcHRpb25zID0gcGFyYW1ldGVycyB8fCB7fTtcblxuICAgIHRoaXMuandrc0NhY2hlID0gb3B0aW9ucy5qd2tzQ2FjaGUgfHwgbmV3IER1bW15Q2FjaGUoKTtcbiAgICB0aGlzLmV4cGVjdGVkQWxnID0gb3B0aW9ucy5leHBlY3RlZEFsZyB8fCAnUlMyNTYnO1xuICAgIHRoaXMuaXNzdWVyID0gb3B0aW9ucy5pc3N1ZXI7XG4gICAgdGhpcy5hdWRpZW5jZSA9IG9wdGlvbnMuYXVkaWVuY2U7XG4gICAgdGhpcy5sZWV3YXkgPSBvcHRpb25zLmxlZXdheSB8fCAwO1xuICAgIHRoaXMuX19kaXNhYmxlRXhwaXJhdGlvbkNoZWNrID0gb3B0aW9ucy5fX2Rpc2FibGVFeHBpcmF0aW9uQ2hlY2sgfHwgZmFsc2U7XG4gICAgdGhpcy5qd2tzVVJJID0gb3B0aW9ucy5qd2tzVVJJO1xuXG4gICAgaWYgKHRoaXMubGVld2F5IDwgMCB8fCB0aGlzLmxlZXdheSA+IDYwKSB7XG4gICAgICAgIHRocm93IG5ldyBlcnJvci5Db25maWd1cmF0aW9uRXJyb3IoJ1RoZSBsZWV3YXkgc2hvdWxkIGJlIHBvc2l0aXZlIGFuZCBsb3dlciB0aGFuIGEgbWludXRlLicpO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3J0ZWRBbGdzLmluZGV4T2YodGhpcy5leHBlY3RlZEFsZykgPT09IC0xKSB7XG4gICAgICAgIHRocm93IG5ldyBlcnJvci5Db25maWd1cmF0aW9uRXJyb3IoJ0FsZ29yaXRobSAnICsgdGhpcy5leHBlY3RlZEFsZyArXG4gICAgICAgICAgICAnIGlzIG5vdCBzdXBwb3J0ZWQuIChFeHBlY3RlZCBhbGdzOiBbJyArIHN1cHBvcnRlZEFsZ3Muam9pbignLCcpICsgJ10pJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7RXJyb3J9IFtlcnJdIGVycm9yIHJldHVybmVkIGlmIHRoZSB2ZXJpZnkgY2Fubm90IGJlIHBlcmZvcm1lZFxuICogQHBhcmFtIHtib29sZWFufSBbc3RhdHVzXSBpZiB0aGUgdG9rZW4gaXMgdmFsaWQgb3Igbm90XG4gKi9cblxuLyoqXG4gKiBWZXJpZmllcyBhbiBpZF90b2tlblxuICpcbiAqIEl0IHdpbGwgdmFsaWRhdGU6XG4gKiAtIHNpZ25hdHVyZSBhY2NvcmRpbmcgdG8gdGhlIGFsZ29yaXRobSBjb25maWd1cmVkIGluIHRoZSB2ZXJpZmllci5cbiAqIC0gaWYgbm9uY2UgaXMgcHJlc2VudCBhbmQgbWF0Y2hlcyB0aGUgb25lIHByb3ZpZGVkXG4gKiAtIGlmIGBpc3NgIGFuZCBgYXVkYCBjbGFpbXMgbWF0Y2hlcyB0aGUgY29uZmlndXJlZCBpc3N1ZXIgYW5kIGF1ZGllbmNlXG4gKiAtIGlmIHRva2VuIGlzIG5vdCBleHBpcmVkIGFuZCB2YWxpZCAoaWYgdGhlIGBuYmZgIGNsYWltIGlzIGluIHRoZSBwYXN0KVxuICpcbiAqIEBtZXRob2QgdmVyaWZ5XG4gKiBAcGFyYW0ge1N0cmluZ30gdG9rZW4gaWRfdG9rZW4gdG8gdmVyaWZ5XG4gKiBAcGFyYW0ge1N0cmluZ30gW25vbmNlXSBub25jZSB2YWx1ZSB0aGF0IHNob3VsZCBtYXRjaCB0aGUgb25lIGluIHRoZSBpZF90b2tlbiBjbGFpbXNcbiAqL1xuSWRUb2tlblZlcmlmaWVyLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiAodG9rZW4sIG5vbmNlKSB7XG4gICAgdmFyIGp3dCA9IHRoaXMuZGVjb2RlKHRva2VuKTtcblxuICAgIGlmIChqd3QgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoand0KTtcbiAgICB9XG5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSB2YXJzLW9uLXRvcCAqL1xuICAgIHZhciBoZWFkQW5kUGF5bG9hZCA9IGp3dC5lbmNvZGVkLmhlYWRlciArICcuJyArIGp3dC5lbmNvZGVkLnBheWxvYWQ7XG4gICAgdmFyIHNpZ25hdHVyZSA9IGJhc2U2NC5kZWNvZGVUb0hFWChqd3QuZW5jb2RlZC5zaWduYXR1cmUpO1xuXG4gICAgdmFyIGFsZyA9IGp3dC5oZWFkZXIuYWxnO1xuICAgIHZhciBraWQgPSBqd3QuaGVhZGVyLmtpZDtcblxuICAgIHZhciBhdWQgPSBqd3QucGF5bG9hZC5hdWQ7XG4gICAgdmFyIGlzcyA9IGp3dC5wYXlsb2FkLmlzcztcbiAgICB2YXIgZXhwID0gand0LnBheWxvYWQuZXhwO1xuICAgIHZhciBuYmYgPSBqd3QucGF5bG9hZC5uYmY7XG4gICAgdmFyIHRub25jZSA9IGp3dC5wYXlsb2FkLm5vbmNlIHx8IG51bGw7XG4gICAgLyogZXNsaW50LWVuYWJsZSB2YXJzLW9uLXRvcCAqL1xuXG4gICAgaWYgKHRoaXMuaXNzdWVyICE9PSBpc3MpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignSXNzdWVyICcgKyBpc3MgKyAnIGlzIG5vdCB2YWxpZC4nKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1ZGllbmNlICE9PSBhdWQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignQXVkaWVuY2UgJyArIGF1ZCArICcgaXMgbm90IHZhbGlkLicpLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXhwZWN0ZWRBbGcgIT09IGFsZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdBbGdvcml0aG0gJyArIGFsZyArXG4gICAgICAgICAgICAnIGlzIG5vdCBzdXBwb3J0ZWQuIChFeHBlY3RlZCBhbGdzOiBbJyArIHN1cHBvcnRlZEFsZ3Muam9pbignLCcpICsgJ10pJyksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAodG5vbmNlICE9PSBub25jZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdOb25jZSBkb2VzIG5vdCBtYXRjaC4nKSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHZhciBleHBpcmF0aW9uRXJyb3IgPSB0aGlzLnZlcmlmeUV4cEFuZE5iZihleHAsIG5iZik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFycy1vbi10b3BcblxuICAgIGlmIChleHBpcmF0aW9uRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGV4cGlyYXRpb25FcnJvciwgZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UnNhVmVyaWZpZXIoaXNzLCBraWQpXG4gICAgICAgIC50aGVuKHJzYVZlcmlmaWVyID0+IHtcbiAgICAgICAgICAgIGlmIChyc2FWZXJpZmllci52ZXJpZnkoaGVhZEFuZFBheWxvYWQsIHNpZ25hdHVyZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGp3dC5wYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgZXJyb3IuVG9rZW5WYWxpZGF0aW9uRXJyb3IoJ0ludmFsaWQgc2lnbmF0dXJlLicpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpXG4gICAgICAgIH0pXG59O1xuXG4vKipcbiAqIFZlcmlmaWVzIHRoYXQgdGhlIGBleHBgIGFuZCBgbmJmYCBjbGFpbXMgYXJlIHZhbGlkIGluIHRoZSBjdXJyZW50IG1vbWVudC5cbiAqXG4gKiBAbWV0aG9kIHZlcmlmeUV4cEFuZE5iZlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cCB2YWx1ZSBvZiBgZXhwYCBjbGFpbVxuICogQHBhcmFtIHtTdHJpbmd9IG5iZiB2YWx1ZSBvZiBgbmJmYCBjbGFpbVxuICogQHJldHVybiB7Ym9vbGVhbn0gaWYgdG9rZW4gaXMgdmFsaWQgYWNjb3JkaW5nIHRvIGBleHBgIGFuZCBgbmJmYFxuICovXG5JZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLnZlcmlmeUV4cEFuZE5iZiA9IGZ1bmN0aW9uIChleHAsIG5iZikge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBleHBEYXRlID0gbmV3IERhdGUoMCk7XG4gICAgdmFyIG5iZkRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICh0aGlzLl9fZGlzYWJsZUV4cGlyYXRpb25DaGVjaykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBleHBEYXRlLnNldFVUQ1NlY29uZHMoZXhwICsgdGhpcy5sZWV3YXkpO1xuXG4gICAgaWYgKG5vdyA+IGV4cERhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignRXhwaXJlZCB0b2tlbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5iZiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG5iZkRhdGUuc2V0VVRDU2Vjb25kcyhuYmYgLSB0aGlzLmxlZXdheSk7XG4gICAgaWYgKG5vdyA8IG5iZkRhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignVGhlIHRva2VuIGlzIG5vdCB2YWxpZCB1bnRpbCBsYXRlciBpbiB0aGUgZnV0dXJlLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgY2hlY2sgeW91ciBjb21wdXRlZCBjbG9jay4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogVmVyaWZpZXMgdGhhdCB0aGUgYGV4cGAgYW5kIGBpYXRgIGNsYWltcyBhcmUgdmFsaWQgaW4gdGhlIGN1cnJlbnQgbW9tZW50LlxuICpcbiAqIEBtZXRob2QgdmVyaWZ5RXhwQW5kSWF0XG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwIHZhbHVlIG9mIGBleHBgIGNsYWltXG4gKiBAcGFyYW0ge1N0cmluZ30gaWF0IHZhbHVlIG9mIGBpYXRgIGNsYWltXG4gKiBAcmV0dXJuIHtib29sZWFufSBpZiB0b2tlbiBpcyB2YWxpZCBhY2NvcmRpbmcgdG8gYGV4cGAgYW5kIGBpYXRgXG4gKi9cbklkVG9rZW5WZXJpZmllci5wcm90b3R5cGUudmVyaWZ5RXhwQW5kSWF0ID0gZnVuY3Rpb24gKGV4cCwgaWF0KSB7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGV4cERhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICB2YXIgaWF0RGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKHRoaXMuX19kaXNhYmxlRXhwaXJhdGlvbkNoZWNrKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGV4cERhdGUuc2V0VVRDU2Vjb25kcyhleHAgKyB0aGlzLmxlZXdheSk7XG5cbiAgICBpZiAobm93ID4gZXhwRGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdFeHBpcmVkIHRva2VuLicpO1xuICAgIH1cblxuICAgIGlhdERhdGUuc2V0VVRDU2Vjb25kcyhpYXQgLSB0aGlzLmxlZXdheSk7XG5cbiAgICBpZiAobm93IDwgaWF0RGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdUaGUgdG9rZW4gd2FzIGlzc3VlZCBpbiB0aGUgZnV0dXJlLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgY2hlY2sgeW91ciBjb21wdXRlZCBjbG9jay4nKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5JZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLmdldFJzYVZlcmlmaWVyID0gZnVuY3Rpb24gKGlzcywga2lkKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgY2FjaGVrZXkgPSBpc3MgKyBraWQ7XG5cbiAgICBpZiAoIXRoaXMuandrc0NhY2hlLmhhcyhjYWNoZWtleSkpIHtcbiAgICAgICAgandrcy5nZXRKV0tTKHtcbiAgICAgICAgICAgIGp3a3NVUkk6IHRoaXMuandrc1VSSSxcbiAgICAgICAgICAgIGlzczogaXNzLFxuICAgICAgICAgICAga2lkOiBraWRcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGtleUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIF90aGlzLmp3a3NDYWNoZS5zZXQoY2FjaGVrZXksIGtleUluZm8pO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCwgbmV3IFJTQVZlcmlmaWVyKGtleUluZm8ubW9kdWx1cywga2V5SW5mby5leHApKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5yZWplY3QoZSlcbiAgICAgICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGtleUluZm8gPSB0aGlzLmp3a3NDYWNoZS5nZXQoY2FjaGVrZXkpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhcnMtb24tdG9wXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShudWxsLCBuZXcgUlNBVmVyaWZpZXIoa2V5SW5mby5tb2R1bHVzLCBrZXlJbmZvLmV4cCkpO1xuICAgIH1cbn07XG5cblxuLyoqXG4gKiBAdHlwZWRlZiBEZWNvZGVkVG9rZW5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGVyIC0gY29udGVudCBvZiB0aGUgSldUIGhlYWRlci5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwYXlsb2FkIC0gdG9rZW4gY2xhaW1zLlxuICogQHByb3BlcnR5IHtPYmplY3R9IGVuY29kZWQgLSBlbmNvZGVkIHBhcnRzIG9mIHRoZSB0b2tlbi5cbiAqL1xuXG4vKipcbiAqIERlY29kZXMgYSB3ZWxsIGZvcm1lZCBKV1Qgd2l0aG91dCBhbnkgdmVyaWZpY2F0aW9uXG4gKlxuICogQG1ldGhvZCBkZWNvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlbiBkZWNvZGVzIHRoZSB0b2tlblxuICogQHJldHVybiB7RGVjb2RlZFRva2VufSBpZiB0b2tlbiBpcyB2YWxpZCBhY2NvcmRpbmcgdG8gYGV4cGAgYW5kIGBuYmZgXG4gKi9cbklkVG9rZW5WZXJpZmllci5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgdmFyIHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcbiAgICB2YXIgaGVhZGVyO1xuICAgIHZhciBwYXlsb2FkO1xuXG4gICAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMykge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdDYW5ub3QgZGVjb2RlIGEgbWFsZm9ybWVkIEpXVCcpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGhlYWRlciA9IEpTT04ucGFyc2UoYmFzZTY0LmRlY29kZVRvU3RyaW5nKHBhcnRzWzBdKSk7XG4gICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGJhc2U2NC5kZWNvZGVUb1N0cmluZyhwYXJ0c1sxXSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignVG9rZW4gaGVhZGVyIG9yIHBheWxvYWQgaXMgbm90IHZhbGlkIEpTT04nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgZW5jb2RlZDoge1xuICAgICAgICAgICAgaGVhZGVyOiBwYXJ0c1swXSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBhcnRzWzFdLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiBwYXJ0c1syXVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIHZhbGlkYXRlQWNjZXNzVG9rZW5DYWxsYmFja1xuICogQHBhcmFtIHtFcnJvcn0gW2Vycl0gZXJyb3IgcmV0dXJuZWQgaWYgdGhlIHZhbGlkYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZFxuICogb3IgdGhlIHRva2VuIGlzIGludmFsaWQuIElmIHRoZXJlIGlzIG5vIGVycm9yLCB0aGVuIHRoZSBhY2Nlc3NfdG9rZW4gaXMgdmFsaWQuXG4gKi9cblxuLyoqXG4gKiBWYWxpZGF0ZXMgYW4gYWNjZXNzX3Rva2VuIGJhc2VkIG9uIHtAbGluayBodHRwOi8vb3BlbmlkLm5ldC9zcGVjcy9vcGVuaWQtY29ubmVjdC1jb3JlLTFfMC5odG1sI0ltcGxpY2l0VG9rZW5WYWxpZGF0aW9ufS5cbiAqIFRoZSBpZF90b2tlbiBmcm9tIHdoZXJlIHRoZSBhbGcgYW5kIGF0SGFzaCBwYXJhbWV0ZXJzIGFyZSB0YWtlbixcbiAqIHNob3VsZCBiZSBkZWNvZGVkIGFuZCB2ZXJpZmllZCBiZWZvcmUgdXNpbmcgdGhpc2Z1bmN0aW9uXG4gKlxuICogQG1ldGhvZCB2YWxpZGF0ZUFjY2Vzc1Rva2VuXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXNzX3Rva2VuIHRoZSBhY2Nlc3NfdG9rZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhbGcgVGhlIGFsZ29yaXRobSBkZWZpbmVkIGluIHRoZSBoZWFkZXIgb2YgdGhlXG4gKiBwcmV2aW91c2x5IHZlcmlmaWVkIGlkX3Rva2VuIHVuZGVyIHRoZSBcImFsZ1wiIGNsYWltLlxuICogQHBhcmFtIHtTdHJpbmd9IGF0SGFzaCBUaGUgXCJhdF9oYXNoXCIgdmFsdWUgaW5jbHVkZWQgaW4gdGhlIHBheWxvYWRcbiAqIG9mIHRoZSBwcmV2aW91c2x5IHZlcmlmaWVkIGlkX3Rva2VuLlxuICogQHBhcmFtIHt2YWxpZGF0ZUFjY2Vzc1Rva2VuQ2FsbGJhY2t9IGNiIGNhbGxiYWNrIHVzZWQgdG8gbm90aWZ5IHRoZSByZXN1bHRzIG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5JZFRva2VuVmVyaWZpZXIucHJvdG90eXBlLnZhbGlkYXRlQWNjZXNzVG9rZW4gPSBmdW5jdGlvbiAoYWNjZXNzVG9rZW4sIGFsZywgYXRIYXNoKSB7XG4gICAgaWYgKHRoaXMuZXhwZWN0ZWRBbGcgIT09IGFsZykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IGVycm9yLlRva2VuVmFsaWRhdGlvbkVycm9yKCdBbGdvcml0aG0gJyArIGFsZyArXG4gICAgICAgICAgICAnIGlzIG5vdCBzdXBwb3J0ZWQuIChFeHBlY3RlZCBhbGc6ICcgKyB0aGlzLmV4cGVjdGVkQWxnICsgJyknKSk7XG4gICAgfVxuICAgIHZhciBzaGEyNTZBY2Nlc3NUb2tlbiA9IHNoYTI1NihhY2Nlc3NUb2tlbik7XG4gICAgdmFyIGhhc2hUb0hleCA9IGNyeXB0b0hleC5zdHJpbmdpZnkoc2hhMjU2QWNjZXNzVG9rZW4pO1xuICAgIHZhciBoYXNoVG9IZXhGaXJzdEhhbGYgPSBoYXNoVG9IZXguc3Vic3RyaW5nKDAsIGhhc2hUb0hleC5sZW5ndGggLyAyKTtcbiAgICB2YXIgaGFzaEZpcnN0SGFsZldvcmRBcnJheSA9IGNyeXB0b0hleC5wYXJzZShoYXNoVG9IZXhGaXJzdEhhbGYpO1xuICAgIHZhciBoYXNoRmlyc3RIYWxmQmFzZTY0ID0gY3J5cHRvQmFzZTY0LnN0cmluZ2lmeShoYXNoRmlyc3RIYWxmV29yZEFycmF5KTtcbiAgICB2YXIgaGFzaEZpcnN0SGFsZkJhc2U2NFNhZmVVcmwgPSBiYXNlNjQuYmFzZTY0VG9CYXNlNjRVcmwoaGFzaEZpcnN0SGFsZkJhc2U2NCk7XG4gICAgaWYgKGhhc2hGaXJzdEhhbGZCYXNlNjRTYWZlVXJsICE9PSBhdEhhc2gpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBlcnJvci5Ub2tlblZhbGlkYXRpb25FcnJvcignSW52YWxpZCBhY2Nlc3NfdG9rZW4nKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElkVG9rZW5WZXJpZmllcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaW5kZXguanMiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgSCA9IFtdO1xuXHQgICAgdmFyIEsgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gaXNQcmltZShuKSB7XG5cdCAgICAgICAgICAgIHZhciBzcXJ0TiA9IE1hdGguc3FydChuKTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKCEobiAlIGZhY3RvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoKG4gLSAobiB8IDApKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIG4gPSAyO1xuXHQgICAgICAgIHZhciBuUHJpbWUgPSAwO1xuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xuXHQgICAgICAgICAgICBpZiAoaXNQcmltZShuKSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG5QcmltZSA8IDgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDMpKTtcblxuXHQgICAgICAgICAgICAgICAgblByaW1lKys7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBuKys7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChILnNsaWNlKDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIGYgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XG5cdCAgICAgICAgICAgIHZhciBoID0gSFs3XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWEweCA8PCAxNCkgfCAoZ2FtbWEweCA+Pj4gMTgpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMHggPj4+IDMpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExICA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTF4ID4+PiAxMCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgIHwgKGUgPj4+IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gc2lnbWEwICsgbWFqO1xuXG5cdCAgICAgICAgICAgICAgICBoID0gZztcblx0ICAgICAgICAgICAgICAgIGcgPSBmO1xuXHQgICAgICAgICAgICAgICAgZiA9IGU7XG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gYjtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICAgICAgSFs1XSA9IChIWzVdICsgZikgfCAwO1xuXHQgICAgICAgICAgICBIWzZdID0gKEhbNl0gKyBnKSB8IDA7XG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xuXG59KSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jcnlwdG8tanMvc2hhMjU2LmpzIiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXG5cdCAqL1xuXHR2YXIgQ3J5cHRvSlMgPSBDcnlwdG9KUyB8fCAoZnVuY3Rpb24gKE1hdGgsIHVuZGVmaW5lZCkge1xuXHQgICAgLypcblx0ICAgICAqIExvY2FsIHBvbHlmaWwgb2YgT2JqZWN0LmNyZWF0ZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIEYoKSB7fTtcblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKVxuXG5cdCAgICAvKipcblx0ICAgICAqIENyeXB0b0pTIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMaWJyYXJ5IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlID0gKGZ1bmN0aW9uICgpIHtcblxuXG5cdCAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IHRoYXQgaW5oZXJpdHMgZnJvbSB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNwYXduXG5cdCAgICAgICAgICAgICAgICB2YXIgc3VidHlwZSA9IGNyZWF0ZSh0aGlzKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQXVnbWVudFxuXHQgICAgICAgICAgICAgICAgaWYgKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcblx0ICAgICAgICAgICAgICAgIGlmICghc3VidHlwZS5oYXNPd25Qcm9wZXJ0eSgnaW5pdCcpIHx8IHRoaXMuaW5pdCA9PT0gc3VidHlwZS5pbml0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXIncyBwcm90b3R5cGUgaXMgdGhlIHN1YnR5cGUgb2JqZWN0XG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQucHJvdG90eXBlID0gc3VidHlwZTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVmZXJlbmNlIHN1cGVydHlwZVxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIgPSB0aGlzO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogRXh0ZW5kcyB0aGlzIG9iamVjdCBhbmQgcnVucyB0aGUgaW5pdCBtZXRob2QuXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBpbnN0YW5jZSA9IE15VHlwZS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5leHRlbmQoKTtcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cblx0ICAgICAgICAgICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYWRkIHNvbWUgbG9naWMgd2hlbiB5b3VyIG9iamVjdHMgYXJlIGNyZWF0ZWQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgICAgIC8vIC4uLlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcGVydGllcyBUaGUgcHJvcGVydGllcyB0byBtaXggaW4uXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIG1peEluOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIElFIHdvbid0IGNvcHkgdG9TdHJpbmcgdXNpbmcgdGhlIGxvb3AgYWJvdmVcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy50b1N0cmluZyA9IHByb3BlcnRpZXMudG9TdHJpbmc7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lnQnl0ZXMgKE9wdGlvbmFsKSBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoZSB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddLCA2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xuXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoaXMgd29yZCBhcnJheSB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7RW5jb2Rlcn0gZW5jb2RlciAoT3B0aW9uYWwpIFRoZSBlbmNvZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IENyeXB0b0pTLmVuYy5IZXhcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGVuY29kZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25jYXRlbmF0ZXMgYSB3b3JkIGFycmF5IHRvIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbmNhdDogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHRoaXNXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0V29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHRoaXMuY2xhbXAoKTtcblxuXHQgICAgICAgICAgICAvLyBDb25jYXRcblx0ICAgICAgICAgICAgaWYgKHRoaXNTaWdCeXRlcyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIGJ5dGUgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRoYXRCeXRlID0gKHRoYXRXb3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgKDI0IC0gKCh0aGlzU2lnQnl0ZXMgKyBpKSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSB3b3JkIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdID0gdGhhdFdvcmRzW2kgPj4+IDJdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgKz0gdGhhdFNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVtb3ZlcyBpbnNpZ25pZmljYW50IGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsYW1wOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wXG5cdCAgICAgICAgICAgIHdvcmRzW3NpZ0J5dGVzID4+PiAyXSAmPSAweGZmZmZmZmZmIDw8ICgzMiAtIChzaWdCeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gd29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgd29yZCBhcnJheSBmaWxsZWQgd2l0aCByYW5kb20gYnl0ZXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbkJ5dGVzIFRoZSBudW1iZXIgb2YgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobkJ5dGVzKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXG5cdCAgICAgICAgICAgIHZhciByID0gKGZ1bmN0aW9uIChtX3cpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBtX3cgPSBtX3c7XG5cdCAgICAgICAgICAgICAgICB2YXIgbV96ID0gMHgzYWRlNjhiMTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYXNrID0gMHhmZmZmZmZmZjtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBtX3ogPSAoMHg5MDY5ICogKG1feiAmIDB4RkZGRikgKyAobV96ID4+IDB4MTApKSAmIG1hc2s7XG5cdCAgICAgICAgICAgICAgICAgICAgbV93ID0gKDB4NDY1MCAqIChtX3cgJiAweEZGRkYpICsgKG1fdyA+PiAweDEwKSkgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAoKG1feiA8PCAweDEwKSArIG1fdykgJiBtYXNrO1xuXHQgICAgICAgICAgICAgICAgICAgIHJlc3VsdCAvPSAweDEwMDAwMDAwMDtcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMC41O1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiAoTWF0aC5yYW5kb20oKSA+IC41ID8gMSA6IC0xKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSk7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHJjYWNoZTsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgX3IgPSByKChyY2FjaGUgfHwgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCk7XG5cblx0ICAgICAgICAgICAgICAgIHJjYWNoZSA9IF9yKCkgKiAweDNhZGU2N2I3O1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaCgoX3IoKSAqIDB4MTAwMDAwMDAwKSB8IDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBFbmNvZGVyIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmMgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBIZXggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGhleENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChoZXhTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZXhTdHJMZW5ndGg7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gM10gfD0gcGFyc2VJbnQoaGV4U3RyLnN1YnN0cihpLCAyKSwgMTYpIDw8ICgyNCAtIChpICUgOCkgKiA0KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGhleFN0ckxlbmd0aCAvIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGF0aW4xIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGxhdGluMUNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiaXRlKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbGF0aW4xQ2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGF0aW4xU3RyIFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5MYXRpbjEucGFyc2UobGF0aW4xU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xU3RyTGVuZ3RoID0gbGF0aW4xU3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSAobGF0aW4xU3RyLmNoYXJDb2RlQXQoaSkgJiAweGZmKSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBsYXRpbjFTdHJMZW5ndGgpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmOCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmOFN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGY4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XG5cdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWFsZm9ybWVkIFVURi04IGRhdGEnKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi04IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGY4LnBhcnNlKHV0ZjhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmOFN0cikge1xuXHQgICAgICAgICAgICByZXR1cm4gTGF0aW4xLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh1dGY4U3RyKSkpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYnVmZmVyZWQgYmxvY2sgYWxnb3JpdGhtIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9taW5CdWZmZXJTaXplIFRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgc2hvdWxkIGJlIGtlcHQgdW5wcm9jZXNzZWQgaW4gdGhlIGJ1ZmZlci4gRGVmYXVsdDogMFxuXHQgICAgICovXG5cdCAgICB2YXIgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IENfbGliLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheS5pbml0KCk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBZGRzIG5ldyBkYXRhIHRvIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgYnVmZmVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2FwcGVuZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEgPSBVdGY4LnBhcnNlKGRhdGEpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFByb2Nlc3NlcyBhdmFpbGFibGUgZGF0YSBibG9ja3MuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9GbHVzaCBXaGV0aGVyIGFsbCBibG9ja3MgYW5kIHBhcnRpYWwgYmxvY2tzIHNob3VsZCBiZSBwcm9jZXNzZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwcm9jZXNzZWQgZGF0YS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wcm9jZXNzOiBmdW5jdGlvbiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc2VkV29yZHMgPSBkYXRhV29yZHMuc3BsaWNlKDAsIG5Xb3Jkc1JlYWR5KTtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfbWluQnVmZmVyU2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBoYXNoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDE2ICg1MTIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaGVyID0gQ3J5cHRvSlMuYWxnby5TSEEyNTYuY3JlYXRlKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBoYXNoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBoYXNoZXIgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SGFzaGVyfSBUaGlzIGhhc2hlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgaGFzaFxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAvLyBGaW5hbCBtZXNzYWdlIHVwZGF0ZVxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNTEyLzMyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIGEgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIFNIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGNmZykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZSBpbiB0aGlzIEhNQUMgaGVscGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSG1hY0hlbHBlcjogZnVuY3Rpb24gKGhhc2hlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDX2FsZ28uSE1BQy5pbml0KGhhc2hlciwga2V5KS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbGdvcml0aG0gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XG5cblx0ICAgIHJldHVybiBDO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vY3J5cHRvLWpzL2NvcmUuanMiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlNjQgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlNjQgPSBDX2VuYy5CYXNlNjQgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgYmFzZTY0U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdICAgICAgID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICAgICAgICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMiA9ICh3b3Jkc1soaSArIDEpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMSkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTMgPSAod29yZHNbKGkgKyAyKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDIpICUgNCkgKiA4KSkgJiAweGZmO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlMSA8PCAxNikgfCAoYnl0ZTIgPDwgOCkgfCBieXRlMztcblxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiAoNiAqICgzIC0gaikpKSAmIDB4M2YpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHdoaWxlIChiYXNlNjRDaGFycy5sZW5ndGggJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gYmFzZTY0Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgQmFzZTY0IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyIFRoZSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoYmFzZTY0U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGJhc2U2NFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NFN0ckxlbmd0aCA9IGJhc2U2NFN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG5cdCAgICAgICAgICAgIHZhciByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcblxuXHQgICAgICAgICAgICBpZiAoIXJldmVyc2VNYXApIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFwLmxlbmd0aDsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VNYXBbbWFwLmNoYXJDb2RlQXQoaildID0gajtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJZ25vcmUgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdJbmRleCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJMZW5ndGggPSBwYWRkaW5nSW5kZXg7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHJldHVybiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApO1xuXG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSdcblx0ICAgIH07XG5cblx0ICAgIGZ1bmN0aW9uIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCkge1xuXHQgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgdmFyIG5CeXRlcyA9IDA7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0U3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgIGlmIChpICUgNCkge1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzMSA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSAtIDEpXSA8PCAoKGkgJSA0KSAqIDIpO1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzMiA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSldID4+PiAoNiAtIChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICB3b3Jkc1tuQnl0ZXMgPj4+IDJdIHw9IChiaXRzMSB8IGJpdHMyKSA8PCAoMjQgLSAobkJ5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICBuQnl0ZXMrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgbkJ5dGVzKTtcblx0ICAgIH1cblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5lbmMuQmFzZTY0O1xuXG59KSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jcnlwdG8tanMvZW5jLWJhc2U2NC5qcyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0cmV0dXJuIENyeXB0b0pTLmVuYy5IZXg7XG5cbn0pKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2NyeXB0by1qcy9lbmMtaGV4LmpzIiwiLypcbkJhc2VkIG9uIHRoZSB3b3JrIG9mIFRvbSBXdVxuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL1xuaHR0cDovL3d3dy1jcy1zdHVkZW50cy5zdGFuZm9yZC5lZHUvfnRqdy9qc2JuL0xJQ0VOU0VcbiovXG5cbnZhciBCaWdJbnRlZ2VyID0gcmVxdWlyZSgnanNibicpLkJpZ0ludGVnZXI7XG52YXIgU0hBMjU2ID0gcmVxdWlyZSgnY3J5cHRvLWpzL3NoYTI1NicpO1xuXG52YXIgRGlnZXN0SW5mb0hlYWQgPSB7XG4gIHNoYTE6ICczMDIxMzAwOTA2MDUyYjBlMDMwMjFhMDUwMDA0MTQnLFxuICBzaGEyMjQ6ICczMDJkMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDQwNTAwMDQxYycsXG4gIHNoYTI1NjogJzMwMzEzMDBkMDYwOTYwODY0ODAxNjUwMzA0MDIwMTA1MDAwNDIwJyxcbiAgc2hhMzg0OiAnMzA0MTMwMGQwNjA5NjA4NjQ4MDE2NTAzMDQwMjAyMDUwMDA0MzAnLFxuICBzaGE1MTI6ICczMDUxMzAwZDA2MDk2MDg2NDgwMTY1MDMwNDAyMDMwNTAwMDQ0MCcsXG4gIG1kMjogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDIwNTAwMDQxMCcsXG4gIG1kNTogJzMwMjAzMDBjMDYwODJhODY0ODg2ZjcwZDAyMDUwNTAwMDQxMCcsXG4gIHJpcGVtZDE2MDogJzMwMjEzMDA5MDYwNTJiMjQwMzAyMDEwNTAwMDQxNCdcbn07XG5cbnZhciBEaWdlc3RBbGdzID0ge1xuICBzaGEyNTY6IFNIQTI1NlxufTtcblxuZnVuY3Rpb24gUlNBVmVyaWZpZXIobW9kdWx1cywgZXhwKSB7XG4gIHRoaXMubiA9IG51bGw7XG4gIHRoaXMuZSA9IDA7XG5cbiAgaWYgKG1vZHVsdXMgIT0gbnVsbCAmJiBleHAgIT0gbnVsbCAmJiBtb2R1bHVzLmxlbmd0aCA+IDAgJiYgZXhwLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLm4gPSBuZXcgQmlnSW50ZWdlcihtb2R1bHVzLCAxNik7XG4gICAgdGhpcy5lID0gcGFyc2VJbnQoZXhwLCAxNik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBkYXRhJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxnb3JpdGhtRnJvbURpZ2VzdChoRGlnZXN0SW5mbykge1xuICBmb3IgKHZhciBhbGdOYW1lIGluIERpZ2VzdEluZm9IZWFkKSB7XG4gICAgdmFyIGhlYWQgPSBEaWdlc3RJbmZvSGVhZFthbGdOYW1lXTtcbiAgICB2YXIgbGVuID0gaGVhZC5sZW5ndGg7XG5cbiAgICBpZiAoaERpZ2VzdEluZm8uc3Vic3RyaW5nKDAsIGxlbikgPT09IGhlYWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsZzogYWxnTmFtZSxcbiAgICAgICAgaGFzaDogaERpZ2VzdEluZm8uc3Vic3RyaW5nKGxlbilcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBbXTtcbn1cblxuXG5SU0FWZXJpZmllci5wcm90b3R5cGUudmVyaWZ5ID0gZnVuY3Rpb24gKG1zZywgZW5jc2lnKSB7XG4gIGVuY3NpZyA9IGVuY3NpZy5yZXBsYWNlKC9bXjAtOWEtZl18W1xcc1xcbl1dL2lnLCAnJyk7XG5cbiAgdmFyIHNpZyA9IG5ldyBCaWdJbnRlZ2VyKGVuY3NpZywgMTYpO1xuICBpZiAoc2lnLmJpdExlbmd0aCgpID4gdGhpcy5uLmJpdExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaWduYXR1cmUgZG9lcyBub3QgbWF0Y2ggd2l0aCB0aGUga2V5IG1vZHVsdXMuJyk7XG4gIH1cblxuICB2YXIgZGVjcnlwdGVkU2lnID0gc2lnLm1vZFBvd0ludCh0aGlzLmUsIHRoaXMubik7XG4gIHZhciBkaWdlc3QgPSBkZWNyeXB0ZWRTaWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14xZiswMC8sICcnKTtcblxuICB2YXIgZGlnZXN0SW5mbyA9IGdldEFsZ29yaXRobUZyb21EaWdlc3QoZGlnZXN0KTtcbiAgaWYgKGRpZ2VzdEluZm8ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFEaWdlc3RBbGdzLmhhc093blByb3BlcnR5KGRpZ2VzdEluZm8uYWxnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSGFzaGluZyBhbGdvcml0aG0gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfVxuXG4gIHZhciBtc2dIYXNoID0gRGlnZXN0QWxnc1tkaWdlc3RJbmZvLmFsZ10obXNnKS50b1N0cmluZygpO1xuICByZXR1cm4gKGRpZ2VzdEluZm8uaGFzaCA9PT0gbXNnSGFzaCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJTQVZlcmlmaWVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL3JzYS12ZXJpZmllci5qcyIsIihmdW5jdGlvbigpe1xuXG4gICAgLy8gQ29weXJpZ2h0IChjKSAyMDA1ICBUb20gV3VcbiAgICAvLyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgIC8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cblxuICAgIC8vIEJhc2ljIEphdmFTY3JpcHQgQk4gbGlicmFyeSAtIHN1YnNldCB1c2VmdWwgZm9yIFJTQSBlbmNyeXB0aW9uLlxuXG4gICAgLy8gQml0cyBwZXIgZGlnaXRcbiAgICB2YXIgZGJpdHM7XG5cbiAgICAvLyBKYXZhU2NyaXB0IGVuZ2luZSBhbmFseXNpc1xuICAgIHZhciBjYW5hcnkgPSAweGRlYWRiZWVmY2FmZTtcbiAgICB2YXIgal9sbSA9ICgoY2FuYXJ5JjB4ZmZmZmZmKT09MHhlZmNhZmUpO1xuXG4gICAgLy8gKHB1YmxpYykgQ29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKGEsYixjKSB7XG4gICAgICBpZihhICE9IG51bGwpXG4gICAgICAgIGlmKFwibnVtYmVyXCIgPT0gdHlwZW9mIGEpIHRoaXMuZnJvbU51bWJlcihhLGIsYyk7XG4gICAgICAgIGVsc2UgaWYoYiA9PSBudWxsICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEpIHRoaXMuZnJvbVN0cmluZyhhLDI1Nik7XG4gICAgICAgIGVsc2UgdGhpcy5mcm9tU3RyaW5nKGEsYik7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG5ldywgdW5zZXQgQmlnSW50ZWdlclxuICAgIGZ1bmN0aW9uIG5iaSgpIHsgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG51bGwpOyB9XG5cbiAgICAvLyBhbTogQ29tcHV0ZSB3X2ogKz0gKHgqdGhpc19pKSwgcHJvcGFnYXRlIGNhcnJpZXMsXG4gICAgLy8gYyBpcyBpbml0aWFsIGNhcnJ5LCByZXR1cm5zIGZpbmFsIGNhcnJ5LlxuICAgIC8vIGMgPCAzKmR2YWx1ZSwgeCA8IDIqZHZhbHVlLCB0aGlzX2kgPCBkdmFsdWVcbiAgICAvLyBXZSBuZWVkIHRvIHNlbGVjdCB0aGUgZmFzdGVzdCBvbmUgdGhhdCB3b3JrcyBpbiB0aGlzIGVudmlyb25tZW50LlxuXG4gICAgLy8gYW0xOiB1c2UgYSBzaW5nbGUgbXVsdCBhbmQgZGl2aWRlIHRvIGdldCB0aGUgaGlnaCBiaXRzLFxuICAgIC8vIG1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSAyNiBiZWNhdXNlXG4gICAgLy8gbWF4IGludGVybmFsIHZhbHVlID0gMipkdmFsdWVeMi0yKmR2YWx1ZSAoPCAyXjUzKVxuICAgIGZ1bmN0aW9uIGFtMShpLHgsdyxqLGMsbikge1xuICAgICAgd2hpbGUoLS1uID49IDApIHtcbiAgICAgICAgdmFyIHYgPSB4KnRoaXNbaSsrXSt3W2pdK2M7XG4gICAgICAgIGMgPSBNYXRoLmZsb29yKHYvMHg0MDAwMDAwKTtcbiAgICAgICAgd1tqKytdID0gdiYweDNmZmZmZmY7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgLy8gYW0yIGF2b2lkcyBhIGJpZyBtdWx0LWFuZC1leHRyYWN0IGNvbXBsZXRlbHkuXG4gICAgLy8gTWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDw9IDMwIGJlY2F1c2Ugd2UgZG8gYml0d2lzZSBvcHNcbiAgICAvLyBvbiB2YWx1ZXMgdXAgdG8gMipoZHZhbHVlXjItaGR2YWx1ZS0xICg8IDJeMzEpXG4gICAgZnVuY3Rpb24gYW0yKGkseCx3LGosYyxuKSB7XG4gICAgICB2YXIgeGwgPSB4JjB4N2ZmZiwgeGggPSB4Pj4xNTtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciBsID0gdGhpc1tpXSYweDdmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdPj4xNTtcbiAgICAgICAgdmFyIG0gPSB4aCpsK2gqeGw7XG4gICAgICAgIGwgPSB4bCpsKygobSYweDdmZmYpPDwxNSkrd1tqXSsoYyYweDNmZmZmZmZmKTtcbiAgICAgICAgYyA9IChsPj4+MzApKyhtPj4+MTUpK3hoKmgrKGM+Pj4zMCk7XG4gICAgICAgIHdbaisrXSA9IGwmMHgzZmZmZmZmZjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICAvLyBBbHRlcm5hdGVseSwgc2V0IG1heCBkaWdpdCBiaXRzIHRvIDI4IHNpbmNlIHNvbWVcbiAgICAvLyBicm93c2VycyBzbG93IGRvd24gd2hlbiBkZWFsaW5nIHdpdGggMzItYml0IG51bWJlcnMuXG4gICAgZnVuY3Rpb24gYW0zKGkseCx3LGosYyxuKSB7XG4gICAgICB2YXIgeGwgPSB4JjB4M2ZmZiwgeGggPSB4Pj4xNDtcbiAgICAgIHdoaWxlKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciBsID0gdGhpc1tpXSYweDNmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdPj4xNDtcbiAgICAgICAgdmFyIG0gPSB4aCpsK2gqeGw7XG4gICAgICAgIGwgPSB4bCpsKygobSYweDNmZmYpPDwxNCkrd1tqXStjO1xuICAgICAgICBjID0gKGw+PjI4KSsobT4+MTQpK3hoKmg7XG4gICAgICAgIHdbaisrXSA9IGwmMHhmZmZmZmZmO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIHZhciBpbkJyb3dzZXIgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xuICAgIGlmKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSkge1xuICAgICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTI7XG4gICAgICBkYml0cyA9IDMwO1xuICAgIH1cbiAgICBlbHNlIGlmKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSAhPSBcIk5ldHNjYXBlXCIpKSB7XG4gICAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMTtcbiAgICAgIGRiaXRzID0gMjY7XG4gICAgfVxuICAgIGVsc2UgeyAvLyBNb3ppbGxhL05ldHNjYXBlIHNlZW1zIHRvIHByZWZlciBhbTNcbiAgICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gYW0zO1xuICAgICAgZGJpdHMgPSAyODtcbiAgICB9XG5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5EQiA9IGRiaXRzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkRNID0gKCgxPDxkYml0cyktMSk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRFYgPSAoMTw8ZGJpdHMpO1xuXG4gICAgdmFyIEJJX0ZQID0gNTI7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuRlYgPSBNYXRoLnBvdygyLEJJX0ZQKTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5GMSA9IEJJX0ZQLWRiaXRzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkYyID0gMipkYml0cy1CSV9GUDtcblxuICAgIC8vIERpZ2l0IGNvbnZlcnNpb25zXG4gICAgdmFyIEJJX1JNID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcbiAgICB2YXIgQklfUkMgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgcnIsdnY7XG4gICAgcnIgPSBcIjBcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDA7IHZ2IDw9IDk7ICsrdnYpIEJJX1JDW3JyKytdID0gdnY7XG4gICAgcnIgPSBcImFcIi5jaGFyQ29kZUF0KDApO1xuICAgIGZvcih2diA9IDEwOyB2diA8IDM2OyArK3Z2KSBCSV9SQ1tycisrXSA9IHZ2O1xuICAgIHJyID0gXCJBXCIuY2hhckNvZGVBdCgwKTtcbiAgICBmb3IodnYgPSAxMDsgdnYgPCAzNjsgKyt2dikgQklfUkNbcnIrK10gPSB2djtcblxuICAgIGZ1bmN0aW9uIGludDJjaGFyKG4pIHsgcmV0dXJuIEJJX1JNLmNoYXJBdChuKTsgfVxuICAgIGZ1bmN0aW9uIGludEF0KHMsaSkge1xuICAgICAgdmFyIGMgPSBCSV9SQ1tzLmNoYXJDb2RlQXQoaSldO1xuICAgICAgcmV0dXJuIChjPT1udWxsKT8tMTpjO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvcHkgdGhpcyB0byByXG4gICAgZnVuY3Rpb24gYm5wQ29weVRvKHIpIHtcbiAgICAgIGZvcih2YXIgaSA9IHRoaXMudC0xOyBpID49IDA7IC0taSkgcltpXSA9IHRoaXNbaV07XG4gICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gaW50ZWdlciB2YWx1ZSB4LCAtRFYgPD0geCA8IERWXG4gICAgZnVuY3Rpb24gYm5wRnJvbUludCh4KSB7XG4gICAgICB0aGlzLnQgPSAxO1xuICAgICAgdGhpcy5zID0gKHg8MCk/LTE6MDtcbiAgICAgIGlmKHggPiAwKSB0aGlzWzBdID0geDtcbiAgICAgIGVsc2UgaWYoeCA8IC0xKSB0aGlzWzBdID0geCt0aGlzLkRWO1xuICAgICAgZWxzZSB0aGlzLnQgPSAwO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBiaWdpbnQgaW5pdGlhbGl6ZWQgdG8gdmFsdWVcbiAgICBmdW5jdGlvbiBuYnYoaSkgeyB2YXIgciA9IG5iaSgpOyByLmZyb21JbnQoaSk7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBzdHJpbmcgYW5kIHJhZGl4XG4gICAgZnVuY3Rpb24gYm5wRnJvbVN0cmluZyhzLGIpIHtcbiAgICAgIHZhciBrO1xuICAgICAgaWYoYiA9PSAxNikgayA9IDQ7XG4gICAgICBlbHNlIGlmKGIgPT0gOCkgayA9IDM7XG4gICAgICBlbHNlIGlmKGIgPT0gMjU2KSBrID0gODsgLy8gYnl0ZSBhcnJheVxuICAgICAgZWxzZSBpZihiID09IDIpIGsgPSAxO1xuICAgICAgZWxzZSBpZihiID09IDMyKSBrID0gNTtcbiAgICAgIGVsc2UgaWYoYiA9PSA0KSBrID0gMjtcbiAgICAgIGVsc2UgeyB0aGlzLmZyb21SYWRpeChzLGIpOyByZXR1cm47IH1cbiAgICAgIHRoaXMudCA9IDA7XG4gICAgICB0aGlzLnMgPSAwO1xuICAgICAgdmFyIGkgPSBzLmxlbmd0aCwgbWkgPSBmYWxzZSwgc2ggPSAwO1xuICAgICAgd2hpbGUoLS1pID49IDApIHtcbiAgICAgICAgdmFyIHggPSAoaz09OCk/c1tpXSYweGZmOmludEF0KHMsaSk7XG4gICAgICAgIGlmKHggPCAwKSB7XG4gICAgICAgICAgaWYocy5jaGFyQXQoaSkgPT0gXCItXCIpIG1pID0gdHJ1ZTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtaSA9IGZhbHNlO1xuICAgICAgICBpZihzaCA9PSAwKVxuICAgICAgICAgIHRoaXNbdGhpcy50KytdID0geDtcbiAgICAgICAgZWxzZSBpZihzaCtrID4gdGhpcy5EQikge1xuICAgICAgICAgIHRoaXNbdGhpcy50LTFdIHw9ICh4JigoMTw8KHRoaXMuREItc2gpKS0xKSk8PHNoO1xuICAgICAgICAgIHRoaXNbdGhpcy50KytdID0gKHg+Pih0aGlzLkRCLXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgIHRoaXNbdGhpcy50LTFdIHw9IHg8PHNoO1xuICAgICAgICBzaCArPSBrO1xuICAgICAgICBpZihzaCA+PSB0aGlzLkRCKSBzaCAtPSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoayA9PSA4ICYmIChzWzBdJjB4ODApICE9IDApIHtcbiAgICAgICAgdGhpcy5zID0gLTE7XG4gICAgICAgIGlmKHNoID4gMCkgdGhpc1t0aGlzLnQtMV0gfD0gKCgxPDwodGhpcy5EQi1zaCkpLTEpPDxzaDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICAgIGlmKG1pKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjbGFtcCBvZmYgZXhjZXNzIGhpZ2ggd29yZHNcbiAgICBmdW5jdGlvbiBibnBDbGFtcCgpIHtcbiAgICAgIHZhciBjID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICB3aGlsZSh0aGlzLnQgPiAwICYmIHRoaXNbdGhpcy50LTFdID09IGMpIC0tdGhpcy50O1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gaW4gZ2l2ZW4gcmFkaXhcbiAgICBmdW5jdGlvbiBiblRvU3RyaW5nKGIpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiBcIi1cIit0aGlzLm5lZ2F0ZSgpLnRvU3RyaW5nKGIpO1xuICAgICAgdmFyIGs7XG4gICAgICBpZihiID09IDE2KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoYiA9PSA4KSBrID0gMztcbiAgICAgIGVsc2UgaWYoYiA9PSAyKSBrID0gMTtcbiAgICAgIGVsc2UgaWYoYiA9PSAzMikgayA9IDU7XG4gICAgICBlbHNlIGlmKGIgPT0gNCkgayA9IDI7XG4gICAgICBlbHNlIHJldHVybiB0aGlzLnRvUmFkaXgoYik7XG4gICAgICB2YXIga20gPSAoMTw8ayktMSwgZCwgbSA9IGZhbHNlLCByID0gXCJcIiwgaSA9IHRoaXMudDtcbiAgICAgIHZhciBwID0gdGhpcy5EQi0oaSp0aGlzLkRCKSVrO1xuICAgICAgaWYoaS0tID4gMCkge1xuICAgICAgICBpZihwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0+PnApID4gMCkgeyBtID0gdHJ1ZTsgciA9IGludDJjaGFyKGQpOyB9XG4gICAgICAgIHdoaWxlKGkgPj0gMCkge1xuICAgICAgICAgIGlmKHAgPCBrKSB7XG4gICAgICAgICAgICBkID0gKHRoaXNbaV0mKCgxPDxwKS0xKSk8PChrLXApO1xuICAgICAgICAgICAgZCB8PSB0aGlzWy0taV0+PihwKz10aGlzLkRCLWspO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXT4+KHAtPWspKSZrbTtcbiAgICAgICAgICAgIGlmKHAgPD0gMCkgeyBwICs9IHRoaXMuREI7IC0taTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZihkID4gMCkgbSA9IHRydWU7XG4gICAgICAgICAgaWYobSkgciArPSBpbnQyY2hhcihkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG0/cjpcIjBcIjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSAtdGhpc1xuICAgIGZ1bmN0aW9uIGJuTmVnYXRlKCkgeyB2YXIgciA9IG5iaSgpOyBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHx0aGlzfFxuICAgIGZ1bmN0aW9uIGJuQWJzKCkgeyByZXR1cm4gKHRoaXMuczwwKT90aGlzLm5lZ2F0ZSgpOnRoaXM7IH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiArIGlmIHRoaXMgPiBhLCAtIGlmIHRoaXMgPCBhLCAwIGlmIGVxdWFsXG4gICAgZnVuY3Rpb24gYm5Db21wYXJlVG8oYSkge1xuICAgICAgdmFyIHIgPSB0aGlzLnMtYS5zO1xuICAgICAgaWYociAhPSAwKSByZXR1cm4gcjtcbiAgICAgIHZhciBpID0gdGhpcy50O1xuICAgICAgciA9IGktYS50O1xuICAgICAgaWYociAhPSAwKSByZXR1cm4gKHRoaXMuczwwKT8tcjpyO1xuICAgICAgd2hpbGUoLS1pID49IDApIGlmKChyPXRoaXNbaV0tYVtpXSkgIT0gMCkgcmV0dXJuIHI7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGJpdCBsZW5ndGggb2YgdGhlIGludGVnZXIgeFxuICAgIGZ1bmN0aW9uIG5iaXRzKHgpIHtcbiAgICAgIHZhciByID0gMSwgdDtcbiAgICAgIGlmKCh0PXg+Pj4xNikgIT0gMCkgeyB4ID0gdDsgciArPSAxNjsgfVxuICAgICAgaWYoKHQ9eD4+OCkgIT0gMCkgeyB4ID0gdDsgciArPSA4OyB9XG4gICAgICBpZigodD14Pj40KSAhPSAwKSB7IHggPSB0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh0PXg+PjIpICE9IDApIHsgeCA9IHQ7IHIgKz0gMjsgfVxuICAgICAgaWYoKHQ9eD4+MSkgIT0gMCkgeyB4ID0gdDsgciArPSAxOyB9XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm4gdGhlIG51bWJlciBvZiBiaXRzIGluIFwidGhpc1wiXG4gICAgZnVuY3Rpb24gYm5CaXRMZW5ndGgoKSB7XG4gICAgICBpZih0aGlzLnQgPD0gMCkgcmV0dXJuIDA7XG4gICAgICByZXR1cm4gdGhpcy5EQioodGhpcy50LTEpK25iaXRzKHRoaXNbdGhpcy50LTFdXih0aGlzLnMmdGhpcy5ETSkpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG4qREJcbiAgICBmdW5jdGlvbiBibnBETFNoaWZ0VG8obixyKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvcihpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByW2krbl0gPSB0aGlzW2ldO1xuICAgICAgZm9yKGkgPSBuLTE7IGkgPj0gMDsgLS1pKSByW2ldID0gMDtcbiAgICAgIHIudCA9IHRoaXMudCtuO1xuICAgICAgci5zID0gdGhpcy5zO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzID4+IG4qREJcbiAgICBmdW5jdGlvbiBibnBEUlNoaWZ0VG8obixyKSB7XG4gICAgICBmb3IodmFyIGkgPSBuOyBpIDwgdGhpcy50OyArK2kpIHJbaS1uXSA9IHRoaXNbaV07XG4gICAgICByLnQgPSBNYXRoLm1heCh0aGlzLnQtbiwwKTtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA8PCBuXG4gICAgZnVuY3Rpb24gYm5wTFNoaWZ0VG8obixyKSB7XG4gICAgICB2YXIgYnMgPSBuJXRoaXMuREI7XG4gICAgICB2YXIgY2JzID0gdGhpcy5EQi1icztcbiAgICAgIHZhciBibSA9ICgxPDxjYnMpLTE7XG4gICAgICB2YXIgZHMgPSBNYXRoLmZsb29yKG4vdGhpcy5EQiksIGMgPSAodGhpcy5zPDxicykmdGhpcy5ETSwgaTtcbiAgICAgIGZvcihpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHJbaStkcysxXSA9ICh0aGlzW2ldPj5jYnMpfGM7XG4gICAgICAgIGMgPSAodGhpc1tpXSZibSk8PGJzO1xuICAgICAgfVxuICAgICAgZm9yKGkgPSBkcy0xOyBpID49IDA7IC0taSkgcltpXSA9IDA7XG4gICAgICByW2RzXSA9IGM7XG4gICAgICByLnQgPSB0aGlzLnQrZHMrMTtcbiAgICAgIHIucyA9IHRoaXMucztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5wUlNoaWZ0VG8obixyKSB7XG4gICAgICByLnMgPSB0aGlzLnM7XG4gICAgICB2YXIgZHMgPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihkcyA+PSB0aGlzLnQpIHsgci50ID0gMDsgcmV0dXJuOyB9XG4gICAgICB2YXIgYnMgPSBuJXRoaXMuREI7XG4gICAgICB2YXIgY2JzID0gdGhpcy5EQi1icztcbiAgICAgIHZhciBibSA9ICgxPDxicyktMTtcbiAgICAgIHJbMF0gPSB0aGlzW2RzXT4+YnM7XG4gICAgICBmb3IodmFyIGkgPSBkcysxOyBpIDwgdGhpcy50OyArK2kpIHtcbiAgICAgICAgcltpLWRzLTFdIHw9ICh0aGlzW2ldJmJtKTw8Y2JzO1xuICAgICAgICByW2ktZHNdID0gdGhpc1tpXT4+YnM7XG4gICAgICB9XG4gICAgICBpZihicyA+IDApIHJbdGhpcy50LWRzLTFdIHw9ICh0aGlzLnMmYm0pPDxjYnM7XG4gICAgICByLnQgPSB0aGlzLnQtZHM7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgLSBhXG4gICAgZnVuY3Rpb24gYm5wU3ViVG8oYSxyKSB7XG4gICAgICB2YXIgaSA9IDAsIGMgPSAwLCBtID0gTWF0aC5taW4oYS50LHRoaXMudCk7XG4gICAgICB3aGlsZShpIDwgbSkge1xuICAgICAgICBjICs9IHRoaXNbaV0tYVtpXTtcbiAgICAgICAgcltpKytdID0gYyZ0aGlzLkRNO1xuICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgfVxuICAgICAgaWYoYS50IDwgdGhpcy50KSB7XG4gICAgICAgIGMgLT0gYS5zO1xuICAgICAgICB3aGlsZShpIDwgdGhpcy50KSB7XG4gICAgICAgICAgYyArPSB0aGlzW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB3aGlsZShpIDwgYS50KSB7XG4gICAgICAgICAgYyAtPSBhW2ldO1xuICAgICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGMgLT0gYS5zO1xuICAgICAgfVxuICAgICAgci5zID0gKGM8MCk/LTE6MDtcbiAgICAgIGlmKGMgPCAtMSkgcltpKytdID0gdGhpcy5EVitjO1xuICAgICAgZWxzZSBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIHIudCA9IGk7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKiBhLCByICE9IHRoaXMsYSAoSEFDIDE0LjEyKVxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVRvKGEscikge1xuICAgICAgdmFyIHggPSB0aGlzLmFicygpLCB5ID0gYS5hYnMoKTtcbiAgICAgIHZhciBpID0geC50O1xuICAgICAgci50ID0gaSt5LnQ7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCB5LnQ7ICsraSkgcltpK3gudF0gPSB4LmFtKDAseVtpXSxyLGksMCx4LnQpO1xuICAgICAgci5zID0gMDtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIGlmKHRoaXMucyAhPSBhLnMpIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhyLHIpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzXjIsIHIgIT0gdGhpcyAoSEFDIDE0LjE2KVxuICAgIGZ1bmN0aW9uIGJucFNxdWFyZVRvKHIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy5hYnMoKTtcbiAgICAgIHZhciBpID0gci50ID0gMip4LnQ7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkgcltpXSA9IDA7XG4gICAgICBmb3IoaSA9IDA7IGkgPCB4LnQtMTsgKytpKSB7XG4gICAgICAgIHZhciBjID0geC5hbShpLHhbaV0sciwyKmksMCwxKTtcbiAgICAgICAgaWYoKHJbaSt4LnRdKz14LmFtKGkrMSwyKnhbaV0sciwyKmkrMSxjLHgudC1pLTEpKSA+PSB4LkRWKSB7XG4gICAgICAgICAgcltpK3gudF0gLT0geC5EVjtcbiAgICAgICAgICByW2kreC50KzFdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYoci50ID4gMCkgcltyLnQtMV0gKz0geC5hbShpLHhbaV0sciwyKmksMCwxKTtcbiAgICAgIHIucyA9IDA7XG4gICAgICByLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgZGl2aWRlIHRoaXMgYnkgbSwgcXVvdGllbnQgYW5kIHJlbWFpbmRlciB0byBxLCByIChIQUMgMTQuMjApXG4gICAgLy8gciAhPSBxLCB0aGlzICE9IG0uICBxIG9yIHIgbWF5IGJlIG51bGwuXG4gICAgZnVuY3Rpb24gYm5wRGl2UmVtVG8obSxxLHIpIHtcbiAgICAgIHZhciBwbSA9IG0uYWJzKCk7XG4gICAgICBpZihwbS50IDw9IDApIHJldHVybjtcbiAgICAgIHZhciBwdCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZihwdC50IDwgcG0udCkge1xuICAgICAgICBpZihxICE9IG51bGwpIHEuZnJvbUludCgwKTtcbiAgICAgICAgaWYociAhPSBudWxsKSB0aGlzLmNvcHlUbyhyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYociA9PSBudWxsKSByID0gbmJpKCk7XG4gICAgICB2YXIgeSA9IG5iaSgpLCB0cyA9IHRoaXMucywgbXMgPSBtLnM7XG4gICAgICB2YXIgbnNoID0gdGhpcy5EQi1uYml0cyhwbVtwbS50LTFdKTsgICAvLyBub3JtYWxpemUgbW9kdWx1c1xuICAgICAgaWYobnNoID4gMCkgeyBwbS5sU2hpZnRUbyhuc2gseSk7IHB0LmxTaGlmdFRvKG5zaCxyKTsgfVxuICAgICAgZWxzZSB7IHBtLmNvcHlUbyh5KTsgcHQuY29weVRvKHIpOyB9XG4gICAgICB2YXIgeXMgPSB5LnQ7XG4gICAgICB2YXIgeTAgPSB5W3lzLTFdO1xuICAgICAgaWYoeTAgPT0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHl0ID0geTAqKDE8PHRoaXMuRjEpKygoeXM+MSk/eVt5cy0yXT4+dGhpcy5GMjowKTtcbiAgICAgIHZhciBkMSA9IHRoaXMuRlYveXQsIGQyID0gKDE8PHRoaXMuRjEpL3l0LCBlID0gMTw8dGhpcy5GMjtcbiAgICAgIHZhciBpID0gci50LCBqID0gaS15cywgdCA9IChxPT1udWxsKT9uYmkoKTpxO1xuICAgICAgeS5kbFNoaWZ0VG8oaix0KTtcbiAgICAgIGlmKHIuY29tcGFyZVRvKHQpID49IDApIHtcbiAgICAgICAgcltyLnQrK10gPSAxO1xuICAgICAgICByLnN1YlRvKHQscik7XG4gICAgICB9XG4gICAgICBCaWdJbnRlZ2VyLk9ORS5kbFNoaWZ0VG8oeXMsdCk7XG4gICAgICB0LnN1YlRvKHkseSk7ICAvLyBcIm5lZ2F0aXZlXCIgeSBzbyB3ZSBjYW4gcmVwbGFjZSBzdWIgd2l0aCBhbSBsYXRlclxuICAgICAgd2hpbGUoeS50IDwgeXMpIHlbeS50KytdID0gMDtcbiAgICAgIHdoaWxlKC0taiA+PSAwKSB7XG4gICAgICAgIC8vIEVzdGltYXRlIHF1b3RpZW50IGRpZ2l0XG4gICAgICAgIHZhciBxZCA9IChyWy0taV09PXkwKT90aGlzLkRNOk1hdGguZmxvb3IocltpXSpkMSsocltpLTFdK2UpKmQyKTtcbiAgICAgICAgaWYoKHJbaV0rPXkuYW0oMCxxZCxyLGosMCx5cykpIDwgcWQpIHsgICAvLyBUcnkgaXQgb3V0XG4gICAgICAgICAgeS5kbFNoaWZ0VG8oaix0KTtcbiAgICAgICAgICByLnN1YlRvKHQscik7XG4gICAgICAgICAgd2hpbGUocltpXSA8IC0tcWQpIHIuc3ViVG8odCxyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYocSAhPSBudWxsKSB7XG4gICAgICAgIHIuZHJTaGlmdFRvKHlzLHEpO1xuICAgICAgICBpZih0cyAhPSBtcykgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHEscSk7XG4gICAgICB9XG4gICAgICByLnQgPSB5cztcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIGlmKG5zaCA+IDApIHIuclNoaWZ0VG8obnNoLHIpOyAvLyBEZW5vcm1hbGl6ZSByZW1haW5kZXJcbiAgICAgIGlmKHRzIDwgMCkgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIscik7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBtb2QgYVxuICAgIGZ1bmN0aW9uIGJuTW9kKGEpIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICB0aGlzLmFicygpLmRpdlJlbVRvKGEsbnVsbCxyKTtcbiAgICAgIGlmKHRoaXMucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIGEuc3ViVG8ocixyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIE1vZHVsYXIgcmVkdWN0aW9uIHVzaW5nIFwiY2xhc3NpY1wiIGFsZ29yaXRobVxuICAgIGZ1bmN0aW9uIENsYXNzaWMobSkgeyB0aGlzLm0gPSBtOyB9XG4gICAgZnVuY3Rpb24gY0NvbnZlcnQoeCkge1xuICAgICAgaWYoeC5zIDwgMCB8fCB4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSByZXR1cm4geDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY1JldmVydCh4KSB7IHJldHVybiB4OyB9XG4gICAgZnVuY3Rpb24gY1JlZHVjZSh4KSB7IHguZGl2UmVtVG8odGhpcy5tLG51bGwseCk7IH1cbiAgICBmdW5jdGlvbiBjTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG4gICAgZnVuY3Rpb24gY1NxclRvKHgscikgeyB4LnNxdWFyZVRvKHIpOyB0aGlzLnJlZHVjZShyKTsgfVxuXG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuY29udmVydCA9IGNDb252ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJldmVydCA9IGNSZXZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmVkdWNlID0gY1JlZHVjZTtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5tdWxUbyA9IGNNdWxUbztcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5zcXJUbyA9IGNTcXJUbztcblxuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiBcIi0xL3RoaXMgJSAyXkRCXCI7IHVzZWZ1bCBmb3IgTW9udC4gcmVkdWN0aW9uXG4gICAgLy8ganVzdGlmaWNhdGlvbjpcbiAgICAvLyAgICAgICAgIHh5ID09IDEgKG1vZCBtKVxuICAgIC8vICAgICAgICAgeHkgPSAgMStrbVxuICAgIC8vICAgeHkoMi14eSkgPSAoMStrbSkoMS1rbSlcbiAgICAvLyB4W3koMi14eSldID0gMS1rXjJtXjJcbiAgICAvLyB4W3koMi14eSldID09IDEgKG1vZCBtXjIpXG4gICAgLy8gaWYgeSBpcyAxL3ggbW9kIG0sIHRoZW4geSgyLXh5KSBpcyAxL3ggbW9kIG1eMlxuICAgIC8vIHNob3VsZCByZWR1Y2UgeCBhbmQgeSgyLXh5KSBieSBtXjIgYXQgZWFjaCBzdGVwIHRvIGtlZXAgc2l6ZSBib3VuZGVkLlxuICAgIC8vIEpTIG11bHRpcGx5IFwib3ZlcmZsb3dzXCIgZGlmZmVyZW50bHkgZnJvbSBDL0MrKywgc28gY2FyZSBpcyBuZWVkZWQgaGVyZS5cbiAgICBmdW5jdGlvbiBibnBJbnZEaWdpdCgpIHtcbiAgICAgIGlmKHRoaXMudCA8IDEpIHJldHVybiAwO1xuICAgICAgdmFyIHggPSB0aGlzWzBdO1xuICAgICAgaWYoKHgmMSkgPT0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgeSA9IHgmMzsgICAgICAgLy8geSA9PSAxL3ggbW9kIDJeMlxuICAgICAgeSA9ICh5KigyLSh4JjB4ZikqeSkpJjB4ZjsgLy8geSA9PSAxL3ggbW9kIDJeNFxuICAgICAgeSA9ICh5KigyLSh4JjB4ZmYpKnkpKSYweGZmOyAgIC8vIHkgPT0gMS94IG1vZCAyXjhcbiAgICAgIHkgPSAoeSooMi0oKCh4JjB4ZmZmZikqeSkmMHhmZmZmKSkpJjB4ZmZmZjsgICAgLy8geSA9PSAxL3ggbW9kIDJeMTZcbiAgICAgIC8vIGxhc3Qgc3RlcCAtIGNhbGN1bGF0ZSBpbnZlcnNlIG1vZCBEViBkaXJlY3RseTtcbiAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8PSAzMiBhbmQgYXNzdW1lcyBhYmlsaXR5IHRvIGhhbmRsZSA0OC1iaXQgaW50c1xuICAgICAgeSA9ICh5KigyLXgqeSV0aGlzLkRWKSkldGhpcy5EVjsgICAgICAgLy8geSA9PSAxL3ggbW9kIDJeZGJpdHNcbiAgICAgIC8vIHdlIHJlYWxseSB3YW50IHRoZSBuZWdhdGl2ZSBpbnZlcnNlLCBhbmQgLURWIDwgeSA8IERWXG4gICAgICByZXR1cm4gKHk+MCk/dGhpcy5EVi15Oi15O1xuICAgIH1cblxuICAgIC8vIE1vbnRnb21lcnkgcmVkdWN0aW9uXG4gICAgZnVuY3Rpb24gTW9udGdvbWVyeShtKSB7XG4gICAgICB0aGlzLm0gPSBtO1xuICAgICAgdGhpcy5tcCA9IG0uaW52RGlnaXQoKTtcbiAgICAgIHRoaXMubXBsID0gdGhpcy5tcCYweDdmZmY7XG4gICAgICB0aGlzLm1waCA9IHRoaXMubXA+PjE1O1xuICAgICAgdGhpcy51bSA9ICgxPDwobS5EQi0xNSkpLTE7XG4gICAgICB0aGlzLm10MiA9IDIqbS50O1xuICAgIH1cblxuICAgIC8vIHhSIG1vZCBtXG4gICAgZnVuY3Rpb24gbW9udENvbnZlcnQoeCkge1xuICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgIHguYWJzKCkuZGxTaGlmdFRvKHRoaXMubS50LHIpO1xuICAgICAgci5kaXZSZW1Ubyh0aGlzLm0sbnVsbCxyKTtcbiAgICAgIGlmKHgucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIHRoaXMubS5zdWJUbyhyLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8geC9SIG1vZCBtXG4gICAgZnVuY3Rpb24gbW9udFJldmVydCh4KSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgeC5jb3B5VG8ocik7XG4gICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIHggPSB4L1IgbW9kIG0gKEhBQyAxNC4zMilcbiAgICBmdW5jdGlvbiBtb250UmVkdWNlKHgpIHtcbiAgICAgIHdoaWxlKHgudCA8PSB0aGlzLm10MikgLy8gcGFkIHggc28gYW0gaGFzIGVub3VnaCByb29tIGxhdGVyXG4gICAgICAgIHhbeC50KytdID0gMDtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm0udDsgKytpKSB7XG4gICAgICAgIC8vIGZhc3RlciB3YXkgb2YgY2FsY3VsYXRpbmcgdTAgPSB4W2ldKm1wIG1vZCBEVlxuICAgICAgICB2YXIgaiA9IHhbaV0mMHg3ZmZmO1xuICAgICAgICB2YXIgdTAgPSAoaip0aGlzLm1wbCsoKChqKnRoaXMubXBoKyh4W2ldPj4xNSkqdGhpcy5tcGwpJnRoaXMudW0pPDwxNSkpJnguRE07XG4gICAgICAgIC8vIHVzZSBhbSB0byBjb21iaW5lIHRoZSBtdWx0aXBseS1zaGlmdC1hZGQgaW50byBvbmUgY2FsbFxuICAgICAgICBqID0gaSt0aGlzLm0udDtcbiAgICAgICAgeFtqXSArPSB0aGlzLm0uYW0oMCx1MCx4LGksMCx0aGlzLm0udCk7XG4gICAgICAgIC8vIHByb3BhZ2F0ZSBjYXJyeVxuICAgICAgICB3aGlsZSh4W2pdID49IHguRFYpIHsgeFtqXSAtPSB4LkRWOyB4Wysral0rKzsgfVxuICAgICAgfVxuICAgICAgeC5jbGFtcCgpO1xuICAgICAgeC5kclNoaWZ0VG8odGhpcy5tLnQseCk7XG4gICAgICBpZih4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHguc3ViVG8odGhpcy5tLHgpO1xuICAgIH1cblxuICAgIC8vIHIgPSBcInheMi9SIG1vZCBtXCI7IHggIT0gclxuICAgIGZ1bmN0aW9uIG1vbnRTcXJUbyh4LHIpIHsgeC5zcXVhcmVUbyhyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIC8vIHIgPSBcInh5L1IgbW9kIG1cIjsgeCx5ICE9IHJcbiAgICBmdW5jdGlvbiBtb250TXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5jb252ZXJ0ID0gbW9udENvbnZlcnQ7XG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmV2ZXJ0ID0gbW9udFJldmVydDtcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZWR1Y2UgPSBtb250UmVkdWNlO1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLm11bFRvID0gbW9udE11bFRvO1xuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnNxclRvID0gbW9udFNxclRvO1xuXG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZmYgdGhpcyBpcyBldmVuXG4gICAgZnVuY3Rpb24gYm5wSXNFdmVuKCkgeyByZXR1cm4gKCh0aGlzLnQ+MCk/KHRoaXNbMF0mMSk6dGhpcy5zKSA9PSAwOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzXmUsIGUgPCAyXjMyLCBkb2luZyBzcXIgYW5kIG11bCB3aXRoIFwiclwiIChIQUMgMTQuNzkpXG4gICAgZnVuY3Rpb24gYm5wRXhwKGUseikge1xuICAgICAgaWYoZSA+IDB4ZmZmZmZmZmYgfHwgZSA8IDEpIHJldHVybiBCaWdJbnRlZ2VyLk9ORTtcbiAgICAgIHZhciByID0gbmJpKCksIHIyID0gbmJpKCksIGcgPSB6LmNvbnZlcnQodGhpcyksIGkgPSBuYml0cyhlKS0xO1xuICAgICAgZy5jb3B5VG8ocik7XG4gICAgICB3aGlsZSgtLWkgPj0gMCkge1xuICAgICAgICB6LnNxclRvKHIscjIpO1xuICAgICAgICBpZigoZSYoMTw8aSkpID4gMCkgei5tdWxUbyhyMixnLHIpO1xuICAgICAgICBlbHNlIHsgdmFyIHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0sIDAgPD0gZSA8IDJeMzJcbiAgICBmdW5jdGlvbiBibk1vZFBvd0ludChlLG0pIHtcbiAgICAgIHZhciB6O1xuICAgICAgaWYoZSA8IDI1NiB8fCBtLmlzRXZlbigpKSB6ID0gbmV3IENsYXNzaWMobSk7IGVsc2UgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuICAgICAgcmV0dXJuIHRoaXMuZXhwKGUseik7XG4gICAgfVxuXG4gICAgLy8gcHJvdGVjdGVkXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29weVRvID0gYm5wQ29weVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21JbnQgPSBibnBGcm9tSW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21TdHJpbmcgPSBibnBGcm9tU3RyaW5nO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsYW1wID0gYm5wQ2xhbXA7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGxTaGlmdFRvID0gYm5wRExTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRyU2hpZnRUbyA9IGJucERSU2hpZnRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGJucExTaGlmdFRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJTaGlmdFRvID0gYm5wUlNoaWZ0VG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3ViVG8gPSBibnBTdWJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVRvID0gYm5wTXVsdGlwbHlUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmVUbyA9IGJucFNxdWFyZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdlJlbVRvID0gYm5wRGl2UmVtVG87XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW52RGlnaXQgPSBibnBJbnZEaWdpdDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBibnBJc0V2ZW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXhwID0gYm5wRXhwO1xuXG4gICAgLy8gcHVibGljXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBiblRvU3RyaW5nO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGJuTmVnYXRlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGJuQWJzO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IGJuQ29tcGFyZVRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGJuQml0TGVuZ3RoO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZCA9IGJuTW9kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvd0ludCA9IGJuTW9kUG93SW50O1xuXG4gICAgLy8gXCJjb25zdGFudHNcIlxuICAgIEJpZ0ludGVnZXIuWkVSTyA9IG5idigwKTtcbiAgICBCaWdJbnRlZ2VyLk9ORSA9IG5idigxKTtcblxuICAgIC8vIENvcHlyaWdodCAoYykgMjAwNS0yMDA5ICBUb20gV3VcbiAgICAvLyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgIC8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cblxuICAgIC8vIEV4dGVuZGVkIEphdmFTY3JpcHQgQk4gZnVuY3Rpb25zLCByZXF1aXJlZCBmb3IgUlNBIHByaXZhdGUgb3BzLlxuXG4gICAgLy8gVmVyc2lvbiAxLjE6IG5ldyBCaWdJbnRlZ2VyKFwiMFwiLCAxMCkgcmV0dXJucyBcInByb3BlclwiIHplcm9cbiAgICAvLyBWZXJzaW9uIDEuMjogc3F1YXJlKCkgQVBJLCBpc1Byb2JhYmxlUHJpbWUgZml4XG5cbiAgICAvLyAocHVibGljKVxuICAgIGZ1bmN0aW9uIGJuQ2xvbmUoKSB7IHZhciByID0gbmJpKCk7IHRoaXMuY29weVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGludGVnZXJcbiAgICBmdW5jdGlvbiBibkludFZhbHVlKCkge1xuICAgICAgaWYodGhpcy5zIDwgMCkge1xuICAgICAgICBpZih0aGlzLnQgPT0gMSkgcmV0dXJuIHRoaXNbMF0tdGhpcy5EVjtcbiAgICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMCkgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSBpZih0aGlzLnQgPT0gMSkgcmV0dXJuIHRoaXNbMF07XG4gICAgICBlbHNlIGlmKHRoaXMudCA9PSAwKSByZXR1cm4gMDtcbiAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8IDMyXG4gICAgICByZXR1cm4gKCh0aGlzWzFdJigoMTw8KDMyLXRoaXMuREIpKS0xKSk8PHRoaXMuREIpfHRoaXNbMF07XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGJ5dGVcbiAgICBmdW5jdGlvbiBibkJ5dGVWYWx1ZSgpIHsgcmV0dXJuICh0aGlzLnQ9PTApP3RoaXMuczoodGhpc1swXTw8MjQpPj4yNDsgfVxuXG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIHNob3J0IChhc3N1bWVzIERCPj0xNilcbiAgICBmdW5jdGlvbiBiblNob3J0VmFsdWUoKSB7IHJldHVybiAodGhpcy50PT0wKT90aGlzLnM6KHRoaXNbMF08PDE2KT4+MTY7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiB4IHMudC4gcl54IDwgRFZcbiAgICBmdW5jdGlvbiBibnBDaHVua1NpemUocikgeyByZXR1cm4gTWF0aC5mbG9vcihNYXRoLkxOMip0aGlzLkRCL01hdGgubG9nKHIpKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgMCBpZiB0aGlzID09IDAsIDEgaWYgdGhpcyA+IDBcbiAgICBmdW5jdGlvbiBiblNpZ051bSgpIHtcbiAgICAgIGlmKHRoaXMucyA8IDApIHJldHVybiAtMTtcbiAgICAgIGVsc2UgaWYodGhpcy50IDw9IDAgfHwgKHRoaXMudCA9PSAxICYmIHRoaXNbMF0gPD0gMCkpIHJldHVybiAwO1xuICAgICAgZWxzZSByZXR1cm4gMTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBjb252ZXJ0IHRvIHJhZGl4IHN0cmluZ1xuICAgIGZ1bmN0aW9uIGJucFRvUmFkaXgoYikge1xuICAgICAgaWYoYiA9PSBudWxsKSBiID0gMTA7XG4gICAgICBpZih0aGlzLnNpZ251bSgpID09IDAgfHwgYiA8IDIgfHwgYiA+IDM2KSByZXR1cm4gXCIwXCI7XG4gICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgIHZhciBhID0gTWF0aC5wb3coYixjcyk7XG4gICAgICB2YXIgZCA9IG5idihhKSwgeSA9IG5iaSgpLCB6ID0gbmJpKCksIHIgPSBcIlwiO1xuICAgICAgdGhpcy5kaXZSZW1UbyhkLHkseik7XG4gICAgICB3aGlsZSh5LnNpZ251bSgpID4gMCkge1xuICAgICAgICByID0gKGErei5pbnRWYWx1ZSgpKS50b1N0cmluZyhiKS5zdWJzdHIoMSkgKyByO1xuICAgICAgICB5LmRpdlJlbVRvKGQseSx6KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB6LmludFZhbHVlKCkudG9TdHJpbmcoYikgKyByO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgZnJvbSByYWRpeCBzdHJpbmdcbiAgICBmdW5jdGlvbiBibnBGcm9tUmFkaXgocyxiKSB7XG4gICAgICB0aGlzLmZyb21JbnQoMCk7XG4gICAgICBpZihiID09IG51bGwpIGIgPSAxMDtcbiAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgdmFyIGQgPSBNYXRoLnBvdyhiLGNzKSwgbWkgPSBmYWxzZSwgaiA9IDAsIHcgPSAwO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHggPSBpbnRBdChzLGkpO1xuICAgICAgICBpZih4IDwgMCkge1xuICAgICAgICAgIGlmKHMuY2hhckF0KGkpID09IFwiLVwiICYmIHRoaXMuc2lnbnVtKCkgPT0gMCkgbWkgPSB0cnVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHcgPSBiKncreDtcbiAgICAgICAgaWYoKytqID49IGNzKSB7XG4gICAgICAgICAgdGhpcy5kTXVsdGlwbHkoZCk7XG4gICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KHcsMCk7XG4gICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgdyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGogPiAwKSB7XG4gICAgICAgIHRoaXMuZE11bHRpcGx5KE1hdGgucG93KGIsaikpO1xuICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywwKTtcbiAgICAgIH1cbiAgICAgIGlmKG1pKSBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcyx0aGlzKTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSBhbHRlcm5hdGUgY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBibnBGcm9tTnVtYmVyKGEsYixjKSB7XG4gICAgICBpZihcIm51bWJlclwiID09IHR5cGVvZiBiKSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxpbnQsUk5HKVxuICAgICAgICBpZihhIDwgMikgdGhpcy5mcm9tSW50KDEpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZyb21OdW1iZXIoYSxjKTtcbiAgICAgICAgICBpZighdGhpcy50ZXN0Qml0KGEtMSkpXHQvLyBmb3JjZSBNU0Igc2V0XG4gICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYS0xKSxvcF9vcix0aGlzKTtcbiAgICAgICAgICBpZih0aGlzLmlzRXZlbigpKSB0aGlzLmRBZGRPZmZzZXQoMSwwKTsgLy8gZm9yY2Ugb2RkXG4gICAgICAgICAgd2hpbGUoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMiwwKTtcbiAgICAgICAgICAgIGlmKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhLTEpLHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIG5ldyBCaWdJbnRlZ2VyKGludCxSTkcpXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KCksIHQgPSBhJjc7XG4gICAgICAgIHgubGVuZ3RoID0gKGE+PjMpKzE7XG4gICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICBpZih0ID4gMCkgeFswXSAmPSAoKDE8PHQpLTEpOyBlbHNlIHhbMF0gPSAwO1xuICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwyNTYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGNvbnZlcnQgdG8gYmlnZW5kaWFuIGJ5dGUgYXJyYXlcbiAgICBmdW5jdGlvbiBiblRvQnl0ZUFycmF5KCkge1xuICAgICAgdmFyIGkgPSB0aGlzLnQsIHIgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHJbMF0gPSB0aGlzLnM7XG4gICAgICB2YXIgcCA9IHRoaXMuREItKGkqdGhpcy5EQiklOCwgZCwgayA9IDA7XG4gICAgICBpZihpLS0gPiAwKSB7XG4gICAgICAgIGlmKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXT4+cCkgIT0gKHRoaXMucyZ0aGlzLkRNKT4+cClcbiAgICAgICAgICByW2srK10gPSBkfCh0aGlzLnM8PCh0aGlzLkRCLXApKTtcbiAgICAgICAgd2hpbGUoaSA+PSAwKSB7XG4gICAgICAgICAgaWYocCA8IDgpIHtcbiAgICAgICAgICAgIGQgPSAodGhpc1tpXSYoKDE8PHApLTEpKTw8KDgtcCk7XG4gICAgICAgICAgICBkIHw9IHRoaXNbLS1pXT4+KHArPXRoaXMuREItOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZCA9ICh0aGlzW2ldPj4ocC09OCkpJjB4ZmY7XG4gICAgICAgICAgICBpZihwIDw9IDApIHsgcCArPSB0aGlzLkRCOyAtLWk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoKGQmMHg4MCkgIT0gMCkgZCB8PSAtMjU2O1xuICAgICAgICAgIGlmKGsgPT0gMCAmJiAodGhpcy5zJjB4ODApICE9IChkJjB4ODApKSArK2s7XG4gICAgICAgICAgaWYoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHJbaysrXSA9IGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJuRXF1YWxzKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPT0wKTsgfVxuICAgIGZ1bmN0aW9uIGJuTWluKGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPDApP3RoaXM6YTsgfVxuICAgIGZ1bmN0aW9uIGJuTWF4KGEpIHsgcmV0dXJuKHRoaXMuY29tcGFyZVRvKGEpPjApP3RoaXM6YTsgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBmdW5jdGlvbiBibnBCaXR3aXNlVG8oYSxvcCxyKSB7XG4gICAgICB2YXIgaSwgZiwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgbTsgKytpKSByW2ldID0gb3AodGhpc1tpXSxhW2ldKTtcbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBmID0gYS5zJnRoaXMuRE07XG4gICAgICAgIGZvcihpID0gbTsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gb3AodGhpc1tpXSxmKTtcbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGYgPSB0aGlzLnMmdGhpcy5ETTtcbiAgICAgICAgZm9yKGkgPSBtOyBpIDwgYS50OyArK2kpIHJbaV0gPSBvcChmLGFbaV0pO1xuICAgICAgICByLnQgPSBhLnQ7XG4gICAgICB9XG4gICAgICByLnMgPSBvcCh0aGlzLnMsYS5zKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgYVxuICAgIGZ1bmN0aW9uIG9wX2FuZCh4LHkpIHsgcmV0dXJuIHgmeTsgfVxuICAgIGZ1bmN0aW9uIGJuQW5kKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF9hbmQscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIHwgYVxuICAgIGZ1bmN0aW9uIG9wX29yKHgseSkgeyByZXR1cm4geHx5OyB9XG4gICAgZnVuY3Rpb24gYm5PcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuYml0d2lzZVRvKGEsb3Bfb3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIF4gYVxuICAgIGZ1bmN0aW9uIG9wX3hvcih4LHkpIHsgcmV0dXJuIHheeTsgfVxuICAgIGZ1bmN0aW9uIGJuWG9yKGEpIHsgdmFyIHIgPSBuYmkoKTsgdGhpcy5iaXR3aXNlVG8oYSxvcF94b3Iscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICYgfmFcbiAgICBmdW5jdGlvbiBvcF9hbmRub3QoeCx5KSB7IHJldHVybiB4Jn55OyB9XG4gICAgZnVuY3Rpb24gYm5BbmROb3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmJpdHdpc2VUbyhhLG9wX2FuZG5vdCxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIH50aGlzXG4gICAgZnVuY3Rpb24gYm5Ob3QoKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSByW2ldID0gdGhpcy5ETSZ+dGhpc1tpXTtcbiAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIDw8IG5cbiAgICBmdW5jdGlvbiBiblNoaWZ0TGVmdChuKSB7XG4gICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgaWYobiA8IDApIHRoaXMuclNoaWZ0VG8oLW4scik7IGVsc2UgdGhpcy5sU2hpZnRUbyhuLHIpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyA+PiBuXG4gICAgZnVuY3Rpb24gYm5TaGlmdFJpZ2h0KG4pIHtcbiAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICBpZihuIDwgMCkgdGhpcy5sU2hpZnRUbygtbixyKTsgZWxzZSB0aGlzLnJTaGlmdFRvKG4scik7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gaW5kZXggb2YgbG93ZXN0IDEtYml0IGluIHgsIHggPCAyXjMxXG4gICAgZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgICBpZih4ID09IDApIHJldHVybiAtMTtcbiAgICAgIHZhciByID0gMDtcbiAgICAgIGlmKCh4JjB4ZmZmZikgPT0gMCkgeyB4ID4+PSAxNjsgciArPSAxNjsgfVxuICAgICAgaWYoKHgmMHhmZikgPT0gMCkgeyB4ID4+PSA4OyByICs9IDg7IH1cbiAgICAgIGlmKCh4JjB4ZikgPT0gMCkgeyB4ID4+PSA0OyByICs9IDQ7IH1cbiAgICAgIGlmKCh4JjMpID09IDApIHsgeCA+Pj0gMjsgciArPSAyOyB9XG4gICAgICBpZigoeCYxKSA9PSAwKSArK3I7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG5cbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBmdW5jdGlvbiBibkdldExvd2VzdFNldEJpdCgpIHtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSlcbiAgICAgICAgaWYodGhpc1tpXSAhPSAwKSByZXR1cm4gaSp0aGlzLkRCK2xiaXQodGhpc1tpXSk7XG4gICAgICBpZih0aGlzLnMgPCAwKSByZXR1cm4gdGhpcy50KnRoaXMuREI7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuICAgIGZ1bmN0aW9uIGNiaXQoeCkge1xuICAgICAgdmFyIHIgPSAwO1xuICAgICAgd2hpbGUoeCAhPSAwKSB7IHggJj0geC0xOyArK3I7IH1cbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHJldHVybiBudW1iZXIgb2Ygc2V0IGJpdHNcbiAgICBmdW5jdGlvbiBibkJpdENvdW50KCkge1xuICAgICAgdmFyIHIgPSAwLCB4ID0gdGhpcy5zJnRoaXMuRE07XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHIgKz0gY2JpdCh0aGlzW2ldXngpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBmdW5jdGlvbiBiblRlc3RCaXQobikge1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4vdGhpcy5EQik7XG4gICAgICBpZihqID49IHRoaXMudCkgcmV0dXJuKHRoaXMucyE9MCk7XG4gICAgICByZXR1cm4oKHRoaXNbal0mKDE8PChuJXRoaXMuREIpKSkhPTApO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgb3AgKDE8PG4pXG4gICAgZnVuY3Rpb24gYm5wQ2hhbmdlQml0KG4sb3ApIHtcbiAgICAgIHZhciByID0gQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KG4pO1xuICAgICAgdGhpcy5iaXR3aXNlVG8ocixvcCxyKTtcbiAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgfCAoMTw8bilcbiAgICBmdW5jdGlvbiBiblNldEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX29yKTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBmdW5jdGlvbiBibkNsZWFyQml0KG4pIHsgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sb3BfYW5kbm90KTsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyBeICgxPDxuKVxuICAgIGZ1bmN0aW9uIGJuRmxpcEJpdChuKSB7IHJldHVybiB0aGlzLmNoYW5nZUJpdChuLG9wX3hvcik7IH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIGZ1bmN0aW9uIGJucEFkZFRvKGEscikge1xuICAgICAgdmFyIGkgPSAwLCBjID0gMCwgbSA9IE1hdGgubWluKGEudCx0aGlzLnQpO1xuICAgICAgd2hpbGUoaSA8IG0pIHtcbiAgICAgICAgYyArPSB0aGlzW2ldK2FbaV07XG4gICAgICAgIHJbaSsrXSA9IGMmdGhpcy5ETTtcbiAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgIH1cbiAgICAgIGlmKGEudCA8IHRoaXMudCkge1xuICAgICAgICBjICs9IGEucztcbiAgICAgICAgd2hpbGUoaSA8IHRoaXMudCkge1xuICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgd2hpbGUoaSA8IGEudCkge1xuICAgICAgICAgIGMgKz0gYVtpXTtcbiAgICAgICAgICByW2krK10gPSBjJnRoaXMuRE07XG4gICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBjICs9IGEucztcbiAgICAgIH1cbiAgICAgIHIucyA9IChjPDApPy0xOjA7XG4gICAgICBpZihjID4gMCkgcltpKytdID0gYztcbiAgICAgIGVsc2UgaWYoYyA8IC0xKSByW2krK10gPSB0aGlzLkRWK2M7XG4gICAgICByLnQgPSBpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXMgKyBhXG4gICAgZnVuY3Rpb24gYm5BZGQoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLmFkZFRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIGZ1bmN0aW9uIGJuU3VidHJhY3QoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnN1YlRvKGEscik7IHJldHVybiByOyB9XG5cbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIGZ1bmN0aW9uIGJuTXVsdGlwbHkoYSkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLm11bHRpcGx5VG8oYSxyKTsgcmV0dXJuIHI7IH1cblxuICAgIC8vIChwdWJsaWMpIHRoaXNeMlxuICAgIGZ1bmN0aW9uIGJuU3F1YXJlKCkgeyB2YXIgciA9IG5iaSgpOyB0aGlzLnNxdWFyZVRvKHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAvIGFcbiAgICBmdW5jdGlvbiBibkRpdmlkZShhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxyLG51bGwpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBmdW5jdGlvbiBiblJlbWFpbmRlcihhKSB7IHZhciByID0gbmJpKCk7IHRoaXMuZGl2UmVtVG8oYSxudWxsLHIpOyByZXR1cm4gcjsgfVxuXG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgZnVuY3Rpb24gYm5EaXZpZGVBbmRSZW1haW5kZXIoYSkge1xuICAgICAgdmFyIHEgPSBuYmkoKSwgciA9IG5iaSgpO1xuICAgICAgdGhpcy5kaXZSZW1UbyhhLHEscik7XG4gICAgICByZXR1cm4gbmV3IEFycmF5KHEscik7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBmdW5jdGlvbiBibnBETXVsdGlwbHkobikge1xuICAgICAgdGhpc1t0aGlzLnRdID0gdGhpcy5hbSgwLG4tMSx0aGlzLDAsMCx0aGlzLnQpO1xuICAgICAgKyt0aGlzLnQ7XG4gICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIGZ1bmN0aW9uIGJucERBZGRPZmZzZXQobix3KSB7XG4gICAgICBpZihuID09IDApIHJldHVybjtcbiAgICAgIHdoaWxlKHRoaXMudCA8PSB3KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICB0aGlzW3ddICs9IG47XG4gICAgICB3aGlsZSh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgdGhpc1t3XSAtPSB0aGlzLkRWO1xuICAgICAgICBpZigrK3cgPj0gdGhpcy50KSB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgICsrdGhpc1t3XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBIFwibnVsbFwiIHJlZHVjZXJcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge31cbiAgICBmdW5jdGlvbiBuTm9wKHgpIHsgcmV0dXJuIHg7IH1cbiAgICBmdW5jdGlvbiBuTXVsVG8oeCx5LHIpIHsgeC5tdWx0aXBseVRvKHkscik7IH1cbiAgICBmdW5jdGlvbiBuU3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IH1cblxuICAgIE51bGxFeHAucHJvdG90eXBlLmNvbnZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBmdW5jdGlvbiBiblBvdyhlKSB7IHJldHVybiB0aGlzLmV4cChlLG5ldyBOdWxsRXhwKCkpOyB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSByID0gbG93ZXIgbiB3b3JkcyBvZiBcInRoaXMgKiBhXCIsIGEudCA8PSBuXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIGZ1bmN0aW9uIGJucE11bHRpcGx5TG93ZXJUbyhhLG4scikge1xuICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQrYS50LG4pO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgci50ID0gaTtcbiAgICAgIHdoaWxlKGkgPiAwKSByWy0taV0gPSAwO1xuICAgICAgdmFyIGo7XG4gICAgICBmb3IoaiA9IHIudC10aGlzLnQ7IGkgPCBqOyArK2kpIHJbaSt0aGlzLnRdID0gdGhpcy5hbSgwLGFbaV0scixpLDAsdGhpcy50KTtcbiAgICAgIGZvcihqID0gTWF0aC5taW4oYS50LG4pOyBpIDwgajsgKytpKSB0aGlzLmFtKDAsYVtpXSxyLGksMCxuLWkpO1xuICAgICAgci5jbGFtcCgpO1xuICAgIH1cblxuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBcInRoaXMgKiBhXCIgd2l0aG91dCBsb3dlciBuIHdvcmRzLCBuID4gMFxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBmdW5jdGlvbiBibnBNdWx0aXBseVVwcGVyVG8oYSxuLHIpIHtcbiAgICAgIC0tbjtcbiAgICAgIHZhciBpID0gci50ID0gdGhpcy50K2EudC1uO1xuICAgICAgci5zID0gMDsgLy8gYXNzdW1lcyBhLHRoaXMgPj0gMFxuICAgICAgd2hpbGUoLS1pID49IDApIHJbaV0gPSAwO1xuICAgICAgZm9yKGkgPSBNYXRoLm1heChuLXRoaXMudCwwKTsgaSA8IGEudDsgKytpKVxuICAgICAgICByW3RoaXMudCtpLW5dID0gdGhpcy5hbShuLWksYVtpXSxyLDAsMCx0aGlzLnQraS1uKTtcbiAgICAgIHIuY2xhbXAoKTtcbiAgICAgIHIuZHJTaGlmdFRvKDEscik7XG4gICAgfVxuXG4gICAgLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxuICAgIGZ1bmN0aW9uIEJhcnJldHQobSkge1xuICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgdGhpcy5xMyA9IG5iaSgpO1xuICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIqbS50LHRoaXMucjIpO1xuICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiYXJyZXR0Q29udmVydCh4KSB7XG4gICAgICBpZih4LnMgPCAwIHx8IHgudCA+IDIqdGhpcy5tLnQpIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgZWxzZSBpZih4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkgcmV0dXJuIHg7XG4gICAgICBlbHNlIHsgdmFyIHIgPSBuYmkoKTsgeC5jb3B5VG8ocik7IHRoaXMucmVkdWNlKHIpOyByZXR1cm4gcjsgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJhcnJldHRSZXZlcnQoeCkgeyByZXR1cm4geDsgfVxuXG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBmdW5jdGlvbiBiYXJyZXR0UmVkdWNlKHgpIHtcbiAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LTEsdGhpcy5yMik7XG4gICAgICBpZih4LnQgPiB0aGlzLm0udCsxKSB7IHgudCA9IHRoaXMubS50KzE7IHguY2xhbXAoKTsgfVxuICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMix0aGlzLm0udCsxLHRoaXMucTMpO1xuICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLHRoaXMubS50KzEsdGhpcy5yMik7XG4gICAgICB3aGlsZSh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHguZEFkZE9mZnNldCgxLHRoaXMubS50KzEpO1xuICAgICAgeC5zdWJUbyh0aGlzLnIyLHgpO1xuICAgICAgd2hpbGUoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB4LnN1YlRvKHRoaXMubSx4KTtcbiAgICB9XG5cbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBmdW5jdGlvbiBiYXJyZXR0U3FyVG8oeCxyKSB7IHguc3F1YXJlVG8ocik7IHRoaXMucmVkdWNlKHIpOyB9XG5cbiAgICAvLyByID0geCp5IG1vZCBtOyB4LHkgIT0gclxuICAgIGZ1bmN0aW9uIGJhcnJldHRNdWxUbyh4LHkscikgeyB4Lm11bHRpcGx5VG8oeSxyKTsgdGhpcy5yZWR1Y2Uocik7IH1cblxuICAgIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG5cbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgZnVuY3Rpb24gYm5Nb2RQb3coZSxtKSB7XG4gICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCksIGssIHIgPSBuYnYoMSksIHo7XG4gICAgICBpZihpIDw9IDApIHJldHVybiByO1xuICAgICAgZWxzZSBpZihpIDwgMTgpIGsgPSAxO1xuICAgICAgZWxzZSBpZihpIDwgNDgpIGsgPSAzO1xuICAgICAgZWxzZSBpZihpIDwgMTQ0KSBrID0gNDtcbiAgICAgIGVsc2UgaWYoaSA8IDc2OCkgayA9IDU7XG4gICAgICBlbHNlIGsgPSA2O1xuICAgICAgaWYoaSA8IDgpXG4gICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgIGVsc2UgaWYobS5pc0V2ZW4oKSlcbiAgICAgICAgeiA9IG5ldyBCYXJyZXR0KG0pO1xuICAgICAgZWxzZVxuICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG5cbiAgICAgIC8vIHByZWNvbXB1dGF0aW9uXG4gICAgICB2YXIgZyA9IG5ldyBBcnJheSgpLCBuID0gMywgazEgPSBrLTEsIGttID0gKDE8PGspLTE7XG4gICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgaWYoayA+IDEpIHtcbiAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgIHouc3FyVG8oZ1sxXSxnMik7XG4gICAgICAgIHdoaWxlKG4gPD0ga20pIHtcbiAgICAgICAgICBnW25dID0gbmJpKCk7XG4gICAgICAgICAgei5tdWxUbyhnMixnW24tMl0sZ1tuXSk7XG4gICAgICAgICAgbiArPSAyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBqID0gZS50LTEsIHcsIGlzMSA9IHRydWUsIHIyID0gbmJpKCksIHQ7XG4gICAgICBpID0gbmJpdHMoZVtqXSktMTtcbiAgICAgIHdoaWxlKGogPj0gMCkge1xuICAgICAgICBpZihpID49IGsxKSB3ID0gKGVbal0+PihpLWsxKSkma207XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHcgPSAoZVtqXSYoKDE8PChpKzEpKS0xKSk8PChrMS1pKTtcbiAgICAgICAgICBpZihqID4gMCkgdyB8PSBlW2otMV0+Pih0aGlzLkRCK2ktazEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbiA9IGs7XG4gICAgICAgIHdoaWxlKCh3JjEpID09IDApIHsgdyA+Pj0gMTsgLS1uOyB9XG4gICAgICAgIGlmKChpIC09IG4pIDwgMCkgeyBpICs9IHRoaXMuREI7IC0tajsgfVxuICAgICAgICBpZihpczEpIHtcdC8vIHJldCA9PSAxLCBkb24ndCBib3RoZXIgc3F1YXJpbmcgb3IgbXVsdGlwbHlpbmcgaXRcbiAgICAgICAgICBnW3ddLmNvcHlUbyhyKTtcbiAgICAgICAgICBpczEgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB3aGlsZShuID4gMSkgeyB6LnNxclRvKHIscjIpOyB6LnNxclRvKHIyLHIpOyBuIC09IDI7IH1cbiAgICAgICAgICBpZihuID4gMCkgei5zcXJUbyhyLHIyKTsgZWxzZSB7IHQgPSByOyByID0gcjI7IHIyID0gdDsgfVxuICAgICAgICAgIHoubXVsVG8ocjIsZ1t3XSxyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlKGogPj0gMCAmJiAoZVtqXSYoMTw8aSkpID09IDApIHtcbiAgICAgICAgICB6LnNxclRvKHIscjIpOyB0ID0gcjsgciA9IHIyOyByMiA9IHQ7XG4gICAgICAgICAgaWYoLS1pIDwgMCkgeyBpID0gdGhpcy5EQi0xOyAtLWo7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHoucmV2ZXJ0KHIpO1xuICAgIH1cblxuICAgIC8vIChwdWJsaWMpIGdjZCh0aGlzLGEpIChIQUMgMTQuNTQpXG4gICAgZnVuY3Rpb24gYm5HQ0QoYSkge1xuICAgICAgdmFyIHggPSAodGhpcy5zPDApP3RoaXMubmVnYXRlKCk6dGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIHkgPSAoYS5zPDApP2EubmVnYXRlKCk6YS5jbG9uZSgpO1xuICAgICAgaWYoeC5jb21wYXJlVG8oeSkgPCAwKSB7IHZhciB0ID0geDsgeCA9IHk7IHkgPSB0OyB9XG4gICAgICB2YXIgaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCksIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgaWYoZyA8IDApIHJldHVybiB4O1xuICAgICAgaWYoaSA8IGcpIGcgPSBpO1xuICAgICAgaWYoZyA+IDApIHtcbiAgICAgICAgeC5yU2hpZnRUbyhnLHgpO1xuICAgICAgICB5LnJTaGlmdFRvKGcseSk7XG4gICAgICB9XG4gICAgICB3aGlsZSh4LnNpZ251bSgpID4gMCkge1xuICAgICAgICBpZigoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeC5yU2hpZnRUbyhpLHgpO1xuICAgICAgICBpZigoaSA9IHkuZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkgeS5yU2hpZnRUbyhpLHkpO1xuICAgICAgICBpZih4LmNvbXBhcmVUbyh5KSA+PSAwKSB7XG4gICAgICAgICAgeC5zdWJUbyh5LHgpO1xuICAgICAgICAgIHguclNoaWZ0VG8oMSx4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB5LnN1YlRvKHgseSk7XG4gICAgICAgICAgeS5yU2hpZnRUbygxLHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihnID4gMCkgeS5sU2hpZnRUbyhnLHkpO1xuICAgICAgcmV0dXJuIHk7XG4gICAgfVxuXG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAlIG4sIG4gPCAyXjI2XG4gICAgZnVuY3Rpb24gYm5wTW9kSW50KG4pIHtcbiAgICAgIGlmKG4gPD0gMCkgcmV0dXJuIDA7XG4gICAgICB2YXIgZCA9IHRoaXMuRFYlbiwgciA9ICh0aGlzLnM8MCk/bi0xOjA7XG4gICAgICBpZih0aGlzLnQgPiAwKVxuICAgICAgICBpZihkID09IDApIHIgPSB0aGlzWzBdJW47XG4gICAgICAgIGVsc2UgZm9yKHZhciBpID0gdGhpcy50LTE7IGkgPj0gMDsgLS1pKSByID0gKGQqcit0aGlzW2ldKSVuO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuXG4gICAgLy8gKHB1YmxpYykgMS90aGlzICUgbSAoSEFDIDE0LjYxKVxuICAgIGZ1bmN0aW9uIGJuTW9kSW52ZXJzZShtKSB7XG4gICAgICB2YXIgYWMgPSBtLmlzRXZlbigpO1xuICAgICAgaWYoKHRoaXMuaXNFdmVuKCkgJiYgYWMpIHx8IG0uc2lnbnVtKCkgPT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIHZhciB1ID0gbS5jbG9uZSgpLCB2ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgdmFyIGEgPSBuYnYoMSksIGIgPSBuYnYoMCksIGMgPSBuYnYoMCksIGQgPSBuYnYoMSk7XG4gICAgICB3aGlsZSh1LnNpZ251bSgpICE9IDApIHtcbiAgICAgICAgd2hpbGUodS5pc0V2ZW4oKSkge1xuICAgICAgICAgIHUuclNoaWZ0VG8oMSx1KTtcbiAgICAgICAgICBpZihhYykge1xuICAgICAgICAgICAgaWYoIWEuaXNFdmVuKCkgfHwgIWIuaXNFdmVuKCkpIHsgYS5hZGRUbyh0aGlzLGEpOyBiLnN1YlRvKG0sYik7IH1cbiAgICAgICAgICAgIGEuclNoaWZ0VG8oMSxhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZighYi5pc0V2ZW4oKSkgYi5zdWJUbyhtLGIpO1xuICAgICAgICAgIGIuclNoaWZ0VG8oMSxiKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSh2LmlzRXZlbigpKSB7XG4gICAgICAgICAgdi5yU2hpZnRUbygxLHYpO1xuICAgICAgICAgIGlmKGFjKSB7XG4gICAgICAgICAgICBpZighYy5pc0V2ZW4oKSB8fCAhZC5pc0V2ZW4oKSkgeyBjLmFkZFRvKHRoaXMsYyk7IGQuc3ViVG8obSxkKTsgfVxuICAgICAgICAgICAgYy5yU2hpZnRUbygxLGMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmKCFkLmlzRXZlbigpKSBkLnN1YlRvKG0sZCk7XG4gICAgICAgICAgZC5yU2hpZnRUbygxLGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHUuY29tcGFyZVRvKHYpID49IDApIHtcbiAgICAgICAgICB1LnN1YlRvKHYsdSk7XG4gICAgICAgICAgaWYoYWMpIGEuc3ViVG8oYyxhKTtcbiAgICAgICAgICBiLnN1YlRvKGQsYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdi5zdWJUbyh1LHYpO1xuICAgICAgICAgIGlmKGFjKSBjLnN1YlRvKGEsYyk7XG4gICAgICAgICAgZC5zdWJUbyhiLGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZih2LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCkgcmV0dXJuIEJpZ0ludGVnZXIuWkVSTztcbiAgICAgIGlmKGQuY29tcGFyZVRvKG0pID49IDApIHJldHVybiBkLnN1YnRyYWN0KG0pO1xuICAgICAgaWYoZC5zaWdudW0oKSA8IDApIGQuYWRkVG8obSxkKTsgZWxzZSByZXR1cm4gZDtcbiAgICAgIGlmKGQuc2lnbnVtKCkgPCAwKSByZXR1cm4gZC5hZGQobSk7IGVsc2UgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgdmFyIGxvd3ByaW1lcyA9IFsyLDMsNSw3LDExLDEzLDE3LDE5LDIzLDI5LDMxLDM3LDQxLDQzLDQ3LDUzLDU5LDYxLDY3LDcxLDczLDc5LDgzLDg5LDk3LDEwMSwxMDMsMTA3LDEwOSwxMTMsMTI3LDEzMSwxMzcsMTM5LDE0OSwxNTEsMTU3LDE2MywxNjcsMTczLDE3OSwxODEsMTkxLDE5MywxOTcsMTk5LDIxMSwyMjMsMjI3LDIyOSwyMzMsMjM5LDI0MSwyNTEsMjU3LDI2MywyNjksMjcxLDI3NywyODEsMjgzLDI5MywzMDcsMzExLDMxMywzMTcsMzMxLDMzNywzNDcsMzQ5LDM1MywzNTksMzY3LDM3MywzNzksMzgzLDM4OSwzOTcsNDAxLDQwOSw0MTksNDIxLDQzMSw0MzMsNDM5LDQ0Myw0NDksNDU3LDQ2MSw0NjMsNDY3LDQ3OSw0ODcsNDkxLDQ5OSw1MDMsNTA5LDUyMSw1MjMsNTQxLDU0Nyw1NTcsNTYzLDU2OSw1NzEsNTc3LDU4Nyw1OTMsNTk5LDYwMSw2MDcsNjEzLDYxNyw2MTksNjMxLDY0MSw2NDMsNjQ3LDY1Myw2NTksNjYxLDY3Myw2NzcsNjgzLDY5MSw3MDEsNzA5LDcxOSw3MjcsNzMzLDczOSw3NDMsNzUxLDc1Nyw3NjEsNzY5LDc3Myw3ODcsNzk3LDgwOSw4MTEsODIxLDgyMyw4MjcsODI5LDgzOSw4NTMsODU3LDg1OSw4NjMsODc3LDg4MSw4ODMsODg3LDkwNyw5MTEsOTE5LDkyOSw5MzcsOTQxLDk0Nyw5NTMsOTY3LDk3MSw5NzcsOTgzLDk5MSw5OTddO1xuICAgIHZhciBscGxpbSA9ICgxPDwyNikvbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGgtMV07XG5cbiAgICAvLyAocHVibGljKSB0ZXN0IHByaW1hbGl0eSB3aXRoIGNlcnRhaW50eSA+PSAxLS41XnRcbiAgICBmdW5jdGlvbiBibklzUHJvYmFibGVQcmltZSh0KSB7XG4gICAgICB2YXIgaSwgeCA9IHRoaXMuYWJzKCk7XG4gICAgICBpZih4LnQgPT0gMSAmJiB4WzBdIDw9IGxvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoLTFdKSB7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IGxvd3ByaW1lcy5sZW5ndGg7ICsraSlcbiAgICAgICAgICBpZih4WzBdID09IGxvd3ByaW1lc1tpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKHguaXNFdmVuKCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGkgPSAxO1xuICAgICAgd2hpbGUoaSA8IGxvd3ByaW1lcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG0gPSBsb3dwcmltZXNbaV0sIGogPSBpKzE7XG4gICAgICAgIHdoaWxlKGogPCBsb3dwcmltZXMubGVuZ3RoICYmIG0gPCBscGxpbSkgbSAqPSBsb3dwcmltZXNbaisrXTtcbiAgICAgICAgbSA9IHgubW9kSW50KG0pO1xuICAgICAgICB3aGlsZShpIDwgaikgaWYobSVsb3dwcmltZXNbaSsrXSA9PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4geC5taWxsZXJSYWJpbih0KTtcbiAgICB9XG5cbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmIHByb2JhYmx5IHByaW1lIChIQUMgNC4yNCwgTWlsbGVyLVJhYmluKVxuICAgIGZ1bmN0aW9uIGJucE1pbGxlclJhYmluKHQpIHtcbiAgICAgIHZhciBuMSA9IHRoaXMuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgdmFyIGsgPSBuMS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgIGlmKGsgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdmFyIHIgPSBuMS5zaGlmdFJpZ2h0KGspO1xuICAgICAgdCA9ICh0KzEpPj4xO1xuICAgICAgaWYodCA+IGxvd3ByaW1lcy5sZW5ndGgpIHQgPSBsb3dwcmltZXMubGVuZ3RoO1xuICAgICAgdmFyIGEgPSBuYmkoKTtcbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0OyArK2kpIHtcbiAgICAgICAgLy9QaWNrIGJhc2VzIGF0IHJhbmRvbSwgaW5zdGVhZCBvZiBzdGFydGluZyBhdCAyXG4gICAgICAgIGEuZnJvbUludChsb3dwcmltZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxvd3ByaW1lcy5sZW5ndGgpXSk7XG4gICAgICAgIHZhciB5ID0gYS5tb2RQb3cocix0aGlzKTtcbiAgICAgICAgaWYoeS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpICE9IDAgJiYgeS5jb21wYXJlVG8objEpICE9IDApIHtcbiAgICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgICAgd2hpbGUoaisrIDwgayAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgeSA9IHkubW9kUG93SW50KDIsdGhpcyk7XG4gICAgICAgICAgICBpZih5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZih5LmNvbXBhcmVUbyhuMSkgIT0gMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBwcm90ZWN0ZWRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaHVua1NpemUgPSBibnBDaHVua1NpemU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9SYWRpeCA9IGJucFRvUmFkaXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVJhZGl4ID0gYm5wRnJvbVJhZGl4O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21OdW1iZXIgPSBibnBGcm9tTnVtYmVyO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdHdpc2VUbyA9IGJucEJpdHdpc2VUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQgPSBibnBDaGFuZ2VCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkVG8gPSBibnBBZGRUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHkgPSBibnBETXVsdGlwbHk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldCA9IGJucERBZGRPZmZzZXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvID0gYm5wTXVsdGlwbHlMb3dlclRvO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbyA9IGJucE11bHRpcGx5VXBwZXJUbztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnQgPSBibnBNb2RJbnQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWlsbGVyUmFiaW4gPSBibnBNaWxsZXJSYWJpbjtcblxuICAgIC8vIHB1YmxpY1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lID0gYm5DbG9uZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnRWYWx1ZSA9IGJuSW50VmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlID0gYm5CeXRlVmFsdWU7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hvcnRWYWx1ZSA9IGJuU2hvcnRWYWx1ZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaWdudW0gPSBiblNpZ051bTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0J5dGVBcnJheSA9IGJuVG9CeXRlQXJyYXk7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gYm5FcXVhbHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWluID0gYm5NaW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWF4ID0gYm5NYXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kID0gYm5BbmQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBibk9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGJuWG9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdCA9IGJuQW5kTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGJuTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGJuU2hpZnRMZWZ0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBiblNoaWZ0UmlnaHQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2V0TG93ZXN0U2V0Qml0ID0gYm5HZXRMb3dlc3RTZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0Q291bnQgPSBibkJpdENvdW50O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQgPSBiblRlc3RCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2V0Qml0ID0gYm5TZXRCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xlYXJCaXQgPSBibkNsZWFyQml0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZsaXBCaXQgPSBibkZsaXBCaXQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkID0gYm5BZGQ7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBiblN1YnRyYWN0O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gYm5NdWx0aXBseTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBibkRpdmlkZTtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBiblJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGVBbmRSZW1haW5kZXIgPSBibkRpdmlkZUFuZFJlbWFpbmRlcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBibk1vZFBvdztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gYm5Nb2RJbnZlcnNlO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGJuUG93O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZCA9IGJuR0NEO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IGJuSXNQcm9iYWJsZVByaW1lO1xuXG4gICAgLy8gSlNCTi1zcGVjaWZpYyBleHRlbnNpb25cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBiblNxdWFyZTtcblxuICAgIC8vIEV4cG9zZSB0aGUgQmFycmV0dCBmdW5jdGlvblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLkJhcnJldHQgPSBCYXJyZXR0XG5cbiAgICAvLyBCaWdJbnRlZ2VyIGludGVyZmFjZXMgbm90IGltcGxlbWVudGVkIGluIGpzYm46XG5cbiAgICAvLyBCaWdJbnRlZ2VyKGludCBzaWdudW0sIGJ5dGVbXSBtYWduaXR1ZGUpXG4gICAgLy8gZG91YmxlIGRvdWJsZVZhbHVlKClcbiAgICAvLyBmbG9hdCBmbG9hdFZhbHVlKClcbiAgICAvLyBpbnQgaGFzaENvZGUoKVxuICAgIC8vIGxvbmcgbG9uZ1ZhbHVlKClcbiAgICAvLyBzdGF0aWMgQmlnSW50ZWdlciB2YWx1ZU9mKGxvbmcgdmFsKVxuXG5cdC8vIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIC0gcmVxdWlyZXMgYSBQUk5HIGJhY2tlbmQsIGUuZy4gcHJuZzQuanNcblxuXHQvLyBGb3IgYmVzdCByZXN1bHRzLCBwdXQgY29kZSBsaWtlXG5cdC8vIDxib2R5IG9uQ2xpY2s9J3JuZ19zZWVkX3RpbWUoKTsnIG9uS2V5UHJlc3M9J3JuZ19zZWVkX3RpbWUoKTsnPlxuXHQvLyBpbiB5b3VyIG1haW4gSFRNTCBkb2N1bWVudC5cblxuXHR2YXIgcm5nX3N0YXRlO1xuXHR2YXIgcm5nX3Bvb2w7XG5cdHZhciBybmdfcHB0cjtcblxuXHQvLyBNaXggaW4gYSAzMi1iaXQgaW50ZWdlciBpbnRvIHRoZSBwb29sXG5cdGZ1bmN0aW9uIHJuZ19zZWVkX2ludCh4KSB7XG5cdCAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0geCAmIDI1NTtcblx0ICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiA4KSAmIDI1NTtcblx0ICBybmdfcG9vbFtybmdfcHB0cisrXSBePSAoeCA+PiAxNikgJiAyNTU7XG5cdCAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gXj0gKHggPj4gMjQpICYgMjU1O1xuXHQgIGlmKHJuZ19wcHRyID49IHJuZ19wc2l6ZSkgcm5nX3BwdHIgLT0gcm5nX3BzaXplO1xuXHR9XG5cblx0Ly8gTWl4IGluIHRoZSBjdXJyZW50IHRpbWUgKHcvbWlsbGlzZWNvbmRzKSBpbnRvIHRoZSBwb29sXG5cdGZ1bmN0aW9uIHJuZ19zZWVkX3RpbWUoKSB7XG5cdCAgcm5nX3NlZWRfaW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cblx0aWYocm5nX3Bvb2wgPT0gbnVsbCkge1xuXHQgIHJuZ19wb29sID0gbmV3IEFycmF5KCk7XG5cdCAgcm5nX3BwdHIgPSAwO1xuXHQgIHZhciB0O1xuXHQgIGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmNyeXB0bykge1xuXHRcdGlmICh3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuXHRcdCAgLy8gVXNlIHdlYmNyeXB0byBpZiBhdmFpbGFibGVcblx0XHQgIHZhciB1YSA9IG5ldyBVaW50OEFycmF5KDMyKTtcblx0XHQgIHdpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHVhKTtcblx0XHQgIGZvcih0ID0gMDsgdCA8IDMyOyArK3QpXG5cdFx0XHRybmdfcG9vbFtybmdfcHB0cisrXSA9IHVhW3RdO1xuXHRcdH1cblx0XHRlbHNlIGlmKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTmV0c2NhcGVcIiAmJiBuYXZpZ2F0b3IuYXBwVmVyc2lvbiA8IFwiNVwiKSB7XG5cdFx0ICAvLyBFeHRyYWN0IGVudHJvcHkgKDI1NiBiaXRzKSBmcm9tIE5TNCBSTkcgaWYgYXZhaWxhYmxlXG5cdFx0ICB2YXIgeiA9IHdpbmRvdy5jcnlwdG8ucmFuZG9tKDMyKTtcblx0XHQgIGZvcih0ID0gMDsgdCA8IHoubGVuZ3RoOyArK3QpXG5cdFx0XHRybmdfcG9vbFtybmdfcHB0cisrXSA9IHouY2hhckNvZGVBdCh0KSAmIDI1NTtcblx0XHR9XG5cdCAgfVxuXHQgIHdoaWxlKHJuZ19wcHRyIDwgcm5nX3BzaXplKSB7ICAvLyBleHRyYWN0IHNvbWUgcmFuZG9tbmVzcyBmcm9tIE1hdGgucmFuZG9tKClcblx0XHR0ID0gTWF0aC5mbG9vcig2NTUzNiAqIE1hdGgucmFuZG9tKCkpO1xuXHRcdHJuZ19wb29sW3JuZ19wcHRyKytdID0gdCA+Pj4gODtcblx0XHRybmdfcG9vbFtybmdfcHB0cisrXSA9IHQgJiAyNTU7XG5cdCAgfVxuXHQgIHJuZ19wcHRyID0gMDtcblx0ICBybmdfc2VlZF90aW1lKCk7XG5cdCAgLy9ybmdfc2VlZF9pbnQod2luZG93LnNjcmVlblgpO1xuXHQgIC8vcm5nX3NlZWRfaW50KHdpbmRvdy5zY3JlZW5ZKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcblx0ICBpZihybmdfc3RhdGUgPT0gbnVsbCkge1xuXHRcdHJuZ19zZWVkX3RpbWUoKTtcblx0XHRybmdfc3RhdGUgPSBwcm5nX25ld3N0YXRlKCk7XG5cdFx0cm5nX3N0YXRlLmluaXQocm5nX3Bvb2wpO1xuXHRcdGZvcihybmdfcHB0ciA9IDA7IHJuZ19wcHRyIDwgcm5nX3Bvb2wubGVuZ3RoOyArK3JuZ19wcHRyKVxuXHRcdCAgcm5nX3Bvb2xbcm5nX3BwdHJdID0gMDtcblx0XHRybmdfcHB0ciA9IDA7XG5cdFx0Ly9ybmdfcG9vbCA9IG51bGw7XG5cdCAgfVxuXHQgIC8vIFRPRE86IGFsbG93IHJlc2VlZGluZyBhZnRlciBmaXJzdCByZXF1ZXN0XG5cdCAgcmV0dXJuIHJuZ19zdGF0ZS5uZXh0KCk7XG5cdH1cblxuXHRmdW5jdGlvbiBybmdfZ2V0X2J5dGVzKGJhKSB7XG5cdCAgdmFyIGk7XG5cdCAgZm9yKGkgPSAwOyBpIDwgYmEubGVuZ3RoOyArK2kpIGJhW2ldID0gcm5nX2dldF9ieXRlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7fVxuXG5cdFNlY3VyZVJhbmRvbS5wcm90b3R5cGUubmV4dEJ5dGVzID0gcm5nX2dldF9ieXRlcztcblxuXHQvLyBwcm5nNC5qcyAtIHVzZXMgQXJjZm91ciBhcyBhIFBSTkdcblxuXHRmdW5jdGlvbiBBcmNmb3VyKCkge1xuXHQgIHRoaXMuaSA9IDA7XG5cdCAgdGhpcy5qID0gMDtcblx0ICB0aGlzLlMgPSBuZXcgQXJyYXkoKTtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgYXJjZm91ciBjb250ZXh0IGZyb20ga2V5LCBhbiBhcnJheSBvZiBpbnRzLCBlYWNoIGZyb20gWzAuLjI1NV1cblx0ZnVuY3Rpb24gQVJDNGluaXQoa2V5KSB7XG5cdCAgdmFyIGksIGosIHQ7XG5cdCAgZm9yKGkgPSAwOyBpIDwgMjU2OyArK2kpXG5cdFx0dGhpcy5TW2ldID0gaTtcblx0ICBqID0gMDtcblx0ICBmb3IoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuXHRcdGogPSAoaiArIHRoaXMuU1tpXSArIGtleVtpICUga2V5Lmxlbmd0aF0pICYgMjU1O1xuXHRcdHQgPSB0aGlzLlNbaV07XG5cdFx0dGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuXHRcdHRoaXMuU1tqXSA9IHQ7XG5cdCAgfVxuXHQgIHRoaXMuaSA9IDA7XG5cdCAgdGhpcy5qID0gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIEFSQzRuZXh0KCkge1xuXHQgIHZhciB0O1xuXHQgIHRoaXMuaSA9ICh0aGlzLmkgKyAxKSAmIDI1NTtcblx0ICB0aGlzLmogPSAodGhpcy5qICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1O1xuXHQgIHQgPSB0aGlzLlNbdGhpcy5pXTtcblx0ICB0aGlzLlNbdGhpcy5pXSA9IHRoaXMuU1t0aGlzLmpdO1xuXHQgIHRoaXMuU1t0aGlzLmpdID0gdDtcblx0ICByZXR1cm4gdGhpcy5TWyh0ICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1XTtcblx0fVxuXG5cdEFyY2ZvdXIucHJvdG90eXBlLmluaXQgPSBBUkM0aW5pdDtcblx0QXJjZm91ci5wcm90b3R5cGUubmV4dCA9IEFSQzRuZXh0O1xuXG5cdC8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuXHRmdW5jdGlvbiBwcm5nX25ld3N0YXRlKCkge1xuXHQgIHJldHVybiBuZXcgQXJjZm91cigpO1xuXHR9XG5cblx0Ly8gUG9vbCBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0IGFuZCBncmVhdGVyIHRoYW4gMzIuXG5cdC8vIEFuIGFycmF5IG9mIGJ5dGVzIHRoZSBzaXplIG9mIHRoZSBwb29sIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKVxuXHR2YXIgcm5nX3BzaXplID0gMjU2O1xuXG4gIEJpZ0ludGVnZXIuU2VjdXJlUmFuZG9tID0gU2VjdXJlUmFuZG9tO1xuICBCaWdJbnRlZ2VyLkJpZ0ludGVnZXIgPSBCaWdJbnRlZ2VyO1xuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gQmlnSW50ZWdlcjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLkJpZ0ludGVnZXIgPSBCaWdJbnRlZ2VyO1xuICAgIHRoaXMuU2VjdXJlUmFuZG9tID0gU2VjdXJlUmFuZG9tO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2pzYm4vaW5kZXguanMiLCJ2YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJyk7XG5cbmZ1bmN0aW9uIHBhZGRpbmcoc3RyKSB7XG4gIHZhciBtb2QgPSAoc3RyLmxlbmd0aCAlIDQpO1xuICB2YXIgcGFkID0gNCAtIG1vZDtcblxuICBpZiAobW9kID09PSAwKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHJldHVybiBzdHIgKyAobmV3IEFycmF5KDEgKyBwYWQpKS5qb2luKCc9Jyk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVBcnJheVRvU3RyaW5nKGFycmF5KSB7XG4gIHZhciByZXN1bHQgPSBcIlwiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYXJyYXlbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZUFycmF5KHN0cikge1xuICB2YXIgYXJyID0gbmV3IEFycmF5KHN0ci5sZW5ndGgpO1xuICBmb3IgKHZhciBhID0gMDsgYSA8IHN0ci5sZW5ndGg7IGErKykge1xuICAgIGFyclthXSA9IHN0ci5jaGFyQ29kZUF0KGEpO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGJ5dGVBcnJheVRvSGV4KHJhdykge1xuICB2YXIgSEVYID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXcubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX2hleCA9IHJhd1tpXS50b1N0cmluZygxNik7XG4gICAgSEVYICs9IChfaGV4Lmxlbmd0aCA9PT0gMiA/IF9oZXggOiAnMCcgKyBfaGV4KTtcbiAgfVxuXG4gIHJldHVybiBIRVg7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5KGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoLyUoWzAtOUEtRl17Mn0pL2csIGZ1bmN0aW9uIChtYXRjaCwgcDEpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgnMHgnICsgcDEpO1xuICB9KSkpXG4gIC5yZXBsYWNlKC9cXCsvZywgJy0nKSAvLyBDb252ZXJ0ICcrJyB0byAnLSdcbiAgLnJlcGxhY2UoL1xcLy9nLCAnXycpOyAvLyBDb252ZXJ0ICcvJyB0byAnXyc7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVRvU3RyaW5nKHN0cikge1xuICBzdHIgPSBwYWRkaW5nKHN0cilcbiAgICAucmVwbGFjZSgvXFwtL2csICcrJykgLy8gQ29udmVydCAnLScgdG8gJysnXG4gICAgLnJlcGxhY2UoL18vZywgJy8nKTsgLy8gQ29udmVydCAnXycgdG8gJy8nXG5cbiAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChieXRlQXJyYXlUb1N0cmluZyhiYXNlNjQudG9CeXRlQXJyYXkoc3RyKSkuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgfSkuam9pbignJykpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVUb0hFWChzdHIpIHtcbiAgcmV0dXJuIGJ5dGVBcnJheVRvSGV4KGJhc2U2NC50b0J5dGVBcnJheShwYWRkaW5nKHN0cikpKTtcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CYXNlNjRVcmwoYmFzZTY0U3RyaW5nKSB7XG4gIHZhciBTQUZFX1VSTF9FTkNPRElOR19NQVBQSU5HID0ge1xuICAgIFwiK1wiOiBcIi1cIixcbiAgICBcIi9cIjogXCJfXCIsXG4gICAgXCI9XCI6IFwiXCJcbiAgfTtcblxuICByZXR1cm4gYmFzZTY0U3RyaW5nLnJlcGxhY2UoL1srLz1dL2csIGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gU0FGRV9VUkxfRU5DT0RJTkdfTUFQUElOR1ttXTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlbmNvZGVTdHJpbmc6IGVuY29kZVN0cmluZyxcbiAgZGVjb2RlVG9TdHJpbmc6IGRlY29kZVRvU3RyaW5nLFxuICBieXRlQXJyYXlUb1N0cmluZzogYnl0ZUFycmF5VG9TdHJpbmcsXG4gIHN0cmluZ1RvQnl0ZUFycmF5OiBzdHJpbmdUb0J5dGVBcnJheSxcbiAgcGFkZGluZzogcGFkZGluZyxcbiAgYnl0ZUFycmF5VG9IZXg6IGJ5dGVBcnJheVRvSGV4LFxuICBkZWNvZGVUb0hFWDogZGVjb2RlVG9IRVgsXG4gIGJhc2U2NFRvQmFzZTY0VXJsOiBiYXNlNjRUb0Jhc2U2NFVybFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9iYXNlNjQuanMiLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYmFzZTY0LWpzL2luZGV4LmpzIiwidmFyIHVybGpvaW4gPSByZXF1aXJlKCd1cmwtam9pbicpO1xudmFyIGJhc2U2NCA9IHJlcXVpcmUoJy4vYmFzZTY0Jyk7XG52YXIgcmVxdWVzdCA9IHJlcXVpcmUoJ3N1cGVyYWdlbnQnKTtcblxuZnVuY3Rpb24gcHJvY2Vzcyhqd2tzKSB7XG4gIHZhciBtb2R1bHVzID0gYmFzZTY0LmRlY29kZVRvSEVYKGp3a3Mubik7XG4gIHZhciBleHAgPSBiYXNlNjQuZGVjb2RlVG9IRVgoandrcy5lKTtcblxuICByZXR1cm4ge1xuICAgIG1vZHVsdXM6IG1vZHVsdXMsXG4gICAgZXhwOiBleHBcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0SldLUyhvcHRpb25zKSB7XG4gIHZhciB1cmwgPSBvcHRpb25zLmp3a3NVUkkgfHwgdXJsam9pbihvcHRpb25zLmlzcywgJy53ZWxsLWtub3duJywgJ2p3a3MuanNvbicpO1xuXG4gIHJldHVybiByZXF1ZXN0XG4gICAgLmdldCh1cmwpXG4gICAgLmVuZChmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICB2YXIgbWF0Y2hpbmdLZXkgPSBudWxsO1xuICAgICAgdmFyIGE7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgIGZvciAoYSA9IDA7IGEgPCBkYXRhLmJvZHkua2V5cy5sZW5ndGggJiYgbWF0Y2hpbmdLZXkgPT09IG51bGw7IGErKykge1xuICAgICAgICBrZXkgPSBkYXRhLmJvZHkua2V5c1thXTtcbiAgICAgICAgaWYgKGtleS5raWQgPT09IG9wdGlvbnMua2lkKSB7XG4gICAgICAgICAgbWF0Y2hpbmdLZXkgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9jZXNzKG1hdGNoaW5nS2V5KSk7XG4gICAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9jZXNzOiBwcm9jZXNzLFxuICBnZXRKV0tTOiBnZXRKV0tTXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL2p3a3MuanMiLCIoZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbik7XG4gIGVsc2UgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKTtcbn0pKCd1cmxqb2luJywgdGhpcywgZnVuY3Rpb24gKCkge1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZSAoc3RyLCBvcHRpb25zKSB7XG5cbiAgICAvLyBtYWtlIHN1cmUgcHJvdG9jb2wgaXMgZm9sbG93ZWQgYnkgdHdvIHNsYXNoZXNcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvOlxcLy9nLCAnOi8vJyk7XG5cbiAgICAvLyByZW1vdmUgY29uc2VjdXRpdmUgc2xhc2hlc1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC8oW146XFxzXSlcXC8rL2csICckMS8nKTtcblxuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaCBiZWZvcmUgcGFyYW1ldGVycyBvciBoYXNoXG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcLyhcXD98JnwjW14hXSkvZywgJyQxJyk7XG5cbiAgICAvLyByZXBsYWNlID8gaW4gcGFyYW1ldGVycyB3aXRoICZcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvKFxcPy4rKVxcPy9nLCAnJDEmJyk7XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBhcmd1bWVudHM7XG4gICAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gbmV3IHN5bnRheCB3aXRoIGFycmF5IGFuZCBvcHRpb25zXG4gICAgICBpbnB1dCA9IGFyZ3VtZW50c1swXTtcbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IFtdLnNsaWNlLmNhbGwoaW5wdXQsIDApLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gbm9ybWFsaXplKGpvaW5lZCwgb3B0aW9ucyk7XG4gIH07XG5cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi91cmwtam9pbi9saWIvdXJsLWpvaW4uanMiLCIvKipcbiAqIFJvb3QgcmVmZXJlbmNlIGZvciBpZnJhbWVzLlxuICovXG5cbnZhciByb290O1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IC8vIEJyb3dzZXIgd2luZG93XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyAvLyBXZWIgV29ya2VyXG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIHsgLy8gT3RoZXIgZW52aXJvbm1lbnRzXG4gIGNvbnNvbGUud2FybihcIlVzaW5nIGJyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgaW4gbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG4gIHJvb3QgPSB0aGlzO1xufVxuXG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgUmVxdWVzdEJhc2UgPSByZXF1aXJlKCcuL3JlcXVlc3QtYmFzZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcbnZhciBSZXNwb25zZUJhc2UgPSByZXF1aXJlKCcuL3Jlc3BvbnNlLWJhc2UnKTtcbnZhciBBZ2VudCA9IHJlcXVpcmUoJy4vYWdlbnQtYmFzZScpO1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gbm9vcCgpe307XG5cbi8qKlxuICogRXhwb3NlIGByZXF1ZXN0YC5cbiAqL1xuXG52YXIgcmVxdWVzdCA9IGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XG4gIC8vIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiB1cmwpIHtcbiAgICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdCgnR0VUJywgbWV0aG9kKS5lbmQodXJsKTtcbiAgfVxuXG4gIC8vIHVybCBmaXJzdFxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG5ldyBleHBvcnRzLlJlcXVlc3QoJ0dFVCcsIG1ldGhvZCk7XG4gIH1cblxuICByZXR1cm4gbmV3IGV4cG9ydHMuUmVxdWVzdChtZXRob2QsIHVybCk7XG59XG5cbmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRGV0ZXJtaW5lIFhIUi5cbiAqL1xuXG5yZXF1ZXN0LmdldFhIUiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHJvb3QuWE1MSHR0cFJlcXVlc3RcbiAgICAgICYmICghcm9vdC5sb2NhdGlvbiB8fCAnZmlsZTonICE9IHJvb3QubG9jYXRpb24ucHJvdG9jb2xcbiAgICAgICAgICB8fCAhcm9vdC5BY3RpdmVYT2JqZWN0KSkge1xuICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3Q7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9IGNhdGNoKGUpIHt9XG4gICAgdHJ5IHsgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUC42LjAnKTsgfSBjYXRjaChlKSB7fVxuICAgIHRyeSB7IHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAuMy4wJyk7IH0gY2F0Y2goZSkge31cbiAgICB0cnkgeyByZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gY2F0Y2goZSkge31cbiAgfVxuICB0aHJvdyBFcnJvcihcIkJyb3dzZXItb25seSB2ZXJzaW9uIG9mIHN1cGVyYWdlbnQgY291bGQgbm90IGZpbmQgWEhSXCIpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGFkZGVkIHRvIHN1cHBvcnQgSUUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciB0cmltID0gJycudHJpbVxuICA/IGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMudHJpbSgpOyB9XG4gIDogZnVuY3Rpb24ocykgeyByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyp8XFxzKiQpL2csICcnKTsgfTtcblxuLyoqXG4gKiBTZXJpYWxpemUgdGhlIGdpdmVuIGBvYmpgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgaWYgKCFpc09iamVjdChvYmopKSByZXR1cm4gb2JqO1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIG9ialtrZXldKTtcbiAgfVxuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG4vKipcbiAqIEhlbHBzICdzZXJpYWxpemUnIHdpdGggc2VyaWFsaXppbmcgYXJyYXlzLlxuICogTXV0YXRlcyB0aGUgcGFpcnMgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFpcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICovXG5cbmZ1bmN0aW9uIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHZhbCkge1xuICBpZiAodmFsICE9IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICB2YWwuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgICAgIHB1c2hFbmNvZGVkS2V5VmFsdWVQYWlyKHBhaXJzLCBrZXksIHYpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBmb3IodmFyIHN1YmtleSBpbiB2YWwpIHtcbiAgICAgICAgcHVzaEVuY29kZWRLZXlWYWx1ZVBhaXIocGFpcnMsIGtleSArICdbJyArIHN1YmtleSArICddJywgdmFsW3N1YmtleV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgICAgICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICBwYWlycy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpKTtcbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBzZXJpYWxpemF0aW9uIG1ldGhvZC5cbiAqL1xuXG5yZXF1ZXN0LnNlcmlhbGl6ZU9iamVjdCA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gICogUGFyc2UgdGhlIGdpdmVuIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBgc3RyYC5cbiAgKlxuICAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICogQGFwaSBwcml2YXRlXG4gICovXG5cbmZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cikge1xuICB2YXIgb2JqID0ge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdCgnJicpO1xuICB2YXIgcGFpcjtcbiAgdmFyIHBvcztcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFpcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBwYWlyID0gcGFpcnNbaV07XG4gICAgcG9zID0gcGFpci5pbmRleE9mKCc9Jyk7XG4gICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyKV0gPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKDAsIHBvcykpXSA9XG4gICAgICAgIGRlY29kZVVSSUNvbXBvbmVudChwYWlyLnNsaWNlKHBvcyArIDEpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIEV4cG9zZSBwYXJzZXIuXG4gKi9cblxucmVxdWVzdC5wYXJzZVN0cmluZyA9IHBhcnNlU3RyaW5nO1xuXG4vKipcbiAqIERlZmF1bHQgTUlNRSB0eXBlIG1hcC5cbiAqXG4gKiAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKi9cblxucmVxdWVzdC50eXBlcyA9IHtcbiAgaHRtbDogJ3RleHQvaHRtbCcsXG4gIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgeG1sOiAndGV4dC94bWwnLFxuICB1cmxlbmNvZGVkOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0nOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgJ2Zvcm0tZGF0YSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG4vKipcbiAqIERlZmF1bHQgc2VyaWFsaXphdGlvbiBtYXAuXG4gKlxuICogICAgIHN1cGVyYWdlbnQuc2VyaWFsaXplWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKG9iail7XG4gKiAgICAgICByZXR1cm4gJ2dlbmVyYXRlZCB4bWwgaGVyZSc7XG4gKiAgICAgfTtcbiAqXG4gKi9cblxucmVxdWVzdC5zZXJpYWxpemUgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBzZXJpYWxpemUsXG4gICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnlcbn07XG5cbi8qKlxuICAqIERlZmF1bHQgcGFyc2Vycy5cbiAgKlxuICAqICAgICBzdXBlcmFnZW50LnBhcnNlWydhcHBsaWNhdGlvbi94bWwnXSA9IGZ1bmN0aW9uKHN0cil7XG4gICogICAgICAgcmV0dXJuIHsgb2JqZWN0IHBhcnNlZCBmcm9tIHN0ciB9O1xuICAqICAgICB9O1xuICAqXG4gICovXG5cbnJlcXVlc3QucGFyc2UgPSB7XG4gICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnOiBwYXJzZVN0cmluZyxcbiAgJ2FwcGxpY2F0aW9uL2pzb24nOiBKU09OLnBhcnNlXG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBoZWFkZXIgYHN0cmAgaW50b1xuICogYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG1hcHBlZCBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIZWFkZXIoc3RyKSB7XG4gIHZhciBsaW5lcyA9IHN0ci5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgZmllbGRzID0ge307XG4gIHZhciBpbmRleDtcbiAgdmFyIGxpbmU7XG4gIHZhciBmaWVsZDtcbiAgdmFyIHZhbDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICBsaW5lID0gbGluZXNbaV07XG4gICAgaW5kZXggPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7IC8vIGNvdWxkIGJlIGVtcHR5IGxpbmUsIGp1c3Qgc2tpcCBpdFxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZpZWxkID0gbGluZS5zbGljZSgwLCBpbmRleCkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB0cmltKGxpbmUuc2xpY2UoaW5kZXggKyAxKSk7XG4gICAgZmllbGRzW2ZpZWxkXSA9IHZhbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZHM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG1pbWVgIGlzIGpzb24gb3IgaGFzICtqc29uIHN0cnVjdHVyZWQgc3ludGF4IHN1ZmZpeC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWltZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzSlNPTihtaW1lKSB7XG4gIC8vIHNob3VsZCBtYXRjaCAvanNvbiBvciAranNvblxuICAvLyBidXQgbm90IC9qc29uLXNlcVxuICByZXR1cm4gL1tcXC8rXWpzb24oJHxbXi1cXHddKS8udGVzdChtaW1lKTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZWAgd2l0aCB0aGUgZ2l2ZW4gYHhocmAuXG4gKlxuICogIC0gc2V0IGZsYWdzICgub2ssIC5lcnJvciwgZXRjKVxuICogIC0gcGFyc2UgaGVhZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogIEFsaWFzaW5nIGBzdXBlcmFnZW50YCBhcyBgcmVxdWVzdGAgaXMgbmljZTpcbiAqXG4gKiAgICAgIHJlcXVlc3QgPSBzdXBlcmFnZW50O1xuICpcbiAqICBXZSBjYW4gdXNlIHRoZSBwcm9taXNlLWxpa2UgQVBJLCBvciBwYXNzIGNhbGxiYWNrczpcbiAqXG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJykuZW5kKGZ1bmN0aW9uKHJlcyl7fSk7XG4gKiAgICAgIHJlcXVlc3QuZ2V0KCcvJywgZnVuY3Rpb24ocmVzKXt9KTtcbiAqXG4gKiAgU2VuZGluZyBkYXRhIGNhbiBiZSBjaGFpbmVkOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqICBPciBwYXNzZWQgdG8gYC5zZW5kKClgOlxuICpcbiAqICAgICAgcmVxdWVzdFxuICogICAgICAgIC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogIE9yIHBhc3NlZCB0byBgLnBvc3QoKWA6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgLmVuZChmdW5jdGlvbihyZXMpe30pO1xuICpcbiAqIE9yIGZ1cnRoZXIgcmVkdWNlZCB0byBhIHNpbmdsZSBjYWxsIGZvciBzaW1wbGUgY2FzZXM6XG4gKlxuICogICAgICByZXF1ZXN0XG4gKiAgICAgICAgLnBvc3QoJy91c2VyJywgeyBuYW1lOiAndGonIH0sIGZ1bmN0aW9uKHJlcyl7fSk7XG4gKlxuICogQHBhcmFtIHtYTUxIVFRQUmVxdWVzdH0geGhyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2UocmVxKSB7XG4gIHRoaXMucmVxID0gcmVxO1xuICB0aGlzLnhociA9IHRoaXMucmVxLnhocjtcbiAgLy8gcmVzcG9uc2VUZXh0IGlzIGFjY2Vzc2libGUgb25seSBpZiByZXNwb25zZVR5cGUgaXMgJycgb3IgJ3RleHQnIGFuZCBvbiBvbGRlciBicm93c2Vyc1xuICB0aGlzLnRleHQgPSAoKHRoaXMucmVxLm1ldGhvZCAhPSdIRUFEJyAmJiAodGhpcy54aHIucmVzcG9uc2VUeXBlID09PSAnJyB8fCB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JykpIHx8IHR5cGVvZiB0aGlzLnhoci5yZXNwb25zZVR5cGUgPT09ICd1bmRlZmluZWQnKVxuICAgICA/IHRoaXMueGhyLnJlc3BvbnNlVGV4dFxuICAgICA6IG51bGw7XG4gIHRoaXMuc3RhdHVzVGV4dCA9IHRoaXMucmVxLnhoci5zdGF0dXNUZXh0O1xuICB2YXIgc3RhdHVzID0gdGhpcy54aHIuc3RhdHVzO1xuICAvLyBoYW5kbGUgSUU5IGJ1ZzogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDA0Njk3Mi9tc2llLXJldHVybnMtc3RhdHVzLWNvZGUtb2YtMTIyMy1mb3ItYWpheC1yZXF1ZXN0XG4gIGlmIChzdGF0dXMgPT09IDEyMjMpIHtcbiAgICBzdGF0dXMgPSAyMDQ7XG4gIH1cbiAgdGhpcy5fc2V0U3RhdHVzUHJvcGVydGllcyhzdGF0dXMpO1xuICB0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVycyA9IHBhcnNlSGVhZGVyKHRoaXMueGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKTtcbiAgLy8gZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIHNvbWV0aW1lcyBmYWxzZWx5IHJldHVybnMgXCJcIiBmb3IgQ09SUyByZXF1ZXN0cywgYnV0XG4gIC8vIGdldFJlc3BvbnNlSGVhZGVyIHN0aWxsIHdvcmtzLiBzbyB3ZSBnZXQgY29udGVudC10eXBlIGV2ZW4gaWYgZ2V0dGluZ1xuICAvLyBvdGhlciBoZWFkZXJzIGZhaWxzLlxuICB0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ10gPSB0aGlzLnhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyk7XG4gIHRoaXMuX3NldEhlYWRlclByb3BlcnRpZXModGhpcy5oZWFkZXIpO1xuXG4gIGlmIChudWxsID09PSB0aGlzLnRleHQgJiYgcmVxLl9yZXNwb25zZVR5cGUpIHtcbiAgICB0aGlzLmJvZHkgPSB0aGlzLnhoci5yZXNwb25zZTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmJvZHkgPSB0aGlzLnJlcS5tZXRob2QgIT0gJ0hFQUQnXG4gICAgICA/IHRoaXMuX3BhcnNlQm9keSh0aGlzLnRleHQgPyB0aGlzLnRleHQgOiB0aGlzLnhoci5yZXNwb25zZSlcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuXG5SZXNwb25zZUJhc2UoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYm9keSBgc3RyYC5cbiAqXG4gKiBVc2VkIGZvciBhdXRvLXBhcnNpbmcgb2YgYm9kaWVzLiBQYXJzZXJzXG4gKiBhcmUgZGVmaW5lZCBvbiB0aGUgYHN1cGVyYWdlbnQucGFyc2VgIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS5fcGFyc2VCb2R5ID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBwYXJzZSA9IHJlcXVlc3QucGFyc2VbdGhpcy50eXBlXTtcbiAgaWYgKHRoaXMucmVxLl9wYXJzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXEuX3BhcnNlcih0aGlzLCBzdHIpO1xuICB9XG4gIGlmICghcGFyc2UgJiYgaXNKU09OKHRoaXMudHlwZSkpIHtcbiAgICBwYXJzZSA9IHJlcXVlc3QucGFyc2VbJ2FwcGxpY2F0aW9uL2pzb24nXTtcbiAgfVxuICByZXR1cm4gcGFyc2UgJiYgc3RyICYmIChzdHIubGVuZ3RoIHx8IHN0ciBpbnN0YW5jZW9mIE9iamVjdClcbiAgICA/IHBhcnNlKHN0cilcbiAgICA6IG51bGw7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBgRXJyb3JgIHJlcHJlc2VudGF0aXZlIG9mIHRoaXMgcmVzcG9uc2UuXG4gKlxuICogQHJldHVybiB7RXJyb3J9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlc3BvbnNlLnByb3RvdHlwZS50b0Vycm9yID0gZnVuY3Rpb24oKXtcbiAgdmFyIHJlcSA9IHRoaXMucmVxO1xuICB2YXIgbWV0aG9kID0gcmVxLm1ldGhvZDtcbiAgdmFyIHVybCA9IHJlcS51cmw7XG5cbiAgdmFyIG1zZyA9ICdjYW5ub3QgJyArIG1ldGhvZCArICcgJyArIHVybCArICcgKCcgKyB0aGlzLnN0YXR1cyArICcpJztcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSBtZXRob2Q7XG4gIGVyci51cmwgPSB1cmw7XG5cbiAgcmV0dXJuIGVycjtcbn07XG5cbi8qKlxuICogRXhwb3NlIGBSZXNwb25zZWAuXG4gKi9cblxucmVxdWVzdC5SZXNwb25zZSA9IFJlc3BvbnNlO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYFJlcXVlc3RgIHdpdGggdGhlIGdpdmVuIGBtZXRob2RgIGFuZCBgdXJsYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFJlcXVlc3QobWV0aG9kLCB1cmwpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9xdWVyeSA9IHRoaXMuX3F1ZXJ5IHx8IFtdO1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcbiAgdGhpcy51cmwgPSB1cmw7XG4gIHRoaXMuaGVhZGVyID0ge307IC8vIHByZXNlcnZlcyBoZWFkZXIgbmFtZSBjYXNlXG4gIHRoaXMuX2hlYWRlciA9IHt9OyAvLyBjb2VyY2VzIGhlYWRlciBuYW1lcyB0byBsb3dlcmNhc2VcbiAgdGhpcy5vbignZW5kJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgZXJyID0gbnVsbDtcbiAgICB2YXIgcmVzID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXMgPSBuZXcgUmVzcG9uc2Uoc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlcnIgPSBuZXcgRXJyb3IoJ1BhcnNlciBpcyB1bmFibGUgdG8gcGFyc2UgdGhlIHJlc3BvbnNlJyk7XG4gICAgICBlcnIucGFyc2UgPSB0cnVlO1xuICAgICAgZXJyLm9yaWdpbmFsID0gZTtcbiAgICAgIC8vIGlzc3VlICM2NzU6IHJldHVybiB0aGUgcmF3IHJlc3BvbnNlIGlmIHRoZSByZXNwb25zZSBwYXJzaW5nIGZhaWxzXG4gICAgICBpZiAoc2VsZi54aHIpIHtcbiAgICAgICAgLy8gaWU5IGRvZXNuJ3QgaGF2ZSAncmVzcG9uc2UnIHByb3BlcnR5XG4gICAgICAgIGVyci5yYXdSZXNwb25zZSA9IHR5cGVvZiBzZWxmLnhoci5yZXNwb25zZVR5cGUgPT0gJ3VuZGVmaW5lZCcgPyBzZWxmLnhoci5yZXNwb25zZVRleHQgOiBzZWxmLnhoci5yZXNwb25zZTtcbiAgICAgICAgLy8gaXNzdWUgIzg3NjogcmV0dXJuIHRoZSBodHRwIHN0YXR1cyBjb2RlIGlmIHRoZSByZXNwb25zZSBwYXJzaW5nIGZhaWxzXG4gICAgICAgIGVyci5zdGF0dXMgPSBzZWxmLnhoci5zdGF0dXMgPyBzZWxmLnhoci5zdGF0dXMgOiBudWxsO1xuICAgICAgICBlcnIuc3RhdHVzQ29kZSA9IGVyci5zdGF0dXM7IC8vIGJhY2t3YXJkcy1jb21wYXQgb25seVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyLnJhd1Jlc3BvbnNlID0gbnVsbDtcbiAgICAgICAgZXJyLnN0YXR1cyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxmLmNhbGxiYWNrKGVycik7XG4gICAgfVxuXG4gICAgc2VsZi5lbWl0KCdyZXNwb25zZScsIHJlcyk7XG5cbiAgICB2YXIgbmV3X2VycjtcbiAgICB0cnkge1xuICAgICAgaWYgKCFzZWxmLl9pc1Jlc3BvbnNlT0socmVzKSkge1xuICAgICAgICBuZXdfZXJyID0gbmV3IEVycm9yKHJlcy5zdGF0dXNUZXh0IHx8ICdVbnN1Y2Nlc3NmdWwgSFRUUCByZXNwb25zZScpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goY3VzdG9tX2Vycikge1xuICAgICAgbmV3X2VyciA9IGN1c3RvbV9lcnI7IC8vIG9rKCkgY2FsbGJhY2sgY2FuIHRocm93XG4gICAgfVxuXG4gICAgLy8gIzEwMDAgZG9uJ3QgY2F0Y2ggZXJyb3JzIGZyb20gdGhlIGNhbGxiYWNrIHRvIGF2b2lkIGRvdWJsZSBjYWxsaW5nIGl0XG4gICAgaWYgKG5ld19lcnIpIHtcbiAgICAgIG5ld19lcnIub3JpZ2luYWwgPSBlcnI7XG4gICAgICBuZXdfZXJyLnJlc3BvbnNlID0gcmVzO1xuICAgICAgbmV3X2Vyci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuICAgICAgc2VsZi5jYWxsYmFjayhuZXdfZXJyLCByZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmNhbGxiYWNrKG51bGwsIHJlcyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBNaXhpbiBgRW1pdHRlcmAgYW5kIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5SZXF1ZXN0QmFzZShSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogU2V0IENvbnRlbnQtVHlwZSB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy54bWwgPSAnYXBwbGljYXRpb24veG1sJztcbiAqXG4gKiAgICAgIHJlcXVlc3QucG9zdCgnLycpXG4gKiAgICAgICAgLnR5cGUoJ3htbCcpXG4gKiAgICAgICAgLnNlbmQoeG1sc3RyaW5nKVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvJylcbiAqICAgICAgICAudHlwZSgnYXBwbGljYXRpb24veG1sJylcbiAqICAgICAgICAuc2VuZCh4bWxzdHJpbmcpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS50eXBlID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdDb250ZW50LVR5cGUnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEFjY2VwdCB0byBgdHlwZWAsIG1hcHBpbmcgdmFsdWVzIGZyb20gYHJlcXVlc3QudHlwZXNgLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgc3VwZXJhZ2VudC50eXBlcy5qc29uID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICpcbiAqICAgICAgcmVxdWVzdC5nZXQoJy9hZ2VudCcpXG4gKiAgICAgICAgLmFjY2VwdCgnanNvbicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXF1ZXN0LmdldCgnL2FnZW50JylcbiAqICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWNjZXB0XG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24odHlwZSl7XG4gIHRoaXMuc2V0KCdBY2NlcHQnLCByZXF1ZXN0LnR5cGVzW3R5cGVdIHx8IHR5cGUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IEF1dGhvcml6YXRpb24gZmllbGQgdmFsdWUgd2l0aCBgdXNlcmAgYW5kIGBwYXNzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXNlclxuICogQHBhcmFtIHtTdHJpbmd9IFtwYXNzXSBvcHRpb25hbCBpbiBjYXNlIG9mIHVzaW5nICdiZWFyZXInIGFzIHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHdpdGggJ3R5cGUnIHByb3BlcnR5ICdhdXRvJywgJ2Jhc2ljJyBvciAnYmVhcmVyJyAoZGVmYXVsdCAnYmFzaWMnKVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmF1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzLCBvcHRpb25zKXtcbiAgaWYgKDEgPT09IGFyZ3VtZW50cy5sZW5ndGgpIHBhc3MgPSAnJztcbiAgaWYgKHR5cGVvZiBwYXNzID09PSAnb2JqZWN0JyAmJiBwYXNzICE9PSBudWxsKSB7IC8vIHBhc3MgaXMgb3B0aW9uYWwgYW5kIGNhbiBiZSByZXBsYWNlZCB3aXRoIG9wdGlvbnNcbiAgICBvcHRpb25zID0gcGFzcztcbiAgICBwYXNzID0gJyc7XG4gIH1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6ICdmdW5jdGlvbicgPT09IHR5cGVvZiBidG9hID8gJ2Jhc2ljJyA6ICdhdXRvJyxcbiAgICB9O1xuICB9XG5cbiAgdmFyIGVuY29kZXIgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGJ0b2EpIHtcbiAgICAgIHJldHVybiBidG9hKHN0cmluZyk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBiYXNpYyBhdXRoLCBidG9hIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH07XG5cbiAgcmV0dXJuIHRoaXMuX2F1dGgodXNlciwgcGFzcywgb3B0aW9ucywgZW5jb2Rlcik7XG59O1xuXG4vKipcbiAqIEFkZCBxdWVyeS1zdHJpbmcgYHZhbGAuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICByZXF1ZXN0LmdldCgnL3Nob2VzJylcbiAqICAgICAucXVlcnkoJ3NpemU9MTAnKVxuICogICAgIC5xdWVyeSh7IGNvbG9yOiAnYmx1ZScgfSlcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24odmFsKXtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiB2YWwpIHZhbCA9IHNlcmlhbGl6ZSh2YWwpO1xuICBpZiAodmFsKSB0aGlzLl9xdWVyeS5wdXNoKHZhbCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBRdWV1ZSB0aGUgZ2l2ZW4gYGZpbGVgIGFzIGFuIGF0dGFjaG1lbnQgdG8gdGhlIHNwZWNpZmllZCBgZmllbGRgLFxuICogd2l0aCBvcHRpb25hbCBgb3B0aW9uc2AgKG9yIGZpbGVuYW1lKS5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5hdHRhY2goJ2NvbnRlbnQnLCBuZXcgQmxvYihbJzxhIGlkPVwiYVwiPjxiIGlkPVwiYlwiPmhleSE8L2I+PC9hPiddLCB7IHR5cGU6IFwidGV4dC9odG1sXCJ9KSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqIEBwYXJhbSB7QmxvYnxGaWxlfSBmaWxlXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hdHRhY2ggPSBmdW5jdGlvbihmaWVsZCwgZmlsZSwgb3B0aW9ucyl7XG4gIGlmIChmaWxlKSB7XG4gICAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICAgIHRocm93IEVycm9yKFwic3VwZXJhZ2VudCBjYW4ndCBtaXggLnNlbmQoKSBhbmQgLmF0dGFjaCgpXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2dldEZvcm1EYXRhKCkuYXBwZW5kKGZpZWxkLCBmaWxlLCBvcHRpb25zIHx8IGZpbGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5fZ2V0Rm9ybURhdGEgPSBmdW5jdGlvbigpe1xuICBpZiAoIXRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgdGhpcy5fZm9ybURhdGEgPSBuZXcgcm9vdC5Gb3JtRGF0YSgpO1xuICB9XG4gIHJldHVybiB0aGlzLl9mb3JtRGF0YTtcbn07XG5cbi8qKlxuICogSW52b2tlIHRoZSBjYWxsYmFjayB3aXRoIGBlcnJgIGFuZCBgcmVzYFxuICogYW5kIGhhbmRsZSBhcml0eSBjaGVjay5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7UmVzcG9uc2V9IHJlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2FsbGJhY2sgPSBmdW5jdGlvbihlcnIsIHJlcyl7XG4gIGlmICh0aGlzLl9zaG91bGRSZXRyeShlcnIsIHJlcykpIHtcbiAgICByZXR1cm4gdGhpcy5fcmV0cnkoKTtcbiAgfVxuXG4gIHZhciBmbiA9IHRoaXMuX2NhbGxiYWNrO1xuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuXG4gIGlmIChlcnIpIHtcbiAgICBpZiAodGhpcy5fbWF4UmV0cmllcykgZXJyLnJldHJpZXMgPSB0aGlzLl9yZXRyaWVzIC0gMTtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxuXG4gIGZuKGVyciwgcmVzKTtcbn07XG5cbi8qKlxuICogSW52b2tlIGNhbGxiYWNrIHdpdGggeC1kb21haW4gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3Jvc3NEb21haW5FcnJvciA9IGZ1bmN0aW9uKCl7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1JlcXVlc3QgaGFzIGJlZW4gdGVybWluYXRlZFxcblBvc3NpYmxlIGNhdXNlczogdGhlIG5ldHdvcmsgaXMgb2ZmbGluZSwgT3JpZ2luIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbiwgdGhlIHBhZ2UgaXMgYmVpbmcgdW5sb2FkZWQsIGV0Yy4nKTtcbiAgZXJyLmNyb3NzRG9tYWluID0gdHJ1ZTtcblxuICBlcnIuc3RhdHVzID0gdGhpcy5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSB0aGlzLm1ldGhvZDtcbiAgZXJyLnVybCA9IHRoaXMudXJsO1xuXG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cbi8vIFRoaXMgb25seSB3YXJucywgYmVjYXVzZSB0aGUgcmVxdWVzdCBpcyBzdGlsbCBsaWtlbHkgdG8gd29ya1xuUmVxdWVzdC5wcm90b3R5cGUuYnVmZmVyID0gUmVxdWVzdC5wcm90b3R5cGUuY2EgPSBSZXF1ZXN0LnByb3RvdHlwZS5hZ2VudCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUud2FybihcIlRoaXMgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudFwiKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBUaGlzIHRocm93cywgYmVjYXVzZSBpdCBjYW4ndCBzZW5kL3JlY2VpdmUgZGF0YSBhcyBleHBlY3RlZFxuUmVxdWVzdC5wcm90b3R5cGUucGlwZSA9IFJlcXVlc3QucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24oKXtcbiAgdGhyb3cgRXJyb3IoXCJTdHJlYW1pbmcgaXMgbm90IHN1cHBvcnRlZCBpbiBicm93c2VyIHZlcnNpb24gb2Ygc3VwZXJhZ2VudFwiKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBob3N0IG9iamVjdCxcbiAqIHdlIGRvbid0IHdhbnQgdG8gc2VyaWFsaXplIHRoZXNlIDopXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0LnByb3RvdHlwZS5faXNIb3N0ID0gZnVuY3Rpb24gX2lzSG9zdChvYmopIHtcbiAgLy8gTmF0aXZlIG9iamVjdHMgc3RyaW5naWZ5IHRvIFtvYmplY3QgRmlsZV0sIFtvYmplY3QgQmxvYl0sIFtvYmplY3QgRm9ybURhdGFdLCBldGMuXG4gIHJldHVybiBvYmogJiYgJ29iamVjdCcgPT09IHR5cGVvZiBvYmogJiYgIUFycmF5LmlzQXJyYXkob2JqKSAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbi8qKlxuICogSW5pdGlhdGUgcmVxdWVzdCwgaW52b2tpbmcgY2FsbGJhY2sgYGZuKHJlcylgXG4gKiB3aXRoIGFuIGluc3RhbmNlb2YgYFJlc3BvbnNlYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGZuKXtcbiAgaWYgKHRoaXMuX2VuZENhbGxlZCkge1xuICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IC5lbmQoKSB3YXMgY2FsbGVkIHR3aWNlLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gc3VwZXJhZ2VudFwiKTtcbiAgfVxuICB0aGlzLl9lbmRDYWxsZWQgPSB0cnVlO1xuXG4gIC8vIHN0b3JlIGNhbGxiYWNrXG4gIHRoaXMuX2NhbGxiYWNrID0gZm4gfHwgbm9vcDtcblxuICAvLyBxdWVyeXN0cmluZ1xuICB0aGlzLl9maW5hbGl6ZVF1ZXJ5U3RyaW5nKCk7XG5cbiAgcmV0dXJuIHRoaXMuX2VuZCgpO1xufTtcblxuUmVxdWVzdC5wcm90b3R5cGUuX2VuZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB4aHIgPSAodGhpcy54aHIgPSByZXF1ZXN0LmdldFhIUigpKTtcbiAgdmFyIGRhdGEgPSB0aGlzLl9mb3JtRGF0YSB8fCB0aGlzLl9kYXRhO1xuXG4gIHRoaXMuX3NldFRpbWVvdXRzKCk7XG5cbiAgLy8gc3RhdGUgY2hhbmdlXG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgIHZhciByZWFkeVN0YXRlID0geGhyLnJlYWR5U3RhdGU7XG4gICAgaWYgKHJlYWR5U3RhdGUgPj0gMiAmJiBzZWxmLl9yZXNwb25zZVRpbWVvdXRUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3Jlc3BvbnNlVGltZW91dFRpbWVyKTtcbiAgICB9XG4gICAgaWYgKDQgIT0gcmVhZHlTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIElFOSwgcmVhZHMgdG8gYW55IHByb3BlcnR5IChlLmcuIHN0YXR1cykgb2ZmIG9mIGFuIGFib3J0ZWQgWEhSIHdpbGxcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVycm9yIFwiQ291bGQgbm90IGNvbXBsZXRlIHRoZSBvcGVyYXRpb24gZHVlIHRvIGVycm9yIGMwMGMwMjNmXCJcbiAgICB2YXIgc3RhdHVzO1xuICAgIHRyeSB7IHN0YXR1cyA9IHhoci5zdGF0dXMgfSBjYXRjaChlKSB7IHN0YXR1cyA9IDA7IH1cblxuICAgIGlmICghc3RhdHVzKSB7XG4gICAgICBpZiAoc2VsZi50aW1lZG91dCB8fCBzZWxmLl9hYm9ydGVkKSByZXR1cm47XG4gICAgICByZXR1cm4gc2VsZi5jcm9zc0RvbWFpbkVycm9yKCk7XG4gICAgfVxuICAgIHNlbGYuZW1pdCgnZW5kJyk7XG4gIH07XG5cbiAgLy8gcHJvZ3Jlc3NcbiAgdmFyIGhhbmRsZVByb2dyZXNzID0gZnVuY3Rpb24oZGlyZWN0aW9uLCBlKSB7XG4gICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgfVxuICAgIGUuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHNlbGYuZW1pdCgncHJvZ3Jlc3MnLCBlKTtcbiAgfTtcbiAgaWYgKHRoaXMuaGFzTGlzdGVuZXJzKCdwcm9ncmVzcycpKSB7XG4gICAgdHJ5IHtcbiAgICAgIHhoci5vbnByb2dyZXNzID0gaGFuZGxlUHJvZ3Jlc3MuYmluZChudWxsLCAnZG93bmxvYWQnKTtcbiAgICAgIGlmICh4aHIudXBsb2FkKSB7XG4gICAgICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGhhbmRsZVByb2dyZXNzLmJpbmQobnVsbCwgJ3VwbG9hZCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgLy8gQWNjZXNzaW5nIHhoci51cGxvYWQgZmFpbHMgaW4gSUUgZnJvbSBhIHdlYiB3b3JrZXIsIHNvIGp1c3QgcHJldGVuZCBpdCBkb2Vzbid0IGV4aXN0LlxuICAgICAgLy8gUmVwb3J0ZWQgaGVyZTpcbiAgICAgIC8vIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvODM3MjQ1L3htbGh0dHByZXF1ZXN0LXVwbG9hZC10aHJvd3MtaW52YWxpZC1hcmd1bWVudC13aGVuLXVzZWQtZnJvbS13ZWItd29ya2VyLWNvbnRleHRcbiAgICB9XG4gIH1cblxuICAvLyBpbml0aWF0ZSByZXF1ZXN0XG4gIHRyeSB7XG4gICAgaWYgKHRoaXMudXNlcm5hbWUgJiYgdGhpcy5wYXNzd29yZCkge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlLCB0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0cnVlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIHNlZSAjMTE0OVxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGVycik7XG4gIH1cblxuICAvLyBDT1JTXG4gIGlmICh0aGlzLl93aXRoQ3JlZGVudGlhbHMpIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gIC8vIGJvZHlcbiAgaWYgKCF0aGlzLl9mb3JtRGF0YSAmJiAnR0VUJyAhPSB0aGlzLm1ldGhvZCAmJiAnSEVBRCcgIT0gdGhpcy5tZXRob2QgJiYgJ3N0cmluZycgIT0gdHlwZW9mIGRhdGEgJiYgIXRoaXMuX2lzSG9zdChkYXRhKSkge1xuICAgIC8vIHNlcmlhbGl6ZSBzdHVmZlxuICAgIHZhciBjb250ZW50VHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG4gICAgdmFyIHNlcmlhbGl6ZSA9IHRoaXMuX3NlcmlhbGl6ZXIgfHwgcmVxdWVzdC5zZXJpYWxpemVbY29udGVudFR5cGUgPyBjb250ZW50VHlwZS5zcGxpdCgnOycpWzBdIDogJyddO1xuICAgIGlmICghc2VyaWFsaXplICYmIGlzSlNPTihjb250ZW50VHlwZSkpIHtcbiAgICAgIHNlcmlhbGl6ZSA9IHJlcXVlc3Quc2VyaWFsaXplWydhcHBsaWNhdGlvbi9qc29uJ107XG4gICAgfVxuICAgIGlmIChzZXJpYWxpemUpIGRhdGEgPSBzZXJpYWxpemUoZGF0YSk7XG4gIH1cblxuICAvLyBzZXQgaGVhZGVyIGZpZWxkc1xuICBmb3IgKHZhciBmaWVsZCBpbiB0aGlzLmhlYWRlcikge1xuICAgIGlmIChudWxsID09IHRoaXMuaGVhZGVyW2ZpZWxkXSkgY29udGludWU7XG5cbiAgICBpZiAodGhpcy5oZWFkZXIuaGFzT3duUHJvcGVydHkoZmllbGQpKVxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoZmllbGQsIHRoaXMuaGVhZGVyW2ZpZWxkXSk7XG4gIH1cblxuICBpZiAodGhpcy5fcmVzcG9uc2VUeXBlKSB7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMuX3Jlc3BvbnNlVHlwZTtcbiAgfVxuXG4gIC8vIHNlbmQgc3R1ZmZcbiAgdGhpcy5lbWl0KCdyZXF1ZXN0JywgdGhpcyk7XG5cbiAgLy8gSUUxMSB4aHIuc2VuZCh1bmRlZmluZWQpIHNlbmRzICd1bmRlZmluZWQnIHN0cmluZyBhcyBQT1NUIHBheWxvYWQgKGluc3RlYWQgb2Ygbm90aGluZylcbiAgLy8gV2UgbmVlZCBudWxsIGhlcmUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgeGhyLnNlbmQodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnID8gZGF0YSA6IG51bGwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbnJlcXVlc3QuYWdlbnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBBZ2VudCgpO1xufTtcblxuW1wiR0VUXCIsIFwiUE9TVFwiLCBcIk9QVElPTlNcIiwgXCJQQVRDSFwiLCBcIlBVVFwiLCBcIkRFTEVURVwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICBBZ2VudC5wcm90b3R5cGVbbWV0aG9kLnRvTG93ZXJDYXNlKCldID0gZnVuY3Rpb24odXJsLCBmbikge1xuICAgIHZhciByZXEgPSBuZXcgcmVxdWVzdC5SZXF1ZXN0KG1ldGhvZCwgdXJsKTtcbiAgICB0aGlzLl9zZXREZWZhdWx0cyhyZXEpO1xuICAgIGlmIChmbikge1xuICAgICAgcmVxLmVuZChmbik7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG4gIH07XG59KTtcblxuQWdlbnQucHJvdG90eXBlLmRlbCA9IEFnZW50LnByb3RvdHlwZVsnZGVsZXRlJ107XG5cbi8qKlxuICogR0VUIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5nZXQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdHRVQnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEucXVlcnkoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIEhFQUQgYHVybGAgd2l0aCBvcHRpb25hbCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LmhlYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdIRUFEJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnF1ZXJ5KGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBPUFRJT05TIHF1ZXJ5IHRvIGB1cmxgIHdpdGggb3B0aW9uYWwgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR8RnVuY3Rpb259IFtkYXRhXSBvciBmblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5vcHRpb25zID0gZnVuY3Rpb24odXJsLCBkYXRhLCBmbikge1xuICB2YXIgcmVxID0gcmVxdWVzdCgnT1BUSU9OUycsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuLyoqXG4gKiBERUxFVEUgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlbCh1cmwsIGRhdGEsIGZuKSB7XG4gIHZhciByZXEgPSByZXF1ZXN0KCdERUxFVEUnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn1cblxucmVxdWVzdFsnZGVsJ10gPSBkZWw7XG5yZXF1ZXN0WydkZWxldGUnXSA9IGRlbDtcblxuLyoqXG4gKiBQQVRDSCBgdXJsYCB3aXRoIG9wdGlvbmFsIGBkYXRhYCBhbmQgY2FsbGJhY2sgYGZuKHJlcylgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7TWl4ZWR9IFtkYXRhXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucmVxdWVzdC5wYXRjaCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BBVENIJywgdXJsKTtcbiAgaWYgKCdmdW5jdGlvbicgPT0gdHlwZW9mIGRhdGEpIChmbiA9IGRhdGEpLCAoZGF0YSA9IG51bGwpO1xuICBpZiAoZGF0YSkgcmVxLnNlbmQoZGF0YSk7XG4gIGlmIChmbikgcmVxLmVuZChmbik7XG4gIHJldHVybiByZXE7XG59O1xuXG4vKipcbiAqIFBPU1QgYHVybGAgd2l0aCBvcHRpb25hbCBgZGF0YWAgYW5kIGNhbGxiYWNrIGBmbihyZXMpYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge01peGVkfSBbZGF0YV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtmbl1cbiAqIEByZXR1cm4ge1JlcXVlc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnJlcXVlc3QucG9zdCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BPU1QnLCB1cmwpO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgZGF0YSkgKGZuID0gZGF0YSksIChkYXRhID0gbnVsbCk7XG4gIGlmIChkYXRhKSByZXEuc2VuZChkYXRhKTtcbiAgaWYgKGZuKSByZXEuZW5kKGZuKTtcbiAgcmV0dXJuIHJlcTtcbn07XG5cbi8qKlxuICogUFVUIGB1cmxgIHdpdGggb3B0aW9uYWwgYGRhdGFgIGFuZCBjYWxsYmFjayBgZm4ocmVzKWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtNaXhlZHxGdW5jdGlvbn0gW2RhdGFdIG9yIGZuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZm5dXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5yZXF1ZXN0LnB1dCA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgZm4pIHtcbiAgdmFyIHJlcSA9IHJlcXVlc3QoJ1BVVCcsIHVybCk7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBkYXRhKSAoZm4gPSBkYXRhKSwgKGRhdGEgPSBudWxsKTtcbiAgaWYgKGRhdGEpIHJlcS5zZW5kKGRhdGEpO1xuICBpZiAoZm4pIHJlcS5lbmQoZm4pO1xuICByZXR1cm4gcmVxO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3VwZXJhZ2VudC9saWIvY2xpZW50LmpzIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgb2YgbWl4ZWQtaW4gZnVuY3Rpb25zIHNoYXJlZCBiZXR3ZWVuIG5vZGUgYW5kIGNsaWVudCBjb2RlXG4gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXMtb2JqZWN0Jyk7XG5cbi8qKlxuICogRXhwb3NlIGBSZXF1ZXN0QmFzZWAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0QmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXF1ZXN0QmFzZWAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0QmFzZShvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59XG5cbi8qKlxuICogTWl4aW4gdGhlIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gUmVxdWVzdEJhc2UucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENsZWFyIHByZXZpb3VzIHRpbWVvdXQuXG4gKlxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiBfY2xlYXJUaW1lb3V0KCl7XG4gIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gIGNsZWFyVGltZW91dCh0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lcik7XG4gIGRlbGV0ZSB0aGlzLl90aW1lcjtcbiAgZGVsZXRlIHRoaXMuX3Jlc3BvbnNlVGltZW91dFRpbWVyO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgZGVmYXVsdCByZXNwb25zZSBib2R5IHBhcnNlclxuICpcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgdG8gY29udmVydCBpbmNvbWluZyBkYXRhIGludG8gcmVxdWVzdC5ib2R5XG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UoZm4pe1xuICB0aGlzLl9wYXJzZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBmb3JtYXQgb2YgYmluYXJ5IHJlc3BvbnNlIGJvZHkuXG4gKiBJbiBicm93c2VyIHZhbGlkIGZvcm1hdHMgYXJlICdibG9iJyBhbmQgJ2FycmF5YnVmZmVyJyxcbiAqIHdoaWNoIHJldHVybiBCbG9iIGFuZCBBcnJheUJ1ZmZlciwgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIEluIE5vZGUgYWxsIHZhbHVlcyByZXN1bHQgaW4gQnVmZmVyLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnJlc3BvbnNlVHlwZSgnYmxvYicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXNwb25zZVR5cGUgPSBmdW5jdGlvbih2YWwpe1xuICB0aGlzLl9yZXNwb25zZVR5cGUgPSB2YWw7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IHJlcXVlc3QgYm9keSBzZXJpYWxpemVyXG4gKlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB0byBjb252ZXJ0IGRhdGEgc2V0IHZpYSAuc2VuZCBvciAuYXR0YWNoIGludG8gcGF5bG9hZCB0byBzZW5kXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShmbil7XG4gIHRoaXMuX3NlcmlhbGl6ZXIgPSBmbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCB0aW1lb3V0cy5cbiAqXG4gKiAtIHJlc3BvbnNlIHRpbWVvdXQgaXMgdGltZSBiZXR3ZWVuIHNlbmRpbmcgcmVxdWVzdCBhbmQgcmVjZWl2aW5nIHRoZSBmaXJzdCBieXRlIG9mIHRoZSByZXNwb25zZS4gSW5jbHVkZXMgRE5TIGFuZCBjb25uZWN0aW9uIHRpbWUuXG4gKiAtIGRlYWRsaW5lIGlzIHRoZSB0aW1lIGZyb20gc3RhcnQgb2YgdGhlIHJlcXVlc3QgdG8gcmVjZWl2aW5nIHJlc3BvbnNlIGJvZHkgaW4gZnVsbC4gSWYgdGhlIGRlYWRsaW5lIGlzIHRvbyBzaG9ydCBsYXJnZSBmaWxlcyBtYXkgbm90IGxvYWQgYXQgYWxsIG9uIHNsb3cgY29ubmVjdGlvbnMuXG4gKlxuICogVmFsdWUgb2YgMCBvciBmYWxzZSBtZWFucyBubyB0aW1lb3V0LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gbXMgb3Ige3Jlc3BvbnNlLCBkZWFkbGluZX1cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uIHRpbWVvdXQob3B0aW9ucyl7XG4gIGlmICghb3B0aW9ucyB8fCAnb2JqZWN0JyAhPT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gb3B0aW9ucztcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSAwO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZm9yKHZhciBvcHRpb24gaW4gb3B0aW9ucykge1xuICAgIHN3aXRjaChvcHRpb24pIHtcbiAgICAgIGNhc2UgJ2RlYWRsaW5lJzpcbiAgICAgICAgdGhpcy5fdGltZW91dCA9IG9wdGlvbnMuZGVhZGxpbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXQgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gdGltZW91dCBvcHRpb25cIiwgb3B0aW9uKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldCBudW1iZXIgb2YgcmV0cnkgYXR0ZW1wdHMgb24gZXJyb3IuXG4gKlxuICogRmFpbGVkIHJlcXVlc3RzIHdpbGwgYmUgcmV0cmllZCAnY291bnQnIHRpbWVzIGlmIHRpbWVvdXQgb3IgZXJyLmNvZGUgPj0gNTAwLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2ZuXVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5yZXRyeSA9IGZ1bmN0aW9uIHJldHJ5KGNvdW50LCBmbil7XG4gIC8vIERlZmF1bHQgdG8gMSBpZiBubyBjb3VudCBwYXNzZWQgb3IgdHJ1ZVxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBjb3VudCA9PT0gdHJ1ZSkgY291bnQgPSAxO1xuICBpZiAoY291bnQgPD0gMCkgY291bnQgPSAwO1xuICB0aGlzLl9tYXhSZXRyaWVzID0gY291bnQ7XG4gIHRoaXMuX3JldHJpZXMgPSAwO1xuICB0aGlzLl9yZXRyeUNhbGxiYWNrID0gZm47XG4gIHJldHVybiB0aGlzO1xufTtcblxudmFyIEVSUk9SX0NPREVTID0gW1xuICAnRUNPTk5SRVNFVCcsXG4gICdFVElNRURPVVQnLFxuICAnRUFERFJJTkZPJyxcbiAgJ0VTT0NLRVRUSU1FRE9VVCdcbl07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgcmVxdWVzdCBzaG91bGQgYmUgcmV0cmllZC5cbiAqIChCb3Jyb3dlZCBmcm9tIHNlZ21lbnRpby9zdXBlcmFnZW50LXJldHJ5KVxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtSZXNwb25zZX0gW3Jlc11cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX3Nob3VsZFJldHJ5ID0gZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgaWYgKCF0aGlzLl9tYXhSZXRyaWVzIHx8IHRoaXMuX3JldHJpZXMrKyA+PSB0aGlzLl9tYXhSZXRyaWVzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLl9yZXRyeUNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvdmVycmlkZSA9IHRoaXMuX3JldHJ5Q2FsbGJhY2soZXJyLCByZXMpO1xuICAgICAgaWYgKG92ZXJyaWRlID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmIChvdmVycmlkZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIC8vIHVuZGVmaW5lZCBmYWxscyBiYWNrIHRvIGRlZmF1bHRzXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAocmVzICYmIHJlcy5zdGF0dXMgJiYgcmVzLnN0YXR1cyA+PSA1MDAgJiYgcmVzLnN0YXR1cyAhPSA1MDEpIHJldHVybiB0cnVlO1xuICBpZiAoZXJyKSB7XG4gICAgaWYgKGVyci5jb2RlICYmIH5FUlJPUl9DT0RFUy5pbmRleE9mKGVyci5jb2RlKSkgcmV0dXJuIHRydWU7XG4gICAgLy8gU3VwZXJhZ2VudCB0aW1lb3V0XG4gICAgaWYgKGVyci50aW1lb3V0ICYmIGVyci5jb2RlID09ICdFQ09OTkFCT1JURUQnKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoZXJyLmNyb3NzRG9tYWluKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHJ5IHJlcXVlc3RcbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fcmV0cnkgPSBmdW5jdGlvbigpIHtcblxuICB0aGlzLmNsZWFyVGltZW91dCgpO1xuXG4gIC8vIG5vZGVcbiAgaWYgKHRoaXMucmVxKSB7XG4gICAgdGhpcy5yZXEgPSBudWxsO1xuICAgIHRoaXMucmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIH1cblxuICB0aGlzLl9hYm9ydGVkID0gZmFsc2U7XG4gIHRoaXMudGltZWRvdXQgPSBmYWxzZTtcblxuICByZXR1cm4gdGhpcy5fZW5kKCk7XG59O1xuXG4vKipcbiAqIFByb21pc2Ugc3VwcG9ydFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZWplY3RdXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gdGhlbihyZXNvbHZlLCByZWplY3QpIHtcbiAgaWYgKCF0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodGhpcy5fZW5kQ2FsbGVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBzdXBlcmFnZW50IHJlcXVlc3Qgd2FzIHNlbnQgdHdpY2UsIGJlY2F1c2UgYm90aCAuZW5kKCkgYW5kIC50aGVuKCkgd2VyZSBjYWxsZWQuIE5ldmVyIGNhbGwgLmVuZCgpIGlmIHlvdSB1c2UgcHJvbWlzZXNcIik7XG4gICAgfVxuICAgIHRoaXMuX2Z1bGxmaWxsZWRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oaW5uZXJSZXNvbHZlLCBpbm5lclJlamVjdCkge1xuICAgICAgc2VsZi5lbmQoZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgaWYgKGVycikgaW5uZXJSZWplY3QoZXJyKTtcbiAgICAgICAgZWxzZSBpbm5lclJlc29sdmUocmVzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiB0aGlzLl9mdWxsZmlsbGVkUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGVbJ2NhdGNoJ10gPSBmdW5jdGlvbihjYikge1xuICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgY2IpO1xufTtcblxuLyoqXG4gKiBBbGxvdyBmb3IgZXh0ZW5zaW9uXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmbikge1xuICBmbih0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUub2sgPSBmdW5jdGlvbihjYikge1xuICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNiKSB0aHJvdyBFcnJvcihcIkNhbGxiYWNrIHJlcXVpcmVkXCIpO1xuICB0aGlzLl9va0NhbGxiYWNrID0gY2I7XG4gIHJldHVybiB0aGlzO1xufTtcblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl9pc1Jlc3BvbnNlT0sgPSBmdW5jdGlvbihyZXMpIHtcbiAgaWYgKCFyZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5fb2tDYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLl9va0NhbGxiYWNrKHJlcyk7XG4gIH1cblxuICByZXR1cm4gcmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMDtcbn07XG5cbi8qKlxuICogR2V0IHJlcXVlc3QgaGVhZGVyIGBmaWVsZGAuXG4gKiBDYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICByZXR1cm4gdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xufTtcblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBoZWFkZXIgYGZpZWxkYCB2YWx1ZS5cbiAqIFRoaXMgaXMgYSBkZXByZWNhdGVkIGludGVybmFsIEFQSS4gVXNlIGAuZ2V0KGZpZWxkKWAgaW5zdGVhZC5cbiAqXG4gKiAoZ2V0SGVhZGVyIGlzIG5vIGxvbmdlciB1c2VkIGludGVybmFsbHkgYnkgdGhlIHN1cGVyYWdlbnQgY29kZSBiYXNlKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKiBAZGVwcmVjYXRlZFxuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5nZXRIZWFkZXIgPSBSZXF1ZXN0QmFzZS5wcm90b3R5cGUuZ2V0O1xuXG4vKipcbiAqIFNldCBoZWFkZXIgYGZpZWxkYCB0byBgdmFsYCwgb3IgbXVsdGlwbGUgZmllbGRzIHdpdGggb25lIG9iamVjdC5cbiAqIENhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpXG4gKiAgICAgICAgLnNldCgnWC1BUEktS2V5JywgJ2Zvb2JhcicpXG4gKiAgICAgICAgLmVuZChjYWxsYmFjayk7XG4gKlxuICogICAgICByZXEuZ2V0KCcvJylcbiAqICAgICAgICAuc2V0KHsgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsICdYLUFQSS1LZXknOiAnZm9vYmFyJyB9KVxuICogICAgICAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZmllbGRcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oZmllbGQsIHZhbCl7XG4gIGlmIChpc09iamVjdChmaWVsZCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZmllbGQpIHtcbiAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuX2hlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSA9IHZhbDtcbiAgdGhpcy5oZWFkZXJbZmllbGRdID0gdmFsO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGhlYWRlciBgZmllbGRgLlxuICogQ2FzZS1pbnNlbnNpdGl2ZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAgcmVxLmdldCgnLycpXG4gKiAgICAgICAgLnVuc2V0KCdVc2VyLUFnZW50JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKTtcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24oZmllbGQpe1xuICBkZWxldGUgdGhpcy5faGVhZGVyW2ZpZWxkLnRvTG93ZXJDYXNlKCldO1xuICBkZWxldGUgdGhpcy5oZWFkZXJbZmllbGRdO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogV3JpdGUgdGhlIGZpZWxkIGBuYW1lYCBhbmQgYHZhbGAsIG9yIG11bHRpcGxlIGZpZWxkcyB3aXRoIG9uZSBvYmplY3RcbiAqIGZvciBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiByZXF1ZXN0IGJvZGllcy5cbiAqXG4gKiBgYGAganNcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCgnZm9vJywgJ2JhcicpXG4gKiAgIC5lbmQoY2FsbGJhY2spO1xuICpcbiAqIHJlcXVlc3QucG9zdCgnL3VwbG9hZCcpXG4gKiAgIC5maWVsZCh7IGZvbzogJ2JhcicsIGJhejogJ3F1eCcgfSlcbiAqICAgLmVuZChjYWxsYmFjayk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfEJsb2J8RmlsZXxCdWZmZXJ8ZnMuUmVhZFN0cmVhbX0gdmFsXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fSBmb3IgY2hhaW5pbmdcbiAqIEBhcGkgcHVibGljXG4gKi9cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5maWVsZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAvLyBuYW1lIHNob3VsZCBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LlxuICBpZiAobnVsbCA9PT0gbmFtZSB8fCB1bmRlZmluZWQgPT09IG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJy5maWVsZChuYW1lLCB2YWwpIG5hbWUgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG5cbiAgaWYgKHRoaXMuX2RhdGEpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiLmZpZWxkKCkgY2FuJ3QgYmUgdXNlZCBpZiAuc2VuZCgpIGlzIHVzZWQuIFBsZWFzZSB1c2Ugb25seSAuc2VuZCgpIG9yIG9ubHkgLmZpZWxkKCkgJiAuYXR0YWNoKClcIik7XG4gIH1cblxuICBpZiAoaXNPYmplY3QobmFtZSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgdGhpcy5maWVsZChrZXksIG5hbWVba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIGZvciAodmFyIGkgaW4gdmFsKSB7XG4gICAgICB0aGlzLmZpZWxkKG5hbWUsIHZhbFtpXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmFsIHNob3VsZCBiZSBkZWZpbmVkIG5vd1xuICBpZiAobnVsbCA9PT0gdmFsIHx8IHVuZGVmaW5lZCA9PT0gdmFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCcuZmllbGQobmFtZSwgdmFsKSB2YWwgY2FuIG5vdCBiZSBlbXB0eScpO1xuICB9XG4gIGlmICgnYm9vbGVhbicgPT09IHR5cGVvZiB2YWwpIHtcbiAgICB2YWwgPSAnJyArIHZhbDtcbiAgfVxuICB0aGlzLl9nZXRGb3JtRGF0YSgpLmFwcGVuZChuYW1lLCB2YWwpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWJvcnQgdGhlIHJlcXVlc3QsIGFuZCBjbGVhciBwb3RlbnRpYWwgdGltZW91dC5cbiAqXG4gKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuUmVxdWVzdEJhc2UucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLl9hYm9ydGVkID0gdHJ1ZTtcbiAgdGhpcy54aHIgJiYgdGhpcy54aHIuYWJvcnQoKTsgLy8gYnJvd3NlclxuICB0aGlzLnJlcSAmJiB0aGlzLnJlcS5hYm9ydCgpOyAvLyBub2RlXG4gIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIHRoaXMuZW1pdCgnYWJvcnQnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2F1dGggPSBmdW5jdGlvbih1c2VyLCBwYXNzLCBvcHRpb25zLCBiYXNlNjRFbmNvZGVyKSB7XG4gIHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XG4gICAgY2FzZSAnYmFzaWMnOlxuICAgICAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJhc2U2NEVuY29kZXIodXNlciArICc6JyArIHBhc3MpKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnYXV0byc6XG4gICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcjtcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdiZWFyZXInOiAvLyB1c2FnZSB3b3VsZCBiZSAuYXV0aChhY2Nlc3NUb2tlbiwgeyB0eXBlOiAnYmVhcmVyJyB9KVxuICAgICAgdGhpcy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB1c2VyKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgdHJhbnNtaXNzaW9uIG9mIGNvb2tpZXMgd2l0aCB4LWRvbWFpbiByZXF1ZXN0cy5cbiAqXG4gKiBOb3RlIHRoYXQgZm9yIHRoaXMgdG8gd29yayB0aGUgb3JpZ2luIG11c3Qgbm90IGJlXG4gKiB1c2luZyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiIHdpdGggYSB3aWxkY2FyZCxcbiAqIGFuZCBhbHNvIG11c3Qgc2V0IFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIlxuICogdG8gXCJ0cnVlXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gZnVuY3Rpb24ob24pIHtcbiAgLy8gVGhpcyBpcyBicm93c2VyLW9ubHkgZnVuY3Rpb25hbGl0eS4gTm9kZSBzaWRlIGlzIG5vLW9wLlxuICBpZiAob24gPT0gdW5kZWZpbmVkKSBvbiA9IHRydWU7XG4gIHRoaXMuX3dpdGhDcmVkZW50aWFscyA9IG9uO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtYXggcmVkaXJlY3RzIHRvIGBuYC4gRG9lcyBub3RpbmcgaW4gYnJvd3NlciBYSFIgaW1wbGVtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUucmVkaXJlY3RzID0gZnVuY3Rpb24obil7XG4gIHRoaXMuX21heFJlZGlyZWN0cyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBNYXhpbXVtIHNpemUgb2YgYnVmZmVyZWQgcmVzcG9uc2UgYm9keSwgaW4gYnl0ZXMuIENvdW50cyB1bmNvbXByZXNzZWQgc2l6ZS5cbiAqIERlZmF1bHQgMjAwTUIuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge1JlcXVlc3R9IGZvciBjaGFpbmluZ1xuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUubWF4UmVzcG9uc2VTaXplID0gZnVuY3Rpb24obil7XG4gIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIG4pIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICB9XG4gIHRoaXMuX21heFJlc3BvbnNlU2l6ZSA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHRvIGEgcGxhaW4gamF2YXNjcmlwdCBvYmplY3QgKG5vdCBKU09OIHN0cmluZykgb2Ygc2NhbGFyIHByb3BlcnRpZXMuXG4gKiBOb3RlIGFzIHRoaXMgbWV0aG9kIGlzIGRlc2lnbmVkIHRvIHJldHVybiBhIHVzZWZ1bCBub24tdGhpcyB2YWx1ZSxcbiAqIGl0IGNhbm5vdCBiZSBjaGFpbmVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVzY3JpYmluZyBtZXRob2QsIHVybCwgYW5kIGRhdGEgb2YgdGhpcyByZXF1ZXN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXRob2Q6IHRoaXMubWV0aG9kLFxuICAgIHVybDogdGhpcy51cmwsXG4gICAgZGF0YTogdGhpcy5fZGF0YSxcbiAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXIsXG4gIH07XG59O1xuXG4vKipcbiAqIFNlbmQgYGRhdGFgIGFzIHRoZSByZXF1ZXN0IGJvZHksIGRlZmF1bHRpbmcgdGhlIGAudHlwZSgpYCB0byBcImpzb25cIiB3aGVuXG4gKiBhbiBvYmplY3QgaXMgZ2l2ZW4uXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgICAgLy8gbWFudWFsIGpzb25cbiAqICAgICAgIHJlcXVlc3QucG9zdCgnL3VzZXInKVxuICogICAgICAgICAudHlwZSgnanNvbicpXG4gKiAgICAgICAgIC5zZW5kKCd7XCJuYW1lXCI6XCJ0alwifScpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gYXV0byBqc29uXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnNlbmQoeyBuYW1lOiAndGonIH0pXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gbWFudWFsIHgtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICogICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgIC50eXBlKCdmb3JtJylcbiAqICAgICAgICAgLnNlbmQoJ25hbWU9dGonKVxuICogICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqICAgICAgIC8vIGF1dG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gKiAgICAgICByZXF1ZXN0LnBvc3QoJy91c2VyJylcbiAqICAgICAgICAgLnR5cGUoJ2Zvcm0nKVxuICogICAgICAgICAuc2VuZCh7IG5hbWU6ICd0aicgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0cyB0byB4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAqICAgICAgcmVxdWVzdC5wb3N0KCcvdXNlcicpXG4gKiAgICAgICAgLnNlbmQoJ25hbWU9dG9iaScpXG4gKiAgICAgICAgLnNlbmQoJ3NwZWNpZXM9ZmVycmV0JylcbiAqICAgICAgICAuZW5kKGNhbGxiYWNrKVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZGF0YVxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSl7XG4gIHZhciBpc09iaiA9IGlzT2JqZWN0KGRhdGEpO1xuICB2YXIgdHlwZSA9IHRoaXMuX2hlYWRlclsnY29udGVudC10eXBlJ107XG5cbiAgaWYgKHRoaXMuX2Zvcm1EYXRhKSB7XG4gICAgY29uc29sZS5lcnJvcihcIi5zZW5kKCkgY2FuJ3QgYmUgdXNlZCBpZiAuYXR0YWNoKCkgb3IgLmZpZWxkKCkgaXMgdXNlZC4gUGxlYXNlIHVzZSBvbmx5IC5zZW5kKCkgb3Igb25seSAuZmllbGQoKSAmIC5hdHRhY2goKVwiKTtcbiAgfVxuXG4gIGlmIChpc09iaiAmJiAhdGhpcy5fZGF0YSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgICB0aGlzLl9kYXRhID0ge307XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGEgJiYgdGhpcy5fZGF0YSAmJiB0aGlzLl9pc0hvc3QodGhpcy5fZGF0YSkpIHtcbiAgICB0aHJvdyBFcnJvcihcIkNhbid0IG1lcmdlIHRoZXNlIHNlbmQgY2FsbHNcIik7XG4gIH1cblxuICAvLyBtZXJnZVxuICBpZiAoaXNPYmogJiYgaXNPYmplY3QodGhpcy5fZGF0YSkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgdGhpcy5fZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgIH1cbiAgfSBlbHNlIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZGF0YSkge1xuICAgIC8vIGRlZmF1bHQgdG8geC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2Zvcm0nKTtcbiAgICB0eXBlID0gdGhpcy5faGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgICBpZiAoJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPT0gdHlwZSkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGFcbiAgICAgICAgPyB0aGlzLl9kYXRhICsgJyYnICsgZGF0YVxuICAgICAgICA6IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGEgPSAodGhpcy5fZGF0YSB8fCAnJykgKyBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgfVxuXG4gIGlmICghaXNPYmogfHwgdGhpcy5faXNIb3N0KGRhdGEpKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBkZWZhdWx0IHRvIGpzb25cbiAgaWYgKCF0eXBlKSB0aGlzLnR5cGUoJ2pzb24nKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNvcnQgYHF1ZXJ5c3RyaW5nYCBieSB0aGUgc29ydCBmdW5jdGlvblxuICpcbiAqXG4gKiBFeGFtcGxlczpcbiAqXG4gKiAgICAgICAvLyBkZWZhdWx0IG9yZGVyXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeSgpXG4gKiAgICAgICAgIC5lbmQoY2FsbGJhY2spXG4gKlxuICogICAgICAgLy8gY3VzdG9taXplZCBzb3J0IGZ1bmN0aW9uXG4gKiAgICAgICByZXF1ZXN0LmdldCgnL3VzZXInKVxuICogICAgICAgICAucXVlcnkoJ25hbWU9TmljaycpXG4gKiAgICAgICAgIC5xdWVyeSgnc2VhcmNoPU1hbm55JylcbiAqICAgICAgICAgLnNvcnRRdWVyeShmdW5jdGlvbihhLCBiKXtcbiAqICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggLSBiLmxlbmd0aDtcbiAqICAgICAgICAgfSlcbiAqICAgICAgICAgLmVuZChjYWxsYmFjaylcbiAqXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc29ydFxuICogQHJldHVybiB7UmVxdWVzdH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5zb3J0UXVlcnkgPSBmdW5jdGlvbihzb3J0KSB7XG4gIC8vIF9zb3J0IGRlZmF1bHQgdG8gdHJ1ZSBidXQgb3RoZXJ3aXNlIGNhbiBiZSBhIGZ1bmN0aW9uIG9yIGJvb2xlYW5cbiAgdGhpcy5fc29ydCA9IHR5cGVvZiBzb3J0ID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBzb3J0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29tcG9zZSBxdWVyeXN0cmluZyB0byBhcHBlbmQgdG8gcmVxLnVybFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5SZXF1ZXN0QmFzZS5wcm90b3R5cGUuX2ZpbmFsaXplUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpe1xuICB2YXIgcXVlcnkgPSB0aGlzLl9xdWVyeS5qb2luKCcmJyk7XG4gIGlmIChxdWVyeSkge1xuICAgIHRoaXMudXJsICs9ICh0aGlzLnVybC5pbmRleE9mKCc/JykgPj0gMCA/ICcmJyA6ICc/JykgKyBxdWVyeTtcbiAgfVxuICB0aGlzLl9xdWVyeS5sZW5ndGggPSAwOyAvLyBNYWtlcyB0aGUgY2FsbCBpZGVtcG90ZW50XG5cbiAgaWYgKHRoaXMuX3NvcnQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnVybC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBxdWVyeUFyciA9IHRoaXMudXJsLnN1YnN0cmluZyhpbmRleCArIDEpLnNwbGl0KCcmJyk7XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHRoaXMuX3NvcnQpIHtcbiAgICAgICAgcXVlcnlBcnIuc29ydCh0aGlzLl9zb3J0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5QXJyLnNvcnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gdGhpcy51cmwuc3Vic3RyaW5nKDAsIGluZGV4KSArICc/JyArIHF1ZXJ5QXJyLmpvaW4oJyYnKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZvciBiYWNrd2FyZHMgY29tcGF0IG9ubHlcblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fYXBwZW5kUXVlcnlTdHJpbmcgPSBmdW5jdGlvbigpIHtjb25zb2xlLnRyYWNlKFwiVW5zdXBwb3J0ZWRcIik7fVxuXG4vKipcbiAqIEludm9rZSBjYWxsYmFjayB3aXRoIHRpbWVvdXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdEJhc2UucHJvdG90eXBlLl90aW1lb3V0RXJyb3IgPSBmdW5jdGlvbihyZWFzb24sIHRpbWVvdXQsIGVycm5vKXtcbiAgaWYgKHRoaXMuX2Fib3J0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGVyciA9IG5ldyBFcnJvcihyZWFzb24gKyB0aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJyk7XG4gIGVyci50aW1lb3V0ID0gdGltZW91dDtcbiAgZXJyLmNvZGUgPSAnRUNPTk5BQk9SVEVEJztcbiAgZXJyLmVycm5vID0gZXJybm87XG4gIHRoaXMudGltZWRvdXQgPSB0cnVlO1xuICB0aGlzLmFib3J0KCk7XG4gIHRoaXMuY2FsbGJhY2soZXJyKTtcbn07XG5cblJlcXVlc3RCYXNlLnByb3RvdHlwZS5fc2V0VGltZW91dHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vIGRlYWRsaW5lXG4gIGlmICh0aGlzLl90aW1lb3V0ICYmICF0aGlzLl90aW1lcikge1xuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2VsZi5fdGltZW91dEVycm9yKCdUaW1lb3V0IG9mICcsIHNlbGYuX3RpbWVvdXQsICdFVElNRScpO1xuICAgIH0sIHRoaXMuX3RpbWVvdXQpO1xuICB9XG4gIC8vIHJlc3BvbnNlIHRpbWVvdXRcbiAgaWYgKHRoaXMuX3Jlc3BvbnNlVGltZW91dCAmJiAhdGhpcy5fcmVzcG9uc2VUaW1lb3V0VGltZXIpIHtcbiAgICB0aGlzLl9yZXNwb25zZVRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHNlbGYuX3RpbWVvdXRFcnJvcignUmVzcG9uc2UgdGltZW91dCBvZiAnLCBzZWxmLl9yZXNwb25zZVRpbWVvdXQsICdFVElNRURPVVQnKTtcbiAgICB9LCB0aGlzLl9yZXNwb25zZVRpbWVvdXQpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zdXBlcmFnZW50L2xpYi9yZXF1ZXN0LWJhc2UuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG51bGwgIT09IG9iaiAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3VwZXJhZ2VudC9saWIvaXMtb2JqZWN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIEV4cG9zZSBgUmVzcG9uc2VCYXNlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3BvbnNlQmFzZTtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBSZXNwb25zZUJhc2VgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVzcG9uc2VCYXNlKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn1cblxuLyoqXG4gKiBNaXhpbiB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBSZXNwb25zZUJhc2UucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBSZXNwb25zZUJhc2UucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBHZXQgY2FzZS1pbnNlbnNpdGl2ZSBgZmllbGRgIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGZpZWxkKSB7XG4gIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXTtcbn07XG5cbi8qKlxuICogU2V0IGhlYWRlciByZWxhdGVkIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGAudHlwZWAgdGhlIGNvbnRlbnQgdHlwZSB3aXRob3V0IHBhcmFtc1xuICpcbiAqIEEgcmVzcG9uc2Ugb2YgXCJDb250ZW50LVR5cGU6IHRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIlxuICogd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYC50eXBlYCBvZiBcInRleHQvcGxhaW5cIi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLl9zZXRIZWFkZXJQcm9wZXJ0aWVzID0gZnVuY3Rpb24oaGVhZGVyKXtcbiAgICAvLyBUT0RPOiBtb2FyIVxuICAgIC8vIFRPRE86IG1ha2UgdGhpcyBhIHV0aWxcblxuICAgIC8vIGNvbnRlbnQtdHlwZVxuICAgIHZhciBjdCA9IGhlYWRlclsnY29udGVudC10eXBlJ10gfHwgJyc7XG4gICAgdGhpcy50eXBlID0gdXRpbHMudHlwZShjdCk7XG5cbiAgICAvLyBwYXJhbXNcbiAgICB2YXIgcGFyYW1zID0gdXRpbHMucGFyYW1zKGN0KTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB0aGlzW2tleV0gPSBwYXJhbXNba2V5XTtcblxuICAgIHRoaXMubGlua3MgPSB7fTtcblxuICAgIC8vIGxpbmtzXG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGhlYWRlci5saW5rKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmtzID0gdXRpbHMucGFyc2VMaW5rcyhoZWFkZXIubGluayk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gaWdub3JlXG4gICAgfVxufTtcblxuLyoqXG4gKiBTZXQgZmxhZ3Mgc3VjaCBhcyBgLm9rYCBiYXNlZCBvbiBgc3RhdHVzYC5cbiAqXG4gKiBGb3IgZXhhbXBsZSBhIDJ4eCByZXNwb25zZSB3aWxsIGdpdmUgeW91IGEgYC5va2Agb2YgX190cnVlX19cbiAqIHdoZXJlYXMgNXh4IHdpbGwgYmUgX19mYWxzZV9fIGFuZCBgLmVycm9yYCB3aWxsIGJlIF9fdHJ1ZV9fLiBUaGVcbiAqIGAuY2xpZW50RXJyb3JgIGFuZCBgLnNlcnZlckVycm9yYCBhcmUgYWxzbyBhdmFpbGFibGUgdG8gYmUgbW9yZVxuICogc3BlY2lmaWMsIGFuZCBgLnN0YXR1c1R5cGVgIGlzIHRoZSBjbGFzcyBvZiBlcnJvciByYW5naW5nIGZyb20gMS4uNVxuICogc29tZXRpbWVzIHVzZWZ1bCBmb3IgbWFwcGluZyByZXNwb25kIGNvbG9ycyBldGMuXG4gKlxuICogXCJzdWdhclwiIHByb3BlcnRpZXMgYXJlIGFsc28gZGVmaW5lZCBmb3IgY29tbW9uIGNhc2VzLiBDdXJyZW50bHkgcHJvdmlkaW5nOlxuICpcbiAqICAgLSAubm9Db250ZW50XG4gKiAgIC0gLmJhZFJlcXVlc3RcbiAqICAgLSAudW5hdXRob3JpemVkXG4gKiAgIC0gLm5vdEFjY2VwdGFibGVcbiAqICAgLSAubm90Rm91bmRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXNwb25zZUJhc2UucHJvdG90eXBlLl9zZXRTdGF0dXNQcm9wZXJ0aWVzID0gZnVuY3Rpb24oc3RhdHVzKXtcbiAgICB2YXIgdHlwZSA9IHN0YXR1cyAvIDEwMCB8IDA7XG5cbiAgICAvLyBzdGF0dXMgLyBjbGFzc1xuICAgIHRoaXMuc3RhdHVzID0gdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVHlwZSA9IHR5cGU7XG5cbiAgICAvLyBiYXNpY3NcbiAgICB0aGlzLmluZm8gPSAxID09IHR5cGU7XG4gICAgdGhpcy5vayA9IDIgPT0gdHlwZTtcbiAgICB0aGlzLnJlZGlyZWN0ID0gMyA9PSB0eXBlO1xuICAgIHRoaXMuY2xpZW50RXJyb3IgPSA0ID09IHR5cGU7XG4gICAgdGhpcy5zZXJ2ZXJFcnJvciA9IDUgPT0gdHlwZTtcbiAgICB0aGlzLmVycm9yID0gKDQgPT0gdHlwZSB8fCA1ID09IHR5cGUpXG4gICAgICAgID8gdGhpcy50b0Vycm9yKClcbiAgICAgICAgOiBmYWxzZTtcblxuICAgIC8vIHN1Z2FyXG4gICAgdGhpcy5jcmVhdGVkID0gMjAxID09IHN0YXR1cztcbiAgICB0aGlzLmFjY2VwdGVkID0gMjAyID09IHN0YXR1cztcbiAgICB0aGlzLm5vQ29udGVudCA9IDIwNCA9PSBzdGF0dXM7XG4gICAgdGhpcy5iYWRSZXF1ZXN0ID0gNDAwID09IHN0YXR1cztcbiAgICB0aGlzLnVuYXV0aG9yaXplZCA9IDQwMSA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub3RBY2NlcHRhYmxlID0gNDA2ID09IHN0YXR1cztcbiAgICB0aGlzLmZvcmJpZGRlbiA9IDQwMyA9PSBzdGF0dXM7XG4gICAgdGhpcy5ub3RGb3VuZCA9IDQwNCA9PSBzdGF0dXM7XG4gICAgdGhpcy51bnByb2Nlc3NhYmxlRW50aXR5ID0gNDIyID09IHN0YXR1cztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N1cGVyYWdlbnQvbGliL3Jlc3BvbnNlLWJhc2UuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmV0dXJuIHRoZSBtaW1lIHR5cGUgZm9yIHRoZSBnaXZlbiBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnR5cGUgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnNwbGl0KC8gKjsgKi8pLnNoaWZ0KCk7XG59O1xuXG4vKipcbiAqIFJldHVybiBoZWFkZXIgZmllbGQgcGFyYW1ldGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnBhcmFtcyA9IGZ1bmN0aW9uKHN0cil7XG4gIHJldHVybiBzdHIuc3BsaXQoLyAqOyAqLykucmVkdWNlKGZ1bmN0aW9uKG9iaiwgc3RyKXtcbiAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoLyAqPSAqLyk7XG4gICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCk7XG4gICAgdmFyIHZhbCA9IHBhcnRzLnNoaWZ0KCk7XG5cbiAgICBpZiAoa2V5ICYmIHZhbCkgb2JqW2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBQYXJzZSBMaW5rIGhlYWRlciBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJzZUxpbmtzID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5zcGxpdCgvICosICovKS5yZWR1Y2UoZnVuY3Rpb24ob2JqLCBzdHIpe1xuICAgIHZhciBwYXJ0cyA9IHN0ci5zcGxpdCgvICo7ICovKTtcbiAgICB2YXIgdXJsID0gcGFydHNbMF0uc2xpY2UoMSwgLTEpO1xuICAgIHZhciByZWwgPSBwYXJ0c1sxXS5zcGxpdCgvICo9ICovKVsxXS5zbGljZSgxLCAtMSk7XG4gICAgb2JqW3JlbF0gPSB1cmw7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xufTtcblxuLyoqXG4gKiBTdHJpcCBjb250ZW50IHJlbGF0ZWQgZmllbGRzIGZyb20gYGhlYWRlcmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhlYWRlclxuICogQHJldHVybiB7T2JqZWN0fSBoZWFkZXJcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMuY2xlYW5IZWFkZXIgPSBmdW5jdGlvbihoZWFkZXIsIGNoYW5nZXNPcmlnaW4pe1xuICBkZWxldGUgaGVhZGVyWydjb250ZW50LXR5cGUnXTtcbiAgZGVsZXRlIGhlYWRlclsnY29udGVudC1sZW5ndGgnXTtcbiAgZGVsZXRlIGhlYWRlclsndHJhbnNmZXItZW5jb2RpbmcnXTtcbiAgZGVsZXRlIGhlYWRlclsnaG9zdCddO1xuICAvLyBzZWN1aXJ0eVxuICBpZiAoY2hhbmdlc09yaWdpbikge1xuICAgIGRlbGV0ZSBoZWFkZXJbJ2F1dGhvcml6YXRpb24nXTtcbiAgICBkZWxldGUgaGVhZGVyWydjb29raWUnXTtcbiAgfVxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc3VwZXJhZ2VudC9saWIvdXRpbHMuanMiLCJmdW5jdGlvbiBBZ2VudCgpIHtcbiAgdGhpcy5fZGVmYXVsdHMgPSBbXTtcbn1cblxuW1widXNlXCIsIFwib25cIiwgXCJvbmNlXCIsIFwic2V0XCIsIFwicXVlcnlcIiwgXCJ0eXBlXCIsIFwiYWNjZXB0XCIsIFwiYXV0aFwiLCBcIndpdGhDcmVkZW50aWFsc1wiLCBcInNvcnRRdWVyeVwiLCBcInJldHJ5XCIsIFwib2tcIiwgXCJyZWRpcmVjdHNcIixcbiBcInRpbWVvdXRcIiwgXCJidWZmZXJcIiwgXCJzZXJpYWxpemVcIiwgXCJwYXJzZVwiLCBcImNhXCIsIFwia2V5XCIsIFwicGZ4XCIsIFwiY2VydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG4gIC8qKiBEZWZhdWx0IHNldHRpbmcgZm9yIGFsbCByZXF1ZXN0cyBmcm9tIHRoaXMgYWdlbnQgKi9cbiAgQWdlbnQucHJvdG90eXBlW2ZuXSA9IGZ1bmN0aW9uKC8qdmFyYXJncyovKSB7XG4gICAgdGhpcy5fZGVmYXVsdHMucHVzaCh7Zm46Zm4sIGFyZ3VtZW50czphcmd1bWVudHN9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufSk7XG5cbkFnZW50LnByb3RvdHlwZS5fc2V0RGVmYXVsdHMgPSBmdW5jdGlvbihyZXEpIHtcbiAgICB0aGlzLl9kZWZhdWx0cy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgcmVxW2RlZi5mbl0uYXBwbHkocmVxLCBkZWYuYXJndW1lbnRzKTtcbiAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWdlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N1cGVyYWdlbnQvbGliL2FnZW50LWJhc2UuanMiLCJmdW5jdGlvbiBDb25maWd1cmF0aW9uRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm5hbWUgPSAnQ29uZmlndXJhdGlvbkVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gKG1lc3NhZ2UgfHwgJycpO1xufVxuQ29uZmlndXJhdGlvbkVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuZnVuY3Rpb24gVG9rZW5WYWxpZGF0aW9uRXJyb3IobWVzc2FnZSkge1xuICB0aGlzLm5hbWUgPSAnVG9rZW5WYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAobWVzc2FnZSB8fCAnJyk7XG59XG5Ub2tlblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBDb25maWd1cmF0aW9uRXJyb3I6IENvbmZpZ3VyYXRpb25FcnJvcixcbiAgVG9rZW5WYWxpZGF0aW9uRXJyb3I6IFRva2VuVmFsaWRhdGlvbkVycm9yXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pZHRva2VuLXZlcmlmaWVyL3NyYy9oZWxwZXJzL2Vycm9yLmpzIiwiZnVuY3Rpb24gRHVtbXlDYWNoZSgpIHt9XG5cbkR1bW15Q2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG51bGw7XG59O1xuXG5EdW1teUNhY2hlLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkR1bW15Q2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICgpIHtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRHVtbXlDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaWR0b2tlbi12ZXJpZmllci9zcmMvaGVscGVycy9kdW1teS1jYWNoZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IFVybFV0aWxpdHkgZnJvbSAnLi9VcmxVdGlsaXR5JztcbmltcG9ydCBTaWduaW5TdGF0ZSBmcm9tICcuL1NpZ25pblN0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmluUmVxdWVzdCB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICAvLyBtYW5kYXRvcnlcbiAgICAgICAgdXJsLCBjbGllbnRfaWQsIHJlZGlyZWN0X3VyaSwgcmVzcG9uc2VfdHlwZSwgc2NvcGUsIGF1dGhvcml0eSxcbiAgICAgICAgLy8gb3B0aW9uYWxcbiAgICAgICAgZGF0YSwgcHJvbXB0LCBkaXNwbGF5LCBtYXhfYWdlLCB1aV9sb2NhbGVzLCBpZF90b2tlbl9oaW50LCBsb2dpbl9oaW50LCBhY3JfdmFsdWVzLCByZXNvdXJjZSxcbiAgICAgICAgcmVxdWVzdCwgcmVxdWVzdF91cmksIGV4dHJhUXVlcnlQYXJhbXMsXG4gICAgfSkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gdXJsIHBhc3NlZCB0byBTaWduaW5SZXF1ZXN0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidXJsXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2xpZW50X2lkKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBjbGllbnRfaWQgcGFzc2VkIHRvIFNpZ25pblJlcXVlc3RcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjbGllbnRfaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWRpcmVjdF91cmkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHJlZGlyZWN0X3VyaSBwYXNzZWQgdG8gU2lnbmluUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInJlZGlyZWN0X3VyaVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHJlc3BvbnNlX3R5cGUgcGFzc2VkIHRvIFNpZ25pblJlcXVlc3RcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZXNwb25zZV90eXBlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2NvcGUpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHNjb3BlIHBhc3NlZCB0byBTaWduaW5SZXF1ZXN0XCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2NvcGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhdXRob3JpdHkpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGF1dGhvcml0eSBwYXNzZWQgdG8gU2lnbmluUmVxdWVzdFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF1dGhvcml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBvaWRjID0gU2lnbmluUmVxdWVzdC5pc09pZGMocmVzcG9uc2VfdHlwZSk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU2lnbmluU3RhdGUoeyBub25jZTogb2lkYywgZGF0YSwgY2xpZW50X2lkLCBhdXRob3JpdHkgfSk7XG5cbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJjbGllbnRfaWRcIiwgY2xpZW50X2lkKTtcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJyZWRpcmVjdF91cmlcIiwgcmVkaXJlY3RfdXJpKTtcbiAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJyZXNwb25zZV90eXBlXCIsIHJlc3BvbnNlX3R5cGUpO1xuICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInNjb3BlXCIsIHNjb3BlKTtcbiAgICAgICAgXG4gICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICAgIGlmIChvaWRjKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcIm5vbmNlXCIsIHRoaXMuc3RhdGUubm9uY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbmFsID0geyBwcm9tcHQsIGRpc3BsYXksIG1heF9hZ2UsIHVpX2xvY2FsZXMsIGlkX3Rva2VuX2hpbnQsIGxvZ2luX2hpbnQsIGFjcl92YWx1ZXMsIHJlc291cmNlLCByZXF1ZXN0LCByZXF1ZXN0X3VyaSB9O1xuICAgICAgICBmb3IobGV0IGtleSBpbiBvcHRpb25hbCl7XG4gICAgICAgICAgICBpZiAob3B0aW9uYWxba2V5XSkge1xuICAgICAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgb3B0aW9uYWxba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGtleSBpbiBleHRyYVF1ZXJ5UGFyYW1zKXtcbiAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIGtleSwgZXh0cmFRdWVyeVBhcmFtc1trZXldKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT2lkYyhyZXNwb25zZV90eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZXNwb25zZV90eXBlLnNwbGl0KC9cXHMrL2cpLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSA9PT0gXCJpZF90b2tlblwiO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICEhKHJlc3VsdFswXSk7XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyBpc09BdXRoKHJlc3BvbnNlX3R5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3BvbnNlX3R5cGUuc3BsaXQoL1xccysvZykuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtID09PSBcInRva2VuXCI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gISEocmVzdWx0WzBdKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpZ25pblJlcXVlc3QuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBHbG9iYWwgZnJvbSAnLi9HbG9iYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcmxVdGlsaXR5IHtcbiAgICBzdGF0aWMgYWRkUXVlcnlQYXJhbSh1cmwsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignPycpIDwgMCkge1xuICAgICAgICAgICAgdXJsICs9IFwiP1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCImXCI7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgKz0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xuICAgICAgICB1cmwgKz0gXCI9XCI7XG4gICAgICAgIHVybCArPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIHBhcnNlVXJsRnJhZ21lbnQodmFsdWUsIGRlbGltaXRlciA9IFwiI1wiLCBnbG9iYWwgPSBHbG9iYWwpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50XCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKXtcbiAgICAgICAgICAgIHZhbHVlID0gZ2xvYmFsLmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWR4ID0gdmFsdWUubGFzdEluZGV4T2YoZGVsaW1pdGVyKTtcbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cihpZHggKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJhbXMgPSB7fSxcbiAgICAgICAgICAgIHJlZ2V4ID0gLyhbXiY9XSspPShbXiZdKikvZyxcbiAgICAgICAgICAgIG07XG5cbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWModmFsdWUpKSB7XG4gICAgICAgICAgICBwYXJhbXNbZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChtWzJdKTtcbiAgICAgICAgICAgIGlmIChjb3VudGVyKysgPiA1MCkge1xuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcInJlc3BvbnNlIGV4Y2VlZGVkIGV4cGVjdGVkIG51bWJlciBvZiBwYXJhbWV0ZXJzXCIsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJSZXNwb25zZSBleGNlZWRlZCBleHBlY3RlZCBudW1iZXIgb2YgcGFyYW1ldGVyc1wiXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9VcmxVdGlsaXR5LmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9TdGF0ZSc7XG5pbXBvcnQgcmFuZG9tIGZyb20gJy4vcmFuZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbmluU3RhdGUgZXh0ZW5kcyBTdGF0ZSB7XG4gICAgY29uc3RydWN0b3Ioe25vbmNlLCBhdXRob3JpdHksIGNsaWVudF9pZH0gPSB7fSkge1xuICAgICAgICBzdXBlcihhcmd1bWVudHNbMF0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKG5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9ub25jZSA9IHJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9hdXRob3JpdHkgPSBhdXRob3JpdHk7XG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICB9XG5cbiAgICBnZXQgbm9uY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub25jZTtcbiAgICB9XG4gICAgZ2V0IGF1dGhvcml0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml0eTtcbiAgICB9XG4gICAgZ2V0IGNsaWVudF9pZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NsaWVudF9pZDtcbiAgICB9XG4gICAgXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJTaWduaW5TdGF0ZS50b1N0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZCxcbiAgICAgICAgICAgIG5vbmNlOiB0aGlzLm5vbmNlLFxuICAgICAgICAgICAgYXV0aG9yaXR5OiB0aGlzLmF1dGhvcml0eSxcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRfaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb21TdG9yYWdlU3RyaW5nKHN0b3JhZ2VTdHJpbmcpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2lnbmluU3RhdGUuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShzdG9yYWdlU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTaWduaW5TdGF0ZShkYXRhKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2lnbmluU3RhdGUuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCByYW5kb20gZnJvbSAnLi9yYW5kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZSB7XG4gICAgY29uc3RydWN0b3Ioe2lkLCBkYXRhLCBjcmVhdGVkfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQgfHwgcmFuZG9tKCk7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY3JlYXRlZCA9PT0gJ251bWJlcicgJiYgY3JlYXRlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZWQgPSBjcmVhdGVkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIGdldCBjcmVhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlZDtcbiAgICB9XG5cbiAgICB0b1N0b3JhZ2VTdHJpbmcoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlN0YXRlLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgICAgICAgY3JlYXRlZDogdGhpcy5jcmVhdGVkXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZykge1xuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGF0ZShKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJTdGFsZVN0YXRlKHN0b3JhZ2UsIGFnZSkge1xuICAgICAgICBMb2cuZGVidWcoXCJTdGF0ZS5jbGVhclN0YWxlU3RhdGVcIik7XG5cbiAgICAgICAgdmFyIGN1dG9mZiA9IERhdGUubm93KCkgLyAxMDAwIC0gYWdlO1xuXG4gICAgICAgIHJldHVybiBzdG9yYWdlLmdldEFsbEtleXMoKS50aGVuKGtleXMgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiZ290IGtleXNcIiwga2V5cyk7XG5cbiAgICAgICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBzdG9yYWdlLmdldChrZXkpLnRoZW4oaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZW1vdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBTdGF0ZS5mcm9tU3RvcmFnZVN0cmluZyhpdGVtKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiZ290IGl0ZW0gZnJvbSBrZXk6IFwiLCBrZXksIHN0YXRlLmNyZWF0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLmNyZWF0ZWQgPD0gY3V0b2ZmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJFcnJvciBwYXJzaW5nIHN0YXRlIGZvciBrZXlcIiwga2V5LCBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJubyBpdGVtIGluIHN0b3JhZ2UgZm9yIGtleTogXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwicmVtb3ZlZCBpdGVtIGZvciBrZXk6IFwiLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gocCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIndhaXRpbmcgb24gcHJvbWlzZSBjb3VudDpcIiwgcHJvbWlzZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdGF0ZS5qcyIsIi8vIE5PVElDRTogdGhlIGNvZGUgaW4gdGhpcyBmaWxlIG9yaWdpbmFsbHkgZGV2ZWxvcGVkIGJ5IE1pY3Jvc29mdFxuLy8gb3JpZ2luYWwgc291cmNlOiBodHRwczovL2dpdGh1Yi5jb20vQXp1cmVBRC9henVyZS1hY3RpdmVkaXJlY3RvcnktbGlicmFyeS1mb3ItanMvYmxvYi9tYXN0ZXIvbGliL2FkYWwuanMjTDEwMjlcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQWRhbEpTIHYxLjAuOFxuLy8gQHByZXNlcnZlIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IE9wZW4gVGVjaG5vbG9naWVzLCBJbmMuXG4vLyBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBBcGFjaGUgTGljZW5zZSAyLjBcbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5kb20oKSB7XG4gICAgdmFyIGd1aWRIb2xkZXIgPSAneHh4eHh4eHh4eHh4NHh4eHl4eHh4eHh4eHh4eHh4eHgnO1xuICAgIHZhciBoZXggPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG4gICAgdmFyIHIgPSAwO1xuICAgIHZhciBndWlkUmVzcG9uc2UgPSBcIlwiO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3VpZEhvbGRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSAhPT0gJy0nICYmIGd1aWRIb2xkZXJbaV0gIT09ICc0Jykge1xuICAgICAgICAgICAgLy8gZWFjaCB4IGFuZCB5IG5lZWRzIHRvIGJlIHJhbmRvbVxuICAgICAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ3VpZEhvbGRlcltpXSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBndWlkUmVzcG9uc2UgKz0gaGV4W3JdO1xuICAgICAgICB9IGVsc2UgaWYgKGd1aWRIb2xkZXJbaV0gPT09ICd5Jykge1xuICAgICAgICAgICAgLy8gY2xvY2stc2VxLWFuZC1yZXNlcnZlZCBmaXJzdCBoZXggaXMgZmlsdGVyZWQgYW5kIHJlbWFpbmluZyBoZXggdmFsdWVzIGFyZSByYW5kb21cbiAgICAgICAgICAgIHIgJj0gMHgzOyAvLyBiaXQgYW5kIHdpdGggMDAxMSB0byBzZXQgcG9zIDIgdG8gemVybyA/MD8/XG4gICAgICAgICAgICByIHw9IDB4ODsgLy8gc2V0IHBvcyAzIHRvIDEgYXMgMT8/P1xuICAgICAgICAgICAgZ3VpZFJlc3BvbnNlICs9IGhleFtyXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGd1aWRSZXNwb25zZSArPSBndWlkSG9sZGVyW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBndWlkUmVzcG9uc2U7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JhbmRvbS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBVcmxVdGlsaXR5IGZyb20gJy4vVXJsVXRpbGl0eSc7XG5cbmNvbnN0IE9pZGNTY29wZSA9IFwib3BlbmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25pblJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwpIHtcblxuICAgICAgICB2YXIgdmFsdWVzID0gVXJsVXRpbGl0eS5wYXJzZVVybEZyYWdtZW50KHVybCwgXCIjXCIpO1xuXG4gICAgICAgIHRoaXMuZXJyb3IgPSB2YWx1ZXMuZXJyb3I7XG4gICAgICAgIHRoaXMuZXJyb3JfZGVzY3JpcHRpb24gPSB2YWx1ZXMuZXJyb3JfZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXJyb3JfdXJpID0gdmFsdWVzLmVycm9yX3VyaTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YWx1ZXMuc3RhdGU7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSB2YWx1ZXMuaWRfdG9rZW47XG4gICAgICAgIHRoaXMuc2Vzc2lvbl9zdGF0ZSA9IHZhbHVlcy5zZXNzaW9uX3N0YXRlO1xuICAgICAgICB0aGlzLmFjY2Vzc190b2tlbiA9IHZhbHVlcy5hY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHZhbHVlcy50b2tlbl90eXBlO1xuICAgICAgICB0aGlzLnNjb3BlID0gdmFsdWVzLnNjb3BlO1xuICAgICAgICB0aGlzLnByb2ZpbGUgPSB1bmRlZmluZWQ7IC8vIHdpbGwgYmUgc2V0IGZyb20gUmVzcG9uc2VWYWxpZGF0b3JcblxuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHBhcnNlSW50KHZhbHVlcy5leHBpcmVzX2luKTtcbiAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzX2luID09PSAnbnVtYmVyJyAmJiBleHBpcmVzX2luID4gMCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHRoaXMuZXhwaXJlc19hdCA9IG5vdyArIGV4cGlyZXNfaW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlc19pbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwaXJlc19hdCkge1xuICAgICAgICAgICAgbGV0IG5vdyA9IHBhcnNlSW50KERhdGUubm93KCkgLyAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cGlyZXNfYXQgLSBub3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgZXhwaXJlZCgpIHtcbiAgICAgICAgbGV0IGV4cGlyZXNfaW4gPSB0aGlzLmV4cGlyZXNfaW47XG4gICAgICAgIGlmIChleHBpcmVzX2luICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBpcmVzX2luIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXQgc2NvcGVzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuc2NvcGUgfHwgXCJcIikuc3BsaXQoXCIgXCIpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgaXNPcGVuSWRDb25uZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZXMuaW5kZXhPZihPaWRjU2NvcGUpID49IDAgfHwgISF0aGlzLmlkX3Rva2VuO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaWduaW5SZXNwb25zZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IFVybFV0aWxpdHkgZnJvbSAnLi9VcmxVdGlsaXR5JztcbmltcG9ydCBTdGF0ZSBmcm9tICcuL1N0YXRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbm91dFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKHt1cmwsIGlkX3Rva2VuX2hpbnQsIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSwgZGF0YX0pIHtcbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIHVybCBwYXNzZWQgdG8gU2lnbm91dFJlcXVlc3RcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1cmxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWRfdG9rZW5faGludCkge1xuICAgICAgICAgICAgdXJsID0gVXJsVXRpbGl0eS5hZGRRdWVyeVBhcmFtKHVybCwgXCJpZF90b2tlbl9oaW50XCIsIGlkX3Rva2VuX2hpbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAocG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxVdGlsaXR5LmFkZFF1ZXJ5UGFyYW0odXJsLCBcInBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaVwiLCBwb3N0X2xvZ291dF9yZWRpcmVjdF91cmkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgU3RhdGUoeyBkYXRhIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHVybCA9IFVybFV0aWxpdHkuYWRkUXVlcnlQYXJhbSh1cmwsIFwic3RhdGVcIiwgdGhpcy5zdGF0ZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TaWdub3V0UmVxdWVzdC5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBVcmxVdGlsaXR5IGZyb20gJy4vVXJsVXRpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25vdXRSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IodXJsKSB7XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IFVybFV0aWxpdHkucGFyc2VVcmxGcmFnbWVudCh1cmwsIFwiP1wiKTtcblxuICAgICAgICB0aGlzLmVycm9yID0gdmFsdWVzLmVycm9yO1xuICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gdmFsdWVzLmVycm9yX2Rlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmVycm9yX3VyaSA9IHZhbHVlcy5lcnJvcl91cmk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhbHVlcy5zdGF0ZTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NpZ25vdXRSZXNwb25zZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbk1lbW9yeVdlYlN0b3JhZ2V7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBnZXRJdGVtKGtleSkge1xuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UuZ2V0SXRlbVwiLCBrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVtrZXldO1xuICAgIH1cbiAgICBcbiAgICBzZXRJdGVtKGtleSwgdmFsdWUpe1xuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2Uuc2V0SXRlbVwiLCBrZXkpO1xuICAgICAgICB0aGlzLl9kYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9ICAgXG4gICAgXG4gICAgcmVtb3ZlSXRlbShrZXkpe1xuICAgICAgICBMb2cuZGVidWcoXCJJbk1lbW9yeVdlYlN0b3JhZ2UucmVtb3ZlSXRlbVwiLCBrZXkpO1xuICAgICAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICAgIH1cbiAgICBcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5fZGF0YSkubGVuZ3RoO1xuICAgIH1cbiAgICBcbiAgICBrZXkoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuX2RhdGEpW2luZGV4XTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0luTWVtb3J5V2ViU3RvcmFnZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IE9pZGNDbGllbnQgZnJvbSAnLi9PaWRjQ2xpZW50JztcbmltcG9ydCBVc2VyTWFuYWdlclNldHRpbmdzIGZyb20gJy4vVXNlck1hbmFnZXJTZXR0aW5ncyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IFVzZXJNYW5hZ2VyRXZlbnRzIGZyb20gJy4vVXNlck1hbmFnZXJFdmVudHMnO1xuaW1wb3J0IFNpbGVudFJlbmV3U2VydmljZSBmcm9tICcuL1NpbGVudFJlbmV3U2VydmljZSc7XG5pbXBvcnQgU2Vzc2lvbk1vbml0b3IgZnJvbSAnLi9TZXNzaW9uTW9uaXRvcic7XG5pbXBvcnQgVG9rZW5SZXZvY2F0aW9uQ2xpZW50IGZyb20gJy4vVG9rZW5SZXZvY2F0aW9uQ2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXIgZXh0ZW5kcyBPaWRjQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHt9LFxuICAgICAgICBTaWxlbnRSZW5ld1NlcnZpY2VDdG9yID0gU2lsZW50UmVuZXdTZXJ2aWNlLFxuICAgICAgICBTZXNzaW9uTW9uaXRvckN0b3IgPSBTZXNzaW9uTW9uaXRvcixcbiAgICAgICAgVG9rZW5SZXZvY2F0aW9uQ2xpZW50Q3RvciA9IFRva2VuUmV2b2NhdGlvbkNsaWVudFxuICAgICkge1xuXG4gICAgICAgIGlmICghKHNldHRpbmdzIGluc3RhbmNlb2YgVXNlck1hbmFnZXJTZXR0aW5ncykpIHtcbiAgICAgICAgICAgIHNldHRpbmdzID0gbmV3IFVzZXJNYW5hZ2VyU2V0dGluZ3Moc2V0dGluZ3MpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKHNldHRpbmdzKTtcblxuICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgVXNlck1hbmFnZXJFdmVudHMoc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zaWxlbnRSZW5ld1NlcnZpY2UgPSBuZXcgU2lsZW50UmVuZXdTZXJ2aWNlQ3Rvcih0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIG9yZGVyIGlzIGltcG9ydGFudCBmb3IgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOyB0aGVzZSBzZXJ2aWNlcyBkZXBlbmQgdXBvbiB0aGUgZXZlbnRzLlxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvbWF0aWNTaWxlbnRSZW5ldykge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiYXV0b21hdGljU2lsZW50UmVuZXcgaXMgY29uZmlndXJlZCwgc2V0dGluZyB1cCBzaWxlbnQgcmVuZXdcIik7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0U2lsZW50UmVuZXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLm1vbml0b3JTZXNzaW9uKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJtb25pdG9yU2Vzc2lvbiBpcyBjb25maWd1cmVkLCBzZXR0aW5nIHVwIHNlc3Npb24gbW9uaXRvclwiKTtcbiAgICAgICAgICAgIHRoaXMuX3Nlc3Npb25Nb25pdG9yID0gbmV3IFNlc3Npb25Nb25pdG9yQ3Rvcih0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3Rva2VuUmV2b2NhdGlvbkNsaWVudCA9IG5ldyBUb2tlblJldm9jYXRpb25DbGllbnRDdG9yKHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG5cbiAgICBnZXQgX3JlZGlyZWN0TmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5yZWRpcmVjdE5hdmlnYXRvcjtcbiAgICB9XG4gICAgZ2V0IF9wb3B1cE5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MucG9wdXBOYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfaWZyYW1lTmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pZnJhbWVOYXZpZ2F0b3I7XG4gICAgfVxuICAgIGdldCBfdXNlclN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy51c2VyU3RvcmU7XG4gICAgfVxuXG4gICAgZ2V0IGV2ZW50cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50cztcbiAgICB9XG5cbiAgICBnZXRVc2VyKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5nZXRVc2VyXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIExvZy5pbmZvKFwidXNlciBsb2FkZWRcIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5pbmZvKFwidXNlciBub3QgZm91bmQgaW4gc3RvcmFnZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVXNlcigpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIucmVtb3ZlVXNlclwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yZVVzZXIobnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBMb2cuaW5mbyhcInVzZXIgcmVtb3ZlZCBmcm9tIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICB0aGlzLl9ldmVudHMudW5sb2FkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblJlZGlyZWN0KGFyZ3MpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5TdGFydChhcmdzLCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvcikudGhlbigoKT0+e1xuICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5SZWRpcmVjdCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbmluUmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluUmVkaXJlY3RDYWxsYmFja1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbkVuZCh1cmwgfHwgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IudXJsKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5SZWRpcmVjdENhbGxiYWNrIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluUmVkaXJlY3RDYWxsYmFjayBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzaWduaW5Qb3B1cChhcmdzID0ge30pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluUG9wdXBcIik7XG5cbiAgICAgICAgbGV0IHVybCA9IGFyZ3MucmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9wdXBfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gcG9wdXBfcmVkaXJlY3RfdXJpIG9yIHJlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHBvcHVwX3JlZGlyZWN0X3VyaSBvciByZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICAgICAgYXJncy5kaXNwbGF5ID0gXCJwb3B1cFwiO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW4oYXJncywgdGhpcy5fcG9wdXBOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgIHN0YXJ0VXJsOiB1cmwsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd0ZlYXR1cmVzOiBhcmdzLnBvcHVwV2luZG93RmVhdHVyZXMgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd0ZlYXR1cmVzLFxuICAgICAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQ6IGFyZ3MucG9wdXBXaW5kb3dUYXJnZXQgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cFdpbmRvd1RhcmdldFxuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5Qb3B1cCBzdWNjZXNzZnVsLCBzaWduZWQgaW4gc3ViOiBcIiwgdXNlci5wcm9maWxlLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25pblBvcHVwIHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25pblBvcHVwQ2FsbGJhY2sodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblBvcHVwQ2FsbGJhY2tcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5DYWxsYmFjayh1cmwsIHRoaXMuX3BvcHVwTmF2aWdhdG9yKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5Qb3B1cENhbGxiYWNrIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluUG9wdXBDYWxsYmFjayBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25pblNpbGVudChhcmdzID0ge30pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbmluU2lsZW50XCIpO1xuXG4gICAgICAgIGxldCB1cmwgPSBhcmdzLnJlZGlyZWN0X3VyaSB8fCB0aGlzLnNldHRpbmdzLnNpbGVudF9yZWRpcmVjdF91cmk7XG4gICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzaWxlbnRfcmVkaXJlY3RfdXJpIGNvbmZpZ3VyZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucmVkaXJlY3RfdXJpID0gdXJsO1xuICAgICAgICBhcmdzLnByb21wdCA9IFwibm9uZVwiO1xuXG4gICAgICAgIGxldCBzZXRJZFRva2VuO1xuICAgICAgICBpZiAoYXJncy5pZF90b2tlbl9oaW50IHx8ICF0aGlzLnNldHRpbmdzLmluY2x1ZGVJZFRva2VuSW5TaWxlbnRSZW5ldykge1xuICAgICAgICAgICAgc2V0SWRUb2tlbiA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0SWRUb2tlbiA9IHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBhcmdzLmlkX3Rva2VuX2hpbnQgPSB1c2VyICYmIHVzZXIuaWRfdG9rZW47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzZXRJZFRva2VuLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pbihhcmdzLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IsIHtcbiAgICAgICAgICAgICAgICBzdGFydFVybDogdXJsLFxuICAgICAgICAgICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0OiBhcmdzLnNpbGVudFJlcXVlc3RUaW1lb3V0IHx8IHRoaXMuc2V0dGluZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5wcm9maWxlICYmIHVzZXIucHJvZmlsZS5zdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5TaWxlbnQgc3VjY2Vzc2Z1bCwgc2lnbmVkIGluIHN1YjogXCIsIHVzZXIucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJzaWduaW5TaWxlbnQgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lnbmluU2lsZW50Q2FsbGJhY2sodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25pblNpbGVudENhbGxiYWNrXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluQ2FsbGJhY2sodXJsLCB0aGlzLl9pZnJhbWVOYXZpZ2F0b3IpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLnByb2ZpbGUgJiYgdXNlci5wcm9maWxlLnN1Yikge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInNpZ25pblNpbGVudENhbGxiYWNrIHN1Y2Nlc3NmdWwsIHNpZ25lZCBpbiBzdWI6IFwiLCB1c2VyLnByb2ZpbGUuc3ViKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbmluU2lsZW50Q2FsbGJhY2sgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBxdWVyeVNlc3Npb25TdGF0dXMoYXJncyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1c1wiKTtcblxuICAgICAgICBsZXQgdXJsID0gYXJncy5yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5zaWxlbnRfcmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gc2lsZW50X3JlZGlyZWN0X3VyaSBjb25maWd1cmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHNpbGVudF9yZWRpcmVjdF91cmkgY29uZmlndXJlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBhcmdzLnJlZGlyZWN0X3VyaSA9IHVybDtcbiAgICAgICAgYXJncy5wcm9tcHQgPSBcIm5vbmVcIjtcbiAgICAgICAgYXJncy5yZXNwb25zZV90eXBlID0gXCJpZF90b2tlblwiO1xuICAgICAgICBhcmdzLnNjb3BlID0gXCJvcGVuaWRcIjtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmluU3RhcnQoYXJncywgdGhpcy5faWZyYW1lTmF2aWdhdG9yLCB7XG4gICAgICAgICAgICBzdGFydFVybDogdXJsLFxuICAgICAgICAgICAgc2lsZW50UmVxdWVzdFRpbWVvdXQ6IGFyZ3Muc2lsZW50UmVxdWVzdFRpbWVvdXQgfHwgdGhpcy5zZXR0aW5ncy5zaWxlbnRSZXF1ZXN0VGltZW91dFxuICAgICAgICB9KS50aGVuKG5hdlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZShuYXZSZXNwb25zZS51cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImdvdCBzaWduaW4gcmVzcG9uc2VcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSAmJiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnN1YiAmJiBzaWduaW5SZXNwb25zZS5wcm9maWxlLnNpZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzIGZvciBzdWI6IFwiLCAgc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogc2lnbmluUmVzcG9uc2Uuc2Vzc2lvbl9zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yjogc2lnbmluUmVzcG9uc2UucHJvZmlsZS5zdWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWQ6IHNpZ25pblJlc3BvbnNlLnByb2ZpbGUuc2lkXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcInF1ZXJ5U2Vzc2lvblN0YXR1cyBzdWNjZXNzZnVsLCB1c2VyIG5vdCBhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2lnbmluKGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zID0ge30pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiX3NpZ25pblwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25pblN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKG5hdlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduaW5FbmQobmF2UmVzcG9uc2UudXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5TdGFydChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIl9zaWduaW5TdGFydFwiKTtcblxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLnByZXBhcmUobmF2aWdhdG9yUGFyYW1zKS50aGVuKGhhbmRsZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJnb3QgbmF2aWdhdG9yIHdpbmRvdyBoYW5kbGVcIik7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25pblJlcXVlc3QoYXJncykudGhlbihzaWduaW5SZXF1ZXN0ID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJnb3Qgc2lnbmluIHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbmluUmVxdWVzdC51cmw7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yUGFyYW1zLmlkID0gc2lnbmluUmVxdWVzdC5zdGF0ZS5pZDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlLm5hdmlnYXRlKG5hdmlnYXRvclBhcmFtcyk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuY2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiRXJyb3IgYWZ0ZXIgcHJlcGFyaW5nIG5hdmlnYXRvciwgY2xvc2luZyBuYXZpZ2F0b3Igd2luZG93XCIpO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbmluRW5kKHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJfc2lnbmluRW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWduaW5SZXNwb25zZSh1cmwpLnRoZW4oc2lnbmluUmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiZ290IHNpZ25pbiByZXNwb25zZVwiKTtcblxuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihzaWduaW5SZXNwb25zZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3JlVXNlcih1c2VyKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJ1c2VyIHN0b3JlZFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sb2FkKHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zaWduaW5DYWxsYmFjayh1cmwsIG5hdmlnYXRvcikge1xuICAgICAgICBMb2cuZGVidWcoXCJfc2lnbmluQ2FsbGJhY2tcIik7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuY2FsbGJhY2sodXJsKTtcbiAgICB9XG5cbiAgICBzaWdub3V0UmVkaXJlY3QoYXJncyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnNpZ25vdXRSZWRpcmVjdFwiKTtcbiAgICAgICAgbGV0IHBvc3RMb2dvdXRSZWRpcmVjdFVyaSA9IGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpIHx8IHRoaXMuc2V0dGluZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpO1xuICAgICAgICBpZiAocG9zdExvZ291dFJlZGlyZWN0VXJpKXtcbiAgICAgICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gcG9zdExvZ291dFJlZGlyZWN0VXJpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0U3RhcnQoYXJncywgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbm91dFJlZGlyZWN0IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzaWdub3V0UmVkaXJlY3RDYWxsYmFjayh1cmwpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbm91dFJlZGlyZWN0Q2FsbGJhY2tcIik7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKHVybCB8fCB0aGlzLl9yZWRpcmVjdE5hdmlnYXRvci51cmwpLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwic2lnbm91dFJlZGlyZWN0Q2FsbGJhY2sgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2lnbm91dFBvcHVwKGFyZ3MgPSB7fSkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlci5zaWduaW5Qb3B1cFwiKTtcblxuICAgICAgICBsZXQgdXJsID0gYXJncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgfHwgdGhpcy5zZXR0aW5ncy5wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgICAgIGFyZ3MucG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpID0gdXJsO1xuICAgICAgICBhcmdzLmRpc3BsYXkgPSBcInBvcHVwXCI7XG4gICAgICAgIGlmIChhcmdzLnBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSl7XG4gICAgICAgICAgICAvLyB3ZSdyZSBwdXR0aW5nIGEgZHVtbXkgZW50cnkgaW4gaGVyZSBiZWNhdXNlIHdlIFxuICAgICAgICAgICAgLy8gbmVlZCBhIHVuaXF1ZSBpZCBmcm9tIHRoZSBzdGF0ZSBmb3Igbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAvLyB0byB0aGUgcGFyZW50IHdpbmRvdywgd2hpY2ggaXMgbmVjZXNzYXJ5IGlmIHdlXG4gICAgICAgICAgICAvLyBwbGFuIHRvIHJldHVybiBiYWNrIHRvIHRoZSBjbGllbnQgYWZ0ZXIgc2lnbm91dFxuICAgICAgICAgICAgLy8gYW5kIHNvIHdlIGNhbiBjbG9zZSB0aGUgcG9wdXAgYWZ0ZXIgc2lnbm91dFxuICAgICAgICAgICAgYXJncy5zdGF0ZSA9IGFyZ3Muc3RhdGUgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dChhcmdzLCB0aGlzLl9wb3B1cE5hdmlnYXRvciwge1xuICAgICAgICAgICAgc3RhcnRVcmw6IHVybCxcbiAgICAgICAgICAgIHBvcHVwV2luZG93RmVhdHVyZXM6IGFyZ3MucG9wdXBXaW5kb3dGZWF0dXJlcyB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93RmVhdHVyZXMsXG4gICAgICAgICAgICBwb3B1cFdpbmRvd1RhcmdldDogYXJncy5wb3B1cFdpbmRvd1RhcmdldCB8fCB0aGlzLnNldHRpbmdzLnBvcHVwV2luZG93VGFyZ2V0XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgTG9nLmluZm8oXCJzaWdub3V0UG9wdXAgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZ25vdXRQb3B1cENhbGxiYWNrKHVybCwga2VlcE9wZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZihrZWVwT3BlbikgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZih1cmwpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHVybCA9IG51bGw7XG4gICAgICAgICAgICBrZWVwT3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXIuc2lnbm91dFBvcHVwQ2FsbGJhY2tcIik7XG4gICAgICAgIGxldCBkZWxpbWl0ZXIgPSAnPyc7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cE5hdmlnYXRvci5jYWxsYmFjayh1cmwsIGtlZXBPcGVuLCBkZWxpbWl0ZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgTG9nLmluZm8oXCJzaWdub3V0UG9wdXBDYWxsYmFjayBzdWNjZXNzZnVsXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfc2lnbm91dChhcmdzLCBuYXZpZ2F0b3IsIG5hdmlnYXRvclBhcmFtcyA9IHt9KSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIl9zaWdub3V0XCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lnbm91dFN0YXJ0KGFyZ3MsIG5hdmlnYXRvciwgbmF2aWdhdG9yUGFyYW1zKS50aGVuKG5hdlJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWdub3V0RW5kKG5hdlJlc3BvbnNlLnVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2lnbm91dFN0YXJ0KGFyZ3MgPSB7fSwgbmF2aWdhdG9yLCBuYXZpZ2F0b3JQYXJhbXMgPSB7fSkge1xuICAgICAgICBMb2cuZGVidWcoXCJfc2lnbm91dFN0YXJ0XCIpO1xuXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucHJlcGFyZShuYXZpZ2F0b3JQYXJhbXMpLnRoZW4oaGFuZGxlID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcImdvdCBuYXZpZ2F0b3Igd2luZG93IGhhbmRsZVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJsb2FkZWQgY3VycmVudCB1c2VyIGZyb20gc3RvcmFnZVwiKTtcblxuICAgICAgICAgICAgICAgIHZhciByZXZva2VQcm9taXNlID0gdGhpcy5fc2V0dGluZ3MucmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQgPyB0aGlzLl9yZXZva2VJbnRlcm5hbCh1c2VyKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXZva2VQcm9taXNlLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZF90b2tlbiA9IGFyZ3MuaWRfdG9rZW5faGludCB8fCB1c2VyICYmIHVzZXIuaWRfdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGlmIChpZF90b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2V0dGluZyBpZF90b2tlbiBpbnRvIHNpZ25vdXQgcmVxdWVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuaWRfdG9rZW5faGludCA9IGlkX3Rva2VuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlVXNlcigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwidXNlciByZW1vdmVkLCBjcmVhdGluZyBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNpZ25vdXRSZXF1ZXN0KGFyZ3MpLnRoZW4oc2lnbm91dFJlcXVlc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcImdvdCBzaWdub3V0IHJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMudXJsID0gc2lnbm91dFJlcXVlc3QudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaWdub3V0UmVxdWVzdC5zdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3JQYXJhbXMuaWQgPSBzaWdub3V0UmVxdWVzdC5zdGF0ZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZS5uYXZpZ2F0ZShuYXZpZ2F0b3JQYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkVycm9yIGFmdGVyIHByZXBhcmluZyBuYXZpZ2F0b3IsIGNsb3NpbmcgbmF2aWdhdG9yIHdpbmRvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3NpZ25vdXRFbmQodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIl9zaWdub3V0RW5kXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NTaWdub3V0UmVzcG9uc2UodXJsKS50aGVuKHNpZ25vdXRSZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJnb3Qgc2lnbm91dCByZXNwb25zZVwiKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNpZ25vdXRSZXNwb25zZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2b2tlQWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyLnJldm9rZUFjY2Vzc1Rva2VuXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkVXNlcigpLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlSW50ZXJuYWwodXNlciwgdHJ1ZSkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJyZW1vdmluZyB0b2tlbiBwcm9wZXJ0aWVzIGZyb20gdXNlciBhbmQgcmUtc3RvcmluZ1wiKTtcblxuICAgICAgICAgICAgICAgICAgICB1c2VyLmFjY2Vzc190b2tlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuZXhwaXJlc19hdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIudG9rZW5fdHlwZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVVc2VyKHVzZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwidXNlciBzdG9yZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHMubG9hZCh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgIExvZy5pbmZvKFwiYWNjZXNzIHRva2VuIHJldm9rZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmV2b2tlSW50ZXJuYWwodXNlciwgcmVxdWlyZWQpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiY2hlY2tpbmcgaWYgdG9rZW4gcmV2b2NhdGlvbiBpcyBuZWNlc3NhcnlcIik7XG5cbiAgICAgICAgdmFyIGFjY2Vzc190b2tlbiA9IHVzZXIgJiYgdXNlci5hY2Nlc3NfdG9rZW47XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIEpXVCB2cy4gcmVmZXJlbmNlIHRva2VuXG4gICAgICAgIGlmICghYWNjZXNzX3Rva2VuIHx8IGFjY2Vzc190b2tlbi5pbmRleE9mKCcuJykgPj0gMCkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwibm8gbmVlZCB0byByZXZva2UgZHVlIHRvIG5vIHVzZXIsIHRva2VuLCBvciBKV1QgZm9ybWF0XCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW5SZXZvY2F0aW9uQ2xpZW50LnJldm9rZShhY2Nlc3NfdG9rZW4sIHJlcXVpcmVkKS50aGVuKCgpID0+IHRydWUpO1xuICAgIH1cblxuICAgIHN0YXJ0U2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3U2VydmljZS5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3BTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdTZXJ2aWNlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBnZXQgX3VzZXJTdG9yZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIGB1c2VyOiR7dGhpcy5zZXR0aW5ncy5hdXRob3JpdHl9OiR7dGhpcy5zZXR0aW5ncy5jbGllbnRfaWR9YDtcbiAgICB9XG5cbiAgICBfbG9hZFVzZXIoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIl9sb2FkVXNlclwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLmdldCh0aGlzLl91c2VyU3RvcmVLZXkpLnRoZW4oc3RvcmFnZVN0cmluZyA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmFnZVN0cmluZykge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcInVzZXIgc3RvcmFnZVN0cmluZyBsb2FkZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVzZXIuZnJvbVN0b3JhZ2VTdHJpbmcoc3RvcmFnZVN0cmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIm5vIHVzZXIgc3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdG9yZVVzZXIodXNlcikge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwic3RvcmVVc2VyIHN0b3JpbmcgdXNlclwiKTtcblxuICAgICAgICAgICAgdmFyIHN0b3JhZ2VTdHJpbmcgPSB1c2VyLnRvU3RvcmFnZVN0cmluZygpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZS5zZXQodGhpcy5fdXNlclN0b3JlS2V5LCBzdG9yYWdlU3RyaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcInN0b3JlVXNlciByZW1vdmluZyB1c2VyIHN0b3JhZ2VcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXNlclN0b3JlLnJlbW92ZSh0aGlzLl91c2VyU3RvcmVLZXkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXJNYW5hZ2VyLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgT2lkY0NsaWVudFNldHRpbmdzIGZyb20gJy4vT2lkY0NsaWVudFNldHRpbmdzJztcbmltcG9ydCBSZWRpcmVjdE5hdmlnYXRvciBmcm9tICcuL1JlZGlyZWN0TmF2aWdhdG9yJztcbmltcG9ydCBJRnJhbWVOYXZpZ2F0b3IgZnJvbSAnLi9JRnJhbWVOYXZpZ2F0b3InO1xuaW1wb3J0IFdlYlN0b3JhZ2VTdGF0ZVN0b3JlIGZyb20gJy4vV2ViU3RvcmFnZVN0YXRlU3RvcmUnO1xuaW1wb3J0IEdsb2JhbCBmcm9tICcuL0dsb2JhbCc7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwO1xuY29uc3QgRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXJTZXR0aW5ncyBleHRlbmRzIE9pZGNDbGllbnRTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBwb3B1cF9yZWRpcmVjdF91cmksXG4gICAgICAgIHBvcHVwX3Bvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaSxcbiAgICAgICAgcG9wdXBXaW5kb3dGZWF0dXJlcyxcbiAgICAgICAgcG9wdXBXaW5kb3dUYXJnZXQsXG4gICAgICAgIHNpbGVudF9yZWRpcmVjdF91cmksXG4gICAgICAgIHNpbGVudFJlcXVlc3RUaW1lb3V0LFxuICAgICAgICBhdXRvbWF0aWNTaWxlbnRSZW5ldyA9IGZhbHNlLFxuICAgICAgICBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcgPSB0cnVlLFxuICAgICAgICBtb25pdG9yU2Vzc2lvbiA9IHRydWUsXG4gICAgICAgIGNoZWNrU2Vzc2lvbkludGVydmFsID0gRGVmYXVsdENoZWNrU2Vzc2lvbkludGVydmFsLFxuICAgICAgICByZXZva2VBY2Nlc3NUb2tlbk9uU2lnbm91dCA9IGZhbHNlLFxuICAgICAgICBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSxcbiAgICAgICAgcmVkaXJlY3ROYXZpZ2F0b3IgPSBuZXcgUmVkaXJlY3ROYXZpZ2F0b3IoKSxcbiAgICAgICAgaWZyYW1lTmF2aWdhdG9yID0gbmV3IElGcmFtZU5hdmlnYXRvcigpLFxuICAgICAgICB1c2VyU3RvcmUgPSBuZXcgV2ViU3RvcmFnZVN0YXRlU3RvcmUoeyBzdG9yZTogR2xvYmFsLnNlc3Npb25TdG9yYWdlIH0pXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKGFyZ3VtZW50c1swXSk7XG5cbiAgICAgICAgdGhpcy5fcG9wdXBfcmVkaXJlY3RfdXJpID0gcG9wdXBfcmVkaXJlY3RfdXJpO1xuICAgICAgICB0aGlzLl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkgPSBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3BvcHVwV2luZG93RmVhdHVyZXMgPSBwb3B1cFdpbmRvd0ZlYXR1cmVzO1xuICAgICAgICB0aGlzLl9wb3B1cFdpbmRvd1RhcmdldCA9IHBvcHVwV2luZG93VGFyZ2V0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fc2lsZW50X3JlZGlyZWN0X3VyaSA9IHNpbGVudF9yZWRpcmVjdF91cmk7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlcXVlc3RUaW1lb3V0ID0gc2lsZW50UmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY1NpbGVudFJlbmV3ID0gISFhdXRvbWF0aWNTaWxlbnRSZW5ldztcbiAgICAgICAgdGhpcy5faW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3ID0gaW5jbHVkZUlkVG9rZW5JblNpbGVudFJlbmV3O1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuXG4gICAgICAgIHRoaXMuX21vbml0b3JTZXNzaW9uID0gbW9uaXRvclNlc3Npb247XG4gICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbkludGVydmFsID0gY2hlY2tTZXNzaW9uSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuX3Jldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0ID0gcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQ7XG5cbiAgICAgICAgdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3IgPSByZWRpcmVjdE5hdmlnYXRvcjtcbiAgICAgICAgdGhpcy5faWZyYW1lTmF2aWdhdG9yID0gaWZyYW1lTmF2aWdhdG9yO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fdXNlclN0b3JlID0gdXNlclN0b3JlO1xuICAgIH1cblxuICAgIGdldCBwb3B1cF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb3B1cF9wb3N0X2xvZ291dF9yZWRpcmVjdF91cmk7XG4gICAgfVxuICAgIGdldCBwb3B1cFdpbmRvd0ZlYXR1cmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dGZWF0dXJlcztcbiAgICB9XG4gICAgZ2V0IHBvcHVwV2luZG93VGFyZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcG9wdXBXaW5kb3dUYXJnZXQ7XG4gICAgfVxuXG4gICAgZ2V0IHNpbGVudF9yZWRpcmVjdF91cmkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWxlbnRfcmVkaXJlY3RfdXJpO1xuICAgIH1cbiAgICAgZ2V0IHNpbGVudFJlcXVlc3RUaW1lb3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lsZW50UmVxdWVzdFRpbWVvdXQ7XG4gICAgfVxuICAgIGdldCBhdXRvbWF0aWNTaWxlbnRSZW5ldygpIHtcbiAgICAgICAgcmV0dXJuICEhKHRoaXMuc2lsZW50X3JlZGlyZWN0X3VyaSAmJiB0aGlzLl9hdXRvbWF0aWNTaWxlbnRSZW5ldyk7XG4gICAgfVxuICAgIGdldCBpbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNsdWRlSWRUb2tlbkluU2lsZW50UmVuZXc7XG4gICAgfVxuICAgIGdldCBhY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgIH1cblxuICAgIGdldCBtb25pdG9yU2Vzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbml0b3JTZXNzaW9uO1xuICAgIH1cbiAgICBnZXQgY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICB9XG4gICAgZ2V0IHJldm9rZUFjY2Vzc1Rva2VuT25TaWdub3V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmV2b2tlQWNjZXNzVG9rZW5PblNpZ25vdXQ7XG4gICAgfVxuXG4gICAgZ2V0IHJlZGlyZWN0TmF2aWdhdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVkaXJlY3ROYXZpZ2F0b3I7XG4gICAgfVxuXG4gICAgZ2V0IGlmcmFtZU5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lmcmFtZU5hdmlnYXRvcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHVzZXJTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJTdG9yZTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVXNlck1hbmFnZXJTZXR0aW5ncy5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRpcmVjdE5hdmlnYXRvciB7XG4gICAgXG4gICAgcHJlcGFyZSgpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZShwYXJhbXMpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiUmVkaXJlY3ROYXZpZ2F0b3IubmF2aWdhdGVcIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gdXJsIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIk5vIHVybCBwcm92aWRlZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBwYXJhbXMudXJsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJlZGlyZWN0TmF2aWdhdG9yLnVybFwiKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWRpcmVjdE5hdmlnYXRvci5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IElGcmFtZVdpbmRvdyBmcm9tICcuL0lGcmFtZVdpbmRvdyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElGcmFtZU5hdmlnYXRvciB7XG5cbiAgICBwcmVwYXJlKHBhcmFtcykge1xuICAgICAgICBsZXQgZnJhbWUgPSBuZXcgSUZyYW1lV2luZG93KHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZnJhbWUpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKHVybCkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVOYXZpZ2F0b3IuY2FsbGJhY2tcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIElGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnQodXJsKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0lGcmFtZU5hdmlnYXRvci5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5jb25zdCBEZWZhdWx0VGltZW91dCA9IDEwMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJRnJhbWVXaW5kb3cge1xuXG4gICAgY29uc3RydWN0b3IocGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5jdG9yXCIpO1xuXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYm91bmRNZXNzYWdlRXZlbnQgPSB0aGlzLl9tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fZnJhbWUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcblxuICAgICAgICAvLyBzaG90Z3VuIGFwcHJvYWNoXG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgIFxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGUocGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5uYXZpZ2F0ZVwiKTtcblxuICAgICAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnVybCkge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IoXCJObyB1cmwgcHJvdmlkZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdGltZW91dCA9IHBhcmFtcy5zaWxlbnRSZXF1ZXN0VGltZW91dCB8fCBEZWZhdWx0VGltZW91dDtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlVzaW5nIHRpbWVvdXQgb2Y6XCIsIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCh0aGlzLl90aW1lb3V0LmJpbmQodGhpcyksIHRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy5fZnJhbWUuc3JjID0gcGFyYW1zLnVybDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvbWlzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgX3N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG5cbiAgICAgICAgTG9nLmRlYnVnKFwiU3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGZyYW1lIHdpbmRvd1wiKTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgX2Vycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuXG4gICAgICAgIExvZy5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fcmVqZWN0KG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICB9XG5cbiAgICBfY2xlYW51cCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZyYW1lKSB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cuX2NsZWFudXBcIik7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLl9mcmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kTWVzc2FnZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90aW1lb3V0KCkge1xuICAgICAgICBMb2cuZGVidWcoXCJJRnJhbWVXaW5kb3cuX3RpbWVvdXRcIik7XG4gICAgICAgIHRoaXMuX2Vycm9yKFwiRnJhbWUgd2luZG93IHRpbWVkIG91dFwiKTtcbiAgICB9XG5cbiAgICBfbWVzc2FnZShlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5fbWVzc2FnZVwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdGltZXIgJiZcbiAgICAgICAgICAgIGUub3JpZ2luID09PSB0aGlzLl9vcmlnaW4gJiZcbiAgICAgICAgICAgIGUuc291cmNlID09PSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93XG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV0IHVybCA9IGUuZGF0YTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWNjZXNzKHsgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvcihcIkludmFsaWQgcmVzcG9uc2UgZnJvbSBmcmFtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBfb3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICAgIH1cblxuICAgIHN0YXRpYyBub3RpZnlQYXJlbnQodXJsKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIklGcmFtZVdpbmRvdy5ub3RpZnlQYXJlbnRcIik7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5wYXJlbnQgJiYgd2luZG93ICE9PSB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwgfHwgd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwicG9zdGluZyB1cmwgbWVzc2FnZSB0byBwYXJlbnRcIik7XG4gICAgICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh1cmwsIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSUZyYW1lV2luZG93LmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHtpZF90b2tlbiwgc2Vzc2lvbl9zdGF0ZSwgYWNjZXNzX3Rva2VuLCB0b2tlbl90eXBlLCBzY29wZSwgcHJvZmlsZSwgZXhwaXJlc19hdCwgc3RhdGV9KSB7XG4gICAgICAgIHRoaXMuaWRfdG9rZW4gPSBpZF90b2tlbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uX3N0YXRlID0gc2Vzc2lvbl9zdGF0ZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NfdG9rZW4gPSBhY2Nlc3NfdG9rZW47XG4gICAgICAgIHRoaXMudG9rZW5fdHlwZSA9IHRva2VuX3R5cGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICAgICAgdGhpcy5leHBpcmVzX2F0ID0gZXhwaXJlc19hdDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVzX2luKCkge1xuICAgICAgICBpZiAodGhpcy5leHBpcmVzX2F0KSB7XG4gICAgICAgICAgICBsZXQgbm93ID0gcGFyc2VJbnQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwaXJlc19hdCAtIG5vdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBleHBpcmVkKCkge1xuICAgICAgICBsZXQgZXhwaXJlc19pbiA9IHRoaXMuZXhwaXJlc19pbjtcbiAgICAgICAgaWYgKGV4cGlyZXNfaW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cGlyZXNfaW4gPD0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGdldCBzY29wZXMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zY29wZSB8fCBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgfVxuXG4gICAgdG9TdG9yYWdlU3RyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyLnRvU3RvcmFnZVN0cmluZ1wiKTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkX3Rva2VuOiB0aGlzLmlkX3Rva2VuLFxuICAgICAgICAgICAgc2Vzc2lvbl9zdGF0ZTogdGhpcy5zZXNzaW9uX3N0YXRlLFxuICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0aGlzLmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgIHRva2VuX3R5cGU6IHRoaXMudG9rZW5fdHlwZSxcbiAgICAgICAgICAgIHNjb3BlOiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgcHJvZmlsZTogdGhpcy5wcm9maWxlLFxuICAgICAgICAgICAgZXhwaXJlc19hdDogdGhpcy5leHBpcmVzX2F0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tU3RvcmFnZVN0cmluZyhzdG9yYWdlU3RyaW5nKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXIuZnJvbVN0b3JhZ2VTdHJpbmdcIik7XG4gICAgICAgIHJldHVybiBuZXcgVXNlcihKU09OLnBhcnNlKHN0b3JhZ2VTdHJpbmcpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXIuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcbmltcG9ydCBBY2Nlc3NUb2tlbkV2ZW50cyBmcm9tICcuL0FjY2Vzc1Rva2VuRXZlbnRzJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXJFdmVudHMgZXh0ZW5kcyBBY2Nlc3NUb2tlbkV2ZW50cyB7XG5cbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncykge1xuICAgICAgICBzdXBlcihzZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQgPSBuZXcgRXZlbnQoXCJVc2VyIGxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclVubG9hZGVkID0gbmV3IEV2ZW50KFwiVXNlciB1bmxvYWRlZFwiKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvciA9IG5ldyBFdmVudChcIlNpbGVudCByZW5ldyBlcnJvclwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dCA9IG5ldyBFdmVudChcIlVzZXIgc2lnbmVkIG91dFwiKTtcbiAgICAgICAgdGhpcy5fdXNlclNlc3Npb25DaGFuZ2VkID0gbmV3IEV2ZW50KFwiVXNlciBzZXNzaW9uIGNoYW5nZWRcIik7XG4gICAgfVxuXG4gICAgbG9hZCh1c2VyLCByYWlzZUV2ZW50PXRydWUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMubG9hZFwiKTtcbiAgICAgICAgc3VwZXIubG9hZCh1c2VyKTtcbiAgICAgICAgaWYgKHJhaXNlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2FkZWQucmFpc2UodXNlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5sb2FkKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJVc2VyTWFuYWdlckV2ZW50cy51bmxvYWRcIik7XG4gICAgICAgIHN1cGVyLnVubG9hZCgpO1xuICAgICAgICB0aGlzLl91c2VyVW5sb2FkZWQucmFpc2UoKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyTG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2FkZWQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJMb2FkZWQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlckxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgXG4gICAgYWRkVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlVXNlclVubG9hZGVkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJVbmxvYWRlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG5cbiAgICBhZGRTaWxlbnRSZW5ld0Vycm9yKGNiKSB7XG4gICAgICAgIHRoaXMuX3NpbGVudFJlbmV3RXJyb3IuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVNpbGVudFJlbmV3RXJyb3IoY2IpIHtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVNpbGVudFJlbmV3RXJyb3JcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fc2lsZW50UmVuZXdFcnJvci5yYWlzZShlKTtcbiAgICB9XG5cbiAgICBhZGRVc2VyU2lnbmVkT3V0KGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZVVzZXJTaWduZWRPdXQoY2IpIHtcbiAgICAgICAgdGhpcy5fdXNlclNpZ25lZE91dC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlVXNlclNpZ25lZE91dChlKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlVzZXJNYW5hZ2VyRXZlbnRzLl9yYWlzZVVzZXJTaWduZWRPdXRcIik7XG4gICAgICAgIHRoaXMuX3VzZXJTaWduZWRPdXQucmFpc2UoZSk7XG4gICAgfVxuXG4gICAgYWRkVXNlclNlc3Npb25DaGFuZ2VkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlVXNlclNlc3Npb25DaGFuZ2VkKGNiKSB7XG4gICAgICAgIHRoaXMuX3VzZXJTZXNzaW9uQ2hhbmdlZC5yZW1vdmVIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkKGUpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiVXNlck1hbmFnZXJFdmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkXCIpO1xuICAgICAgICB0aGlzLl91c2VyU2Vzc2lvbkNoYW5nZWQucmFpc2UoZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1VzZXJNYW5hZ2VyRXZlbnRzLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5cbmNvbnN0IERlZmF1bHRBY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IDYwOyAvLyBzZWNvbmRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY2Vzc1Rva2VuRXZlbnRzIHtcblxuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUgPSBEZWZhdWx0QWNjZXNzVG9rZW5FeHBpcmluZ05vdGlmaWNhdGlvblRpbWUsXG4gICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJpbmdUaW1lciA9IG5ldyBUaW1lcihcIkFjY2VzcyB0b2tlbiBleHBpcmluZ1wiKSxcbiAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVkVGltZXIgPSBuZXcgVGltZXIoXCJBY2Nlc3MgdG9rZW4gZXhwaXJlZFwiKVxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nTm90aWZpY2F0aW9uVGltZSA9IGFjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuXG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcgPSBhY2Nlc3NUb2tlbkV4cGlyaW5nVGltZXI7XG4gICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJlZCA9IGFjY2Vzc1Rva2VuRXhwaXJlZFRpbWVyO1xuICAgIH1cblxuICAgIGxvYWQoY29udGFpbmVyKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkFjY2Vzc1Rva2VuRXZlbnRzLmxvYWRcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9jYW5jZWxUaW1lcnMoKTtcblxuICAgICAgICAvLyBvbmx5IHJlZ2lzdGVyIGV2ZW50cyBpZiB0aGVyZSdzIGFuIGFjY2VzcyB0b2tlbiB3aGVyZSB3ZSBjYXJlIGFib3V0IGV4cGlyYXRpb25cbiAgICAgICAgaWYgKGNvbnRhaW5lci5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IGNvbnRhaW5lci5leHBpcmVzX2luO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiYWNjZXNzIHRva2VuIHByZXNlbnQsIHJlbWFpbmluZyBkdXJhdGlvbjpcIiwgZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSByZWdpc3RlciBleHBpcmluZyBpZiB3ZSBzdGlsbCBoYXZlIHRpbWVcbiAgICAgICAgICAgICAgICBsZXQgZXhwaXJpbmcgPSBkdXJhdGlvbiAtIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmdOb3RpZmljYXRpb25UaW1lO1xuICAgICAgICAgICAgICAgIGlmIChleHBpcmluZyA8PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJpbmcgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJyZWdpc3RlcmluZyBleHBpcmluZyB0aW1lciBpbjpcIiwgZXhwaXJpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjY2Vzc1Rva2VuRXhwaXJpbmcuaW5pdChleHBpcmluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFsd2F5cyByZWdpc3RlciBleHBpcmVkLiBpZiBpdCdzIG5lZ2F0aXZlLCBpdCB3aWxsIHN0aWxsIGZpcmVcbiAgICAgICAgICAgIGxldCBleHBpcmVkID0gZHVyYXRpb24gKyAxO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwicmVnaXN0ZXJpbmcgZXhwaXJlZCB0aW1lciBpbjpcIiwgZXhwaXJlZCk7XG4gICAgICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuaW5pdChleHBpcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVubG9hZCgpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiQWNjZXNzVG9rZW5FdmVudHMudW5sb2FkXCIpO1xuICAgICAgICB0aGlzLl9jYW5jZWxUaW1lcnMoKTtcbiAgICB9XG4gICAgXG4gICAgX2NhbmNlbFRpbWVycygpe1xuICAgICAgICBMb2cuZGVidWcoXCJjYW5jZWxpbmcgZXhpc3RpbmcgYWNjZXNzIHRva2VuIHRpbWVyc1wiKTtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5jYW5jZWwoKTtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmVkLmNhbmNlbCgpO1xuICAgIH1cblxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJpbmcoY2IpIHtcbiAgICAgICAgdGhpcy5fYWNjZXNzVG9rZW5FeHBpcmluZy5hZGRIYW5kbGVyKGNiKTtcbiAgICB9XG4gICAgcmVtb3ZlQWNjZXNzVG9rZW5FeHBpcmluZyhjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyaW5nLnJlbW92ZUhhbmRsZXIoY2IpO1xuICAgIH1cblxuICAgIGFkZEFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQuYWRkSGFuZGxlcihjYik7XG4gICAgfVxuICAgIHJlbW92ZUFjY2Vzc1Rva2VuRXhwaXJlZChjYikge1xuICAgICAgICB0aGlzLl9hY2Nlc3NUb2tlbkV4cGlyZWQucmVtb3ZlSGFuZGxlcihjYik7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY2Vzc1Rva2VuRXZlbnRzLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcbmltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50JztcblxuY29uc3QgVGltZXJEdXJhdGlvbiA9IDU7IC8vIHNlY29uZHNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBFdmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aW1lciA9IEdsb2JhbC50aW1lcikge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5fdGltZXIgPSB0aW1lcjtcbiAgICAgICAgdGhpcy5fbm93RnVuYyA9ICgpID0+IERhdGUubm93KCkgLyAxMDAwO1xuICAgIH1cblxuICAgIGdldCBub3coKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9ub3dGdW5jKCkpO1xuICAgIH1cblxuICAgIGluaXQoZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcblxuICAgICAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoZHVyYXRpb24pO1xuXG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLmluaXQgdGltZXIgXCIgKyB0aGlzLl9uYW1lICsgXCIgZm9yIGR1cmF0aW9uOlwiLCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMuX2V4cGlyYXRpb24gPSB0aGlzLm5vdyArIGR1cmF0aW9uO1xuXG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgZmFpcmx5IHNob3J0IHRpbWVyIGFuZCB0aGVuIGNoZWNraW5nIHRoZSBleHBpcmF0aW9uIGluIHRoZSBcbiAgICAgICAgLy8gY2FsbGJhY2sgdG8gaGFuZGxlIHNjZW5hcmlvcyB3aGVyZSB0aGUgYnJvd3NlciBkZXZpY2Ugc2xlZXBzLCBhbmQgdGhlbiBcbiAgICAgICAgLy8gdGhlIHRpbWVycyBlbmQgdXAgZ2V0dGluZyBkZWxheWVkLlxuICAgICAgICB2YXIgdGltZXJEdXJhdGlvbiA9IFRpbWVyRHVyYXRpb247XG4gICAgICAgIGlmIChkdXJhdGlvbiA8IHRpbWVyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWVyRHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90aW1lckhhbmRsZSA9IHRoaXMuX3RpbWVyLnNldEludGVydmFsKHRoaXMuX2NhbGxiYWNrLmJpbmQodGhpcyksIHRpbWVyRHVyYXRpb24gKiAxMDAwKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLl90aW1lckhhbmRsZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiVGltZXIuY2FuY2VsOiBcIiwgdGhpcy5fbmFtZSk7XG4gICAgICAgICAgICB0aGlzLl90aW1lci5jbGVhckludGVydmFsKHRoaXMuX3RpbWVySGFuZGxlKTtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVySGFuZGxlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLl9leHBpcmF0aW9uIC0gdGhpcy5ub3c7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlRpbWVyLl9jYWxsYmFjazsgXCIgKyB0aGlzLl9uYW1lICsgXCIgdGltZXIgZXhwaXJlcyBpbjpcIiwgZGlmZik7XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4cGlyYXRpb24gPD0gdGhpcy5ub3cpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICAgICAgICBzdXBlci5yYWlzZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1RpbWVyLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXIoY2IpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnB1c2goY2IpO1xuICAgIH1cblxuICAgIHJlbW92ZUhhbmRsZXIoY2IpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuX2NhbGxiYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBjYik7XG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFpc2UoLi4ucGFyYW1zKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlJhaXNpbmcgZXZlbnQ6IFwiICsgdGhpcy5fbmFtZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbaV0oLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FdmVudC5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWxlbnRSZW5ld1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IodXNlck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSB0aGlzLl90b2tlbkV4cGlyaW5nLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuYWRkQWNjZXNzVG9rZW5FeHBpcmluZyh0aGlzLl9jYWxsYmFjayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCB0cmlnZ2VyIGxvYWRpbmcgb2YgdGhlIHVzZXIgc28gdGhlIGV4cGlyaW5nIGV2ZW50cyBjYW4gYmUgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmdldFVzZXIoKS50aGVuKHVzZXI9PntcbiAgICAgICAgICAgICAgICAvLyBkZWxpYmVyYXRlIG5vcFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyPT57XG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggdG8gc3VwcHJlc3MgZXJyb3JzIHNpbmNlIHdlJ3JlIGluIGEgY3RvclxuICAgICAgICAgICAgICAgIExvZy5lcnJvcihcIkVycm9yIGZyb20gZ2V0VXNlcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5yZW1vdmVBY2Nlc3NUb2tlbkV4cGlyaW5nKHRoaXMuX2NhbGxiYWNrKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF90b2tlbkV4cGlyaW5nKCkge1xuICAgICAgICBMb2cuZGVidWcoXCJTaWxlbnRSZW5ld1NlcnZpY2UgYXV0b21hdGljYWxseSByZW5ld2luZyBhY2Nlc3MgdG9rZW5cIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5zaWduaW5TaWxlbnQoKS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiU2lsZW50IHRva2VuIHJlbmV3YWwgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIkVycm9yIGZyb20gc2lnbmluU2lsZW50OlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlU2lsZW50UmVuZXdFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2lsZW50UmVuZXdTZXJ2aWNlLmpzIiwiLy8gQ29weXJpZ2h0IChjKSBCcm9jayBBbGxlbiAmIERvbWluaWNrIEJhaWVyLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC4gU2VlIExJQ0VOU0UgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cblxuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5pbXBvcnQgQ2hlY2tTZXNzaW9uSUZyYW1lIGZyb20gJy4vQ2hlY2tTZXNzaW9uSUZyYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbk1vbml0b3Ige1xuXG4gICAgY29uc3RydWN0b3IodXNlck1hbmFnZXIsIENoZWNrU2Vzc2lvbklGcmFtZUN0b3IgPSBDaGVja1Nlc3Npb25JRnJhbWUpIHtcbiAgICAgICAgaWYgKCF1c2VyTWFuYWdlcikge1xuICAgICAgICAgICAgTG9nLmVycm9yKFwiTm8gdXNlciBtYW5hZ2VyIHBhc3NlZCB0byBTZXNzaW9uTW9uaXRvclwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZXJNYW5hZ2VyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIgPSB1c2VyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5fQ2hlY2tTZXNzaW9uSUZyYW1lQ3RvciA9IENoZWNrU2Vzc2lvbklGcmFtZUN0b3I7XG5cbiAgICAgICAgdGhpcy5fdXNlck1hbmFnZXIuZXZlbnRzLmFkZFVzZXJMb2FkZWQodGhpcy5fc3RhcnQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5hZGRVc2VyVW5sb2FkZWQodGhpcy5fc3RvcC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5nZXRVc2VyKCkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQodXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAvLyBjYXRjaCB0byBzdXBwcmVzcyBlcnJvcnMgc2luY2Ugd2UncmUgaW4gYSBjdG9yXG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJTZXNzaW9uTW9uaXRvciBjdG9yOyBlcnJvciBmcm9tIGdldFVzZXI6XCIsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IF9zZXR0aW5ncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLnNldHRpbmdzO1xuICAgIH1cbiAgICBnZXQgX21ldGFkYXRhU2VydmljZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNYW5hZ2VyLm1ldGFkYXRhU2VydmljZTtcbiAgICB9XG4gICAgZ2V0IF9jbGllbnRfaWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jbGllbnRfaWQ7XG4gICAgfVxuICAgIGdldCBfY2hlY2tTZXNzaW9uSW50ZXJ2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5jaGVja1Nlc3Npb25JbnRlcnZhbDtcbiAgICB9XG5cbiAgICBfc3RhcnQodXNlcikge1xuICAgICAgICBsZXQgc2Vzc2lvbl9zdGF0ZSA9IHVzZXIuc2Vzc2lvbl9zdGF0ZTtcblxuICAgICAgICBpZiAoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3ViID0gdXNlci5wcm9maWxlLnN1YjtcbiAgICAgICAgICAgIHRoaXMuX3NpZCA9IHVzZXIucHJvZmlsZS5zaWQ7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJTZXNzaW9uTW9uaXRvci5fc3RhcnQ7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb25fc3RhdGUsIFwiLCBzdWI6XCIsIHRoaXMuX3N1Yik7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGFTZXJ2aWNlLmdldENoZWNrU2Vzc2lvbklmcmFtZSgpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiSW5pdGlhbGl6aW5nIGNoZWNrIHNlc3Npb24gaWZyYW1lXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGllbnRfaWQgPSB0aGlzLl9jbGllbnRfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9jaGVja1Nlc3Npb25JbnRlcnZhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lID0gbmV3IHRoaXMuX0NoZWNrU2Vzc2lvbklGcmFtZUN0b3IodGhpcy5fY2FsbGJhY2suYmluZCh0aGlzKSwgY2xpZW50X2lkLCB1cmwsIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cud2FybihcIk5vIGNoZWNrIHNlc3Npb24gaWZyYW1lIGZvdW5kIGluIHRoZSBtZXRhZGF0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhdGNoIHRvIHN1cHByZXNzIGVycm9ycyBzaW5jZSB3ZSdyZSBpbiBub24tcHJvbWlzZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJFcnJvciBmcm9tIGdldENoZWNrU2Vzc2lvbklmcmFtZTpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0KHNlc3Npb25fc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3N0b3AoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9zdG9wXCIpO1xuXG4gICAgICAgIHRoaXMuX3N1YiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3NpZCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tTZXNzaW9uSUZyYW1lLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jYWxsYmFjaygpIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiU2Vzc2lvbk1vbml0b3IuX2NhbGxiYWNrXCIpO1xuXG4gICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLnF1ZXJ5U2Vzc2lvblN0YXR1cygpLnRoZW4oc2Vzc2lvbiA9PiB7XG4gICAgICAgICAgICB2YXIgcmFpc2VVc2VyU2lnbmVkT3V0RXZlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoc2Vzc2lvbikge1xuICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnN1YiA9PT0gdGhpcy5fc3ViKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhaXNlVXNlclNpZ25lZE91dEV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrU2Vzc2lvbklGcmFtZS5zdGFydChzZXNzaW9uLnNlc3Npb25fc3RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9uLnNpZCA9PT0gdGhpcy5fc2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJTYW1lIHN1YiBzdGlsbCBsb2dnZWQgaW4gYXQgT1AsIHNlc3Npb24gc3RhdGUgaGFzIGNoYW5nZWQsIHJlc3RhcnRpbmcgY2hlY2sgc2Vzc2lvbiBpZnJhbWU7IHNlc3Npb25fc3RhdGU6XCIsIHNlc3Npb24uc2Vzc2lvbl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNlc3Npb25DaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIkRpZmZlcmVudCBzdWJqZWN0IHNpZ25lZCBpbnRvIE9QOlwiLCBzZXNzaW9uLnN1Yik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiU3ViamVjdCBubyBsb25nZXIgc2lnbmVkIGludG8gT1BcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyYWlzZVVzZXJTaWduZWRPdXRFdmVudCkge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIlNlc3Npb25Nb25pdG9yLl9jYWxsYmFjazsgcmFpc2luZyBzaWduZWQgb3V0IGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNYW5hZ2VyLmV2ZW50cy5fcmFpc2VVc2VyU2lnbmVkT3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJFcnJvciBjYWxsaW5nIHF1ZXJ5Q3VycmVudFNpZ25pblNlc3Npb247IHJhaXNpbmcgc2lnbmVkIG91dCBldmVudFwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLl91c2VyTWFuYWdlci5ldmVudHMuX3JhaXNlVXNlclNpZ25lZE91dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2Vzc2lvbk1vbml0b3IuanMiLCIvLyBDb3B5cmlnaHQgKGMpIEJyb2NrIEFsbGVuICYgRG9taW5pY2sgQmFpZXIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLiBTZWUgTElDRU5TRSBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcblxuY29uc3QgRGVmYXVsdEludGVydmFsID0gMjAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tTZXNzaW9uSUZyYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgY2xpZW50X2lkLCB1cmwsIGludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2NsaWVudF9pZCA9IGNsaWVudF9pZDtcbiAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IGludGVydmFsIHx8IERlZmF1bHRJbnRlcnZhbDtcblxuICAgICAgICB2YXIgaWR4ID0gdXJsLmluZGV4T2YoXCIvXCIsIHVybC5pbmRleE9mKFwiLy9cIikgKyAyKTtcbiAgICAgICAgdGhpcy5fZnJhbWVfb3JpZ2luID0gdXJsLnN1YnN0cigwLCBpZHgpO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG5cbiAgICAgICAgLy8gc2hvdGd1biBhcHByb2FjaFxuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIHRoaXMuX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5fZnJhbWUuc3R5bGUud2lkdGggPSAwO1xuICAgICAgICB0aGlzLl9mcmFtZS5zdHlsZS5oZWlnaHQgPSAwO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lLnNyYyA9IHVybDtcbiAgICB9XG4gICAgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9mcmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCA9IHRoaXMuX21lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB0aGlzLl9ib3VuZE1lc3NhZ2VFdmVudCwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX21lc3NhZ2UoZSkge1xuICAgICAgICBpZiAoZS5vcmlnaW4gPT09IHRoaXMuX2ZyYW1lX29yaWdpbiAmJlxuICAgICAgICAgICAgZS5zb3VyY2UgPT09IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3dcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoZS5kYXRhID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJlcnJvciBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLmRhdGEgPT09IFwiY2hhbmdlZFwiKSB7XG4gICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiY2hhbmdlZCBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhlLmRhdGEgKyBcIiBtZXNzYWdlIGZyb20gY2hlY2sgc2Vzc2lvbiBvcCBpZnJhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQoc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fc2Vzc2lvbl9zdGF0ZSAhPT0gc2Vzc2lvbl9zdGF0ZSkge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiQ2hlY2tTZXNzaW9uSUZyYW1lLnN0YXJ0XCIpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcblxuICAgICAgICAgICAgdGhpcy5fc2Vzc2lvbl9zdGF0ZSA9IHNlc3Npb25fc3RhdGU7XG5cbiAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHRoaXMuX2NsaWVudF9pZCArIFwiIFwiICsgdGhpcy5fc2Vzc2lvbl9zdGF0ZSwgdGhpcy5fZnJhbWVfb3JpZ2luKTtcbiAgICAgICAgICAgIH0sIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIExvZy5kZWJ1ZyhcIkNoZWNrU2Vzc2lvbklGcmFtZS5zdG9wXCIpO1xuXG4gICAgICAgIHRoaXMuX3Nlc3Npb25fc3RhdGUgPSBudWxsO1xuXG4gICAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NoZWNrU2Vzc2lvbklGcmFtZS5qcyIsIi8vIENvcHlyaWdodCAoYykgQnJvY2sgQWxsZW4gJiBEb21pbmljayBCYWllci4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuIFNlZSBMSUNFTlNFIGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuaW1wb3J0IE1ldGFkYXRhU2VydmljZSBmcm9tICcuL01ldGFkYXRhU2VydmljZSc7XG5pbXBvcnQgR2xvYmFsIGZyb20gJy4vR2xvYmFsJztcblxuY29uc3QgQWNjZXNzVG9rZW5UeXBlSGludCA9IFwiYWNjZXNzX3Rva2VuXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuUmV2b2NhdGlvbkNsaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIFhNTEh0dHBSZXF1ZXN0Q3RvciA9IEdsb2JhbC5YTUxIdHRwUmVxdWVzdCwgTWV0YWRhdGFTZXJ2aWNlQ3RvciA9IE1ldGFkYXRhU2VydmljZSkge1xuICAgICAgICBpZiAoIXNldHRpbmdzKSB7XG4gICAgICAgICAgICBMb2cuZXJyb3IoXCJObyBzZXR0aW5ncyBwcm92aWRlZFwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHNldHRpbmdzIHByb3ZpZGVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yID0gWE1MSHR0cFJlcXVlc3RDdG9yO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVNlcnZpY2UgPSBuZXcgTWV0YWRhdGFTZXJ2aWNlQ3Rvcih0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgcmV2b2tlKGFjY2Vzc1Rva2VuLCByZXF1aXJlZCkge1xuICAgICAgICBMb2cuZGVidWcoXCJUb2tlblJldm9jYXRpb25DbGllbnQucmV2b2tlXCIpO1xuXG4gICAgICAgIGlmICghYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgICAgIExvZy5lcnJvcihcIk5vIGFjY2Vzc1Rva2VuIHByb3ZpZGVkXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWNjZXNzVG9rZW4gcHJvdmlkZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21ldGFkYXRhU2VydmljZS5nZXRSZXZvY2F0aW9uRW5kcG9pbnQoKS50aGVuKHVybCA9PiB7XG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZXJyb3IoXCJSZXZvY2F0aW9uIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJldm9jYXRpb24gbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBub3QgcmVxdWlyZWQsIHNvIGRvbid0IGVycm9yIGFuZCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNsaWVudF9pZCA9IHRoaXMuX3NldHRpbmdzLmNsaWVudF9pZDtcbiAgICAgICAgICAgIHZhciBjbGllbnRfc2VjcmV0ID0gdGhpcy5fc2V0dGluZ3MuY2xpZW50X3NlY3JldDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXZva2UodXJsLCBjbGllbnRfaWQsIGNsaWVudF9zZWNyZXQsIGFjY2Vzc1Rva2VuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3Jldm9rZSh1cmwsIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCwgYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgTG9nLmRlYnVnKFwiQ2FsbGluZyByZXZvY2F0aW9uIGVuZHBvaW50XCIpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgdGhpcy5fWE1MSHR0cFJlcXVlc3RDdG9yKCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJIVFRQIHJlc3BvbnNlIHJlY2VpdmVkLCBzdGF0dXNcIiwgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoRXJyb3IoeGhyLnN0YXR1c1RleHQgKyBcIiAoXCIgKyB4aHIuc3RhdHVzICsgXCIpXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgYm9keSA9IFwiY2xpZW50X2lkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGNsaWVudF9pZCk7IFxuICAgICAgICAgICAgaWYgKGNsaWVudF9zZWNyZXQpIHtcbiAgICAgICAgICAgICAgICBib2R5ICs9IFwiJmNsaWVudF9zZWNyZXQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoY2xpZW50X3NlY3JldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5ICs9IFwiJnRva2VuX3R5cGVfaGludD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChBY2Nlc3NUb2tlblR5cGVIaW50KTtcbiAgICAgICAgICAgIGJvZHkgKz0gXCImdG9rZW49XCIgKyBlbmNvZGVVUklDb21wb25lbnQoYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGJvZHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVG9rZW5SZXZvY2F0aW9uQ2xpZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==