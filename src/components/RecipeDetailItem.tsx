type RecipeDetailItemProps = {
    label: string;
    value: string | number;
};

const RecipeDetailItem = ({ label, value }: RecipeDetailItemProps) => (
    <p>
        <strong>{label}:</strong> {value}
    </p>
);

export default RecipeDetailItem;
