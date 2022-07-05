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
export const ALL_MESSAGES_FOR_DATE_SPAN = ['Todas as Tarefas por ordem de criação:', 'Tarefas Pendentes por ordem de criação:', 'Tarefas em Andamento por ordem de criação:', 'Tarefas Prontas por ordem de criação:'];
export const ALL_MESSAGES_FOR_ALPHABETICS_SPAN = ['Todas as Tarefas em ordem alfabética:', 'Tarefas Pendentes em ordem alfabética:', 'Tarefas em Andamento em ordem alfabética:', 'Tarefas Prontas em ordem alfabética:'];
