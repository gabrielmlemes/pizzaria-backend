import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";
import { UploadedFile } from "express-fileupload";

import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    const createProductService = new CreateProductService();

    let banner: string | undefined; 

    if (req.files && req.files["file"]) {
      const file: UploadedFile = req.files["file"];

      const resultFile: UploadApiResponse = await new Promise(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream({}, function (error, result) {
              if (error) {
                reject(error);
                return;
              }

              resolve(result);
            })
            .end(file.data);
        }
      );

      banner = resultFile.url;
    }

    const product = await createProductService.execute({
      name,
      price,
      description,
      banner,
      category_id,
    });

    return res.json(product); 
  }
}

export { CreateProductController };
