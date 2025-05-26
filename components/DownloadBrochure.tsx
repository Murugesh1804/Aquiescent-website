'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CourseBrochurePopup } from "@/components/CourseBrochurePopup";

export function DownloadBrochureButton({ brochurePath, courseTitle, courseSlug }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="mt-6 text-black border-white/20 hover:bg-white/20"
        onClick={handleOpenPopup}
        disabled={!brochurePath}
      >
        {brochurePath ? 'Download Brochure' : 'Brochure Coming Soon'}
      </Button>

      <CourseBrochurePopup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        courseTitle={courseTitle}
        brochurePath={brochurePath}
        courseSlug={courseSlug}
      />
    </>
  );
}
