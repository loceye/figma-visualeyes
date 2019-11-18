export async function convertFrameToArraybuffer(frame) {
  const exportSettings = { format: "JPG", contentsOnly: true };
  const arraybuffer = await frame.exportAsync(exportSettings);
  return arraybuffer;
}
