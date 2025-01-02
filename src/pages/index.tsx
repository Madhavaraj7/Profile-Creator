import { JSX, useState } from "react";
import FormInput from "@/components/FormInput";
import validatePassword from "@/utils/validation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  password?: string[];
}

function Home(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";

    if (!formData.password) {
      newErrors.password = ["Password is required."];
    } else {
      const passwordErrors = validatePassword(formData.password);
      if (passwordErrors.length > 0) newErrors.password = passwordErrors;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", password: "" });
      setErrors({});
      toast.success("Profile successfully created!");
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Create Your Profile
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormInput
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            label="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            isOptional={true}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password} 
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Home />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={false}
        rtl={false}
      />
    </>
  );
}

export default App;
