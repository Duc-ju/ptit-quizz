import { QuestionRequest } from "../../models/multiple-question";

const questions: QuestionRequest[] = [
  {
    chapterIdx: 0,
    title: "Các mạng máy tính được thiết kế và cài đặt theo quan điểm:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 0,
    answers: [
      {
        title: "Có cấu trúc đa tầng ",
        idx: 0,
        isKey: true,
      },
      {
        title: "Nhiều tầng ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Theo lớp ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tập hợp",
        idx: 3,
      },
    ],
  },
  {
    idx: 1,
    title: "Khi sử dụng mạng máy tính ta sẽ thu được các lợi ích:",
    answers: [
      {
        isKey: false,
        title:
          "Chia sẻ tài nguyên (ổ cứng, cơ sở dữ liệu, máy in, các phần mềm tiện ích...)",
        idx: 0,
      },
      {
        idx: 1,
        title: "Quản lý tập trung",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Tận dụng năng lực xử lý của các máy tính rỗi kết hợp lại để thực hiện các công việc lớn",
        idx: 2,
      },
      {
        isKey: true,
        title: "Tất cả đều đúng",
        idx: 3,
      },
    ],
    chapterIdx: 0,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Đơn vị cơ bản đo tốc độ truyền dữ liệu là:",
    idx: 2,
    answers: [
      {
        title: "Bit",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Byte",
      },
      {
        idx: 2,
        title: "Bps (bit per second)",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Hz",
      },
    ],
    chapterIdx: 0,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 3,
    chapterIdx: 0,

    title:
      "Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào:",
    answers: [
      {
        title: "Phân tích dữ liệu",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Nén dữ liệu",
      },
      {
        idx: 2,
        title: "Đóng gói",
        isKey: true,
      },
      {
        title: "Lọc dữ liệu",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus:
      "Router kết nối thiết bị trong một mạng bằng cách chuyển gói dữ liệu giữa chúng. Dữ liệu này có thể được gửi giữa các thiết bị hoặc từ thiết bị đến Internet.",
    title: "Kết nối mạng sử dụng các giao thức khác nhau bằng các:",
    answers: [
      {
        isKey: false,
        title: "Bộ chuyển tiếp",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Cổng giao tiếp",
      },
      {
        title: "SONET",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Bộ định tuyến",
        isKey: true,
      },
    ],

    chapterIdx: 0,
    idx: 4,
  },
  {
    idx: 5,
    title: "Nhược điểm của mạng dạng hình sao (Star) là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Khó cài đặt và bảo trì",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Khó khắc phục khi lỗi cáp xảy ra, và ảnh hưởng tới các nút mạng khác",
      },
      {
        isKey: true,
        idx: 2,
        title: "Cần quá nhiều cáp để kết nối tới nút mạng trung tâm",
      },
      {
        title: "Không có khả năng thay đổi khi đã lắp đặt",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 0,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title:
          "Tất cả các nút mạng kết nối vào nút mạng trung tâm (ví dụ như Hub)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tất cả các nút kết nối trên cùng một đường truyền vật lý",
        isKey: true,
        idx: 1,
      },
      {
        title: "Tất cả các nút mạng đều kết nối trực tiếp với nhau",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mỗi nút mạng kết nối với 2 nút mạng còn lại",
      },
    ],
    title: "Đặc điểm của mạng dạng Bus:",
    chapterIdx: 0,
    idx: 6,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: true,
        title: "Đường truyền vật lý",
        idx: 0,
      },
      {
        title: "Kết nối ảo",
        isKey: false,
        idx: 1,
      },
      {
        title: "Đường ảo",
        isKey: false,
        idx: 2,
      },
      {
        title: "Đường truyền logic",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Trong kỹ thuật chuyển mạch kênh, trước khi trao đổi thông tin, hệ thống sẽ thiết lập kết nối giữa 2 thực thể bằng một",
    idx: 7,
    chapterIdx: 0,
  },
  {
    idx: 8,
    chapterIdx: 0,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Kết nối liên mạng các mạng LAN, WAN, MAN độc lập với nhau bằng các thiết bị có chức năng:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kiểm soát lỗi, kiểm soát luồng",
      },
      {
        isKey: true,
        title: "Định tuyến",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Điều khiển liên kết",
      },
      {
        isKey: false,
        idx: 3,
        title: "Điều khiển lưu lượng và đồng bộ hoá",
      },
    ],
  },
  {
    idx: 9,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Cáp UTP Cat5e sử dụng đầu nối:",

    chapterIdx: 0,
    answers: [
      {
        idx: 0,
        title: "RJ - 58",
        isKey: false,
      },
      {
        title: "BNC",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "RJ - 45",
        idx: 2,
      },
      {
        idx: 3,
        title: "ST",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 10,
    chapterIdx: 0,
    title: "Cáp UTP Cat 5 có bao nhiêu đôi cáp:",
    answers: [
      {
        title: "2",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "4",
        isKey: true,
      },
      {
        title: "6",
        isKey: false,
        idx: 2,
      },
      {
        title: "8",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    chapterIdx: 0,
    answers: [
      {
        idx: 0,
        title:
          "Client/server là kiến trúc phân cấp, client đóng vai trò yêu cầu và server đáp ứng lại các yêu cầu đó.",
        isKey: false,
      },
      {
        title:
          "Server là host luôn hoạt động, thường có IP cố định, có nhóm các server để chia sẻ công việc. Client có kết nối không liên tục, địa chỉ IP có thể thay đổi, truyền thông với server và thường không truyền thông trực tiếp với client khác.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Câu A và B đều đúng",
      },
      {
        idx: 3,
        title: "Câu A và B đều sai",
        isKey: false,
      },
    ],
    idx: 11,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Đặc điểm quan trọng của kiến trúc mạng client/server (khách/chủ):",
  },
  {
    bonus:
      "Có hai loại đường truyền: truyền điểm-điểm và truyền quảng bá. Đường truyền điểm-điểm chỉ có một bên gửi và một bên nhận duy nhất. Hai đưng truyền kiểu quảng bá cho phép có nhiều nút gửi và nút nhận cùng kết nối đến một kênh truyền duy nhất. Trong cấu hình điểm-điểm, hai thiết bị được nối với nhau qua một đường truyền dành riêng. Trong cấu hình điểm nhiều điểm, một đường truyền được nhiều thiết bị dùng chung.",
    chapterIdx: 0,
    idx: 12,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        title: "Mạng quảng bá",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Nối từng cặp node lại với nhau theo một hình học xác định",
        idx: 1,
      },
      {
        isKey: true,
        title: "Mạng lưu và chuyển tiếp (Store - and - Forward)",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Các node trung gian: tiếp nhận, lưu trữ tạm thời và gửi tiếp thông tin",
      },
    ],
    title:
      "Khẳng định nào sau đây là đúng khi nói về mạng có cấu trúc điểm- điểm:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 13,
    bonus: "A và C không thấy đề cập. Tốc độ trao đổi thông tin cao (1 gbps)",
    answers: [
      {
        idx: 0,
        title: "Khả năng đụng độ thông tin (collision) thấp",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Hiệu suất sử dụng đường truyền thấp, chiếm dụng nhiều tài nguyên",
      },
      {
        idx: 2,
        title:
          "Độ trễ lớn, tốn nhiều thời gian để thiết lập đường truyền và xử lý tại các node",
        isKey: false,
      },
      {
        title: "Tốc độ trao đổi thông tin thấp",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Khẳng định nào sau đây là đúng khi nói về nhược điểm của mạng có cấu trúc điểm- điểm:",
    chapterIdx: 0,
  },
  {
    idx: 14,
    chapterIdx: 0,
    answers: [
      {
        isKey: true,
        title:
          "Tất cả các node cùng truy nhập chung trên một đường truyền vật lý",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Nối từng cặp node lại với nhau theo một hình học xác định",
      },
      {
        isKey: false,
        title:
          "Các node trung gian: tiếp nhận, lưu trữ tạm thời và gửi tiếp thông tin",
        idx: 2,
      },
      {
        title: "Khả năng đụng độ thông tin (collision) thấp",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "Khẳng định nào sau đây là đúng khi nói về đặc trưng của mạng quảng bá:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 15,
    chapterIdx: 0,

    title: "Khẳng định nào sau đây là đúng khi nói về mạng chuyển mạch kênh:",
    answers: [
      {
        isKey: true,
        title:
          "Thiết lập liên kết vật lý, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Thiết lập liên kết logic, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể",
      },
      {
        title: "Truyền dữ liệu giữa 2 thực thể",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Thiết lập liên kết và giải phóng liên kết giữa 2 thực thể",
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Khẳng định nào sau đây là đúng khi nói về mạng chuyển mạch gói:",

    answers: [
      {
        title: "Gói tin lưu chuyển trên các kết nối logic",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Gói tin lưu chuyển trên các kết nối vật lý",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Gói tin lưu chuyển độc lập hướng đích",
      },
      {
        idx: 3,
        title:
          "Gói tin lưu chuyển trên các kết nối logic hướng đích và trên một đường có thể có nhiều gói tin cùng lưu chuyển",
        isKey: true,
      },
    ],
    idx: 16,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 0,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Làm giảm thời gian xử lý",
      },
      {
        idx: 1,
        isKey: false,
        title: "Làm tăng tính linh hoạt của mạng",
      },
      {
        idx: 2,
        title: "Ảnh hưởng đến tốc độ trao đổi dữ liệu trong mạng",
        isKey: false,
      },
      {
        idx: 3,
        title: "Tăng tốc độ trao đổi thông tin trong mạng",
        isKey: true,
      },
    ],
    chapterIdx: 0,
    title:
      "Khẳng định nào sau đây là đúng khi nói về quá trình phân mảnh gói tin:",

    idx: 17,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 18,
    title:
      "Khẳng định nào sau đây là đúng khi nói về truyền dữ liệu theo phương thức hướng liên kết:",
    bonus:
      "Cụ thể như TCP: Giao thức TCP thuộc tầng vận tải, có các đặc điểm sau: - Định hướng kết nối  - Đánh số tuần sự những đoạn tin bị thất lạc  - Đảm bảo tính tin cậy  - Điều khiển lưu lượng",
    chapterIdx: 0,
    answers: [
      {
        isKey: true,
        title: "Có độ tin cậy cao, đảm bảo chất lượng dịch vụ và có xác nhận",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Có độ tin cậy cao, đảm bảo chất lượng dịch vụ và có xác nhận",
      },
      {
        title: "Có xác nhận, không kiểm soát lỗi, kiểm soát luồng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Độ tin cậy cao, không xác nhận",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giao thức mạng (Protocol)",
      },
      {
        isKey: true,
        title: "Hình trạng mạng (Topology )",
        idx: 1,
      },
      {
        title: "Phương tiện truyền",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Các dịch vụ mạng",
        idx: 3,
      },
    ],
    chapterIdx: 0,

    title: "Khẳng định nào sau đây là đúng nói về cấu trúc vật lý của mạng:",
    idx: 19,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Mạng của các máy tính toàn cầu kết nối lại với nhau theo giao thức TCP/IP",
      },
      {
        title: "Mạng diện rộng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Mạng máy tính toàn cầu",
      },
      {
        title: "Mạng của các mạng con kết nối lại với nhau",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 20,
    title: "Mạng Internet là:",

    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Đường truyền chung",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Máy chủ mạng",
      },
      {
        title: "Bộ nhớ đệm",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Các thiết bị kết nối mạng",
        idx: 3,
      },
    ],
    idx: 21,
    bonus: "Đọc thêm về tình trạng (topology) của mạng ở trang 11 / 195",
    title: "Trong mạng hình BUS, tất cả các trạm truy nhập ngẫu nhiên vào:",
    chapterIdx: 0,
  },
  {
    title: "Mạng LAN hình sao (STAR) khi có sự cố:",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sẽ ngừng hoạt động toàn bộ hệ thống",
      },
      {
        title: "Không ảnh hưởng tới hoạt động toàn bộ hệ thống",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chỉ ảnh hướng đến trạm có sự cố",
        idx: 2,
        isKey: true,
      },
      {
        title: "Chỉ ảnh hướng đến một phần của hệ thống",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 0,
    idx: 22,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 0,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Hoạt động bình thường",
      },
      {
        title: "Đều ngưng hoạt động",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hoạt động không ổn định",
      },
      {
        isKey: false,
        title: "Các câu trên đều sai",
        idx: 3,
      },
    ],
    idx: 23,
    title:
      "Với kiểu kết nối mạng theo dạng hình sao (Star), khi một trạm trong mạng ngưng hoạt động thì các trạm còn lại:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 24,
    chapterIdx: 0,
    title:
      "Hình trạng mạng nào cho phép tất cả các cặp thiết bị đều có 1 đường nối vật lý trực tiếp:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "hay còn gọi là dạng hỗn hợp (11/195)",
    answers: [
      {
        isKey: false,
        title: "Star (dạng sao)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Bus (dạng đường trục)",
      },
      {
        isKey: true,
        idx: 2,
        title: "Mesh (dạng lưới)",
      },
      {
        isKey: false,
        idx: 3,
        title: "Hierarchical (dạng phân cấp)",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Cáp thẳng",
        idx: 0,
      },
      {
        title: "Cáp chéo",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Cáp cuộn",
        isKey: false,
      },
      {
        title: "Cả 3 loại trên",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Về nguyên tắc cơ bản, dùng cáp UTP Cat5e nào sau đây để kết nối trực tiếp giữa 2 PC với nhau:",

    idx: 25,
    chapterIdx: 0,
  },
  {
    bonus: "= 115",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 0,
    idx: 26,
    title: "Kết quả nào sau đây không đúng:",
    answers: [
      {
        idx: 0,
        title: "163 chuyển sang nhị phân sẽ có giá trị là: 10100011",
        isKey: false,
      },
      {
        title: "111 chuyển sang nhị phân sẽ có giá trị là : 01110011",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "125 chuyển sang nhị phân sẽ có giá trị là : 01111101",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "178 chuyển sang nhị phân sẽ có giá trị là : 10110010",
      },
    ],
  },
  {
    title: "Kiểu mạng nào được hạn chế ở cấp tòa cao ốc hay một công sở:",
    idx: 27,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 0,
    answers: [
      {
        title: "GAN",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "WAN",
      },
      {
        idx: 2,
        isKey: false,
        title: "MAN",
      },
      {
        title: "LAN",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    idx: 28,
    title: "Chiều dài tối đa của một đoạn trong kiến trúc 100Base-TX:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "3 km",
        idx: 0,
        isKey: false,
      },
      {
        title: "100 mét",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "550 mét",
      },
      {
        idx: 3,
        title: "25 mét",
        isKey: false,
      },
    ],
    chapterIdx: 0,
  },
  {
    chapterIdx: 0,
    idx: 29,
    title:
      "Xét về tỷ lệ lỗi trên đường truyền dữ liệu thì loại mạng nào cao nhất:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        isKey: false,
        title: "MAN",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "WAN",
      },
      {
        title: "Internet",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "LAN",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Độ dài tối đa cho phép khi sử dụng dây cáp mạng UTP là bao nhiêu mét:",
    answers: [
      {
        idx: 0,
        title: "100",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "200",
      },
      {
        idx: 2,
        title: "350",
        isKey: false,
      },
      {
        title: "400",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 30,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 0,
  },
  {
    answers: [
      {
        title: "Phân tích dữ liệu",
        idx: 0,
        isKey: false,
      },
      {
        title: "Lọc dữ liệu",
        isKey: false,
        idx: 1,
      },
      {
        title: "Đóng gói dữ liệu",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Kiểm thử dữ liệu",
      },
    ],

    bonus: "giống như ship hàng, trước khi ship thì phải đóng gói hàng hóa đã",
    title:
      "Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào:",
    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 31,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cáp quang",
      },
      {
        idx: 1,
        title: "Cáp UTP thẳng",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Cáp STP",
      },
      {
        title: "Cáp UTP chéo",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 32,
    chapterIdx: 0,

    title:
      "Khi nối mạng giữa 2 máy tính, thường sử dụng loại cáp nào để nối trực tiếp giữa chúng:",
  },
  {
    bonus:
      "Giao thức là tập hợp các quy ước về định dạng dữ liệu và các thủ tục để hai bên có thể trao đổi thông tin với nhau, do đó giao thức sẽ chứa đựng các đặc điểm riêng của mỗi loại hội thoại. Có thể hiểu truyền thông giống như trao đổi thông tin.",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Các giao thức",
      },
      {
        idx: 1,
        title: "Các dịch vụ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Các hệ điều hành mạng",
        idx: 2,
      },
      {
        isKey: false,
        title: "Các thiết bị mang tải",
        idx: 3,
      },
    ],
    idx: 33,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Các quy tắc điều quản việc truyền thông máy tính được gọi là:",
    chapterIdx: 0,
  },
  {
    chapterIdx: 0,
    title: "Hai kiểu máy tính khác nhau có thể truyền thông nếu:",
    idx: 34,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "Chúng cài đặt cùng hệ điều hành mạng",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Chúng tuân thủ theo mô hình OSI",
      },
      {
        isKey: false,
        idx: 2,
        title: "Chúng cùng dùng giao thức TCP/IP",
      },
      {
        isKey: false,
        title: "Chúng có phần cứng giống nhau",
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 0,
    idx: 35,
    answers: [
      {
        idx: 0,
        title: "Hub",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Switch",
      },
      {
        title: "Nối cáp trực tiếp",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Tất cả đều đúng",
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Để kết nối hai máy tính với nhau ta có thể sử dụng:",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "01111101",
      },
      {
        isKey: false,
        idx: 1,
        title: "01101111",
      },
      {
        idx: 2,
        isKey: false,
        title: "01011111",
      },
      {
        title: "1111101",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 36,
    title: "Biễu diễn số 125 từ cơ số decimal sang cơ số binary:",
    chapterIdx: 0,
  },
  {
    idx: 37,
    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "10100100",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "10010010",
        idx: 1,
      },
      {
        isKey: false,
        title: "11000100",
        idx: 2,
      },
      {
        isKey: false,
        title: "10101010",
        idx: 3,
      },
    ],
    title: "Số nhị phân nào dưới đây có giá trị là 164:",
  },
  {
    chapterIdx: 0,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Thiết bị nào hoạt động ở tầng Vật lý:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Switch",
      },
      {
        idx: 1,
        title: "Card mạng",
        isKey: false,
      },
      {
        title: "Hub và repeater",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Router",
        isKey: false,
      },
    ],
    idx: 38,
  },
  {
    idx: 39,
    title: "Môi trường truyền tin thông thuờng trong mạng máy tính là:",
    answers: [
      {
        title: "Các loại cáp như: UTP, STP, cáp điện thoại, cáp quang,...",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Sóng hồng ngoại",
        isKey: false,
      },
      {
        title: "Tất cả môi trường nêu trên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Không cái gì đúng",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 0,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Máy tính, hub, switch",
      },
      {
        idx: 1,
        isKey: false,
        title: "Network adapter, cable",
      },
      {
        title: "Protocol",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
    chapterIdx: 0,
    title: "Các thành phần tạo nên mạng là:",
    idx: 40,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 0,
    title:
      "Khẳng định nào sau đây là đúng khi nói về đặc tính để phân biệt một tế bào (cell) và một gói tin:",
    idx: 41,

    bonus:
      "Frames and packets, in general, can be of variable l ength, depending on their contents;  In contrast, a cell is most often a message that is  fixed in size. ",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Các tế bào nhỏ hơn một gói tin",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Các tế bào không có địa chỉ vật lý",
        isKey: false,
      },
      {
        isKey: false,
        title: "Các tế bào có độ dài cố định",
        idx: 2,
      },
      {
        title: "Các gói tin có độ dài cố định",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    idx: 42,
    title: "Protocol là:",

    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title:
          "Các qui tắc để cho phép các máy tính có thể giao tiếp được với nhau",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Một trong những thành phần không thể thiếu trong hệ thống mạng",
      },
      {
        idx: 2,
        title: "A và B sai",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "A và B đúng",
      },
    ],
  },
  {
    title: "Thiết bị nào sau đây được sử dụng tại trung tâm của mạng hình sao:",
    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 43,
    bonus:
      "Dạng sao mở rộng kết nối các dạng hình sao với nhau bằng cách sử dụng các thiết bị tập trung (hub) hoặc thiết bị chuyển mạch (switch). Switch và bridge thường được sử dụng để thay thế cho nhau)",
    answers: [
      {
        isKey: true,
        title: "Switch, Brigde",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Netcard",
      },
      {
        idx: 2,
        isKey: false,
        title: "Port",
      },
      {
        title: "Repeater",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "RING",
        idx: 0,
      },
      {
        title: "BUS",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "STAR",
      },
      {
        title: "Có thể sử dụng riêng hoặc phối hợp cả A, B và C",
        isKey: true,
        idx: 3,
      },
    ],
    title: "Kiến trúc một mạng LAN có thể là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 44,
    chapterIdx: 0,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Giá trị của 11101101 (giá trị các bit nhị phân) trong cơ số 16 là:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "CB",
      },
      {
        isKey: true,
        idx: 1,
        title: "ED",
      },
      {
        title: "CF",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "EC",
      },
    ],
    idx: 45,
    chapterIdx: 0,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Mô tả nào sau đây dành cho mạng hình sao (star):",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Truyền dữ liệu qua cáp đồng trục",
      },
      {
        isKey: false,
        idx: 1,
        title: "Mỗi nút mạng đều kết nối trực tiếp với tất cả các nút khác",
      },
      {
        title: "Có một nút trung tâm và các nút mạng khác kết nối đến",
        idx: 2,
        isKey: true,
      },
      {
        title: "Các nút mạng sử dụng chung một đường cáp",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 46,

    chapterIdx: 0,
  },
  {
    chapterIdx: 0,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cáp đồng trục",
      },
      {
        idx: 1,
        isKey: false,
        title: "Cáp STP",
      },
      {
        isKey: true,
        title: "Cáp UTP (CAT 5)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Cáp quang",
        idx: 3,
      },
    ],
    idx: 47,
    title: "Loại cáp nào được sử dụng phổ biến nhất hiện nay:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "TCP/IP",
      },
      {
        idx: 1,
        title: "NetBIOS",
        isKey: false,
      },
      {
        isKey: false,
        title: "IPX",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tất cả các câu trên",
        isKey: true,
      },
    ],
    chapterIdx: 0,
    title: "Giao thức mạng nào dưới đây được sử dụng trong mạng cục bộ LAN:",
    idx: 48,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Khẳng định nào sau đây là đúng khi nói về giao thức sử dụng trên cáp sợi quang:",
    idx: 49,
    answers: [
      {
        title: "Frame Relay",
        idx: 0,
        isKey: true,
      },
      {
        title: "FDDI",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "SONET",
        isKey: false,
      },
      {
        title: "Cả B và C đều đúng",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    bonusLink:
      "https://en.wikipedia.org/wiki/Internet_Standard#:~:text=In%20co mputer%20network%20engineering%2C%20an,Engineering%20Task%20For ce%20(IETF).&text=An%20Internet%20Standard%20is%20characterized %20by%20technical%20maturity%20and%20usefulness.",
    answers: [
      {
        isKey: false,
        title: "TCP và UDP",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "ACK và NAK",
      },
      {
        isKey: true,
        idx: 2,
        title: "RFC và IETF",
      },
      {
        isKey: false,
        title: "FDM và TDM",
        idx: 3,
      },
    ],
    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    title: "Các chuẩn Internet là:",
    idx: 50,
  },
  {
    title: "Các chuẩn Internet là:",
    bonusLink:
      "https://en.wikipedia.org/wiki/Internet_Standard#:~:text=In%20co mputer%20network%20engineering%2C%20an,Engineering%20Task%20For ce%20(IETF).&text=An%20Internet%20Standard%20is%20characterized %20by%20technical%20maturity%20and%20usefulness",

    bonus:
      "TDM (ghép kênh phân chia thời gian) và FDM (ghép kênh phân chia tần số) là hai kỹ thuật ghép kênh",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 0,
    idx: 51,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "TCP và UDP",
      },
      {
        idx: 1,
        isKey: false,
        title: "ACK và NAK",
      },
      {
        isKey: true,
        title: "RFC và IETF",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "FDM và TDM",
      },
    ],
  },
  {
    chapterIdx: 0,
    idx: 52,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Giải thông (bandwidth) là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tốc độ truyền dữ liệu trên đường truyền",
      },
      {
        title: "Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Độ đo sự yếu đi của tín hiệu trên đường truyền",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền",
      },
    ],
  },
  {
    title: "Thông lượng (throughput) là:",
    bonus:
      "Băng thông là lượng thông tin tối đa có thể chuyển tải trên mạng trong một đơn vị thời gian. Thông lượng là lượng thông tin thực tế được vận chuyển qua mạng trong một đơn vị thời gian.",

    chapterIdx: 0,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Tốc độ truyền dữ liệu trên đường truyền",
      },
      {
        idx: 1,
        title: "Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Độ đo sự yếu đi của tín hiệu trên đường truyền",
      },
      {
        title:
          "Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 53,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Độ suy hao là:",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tốc độ truyền dữ liệu trên đường truyền",
      },
      {
        isKey: false,
        title: "Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Độ đo sự yếu đi của tín hiệu trên đường truyền",
      },
      {
        isKey: false,
        title:
          "Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền",
        idx: 3,
      },
    ],
    chapterIdx: 0,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 54,
  },
  {
    chapterIdx: 0,
    title: "Độ nhiễu điện từ là:",
    idx: 55,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tốc độ truyền dữ liệu trên đường truyền",
      },
      {
        title: "Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
        idx: 1,
        isKey: false,
      },
      {
        title: "Độ đo sự yếu đi của tín hiệu trên đường truyền",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền",
        isKey: true,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Truyền dẫn theo dải cơ sở (baseband):",
    idx: 56,
    chapterIdx: 0,
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Toàn bộ khả năng đường truyền được dành cho một kênh thông duy nhất",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Hai kênh truyền thông cùng phân chia giải thông của đường truyền",
      },
      {
        title:
          "Ba kênh truyền thông cùng phân chia giải thông của đường truyền",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Nhiều kênh truyền thông cùng phân chia giải thông của đường truyền",
        isKey: false,
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 57,
    answers: [
      {
        title:
          "Toàn bộ khả năng đường truyền được dành cho một kênh thông duy nhất",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Hai kênh truyền thông cùng phân chia giải thông của đường truyền",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Ba kênh truyền thông cùng phân chia giải thông của đường truyền",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Nhiều kênh truyền thông cùng phân chia giải thông của đường truyền",
      },
    ],
    chapterIdx: 0,
    title: "Truyền dẫn theo dải rộng (broadband):",
  },
  {
    title: "Thứ tự của các tầng trong mô hình tham chiếu OSI:",
    idx: 58,
    chapterIdx: 1,

    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Physical, Data Link, Network, Transport, System, Presentation, Application",
      },
      {
        title:
          "Physical, Data Link, Network, Transport, Session, Presentation, Application",
        isKey: true,
        idx: 1,
      },
      {
        title:
          "Physical, Data Link, Network, Transform, Session, Presentation, Application",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Presentation, Data Link, Network, Transport, Session, Physical, Application",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        title: "Application, Internet, Transport, Network Access",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Application, Network Access, Transport, Internet",
        isKey: false,
      },
      {
        title: "Application, Transport, Internet, Network Access",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Transport, Internet, Application, Network Access",
      },
    ],
    chapterIdx: 1,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 59,
    title: "Thứ tự các tầng từ cao đến thấp trong mô hình TCP/IP:",
  },
  {
    title: "Thứ tự đúng của các đơn vị dữ liệu trong mô hình TCP/IP:",
    chapterIdx: 1,

    idx: 60,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Data, Frame, Segment, Packet, Bit",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Data, Segment, Frame, Packet, Bit",
      },
      {
        title: "Data, Packet, Frame, Segment, Bit",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Data, Segment, Packet, Frame, Bit",
        isKey: true,
      },
    ],
    bonus:
      "Ứng dụng, vận chuyển, mạng, network access (bit: vật lý, frame: liên kết)",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 1,

    title: "Thứ tự các tầng của mô hình OSI theo thứ tự từ trên xuống là:",
    idx: 61,
    answers: [
      {
        title: "Ứng dụng, Trình diễn, Phiên, Giao vận, Liên kết, Mạng, Vật lý",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Ứng dụng, Trình diễn, Phiên, Mạng, Giao vận, Liên kết, Vật lý",
      },
      {
        idx: 2,
        isKey: true,
        title: "Ứng dụng, Trình diễn, Phiên, Giao vận, Mạng, Liên kết, Vật lý",
      },
      {
        isKey: false,
        idx: 3,
        title: "Ứng dụng, Trình diễn, Giao vận, Phiên, Liên kết, Mạng, Vật lý",
      },
    ],
  },
  {
    title: "Chức năng của tầng trình diễn là chuyển đổi:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 1,
    idx: 62,
    answers: [
      {
        title: "Ngôn ngữ người sử dụng về ngôn ngữ chung của mạng",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Cấu trúc thông tin về cấu trúc khung",
        isKey: false,
      },
      {
        isKey: false,
        title: "Khuôn dạng của gói tin",
        idx: 2,
      },
      {
        title: "Các phiên truyền thông giữa các thực thể",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title: "Chức năng của tầng giao vận là:",
    chapterIdx: 1,
    idx: 63,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Vận chuyển thông tin giữa các máy chủ (End to End)",
      },
      {
        isKey: true,
        title: "Kiểm soát lỗi và luồng dữ liệu",
        idx: 1,
      },
      {
        idx: 2,
        title: "Đóng gói và vận chuyển thông tin",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân mảnh và đóng gói dữ liệu",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 1,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Chức năng của tầng mạng là:",

    answers: [
      {
        title: "Thực hiện chọn đường",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Thực hiện chuyển mạch",
        isKey: false,
      },
      {
        title: "Kiểm soát lỗi và luồng dữ liệu",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Đóng gói dữ liệu",
      },
    ],
    idx: 64,
  },
  {
    title: "Chức năng của tầng liên kết dữ liệu là:",

    chapterIdx: 1,
    idx: 65,
    answers: [
      {
        title: "Tạo khung thông tin (Frame)",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đóng gói dữ liệu",
      },
      {
        isKey: false,
        title: "Chọn đường",
        idx: 2,
      },
      {
        title: "Vận chuyển thông tin giữa các máy chủ (End to End)",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        isKey: true,
        title:
          "Đảm bảo các yêu cầu truyền/nhận các chuỗi bit qua các phương tiện vật lý",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Kiểm soát lỗi và luồng dữ liệu",
      },
      {
        isKey: false,
        idx: 2,
        title: "Tạo khung thông tin",
      },
      {
        idx: 3,
        title: "Phân mảnh và đóng gói dữ liệu",
        isKey: false,
      },
    ],
    title: "Chức năng của tầng vật lý là:",

    chapterIdx: 1,
    idx: 66,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 67,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giao vận",
      },
      {
        isKey: false,
        idx: 1,
        title: "Mạng",
      },
      {
        title: "Liên kết dữ liệu",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Vật lý",
        isKey: true,
      },
    ],
    chapterIdx: 1,
    title:
      "Khi kết nối máy tính từ nhà vào ISP thông qua đường dây điện thoại, tín hiệu trên  đường điện thoại sẽ thuộc về tầng:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 68,
    bonus:
      "Các chức năng:  - Mã hóa/Giải mã dữ liệu (Encode/Decode)  - Nén/Giải nén   - Mã hóa/Giải mã bảo mật (Encrypt/Decrypt)",
    chapterIdx: 1,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ứng dụng",
      },
      {
        isKey: false,
        idx: 1,
        title: "Phiên",
      },
      {
        title: "Trình diễn",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Mạng",
        idx: 3,
      },
    ],

    title: "Theo mô hình OSI, định dạng ảnh JPG nằm ở tầng:",
  },
  {
    idx: 69,
    chapterIdx: 1,
    title: "Mô hình OSI chia hoạt động truyền thông thành mấy tầng:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        title: "7 tầng",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "5 tầng",
      },
      {
        isKey: false,
        title: "4 tầng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "3 tầng",
      },
    ],
  },
  {
    chapterIdx: 1,
    title: "Các tầng của mô hình OSI theo thứ tự từ dưới lên là:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 70,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Vật lý, TCP, IP, Mạng, Giao vận, Phiên, Trình diễn và Ứng dụng",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Vật lý, Liên kết dữ liệu, Giao vận, Mạng, Phiên, Trình diễn và Ứng dụng",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Vật lý, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn và Ứng dụng",
      },
      {
        idx: 3,
        title: "Vật lý, Liên kết dữ liệu, Mạng, TCP, IP, Phiên và Ứng dụng",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        title: "Tầng ứng dụng",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tầng trình diễn",
      },
      {
        title: "Tầng phiên",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tầng vận chuyển",
      },
    ],
    idx: 71,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 1,
    title: "Tầng nào xác định giao diện giữa người sử dụng và môi trường OSI:",
  },
  {
    title:
      'Tầng nào dưới đây thiết lập, duy trì, huỷ bỏ "các giao dịch" giữa các thực thể đầu  cuối:',
    chapterIdx: 1,
    bonus:
      "Tầng mạng chịu trách nhiệm chuyển dữ liệu giữa các thiết bị đầu cuối của người sử dụng.  Tầng vận tải đảm bảo liên kết đầu cuối tới mức tiến trình thì tầng mạng chỉ đảm bảo liên kết ở mức đầu cuối của người sử dụng.",
    answers: [
      {
        isKey: true,
        title: "Tầng mạng",
        idx: 0,
      },
      {
        title: "Tầng liên kết dữ liệu",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tầng phiên",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tầng vật lý",
      },
    ],
    idx: 72,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tầng mạng",
      },
      {
        idx: 1,
        isKey: true,
        title: "Tầng giao vận",
      },
      {
        idx: 2,
        isKey: false,
        title: "Tầng liên kết dữ liệu",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tầng phiên",
      },
    ],
    chapterIdx: 1,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 73,

    title:
      "Tầng nào thực hiện việc chuyển giao các thông điệp giữa các tiến trình trên các thiết  bị:",
    bonus:
      "Tầng vận tải chịu trách nhiệm chuyển toàn bộ bản tin từ nơi gửi đến nơi nhận một cách toàn vẹn (ở mức tiến trình)",
  },
  {
    title: "Điều khiển các cuộc liên lạc là chức năng của tầng nào:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 74,

    chapterIdx: 1,
    answers: [
      {
        isKey: false,
        title: "Vật lý",
        idx: 0,
      },
      {
        title: "Tầng mạng",
        isKey: true,
        idx: 1,
      },
      {
        title: "Tầng phiên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tầng trình diễn",
        idx: 3,
      },
    ],
  },
  {
    idx: 75,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "tầng mạng có chức năng định tuyến,...",
    title:
      "Trong mô hình OSI, tầng nào thực hiện việc chọn đường và chuyển tiếp thông tin:",
    answers: [
      {
        idx: 0,
        title: "Network",
        isKey: true,
      },
      {
        title: "Transport",
        idx: 1,
        isKey: false,
      },
      {
        title: "Session",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Data link",
        isKey: false,
      },
    ],
    chapterIdx: 1,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Tầng phiên",
        isKey: true,
      },
      {
        title: "Tầng giao vận",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tầng liên kết dữ liệu",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Tầng vật lý",
        idx: 3,
      },
    ],
    chapterIdx: 1,
    idx: 76,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Trong mô hình OSI, việc mở và đóng các cuộc hội thoại giữa các máy tính là trách  nhiệm của:",
    bonus:
      "Tầng phiên đóng vai trò kiểm soát viên hội thoại giữa các tiến trình trên lớp ứng dụng qua mạng",
  },
  {
    title:
      "Trong mô hình OSI, đâu là mối quan hệ của một tầng (N) đối với tầng bên trên nó  (N+1):",
    bonus:
      "Trong mỗi máy, mỗi tầng sử dụng  các dịch vụ do tầng bên dưới cung cấp.",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 77,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Tầng N cung cấp các dịch vụ cho tầng N+1",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Tầng N+1 bổ sung một phần đầu vào thông tin nhận được từ tầng N",
      },
      {
        isKey: false,
        title: "Tầng N vận dụng các dịch vụ do tầng N+1 cung cấp",
        idx: 2,
      },
      {
        isKey: false,
        title: "Tầng N không có tác động gì lên tầng N+1",
        idx: 3,
      },
    ],
    chapterIdx: 1,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Trong mô hình mạng Internet, chuẩn UNICODE (cho việc mã hoá các ký tự) sẽ nằm  ở tầng:",
    idx: 78,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Ứng dụng",
      },
      {
        title: "Giao vận",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Mạng",
      },
      {
        isKey: false,
        idx: 3,
        title: "Liên kết dữ liệu",
      },
    ],

    chapterIdx: 1,
  },
  {
    idx: 79,

    chapterIdx: 1,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "Ứng dụng",
        idx: 0,
      },
      {
        title: "Phiên",
        idx: 1,
        isKey: false,
      },
      {
        title: "Trình diễn",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Mạng",
        idx: 3,
      },
    ],
    title: "Theo mô hình OSI, định dạng ảnh JPG nằm ở tầng:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "Byte",
        isKey: false,
      },
      {
        title: "Data",
        isKey: true,
        idx: 1,
      },
      {
        title: "Frame",
        isKey: false,
        idx: 2,
      },
      {
        title: "Packet",
        isKey: false,
        idx: 3,
      },
    ],

    chapterIdx: 1,
    idx: 80,
    title: "Đơn vị dữ liệu ở tầng presentation là:",
  },
  {
    chapterIdx: 1,
    answers: [
      {
        isKey: true,
        title: "Mã hoá dữ liệu và nén dữ liệu",
        idx: 0,
      },
      {
        isKey: false,
        title: "Cung cấp các dịch vụ mạng người dùng",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đánh địa chỉ",
      },
      {
        title: "Tất cả đều sai",
        isKey: false,
        idx: 3,
      },
    ],
    bonus:
      "- Mã hóa/Giải mã dữ liệu (Encode/Decode). - Nén/Giải nén  - Mã hóa/Giải mã bảo mật (Encrypt/Decrypt)",
    title: "Chọn chức năng của tầng Presentation:",
    idx: 81,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 1,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    title: "Tầng nào trong mô hình OSI chịu trách nhiệm mã hoá dữ liệu:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Application",
      },
      {
        title: "Presentation",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Session",
        isKey: false,
      },
      {
        idx: 3,
        title: "Transport",
        isKey: false,
      },
    ],
    idx: 82,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Data Link",
      },
      {
        idx: 1,
        title: "Network",
        isKey: false,
      },
      {
        isKey: true,
        title: "Physical",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Transport",
      },
    ],

    chapterIdx: 1,
    idx: 83,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Tầng nào trong mô hình OSI làm việc với các tín hiệu điện:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "7 tầng",
        isKey: false,
      },
      {
        title: "6 tầng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "4 tầng",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "3 tầng",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 84,
    chapterIdx: 1,
    title: "Mô hình TCP/IP chia hoạt động truyền thông thành mấy tầng:",
  },
  {
    idx: 85,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ứng dụng, Mạng, Giao vận, Truy nhập mạng",
      },
      {
        title: "Mạng, Giao vận, Truy nhập mạng, Ứng dụng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Truy nhập mạng, Mạng, Giao vận, Ứng dụng",
      },
      {
        title: "Truy nhập mạng, Giao vận, Mạng, Ứng dụng",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 1,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Thứ tự các tầng từ thấp đến cao trong mô hình TCP/IP:",
  },
  {
    chapterIdx: 1,
    idx: 86,
    answers: [
      {
        title: "Byte",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Data",
      },
      {
        title: "Frame",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Packet",
      },
    ],
    title: "Đơn vị dữ liệu ở tầng Data link là:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 87,
    chapterIdx: 1,

    title: "Đơn vị dữ liệu ở tầng Internet là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Byte",
      },
      {
        title: "Data",
        idx: 1,
        isKey: false,
      },
      {
        title: "Frame",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Datagram",
      },
    ],
  },
  {
    answers: [
      {
        title: "Tạo khung thông tin (Frame)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đóng gói dữ liệu",
      },
      {
        isKey: true,
        title:
          "Cung cấp các phương tiện để người dùng có thể truy nhập được vào môi trường mạng",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Vận chuyển thông tin giữa các máy chủ (End to End)",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 1,
    idx: 88,
    title: "Chức năng của tầng ứng dụng là:",
  },
  {
    title: "FTP là từ viết tắt của:",
    idx: 89,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 2,
    answers: [
      {
        title: "File Transfer Protocol",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Folder Transfer Protocol",
      },
      {
        title: "Protocol Transfer Program",
        isKey: false,
        idx: 2,
      },
      {
        title: "Protocol Transfer Folder",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 90,
    title: "HTTP là từ viết tắt của:",

    chapterIdx: 2,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "HyperText Transmision Protocol",
      },
      {
        title: "HyperText Transit Protocol",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "HyperText Transfer Protocol",
      },
      {
        title: "HyperText Treat Protocol",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 2,
    bonus:
      "Hiện nay có 2 giao thức lấy thư thông dụng là POP3 và IMAP   POP3 được khởi tạo kết nối TCP tới máy chủ thư điện tử qua cổng 110. ",
    idx: 91,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "53",
      },
      {
        title: "23",
        isKey: false,
        idx: 1,
      },
      {
        title: "25",
        isKey: false,
        idx: 2,
      },
      {
        title: "110",
        idx: 3,
        isKey: true,
      },
    ],
    title: "Giao thức POP3 sử dụng cổng dịch vụ số:",
  },
  {
    bonus:
      "Thiết kể DNS tập trung  nẩy sinh một số vấn đề sau: - Điểm hỏng duy nhất: nếu máy chủ tên miền duy nhất ngừng làm việc cũng có nghĩa là toàn bộ mạng Internet ngừng hoạt động. - Khối lượng xử lý lớn: một máy chủ tên miền duy nhất phải xử lý tất cả các truy vấn DNS - Cơ sở dữ liệu tập trung ở xa: máy chủ tên miền duy nhất không thể gần tất cả các máy khách.  - Bảo trì: máy chủ tên miền phải ghi nhớ  thông tin về tất cả các tên miền trên mạng Intemet.",
    answers: [
      {
        title: "Phân giải tên netbios",
        idx: 0,
        isKey: false,
      },
      {
        title: "Phân giải tên miền (IP sang tên và ngược lại)",
        isKey: true,
        idx: 1,
      },
      {
        title: "Phân giải địa chỉ MAC",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Tất cả đều sai",
        idx: 3,
      },
    ],
    idx: 92,
    chapterIdx: 2,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Dịch vụ DNS có chức năng chính là gì:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 93,
    chapterIdx: 2,
    answers: [
      {
        title: "Nếu điểm tập trung bị hỏng, toàn bộ hệ thống sẽ bị tê liệt",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Số lượng yêu cầu phục vụ tại điểm tập trung duy nhất sẽ rất lớn",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chi phí bảo trì hệ thống rất lớn",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Tất cả câu trả lời trên",
        idx: 3,
      },
    ],

    title:
      "Nhược điểm nếu xây dựng hệ thống dịch vụ tên miền (DNS) theo mô hình tập trung  là:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "23",
      },
      {
        isKey: true,
        title: "25",
        idx: 1,
      },
      {
        idx: 2,
        title: "21",
        isKey: false,
      },
      {
        isKey: false,
        title: "110",
        idx: 3,
      },
    ],
    title: "Số hiệu cổng (port) của giao thức truyền mail SMTP là:",
    bonus: "SMTP máy khách thiết lập kết nối TCP với cổng 25 tại SMTP máy chủ",
    idx: 94,
    chapterIdx: 2,
  },
  {
    bonus:
      "Giao thức trao đổi tên miền DNS thuộc tầng ứng dung và chạy trên nền giao thức UDP với số hiệu cổng là 53.",
    title: "Giao thức truyền thông trong DNS sử dụng cổng dịch vụ số:",
    idx: 95,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "21",
      },
      {
        isKey: false,
        title: "25",
        idx: 1,
      },
      {
        title: "53",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "110",
      },
    ],
    chapterIdx: 2,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 2,
    title: "Trong số các cặp giao thức và cổng dịch vụ sau, cặp nào là sai:",
    bonus: "HTTP sử dụng cổng 80, FTP sử dụng cổng 20 và 21.",
    answers: [
      {
        title: "SMTP:TCP Port 25",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "FTP:UDP Port 22",
        isKey: true,
      },
      {
        title: "HTTP:TCP Port 80",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "DNS:UDP Port 53",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 96,
  },
  {
    bonus:
      "Giao thức trao đổi tên miền DNS thuộc tầng ứng dung và chạy trên nền giao thức UDP với số hiệu cổng là 53.",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 97,
    chapterIdx: 2,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "ARP",
      },
      {
        isKey: true,
        title: "DNS",
        idx: 1,
      },
      {
        isKey: false,
        title: "Telnet",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả các câu trên đều đúng",
      },
    ],
    title: "Giao thức nào sau đây hoạt động trên nền giao thức UDP:",
  },
  {
    chapterIdx: 2,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "Là một thủ tục World Wide Web",
        idx: 0,
      },
      {
        title: "Phương thức liên kết các file văn bản",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Là công cụ soạn thảo trang thông tin Web",
      },
      {
        title: "Giao diện Web",
        idx: 3,
        isKey: false,
      },
    ],
    bonus:
      "Trình duyệt web đọc định dạng HTML để hiển thị, do vậy một trang web có thể hiển thị khác nhau trên các trình duyệt khác nhau.",
    title:
      "Khẳng định nào sau đây là đúng khi nói về ngôn ngữ đánh dấu siêu văn bản HTML:",
    idx: 98,
  },
  {
    chapterIdx: 2,
    answers: [
      {
        title: "Web Server",
        idx: 0,
        isKey: false,
      },
      {
        title: "Mail Server",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "FTP Server",
      },
      {
        idx: 3,
        isKey: false,
        title: "Proxy",
      },
    ],
    title:
      "Khẳng định nào sau đây là đúng khi nói về tên gọi loại máy chủ cung cấp dịch vụ  thư điện tử:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 99,
    bonus:
      "Proxy là một Internet server làm nhiệm vụ chuyển tiếp thông tin  và kiểm soát tạo sự an toàn cho việc truy cập Internet  của các máy khách, còn gọi là khách hàng sử dụng dịch vụ Internet. ",
  },
  {
    chapterIdx: 2,
    title:
      "Khẳng định nào sau đây là đúng khi nói về đơn vị dữ liệu của tầng Ứng dụng  (Application):",
    answers: [
      {
        title: "Message (Thông điệp)",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Segment/ Datagram (Đoạn/Bó dữ liệu)",
        idx: 1,
      },
      {
        isKey: false,
        title: "Packet (Gói dữ liệu)",
        idx: 2,
      },
      {
        title: "Frame (Khung dữ liệu)",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 100,
  },
  {
    title: "HTTP (Hypertex Transfer Protocol) là:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Giao thức ứng dụng cho phép các máy tính giao tiếp với nhau qua Web và có khả năng  liên kết các trang Web với nhau.",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giao thức tầng vận chuyển cho phép truyền tải các trang Web.",
      },
      {
        isKey: false,
        idx: 2,
        title: "Một thành phần tên miền.",
      },
      {
        isKey: false,
        idx: 3,
        title: "Giao diện Web.",
      },
    ],
    chapterIdx: 2,
    idx: 101,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 2,
    bonus:
      "Giao thức chuyển dữ liệu siêu văn bản HTTP là  giao thức căn bản sử dụng trong việc trao đổi thông tin  giữa máy khách và máy chủ Web. ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tầng trình diễn",
      },
      {
        title: "Tầng phiên",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tầng ứng dụng",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Tầng liên kết dữ liệu",
        isKey: false,
      },
    ],
    idx: 102,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Các giao thức ứng dụng hoạt động trên:",
  },
  {
    chapterIdx: 2,
    title: "HTTP làm nhiệm vụ gì:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Cung cấp một cơ chế để lấy dữ liệu từ server chuyển đến client",
      },
      {
        title:
          "Hiển thị các trang Web từ xa trên màn hình và giúp người dùng tương tác với chúng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Cung cấp giao diện người dùng như các nút bấm, thanh trượt,…",
      },
      {
        title:
          "Cung cấp dữ liệu từ server sử dụng giao thức chuyển file (File Transport Protocol)",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 103,
  },
  {
    bonusLink: "https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Trên Internet, email được gửi từ máy nguồn bằng cách thiết lập một kết nối TCP  đến một cổng cụ thể trên máy đích. Cổng đó là:",
    idx: 104,
    chapterIdx: 2,
    answers: [
      {
        title: "80",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "110",
        idx: 1,
      },
      {
        isKey: true,
        title: "25",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "404",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "cnn.com là tên viết tắt (rút gọn) của r1.infor.cnn.com",
        isKey: true,
      },
      {
        title: "r1.infor.cnn.com là tên viết tắt (rút gọn) của cnn.com",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Cả A và B đều đún",
      },
      {
        idx: 3,
        isKey: false,
        title: "Cả A và B đều sai",
      },
    ],
    idx: 105,
    title:
      "Giả sử có một bản ghi của dịch vụ DNS là (cnn.com, r1.infor.cnn.com, CNAME)",
    chapterIdx: 2,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Giao thức được sử dụng để 2 bên truyền file là:",

    idx: 106,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "Đọc thêm ở: 2.3.3 Bản ghi dịch vụ tên miền",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "HTTP",
      },
      {
        idx: 1,
        isKey: true,
        title: "FTP",
      },
      {
        idx: 2,
        title: "SMTP",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "SNMP",
      },
    ],
    chapterIdx: 2,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "123.4.5.7 là địa chỉ IP của máy alpha.com",
      },
      {
        title: "alpha.com là một tên miền, không phải là một máy",
        idx: 1,
        isKey: true,
      },
      {
        title:
          "123.4.5.7 là địa chỉ IP của máy phục vụ thư (mail server) có tên miền là google.com",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Tất cả đều sai",
        isKey: false,
      },
    ],
    chapterIdx: 2,
    title:
      "Giả sử có một bản ghi của dịch vụ DNS là (alpha.com, 123.4.5.7, NS). Chọn câu trả lời đúng:",
    idx: 107,
    bonus:
      "Tất cả các type trừ NS đều có Name là tên máy. Nếu Type = NS thì Name là một miền và Value là tên máy của máy chủ tên miền ủy quyền của các máy tính trong miền đó. ",
  },
  {
    title:
      "Giả sử tất cả các máy tính thuê bao Internet của FPT khi truy cập vào website  google.com đều bị chuyển hướng sang một trang web khác. Các máy tính thuê bao các ISP khác  không gặp tình huống này. Nguyên nhân gây ra lỗi lớn nhất sẽ là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        idx: 0,
        title: "Các máy tính bị nhiễm virus",
        isKey: false,
      },
      {
        isKey: false,
        title: "Website google bị lỗi",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "DNS server của FPT bị lỗi",
      },
      {
        title: "Router ra ngoài của ISP FPT bị lỗi",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 108,
    chapterIdx: 2,
  },
  {
    answers: [
      {
        title: "Netscape Navigator",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Browers",
        idx: 1,
      },
      {
        idx: 2,
        title: "Mosaic",
        isKey: false,
      },
      {
        title: "HTML interpreter (trình thông dịch HTML)",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Các Web client thường được gọi là gì:",
    idx: 109,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 2,
  },
  {
    idx: 110,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 2,

    title: "Web server thường sử dụng phần mềm chạy trên:",
    bonus:
      "Tiến trình máy chủ web nhận được bản tin yêu cầu từ cổng dịch vụ số 80,  lấy đối tượng english/index.html trong bộ nhớ của mình ,  đặt đối tượng này vào trong một bản tin trả lời và gửi trở lại cổng 80",
    answers: [
      {
        isKey: false,
        title: "Cổng 25",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Cổng 404",
      },
      {
        title: "Cổng 125",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Cổng 80",
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 2,
    answers: [
      {
        idx: 0,
        title: "HTTP",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Mosaic",
      },
      {
        isKey: true,
        title: "HTML",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Netscape",
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 111,
    title:
      "Để thiết kế một trang Web như chúng ta vẫn thấy trên màn hình (các định dạng font  chữ, màu sắc, các hiệu ứng đồ họa, các đường liên kết), người ta đã phát triển một kiểu định dạng  đặc biệt. Định dạng trang chuẩn được dùng trong Web là:",
  },
  {
    chapterIdx: 2,
    idx: 112,

    answers: [
      {
        idx: 0,
        title: "Phiên bản giao thức luôn được đặt trong tất cả thông điệp",
        isKey: false,
      },
      {
        idx: 1,
        title: "Tất cả các tiêu đề đều dưới dạng text",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tất cả dữ liệu đều truyền dưới dạng văn bản (text)",
      },
      {
        title: "A và B",
        idx: 3,
        isKey: true,
      },
    ],
    title: "Phát biểu nào sau đây đúng về giao thức HTTP:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Trong những thông điệp HTTP trả lời dưới đây, thông điệp nào đúng:",
    bonus:
      "200 OK  301 Moved permanetly  400 Bad Request  404 Not found  505 HTTP version not support",
    idx: 113,
    answers: [
      {
        isKey: true,
        title: 'A. 200 "OK"',
        idx: 0,
      },
      {
        title: 'B. 201 "Moved Permanently"',
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: 'C. 404 "Not Modified"',
      },
      {
        isKey: false,
        idx: 3,
        title: 'D. 20 "Not Implemented"',
      },
    ],

    chapterIdx: 2,
  },
  {
    chapterIdx: 2,
    bonus:
      "Đầu tiên, tiến trình thư điện tử trên máy khách sử dụng tên và mật khẩu để xác nhận người sử dụng (Authorization), sau đó sẽ lấy danh sách thư có trong hộp thư của người dùng (đọc thư),  nó có thể đánh dấu các thư để xoá hay hủy bỏ đánh đấu xoá (Xoá thư)",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        title: "Kiểm chứng (Authorization)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Đọc một thư (Retrieving a message)",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Xoá một thư",
      },
      {
        idx: 3,
        title: "Tất cả đều đúng",
        isKey: true,
      },
    ],
    title: "Những thông điệp nào dưới đây được giao thức POP3 hỗ trợ:",
    idx: 114,
  },
  {
    answers: [
      {
        title: "IP",
        idx: 0,
        isKey: false,
      },
      {
        title: "HTTP",
        idx: 1,
        isKey: true,
      },
      {
        title: "NFS",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "TCP",
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 2,
    title: "Giao thức nào thuộc tầng Application:",
    idx: 115,
  },
  {
    idx: 116,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "WinWord",
      },
      {
        isKey: true,
        idx: 1,
        title: "WWW (World Wide Web)",
      },
      {
        idx: 2,
        isKey: false,
        title: "Excel",
      },
      {
        isKey: false,
        title: "Photoshop",
        idx: 3,
      },
    ],
    chapterIdx: 2,
    title: "Cho biết ứng dụng nào thuộc loại Client/Server:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    bonus: "404 NOT FOUND!",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Server không hiểu yêu cầu của client",
      },
      {
        idx: 1,
        isKey: true,
        title: "Đối tượng client yêu cầu không có",
      },
      {
        isKey: false,
        idx: 2,
        title: "Không có câu trả lời nào đúng",
      },
      {
        idx: 3,
        isKey: false,
        title: "Yêu cầu của Client không hợp lệ",
      },
    ],
    idx: 117,
    chapterIdx: 2,
    title:
      "Mã 404 trong thông điệp trả lời từ Web server cho Web client có ý nghĩa:",
  },
  {
    title:
      "Giao thức được sử dụng để truyền thư giữa các máy chủ phục vụ thư (Mail server) là:",
    idx: 118,
    answers: [
      {
        idx: 0,
        title: "HTTP",
        isKey: false,
      },
      {
        title: "FTP",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "SMTP",
      },
      {
        idx: 3,
        isKey: false,
        title: "POP",
      },
    ],

    chapterIdx: 2,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        title: "Bit Torrent",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Email, Web",
        idx: 1,
      },
      {
        idx: 2,
        title: "Skype",
        isKey: false,
      },
      {
        title: "KaZaA",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 119,
    title: "Ứng dụng nào sử dụng mô hình client/server:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 2,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Telnet",
      },
      {
        isKey: false,
        idx: 1,
        title: "Email",
      },
      {
        isKey: false,
        title: "Web",
        idx: 2,
      },
      {
        idx: 3,
        title: "Skype",
        isKey: true,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 120,
    title: "Ứng dụng nào sử dụng mô hình P2P:",

    chapterIdx: 2,
  },
  {
    idx: 121,
    title: "Các ứng dụng dùng giao thức TCP:",

    chapterIdx: 2,
    bonus:
      "DNS, streaming media, hội thảo,.. dùng UDP Web, truyền file, Emailm,... dùng TCP",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Web, truyền file, Email",
      },
      {
        isKey: false,
        title: "Web, DNS, điện thoại Internet",
        idx: 1,
      },
      {
        isKey: false,
        title: "Hội thảo từ xa, điện thoại Internet, streaming media",
        idx: 2,
      },
      {
        idx: 3,
        title: "Telnet, DNS, Email",
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Web, truyền file, Email",
      },
      {
        isKey: false,
        title: "Web, DNS, điện thoại Internet",
        idx: 1,
      },
      {
        title: "Hội thảo từ xa, điện thoại Internet, streaming media",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Telnet, DNS, Email",
      },
    ],
    idx: 122,
    title: "Các ứng dụng dùng giao thức UDP:",
    chapterIdx: 2,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "Địa chỉ IP của host",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Địa chỉ IP và số hiệu cổng liên kết với tiến trình trên host",
      },
      {
        isKey: false,
        idx: 2,
        title: "Địa chỉ IP nguồn và địa chỉ IP đích",
      },
      {
        isKey: false,
        title:
          "Địa chỉ IP nguồn, số hiệu cổng nguồn, địa chỉ IP đích, số hiệu cổng đích",
        idx: 3,
      },
    ],
    idx: 123,
    chapterIdx: 2,
    title: "Định danh (identifier) của tiến trình bao gồm:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "www.someschool.edu",
      },
      {
        isKey: false,
        title: "192.168.1.1",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "…/someDept/pic.gif",
      },
      {
        title: "www.someschool.edu/someDept/pic.gif",
        isKey: true,
        idx: 3,
      },
    ],
    chapterIdx: 2,
    title: "Đâu là một URL:",

    idx: 124,
    bonus:
      "Mỗi URL chứa tên của máy chủ và đường dẫn của đối tượng  trên máy chủ đó. Ví dụ, www.ptit.edu.vn/Portals/0/ptitlogo72.gif  thì www.ptit.edu.vn là tên máy chủ và Portals/0/ptitlogo72.gif là đường đẫn đến ảnh ptitlogo72.gif được lưu trên máy chủ.",
  },
  {
    idx: 125,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 2,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thời gian khởi tạo kết nối TCP",
      },
      {
        title: "Thời gian để gửi một gói nhỏ đi từ client đến server",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title:
          "Thời gian để gửi một gói nhỏ đi từ client đến server và quay lại",
        idx: 2,
      },
      {
        title: "Thời gian truyền file",
        isKey: false,
        idx: 3,
      },
    ],
    title: "RTT (Round Trip Time) là:",
    bonus:
      "RTT có nghĩa : Thời gian trôi qua để truyền một tín hiệu qua một mạch đóng, hay thời gian trôi qua để truyền một thông điệp tới một nơi ở xa và quay trở lại.",
  },
  {
    title:
      "Trong cơ sở dữ liệu của DNS lưu trữ các resource record (RR) có dạng:",
    idx: 126,
    chapterIdx: 2,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "(name, value, type, ttl)",
      },
      {
        title: "(value, name, ttl, type)",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "(value, ttl, name, type)",
        idx: 2,
      },
      {
        isKey: false,
        title: "(name, type, ttl, value)",
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "Đọc thêm ở: 2.3.3 Bản ghi dịch vụ tên miền",
  },
  {
    idx: 127,
    answers: [
      {
        title: "UDP",
        idx: 0,
        isKey: false,
      },
      {
        title: "IP",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "TCP",
        idx: 2,
      },
      {
        idx: 3,
        title: "Cả A và C đều đúng",
        isKey: true,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 3,
    title:
      "Những giao thức nào sau đây thuộc tầng vận chuyển (Transport Layer) trong mô hình TCP/IP:",
  },
  {
    chapterIdx: 3,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 128,
    title:
      "Giao thức nào cung cấp tính năng vận chuyển gói tin có độ tin cậy cao:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "UDP",
      },
      {
        title: "TCP",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "ARP",
      },
      {
        title: "IP",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 129,
    chapterIdx: 3,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus:
      "Cửa sổ (Window): Trường độ lớn cửa sổ 16 bit được sử dụng để kiểm soát lưu lượng, đó là số lượng byte dữ liệu tối đa mà bên nhận có thể chấp nhận được.",

    answers: [
      {
        isKey: true,
        title: "Kích thước bộ nhớ khả dụng",
        idx: 0,
      },
      {
        title: "Hệ điều hành",
        idx: 1,
        isKey: false,
      },
      {
        title: "Kích thước màn hình",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả đều sai",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Trường Window trong header của gói TCP liên quan đến:",
  },
  {
    chapterIdx: 3,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 130,

    title: "Gói tin TCP yêu cầu kết nối sẽ có giá trị của các cờ:",
    answers: [
      {
        title: "RST=1, SYN=1",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "ACK=1, SYN=1",
        idx: 1,
      },
      {
        title: "ACK=0, SYN=1",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "FIN=1, SYN=0",
      },
    ],
  },
  {
    chapterIdx: 3,

    title: "TCP và UDP hoạt động ở tầng nào trong mô hình OSI:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 131,
    answers: [
      {
        idx: 0,
        title: "Session (Tầng 5)",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Transport (Tầng 4)",
      },
      {
        idx: 2,
        isKey: false,
        title: "Network (Tầng 3)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Data Link (Tầng 2)",
      },
    ],
  },
  {
    chapterIdx: 3,
    idx: 132,
    answers: [
      {
        title: "Điều khiển luồng cửa sổ tĩnh",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Điều khiển luồng tốc độ đảm bảo",
      },
      {
        isKey: true,
        title: "Điều khiển luồng cửa sổ động",
        idx: 2,
      },
      {
        title: "Điều khiển luồng tốc độ động",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Khẳng định nào sau đây là đúng khi nói về kỹ thuật sử dụng băng thông hiệu quả:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        title: "ARP, RARP",
        isKey: false,
      },
      {
        idx: 1,
        title: "UDP",
        isKey: true,
      },
      {
        title: "TELNET, FTP",
        idx: 2,
        isKey: false,
      },
      {
        title: "IP, ARP",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 3,
    title: "Giao thức TCP hoạt động cùng tầng với những giao thức nào:",
    idx: 133,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Application",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Network",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Transport",
      },
      {
        isKey: false,
        idx: 3,
        title: "Presentation",
      },
    ],
    idx: 134,

    title: "Các giao thức TCP và UDP hoạt động ở tầng nào:",
    chapterIdx: 3,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Có yêu cầu liên kết",
      },
      {
        idx: 1,
        title: "Đòi hỏi độ tin cậy cao",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Yêu cầu độ trễ nhỏ",
      },
      {
        idx: 3,
        isKey: true,
        title: "Không đòi hỏi độ tin cậy cao",
      },
    ],
    idx: 135,
    title: "Giao thức UDP được sử dụng cho những ứng dụng:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 3,
    bonus: "Đọc thêm về những đặc điểm của TCP và UDP",
  },
  {
    title: "Tầng giao vận Host to Host hoạt động bởi giao thức:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 136,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "TCP",
      },
      {
        isKey: false,
        idx: 1,
        title: "IP",
      },
      {
        isKey: false,
        idx: 2,
        title: "ICMP",
      },
      {
        isKey: false,
        idx: 3,
        title: "ARP",
      },
    ],
    chapterIdx: 3,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 137,
    chapterIdx: 3,

    answers: [
      {
        idx: 0,
        title: "4",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "5",
      },
      {
        idx: 2,
        isKey: false,
        title: "8",
      },
      {
        title: "9",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Trong gói dữ liệu UDP (UDP segment), vùng dữ liệu thực sự bắt đầu từ byte thứ:",
  },
  {
    idx: 138,
    bonus: "vì UDP gần giống TCP, khác là truyền không tin cậy",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "UDP = IP",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "UDP = TCP - (tính tin cậy)",
      },
      {
        idx: 2,
        isKey: false,
        title: "UDP = ICMP + (phân kênh theo địa chỉ cổng)",
      },
      {
        isKey: false,
        idx: 3,
        title: "UDP = TCP – IP",
      },
    ],
    title: "Đẳng thức nào sau đây mô tả chính xác nhất giao thức UDP:",
    chapterIdx: 3,
  },
  {
    bonus:
      "Kiểm tra tổng (Checksum): Giá trị kiểm tra lỗi, được tính bằng phần bù của tổng chuỗi 16 bit",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 139,
    chapterIdx: 3,
    answers: [
      {
        title: "Số thứ tự (sequence number)",
        idx: 0,
        isKey: false,
      },
      {
        title: "Số thứ tự ghi nhận (acknowledgement number)",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Bộ định thời (timer)",
      },
      {
        isKey: true,
        title: "Checksum",
        idx: 3,
      },
    ],
    title: "Để phát hiện lỗi trong gói tin, người ta sử dụng kỹ thuật:",
  },
  {
    title:
      "Khi thực thể TCP gửi một gói SYNACK segment với trường Acknowledgement Number = 100, điều này có nghĩa là:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 3,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Gói dữ liệu nó gửi đi bắt đầu bằng byte thứ 100 trong dòng dữ liệu",
      },
      {
        title:
          "Byte dữ liệu đầu tiên trong dòng dữ liệu sẽ gửi đi có số thứ tự là 100",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nó sẽ gửi từ byte thứ 100",
      },
      {
        title:
          "Nó hy vọng nhận được dữ liệu bắt đầu bằng byte có số thứ tự 100",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 140,
  },
  {
    title:
      "Giao thức giao vận chạy phía trên IP mà không cần thiết lập kết nối trước khi truyền là:",
    idx: 141,
    bonus: "Đọc thêm về những đặc điểm của TCP và UDP",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        title: "UDP",
        idx: 0,
        isKey: true,
      },
      {
        title: "TCP",
        idx: 1,
        isKey: false,
      },
      {
        title: "HTTP",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "FTP",
      },
    ],
    chapterIdx: 3,
  },
  {
    idx: 142,
    title: "Giao thức TCP có thể xử lý:",

    chapterIdx: 3,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "Gói tin bị mất",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Các gói tin bị trùng lặp",
      },
      {
        isKey: false,
        idx: 2,
        title: "Các gói tin không theo thứ tự",
      },
      {
        title: "Tất cả các phương án trên",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    idx: 143,

    title: "Checksum trong gói dữ liệu UDP có độ dài:",
    bonus:
      "Kiểm tra tổng (Checksum): Giá trị kiểm tra lỗi, được tính bằng phần bù của tổng chuỗi 16 bit",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "4 bit",
        isKey: false,
      },
      {
        title: "8 bit",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "16 bit",
      },
      {
        isKey: false,
        title: "32 bit",
        idx: 3,
      },
    ],
    chapterIdx: 3,
  },
  {
    answers: [
      {
        title: "40",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "32",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "5",
      },
      {
        idx: 3,
        title: "Không xác định",
        isKey: true,
      },
    ],
    title: "Vị trí dữ liệu thực sự trong gói dữ liệu TCP bắt đầu từ byte:",
    idx: 144,
    chapterIdx: 3,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        isKey: false,
        title: "1101",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "1100",
      },
      {
        isKey: false,
        idx: 2,
        title: "500",
      },
      {
        title: "501",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Giả sử thực thể TCP A cần gửi 1500 byte cho thực thể giao vận B. Gói thứ nhất chứa 1000 byte dữ liệu, trường Sequence Number của gói này là 100. Trường Sequence Number của gói thứ hai sẽ là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "= 1000 + 100",
    chapterIdx: 3,
    idx: 145,
  },
  {
    idx: 146,
    answers: [
      {
        title: "Sequence Number",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Acknowledgement Number",
        isKey: false,
      },
      {
        isKey: true,
        title: "Rcvr Number",
        idx: 2,
      },
      {
        idx: 3,
        title: "Header length",
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    bonus: "Rcvr = Receiver",
    chapterIdx: 3,
    title:
      "Với giao thức TCP, bên nhận sẽ thông báo lại cho bên gửi về số lượng tối đa dữ liệu mà nó có thể nhận được. Giá trị này được xác định tại trường:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "100",
      },
      {
        idx: 1,
        title: "101",
        isKey: true,
      },
      {
        title: "200",
        idx: 2,
        isKey: false,
      },
      {
        title: "201",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Sau khi thực thể TCP gửi đi gói SYN segment với trường Sequence Number = 100, nó nhận được gói ACKSYN với truờng Sequence Number = 200. Trường Acknowledgment Number của gói ACKSYN này sẽ là:",
    idx: 147,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 3,
  },
  {
    title:
      "Giả sử ứng dụng tạo ra một thông điệp 60 byte. Thông điệp này được đặt trong TCP segment rồi sau đó là IP datagram. Giả sử cả gói TCP lẫn gói IP không có trường dữ liệu đặc biệt (Optional = 0). Trong mỗi IP datagram sẽ chứa bao nhiêu phần trăm dữ liệu thật sự:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 3,
    idx: 148,
    answers: [
      {
        title: "20%",
        isKey: false,
        idx: 0,
      },
      {
        title: "40%",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "60%",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "80%",
      },
    ],
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        idx: 0,
        title: "20 và 21",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "80 và 8080",
      },
      {
        title: "110 và 80",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "8080 và 1080",
      },
    ],
    title:
      "TCP port mặc định được sử dụng cho FTP server có giá trị là bao nhiêu:",
    chapterIdx: 3,
    idx: 149,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 150,
    answers: [
      {
        title: "Byte 1 và 2",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Byte 3 và 4",
      },
      {
        title: "Byte 5 và 6",
        idx: 2,
        isKey: false,
      },
      {
        title: "Không xác định",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "Trong gói dữ liệu UDP (UDP segment), địa chỉ dùng để xác định tiến trình nhận nằm ở:",
    chapterIdx: 3,
  },
  {
    idx: 151,
    title:
      "Các protocol TCP và UDP hoạt động ở tầng nào trong các tầng sau đây:",
    answers: [
      {
        title: "Transport",
        isKey: true,
        idx: 0,
      },
      {
        title: "Network",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Application",
      },
      {
        idx: 3,
        isKey: false,
        title: "Presentation",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 3,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Tầng ứng dụng",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tầng giao vận",
      },
      {
        title: "Tầng mạng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tầng liên kết dữ liệu",
        idx: 3,
        isKey: false,
      },
    ],

    chapterIdx: 3,
    idx: 152,
    title: "Giao thức TCP làm việc ở tầng nào của mô hình OSI:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Giao thức nào dưới đây không đảm bảo dữ liệu gửi đi có tới máy nhận hoàn chỉnh hay không:",
    idx: 153,
    chapterIdx: 3,
    answers: [
      {
        title: "TCP",
        isKey: false,
        idx: 0,
      },
      {
        title: "ASP",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "UDP",
      },
      {
        isKey: false,
        title: "ARP",
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 3,
    answers: [
      {
        title:
          "Kiểm soát việc truyền tin giữa hai tiến trình trên mạng máy tính",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Kiểm soát nội dung thông điệp trao đổi giữa hai tiến trình và hành vi của mỗi bên khi nhận được thông điệp",
      },
      {
        idx: 2,
        title: "Kiểm soát việc truyền tin giữa hai máy tính trên mạng máy tính",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Kiểm soát việc truyền dữ liệu giữa hai máy tính trên cùng một môi trường truyền",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    title: "Các giao thức của tầng giao vận (Transport):",
    idx: 154,
    bonus: "Ý C là của tầng mạng",
  },
  {
    bonus: "dữ liệu thực sự thường sẽ ít hơn 1 chút",
    idx: 155,

    chapterIdx: 3,
    answers: [
      {
        title: "67 byte",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "142 byte",
      },
      {
        isKey: false,
        idx: 2,
        title: "150 byte",
      },
      {
        idx: 3,
        title: "158 byte",
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Giả sử trường Length của một gói dữ liệu UDP có giá trị 150. Dữ liệu thực sự sẽ có:",
  },
  {
    chapterIdx: 3,
    title:
      "Quan sát một người đang truy cập một trang web, thấy anh ta gõ đường dẫn như sau: http://www.tomang.net:3000. Hãy cho biết Server web mà trang web trên sử dụng TCP port như thế nào:",
    answers: [
      {
        title: "Sử dụng port mặc định",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Không sử dụng port mặc định",
      },
      {
        isKey: false,
        title: "Sử dụng port chuẩn",
        idx: 2,
      },
      {
        title: "Sử dụng port dành riêng cho Web server",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 156,
  },
  {
    chapterIdx: 3,

    idx: 157,
    answers: [
      {
        title: "Địa chỉ IP nguồn, địa chỉ IP đích",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Địa chỉ IP nguồn, số port nguồn",
        isKey: false,
      },
      {
        title: "Địa chỉ IP đích, số port đích",
        isKey: false,
        idx: 2,
      },
      {
        title: "Địa chỉ IP nguồn, địa chỉ IP đích, số port nguồn, số port đích",
        idx: 3,
        isKey: false,
      },
    ],
    title: "UDP socket được xác định bởi:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "TCP socket được xác định bởi:",

    idx: 158,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "Địa chỉ IP nguồn, địa chỉ IP đích",
        isKey: false,
      },
      {
        title: "Địa chỉ IP nguồn, số port nguồn, địa chỉ IP đích",
        isKey: false,
        idx: 1,
      },
      {
        title: "Địa chỉ IP nguồn, địa chỉ IP đích, số port đích",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Địa chỉ IP nguồn, số port nguồn, địa chỉ IP đích, số port đích",
      },
    ],
    chapterIdx: 3,
  },
  {
    title:
      "Giao thức truyền tin cậy (rdt-reliable data transfer protocol) cần được sử dụng trên:",
    idx: 159,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Các kênh truyền có độ tin cậy cao",
      },
      {
        isKey: true,
        idx: 1,
        title: "Các kênh truyền không tin cậy",
      },
      {
        idx: 2,
        isKey: false,
        title: "Cả hai trường hợp trên đều đúng",
      },
      {
        title: "Cả hai trường hợp trên đều sai",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    bonus:
      "kênh ko tin cậy thì mới cần rdt, chứ kênh có độ  tin cậy cao rồi thì rdt nữa làm gì!",
    chapterIdx: 3,
  },
  {
    title:
      "Độ phức tạp của giao thức truyền tin cậy (rdt-reliable data transfer protocol) phụ thuộc vào:",
    idx: 160,

    answers: [
      {
        isKey: false,
        title: "Kiến trúc mạng",
        idx: 0,
      },
      {
        idx: 1,
        title: "Các thiết bị mạng (router, switch, hub,…)",
        isKey: false,
      },
      {
        isKey: true,
        title: "Các đặc tính của kênh truyền",
        idx: 2,
      },
      {
        title: "Khoảng cách giữa các hosts",
        isKey: false,
        idx: 3,
      },
    ],
    chapterIdx: 3,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 161,

    title:
      "Byte đầu tiên của một địa chỉ IP có dạng: 11100001. Vậy nó thuộc lớp nào:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lớp B",
      },
      {
        idx: 1,
        isKey: false,
        title: "Lớp C",
      },
      {
        title: "Lớp D",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lớp E",
      },
    ],
    bonus:
      "11100001 (=225)    A 0-127.255.255.255   B 127-191.255.255.255   C 191-223.255.255.255   D 223-239.255.255.255",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "192.168.1.3 và 192.168.100.1",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "192.168.15.1 và 192.168.15.254",
      },
      {
        isKey: false,
        idx: 2,
        title: "192.168.100.15 và 192.186.100.16",
      },
      {
        isKey: false,
        idx: 3,
        title: "172.25.11.1 và 172.26.11.2",
      },
    ],
    idx: 162,
    bonus:
      "Dễ thấy câu D là địa chỉ  lớp B,  mà lớp B thì 2 octets đầu phải giống nhau còn 3 cái còn lại là địa chỉ lớp C, mà lớp C thì 3 octets đầu phải giống nhau thì mới liên thông được nên ta dễ dàng loại A, C và D",
    chapterIdx: 4,

    title:
      "Trong mạng máy tính dùng giao thức TCP/IP và đều dùng Subnet Mask là 255.255.255.0 thì cặp máy tính nào sau đây liên thông:",
  },
  {
    title:
      "Cho địa chỉ 192.64.10.0/28. Hãy cho biết số lượng mạng con và số lượng máy trên mỗi mạng con:",
    chapterIdx: 4,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "6 mạng con, mỗi mạng con có 30 máy",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "14 mạng con, mỗi mạng con có 14 máy",
      },
      {
        isKey: false,
        idx: 2,
        title: "16 mạng con, mỗi mạng con có 16 máy",
      },
      {
        idx: 3,
        title: "8 mạng con, mỗi mạng con có 32 máy",
        isKey: false,
      },
    ],
    idx: 163,

    bonus:
      "192. ... -> lớp C, lớp C có khởi đầu là /24 mạng này /28 -> 2^4 - 2 = 16-2 = 14 mạng con mỗi mạng con lại tiếp tục chia ra đc 16-2=14 máy lưu ý -2 là vì bỏ đi 2 TH toàn 0 và toàn 1 dùng  cho Network và Broadcast",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "255.255.224.0",
      },
      {
        idx: 1,
        isKey: false,
        title: "255.0.0.255",
      },
      {
        title: "255.255.192.0",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "255.255.255.224",
      },
    ],
    chapterIdx: 4,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus:
      "chia thành 3 mạng con -> đổi 3 bit đầu thành 1 -> X.X.11100000.00000000 ~ A nếu chỉ đổi 2 bit -> ta đc 4 mạng nhưng mất 2 mạng  là network và broadcast nên ko đủ",
    idx: 164,
    title:
      "Một mạng lớp B cần chia thành 3 mạng con sử dụng Subnet mask nào sau đây:",
  },
  {
    chapterIdx: 4,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Cho kết xuất lệnh route print trên máy X như sau: (ảnh)   Máy X có địa chỉ IP:",
    answers: [
      {
        title: "0.0.0.0",
        idx: 0,
        isKey: false,
      },
      {
        title: "172.16.9.12",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "127.0.0.1",
      },
      {
        title: "172.16.9.0",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 165,
  },
  {
    bonus:
      "Đây là lớp B, với 28-16=12 -> 2^16/2^12=16 -> địa chỉ IP con cùng nhau tương ứng là  0-15 16-31 32-47 48-63 ... -> C",
    title: "Các địa chỉ IP cùng mạng con với địa chỉ 131.107.2.56/28:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 166,
    answers: [
      {
        idx: 0,
        title: "Từ 131.107.2.48 đến 131.107.2.63",
        isKey: false,
      },
      {
        title: "Từ 131.107.2.49 đến 131.107.2.63",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Từ 131.107.2.48 đến 131.107.2.62",
        idx: 2,
      },
      {
        title: "Từ 131.107.2.55 đến 131.107.2.126",
        idx: 3,
        isKey: false,
      },
    ],

    chapterIdx: 4,
  },
  {
    bonus:
      "đây là lớp C với /24 nên chỉ cần 3 octets  đầu giống nhau là ok ->D (ko chọn B vì giới hạn là 0-255)",
    chapterIdx: 4,
    title:
      "Địa chỉ IP nào sau đây cùng địa chỉ mạng (Subnet) với địa chỉ IP 192.168.1.10/24:",
    idx: 167,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "192.168.10.1/24",
      },
      {
        idx: 1,
        isKey: false,
        title: "192.168.1.256/24",
      },
      {
        isKey: false,
        title: "192.168.11.12/24",
        idx: 2,
      },
      {
        isKey: true,
        title: "192.168.1.33/24",
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 168,
    chapterIdx: 4,
    answers: [
      {
        isKey: true,
        title: "Giá trị của octet (byte) đầu",
        idx: 0,
      },
      {
        isKey: false,
        title: "Giao thức ARP",
        idx: 1,
      },
      {
        title: "Số dấu chấm trong địa chỉ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Địa chỉ của DHCP",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Để biết một địa chỉ IP thuộc lớp địa chỉ nào, căn cứ vào:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 169,
    bonus:
      "ta cần 5 mạng con của lớp C 1 -> 2 -> 4 -> 8, như vậy 3 bit đầu của octet thứ 4 sẽ bằng 1 -> X.X.X.11100000 -> A",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "255.255.255.224",
      },
      {
        isKey: false,
        idx: 1,
        title: "255.255.255.252",
      },
      {
        isKey: false,
        idx: 2,
        title: "255.255.255.240",
      },
      {
        idx: 3,
        isKey: false,
        title: "255.255.255.248",
      },
    ],
    chapterIdx: 4,
    title:
      "Một địa chỉ mạng lớp C được chia thành 5 mạng con (subnet). Mặt nạ mạng (subnet mask) cần dùng:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Trong địa chỉ IPv4, có 5 lớp tất cả: A, B, C, D, E. Lớp C là lớp có dãy địa chỉ:",
    chapterIdx: 4,
    idx: 170,
    bonus: "A (lớp D), C (lớp B), D (lớp E)",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "224.0.0.0 tới 239.255.255.255",
      },
      {
        isKey: true,
        idx: 1,
        title: "192.0.0.0 tới 223.255.255.255",
      },
      {
        title: "128.0.0.0 tới 191.255.255.255",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "240.0.0.0 tới 255.255.255.255",
      },
    ],
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 171,
    answers: [
      {
        isKey: false,
        title: "230.20.30.40",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "192.168.1.2",
      },
      {
        title: "255.255.255.255",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Tất cả các câu trên",
        isKey: false,
      },
    ],
    bonus:
      "A (lớp D), C (lớp E), câu kiểu này hỏi ko rõ ràng. Về nguyên tắc 3 đáp án đều là địa chỉ IP, nhưng A và C ko thuộc 3 lớp A B C nên ta ko dùng đến nên chấp nhận chọn B",
    title: "Địa chỉ IP nào sau đây là hợp lệ:",
    chapterIdx: 4,
  },
  {
    answers: [
      {
        isKey: false,
        title: "192.168.5.39",
        idx: 0,
      },
      {
        idx: 1,
        title: "192.168.5.32",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "192.168.5.0",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều sai",
      },
    ],
    chapterIdx: 4,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Cho địa chỉ IP: 192.168.5.39/28. Cho biết địa chỉ mạng của địa chỉ IP này:",
    bonus:
      "đây là lớp C với /28 ->số bit mượn 32-28=4, 2^4=16  -> các địa chỉ mạng đại diện là: 0 16 32 64 ... -> B",

    idx: 172,
  },
  {
    title: "IPv4 có bao nhiêu địa chỉ IP:",
    idx: 173,
    answers: [
      {
        title: "2^12",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "2^22",
        isKey: false,
      },
      {
        idx: 2,
        title: "2^32",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "2^42",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
  },
  {
    chapterIdx: 4,
    idx: 174,
    title: "IPv4, lớp B có số NetIDs/HostIDs sử dụng tương ứng là: (hình ảnh)",
    bonus: "luôn phải bớt 2 IP add phần host nên mới có cái -2",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "2^11 / 2^21 - 2",
      },
      {
        title: "2^14 / 2^16 - 2",
        isKey: true,
        idx: 1,
      },
      {
        title: "2^13 / 2^19 - 2",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "2^10 / 2^22 – 2",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Flooding",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Distance vector routing",
      },
      {
        idx: 2,
        title: "Link state",
        isKey: true,
      },
      {
        title: "Bellman-Ford",
        isKey: false,
        idx: 3,
      },
    ],
    bonus:
      "7.5 Định tuyến trên Internet. OSPF Sử dụng thuật toán tìm đường dựa trên trạng thái kênh truyền. Hiện nay có 3 giao  thức định tuyến nội miền được sử dụng rộng rãi:  RIP , OSPF và EIGRP . Giao thức định tuyến liên miền thường được sử dụng là giao thức BGP.",

    title: "Giao thức OSPF sử dụng thuật toán tìm đường đi nào:",
    chapterIdx: 4,
    idx: 175,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Flooding",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Distance vector routing",
      },
      {
        isKey: false,
        idx: 2,
        title: "Link state",
      },
      {
        idx: 3,
        title: "Bellman-Ford",
        isKey: false,
      },
    ],
    bonus:
      "RIP sử dụng thuật toán vector khoảng cách. Các thiết bị định tuyến hàng xóm trao đổi bảng định tuyến cho nhau 90s một lần  trong các bản tin RIP , mỗi bản tin chứa tối đa 25 địa chỉ đích",
    chapterIdx: 4,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Giao thức RIP sử dụng thuật toán tìm đường đi nào:",
    idx: 176,
  },
  {
    bonus:
      "Giao thức Thông điệp Điều khiển ICMP, là một giao thức của gói Internet Protocol. Giao thức này được các thiết bị mạng như router dùng để gửi đi các thông báo lỗi chỉ ra một dịch vụ có tồn tại hay không, hoặc một địa chỉ host hay router có tồn tại hay không. ICMP thường được coi là một phần của bộ giao thức IP, nhưng về mặt kiến trúc lại nằm trên IP, vì thông báo ICMP được đặt trong gói IP giống như dữ liệu của giao thức tầng vận tải.",
    idx: 177,
    chapterIdx: 4,

    title: "Thông điệp ICMP được đặt trong gói dữ liệu:",
    answers: [
      {
        idx: 0,
        title: "UDP",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "TCP",
      },
      {
        idx: 2,
        title: "IP",
        isKey: true,
      },
      {
        isKey: false,
        title: "Không xác định",
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 178,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
    title: "Địa chỉ IP nào sau đây là hợp lệ:",
    bonus: "B (lớp E)",
    answers: [
      {
        title: "192.168.1.2",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "255.255.255.254",
      },
      {
        isKey: false,
        idx: 2,
        title: "10.20.30.40",
      },
      {
        idx: 3,
        isKey: true,
        title: "A và C đều đúng",
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        title: "Lớp A",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Lớp B",
      },
      {
        title: "Lớp C",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Không câu nào đúng",
        isKey: false,
      },
    ],
    chapterIdx: 4,
    idx: 179,

    bonus:
      "sao ko phải B? vì lớp B chỉ cho mượn đc tối đa 14 bits  để chia mạng con, nếu cho mượn đến bit thứ 15 thì nó sẽ thêm 2 địa chỉ, mà mỗi 2 địa chỉ thì ko đc vì 2 địa chỉ  đó là network và broadcast luôn rồi",
    title: "Địa chỉ lớp nào cho phép mượn 15 bits để chia subnets:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 180,
    title:
      "Giao thức nào sau đây thuộc tầng mạng (Internet Layer) trong mô hình TCP/IP:",
    answers: [
      {
        idx: 0,
        title: "FTP",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "IP",
      },
      {
        isKey: false,
        idx: 2,
        title: "ARP",
      },
      {
        idx: 3,
        isKey: false,
        title: "Cả B và C đều đúng",
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "địa chỉ IP ta hay gặp là 192.X.X.X, mà 192-223.X.X.X là Lớp C",

    title:
      "Việt Nam được trung tâm thông tin Châu Á Thái bình dương APNIC phân địa chỉ IP thuộc lớp nào:",
    chapterIdx: 4,
    idx: 181,
    answers: [
      {
        isKey: false,
        title: "Lớp A",
        idx: 0,
      },
      {
        isKey: false,
        title: "Lớp B",
        idx: 1,
      },
      {
        idx: 2,
        title: "Lớp C",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lớp D",
      },
    ],
  },
  {
    answers: [
      {
        title: "Lớp A",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Lớp B ",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Lớp C",
      },
      {
        idx: 3,
        title: "Lớp D",
        isKey: false,
      },
    ],
    idx: 182,
    title: "Địa chỉ IP 203.162.0.11 thuộc địa chỉ lớp nào:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 4,
  },
  {
    chapterIdx: 4,
    title:
      "Những thuật ngữ nào dùng để mô tả các đơn vị dữ liệu tại tầng mạng:",

    bonus: "B (là của tầng liên kết)",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Datagram",
      },
      {
        title: "Khung (Frame)",
        idx: 1,
        isKey: false,
      },
      {
        title: "Gói tin (Packet)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Cả A và C đều đúng",
      },
    ],
    idx: 183,
  },
  {
    bonus:
      "Về cơ bản, giao thức IP thuộc loại không liên kết,  nó chuyển các gói tin theo dạng cố gắng hết sức, giao thức này có thể hoạt động độc lập với môi trường truyền dẫn.",
    idx: 184,
    chapterIdx: 4,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Giao thức IP là giao thức:",
    answers: [
      {
        title: "Hướng liên kết",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Không liên kết",
      },
      {
        title: "Đòi hỏi độ tin cậy cao trong quá trình trao đổi thông tin",
        isKey: false,
        idx: 2,
      },
      {
        title: "Yêu cầu kiểm soát luồng và kiểm soát lỗi",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 185,
    bonus: "D (lớp B)",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 4,
    title: "Cấu trúc khuôn dạng của địa chỉ IP lớp A là:",
    answers: [
      {
        title: "Bit 1: 0, bit 2- 8: NetID, 9-32: HostID",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bit 1: 0, bit 2- 16: NetID, 17-32: HostID",
      },
      {
        isKey: false,
        idx: 2,
        title: "Bit 1-2: 10, bit 3- 8: NetID, 9 - 32: HostID",
      },
      {
        idx: 3,
        isKey: false,
        title: "Bit 1-2: 10, bit 3- 16: NetID, 17 - 32: HostID",
      },
    ],
  },
  {
    chapterIdx: 4,
    idx: 186,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Cấu trúc khuôn dạng của địa chỉ IP lớp B là:",

    answers: [
      {
        isKey: false,
        title: "Bit 1: 0, bit 2- 8: NetID, 9-32: HostID",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bit 1: 0, bit 2- 16: NetID, 17-32: HostID",
      },
      {
        title: "Bit 1-2: 10, bit 3- 8: NetID, 9 - 32: HostID",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Bit 1-2: 10, bit 3- 16: NetID, 17 - 32: HostID",
        idx: 3,
      },
    ],
  },
  {
    idx: 187,
    chapterIdx: 4,
    bonus:
      "đây là lớp C, với /27 -> 27-24=3 -> 2^3=8 và 256/8=32 -> 0-31 32-63 ... nhưng Phải là HostID sử dụng đc nên ta trừ đi 2 cái đầu và cái cuối, tức 32 và 63 => còn lại 33-62 -> D",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "192.168.0.33 => 192.168.0.63",
      },
      {
        title: "192.168.0.32 => 192.168.0.64",
        isKey: false,
        idx: 1,
      },
      {
        title: "192.168.0.32 => 192.168.0.62",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "192.168.0.33 => 192.168.0.62",
      },
    ],
    title:
      "Địa chỉ mạng NetID: 192.168.0.32/27 có dãy địa chỉ máy HostIDs sử dụng tương ứng là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Trong Header của IP Packet có chứa:",
    idx: 188,
    chapterIdx: 4,
    bonus:
      "Source address This field is the IPv4 address of the sender of the packet. Destination address This field is the IPv4 address of the receiver of the packet more on: Header of https://en.wikipedia.org/wiki/IPv4#Packet_structure",
    answers: [
      {
        title: "Địa chỉ nguồn",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Địa chỉ đích",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Không chứa địa chỉ nào cả",
      },
      {
        title: "Cả địa chỉ nguồn và địa chỉ đích",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Giao thức nào được router hay máy tính sử dụng để thông báo cho các máy tính khác về tình trạng lỗi:",
    idx: 189,

    answers: [
      {
        idx: 0,
        title: "TCP",
        isKey: false,
      },
      {
        title: "UDP",
        isKey: false,
        idx: 1,
      },
      {
        title: "IP",
        isKey: false,
        idx: 2,
      },
      {
        title: "ICMP",
        isKey: true,
        idx: 3,
      },
    ],
    chapterIdx: 4,
    bonus:
      "Giao thức ICMP được sử dụng để thông báo lỗi và cung cấp một số các thông tin hạn chế tới thiết bị đầu cuối (ví dụ lệnh ping)",
  },
  {
    title: "Dịch vụ mạng nào sau đây phải dựa trên ICMP:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
    idx: 190,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "DNS",
      },
      {
        title: "Ping",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "SMTP",
      },
      {
        isKey: false,
        title: "X Windows",
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 4,
    bonus: "B (NAT: gộp địa chỉ IP cục bộ), C (địa chỉ mạng con)",
    title:
      "Giải pháp nào sau đây có thể giải quyết tình trạng khan hiếm địa chỉ IP:",
    idx: 191,
    answers: [
      {
        isKey: false,
        title: "IPv6",
        idx: 0,
      },
      {
        title: "Network Address Translation",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Subnet mask",
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả các phương án trên",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    bonus:
      "RIP (Routing information protocol) là 1 giao thức  định tuyến thông tin, nên đc triển khai tại  bộ định tuyến Router",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 192,
    answers: [
      {
        title: "Máy tính đầu cuối",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Router",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hub",
      },
      {
        isKey: false,
        title: "Switch",
        idx: 3,
      },
    ],
    chapterIdx: 4,
    title: "Giao thức RIP được triển khai tại:",
  },
  {
    title: "Giao thức nào trong số các giao thức sau thuộc tầng mạng:",
    idx: 193,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "TCP",
      },
      {
        isKey: false,
        idx: 1,
        title: "Telnet",
      },
      {
        title: "FTP",
        idx: 2,
        isKey: false,
      },
      {
        title: "IP",
        idx: 3,
        isKey: true,
      },
    ],
    bonus: "A (Transport), B (App), C (App)",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 4,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
    answers: [
      {
        idx: 0,
        title: "192.168.1.31",
        isKey: true,
      },
      {
        idx: 1,
        title: "192.168.1.255",
        isKey: false,
      },
      {
        isKey: false,
        title: "192.168.1.15",
        idx: 2,
      },
      {
        title: "192.168.1.96",
        idx: 3,
        isKey: false,
      },
    ],
    bonus:
      "192 -> lớp C, .224 tức mượn 3 bit -> 2^3=8 -> 256/8=32 các khoảng địa chỉ HostID là 0-31, 32-63,... mà địa chỉ đề cho có HostID là .1 -> thuộc khoảng 0-31 -> broadcast là .31 (network là .0)  Câu C chỉ đúng khi mượn 4 bit",
    title:
      "Trong mạng máy tính dùng giao thức TCP/IP và Subnet Mask là 255.255.255.224 hãy xác định địa chỉ broadcast của mạng nếu biết rằng một máy tính trong mạng có địa chỉ là 192.168.1.1:",
    idx: 194,
  },
  {
    idx: 195,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 4,
    answers: [
      {
        title: "Network Layer",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Data Link Layer ",
      },
      {
        idx: 2,
        title: "Transport Layer",
        isKey: false,
      },
      {
        title: "Application Layer",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Router hoạt động tại tầng nào trong mô hình OSI:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "1",
      },
      {
        idx: 1,
        title: "3",
        isKey: false,
      },
      {
        title: "4 ",
        isKey: true,
        idx: 2,
      },
      {
        title: "2",
        isKey: false,
        idx: 3,
      },
    ],
    chapterIdx: 4,
    title:
      "Nếu 4 PCs kết nối với nhau thông qua HUB thì cần bao nhiêu địa chỉ IP cho 5 trang thiếi bị mạng này:",
    idx: 196,
    bonus: "A hub is a basic (dumb device) and has no need for an IP address.",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Bridge",
      },
      {
        title: "Router",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Repeater",
      },
      {
        title: "Connector",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 4,
    title:
      "Các thiết bị mạng nào sau đây có khả năng duy trì và trao đổi thông tin với nhau về hiện trạng kết nối của toàn bộ mạng trong một xí nghiệp hoặc một khuôn viên:",
    idx: 197,
  },
  {
    chapterIdx: 4,
    idx: 198,
    bonus:
      'Router (bộ định tuyến) là thiết bị mạng có chức năng chuyển tiếp gói dữ liệu giữa các mạng máy tính. Có thể hiểu, router thực hiện "chỉ đạo giao thông" trên Internet.  Dữ liệu được gửi đi trên Internet dưới dạng gói. Gói dữ liệu sẽ được chuyển tiếp từ router này đến router khác thông qua các mạng nhỏ, được kết nối với nhau để tạo thành mạng liên kết, cho đến khi gói dữ liệu đến được điểm đích. ',
    title: "Router là một thiết bị dùng để:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Định tuyến giữa các mạng",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Lọc các gói tin dư thừa",
      },
      {
        title: "Mở rộng một hệ thống mạng",
        isKey: false,
        idx: 2,
      },
      {
        title: "Cả 3 đều đúng",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title: "Thiết bị Router cho phép:",
    idx: 199,
    answers: [
      {
        title:
          "Kéo dài 1 nhánh LAN thông qua việc khuyếch đại tín hiệu truyền đến nó",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Kết nối nhiều máy tính lại với nhau",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Liên kết nhiều mạng LAN lại với nhau, đồng thời ngăn không cho các packet thuộc loại broadcast đi qua nó và giúp việc định tuyến cho các packet",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Định tuyến cho các packet, chia nhỏ các Collision Domain nhưng không chia nhỏ các Broadcast Domain",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
  },
  {
    bonus:
      "Tầng mạng thi hành  chức năng định tuyến,  điều khiển lưu lượng  dữ liệu, phân đoạn và hợp đoạn mạng, và kiểm soát lỗi ",
    title: "Tầng Network chịu trách nhiệm:",

    chapterIdx: 4,
    idx: 200,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Dựa trên địa chỉ IP đích có trong packet mà quyết định chọn đường thích hợp cho packet",
      },
      {
        isKey: false,
        idx: 1,
        title: "Quyết định đích đến của packet",
      },
      {
        title: "Phát hiện packet bị mất và cho gửi lại packet mất",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Chia nhỏ packet thành các frame",
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 4,
    idx: 201,
    title:
      "Các thiết bị mạng nào sau đây có khả năng định tuyến cho một gói tin (chuyển gói tin sang một mạng kế khác nằm trên đường đến mạng đích) bằng cách dựa vào địa chỉ IP của máy27 đích có trong gói tin và thông tin hiện thời về tình trạng mạng được thể hiện trong bảng định tuyến có trong thiết bị:",

    answers: [
      {
        isKey: false,
        title: "Bridge",
        idx: 0,
      },
      {
        title: "Router",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Switch",
        idx: 2,
      },
      {
        title: "Cả A, B và C",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Địa chỉ nào thuộc về lớp A:",
    idx: 202,
    chapterIdx: 4,
    answers: [
      {
        isKey: false,
        title: "10001100 11001100 11111111 01011010",
        idx: 0,
      },
      {
        title: "11001111 11110000 10101010 01010101",
        idx: 1,
        isKey: false,
      },
      {
        title: "01111010 10100101 11000011 11100011",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "11011010 10101010 01010101 11110011",
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 203,
    title:
      "Nếu lấy một địa chỉ lớp B để chia subnet với netmask là 255.255.240.0 thì có bao nhiêu subnets có thể sử dụng được:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "2",
      },
      {
        isKey: false,
        title: "6",
        idx: 1,
      },
      {
        title: "30",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "16",
      },
    ],
    bonus:
      ".240 -> mượn 4 bit 1 của phần HostID -> chia đc 2^(8-4) = 16 subnets    128 1bit   192 2bit   224 3bit   240 4bit ...",
  },
  {
    title: "Địa chỉ nào sau đây thuộc lớp A:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "172.29.14.10",
      },
      {
        idx: 1,
        title: "10.1.1.1",
        isKey: true,
      },
      {
        idx: 2,
        title: "140.8.8.8",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "203.5.6.7",
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
    idx: 204,
  },
  {
    answers: [
      {
        isKey: false,
        title: "1",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "2",
      },
      {
        isKey: false,
        idx: 2,
        title: "3",
      },
      {
        idx: 3,
        isKey: false,
        title: "4",
      },
    ],
    bonus: "có lẽ là 1 IP của riêng máy đó và 1 IP dùng cho chức năng Router",

    chapterIdx: 4,
    title: "Máy tính đóng vai trò Router có bao nhiêu địa chỉ IP:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 205,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 206,
    answers: [
      {
        isKey: true,
        title: "Kết nối network với network",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chia nhỏ broadcast domain",
      },
      {
        isKey: false,
        idx: 2,
        title: "A và B đều đúng",
      },
      {
        title: "A và B đều sai",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 4,
    title: "Chức năng chính của router là:",
  },
  {
    idx: 207,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "203.29.100.100/255.255.255.240",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "203.29.100.110/255.255.255.240",
      },
      {
        title: "203.29.103.113/255.255.255.240",
        isKey: true,
        idx: 2,
      },
      {
        title: "203.29.100.98/255.255.255.240",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Trong các địa chỉ sau, chọn địa chỉ không nằm cùng mạng với các địa chỉ còn lại:",
    chapterIdx: 4,
    bonus: "cùng mạng là cùng phần netID",
  },
  {
    title: "Địa chỉ nào sau đây là địa chỉ broadcast của mạng lớp B:",
    chapterIdx: 4,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 208,
    answers: [
      {
        title: "149.255.255.255",
        isKey: false,
        idx: 0,
      },
      {
        title: "149.6.255.255",
        isKey: true,
        idx: 1,
      },
      {
        title: "149.6.7.255",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều đúng",
      },
    ],
  },
  {
    chapterIdx: 4,
    title: "Địa chỉ IP 172.200.25.55/255.255.0.0",
    idx: 209,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thuộc lớp A",
      },
      {
        isKey: false,
        idx: 1,
        title: "Thuộc lớp C",
      },
      {
        isKey: true,
        title: "Là địa chỉ riêng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Là địa chỉ broadcast",
      },
    ],
    bonus: "D (sẽ phải là 172.25.255.255)",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    bonus:
      "A (định tuyến liên vùng), B (định tuyến nội vùng)   Các thiết bị định tuyến định tuyến gói tin ra phía ngoài được gọi là thiết bị định tuyến cầu nối (gateway router). Để định tuyến gói tin đi giữa các AS, thuật toán định tuyến được sử dụng tại các thiết bị định tuyến đó gọi là giao thức định tuyến liên vùng",
    answers: [
      {
        idx: 0,
        title: "Inter-routing",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Intra-routing",
      },
      {
        isKey: false,
        title: "Cả hai đều sai",
        idx: 2,
      },
      {
        title: "Cả hai đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 210,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,
    title: "Thuật toán chạy trên gateway router là:",
  },
  {
    chapterIdx: 4,

    idx: 211,
    answers: [
      {
        title: "Đẩy các gói tin từ kết nối vào đến kết nối ra",
        isKey: false,
        idx: 0,
      },
      {
        title: "Thực hiện các giao thức/giải thuật định tuyến",
        idx: 1,
        isKey: false,
      },
      {
        title: "Cả hai chức năng A và B",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Không thực hiện chức năng nào ở trên",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Chức năng chính của Router:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "1400 bytes",
      },
      {
        isKey: false,
        title: "1480 bytes",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "1500 bytes",
      },
      {
        isKey: false,
        title: "1600 bytes",
        idx: 3,
      },
    ],
    title:
      "Kết nối mạng có giá trị MTU là 1500 bytes. Kích thước gói dữ liệu lớn nhất có thể truyền qua kết nối này là:",
    bonus: "Ko thấy note đáp án nhưng tôi search câu này ra C nhé anh em :v",
    idx: 212,
    chapterIdx: 4,
  },
  {
    chapterIdx: 4,
    title: "Có địa chỉ 200.23.16.0/23, giá trị 23 là:",
    answers: [
      {
        title: "Số bit trong phần subnet của địa chỉ",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Số bit trong phần hostID của địa chỉ",
        isKey: false,
      },
      {
        title: "Số bit xác định lớp A, B, C, D, E",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Không là giá trị nào trong các trường hợp trên",
      },
    ],
    bonus:
      "cái này k theo quy tắc phân lớp cơ bản, phải dựa theo quy tắc khác vd /8-/15 là lớp A, /16-/23 là lớp B, /24-/30 là lớp C ko có bé hơn /8 vì số netID tối thiểu là 8 cho lớp A",
    idx: 213,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "IPv6 có không gian địa chỉ là:",

    idx: 214,
    chapterIdx: 4,
    answers: [
      {
        title: "32 bit",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "64 bit",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "128 bit",
      },
      {
        title: "256 bit",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    bonus: "Phần thông tin điều khiển có độ dài cố định 40 byte",
    idx: 215,
    title: "Gói tin IPv6 có bao nhiêu byte trong phần tiêu đề:",
    chapterIdx: 4,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "20 byte",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "30 byte",
      },
      {
        isKey: true,
        idx: 2,
        title: "40 byte",
      },
      {
        isKey: false,
        idx: 3,
        title: "50 byte",
      },
    ],
  },
  {
    title: "Đâu là biểu diễn của một địa chỉ IPv6:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "1080:0000:0000:0000:0008:0800:200C:417A",
      },
      {
        idx: 1,
        isKey: false,
        title: "1080:0000:0000:0008:0800:200C:417A",
      },
      {
        idx: 2,
        isKey: false,
        title: "1080:0000:0000:0000:0000:0008:0800:200C:417A",
      },
      {
        idx: 3,
        title: "1080::0008:0800:200C::417A",
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 4,

    idx: 216,
  },
  {
    answers: [
      {
        title: "2001:F68:0:0:0:0:1986:69AF",
        idx: 0,
        isKey: false,
      },
      {
        title: "2001:F68::1986:69AF",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Cả hai biểu diễn trên đều đúng",
        isKey: true,
      },
      {
        idx: 3,
        title: "Cả hai biểu diễn trên đều sai",
        isKey: false,
      },
    ],
    idx: 217,
    chapterIdx: 4,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Đâu là biểu diễn dạng rút gọn của địa chỉ IPv6: 2001:0F68:0000:0000:0000:0000:1986:69AF",
  },
  {
    title: "Frame là dữ liệu ở tầng:",
    chapterIdx: 5,
    idx: 218,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Physical",
      },
      {
        title: "Network",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Data Link",
      },
      {
        title: "Transport",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 219,
    bonus:
      "Chức năng của giao thức tầng liên kết dữ liệu khi gửi và nhận khung dữ liệu bao gồm: phát hiện lỗi truyền lại, điều khiển lưu lượng và truy cập ngẫu nhiên. Giao thức tầng liên kết dữ liệu rất đa dạng: Ethernet, token ring, FDDI và PPP, đôi khi là ATM và frame relay ",
    title: "Kiểm soát lỗi và kiểm soát luồng dữ liệu được thực hiện bởi:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,

    answers: [
      {
        isKey: false,
        title: "Tầng mạng",
        idx: 0,
      },
      {
        title: "Tầng liên kết dữ liệu",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Tầng vật lý",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tầng phiên",
      },
    ],
  },
  {
    answers: [
      {
        title: "ARP",
        isKey: true,
        idx: 0,
      },
      {
        title: "RARP",
        idx: 1,
        isKey: false,
      },
      {
        title: "ICMP",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "TCP",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Giao thức nào dùng để chuyển đổi từ địa chỉ IP sang địa chỉ vật lý MAC:",
    bonus:
      "ARP được hiểu là một phương thức phân giải địa chỉ  động giữa địa chỉ lớp network với địa chỉ lớp datalink  Thiết bị gửi sử dụng ARP để có thể dịch địa chỉ IP sang địa chỉ MAC",
    chapterIdx: 5,
    idx: 220,
  },
  {
    idx: 221,
    chapterIdx: 5,
    bonus: "Đọc thêm ở phần 7.6.2.3 Giao thức DHCP",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Tiến trình cho phép host tự động lấy địa chỉ IP cho nó từ server khi kết nối vào mạng:",
    answers: [
      {
        title:
          'Host broadcasts thông điệp "DHCP discover" --> DHCP server đáp ứng với "DHCP offer" --> host gửi thông điệp "DHCP request" --> DHCP server gửi "DHCP ack"',
        idx: 0,
        isKey: true,
      },
      {
        title:
          'Host gửi thông điệp "DHCP request" --> DHCP server gửi "DHCP ack" --> host broadcasts thông điệp "DHCP discover" --> DHCP server đáp ứng với "DHCP offer"',
        isKey: false,
        idx: 1,
      },
      {
        title:
          'Host broadcasts thông điệp "DHCP discover"--> DHCP server gửi "DHCP ack" --> host gửi thông điệp "DHCP request" --> DHCP server đáp ứng với "DHCP offer"',
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          'Host gửi thông điệp "DHCP request" --> DHCP server đáp ứng với "DHCP offer" --> host broadcasts thông điệp "DHCP discover" --> DHCP server gửi "DHCP ack"',
        isKey: false,
      },
    ],
  },
  {
    title:
      "CSMA/CD là phương pháp truy nhập ngẫu nhiên sử dụng cho mạng có cấu trúc hình:",
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "Sao (STAR)",
        idx: 0,
      },
      {
        title: "BUS",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Vòng (RING)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Lai ghép BUS-STAR",
      },
    ],
    idx: 222,
  },
  {
    idx: 223,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Collision Sense Multiple Access/ Collision Detection",
      },
      {
        idx: 1,
        title: "Carrier Sense Multiple Access/ Collision Deterence",
        isKey: false,
      },
      {
        idx: 2,
        title: "Carrier Sense Multiple Access/ Collision Detection",
        isKey: true,
      },
      {
        title: "Collision Sense Multiple Access/ Carrier Detection",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "CSMA/CD là viết tắt của:",

    bonus: "Carrier-sense multiple access with collision detection",
  },
  {
    chapterIdx: 5,
    answers: [
      {
        title: "Tên nhà sản xuất card mạng (NIC)",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Vùng địa lý của card mạng",
        idx: 1,
      },
      {
        title: "Số hiệu phiên bản của card mạng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả các câu trên đều sai",
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 224,
    bonus:
      "Cấu trức địa chỉ MAC bao gồm 2 phần: Phần OUI bao gồm 3 byte đầu để nhận diện nhà sản xuất thiết bị  Phần NIC bao gồm 3 byte còn lại để nhận diện thiết bị duy nhất của một hãng trong một mạng",
    title: "Ba byte đầu tiên của địa chỉ MAC cho biết thông tin gì:",
  },
  {
    chapterIdx: 5,
    answers: [
      {
        idx: 0,
        title: "Ethernet switch ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Bridge",
      },
      {
        title: "Router",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Hub",
      },
    ],
    idx: 225,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    title:
      "Trang thiết bị mạng nào dùng để nối các mạng và kiểm soát được broadcast:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "192.201.63.251",
        idx: 0,
      },
      {
        title: "0000.1234.FEG",
        idx: 1,
        isKey: false,
      },
      {
        title: "19-22-01-63-25",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "00-00-12-34-FE-AA",
      },
    ],
    chapterIdx: 5,
    title: "Địa chỉ nào dưới đây là địa chỉ tầng 2 (địa chỉ MAC):",

    bonus:
      "Địa chỉ MAC có nguồn gốc từ cách đánh địa chỉ mạng Ethernet của Xeror, là một chuỗi số 6 byte hay 48 bit.  Số lượng địa chỉ MAC có thể gán cho các thiết bị là 2^48 ",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 226,
  },
  {
    idx: 227,
    answers: [
      {
        isKey: false,
        title: "Phân chia kênh truyền (channel partitioning)",
        idx: 0,
      },
      {
        title: "Truy cập ngẫu nhiên (random access)",
        isKey: true,
        idx: 1,
      },
      {
        title: "Lần lượt (taking turn)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tất cả đều sai",
        isKey: false,
        idx: 3,
      },
    ],
    title: "CSMA/CD là kiểu truy cập nào trong các kiểu sau đây:",
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 5,
    title:
      "Phương pháp truy nhập nào dưới đây lắng nghe lưu thông mạng trên đường truyền trước khi truyền dữ liệu:",

    bonus:
      " CSMA/CD nghĩa là đa truy cập nhận biết sóng mang phát hiện xung đột.      Theo phương pháp này, khi một máy tính muốn truyền   một gói tin, trước tiên nó sẽ lắng nghe xem trên đường truyền có sóng mạng hay không .  Nếu không có,  nó sẽ thực hiện truyền gói tin.",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 228,
    answers: [
      {
        isKey: true,
        title: "CSMA/CD",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "CSMA/CA",
      },
      {
        idx: 2,
        isKey: false,
        title: "Token RING",
      },
      {
        isKey: false,
        idx: 3,
        title: "Token BUS",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "IEEE802.2",
        isKey: false,
      },
      {
        title: "IEEE802.3",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Token Bus",
        isKey: false,
      },
      {
        idx: 3,
        title: "Token Ring",
        isKey: false,
      },
    ],
    title:
      "Chuẩn nào dưới đây đặc tả về chuẩn kiến trúc mạng cục bộ cho Ethernet, bao gồm các chuẩn tầng vật lý và tầng con MAC:",
    bonus:
      "IEEE 802.3 là một working group và là một bộ tiêu chuẩn nhằm định nghĩa tầng vật lý và media access control (MAC) của tầng liên kết dữ liệu của Ethernet có dây. ",
    chapterIdx: 5,
    idx: 229,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    idx: 230,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "00-2A-43-16-23-A8",
        idx: 0,
      },
      {
        title: "00-2A-43-3E-33-A0",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "00-4G-43-26-36-0D",
      },
      {
        idx: 3,
        isKey: false,
        title: "00-C0-9F-C3-27-F6",
      },
    ],

    chapterIdx: 5,
    title: "Địa chỉ vật lý (MAC Address) nào sau đây là không đúng:",
  },
  {
    title: "Thiết bị Hub cho phép:",
    answers: [
      {
        idx: 0,
        title:
          "Kéo dài 1 nhánh LAN thông qua việc khuyếch đại tín hiệu truyền đến nó",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Ngăn không cho các packet thuộc loại Broadcast đi qua nó",
      },
      {
        title: "Giúp định tuyến cho các packet",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Kết nối nhiều máy tính lại với nhau để tạo thành một nhánh LAN (segment)",
        isKey: false,
      },
    ],
    bonus:
      "Việc kết nối các máy tính bằng Hub khá đơn giản, nó mở rộng khoảng cách tối đa giữa bất cứ nút lặp nào trên nội bộ. ",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
    idx: 231,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 232,
    chapterIdx: 5,

    answers: [
      {
        idx: 0,
        title: "Không có trả lời (no response)",
        isKey: false,
      },
      {
        idx: 1,
        title: "Router sẽ trả lời với địa chỉ MAC của Z",
        isKey: false,
      },
      {
        title: "Router sẽ trả lời với địa chỉ MAC của mình",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Router sẽ gửi tiếp yêu cầu (ARP request) tới subnet của Z và lúc đó Z có thể trả lời A",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Máy tính A và Z có địa chỉ trên 2 SUBNET khác nhau. Điều gì xảy ra khi máy tính A gửi broadcasts (ARP request) đi tìm địa chỉ MAC của máy tính Z:",
  },
  {
    title:
      "Điều gì xảy ra khi máy tính A gửi broadcasts (ARP request) đi tìm địa chỉ MAC của máy tính B trên cùng một mạng:",
    answers: [
      {
        title: "Máy chủ DNS sẽ trả lời A với địa chỉ MAC của B",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Tất cả các máy tính trong mạng đều nhận được yêu cầu (ARP request) và tất cả sẽ trả lời A với địa chỉ MAC của B",
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Tất cả các máy tính trong mạng đều nhận được yêu cầu (ARP request) nhưng chỉ có B mới trả lời A với địa chỉ MAC của mình",
        isKey: true,
      },
      {
        title:
          "Các Router gần nhất nhận được yêu cầu (ARP request) sẽ trả lời A với địa chỉ MAC của B hoặc sẽ gửi tiếp yêu cầu này tới các router khác (forwards the request to another router)",
        idx: 3,
        isKey: false,
      },
    ],

    chapterIdx: 5,
    idx: 233,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
    idx: 234,
    title:
      "Trong mô hình OSI, việc xác định địa chỉ vật lý từ địa chỉ logic là trách nhiệm của:",

    answers: [
      {
        isKey: false,
        title: "Tầng ứng dụng",
        idx: 0,
      },
      {
        isKey: true,
        title: "Tầng liên kết dữ liệu",
        idx: 1,
      },
      {
        title: "Tầng mạng",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tầng giao vận",
      },
    ],
  },
  {
    idx: 235,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    bonus: "B (cuảt ầng vật lý), C (của tầng vận tải)",
    chapterIdx: 5,
    title: "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp:",
    answers: [
      {
        title: "Đặt gói tin tầng mạng vào các Frame",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Mã hoá các bit thành các tín hiệu vật lý",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tạo đường truyền tin cậy",
      },
      {
        title: "Câu A và B đều đúng",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    chapterIdx: 5,

    answers: [
      {
        isKey: false,
        title: "Chuỗi nhận được bị lỗi",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chuỗi nhận được đúng hoàn toàn",
      },
      {
        idx: 2,
        isKey: false,
        title: "Có thể phát hiện và sửa được lỗi trong chuỗi bit này",
      },
      {
        idx: 3,
        isKey: true,
        title: "Không xác định lỗi trong chuỗi nhận được",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 236,
    title:
      "Giả sử người ta sẽ bổ sung 1 bit kiểm tra vào cuối của dòng dữ liệu gửi đi sao cho tổng số bit 1 trong chuỗi mới là một số lẻ. Bên nhận nhận được chuỗi 1000101010001 thì:",
  },
  {
    title: "Switch là thiết bị hoạt động ở tầng:",
    bonus: "A (hub), C (router)",
    idx: 237,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Vật lý ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Liên kết dữ liệu",
        idx: 1,
        isKey: true,
      },
      {
        title: "Mạng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Vận chuyển",
        isKey: false,
      },
    ],
    chapterIdx: 5,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "CSMA",
      },
      {
        title: "ALOHA",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "CSMA/CD",
        idx: 2,
      },
      {
        title: "TDMA",
        isKey: false,
        idx: 3,
      },
    ],
    chapterIdx: 5,
    idx: 238,
    title:
      "Công nghệ Ethernet sử dụng phương pháp truy nhập đường truyền nào sau đây:",

    bonus:
      "... Ethernet dùng thuật toán đa truy cập CSMA/CD  (cụ thể ở 8.3.1.4 CSMA/CD)",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Phát biểu nào sau đây là đúng nhất cho Switch:",

    idx: 239,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title:
          "Sử dụng địa chỉ vật lý và hoạt động tại tầng Physical của mô hình OSI",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Sử dụng địa chỉ vật lý và hoạt động tại tầng Network của mô hình OSI",
      },
      {
        isKey: true,
        title:
          "Sử dụng địa chỉ vật lý và hoạt động tại tầng DataLink của mô hình OSI",
        idx: 2,
      },
      {
        title:
          "Sử dụng địa chỉ IP và hoạt động tại tầng Network của mô hình OSI",
        isKey: false,
        idx: 3,
      },
    ],
    chapterIdx: 5,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hub/Switch sẽ gửi lại dữ liệu",
      },
      {
        title: "Dữ liệu sẽ bị phá hỏng",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dữ liệu sẽ được khôi phục lại tại máy nhận",
      },
      {
        idx: 3,
        title: "Cả A và C đúng",
        isKey: false,
      },
    ],
    idx: 240,
    title:
      "Điều gì sẽ xảy ra với dữ liệu khi có xung đột (collision) trong quá trình truyền dữ liệu:",
  },
  {
    idx: 241,
    answers: [
      {
        idx: 0,
        title: "Token Ring",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Ethernet",
      },
      {
        idx: 2,
        isKey: false,
        title: "FDDI",
      },
      {
        idx: 3,
        title: "Tất cả các câu trên",
        isKey: false,
      },
    ],

    chapterIdx: 5,
    title: "Công nghệ LAN nào sử dụng kỹ thuật CSMA/CD:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hub",
      },
      {
        isKey: false,
        title: "NIC",
        idx: 1,
      },
      {
        title: "Switch",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Transceiver",
      },
    ],
    idx: 242,
    title:
      "Trang thiết bị mạng nào sau đây làm giảm bớt sự xung đột (collisions):",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    chapterIdx: 5,
    bonus:
      "Segmentation involves the use of a switch to split a larger collision domain into smaller ones in order to reduce collision probability and to improve overall network throughput. ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Repeater",
      },
      {
        title: "Hub",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Switch",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Card mạng (NIC)",
      },
    ],
    idx: 243,
    title:
      "Để hạn chế sự đụng độ (collision) của các gói tin trên mạng, người ta chia mạng thành các mạng nhỏ hơn và nối kết chúng lại bằng các thiết bị:",
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Địa chỉ IP",
        isKey: false,
      },
      {
        isKey: false,
        title: "Địa chỉ port",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Địa chỉ MAC",
      },
      {
        isKey: false,
        title: "Tất cả đều sai",
        idx: 3,
      },
    ],
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: 'Chuỗi số "00-08-ac-41-5d-9f" có thể là:',

    idx: 244,
  },
  {
    chapterIdx: 5,
    idx: 245,

    title:
      "Địa chỉ nào được Switch sử dụng khi quyết định gửi data sang cổng (port) nào:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Source MAC address",
      },
      {
        isKey: true,
        title: "Destination MAC address",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Network address",
      },
      {
        isKey: false,
        idx: 3,
        title: "Subnetwork address",
      },
    ],
  },
  {
    idx: 246,
    chapterIdx: 5,

    title: "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: true,
        title: "Đặt gói tin tầng mạng vào các Frame",
        idx: 0,
      },
      {
        title: "Định tuyến",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Mã hoá các bit thành các tín hiệu vật lý",
      },
      {
        isKey: false,
        idx: 3,
        title: "Tạo đường truyền tin cậy",
      },
    ],
    bonus: "cùng câu hỏi với c1.235 mà đáp án lại có sự khác biệt ",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "1",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "2",
      },
      {
        idx: 2,
        isKey: false,
        title: "3",
      },
      {
        idx: 3,
        title: "4",
        isKey: false,
      },
    ],

    chapterIdx: 5,
    title:
      "Giả sử có một Hệ thống 2 LAN segment được nối với nhau qua một router là máy tính. Máy tính đóng vai trò Router có bao nhiêu card mạng:",
    idx: 247,
  },
  {
    title: "Chọn định nghĩa đúng về địa chỉ MAC:",
    bonus:
      "Địa chỉ MAC thường được chỉ định bởi nhà sản xuất bộ điều khiển giao diện mạng NIC ",
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Được ghi sẵn trên card mạng (NIC)",
      },
      {
        isKey: false,
        title: "Do người quản trị mạng khai báo",
        idx: 1,
      },
      {
        title: "Câu A và B đúng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả đều đúng",
      },
    ],
    idx: 248,
  },
  {
    chapterIdx: 5,
    answers: [
      {
        idx: 0,
        title: "X25",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Frame Relay ",
      },
      {
        idx: 2,
        title: "ISDN",
        isKey: false,
      },
      {
        idx: 3,
        title: "ATM",
        isKey: true,
      },
    ],

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Công nghệ nào sau đây có độ đài của khung dữ liệu cố định:",
    idx: 249,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "53 byte",
      },
      {
        isKey: false,
        title: "128 byte",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "512 byte",
      },
      {
        idx: 3,
        title: "1500 byte",
        isKey: false,
      },
    ],
    chapterIdx: 5,
    title: "Độ dài của khung dữ liệu của ATM là:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 250,
    bonus:
      " In ATM these frames are of a fixed (53 octets or bytes) length and specifically called cells.",
  },
  {
    title: "ATM có tốc độ trao đổi thông tin từ:",
    chapterIdx: 5,
    answers: [
      {
        title: "2 Mbps đến 8 Mbps",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "155 Mbps đến 1 Gbps",
        isKey: false,
      },
      {
        title: "100 Mbps đến 155 Mbps",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "155 Mbps đến 622 Mbps",
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 251,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
    idx: 252,
    bonus:
      "Trong các mạng cục bộ theo chuẩn IEEE 802  tầng liên kết dữ liệu được chia thành hai tầng con MAC và LLC",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "LLC và MAC",
      },
      {
        title: "TCP và UDP",
        isKey: false,
        idx: 1,
      },
      {
        title: "TCP và IP",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "ARP và RARP",
        idx: 3,
      },
    ],
    title:
      "Chuẩn IEEE 802 chia tầng Liên kết dữ liệu của mô hình OSI thành 2 tầng con:",
  },
  {
    title: "Fast Ethernet còn được gọi là:",
    answers: [
      {
        isKey: false,
        title: "10BaseT",
        idx: 0,
      },
      {
        title: "100BaseFX ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "10BaseFX",
        idx: 2,
      },
      {
        title: "100BaseT",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 253,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus:
      "Mạng Ethernet trên cáp đồng xoắn đôi. ...  Hiện tại phổ biến nhất là 100BASE-TX (fast Ethernet) và 1000BASE-T (gigabit Ethernet)truyền dẫn tốc độ tương ứng 100 Mbit/giây và 1000 Mbit/giây (1 Gbit/s). Fast Ethernet bao gồm 100BASE-FX, 100BASE-TX, 100Base-T4, v.v...",
    chapterIdx: 5,
  },
  {
    answers: [
      {
        title: "10 Mbps",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "100 Mbps",
        idx: 1,
      },
      {
        title: "1000 Mbps",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "10 Gbps",
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,

    title: "Tốc độ truyền dữ liệu của topology 1000Base-FX là:",
    idx: 254,
  },
  {
    title:
      "Kỹ thuật mạng LAN Fast Ethernet có tốc độ truyền dữ liệu cơ bản là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus:
      "Fast Ethernet (FE) là một thuật ngữ của Ethernet trong mạng điện toán, mô tả việc truyền tải lưu lượng ở tốc độ 100Mbps. ",
    chapterIdx: 5,

    idx: 255,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "10 Mbps",
      },
      {
        idx: 1,
        isKey: true,
        title: "100 Mbps",
      },
      {
        isKey: false,
        idx: 2,
        title: "1.000 Mbps",
      },
      {
        idx: 3,
        title: "10.000 Mbps",
        isKey: false,
      },
    ],
  },
  {
    title: "Chuẩn WLAN 802.11b/g có tốc độ truyền dữ liệu tương ứng là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "11/100 Mbps",
      },
      {
        isKey: true,
        idx: 1,
        title: "11/54 Mbps",
      },
      {
        idx: 2,
        isKey: false,
        title: "11/108 Mbps",
      },
      {
        isKey: false,
        title: "2/54 Mbps",
        idx: 3,
      },
    ],
    idx: 256,

    bonus: " 802.11g có thể đạt tốc độ lên tới 54Mbps  trong băng tần 2.4GHz",
    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Tần số hoạt động của chuẩn WLAN 802.11g là:",

    chapterIdx: 5,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 257,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "5 Ghz",
      },
      {
        title: "2,3 Ghz",
        idx: 1,
        isKey: false,
      },
      {
        title: "2,4 Ghz",
        idx: 2,
        isKey: true,
      },
      {
        title: "2,5 Ghz",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Đường truyền tín hiệu tương tự, đường truyền âm thoại chuẩn được sử dụng trong các cuộc giao tiếp qua điện thoại gọi là đường truyền:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Quay số",
      },
      {
        title: "Tín hiệu số trực tiếp",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Any-to-any",
        idx: 2,
      },
      {
        title: "Chuyên dụng (thuê bao)",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 258,
    bonus:
      "Dial-up Là phương thức truy cập Internet thông qua đường dây điện thoại bằng cách quay số tới số của nhà cung cấp dịch vụ Internet (chẳng hạn như 1260).",
  },
  {
    answers: [
      {
        title:
          "Là máy đại diện cho một nhóm máy đi thực hiện một dịch vụ máy khách (client service) nào đó",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Là một thiết bị thống kê lưu lượng mạng",
      },
      {
        title: "Tất cả đều đúng",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả đều sai",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    idx: 259,
    bonus:
      "Proxy là một Internet server làm nhiệm vụ  chuyển tiếp thông tin và kiểm soát tạo sự an toàn  cho việc truy cập Internet của  các máy khách, còn gọi là khách hàng sử dụng  dịch vụ Internet.  Trạm cài đặt proxy gọi là proxy server.  Proxy hay trạm cài đặt proxy có địa chỉ IP  và một cổng truy cập cố định.",
    chapterIdx: 5,
    title: "Chức năng của Proxy là gì:",
  },
  {
    answers: [
      {
        title: "Phần cứng",
        idx: 0,
        isKey: false,
      },
      {
        title: "Phần mềm",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Thiết bị ngoại vi",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Card",
      },
    ],
    idx: 260,

    title: "Trình điều khiển (driver) là:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "TCP/IP",
      },
      {
        title: "NetBEUI",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "DLC",
      },
      {
        title: "Tất cả phương án trên",
        idx: 3,
        isKey: true,
      },
    ],
    title: "Giao thức nào trong các giao thức sau dùng trong mô hình mạng WAN:",

    idx: 261,
    bonusLink:
      "https://tracnghiem.net/cntt/cau-hoi--giao-thuc-nao-trong-cac-giao-thuc-sau-dung-trong-mo-hinh-mang-wan-16269.html",
    chapterIdx: 5,
  },
  {
    idx: 262,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 5,
    title: "Giao thức nào trong các giao thức sau dùng trong mô hình mạng LAN:",
    answers: [
      {
        title: "TCP/IP",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "IPX/SPX",
      },
      {
        idx: 2,
        title: "NetBEUI",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Tất cả",
      },
    ],
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Bảo vệ các tài nguyên thông tin trên mạng là cần thiết và cấp bách, vì:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các máy tính được nối thành mạng",
      },
      {
        idx: 1,
        isKey: true,
        title: "Nhiều người sử dụng và phân tán về mặt vật lý",
      },
      {
        idx: 2,
        title: "Bảo vệ các máy chủ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chống nghe trộm thông tin",
      },
    ],
    idx: 263,
    chapterIdx: 6,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phần mềm trên mạng",
      },
      {
        isKey: true,
        idx: 1,
        title: "Tài nguyên của mạng",
      },
      {
        idx: 2,
        title: "Phần cứng của mạng",
        isKey: false,
      },
      {
        title: "Kho dữ liệu",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 264,
    chapterIdx: 6,
    title: "An toàn mạng theo nghĩa là bảo vệ và đảm bảo an toàn:",
  },
  {
    chapterIdx: 6,
    title: "Vi phạm an toàn thông tin hiểu theo nghĩa:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    answers: [
      {
        title: "Can thiệp vào các hoạt động của mạng",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Can thiệp vào các hoạt động của người sử dụng",
      },
      {
        title: "Nội dung thông tin và luồng thông tin thay đổi",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Từ chối dịch vụ",
      },
    ],
    idx: 265,
  },
  {
    idx: 266,
    title: "Mật mã là quá trình chuyển đối thông tin từ bản rõ sang:",
    chapterIdx: 6,
    answers: [
      {
        title: "Dạng mã hóa",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Dạng từ chối dịch vụ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Phủ nhận",
      },
      {
        idx: 3,
        isKey: false,
        title: "Không được quyền truy xuất",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 6,
    idx: 267,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        title: "Đột nhập bất hợp pháp từ bên ngoài vào hệ thống",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Sử dụng tài nguyên của mạng",
      },
      {
        idx: 2,
        isKey: false,
        title: "Quyền truy xuất thông tin",
      },
      {
        isKey: false,
        title: "Gián điệp",
        idx: 3,
      },
    ],
    title: "Firewall là một hệ thống kiểm soát, ngăn chặn:",
  },
  {
    bonusLink:
      "https://tracnghiem.net/cntt/cau-hoi-mot-bo-loc-packet-cai-dat-tren-firewall-co-the-56224.html",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Một bộ lọc packet (cài đặt trên firewall) có thể:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Chỉ các máy tính phía trong mới có khả năng khởi tạo các kết nối TCP ra các máy tính ở bên ngoài mạng",
      },
      {
        title:
          "Cho phép FTP client ở bên trong có thể truy cập tới FTP server bên ngoài mà máy tính bên trong không bị hack",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Cho phép FTP client ở bên ngoài có thể truy cập tới FTP server bên trong mà máy tính bên trong không bị hack",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều đúng",
      },
    ],
    idx: 268,
    chapterIdx: 6,
  },
  {
    idx: 269,
    chapterIdx: 6,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Chứng thực là:",
    answers: [
      {
        title: "Người gửi mã hóa thông điệp, người nhận giải mã thông điệp",
        idx: 0,
        isKey: false,
      },
      {
        title: "Người gửi và người nhận xác định là nhận ra nhau",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Người gửi và người nhận muốn đảm bảo thông điệp không bị thay đổi",
        isKey: false,
      },
      {
        title:
          "Các dịch vụ phải có khả năng truy nhập và sẵn sàng với người dùng",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Người gửi mã hóa thông điệp, người nhận giải mã thông điệp",
        isKey: false,
      },
      {
        isKey: false,
        title: "Người gửi và người nhận xác định là nhận ra nhau",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Người gửi và người nhận muốn đảm bảo thông điệp không bị thay đổi",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Các dịch vụ phải có khả năng truy nhập và sẵn sàng với người dùng",
      },
    ],

    chapterIdx: 6,
    title: "Sự toàn vẹn thông điệp là:",
    idx: 270,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    chapterIdx: 6,
    bonus:
      "Thuật toán DES được sử dụng để mã hóa và giải mã các block (k dữ liệu 64 bit dựa trên một key (khóa mã) 64 bit.",
    title:
      "DES (Data Encryption Standard) được sử dụng trong: A. Mã hóa khóa đối xứ",
    idx: 271,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "Mã hóa khóa đối xứng",
        isKey: true,
      },
      {
        title: "Mã hóa khóa công khai",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Cả mã hóa khóa đối xứng và mã hóa khóa công khai",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tất cả các phương án trên đều sai",
        idx: 3,
      },
    ],
  },
  {
    chapterIdx: 6,
    idx: 272,

    answers: [
      {
        idx: 0,
        title: "Mã hóa khóa đối xứng",
        isKey: false,
      },
      {
        title: "Mã hóa khóa công khai",
        idx: 1,
        isKey: true,
      },
      {
        title: "Cả mã hóa khóa đối xứng và mã hóa khóa công khai",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả các phương án trên đều sai",
      },
    ],
    title: "Giải thuật RSA được sử dụng trong:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    bonus: "RSA là một thuật toán mật mã hóa khóa công khai.",
  },
  {
    chapterIdx: 7,

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        isKey: false,
        title: "Xác định đường đi của các gói tin từ nguồn đến đích",
        idx: 0,
      },
      {
        isKey: true,
        title:
          "Biết trạng thái cấu hình TCP/IP của máy tính (cấu hình về các card mạng)",
        idx: 1,
      },
      {
        title: "Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Kiểm tra lỗi mạng",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 273,
    title: "Sử dụng lệnh IPconfig khi muốn:",
  },
  {
    bonus:
      "Tiện ích chẩn đoán TRACERT xác định đường đến một đích bằng cách gửi gói echo Giao thức Thông báo",
    idx: 274,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,

    title: "Lệnh Tracert dùng để:",
    answers: [
      {
        isKey: true,
        title:
          "Xác định đường đi của các gói tin từ nguồn đến đích (qua các nút mạng nào)",
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Biết trạng thái cấu hình TCP/IP của máy tính (cấu hình về các card mạng)",
        idx: 1,
      },
      {
        title: "Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Kiểm tra lỗi mạng",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    bonus:
      "Netstat là 1 công cụ dòng lệnh được sử dụng để theo dõi các kết nối mạng vào và ra có sẵn trên toàn bộ các hệ điều hành",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,
    answers: [
      {
        title:
          "Biết trạng thái cấu hình TCP/IP của máy tính (cấu hình về các card mạng)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
        idx: 1,
        isKey: false,
      },
      {
        title: "Xác định đường đi của các gói tin từ nguồn đến đích",
        idx: 2,
        isKey: false,
      },
      {
        title: "Liệt kê tất cả các kết nối vào ra máy tính",
        isKey: true,
        idx: 3,
      },
    ],

    title: "Lệnh Netstat dùng để:",
    idx: 275,
  },
  {
    idx: 276,
    chapterIdx: 7,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Trong cú pháp lệnh telnet ip/host port bao gồm các tham số:",
    answers: [
      {
        idx: 0,
        title:
          "ip là địa chỉ IP của thiết bị nguồn, host là tên thiết bị đầu cuối, port là cổng giao tiếp với thiết bị đầu cuối",
        isKey: false,
      },
      {
        title:
          "ip là địa chỉ IP của thiết bị đầu cuối, host là tên thiết bị đầu cuối, port là cổng để giao tiếp với thiết bị đầu cuối",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "ip là địa chỉ IP của thiết bị nguồn, host là tên thiết bị nguồn, port là cổng nguồn",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "ip là địa chỉ IP của thiết bị nguồn, host là tên thiết bị đầu cuối, port là cổng nguồn",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cho biết trạng thái cấu hình của mạng",
      },
      {
        idx: 1,
        isKey: false,
        title: "Xác định đường đi của các gói tin từ nguồn đến đích",
      },
      {
        idx: 2,
        isKey: true,
        title: "Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
      },
      {
        title: "Truy nhập từ xa",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 277,
    chapterIdx: 7,

    title: "Wireshark là một công cụ để:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title:
      "Lệnh nào sẽ hiển thị kết quả dưới đây:Reply from 74.125.128.102: byte=32 time=50ms TTL=4537 Reply from 74.125.128.102: byte=32 time=51ms TTL=45 Reply from 74.125.128.102: byte=32 time=56ms TTL=45 Reply from 74.125.128.102: byte=32 time=52ms TTL=45 Packets: Sent = 4, Received = 4, Lost = 0 <0% lost> Approximate round trip times in milli-seconds: Minimum = 50ms, Maximum = 56ms, Average = 52ms",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,

    answers: [
      {
        title: "Ping",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tracert",
      },
      {
        isKey: false,
        idx: 2,
        title: "Telnet",
      },
      {
        title: "Ipconfig",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 278,
  },
  {
    chapterIdx: 7,
    idx: 279,

    answers: [
      {
        title: "Ping",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tracert ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Netstat ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Ipconfig",
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Lệnh nào sẽ hiển thị kết quả dưới đây:  Proto Local Address Foreign Address State TCP 0.0.0.0:7 nam-PC:0 LISTENING TCP 0.0.0.0:9 nam-PC:0 LISTENING TCP 0.0.0.0:13 nam-PC:0 LISTENING TCP 0.0.0.0:17 nam-PC:0 LISTENING",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        title: "Ping",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tracert",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Netstat",
      },
      {
        isKey: true,
        title: "Wireshark",
        idx: 3,
      },
    ],

    chapterIdx: 7,
    idx: 280,
    title: "Công cụ nào sẽ hiển thị các thông tin như dưới đây:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,

    idx: 281,
    title: "Lệnh nào sẽ hiển thị kết quả dưới đây: (hình ảnh))",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ping",
      },
      {
        idx: 1,
        isKey: false,
        title: "Ping –a",
      },
      {
        title: "Tracert",
        idx: 2,
        isKey: true,
      },
      {
        title: "Netstat",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "IP",
      },
      {
        isKey: true,
        idx: 1,
        title: "IPCONFIG",
      },
      {
        isKey: false,
        title: "TCP_IP",
        idx: 2,
      },
      {
        isKey: false,
        title: "FTP",
        idx: 3,
      },
    ],

    title: "Lệnh nào sau đây cho biết địa chỉ IP của máy tính:",
    idx: 282,
    chapterIdx: 7,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    title: "Lệnh PING dùng để:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Kiểm tra các máy tính có đĩa cứng hay không",
      },
      {
        idx: 1,
        title: "Kiểm tra các máy tính trong mạng có liên thông không",
        isKey: true,
      },
      {
        isKey: false,
        title: "Kiểm tra các máy tính có hoạt động tốt hay không",
        idx: 2,
      },
      {
        title: "Kiểm tra các máy tính có truy cập vào Internet không",
        isKey: false,
        idx: 3,
      },
    ],
    chapterIdx: 7,
    idx: 283,
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Lệnh nào dưới đây được dùng để xác định đường truyền (trong hệ điều hành Windows):",
    chapterIdx: 7,
    bonus:
      "NSLOOKUP là một tiện ích chuẩn đoán DNS có sẵn trong Windows và UNIX",

    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Nslookup",
      },
      {
        isKey: false,
        idx: 1,
        title: "ipconfig",
      },
      {
        title: "Route",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tracert",
        idx: 3,
      },
    ],
    idx: 284,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Route",
      },
      {
        isKey: false,
        title: "ARP",
        idx: 1,
      },
      {
        title: "Ping",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Netstat",
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title: "Tiện ích TCP/IP nào dùng để kiểm tra sự kết nối mạng:",

    chapterIdx: 7,
    idx: 285,
    bonus: "Ping là một ứng dụng kiểm tra kết nối giữa hai điểm trong mạng",
  },
  {
    chapterIdx: 7,

    idx: 286,
    bonus:
      "Không thấy note đáp án :v các bạn xem lại kiến thức hộ nhé, tôi đoán là D",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Những khẳng định nào sau đây là đúng khi nói về các mô hình kết nối ADSL:",
    answers: [
      {
        isKey: false,
        title: "Mô hình PPPoA (Point to Point over ATM)",
        idx: 0,
      },
      {
        isKey: false,
        title: "Mô hình PPPoE (Point to Point over Ethernet) RFC 2516",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Mô hình IP over ATM (RFC 1483R)",
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả đều đúng",
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Không đối xứng",
      },
      {
        isKey: false,
        title: "Ngẫu nhiên",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tuần tự",
      },
      {
        isKey: false,
        idx: 3,
        title: "Đối xứng",
      },
    ],
    chapterIdx: 7,

    idx: 287,
    bonus: "Asymmetric Digital Subscriber Line",
    title: "Công nghệ ADSL là công nghệ đường dây thuê bao số truy nhập:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,

    idx: 288,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tra cứu trong cuốn hướng dẫn sử dụng của nhà cung cấp",
      },
      {
        title:
          "Cấp điện cho ADSL Router và ấn giữ nút Reset trong một khoảng thời gian nhất định",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dùng software để dò Username và Password",
      },
      {
        isKey: false,
        title: "Không thể khôi phục mật khẩu mặc định",
        idx: 3,
      },
    ],
    title:
      "Khi quên mật khẩu của ADSL Router, làm cách nào để khôi phục mật khẩu mặc định:",
  },
  {
    answers: [
      {
        title:
          "VCI/VPI, LAN IP Address, Tài khoản kết nối đến nhà cung cấp dịch vụ (user, password)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "DHCP Service",
        idx: 1,
      },
      {
        title: "Câu a và b đúng",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả các câu trên đều sai",
      },
    ],
    chapterIdx: 7,

    idx: 289,
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Thực hiện cấu hình ADSL Router để kết nối Internet, những thông số cơ bản cần thiết lập là:",
  },
  {
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    title:
      "Trang thiết bị mạng trung tâm dùng để kết nối các máy tính trong mạng hình sao (STAR):",
    idx: 290,
    answers: [
      {
        idx: 0,
        title: "Switch/Hub",
        isKey: true,
      },
      {
        idx: 1,
        title: "Router",
        isKey: false,
      },
      {
        isKey: false,
        title: "Repeater",
        idx: 2,
      },
      {
        title: "NIC",
        isKey: false,
        idx: 3,
      },
    ],
    chapterIdx: 7,
  },
  {
    title: "Chương trình Traceroute sử dụng các giao thức nào:",

    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,
    idx: 291,
    answers: [
      {
        isKey: false,
        title: "UDP",
        idx: 0,
      },
      {
        isKey: true,
        title: "UDP và ICMP",
        idx: 1,
      },
      {
        title: "TCP và ICMP",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "IGMP",
      },
    ],
  },
  {
    idx: 292,
    chapterIdx: 7,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giúp định tuyến cho các packet",
      },
      {
        idx: 1,
        title:
          "Kết nối 2 mạng LAN lại với nhau đồng thời đóng vai trò như một bộ lọc (filter): chỉ cho phép các packet, mà địa chỉ đích nằm ngoài nhánh LAN mà packet xuất phát, đi qua.",
        isKey: true,
      },
      {
        idx: 2,
        title: "Tăng cường tín hiệu điện để mở rộng đoạn mạng",
        isKey: false,
      },
      {
        title: "Cả A, B, C đều đúng",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    title: "Thiết bị Bridge cho phép:",
  },
  {
    answers: [
      {
        title: "Giao tiếp với mạng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Truyền dữ liệu đi xa",
      },
      {
        idx: 2,
        isKey: false,
        title: "Truyền dữ liệu trong mạng LAN",
      },
      {
        title: "A và B đều đúng",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 7,
    title: "Modem dùng để:",
    idx: 293,
    practiceCode: "mang-may-tinh-01-co-giai-thich",

    bonus:
      "modem sẽ đóng vai trò chuyển hóa các gói dữ liệu do ISP cung cấp  thành kết nối Internet cho router hoặc các thiết bị có liên kết mạng khác.",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "#md test",
      },
      {
        isKey: true,
        idx: 1,
        title: "!md test",
      },
      {
        title: "Md Test",
        isKey: false,
        idx: 2,
      },
      {
        title: "Mkdir test",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    chapterIdx: 7,
    title:
      'Bạn đang sử dụng FTP trong Command Promt, bạn muốn tạo một thư mục mang tên "Test" trên máy cục bộ của bạn (bạn vẫn không thoát khỏi FTP). Bạn sẽ sử dụng lệnh gì:',
    idx: 294,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kiểm chứng và Mã kiểm chứng 401 Authorization require",
      },
      {
        idx: 1,
        title: 'Trường tiêu đề "Last-Modified" và "If-Modified-Since"',
        isKey: false,
      },
      {
        isKey: false,
        title: "Phương thức yêu cầu POST",
        idx: 2,
      },
      {
        title: "A và B",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 295,
    chapterIdx: 7,
    title:
      "Trong các cơ chế sau đây, cơ chế nào được sử dụng để cài đặt Web cache:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
  },
  {
    answers: [
      {
        isKey: true,
        title: "Bấm thứ tự 2 đầu cáp giống nhau",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đổi vị trí các sợi 1, 2 với sợi 3, 6",
      },
      {
        title:
          "Một đầu bấm theo chuẩn TIA/EIA T-568A, đầu kia theo chuẩn TIA/EIA T568-B",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả đều sai",
        idx: 3,
        isKey: false,
      },
    ],
    chapterIdx: 7,
    title: "Sợi cáp xoắn nối giữa card mạng với hub thì:",
    practiceCode: "mang-may-tinh-01-co-giai-thich",
    idx: 296,
  },
];

export default questions;
