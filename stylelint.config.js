module.exports = {
    "extends": "stylelint-config-strict-scss",
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        "selector-nested-pattern": "^&",
        "indentation": 2,
        "no-descending-specificity": null,
        "no-eol-whitespace": null,
        "declaration-empty-line-before": null,
        "value-keyword-case": null,
        "max-line-length": 140,
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "tailwind",
                    "apply",
                    "responsive",
                    "variants",
                    "screen",
                    "use"
                ]
            }
        ]
    }
}