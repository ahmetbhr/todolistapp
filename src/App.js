import React, { Component } from "react";
import ItemMove from "./AppItem";
import "./AppList.css";


class App extends Component {
    constructor(props) {
        super(props);
    this.state = {
        items: []

    };
    this.adding= this.adding.bind(this);
    this.deleting = this.deleting.bind(this);


    }
    adding(e) {
        if(this._input.value !== ""){
            var newElement = {
                text: this._input.value,
                key:Date.now()

            };

            this.setState((prevState)=> {
                return{
                    items:prevState.items.concat(newElement)
                };
            });
        }

        this._input.value = "";
        console.log(this.state.items);
        e.preventDefault();
    }
    deleting(key) {
        console.log("Key in deleteItem: "+ key);
        console.log("Items are  delete: " + this.state.items);
        var filteredElements = this.state.items.filter(function (item){

            return (item.key !== key)
        });

        this.setState({
            items: filteredElements
        });
    }

    render() {
        return (
            <div className="Main">
                <div className="header">
                    <form onSubmit={this.adding }>
                        <input  ref={(a) => this._input  = a}
                                placeholder="Enter your task / deadline / status">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <ItemMove entries={this.state.items}
                          delete ={this.deleting}/>
            </div>
        );
    }
}

export default App;