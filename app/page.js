"use client";

import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ReferralModal from "../components/ReferralModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReferNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeroSection onReferNow={handleReferNow} />
      <ReferralModal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Home;
