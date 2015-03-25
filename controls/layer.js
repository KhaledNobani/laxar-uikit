/**
 * Copyright 2014 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
define( [
   'angular',
   'laxar_uikit/controls/layer/layer'
], function( ng, axLayer ) {
   'use strict';

   var module = ng.module( 'axLayer', [] );
   axLayer.createForModule( module );

   return module;
} );
