"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
const multer_1 = __importDefault(require("multer"));
cloudinary_1.default.v2.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.Admin_email,
    api_secret: process.env.Admin_pass,
});
//settingup storage for multer
const storage = multer_1.default.diskStorage({});
const upload = (0, multer_1.default)({
    storage,
    limits: { fieldSize: 20000000 },
});
//mmiddleware to handlee
const uploadImage = (req, res, next) => {
    upload.single("image")(req, res, (error) => {
        if (error) {
            console.error(error);
            return res.status(400).json({ message: "file upload failedd", error });
        }
        if (req.file) {
            try {
                const result = cloudinary_1.default.v2.uploader.upload(req.file.path);
                console.log(result);
                req.cloudinaryImageUrl = result.secure_url;
            }
            catch (error) {
                return error;
            }
        }
        next();
    });
};
exports.default = uploadImage;
