import imagemin from "imagemin";
import webp from "imagemin-webp";

await imagemin(["sources/*.{jpg,jpeg,png,webp}"], {
  destination: "output",
  plugins: [webp({ lossless: 9, method: 6, quality: 100 })],
}).then(() => {
  console.log("Images converted to webp!");
});
