
// import { v2 as cloudinary } from "cloudinary";

// let isCloudinaryConnected = false;

// export const connectCloudinary = async () => {
//   if (isCloudinaryConnected) return;
//   if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
//     throw new Error("Cloudinary credentials are not set in environment variables");
//   }
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
//   isCloudinaryConnected = true;
//   console.log("Cloudinary connected");
// };

// export default cloudinary;

// export const testCloudinary = async () => {
//   try {
//     const result = await cloudinary.api.ping();
//     console.log("Cloudinary ping:", result);
//   } catch (error) {
//     console.error("Cloudinary ping ERROR:", {
//       message: error.message,
//       http_code: error.http_code,
//       name: error.name,
//     });
//   }
// };



import { v2 as cloudinary } from "cloudinary";

export const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  console.log("Cloudinary connected");
};


//twest  
// 
// export const testCloudinary = async () => {
//   try {
//     const result = await cloudinary.api.ping();
//     console.log("Cloudinary ping:", result);
//   } catch (error) {
//     console.error("Cloudinary ping ERROR:", {
//       message: error.message,
//       http_code: error.http_code,
//       name: error.name,
//     });
//   }
// };

// export const testUpload = async () => {
//   try {
//     const result = await cloudinary.uploader.upload(
//       "https://res.cloudinary.com/demo/image/upload/sample.jpg",
//       {
//         folder: "test",
//       }
//     );

//     console.log("UPLOAD SUCCESS:", result.secure_url);
//   } catch (error) {
//     console.error("UPLOAD FAILED:", {
//       message: error.message,
//       http_code: error.http_code,
//       name: error.name,
//     });
//   }
// };

export default cloudinary;