import { connect } from 'react-redux';
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard'
import Receipt from '@material-ui/icons/Receipt'
import Account from '@material-ui/icons/PermIdentity'
// core components/views
import DashboardPage from 'views/Dashboard/Dashboard.jsx'
import NewExercise from 'views/NewExercise/NewExercise.jsx'
import EditExercises from 'views/EditExercises/EditExercises.jsx'
import NewWorkout from 'views/NewWorkout/NewWorkout.jsx'
import EditWorkout from 'views/EditWorkout/EditWorkout.jsx'

import SignIn from 'views/Login/SignIn/SignIn.jsx'
import SignUp from 'views/Login/SignUp/SignUp.jsx'
import Verification from 'views/Login/Verification/Verification.jsx'


const token = localStorage.getItem('token');

let dashboardRoutes = [
  {
    path: '/verification/:secretkey&:email',
    sidebarName: 'Email verification',
    navbarName: 'Email verification',
    icon: Account,
    component: Verification
  },
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
if(!token) {
  dashboardRoutes = [
    {
      path: '/sign_in',
      sidebarName: 'Sign In',
      navbarName: 'Sign In',
      icon: Account,
      component: SignIn
    },
    {
      path: '/sign_up',
      sidebarName: 'Sign Up',
      navbarName: 'Sign Up',
      icon: Account,
      component: SignUp
    },
    { redirect: true, path: '/', to: '/sign_in', navbarName: 'Redirect' }
  ]
}

export default dashboardRoutes
