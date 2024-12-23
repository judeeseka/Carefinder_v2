"use server";

import {
  ID,
  //  Models
} from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
// import { parseStringify } from "../utils";

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { account } = await createAdminClient();

    const response = await account.createEmailPasswordSession(email, password);
    // console.log(response);

    (await cookies()).set("appwrite-session", response.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    // return parseStringify(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};
export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // return parseStringify(newUserAccount);
    return newUserAccount;
  } catch (error) {
    console.log("Error", error);
  }
};

export async function getLoggedInUser() {
  // : Promise<Models.User<Models.Preferences> | null>
  try {
    // const { account } = await createSessionClient();
    const client = await createSessionClient();
    const user = await client?.account.get();

    // return parseStringify(user);
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function logoutAccount() {
  try {
    // const { account } = await createSessionClient();
    const client = await createSessionClient();

    (await cookies()).delete("appwrite-session");

    await client?.account.deleteSession("current");
  } catch (error) {
    console.error(error);
    return null;
  }
}
