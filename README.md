<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Chi-square independence test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Perform a chi-square independence test.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-chi2test
```

</section>

<section class="usage">

## Usage

```javascript
var chi2test = require( '@stdlib/stats-chi2test' );
```

#### chi2test( x\[, opts] )

Computes a chi-square independence test for the **null hypothesis** that the joint distribution of the cell counts in two-dimensional `ndarray` or `array` of `arrays` `x` is the product of the row and column marginals, i.e. that the row and column variables are independent.

```javascript
// 2x2 table
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];

var out = chi2test( x );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'pValue': ~0.072,
        'df': 1,
        'statistic': 3.24,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: significance level of the hypothesis test. Must be on the interval `[0,1]`. Default: `0.05`.
-   **correct**: `boolean` indicating whether to use Yates' continuity correction when provided a 2x2 contingency table. Default: `true`.

By default, the test is performed at a significance level of `0.05`. To adjust the significance level, set the `alpha` option.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var opts = {
    'alpha': 0.1
};
var out = chi2test( x, opts );
/* returns
    {
        'rejected': true,
        'alpha': 0.1,
        'pValue': ~0.072,
        'df': 1,
        'statistic': 3.24,
        ...
    }
*/
```

For 2x2 contingency tables, the function by default applies Yates' continuity correction. To disable the continuity correction, set `correct` to `false`.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var opts = {
    'correct': false
};
var out = chi2test( x, opts );
/* returns
    {
        'rejected': true,
        'alpha': 0.05,
        'pValue': ~0.046,
        'df': 1,
        'statistic': 4,
        ...
    }
*/
```

The function returns an `object` having the following properties:

-   **alpha**: significance level.
-   **rejected**: `boolean` indicating the test decision.
-   **pValue**: test p-value.
-   **statistic**: test statistic.
-   **df**: degrees of freedom.
-   **expected**: expected cell counts.
-   **method**: test name.
-   **print**: method for printing formatted test output.

To print formatted test output, invoke the `print` method. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var out = chi2test( x );
console.log( out.print() );
/* =>
*    Chi-square independence test
*
*    Null hypothesis: the two variables are independent
*
*        pValue: 0.0719
*        statistic: 3.24
*        degrees of freedom: 1
*
*    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/

console.log( out.print({
    'digits': 6
}) );
/* =>
* Chi-square independence test
*
* Null hypothesis: the two variables are independent
*
*     pValue: 0.071861
*     statistic: 3.24
*     degrees of freedom: 1
*
* Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The chi-square approximation may be incorrect if the observed or expected frequencies in each category are too small. Common practice is to require frequencies greater than five. The Yates' continuity correction is enabled by default for 2x2 tables to account for this, although it tends to over-correct.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array = require( '@stdlib/ndarray-array' );
var chi2test = require( '@stdlib/stats-chi2test' );

var table;
var out;

/*
* Data from students in grades 4-6 on whether good grades, athletic ability, or popularity are most important to them:
*
* Source: Chase, M.A and Dummer, G.M. (1992), "The Role of Sports as a Social Determinant for Children"
*/
table = array([
    /* Grades Popular Sports */
    [ 63, 31, 25 ], // 4th
    [ 88, 55, 33 ], // 5th
    [ 96, 55, 32 ] // 6th
]);

// Assess whether the grade level and the students' goals are independent of each other:
out = chi2test( table );
// returns {...}

console.log( out.print() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-chi2test.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-chi2test

[test-image]: https://github.com/stdlib-js/stats-chi2test/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-chi2test/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-chi2test/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-chi2test?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-chi2test.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-chi2test/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-chi2test/main/LICENSE

</section>

<!-- /.links -->
