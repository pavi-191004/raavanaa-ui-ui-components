import './actionButton.css'
import type { ActionButtonProps } from './ActionButton.types'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const ActionButton = ({text, onClick, disabled, variant, className}: ActionButtonProps) => {
    return(
        <div>
            <Button variant={variant} className={`actionbutton ${className || ""}`} onClick={onClick} disabled={disabled}>{text}</Button>
        </div>
    )
}

export default ActionButton;




