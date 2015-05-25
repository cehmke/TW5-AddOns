/*\
title: $:/plugins/cehmke/diff/diff.js
type: application/javascript
module-type: widget

The diff widget takes two texts and finds the differences.
The used implementation works on a character by character basis.
The result of any diff may contain 'chaff', irrelevant small
commonalities which complicate the output. A post-diff cleanup
algorithm factors out these trivial commonalities.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

var Widget = require("$:/core/modules/widgets/widget.js").widget,
    diff_match_patch = require("$:/plugins/cehmke/diff/diff_match_patch_uncompressed.js").diff_match_patch;

var DiffWidget = function(parseTreeNode,options) {
    this.initialise(parseTreeNode,options);
};

/*
Inherit from the base widget class
*/
DiffWidget.prototype = new Widget();

/*
Render this widget into the DOM
*/
DiffWidget.prototype.render = function(parent,nextSibling) {
    this.parentDomNode = parent;
    this.computeAttributes();
    this.execute();

    // create Element
    var domNode = this.document.createElement("div");
    domNode.setAttribute("class", "tc-diff");
    // calculate diff
    var dmp = new diff_match_patch();
    var d = dmp.diff_main(this.diffText1, this.diffText2);
    dmp.Diff_Timeout = this.diffTimeout;
    dmp.Diff_EditCost = this.diffEditcost;
    if (this.diffCleanup === "semantic") {
        dmp.diff_cleanupSemantic(d);
    } else if (this.diffCleanup === "efficiency") {
        dmp.diff_cleanupEfficiency(d);	
    }
    domNode.innerHTML = dmp.diff_prettyHtml(d);

    parent.insertBefore(domNode,nextSibling);
    this.renderChildren(domNode,null);
    this.domNodes.push(domNode);
};

/*
Compute the internal state of the widget
*/
DiffWidget.prototype.execute = function() {
    // Get our parameters
    this.diffText1 = this.getAttribute("text1", "");
    this.diffText2 = this.getAttribute("text2", "");
    this.diffTimeout = parseFloat(this.getAttribute("timeout", 0));
    this.diffEditcost = parseFloat(this.getAttribute("edit_cost", 4));
    this.diffCleanup = this.getAttribute("cleanup", "semantic");
};

/*
Selectively refreshes the widget if needed. Returns true if the widget or any of its children needed re-rendering
*/
DiffWidget.prototype.refresh = function(changedTiddlers) {
    var changedAttributes = this.computeAttributes();
    if(changedAttributes["text1"] || changedAttributes["text2"] || changedAttributes["timeout"] || changedAttributes["edit_cost"] || changedAttributes["cleanup"]) {
        this.refreshSelf();
        return true;
    }
    return this.refreshChildren(changedTiddlers);
};

exports.diff = DiffWidget;

})();