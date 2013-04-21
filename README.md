Dark Octo Themes (GitHub Theme Chrome Extension)
====

If you prefer a darker source code theme when on github (and you use chrome)
this Chrome extension is for you!

![Screenshot](https://raw.github.com/craigerm/dark-octo-themes/master/example.png)

Installation
------------

1. Install from Chrome App Store (Recommended)
2. Install directly from source

### Chrome App Store
Search for "Dark Octo Themes" chrome extension
(or try this [url](https://chrome.google.com/webstore/detail/iahjlgmjhgemeebaflejbgfpojahcnng) directly)

### Directly From Source
1. git clone git://github.com/craigerm/dark-octo-themes.git
2. In chrome, go to tools -> extensions
3. Make sure "Developer Mode" is checked
4. Press the "Load unpacked extension..." button
5. Choose folder of this repository
6. Make sure the extension is enabled
7. View any github repository to see this in action

Usage
-----
Just navigate to any file in a github repository to see the dark theme
automatically applied. 

When you navigate to a file for a github repository you will see a dark theme.

Themes
------
Currently the only themes available are:
 - Vibrantink
 - Sidetracked

Features Planned
---------------
* <del>Viewing source code files in different themes</del>
* <del>Viewing files diffs in different themes</del>
* <del>Include theme when viewing gist.github</del>
* Multiple themes available
* Font family and size configuration

Creating New Theme
-----------------
(Work in progress)

We use `grunt` and `less` to build the themes.

Install npm modules:
```bash
npm install
```

Run the less grunt task to generate the templates. This will take all
templates inside the less folder and generate the resulting css for each
one inside the themes folder.
```bash
grunt
```

License
-------
[MIT
License](https://github.com/craigerm/dark-octo-themes/blob/master/LICENSE.md)

Credits
-----
* The vibrantink theme was based off of this [eclipse theme](http://www.eclipsecolorthemes.org/?view=theme&id=3)

