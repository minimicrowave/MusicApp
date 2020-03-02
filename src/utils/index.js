function removeDuplicatesFromArray(array) {
	return [ ...new Set(array) ];
}

function isTestEnv() {
	return process.env.NODE_ENV === 'test';
}

module.exports = {
	isTestEnv
};
