import { Form } from "react-bootstrap";

const CategoryFilterComponent = () => {
  return (
    <>
    <span className="fw-bold">Categrois</span>
    <Form className="mb-">
      {Array.from({length:5}).map((type, idx) => (
        <div key={idx} className="mb-3">
          <Form.Check type='checkbox' id={`check-api2-${idx}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label style={{cursor: "pointer"}} >Categrois-${idx}</Form.Check.Label>
      
          </Form.Check>
        </div>
      ))}
    </Form>
    </>
  );
};

export default CategoryFilterComponent;
