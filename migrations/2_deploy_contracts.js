const Titulo = artifacts.require("Titulo");

module.exports = function(deployer) {
  deployer.deploy(Titulo);
};
