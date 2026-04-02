"use client";

import { useEffect, useState } from "react";
import { IntroSplash } from "@/components/intro-splash";
import { ProfileSelection } from "@/components/profile-selection";
import { NetflixHome } from "@/components/netflix-home";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if intro was already played in this session
    const introPlayed = sessionStorage.getItem("introPlayed") === "true";
    const viewerType = sessionStorage.getItem("viewerType");

    if (!introPlayed) {
      // First time in session: show intro
      setShowIntro(true);
    } else if (!viewerType) {
      // Intro played but no profile selected yet: show profile selection
      setShowProfile(true);
    } else {
      // Both intro played and profile selected: show home
      setShowHome(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introPlayed", "true");
    setShowIntro(false);
    setShowProfile(true);
  };

  const handleProfileSelect = (type: string) => {
    sessionStorage.setItem("viewerType", type);
    setShowProfile(false);
    setShowHome(true);
  };

  if (!mounted) {
    return null;
  }

  if (showIntro) {
    return <IntroSplash onComplete={handleIntroComplete} />;
  }

  if (showProfile) {
    return <ProfileSelection onProfileSelect={handleProfileSelect} />;
  }

  if (showHome) {
    return <NetflixHome />;
  }

  return null;
}
