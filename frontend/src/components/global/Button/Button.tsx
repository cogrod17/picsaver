import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  className,
}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
