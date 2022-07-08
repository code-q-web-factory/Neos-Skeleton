<?php
namespace Deployer;

require 'recipe/common.php';

// Project
set('application', 'APPLICATION NAME HERE...');
set('repository', 'git@github.com:...');

// Shared files/dirs
set('shared_files', []);
set('shared_dirs', [
    'Data/Persistent',
    'Data/Logs',
    'Web/_Resources/Persistent',
]);

// Tweaks
if (getenv('COT_ISOLATED') !== '') {
    set('ssh_multiplexing', false);
}

// Deployment
set('deploy_path', '/var/www/FOLDER_TO_BE_PUBLISHED');
set('default_timeout', 1200);

// Hosts
// host(['SERVER_NAME.proserver.punkt.de'])->addSshOption('AddressFamily', 'inet6')->user('proserver')->stage('staging');
host('SERVER_NAME.proserver.punkt.de')
    ->addSshOption('AddressFamily', 'inet6')
    ->user('proserver')
    ->stage('production');

// Tasks
task('build', function () {
    set('release_path', __DIR__);
    run('touch {{release_path}}/RELEASE_$(git describe --tag --exact-match HEAD 2>/dev/null || git rev-parse HEAD)');
})->local();

task('build:assets', function () {
    set('frontend_path', __DIR__ . DIRECTORY_SEPARATOR . 'DistributionPackages/CodeQ.Site/Resources/Private');
    run('cd {{frontend_path}}');
    // run('nvm use');
    run('cd {{frontend_path}} && npm ci && npm run build');
})->local();

task('deploy:upload', function () {
    upload(__DIR__ . '/', '{{deploy_path}}/transfer',
        [
            'progress_bar' => true,
            'options' =>
                [
                    '--no-progress',
                    '--delete',
                    '--delete-excluded',
                    '--exclude=/.cache',
                    '--exclude=.git',
                    '--exclude=Data',
                    '--exclude=Web/_Resources'
                ]
        ]);
    run('rsync -a --delete {{deploy_path}}/transfer/ {{release_path}}');
});

task('deploy:doctrine_migrate', function () {
    run('{{bin/php}} {{release_path}}/flow doctrine:migrate');
});

task('deploy:resource_publish', function () {
    run('{{bin/php}} {{release_path}}/flow resource:publish --collection=static');
});

task('deploy:reload_php_fpm', function () {
    run('sudo /usr/local/etc/rc.d/php-fpm reload');
});

task('deploy:cache_flush', function () {
    run('{{bin/php}} {{release_path}}/flow flow:cache:flush');
});

task('deploy:cache_warmup', function () {
    run('{{bin/php}} {{release_path}}/flow cache:warmup');
});

// Workflow
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'build',
    'deploy:upload',
    'deploy:shared',
    'deploy:cache_warmup',
    'deploy:doctrine_migrate',
    'deploy:resource_publish',
    'deploy:symlink',
    'deploy:reload_php_fpm',
    'deploy:cache_flush',
    'deploy:cache_warmup',
    'deploy:unlock',
    'cleanup',
    'success',
]);
after('deploy:failed', 'deploy:unlock');
