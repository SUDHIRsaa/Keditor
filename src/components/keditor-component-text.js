import '../styles/keditor-component-text.less';

import KEditor from 'keditor';
import SunEditor from 'suneditor';
import plugins from 'suneditor/src/plugins'


KEditor.components['text'] = {
    options: {
        plugins:[plugins.font],
        plugins:[plugins.fontSize],
        plugins:[plugins.formatBlock],
        buttonList: [
            [
            
            'font', 'fontSize', 'formatBlock',
            'paragraphStyle', 'blockquote',
            'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript',
            'fontColor', 'hiliteColor', 'textStyle',
             'outdent', 'indent', 
             'fullScreen', 'showBlocks', 'codeView',
             'preview', 'print', 'save', 'template'
     
            ],
        ],
        
        mode: 'inline',
        width: '100%',
        height: 'auto',
        title:'editor',
        
    },

    init: function (contentArea, container, component, keditor) {
        let self = this;
        let options = keditor.options;

        let componentContent = component.children('.keditor-component-content');
        componentContent.prop('contenteditable', true);

        componentContent.on('input', function (e) {
            if (typeof options.onComponentChanged === 'function') {
                options.onComponentChanged.call(keditor, e, component);
            }

            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(keditor, e, container, contentArea);
            }

            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(keditor, e, contentArea);
            }
        });

        let editor = SunEditor.create(componentContent[0], self.options);
       
        
      
    },

  
};
