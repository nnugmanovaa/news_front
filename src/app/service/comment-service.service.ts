import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Comment} from '../model/comment';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  public add(comment: string) {
    const params = new HttpParams().set('text', comment);
    return this.http.post(`${this.apiUrl}/api/comments/add`, params);
  }

  public getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/api/comments`);
  }
}
