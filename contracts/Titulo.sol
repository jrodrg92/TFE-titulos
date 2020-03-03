pragma solidity ^0.5.0;

import "./ERC721Full.sol";

contract Titulo is ERC721Full {
    
    string[] public titulos;
    mapping(string => bool) _tituloExiste;
    
    constructor() ERC721Full("Titulo", "TITULO") public {

    }
 
    function mint(string memory _titulo) public {
        
        require(!_tituloExiste[_titulo]);
        
        uint _id = titulos.push(_titulo);
        
        //Funcion de minado
        _mint(msg.sender, _id);
        
        //Añadimos el resultado al mapeo
        _tituloExiste[_titulo] = true;
        
    }
    
}