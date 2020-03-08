import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

class Index extends React.Component {

    render = () => (
        <div>
            <h1>Example Text</h1>
        </div>
    );
};

ReactDOM.render(<Index />, document.getElementById("root"));