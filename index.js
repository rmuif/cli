const program = require("commander");

const user = require("./user");
const users = require("./users");
const roles = requiire("./roles");

const package = require("../package");

program.name(package.name);
program.version(package.version);
