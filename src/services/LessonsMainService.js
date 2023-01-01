import http from "../http-common";

class LessonsListService {

  getAll() {
    return http.get("/lessons");
  }

  get(id) {
    return http.get(`/lessons/${id}`);
  }

  create(data) {
    return http.post("/lessons", data);
  }

  update(id, data) {
    return http.put(`/lessons/${id}`, data);
  }

  delete(id) {
    return http.delete(`/lessons/${id}`);
  }

  deleteAll() {
    return http.delete(`/lessons`);
  }

  findByTitle(title) {
    return http.get(`/lessons?title=${title}`);
  }
}

export default new LessonsListService();