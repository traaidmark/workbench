# Git Guidelines

## Committing Code

You create a new commit following this format: `<ty­pe>[optional scope]: <de­scr­ipt­ion>`

### Types of commits

| Syntax   | Meaning                  | Description                                                    |
| -------- | ------------------------ | -------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                  |
| fix      | Bug Fixes                | A bug fix                                                      |
| docs     | Documentation            | Documentation only changes                                     |
| style    | Styles                   | (white­-space, format­ting, missing semi-c­olons, etc)         |
| refactor | Code refactoring         | Not a fix, and not a new feature                               |
| perf     | Performance Improvements | Code that improves performance                                 |
| build    | Builds                   | Changes that affect the build system or external depend­encies |
| chore    | Chores                   | Other changes that don't modify src or test files              |

### Specification

1. Commits MUST be prefixed with a type, which consists of a verb, feat, fix, etc., followed by a colon and a space.
2. The type feat MUST be used when a commit adds a new feature to your applic­ation or library.
3. The type fix MUST be used when a commit represents a bug fix for your applic­ation.
4. An optional scope MAY be provided after a type. A scope is a phrase describing a section of the codebase enclosed in parent­hesis, e.g., fix(pa­rser):
5. A descri­ption MUST immedi­ately follow the type/scope prefix. The descri­ption is a short descri­ption of the pull request, e.g., fix: array parsing issue when multiple spaces were contained in string.
6. A longer commit body MAY be provided after the short descri­ption. The body MUST begin one blank line after the descri­ption.
7. A footer MAY be provided one blank line after the body. The footer SHOULD contain additional meta-i­nfo­rmation about the pull-r­equest (such as the issues it fixes, e.g., fixes #13, #5).
8. Breaking changes MUST be indicated at the very beginning of the footer or body section of a commit. A breaking change MUST consist of the uppercase text BREAKING CHANGE, followed by a colon and a space.
9. A descri­ption MUST be provided after the BREAKING CHANGE:, describing what has changed about the API, e.g., BREAKING CHANGE: enviro­nment variables now take precedence over config files.
10. Types other than feat and fix MAY be used in your commit messages.
