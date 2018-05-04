// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

export const Log = require('./src/Log').default;
export const OidcClient = require('./src/OidcClient').default;
export const OidcClientSettings = require('./src/OidcClientSettings').default;
export const WebStorageStateStore = require('./src/WebStorageStateStore').default;
export const InMemoryWebStorage = require('./src/InMemoryWebStorage').default;
export const UserManager = require('./src/UserManager').default;
export const AccessTokenEvents = require('./src/AccessTokenEvents').default;
export const MetadataService = require('./src/MetadataService').default;
export const CordovaPopupNavigator = require('./src/CordovaPopupNavigator').default;
export const CordovaIFrameNavigator = require('./src/CordovaIFrameNavigator').default;
export const CheckSessionIFrame = require('./src/CheckSessionIFrame').default;
export const TokenRevocationClient = require('./src/TokenRevocationClient').default;
export const SessionMonitor = require('./src/SessionMonitor').default;
export const Global = require('./src/Global').default;
export const User = require('./src/User').default;

export default {
    Log,
    OidcClient,
    OidcClientSettings,
    WebStorageStateStore,
    InMemoryWebStorage,
    UserManager,
    AccessTokenEvents,
    MetadataService,
    CordovaPopupNavigator,
    CordovaIFrameNavigator,
    CheckSessionIFrame,
    TokenRevocationClient,
    SessionMonitor,
    Global,
    User
};
