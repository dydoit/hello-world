module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended'
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'extend', 'content', 'include'] }
    ],
    indentation: 2,
    'no-descending-specificity': null,
    'block-no-empty': true, // 禁止出现空块
    'declaration-empty-line-before': 'never', // 要求或禁止在声明语句之前有空行。
    'property-no-vendor-prefix': true, // 禁止属性使用浏览器引擎前缀
    'declaration-block-no-duplicate-properties': true // 在声明的块中中禁止出现重复的属性
  }
}
