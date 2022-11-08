import { Rating } from "react-simple-star-rating"
import { Form } from 'react-bootstrap'

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold"> Rating </span>
      {/* <Form.Label>
        <Form.Check type="checkbox" id={`check-api-`} />
         <Form.Check.Input type="checkbox" isValid /> 
        <Form.Check.Label >
          <Rating readonly size={25} initialValue={5} />
        </Form.Check.Label>
      </Form.Label> */}
      {Array.from({length:5}).map(( _, index)=>(
      <div className="mb-1" key={index}>
          <Form.Check type={'checkbox'} id={`check-api-${index}}`} >
            <Form.Check.Input  type={'checkbox'} isValid />
            <Form.Check.Label>
            <Rating readonly  size={25} initialValue={5-index} />
            </Form.Check.Label>
            
          </Form.Check>
        </div>
        ))}
    </>

  );
};

export default RatingFilterComponent;
