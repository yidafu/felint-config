module.exports = {
    dependence: {
        npm: {

            "babel-eslint": "7.2.1",
            "eslint-config-airbnb": "14.1.0",
            "eslint-plugin-import": "2.2.0",
            "eslint-plugin-jsx-a11y": "4.0.0",
            "eslint-plugin-lean-imports": "0.3.3",
            "eslint-plugin-react": "6.10.3",
            "stylelint": "7.12.0",
            "stylelint-config-standard": "16.0.0",
            "stylelint-processor-html": "1.0.0",
            "@typescript-eslint/eslint-plugin": "^2.7.0",
            "@typescript-eslint/parser": "^2.7.0",
            "eslint": "^6.6.0",
            "eslint-config-airbnb": "^18.0.1",
            "husky": "^3.0.9",
            "typescript": "^3.7.2"
        }
    },
    plan: {
        node: ['.eslintrc_node.json', 'commitlint.config.js', 'commitlint.config.js'],
        web: ['.eslintrc_web.json', '.stylelintrc.json', 'commitlint.config.js'],
        default: ['.eslintrc_node.json', '.stylelintrc.json', 'commitlint.config.js']
    },
    initHooks: 'update_git_hooks.sh'
}