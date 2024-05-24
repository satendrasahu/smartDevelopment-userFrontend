import { lazy } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ROUTE_PATHS } from './routesPath'
export const routersList = [{
    key: uuidv4(),
    label: 'Home',
    path: ROUTE_PATHS.home,
    component: lazy(() => import('../pages/home/Home')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Coming Soon',
    path: ROUTE_PATHS.comingSoon,
    component: lazy(() => import('../components/ui_kit/notFound/CommingSoon')),
    hasAuth: false,
  },
  {
    key: uuidv4(),
    label: 'Courses',
    path: ROUTE_PATHS.courses,
    component: lazy(() => import('../pages/courses/index')),
    hasAuth: false,
    // nestedRoutes :[
    //   {
    //     key: uuidv4(),
    //     label: 'View - Courses',
    //     path: ROUTE_PATHS.courseId,
    //     component: lazy(() => import('../pages/courses/copmonents/ViewCourses')),
    //     hasAuth: false,
    //   }
    // ]
  },
  {
    key: uuidv4(),
    label: 'View - Courses',
    path: ROUTE_PATHS.courseOverview,
    component: lazy(() => import('../pages/courses/copmonents/CourseOverview')),
    hasAuth: false,
  }
]