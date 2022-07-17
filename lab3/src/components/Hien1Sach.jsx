import React from 'react';

class MotSach extends React.Component {
    constructor(props) {
        super(); console.log("MotSach Constructor");
        this.state = { thich: false }
    }

    toggleThichSach = () => {
        this.setState({ thich: !this.state.thich });
    }

    componentDidMount() { console.log("MotSach DidMount"); }
    render() {
        const kq = <div className={"MotSach " + (this.state.thich ? "liked" : "")}>
            <h3>{this.props.sach.tensach}</h3>
            <img className="sach-thumbnail" src={require("../assets/images/" + this.props.sach.urlHinh)} />
            <p className="gia">{this.props.sach.gia} vnđ</p>
            <div>
                <button className="btnthich" onClick={this.toggleThichSach}>{!this.state.thich ? "Thích" : "Bỏ thích"}</button>
                {
                    this.props.chonSach && <button className="btnthich" onClick={() => this.props.chonSach(this.props.sach)}>Mua</button>
                }

                {
                    !this.props.chonSach && <button className="btnthich" onClick={this.props.removeSachDaChon}>x</button>
                }

            </div>
        </div>
        return (kq);
    }
}

export default MotSach; 