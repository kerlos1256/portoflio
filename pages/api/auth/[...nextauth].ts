import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../lib/MongoDB";
import invitationModel from "../../../modals/invitation.model";
import userModel from "../../../modals/user.model";

export default connectDB(
  NextAuth({
    providers: [
      CredentialsProvider({
        name: "register",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" },
          invitationCode: { label: "Invitation Code", type: "password" },
          signinMethod: { label: "mothed", type: "text" },
        },
        async authorize(credentials) {
          if (!credentials) return null;
          const { username, password, invitationCode, signinMethod } =
            credentials;
          if (signinMethod === "register") {
            const user = await userModel.findOne({ username });

            if (user) return null;

            const invited = await invitationModel.find({
              to: username,
              code: invitationCode,
            });

            if (invited.length < 1) return null;

            const newUser = await userModel.create({
              username,
              password,
              role: "vistor",
            });

            return { username, role: newUser.role };
          } else if (signinMethod === "login") {
            const { username, password } = credentials;

            const user = await userModel.findOne({ username });

            if (!user) return null;
            if (password !== user.password) return null;
            return { username, role: user.role };
          } else {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      jwt: ({ token, user }) => {
        if (!user) return token;
        return user;
      },
      session: (props) => {
        const {
          session: { expires },
          token: { username, role },
        } = props;
        return { expires, user: { username, role } };
      },
    },
    pages: {
      signIn: "/auth/login",
    },
  })
);
