export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const params = [
    "f_auto",
    "c_limit",
    `w_${width}`,
    `q_${quality || "auto"}`,
  ].join(",");
  
  // If it's already a cloudinary URL, replace the default upload part with our params
  if (src.includes("res.cloudinary.com")) {
    return src.replace("/upload/", `/upload/${params}/`);
  }
  
  return src;
}
