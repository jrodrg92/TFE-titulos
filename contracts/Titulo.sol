pragma solidity ^0.4.23;

import './ERC721Token.sol';


contract Titulo is ERC721Token {

    string[] public titulos;

    mapping(address => bool) _tituloExist;

    constructor (string _name, string _symbol) public
        ERC721Token(_name, _symbol)
    {
    }

    /**
        * Custom accessor to create a unique token
    */
    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string  _tokenURI
    ) public
    {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }

}