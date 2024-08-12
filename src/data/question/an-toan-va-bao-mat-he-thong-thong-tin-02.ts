import { QuestionRequest } from "../../models/multiple-question";

const questions: QuestionRequest[] = [
  {
    idx: 0,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Arbitrary Code Language",
      },
      {
        idx: 1,
        isKey: false,
        title: "Access Control Library",
      },
      {
        idx: 2,
        isKey: true,
        title: "Access Control List",
      },
      {
        title: "Allowed Computer List",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Những chữ đầu của nhóm từ ACL là tên viết tắt của:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Full access",
      },
      {
        idx: 1,
        isKey: true,
        title: "No access",
      },
      {
        isKey: false,
        idx: 2,
        title: "Read access",
      },
      {
        title: "Write access",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Nên cài mức truy cập mặc định là mức nào sau đây?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 1,
  },
  {
    idx: 2,
    title:
      "Sau khi một user được định danh và xác thực hệ thống, để cho phép user sử dụng tài nguyên bạn phải thực hiện điều gì?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Phải được ủy quyền",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Được truyền lại",
        isKey: false,
      },
      {
        title: "Được mã hóa",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Được enable",
        isKey: false,
      },
    ],
  },
  {
    idx: 3,
    title: "Quyền truy cập nào cho phép ta lưu giữ một tập tin?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đọc",
      },
      {
        idx: 1,
        isKey: false,
        title: "Sao chép",
      },
      {
        idx: 2,
        isKey: false,
        title: "Hiệu chỉnh",
      },
      {
        title: "Ghi",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    idx: 4,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: true,
        title: "Hiệu chỉnh (Modify)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sao chép (Copy)",
      },
      {
        isKey: false,
        title: "Thay đổi (Change)",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Biên tập ( Edit)",
      },
    ],
    title:
      "Quyền truy cập nào cho phép ta hiệu chỉnh thuộc tính của một tập tin?",
  },
  {
    title: "Các quyền truy cập tối đa nên dành cho user là gì ?",
    idx: 5,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ít nhất là quyền đọc và ghi",
      },
      {
        title: "Không có quyền truy cập",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Đủ để thực hiện công việc theo chức trách",
      },
      {
        idx: 3,
        title: "Toàn quyền",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Chính sách tài khoản nào nên được thiết lập để ngăn chặn các cuộc tấn công ác ý vào tài khoản của user?",
    idx: 6,
    answers: [
      {
        title: "Disable tài khoản không dùng đến",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hạn chế thời gian",
      },
      {
        title: "Ngày hết hạn tài khoản",
        idx: 2,
        isKey: false,
      },
      {
        title: "Giới hạn số lần logon",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 7,
    answers: [
      {
        idx: 0,
        title: "Xác thực với mật khẩu",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Họ phải nhập user ID đã được mã hóa",
      },
      {
        title: "Được phép truy cập với mức ưu tiên được thiết lập",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Người quản trị phải enable để gõ vào",
        isKey: false,
      },
    ],
    title:
      "Sau khi một user đã được định danh (identifed), điều gì cần phải làm trước khi họ log vào một mạng máy tính ?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 8,
    answers: [
      {
        idx: 0,
        title: "12 đến 15 ký tự",
        isKey: false,
      },
      {
        idx: 1,
        title: "3 đến 5 ký tự",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "8 ký tự",
      },
      {
        idx: 3,
        isKey: false,
        title: "1 đến 3 ký tự",
      },
    ],
    title: "Chiều dài tối thiểu của mật khẩu cần phải là :",
  },
  {
    title:
      "Điều gì cần được thực hiện đối với tập tin mật khẩu để ngăn chặn một người dùng trái phép crack vào các nội dung ?",
    idx: 9,
    answers: [
      {
        isKey: false,
        title: "Hủy bỏ tất cả các quyền truy cập",
        idx: 0,
      },
      {
        idx: 1,
        title: "Mã hóa tập tin mật khẩu",
        isKey: true,
      },
      {
        isKey: false,
        title: "Di chuyển ngoại tuyến đến một đĩa mềm",
        idx: 2,
      },
      {
        isKey: false,
        title: "Sao chép đến một tập tin bù nhìn với một tên khác",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Trojan Hors",
      },
      {
        idx: 1,
        title: "Sâu",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tấn công IP",
      },
      {
        isKey: true,
        idx: 3,
        title: "DoS phân tán (DDoS)",
      },
    ],
    title:
      "Một IP flood theo các host phát tán trực tiếp đến một Web server là một ví dụ của loại tấn công gì ?",
    idx: 10,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Để ngăn tấn công DoS, một quản trị mạng chặn nguồn IP với tường lửa, nhưng tấn công vẫn tiếp diễn. Điều gì có khả năng xảy ra nhất ?",
    answers: [
      {
        title: "Sâu DoS đã lây nhiễm cục bộ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tấn công đang đến từ nhiều host (DDoS)",
      },
      {
        isKey: false,
        idx: 2,
        title: "Một tường lửa không thể ngăn chặn tấn công DoS",
      },
      {
        title: "Phần mềm Antivirus cần được cài đặt trên máy chủ đích",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 11,
  },
  {
    idx: 12,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Subnet mask",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Cài đặt phần mềm bảo vệ Antivirus",
        idx: 1,
      },
      {
        idx: 2,
        title: "Disable web server",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Chặn giao thức ICMP",
      },
    ],
    title:
      "Cách bảo vệ nào sau đây là tốt nhất để chống lại tấn công DoS kiểu làm tràn băng thông và bộ đệm của hệ thống",
  },
  {
    idx: 13,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Các loại khoá mật mã nào sau đây dễ bị crack nhất ?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "128 bit",
      },
      {
        title: "40 bit",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "256 bit",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "56 bit",
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Cách nào sau đây là tốt nhất để chống lại điểm yếu bảo mật trong phần mềm HĐH ?",
    answers: [
      {
        title: "Cài đặt bản service pack mới nhất",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Cài đặt lại HĐH thông dụng",
        idx: 1,
      },
      {
        title: "Sao lưu hệ thống thường xuyên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Shut down hệ thống khi không sử dụng",
        idx: 3,
      },
    ],
    idx: 14,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "password83",
      },
      {
        title: "reception",
        idx: 1,
        isKey: false,
      },
      {
        title: "!$aLtNb83",
        isKey: true,
        idx: 2,
      },
      {
        title: "LaT3r",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Các mật khẩu nào sau đây là khó phá nhất đối với một hacker ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 15,
  },
  {
    title:
      "Một người dùng đã mua một máy tính xách tay đã nhiễm virus.Trên máy không chứa phần mềm Antivirus và chưa được kết nối với mạng.Cách tốt nhất để sửa chữa máy tính xách tay là gì ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 16,
    answers: [
      {
        title:
          "Nối mạng máy tính xách tay và download phần mềm antivirus từ máy chủ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Khởi động máy tính xách tay với đĩa antivirus",
        isKey: true,
      },
      {
        idx: 2,
        title:
          "Nối mạng máy tính xách tay và download phần mềm antivirus từ Internet",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Kết nối máy tính xách tay đến một máy tính cá nhân khác và diệt virus từ đó",
        isKey: false,
      },
    ],
  },
  {
    title: "Các tập tin nào sau đây có khả năng chứa virus nhất ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "database.dat",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "bigpic.jpeg",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "note.txt",
      },
      {
        idx: 3,
        title: "picture.gif.exe",
        isKey: true,
      },
    ],
    idx: 17,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sâu",
      },
      {
        title: "Ngựa trojan",
        idx: 1,
        isKey: true,
      },
      {
        title: "Logic bomb",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Stealth virus",
      },
    ],
    title:
      "Loại mã nguồn độc hại nào có thể được cài đặt song không gây tác hại cho đến khi một hoạt động nào đó được kích hoạt ?",
    idx: 18,
  },
  {
    title:
      "Trong suốt quá trình kiểm định một bản ghi hệ thống máy chủ, các mục nào sau đây có thể được xem như là một khả năng đe dọa bảo mật ?",
    idx: 19,
    answers: [
      {
        isKey: false,
        title: "Năm lần nổ lực login thất bại trên tài khoản “jsmith”",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Hai lần login thành công với tài khoản Administrator",
      },
      {
        title: "Năm trăm ngàn công việc in được gởi đến một máy in",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Ba tập tin mới được lưu trong tài khoản thư mục bởi người sử dụng là “finance”",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 20,
    title:
      "Phương pháp thông tin truy cập từ xa nào được xem như kết nối điển hình đến Internet mọi lúc, nó làm gia tăng rủi ro bảo mật do luôn mở đối với mọi cuộc tấn công ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Cable modem & DSL",
        isKey: true,
        idx: 0,
      },
      {
        title: "Dial-up",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Wireless",
      },
      {
        idx: 3,
        isKey: false,
        title: "SSH",
      },
    ],
  },
  {
    idx: 21,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "Mã hóa số điện thoại",
        isKey: false,
      },
      {
        title: "Kiểm tra chuỗi modem",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hiển thị gọi",
      },
      {
        isKey: true,
        idx: 3,
        title: "Gọi lại ( Call back)",
      },
    ],
    title:
      "Tính năng bảo mật nào có thể được sử dụng đối với một máy trạm quay số truy cập từ xa sử dụng một username và mật khẩu ?",
  },
  {
    answers: [
      {
        title: "SSL",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "SSH",
        isKey: true,
      },
      {
        title: "IPSec",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "VPN",
      },
    ],
    idx: 22,
    title:
      "Tiện ích nào sau đây là một phương thức bảo mật truy cập từ xa tốt hơn telnet ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: false,
        title: "SLIP",
        idx: 0,
      },
      {
        idx: 1,
        title: "IPX",
        isKey: false,
      },
      {
        idx: 2,
        title: "L2TP",
        isKey: true,
      },
      {
        isKey: false,
        title: "PPTP",
        idx: 3,
      },
    ],
    idx: 23,
    title:
      "Các giao thức đường hầm nào sau đây chỉ làm việc trên các mạng IP ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Packet Sniffing",
        isKey: false,
      },
      {
        idx: 1,
        title: "Mã hóa",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Xác thực",
      },
      {
        idx: 3,
        isKey: false,
        title: "Thỏa thuận tốc độ kết nối",
      },
    ],
    title: "Mục đích của một máy chủ RADIUS là",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 24,
  },
  {
    idx: 25,
    answers: [
      {
        title: "802.1X",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "802.11b",
        idx: 1,
      },
      {
        title: "802.11a",
        idx: 2,
        isKey: false,
      },
      {
        title: "803.1",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Các giao thức xác thực nào sau đây được sử dụng trong các mạng không dây ?",
  },
  {
    idx: 26,
    answers: [
      {
        idx: 0,
        title: "IPX",
        isKey: false,
      },
      {
        idx: 1,
        title: "IPSec",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "SSH",
      },
      {
        isKey: false,
        idx: 3,
        title: "TACACS+",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Các giao thức nào sau đây làm việc trên lớp IP để bảo vệ thông tin IP trên mạng?",
  },
  {
    title:
      "LAC ( L2TP Access Control) và LNS ( L2TP Network Server)) là các thành phần của giao thức đường hầm nào ?",
    answers: [
      {
        idx: 0,
        title: "IPSec",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "PPP",
      },
      {
        title: "PPTP",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "L2TP",
        idx: 3,
      },
    ],
    idx: 27,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Giao thức được sử dụng rộng rãi nhất để truy cập kiểu quay số đến một máy chủ từ xa là",
    answers: [
      {
        idx: 0,
        title: "SLIP",
        isKey: false,
      },
      {
        title: "PPP",
        isKey: false,
        idx: 1,
      },
      {
        title: "RAS",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Telnet",
      },
    ],
    idx: 28,
  },
  {
    idx: 29,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Kỹ thuật nào được sử dụng để bảo đảm thông tin liên lạc qua một mạng không được bảo mật ?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Telnet",
      },
      {
        title: "SLIP",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "VPN",
        idx: 2,
      },
      {
        isKey: false,
        title: "PPP",
        idx: 3,
      },
    ],
  },
  {
    idx: 30,
    title: "Các thiết bị nào sau đây có thể sử dụng được trên mạng không dây ?",
    answers: [
      {
        title: "Máy vi tính để bàn",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Máy tính xách tay",
        idx: 1,
      },
      {
        title: "PDA",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả các loại trên",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Thiết bị nào được sử dụng để cho phép các máy trạm không dây truy cập vào một mạng LAN rộng ?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "802.11b",
      },
      {
        idx: 1,
        isKey: false,
        title: "Tường lửa",
      },
      {
        title: "Điểm truy cập không dây (Wiless Access Point)",
        idx: 2,
        isKey: true,
      },
      {
        title: "VPN",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 31,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Các chuẩn giao thức mạng không dây nào sau đây phân phối nội dung Wireless Markup Language (WML) đến các ứng dụng Web trên các thiết bị cầm tay (PDA)?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 32,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "WAP",
      },
      {
        isKey: false,
        idx: 1,
        title: "WEP",
      },
      {
        title: "802.11g",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "SSL",
      },
    ],
  },
  {
    idx: 33,
    title:
      "Các chuẩn giao thức mạng không dây IEEE nào sau đây là phổ biến nhất ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "803.11b",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "802.11g",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "802.11a",
      },
      {
        isKey: false,
        idx: 3,
        title: "802.11b",
      },
    ],
  },
  {
    title: "Mức mã hóa WEP nào nên được thiết lập trên một mạng 802.11b ?",
    idx: 34,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "128 bit",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "40 bit",
        isKey: false,
      },
      {
        title: "28 bit",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "16 bit",
        isKey: false,
      },
    ],
  },
  {
    title: "Cơ cấu bảo mật mạng không dây nào sau đây là ít an toàn nhất ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 35,
    answers: [
      {
        idx: 0,
        title: "VPN",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Mã hóa WEP 40 bit",
      },
      {
        title: "Bảo mật định danh mạng",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Mã hóa WEP 128 bit",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Được phép truy cập đến một địa chỉ MAC nhất định.",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Ngăn chặn truy cập từ một địa chỉ MAC nhất định.",
      },
      {
        title: "Mã hóa địa chỉ MAC của thiết bị không dây.",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tường lửa cá nhân",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 36,
    title: "Bộ lọc địa chỉ MAC được định nghĩa như :",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Mã hóa WEP 40 bit",
      },
      {
        title: "VPN",
        idx: 1,
        isKey: false,
      },
      {
        title: "Mã hóa WEP kết hợp với lọc địa chỉ MAC",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Nhận dạng bảo mật mạng",
        isKey: false,
      },
    ],
    title:
      "Phương pháp điều khiển truy cập có hiệu quả và an toàn nhất đối với mạng không dây là:",
    idx: 37,
  },
  {
    idx: 38,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Cơ cấu bảo mật nào sau đây được sử dụng với chuẩn không dây WAP ?",
    answers: [
      {
        title: "WTLS",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "SSL",
      },
      {
        idx: 2,
        isKey: false,
        title: "HTTPS",
      },
      {
        idx: 3,
        title: "Mã hóa WEP",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Thiết bị nào sử dụng bộ lọc gói và các quy tắc truy cập để kiểm soát truy cập đến các mạng riêng từ các mạng công cộng , như là Internet ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Điểm truy cập không dây",
      },
      {
        title: "Router",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Tường lửa",
        isKey: true,
      },
      {
        title: "Switch",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 39,
  },
  {
    answers: [
      {
        isKey: true,
        title: "VPN",
        idx: 0,
      },
      {
        title: "WEP",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Modem",
      },
      {
        isKey: false,
        idx: 3,
        title: "Telnet",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 40,
    title:
      "Thiết bị nào cho phép ta kết nối đến một mạng LAN của công ty qua Internet thông qua một kênh được mã hóa an toàn ?",
  },
  {
    title:
      "Ứng dụng mạng nào có thể được sử dụng để phân tích và kiểm tra lưu lượng mạng ?",
    answers: [
      {
        title: "IDS",
        idx: 0,
        isKey: false,
      },
      {
        title: "FTP",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Router",
      },
      {
        isKey: true,
        title: "Sniffer",
        idx: 3,
      },
    ],
    idx: 41,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Khóa đĩa mềm",
        idx: 0,
      },
      {
        isKey: false,
        title: "Enable khi login và tạo mật khẩu trên HĐH",
        idx: 1,
      },
      {
        title: "Lưu trữ đều đặn trên CD-ROM",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Mã hóa dữ liệu",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 42,
    title:
      "Cần phải làm gì để bảo vệ dữ liệu trên một máy tính xách tay nếu nó bị lấy cắp ?",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Xóa nó bằng nam châm",
        idx: 0,
      },
      {
        idx: 1,
        title: "Dán nhãn cẩn thận",
        isKey: false,
      },
      {
        title: "Thiết lập tab “Write-protect ”",
        isKey: true,
        idx: 2,
      },
      {
        title: "Lưu giữ nó tại chỗ",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Ta phải làm gì để ngăn chặn một ai đó tình cờ ghi đè lên dữ liệu trên một băng từ ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 43,
  },
  {
    idx: 44,
    answers: [
      {
        isKey: false,
        title: "Đĩa mềm",
        idx: 0,
      },
      {
        isKey: true,
        title: "CD-ROM",
        idx: 1,
      },
      {
        title: "Flash card",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Băng từ",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Phương tiện nào sau đây không bị ảnh hưởng bởi từ tính ?",
  },
  {
    answers: [
      {
        title: "PIN",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Quét võng mạc",
      },
      {
        idx: 2,
        title: "Mã hóa khóa",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thẻ nhớ",
      },
    ],
    idx: 45,
    title:
      "Yếu tố nào cần được sử dụng kết hợp với một thẻ thông minh để xác thực ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 46,
    title: "Loại media nào sau đây không phải là một thiết bị cơ động được ?",
    answers: [
      {
        idx: 0,
        title: "Đĩa mềm",
        isKey: false,
      },
      {
        isKey: true,
        title: "Ổ đĩa đĩa CD",
        idx: 1,
      },
      {
        isKey: false,
        title: "Thẻ thông minh",
        idx: 2,
      },
      {
        idx: 3,
        title: "Băng từ",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Chương trình Antivirus",
      },
      {
        isKey: false,
        idx: 1,
        title: "Switch",
      },
      {
        idx: 2,
        isKey: true,
        title: "Hệ thống phát hiện xâm nhập (IDS)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Dụng cụ phân tích mạng",
      },
    ],
    idx: 47,
    title:
      "Các thiết bị hay các ứng dụng bảo mật nào sau đây nên được sử dụng để theo dõi và cảnh báo các quản trị mạng về truy cập trái phép ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        title: "DMZ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "VLAN",
        isKey: false,
      },
      {
        title: "VPN",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Intranet",
      },
    ],
    title:
      "Vùng nào của cấu trúc liên kết bảo mật mạng chứa các máy chủ Intenet, như là web, FTP, và các máy chủ email ?",
    idx: 48,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 49,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "VLAN",
        isKey: false,
      },
      {
        idx: 1,
        title: "Intranet",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Extranet",
      },
      {
        isKey: false,
        title: "VPN",
        idx: 3,
      },
    ],
    title:
      "Loại mạng nào mô tả cấu hình mạng bên trong của một công ty dùng cho mô hình kinh doanh B2B ( Business to Business) ?",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "NAT",
      },
      {
        title: "VPN",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "VLAN",
        isKey: false,
      },
      {
        isKey: false,
        title: "IP spoofing",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 50,
    title:
      "Dịch vụ mạng nào cho phép các địa chỉ mạng bên trong được “che dấu”( hidden) khỏi các mạng bên ngoài và cho phép vài host của mạng bên trong sử dụng các địa chỉ trùng với mạng bên ngoài ?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "NAT",
      },
      {
        idx: 1,
        title: "Tunneling",
        isKey: false,
      },
      {
        title: "VPN",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "VLAN",
      },
    ],
    idx: 51,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Công nghệ nào được sử dụng để chia một mạng bên trong thành mạng logic nhỏ hơn, dễ sử dụng hơn ?",
  },
  {
    answers: [
      {
        idx: 0,
        title: "VLAN",
        isKey: false,
      },
      {
        idx: 1,
        title: "Tường lửa",
        isKey: false,
      },
      {
        idx: 2,
        title: "DMZ",
        isKey: false,
      },
      {
        title: "VPN",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 52,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Không sử dụng một liên kết chuyên dụng , phương pháp tốt nhất để kết nối hai mạng được định vị trong các văn phòng có khoảng cách địa lý xa nhau là gì ?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Sau khi cố gắng login đến một trạm làm việc trong 3 lần, một user thấy đã bị khóa bên ngoài hệ thống và không thể thực hiện bất kỳ nổ lực nào hơn nữa. Vấn đề này phù hợp nhất với điều gì ?",
    answers: [
      {
        title: "Cổng mạng disable",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tường lửa disable khi truy cập đến host",
      },
      {
        title: "User quên mật khẩu của họ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Hệ thống phát hiện xâm nhập disable tài khoản của user",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 53,
  },
  {
    answers: [
      {
        title: "Giao thức DNS",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Cập nhật vi chương trình ( Firmware)",
        isKey: false,
      },
      {
        idx: 2,
        title: "Tường lửa",
        isKey: false,
      },
      {
        idx: 3,
        title: "Danh sách điều khiển truy cập (ACL)",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Đặc tính nào của các thiết bị mạng như router hay switch, cho phép điều khiển truy cập dữ liệu trên mạng ?",
    idx: 54,
  },
  {
    idx: 55,
    title:
      "Phần nào của một thiết bị phần cứng có thể được nâng cấp để cung cấp khả năng bảo mật tốt hơn và đáng tin hơn ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Vi chương trình (firmware)",
      },
      {
        idx: 1,
        title: "Quét cổng",
        isKey: true,
      },
      {
        title: "Flash memory",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Cấu hình tập tin",
      },
    ],
  },
  {
    title:
      "Giao thức nào sau đây cần xóa trên thiết bị mạng quan trọng như router ?",
    idx: 56,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "TCP/IP",
      },
      {
        title: "ICMP",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "IPX/SPX",
        idx: 2,
      },
      {
        title: "RIP",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Các giao thức nào sau đây cần xóa trên một máy chủ email để ngăn chặn một user trái phép khai thác các điểm yếu bảo mật từ phần mềm giám sát mạng ?",
    answers: [
      {
        title: "IMAP",
        isKey: false,
        idx: 0,
      },
      {
        title: "POP3",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "TCP/IP",
      },
      {
        isKey: true,
        title: "SNMP",
        idx: 3,
      },
    ],
    idx: 57,
  },
  {
    title:
      "Điều gì cần được thực hiện với một email server để ngăn chặn user bên ngoài gởi email thông qua nó ?",
    idx: 58,
    answers: [
      {
        title: "Cài đặt phần mềm antivirus và antispam.",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Hạn chế chuyên tiếp tín hiệu SMTP.",
        idx: 1,
      },
      {
        title: "Xoá quyền truy cập POP3 và IMAP",
        isKey: false,
        idx: 2,
      },
      {
        title: "Enable login được mã hóa",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quét cổng",
      },
      {
        title: "Thiết lập “Danh sách truy cập thư mục LDAP”",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Phát hiện xâm nhập",
        isKey: false,
      },
      {
        idx: 3,
        title: "DNS",
        isKey: false,
      },
    ],
    title:
      "Điều gì có thể được thiết lập trên một server DHCP để ngăn chặn các máy trạm trái phép lấy được một địa chỉ IP từ server ?",
    idx: 59,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 60,
    title: "Văn bản sau khi được mã hóa, được gọi là gì ?",
    answers: [
      {
        idx: 0,
        title: "Chứng chỉ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Mật mã đối xứng",
      },
      {
        idx: 2,
        isKey: false,
        title: "Khóa công khai",
      },
      {
        title: "Văn bản mã",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Hiệu quả",
      },
      {
        isKey: false,
        idx: 1,
        title: "Bảo mật",
      },
      {
        isKey: false,
        title: "Toàn vẹn",
        idx: 2,
      },
      {
        title: "Không chối từ",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Đặc tính nào sau đây không thuộc chức năng bảo mật thông tin trong các hệ thống mật mã ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 61,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Không đối xứng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Đối xứng",
      },
      {
        title: "RSA",
        isKey: false,
        idx: 2,
      },
      {
        title: "Diffie-Hellman",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Ở hệ mật mã nào người gửi và người nhận thông điệp sử dụng cùng một khóa mã khi mã hóa và giải mã ?",
    idx: 62,
  },
  {
    answers: [
      {
        idx: 0,
        title: "DSA",
        isKey: false,
      },
      {
        title: "ECC",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "3DES",
      },
      {
        idx: 3,
        isKey: true,
        title: "AES",
      },
    ],
    idx: 63,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Chuẩn nào sau đây được chính phủ Mỹ sử dụng thay thế cho DES như là một chuẩn mã hoá dữ liệu?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 64,
    answers: [
      {
        isKey: false,
        title: "Skipjack",
        idx: 0,
      },
      {
        idx: 1,
        title: "Blowfish",
        isKey: false,
      },
      {
        isKey: true,
        title: "Không đối xứng",
        idx: 2,
      },
      {
        idx: 3,
        title: "Đối xứng",
        isKey: false,
      },
    ],
    title:
      "Ở hệ mật mã nào người gửi và người nhận thông điệp sử dụng các khóa khác nhau khi mã hóa và giải mã ?",
  },
  {
    title:
      "Các giao thức mã hóa và các thuật toán nào sau đây được sử dụng như là nền tảng của hạ tầng cơ sở hạ tầng khóa công khai (PKI)?",
    idx: 65,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "MD4",
        isKey: false,
      },
      {
        title: "SHA",
        isKey: false,
        idx: 1,
      },
      {
        title: "Diffie-Hellman",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Skipjack",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tấn công vào ngày sinh",
        idx: 0,
      },
      {
        isKey: true,
        title: "Xung đột",
        idx: 1,
      },
      {
        title: "Chữ ký số",
        idx: 2,
        isKey: false,
      },
      {
        title: "Khóa công khai",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Khi giá trị hàm băm của hai thông điệp khác nhau có giá trị tương tự nhau, ta gọi hiện tượng này là gì ?",
    idx: 66,
  },
  {
    idx: 67,
    answers: [
      {
        isKey: true,
        title: "Quyền cấp chứng chỉ (Certificate Authority)",
        idx: 0,
      },
      {
        title: "Quyền đang ký (Registation Authority)",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chính phủ (NSA)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "PKI",
        idx: 3,
      },
    ],
    title:
      "Thực thể nào sau đây cho phép phát hành , quản lý, và phân phối các chứng chỉ số ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Tính hợp lệ của một chứng chỉ dựa vào điều gì ?",
    idx: 68,
    answers: [
      {
        title: "Tính hợp lệ của Quyền cấp chứng chỉ (CA)",
        idx: 0,
        isKey: true,
      },
      {
        title: "Tính hợp lệ của người sở hữu",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tính hợp lệ của khóa công khai",
      },
      {
        title: "Giai đoạn chứng chỉ được sử dụng",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        title: "Các chính sách thu hồi chứng chỉ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Các ngày hợp lệ",
        idx: 1,
      },
      {
        title: "Khóa cá nhân",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Chứng thực gốc ( Root Certificate)",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 69,
    title:
      "Trong một mô hình phân cấp ủy thác giữa các tổ chức chứng thực và các người dùng cuối, mô hình nào sau đây được coi là xu hướng chung của việc phát hành chứng chỉ?",
  },
  {
    idx: 70,
    title:
      "Khi ta lưu giữ một khóa cá nhân trên đĩa cứng cục bộ, làm thế nào để bảo đảm là nó được bảo mật ?",
    answers: [
      {
        idx: 0,
        title: "Cần bảo vệ bằng mật khẩu",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Lưu trữ dữ liệu sao lưu vào đĩa mềm",
      },
      {
        isKey: false,
        idx: 2,
        title: "Lưu trữ bản sao trong bì thư",
      },
      {
        title: "Lưu trữ nó trong một thư mục tương tự như khóa công khai",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 71,
    title:
      "Cách nào sau đây được coi là an toàn nhất để lưu trữ một khóa cá nhân ?",
    answers: [
      {
        title: "Lưu nó trên ổ cứng ở dạng bản rõ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Niêm phong nó trong một bao thư và để nó trong ngăn bàn",
      },
      {
        idx: 2,
        isKey: true,
        title: "Mã hóa nó trên một thẻ thông minh",
      },
      {
        isKey: false,
        title: "Lưu nó trên một thiết bị USB di dộng ở dạng bản rõ",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Một quản trị mạng mới đây đã bị sa thải khỏi công ty. Cần phải làm gì với chứng chỉ hiện hành của họ ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 72,
    answers: [
      {
        isKey: false,
        title: "Làm mới lại đối với người quản trị mới",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Thu hồi lại chứng chỉ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Đình chỉ tạm thời",
      },
      {
        title: "Hết hiệu lực",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 73,
    title:
      "Các phương pháp sinh trắc học nào sau đây được coi là an toàn nhất ?",
    answers: [
      {
        title: "Phân tích chữ ký",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Quét tiếng nói",
      },
      {
        idx: 2,
        isKey: true,
        title: "Lấy dấu bàn tay / Lấy dấu ngón tay",
      },
      {
        idx: 3,
        isKey: false,
        title: "Không quan trọng",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        title: "Nói với đồng nghiệp để mắt đến máy tính xách tay",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Log out khỏi máy tính xách tay",
      },
      {
        idx: 2,
        title: "Shut down và đóng máy lại",
        isKey: false,
      },
      {
        title:
          "Chắc chắn rằng máy tính xách tay của ta được bảo vệ trên bàn làm việc hay được khóa trong cabin",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 74,
    title:
      "Khi kết thúc công việc trên máy tính xách tay và ra ngoài khoảng 1 tiếng vào buổi trưa. Ta nên làm gì trước khi ra ngoài ?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Một user gọi điện đến cho ta (với tư cách là người quản lý) thông báo họ bị mất mật khẩu và cần truy cập ngay lập tức. Ta nên làm gì ?",
    answers: [
      {
        title:
          "Cung cấp truy cập ngay lập tức, và sau đó kiểm tra chứng cứ của họ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tạo một login và mật khẩu tạm thời để họ sử dụng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Xác minh định danh của họ trước khi cấp quyền truy cập",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Cho họ một mật khẩu riêng tạm thời",
      },
    ],
    idx: 75,
  },
  {
    idx: 76,
    answers: [
      {
        title: "Dự phòng nguồn điện của máy phát điện",
        isKey: false,
        idx: 0,
      },
      {
        title: "UPS",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Ổn áp",
      },
      {
        idx: 3,
        isKey: false,
        title: "Thanh nguồn điện",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Trong khoảng thời gian nguồn điện bị sụt áp do quá tải bất thường, các thiết bị nào sau đây là hữu dụng nhất trong việc duy trì các mức nguồn điện thích hợp ?",
  },
  {
    idx: 77,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "MAC",
        isKey: true,
      },
      {
        idx: 1,
        title: "DAC",
        isKey: false,
      },
      {
        idx: 2,
        title: "RBAC",
        isKey: false,
      },
      {
        idx: 3,
        title: "Các mã thông báo bảo mật",
        isKey: false,
      },
    ],
    title:
      "Quản trị văn phòng của bạn đang được huấn luyện để thực hiện sao lưu máy chủ. Phương pháp xác thực nào là lý tưởng đối với tình huống này ?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Phương pháp xác thực nào sử dụng một KDC để thực hiện xác thực ?",
    answers: [
      {
        title: "Chap",
        isKey: false,
        idx: 0,
      },
      {
        title: "Kerberos",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Sinh trắc học",
        idx: 2,
      },
      {
        isKey: false,
        title: "Thẻ thông minh",
        idx: 3,
      },
    ],
    idx: 78,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Kerberos",
      },
      {
        isKey: false,
        title: "Các mã thông báo bảo mật",
        idx: 1,
      },
      {
        isKey: false,
        title: "DAC",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "CHAP",
      },
    ],
    title:
      "Phương pháp xác thực nào gởi trả lại một “yêu cầu” (request) cho máy trạm và” yêu cầu” đó được mã hóa và gởi trở lại máy chủ ?",
    idx: 79,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Đa yếu tố ( multi-factor)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sinh trắc học",
      },
      {
        isKey: false,
        idx: 2,
        title: "Thẻ thông minh",
      },
      {
        isKey: false,
        title: "Keberos",
        idx: 3,
      },
    ],
    title:
      "Qui trình xác thực nào sử dụng nhiều hơn một yếu tố xác thực để logon ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 80,
  },
  {
    idx: 81,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Các giao thức hay các dịch vụ nào sau đây nên loại bỏ trong mạng nếu có thể ?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Email",
      },
      {
        idx: 1,
        isKey: false,
        title: "Telnet",
      },
      {
        isKey: false,
        idx: 2,
        title: "WWW",
      },
      {
        isKey: true,
        title: "ICMP",
        idx: 3,
      },
    ],
  },
  {
    title: "Mạng nào sau đây không phải là một vùng bảo mật ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 82,
    answers: [
      {
        isKey: false,
        title: "Internet",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Intranet",
      },
      {
        title: "Extranet",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "NAT",
      },
    ],
  },
  {
    answers: [
      {
        title: "NAT",
        idx: 0,
        isKey: true,
      },
      {
        title: "VLAN",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "DMZ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Extranet",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 83,
    title:
      "Các giao thức nào sau đây cho phép một tổ chức đưa một địa chỉ TCP/IP đơn lên Internet ?",
  },
  {
    answers: [
      {
        title: "Kiểm định",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Xác thực",
      },
      {
        idx: 2,
        title: "Kiểm soát truy cập",
        isKey: true,
      },
      {
        isKey: false,
        title: "Bảo mật dữ liệu",
        idx: 3,
      },
    ],
    idx: 84,
    title:
      "Phương pháp quét võng mạc thích hợp nhất đối với các dịch vụ nào sau đây ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Công nghệ nào sau đây dựa vào thuộc tính vật lý của user để xác thực ?",
    answers: [
      {
        title: "Thẻ thông minh",
        idx: 0,
        isKey: false,
      },
      {
        title: "Sinh trắc học",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Xác thực lẫn nhau",
        isKey: false,
      },
      {
        idx: 3,
        title: "Các mã thông báo",
        isKey: false,
      },
    ],
    idx: 85,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 86,
    title:
      "Kỹ thuật cho phép tạo kết nối ảo giữa hai mạng sử dụng một giao thức bảo mật được gọi là gì ?",
    answers: [
      {
        idx: 0,
        title: "Tunelling",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "VLAN",
      },
      {
        title: "Internet",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Extranet",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Đánh giá tài nguyên thông tin",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đánh giá rủi ro",
      },
      {
        idx: 2,
        title: "Nhận dạng chuỗi",
        isKey: false,
      },
      {
        idx: 3,
        title: "Quét các điểm yếu",
        isKey: false,
      },
    ],
    title:
      "Qui trình quyết định giá trị của thông tin hay thiết bị trong một tổ chức được gọi là gì?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 87,
  },
  {
    idx: 88,
    title:
      "Khi được hỏi về các mối đe dọa cho công ty từ phía các hacker. Loại thông tin nào sau đây sẽ giúp ích nhiều nhất ?",
    answers: [
      {
        idx: 0,
        title: "Xác minh tài sản sở hữu",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đánh giá rủi ro",
      },
      {
        title: "Nhận dạng mối đe dọa",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Các điểm yếu",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 89,
    title:
      "Khi một user báo cáo rằng hệ thống của anh ta đã phát hiện một virus mới. Điều gì sau đây cần làm như là bước đầu tiên để xử lý tình huống này ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        title: "Kiểm tra lại tập tin diệt virus hiện hành",
        idx: 0,
      },
      {
        title: "Định dạng lại đĩa cứng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Cài đặt lại hệ điều hành",
        isKey: false,
      },
      {
        idx: 3,
        title: "Disable tài khoản email của anh ta",
        isKey: true,
      },
    ],
  },
  {
    idx: 90,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Yếu tố nào sau đây được coi là hữu ích nhất trong việc kiểm soát truy cập khi bị tấn công từ bên ngoài ?",
    answers: [
      {
        title: "Đăng nhập hệ thống ( System logs)",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Phần mềm antivirus",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kerberos",
      },
      {
        idx: 3,
        title: "Sinh trắc học",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 91,
    title:
      "Ta muốn cài đặt một máy chủ cung cấp các dịch vụ Web đến các máy trạm thông qua Internet. Ta không muốn để lộ mạng bên trong để tránh rủi ro. Phương pháp nào để thực hiện điều này ?",
    answers: [
      {
        title: "Cài đặt máy chủ trong mạng Intranet",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Cài đặt máy chủ trong một DMZ",
      },
      {
        title: "Cài đặt máy chủ trong một VLAN",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Cài đặt máy chủ trong mạng Extranet",
      },
    ],
  },
  {
    title:
      "Phương pháp xác thực nào cung cấp tài liệu đáng tin cậy có hiệu lực trong suốt một phiên làm việc đơn ?",
    idx: 92,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Các mã thông báo",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Chứng chỉ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thẻ thông minh",
      },
      {
        idx: 3,
        title: "Kerberos",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        title: "DoS",
        idx: 0,
      },
      {
        idx: 1,
        title: "Sâu",
        isKey: false,
      },
      {
        isKey: false,
        title: "Logic Bomb (bomb ngập lụt đường truyền)",
        idx: 2,
      },
      {
        title: "Social engineering (Khai thác giao tiếp)",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 93,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Loại tấn công nào làm việc truy cập của user đến các tài nguyên mạng bị từ chối?",
  },
  {
    title:
      "Loại tấn công nào sử dụng nhiều hơn một máy tính để tấn công nạn nhân ?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "DoS",
      },
      {
        isKey: true,
        title: "DDoS",
        idx: 1,
      },
      {
        idx: 2,
        title: "Sâu",
        isKey: false,
      },
      {
        title: "Tấn công UDP",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 94,
  },
  {
    title:
      "Một máy chủ trên mạng có một chương trình đang chạy vượt quá thẩm quyền. Loại tấn công nào đã xảy ra ?",
    answers: [
      {
        title: "DoS",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "DDoS",
      },
      {
        title: "Back door",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Social engineering (Khai thác giao tiếp)",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 95,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Nổ lực tấn công để can thiệp vào một phiên liên lạc bằng việc thêm vào một máy tính giữa hai hệ thống được gọi là một …….?",
    idx: 96,
    answers: [
      {
        title: "Tấn công dạng “Man in the middle”",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Tấn công cửa sau",
        idx: 1,
      },
      {
        title: "Sâu",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "TCP/IP hijacking",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Tấn công dạng “Man in the middle”",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tấn công cửa sau",
        isKey: false,
      },
      {
        title: "Tấn công chuyển tiếp (Relay Attack)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "TCP/IP hijacking",
        isKey: true,
      },
    ],
    title:
      "Ta đã phát hiện ra một chứng chỉ đã hết hiệu lực vẫn đang được sử dụng nhiều lần để giành được quyền logon. Đây là loại tấn công nào ?",
    idx: 97,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Một kẻ tấn công cố gắng dùng địa chỉ IP để tạo một hệ thống khác trong mạng của ta nhằm giành quyền kiểm soát truy cập . Đây là loại tấn công nào ?",
    answers: [
      {
        isKey: false,
        title: "Tấn công dạng “Man in the middle”",
        idx: 0,
      },
      {
        title: "Tấn công cửa sau",
        isKey: false,
        idx: 1,
      },
      {
        title: "Sâu",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "TCP/IP hijacking",
      },
    ],
    idx: 98,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Tấn công TCP ACK (tấn công kiểu SYNACK)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Tấn công smurf",
      },
      {
        idx: 2,
        title: "Tấn công virus",
        isKey: false,
      },
      {
        title: "TCP/IP hijacking",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một máy chủ trên mạng không chấp nhận các kết nối TCP nữa. Máy chủ thông báo rằng nó đã vượt quá giới hạn của phiên làm việc. Loại tấn công nào có thể đang xảy ra ?",
    idx: 99,
  },
  {
    idx: 100,
    title: "Tấn công smurf sử dụng giao thức nào để kiểm soát ?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "TCP",
      },
      {
        title: "IP",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "UDP",
      },
      {
        title: "ICMP",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Giả mạo",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tấn công chuyển tiếp",
        isKey: false,
      },
      {
        idx: 2,
        title: "Social engineering (Khai thác giao tiếp)",
        isKey: false,
      },
      {
        isKey: false,
        title: "Trojan",
        idx: 3,
      },
    ],
    idx: 101,
    title:
      "Tổ đặc trách thông báo rằng họ đã nhận một cuộc gọi khẩn cấp từ phó chủ tịch đêm qua yêu cầu logon vào ID và mật khẩu của ông ta. Đây là loại tấn công gì ?",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Logic Bomb",
      },
      {
        title: "Sâu",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Virus",
        idx: 2,
      },
      {
        title: "Tấn công ACK",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Hệ thống của bạn đã ngừng phản ứng lại với các lệnh của bàn phím. Lưu ý rằng điều này xảy ra khi mở bảng tính và đã quay số qua internet. Loại tấn công nào có thể đã xảy ra ?",
    idx: 102,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Loại virus tự che giấu nó bằng cách ẩn trong mã nguồn của các phần mềm antivirus được gọi là gì ?",
    idx: 103,
    answers: [
      {
        isKey: false,
        title: "Armored virus",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Polymorphic virus",
      },
      {
        idx: 2,
        isKey: false,
        title: "Sâu",
      },
      {
        idx: 3,
        title: "Stealth virus (Virus ẩn danh)",
        isKey: false,
      },
    ],
  },
  {
    idx: 104,
    answers: [
      {
        idx: 0,
        title: "Virus Trojan",
        isKey: false,
      },
      {
        isKey: true,
        title: "Stealth virus (virus ẩn danh)",
        idx: 1,
      },
      {
        title: "Sâu",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Polymorphic virus",
      },
    ],
    title:
      "Một virus được đính kèm chính nó vào boot sector của đĩa cứng và thông báo thông tin sai về kích thước các tập tin được gọi là gì ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 105,
    answers: [
      {
        idx: 0,
        title: "Trojan Horse",
        isKey: true,
      },
      {
        idx: 1,
        title: "Polymorphic virus",
        isKey: false,
      },
      {
        isKey: false,
        title: "Sâu",
        idx: 2,
      },
      {
        isKey: false,
        title: "Armored virus",
        idx: 3,
      },
    ],
    title:
      "Một chương trình nằm trong một chương trình khác được cài vào hệ thống gọi là một …….",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Các user nội bộ báo cáo hệ thống của họ bị lây nhiễm nhiều lần. Trong mọi trường hợp virus có vẻ là cùng một loại. Thủ phạm thích hợp nhất là gì ?",
    idx: 106,
    answers: [
      {
        title: "Máy chủ có thể là vật mang virus",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Ta có một sâu virus",
        idx: 1,
      },
      {
        title: "Phần mềm antivirus của ta bị sự cố",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tấn công DoS đang thực hiện",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 107,
    title:
      "Các log file trên hệ thống của bạn phát hiện một nổ lực giành quyền truy cập đến một tài khoản đơn. Nổ lực này đã không thành công vào thời điểm đó. Theo kinh nghiệm của bạn thì loại tấn công thích hợp nhất là gì ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "Tấn công đoán mật khẩu (Password Guessing)",
        isKey: true,
      },
      {
        title: "Tấn công cửa sau",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tấn công bằng sâu",
      },
      {
        title: "TCP/IP hijacking",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Một user báo cáo là anh ta đang nhận một lỗi chỉ ra rằng địa chỉ TCP/IP của anh ta đã bị sử dụng khi anh ta bật máy tính. Tấn công nào có thể đang thực hiện ?",
    idx: 108,
    answers: [
      {
        title: "Tấn công dạng “Man in the middle”",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tấn công cửa sau",
        isKey: false,
        idx: 1,
      },
      {
        title: "Sâu",
        isKey: false,
        idx: 2,
      },
      {
        title: "TCP/IP hijacking",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Khả năng ổ đĩa ngừng hoạt động sắp xảy ra",
      },
      {
        isKey: true,
        title: "Một virus đang phát tán rộng trong hệ thống",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hệ thống của bạn đang chịu tác động của tấn công DoS",
      },
      {
        title: "Tấn công TCP/IP hijacking đang cố gắng thực hiện",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 109,
    title:
      "Một đêm làm việc khuya và bạn phát hiện rằng ổ cứng của bạn hoạt động rất tích cực mặc dù bạn không thực hiện bất kỳ thao tác nào trên máy tính. Bạn nghi ngờ điều gì?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tấn công khai thác phần mềm (Software exploitation attack)",
      },
      {
        isKey: false,
        title: "Tấn công cửa sau ( Back door Attack))",
        idx: 1,
      },
      {
        isKey: false,
        title: "Sâu (Worm)",
        idx: 2,
      },
      {
        title: "TCP/IP hijacking",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Bản ghi lỗi hệ thống email của bạn báo cáo một số lượng lớn các nổ lực logon không thành công. Loại tấn công nào có thể đang xảy ra ?",
    idx: 110,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Ngăn chặn các gói trái phép đi vào từ mạng bên ngoài",
        idx: 0,
        isKey: true,
      },
      {
        title: "Cho phép tất cả các gói rời mạng",
        idx: 1,
        isKey: false,
      },
      {
        title: "Cho phép tất cả các gói đi vào mạng",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Loại trừ sự xung đột trong mạng",
        idx: 3,
      },
    ],
    title: "Bộ lọc gói thực hiện chức năng nào ?",
    idx: 111,
  },
  {
    title: "Thiết bị nào lưu trữ thông tin về đích đến trong mạng ?",
    answers: [
      {
        idx: 0,
        title: "Hub",
        isKey: false,
      },
      {
        idx: 1,
        title: "Modem",
        isKey: false,
      },
      {
        idx: 2,
        title: "Firewall",
        isKey: false,
      },
      {
        title: "Router",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 112,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Giao thức nào được sử dụng rộng rãi hiện nay như là một giao thức truyền tải đối với các kết nối quay số trên Internet ?",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "SLIP",
      },
      {
        isKey: false,
        idx: 1,
        title: "PPP",
      },
      {
        idx: 2,
        isKey: false,
        title: "PPTP",
      },
      {
        isKey: false,
        title: "L2TP",
        idx: 3,
      },
    ],
    idx: 113,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Giao thức nào sau đây không phù hợp đối với các kết nối VPN WAN ?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "PPP",
      },
      {
        isKey: false,
        idx: 1,
        title: "PPTP",
      },
      {
        idx: 2,
        title: "L2TP",
        isKey: false,
      },
      {
        idx: 3,
        title: "IPSec",
        isKey: false,
      },
    ],
    idx: 114,
  },
  {
    title:
      "Giao thức nào sau đây tuy không phải là một giao thức đường hầm nhưng nó sử dụng các giao thức đường hầm để bảo mật trên mạng?",
    answers: [
      {
        idx: 0,
        title: "IPSec",
        isKey: true,
      },
      {
        title: "PPTP",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "L2TP",
      },
      {
        idx: 3,
        title: "L2F",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 115,
  },
  {
    idx: 116,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "TCP và port number",
      },
      {
        title: "UDP và port number",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "IP và session number",
      },
      {
        title: "IP và port number",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Một socket là sự kết hợp của các thành phần nào ?",
  },
  {
    idx: 117,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Sniffer",
      },
      {
        isKey: false,
        title: "IDS",
        idx: 1,
      },
      {
        isKey: false,
        title: "Firewall",
        idx: 2,
      },
      {
        title: "Web browser",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Thiết bị nào giám sát lưu lượng mạng theo cách thụ động ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Hệ thống nào chủ động thực hiện việc giám sát mạng, phân tích và có thể thực hiện các bước phòng ngừa , bảo vệ mạng ?",
    idx: 118,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "IDS",
      },
      {
        isKey: false,
        title: "Sniffer",
        idx: 1,
      },
      {
        isKey: false,
        title: "Router",
        idx: 2,
      },
      {
        title: "Switch",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Hệ thống nào được cài đặt trên Host để cung cấp một tính năng IDS ?",
    answers: [
      {
        title: "Network sniffer",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "N-IDS (Network-based IDS)",
      },
      {
        idx: 2,
        title: "H-IDS (Host-based IDS)",
        isKey: true,
      },
      {
        idx: 3,
        title: "VPN",
        isKey: false,
      },
    ],
    idx: 119,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Khi kết nối giữa các thiết bị không dây đã hoàn tất , giao thức nào được sử dụng?",
    answers: [
      {
        title: "WEP",
        idx: 0,
        isKey: false,
      },
      {
        title: "WTLS",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "WAP",
      },
      {
        isKey: false,
        idx: 3,
        title: "WOP",
      },
    ],
    idx: 120,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Giao thức nào hoạt động trên 2.4GHz và có một dải băng thông rộng 1Mbps hay 2Mbps ?",
    idx: 121,
    answers: [
      {
        idx: 0,
        title: "802.11 //1Mbps hoặc 2Mbps với băng thông 2.4GHz",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "802.11a //54Mbps trong dải tần 5GHz",
      },
      {
        title: "802.11b //11Mbps trong băng thông 2.4GHz WIFI",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "802.11g //Tốc độ hơn 20Mbps trên băng thông 2.4GHz",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        title: "WAP",
        isKey: false,
        idx: 0,
      },
      {
        title: "WTLS",
        idx: 1,
        isKey: false,
      },
      {
        title: "WEP",
        isKey: true,
        idx: 2,
      },
      {
        title: "IR",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Giao thức nào được thiết kế để cung cấp bảo mật cho mạng không dây tương đương với việc bảo mật của một mạng diện rộng ?",
    idx: 122,
  },
  {
    title: "Điểm yếu nào sau đây là chủ yếu của môi trường mạng không dây ?",
    idx: 123,
    answers: [
      {
        title: "Phần mềm giải mã (Decryption software)",
        idx: 0,
        isKey: false,
      },
      {
        title: "IP spoofing (Giả mạo IP)",
        idx: 1,
        isKey: false,
      },
      {
        title: "A gap in the WAP (Một khe hở trong WAP)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Định vị nơi làm việc (Site survey)",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Nếu ta muốn xác thực chữ ký của một người khác, khóa nào phải được sử dụng?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 124,
    answers: [
      {
        idx: 0,
        title: "Khóa công khai của bạn",
        isKey: false,
      },
      {
        idx: 1,
        title: "Khoá cá nhân của bạn",
        isKey: false,
      },
      {
        title: "Khoá cá nhân của người cần xác thực",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Khoá công khai của người cần xác thực",
        isKey: true,
      },
    ],
  },
  {
    idx: 125,
    title: "Chữ ký số được sử dụng cho mục đích gì?",
    answers: [
      {
        isKey: false,
        title: "Để bảo mật tài liệu sao cho người ngoài không đọc được",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Để kiểm tra định danh người gửi",
      },
      {
        title: "Cung cấp chứng chỉ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Thu hồi một chứng chỉ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Nếu muốn xem một tài liệu “bảo mật”được mã hóa trên hệ mật bất đối xứng do người khác gởi đến , bạn phải sử dụng khóa nào để giải mật tài liệu?",
    idx: 126,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Khoá công khai của bạn",
      },
      {
        isKey: false,
        title: "Khoá công khai của bên gửi",
        idx: 1,
      },
      {
        title: "Khoá cá nhân của bên gửi",
        isKey: false,
        idx: 2,
      },
      {
        title: "Khoá cá nhân của bạn",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        title: "Khoá công khai của bạn",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Khoá công khai của bên nhận",
      },
      {
        isKey: false,
        idx: 2,
        title: "Khoá cá nhân của bên nhận",
      },
      {
        isKey: true,
        title: "Khoá cá nhân của bạn",
        idx: 3,
      },
    ],
    title:
      "Nếu ta muốn ký một tài liệu và sau đó gởi đến một người khác, khóa nào phải được sử dụng?",
    idx: 127,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title:
          "Lưu chương trình đó lại và dùng chương trình diệt virus để quét, nếu không phát hiện thấy virus, sẽ chạy chương trình đó để sửa lỗi.",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Mở chương trình và chạy nó ngay. Chương trình đó thật sự an toàn vì nó được gửi từ Microsoft",
      },
      {
        title:
          "Xoá email đó ngay. Mocrosoft và các nhà cung cấp không bao giờ gửi chương trình sửa lỗi qua email.",
        idx: 2,
        isKey: true,
      },
      {
        title: "xxx",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Bạn nhận được một email từ Microsoft, trong đó có một file đính kèm. Trong thư nói rằng có một số lỗi đã được phát hiện và sửa chữa , bạn phải chạy chương trình được đính kèm trong thư để sửa những lỗi đó. Trong trường hợp này bạn sẽ làm gì để bảo đảm an toàn?",
    idx: 128,
  },
  {
    idx: 129,
    title: "Hệ mật DES sử dụng khối khoá được tạo bởi :",
    answers: [
      {
        title: "56 bit ngẫu nhiên",
        idx: 0,
        isKey: false,
      },
      {
        title: "64 bit ngẫu nhiên",
        idx: 1,
        isKey: false,
      },
      {
        title: "128 bit ngẫu nhiên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "56 bit ngẫu nhiên và 8 bit kiểm tra “Parity”",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Hệ mật DES xử lý từng khối “ plain text ” có độ dài :",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "56 bit",
      },
      {
        idx: 1,
        isKey: false,
        title: "32 bit",
      },
      {
        idx: 2,
        isKey: true,
        title: "64 bit",
      },
      {
        isKey: false,
        idx: 3,
        title: "48 bit",
      },
    ],
    idx: 130,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 131,
    title: "Thuật giải SHA là :",
    answers: [
      {
        title: "Hàm băm một chiều",
        isKey: false,
        idx: 0,
      },
      {
        title: "Dùng trong thuật giải tạo chữ ký số",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Cho giá trị băm 160 bit",
        idx: 2,
      },
      {
        isKey: true,
        title: "Tất cả đều đúng",
        idx: 3,
      },
    ],
  },
  {
    idx: 132,
    title: "DSA là thuật giải :",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Lấy dấu tay “PrintingFinger”",
      },
      {
        idx: 1,
        isKey: true,
        title: "Tạo chữ ký số (DS)",
      },
      {
        title: "Phân phối khoá trước",
        idx: 2,
        isKey: false,
      },
      {
        title: "Bảo mật thông điệp",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "156 bit",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "256 bit",
      },
      {
        idx: 2,
        isKey: true,
        title: "128 bit",
      },
      {
        title: "512 bit",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Thuật giải MD5 cho ta một giá trị băm có độ dài :",
    idx: 133,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 134,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "(e = 12 , d =11)",
      },
      {
        isKey: false,
        title: "(e = 4 , d =11)",
        idx: 1,
      },
      {
        title: "( e = 7 , d =23)",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "( e = 3 , d =18)",
        idx: 3,
      },
    ],
    title:
      "Trong các cặp khoá sau đây của hệ mật RSA với p=5 ; q=7 , cặp khóa nào có khả năng đúng nhất :",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Bảo mật thông điệp",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Xác thực thông điệp",
      },
      {
        idx: 2,
        title: "Phân phối khoá trước cho hệ mật đối xứng",
        isKey: true,
      },
      {
        title: "Lấy chữ ký sô",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 135,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Thuật giải Difie Hellman dùng để :",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Kiểm soát truy cập phương tiện (Media access control)",
        isKey: false,
      },
      {
        isKey: false,
        title: "Kiểm soát truy cập bắt buộc (Mandatory access control)",
        idx: 1,
      },
      {
        isKey: true,
        title: "Mã xác thực thông điệp (Message authentication code)",
        idx: 2,
      },
      {
        idx: 3,
        title: "Các ủy ban đa tư vấn (Multiple advisory committees)",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "MAC là một từ cấu tạo bằng những chữ đầu của một nhóm nào liên quan đến mật mã ?",
    idx: 136,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Bảo mật",
      },
      {
        title: "Xác thực",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Toàn vẹn",
        idx: 2,
      },
      {
        title: "Truy cập",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Nội dung nào sau đây không cần sử dụng mật mã ?",
    idx: 137,
  },
  {
    answers: [
      {
        title: "Chuyển giao các khóa công khai an toàn",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chuy��n giao các khóa cá nhân an toàn",
      },
      {
        title: "Bảo mật dữ liệu ở hai đầu mút",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Sử dụng hai khóa khác nhau để mã hóa và giải mã",
        isKey: false,
      },
    ],
    idx: 138,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "PKC được thực hiện bằng cách sử dụng các chức năng nào ?",
  },
  {
    idx: 139,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Toàn vẹn",
      },
      {
        idx: 1,
        isKey: true,
        title: "Tính không chối từ ( non-repudiation)",
      },
      {
        idx: 2,
        isKey: false,
        title: "Xác thực",
      },
      {
        idx: 3,
        isKey: false,
        title: "Bảo mật",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Khái niệm nào sau đây được sử dụng để mô tả sự không thể chối từ của người gửi khi gửi thông điệp ?",
  },
  {
    title:
      "Khái niệm nào sau đây được dùng để xác định chuẩn thực thi các hệ thống mã hóa diện rộng?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 140,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "PKE",
      },
      {
        title: "PKI",
        idx: 1,
        isKey: true,
      },
      {
        title: "Đối xứng",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Không đối xứng",
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Tổ chức chính cấp phát chứng chỉ được gọi là :",
    idx: 141,
    answers: [
      {
        isKey: true,
        title: "CA",
        idx: 0,
      },
      {
        title: "RA",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "LRA",
      },
      {
        title: "CRL",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Hầu hết định dạng chứng chỉ công cộng được sử dụng trong môi trường PKI là gì ?",
    idx: 142,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "X.509",
        isKey: true,
      },
      {
        title: "X.508",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "PKE",
        idx: 2,
      },
      {
        isKey: false,
        title: "RSA",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Quy trình mã hoá nào sử dụng cùng một khoá mã ở cả hai phía của một phiên làm việc ?",
    idx: 143,
    answers: [
      {
        idx: 0,
        title: "Symmetrical",
        isKey: true,
      },
      {
        idx: 1,
        title: "Asymmetrical",
        isKey: false,
      },
      {
        idx: 2,
        title: "PKCS",
        isKey: false,
      },
      {
        title: "Split key",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 144,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "Symmetric",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Public/private",
      },
      {
        idx: 2,
        title: "Asymmetric/symmetric",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Private/private",
      },
    ],
    title: "PKCS sử dụng cặp khoá nào để mã hoá?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 145,
    title:
      "Giao thức nào sau đây tương tự như SSL và được đề nghị sử dụng bổ sung vào các giao thức bảo mật ?",
    answers: [
      {
        title: "TLS",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "SSH",
      },
      {
        isKey: false,
        idx: 2,
        title: "RSH",
      },
      {
        title: "X.509",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title: "Vấn đề gì nảy sinh khi sử dụng qui trình sinh khóa mã tập trung ?",
    answers: [
      {
        title: "Bảo mật mạng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Truyền khóa",
        idx: 1,
      },
      {
        isKey: false,
        title: "Thu hồi chứng chỉ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Bảo mật khóa cá nhân",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 146,
  },
  {
    title:
      "Giao thức nào sau đây cung cấp dịch vụ bảo mật cho các phiên làm việc trên thiết bị đầu cuối của hệ thống UNIX từ xa ?",
    idx: 147,
    answers: [
      {
        isKey: false,
        title: "SSL",
        idx: 0,
      },
      {
        title: "TLS",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "SSH",
        idx: 2,
      },
      {
        isKey: false,
        title: "PKI",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Dịch vụ nào sau đây là một dịch vụ đơn hay một máy phục vụ để lưu trữ, phân phối, và quản lý các khóa phiên mật mã ?",
    idx: 148,
    answers: [
      {
        idx: 0,
        title: "KDC",
        isKey: true,
      },
      {
        title: "KEA",
        idx: 1,
        isKey: false,
      },
      {
        title: "PKI",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "PKCS",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Bạn có một fille dữ liệu trên đĩa cứng , phương pháp nào theo bạn là tốt nhất để bảo mật dữ liệu đó",
    idx: 149,
    answers: [
      {
        isKey: true,
        title: "RSA",
        idx: 0,
      },
      {
        idx: 1,
        title: "DES",
        isKey: false,
      },
      {
        title: "DSA",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "SHA",
      },
    ],
  },
  {
    title: "Thuật giải SHA-1 dùng để :",
    idx: 150,
    answers: [
      {
        idx: 0,
        title: "Tạo khoá đối xứng",
        isKey: false,
      },
      {
        title: "Tạo chữ ký số",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Tạo một giá trị băm có độ dài cố định 160 bit",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tạo một giá trị băm có độ dài cố định 256 bit",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bảo mật một thông điệp",
      },
      {
        title: "Xác thực một thông điệp",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Phân phối khoá mật mã",
      },
      {
        idx: 3,
        title: "Kiểm tra tính toàn vẹn dữ liệu",
        isKey: true,
      },
    ],
    idx: 151,
    title: "Thuật giải MD5 dùng để :",
  },
  {
    title: "Trong DES mỗi hàm chọn Si được dùng để :",
    idx: 152,
    answers: [
      {
        title: "Biến đổi khối dữ liệu mã 48 bit thành 32 bit",
        idx: 0,
        isKey: false,
      },
      {
        title: "Biến đổi khối dữ liệu mã 6 bít thành 4 bít",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Biến đổi khối dữ liệu mã 16 bít thành 4 bít",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Biến đổi khối dữ liệu mã 32 bít thành 4 bít",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        idx: 0,
        title: "S = E( ek ,M)",
        isKey: false,
      },
      {
        title: "S = D( dk ,M)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "S = D(ek,M)",
      },
      {
        isKey: true,
        idx: 3,
        title: "S = E ( dk ,M)",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Trong hệ mã công khai RSA , để tạo một chữ ký điện tử của văn bản M ta dùng:",
    idx: 153,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 154,
    answers: [
      {
        title: "M = E( ek , S)",
        isKey: false,
        idx: 0,
      },
      {
        title: "M = D( dk ,S)",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "M = D(ek , S)",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "M = E (dk ,S)",
      },
    ],
    title:
      "Trong hệ mã công khai RSA , để chứng thực chữ ký điện tử S của văn bản M ta dùng:",
  },
  {
    idx: 155,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        title: "Mã nguồn độc hại",
        idx: 0,
      },
      {
        title: "Giả mạo IP",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Tấn công dạng “Man in the middle”",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tấn công chuyển tiếp",
        isKey: false,
      },
    ],
    title: "Điều nào sau đây là điểm yếu của IP ?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 156,
    answers: [
      {
        isKey: false,
        title: "In dấu chân",
        idx: 0,
      },
      {
        title: "Quét mạng",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Thiết bị làm nhiễu",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Liệt kê",
      },
    ],
    title: "Qui trình xác định topology của mạng được gọi là gì ?",
  },
  {
    answers: [
      {
        isKey: true,
        title: "In dấu chân",
        idx: 0,
      },
      {
        title: "Quét",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thiết bị làm nhiễu",
        isKey: false,
        idx: 2,
      },
      {
        title: "Liệt kê",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Qui trình xác định vị trí và các thông tin mạng được gọi là gì ?",
    idx: 157,
  },
  {
    title:
      "Qui trình chiếm quyền truy cập đến tài nguyên mạng (đặc biệt như là các tập tin user và nhóm) được gọi là gì ?",
    idx: 158,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "In dấu chân",
      },
      {
        idx: 1,
        title: "Quét",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Thiết bị làm nhiễu",
      },
      {
        isKey: true,
        title: "Liệt kê",
        idx: 3,
      },
    ],
  },
  {
    idx: 159,
    title: "Qui trình phá vỡ một phiên làm việc IM được gọi là gì ?",
    answers: [
      {
        idx: 0,
        title: "Thiết bị làm nhiễu",
        isKey: true,
      },
      {
        title: "Truyền rộng rãi",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Phản ứng với rắc rối",
      },
      {
        title: "Khảo sát định vị",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Bạn mới nhận cuộc gọi từ một user IM trong văn phòng mà user này đang ghé thăm một website quảng cáo. User này đang phàn nàn rằng hệ thống của anh ta không phản ứng và hàng triệu trang web đang mở trên màn hình của anh ta. Loại tấn công này là gì ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 160,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "DoS",
      },
      {
        isKey: false,
        idx: 1,
        title: "Mã nguồn độc hại",
      },
      {
        isKey: false,
        title: "Giả mạo IP",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Khảo sát định vị",
      },
    ],
  },
  {
    title:
      "Có thể sử dụng mật mã để nhận biết tài liệu đã bị thay đổi hay không?",
    idx: 161,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Có",
        idx: 0,
        isKey: true,
      },
      {
        title: "Không",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: ".",
      },
      {
        idx: 3,
        title: ".",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "Sử dụng các phần cứng hệ thống và mạng đắt tiền",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sử dụng tường lửa và các phần mềm quét virus",
      },
      {
        isKey: false,
        title: "Sử dụng các hệ thống ngăn chặn và phát hiện tấn công, đột nhập",
        idx: 2,
      },
      {
        idx: 3,
        title: "Sử dụng nhiều lớp bảo vệ có chiều sâu",
        isKey: true,
      },
    ],
    idx: 162,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Nguyên tắc đảm bảo an toàn thông tin, hệ thống và mạng là:",
  },
  {
    title: "Đâu là một phương pháp mã hóa:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 163,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thay thế",
      },
      {
        isKey: false,
        idx: 1,
        title: "Đổi chỗ/ hoán vị",
      },
      {
        idx: 2,
        title: "Vernam",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả các phương án trên",
      },
    ],
  },
  {
    idx: 164,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Mã hóa khóa bí mật và hàm băm có khóa MAC",
      },
      {
        idx: 1,
        isKey: false,
        title: "Mã hóa khóa bí mật và chữ ký số",
      },
      {
        idx: 2,
        isKey: false,
        title: "Mã hóa khóa bí mật và mã hóa khóa công khai",
      },
      {
        isKey: false,
        title: "Mã hóa khóa bí mật và hàm băm không khóa MDC",
        idx: 3,
      },
    ],
    title:
      "Giao thức bảo mật SSL đảm bảo tính bí mật, toàn vẹn và xác thực thông điệp bằng các kỹ thuật nào sau đây:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cả public key và private key đều cần giữ bí mật",
      },
      {
        isKey: false,
        title: "Có thể công khai public key và cần giữ bí mật private key",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Có thể công khai private key và cần giữ bí mật public key",
      },
      {
        title:
          "Có thể công khai public key nhưng phải đảm bảo tính xác thực và cần giữ bí mật private key",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Các hệ mã hóa khóa công khai sử dụn một cặp khóa: public key và private key. Các yêu cầu đối với public key và private key là:",
    idx: 165,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Sâu SQL Slammer là sâu tấn công các hệ thống mạng lợi dụng lỗ hổng tràn bộ đệm ở:",
    idx: 166,
    answers: [
      {
        idx: 0,
        title: "Máy chủ CSDL Microsoft SQL Server 2008",
        isKey: false,
      },
      {
        title: "Hệ điều hành Microsoft Windows 2003",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Máy chủ CSDL Microsoft SQL Server 2005",
        idx: 2,
      },
      {
        idx: 3,
        title: "Máy chủ CSDL Microsoft SQL Server 2000",
        isKey: true,
      },
    ],
  },
  {
    title: "Kích thức khóa có thể của hệ mã hóa AES là:",
    idx: 167,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: true,
        title: "128, 160 và 192 bit",
        idx: 0,
      },
      {
        title: "64, 128 và 192 bit",
        idx: 1,
        isKey: false,
      },
      {
        title: "128, 256 và 512 bit",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "128, 256 và 384 bit",
      },
    ],
  },
  {
    title:
      "Các lỗ hổng tồn tại phổ biến trong hệ điều hành và các phần mềm ứng dụng là:",
    idx: 168,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Lỗi tràn bộ đệm và lỗi không kiểm tra đầu vào",
      },
      {
        idx: 1,
        title: "Lỗi tràn bộ đệm và cấu hình",
        isKey: false,
      },
      {
        idx: 2,
        title: "Lỗi cài đặt và quản trị",
        isKey: false,
      },
      {
        title: "Lỗi cài đặt và cấu hình",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title:
          "Giả mạo địa chỉ IP nguồn trong gói tin ICMP là địa chỉ máy đích và chúng gửi đến tất cả các máy trong mạng",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Giả mạo địa chỉ IP nguồn trong gói tin ICMP là địa chỉ máy đích và chúng gửi đến địa chỉ quảng bá của mạng",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Giả mạo địa chỉ IP nguồn trong gói tin ICMP là địa chỉ quảng bá và chúng gửi đến máy đích",
      },
      {
        title:
          "Tạo và gửi rất nhiều gòi tin ICMP giả mạo có kích thước lớn đến máy đích",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Phát biểu nào sau đây mô tả đúng nhất về kỹ thuật tấn công Smurf:",
    idx: 169,
  },
  {
    title:
      "An toàn hệ thống thông tin là việc làm đảm bảo các thuộc tính an ninh, an toàn nào của hệ thống thông tin:",
    idx: 170,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Bí mật, xác thực và điều khiển",
      },
      {
        idx: 1,
        title: "Bí mật, toàn vẹn và không chối bỏ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bí mật, xác thực và không chối bỏ",
      },
      {
        idx: 3,
        isKey: true,
        title: "Bí mật, toàn vẹn và sẵn dùng",
      },
    ],
  },
  {
    idx: 171,
    title:
      "Trong quá trình thiết lập một phiên kết nối TCP (TCP three-way handshake) thứ tự các gói tin được gửi đi như thế nào?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SYN, URG, ACK",
      },
      {
        idx: 1,
        isKey: false,
        title: "SYN, ACK, SYN-ACK",
      },
      {
        idx: 2,
        title: "SYN, SYN-ACK, ACK",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "FIN, FIN-ACK, ACK",
      },
    ],
  },
  {
    answers: [
      {
        title: "Chiếm quyền điều khiển hệ thống",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chèn, xóa hoặc sửa đổi dữ liệu",
      },
      {
        title: "Đánh cắp các thông tin trong CSDL",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tấn công thay đổi hình ảnh giao diện",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 172,
    title:
      "Khi một website tồn tại lỗ hổng SQL Injection, nguy cơ cao nhất có thể xảy ra là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        title: "Có khả năng phá hoại lớn hơn so với virus",
        idx: 0,
        isKey: false,
      },
      {
        title: "Có khả năng tự lay lan mà không cần vật chủ hoặc tác nhân",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Có khả năng lây lan nhanh chóng bằng nhiều phương pháp khác nhau",
      },
      {
        isKey: false,
        idx: 3,
        title: "Có khả năng chiếm quyền điều khiển hệ thống",
      },
    ],
    idx: 173,
    title: "Đặc trưng cơ bản khác biệ của worm với virus là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: true,
        title: "RSA an toàn hơn DSA",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "DSA an toàn hơn RSA",
      },
      {
        title: "DSA có chi phí tính toán thấp hơn RSA",
        idx: 2,
        isKey: false,
      },
      {
        title: "Giải thuật DSA đơn giản hơn giải thuật RSA",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 174,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Sự khác biệt giữa hệ chữ ký số RSA và DSA là:",
  },
  {
    title: "Kích thước khóa hiệu dụng của hệ mã hóa DES là:",
    idx: 175,
    answers: [
      {
        isKey: false,
        title: "64 bit",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "48 bit",
      },
      {
        idx: 2,
        title: "56 bit",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "128 bit",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Phần xử lý chính của SHA1 làm việc trên một chuỗi được gọi là state. Kích thước của state là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 176,
    answers: [
      {
        title: "160 bit",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "170 bit",
      },
      {
        isKey: false,
        title: "150 bit",
        idx: 2,
      },
      {
        title: "180 bit",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title: "Sự khác biệt cơ bản giữa tấn công DoS và tấn công DDoS là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "DoS chỉ gây ngập lụt đường truyền",
      },
      {
        title: "DDoS chỉ làm cạn kiệt tài nguyên máy chủ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Số hosts tham gia tấn công",
        isKey: true,
      },
      {
        isKey: false,
        title: "Cơ chế tấn công DDoS phức tạp hơn",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 177,
  },
  {
    idx: 178,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Số lượng vòng lặp chuyển đổi cần thực hiện để chuyển bản rõ thành bản mã trong hệ mã hóa AES khóa 128 bit là:",
    answers: [
      {
        title: "14",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "10",
      },
      {
        title: "16",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "12",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Vulnerability Scan",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Session Hijacking",
      },
      {
        idx: 2,
        isKey: true,
        title: "Port Scan",
      },
      {
        title: "IP sweep",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 179,
    title:
      "Loại tấn công nào sau đây cung cấp cho tin tặc những thông tin hữu ích về các dịch vụ đang chạy trên hệ thống?",
  },
  {
    idx: 180,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Trộn hai cột kề nhau của ma trận state",
      },
      {
        title: "Mỗi cột của ma trận state được nhân với một đa thức",
        idx: 1,
        isKey: true,
      },
      {
        title: "Trộn các cột tương ứng của ma trận state với khóa",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Trộn các dòng tương ứng của ma trận state với khóa",
      },
    ],
    title:
      "Bước MixColumns (trộn cột) trong vòng lặp chuyển đổi trong hệ mã hóa AES thực hiện việc:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Sử dụng từ điển để tấn công đánh cắp mật khẩu của người dùng",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Tấn công vào thói quen sử dụng các từ đơn giản có trong từ điển làm mật khẩu",
      },
      {
        idx: 2,
        title: "Nghe trộm để đánh cắp mật khẩu",
        isKey: false,
      },
      {
        title:
          "Thử tất cả các khả năng kiểu vét cạn để tìm mật khẩu của người dùng",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Tấn công dựa trên từ điển là:",
    idx: 181,
  },
  {
    answers: [
      {
        title: "Virus, worm, adware",
        isKey: false,
        idx: 0,
      },
      {
        title: "Virus, backdoor, worm",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Virus, worm, zombie",
      },
      {
        title: "Virus, trojan horse, worm",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Các phần mềm độc hại nào sau đây có khả năng tự nhân bản:",
    idx: 182,
  },
  {
    answers: [
      {
        title: "Tất cả các bên",
        idx: 0,
        isKey: true,
      },
      {
        title: "Khách hàng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Cổng giao dịch",
      },
      {
        title: "Người bán",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 183,
    title:
      "SET là giao thức bảo mật dùng trong các giao dịch điện tử. Với SET, những bên nào tham gia giao dịch phải có chứng chỉ số:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 184,
    title: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy cập MAC:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title:
          "MAC cấp quyền truy cập dựa trên tính nhạy cảm của những thông tin và chính sách quản trị",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "MAC là cơ chế điều khiển truy cập được sử dụng rộng rãi nhất",
        isKey: false,
      },
      {
        idx: 2,
        title:
          "MAC cho phép người tạo ra đối tượng có thể cấp quyền truy cập cho người dùng khác",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "MAC quản lý truyền quy cập chặt chẽ hơn các cơ chế khác",
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 185,
    answers: [
      {
        idx: 0,
        title: "Mã hóa khóa bí mật an toàn hơn mã hóa khóa công khai",
        isKey: false,
      },
      {
        isKey: false,
        title: "Mã hóa khóa bí mật chỉ hoạt động theo chế độ mã hóa khối",
        idx: 1,
      },
      {
        isKey: true,
        title:
          "Mã hóa khóa bí mật sử dụng một mã (key) cho cả quá trình mã hóa và giải mã",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Mã hóa khóa bí mật có thuật toán đơn giản hơn mã hóa khóa công khai",
      },
    ],
    title: "Phát biểu nào sau đây đúng với kỹ thuật mã hóa khóa bí mật",
  },
  {
    title: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy cập RBAC:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "RBAC cho phép người tạo ra đối tượng có thể cấp quyền truy cập cho người dùng khác",
      },
      {
        title:
          "RBAC cấp quyền truy cập dựa trên tính nhạy cảm của thông tin và chính sách quản trị",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "RBAC cấp quyền truy cập dựa trên vai trò của người dùng trong tổ chức",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "RBAC là cơ chế điều khiển truy cập được sử dụng rộng rãi nhất",
      },
    ],
    idx: 186,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "An toàn thông tin (Information Security) là:",
    idx: 187,
    answers: [
      {
        title: "Việc đảm bảo an toàn cho hệ thống máy tính",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Việc phòng chống tấn công, đột nhập vào hệ thống máy tính và mạng",
      },
      {
        isKey: false,
        title:
          "Việc bảo vệ chống truy nhập, sử dụng, tiết lộ, sử đổi, hoặc phá hủy thông tin một cách trái phép",
        idx: 2,
      },
      {
        idx: 3,
        title: "Việc đảm bảo an toàn cho hệ thống mạng",
        isKey: false,
      },
    ],
  },
  {
    idx: 188,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Nguyên nhân chính của lỗ hổng an ninh cho phép tấn công thực hiện mã từ xa là:",
    answers: [
      {
        title: "Lỗi thiết kế phần mềm",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lỗi quản trị hệ thống",
      },
      {
        title: "Lỗi lập trình phần mềm",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lỗi tích hợp hệ thống",
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Các quyền truy cập vào đối tượng cho mỗi người dùng được quản lý riêng rẽ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Mỗi người dùng được gán một danh sách các đối tượng kèm theo quyền truy cập",
      },
      {
        title:
          "Các quyền truy cập vào đối tượng cho mỗi người dùng được quản lý trong một ma trận",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Mỗi đối tượng được gán một danh sách người dùng kèm theo quyền truy cập",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 189,
    title:
      "Danh sách điều khiển truy nhập ACL thực hiện việc cấp quyền truy cập đến các đối tượng cho người dùng bằng cách:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 190,
    answers: [
      {
        title:
          "DAC cho phép người tạo ra đối tượng có thể cấp quyền quy cập ch o người dùng khác",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "DAC cấp quyền truy cập dựa trên tính nhạy cảm của thông tin và chính sách quản trị",
      },
      {
        title: "DAC quản lý quyền truy cập chặt chẽ hơn các cơ chế khác",
        isKey: false,
        idx: 2,
      },
      {
        title: "DAC là cơ chế điều khiển truy cập được sử dụng rộng rãi nhất",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy cập DAC:",
  },
  {
    title:
      "Loại tấn công nào sau đây chiếm quyền truy cập đến tài nguyên lợi dụng cơ chế điều khiển truy cập DAC?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "Phishing",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "DAC cấp quyền truy cập dựa trên tính nhạy cảm của thông tin và Trojan horse",
      },
      {
        isKey: false,
        title: "Spoofing",
        idx: 2,
      },
      {
        title: "Man in the middle",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 191,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Phương pháp xác thực nào dưới đây cung cấp khả năng xác thực có độ an toàn cao nhất?",
    answers: [
      {
        idx: 0,
        title: "Sử dụng mật khẩu",
        isKey: false,
      },
      {
        title: "Sử dụng Smartcard",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sử dụng chứng chỉ số",
      },
      {
        title: "Sử dụng vân tay",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 192,
  },
  {
    idx: 193,
    answers: [
      {
        title: "Các file tài liệu dạng PDF",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Các file tài liệu của bộ chương trình Open Office",
        isKey: false,
      },
      {
        title: "Các file ảnh dạng JPG",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Các file tài liệu của bộ chương trình MS Office",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Macro virus là virus lây nhiễm trong:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 194,
    title: "Phát biểu nào sau đây đúng với tường lửa",
    answers: [
      {
        title: "Tường lửa không thể ngăn chặn các tấn công hướng dữ liệu",
        isKey: true,
        idx: 0,
      },
      {
        title: "Tường lửa có thể ngăn chặn mọi loại tấn công, đột nhập",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tường lửa có thể ngăn chặn mọi virus và phần mềm độc hại",
        idx: 2,
      },
      {
        title: "Tường lửa có thể ngăn chặn các loại thư rác",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Trong quá trình xử lý dữ liệu tạo chuỗi băm, số lượng vòng xử lý của SHA1 là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "60",
        idx: 0,
        isKey: false,
      },
      {
        title: "70",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "80",
        isKey: true,
      },
      {
        idx: 3,
        title: "90",
        isKey: false,
      },
    ],
    idx: 195,
  },
  {
    idx: 196,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title:
          "Luôn kiểm tra và cập nhật các bản vá an ninh cho hệ điều hành và các phần mềm ứng dụng",
        isKey: false,
      },
      {
        title:
          "Kiểm tra tất cả các dữ liệu đầu vào, đặc biệt dữ liệu nhập từ người dùng và từ các nguồn không tin cậy",
        idx: 1,
        isKey: true,
      },
      {
        title: "Cấu hình máy chủ CSDL không cho thực thi lệnh từ xa",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Không cho phép người dùng nhập mã vào các form.",
      },
    ],
    title:
      "Một trong các biện pháp hiệu quả phòng chống tấn công SQL Injection là:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "T hỗ trợ A xác thực thông tin nhận dạng với B, kèm theo thiết lập khóa",
      },
      {
        title: "T xác thực B",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "T xác thực A và B",
        isKey: false,
      },
      {
        idx: 3,
        title: "T xác thực A",
        isKey: false,
      },
    ],
    idx: 197,
    title:
      "Trong hệ thống Kerberos gồm 3 thực thể: client A, máy chủ Kerberos T, máy chủ ứng dụng B, mục đích của hệ thống là để:",
  },
  {
    idx: 198,
    title:
      "SSL sử dụng giao thực SSL Handshake để khởi tạo phiên làm việc. SSL Handshake thực hiện việc xác thực thực thể dựa trên:",
    answers: [
      {
        idx: 0,
        title: "Chữ ký số",
        isKey: false,
      },
      {
        idx: 1,
        title: "Chứng chỉ số",
        isKey: true,
      },
      {
        isKey: false,
        title: "Mã hóa khóa công khai",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mã hóa khóa bí mật",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 199,
    title: "Điểm khác nhau chính giữa hai loại hàm băm MDC và MAC là:",
    answers: [
      {
        idx: 0,
        title: "MDC an toàn hơn MAC",
        isKey: false,
      },
      {
        title: "MAC an toàn hơn MDC",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "MDC có khả năng chống đụng độ cao hơn MAC",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "MDC là loại hàm băm không khóa, còn MAC là loại hàm băm có khóa",
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 200,
    answers: [
      {
        title: "Xác thực, đăng nhập và kiểm toán (auditing)",
        idx: 0,
        isKey: false,
      },
      {
        title: "Xác thực, đăng nhập và trao quyền",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Xác thực, trao quyền và kiểm toán (auditing)",
      },
      {
        idx: 3,
        isKey: true,
        title: "Xác thực, trao quyền và quản trị",
      },
    ],
    title:
      "Một hệ thống điều khiển truy nhập có thể được cấu thành từ các dịch vụ nào sau đây:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Có độ an toàn cao hơn",
      },
      {
        title: "Trao đổi khóa dễ dàng hơn",
        idx: 1,
        isKey: false,
      },
      {
        title: "Chi phí tính toán thấp hơn",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Quản lý dễ dàng hơn",
      },
    ],
    title:
      "Ưu điểm của kỹ thuật mã hóa khóa công khai so với mã hóa khóa bí mật là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 201,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Khóa có kích thước lớn",
        idx: 0,
      },
      {
        title: "Giải thuật rất phức tạp",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chi phí tính toán lớn",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tính khó của việc phân tích số nguyên lớn",
      },
    ],
    title: "Độ an toàn của hệ mã hóa RSA dựa trên:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 202,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "d và e là 2 số nguyên tố cùng nhau",
      },
      {
        title: "d là modulo nghịch đảo của e",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "d là modulo của e",
      },
      {
        idx: 3,
        isKey: true,
        title: "d và e không có quan hệ với nhau",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 203,
    title:
      "Trong hệ mã hóa RSA, quan hệ toán học giữa khóa bí mật d và khóa công khai e được gọi là:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Mỗi thực thể phải lưu 1 khóa, KTC phải lưu n2 khóa",
      },
      {
        idx: 1,
        isKey: true,
        title: "Mỗi thực thể phải lưu 1 khóa, KTC phải lưu n khóa",
      },
      {
        title: "Mỗi thực thể phải lưu n-1 khóa, KTC phải lưu n khóa",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Mỗi thực thể phải lưu 1 khóa, KTC phải lưu 1 khóa",
      },
    ],
    idx: 204,
    title:
      "Trong hệ thống phân phối khóa sử dụng KTC gồm có n thực thể (không tính KTC), số lượng khóa dài hạn mỗi thực thể và KTC phải lưu là:",
  },
  {
    idx: 205,
    title:
      "Số lượng các khóa phụ (subkey) cần được tạo ra từ khóa chính trong giải thuật DES là:",
    answers: [
      {
        title: "18",
        idx: 0,
        isKey: false,
      },
      {
        title: "16",
        idx: 1,
        isKey: true,
      },
      {
        title: "14",
        idx: 2,
        isKey: false,
      },
      {
        title: "12",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Các thuộc tính cơ bản của chứng chỉ số (Digital certificate) gồm:",
    idx: 206,
    answers: [
      {
        title:
          "Số nhận dạng, khóa công khai của chủ thể, thông tin định danh chủ thể",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Khóa công khai của chủ thể, thông tin định danh chủ thể, thuật toán chữ ký sử dụng",
        idx: 1,
      },
      {
        title:
          "Số nhận dạng, khóa công khai của chủ thể, chữ ký của nhà cung cấp CA",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Khóa công khai của chủ thể, thông tin định danh chủ thể, chữ ký của nhà cung cấp CA",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Tìm các cổng dịch vụ đang mở trên hệ thống",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Thu thập các thông tin về các điểm yếu/lỗ hổng đã biết của hệ thống máy tính hoặc mạng",
      },
      {
        idx: 2,
        title: "Nghe trộm và bắt các gói tin khi chúng được truyền trên mạng",
        isKey: false,
      },
      {
        title: "Chặn bắt và sửa đổi thông tin",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Công cụ Vulnerability scanner cho phép tin tặc:",
    idx: 207,
  },
  {
    answers: [
      {
        title: "KDC an toàn hơn KTC",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "KTC an toàn hơn KDC",
      },
      {
        title: "KDC sinh khóa tập trung, còn KTC sinh khóa phân tán",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title:
          "KDC yêu cầu có một máy chủ tin cậy, còn KTC không yêu cầu có một máy chủ tin cậy",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 208,
    title:
      "Sự khác biệt giữa trung tâm phân phối khóa KDC và trung tâm dịch khóa KTC là:",
  },
  {
    title:
      "Tấn công lợi dụng lỗi tràn bộ đệm có thể giúp tin tặc chèn và thực hiện mã độc trên hệ thống nạn nhân thông qua cơ chế nào sau đây:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Chèn mã độc vào thay thế mã trong chương trình có lỗi tràn bộ đệm",
      },
      {
        title: "Tất cả các đáp án trên đều đúng",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Chèn mã độc vào bộ đệm và lợi dụng cơ chế trở về từ chương trình con để thực hiện mã độc đã chèn",
      },
      {
        title:
          "Chèn mã độc vào bộ đệm và lợi dụng cơ chế gọi thực hiện chương trình con để thực hiện mã độc đã chèn",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 209,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Chữ ký số được tạo ra bằng cách mã hóa thông điệp sử dụng khóa riêng của chủ thể",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Chữ ký số được sử dụng để đảm bảo tính bí mật và toàn vẹn thông điệp",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Chữ ký số được sử dụng để đảm bảo tính bí mật, toàn vẹn và xác thực thông điệp",
      },
      {
        idx: 3,
        title:
          "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực thể tạo ra thông điệp",
        isKey: true,
      },
    ],
    title: "Phát biểu nào sau đây về chữ ký số là chính xác:",
    idx: 210,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: false,
        title: "12 ",
        idx: 0,
      },
      {
        isKey: true,
        title: "16",
        idx: 1,
      },
      {
        title: "14",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "18",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 211,
    title: "Số lượng thao tác trong mỗi vòng xử lý của MD5 là:",
  },
  {
    answers: [
      {
        title:
          "Bất kỳ điểm yếu nào trong hệ thống cho phép mối đe dọa có thể gây tác hại",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Các điểm yếu trong hệ điều hành",
      },
      {
        title: "Tất cả điểm yếu hoặc khiếm khuyết trong hệ thống",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Các điểm yếu trong các phần mềm ứng dụng",
        idx: 3,
      },
    ],
    title: "Lỗ hổng an ninh trong một hệ thống là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 212,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Mật mã và An ninh mạng",
      },
      {
        title: "An toàn công nghệ thông tin và An ninh mạng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "An ninh máy tính và An ninh mạng",
      },
      {
        idx: 3,
        title: "An toàn công nghệ thông tin và Đảm bảo thông tin",
        isKey: true,
      },
    ],
    idx: 213,
    title: "Hai lĩnh vực chính của an toàn thông tin là:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 214,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "DAC và Role-BAC",
      },
      {
        idx: 1,
        title: "DAC và MAC",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "MAC và Role-BAC",
      },
      {
        idx: 3,
        title: "MAC và Rule-BAC",
        isKey: false,
      },
    ],
    title:
      "Các hệ điều hành Microsoft Windows và Linux sử dụng các mô hình điều khiển truy cập nào dưới đây?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "SSL sử dụng giao thực SSL Handshake để khởi tạo phiên làm việc. SSL Handshake thực hiện việc trao đổi các khóa phiên dùng cho phiên làm việc dựa trên:",
    answers: [
      {
        title: "Chữ ký số",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chứng chỉ số",
      },
      {
        isKey: true,
        title: "Mã hóa khóa công khai",
        idx: 2,
      },
      {
        isKey: false,
        title: "Mã hóa khóa bí mật",
        idx: 3,
      },
    ],
    idx: 215,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Tấn công bằng mã độc bao gồm các dạng tấn công:",
    answers: [
      {
        idx: 0,
        title: "Cả A và B",
        isKey: false,
      },
      {
        title:
          "Cài đặt và thực hiện các phần mềm độc hại trên hệ thống nạn nhân",
        isKey: false,
        idx: 1,
      },
      {
        title: "Lợi dụng các lỗ hổng an ninh để đánh cắp thông tin nhạy cảm",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Lợi dụng các lỗ hổng an ninh để chèn và thực hiện mã độc trên hệ thống nạn nhân",
        isKey: true,
      },
    ],
    idx: 216,
  },
  {
    idx: 217,
    title: "Tấn công Phishing là dạng tấn công vào:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Người quản trị và người dùng thông thường",
        isKey: true,
        idx: 0,
      },
      {
        title: "Hệ điều hành và các ứng dụng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các hệ thống mạng",
      },
      {
        idx: 3,
        title: "Các phần mềm máy chủ",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Điểm khác nhau chính giữa các hệ thống ngăn chặn đột nhập (IPS) và phát hiện đột nhập (IDS) là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "IPS có khả năng phát hiện và ngăn chặn tấn công tốt hơn IDS",
      },
      {
        isKey: false,
        title: "IDS có khả năng phát hiện và ngăn chặn tấn công tốt hơn IPS",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "IPS có khả năng chủ động ngăn chặn tấn công so với IDS",
      },
      {
        title: "IPS có chi phí lớn hơn IDS",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 218,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 219,
    answers: [
      {
        title: "Buffer overflow",
        idx: 0,
        isKey: false,
      },
      {
        title: "Syn flood",
        isKey: false,
        idx: 1,
      },
      {
        title: "Teardrop",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Ping of Death",
        isKey: true,
      },
    ],
    title:
      "Gửi một gói tin ICMP có kích thước lớn hơn 64Kb là một ví dụ của kiểu tấn công nào sau đây?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title:
      "Chữ ký số (dùng riêng) thường được sử dụng để đảm bảo thuộc tính nào sau đây của thông điệp truyền:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tính bí mật",
      },
      {
        idx: 1,
        isKey: true,
        title: "Tính toàn vẹn",
      },
      {
        idx: 2,
        title: "Tính xác thực",
        isKey: false,
      },
      {
        idx: 3,
        title: "Tính không chối bỏ",
        isKey: false,
      },
    ],
    idx: 220,
  },
  {
    answers: [
      {
        title: "Gây ngắt quãng dịch vụ cung cấp cho người dùng bình thường",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đánh cắp dữ liệu trên máy chủ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Đánh cắp dữ liệu trên máy khách",
      },
      {
        isKey: false,
        idx: 3,
        title: "Sửa đổi dữ liệu trong CSDL",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 221,
    title: "Tấn công DoS là dạng tấn công cho phép tin tặc:",
  },
  {
    title: "Yêu cầu để đảm bảo sử dụng mã hóa đối xứng là",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title:
          "Có thuật tóan encryption tốt,có một khóa bí mật được biết bởi người nhận/gởi và kênh truyền bí mật để phân phát key",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Có một kênh truyền phù hợp và một khóa bí mật được biết bởi người nhận/gởi",
      },
      {
        title:
          "Có thuật tóan encryption tốt và có một khóa bí mật được biết bởi người nhận/gởi",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều đúng",
      },
    ],
    idx: 222,
  },
  {
    idx: 223,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Các thuật tóan nào sau đây là thuật tóan mã hóa đối xứng",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Triple –DES, RC4, RC5, Blowfish",
      },
      {
        idx: 1,
        isKey: true,
        title: "Triple –DES, RC4, RC5, IDEA",
      },
      {
        title: "RC4, RC5, IDEA, Blowfish",
        idx: 2,
        isKey: false,
      },
      {
        title: "IDEA, Blowfish, AES, Elliptic Cure",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 224,
    title: "Các phát biểu sau đây phát biểu nào đúng",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Hầu hết các thuật tóan mã hóa đối xứng đều dựa trên cấu trúc thuật toán Feistel",
      },
      {
        title:
          "Tấn công thông điệp thì thời gian giải mã tỷ lệ với kích thước khóa",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Hầu hết các thuật tóan mã hóa khối đều đối xứng",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tất cả đều đúng",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Network, Transport",
        idx: 0,
      },
      {
        title: "Network, Session",
        isKey: false,
        idx: 1,
      },
      {
        title: "Application, Session",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều sai",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 225,
    title: "Cơ chế bảo mật SSL hoạt động trên tầng",
  },
  {
    title: "Keberos là dịch vụ ủy thác",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 226,
    answers: [
      {
        isKey: false,
        title: "Xác thực trên Web",
        idx: 0,
      },
      {
        idx: 1,
        title: "Xác thực X.509",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Xác thực trên Server",
      },
      {
        isKey: false,
        idx: 3,
        title: "Xác thực trên các máy trạm với nhau",
      },
    ],
  },
  {
    title: "PGP là giao thức để xác thực",
    idx: 227,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "Quyền đăng cập vào hệ thống máy chủ Window",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Bảo mật cho thư điện tử",
      },
      {
        isKey: false,
        idx: 2,
        title: "Thực hiện mã hóa thông điệp theo thuật tóan RSA",
      },
      {
        idx: 3,
        title: "Địa chỉ của máy trạm khi kết nối vào Internet",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SSL",
      },
      {
        title: "TSL",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giao thức PGP",
      },
      {
        idx: 3,
        isKey: true,
        title: "WEP",
      },
    ],
    title: "Công cụ/cơ chế bảo mật cho mạng không dây là",
    idx: 228,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Network",
        isKey: false,
      },
      {
        title: "Sesion",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Transport",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Từ tầng Transport trở lên",
      },
    ],
    title: "Giao thức SSL và TSL hoạt động ở tầng nào của mô hình OSI",
    idx: 229,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "Cung cấp bảo mật cho dữ liệu lưu thông trên dịch vụ HTTP",
        isKey: false,
      },
      {
        isKey: false,
        title: "Cung cấp bảo mật cho thư điện tử",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Cung cấp bảo mật cho Web",
      },
      {
        idx: 3,
        title:
          "Cung cấp bảo mật cho xác thực người dùng vào các hệ thống vận hành trên Platform Window",
        isKey: false,
      },
    ],
    title: "Giao thức SSL dùng để",
    idx: 230,
  },
  {
    idx: 231,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Chức năng chính của Virus là",
    answers: [
      {
        title: "Lây nhiễm và sinh sản",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Sống ký sinh và lây nhiễm",
      },
      {
        isKey: false,
        idx: 2,
        title: "Tự phát triển độc lập và lây nhiễm",
      },
      {
        title: "Tất cả đều đúng",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    title: "Hoạt động của virus có 4 giai đoạn",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 232,
    answers: [
      {
        isKey: false,
        title: "Nằm im, lây nhiễm, tàn phá và tự hủy",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lây nhiễm, tấn công, hủy diệt và tự hủy",
      },
      {
        title: "Nằm im, lây nhiễm, khởi sự và tàn phá",
        idx: 2,
        isKey: true,
      },
      {
        title: "Lây nhiễm, khởi sự, tàn phát, kích họat lại",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 233,
    answers: [
      {
        title: "stealth, cư trú bộ nhớ, macro, lưỡng tính, file",
        idx: 0,
        isKey: true,
      },
      {
        title: "stealth, cư trú bộ nhớ, macro, lưỡng tính, file",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "virus ký sinh, file, boot sector, stealth, cư trú bộ nhớ, macro",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "virus ký sinh, cư trú bộ nhớ, boot sector, Stealth, đa hình, macro",
      },
    ],
    title: "Các dạng sau đây, dạng nào là của virus",
  },
  {
    idx: 234,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "MS.Exel, MX Word, MS.Power Point",
      },
      {
        title: "stealth, cư trú bộ nhớ, macro, lưỡng tính, file",
        isKey: false,
        idx: 1,
      },
      {
        title: "MS.Exel, MX Word, Yahoo Mail",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Tất cả các loại file",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Virus Macro chỉ có khả năng tấn công vào các file",
  },
  {
    idx: 235,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tầng Network",
      },
      {
        isKey: false,
        idx: 1,
        title: "Tầng Transport",
      },
      {
        idx: 2,
        isKey: true,
        title: "Từ tầng Transport trở lên đến tầng 7",
      },
      {
        idx: 3,
        title: "Tầng Session",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Các giao thức bảo mật trên Internet như SSL, TLS và SSH hoạt động ở tầng nào trên mô hình OSI",
  },
  {
    title: "Kỹ thuật tấn công phổ biến trên Web là",
    idx: 236,
    answers: [
      {
        idx: 0,
        title: "Chiếm hữu phiên làm việc.",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tràn bộ đệm.",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Từ chối dịch vụ (DoS)",
      },
      {
        title: "Chèn câu truy vấn SQL.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Các lỗ hổng bảo mật trên hệ thống là do",
    answers: [
      {
        title: "Dịch vụ cung cấp",
        idx: 0,
        isKey: false,
      },
      {
        title: "Bản thân hệ điều hành",
        isKey: false,
        idx: 1,
      },
      {
        title: "Con người tạo ra",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 237,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 238,
    answers: [
      {
        idx: 0,
        title:
          "Tất cả Firewall đều có chung thuộc tính là cho phép phân biệt hay đối xử khả năng từ chối hay truy nhập dựa vào địa chỉ nguồn",
        isKey: false,
      },
      {
        title:
          "Chức năng chính của Firewall là kiểm sóat luồng thông tin giữa mạng cần bảo vệ và Internet thông qua các chính sách truy nhập đã được thiết lập",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Hệ thống Firewall thường bao g��m cả phần cứng lẫn phần mềm",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tất cả đều đúng",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Cho biết câu nào đúng trong các câu sau",
  },
  {
    title:
      "Loại Firewall nào sau đây cho phép hoạt động ở lớp phiên ( session) của mô hình OSI",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Packet filtering firewall(lop mang)",
      },
      {
        isKey: true,
        idx: 1,
        title: "Circuit level firewall(lop phien)",
      },
      {
        title: "Application level firewall(lop ung dung)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Stateful multilayer inspection firewall",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 239,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "PPP",
      },
      {
        isKey: false,
        idx: 1,
        title: "ATM",
      },
      {
        isKey: false,
        idx: 2,
        title: "HDLC",
      },
      {
        idx: 3,
        title: "SDLC",
        isKey: false,
      },
    ],
    idx: 240,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Những giao thức WAN nào có thể được định hình trên một kết nối tuần tự không đồng bộ (Chọn 2)",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Denial of Service (DoS) attacks, Internet Viruses",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Distributed Denial of Service (DDoS) attacks.",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Data confidentiality, IP Spoofing.",
      },
      {
        isKey: false,
        idx: 3,
        title: "Network mapping, Internet Viruses.",
      },
    ],
    title:
      "Khi thuê một giải pháp VPN, những loại tấn công nào bạn cần phải xét đến ?",
    idx: 241,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 242,
    title: "Các phát biểu sau đây phát biểu là là đúng nhất",
    answers: [
      {
        isKey: false,
        title:
          "Fire wal là một vành đai phòng thủ cho máy tính hoặc hệ thống trước những tấn công",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Là một điểm chặn của trong quá trình điều khiển và giám sát.",
      },
      {
        idx: 2,
        title:
          "Là một phần mềm hoặc phần ứng có khả năng ngăn chặn tấn công từ bên trong và bên ngoài vào hệ thống.",
        isKey: true,
      },
      {
        idx: 3,
        title:
          "Là một giải pháp giúp hệ thống phát hiện và ngăn chặn các truy cập trái phép",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Bảo mật thư điện tử là nhằm đảm bảo",
    answers: [
      {
        isKey: true,
        title:
          "Tính tin cẩn (confidentiality), Tính xác nhận, Toàn vẹn thông điệp(integrity), Sự thối thác ban đầu (non-repudiation of origin)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Tính xác nhận,Toàn vẹn thông điệp(integrity), Sự thối thác ban đầu (nonrepudiation of origin), tính bền vững",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Sự thối thác ban đầu (non-repudiation of origin), tính bền vững, tính ổn khi gởi và nhận",
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều đúng",
      },
    ],
    idx: 243,
  },
  {
    title: "Các giao thức được để bảo mật thư điện tử là",
    answers: [
      {
        title: "GPG, S/MINE",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "SHA-1, S/MINE",
        isKey: true,
      },
      {
        title: "CAST-128 / IDEA/3DES",
        isKey: false,
        idx: 2,
      },
      {
        title: "Keboros, X.509",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 244,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Chữ ký điện tử (digital signature) sử dụng thuật tóan nào sau đây",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "RSA,MD5",
      },
      {
        idx: 1,
        title: "RSA,MD5, Keboros",
        isKey: false,
      },
      {
        idx: 2,
        title: "MD5, SHA,RSA",
        isKey: true,
      },
      {
        title: "Không dùng thuật tóan nào nêu trên",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 245,
  },
  {
    title:
      "Chữ ký điện tử (digital signature) sử dụng thuật tóan nào sau đâyChữ ký điện tử là",
    answers: [
      {
        title:
          "Là một chuỗi đã được mã hóa theo thuật tóan băm và đính kèm với văn bản gốc trước khi gởi.",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Đoạn dữ liệu ngắn đính kèm với văn bản gốc để chứng thực tác giả của văn bản và giúp người nhận kiểm tra tính toàn vẹn của nội dung văn bản gốc.",
      },
      {
        title: "a và b đều đúng",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Tất cả cả đều sai",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 246,
  },
  {
    title: "Các bước mã hóa của chứ ký điện tử",
    idx: 247,
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Dùng giải thuật băm để thay đổi thông điệp cần truyền đi, Sử dụng khóa private key của người gửi để mã hóa message digest thu được ở bước trên, sau đó gộp digital signature vào message ban đầu.",
      },
      {
        title:
          "Dùng giải thuật băm để thay đổi thông điệp cần truyền đi, sử dụng khóa private key của người gửi để mã hóa message digest thu được ở bước trên, sau đó gộp digital signature vào message ban đầu và nén dữ liệu gởi đi.",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Chỉ sử dụng giải thuật băm để thay đổi thông điệp cần truyền đi và sử dụng khóa private key của người gửi để mã hóa message digest thu được ở bước trên.",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều đúng",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Các bước kiểm tra của chứ ký điện tử",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 248,
    answers: [
      {
        isKey: true,
        title:
          "Gồm các bước 1.Dùng public key của người gửi (khóa này được thông báo đến mọi người) để giải mã chữ ký số của message, 2.Dùng giải thuật (MD5 hoặc SHA) băm message đính kèm, So sánh kết quả thu được ở bước 1 và 2. 3.Nếu trùng nhau, ta kết luận message này không bị thay đổi trong quá trình truyền và message này là của người gửi.",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chỉ có bước 1 và 2",
      },
      {
        title:
          "Gồm các bước 1.Dùng public key của người gửi (khóa này được thông báo đến mọi người) để giải mã chữ ký số của message, 2.Dùng giải thuật (MD5 hoặc SHA) băm message đính kèm, So sánh kết quả thu được ở bước 1 và 2. 3.Nén dữ liệu rồi gởi đi",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "d.Không có bước nào ở trên là đúng",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Việc xác thực người dùng khi đăng cập vào hệ thống Window XP, 2000 hoặc 2003 sử dụng giải thuật",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "RSA",
        idx: 0,
        isKey: false,
      },
      {
        title: "Keberos",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "MD5",
        isKey: false,
      },
      {
        title: "SHATR",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 249,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Tạo 1 file chạy (*.exe, *.com) vận hành trên máy nạn nhân là đủ",
      },
      {
        title: "Cho máy nạn nhân lây nhiễm một loại virus bất kỳ nào đó.",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Thực hiện đồng thời 2 file, một file vận hành trên máy nạn nhân, file còn lại họat động điều khiển trên máy kẻ tấn công.",
      },
      {
        idx: 3,
        title: "Không có điều nào đúng.",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 250,
    title: "Để thực hiện tấn công bằng Trojan, kẻ tấn công chỉ cần",
  },
  {
    title: "Giao thức bảo mật IPSec họat động ở tầng",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 251,
    answers: [
      {
        idx: 0,
        title: "Chỉ ở tầng transport ở mô hình OSI",
        isKey: false,
      },
      {
        title: "Từ tầng 4 tới tầng 7 ở mô hình OSI",
        isKey: false,
        idx: 1,
      },
      {
        title: "Network Layer ở mô hình OSI",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Tất cả đều sai",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Regỉstry là một cơ sở dữ liệu dùng để lưu trữ thông tin về những sự thay đổi, những lựa chọn, những thiết lập từ người sử dụng Windows.",
      },
      {
        isKey: false,
        title:
          "Regỉstry là một phần mềm tiện ích hỗ trợ cho người dùng thay đổii cấu hình Window khi cần thiết",
        idx: 1,
      },
      {
        idx: 2,
        title: "Regỉstry là một thành phần của hệ điều hành Window",
        isKey: false,
      },
      {
        idx: 3,
        title: "Tất cả đều đúng",
        isKey: true,
      },
    ],
    title: "Cho biết phát biểu sau đây phát biểu nào là đúng nhất về registry",
    idx: 252,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "5",
        isKey: true,
        idx: 0,
      },
      {
        title: "4",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "6",
        idx: 2,
      },
      {
        idx: 3,
        title: "7",
        isKey: false,
      },
    ],
    idx: 253,
    title: "Có bao nhiêu kiểu dữ liệu trong Registry",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "interger, real,text,string",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "HKEY_CLASSES_ROOT, -USER, HKEY_LOCAL_MACHINE, HKEY_USERS, HKEY_CURRENT_CONFIG, HKEY_DYN_DATA",
      },
      {
        title: "HKEY_CLASSES_ROOT, -USER, HKEY_LOCAL_MACHINE, REG_BINARY",
        idx: 2,
        isKey: false,
      },
      {
        title: "REG_BINARY, REG_DWORD, REG_EXPAND_SZ, REG_MULTI_SZ, REG_SZ",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 254,
    title: "Các kiểu dữ liệu dùng trong registry là",
  },
  {
    title:
      "Để ẩn tất cả các ổ đĩa trong registry (A,B,C,D ) thì biến REG_DWORD trong Userkey và Systemkey có giá trị là bao nhiêu",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "65656000",
        isKey: true,
      },
      {
        isKey: false,
        title: "67188270",
        idx: 1,
      },
      {
        idx: 2,
        title: "67108863",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều sai",
      },
    ],
    idx: 255,
  },
  {
    title:
      "Để sử dụng xác thực Keberos V5 ở tất cả máy trạm Window98, người ta thực hiện :",
    idx: 256,
    answers: [
      {
        title: "Update window 98 lên XP hoặc Window 2000",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Cài đặt tiện ích Distributed Security Client trên tất cả các máy chạy Window 98",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Chỉ cần cài đặt Active Directory trên Server hệ thống",
      },
      {
        idx: 3,
        isKey: false,
        title: "Không thể thực hiện được",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Update Window 2000 mà không remote trước khi cài đặt",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Cài đ��t Window 2000 nhiều lần trên Server",
      },
      {
        isKey: true,
        idx: 2,
        title: "Bản Window 2000 không có bản quyền",
      },
      {
        title: "Tất cả đều đúng",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 257,
    title:
      "Khi cài đặt Window 2000 Server trên hệ thống NTFS, nhưng không thấy có hiển thị mục Security ở Security tables vì ?",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Tổ chức và xây dựng các domain; xác thực và cấp quyền cho các đối tượng",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Duy các hoạt động của các dịch vụ bảo mật cho Window Server và xác thực, cấp quyền cho các đối tượng",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Chỉ thực hiện việc xác thực và cấp các quyền cho users và groups",
      },
      {
        title:
          "Quản lý tài nguyên và người dùng; xác thực và cấp các quyền cho users và groups; giám sát họat động của các user",
        isKey: true,
        idx: 3,
      },
    ],
    title: "Dịch vụ Active Directory thực hiện các chức năng sau",
    idx: 258,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Thuật tóan thực hiện trong cơ chế bảo mật IP (IPSec) ở Window sử dụng là",
    answers: [
      {
        title: "MD5 và SHA1",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "MD5 và SHA1",
        isKey: false,
      },
      {
        idx: 2,
        title: "Kerberos và DES",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "DES hoặc 3DES (triple DES).",
      },
      {
        idx: 4,
        title: "Tất cả đều sai",
        isKey: false,
      },
    ],
    idx: 259,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Được lưu trong file Classes.dat trong thư mục Windows",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Được lưu trong thư mục 'Windows System32 Config'",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Trong 2 file: user.dat và system.dat trong thư mục Windows",
      },
      {
        isKey: false,
        title: "Tất cả đều sai",
        idx: 3,
      },
    ],
    title: "Trong Window 98,XP Registry được lưu trữ ở đâu ?",
    idx: 260,
  },
  {
    title: "Để thực hiện sửa đổi cấu hình trên registry ta thực hiện như sau:",
    answers: [
      {
        title: "Gõ regedit vào cửa sổ Run",
        isKey: true,
        idx: 0,
      },
      {
        title: "Bấm Ctrl+ Esc+ r rồi bấm Enter",
        idx: 1,
        isKey: false,
      },
      {
        title: "a và b đúng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tất cả đều sai",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 261,
  },
  {
    idx: 262,
    answers: [
      {
        isKey: true,
        title: "3",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "4",
      },
      {
        isKey: false,
        idx: 2,
        title: "5",
      },
      {
        idx: 3,
        isKey: false,
        title: "3 hoặc 4",
      },
    ],
    title: "Quy trình crack một sản phẩm phần mềm đơn giản gồm mấy bước",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "IP Authentication Header, TCP/IP",
      },
      {
        title: "TCP/IP, IP Encapsulating Security Payload",
        isKey: false,
        idx: 1,
      },
      {
        title: "IP Authentication Header, IP Encapsulating Security Payload",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Tất cả đều đúng",
        idx: 3,
      },
    ],
    idx: 263,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Hai giao thức sử dụng trong IPSec (IPSec Protocol) gồm",
  },
  {
    title: "Các điểm khác nhau cơ bản giữa dịch vụ X.509 và Kerberos là",
    idx: 264,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Dựa trên mã hóa đối xứng",
        idx: 0,
        isKey: true,
      },
      {
        title: "Được sử dụng trong dịch vụ mail",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xác thực nhiều chiều",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều đúng",
      },
    ],
  },
  {
    idx: 265,
    title: "Các chức năng cơ bản của kỹ thuật tấn công Sniffer",
    answers: [
      {
        isKey: false,
        title:
          "Tự động chụp các tên người sử dụng (Username) và mật khẩu không được mã hoá, Chuyển đổi dữ liệu trên đường truyền, phân tích những lỗi đang mắc phải trên hệ thống lưu lượng của mạng.",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Bắt gói tin trên đường truyền, phân tích lỗi và giải mã gói tin",
      },
      {
        idx: 2,
        title: "Bắt gói tin trên đường truyền, mã hóa vag giải mã dữ liệu",
        isKey: false,
      },
      {
        title: "Tất cả đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Thăm dò, Scan, Giành quyền truy cập, Duy trì truy cập, Xóa vết",
        isKey: true,
        idx: 0,
      },
      {
        title: "Scan, Thăm dò, Giành quyền truy cập, Duy trì truy cập, Xóa vết",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Thăm dò, Scan, Duy trì truy cập, Giành quyền truy cập, Xóa vết",
      },
      {
        idx: 3,
        isKey: false,
        title: "Giành quyền truy cập, Duy trì truy cập, Scan, Thăm dò",
      },
    ],
    idx: 266,
    title: "Các bước tấn công của Web Server theo trình tự sau :",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Virrus, Zombie",
      },
      {
        idx: 1,
        title: "Worm, Virus",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Logicbomb, Virus",
      },
      {
        idx: 3,
        isKey: false,
        title: "Trapdoors, Trojan",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 267,
    title:
      "Hiện tượng này do loại chương trình nguy hiểm nào gây ra : Làm mất một số file, làm phân mãnh ổ đĩa, gây tác hại vào những ngày, tháng đặc biệt v.v",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Để đánh giá điểm mạnh của hệ thống IDS người ta dựa vào các yếu tố sau :",
    answers: [
      {
        title: "Khởi sự, Cách thực hiện, biểu hiện mà nó ghi nhận",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Khởi sự, giám sát v�� trí, những đặc trưng ghép nối hoặc tích hợp",
        isKey: true,
        idx: 1,
      },
      {
        title:
          "Cách thực hiện, biểu hiện mà nó ghi nhận, những đặc trưng ghép nối hoặc tích hợp",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều đúng",
      },
    ],
    idx: 268,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 269,
    title:
      "Hai cơ chế chính của hệ thống IDS Trigger để phát hiện khi có một kẻ xâm nhập tấn công mạng là:",
    answers: [
      {
        title:
          "Phát hiện biểu hiện không bình thường, phát hiện sử dụng không đúng",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Phát hiện hiện tượng trùng lặp, phát hiện không bình thường",
      },
      {
        idx: 2,
        isKey: false,
        title: "Phát hiện thay đổi, phát hiện sử dụng bất bình thường",
      },
      {
        isKey: false,
        title: "Tất cả đều đúng",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Để xác định thế mạnh của các thuật toán một",
      },
      {
        isKey: false,
        title: "Để tăng cường chức năng thay thế trong một thuật toán mật mã",
        idx: 1,
      },
      {
        isKey: false,
        title: "Để giảm chức năng transposition trong một thuật toán mật mã",
        idx: 2,
      },
      {
        idx: 3,
        title: "Để xác định hoán vị sử dụng",
        isKey: false,
      },
    ],
    idx: 270,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Mục tiêu là phân tích mật mã là gì?",
  },
  {
    title: "Điều gì sẽ xãy ra khi một thông báo đã được sửa đổi?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Khoá công cộng đã được thay đổi",
      },
      {
        title: "Chìa khóa cá nhân đã được thay đổi",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thông điệp số đã được thay đổi",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tin nhắn đã được mã hóa đúng cách",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 271,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 272,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Mã hóa nào sau đây là một tiêu chuẩn dùng để phát triển cho việc tạo ra thông điệp an toàn?",
    answers: [
      {
        isKey: true,
        title: "Data Encryption Standard",
        idx: 0,
      },
      {
        idx: 1,
        title: "Digital Signature Standard",
        isKey: false,
      },
      {
        idx: 2,
        title: "Secure Hash Algorithm",
        isKey: false,
      },
      {
        idx: 3,
        title: "Chữ kí dữ liệu tiêu chuẩn",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title:
      "Nếu kẻ tấn công lấy trộm một mật khẩu có chứa một chiều mật khẩu đã mật mã, loại tấn công, cô sẽ thực hiện để tìm mật khẩu đã mật mã?",
    answers: [
      {
        title: "Tấn công Man-in-the-middle",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Tấn công Birthday",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tấn công Denial of Service",
      },
      {
        isKey: true,
        title: "Tấn công Dictionary",
        idx: 3,
      },
    ],
    idx: 273,
  },
  {
    idx: 274,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Nó có thể cung cấp cho chữ ký số và mã hóa các chức năng",
      },
      {
        title:
          "Nó sử dụng nguồn tài nguyên ít hơn và mã hóa nhanh hơn bởi vì nó sử dụng các phím đối xứng",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Nó là một thuật toán mật mã khối so với một thuật toán mật mã dòng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Nó sử dụng một lần mã hóa pad",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Lợi thế của RSA là gì so với DSS?",
  },
  {
    idx: 275,
    answers: [
      {
        title: "Khóa riêng của người nhận",
        isKey: false,
        idx: 0,
      },
      {
        title: "Khóa công khai của người gửi",
        isKey: false,
        idx: 1,
      },
      {
        title: "Khóa riêng của người gửi",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Khóa công khai của người nhận",
      },
    ],
    title: "Những gì được sử dụng để tạo ra một chữ ký điện tử?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Phương thức nào sau đây là tốt nhất mô tả một chữ ký điện tử?",
    idx: 276,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Một phương thức chuyển giao một chữ ký viết tay vào một tài liệu điện tử",
      },
      {
        isKey: false,
        idx: 1,
        title: "Một phương pháp mã hóa thông tin bí mật",
      },
      {
        isKey: false,
        idx: 2,
        title: "Một phương pháp để cung cấp một chữ ký điện tử và mã hóa",
      },
      {
        isKey: true,
        title:
          "Một phương pháp để cho những người nhận của tin nhắn chứng minh nguồn gốc và sự toàn vẹn của một tin nhắn",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "56",
      },
      {
        title: "64",
        isKey: true,
        idx: 1,
      },
      {
        title: "32",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "16",
        isKey: false,
      },
    ],
    idx: 277,
    title: "Sử dụng nhiêu bit với DES để có hiệu quả?",
  },
  {
    title: "Các yếu tố ảnh hưởng đến quá trình mã hóa",
    answers: [
      {
        title: "Thuật toán mã hóa, giải mã, và tính an toàn của kênh truyền",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Thời gian thực hiện mã hóa và giải mã",
        isKey: false,
      },
      {
        isKey: false,
        title: "Thực hiện mã hóa khối, mở rộng số bít xử lý",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều sai",
      },
    ],
    idx: 278,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 279,
    title:
      "Đối với Firewall lọc gói, hình thức tấn công nào sau đây được thực hiện",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Nhái địa chỉ IP, tấn công giữa, tấn công biên",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Nhái địa chỉ IP, tấn công đường đi nguồn, tấn công từng mẫu nhỏ",
      },
      {
        title: "Nhái địa chỉ IP, tấn công vượt firewall,tấn công từng mẫu nhỏ",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Nhái địa chỉ IP, tấn công vượt firewall, tấn công đường đi nguồn",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Ai là người tham gia vào việc phát triển đầu tiên hệ thống mã hóa khóa công?",
    idx: 280,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Adi Shamir",
      },
      {
        title: "Ross Anderson",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Bruce Schneier",
        isKey: false,
      },
      {
        idx: 3,
        title: "Martin Hellman",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 281,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "DES là viết tắt của từ nào ?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Data encryption system",
      },
      {
        isKey: true,
        title: "Data encryption standard",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Data encoding standard",
      },
      {
        idx: 3,
        title: "Data encryption signature",
        isKey: false,
      },
    ],
  },
  {
    idx: 282,
    answers: [
      {
        title: "Chuyên gia bảo mật",
        idx: 0,
        isKey: true,
      },
      {
        title: "Cựu Hacker mũ đen",
        isKey: false,
        idx: 1,
      },
      {
        title: "Cựu Hacker mũ xám",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Hacker hiểm độc",
        idx: 3,
      },
    ],
    title:
      "Các phát biểu sau đây, phát biểu nào tốt nhất mô tả một hacker mũ trắng?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 283,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        isKey: false,
        title: "Duy trì truy cập",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Gaining truy cập",
      },
      {
        idx: 2,
        isKey: true,
        title: "Trinh sát",
      },
      {
        idx: 3,
        title: "Dò tìm (Scanning)",
        isKey: false,
      },
    ],
    title: "Giai đoạn đầu của hacking là gì?",
  },
  {
    title:
      "Khi một hacker cố gắng tấn công một máy chủ qua Internet nó được gọi là loại tấn công?",
    idx: 284,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tấn công từ xa",
      },
      {
        idx: 1,
        title: "Tấn công truy cập vật lý",
        isKey: false,
      },
      {
        isKey: false,
        title: "Truy cập địa phương",
        idx: 2,
      },
      {
        title: "Tấn công tấn công nội",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    idx: 285,
    title:
      "Công cụ nào sau đây đúng là một công cụ để thực hiện footprinting không bị phát hiện?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "Whois search",
        isKey: true,
        idx: 0,
      },
      {
        title: "Traceroute",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Ping sweep",
      },
      {
        isKey: false,
        title: "Host scanning",
        idx: 3,
      },
    ],
  },
  {
    title: "Bước tiếp theo sẽ được thực hiện sau khi footprinting là gì?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Scanning",
      },
      {
        isKey: false,
        title: "Enumeration",
        idx: 1,
      },
      {
        isKey: false,
        title: "System hacking",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Active information gathering",
      },
    ],
    idx: 286,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Footprinting là gì?",
    idx: 287,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        title: "đo dấu vết của một hacker có đạo đức",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "tích luỹ dữ liệu bằng cách thu thập thông tin về một mục tiêu",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "quét một mạng lưới mục tiêu để phát hiện hệ điều hành các loại",
      },
      {
        title: "sơ đồ bố trí vật lý của một mạng của mục tiêu",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 288,
    title: "Lý do tốt nhất để thực hiện một chính sách bảo mật là gì?",
    answers: [
      {
        idx: 0,
        title: "Tăng an ninh.",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Nó làm cho khó hơn việc thi hành bảo mật",
      },
      {
        title: "Hạn chế quyền hạn của nhân viên",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Làm giảm an ninh.",
        isKey: false,
      },
    ],
  },
  {
    idx: 289,
    title: "FTP sử dụng cổng gì ?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    answers: [
      {
        idx: 0,
        title: "21",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "25",
      },
      {
        idx: 2,
        isKey: false,
        title: "23",
      },
      {
        idx: 3,
        title: "80",
        isKey: false,
      },
    ],
  },
  {
    title: "Cổng nào được HTTPS sử dụng?",
    answers: [
      {
        idx: 0,
        title: "443",
        isKey: true,
      },
      {
        idx: 1,
        title: "80",
        isKey: false,
      },
      {
        isKey: false,
        title: "53",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "21",
      },
    ],
    idx: 290,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Trojan Horse là gì?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 291,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "một chương trình độc hại mà lấy cắp tên người dùng và mật khẩu của bạn",
      },
      {
        title: "gây hại như mã giả mạo hoặc thay thế mã hợp pháp",
        isKey: true,
        idx: 1,
      },
      {
        title:
          "Một người sử dụng trái phép những người thu truy cập vào cơ sở dữ liệu người dùng của bạn và cho biết thêm mình như một người sử dụng",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Một máy chủ đó là phải hy sinh cho tất cả các hacking nỗ lực để đăng nhập và giám sát các hoạt động hacking",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "John muốn cài đặt một ứng dụng mới vào máy chủ của Windows 2000. Ông muốn đảm bảo rằng các ứng dụng bất kỳ ông sử dụng chưa được cài Trojan. Ông có thể làm gì để giúp đảm bảo điều này?",
    answers: [
      {
        title:
          "So sánh chữ ký MD5 của tập tin với một trong những công bố trên các phương tiện truyền thông phân tán",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Xin các ứng dụng thông qua SSL",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "So sánh chữ ký virus của file với một trong những công bố trên các phương tiện truyền thông",
      },
      {
        idx: 3,
        isKey: false,
        title: "Cài đặt các ứng dụng từ đĩa CD-ROM",
      },
    ],
    idx: 292,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
  },
  {
    title: "Hầu hết các lỗi SQL Injection đều là do (chọn 2 phương án)",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 293,
    answers: [
      {
        isKey: true,
        title: "câu lệnh SQL sai",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "trình duyệt Web không hỗ trợ",
      },
      {
        idx: 2,
        title: "User làm cho câu lệnh SQL sai",
        isKey: false,
      },
      {
        idx: 3,
        title: "Sử dụng Hệ quản trị CSDL không có bản quyền",
        isKey: false,
      },
    ],
  },
  {
    idx: 294,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    title: "Chính sách bảo mật là",
    answers: [
      {
        title: "Cơ chế mặc định của hệ điều hành",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title:
          "phương thức xác định các hành vi “phù hợp” của các đối tượng tương tác với hệ thống",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "các tập luật được xây dựng nhằm bảo vệ các tấn công bất hợp pháp từ bên ngoài",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều đúng",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Website, E-commerce server",
        isKey: false,
      },
      {
        isKey: true,
        title: "Internet Relay Chat (IRC), Domain Name System (DNS)",
        idx: 1,
      },
      {
        title: "ISP, Email server",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tất cả đều đúng",
        idx: 3,
      },
    ],
    title: "Các loại mục tiêu của chiến tranh thông tin",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 295,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    idx: 296,
    answers: [
      {
        isKey: false,
        title: "Chi phí lắp đặt cao, khó bảo quản và duy trì",
        idx: 0,
      },
      {
        title:
          "Giới hạn tầm nhìn mạng, phải xử lí với nhiều hệ điều hành khác trên mạng.",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Thường xuyên phải cập nhật bảng vá lỗi",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Thường xuyên cài đặt lại phải khi hệ thống mạng thay đổi hệ điều hành",
      },
    ],
    title: "Khi thực hiện triển khai HIDS khó khăn gặp là",
  },
];

export default questions;
