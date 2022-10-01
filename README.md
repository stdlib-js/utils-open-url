<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Open URL

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Open a URL.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-open-url
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var openURL = require( '@stdlib/utils-open-url' );
```

#### openURL( url )

Opens a URL in a user's default browser.

<!-- run-disable -->

```javascript
var proc = openURL( 'https://google.com' );
```

The returned child process is unreferenced, and, thus, the calling process will not wait for the child process to end before exiting. To try and end the child process, send an appropriate `kill` signal.

<!-- run-disable -->

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var proc = openURL( 'https://google.com' );

function close() {
    proc.kill( 'SIGINT' );
}

setTimeout( close, 1000 );
```

### Web Browser

In a web browser, `openURL` defers to the [`window.open()`][window-open] method.

#### openURL( url )

Opens a URL either in a new tab or window (based on the web browser and/or user preferences), returning a reference to a `window` object.

<!-- run-disable -->

```javascript
var win = openURL( 'https://google.com' );
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- run-disable -->

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var openURL = require( '@stdlib/utils-open-url' );

// Open a URL:
var proc = openURL( 'https://github.com' );

// After some time, kill the spawned process...
function close() {
    proc.kill( 'SIGINT' );
}

setTimeout( close, 5000 );
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/utils-open-url
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: open-url [options] <url>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ open-url https://github.com
<pid>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-open-url.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-open-url

[test-image]: https://github.com/stdlib-js/utils-open-url/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-open-url/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-open-url/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-open-url?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-open-url.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-open-url/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-open-url/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-open-url/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-open-url/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-open-url/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-open-url/main/LICENSE

[window-open]: https://developer.mozilla.org/en-US/docs/Web/API/Window/open

</section>

<!-- /.links -->
