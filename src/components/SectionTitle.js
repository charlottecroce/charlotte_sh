import React from "react";

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold mb-8 flex items-center">
    <span className="text-sage-400">{children}</span>
    <span className="flex-grow h-px ml-4 bg-gradient-to-r from-pink-200 to-transparent dark:from-pink-400 dark:to-transparent"></span>
  </h2>
);

export default SectionTitle;