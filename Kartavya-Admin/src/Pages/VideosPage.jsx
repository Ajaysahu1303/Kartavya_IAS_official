import React, { useState, useEffect } from 'react';
import { categories } from '../constants/constants';
import { extractYouTubeId } from '../utils/youtube';
import { 
  fetchVideosApi, 
  addVideoApi, 
  deleteVideoApi, 
  updateVideoApi 
} from '../api/videoService';

// Components
import AddVideoForm from '../components/AddVideoForm';
import VideoList from '../components/VideoList';

const VideosPage = ({ adminToken }) => {
  const [formData, setFormData] = useState({ title: '', youtubeVideoId: '', category: categories[0], description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [videos, setVideos] = useState([]);
  const [filterCategory, setFilterCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: '', youtubeVideoId: '', category: '', description: '' });

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const data = await fetchVideosApi(filterCategory);
      setVideos(data.data || []);
    } catch {
      setVideos([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, [filterCategory]);

  const handleAddVideo = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');
    try {
      const cleanedFormData = { ...formData, youtubeVideoId: extractYouTubeId(formData.youtubeVideoId) };
      const data = await addVideoApi(cleanedFormData, adminToken);
      if (data.success) {
        setSuccessMsg(`✅ "${formData.title}" added successfully!`);
        setFormData({ title: '', youtubeVideoId: '', category: categories[0], description: '' });
        fetchVideos();
      } else {
        setSuccessMsg(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      setSuccessMsg(`❌ Network error: ${err.message}`);
    }
    setSubmitting(false);
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    try {
      const data = await deleteVideoApi(id, adminToken);
      if (data.success) {
        fetchVideos();
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      alert(`Network error: ${err.message}`);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const cleanedEditData = { ...editData, youtubeVideoId: extractYouTubeId(editData.youtubeVideoId) };
      const data = await updateVideoApi(id, cleanedEditData, adminToken);
      if (data.success) {
        setEditingId(null);
        fetchVideos();
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (err) {
      alert(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-black text-gray-900">Video Management</h1>
        <p className="text-gray-500 mt-1 font-medium">Add, edit, or remove your demo lectures here.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <AddVideoForm 
            formData={formData}
            setFormData={setFormData}
            handleAddVideo={handleAddVideo}
            submitting={submitting}
            successMsg={successMsg}
          />
        </div>

        <div className="lg:col-span-3">
          <VideoList 
            videos={videos}
            loading={loading}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            editingId={editingId}
            setEditingId={setEditingId}
            editData={editData}
            setEditData={setEditData}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
