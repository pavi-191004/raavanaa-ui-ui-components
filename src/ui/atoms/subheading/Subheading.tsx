import type {SubheadingProps} from './Index';
import './subheading.css';


const Subheading =({text}: SubheadingProps) => {
    return(
        <div className='subheading'>
            <h3>{text}</h3>
            <h3>2.Subheading</h3>
        </div>
    )
}   
export default Subheading;