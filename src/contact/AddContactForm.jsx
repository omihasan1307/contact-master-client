import React from "react";
import { useForm } from "react-hook-form";

const AddContactForm = ({ setIsOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="my-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 mb-5">
          <label htmlFor="" className="font-semibold">
            Name :
          </label>
          <input
            className="border text-basicColor p-2 rounded focus:outline w-full"
            placeholder="Enter your Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500"> * This field is required</span>
          )}
        </div>
        <div className="space-y-2 mb-5">
          <label htmlFor="" className="font-semibold">
            Email :
          </label>
          <input
            className="border text-basicColor p-2 rounded focus:outline w-full"
            placeholder="Enter your Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500"> * This field is required</span>
          )}
        </div>
        <div className="space-y-2 mb-5">
          <label htmlFor="" className="font-semibold">
            Phone :
          </label>
          <input
            type="number"
            className="border text-basicColor p-2 rounded focus:outline w-full"
            placeholder="Enter your Phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500"> * This field is required</span>
          )}
        </div>
        <div className="space-y-2 mb-5">
          <label htmlFor="" className="font-semibold">
            Company :
          </label>
          <br />
          <select
            {...register("gender")}
            className="border text-basicColor p-2 rounded focus:outline w-full"
          >
            <option selected>Company</option>
            <option value="airtel">Airtel</option>
            <option value="banglalink">Banglalink</option>
            <option value="teletalk">Teletalk</option>
            <option value="robi">Robi</option>
          </select>
          {errors.phone && (
            <span className="text-red-500"> * This field is required</span>
          )}
        </div>

        <input
          onClick={closeModal}
          className="px-4 py-2 border rounded font-semibold text-white bg-basicColor hover:bg-white hover:text-basicColor"
          type="submit"
        />
      </form>
      <div className=" flex justify-end -mt-10">
        <button
          type="button"
          className="font-semibold rounded-md bg-red-500 px-4 py-2  text-white  "
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddContactForm;
