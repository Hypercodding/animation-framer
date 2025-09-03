"use client";

import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Step1Inputs, Step2Inputs, Step3Inputs } from "../../types";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./Step3";



type FormData = Step1Inputs & Step2Inputs & Step3Inputs;

export default function MultiStepForm() {
  
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormData>();

  const steps = ["Personal Info", "Account Info", "Contact Info"];

  const nextStep = async () => {
    let fields: (keyof FormData)[] = [];
    if (step === 1) fields = ["firstName", "lastName"];
    if (step === 2) fields = ["email", "password"];

    const valid = await trigger(fields);
    if (valid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Final Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#7561bf] to-[#b19efc] p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 sm:p-8 rounded-2xl w-full max-w-lg space-y-4 sm:space-y-6 my-auto"
      >
        <div className="flex items-center justify-center relative">
        <ChevronLeft className="absolute left-0 text-white cursor-pointer"/>
        <h2 className="text-2xl font-bold text-white">novi</h2>
        </div>

        {/* Stepper */}
        <Progress value={step} max={steps.length} className="bg-[#b19efc] h-[2px]"/>

        {/* Step 1 */}
        {step === 1 && <Step1 />}

        {/* Step 2 */}
        {step === 2 && <Step2 register={register} errors={errors} />}

        {/* Step 3 */}
        {step === 3 && <Step3 register={register} errors={errors} /> }

        {/* Buttons */}
        <div className="flex justify-between pt-4 gap-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-white rounded-full cursor-pointer w-full"
            >
               <div className="flex items-center gap-2 justify-center">
                 <ArrowLeft size={16}/>
                  Back
              </div>
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-white text-black rounded-full cursor-pointer w-full"
            >
             <div className="flex items-center gap-2 justify-center">
                Next
                <ArrowRight size={16}/>
              </div>
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded-full  cursor-pointer w-full"
            >
               <div className="flex items-center gap-2 justify-center">
                  Submit
                  {/* <ArrowRight size={16}/> */}
              </div>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
