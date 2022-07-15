import React from "react";
class HienChiTietTin extends React.Component {
    constructor() {
        super();
        this.state = { hienYK: false }
    }
    changeState = () => {
        this.setState(prevState => ({ hienYK: !prevState.hienYK }));
    }
    render() {
        return (
            <div className="tin"> <h1>CHI TIẾT TIN</h1>
                <h2>{this.props.tin.tieude}</h2>
                <p>{this.props.tin.mota}</p>
                <div dangerouslySetInnerHTML={{ __html: this.props.tin.noidung }}></div>
                <button type="button" onClick={this.changeState}>Add comment</button>
                {(this.state.hienYK == true) ? <form action="">
                    <input type='text' name="name" className="inputname" placeholder="enter name please" />
                    <br></br>
                    <textarea name="comment" rows={5} placeholder="enter comment please"></textarea>
                    <button type="button">Send comment</button>
                </form> : ""}
            </div>
        )
    }
}
export default HienChiTietTin;