export default function CheckboxItem({ value, genre, id }) {
    return (
        <div className="flex items-center pl-4 border border-divider rounded-full bg-divider hover:ring-2 hover:ring-primary transition-all delay-100 duration-100 group">
            <input
                id={id}
                type="checkbox"
                value={value}
                name="bordered-checkbox"
                className="w-4 h-4 text-primary bg-gray-100 border-divider rounded-full focus:ring-primary focus:ring-2"
            />
            <label
                htmlFor={id}
                className="w-full py-2.5 mx-4 text-sm font-medium text-white"
            >
                {genre}
            </label>
        </div>
    );
}
