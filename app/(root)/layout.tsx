import Footer from "@/components/home-layout/Footer";
import Header from "@/components/home-layout/Header";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header type="home" />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
