/**
 * QkListの処理開始
 */
export const startQkList = () => {
    const QK_LIST_NODE = document.querySelectorAll(`[class*='qk-list']`);

    QK_LIST_NODE.forEach(qk_list => {
        const list_dur_str = getComputedStyle(qk_list).getPropertyValue('--qk-list-dur');
        const DURATION_MIN = Number(list_dur_str.replace("s", "")) * 1000;
        qk_list.firstElementChild?.classList.add('qk-list-anim-begin');

        const animation = (element: Element, children_list: Element[]) => {
            if (!element.classList.contains('in-view')) return;
            for (let children of children_list) {
                const classList = children.classList;
                if (classList.contains('qk-list-anim-begin')) {
                    classList.remove('qk-list-anim-begin');
                    const nextChild = children.nextElementSibling;
                    if (nextChild) {
                        nextChild.classList.add('qk-list-anim-begin');
                        return;
                    } else {
                        children_list[0].classList.add('qk-list-anim-begin');
                        return;
                    }
                }
            }
        }

        setInterval(animation, DURATION_MIN, qk_list, [...qk_list.children])
    });
}