function init_vozme() {

    var url = $("span#vozme").attr("data-url-init");
    var urlMain = $("span#vozme").attr("data-url-main");
    var sxToken = $("span#vozme").attr("data-token");

    var txt = '';
    txt = $(".modContent").siblings("h1").text() + "        ";

    var contenido = $(".modContent, context-parent, .modContentLateral").clone();
    contenido.find("script, .footer-share-options, select, form, .calendarioTabla, .pagination, style").remove();
    txt += contenido.text();

    var form = $(document.createElement('form'));
    $(form).attr("id", 'form-vozme');
    $(form).attr("action", urlMain);
    $(form).attr("method", "POST");

    var input_sxToken = $("<input>").attr("type", "hidden").attr("name", "sxToken").val(sxToken);
    var input_contenido = $("<input>").attr("type", "hidden").attr("name", "text").val(txt);

    $(form).append($(input_sxToken));
    $(form).append($(input_contenido));
    var data = $(form).serialize();

    if (!$('#bnt-play-vozme').hasClass("enable")) {

        $.ajax({
            url: url,
            type: "POST",
            processData: false,
            contentType: false,
            data: data,
            cache: false,
            dataType: 'json',
            beforeSend: function () {
                
                $('#bnt-play-vozme').unbind('click');
                $('#block-play-vozme').hide();
                $('#block-play-vozme').html('');
            },
            success: function (response, textStatus, jqXHR) {

                $('#bnt-play-vozme').addClass('enable');

                if (response.newWindows) {
                    var tgt = 'voice'
                    window.open(urlMain, tgt, 'width=330,height=100,resizable=yes,scrollbars=yes,locationbar=no,left=100,top=100');
                    delete form;

                } else {
                    $('#block-play-vozme').html(response.html);
                    $('#block-play-vozme').show();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });

    } else {
        $('#bnt-play-vozme').removeClass('enable');
        $('#bnt-play-vozme').bind('click');
        $('#block-play-vozme').hide();
        $('#block-play-vozme audio').each(function () {
            this.pause();
            this.currentTime = 0; 
        });
        $('#block-play-vozme').html('');
    }
}