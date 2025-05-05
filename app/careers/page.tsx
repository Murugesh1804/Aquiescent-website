"use client"

import { useEffect, useState } from "react";
import { MdLocationOn, MdWork, MdBusinessCenter } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FiUser, FiList, FiBriefcase } from "react-icons/fi";
import { ApplyPopup } from "@/components/apply-popup"; // <-- Import the popup

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  useEffect(() => {
    fetch("https://api.acquiescent.in/api/careers/get")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .finally(() => setLoading(false));
  }, []);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
    setSelectedJobTitle("");
  };

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-20 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Join Our Team</h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Explore exciting career opportunities at Acquiescent Consultancy Services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Current Openings
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Find the perfect role to advance your career with us
              </p>
            </div>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <div key={job.slug} className="border rounded-lg p-6 shadow hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <FiBriefcase className="inline-block text-primary" /> {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MdLocationOn /> {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <MdWork /> {job.experience}
                    </div>
                    <div className="flex items-center gap-1">
                      <MdBusinessCenter /> {job.workModel}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{job.description}</p>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-1">
                      <FiUser /> <strong>Client:</strong> {job.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiBriefcase /> <strong>Position:</strong> {job.position}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRupeeSign /> <strong>Package:</strong> {job.package}
                    </div>
                  </div>
                  {job.requirements && job.requirements.length > 0 && (
                    <div className="mt-2">
                      <div className="flex items-center gap-1 font-semibold">
                        <FiList /> Requirements:
                      </div>
                      <ul className="list-disc pl-5">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* --- Apply Button --- */}
                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* --- Apply Popup Modal --- */}
        <ApplyPopup
          isOpen={popupOpen}
          onClose={handlePopupClose}
          jobTitle={selectedJobTitle}
        />
      </section>
    </main>
  );
}
