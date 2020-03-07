import React, {Component} from "react";
import users from '../../../require/accounts'
import ClaimHolder from '../../../../build/contracts/ClaimHolderAlumno.json';

class GetKey extends Component {

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
        await this.getKey();
    }

    async loadContratoAlumno(){
        const netWorkId = await this.state.web3.eth.net.getId();
        console.log(netWorkId)
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

    async getKey(){

        this.state.contractToken.methods.getKeysByPurpose(parseInt(1)).call( {from: users.accounts.alumno.cuentaAlumno , gas: 400000})
        .then(function(value){
            console.log(value);
        });

    }

    render(){
        return(
            <div>
                <button onClick={async () => {await this.getKey();}}>AniadirKeyUni</button>
            </div>
        )
    }

}

export default GetKey;