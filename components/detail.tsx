export const Detail = ({
    number,
    value
}: {
    number: string;
    value: string;
}) => {
    return (
        <div className="py-4 px-8 flex gap-2 border-custom-orange rounded-xl font-bold text-lg border-2">
            <span className="text-custom-orange">{number}</span>
            <span>{value}</span>
        </div>
    );
};
