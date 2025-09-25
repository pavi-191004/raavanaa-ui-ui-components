import './subheading.css'
import type { SubHeadingProps } from './subHeading.types'



const SubHeading =({text}: SubHeadingProps) => {
    return(
        <div className='subheading'>
            <h3>{text}</h3>
            
        </div>
    )
}   
export default SubHeading;