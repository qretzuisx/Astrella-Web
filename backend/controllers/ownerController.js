import imageKit from "../configs/imagekit.js";
import Gown from "../models/Gown.js";
import User from "../models/User.js";
import fs from "fs";

// API  user to owner
export const changeRoleToOwner = async (req, res)=> {
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true, message: "You can list gowns"})
        } catch (error) {
            console.log(error.message);
            res.json({success: false, message: error.message})
        
    }
}

// API to list gowns
export const addGown = async (req, res) =>{
    try {
        const {_id} = req.user;
        let gown = JSON.parse(req.body.gownData);
        const imageFile = req.file;

        if(!imageFile) {
            return res
            .status(400)
            .json({sucess: false, message: "No image uploaded"});
        }

// upload img to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/gown',
        })

// optimize through imagekit url
        const optimizedImageUrl = imageKit.url({
            path : response.filePath,
            transformation : [
                {width: '1280'},
                {quality: 'auto'},
                {format: 'webp'}
            ]
        });

        const image = optimizedImageUrl;
        await Gown.create({...gown, owner: _id, image});

        res.json({success: true, message: "Gown Added"})


    } catch (error) {
            console.log(error.message);
            res.json({success: false, message: error.message})
    }
}

// API to list owner gowns
export const getOwnersGowns = async (req, res)=>{
    try {
        const {_id} = req.user;
        const gowns = await Gown.find({owner: _id })
        res.json({success: true, gowns})
    } catch (error) {
            console.log(error.message);
            res.json({success: false, message: error.message})
        
    }
}

// API to toggle Gown Availability
export const ToggleGownAvailability = async (req, res)=>{
    try {
         const {_id} = req.user;
         const {gownID} = req.body
        const gown = await Gown.findById({carId})

        if(gown.owner.toString() !== _id.toString()){
            return res.json({ success: false, message: "Unauthorized" });
        }

        gown.isAvailable = !gown.isAvailable;
        await gown.save();
        res.json({success: true, message: "Availability Toggled"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
        
    }
}

// API to delete a gown
export const DeleteGown = async (req, res)=>{
    try {
         const {_id} = req.user;
         const {gownID} = req.body
        const gown = await Gown.findById({carId})

        if(gown.owner.toString() !== _id.toString()){
            return res.json({ success: false, message: "Unauthorized" });
        }

        gown.owner = null;
        gown.isAvailable = false;

        await gown.save();
        res.json({success: true, message: "Gown Remove"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
        
    }
}

// API Dashboard data
export const getDashboardData = async (req, res)=>{
    try {
        const {_id, role } = req.user;

        if(role !== 'owner'){
            return res.json({ success: false, message: "Unauthorized" });
        }

        const gowns = await Gown.find({owner: _id})
    } catch (error) {
         console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

