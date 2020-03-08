pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Titulo is ERC721Full{  
    
    event TituloAdded(address indexed owner, uint256 tokenId);
    
    string[] public titulos;
    
    mapping (string => bool)  _tituloExists;
    
    uint256 currentPrice = 1;

    constructor() ERC721Full("Titulo", "TIT") public {
    
    }
    
    function mint(string memory _titulo) public {
        require(!_tituloExists[_titulo]);
        uint _ide = titulos.push(_titulo);
        _mint(msg.sender, _ide);
        _tituloExists[_titulo] = true;
        emit TituloAdded(msg.sender, _ide);
    }
    
    function getToken(uint256  _ide) public view returns (string memory _titulo) {
        _titulo = titulos[_ide];
    }
    
}