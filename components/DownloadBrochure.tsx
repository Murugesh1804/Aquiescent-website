'use client';

import { Button } from "@/components/ui/button"; // Adjust the import path as needed

export function DownloadBrochureButton({ brochurePath, courseTitle }) {
  // Function to handle brochure download
  const handleDownloadBrochure = () => {
    // Check if brochure path exists
    if (brochurePath) {
      // Create anchor element to trigger download
      const link = document.createElement('a');
      link.href = brochurePath;
      link.download = `${courseTitle.replace(/\s+/g, '-').toLowerCase()}-brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // If no brochure path is available, you could show a notification or fallback
      console.log('No brochure available for this course');
      // You could add a toast notification here
    }
  };

  return (
    <Button 
      variant="outline" 
      className="mt-6 text-black border-white/20 hover:bg-white/20"
      onClick={handleDownloadBrochure}
      disabled={!brochurePath}
    >
      {brochurePath ? 'Download Brochure' : 'Brochure Coming Soon'}
    </Button>
  );
}
