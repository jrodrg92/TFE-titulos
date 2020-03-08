import React, {Component} from "react";
import Titulo from '../../../../build/contracts/Titulo.json';
import users from '../../../require/accounts'
import Web3 from 'web3';


class AddToken extends Component{

    constructor(props){
        super(props);
        var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
        this.state = {
            web3 : web3         
,
            abi : null,
            contractToken : null,
            address : '',
            totalSupply : '',
        }
    }

    async componentWillMount(){
        await this.loadContratoTitulos();
    }

    async loadContratoTitulos(){
        const netWorkId = await this.state.web3.eth.net.getId();
        const netWorkData = Titulo.networks[netWorkId];
        if(netWorkData){
            const abi = Titulo.abi;
            const address = netWorkData.address;
            var contractToken = await new web3.eth.Contract(abi,address);
            this.setState({abi: abi, 
                           contractToken:contractToken, 
                           address: address});
        }
        else{   
            //Contrato no desplegado.
        }
    }

    async createToken(nombre){
        await window.ethereum.enable();
        await this.state.contractToken.methods.mint(nombre).send({from : "0xB4DDf9f30F1324Ca86A0060A77110709Aa108353", gas: 500000}).on('receipt', function(receipt){
            console.log(receipt);                  
                if (receipt.events.Transfer) {
                    document.getElementById("txto").value = receipt.events.Transfer.returnValues.tokenId;
                }
                else {
                    console.log("error");
                }                                    
            });  
    }

    async consultarToken(idToken){
        await window.ethereum.enable();
        try {
            await this.state.contractToken.methods.totalSupply().call();
        }
        catch (error) {
            console.log(error.message);
        } 
    
    }

    render(){
        return(
            <div>
                <br/>
                <input type="text" id="tkn"></input>
                &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={async () => {await this.createToken(document.getElementById("tkn").value);}}>AddToken</button>
                <br/>
                <br/>   
                <input type="text" id="txto"></input>
                &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={async () => {await this.consultarToken(document.getElementById("txto").value);}}>OwnerOf</button>
                <p>{}</p>
            </div>
        )
    }

}

export default AddToken;