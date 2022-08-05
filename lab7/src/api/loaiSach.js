export const getAllLoaiSach = () => {
  return fetch("http://localhost:4000/loaiSach");
};

export const deleteLoaiSach = (id) => {
  return fetch(`http://localhost:4000/loaiSach/${id}`, {
    method: "DELETE",
  });
};

export const getLoaiSach = (id) => {
  return fetch(`http://localhost:4000/loaiSach/${id}`);
};

export const updateLoaiSach = (id, data) => {
  return fetch(`http://localhost:4000/loaiSach/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const addLoaiSach = (data) => {
  return fetch(`http://localhost:4000/loaiSach`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
