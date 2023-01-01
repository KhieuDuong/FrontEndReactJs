import http from "../http-common";

class AuthService {

  getAll() {
    return http.get("/login");
  }

  get(id) {
    return http.get(`/login/${id}`);
  }

  create(data) {
    return http.post("/login", data);
  }

  update(id, data) {
    return http.put(`/login/${id}`, data);
  }

  delete(id) {
    return http.delete(`/login/${id}`);
  }

  deleteAll() {
    return http.delete(`/login`);
  }

  findByTitle(title) {
    return http.get(`/login?title=${title}`);
  }
}

export default new AuthService();