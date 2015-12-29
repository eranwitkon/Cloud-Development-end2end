module.exports = function(grunt) {
    var tasks;

    require('load-grunt-initconfig')(grunt);
    
    grunt.registerTask('lint', ['jscs', 'jshint']);

    
    tasks = [
        'lint'
        
    ];
    
    grunt.registerTask('default', tasks);
    
};
