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
        const netWorkData = Titulo.networks;
        if(netWorkData){
            const abi = Titulo.abi;
            const address = netWorkData.address;
            var contractToken = await new web3.eth.Contract(abi,"0xB4DDf9f30F1324Ca86A0060A77110709Aa108353");
            this.setState({abi: abi, 
                           contractToken:contractToken, 
                           address: address});
        }
        else{   
            //Contrato no desplegado.
        }
    }

    async createToken(){
        await window.ethereum.enable();
        await this.state.contractToken.methods.mint("Experto universitario").send({from : "0xB4DDf9f30F1324Ca86A0060A77110709Aa108353", gas: 500000}, function(error, result){
            if(!error){
                console.log(result);
            }
            else  
                console.error(error);
          });
    }

    async consultarToken(idToken){
        await window.ethereum.enable();
        this.state.contractToken.methods.ownerOf(idToken).send( {from: "0xB4DDf9f30F1324Ca86A0060A77110709Aa108353", gas: 500000})
        .on('receipt', function(receipt){  
                console.log(receipt);
            });
    }

    render(){
        return(
            <div>
                <br/>
                <button onClick={async () => {await this.createToken();}}>AddToken</button>
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