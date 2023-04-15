// @ts-check
/**
 * @file QkList.js
 * @author skwk111 <support@qkanim.com>
 * @copyright (c) 2023 skwk111
 * @since v1.0.0
 * @version v1.0.0
 */

/**
 * リストアニメーション実装クラス
 */
export class QkList {

    /**
     * qk-listから始まるクラス名要素
     * @type {Element}
     */
    element;

    /**
     * アクティブ時に付与するクラス名
     * @type {string} in-view
     */
    activeAddClassName = 'in-view';

    /**
     * 子要素のアクティブ時に付与するクラス名
     * @type {string} qk-list-anim-begin
     */
    childActiveAddClassName = 'qk-list-anim-begin';

    /**
     * 子要素配列
     * @type {HTMLCollection}
     */
    childElementList;

    /**
     * @param {Element} element - qk-listから始まるクラス名の要素
     */
    constructor(element) {

        this.element = element;

        // 子要素がない場合、終了
        if (!this.element.firstElementChild) return;

        // qk-listの最初の子要素のliにqk-list-anim-beginクラスを付与
        this.element.firstElementChild.classList.add('qk-list-anim-begin');

        // 子要素のHTMLコレクションを保存
        this.childElementList = this.element.children;
    }

    /**
     * 初期化処理
     */
    init = () => {
        /**
         * --qk-list-durの取得
         * @type {string}
         */
        const list_dur_str = getComputedStyle(this.element).getPropertyValue('--qk-list-dur');

        /**
         * --qk-list-durからミリ秒の数値に変換
         * @type {number}
         */
        const DURATION_MIN = this.listDurStrToNumber(list_dur_str);


        // CSSで設定されている秒数から繰り返す秒数で繰り返す
        setInterval(this.nextElementAddClass, DURATION_MIN)
    }

    /**
     * アクティブ(qk-list-anim-begin)クラス位置を弟要素に付与
     * @returns void
     */
    nextElementAddClass = () => {
        // 画面内にない場合、処理終了
        if (!this.element.classList.contains(this.activeAddClassName)) return;

        /**
         * HTMLCollectionからElement[]の配列に変換
         */
        const children_list = [...this.childElementList];

        // 子要素のアニメーションを実行
        for (let children of children_list) {
            // クラスリストを取得
            const classList = children.classList;

            // クラスがある場合のみ処理開始
            if (!classList.contains(this.childActiveAddClassName)) continue;

            classList.remove(this.childActiveAddClassName);
            const nextChild = children.nextElementSibling;
            nextChild ? nextChild.classList.add(this.childActiveAddClassName) : children_list[0].classList.add(this.childActiveAddClassName);

            return;
        }
    }

    /**
     * --qk-list-durからミリ秒の数値に変換
     * @param {string} list_dur_str 
     */
    listDurStrToNumber = (list_dur_str) => {
        return Number(list_dur_str.replace("s", "")) * 1000;
    }
}