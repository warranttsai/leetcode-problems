"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCases = void 0;
exports.testCases = [
    {
        items: [
            ["phone", "blue", "pixel"],
            ["computer", "silver", "lenovo"],
            ["phone", "gold", "iphone"],
        ],
        ruleKey: "color",
        ruleValue: "silver",
    },
    {
        items: [
            ["phone", "blue", "pixel"],
            ["computer", "silver", "phone"],
            ["phone", "gold", "iphone"],
        ],
        ruleKey: "type",
        ruleValue: "phone",
    },
];
