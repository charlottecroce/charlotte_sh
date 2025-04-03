import React from "react";

// Simplified animations
const AnimationStyle = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
    `}} />
  );
};
  
export default AnimationStyle;