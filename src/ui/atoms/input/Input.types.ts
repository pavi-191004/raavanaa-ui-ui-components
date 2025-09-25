
export type InputProps = {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  type?: "email" |"password" | "number" | "text" | "tel" | "url" | "file";  
  multiple?: boolean;   
};
