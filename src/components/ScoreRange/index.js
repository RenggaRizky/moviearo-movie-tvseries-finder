import styles from "./style.module.css";

export default function ScoreRange({
    min,
    max,
    defaultValue,
    step,
    id,
    label,
}) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="text-lightgray text-sm mb-4">
                {label}
            </label>
            <div className="flex items-center justify-between gap-x-4">
                <input
                    className={styles}
                    id={id}
                    type="range"
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    step={step}
                />
                <input
                    type="text"
                    className="bg-darkblack border border-divider text-gray-500 mb-6 text-sm rounded-lg  block w-full p-2 basis-[20%]"
                    disabled={true}
                    defaultValue={defaultValue}
                />
            </div>
        </div>
    );
}
