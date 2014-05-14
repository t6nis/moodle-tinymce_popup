(function() {
    tinymce.create('tinymce.plugins.popupPlugin', {
        init : function(ed, url) {
            var t = this;

            t.editor = ed;
            t.url = url;

            // Register commands.
            ed.addCommand('mcePopup', function() {
                ed.windowManager.open({
                    file : url + '/popup.htm',
                    width : 490 + parseInt(ed.getLang('popup.delta_width', 0)),
                    height : 310 + parseInt(ed.getLang('popup.delta_height', 0)),
                    inline : 1
                }, {
                    plugin_url : url
                });
            });
            // Register buttons.
            ed.addButton('popup', {
                title : 'popup.desc',
                image : url + '/img/icon.png',
                cmd : 'mcePopup'});
        },
        getInfo : function() {
            return {
                longname :  'Popup Plugin',
                author :    'Tõnis Tartes',
                authorurl : 'http://www.t6nis.com/',
                infourl :   'http://moodle.org',
                version :   '1.0'
            };
        }
    });

    tinymce.PluginManager.add('popup', tinymce.plugins.popupPlugin);
})();