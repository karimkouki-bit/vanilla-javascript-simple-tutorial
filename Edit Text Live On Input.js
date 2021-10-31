document.getElementById('title').onkeyup = function () {
    
    'use strict';
    
    document.getElementById('title_live').textContent = this.value;
};

document.getElementById('content').onkeyup = function () {
    
    'use strict';
    
    document.getElementById('content_live').textContent = this.value;
};

/*
var title = document.getElementById('title'),

    content = document.getElementById('content'),
    
    title_live = document.getElementById('title_live'),
    
    content_live = document.getElementById('content_live');
    
    title.onkeyup = function () {
    
    'use strict';
    
    title_live.textContent = this.value;
    
    }
    
    content.onkeyup = function () {
    
    'use strict';
    
    content_live.textcontent = this.value;
    
    }
*/