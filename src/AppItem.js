import React, {Component} from "react";
class ItemMove extends Component {
    constructor(props) {
        super(props);

        this.newTasks = this.newTasks.bind(this);
    }

    newTasks(item) {
        return <li onClick={()=> this.delete(item.key)}
                    key = {item.key}>{item.text}</li>
    }

    delete(key) {
        console.log("Key is: + key");
        this.props.delete(key);

    }
    render() {
        var tdget = this.props.entries;
        var addItems = tdget.map(this.newTasks);

        return (
          <ul className="theItemList">
              {addItems}
          </ul>
        );
    }
}

export default ItemMove;
