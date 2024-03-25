# Contributing

We welcome everyone contributing to this project, thank you for investing time in contributions. The document is to help you on setting up development environment and opening a pull request.

## Development

### Local installation

#### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

#### Cloning the Repository

```bash
git clone https://github.com/eStreamSoftware/docs-sqlacc.git
cd docs-sqlacc
```

#### Installation

Install the project dependencies:

```bash
npm install
```

#### Running the Project

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Recommended code editor

We recommend to use [vscode](https://code.visualstudio.com/) in this project with the following extension installed:

- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) : markdown files linter

### Online one-click setup

#### Gitpod

Gitpod is a free, online, vscode alike code editor for contributing. You can launch it with a single click on the button below. What it does:

- clone the repository
- install the dependencies
- run `npm run start`

You can start editing straight away.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/eStreamSoftware/docs-sqlacc)

#### github.dev

An alternative of online web-based code editor. You can open this repository in **github.dev** by simply pressing `.` while browsing the repository.

## Pull request

### Semantic Commit Messages

In this repository, we practice semantic commit message. How does a semantic commit message looks like? here's an example:

`<type>: <subject>`

The various types of commits:

- `feat`: new feature for the end user
- `fix`: bug fix for the end user
- `docs`: changes to the documentation related to the repository
- `style`: formatting, missing semi colons, etc
- `refactor`: refactoring production code, eg. renaming a variable
- `test`: adding missing tests, refactoring tests
