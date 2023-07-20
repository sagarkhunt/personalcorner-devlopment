import { Spinner } from "react-bootstrap";

const Loader = (variant) => {
  return (
    <>
      <Spinner animation="border" variant={variant} />
    </>
  );
};

export default Loader;
