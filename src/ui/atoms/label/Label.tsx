import './label.css'
import type {LabelProps} from './Index';


const Label = ({text}: LabelProps) => {
    return(
        <div>
            <label className="label">{text}4.Label</label>
        </div>
    )
}
export default Label; 