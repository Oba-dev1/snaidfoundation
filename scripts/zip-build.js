const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const OUT_DIR = path.join(__dirname, '../out');
const ZIP_FILE = path.join(__dirname, '../site.zip');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

function zipBuild() {
    console.log('Creating site.zip from out/ directory (Manual Walk)...');

    if (!fs.existsSync(OUT_DIR)) {
        console.error('Error: "out" directory not found. Please run "npm run build" first.');
        process.exit(1);
    }

    const output = fs.createWriteStream(ZIP_FILE);
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    output.on('close', function () {
        console.log(`\nSuccess! Created site.zip (${archive.pointer()} bytes)`);
        console.log('IMPORTANT: Before uploading, please DELETE the existing "_next" folder and "index.html" on your server to avoid conflict errors.');
    });

    archive.on('warning', function (err) {
        if (err.code === 'ENOENT') {
            console.warn(err);
        } else {
            throw err;
        }
    });

    archive.on('error', function (err) {
        throw err;
    });

    archive.pipe(output);

    // Manual walker to ensure explicit directory permissions
    const walk = (dir, baseDir = '') => {
        const files = fs.readdirSync(dir);

        // Check if this directory is empty or just to ensure the directory itself exists in zip
        // explicitly add the directory entry
        if (baseDir !== '') {
            archive.append(null, { name: baseDir + '/', mode: 0o755 });
        }

        files.forEach(file => {
            const fullPath = path.join(dir, file);
            const relativePath = path.join(baseDir, file).replace(/\\/g, '/'); // Ensure forward slashes for zip
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                walk(fullPath, relativePath);
            } else {
                archive.file(fullPath, { name: relativePath, mode: 0o644 });
            }
        });
    };

    walk(OUT_DIR);

    archive.finalize();
}

zipBuild();
