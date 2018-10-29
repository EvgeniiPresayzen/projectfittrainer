// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Receipt from "@material-ui/icons/Receipt";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import NewExercise from "views/NewExercise/NewExercise.jsx";
import EditExercise from "views/EditExercise/EditExercise.jsx";
import NewWorkout from "views/NewWorkout/NewWorkout.jsx";
import EditWorkout from "views/EditWorkout/EditWorkout.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/newexercise",
    sidebarName: "New Exercise",
    navbarName: "New Exercise",
    icon: Receipt,
    component: NewExercise
  },
  {
    path: "/editexercise",
    sidebarName: "Edit Exercise",
    navbarName: "Edit Exercise",
    icon: Receipt,
    component: EditExercise
  },
  {
    path: "/newworkout",
    sidebarName: "New Workout",
    navbarName: "New Workout",
    icon: Receipt,
    component: NewWorkout
  },
  {
    path: "/editworkout",
    sidebarName: "Edit Workout",
    navbarName: "Edit Workout",
    icon: Receipt,
    component: EditWorkout
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
