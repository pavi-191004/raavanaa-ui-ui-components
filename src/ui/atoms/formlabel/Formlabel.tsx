import type { FormLabelProps } from './FormLabel.types';
import './formLabel.css';
import Form from "react-bootstrap/Form";


const FormLabel = ({text, isRequired}: FormLabelProps) => {
    return(
        <div className="formlabel">
            <Form.Label className={isRequired ? "form-label-required" : ""}>{text}</Form.Label>
            
        </div>
    )
}
export default FormLabel; 
