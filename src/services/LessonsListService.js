import http from "../http-common";

class LessonService {

  getAll() {
    return http.get("/lessons");
  }

  get(id) {
    return http.get(`/lesson/${id}`);
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

  findByLevel(level) {
    return http.get(`/lessons?level=${level}`);
  }

  findByTitle(title) {
    return http.get(`/lesson?title=${title}`);
  }
}

export default new LessonService();