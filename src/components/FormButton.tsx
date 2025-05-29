type FormButtonProps = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
};

const FormButton = ({ text, onClick, disabled = false }: FormButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full rounded-md p-2 text-white ${
                disabled ? 'cursor-not-allowed bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
        >
            {text}
        </button>
    );
};

export default FormButton;
