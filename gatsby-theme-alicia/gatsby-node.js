const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap = ({ store, reporter }, options) => {
	const { program } = store.getState();
	const content = (options && options.content) || 'posts';

	if (!fs.existsSync(content)) {
		reporter.log(`creating the ${content} directory`);
		mkdirp.sync(content);
	}
};
