/**
 * @website		http://aplikko.com
 * @copyright	Copyright (C) 2020 Aplikko.com. All rights reserved.
 * @license		http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
**/
jQuery(function($) {

    $('.post-formats input').on('click', function(){
        checkFormate();
    });

    function checkFormate(){

        var formate = $('.post-formats input:checked').attr('value');

        if(typeof formate != 'undefined'){

            $('#jform_attribs_gallery, #jform_attribs_audio, #jform_attribs_audio, #jform_attribs_video, #jform_attribs_link_title, #jform_attribs_link_url, #jform_attribs_quote_text, #jform_attribs_quote_author, #jform_attribs_post_status, #jform_attribs_custom_post').closest('.control-group').hide();

            if( formate=='video' ) {
                $('#jform_attribs_video').closest('.control-group').show();
            } else if( formate=='gallery' ) {
                $('#jform_attribs_gallery').closest('.control-group').show();
            } else if( formate=='audio' ) {
                $('#jform_attribs_audio').closest('.control-group').show();
            } else if( formate=='link' ) {
                $('#jform_attribs_link_title').closest('.control-group').show();
                $('#jform_attribs_link_url').closest('.control-group').show();
            } else if( formate=='quote' ) {
                $('#jform_attribs_quote_text').closest('.control-group').show();
                $('#jform_attribs_quote_author').closest('.control-group').show();
            } else if( formate=='status' ) {
                $('#jform_attribs_post_status').closest('.control-group').show();
            } else if( formate=='custom' ) {
                $('#jform_attribs_custom_post').closest('.control-group').show();
            }

        }
    }

    $(document).ready(function(){
        checkFormate();
    });

});