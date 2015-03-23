var ReactTools = require('react-tools');

module.exports = {
    process: function (src, file) {
        // We really only care about JSX and React test files 
      //  console.log(file);
        if (file.match("react-test.js") || file.match(".jsx")) return ReactTools.transform(src);
        return src;
        //return src; 
    }
};