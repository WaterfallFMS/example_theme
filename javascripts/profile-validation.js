$(document).ready(function(){
    $(".edit_directory_company").validate({
        rules: {
        /* use the email rule as a hook to trim the field of
         * whitespace. The test returns true, so the field
         * isn't really required
         */
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