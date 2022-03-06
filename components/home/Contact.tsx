import React, { FC, useState } from "react";
import { useMediaQuery } from "@mui/material";
import Input from "../partails/Input";
const Contact: FC = () => {
  const [{ email, message }, setInput] = useState<{
    email: string;
    message: string;
  }>({
    email: "",
    message: "",
  });
  const [onfocus, setOnFocus] = useState<"email" | "message">();

  const sm = useMediaQuery(`(max-width:640px)`);
  const xs = useMediaQuery(`(max-width:442px)`);

  return (
    <section id="contact" className="flex items-center flex-col gap-16">
      <div className="flex flex-col items-center">
        <div className="text-40">Contact</div>
        <svg
          width="177"
          height="3"
          viewBox="0 0 177 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H177L171.575 3H5.42529L0 0Z" fill="white" />
        </svg>
      </div>
      <div className="flex flex-col w-fit gap-8">
        {/* email and send btn */}

        <Input
          label="Email"
          name="email"
          empty={email.length < 1}
          type="email"
          autoComplete="off"
          value={email}
          onChange={(e) =>
            setInput((state) => ({ ...state, email: e.target.value }))
          }
        />

        {/* massege */}
        <Input
          label="Message"
          empty={message.length < 1}
          multiline={true}
          name="message"
          value={message}
          onChange={(e) =>
            setInput((state) => ({ ...state, message: e.target.value }))
          }
        ></Input>

        <button
          className="h-10 w-32 border-2 self-center border-borderGrey font-normal text-center text-xl"
          id="submit"
        >
          Send
        </button>
      </div>
    </section>
  );
};

export default Contact;
