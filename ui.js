// import { ui as io } from "utils/io";

// (async () => {
//   io.send("loaded");

//   io.on("extract-palette", async ({ id, bytes, count = 5 }) => {
//     const image = await decodeImage(bytes);
//     const pixels = getPixels(image, { maxDimension });
//     const palette = getRGBAPalette(pixels, count);
//     io.send("palette", {
//       id,
//       palette,
//     });
//   });
// })();
