import { Alert, AlertTitle, useMediaQuery } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../../components/partails/Input";

const Register = () => {
  const [{ username, password, invitationCode }, setInput] = useState<{
    username: string;
    password: string;
    invitationCode: string;
  }>({
    username: "",
    password: "",
    invitationCode: "",
  });
  const [error, setError] = useState<string>();
  const router = useRouter();
  const { callbackUrl } = router.query;
  return (
    <div className="py-40 w-full flex flex-col gap-16 items-center">
      <h1 className="text-4xl">Register</h1>
      <div className="flex flex-col w-fit gap-8">
        <Input
          label="Username"
          name="username"
          type="text"
          autoComplete="off"
          value={username}
          empty={username.length < 1}
          onChange={(e) =>
            setInput((state) => ({ ...state, [e.target.name]: e.target.value }))
          }
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          empty={password.length < 1}
          onChange={(e) =>
            setInput((state) => ({ ...state, [e.target.name]: e.target.value }))
          }
        />
        <Input
          label="InvitationCode"
          name="invitationCode"
          type="text"
          value={invitationCode}
          empty={invitationCode.length < 1}
          onChange={(e) =>
            setInput((state) => ({ ...state, [e.target.name]: e.target.value }))
          }
        />
        {error && (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        <button
          className="h-10 w-32 border-2 self-center border-borderGrey font-normal "
          id="submit"
          onClick={async () => {
            const res: any = await signIn("credentials", {
              username,
              password,
              invitationCode,
              signinMethod: "register",
              callbackUrl: callbackUrl
                ? Array.isArray(callbackUrl)
                  ? callbackUrl[0]
                  : callbackUrl
                : "/",
            });
            if (res.ok) {
              const url = callbackUrl
                ? Array.isArray(callbackUrl)
                  ? callbackUrl[0]
                  : callbackUrl
                : "/";
              router.push(url);
            } else {
              setError(res.error);
            }
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
