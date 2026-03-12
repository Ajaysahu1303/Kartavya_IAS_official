import { API_BASE } from '../constants/constants';

export const loginApi = async (email, password) => {
  const res = await fetch(`${API_BASE}/api/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim(), password }),
  });
  return await res.json();
};

export const fetchVideosApi = async (filterCategory) => {
  const url = filterCategory === 'All'
    ? `${API_BASE}/api/videos`
    : `${API_BASE}/api/videos?category=${encodeURIComponent(filterCategory)}`;
  const res = await fetch(url);
  return await res.json();
};

export const addVideoApi = async (formData, adminToken) => {
  const res = await fetch(`${API_BASE}/api/videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-token': adminToken,
    },
    body: JSON.stringify(formData),
  });
  return await res.json();
};

export const deleteVideoApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/videos/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};

export const updateVideoApi = async (id, editData, adminToken) => {
  const res = await fetch(`${API_BASE}/api/videos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-token': adminToken,
    },
    body: JSON.stringify(editData),
  });
  return await res.json();
};

export const getSettingApi = async (key) => {
  const res = await fetch(`${API_BASE}/api/settings/${key}`);
  return await res.json();
};

export const updateSettingApi = async (key, value, adminToken) => {
  const res = await fetch(`${API_BASE}/api/settings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-token': adminToken,
    },
    body: JSON.stringify({ key, value }),
  });
  return await res.json();
};

// Course APIs
export const fetchCoursesApi = async () => {
  const res = await fetch(`${API_BASE}/api/courses`);
  return await res.json();
};

export const addCourseApi = async (courseData, adminToken) => {
  const res = await fetch(`${API_BASE}/api/courses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-token': adminToken,
    },
    body: JSON.stringify(courseData),
  });
  return await res.json();
};

export const deleteCourseApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/courses/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};

export const updateCourseApi = async (id, courseData, adminToken) => {
  const res = await fetch(`${API_BASE}/api/courses/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-token': adminToken,
    },
    body: JSON.stringify(courseData),
  });
  return await res.json();
};
