module.exports = function(grunt) {
    'use strict';
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*']
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            'cssSrcDir': 'src/sass',
            'cssTargetDir': 'css',
            'jsSrcDir': 'src/js',
            'jsTargetDir': 'js',
            'jsDependencies': [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/jquery-history/dist/jquery.history.min.js',
                'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
                'node_modules/masonry-layout/dist/masonry.pkgd.min.js',
                'node_modules/vanilla-fitvids/jquery.fitvids.js',
                //'node_modules/highlightjs/highlight.pack.min.js',
                'node_modules/nprogress/nprogress.js',
                'src/js/vendor/gist-embed.min.js'
            ],
            'cssDependencies': [
                'node_modules/normalize.css/normalize.css',
                'node_modules/highlightjs/styles/default.css',
                'node_modules/nprogress/nprogress.css'
            ]
        },
        copy: {
            dev: {
                files: [{
                    dest: 'static/fonts/',
                    src: '*',
                    cwd: 'src/fonts/',
                    expand: true
                }]
            },
            dist: {
                files: [{
                    dest: 'static/fonts/',
                    src: '*',
                    cwd: 'src/fonts/',
                    expand: true
                }]
            }
        },
        clean: {
            dist: ['static']
        },
        sass: {
            dev: {
                options: {
                    sourceMaps: true
                },
                files: {
                    'static/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
                }
            },
            dist: {
                options: {
                    implementation: sass,
                    outputStyle: 'compressed',
                    sourceMaps: false
                },
                files: {
                    'static/<%=  config.cssTargetDir %>/style.css': '<%=  config.cssSrcDir %>/style.scss'
                }
            }
        },
        cssmin: {
            dev: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1,
                    sourceMap: true
                },
                files: {
                    'static/<%=  config.cssTargetDir %>/dependencies.css': [
                        '<%=	config.cssDependencies %>'
                    ]
                }
            },
            dist: {
                options: {
                    shorthandCompacting: false,
                    roundingPrecision: -1,
                    sourceMap: false
                },
                files: {
                    'static/<%= config.cssTargetDir %>/dependencies.css': [
                        '<%= config.cssDependencies %>'
                    ],
                    'static/<%= config.cssTargetDir %>/main.css': [
                        '<%= config.cssDependencies %>',
                        'static/<%=  config.cssTargetDir %>/style.css'
                    ]
                }
            }
        },
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            files: {
                src: 'static/<%=  config.cssTargetDir %>/*.css'
            }
        },
        uglify: {
            dev: {
                files: {
                    'static/<%= config.jsTargetDir %>/script.js': [
                        '<%= config.jsSrcDir %>/**/*.js'
                    ],
                    'static/<%= config.jsTargetDir %>/dependencies.js': [
                        '<%= config.jsDependencies %>'
                    ]
                }
            },
            devlight: {
                files: {
                    'static/<%= config.jsTargetDir %>/script.js': [
                        '<%= config.jsSrcDir %>/**/*.js'
                    ]
                }
            },
            dist: {
                files: {
                    'static/<%= config.jsTargetDir %>/script.js': [
                        '<%= config.jsSrcDir %>/**/*.js'
                    ],
                    'static/<%= config.jsTargetDir %>/dependencies.js': [
                        '<%= config.jsDependencies %>'
                    ],
                    'static/<%= config.jsTargetDir %>/main.js': [
                        '<%= config.jsDependencies %>',
                        '<%= config.jsSrcDir %>/**/*.js'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: '<%=  config.cssSrcDir %>/**/*.scss',
                tasks: ['sass:dev', 'copy:dev', 'postcss']
            },
            js: {
                files: '<%=  config.jsSrcDir %>/**/*.js',
                tasks: ['uglify:devlight']
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'sass:dist',
        'cssmin:dist',
        'postcss',
        'copy:dist',
        'uglify:dist'
    ]);
    grunt.registerTask('default', [
        'sass:dev',
        'cssmin:dev',
        'postcss',
        'copy:dev',
        'uglify:dev',
        'watch'
    ]);
};
