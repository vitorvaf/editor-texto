const { ipcRenderer } = require("electron");

const textarea = document.getElementById('text');
const title = document.getElementById('title');

/// SET FILE

ipcRenderer.on('set-file', function(event,data){
    textarea.value = data.content;
    title.innerHTML = data.name + 'editor texto';
});



