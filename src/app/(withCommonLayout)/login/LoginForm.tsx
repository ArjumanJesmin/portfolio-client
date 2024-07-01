"use client";
import { Input } from "@nextui-org/react";
import { useFormState } from "react-dom";
import { loginUser } from "../action/authAction";
import { createRef, useEffect } from "react";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ActionSubmitButton from "@/app/components/submitButton/ActionSubmitButton";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(loginUser, null);
  const ref = createRef<HTMLFormElement>();

  useEffect(() => {
    if (state && state?.success) {
      toast.success(state.message);
      ref.current?.reset();
      router.push("/dashboard/admin");
    }
    if (state && !state?.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={ref} action={formAction}>
      <Input name="email" type="email" label="Email" variant="bordered" />
      <Input
        className="mt-4"
        name="password"
        type="password"
        label="password"
        variant="bordered"
      />
      <div className="justify-center items-center">
        <ActionSubmitButton>Login</ActionSubmitButton>
      </div>
    </form>
  );
};

export default LoginForm;
