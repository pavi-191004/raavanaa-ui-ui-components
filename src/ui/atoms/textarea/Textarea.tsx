import type { TextareaProps } from './TextArea.types';
import './textarea.css';
import Form from 'react-bootstrap/Form';

const Textarea = ({placeholder, value, onChange,helperText, error }: TextareaProps) => {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Control 
          as="textarea" 
          rows={10} 
          className="textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
         <Form.Text className="text-muted">{helperText}</Form.Text>
          <p className="invalid-feedback">{error}</p>

      </Form.Group>
    </Form>
  );
};

export default Textarea;
