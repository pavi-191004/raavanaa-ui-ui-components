import type {ActionbuttonProps} from './Index';
import './actionbutton.css';


const Actionbutton = ({text, onClick, disabled, variant="primary"}: ActionbuttonProps) => {
    return(
        <div>
            <button className={`action-btn ${variant}`} onClick={onClick} disabled={disabled}>{text}Button</button>
        </div>
    )
}

export default Actionbutton;