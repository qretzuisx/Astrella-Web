import express from "express";
import { protect } from "../middleware/auth.js";
import { addGown, DeleteGown, getDashboardData, getOwnersGowns, ToggleGownAvailability, updateUserImage } from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";
import { verifyOwner } from "../middleware/verify.js/index.js";

const ownerRouter = express.Router();


ownerRouter.post("/add-gown", protect, verifyOwner, upload.single("image"), addGown)
ownerRouter.get("/gowns", protect, verifyOwner, getOwnersGowns)
ownerRouter.put("/toogle-gown", protect, verifyOwner, ToggleGownAvailability)
ownerRouter.delete("/delete-gown", protect, verifyOwner, DeleteGown)
ownerRouter.get("/dashboard", protect, verifyOwner, getDashboardData)
ownerRouter.post("/update-image", protect, verifyOwner, upload.single("image"), updateUserImage)

export default ownerRouter;