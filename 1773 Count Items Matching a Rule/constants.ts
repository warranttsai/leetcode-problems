export const testCases = [
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
