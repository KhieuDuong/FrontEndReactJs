import http from "../http-common";

class LessonDetailService {

  getAll() {
    return http.get("/lesson");
  }

  get(id) {
    return http.get(`/lessons/${id}`);
  }

  create(data) {
    return http.post("/lesson", data);
  }

  update(id, data) {
    return http.put(`/lesson/${id}`, data);
  }

  delete(id) {
    return http.delete(`/lesson/${id}`);
  }

  deleteAll() {
    return http.delete(`/lesson`);
  }

  findByTitle(title) {
    return http.get(`/lesson?title=${title}`);
  }
}

export default new LessonDetailService();