import "./input.css";
import type { InputProps } from "./Input.types";
import Form from 'react-bootstrap/Form';


const Input = ({ type, placeholder, value, onChange, disabled, multiple }: InputProps) => {
  return (
  
       <div>
        <Form>
       <Form.Group className="input" controlId="exampleForm.ControlInput1">
        <Form.Control  className="form-control-file"
        type={type}
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        disabled={disabled} 
        multiple={multiple} />
      </Form.Group>
      </Form>
      </div>
      
  );
};

export default Input;
