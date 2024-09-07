import { Router } from "express";
import * as controller from "../Controller/controller.js";

const routes = Router();

routes
  .route("/api/categories")
  .post(controller.create_Categories)
  .get(controller.get_Categories);

routes
  .route("/api/transaction")
  .post(controller.create_Transaction)
  .get(controller.get_Transaction)
  .delete(controller.delete_Transaction);

routes
  .route("/api/labels").get(controller.get_Labels);
export default routes;
