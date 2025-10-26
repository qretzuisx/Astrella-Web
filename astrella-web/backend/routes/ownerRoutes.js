import express from "express";
import { protect } from "../middleware/auth.js";
import { addGown, changeRoleToOwner } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.get("/add-gown", protect, upload.single("image"), addGown)

export default ownerRouter;