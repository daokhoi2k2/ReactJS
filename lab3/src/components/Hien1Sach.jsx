import React from 'react';

class MotSach extends React.Component {
    constructor(props) {
        super(); console.log("MotSach Constructor");
    }
    componentDidMount() { console.log("MotSach DidMount"); }
    render() {
        console.log("MotSach Render");
        const kq = <div className="MotSach">
            <h3>{this.props.sach.tensach}</h3>
        </div>
        return (kq);
    }
}

export default MotSach; 