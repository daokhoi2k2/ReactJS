import Hien1Tin from "./Hien1Tin";
function TinMoi(props){
    let kq = [];
    props.dsTin.forEach( tin => {
        kq.push(<Hien1Tin tin={tin}></Hien1Tin>);
    });
    return (kq);
}
export default TinMoi;