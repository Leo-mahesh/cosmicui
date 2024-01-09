"use client";
import { useState } from "react";
import Input from "./Components/Input";

import { Mail } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <div className="bg-white p-[50px] rounded-md shadow-md">
          <Input
            placeholder="abc@gmail.com"
            label="Email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            // With Formik
            // onChange={(e) => validation.handleChange(e)}
            // onBlur={(e) => validation.handleBlur(e)}
            // value={validation.values.email}
            // touched={validation.touched.email}
            // error={validation.errors.email}
            Icon={Mail}
          />
        </div>
      </form>
    </main>
  );
}
