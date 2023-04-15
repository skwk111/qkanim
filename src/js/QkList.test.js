/**
 * @jest-environment jsdom
 */

import { QkList } from "./QkList"

describe("QkList", () => {
    it("QkList making instance", () => {
        new QkList();
    })

    it("QkList init function", () => {
        const qklist = new QkList();
        qklist.init();
    })

    it("QkList setInterval function", () => {
        const qklist = new QkList();
        qklist.nextElementAddClass();
    })

    it("css --qk-list-dur string to number", () => {
        const qklist = new QkList();
        qklist.listDurStrToNumber('1s');
    })
})