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
        await this.loadContratoTitulos();
        await this.contractData();
    }

    async loadContratoTitulos(){
        const netWorkId = await this.state.web3.eth.net.getId();
        const netWorkData = Titulo.networks[netWorkId];
        if(netWorkData){
            const abi = Titulo.abi;
            const address = netWorkData.address;
            var contractToken = new web3.eth.Contract(abi,address);
            this.setState({abi: abi, 
                           contractToken:contractToken, 
                           address: address});
        }
        else{
            //Contrato no desplegado.
        }
    }

    async contractData(){

        const supply = await this.state.contractToken.methods.totalSupply().call();
        console.log(supply)
        
    }

    render(){
        return(
            <div>
                <br/>
                <button>AddToken</button>
            </div>
        )
    }

}

export default AddToken;