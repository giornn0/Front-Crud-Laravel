import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  getIndex(page = 1) {
    return this.http.get(`${env.API_URL}/staff?page=${page}`);
  }

  getOne(id: number) {
    return this.http.get(`${env.API_URL}/staff/${id}`);
  }
  create(staff: any) {
    return this.http.post(`${env.API_URL}/staff/`, staff);
  }
  update(staff: any, id: number) {
    return this.http.put(`${env.API_URL}/staff/${id}`, staff);
  }
  destroy(id: number) {
    return this.http.delete(`${env.API_URL}/staff/${id}`);
  }
  getPicture(id: number) {
    return this.http.get(`${env.API_URL}/staff/${id}/picture`);
  }
  updatePicture(picture: any, id: number) {
    return this.http.put(`${env.API_URL}/staff/${id}/picture`, picture);
  }
}
