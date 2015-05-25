@echo off

rem Build DiffPlugin for TiddlyWiki5

tiddlywiki ^
	.\DiffPluginWiki ^
	--verbose ^
	--build ^
	|| exit 1