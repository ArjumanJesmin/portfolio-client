/* eslint-disable react/no-unescaped-entities */
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { Input, Textarea } from "@nextui-org/react";
import ActionSubmitButton from "@/app/components/submitButton/ActionSubmitButton";
import { MapPin, PhoneCall } from "lucide-react";

type FormValues = {
  to: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post(
        "https://portfolio-server-inky-six.vercel.app/api/v1/mail",
        data
      );
      toast.success("Email sent:", response.data);
    } catch (error) {
      toast.error("Error sending email:");
    }
  };

  return (
    <div className="container gap-6 p-8 m-4 grid grid-cols-2 min-h-screen">
      <div className="p-5 justify-center items-center">
        <h2 className="text-center text-primary font-semibold text-2xl my-4">
          Let's Work Together!
        </h2>
        <p className="my-4">
          I design and code beautifully simple and I love what I do. Just simple
          like this!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="border p-5">
          <div className="my-4">
            <label className="my-3" htmlFor="to">
              To:
            </label>
            <Input
              placeholder="Email"
              id="to"
              type="email"
              {...register("to", { required: true })}
            />
            {errors.to && <span>This field is required</span>}
          </div>

          <div className="my-4">
            <label className="my-3" htmlFor="subject">
              Subject:
            </label>
            <Input
              placeholder="Subject"
              id="subject"
              type="text"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span>This field is required</span>}
          </div>

          <div className="my-4">
            <label className="my-3" htmlFor="message">
              Message:
            </label>
            <Textarea
              placeholder="Message"
              id="message"
              {...register("message", { required: true })}
            />
            {errors.message && <span>This field is required</span>}
          </div>

          <ActionSubmitButton>Send Email</ActionSubmitButton>
        </form>
      </div>

      <div className="text-center gap-8 justify-center items-center pt-52">
        <div className="flex justify-start items-center gap-6">
          <div className="p-4 rounded-full bg-primary text-white my-8">
            <PhoneCall size={30} />
          </div>
          <div className="gap-4">
            <p className="p-3">Phone</p>
            <p className="text-primary">+8801719308064</p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-6">
          <div className="p-4 rounded-full bg-primary text-white my-8">
            <MapPin size={30} />
          </div>
          <div className="gap-4">
            <p className="p-3">Address</p>
            <p className="text-primary">Satkhira, Khulna, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;