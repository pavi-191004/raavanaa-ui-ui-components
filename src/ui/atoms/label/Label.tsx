import Badge from 'react-bootstrap/Badge';
import type { LabelProps } from './Label.types';
import './label.css';

const Label = ({ text, className, bg }: LabelProps) => {
  return (
    <Badge pill className={`custom-badge ${className || ''}`} bg={bg}>
      {text}
    </Badge>
  );
};

export default Label;
