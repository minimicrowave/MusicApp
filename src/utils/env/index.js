function getNodeEnv() {
    return process.env.NODE_ENV;
}

module.exports = {
    isEnv(name) {
        return getNodeEnv() === name;
    },
    isTestEnv() {
        return this.isEnv('test');
    }
};
