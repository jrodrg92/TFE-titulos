const Titulo = artifacts.require('./Titulo.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Titulo', (accounts) => {

    let contract

    before(async () => {
        contract = await Titulo.deployed();
        console.log(contract.abi)
    })

    describe('deployment', async () => {
        it('deploys succesfully', async() => {
            const address = contract.address;
            console.log(address);
            assert.notEqual(address, '');
        })

        it('has a name', async () => {
            const name = await contract.name();
            assert.equal(name, 'Titulo');
        })

        it('has a symbol', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'TITULO');
        })
    })
})