import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { TaskStorage } from './functions.js';

const storage = new TaskStorage();
storage.addTask();
storage.clear();

window.onload = () => {
  storage.loadData();
};