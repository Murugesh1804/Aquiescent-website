'use client';

import React, { useEffect, useState } from 'react';

interface Career {
  _id?: string;
  title: string;
  location: string;
  type: string;
  slug: string;
  description: string;
}

interface Props {
  job: Career | null;
  onClose: () => void;
}

export default function AddCareerModal({ job, onClose }: Props) {
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
    if (job) {
      setForm(job);
    }
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
      const res = await fetch(
        job
          ? `http://localhost:3500/api/careers/update/${job._id}`
          : 'http://localhost:3500/api/careers/create',
        {
          method: job ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to ${job ? 'update' : 'create'} job`);
      }

      setSuccess(`Job ${job ? 'updated' : 'created'} successfully!`);
      setTimeout(() => {
        onClose(); // close the modal after success
      }, 1000);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
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

      <div className="flex justify-end space-x-3 pt-4 border-t">
        <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {job ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}
