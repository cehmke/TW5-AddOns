@echo off

rem Start Server: DiffPlugin for TiddlyWiki5

tiddlywiki ^
	.\editions\develop ^
	--verbose ^
	--server ^
	|| exit 1