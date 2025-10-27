import express from "express";
import { protect } from "../middleware/auth.js";
import { addGown, changeRoleToOwner, DeleteGown, getDashboardData, getOwnersGowns, ToggleGownAvailability, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();



ownerRouter.post("/change-role", protect, changeRoleToOwner)
ownerRouter.post("/add-gown", protect, upload.single("image"), addGown)
ownerRouter.get("/gowns", protect, getOwnersGowns)
ownerRouter.post("/toogle-gown", protect, ToggleGownAvailability)
ownerRouter.post("/delete-gown", protect, DeleteGown)
ownerRouter.get("/dashboard", protect, getDashboardData)
ownerRouter.post("/update-image", protect, upload.single("image"), updateUserImage)

export default ownerRouter;