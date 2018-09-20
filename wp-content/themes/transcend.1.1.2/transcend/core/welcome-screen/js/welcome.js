jQuery(document).ready(function () {

    /* If there are required actions, add an icon with the number of required actions in the About transcend page -> Actions required tab */
    var transcend_nr_actions_required = transcendWelcomeScreenObject.nr_actions_required;

    if ((typeof transcend_nr_actions_required !== 'undefined') && (transcend_nr_actions_required != '0')) {
        jQuery('li.transcend-w-red-tab a').append('<span class="transcend-actions-count">' + transcend_nr_actions_required + '</span>');
    }


    /* Dismiss required actions */
    jQuery(".transcend-required-action-button").click(function () {

        var id = jQuery(this).attr('id'),
            action = jQuery(this).attr('data-action');
        jQuery.ajax({
            type      : "GET",
            data      : { action: 'transcend_dismiss_required_action', id: id, todo: action },
            dataType  : "html",
            url       : transcendWelcomeScreenObject.ajaxurl,
            beforeSend: function (data, settings) {
                jQuery('.transcend-tab-pane#actions_required h1').append('<div id="temp_load" style="text-align:center"><img src="' + transcendWelcomeScreenObject.template_directory + '/inc/admin/welcome-screen/img/ajax-loader.gif" /></div>');
            },
            success   : function (data) {
                location.reload();
                jQuery("#temp_load").remove();
                /* Remove loading gif */
            },
            error     : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
    });
    
    /* Dismiss recommended plugins */
    jQuery(".transcend-recommended-plugin-button").click(function () {

        var id = jQuery(this).attr('id'),
            action = jQuery(this).attr('data-action');
        jQuery.ajax({
            type      : "GET",
            data      : { action: 'transcend_dismiss_recommended_plugins', id: id, todo: action },
            dataType  : "html",
            url       : transcendWelcomeScreenObject.ajaxurl,
            beforeSend: function (data, settings) {
                jQuery('.transcend-tab-pane#actions_required h1').append('<div id="temp_load" style="text-align:center"><img src="' + transcendWelcomeScreenObject.template_directory + '/inc/admin/welcome-screen/img/ajax-loader.gif" /></div>');
            },
            success   : function (data) {
                location.reload();
                jQuery("#temp_load").remove();
                /* Remove loading gif */
            },
            error     : function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });
    });

    jQuery('#set_page_automatic').click(function(evt){
        evt.preventDefault();
        var parent = jQuery(this).parent().parent();
        var container = jQuery(this).parent().parent().parent();

        jQuery.ajax({
            type: "GET",
            data: {action: 'transcend_set_frontpage' },
            dataType: "html",
            url: transcendWelcomeScreenObject.ajaxurl,
            beforeSend: function (data, settings) {
                parent.append('<div id="temp_load" style="text-align:center"><img src="' + transcendWelcomeScreenObject.template_directory + '/core/welcome-screen/img/ajax-loader.gif" /></div>');
            },
            success: function (data) {
                location.reload();
                jQuery("#temp_load").remove();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);
            }
        });

    });

});