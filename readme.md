# DiffPlugin

The **diff widget** takes two texts and finds the differences. This implementation works on a character by character basis. The result of any diff may contain 'chaff', irrelevant small commonalities which complicate the output. A post-diff cleanup algorithm factors out these trivial commonalities.

The widget ist based upon the [google-diff-match-patch Project](https://code.google.com/p/google-diff-match-patch/) by Neil Fraser.

## License

* The embedded diff is licensed as [Apache License, Version 2.0, January 2004](http://www.apache.org/licenses/).
* My contributions (by @cehmke) that aren't part of a standard TiddlyWiki 5 distribution itself
(as available from the [TiddlyWiki](http://tiddlywiki.com) web site) are licensed as:
  * documentation is covered by [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
  * code (such as TiddlyWiki 5 macros, JavaScript, et cetera) and CSS definitions are covered by the [MIT License](http://opensource.org/licenses/mit-license.html).