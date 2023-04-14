/**
 * @file QkAnim.js
 * @author skwk111 <support@qkanim.com>
 * @copyright skwk111
 * @license MIT
 * @see https://opensource.org/licenses/MIT
 * @see https://github.com/skwk111/qkanim/blob/main/LICENSE | QkAnimライセンスについて
 * @since v1.0.0
 * @version v1.0.0
 */
import '../scss/style.scss';
import './QkList';
import { QkList } from './QkList';

window.addEventListener('load', () => {
    /**
     * 今回の交差を監視する要素
     * @type {NodeListOf<Element>}
     */
    const QK_ELEMENT_LIST = document.querySelectorAll(`.qk,.qk-once`);

    /**
     * qk-listから始まるクラス名の要素群
     * @type {NodeListOf<Element>}
     */
    const QK_LIST_NODE = document.querySelectorAll(`[class*='qk-list']`);


    /**
     * 取得した要素配列
     * @type {Element[]}
     */
    const OBSERVER_ELEMENT_LIST = [...QK_ELEMENT_LIST, ...QK_LIST_NODE]

    // qkOptionsがグローバルで定義されていた場合
    if (typeof qkOptions !== 'undefined') {
        const observer = new IntersectionObserver(doWhenIntersect, qkOptions);
        OBSERVER_ELEMENT_LIST.forEach(qk_element => {
            observer.observe(qk_element);
        });
    } else {
        const observer = new IntersectionObserver(doWhenIntersect, { root: null, rootMargin: "30px", threshold: 0.25 });
        OBSERVER_ELEMENT_LIST.forEach(qk_element => {
            observer.observe(qk_element);
        });
    }

    /**
     * QkListの処理開始
     */
    QK_LIST_NODE.forEach(qk_list_ele => {
        const QK_LIST = new QkList(qk_list_ele);
        QK_LIST.init();
    });
});

/**
 * 交差したときに呼び出す関数
 * @param {IntersectionObserverEntry[]} entries
 */
const doWhenIntersect = (entries) => {
    entries.forEach(entry => {
        const class_list = entry.target.classList;
        if (entry.isIntersecting) {
            if (class_list.contains('in-view')) return;
            class_list.add('in-view');
        } else if (!class_list.contains('qk-once')) {
            if (!class_list.contains('in-view')) return;
            class_list.remove('in-view');
        }
    });
}