import React from "react";
import List from "./List";

import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

var acounts = web3.eth.getAccounts();

acounts.then(function(value){
    console.log(value[0]);
    console.log(value[1]);
    console.log(value[2]);
})

const App = () => (
    <div>
        <h2>ARTICLES</h2>
            <List />
    </div>
);

export default App;