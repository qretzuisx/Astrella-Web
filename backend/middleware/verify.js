


export const verifyOwner = async (req, res, next) =>{
    if(!req.user){
        return res.json({ success: false, messaage: "Not Authenticated"});
    }
    if(!req.user.role !== "owner"){
        return res.json({success: false, messaage: "Access Denied. Owners Only" });
    }
    next();
}