import { QuestionRequest } from "../../models/multiple-question";

const questions: QuestionRequest[] = [
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Hybid-Text Transfer Protocol",
      },
      {
        isKey: true,
        idx: 1,
        title: "Hyper-Text Transfer Protocol",
      },
      {
        isKey: false,
        idx: 2,
        title: "Hyper-Text Transmission Protocol",
      },
      {
        title: "Hybid-Technical Transfer Protocol",
        idx: 3,
        isKey: false,
      },
    ],

    title: "HTTP là viết tắt của",
    idx: 0,
  },
  {
    idx: 1,
    answers: [
      {
        title: "Ship HTTP",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Secure HTTP",
      },
      {
        idx: 2,
        isKey: false,
        title: "Socket HTTP",
      },
      {
        idx: 3,
        title: "Star HTTP",
        isKey: false,
      },
    ],
    title: "HTTPS là viết tắt của",

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "HTTP là gì?",
    idx: 2,

    answers: [
      {
        title:
          "giao thức thuộc tầng ứng dụng thuộc bộ giao thức TCP/IP được sử dụng cho truyền siêu văn bản (Hyper-Text) của các ứng dụng web (Web applications)",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title:
          "bộ phần mềm chạy trên máy khách có chức năng tạo yêu cầu, gửi yêu cầu và hiển thị phản hồi/kết quả trả về từ máy chủ web.",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "một chuỗi ký tự cho phép tham chiếu đến một tài nguyên",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "giao thức thuộc tầng ứng dụng thuộc bộ giao thức TCP/IP được sử dụng cho truyền văn bản (Hyper-Text) của các ứng dụng web (Web applications)",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 3,
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Cổng dịch vụ chuẩn của HTTP là ... và cổng dịch vụ chuẩn của HTTPS là ...",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "443/8080",
      },
      {
        idx: 1,
        isKey: false,
        title: "8080/443",
      },
      {
        idx: 2,
        isKey: true,
        title: "80/443",
      },
      {
        title: "443/80",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Trong quá trình máy khách (Web browser) gửi yêu cầu đến máy chủ (HTTP server) thông qua kết nối mạng, máy khách tạo một yêu cầu (GET request) và gửi xuống tầng HTTP, tiếp theo...?",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 4,

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "yêu cầu được đóng gói và chuyển tiếp đến các lớp hạ tầng mạng thông qua các lớp vận chuyển (UDP) và mạng (IP) để đến máy chủ HTTP ở cổng biết trước (Well-known port)",
      },
      {
        title:
          "yêu cầu được đóng gói và chuyển tiếp đến các lớp hạ tầng mạng thông qua các lớp vận chuyển (TCP) và mạng (IP) để đến máy chủ HTTP ở cổng biết trước (Well-known port)",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title:
          "yêu cầu được đóng gói và chuyển tiếp đến các lớp hạ tầng mạng thông qua các lớp vận chuyển (TCP) và mạng (ICMP) để đến máy chủ HTTP ở cổng biết trước (Well-known port)",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "yêu cầu được đóng gói và chuyển tiếp đến các lớp hạ tầng mạng thông qua các lớp vận chuyển (UDP) và mạng (ICMP) để đến máy chủ HTTP ở cổng biết trước (Well-known port)",
      },
    ],
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 5,
    title: "Giao thức HTTP hoạt động theo kiểu...trong mô hình giao tiếp...",
    answers: [
      {
        title:
          "yêu cầu – đáp ứng (request - response)/khách – chủ (client – server)",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "khách – chủ (client – server)/yêu cầu – đáp ứng (request - response)",
      },
      {
        title:
          "ngang hàng (peer to peer)/yêu cầu – đáp ứng (request - response)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "đáp ứng - yêu cầu (response - request)/khách - chủ (client - server)",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "HTTP/1.0 sử dụng một kết nối mới cho một, hoặc nhiều cặp trao đổi yêu cầu / đáp ứng, trong khi HTTP/1.1 sử dụng một kết nối mới cho một cặp trao đổi yêu cầu / đáp ứng.",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "HTTP/1.0 sử dụng nhiều kết nối mới cho một cặp trao đổi yêu cầu / đáp ứng, trong khi HTTP/1.1 sử dụng một kết nối mới cho một, hoặc nhiều cặp trao đổi yêu cầu / đáp ứng.",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "HTTP/1.0 sử dụng một kết nối mới cho một cặp trao đổi yêu cầu / đáp ứng, trong khi HTTP/1.1 sử dụng một kết nối mới cho một, hoặc nhiều cặp trao đổi yêu cầu / đáp ứng.",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "HTTP/1.0 sử dụng một kết nối mới cho một cặp trao đổi yêu cầu / đáp ứng, trong khi HTTP/1.1 sử dụng nhiều kết nối mới cho một, hoặc nhiều cặp trao đổi yêu cầu / đáp ứng.",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 6,
    title: "Điểm khác biệt chính của HTTP/1.1 so với bản gốc HTTP/1.0 là",
  },
  {
    title: "Đâu không phải đặc điểm cơ bản của giao thức HTTP?",
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        isKey: false,
        title: "Không kết nối (Connectionless)",
        idx: 0,
      },
      {
        idx: 1,
        title: "Độc lập với thông tin truyền (Media independent)",
        isKey: false,
      },
      {
        idx: 2,
        title: "Kiểm soát luồng (Flow control)",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Không trạng thái (Stateless)",
      },
    ],
    idx: 7,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Máy khách và máy chủ HTTP giao tiếp theo kiểu ngang hàng, mà không duy trì kết nối liên tục giữa hai bên",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Máy khách và máy chủ HTTP giao tiếp theo kiểu yêu cầu – đáp ứng, mà không duy trì kết nối liên tục giữa hai bên",
      },
      {
        isKey: false,
        title:
          "Máy khách và máy chủ HTTP giao tiếp theo kiểu yêu cầu – đáp ứng, và duy trì kết nối liên tục giữa hai bên",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Máy khách và máy chủ HTTP giao tiếp theo kiểu ngang hàng, và duy trì kết nối liên tục giữa hai bên",
      },
    ],
    title: "Đặc điểm không kết nối (Connectionless) của giao thức HTTP là?",

    idx: 8,
  },
  {
    title:
      "Đặc điểm độc lập với thông tin truyền (Media independent) của giao thức HTTP là?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "bất kỳ loại dữ liệu nào đều có thể truyền thông qua HTTP, với điều kiện cả máy khách và máy chủ biết cách xử lý nội dung của dữ liệu",
      },
      {
        idx: 1,
        title:
          "bất kỳ loại dữ liệu nào đều có thể truyền thông qua HTTP, với điều kiện máy khách biết cách xử lý nội dung của dữ liệu",
        isKey: false,
      },
      {
        title:
          "chỉ một vài loại dữ liệu có thể truyền thông qua HTTP, với điều kiện cả máy khách và máy chủ biết cách xử lý nội dung của dữ liệu",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "chỉ một vài loại dữ liệu có thể truyền thông qua HTTP, với điều kiện máy chủ biết cách xử lý nội dung của dữ liệu",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 9,
  },
  {
    title: "Đặc điểm không trạng thái (Stateless) của giao thức HTTP là?",
    idx: 10,
    answers: [
      {
        title:
          "Chỉ có máy khách nhận biết về sự tồn tại của máy chủ trong yêu cầu hiện tại. Sau đó, cả hai đều quên ngay sự tồn tại của nhau.",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Chỉ có máy chủ nhận biết về sự tồn tại của máy chủ trong yêu cầu hiện tại. Sau đó, cả hai đều quên ngay sự tồn tại của nhau.",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Máy khách và máy chủ nhận biết về sự tồn tại của nhau trong yêu cầu hiện tại và duy trì sự nhận biết này sau khi yêu cầu kết thúc.",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Máy khách và máy chủ nhận biết về sự tồn tại của nhau chỉ trong yêu cầu hiện tại. Sau đó, cả hai đều quên ngay sự tồn tại của nhau.",
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title: "GET, POST, PUT, DELETE, CONNECT, OPTIONS",
        idx: 0,
        isKey: false,
      },
      {
        title: "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title:
          "GET, HEAD, POST, PUT, DELETE, CONNECT, DISCONNECT, OPTIONS, TRACE",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "GET, HEAD, POST, PUT, DELETE, DISCONNECT, OPTIONS, TRACE",
      },
    ],
    idx: 11,

    practiceCode: "an-toan-web-va-csdl-01",
    title: "Các phương thức mà HTTP hỗ trợ bao gồm:",
  },
  {
    answers: [
      {
        title: "truy vấn thông tin từ máy chủ sử dụng một địa chỉ web",
        isKey: true,
        idx: 0,
      },
      {
        title: "gửi dữ liệu đến máy chủ",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "thay thế tất cả các biểu diễn hiện tại của tài nguyên đích bằng nội dung tải lên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "thiết lập đường hầm tới máy chủ được xác định bởi một địa chỉ web nhất định",
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
    idx: 12,
    title: "Phương thức GET được dùng để",
  },
  {
    idx: 13,

    title: "Phương thức HEAD có chức năng...",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "tương tự như phương thức GET, nhưng chỉ có dòng trạng thái và phần tiêu đề được chuyển từ máy chủ đến máy khách",
      },
      {
        title:
          "tương tự như phương thức GET, nhưng chỉ có dòng trạng thái được chuyển từ máy chủ đến máy khách",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "tương tự như phương thức GET, nhưng chỉ có phần tiêu đề được chuyển từ máy chủ đến máy khách",
      },
      {
        title:
          "tương tự như phương thức GET, nhưng chỉ có dòng trạng thái và phần tiêu đề được chuyển từ máy khách đến máy chủ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 14,

    title: "Phương thức POST được sử dụng để?",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "gửi dữ liệu đến máy chủ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "truy vấn thông tin từ máy chủ sử dụng một địa chỉ web",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "thay thế tất cả các biểu diễn hiện tại của tài nguyên đích bằng nội dung tải lên",
      },
      {
        title: "mô tả các tùy chọn truyền thông cho tài nguyên đích.",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "gửi dữ liệu đến máy chủ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "truy vấn thông tin từ máy chủ sử dụng một địa chỉ web",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "thay thế tất cả các biểu diễn hiện tại của tài nguyên đích bằng nội dung tải lên",
      },
      {
        isKey: false,
        title: "mô tả các tùy chọn truyền thông cho tài nguyên đích",
        idx: 3,
      },
    ],
    title: "Phương thức PUT được dùng để",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 15,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "truy vấn thông tin từ máy chủ sử dụng một địa chỉ web",
      },
      {
        isKey: false,
        title:
          "xóa tất cả các biểu diễn hiện tại của tài nguyên nguồn cho bởi một địa chỉ web",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "xóa tất cả các biểu diễn hiện tại của tài nguyên đích cho bởi một địa chỉ web",
      },
      {
        title:
          "thay thế tất cả các biểu diễn hiện tại của tài nguyên đích bằng nội dung tải lên",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 16,
    title: "Phương thức DELETE được dùng để?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "Phương thức CONNECT được dùng để?",
    answers: [
      {
        idx: 0,
        title:
          "thiết lập đường hầm tới máy chủ được xác định bởi một địa chỉ web nhất định",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "thực hiện một phép kiểm tra vòng lặp lại (loop-back) theo đường dẫn đến tài nguyên đích",
      },
      {
        idx: 2,
        title:
          "thay thế tất cả các biểu diễn hiện tại của tài nguyên đích bằng nội dung tải lên",
        isKey: false,
      },
      {
        title: "gửi dữ liệu đến máy chủ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 17,
  },
  {
    idx: 18,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "xóa tất cả các biểu diễn hiện tại của tài nguyên đích cho bởi một địa chỉ web",
      },
      {
        title:
          "thiết lập đường hầm tới máy chủ được xác định bởi một địa chỉ web nhất định",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "thực hiện một phép kiểm tra vòng lặp lại (loop-back) theo đường dẫn đến tài nguyên đích",
      },
      {
        idx: 3,
        isKey: false,
        title: "truy vấn thông tin từ máy chủ sử dụng một địa chỉ web",
      },
    ],
    title: "Phương thức TRACE được dùng để?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 19,
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Control Gateway Interface",
      },
      {
        idx: 1,
        title: "Common Gateway Interface",
        isKey: true,
      },
      {
        title: "Common Gateway Interaction",
        isKey: false,
        idx: 2,
      },
      {
        title: "Control Gateway Interaction",
        isKey: false,
        idx: 3,
      },
    ],
    title: "CGI là viết tắt của",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title:
          "bộ phần mềm chạy trên máy khách có chức năng tạo yêu cầu, gửi yêu cầu và hiển thị phản hồi/kết quả trả về từ máy chủ web",
        idx: 0,
        isKey: true,
      },
      {
        title:
          "bộ phần cứng chạy trên máy chủ có chức năng tạo yêu cầu, gửi yêu cầu và hiển thị phản hồi/kết quả trả về từ máy chủ web",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "bộ phần mềm chạy trên máy chủ có chức năng tạo yêu cầu, gửi yêu cầu và hiển thị phản hồi/kết quả trả về từ máy chủ web",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "bộ phần cứng chạy trên máy khách có chức năng tạo yêu cầu, gửi yêu cầu và hiển thị phản hồi/kết quả trả về từ máy chủ web",
      },
    ],
    idx: 20,

    title: "Trình duyệt web (Web browser) là?",
  },
  {
    idx: 21,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "GET",
      },
      {
        title: "HEAD",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "TRACE",
      },
      {
        title: "POST",
        idx: 3,
        isKey: true,
      },
    ],

    title:
      "3 phương thức yêu cầu được sử dụng phổ biến hơn cả trong trình duyệt web?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 22,
    answers: [
      {
        idx: 0,
        title: "(1)yêu cầu/(2) đáp ứng",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "1)đáp ứng/(2) yêu cầu",
      },
      {
        idx: 2,
        title: "(1)thỉnh cầu/(2) đáp ứng",
        isKey: false,
      },
      {
        title: "(1)đáp ứng/(2) thỉnh cầu",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Máy chủ web tiếp nhận (1)... từ trình duyệt web, xử lý (1)... và trả về (2)...",
  },
  {
    answers: [
      {
        title:
          "truy nhập hệ thống file cục bộ, đọc nội dung file và gửi kết quả cho trình duyệt.",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "chuyển các script cho bộ xử lý script",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "chuyển các script cho bộ xử lý script và gửi kết quả cho trình duyệt",
      },
      {
        title:
          "truy nhập hệ thống file đám mây, đọc nội dung file và gửi kết quả cho trình duyệt.",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Nếu trình duyệt web yêu cầu truy nhập các file tĩnh, máy chủ web sẽ?",
    idx: 23,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title: "người quản trị web",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "bộ xử lý script",
        isKey: true,
      },
      {
        idx: 2,
        title: "máy khách",
        isKey: false,
      },
      {
        isKey: false,
        title: "cơ sở dữ liệu",
        idx: 3,
      },
    ],
    title:
      "Nếu trình duyệt web yêu cầu truy nhập các file script, máy chủ web chuyển các script cho?",
    idx: 24,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "Mã trạng thái đáp ứng 403 của máy chủ web tương đương với lỗi...",
    idx: 25,
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "cấm truy nhập",
      },
      {
        idx: 1,
        title: "không tìm thấy file/dữ liệu",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "xử lý script trên máy chủ",
      },
      {
        isKey: false,
        idx: 3,
        title: "máy chủ không khả dụng",
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "mã truy cập thành công",
      },
      {
        title: "mã thông tin",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "mã chuyển hướng",
        idx: 2,
      },
      {
        title: "mã thông báo lỗi trong yêu cầu truy cập",
        idx: 3,
        isKey: false,
      },
      {
        title: "mã do lỗi server",
        idx: 4,
        isKey: false,
      },
    ],
    idx: 26,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Mã trạng thái đáp ứng 2xx của máy chủ web tương đương với",
  },
  {
    title: "Mã trạng thái đáp ứng 3xx của máy chủ web tương đương với",
    idx: 27,
    answers: [
      {
        isKey: false,
        title: "Mã truy cập thành công",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Mã chuyển hướng",
      },
      {
        title: "Mã thông báo lỗi trong yêu cầu truy cập",
        isKey: false,
        idx: 2,
      },
      {
        title: "Mã do lỗi server",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 28,
    answers: [
      {
        idx: 0,
        title: "Mozilla Apache web server",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Microsoft Internet Information Services (IIS)",
      },
      {
        isKey: false,
        idx: 2,
        title: "nginx (NGINX, Inc)",
      },
      {
        title: "Snort web server",
        isKey: true,
        idx: 3,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
    title: "Đâu không phải máy chủ web?",
  },
  {
    title: "URL là viết tắt của",

    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Uniform Resource Location",
      },
      {
        isKey: false,
        idx: 1,
        title: "Unique Resource Locator",
      },
      {
        idx: 2,
        isKey: false,
        title: "Universe Resource Locator",
      },
      {
        isKey: true,
        title: "Uniform Resource Locator",
        idx: 3,
      },
    ],
    idx: 29,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "một chuỗi ký tự cho phép đáp ứng đến một tài nguyên",
      },
      {
        isKey: false,
        title: "một chuỗi ký tự dùng để yêu cầu một địa chỉ web hoặc một tên",
        idx: 1,
      },
      {
        title: "một chuỗi ký tự dùng để nhận dạng một địa chỉ web hoặc một tên",
        idx: 2,
        isKey: false,
      },
      {
        title: "một chuỗi ký tự cho phép tham chiếu đến một tài nguyên",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 30,
    title: "URL là",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Uniform Resource Identation",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Uniform Resource Identifier",
      },
      {
        idx: 2,
        isKey: false,
        title: "Uniform Resource Intensifier",
      },
      {
        isKey: false,
        idx: 3,
        title: "Uniform Resource Identified",
      },
    ],

    idx: 31,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "URI là viết tắt của",
  },
  {
    title: "URI là",
    answers: [
      {
        title: "một chuỗi ký tự cho phép tham chiếu đến một tài nguyên",
        idx: 0,
        isKey: false,
      },
      {
        title: "một chuỗi ký tự dùng để nhận dạng một địa chỉ web hoặc một tên",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "một chuỗi ký tự dùng để yêu cầu một địa chỉ web hoặc một tên",
      },
      {
        title: "một chuỗi ký tự cho phép đáp ứng đến một tài nguyên",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 32,
  },
  {
    idx: 33,
    title: "URN (Uniform Resource Name) là",

    answers: [
      {
        title: "một chuỗi ký tự cho phép tham chiếu đến một tài nguyên",
        isKey: false,
        idx: 0,
      },
      {
        title: "một chuỗi ký tự dùng để nhận dạng tên của tài nguyên",
        isKey: true,
        idx: 1,
      },
      {
        title: "một chuỗi ký tự dùng để yêu cầu một địa chỉ web hoặc một tên",
        idx: 2,
        isKey: false,
      },
      {
        title: "một chuỗi ký tự dùng để yêu cầu tên của tài nguyên",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "một kỹ thuật cho phép tạo ra máy chủ web có trạng thái (stateful) vận hành trên giao thức HTTP không trạng thái (stateless)",
      },
      {
        idx: 1,
        title:
          "một kỹ thuật cho phép tạo ra ứng dụng web có trạng thái (stateful) vận hành trên giao thức HTTP không trạng thái (stateless)",
        isKey: true,
      },
      {
        title:
          "một kỹ thuật cho phép tạo ra máy chủ web không trạng thái (stateless) vận hành trên giao thức HTTP có trạng thái (stateful)",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "một kỹ thuật cho phép tạo ra ứng dụng web không trạng thái (stateless) vận hành trên giao thức HTTP có trạng thái (stateful)",
        isKey: false,
        idx: 3,
      },
    ],

    title: "Web session là?",
    idx: 34,
  },
  {
    title:
      "Máy chủ web tạo ra và lưu một ... cho mỗi ... theo yêu cầu của máy khách",
    idx: 35,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "trường dữ liệu (data field)/phiên (Session)",
      },
      {
        title: "chuỗi định danh (ID)/phiên (Session)",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "phiên (Session)/chuỗi định danh (ID)",
      },
      {
        isKey: false,
        idx: 3,
        title: "phiên (Session)/ trường dữ liệu (data field)",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 36,
    answers: [
      {
        title: "lưu trữ/đáp ứng",
        idx: 0,
        isKey: false,
      },
      {
        title: "nhận dạng/đáp ứng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "lưu trữ/xâu chuỗi",
      },
      {
        idx: 3,
        title: "nhận dạng/xâu chuỗi",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",

    title:
      "Phiên cho phép máy chủ web ... người dùng và ... các yêu cầu HTTP của mỗi người dùng",
  },
  {
    answers: [
      {
        title: "cấu hình cơ sở dữ liệu",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "cấu hình trình duyệt web",
      },
      {
        isKey: true,
        title: "cấu hình máy chủ web",
        idx: 2,
      },
      {
        isKey: false,
        title: "cấu hình phương thức GET",
        idx: 3,
      },
    ],
    title: "Thời gian hoạt động của mỗi phiên tùy thuộc vào",

    idx: 37,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "một mẩu thông tin do website gửi xuống và được lưu trên trình duyệt khi người dùng đăng nhập website",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "một mẩu thông tin do website gửi xuống và được lưu trên cơ sở dữ liệu khi người dùng thăm website",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "một mẩu thông tin do website gửi xuống và được lưu trên máy chủ khi người dùng thăm website",
      },
      {
        title:
          "một mẩu thông tin do website gửi xuống và được lưu trên trình duyệt khi người dùng thăm website",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 38,

    title: "Cookie là?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Lưu thông tin làm việc",
      },
      {
        title: "Đăng nhập cơ sở dữ liệu",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Duy trì trạng thái phiên làm việc",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Điều hành phiên",
      },
    ],
    title: "Cookie thường được dùng để",

    idx: 39,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title:
          "lưu thông tin phiên làm việc và duy trì trạng thái phiên làm việc.",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "nạp, dịch và thực hiện từng dòng lệnh script trên máy chủ web",
        isKey: true,
      },
      {
        title:
          "nạp, dịch và thực hiện từng dòng lệnh script trên trình duyệt web",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "lưu thông tin người dùng và duy trì trạng thái phiên làm việc",
      },
    ],
    idx: 40,
    title:
      "Các bộ diễn dịch và thực hiện các server script (script engine) có nhiệm vụ",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title:
      "Do hầu hết các mô tơ script làm việc theo chế độ ... nên tốc độ thường chậm so với các ứng dụng đã được biên dịch ra mã thực hiện.",

    practiceCode: "an-toan-web-va-csdl-01",
    idx: 41,
    answers: [
      {
        title: "kiểm soát (control)",
        idx: 0,
        isKey: false,
      },
      {
        title: "background (ngầm)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "thông dịch (interpretation)",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "các đoạn mã được nhúng vào các trang web HTML để thực hiện các công việc xử lý dữ liệu và trả về kết quả để tạo nội dung cho trang web",
        isKey: true,
      },
      {
        title:
          "ác đoạn mã được nhúng vào các trình duyệt để thực hiện các công việc xử lý dữ liệu và trả về kết quả để tạo nội dung cho trang web",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "các đoạn mã được nhúng vào các trang web HTML để thực hiện các công việc xử lý dữ liệu và trả về kết quả để tạo nội dung cho máy chủ",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "các đoạn mã được nhúng vào các trình duyệt để thực hiện các công việc xử lý dữ liệu và trả về kết quả để tạo nội dung cho máy chủ",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Các server script là?",
    idx: 42,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "máy chủ cơ sở dữ liệu/máy chủ web",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "mô tơ script/máy chủ web",
      },
      {
        title: "mô tơ script/máy khách",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "máy chủ cơ sở dữ liệu/máy khách",
      },
    ],
    idx: 43,
    title:
      "Các server script được máy chủ web chuyển cho các ... để dịch và thực hiện. Kết quả thực hiện script được chuyển lại cho ...",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "quản trị các cơ sở dữ liệu chứa dữ liệu tạo các trình duyệt web",
      },
      {
        isKey: false,
        idx: 1,
        title: "quản trị các cơ sở dữ liệu chứa dữ liệu tạo các máy chủ web",
      },
      {
        isKey: false,
        title: "quản trị các cơ sở dữ liệu chứa dữ liệu tạo các trang web tĩnh",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "quản trị các cơ sở dữ liệu chứa dữ liệu tạo các trang web động",
      },
    ],
    idx: 44,

    practiceCode: "an-toan-web-va-csdl-01",
    title: "Máy chủ cơ sở dữ liệu thường được sử dụng để?",
  },
  {
    idx: 45,
    title: "Một trang web động là",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title:
          "trang web mà nội dung của nó chỉ được tạo ra khi có yêu cầu từ người dùng thông qua máy khách và máy chủ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "trang web chỉ thay đổi nội dung khi có tác động chỉnh sửa của người lập trình.",
      },
      {
        title:
          "trang web mà nội dung của nó chỉ được tạo ra khi có yêu cầu từ người dùng thông qua máy khách",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "trang web chỉ thay đổi nội dung khi có tác động chỉnh sửa của người dùng.",
      },
    ],
  },
  {
    title:
      "Hạ tầng mạng gồm tất cả các thiết bị ... tạo thành hệ thống truyền thông kết nối máy chủ web với máy khách web",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "phần mềm",
      },
      {
        idx: 1,
        title: "mạng",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "phần cứng",
      },
      {
        idx: 3,
        title: "lưu lượng",
        isKey: false,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
    idx: 46,
  },
  {
    answers: [
      {
        isKey: false,
        title: "4",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "5",
      },
      {
        idx: 2,
        title: "6",
        isKey: true,
      },
      {
        isKey: false,
        title: "8",
        idx: 3,
      },
    ],
    idx: 47,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Kiến trúc chuẩn của hệ thống ứng dụng web gồm mấy thành phần?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "lớp trình diễn (Presentation Layer – PL/UI), lớp lô gic nghiệp vụ (Business Logic Layer – BLL), lớp truy nhập dữ liệu (Data Access Layer - DAL)",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "lớp trình diễn (Presentation Layer – PL/UI), lớp lô gic nghiệp vụ (Business Logic Layer – BLL), lớp liên kết dữ liệu (Data Association Layer - DAL)",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "lớp bản vá (Patch Layer – PL/UI), lớp lô gic nghiệp vụ (Business Logic Layer – BLL), lớp truy nhập dữ liệu (Data Access Layer - DAL)",
      },
    ],

    idx: 48,
    title: "Kiến trúc logic 3 lớp của ứng dụng web gồm:",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 49,
    title:
      "Lớp trình diễn bao gồm các điều khiển (Controls), mẫu (Forms), hình ảnh (Images) và dữ liệu đa phương tiện (Media) có trách nhiệm",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "biểu diễn dữ liệu đến người dùng",
      },
      {
        isKey: false,
        idx: 1,
        title: "xử lý dữ liệu theo các quy định có sẵn",
      },
      {
        isKey: false,
        idx: 2,
        title: "truy vấn và xử lý dữ liệu từ kho dữ liệu (Data)",
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 50,
    title:
      "Lớp lô gic nghiệp vụ có thể bao gồm các quy định về an ninh (Security), các quy trình xử lý (Rules), các khâu tính toán (Calculation) và dữ liệu nghiệp vụ (BLL Data), có trách nhiệm",

    answers: [
      {
        title: "biểu diễn dữ liệu đến người dùng",
        idx: 0,
        isKey: false,
      },
      {
        title: "xử lý dữ liệu theo các quy định có sẵn",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "truy vấn và xử lý dữ liệu từ kho dữ liệu (Data)",
        idx: 2,
      },
    ],
  },
  {
    answers: [
      {
        title: "biểu diễn dữ liệu đến người dùng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "xử lý dữ liệu theo các quy định có sẵn",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "truy vấn và xử lý dữ liệu từ kho dữ liệu (Data)",
      },
    ],
    idx: 51,
    title:
      "Lớp truy nhập dữ liệu gồm các giao diện lập trình cho dữ liệu (Data API) và các thủ tục lưu trữ (Stored Procedures) có trách nhiệm",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title: "đọc xuống - ghi lên",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "phòng vệ nhiều lớp theo chiều sâu (Defense in depth)",
        isKey: true,
      },
      {
        title: "đọc lên - ghi xuống",
        idx: 2,
        isKey: false,
      },
      {
        title: "phòng vệ nhiều lớp theo chiều sâu (Detect in depth)",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 52,
    title: "Nguyên tắc bảo mật ứng dụng web là?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Lớp bảo mật mạng (Network), Lớp bảo mật máy chủ (Host) và Lớp bảo mật ứng dụng (Application)",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Lớp bảo mật máy chủ (Host), Lớp bảo mật mạng (Network) và Lớp bảo mật ứng dụng (Application)",
      },
      {
        title:
          "Lớp bảo mật ứng dụng (Application), Lớp bảo mật máy chủ (Host) và Lớp bảo mật mạng (Network)",
        isKey: false,
        idx: 2,
      },
    ],
    title: "3 lớp bảo mật ứng dụng web từ ngoài vào trong là?",
    idx: 53,

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title:
          "cung cấp hạ tầng mạng an toàn cho giao tiếp giữa máy chủ và máy khách",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "an toàn cho các thành phần nền tảng trong hệ thống",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "an toàn cho người dùng và dữ liệu của ngừời dùng lưu trong hệ thống ứng dụng web",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 54,
    title: "ớp bảo mật mạng (Network) đảm bảo...",
  },
  {
    idx: 55,
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title:
          "an toàn cho người dùng và dữ liệu của ngừời dùng lưu trong hệ thống ứng dụng web",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "an toàn cho các thành phần nền tảng trong hệ thống",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "cung cấp hạ tầng mạng an toàn cho giao tiếp giữa máy chủ và máy khách",
        isKey: false,
      },
    ],

    title: "Lớp bảo mật máy chủ có nhiệm vụ đảm bảo...",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title:
          "an toàn cho người dùng và dữ liệu của ngừời dùng lưu trong hệ thống ứng dụng web",
        idx: 0,
        isKey: true,
      },
      {
        title: "an toàn cho các thành phần nền tảng trong hệ thống",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "cung cấp hạ tầng mạng an toàn cho giao tiếp giữa máy chủ và máy khách",
      },
    ],
    title: "Lớp bảo mật ứng dụng có trách nhiệm đảm bảo...",

    idx: 56,
  },
  {
    title: "Lớp bảo mật máy chủ gồm",

    answers: [
      {
        idx: 0,
        title: "Bảo mật hệ điều hành",
        isKey: true,
      },
      {
        isKey: true,
        title: "Bảo mật cơ sở dữ liệu",
        idx: 1,
      },
      {
        title: "Quản lý phiên làm việc",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Bảo mật các phần mềm, dịch vụ trong hệ thống",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 57,
  },
  {
    title: "Chèn mã (Injection - A1) là",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "dạng lỗ hổng bảo mật cho phép tin tặc chèn mã vào dữ liệu gửi đến và được thực hiện trên hệ thống nạn nhân",
      },
      {
        isKey: false,
        title:
          "dạng tấn công vào trình duyệt người dùng. Kẻ tấn công chèn mã script (thường là mã javascript) vào các trang web có lỗi. Khi người dùng mở các trang này thì mã script của kẻ tấn công được thực hiện, giúp đánh cắp các thông tin lưu trong trình duyệt người dùng.",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "dạng lỗ hổng thiết lập quyền truy nhập vào các trang không đúng chuẩn, cho phép kẻ tấn công có thể truy nhập trái phép vào các trang, các thư mục, hoặc tải và thực hiện các file mã độc trên hệ thống.",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "dạng tấn công người dùng web, lợi dụng cơ chế tự động đăng nhập của một số website. Kẻ tấn công lừa người dùng thực hiện các đoạn mã độc, nhúng trong các trang web bình thường trong ngữ cảnh người dùng đang ở trong phiên làm việc với website.",
        isKey: false,
      },
    ],
    idx: 58,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "xác thực (authentication) và toàn vẹn (integrity)",
      },
      {
        idx: 1,
        title: "bí mật (confidential) và xác thực (authentication)",
        isKey: false,
      },
      {
        title: "xác thực (authentication) và trao quyền (authorization)",
        isKey: true,
        idx: 2,
      },
    ],
    title:
      "Xác thực và quản phiên yếu (Broken Authentication and Session Management - A2) hướng tới khâu nào trong các ứng dụng web?",
    idx: 59,
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "dạng tấn công người dùng web, lợi dụng cơ chế tự động đăng nhập của một số website. Kẻ tấn công lừa người dùng thực hiện các đoạn mã độc, nhúng trong các trang web bình thường trong ngữ cảnh người dùng đang ở trong phiên làm việc với website.",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "dạng lỗ hổng bảo mật cho phép tin tặc chèn mã vào dữ liệu gửi đến và được thực hiện trên hệ thống nạn nhân",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "dạng lỗ hổng thiết lập quyền truy nhập vào các trang không đúng chuẩn, cho phép kẻ tấn công có thể truy nhập trái phép vào các trang, các thư mục, hoặc tải và thực hiện các file mã độc trên hệ thống",
      },
      {
        idx: 3,
        title:
          "dạng tấn công vào trình duyệt người dùng. Kẻ tấn công chèn mã script (thường là mã javascript) vào các trang web có lỗi. Khi người dùng mở các trang này thì mã script của kẻ tấn công được thực hiện, giúp đánh cắp các thông tin lưu trong trình duyệt người dùng.",
        isKey: true,
      },
    ],
    title: "Cross-Site Scripting (XSS - A3) là",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 60,
  },
  {
    title:
      "Việc tham chiếu các đối tượng, các files cần được thực hiện ... và các thông tin nhạy cảm cần được ...",
    idx: 61,
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        idx: 0,
        title: "gián tiếp/che dấu",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "gián tiếp/công khai",
      },
      {
        idx: 2,
        title: "trực tiếp/che dấu",
        isKey: false,
      },
      {
        isKey: false,
        title: "trực tiếp/công khai",
        idx: 3,
      },
    ],
  },
  {
    title: "Lỗi cấu hình an ninh (Security Misconfiguration - A5) là",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        title:
          "dạng lỗ hổng bảo mật cho phép tin tặc chèn mã vào dữ liệu gửi đến và được thực hiện trên hệ thống nạn nhân",
        isKey: false,
      },
      {
        title:
          "dạng tấn công vào trình duyệt người dùng. Kẻ tấn công chèn mã script (thường là mã javascript) vào các trang web có lỗi. Khi người dùng mở các trang này thì mã script của kẻ tấn công được thực hiện, giúp đánh cắp các thông tin lưu trong trình duyệt người dùng.",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "dạng lỗ hổng thiết lập quyền truy nhập vào các trang không đúng chuẩn, cho phép kẻ tấn công có thể truy nhập trái phép vào các trang, các thư mục, hoặc tải và thực hiện các file mã độc trên hệ thống.",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "dạng tấn công người dùng web, lợi dụng cơ chế tự động đăng nhập của một số website. Kẻ tấn công lừa người dùng thực hiện các đoạn mã độc, nhúng trong các trang web bình thường trong ngữ cảnh người dùng đang ở trong phiên làm việc với website.",
      },
    ],
    idx: 62,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Injection (Chèn mã)",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Insecure Direct Object References (Tham chiếu các đối tượng trực tiếp không an toàn)",
      },
      {
        idx: 2,
        isKey: true,
        title: "Sensitive Data Exposure (Rò rỉ dữ liệu nhạy cảm)",
      },
      {
        isKey: false,
        title: "Security Misconfiguration (Lỗi cấu hình an ninh)",
        idx: 3,
      },
    ],
    title: "A6 trong OWASP top 10 2013 và 2017 là nguy cơ nào?",
    idx: 63,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "A9 trong OWASP top 10 2013 và 2017 là nguy cơ nào?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cross-Site Request Forgery (CSRF) (Lỗi CSRF)",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Missing Function Level Access Control (Thiếu kiểm soát truy nhập ở mức tính năng)",
      },
      {
        title:
          "Using Components with Known Vulnerabilities (Sử dụng các thành phần chứa lỗ hổng đã biết)",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Unvalidated Redirects and Forwards (Tái định hướng và chuyển tiếp không được kiểm tra)",
        idx: 3,
      },
    ],
    idx: 64,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 65,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "A4 trong OWASP top 10 2013 là nguy cơ nào?",
    answers: [
      {
        title:
          "Insecure Direct Object References (Tham chiếu các đối tượng trực tiếp không an toàn)",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Unvalidated Redirects and Forwards (Tái định hướng và chuyển tiếp không được kiểm tra)",
      },
      {
        title: "Sensitive Data Exposure (Rò rỉ dữ liệu nhạy cảm)",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Missing Function Level Access Control (Thiếu kiểm soát truy nhập ở mức tính năng)",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title: "A4 trong OWASP top 10 2017 là nguy cơ nào?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Insecure Direct Object References (Tham chiếu các đối tượng trực tiếp không an toàn)",
      },
      {
        title: "Insufficient Attack Protection (Thiếu các cơ chế bảo vệ)",
        idx: 1,
        isKey: false,
      },
      {
        title: "Broken Access Control (Điều khiển truy nhập yếu)",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Underprotected APIs (Các API không được bảo vệ)",
        idx: 3,
      },
    ],

    idx: 66,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 67,
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        idx: 0,
        title:
          "Missing Function Level Access Control (Thiếu kiểm soát truy nhập ở mức tính năng)",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Unvalidated Redirects and Forwards (Tái định hướng và chuyển tiếp không được kiểm tra)",
      },
      {
        idx: 2,
        title: "Insufficient Attack Protection (Thiếu các cơ chế bảo vệ)",
        isKey: false,
      },
      {
        isKey: true,
        title: "Underprotected APIs (Các API không được bảo vệ)",
        idx: 3,
      },
    ],
    title: "A10 trong OWASP top 10 2017 là nguy cơ nào?",
  },
  {
    answers: [
      {
        title: "Underprotected APIs (Các API không được bảo vệ)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Unvalidated Redirects and Forwards (Tái định hướng và chuyển tiếp không được kiểm tra)",
      },
      {
        title:
          "Missing Function Level Access Control (Thiếu kiểm soát truy nhập ở mức tính năng)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Insufficient Attack Protection (Thiếu các cơ chế bảo vệ)",
      },
    ],
    title: "A10 trong OWASP top 10 2013 là nguy cơ nào?",
    idx: 68,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "A7 trong OWASP top 10 2013 là nguy cơ nào?",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Insufficient Attack Protection (Thiếu các cơ chế bảo vệ)",
      },
      {
        idx: 1,
        isKey: false,
        title: "Broken Access Control (Điều khiển truy nhập yếu)",
      },
      {
        title:
          "Missing Function Level Access Control (Thiếu kiểm soát truy nhập ở mức tính năng)",
        isKey: true,
        idx: 2,
      },
      {
        title: "Underprotected APIs (Các API không được bảo vệ)",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 69,
  },
  {
    idx: 70,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "A7 trong OWASP top 10 2017 là nguy cơ nào?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Insufficient Attack Protection (Thiếu các cơ chế bảo vệ)",
      },
      {
        title: "Sensitive Data Exposure (Rò rỉ dữ liệu nhạy cảm)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Missing Function Level Access Control (Thiếu kiểm soát truy nhập ở mức tính năng)",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Insecure Direct Object References (Tham chiếu các đối tượng trực tiếp không an toàn)",
        idx: 3,
      },
    ],
  },
  {
    idx: 71,
    title: "CSRF (Cross-Site Request Forgery - A8) là",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        title:
          "dạng tấn công vào trình duyệt người dùng. Kẻ tấn công chèn mã script (thường là mã javascript) vào các trang web có lỗi XSS. Khi người dùng mở các trang này thì mã script của kẻ tấn công được thực hiện, giúp đánh cắp các thông tin lưu trong trình duyệt người dùng.",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "dạng lỗ hổng bảo mật cho phép tin tặc chèn mã vào dữ liệu gửi đến và được thực hiện trên hệ thống nạn nhân",
      },
      {
        idx: 2,
        title:
          "dạng lỗ hổng thiết lập quyền truy nhập vào các trang không đúng chuẩn, cho phép kẻ tấn công có thể truy nhập trái phép vào các trang, các thư mục, hoặc tải và thực hiện các file mã độc trên hệ thống.",
        isKey: false,
      },
      {
        title:
          "dạng tấn công người dùng web, lợi dụng cơ chế tự động đăng nhập của một số website. Kẻ tấn công lừa người dùng thực hiện các đoạn mã độc, nhúng trong các trang web bình thường trong ngữ cảnh người dùng đang ở trong phiên làm việc với website.",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    idx: 72,

    title: "Các phương pháp tiếp cận bảo mật ứng dụng web bao gồm",
    answers: [
      {
        isKey: true,
        title: "Kiểm tra dữ liệu đầu vào",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Giảm thiểu các giao diện có thể bị tấn công",
      },
      {
        idx: 2,
        isKey: true,
        title: "Phòng vệ theo chiều sâu",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Với ứng dụng web, việc kiểm tra dữ liệu đầu vào cần được thực hiện trên ...",

    idx: 73,
    answers: [
      {
        title: "máy khách",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "máy chủ",
        isKey: false,
      },
      {
        idx: 2,
        title: "cả 2 đáp án trên",
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      'Nguyên tắc chung của phương pháp "giảm thiểu các giao diện có thể bị tấn công" là sử dụng các biện pháp ... để hạn chế đến tối thiểu việc người dùng truy nhập trực tiếp các ứng dụng, dịch vụ và hệ thống, nếu không thực sự cần thiết',
    idx: 74,
    answers: [
      {
        title: "lưu trữ",
        isKey: false,
        idx: 0,
      },
      {
        title: "mã hóa",
        idx: 1,
        isKey: false,
      },
      {
        title: "kiểm soát truy nhập",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "tham chiếu",
      },
    ],
  },
  {
    idx: 75,
    answers: [
      {
        idx: 0,
        title: "Shell command",
        isKey: false,
      },
      {
        isKey: true,
        title: "HTML",
        idx: 1,
      },
      {
        idx: 2,
        title: "SQL",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "LDAP",
      },
    ],
    title: "XSS có thể được xem là một dạng của chèn mã ...",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "cơ sở dữ liệu",
        isKey: false,
      },
      {
        isKey: true,
        title: "URI",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "nội dung trang web",
      },
    ],
    idx: 76,
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Nhìn chung, mã tấn công HTML/XSS có thể được chèn vào mọi vị trí trong ...",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",

    idx: 77,
    title: "Tấn công XSS thường xuất hiện khi",
    answers: [
      {
        idx: 0,
        title: "trang web không có cookie",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "trang web cho phép người dùng nhập dữ liệu và sau đó hiển thị dữ liệu lên trang",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "người dùng quên mật khẩu",
      },
    ],
  },
  {
    idx: 78,
    answers: [
      {
        isKey: true,
        title: "Stored XSS (XSS lưu trữ)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Virtual XSS (XSS ảo)",
      },
      {
        isKey: true,
        title: "Reflect XSS (XSS phản chiếu)",
        idx: 2,
      },
      {
        idx: 3,
        title: "DOM-based/Local XSS (XSS dựa trên DOM hoặc cục bộ)",
        isKey: true,
      },
    ],
    title: "Có thể chia tấn công XSS thành 3 loại chính là?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title: "nội dung của trang web/trình duyệt web",
        idx: 0,
        isKey: false,
      },
      {
        title: "cơ sở dữ liệu của website/nội dung của trang web",
        idx: 1,
        isKey: false,
      },
      {
        title: "nội dung của trang web/cơ sở dữ liệu của website",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "trình duyệt web/nội dung của trang web",
      },
    ],
    title:
      "Mã Stored XSS thường được nhúng vào trong ... và được lưu trữ trong ...",

    practiceCode: "an-toan-web-va-csdl-01",
    idx: 79,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "các diễn đàn cho phép người dùng đăng các bài viết và gửi các phản hồi, các website thương mại điện tử cho phép ngƣời dùng thêm nhận xét (comment) về sản phẩm, hoặc các mạng xã hội, các ứng dụng nhắn tin cho phép gửi tin nhắn qua các trang web.",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "các máy tìm kiếm, hoặc các trang có tính năng tìm kiếm,trong đó mã XSS được nhập vào ô từ khóa tìm kiếm, hoặc vào chuỗi truy vấn trong địa chỉ URL và được thực hiện khi trình duyệt tải kết quả tìm kiếm.",
      },
      {
        title: "các trang web trên hệ thống file cục bộ của người dùng",
        idx: 2,
        isKey: false,
      },
    ],
    title: "Các website có nguy cơ cao bị tấn công Stored XSS là",
    idx: 80,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "máy chủ web/máy chủ web",
      },
      {
        isKey: false,
        title: "người dùng/máy chủ web",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "máy chủ web/người dùng",
      },
      {
        title: "người dùng/người dùng",
        isKey: true,
        idx: 3,
      },
    ],

    title:
      "Tấn công Reflected XSS thường xuất hiện khi dữ liệu do ... cung cấp được sử dụng bởi script trên máy chủ để tạo ra kết quả và hiển thị lại ngay cho ...",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 81,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "các diễn đàn cho phép người dùng đăng các bài viết và gửi các phản hồi, các website thương mại điện tử cho phép ngƣời dùng thêm nhận xét (comment) về sản phẩm, hoặc các mạng xã hội, các ứng dụng nhắn tin cho phép gửi tin nhắn qua các trang web.",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "các máy tìm kiếm, hoặc các trang có tính năng tìm kiếm,trong đó mã XSS được nhập vào ô từ khóa tìm kiếm, hoặc vào chuỗi truy vấn trong địa chỉ URL và được thực hiện khi trình duyệt tải kết quả tìm kiếm.",
      },
      {
        title: "các trang web trên hệ thống file cục bộ của người dùng.",
        isKey: false,
        idx: 2,
      },
    ],
    idx: 82,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Dạng tấn công Reflected XSS thường xuất hiện trên",
  },
  {
    title:
      "Mô hình DOM thể hiện tài liệu dưới dạng cấu trúc ..., trong đó mỗi thành phần (element) trong tài liệu HTML, XML được xem như một nút (node).",

    idx: 83,
    answers: [
      {
        idx: 0,
        title: "cây ngẫu nhiên",
        isKey: false,
      },
      {
        isKey: true,
        title: "cây phân cấp",
        idx: 1,
      },
      {
        title: "cây tuyến tính",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "cây phi tuyến tính",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "các máy tìm kiếm, hoặc các trang có tính năng tìm kiếm,trong đó mã XSS được nhập vào ô từ khóa tìm kiếm, hoặc vào chuỗi truy vấn trong địa chỉ URL và được thực hiện khi trình duyệt tải kết quả tìm kiếm.",
        idx: 0,
      },
      {
        title:
          'các mã script máy khách trong một trang web sử dụng các đối tượng, hoặc các thuộc tính của đối tượng của cây DOM, như "document.URL" và "document.location"',
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title:
          "sử dụng các trang web trên hệ thống file cục bộ của người dùng.",
        isKey: true,
      },
      {
        title:
          "các diễn đàn cho phép người dùng đăng các bài viết và gửi các phản hồi, các website thương mại điện tử cho phép ngƣời dùng thêm nhận xét (comment) về sản phẩm, hoặc các mạng xã hội, các ứng dụng nhắn tin cho phép gửi tin nhắn qua các trang web.",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Tấn công DOM-Based XSS liên quan đến",
    idx: 84,
  },
  {
    title:
      "Các bộ lọc XSS dữ liệu nhập (XSS filter) phải được thực hiện trên...do các bộ lọc dữ liệu được nhập trên...có thể bị vô hiệu hóa dễ dàng.",
    idx: 85,
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "máy khách/máy chủ",
        isKey: false,
        idx: 0,
      },
      {
        title: "máy chủ/máy khách",
        isKey: true,
        idx: 1,
      },
      {
        title: "máy chủ cơ sở dữ liệu/máy chủ web",
        idx: 2,
        isKey: false,
      },
      {
        title: "trình duyệt web/máy chủ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 86,
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "gây khó khăn cho người dùng nhập các đoạn văn bản hợp lệ có chứa mã HTML hoặc JavaScript",
      },
      {
        isKey: false,
        title: "không ngăn chặn tương đối hiệu quả tấn công XSS",
        idx: 1,
      },
      {
        title: "tốn bộ nhớ máy khách",
        idx: 2,
        isKey: false,
      },
    ],
    title: "Nhược điểm của phương pháp sử dụng bộ lọc XSS",

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        title:
          "sử dụng các bộ lọc tự tạo hoặc từ thư viện để lọc bỏ các thẻ HTML/CSS/script khỏi dữ liệu nhập từ nguời dùng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title:
          "cho phép vô hiệu hóa tấn công XSS bằng cách thay thế các ký tự riêng (Character Escaping) của HTML/script để chuyển các đoạn mã có thể thực hiện thành dữ liệu thông thường.",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "sử dụng các bộ lọc tự tạo hoặc từ thư viện để lọc bỏ các thẻ HTML/CSS/script khỏi dữ liệu nhập từ máy chủ web",
      },
      {
        title:
          "cho phép vô hiệu hóa tấn công XSS bằng cách thay thế các ký tự riêng (Character Escaping) của HTML/script để chuyển các đoạn mã không thể thực hiện thành dữ liệu thông thường.",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Thoát khỏi XSS (XSS escape) là kĩ thuật",

    idx: 87,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "Các kĩ thuật vượt qua các bộ lọc XSS",

    answers: [
      {
        title: "sử dụng XSS Cheat Sheet",
        isKey: true,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "tạo các đoạn mã script tinh xảo",
      },
      {
        title: "mạo danh người dùng",
        isKey: false,
        idx: 2,
      },
    ],
    idx: 88,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 89,
    title: "Các cách phòng chống CSRF",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: 'Sử dụng "chuỗi đồng bộ" cho mỗi thao tác quan trọng.',
      },
      {
        idx: 1,
        isKey: true,
        title: "Sử dụng chuỗi xác thực CAPTCHAR",
      },
      {
        title: "Sử dụng Viewstate (ASP.NET)",
        idx: 2,
        isKey: true,
      },
      {
        title: "Sử dụng thư viện chuẩn để phòng chống CSRF",
        isKey: true,
        idx: 3,
      },
      {
        title: "Sử dụng giao thức OTP/Challenge-Response",
        isKey: true,
        idx: 4,
      },
    ],
  },
  {
    title: "Các thư viện chuẩn để phòng chống CSRF?",
    practiceCode: "an-toan-web-va-csdl-01",

    idx: 90,
    answers: [
      {
        title: "HTTP CSRF Guard",
        isKey: false,
        idx: 0,
      },
      {
        title: "OWASP CSRF Guard",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "PHP CSRF Guard",
        isKey: true,
      },
      {
        isKey: true,
        idx: 3,
        title: ".Net CSRF Guard",
      },
    ],
  },
  {
    title:
      "Mức độ tấn công cao nhất mà SQL Injection có thể cho phép kẻ tấn công là?",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "vượt qua các khâu xác thực người dùng",
        isKey: false,
        idx: 0,
      },
      {
        title: "chiếm quyền điều khiển hệ thống máy chủ cơ sở dữ liệu",
        idx: 1,
        isKey: true,
      },
      {
        title: "chèn, sửa đổi, hoặc xóa dữ liệu",
        isKey: false,
        idx: 2,
      },
      {
        title: "đánh cắp các thông tin trong cơ sở dữ liệu",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 91,
  },
  {
    idx: 92,
    title:
      "Các nguyên nhân của lỗ hổng trong ứng dụng cho phép thực hiện tấn công chèn mã SQL",

    answers: [
      {
        isKey: true,
        title:
          "Dữ liệu đầu vào từ người dùng hoặc từ các nguồn khác không được kiểm tra hoặc kiểm tra không kỹ lưỡng",
        idx: 0,
      },
      {
        title:
          "Sử dụng các câu lệnh SQL tĩnh trong ứng dụng, trong đó có thao tác nối dữ liệu người dùng với mã lệnh SQL gốc",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Dữ liệu đầu ra từ người dùng hoặc từ các nguồn khác không được kiểm tra hoặc kiểm tra không kỹ lưỡn",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Sử dụng các câu lệnh SQL động trong ứng dụng, trong đó có thao tác nối dữ liệu người dùng với mã lệnh SQL gốc",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "vượt qua các khâu xác thực người dùng",
      },
      {
        isKey: true,
        title: "chèn, sửa đổi, hoặc xóa dữ liệu",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "đánh cắp các thông tin trong cơ sở dữ liệu",
      },
      {
        idx: 3,
        title: "chiếm quyền điều khiển hệ thống máy chủ cơ sở dữ liệu",
        isKey: false,
      },
    ],
    idx: 93,
    practiceCode: "an-toan-web-va-csdl-01",

    title:
      "Câu lệnh SQL Injection bên dưới thuộc mức độ tấn công nào  Galaxy S8';INSERT INTO tbl_administrators (username, password) VALUES ('attacker', 'abc12345');--",
  },
  {
    idx: 94,
    title:
      "Câu lệnh SQL Injection bên dưới thuộc mức độ tấn công nào  SELECT * FROM tbl_accounts WHERE username='aaaa' OR 1=1--' AND password='aaaa'",
    answers: [
      {
        title: "vượt qua các khâu xác thực người dùng",
        isKey: true,
        idx: 0,
      },
      {
        title: "chèn, sửa đổi, hoặc xóa dữ liệu",
        idx: 1,
        isKey: false,
      },
      {
        title: "đánh cắp các thông tin trong cơ sở dữ liệu",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "chiếm quyền điều khiển hệ thống máy chủ cơ sở dữ liệu",
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 95,
    answers: [
      {
        isKey: true,
        title:
          "Các biện pháp phòng chống dựa trên kiểm tra và lọc dữ liệu đầu vào",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Bảo vệ cookie của phiên",
      },
      {
        title:
          "Sử dụng thủ tục cơ sở dữ liệu (stored procedures) và cơ chế tham số hóa dữ liệu",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "Các biện pháp phòng chống dựa trên thiết lập quyền truy nhập người dùng CSDL",
        idx: 3,
        isKey: true,
      },
    ],

    title:
      "Các biện pháp, kỹ thuật có thể áp dụng để phòng chống SQL Injection?",
  },
  {
    answers: [
      {
        title: "Kiểm tra kích thước và định dạng dữ liệu đầu vào",
        idx: 0,
        isKey: true,
      },
      {
        title:
          "Kiểm tra tất cả các dữ liệu đầu vào, đặc biệt dữ liệu nhập từ người dùng và từ các nguồn không tin cậy",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Đưa tất cả các câu truy vấn (SELECT) và cập nhật, sửa, xóa dữ liệu (INSERT, UPDATE, DELETE) vào các thủ tục. Dữ liệu truyền vào thủ tục thông qua các tham số, giúp tách dữ liệu khỏi mã lệnh SQL, nhờ đó hạn ngăn chặn hiệu quả tấn công chèn mã SQL",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Tạo các bộ lọc để lọc bỏ các ký tự đặc biệt (như *, ‗, =, --) và các từ khóa của ngôn ngữ SQL (SELECT, INSERT, UPDATE, DELETE, DROP,....) mà kẻ tấn công có thể sử dụng",
      },
    ],

    idx: 96,
    title:
      "Đâu là biện pháp phòng chống SQL Injection dựa trên kiểm tra và lọc dữ liệu đầu vào?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 97,

    title:
      "Đâu là biện pháp phòng chống SQL Injection sử dụng thủ tục cơ sở dữ liệu (stored procedures) và cơ chế tham số hóa dữ liệu?",
    answers: [
      {
        isKey: false,
        title:
          "Không sử dụng người dùng có quyền quản trị hệ thống hoặc quản trị cơ sở dữ liệu làm người dùng truy nhập dữ liệu",
        idx: 0,
      },
      {
        title:
          "Đưa tất cả các câu truy vấn (SELECT) và cập nhật, sửa, xóa dữ liệu (INSERT, UPDATE, DELETE) vào các thủ tục. Dữ liệu truyền vào thủ tục thông qua các tham số, giúp tách dữ liệu khỏi mã lệnh SQL, nhờ đó hạn ngăn chặn hiệu quả tấn công chèn mã SQL",
        isKey: true,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Hạn chế thực hiện các câu lệnh SQL động trong thủ tục",
      },
      {
        isKey: true,
        title:
          "Sử dụng cơ chế tham số hóa dữ liệu hỗ trợ bởi nhiều ngôn ngữ lập trình web như ASP.NET, PHP và JSP",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        isKey: true,
        title:
          "Không sử dụng người dùng có quyền quản trị hệ thống hoặc quản trị cơ sở dữ liệu làm người dùng truy nhập dữ liệu.",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Kiểm tra kích thước và định dạng dữ liệu đầu vào",
      },
      {
        idx: 2,
        title:
          "Cấm hoặc vô hiệu hóa (disable) việc thực hiện các thủ tục hệ thống (các thủ tục cơ sở dữ liệu có sẵn) cho phép can thiệp vào hệ quản trị cơ sở dữ liệu và hệ điều hành nền",
        isKey: true,
      },
      {
        idx: 3,
        title:
          "Chia nhóm người dùng, chỉ cấp quyền vừa đủ để truy nhập các bảng biểu, thực hiện câu truy vấn và chạy các thủ tục.",
        isKey: true,
      },
    ],

    title:
      "Đâu là biện pháp phòng chống SQL Injection dựa trên thiết lập quyền truy nhập ngƣời dùng cơ sở dữ liệu?",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 98,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "toàn vẹn thông tin người dùng  (User integrity)",
      },
      {
        title: "xác thực thông tin định danh người dùng (User authentication)",
        isKey: true,
        idx: 1,
      },
      {
        isKey: true,
        title: "trao quyền cho người dùng (User authorization)",
        idx: 2,
      },
      {
        title: "bí mật người dùng (User confidental)",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Tấn công vào các cơ chế xác thực (Authentication attacks) là các loại tấn công vào khâu",
    idx: 99,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Các dạng tấn công vào cơ chế xác thực?",
    answers: [
      {
        title: "phát lại chuỗi định danh phiên",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "vét cạn",
        isKey: true,
      },
      {
        idx: 2,
        isKey: true,
        title: "nghe lén",
      },
      {
        isKey: true,
        idx: 3,
        title: "khởi tạo lại mật khẩu",
      },
      {
        isKey: true,
        idx: 4,
        title: "XSS/SQL Injection",
      },
    ],

    idx: 100,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "WLAN",
      },
      {
        idx: 1,
        title: "LAN",
        isKey: false,
      },
      {
        isKey: false,
        title: "WAN",
        idx: 2,
      },
    ],
    idx: 101,

    title:
      "Mạng nào dễ bị nghe lén hơn do môi trường truyền tín hiệu qua không khí?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        isKey: true,
        title: "Bảo vệ cookie của phiên",
        idx: 0,
      },
      {
        idx: 1,
        title: "Sử dụng các cơ chế xác thực an toàn",
        isKey: true,
      },
      {
        idx: 2,
        title: "Yêu cầu người dùng tham gia và làm phiền người dùng",
        isKey: true,
      },
      {
        idx: 3,
        title: "Sử dụng ngưỡng",
        isKey: true,
      },
      {
        isKey: true,
        title: "Phòng chống phishing và bảo vệ mật khẩu",
        idx: 4,
      },
    ],
    title:
      "Các biện pháp phòng chống tấn công vào các cơ chế xác thực bao gồm:",

    idx: 102,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 103,
    answers: [
      {
        isKey: true,
        title: "Hạn chế việc chuyển cookie qua kênh không mã hóa",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Xác định rõ thời gian hết hạn của cookie, đồng thời hạn chế các cookie tồn tại lâu dài",
      },
      {
        isKey: true,
        idx: 2,
        title:
          'Sử dụng tính năng "Remember Me", "Remember Password" một cách hợp lý',
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Với các tính năng quan trọng, luôn yêu cầu người dùng phải xác thực lại",
      },
      {
        isKey: true,
        idx: 4,
        title:
          "Với các cookie lưu thông tin định danh, cần được mã hóa bằng các hàm băm có khóa (HMAC)",
      },
    ],
    title: "Các biện pháp bảo vệ cookie cụ thể bao gồm:",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "Sử dụng mật khẩu dưới dạng mã hóa, chẳng hạn dưới dạng băm",
        idx: 0,
        isKey: true,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Nên sử dụng các kênh an toàn như SSL/TLS để truyền thông tin xác thực",
      },
      {
        isKey: false,
        idx: 2,
        title:
          'Sử dụng tính năng "Remember Me", "Remember Password" một cách hợp lý',
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Sử dụng mật khẩu 1 lần (OTP), hoặc giao thức xác thực thách thức – trả lời (Challenge-Response)",
      },
      {
        title: "Sử dụng giao thức OAuth, OpenID",
        idx: 4,
        isKey: true,
      },
    ],
    title:
      "Các cơ chế xác thực an toàn có thể áp dụng với các ứng dụng web bao gồm",

    idx: 104,
  },
  {
    title:
      "Yêu cầu người dùng tham gia là việc thông báo cho...về các sự kiện quan trọng, các hành động nhạy cảm có liên quan đến...",
    idx: 105,
    answers: [
      {
        title: "máy chủ/tài khoản người dùng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "người dùng/tài khoản của họ",
      },
      {
        idx: 2,
        title: "máy chủ/người dùng",
        isKey: false,
      },
      {
        title: "máy khách/máy chủ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title:
      "Làm phiền người dùng là biện pháp xác thực bổ sung, nhằm đảm bảo ... thực sự được tải từ ... và thông tin được nhập từ ... thực sự, không phải là hệ thống xử lý tự động hay robot.",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "trình duyệt web/máy khách/người dùng",
      },
      {
        isKey: false,
        idx: 1,
        title: "trình duyệt web/người dùng/máy chủ",
      },
      {
        title: "trang web/máy chủ/người dùng",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "cơ sở dữ liệu/máy chủ/người dùng",
        isKey: false,
      },
    ],
    idx: 106,

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Sử dụng ngưỡng (Threshold) là biện pháp hiệu quả để ngăn chặn việc sử dụng quá mức ... hoặc ... các nỗ lực tấn công",
    answers: [
      {
        idx: 0,
        title: "luồng/cảnh báo",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "tài nguyên/cảnh báo",
      },
      {
        title: "luồng/ngăn chặn",
        isKey: false,
        idx: 2,
      },
      {
        title: "tài nguyên/ngăn chặn",
        isKey: true,
        idx: 3,
      },
    ],

    idx: 107,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        isKey: true,
        idx: 0,
        title: "logic xử lý/kỹ thuật",
      },
      {
        title: "logic/máy chủ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "cơ sở dữ liệu/kỹ thuật",
      },
      {
        isKey: false,
        idx: 3,
        title: "máy chủ/thiết kế",
      },
    ],
    title:
      "Tấn công lợi dụng các khiếm khuyết thiết kế là dạng tấn công nhằm vào ... của website và thường không dựa vào các ... đã biết trước",
    idx: 108,
  },
  {
    idx: 109,
    practiceCode: "an-toan-web-va-csdl-01",

    answers: [
      {
        isKey: true,
        title: "các lỗi cài đặt hệ mã hóa",
        idx: 0,
      },
      {
        title: "XSS/SQL Injection",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "khai thác các lỗi trong chính sách và áp dụng",
      },
      {
        idx: 3,
        title: "lạm dụng lưu trình xử lý",
        isKey: true,
      },
      {
        isKey: true,
        idx: 4,
        title: "các mẫu thiết kế không an toàn",
      },
    ],
    title: "Các dạng tấn công vào khiếm khuyết thiết kế bao gồm",
  },
  {
    idx: 110,
    title: "Mẫu thiết kế nào có thể được coi là tạm an toàn nếu bao gồm",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "các hành vi mơ hồ, không xác định và bất ngờ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "kiểm tra cấp quyền và lọc dữ liệu đầy đủ",
        idx: 1,
      },
      {
        title: "trộn lẫn dữ liệu và mã",
        isKey: false,
        idx: 2,
      },
      {
        title: "chuẩn hóa sai và cú pháp đồng nghĩa",
        idx: 3,
        isKey: false,
      },
      {
        title: "tin tưởng vào bên máy khách.",
        isKey: false,
        idx: 4,
      },
    ],
  },
  {
    title:
      "Việc kiểm tra, hay lọc dữ liệu để phòng chống tấn công khiếm khuyết thiết kế phải được thực hiện trên ...",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "máy khách",
      },
      {
        isKey: true,
        idx: 1,
        title: "máy chủ",
      },
      {
        idx: 2,
        isKey: false,
        title: "trình duyệt web",
      },
      {
        title: "cơ sở dữ liệu",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
    idx: 111,
  },
  {
    title: "Các lỗi cài đặt hệ mã hóa có thể là",

    answers: [
      {
        idx: 0,
        title:
          "không tạo được số ngẫu nhiên thực sự trong khi thuật toán mã hóa đòi hỏi sử dụng các số ngẫu nhiên",
        isKey: true,
      },
      {
        title: "trộn lẫn dữ liệu và mã",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "sử dụng các phương pháp, hoặc các giải thuật mã hóa cũ, yếu và chúng dễ dàng bị phá",
      },
      {
        title: "chuẩn hóa sai và cú pháp đồng nghĩa",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 112,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "tham số/thuật toán",
      },
      {
        isKey: false,
        title: "mẫu số/thuật toán",
        idx: 1,
      },
      {
        title: "tham số/khóa bí mật",
        isKey: false,
        idx: 2,
      },
      {
        title: "mẫu số/khóa bí mật",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Việc cài đặt các hệ mã hóa có thể phát sinh một số lỗ hổng bảo mật do các yêu cầu đối với các ... và bản thân ... mã hóa không được đảm bảo chặt chẽ",
    practiceCode: "an-toan-web-va-csdl-01",

    idx: 113,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 114,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Yêu cầu viết tài liệu, tạo các test case toàn diện",
      },
      {
        title: "lập trình an toàn",
        isKey: true,
        idx: 1,
      },
      {
        title: "ánh xạ chính sách - kiểm soát",
        idx: 2,
        isKey: true,
      },
      {
        title: "xác minh máy khách và các hướng dẫn thực hiện mã hóa",
        isKey: true,
        idx: 3,
      },
      {
        idx: 4,
        title:
          "Sử dụng thủ tục cơ sở dữ liệu (stored procedures) và cơ chế tham số hóa dữ liệu",
        isKey: false,
      },
    ],
    title: "Các biện pháp phòng chống tấn công logic xử lý website",
  },
  {
    idx: 115,
    answers: [
      {
        idx: 0,
        title: "tấn công sử dụng các phần mềm độc hại",
        isKey: true,
      },
      {
        idx: 1,
        isKey: true,
        title: "tấn công các trình cắm (plugin) của trình duyệt",
      },
      {
        isKey: true,
        title: "các vấn đề DNS & nguồn gốc",
        idx: 2,
      },
      {
        title: "lọc dữ liệu không đầy đủ",
        idx: 3,
        isKey: false,
      },
      {
        title: "sự riêng tư của người dùng",
        isKey: true,
        idx: 4,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
    title: "Các dạng tấn công sử dụng các phần mềm độc hại bao gồm",
  },
  {
    title:
      "Chính sách Cùng Nguồn Gốc (Same Origin Policy) của trình duyệt đảm bảo nền tảng an ninh cho mô hình DOM của các ..., trong đó nó ngăn chặn một miền (domain) can thiệp vào một ... khác",
    answers: [
      {
        isKey: false,
        title: "trang web/máy khách",
        idx: 0,
      },
      {
        isKey: false,
        title: "máy chủ web/máy khách",
        idx: 1,
      },
      {
        title: "máy chủ web/miền",
        idx: 2,
        isKey: false,
      },
      {
        title: "trang web/miền",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 116,
  },
  {
    answers: [
      {
        idx: 0,
        title: "máy chủ/máy chủ/máy chủ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "nguồn/nguồn/máy chủ",
      },
      {
        idx: 2,
        isKey: false,
        title: "nguồn/máy chủ/máy chủ",
      },
      {
        idx: 3,
        isKey: false,
        title: "nguồn/nguồn/trình duyệt",
      },
    ],
    title:
      "Dạng tấn công ánh xạ lại DNS cho phép các nội dung từ nhiều ... trở thành từ cùng 1 ... . Tin tặc có thể tấn công hệ thống DNS để ánh xạ lại tên miền tin cậy sang địa chỉ IP ... của tin tặc",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 117,
  },
  {
    idx: 118,
    title: "Các biện pháp phòng chống để giảm rủi ro khi duyệt web bao gồm",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "cấu hình giao thức bảo mật SSL/TLS",
      },
      {
        isKey: true,
        title: "duyệt web an toàn",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "cô lập trình duyệt",
      },
      {
        title:
          "sử dụng giao thức Tor (The Onion Routing) và DNSSEC (DNS Security Extensions)",
        idx: 3,
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Sử dụng cơ chế tham số hóa dữ liệu hỗ trợ bởi nhiều ngôn ngữ lập trình web như ASP.NET, PHP và JSP",
        idx: 4,
      },
    ],
  },
  {
    title:
      "Khi trình duyệt và máy chủ web trao đổi thông tin thông qua HTTPS (HTTP trên SSL/TLS), tính ... dữ liệu được đảm bảo sử dụng mã hóa, tính ... dữ liệu và nguồn gốc dữ liệu được đảm bảo sử dụng hàm băm có khóa (HMAC)",
    idx: 119,
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "bí mật/toàn vẹn",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "toàn vẹn/bí mật",
      },
      {
        idx: 2,
        isKey: false,
        title: "bí mật/xác thực",
      },
      {
        isKey: false,
        idx: 3,
        title: "chống chối bỏ/toàn vẹn",
      },
    ],
  },
  {
    title:
      "DNSSEC bổ sung thêm các hàm mật mã vào DNS để ngăn chặn ... bằng khả năng nhận dạng chính xác các ... tin cậy.",

    answers: [
      {
        idx: 0,
        title: "xâm nhập/máy khách",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "xâm nhập/máy chủ",
      },
      {
        idx: 2,
        title: "giả mạo/máy khách",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "giả mạo/máy chủ",
      },
    ],
    idx: 120,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 121,
    title: "Các điểm yếu, lỗ hổng trong cấu hình máy chủ web bao gồm",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "các tài khoản quản trị ngầm định",
      },
      {
        isKey: true,
        title: "các nội dung ngầm định",
        idx: 1,
      },
      {
        title: "liệt kê nội dung thư mục và các phương thức nguy hiểm",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Các điểm yếu trong sinh token phiên",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",

    title: "Các lỗ hổng thường gặp trong các phần mềm máy chủ web bao gồm",
    idx: 122,
    answers: [
      {
        title: "lỗ hổng tràn bộ đệm",
        idx: 0,
        isKey: true,
      },
      {
        isKey: true,
        idx: 1,
        title: "lỗ hổng cho phép duyệt đường dẫn",
      },
      {
        idx: 2,
        title: "lỗ hổng trong mã hóa và chuẩn hóa",
        isKey: true,
      },
      {
        title: "lỗ hổng lạm dụng lưu trình xử lý",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 123,
    title:
      "Các lỗ hổng cho phép duyệt đường dẫn (Path traversal vulnerabilities) thường xuất hiện khi các ... thực hiện việc đọc, hoặc ghi vào hệ thống file dựa trên các ... do người dùng cung cấp, nhưng không được kiểm soát chặt chẽ",
    answers: [
      {
        idx: 0,
        title: "máy chủ web/nguồn",
        isKey: false,
      },
      {
        idx: 1,
        title: "ứng dụng web/tham số",
        isKey: true,
      },
      {
        title: "máy chủ/tham số",
        isKey: false,
        idx: 2,
      },
      {
        title: "ứng dụng web/nguồn",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "bị đánh cắp thông tin mật khẩu, log, các dữ liệu nhạy cảm",
      },
      {
        isKey: true,
        title: "bị giành quyền kiểm soát cả ứng dụng web và hệ thống máy chủ",
        idx: 1,
      },
      {
        isKey: false,
        title: "bị ghi đè lên các dữ liệu quan trọng",
        idx: 2,
      },
    ],

    title:
      "Các lỗ hổng cho phép duyệt đường dẫn (Path traversal vulnerabilities) nếu bị khai thác có thể đạt đến hậu quả xấu nhất là?",
    idx: 124,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Biện pháp giảm thiểu lỗ hổng cho phép duyệt đường dẫn là",

    idx: 125,
    answers: [
      {
        title:
          "hạn chế cho phép các thao tác đọc, ghi hệ thống file dựa trên tham số từ người dùng.",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "cô lập trình duyệt",
        isKey: false,
      },
      {
        isKey: true,
        title:
          'thực hiện các biện pháp kiểm tra, lọc để loại bỏ các chuỗi duyệt đường dẫn kiểu "..\\..\\" hoặc "../../" khỏi tên file',
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "giới hạn việc truy nhập file trong thư mục chỉ định",
      },
    ],
  },
  {
    title:
      "Một hệ thống điều khiển truy nhập có thể được cấu thành từ 3 dịch vụ:",
    answers: [
      {
        title: "Xác thực (Authentication)",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Trao quyền, hoặc cấp quyền (Authorization)",
        isKey: true,
      },
      {
        title: "Mã hóa (Encryption)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Quản trị (Administration)",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 126,
  },
  {
    answers: [
      {
        title:
          "xác định các tài nguyên mà người dùng được phép truy nhập dựa trên chính sách quản trị tài nguyên của cơ quan, tổ chức và vai trò của người dùng trong hệ thống.",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "quá trình xác minh tính chân thực của các thông tin nhận dạng mà người dùng cung cấp",
      },
      {
        title:
          "dịch vụ cung cấp khả năng thêm, bớt và sửa đổi các thông tin tài khoản người dùng, cũng như quyền truy nhập của người dùng trong hệ thống",
        idx: 2,
        isKey: false,
      },
    ],
    idx: 127,
    title: "Xác thực (Authentication) là",

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "quá trình xác minh tính chân thực của các thông tin nhận dạng mà người dùng cung cấp",
      },
      {
        title:
          "xác định các tài nguyên mà người dùng được phép truy nhập dựa trên chính sách quản trị tài nguyên của cơ quan, tổ chức và vai trò của người dùng trong hệ thống.",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "dịch vụ cung cấp khả năng thêm, bớt và sửa đổi các thông tin tài khoản người dùng, cũng như quyền truy nhập của người dùng trong hệ thống",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 128,
    title: "Trao quyền (Authorization) là",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Quản trị (Administration) là",

    idx: 129,
    answers: [
      {
        isKey: false,
        title:
          "quá trình xác minh tính chân thực của các thông tin nhận dạng mà người dùng cung cấp",
        idx: 0,
      },
      {
        title:
          "xác định các tài nguyên mà người dùng được phép truy nhập dựa trên chính sách quản trị tài nguyên của cơ quan, tổ chức và vai trò của người dùng trong hệ thống.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "dịch vụ cung cấp khả năng thêm, bớt và sửa đổi các thông tin tài khoản người dùng, cũng như quyền truy nhập của người dùng trong hệ thống",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title: "Quản trị (Administration)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Trao quyền (Authorization)",
        idx: 1,
      },
      {
        isKey: true,
        title: "Xác thực (Authentication)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Mã hóa (Encryption)",
        idx: 3,
      },
    ],

    title:
      "Đâu là khâu đầu tiên cần thực hiện trong một hệ thống điều khiển truy nhập?",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 130,
  },
  {
    answers: [
      {
        title:
          "bí mật (Confidentiality), toàn vẹn (Integrity), sẵn dùng (Availability)",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title:
          "bảo mật (Confidentiality), toàn vẹn (Integrity), sẵn dùng (Availability)",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "bí mật (Confidentiality), toàn vẹn (Intelligence), sẵn dùng (Availability)",
      },
      {
        title:
          "bí mật (Confidentiality), toàn vẹn (Intelligence), sẵn dùng (Avanced)",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Mục đích chính của điều khiển truy nhập là để đảm bảo tính",

    idx: 131,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 132,
    title: "3 nhân tố thông tin nhận dạng người dùng trong quá trình xác thực",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Bạn là ai? (chứng minh nhân dân, bằng lái xe, vân tay,...)",
      },
      {
        title: "Những cái bạn biết? (tên truy nhập, mật khẩu, số PIN...)",
        idx: 1,
        isKey: true,
      },
      {
        title: "Bạn cần gì? (truy xuất cơ sở dữ liệu, cập nhật file...)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Bạn có gì? (Thẻ ATM, thẻ tín dụng, ...)",
        idx: 3,
      },
    ],
  },
  {
    idx: 133,
    title: "2 phương thức xác thực được giao thức HTTP cung cấp",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Basic access authentication",
      },
      {
        idx: 1,
        isKey: false,
        title: "Avanced access authentication",
      },
      {
        idx: 2,
        title: "Digest access authentication",
        isKey: true,
      },
      {
        title: "Encrypt access authentication",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Nhược điểm của Basic access authentication là",

    idx: 134,
    answers: [
      {
        title: "phức tạp, khó thực hiện",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "mật khẩu truyền không an toàn do mã base64 không đảm bảo tính bí mật, có thể bị giải mã dễ dàng",
      },
      {
        title:
          "mật khẩu đƣợc gửi từ trình duyệt đến máy chủ thƣờng xuyên, dễ gây lộ, mất mật khẩu",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "mật khẩu cũng được lưu trữ không an toàn trong cookie của trình duyệt",
      },
      {
        title:
          "không tồn tại phiên làm việc nên chỉ có thể đăng nhập mà không thể đăng xuất.",
        idx: 4,
        isKey: true,
      },
    ],
  },
  {
    title:
      "Điểu khác của Digest access authentication so với Basic access authentication là mật khẩu được mã hóa bằng hàm băm ..., sau đó được đưa vào thông điệp xác thực để gửi lên máy chủ web.",

    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        title: "SHA-1",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "MD5",
      },
      {
        idx: 2,
        isKey: false,
        title: "MD4",
      },
      {
        isKey: false,
        title: "AES",
        idx: 3,
      },
    ],
    idx: 135,
  },
  {
    answers: [
      {
        idx: 0,
        title: "nhiều/nhiều",
        isKey: false,
      },
      {
        title: "một/một",
        idx: 1,
        isKey: false,
      },
      {
        title: "một/nhiều",
        isKey: true,
        idx: 2,
      },
      {
        title: "nhiều/một",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Đăng nhập một lần (Single Sign On - SSO) là giải pháp cho phép người dùng đăng nhập ... lần thông qua một giao diện xác thực để truy nhập vào ... hệ thống, hoặc dịch vụ khác nhau.",
    idx: 136,

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "2",
        isKey: true,
      },
      {
        title: "3",
        isKey: false,
        idx: 1,
      },
      {
        title: "4",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "5",
      },
    ],
    idx: 137,

    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Có mấy dạng điểm yếu trong quá trình quản lý phiên làm việc của ứng dụng web?",
  },
  {
    title: "Các điểm yếu trong sinh token phiên bao gồm",
    practiceCode: "an-toan-web-va-csdl-01",

    idx: 138,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Token phiên có nghĩa",
      },
      {
        idx: 1,
        title: "Rò rỉ token trên mạng",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Token phiên dễ đoán",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lỗ hổng trong ánh xạ token sang phiên",
      },
    ],
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: false,
        title: "Token được che dấu thứ tự",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Token phụ thuộc thời gian",
      },
      {
        isKey: false,
        idx: 2,
        title: "Token được tạo sử dụng số ngẫu nhiên yếu.",
      },
      {
        idx: 3,
        isKey: true,
        title: "Token bị đánh cắp từ phía máy khách",
      },
    ],
    idx: 139,

    title: "Điểm yếu nào sau đây không thuộc loại token phiên dễ đoán",
  },
  {
    answers: [
      {
        title: "Rò rỉ token trên mạng, trong ghi log",
        isKey: true,
        idx: 0,
      },
      {
        isKey: true,
        title: "Lỗ hổng trong ánh xạ token sang phiên, trong kết thúc phiên",
        idx: 1,
      },
      {
        isKey: false,
        title: "Token được che dấu thứ tự",
        idx: 2,
      },
      {
        isKey: true,
        title: "Token bị đánh cắp từ phía máy khách",
        idx: 3,
      },
      {
        idx: 4,
        isKey: true,
        title: "Không giới hạn phạm vi sử dụng cookie",
      },
    ],

    title: "Các điểm yếu trong sử dụng token phiên có thể là",
    idx: 140,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "nhiều ứng dụng web cho phép nhiều phiên làm việc được tạo trên cùng một tài khoản người dùng",
      },
      {
        title:
          "token bị rò rỉ trong quá trình ghi log của các thành phần trong ứng dụng web",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "các token được che dấu thứ tự, token phụ thuộc thời gian và token được tạo sử dụng số ngẫu nhiên yếu",
      },
      {
        title:
          "ứng dụng tạo các token từ các thành phần có nghĩa như tên người dùng, email, ngày tháng,...",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 141,
    title: "Lỗ hổng trong ánh xạ token sang phiên tồn tại do",

    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title: "Lỗ hổng trong kết thúc phiên tồn tại, không phải do",
    answers: [
      {
        title:
          "nhiều ứng dụng web không có tính năng Đăng xuất (Log Out, hoặc Log Off)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "hệ thống có tính năng Đăng xuất, nhưng không đảm bảo hủy token và toàn bộ các tài nguyên khác của phiên",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "nhiều ứng dụng web cho phép nhiều phiên làm việc được tạo trên cùng một tài khoản người dùng.",
      },
      {
        isKey: false,
        title:
          "hệ thống không đặt thời gian hết hạn cho phiên khi người dùng không có hoạt động trong một khoảng thời gian",
        idx: 3,
      },
    ],
    idx: 142,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 143,
    answers: [
      {
        title: "sinh các token phiên mạnh",
        idx: 0,
        isKey: true,
      },
      {
        title: "bảo vệ token trong cả vòng đời",
        idx: 1,
        isKey: true,
      },
      {
        title: "ghi log, giám sát và cảnh báo",
        idx: 2,
        isKey: true,
      },
      {
        title: "cô lập trình duyệt",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Biện pháp bảo mật phiên gồm",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Chèn mã SQL (SQL Injection)",
        isKey: true,
      },
      {
        title: "các thiết lập quyền truy nhập cơ sở dữ liệu",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Các lỗ hổng cho phép duyệt đường dẫn (Path traversal vulnerabilities)",
        idx: 2,
      },
      {
        title: "an toàn cho các thủ tục (Stored Procedures)",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",

    idx: 144,
    title: "Các vấn đề liên quan đến bảo mật cơ sở dữ liệu web bao gồm",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",

    title: "Ưu điểm của việc sử dụng thủ tục cơ sở dữ liệu là",
    idx: 145,
    answers: [
      {
        idx: 0,
        title:
          "ngăn chặn hiệu quả tấn công chèn mã SQL do dữ liệu người dùng được tách khỏi mã",
        isKey: true,
      },
      {
        isKey: true,
        title:
          "tăng hiệu năng đáng kể do các thủ tục đã được dịch và lưu trong cơ sở dữ liệu",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "cho phép hạn chế đến tối thiểu quyền truy nhập trực tiếp của người dùng vào các bảng dữ liệu thông qua việc chỉ thiết lập quyền thực hiện thủ tục",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "thiết lập quyền truy nhập phù hợp",
        isKey: true,
      },
      {
        idx: 1,
        isKey: true,
        title: "giữ bí mật mã nguồn",
      },
      {
        idx: 2,
        isKey: true,
        title: "sử dụng phương pháp ẩn thông tin",
      },
      {
        idx: 3,
        isKey: true,
        title: "vấn đề liệt kê và duyệt các thư mục",
      },
      {
        isKey: false,
        idx: 4,
        title: "an toàn cho các thủ tục (Stored Procedures)",
      },
    ],

    title: "Các vấn đề liên quan đến bảo mật hệ thống file bao gồm",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 146,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Các vấn đề liên quan đến bảo mật trình duyệt web bao gồm:",
    answers: [
      {
        title: "các phương thức tấn công trình duyệt web",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "mục đích tấn công trình duyệt",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "giữ bí mật mã nguồn",
      },
      {
        isKey: true,
        title:
          "các tính năng cung cấp bởi trình duyệt chứa đựng nhiều nguy cơ bảo mật",
        idx: 3,
      },
    ],

    idx: 147,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 148,
    title: "Các biện pháp tăng cường an toàn cho trình duyệt web bao gồm",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "cấu hình các thiết lập an ninh và riêng tư",
      },
      {
        idx: 1,
        title: "luôn cập nhật trình duyệt, cẩn trọng khi cài trình cắm",
        isKey: true,
      },
      {
        isKey: true,
        title: "đăng ký tiện ích cảnh báo",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "hệ thống cần có bộ chương trình quét virus",
      },
      {
        isKey: true,
        title: "cài đặt plug-in an ninh",
        idx: 4,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "tần suất cập nhật",
        isKey: true,
      },
      {
        title: "số lượng lỗ hổng bị khai thác",
        isKey: true,
        idx: 1,
      },
      {
        title: "tính năng sandbox",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "khả năng chặn mã độc sử dụng kỹ thuật xã hội",
        isKey: true,
      },
      {
        title: "tính bí mật của mã nguồn",
        isKey: false,
        idx: 4,
      },
    ],

    practiceCode: "an-toan-web-va-csdl-01",
    idx: 149,
    title: "Các tiêu chí đánh giá độ bảo mật của trình duyệt",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Xác định yêu cầu/Thiết kế (Requirements/Design)",
      },
      {
        title: "Kiểm thử Beta (Beta Testing)",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Phát hành (Release)",
        isKey: false,
      },
      {
        idx: 3,
        title: "Kiểm thử mã nguồn (Coding Testing)",
        isKey: false,
      },
    ],
    title:
      "Các lỗi được phát hiện và khắc phục ở khâu nào thì đòi hỏi chi phí và độ phức tạp thấp nhất?",

    idx: 150,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: 'hướng "thâm nhập và vá" (penetrate and patch)',
      },
      {
        isKey: false,
        title: 'hướng " vá và thâm nhập" (patch and penetrate)',
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "hướng tiếp cận toàn diện",
      },
      {
        title: "hướng tiếp cận từ trên xuống",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 151,
    practiceCode: "an-toan-web-va-csdl-01",
    title: "2 hướng tiếp nhận bảo mật ứng dụng web chính:",
  },
  {
    title:
      'Hướng tiếp cận bảo mật ứng dụng web "thâm nhập và vá" (penetrate and patch) tương tự hướng tiếp cận ...',

    idx: 152,
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "hộp đen",
      },
      {
        isKey: false,
        title: "hộp trắng",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "hộp xám",
      },
    ],
  },
  {
    idx: 153,

    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "thời gian thực hiện dài và chi phí lớn",
      },
      {
        isKey: false,
        idx: 1,
        title: "khó có thể phát hiện tất cả các lỗi bảo mật",
      },
      {
        title:
          "khắc phục lỗi phần mềm ở giai đoạn cuối của quy trình phát triển phần mềm thường phức tạp và tốn kém",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "không thể hạn chế đến tối thiểu các lỗi bảo mật",
        idx: 3,
      },
    ],
    title: "Nhược điểm của hướng tiếp cận toàn diện là",
  },
  {
    answers: [
      {
        title: "xác thực người dùng (Authenticating users)",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bảo vệ dữ liệu nhạy cảm (Protecting sensitive data)",
      },
      {
        isKey: false,
        title:
          "Ngăn chặn việc xử lý tham số (Preventing parameter manipulation)",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thực hiện cấu hình an toàn (Providing secure configuration)",
      },
    ],
    title:
      "Với hướng tiếp cận toàn diện, trong mô hình hệ thống ứng dụng web, biện pháp bảo mật nào cần được xác định và áp dụng phù hợp với trình duyệt (Browser)?",

    idx: 154,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title:
      "Với hướng tiếp cận toàn diện, trong mô hình hệ thống ứng dụng web, biện pháp bảo mật nào cần được xác định và áp dụng phù hợp với dữ liệu truyền nhận giữa trình duyệt (Browser) và máy chủ web (Web server)?",
    idx: 155,

    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: true,
        title: "Bảo vệ dữ liệu nhạy cảm (Protecting sensitive data)",
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Ngăn chặn tấn công chiếm phiên làm việc và tái sử dụng cookie (Preventing session hijacking and cookie replay attacks)",
        isKey: true,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Ngăn chặn việc xử lý tham số (Preventing parameter manipulation)",
      },
      {
        title: "Kiểm tra dữ liệu đầu vào (Validating input)",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        isKey: false,
        title: "Xử lý các ngoại lệ (Handling exceptions)",
      },
    ],
  },
  {
    title:
      "Với hướng tiếp cận toàn diện, trong mô hình hệ thống ứng dụng web, biện pháp bảo mật nào cần được xác định và áp dụng phù hợp với máy chủ web (Web server)?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Thực hiện cấu hình an toàn (Providing secure configuration)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Bảo vệ dữ liệu nhạy cảm (Protecting sensitive data)",
      },
      {
        isKey: true,
        idx: 2,
        title: "Kiểm tra dữ liệu đầu vào (Validating input)",
      },
      {
        title: "Cấp quyền người dùng (Authorising users)",
        isKey: true,
        idx: 3,
      },
      {
        idx: 4,
        isKey: true,
        title: "Xử lý các ngoại lệ (Handling exceptions)",
      },
    ],
    idx: 156,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    idx: 157,
    answers: [
      {
        title:
          "Xác thực và cấp quyền cho ngƣời dùng luồng đến (Authenticating and authorising upstream identities)",
        isKey: true,
        idx: 0,
      },
      {
        title: "Bảo vệ dữ liệu nhạy cảm (Protecting sensitive data)",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Mã hóa hoặc băm dữ liệu nhạy cảm (Encrypting or hashing sensitive data)",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Kiểm toán và ghi log các hoạt động và các giao dịch (Auditing and logging activity and transactions)",
      },
      {
        isKey: false,
        idx: 4,
        title: "Xử lý các ngoại lệ (Handling exceptions)",
      },
    ],

    title:
      "Với hướng tiếp cận toàn diện, trong mô hình hệ thống ứng dụng web, biện pháp bảo mật nào cần được xác định và áp dụng phù hợp với máy chủ ứng dụng (Application server)?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title:
      "Với hướng tiếp cận toàn diện, trong mô hình hệ thống ứng dụng web, biện pháp bảo mật nào cần được xác định và áp dụng phù hợp với dữ liệu truyền nhận giữa máy chủ ứng dụng (Application server) và máy chủ cơ sở dữ liệu (Database server)?",
    idx: 158,

    answers: [
      {
        isKey: false,
        title:
          "Xác thực và cấp quyền cho ngƣời dùng luồng đến (Authenticating and authorising upstream identities)",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Bảo vệ dữ liệu nhạy cảm (Protecting sensitive data)",
      },
      {
        idx: 2,
        title:
          "Mã hóa hoặc băm dữ liệu nhạy cảm (Encrypting or hashing sensitive data)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Xử lý các ngoại lệ (Handling exceptions)",
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Mã hóa hoặc băm dữ liệu nhạy cảm (Encrypting or hashing sensitive data)",
      },
      {
        isKey: false,
        title: "Bảo vệ dữ liệu nhạy cảm (Protecting sensitive data)",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Kiểm toán và ghi log các hoạt động và các giao dịch (Auditing and logging activity and transactions)",
        isKey: false,
      },
      {
        title: "Cấp quyền ngƣời dùng (Authorising users)",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 159,
    title:
      "Với hướng tiếp cận toàn diện, trong mô hình hệ thống ứng dụng web, biện pháp bảo mật nào cần được xác định và áp dụng phù hợp với máy chủ cơ sở dữ liệu (Database server)?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Pha Xác định yêu cầu (Requirements) trong Microsoft SDL gồm 3 định hướng là",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "thiết lập các yêu cầu bảo mật và riêng tư",
      },
      {
        idx: 1,
        title: "thực hiện đánh giá rủi ro về bảo mật và riêng tư",
        isKey: true,
      },
      {
        isKey: true,
        title: "tạo ngưỡng chất lượng, hay ngưỡng lỗi",
        idx: 2,
      },
      {
        isKey: false,
        title: "sử dụng mô hình mối đe dọa",
        idx: 3,
      },
    ],

    idx: 160,
  },
  {
    idx: 161,
    answers: [
      {
        title: "thiết lập các yêu cầu thiết kế",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "tạo ngưỡng chất lượng, hay ngưỡng lỗi",
      },
      {
        idx: 2,
        isKey: true,
        title: "phân tích, hoặc giảm giao diện tấn công",
      },
      {
        isKey: true,
        title: "sử dụng mô hình mối đe dọa",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Pha Thiết kế (Designs) trong Microsoft SDL gồm 3 định hướng là",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "sử dụng các công cụ được phê duyệt, hay chấp thuận",
      },
      {
        idx: 1,
        isKey: true,
        title: "hạn chế sử dụng các hàm không an toàn",
      },
      {
        idx: 2,
        title: "thực hiện phân tích động",
        isKey: false,
      },
      {
        title: "thực hiện phân tích tĩnh mã",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Pha Cài đặt (Implementation) trong Microsoft SDL gồm 3 định hướng là",
    idx: 162,
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title: "Pha Kiểm tra (Testing) trong Microsoft SDL gồm 3 định hướng là",
    answers: [
      {
        idx: 0,
        title: "thực hiện phân tích động",
        isKey: true,
      },
      {
        idx: 1,
        title: "kiểm thử xâm nhập",
        isKey: true,
      },
      {
        idx: 2,
        isKey: true,
        title: "đánh giá bề mặt tấn công",
      },
      {
        isKey: false,
        title: "thực hiện phân tích tĩnh mã",
        idx: 3,
      },
    ],
    idx: 163,
  },
  {
    answers: [
      {
        idx: 0,
        title: "tạo kế hoạch phản ứng sự cố",
        isKey: true,
      },
      {
        isKey: false,
        title: "đánh giá bề mặt tấn công",
        idx: 1,
      },
      {
        title: "thực hiện đánh giá an ninh lần cuối",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "chứng nhận phát hành và lưu trữ",
      },
    ],
    title: "Pha Phát hành (Release) trong Microsoft SDL gồm 3 định hướng là",
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 164,
  },
  {
    practiceCode: "an-toan-web-va-csdl-01",
    title:
      "Mô hình SAMM chia vấn đề bảo mật ứng dụng thành 4 thành phần nghiệp vụ chính (Core business functions) là",
    idx: 165,
    answers: [
      {
        title: "Governance (Quản trị)",
        isKey: true,
        idx: 0,
      },
      {
        title: "Construction (Xây dựng)",
        isKey: true,
        idx: 1,
      },
      {
        title: "Implementation (Cài đặt)",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Verification (Kiểm tra)",
      },
      {
        title: "Deployment (Triển khai)",
        idx: 4,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Strategy & Metrics (Chiến lược và Đo kiểm)",
      },
      {
        isKey: true,
        idx: 1,
        title: "Policy & Compliance (Chính sách và Tuân thủ)",
      },
      {
        isKey: false,
        title: "Secure Architecture (Kiến trúc bảo mật)",
        idx: 2,
      },
      {
        isKey: true,
        title: "Education & Guidance (Giáo dục và Hướng dẫn)",
        idx: 3,
      },
    ],
    idx: 166,
    title:
      "Nghiệp vụ Governance (Quản trị) trong mô hình OWASP SAMM gồm các nghiệp vụ con nào?",
    practiceCode: "an-toan-web-va-csdl-01",
  },
  {
    title:
      "Nghiệp vụ Verification (Kiểm tra) trong mô hình OWASP SAMM gồm các nghiệp vụ con nào?",
    practiceCode: "an-toan-web-va-csdl-01",
    answers: [
      {
        isKey: true,
        title: "Design Review (Đánh giá thiết kế)",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Code Review (Đánh giá mã)",
      },
      {
        isKey: true,
        title: "Security Testing (Kiểm thử bảo mật)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Vulnerability Management (Quản lý lỗ hổng)",
        idx: 3,
      },
    ],
    idx: 167,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Vulnerability Management (Quản lý lỗ hổng)",
        isKey: true,
      },
      {
        isKey: true,
        title: "Environment Hardening (Gia cố môi trường)",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Operational Enablement (Kích hoạt vận hành)",
      },
      {
        title: "Security Testing (Kiểm thử bảo mật)",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
    idx: 168,
    title:
      "Nghiệp vụ Deployment (Triển khai) trong mô hình OWASP SAMM gồm các nghiệp vụ con nào?",
  },
  {
    idx: 169,
    title: "SAMM là viết tắt của",
    answers: [
      {
        title: "Software Assurance Machine Model",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Software Assurance Maturity Model",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Software Avanced Maturity Model",
      },
      {
        title: "Software Availability Maturity Model",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-web-va-csdl-01",
  },
];

export default questions;
