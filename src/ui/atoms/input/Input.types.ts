
export type InputProps = {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean; 
  type?: "email" |"password" | "number" | "text" | "tel" | "url" | "file";  
  isMultiple?: boolean;   
};
