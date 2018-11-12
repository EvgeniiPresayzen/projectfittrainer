import Account from '@material-ui/icons/PermIdentity';
// core components/views
import SignIn from 'views/Login/SignIn/SignIn.jsx';
import SignUp from 'views/Login/SignUp/SignUp.jsx';
import Verification from 'views/Login/Verification/Verification.jsx'

const authRoutes = [
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
  {
    path: '/verification/:secretkey&:email',
    sidebarName: 'Email verification',
    navbarName: 'Email verification',
    icon: Account,
    component: Verification
  },
  { redirect: true, path: '/', to: '/sign_in', navbarName: 'Redirect' }
];


export default authRoutes;
