import Layout1 from "../src/pages/Layout1/Layout1";
import Layout2 from "../src/pages/Layout2/Layout2";
import Layout3 from "../src/pages/Layout3/Layout3";
import Layout4 from "../src/pages/Layout4/Layout4";
import Layout5 from "../src/pages/Layout5/Layout5";

const routes = [
  { path: "/Layout2", component: Layout2 },
  { path: "/Layout3", component: Layout3 },
  { path: "/Layout4", component: Layout4 },
  { path: "/Layout5", component: Layout5 },
  { path: "/", component: Layout1 },
];

export default routes;
