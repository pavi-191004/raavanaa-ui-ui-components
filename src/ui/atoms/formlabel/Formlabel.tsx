import type { FormLabelProps } from './FormLabel.types';
import './formlabel.css';
import Form from "react-bootstrap/Form";


const FormLabel = ({text, required}: FormLabelProps) => {
    return(
        <div className="formlabel">
            <Form.Label className={required ? "form-label-required" : ""}>{text}</Form.Label>
            
        </div>
    )
}
export default FormLabel; 
