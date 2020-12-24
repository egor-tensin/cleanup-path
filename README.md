Clean up PATH
=============

[![Test](https://github.com/egor-tensin/cleanup-path/workflows/Test/badge.svg)](https://github.com/egor-tensin/cleanup-path/actions?query=workflow%3ATest)

The PATH variable on Windows runners is a cesspool.
For example, it includes seemingly dozens of MinGW distributions.
This action takes a page out of MSYS2's book here, and cleans PATH so that only
the default paths are included.
Use it in your workflow like this:

    - name: Clean up PATH
      uses: egor-tensin/cleanup-path@v1

API
---

| Input   | Value   | Default | Description
| ------- | ------- | ------- | -----------
| dirs    | *Empty* | Yes     | No additional paths.
|         | *Other* | No      | Additional paths, separated by a semicolon (;).
| default | 1       | Yes     | Add the default directories under C:\Windows.
|         | *Other* | No      | Don't add the default directories.

The action sets the PATH environment variable.
Note that even if you call it with `default: 0` and don't specify any `dirs`,
it might not clear your PATH completely.
Actions like `setup-python`, etc. have a way to propagate their values to PATH
regardless.
Also, your `shell` selection matters.

License
-------

Distributed under the MIT License.
See [LICENSE.txt] for details.

[LICENSE.txt]: LICENSE.txt
