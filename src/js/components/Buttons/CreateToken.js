import React, {Component} from "react";
import Titulo from '../../../../build/contracts/Titulo.json';

class CreateToken extends Component {

    constructor(props){
        super(props);
        this.state = {
            web3 : window.web3,
            abi : null,
            contractToken : null,
            address : ''
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
            var contractToken = new web3.eth.Contract(abi,address);
            this.setState({abi: abi, contractToken:contractToken, address: address});
        }
        else{
            //Contrato no desplegado.
        }
    }

    render(){
        return(
            <div>
                <h2>addres contrato Titulo: {this.state.address}</h2>
                <button>Aniadir Token</button>
            </div>
        )
    }

}

export default CreateToken;