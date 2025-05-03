'use client';

  import { useState, useEffect } from 'react';
  import axios from 'axios';

  export default function CareersManager() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [editingJob, setEditingJob] = useState(null);

    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://api.acquiescent.in/api/careers/get');
        setJobs(res.data || []);
        setError(null);
      } catch (err) {
        setError('Failed to fetch job openings');
      } finally {
        setLoading(false);
      }
    };

    const handleDelete = async (slug: string) => {
      if (!confirm('Are you sure you want to delete this job?')) return;
      try {
        await axios.delete(`https://api.acquiescent.in/api/careers/delete/${slug}`);
        setSuccess('Job deleted successfully!');
        fetchJobs();
      } catch (err) {
        setError('Failed to delete job');
      }
    };

    const handleEdit = (job) => {
      setEditingJob({ ...job });
      setShowModal(true);
    };

    const handleModalClose = (refresh = false) => {
      setShowModal(false);
      setEditingJob(null);
      if (refresh) fetchJobs();
    };

    useEffect(() => {
      fetchJobs();
    }, []);

    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Careers Manager</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setShowModal(true)}
          >
            Post New Job
          </button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Experience</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Work Model</th>
                <th className="px-4 py-2">Client</th>
                <th className="px-4 py-2">Position</th>
                <th className="px-4 py-2">Package</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{job.title}</td>
                  <td className="px-4 py-2">{job.experience}</td>
                  <td className="px-4 py-2">{job.location}</td>
                  <td className="px-4 py-2">{job.workModel}</td>
                  <td className="px-4 py-2">{job.client}</td>
                  <td className="px-4 py-2">{job.position}</td>
                  <td className="px-4 py-2">{job.package}</td>
                  <td className="px-4 py-2">
                    <button className="text-indigo-600 mr-4" onClick={() => handleEdit(job)}>
                      Edit
                    </button>
                    <button className="text-red-600" onClick={() => handleDelete(job.slug)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
              <CareerModal job={editingJob} onClose={handleModalClose} />
            </div>
          </div>
        )}
      </div>
    );
  }

  interface Career {
    _id?: string;
    title: string;
    experience: string;
    location: string;
    description: string;
    workModel: string;
    client: string;
    position: string;
    package: string;
    requirements?: string; // comma-separated string for simplicity
    slug?: string;
  }

  interface Props {
    job: Career | null;
    onClose: (refresh?: boolean) => void;
  }

  function CareerModal({ job, onClose }: Props) {
    const [form, setForm] = useState<Career>({
      title: '',
      experience: '',
      location: '',
      description: '',
      workModel: '',
      client: '',
      position: '',
      package: '',
      requirements: '',
      slug: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
      if (job) setForm({
        ...job,
        requirements: Array.isArray(job.requirements) ? job.requirements.join(', ') : (job.requirements || ''),
      });
    }, [job]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError('');
      setSuccess('');

      try {
        const payload = {
          ...form,
          requirements: form.requirements
            ? form.requirements.split(',').map((r) => r.trim()).filter(Boolean)
            : [],
        };

        if (job && job.slug) {
          // Edit
          const res = await axios.put(
            `https://api.acquiescent.in/api/careers/update/${job.slug}`,
            payload,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to update job');
          }
        } else {
          // Create
          const res = await axios.post(
            'https://api.acquiescent.in/api/careers/create',
            payload,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          if (res.status !== 201 && res.status !== 200) {
            throw new Error('Failed to create job');
          }
        }

        setSuccess(`Job ${job ? 'updated' : 'created'} successfully!`);
        setTimeout(() => {
          onClose(true);
        }, 1000);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-2">{job ? 'Edit Job' : 'Post New Job'}</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          <div>
            <label className="block text-sm">Job Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Experience</label>
            <input
              name="experience"
              value={form.experience}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="e.g. 3-5 years"
            />
          </div>
          <div>
            <label className="block text-sm">Location</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Work Model</label>
            <input
              name="workModel"
              value={form.workModel}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="e.g. Remote, Onsite, Hybrid"
            />
          </div>
          <div>
            <label className="block text-sm">Client</label>
            <input
              name="client"
              value={form.client}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Position</label>
            <input
              name="position"
              value={form.position}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm">Package</label>
            <input
              name="package"
              value={form.package}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="e.g. $60,000/year"
            />
          </div>
          <div>
            <label className="block text-sm">Requirements (comma separated)</label>
            <input
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="e.g. React, Node.js, MongoDB"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm">Job Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm">Slug</label>
            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
              placeholder="unique-job-slug"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4 border-t w-full max-w-2xl">
          <button type="button" onClick={() => onClose()} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            {job ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    );
  }
