module.exports = {
    processors: ['stylelint-processor-styled-components'],
    extends: ['stylelint-config-get-off-my-lawn', 'stylelint-config-styled-components'],
    rules: {
        // disabled because of prettier
        'number-leading-zero': null,

        // disabled because of styled-components
        'declaration-empty-line-before': null,
        'order/properties-alphabetical-order': null,
        'value-keyword-case': null
    }
};
