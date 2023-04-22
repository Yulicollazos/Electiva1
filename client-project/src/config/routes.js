import { GeneralLayouts } from "../layouts/GeneralLayouts/GeneralLayouts";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SingIn } from "../pages/Admin/SingIn";
import { Contact } from "../pages/General/NotFound/Contact";
import { Home } from "../pages/General/NotFound/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";

const AdminRoutes = [
    {path: "/admin",Component:AdminHome,layout: GeneralLayouts},
    {path: "/admin/sign-in",Component:SingIn,layout: GeneralLayouts},
];
const GeneralRoutes = [
    {path: "/",Component:Home,layout: GeneralLayouts},
    {path: "/contact",Component:Contact,layout: GeneralLayouts},
    {path: "*",Component:NotFound,layout: GeneralLayouts}
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;