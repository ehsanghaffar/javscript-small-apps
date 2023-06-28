
const html2text = (html) => {
    var tag = document.createElement('div');
    tag.innerHTML = html;
    
    return tag.innerText;
}

// Convert Any copied text to plain text in TinyMCE
paste_preprocess: function(plugin, args) {
      var tag = document.createElement('div');
      tag.innerHTML = args.content;
      args.content = tag.innerText;
}

// Convert Any copied text to plain text in TinyMCE (Keep <P> tag only)
paste_preprocess: function(plugin, args) {
    var pWithStyle = args.content.replace(/<[^p](?:.|\n)*?>/gm, '');
    args.content = pWithStyle.replace(/\sstyle=\"(.*?)\"/gm, '');
}