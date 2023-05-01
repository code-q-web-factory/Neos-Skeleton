import ESBUILD from 'esbuild';
import glob from 'glob';
import path from 'path';

const fileExtensions = 'js,ts';
const outputFolder = argv('outputFolder');
const entryFolder = argv('entryFolder');
const watch = argv('watch') === true;

process.env.NODE_ENV = argv('production') === true ? 'production' : 'development';

const files = glob
    .sync(`${entryFolder}/*.{${fileExtensions}}`)
    .map((entry) => path.basename(entry))
    .filter((name) => !name.startsWith('_'));

files.forEach((file) => {
    ESBUILD.build({
        entryPoints: [`${entryFolder}/${file}`],
        watch,
        outdir: outputFolder,
        sourcemap: true,
        bundle: true,
        minify: true,
        platform: 'browser',
        logLevel: 'info',
        legalComments: 'linked',
    });
});

function argv(key) {
    // Return true if the key exists and a value is defined
    if (process.argv.includes(`--${key}`)) {
        return true;
    }
    const value = process.argv.find((element) => element.startsWith(`--${key}=`));

    // Return null if the key does not exist and a value is not defined
    if (!value) {
        return null;
    }

    return value.replace(`--${key}=`, '');
}
