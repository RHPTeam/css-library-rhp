<div align="center">
    <img src=./images/luon.jpg width=100px height=100px>
    <h3>Bootstrap</h3>
    <p>Sleek, intuitive, and powerful front-end framework for faster and easier web development.</p>
    <a>Explore Bootstrap docs » </a>
    <table>
        <tr> 
           <td> <a >Report bug</a></td>
           <td> <a >Request feature </a></td>
            <td><a >Themes</a></td>
            <td><a >Blog</a></td>
        </tr>
    </table>
</div>

# Table of contents
* <a>Quick start</a>
* <a>Status</a>
* <a>What's included</a>
* <a>Bugs and feature requests</a>
* <a>Documentation</a>
* <a>Contributing</a>
* <a>Community</a>
* <a>Versioning</a>
* <a>Creators</a>
* <a>Thanks</a>
* <a>Copyright and license</a>
# Quick start
Several quick start options are available:
* <a>Download the latest release.</a>
* Clone the repo: <code> git clone https://github.com/twbs/bootstrap.git </code>
* Install with [npm ](https://www.npmjs.com/): ` npm install bootstrap `
* Install with [yarn ](https://yarnpkg.com/): ` yarn add bootstrap@4.2.1 `
* Install with [Composer ](https://getcomposer.org/): ` composer require twbs/bootstrap:4.2.1 `
* Install with [NuGet ](https://www.nuget.org/): CSS : ` Install-Package bootstrap Sass: Install-Package bootstrap.sass`
<p>Read the Getting started page for information on the framework contents, templates and examples, and more.</p>

# What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
```
bootstrap/
└── dist/
    ├── css/
    │   ├── bootstrap-grid.css
    │   ├── bootstrap-grid.css.map
    │   ├── bootstrap-grid.min.css
    │   ├── bootstrap-grid.min.css.map
    │   ├── bootstrap-reboot.css
    │   ├── bootstrap-reboot.css.map
    │   ├── bootstrap-reboot.min.css
    │   ├── bootstrap-reboot.min.css.map
    │   ├── bootstrap.css
    │   ├── bootstrap.css.map
    │   ├── bootstrap.min.css
    │   └── bootstrap.min.css.map
    └── js/
        ├── bootstrap.bundle.js
        ├── bootstrap.bundle.js.map
        ├── bootstrap.bundle.min.js
        ├── bootstrap.bundle.min.js.map
        ├── bootstrap.js
        ├── bootstrap.js.map
        ├── bootstrap.min.js
        └── bootstrap.min.js.map
```
We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js and minified bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).

# Bugs and feature requests
Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please opena new issue.](https://github.com/twbs/bootstrap/issues/new)

# Documentation
Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at https://getbootstrap.com/. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/docs/4.2/assets/js/src/search.js` file.

# Running documentation locally
1. Run through the [tooling setup](https://getbootstrap.com/docs/4.2/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its documentation.

# Documentation for previous releases
* For v2.3.2: https://getbootstrap.com/2.3.2/
* For v3.3.x: https://getbootstrap.com/docs/3.3/
* For v3.4.0: https://getbootstrap.com/docs/3.4/
* For v4.0.x: https://getbootstrap.com/docs/4.0/
* For v4.1.x: https://getbootstrap.com/docs/4.1/

[Previous releases](https://github.com/twbs/bootstrap/releases) and their documentation are also available for download.

# Contributing
Please read through our [contributing guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/twbs/bootstrap/tree/master/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the editor config for easy use in common text editors. Read more and download plugins at https://editorconfig.org/.

# Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/bootstrap/releases) for changelogs for each release version of Bootstrap. Release announcement posts on [the official Bootstrap](https://blog.getbootstrap.com/) blog contain summaries of the most noteworthy changes made in each release.

# Creators
**Mark Otto**

   * https://twitter.com/mdo
   * https://github.com/mdo

**Jacob Thornton**

  * https://twitter.com/fat
  *  https://github.com/fat

# Thanks
![Image of Yaktocat](https://camo.githubusercontent.com/60f9eba6b13f38bad02ef92c3665696845dbe501/68747470733a2f2f6c6976652e62726f77736572737461636b2e636f6d2f696d616765732f6f70656e736f757263652f62726f77736572737461636b2d6c6f676f2e737667)
Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

# Backers
Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/bootstrap#backer)]
![](https://camo.githubusercontent.com/e6b3f13174c6a220d7a7bab7640520d118a3728a/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f626f6f7473747261702f6261636b6572732e7376673f77696474683d383930)

# Sponsors
Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/bootstrap#sponsor)]
![](https://camo.githubusercontent.com/da316bb98e432449140eadfcb06fd383454ef8a6/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f626f6f7473747261702f73706f6e736f722f302f6176617461722e737667)![](https://camo.githubusercontent.com/541dc497f4363598d38e7f35fdcd8d4e1ea59fe7/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f626f6f7473747261702f73706f6e736f722f312f6176617461722e737667)

# Copyright and license
Code and documentation copyright 2011-2018 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc](https://twitter.com/). Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).

