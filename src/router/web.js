import express from "express";
import homeController from "../controller/homeController";
import laptopController from "../controller/laptopController";
let router = express.Router()

const initWebRoute = (app)=> {
  router.get("/", homeController.getHomePage);
  // router.get("/get-student", homeController.getStudent);
  router.post("/create-laptop", laptopController.createLaptop);
  router.get("/edit-add-laptop", laptopController.getViewEditLaptop);
  router.post("/update-laptop", laptopController.updateLaptop);
  router.get("/delete-laptop", laptopController.deleteLaptop);
  return app.use("/", router);
}

export default initWebRoute;