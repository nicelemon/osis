module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-aws');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-perfbudget');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compress');
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		aws: grunt.file.readJSON("aws-credentials.json"),
		wpt: grunt.file.readJSON('wpt-credentials.json'),

		s3: {
			options: {
				accessKeyId: "<%= aws.accessKeyId %>",
				secretAccessKey: "<%= aws.secretAccessKey %>",
				bucket: "<%= aws.bucket %>",
				region: "<%= aws.region %>",
				access: "public-read"
			},
			upload: {
				headers: {
                    CacheControl: 604800,
                    Expires: new Date(Date.now() + 604800000).toUTCString()
                },
				cwd: "prod/",
				src: ["**"]
			}
		},

		cloudfront: {
			options: {
				accessKeyId: "<%= aws.accessKeyId %>",
				secretAccessKey: "<%= aws.secretAccessKey %>",
				distributionId: "EGPU172BPH6RM",
				invalidations: [
					"/index.html",
					"/css/osis.css",
					"/js/osis.js",
					"/js/osis-fullpage-controls.js"
				]
			}
		},

		shell: {
			s3cmd: {
				// command: 'ls'
				command: "s3cmd --recursive modify --add-header='Cache-Control:max-age=2628000' s3://staging.osis.tv/"
			}
		},

		compress: {
			main: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: 'dev/',
				src: ['css/**','js/**','index.html'],
				dest: 'prod/'
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: 'dev/',
				src: ['vid/**','music/**','img/**'],
				dest: 'prod/',
			},
		},

		uglify: {
			dist: {
				files: {
					'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

		perfbudget: {
			default: {
				options: {
					url: 'http://staging.osis.tv',
					key: '<%= wpt.APIKey %>',
					budget: {
						visualComplete: '4000',
						SpeedIndex: '1500'
					}
				}
			}
		}

	});

	grunt.registerTask('default', ['compress','copy']);
	grunt.registerTask('s3', ['s3']);
	grunt.registerTask('perf', ['perfbudget']);
	grunt.registerTask('s3cmd', ['shell:s3cmd']);
	grunt.registerTask('uglify', ['uglify']);
};