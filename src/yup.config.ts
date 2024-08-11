import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "vui lòng nhập ${label}.",
    notType: "${label} không đúng định dạng.",
  },
  string: {
    email: "địa chỉ email không đúng định dạng.",
    min: "${label} phải chứa ít nhất ${min} kí tự.",
    matches: "${label} không đúng định dạng.",
  },
  number: {
    integer: "${label} phải là số nguyên.",
    min: "${label} phải lớn hơn hoặc bằng ${min}.",
  },
});
