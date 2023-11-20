import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url=environment.apiUrl
  constructor(private httpClient:HttpClient) { }

 getMaterias():Observable<any>{
  return this.httpClient.get(`${this.url}materia`)
 }

  getDataForId():Observable<any>{
    const token=localStorage.getItem('token'); 
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    
    
    return this.httpClient.get<any>(`${this.url}user/get_user`,httpOptions)
  }

  getPasswordForId(data:any):Observable<any>{
    const token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
    console.log(data)
    return this.httpClient.post(`${this.url}user/cambiar-password`,data,httpOptions)
  }

  getHorarios(){
  const token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
  return this.httpClient.get(`${this.url}horario`,httpOptions)
}

getHorarioForId(id:number){
  const token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
 return this.httpClient.get(`${this.url}horario/${id}`,httpOptions)
}


getHorarioForIdEstudiante(){
  const token=localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true'
      })
    };
 return this.httpClient.get(`${this.url}/estudiante/mostrarHorariosEstudiante`,httpOptions)
}

agendarTutorias(id_tutoria:number){
  const tutoria={"id":id_tutoria}
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
return this.httpClient.post(`${this.url}agendar`,tutoria,httpOptions)
}

obtenerTutoriasEstudiante(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
return this.httpClient.get(`${this.url}mostrarTutoriasEstudiante`,httpOptions)
}


cancelarTutoria(id_tutoria:string){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };
 this.httpClient.delete(`${this.url}cancelarTutoria/${id_tutoria}`,httpOptions).pipe(
  tap((res:any)=>{
    console.log(res);
    
  })
 ).subscribe()
}
obtenerTutoriasPendientes(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

return this.httpClient.get(`${this.url}obtenerTutoriaFinalizadasDocente`,httpOptions)


}

obtenerTutoriasTerminadas(){
  const token=localStorage.getItem('token')
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

return this.httpClient.get(`${this.url}obtenerTutoriaFinalizadas`,httpOptions)

}

}




