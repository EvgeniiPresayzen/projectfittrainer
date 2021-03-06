// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Receipt from '@material-ui/icons/Receipt'
// core components/views
import DashboardPage from 'views/Dashboard/Dashboard.jsx'
import NewExercise from 'views/NewExercise/NewExercise.jsx'
import EditExercises from 'views/EditExercises/EditExercises.jsx'
import NewWorkout from 'views/NewWorkout/NewWorkout.jsx'
import EditWorkout from 'views/EditWorkout/EditWorkout.jsx'



let dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/new_exercise',
    sidebarName: 'New Exercise',
    navbarName: 'New Exercise',
    icon: Receipt,
    component: NewExercise
  },
  {
    path: '/edit_exercises',
    sidebarName: 'Edit Exercises',
    navbarName: 'Edit Exercises',
    icon: Receipt,
    component: EditExercises
  },
  {
    path: '/new_workout',
    sidebarName: 'New Workout',
    navbarName: 'New Workout',
    icon: Receipt,
    component: NewWorkout
  },
  {
    path: '/edit_workout',
    sidebarName: 'Edit Workout',
    navbarName: 'Edit Workout',
    icon: Receipt,
    component: EditWorkout
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];


export default dashboardRoutes
