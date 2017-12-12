import { PLATFORM } from 'aurelia-pal';
export class Notify{
    public showSuccess() {
        PLATFORM.global.swal("Thành công", "Thực hiện thành công", "success");
    }
    public showError(err) {
        PLATFORM.global.swal("Không thành công", `${err}`, "error");
    }
    public showCancel() {
        PLATFORM.global.swal("Đã hủy", "Đã hủy thao tác", "warning");
    }
    public confirm(cb) {
        PLATFORM.global.swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
            function (isConfirm) {
                cb(isConfirm)
            })
    }
}