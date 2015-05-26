# DiffPlugin

The **diff widget** takes two texts and finds the differences. This implementation works on a character by character basis. The result of any diff may contain 'chaff', irrelevant small commonalities which complicate the output. A post-diff cleanup algorithm factors out these trivial commonalities.

The widget ist based upon the [google-diff-match-patch Project](https://code.google.com/p/google-diff-match-patch/) by Neil Fraser.

## Diff Widget in Action

You can find the release version of plugin and wiki at [cehmke.github.io](https://cehmke.github.io/tw5plugins/DiffPluginWiki.html).

## License

* The embedded diff is licensed as [Apache License, Version 2.0, January 2004](http://www.apache.org/licenses/).
* My contributions (by @cehmke) that aren't part of a standard TiddlyWiki 5 distribution itself
(as available from the [TiddlyWiki](http://tiddlywiki.com) web site) are licensed as:
  * documentation is covered by [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
  * code (such as TiddlyWiki 5 macros, JavaScript, et cetera) and CSS definitions are covered by the [MIT License](http://opensource.org/licenses/mit-license.html).

## Work with the Repository

1. Install Node.js and TW5 as explained in [Getting Started &ndash;
Node.js](http://tiddlywiki.com/#GettingStarted%20-%20Node.js).
1. Clone this [``TW5-Diff`` repository](https://github.com/cehmke/TW5-Diff.git)
to your local drive.
1. Open a terminal and change to the directory/folder of the repository clone.
1. Start a TiddlyWiki server instance with ``serve.cmd`` or ``serve.sh``.
1. Visit [http://localhost:8080](http://localhost:8080) in your browser ... and you should see the DiffPluginWiki
1. Try editing and creating tiddlers. <br/> This will immediately synchronize with the repository files on your local drive.
1. To create a release, run ``bld.cmd`` or ``bld.sh``