#!/bin/bash

# Build DiffPlugin for TiddlyWiki5

tiddlywiki \
	./editions/release \
	--verbose \
	--build \
	|| exit 1
