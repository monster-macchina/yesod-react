## 🚀 yesod-react
yesod with react


For the Yesod backend/frontend you have to install: 
- ghc
- stack

For React you have to install (as with every React/JSX/JavaScript frontend development):
- node.js
- npm
- webpack
- babel

You develop from folder 'react'

You have to go to ./react: cd react

Start application with 'npm run start'

Build React and Yesod with 'npm run build'

Cleanbuild with 'npm run cleanbuild'

Build only React with 'npm run pre-build'

Initiate a normal build and start with 'npm run coldstart'

Shorten build time when developing only React with 'npm run warmstart'

All scripts in the package.json file:
* "pre-build-1": "node ./parser_jsx.js",
* "pre-build-2": "webpack",
* "pre-build-3": "node ./parser_julius.js",
* "pre-build": "npm run pre-build-1 && npm run pre-build-2 && npm run pre-build-3",
* "build": "npm run pre-build && stack build",
* "cleanbuild": "stack clean && npm run pre-build && stack build",
* "start": "cd ..; yesod devel -p 3000; cd react",
* "coldstart": "npm run build && npm run start;",
* "warmstart": "npm run pre-build && npm run start;",


## Haskell Setup

1. If you haven't already, [install Stack](https://haskell-lang.org/get-started)
	* On POSIX systems, this is usually `curl -sSL https://get.haskellstack.org/ | sh`
2. Install the `yesod` command line tool: `stack install yesod-bin --install-ghc`
3. Build libraries: `stack build`

If you have trouble, refer to the [Yesod Quickstart guide](https://www.yesodweb.com/page/quickstart) for additional detail.

## Development

Start a development server with:

```
stack exec -- yesod devel
```

As your code changes, your site will be automatically recompiled and redeployed to localhost.

## Tests

```
stack test --flag mythirdapp:library-only --flag mythirdapp:dev
```

(Because `yesod devel` passes the `library-only` and `dev` flags, matching those flags means you don't need to recompile between tests and development, and it disables optimization to speed up your test compile times).

## Documentation

* Read the [Yesod Book](https://www.yesodweb.com/book) online for free
* Check [Stackage](http://stackage.org/) for documentation on the packages in your LTS Haskell version, or [search it using Hoogle](https://www.stackage.org/lts/hoogle?q=). Tip: Your LTS version is in your `stack.yaml` file.
* For local documentation, use:
	* `stack haddock --open` to generate Haddock documentation for your dependencies, and open that documentation in a browser
	* `stack hoogle <function, module or type signature>` to generate a Hoogle database and search for your query
* The [Yesod cookbook](https://github.com/yesodweb/yesod-cookbook) has sample code for various needs

## Getting Help

* Ask questions on [Stack Overflow, using the Yesod or Haskell tags](https://stackoverflow.com/questions/tagged/yesod+haskell)
* Ask the [Yesod Google Group](https://groups.google.com/forum/#!forum/yesodweb)
* There are several chatrooms you can ask for help:
	* For IRC, try Freenode#yesod and Freenode#haskell
	* [Functional Programming Slack](https://fpchat-invite.herokuapp.com/), in the #haskell, #haskell-beginners, or #yesod channels.

