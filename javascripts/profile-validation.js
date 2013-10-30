$(document).ready(function(){
    $(".edit_directory_company").validate({
        rules: {
            email: {
                required: {
                    depends:function(){
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                email: true
            }
        }
    });
});