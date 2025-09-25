export type ActionButtonProps = {
  text: string | number;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark" | "link";
  className?: string;
  children?: React.ReactNode;
};
