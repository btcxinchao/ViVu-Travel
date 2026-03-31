import userRoute from "./user.routes.js";
import servicesRoutes from "./services.routes.js";

const routes = (app) => {
  app.use("/api/users", userRoute);
  app.use("/api/services",servicesRoutes)
};

export default routes;