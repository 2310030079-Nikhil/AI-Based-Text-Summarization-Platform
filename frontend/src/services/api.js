import axios from "axios";

const API = "http://127.0.0.1:8000";

export const summarizeText = async (text, length) => {

  return axios.post(`${API}/summarize/text`, null, {
    params: {
      text,
      length,
    },
  });
};

export const summarizePDF = async (file, length) => {

  const formData = new FormData();

  formData.append("file", file);

  return axios.post(
    `${API}/summarize/pdf?length=${length}`,
    formData
  );
};