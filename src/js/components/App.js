import React, {Component} from "react";
import Web3 from 'web3';
import GetKey from './Buttons/GetKey'
import AddKey from './Buttons/AddKey'
import AddToken from './Buttons/AddToken'

class App extends Component {

    constructor(props){
        super(props);
        this.state = { 
            account : '',
            contract : '',

        };
    }

    async componentWillMount(){
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async loadWeb3(){
        if(window.ethereum){
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        else if(window.web3){
            window.web3 = new Web3(window.web3.currentprovider);
        }
        else{
            window.alert("no ethereum");
        }
    }

    async loadBlockchainData(){
        const web3 = window.web3;
        var acounts = await web3.eth.getAccounts();
        this.setState({account:acounts[0]});
    }

    render(){
        return(
            <div>
                <h2>ARTICLES</h2>
                <h2>{this.state.account}</h2>
                <GetKey/>
                <AddKey/>
                <AddToken/>
            </div>
        )
    }

}

export default App;