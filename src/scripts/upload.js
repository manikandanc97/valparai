const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dvtpfyaf6',
  api_key: '496684496542833',
  api_secret: 'CRz5OGQeBNcjBcy8SYDUiN6fwRA',
});

const uploadImage = async (filePath, folder) => {
  const fileName = path.basename(filePath, path.extname(filePath));
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `valparai/${folder}`,
      public_id: fileName,
      overwrite: true,
    });
    console.log(`UPLOAD_RESULT|${folder}|${fileName}|${result.secure_url}`);
    return { fileName, url: result.secure_url };
  } catch (error) {
    console.error(`Error uploading ${fileName}:`, error);
  }
};

const main = async () => {
  const assets = [
    { dir: 'public/images/experiences', folder: 'experiences' },
    { dir: 'public/images/features', folder: 'features' },
  ];

  for (const asset of assets) {
    const fullPath = path.join(process.cwd(), asset.dir);
    if (!fs.existsSync(fullPath)) continue;
    
    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.JPG')) {
        await uploadImage(path.join(fullPath, file), asset.folder);
      }
    }
  }
};

main();
