import { Spinner } from "react-bootstrap";

function Spiner() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        top: "calc(50% - 20px)",
        left: "calc(50% - 20px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        width: "40px",
        height: "40px",
        color: "var(--kombu-mid)",
        borderWidth: "4px",
      }}
      role='status'
    >
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}
export default Spiner;
