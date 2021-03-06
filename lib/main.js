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

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );
var isNonNegativeIntegerArray = require( '@stdlib/assert-is-nonnegative-integer-array' );
var isMatrixLike = require( '@stdlib/assert-is-matrix-like' );
var isArrayArray = require( '@stdlib/assert-is-array-array' );
var array = require( '@stdlib/ndarray-array' );
var incrmin = require( '@stdlib/stats-incr-min' );
var gsum = require( '@stdlib/blas-ext-base-gsum' );
var min = require( '@stdlib/math-base-special-min' );
var format = require( '@stdlib/string-format' );
var copy = require( '@stdlib/utils-copy' );
var chisqCDF = require( '@stdlib/stats-base-dists-chisquare-cdf' );
var prettyPrint = require( './print.js' );
var defaults = require( './defaults.json' );
var sumByDimension = require( './sum.js' );
var outer = require( './outer.js' );
var absdiff = require( './absdiff.js' );
var validate = require( './validate.js' );


// MAIN //

/**
* Performs a chi-square independence test.
*
* @param {(ndarray|ArrayArray)} x - two-way table of cell counts
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {boolean} [options.correct=true] - boolean indicating whether to use Yates' continuity correction when provided a 2x2 contingency table
* @throws {TypeError} first argument must be an array of arrays or ndarray-like object with dimension two
* @returns {Object} test results
*
* @example
*
* @example
* var x = [ [ 20, 30 ], [ 30, 20 ] ];
* var out = chi2test( x );
* // returns { 'rejected': false, 'alpha': 0.05, 'pValue': ~0.072, ... }
*/
function chi2test( x, options ) {
	var absDiff;
	var colSums;
	var rowSums;
	var minAbs;
	var yates;
	var means;
	var param;
	var nrow;
	var ncol;
	var opts;
	var pval;
	var stat;
	var err;
	var out;
	var N;
	var e;
	var i;
	var j;

	if ( isArrayArray( x ) ) {
		x = array( x );
	}
	if ( !isMatrixLike( x ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array of arrays or a two-dimensional ndarray-like object. Value: `%s`.', x ) );
	}
	if ( !isNonNegativeIntegerArray( x.data ) ) {
		throw new TypeError( format( 'invalid argument. First argument must contain nonnegative integers. Value: `%s`.', x ) );
	}
	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	N = gsum( x.length, x.data, 1 );
	nrow = x.shape[ 0 ];
	ncol = x.shape[ 1 ];

	colSums = sumByDimension( x, 1 );
	rowSums = sumByDimension( x, 2 );
	means = outer( rowSums, colSums );
	for ( i = 0; i < means.length; i++ ) {
		means.data[ i ] /= N;
	}
	absDiff = absdiff( x, means );

	if ( opts.correct && nrow === 2 && ncol === 2 ) {
		// Apply Yates' continuity correction:
		minAbs = incrmin();
		for ( i = 0; i < absDiff._buffer.length; i++ ) {
			minAbs( absDiff._buffer[ i ] );
		}
		yates = min( 0.5, minAbs() );
		for ( i = 0; i < absDiff._buffer.length; i++ ) {
			absDiff._buffer[ i ] -= yates;
		}
	}
	for ( i = 0; i < nrow; i++) {
		for ( j = 0; j < ncol; j++ ) {
			e = absDiff.get( i, j ) * absDiff.get( i, j ) / means.get( i, j );
			absDiff.set( i, j, e );
		}
	}
	stat = gsum( absDiff.length, absDiff._buffer, 1 );
	param = ( nrow - 1 ) * ( ncol - 1 );
	pval = 1 - chisqCDF( stat, param );

	out = {};
	setReadOnly( out, 'rejected', pval <= opts.alpha );
	setReadOnly( out, 'alpha', opts.alpha );
	setReadOnly( out, 'pValue', pval );
	setReadOnly( out, 'df', param );
	setReadOnly( out, 'expected', means );
	setReadOnly( out, 'statistic', stat );
	setReadOnly( out, 'method', 'Chi-square independence test' );
	setReadOnly( out, 'print', prettyPrint( out ) );
	return out;
}


// EXPORTS //

module.exports = chi2test;
