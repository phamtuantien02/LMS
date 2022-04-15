import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { student } from 'src/app/_module/student/model/student-model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<student>;
    public currentUser: Observable<student>;

    constructor(private http: HttpClient, private apiservice : ApiService) {
        this.currentUserSubject = new BehaviorSubject<student>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): student {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {

        return this.apiservice.post('Student/login',{username, password})
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {

        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(new student);
    }
}