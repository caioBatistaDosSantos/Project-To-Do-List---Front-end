export const DEV_TEST = true;
export const APP_TO_DO_BACK_URL = DEV_TEST ? 'http://localhost:3000' : 'https://to-do-list-back-dev-caio.herokuapp.com';
export const PENDING = 'pendente';
export const IN_PROGRESS = 'em andamento';
export const READY = 'pronto';
export const STATUS = [PENDING, IN_PROGRESS, READY];
export const ALL_TASKS = 'Todas as Tarefas';
export const SEARCH_STATUS = [ALL_TASKS, 'Tarefas Pendentes', 'Tarefas em Andamento', 'Tarefas Prontas'];

// For tests:
export const RADOM_TASK = 'RAMDOM TASK';
