import { Field } from "react-final-form";
import "./Input.scss";

interface InputProps {
  className?: string;
  label: string;
  name: string;
  component?: () => JSX.Element;
  type: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  name,
  component,
  type,
  placeholder,
}) => {
  return (
    <div className={`input ${className}`}>
      <label>{label}</label>
      <Field
        name={name}
        component={component || "input"}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
