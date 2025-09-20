import type { FormlabelProps } from "./Index";
import './formlabel.css';


const Formlabel = ({text}: FormlabelProps) => {
    return(
        <div>
            <label className="formlabel">{text}7.Formlabel</label>
            
        </div>
    )
}
export default Formlabel; 