jasmine.VERBOSE = true;

require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter("app/js/output/");
jasmine.getEnv().addReporter(reporter);
