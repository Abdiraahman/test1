export const ROUTES = {
  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Dashboard routes
  STUDENT_DASHBOARD: '/dashboard/student',
  LECTURER_DASHBOARD: '/dashboard/lecturer',
  SUPERVISOR_DASHBOARD: '/dashboard/supervisor',
  ADMIN_DASHBOARD: '/dashboard/admin',

  // Profile routes
  PROFILE_SETUP: '/profile/setup',
  PROFILE_EDIT: '/profile/edit',

  // Task routes
  TASKS: '/tasks',
  TASK_DETAIL: '/tasks/:id',
  SUBMIT_TASK: '/tasks/:id/submit',

  // Feedback routes
  WEEKLY_REVIEW: '/feedback/weekly',
  FINAL_EVALUATION: '/feedback/final',
  FEEDBACK_HISTORY: '/feedback/history',

  // Admin routes
  MANAGE_USERS: '/admin/users',
  MANAGE_INTERNSHIPS: '/admin/internships',
  VIEW_FEEDBACK: '/admin/feedback',
} as const;

export const PUBLIC_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.REGISTER,
  ROUTES.FORGOT_PASSWORD,
];

export const PROTECTED_ROUTES = [
  ROUTES.STUDENT_DASHBOARD,
  ROUTES.LECTURER_DASHBOARD,
  ROUTES.SUPERVISOR_DASHBOARD,
  ROUTES.ADMIN_DASHBOARD,
  ROUTES.PROFILE_SETUP,
  ROUTES.PROFILE_EDIT,
  ROUTES.TASKS,
  ROUTES.WEEKLY_REVIEW,
  ROUTES.FINAL_EVALUATION,
  ROUTES.FEEDBACK_HISTORY,
];

export const ADMIN_ROUTES = [
  ROUTES.ADMIN_DASHBOARD,
  ROUTES.MANAGE_USERS,
  ROUTES.MANAGE_INTERNSHIPS,
  ROUTES.VIEW_FEEDBACK,
];

export const STUDENT_ROUTES = [
  ROUTES.STUDENT_DASHBOARD,
  ROUTES.TASKS,
  ROUTES.WEEKLY_REVIEW,
  ROUTES.FEEDBACK_HISTORY,
];

export const LECTURER_ROUTES = [
  ROUTES.LECTURER_DASHBOARD,
  ROUTES.VIEW_FEEDBACK,
];

export const SUPERVISOR_ROUTES = [
  ROUTES.SUPERVISOR_DASHBOARD,
  ROUTES.WEEKLY_REVIEW,
  ROUTES.FINAL_EVALUATION,
];