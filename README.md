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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Chi-square independence test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform a chi-square independence test.



<section class="usage">

## Usage

```javascript
import chi2test from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-chi2test@v0.2.0-deno/mod.js';
```

#### chi2test( x\[, options] )

Computes a chi-square independence test for the **null hypothesis** that the joint distribution of the observed frequencies is the product of the row and column marginals (i.e., that the row and column variables are independent).

```javascript
// 2x2 contigency table:
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];

var res = chi2test( x );

var o = res.toJSON();
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
var res = chi2test( x, opts );

var o = res.toJSON();
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

By default, the function applies Yates' continuity correction for 2x2 contingency tables. To disable the continuity correction, set `correct` to `false`.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var opts = {
    'correct': false
};
var res = chi2test( x, opts );

var o = res.toJSON();
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

The function returns a results `object` having the following properties:

-   **alpha**: significance level.
-   **rejected**: `boolean` indicating the test decision.
-   **pValue**: test p-value.
-   **statistic**: test statistic.
-   **df**: degrees of freedom.
-   **expected**: expected observation frequencies.
-   **method**: test name.
-   **toString**: serializes results as formatted test output.
-   **toJSON**: serializes results as a JSON object.

To print formatted test output, invoke the `toString` method. The method accepts the following options:

-   **digits**: number of displayed decimal digits. Default: `4`.
-   **decision**: `boolean` indicating whether to show the test decision. Default: `true`.

```javascript
var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var res = chi2test( x );

var table = res.toString({
    'decision': false
});
/* e.g., returns

    Chi-square independence test

    Null hypothesis: the two variables are independent

       pValue: 0.0719
       statistic: 3.24
       degrees of freedom: 1

*/
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The chi-square approximation may be incorrect if the observed or expected frequencies in each category are too small. Common practice is to require frequencies **greater than** five. The Yates' continuity correction is enabled by default for 2x2 tables to account for this, although it tends to over-correct.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-multi-spaces -->

<!-- eslint no-undef: "error" -->

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import chi2test from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-chi2test@v0.2.0-deno/mod.js';

/*
* Data from students in grades 4-6 on whether good grades, athletic ability, or popularity are most important to them:
*
* Source: Chase, M.A and Dummer, G.M. (1992), "The Role of Sports as a Social Determinant for Children"
*/
var table = array([
    /* Grades Popularity Sports */
    [    63,      31,      25   ], // 4th
    [    88,      55,      33   ], // 5th
    [    96,      55,      32   ]  // 6th
]);

// Assess whether the grade level and the students' goals are independent of each other:
var out = chi2test( table );
// returns {...}

console.log( out.toString() );
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-chi2test.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-chi2test

[test-image]: https://github.com/stdlib-js/stats-chi2test/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-chi2test/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-chi2test/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-chi2test?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-chi2test.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-chi2test/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-chi2test/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-chi2test/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-chi2test/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-chi2test/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-chi2test/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-chi2test/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-chi2test/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-chi2test/main/LICENSE

</section>

<!-- /.links -->
