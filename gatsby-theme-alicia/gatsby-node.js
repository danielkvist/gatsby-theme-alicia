const fs = require('fs');
const mkdirp = require('mkdirp');

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
	const { program } = store.getState();
	const { content = 'content/sections' } = themeOptions;

	if (!fs.existsSync(content)) {
		reporter.log(`${content} directory not found!`);
		reporter.log(`creating the ${content} directory`);

		mkdirp(content)
			.then((result) => {
				reporter.success(`content directory created at ${result}`);
			})
			.catch((e) =>
				reporter.error(`error while creating content directory: ${e}`)
			);
	}
};
