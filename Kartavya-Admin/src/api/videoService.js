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

export const uploadFileApi = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const res = await fetch(`${API_BASE}/api/upload`, {
    method: 'POST',
    body: formData,
  });
  return await res.json();
};

// Subjects APIs
export const fetchSubjectsApi = async (courseId) => {
  const url = courseId ? `${API_BASE}/api/subjects/course/${courseId}` : `${API_BASE}/api/subjects`;
  const res = await fetch(url);
  return await res.json();
};

export const fetchSubjectByIdApi = async (id) => {
  const res = await fetch(`${API_BASE}/api/subjects/${id}`);
  return await res.json();
};

export const addSubjectApi = async (subjectData, adminToken) => {
  const res = await fetch(`${API_BASE}/api/subjects`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(subjectData),
  });
  return await res.json();
};

export const updateSubjectApi = async (id, subjectData, adminToken) => {
  const res = await fetch(`${API_BASE}/api/subjects/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(subjectData),
  });
  return await res.json();
};

export const deleteSubjectApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/subjects/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};

// Materials APIs
export const fetchMaterialsApi = async (subjectId) => {
  const url = subjectId ? `${API_BASE}/api/materials/subject/${subjectId}` : `${API_BASE}/api/materials`;
  const res = await fetch(url);
  return await res.json();
};

export const addMaterialApi = async (data, adminToken) => {
  const res = await fetch(`${API_BASE}/api/materials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteMaterialApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/materials/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};

// Quizzes APIs
export const fetchQuizzesApi = async (subjectId) => {
  const url = subjectId ? `${API_BASE}/api/quizzes/subject/${subjectId}` : `${API_BASE}/api/quizzes`;
  const res = await fetch(url);
  return await res.json();
};

export const addQuizApi = async (data, adminToken) => {
  const res = await fetch(`${API_BASE}/api/quizzes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteQuizApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/quizzes/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};

// Demo Materials APIs
export const fetchDemoMaterialsApi = async (category) => {
  const url = category && category !== 'All' 
    ? `${API_BASE}/api/demo-materials?category=${encodeURIComponent(category)}`
    : `${API_BASE}/api/demo-materials`;
  const res = await fetch(url);
  return await res.json();
};

export const addDemoMaterialApi = async (data, adminToken) => {
  const res = await fetch(`${API_BASE}/api/demo-materials`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateDemoMaterialApi = async (id, data, adminToken) => {
  const res = await fetch(`${API_BASE}/api/demo-materials/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteDemoMaterialApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/demo-materials/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};

// Demo Quizzes APIs
export const fetchDemoQuizzesApi = async (category) => {
  const url = category && category !== 'All' 
    ? `${API_BASE}/api/demo-quizzes?category=${encodeURIComponent(category)}`
    : `${API_BASE}/api/demo-quizzes`;
  const res = await fetch(url);
  return await res.json();
};

export const addDemoQuizApi = async (data, adminToken) => {
  const res = await fetch(`${API_BASE}/api/demo-quizzes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateDemoQuizApi = async (id, data, adminToken) => {
  const res = await fetch(`${API_BASE}/api/demo-quizzes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'x-admin-token': adminToken },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteDemoQuizApi = async (id, adminToken) => {
  const res = await fetch(`${API_BASE}/api/demo-quizzes/${id}`, {
    method: 'DELETE',
    headers: { 'x-admin-token': adminToken },
  });
  return await res.json();
};
