import crypto from "crypto";
import multer from "multer";

import { extname, resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder), // indica aonde vai ser salvo arquivo
        filename: (req, file, callback) => {
          const hash = crypto.randomBytes(16).toString("hex"); // crio um hash
          const filename = `${hash}-${file.originalname}`; // utilizo esse hash junto ao nome do arquivo

          return callback(null, filename); // o primeiro parametro é um erro, então não tratamos, e o segundo é o nome do arquivo
        },
      }),
    };
  },
};
