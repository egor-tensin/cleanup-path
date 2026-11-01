Releases
--------

* Update the version in package.json & package-lock.json using

      npm version --git-tag-version=false patch

    * Instead of `patch`, use `minor` or `major`.

* Idk why, but the version in node_modules is not updated by the command above,
so run `npm upgrade` too, I guess?
* Check if you need to update it in the README.
* Commit changes & make/update the required git tags.
    * Best done using [tag-release].

[tag-release]: https://github.com/egor-tensin/tag-release

Development
-----------

To upgrade Node dependencies in package-lock.json:

    npm upgrade

The main dependencies are listed in package.json.
Specifically, the actions/core is the main dependency.
To upgrade it, modify package.json and run `npm upgrade`.
The list of actions/core version can be found
[here](https://www.npmjs.com/package/@actions/core?activeTab=readme).

The versioning scheme (and the usage of `^` and `~` symbols) is described
[here](https://docs.npmjs.com/about-semantic-versioning).
