import "./heading.css"
import type { HeadingProps } from "./Heading.types"


const Heading = ({text, as, className}: HeadingProps) => {
    const Tag = as || 'h1';
    
    return(
        <div>
            <Tag className={`heading ${className || ""}` }>{text}</Tag>
        </div>
    )
}
export default Heading;