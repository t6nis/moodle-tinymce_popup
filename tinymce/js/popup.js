function init() {
    var f = document.forms[0];
    f.popup_title.value = tinyMCEPopup.editor.selection.getContent({format : 'text'}).trim().substring(0,15);
    f.popup_content.value = tinyMCEPopup.editor.selection.getContent().trim();
}
function insertPopup() {
    //Title is required
    var title = document.forms[0].popup_title.value;
    title = title.replace(/(<([^>]+)>)/ig,""); //Clear tags from title
    var content = document.forms[0].popup_content.value;
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/ig,""); //Clear script tags from content
    content = content.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/ig,""); //Clear iframe tags from content
    if (!title.trim()) {
        return false;
    }
    var content = '[popup][poptitle]'+title+'[/poptitle]'+content+'[/popup]';
    tinyMCEPopup.editor.execCommand('mceInsertContent', false, content);
    tinyMCEPopup.close();
}
tinyMCEPopup.onInit.add(init);c