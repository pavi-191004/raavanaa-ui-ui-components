import type { TextareaProps } from './Textarea.types';
import './textarea.css';
import Form from 'react-bootstrap/Form';

const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control 
          as="textarea" 
          rows={10} 
          className="textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Textarea;
