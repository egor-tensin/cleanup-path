Clean up PATH
=============

[![Test](https://github.com/egor-tensin/cleanup-path/actions/workflows/test.yml/badge.svg)](https://github.com/egor-tensin/cleanup-path/actions/workflows/test.yml)

The PATH variable on Windows runners is a cesspool.
For example, it includes seemingly dozens of MinGW distributions.
This action takes a page out of MSYS2's book here, and cleans PATH so that only
the default paths are included.
Use it in your workflow like this:

    - name: Clean up PATH
      uses: egor-tensin/cleanup-path@v2

* You can pass additional directory paths to add to PATH using the `dirs`
parameter.
* System directories under C:\Windows are added to PATH by default.
Disable this by setting the `default` parameter to `0`.

API
---

| Input   | Value   | Default | Description
| ------- | ------- | ------- | -----------
| dirs    | *Empty* | ✓       | No additional paths.
|         | *Other* |         | Additional paths, separated by a semicolon (;).
| default | 1       | ✓       | Add the default directories under C:\Windows.
|         | *Other* |         | Don't add the default directories.

The action sets the PATH environment variable.

Notes
-----

* Even if you call the action with `default: 0` and don't specify any `dirs`,
it might not clear your PATH completely.
Actions like `setup-python`, etc. seem to have a way to propagate their values
to PATH regardless.
Also, your `shell` selection matters.
* v1 of this action is a simple composite action with the same API.
At some point, it turned out that restoring PATH value might be desirable in
the action's `post` stage.
In particular, the GitHub-provided `cache` action wasn't able to find the `tar`
executable on windows-2016 images (windows-2019 images have it built-in under
C:\Windows).
Composite actions don't support having the `post` stage, so it became a
JavaScript action.

License
-------

Distributed under the MIT License.
See [LICENSE.txt] for details.

[LICENSE.txt]: LICENSE.txt
