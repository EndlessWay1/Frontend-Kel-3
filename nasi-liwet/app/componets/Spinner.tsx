import { Spinner } from "react-bootstrap";

function Spiner() {
  return (
    <Spinner
      style={{
        display: "fixed",
        top: "50%",
        left: "50%",
        fontWeight: "bold",
        fontSize: "large",
        transform: "translate(-50%,-50%)",
      }}
      role='status'
    >
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
}
export default Spiner;
