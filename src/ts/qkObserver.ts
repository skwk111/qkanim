/**
 * 交差オブザーバー監視開始
 */
export const startObserver = () => {
    // 今回の交差を監視する要素
    const QK_ELEMENT_LIST = document.querySelectorAll(`.qk,.qk-once,[class*='qk-list']`);

    const options = {
        root: null,
        rootMargin: "30px",
        threshold: 0.25
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    // それぞれのboxを監視する
    QK_ELEMENT_LIST.forEach(qk_element => {
        observer.observe(qk_element);
    });
}

/**
 * 交差したときに呼び出す関数
 * @param entries
 */
const doWhenIntersect = (entries: IntersectionObserverEntry[]) => {
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