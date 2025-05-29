interface TitleProps {
    text: string;
}

const Title = ({ text }: TitleProps) => {
    return <h1 className="mb-6 text-center text-3xl font-bold">{text}</h1>;
};

export default Title;
