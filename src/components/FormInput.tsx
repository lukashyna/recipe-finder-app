type FormInputProps = {
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    min?: number;
};

const FormInput = ({ type = 'text', value, onChange, placeholder = '', min }: FormInputProps) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            className="w-full rounded-md border p-2"
        />
    );
};

export default FormInput;
