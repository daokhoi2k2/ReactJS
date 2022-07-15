import Hien1Tin from "./Hien1Tin";
function TinXemNhieu(props) {
  return props.dsTin.map((tin) => <Hien1Tin key={tin.id} tin={tin} />);
}
export default TinXemNhieu;
