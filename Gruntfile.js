module.exports = function(grunt){
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    compass: {
	        dist: {
	            options: {
	            	'sourcemap': true,
	                'outputStyle': 'compressed',
	                'sassDir': '_scss',
	                'cssDir': 'public/css'
	            }
	        }
	    },
	    jekyll: {
		    dist: {
		        options: {
			        src: '.',
			        dest: '_site',
			        config: '_config.yml',
			        safe: true
		        }
		    }
	    },
	    watch: {
		    markup: {
		      files: ['index.html','_includes/*.html','_posts/*'],
		      tasks: ['jekyll'],
		      options: {
		        livereload: true
		      }
            },
            css: {
                files: ['_scss/{,*/}*.{scss,sass}'],
                tasks: ['compass'],
                options: {
	                livereload: true
                }
            }
	    }
    });
	 
    //load npm tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['compass']);
};