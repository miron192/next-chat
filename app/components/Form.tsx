"use client";

import { useRef } from "react";
import { postData } from "../action";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        formRef.current?.reset();
        await postData(formData);
      }}
      ref={formRef}
      className="p-6 fixed bottom-0 left-0 w-full bg-white"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          placeholder="Type your message"
          className="flex-grow py-2 px-4 outline-none"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
