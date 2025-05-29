type Option = {
    label: string;
    value: string;
};

type FormSelectProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
};

const FormSelect = ({ value, onChange, options }: FormSelectProps) => {
    return (
        <select value={value} onChange={onChange} className="w-full rounded-md border p-2">
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default FormSelect;
