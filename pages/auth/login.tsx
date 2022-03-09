import { Alert, AlertTitle } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../../components/partails/Input";

const Login = () => {
  const router = useRouter();
  const { callbackUrl } = router.query;
  const [error, setError] = useState<string>();
  const [{ username, password }, setInput] = useState<{
    username: string;
    password: string;
  }>({
    username: "",
    password: "",
  });
  return (
    <div className="py-40 w-full flex flex-col gap-16 items-center">
      <h1 className="text-4xl">Login</h1>
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
              signinMethod: "login",
              redirect: false,
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
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
