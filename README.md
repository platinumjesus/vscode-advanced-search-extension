# vscode-advanced-search

![Icon](./icons/icon.png)

[![Build Status](https://travis-ci.com/platinumjesus/vscode-advanced-search-extension.svg?token=azxheXqbanZXKBottx4Z&branch=master)](https://travis-ci.com/platinumjesus/vscode-advanced-search-extension)  

A simple web search command that opens a page in your default browser based on your search configurations.

## Features

- Search github, google or stackoverflow with the editor selected text.
- Configure a search provider with default advanced parameters.
- Easily extendible with your own custom search definition.

## Commands

The default commands available with keybindgs

```json
{
    "command": "websearch.github",
    "key": "ctrl+alt+H"
},
{
    "command": "websearch.stackoverflow",
     "key": "ctrl+alt+O"
},
{
    "command": "websearch.google",
    "key": "ctrl+alt+G"
}
```

## Extension Settings

This extension contributes the following settings:

`websearch.searchProvider` | **object** | Search providers definition. You can chose here to customize the default search parameter which will be used when running the relative command. The default values are:

```json
{
    "name": "github",
    "baseUrl": "https://github.com/search",
    "defaultQuery": {},
    "defaultParams": {
        "type": "code"
    }
},
{
    "name": "stackoverflow",
    "baseUrl": "https://stackoverflow.com/search",
    "defaultQuery": {
        "is": "answer"
    },
    "defaultParams": {}
},
{
    "name": "google",
    "baseUrl": "https://www.google.com/search",
    "defaultQuery": {},
    "defaultParams": {}
}
```

`websearch.noInputBoxIfTextSelected` | **boolean** | Don't open an input box if text is selected in an editor. Default is true.

## Contribute

In case you want to extend the possible search or simply bug fix. Follow [this](vsc-extension-quickstart.md) to start developing for vscode.

1. Use `npm install` to install the required developer dependencies. This project uses Typescript with default tslint.
2. Extend the class *src/search/WebSearchProvider* if you think it is necessary with your own url builder logic.
3. Add the command to package json configuration for websearch.searchproviders and in the 
4. Send me a PR ;)

## Release Notes

### 1.0.0

Added Github and StackOverflow searches

### 1.1.0

Added Google search

### 1.2.0

Added Input box search


MIT © Ettore Ciprian