import express from "express";
const router = express.Router();
import DataController from "../controllers/DataController.js";

// public routes
router.post("/register", DataController.RecordRegister);
router.get("/display", DataController.RecordDisplay);
router.get("/display/:id", DataController.RecordSearchByID);
router.delete("/delete", DataController.RecordDeleteAll);
router.delete("/delete/:id", DataController.RecordDeleteByID);
router.put("/update/:id", DataController.RecordUpdateByID);
// private routes
export default router;