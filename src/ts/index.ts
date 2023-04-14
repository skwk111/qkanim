/*!
 * QkAnim.js
 * @version 1.0.0
 * 
 * Copyright (c) 2023 skwk111
 *
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 *
 * The inherits function is:
 * ISC license | https://github.com/skwk111/qkanim_app/blob/main/LICENSE
 */

import '../scss/style.scss'
import { startObserver } from './qkObserver';
import { startQkList } from './qkList';

window.addEventListener('load', () => {
    startObserver();

    startQkList();
});

