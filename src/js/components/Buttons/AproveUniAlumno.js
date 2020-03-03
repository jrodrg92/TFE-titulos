import React, {Component} from "react";
import Titulo from '../../../../build/contracts/Titulo.json';

class AddToken extends Component{

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
        await this.loadContratoAlumno();
    }

    async loadContratoAlumno(){
        const netWorkId = await this.state.web3.eth.net.getId();
        const netWorkData = ClaimHolder.networks[netWorkId];
        if(netWorkData){
            const abi = ClaimHolder.abi;        
            const address = netWorkData.address;                //Direccion contrato alumno
            var contractToken = await new web3.eth.Contract(abi,"0x5D8A9952dc5c1C2559574a1b3A3DF4D6D6B73A64");
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
                <button>AproveUniAlumno</button>
            </div>
        )
    }

}

export default AddToken;