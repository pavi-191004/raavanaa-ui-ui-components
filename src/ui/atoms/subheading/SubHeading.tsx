import './subheading.css'
import type { SubHeadingProps } from './SubHeading.types'



const SubHeading =({text, as, className}: SubHeadingProps) => {
    const Tag = as || 'h3';
    return(
        <div>
            <Tag className={`subheading ${className || ""}`}>{text}</Tag>
        
            
        </div>
    )
}   
export default SubHeading;