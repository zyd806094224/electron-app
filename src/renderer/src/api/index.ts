import { http } from '../utils/request'
import { User } from '../model/User'

export function login(username:string,password:string){
  return http.post<User>('api/login',{
    username: username,
    password: password
  })
}
