import React, {Component} from "react";
import ClaimHolder from '../../../../build/contracts/ClaimHolderAlumno.json';

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
            var contractToken = await new web3.eth.Contract(abi,address);
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