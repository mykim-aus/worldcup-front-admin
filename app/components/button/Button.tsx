'use client';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  type?: 'button' | 'submit' | 'reset';
  classStyle?: string;
  state1?: [string, React.Dispatch<React.SetStateAction<string>>];
  key?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  type,
  classStyle,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={
        classStyle
          ? classStyle
          : `
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        mx-1
        px-2
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `
      }
    >
      {label}
    </button>
  );
};

export default Button;
