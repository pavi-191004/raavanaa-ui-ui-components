export type ActionbuttonProps={
    text:string | number;
    onClick?:()=>void;
    disabled?:boolean;
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
}