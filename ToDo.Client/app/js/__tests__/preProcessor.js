var ReactTools = require('react-tools');

module.exports = {
    process: function (src, file) {     
        // We really only care about JSX and React test files 
        return ReactTools.transform(src);
        //return src; 
    }
};