pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Titulo is ERC721Full {  
    
    string[] public titulos;
    
    mapping (string => bool)  _tituloExists;
    
    constructor() ERC721Full("Titulo", "TIT") public {
    
    }
    
    function mint(string memory _titulo) public {
        require(!_tituloExists[_titulo]);
        uint _ide = titulos.push(_titulo);
        _mint(msg.sender, _ide);
        _tituloExists[_titulo] = true;
    }
    
}