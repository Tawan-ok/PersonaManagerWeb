import axios from 'axios';
import { Person } from '../types/person';

const api = axios.create({
  baseURL: 'http://localhost:3000/person', // URL ของ Backend API
});

export const getPersons = () => api.get<Person[]>('/');
export const createPerson = (personData: Person) => api.post('/', personData);
export const updatePerson = (id: string, personData: Person) => api.put(`/${id}`, personData);
export const deletePerson = (id: string) => api.delete(`/${id}`);
