module.exports = function(grunt){
	grunt.initConfig({

		concat : {
			options: {
				separator: '\n\n//-------------------------\n',
				banner: '\n\n//-------------------------\n'
			},
			dist: {
				src: ['js/angularDeo.js', 'js/services/serviceForRequest.js', 'js/controllers/EventController.js'],
				dest: 'builds/development/javascript/scripts.js'
			 }//,
			// prod: {
			// 	src: ['js/angularDeo.js', 'js/services/serviceForRequest.js', 'js/controllers/EventController.js'],
			// 	dest: 'builds/production/javascript/scripts.js'
			// }
		}, //end of concat config file

		bower_concat: {
			all: {
				dest: 'builds/development/js/_bower.js',
				cssDest: 'builds/development/css/_bower.css'
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded' //compact ili compressed
				},
				files: [{
					src:'all.scss',
					dest: 'builds/development/css/style.css'
				}]
			}
		}, // end of sass config file
		wiredep:{
			task:{
				src:'builds/development/*.html'
			}
		},
		connect: {
			serve: {
				options:{
					hostname: 'localhost',
					port: 3000,
					base: '',
					livereload: true
				}
			}
		},

		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			scripts: {
				files:['*.html','*.js','*.scss'],
				tasks:['concat','sass']
			}
		} // end of watch config file
		
	}); //init config


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-bower-concat');

	grunt.registerTask('default', ['wiredep','bower_concat', 'concat','sass','connect','watch']);



}; //wraper f