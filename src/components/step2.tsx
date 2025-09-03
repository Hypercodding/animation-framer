import { ReactElement } from "react";

const Step2 = ({ register, errors }: { register: any, errors: any }):ReactElement => {
    return (
        <div className="space-y-4 text-white">
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border p-2 rounded "
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full border p-2 rounded "
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
          </div>
    )
}

export default Step2;