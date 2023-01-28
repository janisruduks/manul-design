import React from 'react'
import { FiChevronUp } from 'react-icons/fi';

const BackToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 right-0 m-6 cursor-pointer" onClick={handleClick}>
      <FiChevronUp className="text-c1 h-12 w-12" />
    </div>
  );
};

export default BackToTopButton;
