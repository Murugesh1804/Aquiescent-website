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
        const res = await axios.get('http://localhost:3500/api/careers/get');
        setJobs(res.data || []);
        console.log(res.data);
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
        // Using slug instead of ID for delete operation
        await axios.delete(`http://localhost:3500/api/careers/delete/${slug}`);
        setSuccess('Job deleted successfully!');
        fetchJobs();
      } catch (err) {
        console.error('Delete error:', err);
        setError('Failed to delete job');
      }
    };

    const handleEdit = (job) => {
      console.log('Editing job:', job);
      setEditingJob({...job}); // Create a copy to avoid reference issues
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
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{job.title}</td>
                  <td className="px-4 py-2">{job.location}</td>
                  <td className="px-4 py-2">{job.type}</td>
                  <td className="px-4 py-2">
                    <button className="text-indigo-600 mr-4" onClick={() => handleEdit(job)}>
                    
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
    location: string;
    type: string;
    slug: string;
    description: string;
    experience?: string;
    requirements?: string[];
  }

  interface Props {
    job: Career | null;
    onClose: (refresh?: boolean) => void;
  }

  function CareerModal({ job, onClose }: Props) {
    const [form, setForm] = useState<Career>({
      title: '',
      location: '',
      type: 'Full-Time',
      slug: '',
      description: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
      if (job) setForm(job);
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
        // Fixed this section to use axios consistently
        if (job) {
          // For updating existing job - Using slug instead of ID
          const res = await axios.post(
            `http://localhost:3500/api/careers/update/${job.slug}`,
            form,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          
          console.log('Update response:', res);
          
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed to update job');
          }
        } else {
          // For creating new job
          const res = await axios.post(
            'http://localhost:3500/api/careers/create',
            form,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          
          console.log('Create response:', res);
          
          if (res.status !== 201 && res.status !== 200) {
            throw new Error('Failed to create job');
          }
        }

        setSuccess(`Job ${job ? 'updated' : 'created'} successfully!`);

        setTimeout(() => {
          onClose(true); // trigger refresh in parent
        }, 1000);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
        console.error('Form submission error:', err);
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold mb-2">{job ? 'Edit Job' : 'Post New Job'}</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        <div>
          <label className="block text-sm">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
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
          <label className="block text-sm">Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <div>
          <label className="block text-sm">Slug</label>
          <input
            name="slug"
            value={form.slug}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block text-sm">Experience (Optional)</label>
          <input
            name="experience"
            value={form.experience || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g. 3-5 years"
          />
        </div>

        <div>
          <label className="block text-sm">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm">Requirement</label>
          <textarea
            name="description"
            value={form.requirements}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-2 border rounded"
          />
        </div>


        <div className="flex justify-end space-x-3 pt-4 border-t">
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