

import multer from "multer";

const storage = multer.memoryStorage(); // memoryStorage for serverless
const upload = multer({ storage });

export default upload;



