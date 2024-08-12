import { QuestionRequest } from "../../models/multiple-question";

const questions: QuestionRequest[] = [
  {
    idx: 0,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Mô hình tổng quát đảm bảo an toàn thông tin và hệ thống thông tin  thường gồm các lớp:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "An ninh tổ chức, An ninh mạng và Điều khiển truy cập",
      },
      {
        idx: 1,
        title: "An ninh tổ chức, Tưởng lửa và Điều khiển truy cập",
        isKey: false,
      },
      {
        title:
          "An ninh tổ chức, An ninh mạng và An toàn hệ điều hành và ứng  dụng",
        isKey: false,
        idx: 2,
      },
      {
        title: "An ninh tổ chức, An ninh mạng và An ninh hệ thống",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title: "An ninh mạng và An toàn hệ thống",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "An toàn máy tính và An toàn Internet",
      },
      {
        idx: 2,
        isKey: false,
        title: "An toàn máy tính và An ninh mạng",
      },
      {
        title: "An toàn công nghệ thông tin và Đảm bảo thông tin",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 1,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "An toàn thông tin gồm hai lĩnh vực chính là:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Tại sao cần phải đảm bảo an toàn cho thông tin?",
    answers: [
      {
        title:
          "Do có nhiều thiết bị kết nối mạng Internet với nhiều nguy cơ và đe  dọa",
        isKey: true,
        idx: 0,
      },
      {
        title: "Do có quá nhiều phần mềm độc hại",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Do có quá nhiều nguy cơ tấn công mạng",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Do có nhiều thiết bị kết nối mạng Internet",
      },
    ],
    idx: 2,
  },
  {
    idx: 3,
    title: "An toàn hệ thống thông tin là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Việc đảm bảo thông tin trong hệ thống không bị đánh cắp",
      },
      {
        idx: 1,
        title:
          "Việc đảm bảo cho hệ thống thông tin hoạt động trơn tru, ổn  định",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Việc đảm bảo cho hệ thống thông tin không bị tấn công",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Việc đảm bảo các thuộc tính an ninh, an toàn của hệ thống thông  tin",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title:
      "Người sử dụng hệ thống thông tin quản lý trong mô hình 4 loại hệ  thống thông tin là:",
    answers: [
      {
        isKey: false,
        title: "Quản lý cao cấp",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Giám đốc điều hành",
      },
      {
        isKey: false,
        title: "Nhân viên",
        idx: 2,
      },
      {
        title: "Quản lý bộ phận",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 4,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Phòng vệ nhiều lớp có chiều sâu",
        isKey: true,
      },
      {
        title: "Cần đầu tư trang thiết bị và chuyên gia đảm bảo an toàn",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Cần mua sắm và lắp đặt nhiều thiết bị an ninh chuyên dụng",
      },
      {
        title: "Cân bằng giữa tính hữu dụng, chi phí và tính năng",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Nguyên tắc cơ bản cho đảm bảo an toàn thông tin, hệ thống và mạng  là:",
    idx: 5,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 6,
    answers: [
      {
        title: "Quản lý các ứng dụng      ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Quản lý hệ thống         ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Quản lý hệ điều hành",
        isKey: false,
        idx: 2,
      },
      {
        title: "Quản lý rủi ro",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Một trong các nội dung rất quan trọng của quản lý an toàn thông tin  là:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Bí mật, Toàn vẹn và sẵn dùng",
        isKey: false,
      },
      {
        isKey: true,
        title: "Bí mật và Toàn vẹn",
        idx: 1,
      },
      {
        idx: 2,
        title: "Bí mật",
        isKey: false,
      },
      {
        title: "Toàn vẹn",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một thông điệp có nội dung nhạy cảm truyền trên mạng bị sửa đổi. Các  thuộc tính an toàn thông tin nào bị vi phạm?",
    idx: 7,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title:
      "Nguy cơ bị tấn công từ chối dịch vụ (DoS) và từ chối dịch vụ phân  tán (DDoS) thường gặp ở vùng nào trong 7 vùng cơ sở hạ tầng CNTT?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Vùng máy trạm",
      },
      {
        idx: 1,
        isKey: true,
        title: "Vùng mạng WAN",
      },
      {
        title: "Vùng mạng LAN-to-WAN",
        isKey: false,
        idx: 2,
      },
      {
        title: "Vùng mạng LAN",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 8,
  },
  {
    title: "An toàn thông tin (Information Security) là gì?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Là việc phòng chống đánh cắp thông tin",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Là việc bảo vệ chống truy nhập, sử dụng, tiết lộ, sửa đổi, hoặc phá  hủy thông tin một cách trái phép",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Là việc bảo vệ chống sử dụng, tiết lộ, sửa đổi, vận chuyển hoặc phá  hủy thông tin một cách trái phép",
      },
      {
        title: "Là việc phòng chống tấn công mạng",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 9,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 10,
    title: "Tìm phát biểu đúng trong các phát biểu sau:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Mối đe dọa là bất kỳ một hành động tấn công nào vào hệ thống  mạng.",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Mối đe dọa là bất kỳ một hành động nào có thể gây hư hại đến các tài  nguyên hệ thống.",
      },
      {
        title:
          "Mối đe dọa là bất kỳ một hành động tấn công nào vào hệ thống máy  tính.",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Mối đe dọa là bất kỳ một hành động tấn công nào vào hệ thống máy  tính và mạng.",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        title: "Sử dụng tường lửa",
        idx: 0,
        isKey: false,
      },
      {
        title: "Sử dụng công nghệ xác thực mạnh",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sử dụng các kỹ thuật mật mã",
      },
      {
        title: "Sử dụng cơ chế cẩm thực hiện mã trong dữ liệu",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 11,
    title:
      "Đây là một trong các biện pháp phòng chống tấn công khai thác lỗi  tràn bộ đệm?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tăng khả năng phá hoại của mã tấn công",
      },
      {
        isKey: false,
        title: "Tăng khả năng gây tràn bộ đệm",
        idx: 1,
      },
      {
        title: "Tăng khả năng mã tấn công được thực hiện",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Tăng khả năng gây lỗi chương trình",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 12,
    title:
      "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng  một số lệnh NOP (No Operation) ở phần đầu của mã tấn công. Mục đích của  việc này là để:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Điểm yếu hệ thống chỉ xuất hiện trong các mô đun phần mềm",
        isKey: false,
      },
      {
        title: "Điểm yếu chỉ xuất hiện khi hệ thống bị tấn công",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Điểm yếu hệ thống có thể xuất hiện trong cả các mô đun phần cứng và  phần mềm",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Điểm yếu hệ thống chỉ xuất hiện trong các mô đun phần cứng",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Tìm phát biểu đúng trong các phát biểu sau:",
    idx: 13,
  },
  {
    title: "Các vùng bộ nhớ thường bị tràn gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 14,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Ngăn xếp (Stack) và vùng nhớ cấp phát động (Heap)",
      },
      {
        idx: 1,
        title: "Ngăn xếp (Stack) và Bộ nhớ đệm (Cache)",
        isKey: false,
      },
      {
        idx: 2,
        title: "Hàng đợi (Queue) và vùng nhớ cấp phát động (Heap)",
        isKey: false,
      },
      {
        idx: 3,
        title: "Hàng đợi (Queue) và Ngăn xếp (Stack)",
        isKey: false,
      },
    ],
  },
  {
    idx: 15,
    title: "Các thành phần chính của hệ thống máy tính gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "CPU, Bộ nhớ, HDD, hệ điều hành và các ứng dụng",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "CPU, hệ điều hành và các ứng dụng",
        idx: 1,
      },
      {
        idx: 2,
        title: "Hệ thống phần cứng và Hệ thống phần mềm",
        isKey: true,
      },
      {
        isKey: false,
        title: "CPU, Bộ nhớ, HDD và Hệ thống bus truyền dẫn",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Lỗi thiết kế, lỗi cài đặt và lập trình",
      },
      {
        isKey: true,
        idx: 1,
        title: "Tất cả các khâu trong quá trình phát triển và vận hành",
      },
      {
        title: "Lỗi quản trị",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Lỗi cấu hình hoạt động",
        idx: 3,
      },
    ],
    title: "Nguyên nhân của sự tồn tại các điểm yếu trong hệ thống có thể  do:",
    idx: 16,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Triệt tiêu được hết các nguy cơ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Triệt tiêu được hết các mối đe dọa",
      },
      {
        isKey: true,
        title: "Giảm thiểu các lỗ hổng bảo mật",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát chặt chẽ người dùng",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Trên thực tế, có thể giảm khả năng bị tấn công nếu có thể...",
    idx: 17,
  },
  {
    answers: [
      {
        title: "SQL Server 2012",
        isKey: true,
        idx: 0,
      },
      {
        title: "SQL Server 2000",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "SQL Server 2008",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "SQL Server 2003 ",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 18,
    title:
      "Sâu SQL Slammer tấn công khai thác lỗi tràn bộ đệm trong hệ quản  trị cơ sở dữ liệu:",
  },
  {
    idx: 19,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Các lỗ hổng bảo mật thường tồn tại nhiều nhất trong thành phần nào  của hệ thống:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hệ điều hành",
      },
      {
        idx: 1,
        isKey: false,
        title: "Các dịch vụ mạng",
      },
      {
        idx: 2,
        isKey: true,
        title: "Các ứng dụng",
      },
      {
        isKey: false,
        title: "Các thành phần phần cứng",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Các kỹ thuật và công cụ thường được sử dụng trong an ninh mạng bao  gồm:",
    idx: 20,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "VPN, SSL/TLS, PGP",
      },
      {
        title: "Điều khiển truy nhập",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title:
          "Điều khiển truy nhập, tường lửa, proxy và các giao thức bảo mật, ứng  dụng dựa trên mật mã",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tường lửa, proxy",
      },
    ],
  },
  {
    title: "Các thành phần của an toàn thông tin gồm:",
    answers: [
      {
        title:
          "An toàn máy tính, An ninh mạng, Quản lý ATTT và Chính sách  ATTT",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "An toàn máy tính và dữ liệu, An ninh mạng, Quản lý ATTT và Chính  sách ATTT",
      },
      {
        title:
          "An toàn máy tính, An ninh mạng, Quản lý rủi ro ATTT và Chính sách  ATTT",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "An toàn máy tính, An toàn dữ liệu, An ninh mạng, Quản lý ATTT",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 21,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Mã Java",
      },
      {
        isKey: false,
        title: "Mã C/C++",
        idx: 1,
      },
      {
        title: "Mã máy",
        isKey: true,
        idx: 2,
      },
      {
        title: "Mã Hợp ngữ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng  shellcode. Shellcode đó là dạng:",
    idx: 22,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Các yêu cầu cơ bản trong đảm bảo an toàn thông tin và an toàn hệ  thống thông tin gồm:",
    answers: [
      {
        title: "Bảo mật, Toàn vẹn và Khả dụng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bảo mật, Toàn vẹn và Sẵn dùng",
      },
      {
        title: "Bí mật, Toàn vẹn và Sẵn dùng",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Bí mật, Toàn vẹn và không chối bỏ",
        idx: 3,
      },
    ],
    idx: 23,
  },
  {
    title:
      "Việc thực thi quản lý ATTT cần được thực hiện theo chu trình lặp  lại là do",
    answers: [
      {
        idx: 0,
        title:
          "Các điều kiện bên trong và bên ngoài hệ thống thay đổi theo thời  gian",
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Trình độ cao của tin tặc và công cụ tấn công ngày càng phổ  biến",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Số lượng và khả năng phá hoại của các phần mềm độc hại ngày càng  tăng",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Máy tính, hệ điều hành và các phần mềm được nâng cấp nhanh  chóng",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 24,
  },
  {
    title: "Hệ thống thông tin là:",
    idx: 25,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Một hệ thống tích hợp các thành phần nhằm phục vụ việc thu thập, lưu  trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các sản phẩm  số",
      },
      {
        isKey: false,
        title:
          "Một hệ thống gồm các thành phần phần cứng và phần mềm nhằm phục vụ  việc thu thập, lưu trữ, xử lý thông tin, chuyển giao thông tin",
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Một hệ thống gồm các thành phần phần cứng nhằm phục vụ việc thu  thập, lưu trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các  sản phẩm số",
        idx: 2,
      },
      {
        title:
          "Một hệ thống gồm các thành phần phần mềm nhằm phục vụ việc thu thập,  lưu trữ, xử lý thông tin, chuyển giao thông tin, tri thức và các sản  phẩm số",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 26,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Tính bí mật của thông tin có thể được đảm bảo bằng:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bảo vệ vật lý",
      },
      {
        isKey: false,
        idx: 1,
        title: "Các kỹ thuật mã hóa",
      },
      {
        idx: 2,
        isKey: false,
        title: "sử dụng VPN",
      },
      {
        isKey: true,
        idx: 3,
        title: "Bảo vệ vật lý, VPN, hoặc mã hóa",
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Lỗ hổng bảo mật (Security vulnerability) là một điểm yếu tồn tại  trong một hệ thống cho phép tin tặc:",
    idx: 27,
    answers: [
      {
        title: "Khai thác nhằm đánh cắp các thông tin trong hệ thống",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Khai thác gây tổn hại đến các thuộc tính an ninh của hệ thống  đó",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Khai thác, tấn công phá hoại và gây tê liệt hệ thống",
      },
      {
        idx: 3,
        title: "Khai thác nhằm chiếm quyền điều khiển hệ thống",
        isKey: false,
      },
    ],
  },
  {
    idx: 28,
    title:
      "Đảm bảo thông tin (Information assurance) thường được thực hiện  bằng cách:",
    answers: [
      {
        idx: 0,
        title: "Sử dụng kỹ thuật tạo dự phòng ra đĩa cứng",
        isKey: false,
      },
      {
        title: "Sử dụng kỹ thuật tạo dự phòng ra băng từ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Sử dụng kỹ thuật tạo dự phòng ngoại vi",
        idx: 2,
        isKey: true,
      },
      {
        title: "Sử dụng kỹ thuật tạo dự phòng cục bộ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title: "Kiểm thử phần mềm",
        isKey: false,
      },
      {
        idx: 1,
        title: "Thiết kế phần mềm",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Lập trình phần mềm",
      },
      {
        idx: 3,
        title: "Quản trị phần mềm",
        isKey: false,
      },
    ],
    idx: 29,
    title: "Lỗi tràn bộ đệm là lỗi trong khâu:",
  },
  {
    title:
      "Đâu là dạng lỗ hổng bảo mật thường gặp trong hệ điều hành và các  phần mềm ứng dụng?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title: "Lỗi tràn bộ đệm",
        isKey: true,
      },
      {
        title: "Lỗi quản trị",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Lỗi cấu hình",
      },
      {
        idx: 3,
        isKey: false,
        title: "Lỗi thiết kế",
      },
    ],
    idx: 30,
  },
  {
    title:
      "Quản lý các bản vá và cập nhật phần mềm là phần việc thuộc lớp bảo  vệ nào trong mô hình tổng thể đảm bảo an toàn hệ thống thông tin?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lớp an ninh mạng",
      },
      {
        isKey: true,
        title: "Lớp an ninh hệ thống",
        idx: 1,
      },
      {
        isKey: false,
        title: "Lớp an ninh cơ quan/tổ chức",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lớp an ninh hệ điều hành và phần mềm",
      },
    ],
    idx: 31,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Các biển đầu vào của hàm",
        isKey: false,
      },
      {
        title: "Bộ đệm hoặc biển cục bộ của hàm",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Con trỏ khung ngăn xếp (sfp)",
        idx: 2,
      },
      {
        title: "Địa chỉ trở về của hàm",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 32,
    title:
      "Khi khai thác lỗi tràn bộ đệm, tin tặc thường chèn mã độc, gây tràn  và ghi đè để sửa đổi thành phần nào sau đây của bộ nhớ Ngăn xếp để  chuyển hướng nhằm thực hiện mã độc của mình:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Khác biệt cơ bản của vi rút và sâu là:",
    idx: 33,
    answers: [
      {
        title:
          "Vi rút có khả năng tự lây lan mà không cần tương tác của người  dùng",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Sâu có khả năng tự lây lan mà không cần tương tác của người  dùng",
      },
      {
        idx: 2,
        title: "Sâu Có khả năng phá hoại lớn lơn",
        isKey: false,
      },
      {
        idx: 3,
        title: "Vi rút có khả năng phá hoại lớn lớn",
        isKey: false,
      },
    ],
  },
  {
    idx: 34,
    title:
      "Dạng tấn công gây ngắt quãng dịch vụ hoặc kênh truyền thông cho  người dùng bình thường là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Interceptions",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Fabrications",
        isKey: false,
      },
      {
        idx: 2,
        title: "Interruptions",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Modifications",
      },
    ],
  },
  {
    idx: 35,
    title: "Tấn công nghe lén là kiểu tấn công:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Thụ động",
      },
      {
        isKey: false,
        idx: 1,
        title: "Chủ động",
      },
      {
        idx: 2,
        isKey: false,
        title: "Chiếm quyền điều khiển",
      },
      {
        idx: 3,
        title: "Chủ động và bị động",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Dạng tấn công chặn bắt thông tin truyền trên mạng để sửa đổi hoặc  lạm dụng là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Fabrications",
      },
      {
        isKey: true,
        title: "Modifications",
        idx: 1,
      },
      {
        idx: 2,
        title: "Interruptions",
        isKey: false,
      },
      {
        isKey: false,
        title: "Interceptions",
        idx: 3,
      },
    ],
    idx: 36,
  },
  {
    title:
      "Có thể phòng chống tấn công Smurf bằng cách cấu hình các máy và  router không trả lời...",
    idx: 37,
    answers: [
      {
        title: "Các yêu cầu ICMP hoặc các yêu cầu phát quảng bá",
        idx: 0,
        isKey: true,
      },
      {
        title: "Các yêu cầu TCP hoặc các yêu cầu phát quảng bá",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Các yêu cầu UPD hoặc các yêu cầu phát quảng bá",
        isKey: false,
      },
      {
        title: "Các yêu cầu HTTP hoặc các yêu cầu phát quảng bá",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title: "Đâu là một kỹ thuật tấn công Dos?",
    answers: [
      {
        title: "UDP Ping",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "DNS Cache Poisoning",
        idx: 1,
      },
      {
        title: "Smurf",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "DNS spoofing",
      },
    ],
    idx: 38,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title:
      "Dạng tấn công giả mạo thông tin thường để đánh lừa người dùng thông  thường là:",
    idx: 39,
    answers: [
      {
        title: "Modifications",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Fabrications",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Interruptions",
      },
      {
        isKey: false,
        idx: 3,
        title: "Interceptions",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 40,
    title: "Kỹ thuật tấn công Smurf sử dụng giao thức ICMP và Cơ chế gửi…",
    answers: [
      {
        isKey: false,
        title: "Unicast",
        idx: 0,
      },
      {
        title: "Multicast",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Anycast",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Broadcast",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Reflectors",
      },
      {
        title: "Injectors",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Requesters",
        isKey: false,
      },
      {
        title: "Forwarders",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Trong tấn công DDoS phản chiếu hay gián tiếp, có sự tham gia của  một số lượng lớn máy chủ trên mạng Internet không bị tin tặc chiếm quyền  điều khiển. Các máy chủ này được gọi là…",
    idx: 41,
  },
  {
    answers: [
      {
        title: "Máy chủ web",
        isKey: false,
        idx: 0,
      },
      {
        title: "Máy chủ cơ sở dữ liệu của trang web",
        isKey: false,
        idx: 1,
      },
      {
        title: "Máy chủ và máy khách web",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Máy khách/trình duyệt web",
        isKey: true,
      },
    ],
    title: "Pharming là kiểu tấn công vào…",
    idx: 42,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "SQLCheck",
      },
      {
        title: "SQL Server",
        idx: 1,
        isKey: false,
      },
      {
        title: "SQLmap",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "SQLite",
        idx: 3,
      },
    ],
    title:
      "Đây là một công cụ kiểm tra lỗ hổng tấn công chèn mã SQL trên các  website:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 43,
  },
  {
    idx: 44,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        title: "Phạm vi tấn công",
        idx: 0,
      },
      {
        title: "Mức độ gây hại",
        idx: 1,
        isKey: false,
      },
      {
        title: "Kỹ thuật tấn công",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tần suất tấn công",
      },
    ],
    title: "Khác biệt cơ bản giữa tấn công DoS và DDoS là:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Để vượt qua các hệ thống IPS và IDS",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Để vượt qua các hàng rào kiểm soát an ninh",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Để đánh cắp các dữ liệu nhạy cảm trên máy trạm",
      },
      {
        isKey: false,
        title: "Để đánh cắp các dữ liệu nhạy cảm trên máy chủ",
        idx: 3,
      },
    ],
    title: "Mục đích chính của tấn công giả mạo địa chỉ IP là:",
    idx: 45,
  },
  {
    idx: 46,
    answers: [
      {
        title: "Gửi các yêu cầu tấn công chèn mã",
        isKey: false,
        idx: 0,
      },
      {
        title: "Đánh cắp dữ liệu từ máy chủ cơ sở dữ liệu",
        idx: 1,
        isKey: false,
      },
      {
        title: "Gửi thư rác, thư quảng cáo",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Thực hiện tấn công tràn bộ đệm.",
        idx: 3,
      },
    ],
    title:
      "Các máy tính ma/máy tính bị chiếm quyền điều khiển thường được tin tặc sử dụng  để...",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tìm mật khẩu trong từ điển các mật khẩu",
      },
      {
        idx: 1,
        isKey: true,
        title: "Thử các từ có tần suất sử dụng cao làm mật khẩu trong từ điển",
      },
      {
        isKey: false,
        idx: 2,
        title: "Vét cận các mật khẩu có thể có",
      },
      {
        idx: 3,
        isKey: false,
        title: "Lắng nghe trên đường truyền để đánh cắp mật khẩu",
      },
    ],
    idx: 47,
    title:
      "Trong dạng tấn công vào mật khẩu dựa trên từ điển, tin tặc đánh cắp  mật khẩu của người dùng bằng cách:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 48,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Một trong các phương thức lây lan thường gặp của sâu mạng là:",
    answers: [
      {
        idx: 0,
        title: "Lây lan thông qua sao chép các file",
        isKey: false,
      },
      {
        title: "Lây lan thông qua dịch vụ POP",
        idx: 1,
        isKey: false,
      },
      {
        title: "Lây lan thông qua khả năng thực thi từ xa",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lây lan thông qua Microsoft Office",
      },
    ],
  },
  {
    title: "Đây là một kỹ thuật tấn công Dos?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SYN requests",
      },
      {
        idx: 1,
        isKey: false,
        title: "DNS spoofing",
      },
      {
        idx: 2,
        isKey: false,
        title: "IP spoofing",
      },
      {
        title: "Ping of death",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 49,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        title: "Gây hư hỏng phần cứng máy chủ",
        idx: 0,
      },
      {
        title: "Cản trở người dùng hợp pháp truy nhập các tài nguyên hệ thống",
        idx: 1,
        isKey: true,
      },
      {
        title: "Đánh cắp dữ liệu trong hệ thống",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Cản trở người dùng hợp pháp truy nhập các file dữ liệu của hệ  thống",
        idx: 3,
      },
    ],
    idx: 50,
    title:
      "Tấn công từ chối dịch vụ (Dos - Denial of Service Attacks) là dạng  tấn công có khả năng...",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chứa các ký tự từ nhiều dạng ký tự",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Khả năng chống tấn công phát lại và chứa các ký tự từ nhiều dạng ký  tự",
      },
      {
        title:
          "Độ dài từ 8 ký tự trở lên, gồm chữ cái hoa, thường, chữ số và ký tự  đặc biệt",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Độ dài lớn hơn hoặc bằng 8 ký tự",
      },
    ],
    title: "Mật khẩu an toàn trong thời điểm hiện tại là mật khẩu có:",
    idx: 51,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        title: "Phần mềm nghe lén",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Phần mềm quảng cáo",
      },
      {
        title: "Phần mềm phá mã",
        isKey: false,
        idx: 2,
      },
      {
        title: "Phần mềm độc hại",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 52,
    title: "Một trong các mối đe dọa an toàn thông tin thường gặp là:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Nguy cơ cao nhất mà một cuộc tấn công chèn mã SQL có thể gây ra cho  một hệ thống là:",
    answers: [
      {
        isKey: false,
        title: "Đánh cắp các thông tin trong cơ sở dữ liệu",
        idx: 0,
      },
      {
        isKey: false,
        title: "Chèn, xóa hoặc sửa đổi dữ liệu",
        idx: 1,
      },
      {
        title: "Vượt qua các khâu xác thực người dùng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Chiếm quyền điều khiển hệ thống",
        idx: 3,
      },
    ],
    idx: 53,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Sử dụng các hệ thống IPS/IDS",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Sử dụng chứng chỉ số để xác thực thông tin nhận dạng các bên",
      },
      {
        title: "Sử dụng mã hóa để đảm bảo tính bí mật các thông điệp truyền",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Sử dụng tường lửa để ngăn chặn",
      },
    ],
    idx: 54,
    title:
      "Một trong các biện pháp có thể sử dụng để phòng chống tấn công  người đứng giữa là:",
  },
  {
    title: "Macro viruses là loại viruses thường lây nhiễm vào…",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 55,
    answers: [
      {
        idx: 0,
        title: "Các file tài liệu của bộ phần mềm Open Office",
        isKey: false,
      },
      {
        isKey: false,
        title: "Các file tài liệu của bộ phần mềm Microsoft Exchange",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Các file tài liệu của bộ phần mềm Microsoft SQL",
      },
      {
        isKey: true,
        title: "Các file tài liệu của bộ phần mềm Microsoft Office",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Tấn công kiểu Social Engineering là dạng tấn công khai thác yếu tố  nào sau đây trong hệ thống?",
    answers: [
      {
        title: "Máy trạm",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Người dùng",
      },
      {
        idx: 2,
        isKey: false,
        title: "Máy chủ",
      },
      {
        idx: 3,
        title: "Hệ điều hành & ứng dụng",
        isKey: false,
      },
    ],
    idx: 56,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Câu lệnh SQL nào tin tặc thường sử dụng trong tấn công chèn mã SQL  để đánh cắp các thông tin trong cơ sở dữ liệu?",
    answers: [
      {
        idx: 0,
        title: "UNION INSERT",
        isKey: false,
      },
      {
        title: "UNION SELECT",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "SELECT UNION",
      },
      {
        idx: 3,
        title: "INSERT SELECT",
        isKey: false,
      },
    ],
    idx: 57,
  },
  {
    idx: 58,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Phishing là một dạng của loại tấn công sử dụng...",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Kỹ thuật chèn mã",
      },
      {
        idx: 1,
        title: "Kỹ thuật giả mạo địa chỉ IP",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kỹ thuật gây tràn bộ đệm",
      },
      {
        title: "Kỹ thuật xã hội",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: "Virus, zombie, spyware",
        idx: 0,
        isKey: false,
      },
      {
        title: "Virus, trojan, zombie",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Virus, worm, trojan",
      },
      {
        isKey: true,
        idx: 3,
        title: "Virus, worm, zombie",
      },
    ],
    idx: 59,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Các dạng phần mềm độc hại (malware) có khả năng tự nhân bản  gồm:",
  },
  {
    title:
      "Một trong các cách virus thường sử dụng để lây nhiễm vào các chương  trình khác là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 60,
    answers: [
      {
        isKey: false,
        title: "Ẩn mã của virus",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Thay thế các chương trình",
      },
      {
        title: "Xáo trộn mã của virus",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Sửa đổi các chương trình",
      },
    ],
  },
  {
    idx: 61,
    title:
      "Trong tấn công DDoS phản chiếu hay gián tiếp, có sự tham gia của  một số lượng lớn máy chủ trên mạng Internet không bị tin tặc chiếm quyền  điều khiển. Các máy chủ này được gọi là...",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Reflectors",
      },
      {
        isKey: false,
        idx: 1,
        title: "Requesters",
      },
      {
        isKey: false,
        idx: 2,
        title: "Forwarders",
      },
      {
        title: "Injectors",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title: "Mục đích chính của tấn công giả mạo địa chỉ IP là:",
    idx: 62,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Để vượt qua các hệ thống IPS và IDS",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Để vượt qua các hàng rào kiểm soát an ninh",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Để đánh cắp các dữ liệu nhạy cảm trên máy trạm",
      },
      {
        idx: 3,
        title: "Để đánh cắp các dữ liệu nhạy cảm trên máy chủ",
        isKey: false,
      },
    ],
  },
  {
    idx: 63,
    title:
      "Trojan horses là dạng phần mềm độc hại thường giành quyền truy nhập  vào các file của người dùng khai thác cơ chế điều khiển truy  nhập...",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        title: "МАС",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Role-Based",
      },
      {
        title: "Rule-Based",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "DAC",
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        title: "Mã hóa khóa bất đối xứng sử dụng khóa phiên",
        idx: 0,
      },
      {
        title: "Mã hóa khóa đối xứng sử dụng khóa phiên",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Mã hóa khóa bất đối xứng sử dụng khóa công khai",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Mã hóa khóa đối xứng sử dụng khóa công khai",
      },
    ],
    idx: 64,
    title: "PGP đảm bảo tính bí mật thông điệp bằng cách sử dụng:",
  },
  {
    title: "Số lượng thao tác trong mỗi vòng xử lý của hàm băm MD5 là:",
    idx: 65,
    answers: [
      {
        title: "14",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "16",
      },
      {
        idx: 2,
        isKey: false,
        title: "18",
      },
      {
        isKey: false,
        title: "12",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 66,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Giao thức SSL sử dụng giao thức con SSL Handshake để khởi tạo phiên  làm việc. SSL Handshake thực hiện việc trao đổi các khóa phiên dùng cho  phiên làm việc dựa trên:",
    answers: [
      {
        idx: 0,
        title: "Chữ ký số",
        isKey: false,
      },
      {
        idx: 1,
        title: "Mã hóa khóa bí mật",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Mã hóa khóa công khai",
      },
      {
        idx: 3,
        title: "Chứng chỉ số",
        isKey: false,
      },
    ],
  },
  {
    idx: 67,
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Số nhận dạng, khóa riêng của chủ thể, chữ ký của nhà cung cấp  CA",
      },
      {
        isKey: false,
        title:
          "Khóa công khai của chủ thể, thông tin địa chỉ chủ thể, thuật toán  chữ ký sử dụng",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Số nhận dạng, khóa riêng của chủ thể, thông tin định danh chủ  thể",
      },
      {
        idx: 3,
        title:
          "Khóa công khai của chủ thể, thông tin định danh chủ thể, chữ ký của  nhà cung cấp (CA)",
        isKey: false,
      },
    ],
    title:
      "Các thuộc tính cơ bản của chứng chỉ số khóa công khai (Public key  digital certificate) gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Phương pháp mã hóa và chia khối",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Giải thuật mã hóa và ký số",
      },
      {
        title: "Phương pháp mã hóa và không gian khóa",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Giải thuật mã hóa và giải mã",
        idx: 3,
      },
    ],
    idx: 68,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Một hệ mã hóa (cryptosystem) được cấu thành từ hai thành phần chính  gồm:",
  },
  {
    idx: 69,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "OR",
      },
      {
        idx: 1,
        isKey: false,
        title: "AND",
      },
      {
        title: "NOT",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "XOR",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Đây là một phương pháp mã hóa",
  },
  {
    idx: 70,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Kích thước khối dữ liệu xử lý của giải thuật mã hóa AES là:",
    answers: [
      {
        title: "160 bit",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "64 bit",
      },
      {
        idx: 2,
        isKey: false,
        title: "192 bít",
      },
      {
        isKey: true,
        title: "128 bit",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title:
          "MDC là loại hàm băm không khóa, còn MAC là loại hàm băm có  khóa",
        isKey: true,
        idx: 0,
      },
      {
        title: "MDC có khả năng chống đụng độ cao hơn MAC",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "MDC an toàn hơn MAC",
      },
      {
        title: "MAC an toàn hơn MDC",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Điểm khác nhau chính giữa hai loại hàm băm MDC và MAC là:",
    idx: 71,
  },
  {
    idx: 72,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tính bí mật",
      },
      {
        isKey: false,
        idx: 1,
        title: "Tính không chối bỏ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Tính sẵn dùng",
      },
      {
        isKey: true,
        title: "Tính toàn vẹn",
        idx: 3,
      },
    ],
    title:
      "Chữ ký số (sử dụng riêng) thường được sử dụng để đảm bảo thuộc tính  nào sau đây của thông điệp truyền đưa:",
  },
  {
    idx: 73,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Trong hệ chữ ký số RSA, việc tạo chữ ký số cho một thông điệp cần  sử dụng một khóa. Khóa đó là:",
    answers: [
      {
        idx: 0,
        title: "Khóa riêng của người nhận",
        isKey: false,
      },
      {
        title: "Khóa công khai của người nhận",
        idx: 1,
        isKey: false,
      },
      {
        title: "Khóa công khai của người gửi",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Khóa riêng của người gửi",
      },
    ],
  },
  {
    title: "Một trong các điểm yếu của các hệ mã hóa khóa công khai là:",
    answers: [
      {
        title: "Khó cài đặt trên thực tế",
        isKey: false,
        idx: 0,
      },
      {
        title: "Khó khăn trong quản lý và phân phối khóa",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Tốc độ chậm",
      },
      {
        title: "Độ an toàn thấp",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 74,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 75,
    answers: [
      {
        title:
          "Chữ ký số là một chuỗi dữ liệu được tạo ra bằng cách mã hóa thông  điệp sử dụng khóa bí mật",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title:
          "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực  thể tạo ra thông điệp",
        idx: 1,
      },
      {
        title:
          "Chữ ký số được sử dụng để đảm bảo tính bí mật và toàn vẹn thông  điệp",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Chữ ký số được sử dụng để đảm bảo tính bí mật, toàn vẹn và xác thực  thông điệp",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Phát biểu nào sau đây về chữ ký số là chính xác:",
  },
  {
    idx: 76,
    title: "Hai thuộc tính cơ bản quan trọng nhất của một hàm băm là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Nén và một chiều",
      },
      {
        title: "Dễ tính toán và có đầu ra cố định",
        isKey: false,
        idx: 1,
      },
      {
        title: "Một chiều và đầu ra cố định",
        isKey: false,
        idx: 2,
      },
      {
        title: "Nén và dễ tính toán",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    title: "Độ an toàn của hệ mật mã RSA dựa trên...",
    idx: 77,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title: "Độ phức tạp cao của giải thuật RSA",
        isKey: false,
      },
      {
        title: "Chi phí tính toán lớn",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tính khó của việc phân tích số nguyên rất lớn",
        idx: 2,
        isKey: true,
      },
      {
        title: "Khóa có kích thước lớn",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 78,
    title:
      "Khi sinh cặp khóa RSA, các số nguyên tố p và q nên được chọn với  kích thước…",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "p càng lớn càng tốt ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Bằng khoảng một nửa kích thước của modulo n",
      },
      {
        isKey: false,
        idx: 2,
        title: "Không có yêu cầu về kích thước của p và q",
      },
      {
        isKey: false,
        idx: 3,
        title: "q càng lớn càng tốt",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "An toàn hơn mã hóa khóa bí mật",
      },
      {
        title: "Sử dụng một khóa quá trình mã hóa và một khóa khác cho giải mã",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Chỉ sử dụng kỹ thuật mã hóa khối",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Sử dụng một khóa chung cho cả quá trình mã hóa và giải mã",
      },
    ],
    title:
      "Tìm phát biểu đúng về mã hóa khóa bất đối xứng (Asymmetric key  cryptography):",
    idx: 79,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        title: "Sử dụng một khóa chung cho cả quá trình mã hóa và giải mã",
        isKey: true,
        idx: 0,
      },
      {
        title: "Sử dụng một khóa quá trình mã hóa và một khóa khác cho giải mã",
        isKey: false,
        idx: 1,
      },
      {
        title: "An toàn hơn mã hóa khóa công khai",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chỉ sử dụng kỹ thuật mã hóa khối",
      },
    ],
    title:
      "Tìm phát biểu đúng về mã hóa khóa đối xứng (Symmetric key  cryptography):",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 80,
  },
  {
    answers: [
      {
        title: "Xác thực thực thể và toàn vẹn thông tin truyền",
        idx: 0,
        isKey: true,
      },
      {
        title: "Xác thực thực thể và bí mật thông tin truyền",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bí mật và xác thực nguồn gốc thông tin truyền",
      },
      {
        title: "Bí mật và toàn vẹn thông tin truyền",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 81,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Sử dụng kết hợp chứng chỉ số khóa công khai và chữ ký số có thể đảm  bảo:",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        title: "14",
        idx: 0,
      },
      {
        title: "16",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "18",
      },
      {
        isKey: false,
        idx: 3,
        title: "20",
      },
    ],
    title:
      "Số lượng vòng lặp chính thực hiện xáo trộn dữ liệu theo hàm Feistel  (F) trong giải thuật DES là:",
    idx: 82,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Vào 4 bít và ra 4 bít",
        idx: 0,
      },
      {
        title: "Vào 6 bít và ra 6 bít",
        idx: 1,
        isKey: false,
      },
      {
        title: "Vào 8 bít và ra 6 bít",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Vào 6 bít và ra 4 bít",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Các hộp thay thế s-box trong giải thuật DES có số bít đầu vào và  đầu ra tương ứng là:",
    idx: 83,
  },
  {
    title:
      "Một trong các ứng dụng phổ biến của các hàm băm là để tạo  chuỗi...",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "CheckError",
      },
      {
        title: "CheckTotal",
        idx: 1,
        isKey: false,
      },
      {
        title: "CheckNum",
        idx: 2,
        isKey: false,
      },
      {
        title: "Checksum",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 84,
  },
  {
    title: "PGP đảm bảo tính bí mật thông điệp bằng cách sử dụng:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 85,
    answers: [
      {
        title: "Mã hóa khóa bất đối xứng sử dụng khóa công khai",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Mã hóa khóa đối xứng sử dụng khóa phiên",
        idx: 1,
      },
      {
        idx: 2,
        title: "Mã hóa khóa đối xứng sử dụng khóa công khai",
        isKey: false,
      },
      {
        idx: 3,
        title: "Mã hóa khóa bất đối xứng sử dụng khóa phiên",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Trong quá trình xử lý thông điệp đầu vào tạo chuỗi băm, số lượng  vòng xử lý của hàm băm SHA1 là:",
    idx: 86,
    answers: [
      {
        title: "80",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "90",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "60",
      },
      {
        isKey: false,
        title: "70",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "mạng hoán vị-vernam",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "mạng xor-thay thế",
      },
      {
        title: "mạng hoán vị-thay thế",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "mạng hoán vị-xor",
        isKey: false,
      },
    ],
    title: "Giải thuật mã hóa AES được thiết kế dựa trên…",
    idx: 87,
  },
  {
    idx: 88,
    answers: [
      {
        title: "Chi phí tính toán lớn",
        isKey: false,
        idx: 0,
      },
      {
        title: "Khó khăn trong quản lý và phân phối khóa",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Độ an toàn thấp",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Khó khăn trong cài đặt và triển khai hệ thống",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Một trong các điểm yếu của các hệ mã hóa khóa đối xứng là:",
  },
  {
    idx: 89,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Số vòng lặp chuyển đổi cần thực hiện để chuyển bản rõ thành bản mã  của giải thuật mã hóa AES với khóa 192 bít là:",
    answers: [
      {
        isKey: false,
        title: "10",
        idx: 0,
      },
      {
        title: "12",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "16",
      },
      {
        title: "14",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 90,
    title: "Phát biểu nào sau đây về chữ ký số là chính xác:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Chữ ký số là một chuỗi dữ liệu được tạo ra bằng cách mã hóa thông  điệp sử dụng khóa bí mật",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Chữ ký số là một chuỗi dữ liệu liên kết với một thông điệp và thực  thể tạo ra thông điệp",
      },
      {
        idx: 2,
        title:
          "Chữ ký số được sử dụng để đảm bảo tính bí mật, toàn vẹn và xác thực  thông điệp",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Chữ ký số được sử dụng để đảm bảo tính bí mật và toàn vẹn thông  điệp",
      },
    ],
  },
  {
    idx: 91,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Mã hóa thẻ tín dụng",
      },
      {
        isKey: false,
        title: "Mã hóa địa chỉ",
        idx: 1,
      },
      {
        title: "Mã hóa mật khẩu",
        isKey: true,
        idx: 2,
      },
      {
        title: "Mã hóa tên tài khoản",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Một trong các ứng dụng phổ biến của các hàm băm một chiều là  để...",
  },
  {
    idx: 92,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Chứng chỉ số khóa công khai",
      },
      {
        isKey: false,
        title: "Mã hóa khóa bí mật",
        idx: 1,
      },
      {
        title: "Mã hóa khóa công khai",
        idx: 2,
        isKey: false,
      },
      {
        title: "Chữ ký số",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Giao thức SSL sử dụng giao thức con SSL Handshake để khởi tạo phiên  làm việc. SSL Handshake thực hiện việc xác thực thực thể dựa trên:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Mã hóa/giải mã thông điệp",
        isKey: false,
      },
      {
        idx: 1,
        title: "Sử dụng hàm băm có khóa MAC",
        isKey: true,
      },
      {
        title: "Sử dụng hàm băm không khóa MDC",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tạo và kiểm tra chữ ký số",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "PGP đảm bảo tính xác thực thông điệp bằng cách:",
    idx: 93,
  },
  {
    idx: 94,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Nguyên tắc bảo mật tài nguyên của mô hình Bell-La Padula là:",
    answers: [
      {
        title: "Đọc lên và ghi lên",
        idx: 0,
        isKey: false,
      },
      {
        title: "Đọc xuống và ghi xuống",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Đọc xuống và ghi lên",
      },
      {
        idx: 3,
        title: "Đọc lên và ghi xuống",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Tính bảo mật của kỹ thuật điều khiển truy nhập sử dụng mật khẩu dựa  trên:",
    idx: 95,
    answers: [
      {
        idx: 0,
        title: "Tần suất sử dụng mật khẩu",
        isKey: false,
      },
      {
        idx: 1,
        title: "Kích thước của mật khẩu",
        isKey: false,
      },
      {
        title: "Độ khó đoán và tuổi thọ của mật khẩu",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Số loại ký tự dùng trong mật khẩu",
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Phát hiện tấn công, xâm nhập dựa trên bất thường có tiềm năng phát  hiện các loại tấn công, xâm nhập mới là do:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Không yêu cầu biết trước thông tin về chúng",
      },
      {
        title: "Đã có chữ ký của các tấn công, xâm nhập mới",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các tấn công, xâm nhập mới thường dễ nhận biết",
      },
      {
        idx: 3,
        title: "Không yêu cầu xây dựng cơ sở dữ liệu các chữ ký",
        isKey: false,
      },
    ],
    idx: 96,
  },
  {
    idx: 97,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Một trong các điểm yếu làm giảm hiệu quả của phát hiện tấn công, xâm  nhập dựa trên bất thường là:",
    answers: [
      {
        idx: 0,
        title: "Không có khả năng ngăn chặn tấn công, đột nhập",
        isKey: false,
      },
      {
        title: "Không có khả năng phát hiện các cuộc tấn công Dos",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Tỷ lệ cảnh báo sai cao",
      },
      {
        idx: 3,
        isKey: false,
        title: "Không có khả năng phát hiện tấn công, xâm nhập mới",
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Các hành vi tấn công, xâm nhập thường có quan hệ chặt chẽ với các  hành vi bất thường",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Các hành vi tấn công, xâm nhập gây ngắt quãng dịch vụ cung cấp cho  người dùng",
      },
      {
        title:
          "Các hành vi tấn công, xâm nhập có quan hệ chặt chẽ với các dịch vụ  được cung cấp",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Các hành vi tấn công, xâm nhập gây tổn hại nghiêm trọng cho hệ  thống",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Phát hiện tấn công, xâm nhập dựa trên bất thường dựa trên giá  thiết:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 98,
  },
  {
    title:
      "Ưu điểm của điều khiển truy nhập dựa trên các đặc điểm sinh trắc học  là:",
    idx: 99,
    answers: [
      {
        title: "Bảo mật cao và độ ổn định cao",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Bảo mật cao và chi phí thấp",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Bảo mật cao và luôn đi cùng với chủ thể",
      },
      {
        idx: 3,
        title: "Bảo mật cao và được hỗ trợ rộng rãi",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Lọc nội dung gói tốt hơn",
      },
      {
        isKey: false,
        title: "Nhận dạng được các dạng tấn công và các phần mềm độc hại",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chạy nhanh hơn",
      },
      {
        isKey: true,
        title: "Phân biệt được các gói tin thuộc về các kết nối mạng khác nhau",
        idx: 3,
      },
    ],
    title:
      "Một ưu điểm của tường lửa có trạng thái so với tường lửa không trạng  thái là:",
    idx: 100,
  },
  {
    title:
      "Các phương pháp xử lý, phân tích dữ liệu và mô hình hoá trong phát hiện tấn công, xâm nhập dựa trên bất thường, gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Thống kê, học máy, khai phá dữ liệu",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Học máy, khai phá dữ liệu, agents",
      },
      {
        idx: 2,
        title: "Thống kê, học máy, đồ thị",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thống kê, đối sánh chuỗi, đồ thị",
      },
    ],
    idx: 101,
  },
  {
    idx: 102,
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "RBAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho  người dùng khác",
      },
      {
        idx: 1,
        isKey: false,
        title: "RBAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
      },
      {
        idx: 2,
        title:
          "RBAC cấp quyền truy nhập dựa trên vai trò của người dùng trong tổ  chức",
        isKey: true,
      },
      {
        title:
          "RBAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và  chính sách quản trị",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập dựa trên  vai trò - RBAC:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập  DAC:",
    idx: 103,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title:
          "DAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho  người dùng khác",
        idx: 0,
        isKey: true,
      },
      {
        title:
          "DAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và  chính sách quản trị",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "DAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "DAC quản lý quyền truy nhập chặt chẽ hơn các cơ chế khác",
      },
    ],
  },
  {
    answers: [
      {
        title: "nmap",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Microsoft Baseline Security Analyzer",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nessus vulnerability scanner",
      },
      {
        isKey: true,
        title: "Acunetix Web Vulnerability Scanner",
        idx: 3,
      },
    ],
    idx: 104,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Đâu là một công cụ có khả năng rà quét các lỗ hổng chèn mã SQL cho  các trang web?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Danh sách điều khiển truy nhập ACL thực hiện việc quản lý quyền  truy nhập đến các đối tượng cho người dùng bằng cách:",
    answers: [
      {
        title:
          "Các quyền truy nhập vào đối tượng cho mỗi người dùng được quản lý  trong một ma trận",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Các quyền truy nhập vào đối tượng cho mỗi người dùng được quản lý  riêng rẽ",
        idx: 1,
      },
      {
        title:
          "Mỗi người dùng được gán một danh sách các đối tượng kèm theo quyền  truy nhập",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title:
          "Mỗi đối tượng được gán một danh sách người dùng kèm theo quyền truy  nhập",
        idx: 3,
      },
    ],
    idx: 105,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Các hiểm họa từ bên trong",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Các hiểm họa từ bên ngoài",
      },
      {
        title: "Tấn công giả mạo địa chỉ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tấn công từ mạng Internet",
      },
    ],
    title: "Tường lửa không thể chống lại...",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 106,
  },
  {
    answers: [
      {
        idx: 0,
        title: "IPS phát hiện xâm nhập hiệu quả hơn",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "IPS có khả năng chủ động ngăn chặn xâm nhập",
      },
      {
        idx: 2,
        isKey: false,
        title: "IDS phát hiện xâm nhập hiệu quả hơn",
      },
      {
        isKey: false,
        title: "IDS có khả năng chủ động ngăn chặn xâm nhập",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 107,
    title:
      "Sự khác biệt chính giữa hệ thống ngăn chặn xâm nhập (IPS) và hệ  thống phát hiện xâm nhập (IDS) là:",
  },
  {
    title: "Tường lửa lọc gói có thể lọc các thông tin nào trong gói tin?",
    answers: [
      {
        title: "Chỉ các thông tin trong header của gói tin",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chỉ các thông tin trong payload của gói tin",
      },
      {
        idx: 2,
        isKey: false,
        title: "Chỉ lọc địa chỉ IP trong gói tin",
      },
      {
        idx: 3,
        isKey: false,
        title: "Cả thông tin trong header và payload của gói tin",
      },
    ],
    idx: 108,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        title: "Các phần mềm quét virus xung đột với nhau",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Các phần mềm quét virus không thể hoạt động",
        isKey: false,
      },
      {
        title: "Các phần mềm quét virus chiếm nhiều tài nguyên",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Các phần mềm quét virus tấn công lẫn nhau",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Không nên sử dụng nhiều hơn 1 phần mềm quét virus chạy ở chế độ  quét theo thời gian thực trên một máy tính vì:",
    idx: 109,
  },
  {
    title:
      "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập bắt buộc  MAC:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 110,
    answers: [
      {
        isKey: false,
        title:
          "MAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập cho  người dùng khác",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "MAC quản lý quyền truy nhập chặt chẽ hơn các cơ chế khác",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "MAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và  chính sách quản trị",
      },
      {
        isKey: false,
        idx: 3,
        title: "MAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
      },
    ],
  },
  {
    answers: [
      {
        title: "Server gateway",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Application server",
      },
      {
        title: "Application-level gateway",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Gateway server",
        isKey: false,
      },
    ],
    title: "Đâu là một loại tường lửa?",
    idx: 111,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 112,
    title: "Ví điện tử Paypal là một dạng...",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Khóa mã (encrypted key)",
        idx: 0,
        isKey: false,
      },
      {
        title: "The ATM",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Thẻ bài (token)",
        isKey: true,
      },
      {
        title: "Thẻ thông minh (smart card)",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: "Thẻ ATM và tên truy nhập",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tên truy nhập và số PIN",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Thẻ ATM và số PIN",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tên truy nhập và mật khẩu",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Dạng xác thực sử dụng các thông tin nào dưới đây đảm bảo độ an toàn  cao hơn?",
    idx: 113,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Một trong các dạng khóa mã (encrypted keys) được sử dụng rộng rãi  trong điều khiển truy nhập là:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "E-token",
      },
      {
        idx: 1,
        isKey: true,
        title: "Chứng chỉ số khóa công khai",
      },
      {
        isKey: false,
        title: "The ATM",
        idx: 2,
      },
      {
        title: "Mobile-token",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 114,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Do chữ ký của chúng chưa tồn tại trong hệ thống",
        idx: 0,
      },
      {
        idx: 1,
        title: "Do các tấn công, xâm nhập mới không có chữ ký",
        isKey: false,
      },
      {
        title: "Do các tấn công, xâm nhập mới không gây ra bất thường",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Do các tấn công, xâm nhập mới chỉ gây thiệt hại nhỏ",
        idx: 3,
      },
    ],
    idx: 115,
    title:
      "Tại sao một hệ thống phát hiện xâm nhập dựa trên chữ ký không thể  phát hiện các tấn công, xâm nhập mới?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 116,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Có cơ chế xác thực mạnh hơn",
      },
      {
        isKey: false,
        idx: 1,
        title: "Có cơ chế xác thực đa dạng hơn",
      },
      {
        isKey: false,
        title: "Được sử dụng rộng rãi hơn",
        idx: 2,
      },
      {
        isKey: false,
        title: "Có chi phí rẻ hơn",
        idx: 3,
      },
    ],
    title:
      "Ưu điểm của thẻ bài (token) so với thẻ thông minh (smart card)  trong điều khiển truy nhập là:",
  },
  {
    idx: 117,
    title:
      "Phương pháp xác thực nào dưới đây có thể cung cấp khả năng xác thực  có độ an toàn cao nhất?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        title: "Sử dụng Smartcard",
        idx: 0,
      },
      {
        isKey: true,
        title: "Sử dụng vân tay",
        idx: 1,
      },
      {
        title: "Sử dụng chứng chỉ số",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Sử dụng mật khẩu",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Đâu là các tính năng của kiểm soát truy nhập sử dụng tường  lửa?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Kiểm soát dịch vụ và các phần mềm",
      },
      {
        title: "Kiểm soát người dùng và tin tặc",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Kiểm soát dịch vụ và hướng",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Kiểm soát virus và các malware khác",
      },
    ],
    idx: 118,
  },
  {
    answers: [
      {
        title: "DAC, MAC và RRAC",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "DAC, BAC và RBAC",
      },
      {
        isKey: false,
        title: "DAC, MAC và BAC",
        idx: 2,
      },
      {
        idx: 3,
        title: "DAC, MAC và RBAC",
        isKey: true,
      },
    ],
    idx: 119,
    title: "Ba cơ chế điều khiển truy nhập thông dụng gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 120,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Mục đích chính của điều khiển truy nhập là để đảm bảo các thuộc  tính an ninh của thông tin, hệ thống và các tài nguyên, gồm:",
    answers: [
      {
        title: "Tính bảo mật, tính toàn vẹn và tính xác thực",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tính bí mật, tính toàn vẹn và tính xác thực",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tính bảo mật, tính toàn vẹn và tính sẵn dùng",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tính bí mật, tính toàn vẹn và tính sẵn dùng",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "1",
        isKey: false,
      },
      {
        isKey: false,
        title: "3",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "2",
      },
      {
        isKey: false,
        idx: 3,
        title: "4",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 121,
    title:
      "Số lượng nhân tố (factor) xác thực sử dụng trong điều khiển truy  nhập dựa trên thẻ thông minh là:",
  },
  {
    idx: 122,
    title: "Một nhiệm vụ chính của các hệ thống IDS/IPS là:",
    answers: [
      {
        isKey: false,
        title: "Truy tìm và tấn công ngược lại hệ thống của tin tặc",
        idx: 0,
      },
      {
        title:
          "Giám sát lưu lượng mạng hoặc các hành vi trên một hệ thống để nhận  dạng các dấu hiệu của tấn công, xâm nhập",
        idx: 1,
        isKey: true,
      },
      {
        title:
          "Giám sát lưu lượng mạng nhận dạng các dấu hiệu của tấn công, xâm  nhập",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Giám sát các hành vi trên một hệ thống để nhận dạng các dấu hiệu của  tấn công, xâm nhập",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Authentication và Authorization",
      },
      {
        isKey: false,
        idx: 1,
        title: "Authenticator và Administrator",
      },
      {
        idx: 2,
        isKey: false,
        title: "Administrator và Authorization",
      },
      {
        title: "Authentication và Administrator",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 123,
    title:
      "Hai dịch vụ quan trọng nhất của một hệ thống điều khiển truy nhập là:",
  },
  {
    title:
      "Tìm phát biểu đúng về phát hiện xâm nhập dựa trên chữ ký và phát hiện xâm nhập dựa trên bất thường:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title:
          "Phát hiện xâm nhập dựa trên chữ ký thường có tỷ lệ phát hiện đúng cao hơn",
        isKey: true,
      },
      {
        title: "Tính bảo mật, tính toàn vẹn và tính xác thực",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tính bảo mật, tính toàn vẹn và tính sẵn dùng",
      },
      {
        title: "Tính bí mật, tính toàn vẹn và tính sẵn dùng",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 124,
  },
  {
    idx: 125,
    title: "Tìm phát biểu đúng về dịch vụ xác thực trong điều khiển truy nhập:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title:
          "Là quá trình xác minh tính chân thực của thông tin nhận dạng người dùng cung cấp",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Là quá trình xác minh nhận dạng của chủ thể",
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Là quá trình xác minh các thông tin nhận dạng của chủ thể yêu cầu truy nhập đối tượng",
        isKey: false,
      },
      {
        title: "Là quá trình xác minh nhận dạng của người dùng",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Spoofing",
      },
      {
        title: "Trojan horse",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Man in the middle",
        isKey: false,
      },
      {
        idx: 3,
        title: "Phishing",
        isKey: false,
      },
    ],
    title:
      "Loại tấn công nào sau đây chiếm quyền truy nhập đến tài nguyên lợi dụng cơ chế điều khiển truy nhập DAC?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 126,
  },
  {
    idx: 127,
    title: "Đâu là tên viết đúng của Hệ thống phát hiện đột nhập/xâm nhập?",
    answers: [
      {
        idx: 0,
        title: "Intrusion Detector System",
        isKey: false,
      },
      {
        title: "Intrusion Detecting System",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Intrusion Detection System",
      },
      {
        title: "Instruction Detection System",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    idx: 128,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        title: "Không được hỗ trợ rộng rãi",
        idx: 0,
      },
      {
        idx: 1,
        title: "Chi phí đắt",
        isKey: true,
      },
      {
        title: "Khó sử dụng",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Công nghệ phức tạp",
      },
    ],
    title:
      "Một trong các nhược điểm chính của điều khiển truy nhập dựa trên các đặc điểm sinh trắc học là:",
  },
  {
    answers: [
      {
        title: "Chống được tấn công từ điển",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Chống được tấn công vét cạn",
        isKey: false,
      },
      {
        isKey: false,
        title: "Chống được tấn công phá mã",
        idx: 2,
      },
      {
        isKey: true,
        title: "Chống được tấn công phát lại",
        idx: 3,
      },
    ],
    title:
      "Ưu điểm của mật khẩu một lần (OTP-One Time Password) so với mật khẩu truyền thống là:",
    idx: 129,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Bắt tay 3 bước",
      },
      {
        idx: 1,
        isKey: false,
        title: "Bắt tay 2 bước",
      },
      {
        title: "Xác thực người dùng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Truyền dữ liệu",
      },
    ],
    idx: 130,
    title:
      "Kỹ thuật tấn công SYN Floods khai thác điểm yếu trong khâu nào trong bộ giao thức TCP/IP?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "a. Cản trở người dùng hợp pháp truy nhập các file dữ liệu của hệthống",
      },
      {
        title:
          "b. Cản trở người dùng hợp pháp truy nhập các tài nguyên hệ thống",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "c. Đánh cắp dữ liệu trong hệ thống",
        idx: 2,
      },
      {
        idx: 3,
        title: "d. Gây hư hỏng phần cứng máy chủ ",
        isKey: false,
      },
    ],
    title:
      "Tấn công từ chối dịch vụ (Dos - Denial of Service Attacks) là dạng  tấn công có khả năng…",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 131,
  },
  {
    answers: [
      {
        isKey: true,
        title: "a.Phần mềm độc hại ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "b. Phần mềm quảng cáo",
      },
      {
        title: "c. Phần mềm nghe lén ",
        idx: 2,
        isKey: false,
      },
      {
        title: "d Phần mềm phá mã ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 132,
    title: "Một trong các mối đe dọa an toàn thông tin thường gặp là: ",
  },
  {
    idx: 133,
    answers: [
      {
        isKey: false,
        title: "a. Virus, zombie, spyware ",
        idx: 0,
      },
      {
        title: "b. Virus, trojan, zombie ",
        isKey: false,
        idx: 1,
      },
      {
        title: "c. virus, worm, zombie ",
        idx: 2,
        isKey: true,
      },
      {
        title: "d. Virus, worm, trojan ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Các dạng phần mềm độc hại (malware) có khả năng tự nhân bản  gồm:",
  },
  {
    idx: 134,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title: "a. Máy khách/trình duyệt web",
        isKey: true,
      },
      {
        title: "b. Máy chủ và máy khách web ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "c. Máy chủ web.",
      },
      {
        title: "d.  Máy chủ cơ sở dữ liệu của trang web ",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Pharming là kiểu tấn công vào... ",
  },
  {
    title:
      "Các máy tính ma/máy tính bị chiếm quyền điều khiển thường được tin  tặc sử dụng để... ",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 135,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "a. Gửi các yêu cầu tấn công chèn mã ",
      },
      {
        isKey: false,
        idx: 1,
        title: "b. Đánh cấp dữ liệu từ máy chủ cơ sở dữ liệu",
      },
      {
        isKey: false,
        title: "c. Thực hiện tấn công tràn bộ đệm ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "d. Gửi thư rác, thư quảng cáo ",
      },
    ],
  },
  {
    title: "Đâu là một kỹ thuật tấn công DoS? ",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 136,
    answers: [
      {
        title: "a. DNS spoofing ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "b. UDP Ping ",
      },
      {
        idx: 2,
        isKey: true,
        title: "c. Smurf ",
      },
      {
        title: "d. DNS Cache Poisoning ",
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
        title: "a. SYN Firewall ",
      },
      {
        idx: 1,
        isKey: false,
        title: "b. SYN IDS ",
      },
      {
        idx: 2,
        title: "c. SYN Proxy ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "d. SYN Cache ",
      },
    ],
    title: "Đâu là một biện pháp phòng chống tấn công SYN Floods?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 137,
  },
  {
    title: "Kỹ thuật tấn công Smurf sử dụng giao thức ICMP và cơ chế gửi…",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "a. Multicast",
      },
      {
        title: "b. Anycast ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "c. Broadcast ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "d. Unicast",
      },
    ],
    idx: 138,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Tấn công nghe lén là kiểu tấn công: ",
    idx: 139,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "a. Chủ động và bị động ",
      },
      {
        isKey: true,
        title: "b. Thụ động ",
        idx: 1,
      },
      {
        title: "c. Chủ động",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "d. Chiếm quyền điều khiến ",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "a. vét cạn các mật khẩu có thể có",
        idx: 0,
        isKey: false,
      },
      {
        title: "b. Tìm mật khẩu trong từ điển các mật khẩu ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "c. Lắng nghe trên đường truyền để đánh cấp mật khẩu ",
        idx: 2,
      },
      {
        title:
          "d. Thử các từ có tần suất sử dụng cao làm mật khẩu trong từ điển ",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Trong dạng tấn công vào mật khẩu dựa trên từ điển, tin tặc đánh cấp  mật khẩu của người dùng bằng cách: ",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 140,
  },
  {
    idx: 141,
    title:
      "Dạng tấn công chặn bắt thông tin truyền trên mạng để sửa đổi hoặc lạm  dụng là: ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "a. Fabrications ",
      },
      {
        title: "b. Modifications ",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "c. Interruptions ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "d. Interceptions ",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "a. Khả năng chống tấn công phát lại và chứa các ký tự từ nhiều dạng kýtự ",
      },
      {
        idx: 1,
        title: "b. Chứa các ký tự từ nhiều dạng ký tự ",
        isKey: false,
      },
      {
        title: "c.  Độ dài lớn hơn hoặc bằng 8 ký tự ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title:
          "d. Độ dài từ 8 ký tự trở lên , gồm chữ cái hoa , thường , chữ số và kýtự đặc biệt ",
        idx: 3,
      },
    ],
    title: "Mật khẩu an toàn trong thời điểm hiện tại là mật khẩu có : ",
    idx: 142,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "a. Chèn mã XSS, CSRF ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "b. Chèn mã SQL",
      },
      {
        title: "c. Tràn bộ đệm ",
        isKey: false,
        idx: 2,
      },
      {
        title: "d.SQLi , XSS , CSRF và Buffer overflow ",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Tấn công bằng mã độc có thể gồm: ",
    idx: 143,
  },
  {
    title: "Tấn công kiểu Social Engineering có thể cho phép tin tặc : ",
    answers: [
      {
        idx: 0,
        title: "a Phá hỏng máy chủ ",
        isKey: false,
      },
      {
        isKey: false,
        title: "b. Đánh cắp toàn bộ cơ sở dữ liệu trên máy chủ ",
        idx: 1,
      },
      {
        idx: 2,
        title: "c. Đánh cắp thông tin nhạy cảm của người dùng ",
        isKey: true,
      },
      {
        idx: 3,
        title:
          "d.  Đánh cắp thông tin nhạy cảm trong cơ sở dữ liệu trên máy chủ ",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 144,
  },
  {
    idx: 145,
    title: "Khác biệt cơ bản giữa tấn công DoS và DDoS là: ",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "a.  Phạm vi tấn công ",
      },
      {
        title: "b. Tần suất tấn công ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "c. Mức độ gây hại ",
      },
      {
        isKey: false,
        title: "d.  Kỹ thuật tấn công ",
        idx: 3,
      },
    ],
  },
  {
    idx: 146,
    title:
      "Một trong các cách virus thường sử dụng để lây nhiễm vào các chương  trình khác là:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "a. Thay thế các chương trình ",
      },
      {
        isKey: false,
        idx: 1,
        title: "b. Xáo trộn mã của virus ",
      },
      {
        title: "c. Sửa đổi các chương trình",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "d.  Ăn mã của virus ",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    answers: [
      {
        title: "a. Rule - Based ",
        idx: 0,
        isKey: false,
      },
      {
        title: "b. DAC ",
        idx: 1,
        isKey: true,
      },
      {
        title: "c. MAC ",
        isKey: false,
        idx: 2,
      },
      {
        title: "d. Role - Based ",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Trojan horses là dạng phần mềm độc hại thường giành quyền truy nhập  vào các file của người dùng khai thác Cơ chỉ điều khiển truy  nhập. ",
    idx: 147,
  },
  {
    title:
      "Tại sao việc sử dụng thủ tục cơ sở dữ liệu (Stored procedure ) là một  trong các biện pháp hiệu quả để ngăn chặn triệt để tấn công chèn mã  SQL ? ",
    answers: [
      {
        isKey: false,
        title: "a. Thủ tục cơ sở dữ liệu có khả năng cẩm chèn mã ",
        idx: 0,
      },
      {
        idx: 1,
        title: "b. Thủ tục cơ sở dữ liệu độc lập với các ứng dụng ",
        isKey: false,
      },
      {
        title:
          "c. Thủ tục cơ sở dữ liệu cho phép tách mã lệnh SQL khỏi dữ liệu ngườidùng ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "d. Thủ tục cơ sở dữ liệu lưu trong cơ sở dữ liệu và chạy nhanh hơn câulệnh trực tiếp ",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 148,
  },
  {
    answers: [
      {
        idx: 0,
        title: "a. các yêu cầu UPD hoặc các yêu cầu phát quảng bá ",
        isKey: false,
      },
      {
        isKey: false,
        title: "b. các yêu cầu TCP hoặc các yêu cầu phát quảng bá ",
        idx: 1,
      },
      {
        idx: 2,
        title: "c. các yêu cầu HTTP hoặc các yêu cầu phát quảng bá ",
        isKey: false,
      },
      {
        title: "d. các yêu cầu ICMP hoặc các yêu cầu phát quảng bá ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 149,
    title:
      "Có thể phòng chống tấn công Smurf bằng cách cấu hình các máy và  router không trả lời.",
  },
  {
    idx: 150,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Đây là một công cụ kiểm tra lỗ hổng tấn công chèn mã SQL trên các  website:",
    answers: [
      {
        isKey: true,
        title: "a. SQLmap",
        idx: 0,
      },
      {
        idx: 1,
        title: "b. SQLite ",
        isKey: false,
      },
      {
        isKey: false,
        title: "c. SQLCheck",
        idx: 2,
      },
      {
        idx: 3,
        title: "d. SQL Server ",
        isKey: false,
      },
    ],
  },
  {
    title: "Một trong các biện pháp hiệu quả để phòng chống macro viruses  là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "a. Sử dụng IPS/IDS.",
      },
      {
        isKey: false,
        idx: 1,
        title: "b. Sử dụng tường lửa",
      },
      {
        idx: 2,
        isKey: true,
        title: "c.Cấm tự động thực hiện macro trong Microsoft Office",
      },
      {
        title: "d.Cấm tự động thực hiện macro trong Microsoft Exchange",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 151,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title: "Đâu là một kỹ thuật tấn công DoS?",
    idx: 152,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "a. SYN requests",
      },
      {
        idx: 1,
        title: "b. IP spoofing",
        isKey: false,
      },
      {
        title: "c.DNS spoofing",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "d.Ping of death",
      },
    ],
  },
  {
    title:
      "Đâu là một trong các biện pháp chống tấn công khai thác lỗi tràn bộ  đệm?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 153,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "a. Sử dụng công nghệ xác minh mạnh",
      },
      {
        idx: 1,
        title: "b. Sử dụng cơ chế cấm thực hiện mã trong dữ liệu",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "c.Sử dụng tường lửa",
      },
      {
        title: "d.Sử dụng các kỹ thuật mật mã ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Fabrications",
      },
      {
        idx: 1,
        title: "Interceptions  ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Interruptions  ",
      },
      {
        isKey: false,
        title: "Modifications",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Tấn công chặn bắt thường liên quan đến việc nghe lén trên đường  truyền và chuyển hướng thông tin để sử dụng trái phép?",
    idx: 154,
  },
  {
    idx: 155,
    title:
      "Tấn công gây ngắt quãng làm ngắt, hoặc chậm kênh truyền thông, hoặc  làm quá tải hệ thống, ngăn cản việc truy nhập dịch vụ của người dùng  hợp pháp:  ",
    answers: [
      {
        idx: 0,
        title: "Fabrications  ",
        isKey: false,
      },
      {
        title: "Interceptions",
        idx: 1,
        isKey: false,
      },
      {
        title: "Interruptions",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Modifications",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Trong các vùng hạ tầng CNTT, vùng nào có các lỗ hổng trong quản lý  phần mềm ứng dụng của máy chủ?",
    idx: 156,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "vùng máy trạm",
      },
      {
        isKey: false,
        title: "vùng mạng LAN-to-WAN",
        idx: 1,
      },
      {
        title: "vùng truy nhập từ xa",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "vùng hệ thống và ứng dụng",
        idx: 3,
      },
    ],
  },
  {
    idx: 157,
    title:
      "Trong các vùng hạ tầng CNTT, vùng nào có nhiều mối đe dọa nguy cơ  nhất?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title: "vùng người dùng",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "vùng máy trạm",
      },
      {
        title: "vùng mạng LAN",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "vùng mạng LAN-to-WAN",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 158,
    answers: [
      {
        idx: 0,
        title: "vùng người dùng",
        isKey: false,
      },
      {
        title: "vùng mạng LAN",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "vùng mạng WAN",
      },
      {
        title: "vùng mạng LAN-to-WAN",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Trong các vùng hạ tầng CNTT, vùng nào dễ bị tấn công DoS, DDoS  nhất?",
  },
  {
    title: "An toàn thông tin được chia làm những thành phần nào?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "an toàn máy tính và dữ liệu, an toàn mạng, quản lý an toàn thông  tin",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "an toàn mạng, quản lý an toàn thông tin, chính sách an toàn thông  tin",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "an toàn mạng, an toàn máy tính và dữ liệu, chính sách an toàn thông  tin",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "an toàn máy tính và dữ liệu, quản lý an toàn thông tin, chính sách an  toàn thông tin",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 159,
  },
  {
    idx: 160,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "toàn vẹn, sẵn dùng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "bí mật, sẵn dùng",
        idx: 1,
      },
      {
        title: "toàn vẹn, bí mật",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "an toàn. bí mật",
      },
    ],
    title: "Nếu dữ liệu bị sửa đổi thì đã vi phạm yêu cầu gì?",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "An toàn thông tin gồm các lĩnh vực nào?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "an toàn cntt, đảm bảo thông tin",
      },
      {
        title: "đảm bảo thông tin, an toàn mạng",
        isKey: true,
        idx: 1,
      },
    ],
    idx: 161,
  },
  {
    idx: 162,
    title:
      "Trong tấn công khai thác lỗi tràn bộ đệm tin tắc thường sử dụng một  số lệnh NOP (No Operation) ở phần đầu của mã tấn công. Mục đích của  việc này là gì:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "tăng khả năng gây tràn bộ đệm",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tăng khả năng gây lỗi chương trình",
      },
      {
        idx: 2,
        title: "Tăng khả năng phá hoại của mã tấn công",
        isKey: false,
      },
      {
        idx: 3,
        title: "Tăng khả năng mã tấn công được thực hiện",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "2002",
      },
      {
        title: "1997",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "2007",
      },
      {
        idx: 3,
        title: "2003",
        isKey: true,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 163,
    title: "Sâu SQL Slammer được phát hiện vào năm nào?",
  },
  {
    idx: 164,
    title:
      "Dạng tấn công chèn mã được tin tặc sử dụng phổ biến trên các trang  web nhắm đến các cơ sở dữ liệu là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Tấn công chèn mã SQL",
      },
      {
        isKey: false,
        title: "Tấn công chèn mã XSS",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tấn công chèn mã CSRF",
      },
      {
        isKey: false,
        title: "Tấn công chèn mã HTML",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 165,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Các thành phần phần cứng",
      },
      {
        title: "Các ứng dụng",
        idx: 1,
        isKey: true,
      },
      {
        title: "Hệ điều hành",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Các dịch vụ mạng",
        idx: 3,
      },
    ],
    title:
      " Các lỗ hổng bảo mật thường tồn tại nhiều nhất trong thành phần nào  của hệ thống:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "        Quản trị phần mềm",
      },
      {
        isKey: false,
        title: "        Lập trình phần mềm",
        idx: 1,
      },
      {
        title: "        Thiết kế phần mềm",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "        Kiểm thử phần mềm",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 166,
    title: "Lỗi tràn bộ đệm là lỗi trong khâu:",
  },
  {
    idx: 167,
    answers: [
      {
        title:
          "        Sử dụng các thư viện lập trình an toàn //or sử dụng cơ chế cấm thựchiện mã trong dữ liệu (DEP)",
        idx: 0,
        isKey: true,
      },
      {
        title: "        Sử dụng tường lửa",
        isKey: false,
        idx: 1,
      },
      {
        title: "        Sử dụng các kỹ thuật mật mã",
        isKey: false,
        idx: 2,
      },
      {
        title: "        Sử dụng công nghệ xác thực mạnh",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Đâu là một trong các biện pháp phòng chống tấn công khai thác lỗi  tràn bộ đệm? ",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 168,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Quản trị",
      },
      {
        isKey: false,
        title: "        Xác thực",
        idx: 1,
      },
      {
        isKey: false,
        title: "        Trao quyền",
        idx: 2,
      },
      {
        title: "        Xác thực và Trao quyền",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một điểm yếu điển hình trong hệ thống điều khiển truy cập là việc sử  dụng mật khẩu dễ đoán hoặc mật khẩu được lưu ở dạng rõ. Đây là điểm  yếu thuộc khâu:",
  },
  {
    title:
      "Lỗ hổng bảo mật (Security vulnerability) là một điểm yếu tồn tại  trong một hệ thống cho phép tin tặc:",
    idx: 169,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Khai thác nhằm đánh cắp các thông tin trong hệ thống",
      },
      {
        isKey: false,
        idx: 1,
        title: "        Khai thác nhằm chiếm quyền điều khiển hệ thống",
      },
      {
        title: "        Khai thác, tấn công phá hoại và gây tê liệt hệ thống",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "        Khai thác gây tổn hại đến các thuộc tính an ninh của hệ thống đó",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Trong tấn công khai thác lỗi tràn bộ đệm, tin tặc thường sử dụng  shellcode. Shellcode đó là dạng:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Mã Java",
      },
      {
        title: "        Mã Hợp ngữ",
        idx: 1,
        isKey: false,
      },
      {
        title: "        Mã C/C++",
        isKey: false,
        idx: 2,
      },
      {
        title: "        Mã máy",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 170,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Tấn công kiểu Social Engineering có thể cho phép tin tặc:",
    idx: 171,
    answers: [
      {
        isKey: true,
        title:
          "        Đánh cắp thông tin nhạy cảm trong cơ sở dữ liệu trên máychủ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "        Đánh cắp toàn bộ cơ sở dữ liệu trên máy chủ",
      },
      {
        title: "        Đánh cắp thông tin nhạy cảm của người dùng",
        idx: 2,
        isKey: false,
      },
      {
        title: "        Phá hỏng máy chủ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 172,
    answers: [
      {
        idx: 0,
        title: "        Phần mềm nghe lén",
        isKey: true,
      },
      {
        idx: 1,
        title: "        Phần mềm phá mã",
        isKey: false,
      },
      {
        title: "        Phần mềm quảng cáo",
        isKey: false,
        idx: 2,
      },
      {
        title: "        Phần mềm độc hại",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title: "Một trong các mối đe dọa an toàn thông tin thường gặp là:",
  },
  {
    title:
      "Tấn công kiểu Social Engineering là dạng tấn công khai thác yếu tố  nào sau đây trong hệ thống?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "        Người dùng",
        isKey: true,
        idx: 0,
      },
      {
        title: "        Hệ điều hành & ứng dụng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "        Máy trạm",
        idx: 2,
      },
      {
        title: "        Máy chủ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 173,
  },
  {
    idx: 174,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "        Interruptions",
      },
      {
        isKey: false,
        title: "        Interceptions",
        idx: 1,
      },
      {
        title: "        Fabrications",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "        Modifications",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Dạng tấn công giả mạo thông tin thường để đánh lừa người dùng thông  thường là:",
  },
  {
    title:
      "Trong tấn công DDoS phản chiếu hay gián tiếp, có sự tham gia của một  số lượng lớn máy chủ trên mạng Internet không bị tin tặc chiếm quyền  điều khiển. Các máy chủ này được gọi là…",
    idx: 175,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "        Requesters",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "        Reflectors",
      },
      {
        title: "        Injectors",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "        Forwarders",
        idx: 3,
      },
    ],
  },
  {
    idx: 176,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Ngăn xếp (Stack) và Bộ nhớ đệm (Cache)",
      },
      {
        isKey: false,
        idx: 1,
        title: "        Hàng đợi (Queue) và Vùng nhớ cấp phát động (Heap)",
      },
      {
        isKey: false,
        title: "        Ngăn xếp (Stack) và Vùng nhớ cấp phát động (Heap)",
        idx: 2,
      },
      {
        title: "        Hàng đợi (Queue) và Ngăn xếp (Stack)",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Các vùng bộ nhớ thường bị tràn gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title:
      " Để đảm bảo an toàn cho hệ thống điều khiển truy cập, một trong các  biện pháp phòng chống hiệu quả là:",
    answers: [
      {
        title: "        Không mở các email của người lạ hoặc email quảng cáo",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "        Không cho phép chạy các chương trình điều khiển từ xa",
      },
      {
        title:
          "        Không cài đặt và chạy các chương trình tải từ các nguồn khôngtin cậy",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "        Không dùng tài khoản có quyền quản trị để chạy các chương trình ứngdụng",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 177,
  },
  {
    answers: [
      {
        isKey: true,
        title: "        Địa chỉ máy nạn nhân làm địa đích của gói tin",
        idx: 0,
      },
      {
        title: "        Địa chỉ router làm địa đích của gói tin",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "        Địa chỉ máy nạn nhân làm địa nguồn của gói tin",
      },
      {
        isKey: false,
        title: "        Địa chỉ router làm địa nguồn của gói tin",
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 178,
    title:
      " Để thực hiện tấn công Smurf, tin tặc phải giả mạo địa chỉ gói tin  ICMP trong yêu cầu tấn công. Tin tặc sử dụng…",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 179,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Các file tài liệu của bộ phần mềm Open Office",
      },
      {
        isKey: false,
        idx: 1,
        title: "        Các file tài liệu của bộ phần mềm Microsoft SQL",
      },
      {
        idx: 2,
        isKey: false,
        title: "        Các file tài liệu của bộ phần mềm Microsoft Office",
      },
      {
        isKey: false,
        idx: 3,
        title: "        Các file tài liệu của bộ phần mềm Microsoft Exchange",
      },
    ],
    title: "Macro viruses là loại viruses thường lây nhiễm vào…",
  },
  {
    idx: 180,
    title: "Khác biệt cơ bản của vi rút và sâu là:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Vi rút có khả năng phá hoại lớn hơn",
      },
      {
        title: "        Sâu có khả năng phá hoại lớn hơn",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "        Vi rút có khả năng tự lây lan mà không cần tương tác của ngườidùng",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "        Sâu có khả năng tự lây lan mà không cần tương tác của người dùng",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "        Để đánh cắp các dữ liệu nhạy cảm trên máy trạm",
      },
      {
        idx: 1,
        title: "        Để vượt qua các hệ thống IPS và IDS",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "        Để vượt qua các hàng rào kiểm soát an ninh",
      },
      {
        title: "        Để đánh cắp các dữ liệu nhạy cảm trên máy chủ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 181,
    title: "Mục đích chính của tấn công giả mạo địa chỉ IP là:",
  },
  {
    idx: 182,
    title:
      "Việc quản lý, khắc phục các lỗ hổng bảo mật và tăng cường khả năng đề  kháng cho hệ thống cần được thực hiện theo nguyên tắc chung là:",
    answers: [
      {
        isKey: true,
        title: "        Cân bằng giữa An toàn, Hữu dụng và Tin cậy",
        idx: 0,
      },
      {
        isKey: false,
        title: "        Cân bằng giữa An toàn, Rẻ tiền và Chất lượng",
        idx: 1,
      },
      {
        isKey: false,
        title: "        Cân bằng giữa An toàn, Hữu dụng và Rẻ tiền",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "        Cân bằng giữa An toàn, Tin cậy và Rẻ tiền",
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 183,
    title:
      "Một trong các biện pháp cụ thể cho quản lý, khắc phục các lỗ hổng bảo  mật và tăng cường khả năng đề kháng cho hệ thống là:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "        Định kỳ cập nhật thông tin về các lỗ hổng từ các trang web chínhthức",
      },
      {
        title: "        Định kỳ cập nhật các bản vá và nâng cấp hệ điều hành",
        isKey: false,
        idx: 1,
      },
      {
        title: "        Định kỳ nâng cấp hệ thống phần mềm",
        isKey: false,
        idx: 2,
      },
      {
        title: "        Định kỳ nâng cấp hệ thống phần cứng",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Có thể phòng chống tấn công Smurf bằng cách cấu hình các máy và  router không trả lời…",
    idx: 184,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "        các yêu cầu UPD hoặc các yêu cầu phát quảng bá",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "        các yêu cầu ICMP hoặc các yêu cầu phát quảng bá",
        isKey: false,
      },
      {
        title: "        các yêu cầu TCP hoặc các yêu cầu phát quảng bá",
        isKey: false,
        idx: 2,
      },
      {
        title: "        các yêu cầu HTTP hoặc các yêu cầu phát quảng bá",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: true,
        title: "        Hệ thống phần cứng và Hệ thống phần mềm",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "        CPU, Bộ nhớ, HDD, hệ điều hành và các ứng dụng",
      },
      {
        title: "        CPU, Bộ nhớ, HDD và Hệ thống bus truyền dẫn",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "        CPU, hệ điều hành và các ứng dụng",
      },
    ],
    title: "Các thành phần chính của hệ thống máy tính gồm:",
    idx: 185,
  },
  {
    idx: 186,
    title:
      "Đâu là dạng lỗ hổng bảo mật thường gặp trong hệ điều hành và các phần  mềm ứng dụng",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Lỗi tràn bộ đệm",
      },
      {
        title: "Lỗi quản trị",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Lỗi thiết kế",
        idx: 2,
      },
      {
        title: "Lỗi cấu hình",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 187,
    answers: [
      {
        title: "Microsoft Baseline Security Analyzer",
        idx: 0,
        isKey: true,
      },
      {
        title: "Acunetix Web Vulnerability Scanner",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "nmap",
        isKey: false,
      },
      {
        title: "Nessus vulnerability scanner",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      " Đâu là một công cụ có khả năng rà quét các lỗ hổng chèn mã SQL cho  các trang web?",
  },
  {
    title:
      "Điều khiển truy nhập dựa trên luật (Rule-based access control) được  sử dụng phổ biến trong:",
    idx: 188,
    answers: [
      {
        isKey: false,
        title: "VPN",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Firewall",
      },
      {
        isKey: false,
        title: "SSL/TLS",
        idx: 2,
      },
      {
        idx: 3,
        title: "Kerberos",
        isKey: false,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 189,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Các hành vi tấn công, xâm nhập gây tổn hại nghiêm trọng cho hệthống ",
      },
      {
        title:
          "Các hành vi tấn công, xâm nhập thường có quan hệ chặt chẽ với các hànhvi bất thường",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Các hành vi tấn công, xâm nhập có quan hệ chặt chẽ với các dịch vụ đượccung cấp ",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Các hành vi tấn công, xâm nhập gây ngắt quãng dịch vụ cung cấp chongười dùng",
      },
    ],
    title:
      "Phát hiện tấn công, xâm nhập dựa trên bất thường dựa trên giả  thiết:",
  },
  {
    title:
      "Một trong các nhược điểm chính của điều khiển truy nhập dựa trên các  đặc điểm sinh trắc học là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Không được hỗ trợ rộng rãi",
      },
      {
        idx: 1,
        title: "Công nghệ phức tạp",
        isKey: false,
      },
      {
        title: "Chi phí đắt",
        idx: 2,
        isKey: true,
      },
      {
        title: "Khó sử dụng",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 190,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title: "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập DAC:",
    idx: 191,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        idx: 0,
        title:
          "DAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập chongười dùng khác",
        isKey: true,
      },
      {
        title: "DAC quản lý quyền truy nhập chặt chẽ hơn các cơ chế khác",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "DAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và chínhsách quản trị",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "DAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "MAC quản lý quyền truy nhập chặt chẽ hơn các cơ chế khác",
      },
      {
        title:
          "MAC cấp quyền truy nhập dựa trên tính nhạy cảm của thông tin và chínhsách quản trị",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "MAC là cơ chế điều khiển truy nhập được sử dụng rộng rãi nhất",
      },
      {
        title:
          "MAC cho phép người tạo ra đối tượng có thể cấp quyền truy nhập chongười dùng khác",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 192,
    title:
      "Phát biểu nào sau đây đúng với cơ chế điều khiển truy nhập bắt buộc  MAC:",
  },
  {
    idx: 193,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Là quá trình xác minh nhận dạng của chủ thể",
      },
      {
        title: "Là quá trình xác minh nhận dạng của người dùng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Là quá trình xác minh các thông tin nhận dạng của chủ thể yêu cầu truynhập đối tượng",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Là quá trình xác minh tính chân thực của thông tin nhận dạng người dùngcung cấp",
        idx: 3,
      },
    ],
    title:
      "Tìm phát biểu đúng về dịch vụ xác thực trong điều khiển truy  nhập:",
  },
  {
    title:
      "Hai dịch vụ quan trọng nhất của một hệ thống điều khiển truy nhập  là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Authenticator và Administrator",
      },
      {
        idx: 1,
        title: "Authentication và Authorization",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Authentication và Administrator",
      },
      {
        title: "Administrator và Authorization",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 194,
  },
  {
    idx: 195,
    answers: [
      {
        idx: 0,
        title: "Tính bí mật, tính toàn vẹn và tính sẵn dùng",
        isKey: true,
      },
      {
        isKey: false,
        title: "Tính bảo mật, tính toàn vẹn và tính xác thực",
        idx: 1,
      },
      {
        title: "Tính bí mật, tính toàn vẹn và tính xác thực",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tính bảo mật, tính toàn vẹn và tính sẵn dùng",
      },
    ],
    title:
      "Mục đích chính của điều khiển truy nhập là để đảm bảo các thuộc tính  an ninh của thông tin, hệ thống và các tài nguyên, gồm:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title:
      "Tại sao một hệ thống phát hiện xâm nhập dựa trên chữ ký không thể  phát hiện các tấn công, xâm nhập mới?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Do chữ ký của chúng chưa tồn tại trong hệ thống",
        isKey: true,
        idx: 0,
      },
      {
        title: "Do các tấn công, xâm nhập mới chỉ gây thiệt hại nhỏ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Do các tấn công, xâm nhập mới không có chữ ký",
      },
      {
        isKey: false,
        idx: 3,
        title: "Do các tấn công, xâm nhập mới không gây ra bất thường",
      },
    ],
    idx: 196,
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Bảo mật cao và được hỗ trợ rộng rãi",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Bảo mật cao và độ ổn định cao",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bảo mật cao và chi phí thấp",
      },
      {
        idx: 3,
        isKey: true,
        title: "Bảo mật cao và luôn đi cùng với chủ thể",
      },
    ],
    idx: 197,
    title:
      "Ưu điểm của điều khiển truy nhập dựa trên các đặc điểm sinh trắc học  là:",
  },
  {
    answers: [
      {
        title: "Các host",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Mạng và các host",
      },
      {
        idx: 2,
        title: "Mạng",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Các router",
      },
    ],
    idx: 198,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Các hệ thống phát hiện xâm nhập có thể thu thập dữ liệu đầu vào  từ…",
  },
  {
    idx: 199,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    title:
      "Dạng xác thực sử dụng các thông tin nào dưới đây đảm bảo độ an toàn  cao hơn?",
    answers: [
      {
        idx: 0,
        title: "Thẻ ATM và số PIN",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tên truy nhập và mật khẩu",
      },
      {
        isKey: false,
        title: "Tên truy nhập và số PIN",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Thẻ ATM và tên truy nhập",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sử dụng Smartcard",
      },
      {
        isKey: false,
        idx: 1,
        title: "Sử dụng chứng chỉ số",
      },
      {
        idx: 2,
        title: "Sử dụng mật khẩu",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Sử dụng vân tay",
      },
    ],
    title:
      "Phương pháp xác thực nào dưới đây có thể cung cấp khả năng xác thực  có độ an toàn cao nhất?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 200,
  },
  {
    title:
      "Tìm phát biểu đúng về phát hiện xâm nhập dựa trên chữ ký và phát hiện  xâm nhập dựa trên bất thường:",
    idx: 201,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title:
          "Phát hiện xâm nhập dựa trên bất thường không thể phát hiện các tấncông, xâm nhập mới",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Phát hiện xâm nhập dựa trên chữ ký có thể phát hiện các tấn công, xâmnhập mới",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Phát hiện xâm nhập dựa trên chữ ký thường có tỷ lệ phát hiện đúng caohơn",
      },
      {
        title:
          "Phát hiện xâm nhập dựa trên bất thường thường có tỷ lệ phát hiện đúngcao hơn",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "Gateway server",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Application server",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Server gateway",
      },
      {
        title: "Application-level gateway",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 202,
    title: "Đâu là một loại tường lửa?",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
  },
  {
    title:
      "Loại tấn công nào sau đây chiếm quyền truy nhập đến tài nguyên lợi  dụng cơ chế điều khiển truy nhập DAC?",
    answers: [
      {
        title: "Man in the middle",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Phishing",
      },
      {
        idx: 2,
        isKey: true,
        title: "Trojan horse",
      },
      {
        title: "Spoofing",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 203,
  },
  {
    title:
      "Số lượng nhân tố (factor) xác thực sử dụng trong điều khiển truy nhập  dựa trên thẻ thông minh là:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 204,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "3",
      },
      {
        isKey: false,
        title: "4",
        idx: 1,
      },
      {
        title: "1",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "2",
      },
    ],
  },
  {
    title:
      "Ưu điểm của thẻ bài (token) so với thẻ thông minh (smart card) trong  điều khiển truy nhập là:",
    idx: 205,
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title: "Được sử dụng rộng rãi hơn",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Có chi phí rẻ hơn",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Có cơ chế xác thực mạnh hơn",
      },
      {
        title: "Có cơ chế xác thực đa dạng hơn",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 206,
    title:
      "Danh sách điều khiển truy nhập ACL thực hiện việc quản lý quyền truy  nhập đến các đối tượng cho người dùng bằng cách:",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    answers: [
      {
        title:
          "Các quyền truy nhập vào đối tượng cho mỗi người dùng được quản lý riêngrẽ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Mỗi người dùng được gán một danh sách các đối tượng kèm theo quyền truynhập",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Mỗi đối tượng được gán một danh sách người dùng kèm theo quyền truynhập",
      },
      {
        idx: 3,
        title:
          "Các quyền truy nhập vào đối tượng cho mỗi người dùng được quản lý trongmột ma trận",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 207,
    title:
      "Tìm phát biểu đúng về mã hóa khóa bất đối xứng (Asymmetric key  cryptography):",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Sử dụng một khóa quá trình mã hóa và một khóa khác cho giải mã",
      },
      {
        idx: 1,
        title: "An toàn hơn mã hóa khóa bí mật",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sử dụng một khóa chung cho cả quá trình mã hóa và giải mã",
      },
      {
        isKey: false,
        idx: 3,
        title: "Chỉ sử dụng kỹ thuật mã hóa khối",
      },
    ],
  },
  {
    answers: [
      {
        title: "Khóa có kích thước lớn",
        idx: 0,
        isKey: false,
      },
      {
        title: "Độ phức tạp cao của giải thuật RSA",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tính khó của việc phân tích số nguyên rất lớn",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí tính toán lớn",
      },
    ],
    title: "Độ an toàn của hệ mật mã RSA dựa trên...",
    practiceCode: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    idx: 208,
  },
];

export default questions;
