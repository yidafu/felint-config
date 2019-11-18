module.exports = {
  dependence: {
    npm: {
      "@typescript-eslint/eslint-plugin": "2.7.0",
      "@typescript-eslint/parser": "2.7.0",
      "eslint-config-airbnb": "18.0.1",
      "eslint-plugin-lean-imports": "0.3.3",
      "eslint-plugin-import": "2.18.2",
      "husky": "3.0.9",
      "stylelint": "7.12.0",
      "stylelint-config-standard": "16.0.0",
      "stylelint-processor-html": "1.0.0",
      "typescript": "3.7.2"
      "babel-eslint": "10.0.3",
      "eslint-config-airbnb": "14.1.0",
      "eslint-plugin-jsx-a11y": "6.2.3",
      "eslint-plugin-react": "7.14.3",
      "eslint": "6.6.0",
    }
  },
  plan: {
    node: ['.eslintrc_node.json', 'commitlint.config.js'],
    web: ['.eslintrc_web.json', '.stylelintrc.json'],
    default: ['.eslintrc_node.json', '.stylelintrc.json']
  },
  initHooks: 'update_git_hooks.sh'
}