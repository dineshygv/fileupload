import $ from 'jquery';
import * as fileUpload from 'blueimp-file-upload';

$(() => {
    $('#fileupload').fileupload({
        url: "http://127.0.0.1:3000/file",
        dataType: 'json',
    }).on('fileuploadadd', function (e, data) {
        
    })
}) 

import css from 'style-loader!css-loader!less-loader!./assets/css/style.less';