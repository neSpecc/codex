/**
* Paragraph Plugin\
* Creates P tag and adds content to this tag
*/
var paragraphTool = {

    /**
     * Prepare method before calling make function
     * @uses Paste tool prepare method
     */
    prepare : function() {
        pasteTool.prepare();
    },

    /**
    * Make initial header block
    * @param {object} JSON with block data
    * @return {Element} element to append
    */
    make : function (data) {

        var tag = document.createElement('DIV');

        tag.classList.add('ce-paragraph');

        if (data && data.text) {
            tag.innerHTML = data.text;
        }

        tag.contentEditable = true;

        /**
         * if plugin need to add placeholder
         * tag.setAttribute('data-placeholder', 'placehoder');
         */

        /**
         * @uses Paste tool callback.
         * Function analyzes pasted data
         * If pasted URL from instagram, twitter or Image
         * it renders via Social widgets content or uploads image and uses Image tool to render
         */
        tag.addEventListener('paste', pasteTool.callbacks.pasted, false);

        return tag;

    },

    /**
    * Method to render HTML block from JSON
    */
    render : function (data) {

       return paragraphTool.make(data);

    },

    /**
    * Method to extract JSON data from HTML block
    */
    save : function (blockContent){

        var json  = {
                type : 'paragraph',
                data : {
                    text : null,
                }
            };

        json.data.text = blockContent.innerHTML;

        return json;

    },

};

/**
* Now plugin is ready.
* Add it to redactor tools
*/
cEditor.tools.paragraph = {

    type             : 'paragraph',
    iconClassname    : 'ce-icon-paragraph',
    prepare          : paragraphTool.prepare,
    make             : paragraphTool.make,
    appendCallback   : null,
    settings         : null,
    render           : paragraphTool.render,
    save             : paragraphTool.save,
    display          : false,
    enableLineBreaks : false,
    allowedToPaste   : true

};
