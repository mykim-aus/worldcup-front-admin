'use client';

interface InputProps {
  name?: string;
  defaultValue?: string;
  multiline?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  defaultValue,
  multiline,
  placeholder,
  disabled,
  onChange,
  className,
}) => {
  const defaultClasses = 'border p-2 rounded-md w-full';
  const appliedClasses = className || defaultClasses;
  const finalClasses = `${appliedClasses} ${
    disabled ? 'bg-gray-200 cursor-not-allowed' : ''
  }`;

  if (multiline) {
    return (
      <textarea
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={finalClasses}
      ></textarea>
    );
  }

  return (
    <input
      name={name}
      type="text"
      defaultValue={defaultValue}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={finalClasses}
    />
  );
};

export default Input;
