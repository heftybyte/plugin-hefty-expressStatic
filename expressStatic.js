module.exports = function setup(options imports, register) {

	var httpServer = imports.httpServer;
	var express = require('express');
	var consolidate = require('consolidate');
	var swig = require('swig');
	var path = require('path');

	httpServer.engine('.html', consolidate.swig);
	httpServer.set('view engine', 'html');

	swig.init({
		root: options.viewDir,
		allowErrors: options.allowErrors || false
	});

	httpServer.set('views', options.viewDir);
	httpServer.use(express.static(path.join(__dirname, options.publicDir)));
}
