import './textarea.css'
import type {TextareaProps} from './Index';


const Textarea = ({ type = "text", placeholder, value }: TextareaProps) => {
  return (
    <div>
       <div>
        <h3 >5. Text Area</h3>
      </div>
     
      <textarea className='textarea' placeholder={placeholder} value={value} />
     
    </div>
  );
};

export default Textarea;
