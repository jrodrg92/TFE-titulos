import React, {Component} from "react";
import ClaimHolder from '../../../../build/contracts/ClaimHolderUniversidad.json';

class AddKey extends Component {

    constructor(props){
        super(props);
        this.state = {
            web3 : window.web3,
            abi : null,
            contractToken : null,
            address : '',
            totalSupply : ''
        }
    }

    async componentWillMount(){
        await this.loadContratoUniversidad();
    }

    async loadContratoUniversidad(){
        const netWorkId = await this.state.web3.eth.net.getId();
        const netWorkData = ClaimHolder.networks[netWorkId];
        if(netWorkData){
            const abi = ClaimHolder.abi;        
            const address = netWorkData.address;                //Direccion contrato universidad
            var contractToken = await new web3.eth.Contract(abi,"0x82D96056f0d2bD327bf6e6D11c680DDB6d2DC5BB");
            this.setState({abi: abi, 
                           contractToken:contractToken, 
                           address: address});
        }
        else{
            //Contrato no desplegado.
        }
    }

    render(){
        return(
            <div>
                <br/>
                <input type="text"></input>
                <button>AddKey</button>
            </div>
        )
    }

}

export default AddKey;