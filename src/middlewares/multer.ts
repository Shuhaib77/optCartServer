import cloudinary from "cloudinary";
import { NextFunction } from "express";
import multer, { StorageEngine } from "multer";
import { Request, Response } from "express";

cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.Admin_email,
  api_secret: process.env.Admin_pass,
});

//settingup storage for multer
const storage: StorageEngine = multer.diskStorage({});

const upload = multer({
  storage,
  limits: { fieldSize: 20000000 },
});
//mmiddleware to handlee

const uploadImage = (req: any, res: Response, next: NextFunction) => {
  upload.single("image")(req, res, (error: any) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ message: "file upload failedd", error });
    }
    if (req.file) {
      try {
        const result: any = cloudinary.v2.uploader.upload(req.file.path);
        console.log(result);
        req.cloudinaryImageUrl = result.secure_url;
      } catch (error) {
        return error
      }
    }
    next()
  });

};

export default uploadImage
