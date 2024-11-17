import React from "react";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <div className="grid md:grid-cols-12 md:h-dvh">
      <header className="md:col-span-6 bg-slate-400">
        <HeaderSection />
      </header>
      <main className="md:col-span-6 bg-teal-300">
        <MainSection />
      </main>
    </div>
  );
};

export default App;
