/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/**
* Opens a URL.
*
* ## Notes
*
* -   In a non-browser environment, the function returns an unreferenced child process. In a browser environment, the function returns a reference to a `window` object.
*
* @param url - URL to open
* @throws must provide a valid URI
* @returns spawned process (unreferenced)
*
* @example
* var proc = openURL( 'https://google.com' );
*/
declare function openURL( url: string ): any;


// EXPORTS //

export = openURL;
