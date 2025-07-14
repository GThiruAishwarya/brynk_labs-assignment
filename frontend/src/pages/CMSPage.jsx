import { useState } from 'react';
import { postHeading } from '../api/headingApi';

const CMSPage = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      await postHeading(content);
      alert('Heading updated successfully!');
    } catch (err) {
      alert('Failed to update heading');
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">CMS Page</h1>
      <textarea
        className="w-full border p-3 rounded"
        rows="3"
        placeholder="Enter new heading"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 mt-3 rounded"
        onClick={handleSubmit}
      >
        Save
      </button>
    </div>
  );
};

export default CMSPage;
