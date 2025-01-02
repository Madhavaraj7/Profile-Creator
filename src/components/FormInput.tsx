interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | string[]; 
  isOptional?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  isOptional = false,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 mb-1 ${error ? "text-red-500" : "text-gray-700"}`}
      >
        {label}{" "}
        {isOptional && <span className="text-gray-400">(Optional)</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border-2 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {error && Array.isArray(error) ? (
        <ul className="mt-1 text-sm text-red-500 list-inside">
          {error.map((errorMsg, index) => (
            <li key={index}>• {errorMsg}</li>
          ))}
        </ul>
      ) : (
        error && <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
