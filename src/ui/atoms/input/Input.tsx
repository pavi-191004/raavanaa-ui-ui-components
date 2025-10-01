import "./input.css";
import type { InputProps } from "./Input.types";
import Form from 'react-bootstrap/Form';


const Input = ({ type, placeholder, value, onChange, isDisabled, isMultiple }: InputProps) => {
  return (
  
       <div>
        <Form>
       <Form.Group className="input" controlId="">
        <Form.Control  className="form-control-file"
        type={type}
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        disabled={isDisabled} 
        multiple={isMultiple} />
      </Form.Group>
      </Form>
      </div>
      
  );
};

export default Input;
