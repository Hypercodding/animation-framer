import { ReactElement } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Step1Inputs, Step2Inputs, Step3Inputs } from "../../types";

type FormData = Step1Inputs & Step2Inputs & Step3Inputs;

const Step3 = ({ register, errors }: { register: UseFormRegister<FormData>, errors: FieldErrors<FormData> }):ReactElement => {
    return (
        <div className="space-y-4 text-white">
        <div>
          <label className="block">Address</label>
          <input
            {...register("address", { required: "Address is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
        <div>
          <label className="block">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
      </div>
    )
}

export default Step3;