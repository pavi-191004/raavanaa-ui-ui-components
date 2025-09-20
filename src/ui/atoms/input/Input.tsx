import './input.css'
import type {InputProps} from './Index';


const Input = ({ type = "text", placeholder, value, onChange, disabled }: InputProps) => {
  return (
    <div>
       <div>
        <h3 >3. Input field</h3>
      </div>
      <input className="input" type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} />
      </div>
  );
};

export default Input;
