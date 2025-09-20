import type { HeadingProps } from './Index';
import './heading.css';



const Heading = ({text}: HeadingProps) => {
    
    return(
        <div className="heading">
            <h1>{text}</h1>
            <h1>1.Heading</h1>
        </div>
    )
}
export default Heading;