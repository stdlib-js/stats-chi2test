/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var isObject = require( '@stdlib/assert-is-plain-object' );
var isnan = require( '@stdlib/assert-is-nan' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination for validated options
* @param {Options} options - function options
* @param {number} [options.alpha] - significance level
* @param {boolean} [options.correct] - boolean indicating whether to use Yates' continuity correction when provided a 2x2 contingency table
* @returns {(null|Error)} null or an error
*
* @example
* var opts = {};
* var options = {
*     'alpha': 0.01,
*     'correct': true
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( '0dP2h', options ) );
	}
	if ( hasOwnProp( options, 'alpha' ) ) {
		opts.alpha = options.alpha;
		if ( !isNumber( opts.alpha ) || isnan( opts.alpha ) ) {
			return new TypeError( format( '0dP8h', 'alpha', opts.alpha ) );
		}
		if ( opts.alpha < 0.0 || opts.alpha > 1.0 ) {
			return new RangeError( format( 'invalid option. `%s` option must be a number on the interval: [0, 1]. Value: `%s`.', 'alpha', opts.alpha ) );
		}
	}
	if ( hasOwnProp( options, 'correct' ) ) {
		opts.correct = options.correct;
		if ( !isBoolean( opts.correct ) ) {
			return new TypeError( format( '0dP30', 'correct', opts.simulate ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;