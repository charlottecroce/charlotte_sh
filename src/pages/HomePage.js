import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

/* 
==============================================
HomePage Component
==============================================
*/
const HomePage = () => {
  return (
    <div>
      {/* 
      ==============================================
      Intro Section
      ==============================================
      */}
      <div className="relative rounded-xl mb-12 bg-white dark:bg-gray-800 overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-pink-400 dark:text-pink-300">
              Hi! I'm Charlotte
            </h1>
            <p className="text-xl mb-6">
              I put stuff here
            </p>
            <p className="mb-8 text-lg">
              something else
            </p>
          </div>
        </div>
      </div>
      
      {/* 
      ==============================================
      Projects Section
      ==============================================
      */}
      <div className="mb-16">
        <SectionTitle>-- Projects --</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Champlain Tech Journals"
            description="Notes, code, and lab write-ups from my Champlain College courses"
            sourceUrl="https://codeberg.org/charlottecroce/ChamplainTechJournals"
          />
          <ProjectCard
            title="Nøkken Health"
            description="A mobile app to track and analyze health data"
            sourceUrl="https://codeberg.org/charlottecroce/nokken"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;