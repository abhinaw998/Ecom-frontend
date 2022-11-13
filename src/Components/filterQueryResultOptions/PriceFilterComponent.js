import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label><span className="fw-bold">Filter
      Price no greater then </span>500$ </Form.Label>
      <Form.Range />
    </>
  );
};

export default PriceFilterComponent;
