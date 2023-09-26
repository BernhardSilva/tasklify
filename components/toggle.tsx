import { useState } from 'react';

type ToggleProps = {
    value: boolean;
    onChange: (value: boolean) => void;
    className?: string;
};

export function Toggle({ value, onChange, className }: ToggleProps) {
    const [checked, setChecked] = useState(value);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked;
        setChecked(newValue);
        onChange(newValue);
    };

    return (
        <label className={`inline-flex items-center ${className}`}>
            <div className="relative flex-shrink-0 w-10 h-6 cursor-pointer transition-colors duration-200 ease-in-out bg-gray-300 border-2 border-transparent rounded-full">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                    className="absolute top-0 left-0 hidden w-0 h-0 opacity-0"
                />
                <div
                    className={`absolute top-0 left-0 flex items-center justify-center w-6 h-6 transition-transform duration-200 ease-in-out transform ${checked ? 'translate-x-4 bg-green-500' : 'bg-white'
                        } rounded-full`}
                >
                    {checked && (
                        <svg
                            className="w-4 h-4 text-white pointer-events-none"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path d="M6 10.75L2.75 7.5l1.5-1.5 1.75 1.75L10.25 3l1.5 1.5L6 10.75z" />
                        </svg>
                    )}
                </div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-700 select-none">Completed</span>
        </label>
    );
}