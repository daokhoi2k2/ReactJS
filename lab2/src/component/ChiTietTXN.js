import React from "react";
class ChiTietTXN extends React.Component{
    render(){
        return (
            <div className="tintxn">
                <h2>{this.props.tin.tieude}</h2>
                <p>{this.props.tin.mota}</p>
            </div>
        )
    }
}
export default ChiTietTXN;