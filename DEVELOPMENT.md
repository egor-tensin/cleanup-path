To upgrade Node dependencies in package-lock.json:

    npm upgrade

The main dependencies are listed in package.json.
Specifically, the actions/core is the main dependency.
To upgrade it, modify package.json and run `npm upgrade`.
The list of actions/core version can be found
[here](https://www.npmjs.com/package/@actions/core?activeTab=readme).

The versioning scheme (and the usage of `^` and `~` symbols) is described
[here](https://docs.npmjs.com/about-semantic-versioning).
