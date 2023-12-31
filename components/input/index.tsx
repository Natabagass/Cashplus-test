import { Props } from "@/interface/components/inputType";

const Input = ({
    type,
    placeholder,
    name,
    onChange,
    onFocus,
    onBlur,
    id,
    disabled,
    value,
    required,
    className
}: Props) => {
    return ( 
        <div className="flex items-center w-full">
            <input 
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                type={type} 
                name={name}
                required={required}
                id={id} 
                className={`p-3 text-[14px] w-full text-black pl-4 outline-none placeholder:text-[14px] ${className}`}
                />
        </div>
    );
}


export default Input;