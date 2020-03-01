pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Titulo is ERC721Full {
    constructor() ERC721Full("Titulo", "TITULO") public{
    }
}