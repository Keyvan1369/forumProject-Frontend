import React from "react";
import { HomeForm } from "../component/HomeForm";
import { Footer } from "../../../shared/components/Footer";
import { Header } from "../../../shared/components/Header";
import { MainLayout } from "../../../shared/components/layouts/MainLayout";

export const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div>
          <HomeForm />
        </div>
      </MainLayout>
    </>
  );
};
