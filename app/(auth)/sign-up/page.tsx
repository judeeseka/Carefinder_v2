import AuthForm from "@/components/auth/AuthForm";

const SignUp = () => {
  return (
    <section className="flex justify-center items-center w-auto min-h-screen max-sm:px-6 border-4 bg-myColors-secondary">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
