function Hien2Tin(props){
    return (
        <div className="Hien2Tin">
            <h3><a href={"/?id="+ props.tin.id}>{props.tin.tieude}</a></h3>
            <p>{props.tin.mota}</p>
        </div>
    );
}
export default Hien2Tin;