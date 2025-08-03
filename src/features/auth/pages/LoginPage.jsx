import React from "react";
import { LoginForm } from "../component/LoginForm";
import { Header } from "../../../shared/components/Header";
import { Footer } from "../../../shared/components/Footer";
import { AuthLayout } from "../../../shared/components/layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <div>
          <LoginForm />
        </div>
      </AuthLayout>
    </>
  );
};
