import { QuestionRequest } from "../../models/multiple-question";

const questions: QuestionRequest[] = [
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tăng lên thành 6.5 giờ",
      },
      {
        idx: 1,
        title: "Giảm xuống còn 5 giờ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Không thay đổi",
      },
      {
        isKey: false,
        title: "Không xác định được",
        idx: 3,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 0,
    title:
      "Giả sử thị trường chỉ có 2 người sản xuất bình hoa bằng gốm là A và B. A làm một bình hết 6 giờ lao động, cung cấp cho thị trường 100 bình; B làm một bình hết 8 giờ lao động, cung cấp cho thị trường 25 bình. Nếu NSLĐ của A tăng 25%, NSLĐ của B tăng 40%, mọi điều kiện khác không đổi thì giá trị 1 bình gốm trên thị trường như thế nào so với ban đầu?",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Giả sử thị trường chỉ có 2 người may áo sơ mi là ông Lâm và ông Thành. Ông Lâm may mỗi áo hết 3 giờ và cung cấp cho thị trường 100 áo; ông Thành may mỗi áo hết 4 giờ, cung cấp cho thị trường 25 áo. Thời gian lao động trung bình để sản xuất 1 áo (hay giá trị của 1 áo) bằng:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "3.2 giờ",
      },
      {
        idx: 1,
        title: "3.6 giờ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Không xác định được",
      },
      {
        title: "3.5 giờ",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 1,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Tảng đá này không phải hàng hóa vì không phải là sản phẩm của lao động",
      },
      {
        title: "Tảng đá này là hàng hóa vì vẫn có đủ 3 đặc trưng của hàng hóa",
        isKey: true,
        idx: 1,
      },
    ],
    idx: 2,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Một người vào rừng thấy một tảng đá có hình thù lạ liền mang về nhà. Có người thích hỏi mua và ông ta bán được 10 triệu đồng. Bạn đồng ý với ý kiến nào sau đây:",
  },
  {
    answers: [
      {
        title: "Công dụng cho người khác, cho xã hội",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Khả năng trao đổi với sản phẩm khác",
      },
      {
        title: "Cách thức chế tạo nó",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Khả năng thỏa mãn nhu cầu của người sản xuất ra nó",
      },
      {
        title: "Vật liệu dùng để chế tạo nó",
        isKey: false,
        idx: 4,
      },
    ],
    idx: 3,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Giá trị sử dụng của một hàng hóa thể hiện ở:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thời gian sản xuất cộng với thời gian vận chuyển hàng hóa",
      },
      {
        idx: 1,
        title: "Thời gian tạo ra hàng hóa",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Thời gian lao động xã hội cần thiết để sản xuất hàng hóa",
      },
    ],
    idx: 4,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Người ta có thể xác định lượng giá trị hàng hóa bằng:",
  },
  {
    title:
      "Theo quan điểm KTCT, một bộ phim có giá trị vì nó hay và nhận được sự tán thưởng của nhiều người",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Đúng",
        isKey: false,
      },
      {
        title: "Sai",
        idx: 1,
        isKey: true,
      },
    ],

    idx: 5,
  },
  {
    title: "Kết luận sau đây đúng hay sai:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title:
          "“Xét về mặt là lao động trừu tượng, các lao động khác nhau về lượng”",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Đúng",
        isKey: true,
      },
      {
        title: "Sai",
        isKey: false,
        idx: 2,
      },
    ],
    idx: 6,
  },
  {
    answers: [
      {
        title: "Ích lợi của nó",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Lao động sản xuất ra nó",
        idx: 1,
      },
      {
        title: "Khả năng trao đổi của nó",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Sự khan hiếm của nó",
        isKey: false,
      },
      {
        isKey: false,
        title: "Hình thức của nó",
        idx: 4,
      },
    ],

    title: "Giá trị của hàng hóa được quy định bởi:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 7,
  },
  {
    answers: [
      {
        title: "Do lao động của con người tạo ra",
        isKey: false,
        idx: 0,
      },
      {
        title: "Thỏa mãn một nhu cầu nào đó của con người",
        isKey: false,
        idx: 1,
      },
      {
        title: "Đi vào tiêu dùng thông qua trao đổi",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả các phương án trên",
        isKey: true,
        idx: 3,
      },
      {
        idx: 4,
        title: "Không có phương án nào",
        isKey: false,
      },
    ],

    idx: 8,
    title: "Đặc trưng nào sau đây là của hàng hóa?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Cường độ lao động tăng làm cho:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 9,
    answers: [
      {
        isKey: true,
        title:
          "Số lượng hàng hóa sản xuất trong một đơn vị thời gian tăng và Tổng giá trị tạo ra trong một đơn vị thời gian tăng",
        idx: 0,
      },
      {
        isKey: false,
        title: "Tổng giá trị tạo ra trong một đơn vị thời gian tăng",
        idx: 1,
      },
      {
        isKey: false,
        title: "Số lượng hàng hóa sản xuất trong một đơn vị thời gian tăng",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tổng giá trị tạo ra trong một đơn vị thời gian không đổi",
        isKey: false,
      },
      {
        idx: 4,
        isKey: false,
        title:
          "Số lượng hàng hóa sản xuất trong một đơn vị thời gian tăng và Tổng giá trị tạo ra trong một đơn vị thời gian không đổi",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Số lượng hàng hóa tạo ra trong một đơn vị thời gian giảm",
      },
      {
        isKey: false,
        title: "Tổng giá trị tạo ra trong một đơn vị thời gian giảm",
        idx: 1,
      },
      {
        isKey: false,
        title: "Giá trị một đơn vị hàng hóa không đổi",
        idx: 2,
      },
      {
        isKey: true,
        title: "Các phương án trên đều đúng",
        idx: 3,
      },
    ],

    idx: 10,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Cường độ lao động giảm làm cho:",
  },
  {
    idx: 11,
    title: "Chọn một kết luận đúng nhất:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giá trị do lao động cụ thể tạo ra",
      },
      {
        isKey: false,
        idx: 1,
        title: "Giá trị là kết tinh của lao động trong hàng hóa",
      },
      {
        title:
          "Giá trị của hàng hóa được xác định bởi hao phí lao động trừu tượng kết tinh trong hàng hóa đó",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "Lao động trừu tượng mang đến một công dụng nhất định cho hàng hóa",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title: "Kết luận sau đây đúng hay sai:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 12,
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "“Lao động cụ thể của người thợ dệt vải tạo ra giá trị sử dụng của vải”",
      },
      {
        isKey: false,
        idx: 1,
        title: "Sai",
      },
      {
        title: "Đúng",
        idx: 2,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Là trung bình cộng của các thời gian cá biệt",
        idx: 0,
      },
      {
        title: "Do những người sản xuất cá biệt thỏa thuận với nhau",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title:
          "Được quyết định bởi thời gian cá biệt của người sản xuất cung cấp đại bộ phận hàng hóa",
        idx: 2,
      },
    ],
    idx: 13,

    title:
      "Thời gian lao động xã hội cần thiết (TGLĐXH trung bình) để sản xuất hàng hóa:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giá trị mỗi chiếc mũ trên thị trường bằng:",
      },
      {
        isKey: false,
        idx: 1,
        title: "5.5 giờ",
      },
      {
        title: "5 giờ",
        isKey: false,
        idx: 2,
      },
      {
        title: "4.5 giờ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 14,
    title:
      "Giả sử thị trường chỉ có Bà Lan và Bà Cúc đan mũ len. Bà Lan đan mỗi chiếc mũ hết 4 giờ và cung cấp cho thị trường được 200 mũ mỗi tháng. Bà Cúc đan một chiếc mũ hết 7 giờ và mỗi tháng cung cấp được 40 chiếc.",
  },
  {
    title: "Hàng hóa có các thuộc tính nào sau đây:",
    idx: 15,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Giá trị",
        idx: 0,
      },
      {
        isKey: false,
        title: "Giá trị sử dụng",
        idx: 1,
      },
      {
        title: "Giá trị sử dụng và giá trị",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mang lại lợi ích cho con người",
      },
      {
        idx: 4,
        title: "Có thể trao đổi và mua bán được",
        isKey: false,
      },
    ],
  },
  {
    idx: 16,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Bàn ghế",
      },
      {
        idx: 1,
        isKey: false,
        title: "Quặng vàng dưới lòng đất",
      },
      {
        title: "Đất đai",
        idx: 2,
        isKey: false,
      },
      {
        title: "Quần áo tự dệt để mặc",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Không khí",
      },
    ],

    title:
      "Theo quan điểm KTCT, những thứ nào sau đây có thể xếp vào danh mục hàng hóa:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "“Lao động trừu tượng của người thợ xây tạo ra giá trị sử dụng của ngôi nhà”",
      },
      {
        title: "Sai",
        idx: 1,
        isKey: true,
      },
      {
        title: "Đúng",
        isKey: false,
        idx: 2,
      },
    ],
    idx: 17,
    title: "Kết luận sau đây đúng hay sai:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Không xác định được",
      },
      {
        isKey: false,
        idx: 1,
        title: "2.75 ngày",
      },
      {
        isKey: false,
        idx: 2,
        title: "3.25 ngày",
      },
      {
        isKey: true,
        idx: 3,
        title: "2.25 ngày",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Giả sử thị trường chỉ có 2 người đóng bàn là A và B. A đóng 1 bàn hết 2 ngày, cung cấp cho thị trường 100 bàn; B đóng 1 bàn hết 3,5 ngày, cung cấp cho thị trường 20 bàn. Thời gian lao động xã hội trung bình để đóng 1 bàn là:",

    idx: 18,
  },
  {
    title:
      "Một người nông dân trồng được cây chuối có 10 nải. Ông để lại 2 nải để ăn, 2 nải cho con gái, 2 nải đem đổi lấy 1 kg gạo nếp, 2 nải mang ra chợ bán và 2 nải mang lên chùa thắp hương. Số chuối có tư cách hàng hóa là:",
    answers: [
      {
        isKey: false,
        title: "Không có nải nào",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "4 nải",
      },
      {
        idx: 2,
        title: "2 nải",
        isKey: false,
      },
      {
        title: "6 nải",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        title: "8 nải",
        isKey: false,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 19,
  },
  {
    title:
      "Giả sử thị trường chỉ có Bà Lan và Bà Cúc đan mũ len. Bà Lan đan mỗi chiếc mũ hết 4 giờ và cung cấp cho thị trường được 200 mũ mỗi tháng. Bà Cúc đan một chiếc mũ hết 7 giờ và mỗi tháng cung cấp được 40 chiếc. Nếu năng suất lao động của Bà Lan giảm 30% và năng suất lao động của Bà Cúc tăng 50%, mọi điều kiện khác giữ nguyên thì giá trị mỗi chiếc mũ thay đổi thế nào so với ban đầu?",
    idx: 20,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Tăng lên thành 5.4 giờ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giảm xuống còn 4.2 giờ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Không đổi",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Theo quan điểm KTCT, những thứ nào sau đây không phải là hàng hóa:",

    answers: [
      {
        title: "Gà nuôi trong gia đình để ăn",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Bút bi",
        idx: 1,
      },
      {
        title: "Nước suối tự nhiên, gà nuôi trong gia đình để ăn",
        idx: 2,
        isKey: true,
      },
      {
        title: "Đồng hồ",
        idx: 3,
        isKey: false,
      },
      {
        title: "Nước suối tự nhiên",
        isKey: false,
        idx: 4,
      },
    ],
    idx: 21,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 22,

    answers: [
      {
        idx: 0,
        title: "Tổng giá trị hàng hóa tạo ra trong một đơn vị thời gian giảm",
        isKey: false,
      },
      {
        isKey: false,
        title: "Giá trị một đơn vị hàng hóa giảm",
        idx: 1,
      },
      {
        idx: 2,
        title: "Giá trị một đơn vị hàng hóa tăng",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tổng giá trị tạo ra trong một đơn vị thời gian không đổi",
      },
      {
        isKey: true,
        idx: 4,
        title: "C và D",
      },
    ],
    title: "Khi năng suất lao động giảm, có thể dự đoán:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        title: "Lao động thủ công",
        isKey: false,
      },
      {
        idx: 1,
        title: "Lao động trí óc",
        isKey: false,
      },
      {
        idx: 2,
        title: "Lao động trừu tượng",
        isKey: false,
      },
      {
        title: "Lao động cụ thể",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        title: "Lao động cụ thể và lao động trừu tượng",
        isKey: true,
      },
    ],
    title: "Lao động sản xuất hàng hóa biểu hiện ở các mặt nào sau đây:",
    idx: 23,
  },
  {
    title:
      "Giả sử thị trường chỉ có 2 người may áo sơ mi là ông Lâm và ông Thành. Ông Lâm may mỗi áo hết 3 giờ và cung cấp cho thị trường 100 áo; ông Thành may mỗi áo hết 4 giờ, cung cấp cho thị trường 25 áo. Nếu cường độ lao động của ông Lâm tăng 1,5 lần, cường độ lao động của ông Thành tăng gấp đôi thì giá trị 1 áo trên thị trường:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Không đổi so với cường độ lao động ban đầu",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tăng lên 3.25 giờ",
      },
      {
        isKey: false,
        title: "Giảm xuống còn 3 giờ",
        idx: 2,
      },
    ],

    idx: 24,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Sai",
      },
      {
        isKey: false,
        title: "Có lúc đúng, có lúc sai",
        idx: 1,
      },
      {
        idx: 2,
        title: "Đúng",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title:
      "Theo quan điểm kinh tế chính trị, có thể nói đất đai rất có giá trị",
    idx: 25,
  },
  {
    idx: 26,
    title: "Giá trị sử dụng phản ánh:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Mặt chất của hàng hóa",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Tính chất của hàng hóa",
        idx: 1,
      },
      {
        isKey: false,
        title: "Tương quan trao đổi hàng hóa với các hàng hóa khác",
        idx: 2,
      },
      {
        isKey: false,
        title: "Kỹ thuật sản xuất hàng hóa",
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Mặt lượng của hàng hóa",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Tổng giá trị tạo ra trong một đơn vị thời gian tăng",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Số lượng hàng hóa tạo ra trong một đơn vị thời gian tăng",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giá trị một đơn vị hàng hóa giảm",
      },
      {
        isKey: true,
        title: "B và C",
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "A và B",
      },
    ],
    idx: 27,
    title: "Năng suất lao động tăng làm cho:",
  },
  {
    idx: 28,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Giả sử thị trường chỉ có 2 người sản xuất bình hoa bằng gốm là A và B. A làm một bình hết 6 giờ lao động, cung cấp cho thị trường 100 bình; B làm một bình hết 8 giờ lao động, cung cấp cho thị trường 25 bình.Giá trị 1 bình gốm trên thị trường bằng:",
    answers: [
      {
        idx: 0,
        title: "A.6.4 giờ",
        isKey: true,
      },
      {
        title: "7.75 giờ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "7 giờ",
      },
    ],
  },
  {
    title: "Theo quan điểm KTCT, có thể nói xe máy có giá trị hơn ô tô",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Vừa đúng vừa sai",
        isKey: false,
      },
      {
        idx: 1,
        title: "Sai",
        isKey: true,
      },
      {
        idx: 2,
        title: "Đúng",
        isKey: false,
      },
    ],
    idx: 29,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Mang tính chất vĩnh viễn",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Mang tính chất lịch sử",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 30,

    title: "Giá trị sử dụng của hàng hóa là thuộc tính:",
  },
  {
    idx: 31,
    title: "Bạn mua một cây bút để viết. Cây bút này:",
    answers: [
      {
        isKey: true,
        title: "Là một hàng hóa và có giá trị sử dụng đối với bạn",
        idx: 0,
      },
      {
        isKey: false,
        title: "Có giá trị sử dụng đối với người sản xuất bút",
        idx: 1,
      },
      {
        title: "Là một hàng hóa",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Là một hàng hóa và có giá trị sử dụng đối với người sản xuất bút",
      },
      {
        title: "Có giá trị sử dụng đối với bạn",
        idx: 4,
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 32,

    title: "Giá trị của một quyển sách thể hiện ở:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tên tác giả",
      },
      {
        title: "Nội dung kiến thức mà nó mang lại",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Vật liệu tạo nên cuốn sách",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tên nhà xuất bản",
      },
      {
        idx: 4,
        title: "Lượng lao động làm ra cuốn sách",
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 33,

    answers: [
      {
        idx: 0,
        title: "Tiền",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Hàng hóa thông thường",
      },
      {
        isKey: true,
        idx: 2,
        title: "Hàng hóa đặc biệt",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Có thể giải thích nguyên nhân của giá trị tăng thêm ở:",
  },
  {
    idx: 34,

    answers: [
      {
        isKey: false,
        title: "Người lao động",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Người chủ",
      },
      {
        title: "Người chủ và người lao động",
        idx: 2,
        isKey: false,
      },
    ],
    title: "Giá trị thặng dư thuộc quyền chiếm hữu của:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 35,
    answers: [
      {
        idx: 0,
        title: "50%",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "200%",
      },
      {
        idx: 2,
        isKey: true,
        title: "100%",
      },
    ],
    title:
      "Giả sử một ngày lao động có 8 giờ, trong đó thời gian lao động cần thiết và thời gian lao động thặng dư bằng nhau. Tỷ suất GTTD là:",
  },
  {
    title: "Tư bản hàng hóa là tư bản:",
    answers: [
      {
        idx: 0,
        title: "Dùng để trao đổi với các hàng hóa khác",
        isKey: false,
      },
      {
        title: "Biểu hiện dưới hình thái các hàng hóa có GTTD",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Biểu hiện ở số hàng hóa mà người chủ tư bản mua được",
      },
      {
        title: "Được sử dụng để sản xuất hàng hóa",
        idx: 3,
        isKey: false,
      },
      {
        title: "Có thể mua bán được",
        isKey: false,
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 36,
  },
  {
    title: "Khối lượng GTTD:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tỷ lệ thuận với tỷ suất GTTD",
      },
      {
        title: "Tỷ lệ nghịch với khối lượng giá trị SLĐ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tỷ lệ thuận với khối lượng giá trị SLĐ",
      },
      {
        isKey: false,
        title: "A và B",
        idx: 3,
      },
      {
        idx: 4,
        isKey: true,
        title: "A và C",
      },
    ],

    idx: 37,
  },
  {
    idx: 38,
    title: "Giá trị mới được tạo bởi:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lao động quá khứ",
      },
      {
        isKey: true,
        idx: 1,
        title: "Lao động sống",
      },
      {
        idx: 2,
        isKey: false,
        title: "Cả 2 phương án trên đều đúng",
      },
    ],
  },
  {
    title: "Giá trị cũ được tạo bởi:",
    idx: 39,

    answers: [
      {
        title: "Lao động quá khứ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Lao động sống",
        idx: 1,
      },
      {
        isKey: false,
        title: "Cả 2 phương án trên đều đúng",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 40,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Năng lực thể chất của người lao động",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Tổng hợp năng lực thể chất và năng lực tinh thần của người lao động",
        idx: 1,
      },
      {
        title: "Năng lực tinh thần của người lao động",
        isKey: false,
        idx: 2,
      },
    ],

    title: "Sức lao động là:",
  },
  {
    idx: 41,
    title: "Chức năng thước đo giá trị của tiền có nghĩa là:",
    answers: [
      {
        title: "Tiền có thể sử dụng vào việc cất trữ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Sử dụng tiền để biểu thị giá trị của hàng hóa",
      },
      {
        title: "Dùng tiền để mua sức lao động",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Sử dụng tiền để so sánh giá trị này với giá trị khác",
      },
      {
        title: "Có thể đưa tiền vào dự trữ",
        idx: 4,
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 42,
    answers: [
      {
        idx: 0,
        title: "Sai",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đúng",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nhận định sau đúng hay sai: “Sức lao động luôn luôn là hàng hóa có thể mua – bán được”.",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tăng 20%",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giảm 10%",
      },
      {
        title: "Tăng 12.5%",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tăng thêm 25%",
        idx: 3,
        isKey: true,
      },
      {
        isKey: false,
        title: "Không thay đổi",
        idx: 4,
      },
    ],
    idx: 43,
    title:
      "Giả sử một ngày lao động có 8 giờ, trong đó 4 giờ là thời gian lao động cần thiết. Nếu kéo dài ngày lao động thêm 1 giờ mà không thay đổi TGLĐCT thì tỷ suất giá trị thặng dư sẽ:",
  },
  {
    idx: 44,

    title: "Tỷ suất GTTD phản ánh:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Quy mô bóc lột lao động làm thuê",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Mức độ bóc lột lao động làm thuê",
        isKey: true,
      },
      {
        title: "Cả 2 phương án trên",
        idx: 2,
        isKey: false,
      },
    ],
  },
  {
    idx: 45,
    title:
      "Theo quy luật lưu thông tiền tệ thực tế, số lượng tiền cần thiết cho lưu thông sẽ tăng trong các trường hợp:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Tổng số giá cả hàng hóa khấu trừ trực tiếp giảm đi",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tổng số giá cả hàng hóa khấu trừ trực tiếp tăng lên",
      },
      {
        title: "Tổng số giá cả hàng hóa mua – bán chịu tăng lên",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tổng số giá cả hàng hóa mua – bán chịu giảm đi",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Tổng số giá cả hàng hóa đến kỳ thanh toán tăng lên",
      },
      {
        title: "F. A, D và E",
        idx: 5,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title: "Công cụ lao động",
        isKey: false,
        idx: 0,
      },
      {
        title: "Nguyên liệu",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Sức lao động",
        idx: 2,
      },
      {
        isKey: false,
        title: "A và C",
        idx: 3,
      },
      {
        isKey: false,
        title: "B và C",
        idx: 4,
      },
    ],

    title: "Có thể xếp vào tư bản khả biến các bộ phận sau đây:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 46,
  },
  {
    title: "GTTD tuyệt đối được sản xuất bằng cách:",

    idx: 47,
    answers: [
      {
        title: "Kéo dài ngày lao động",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Giữ nguyên thời gian lao động cần thiết",
      },
      {
        idx: 2,
        isKey: false,
        title: "Kéo dài thời gian lao động cần thiết",
      },
      {
        isKey: false,
        title: "A và C",
        idx: 3,
      },
      {
        isKey: true,
        idx: 4,
        title: "A và B",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Có thể giảm chi phí tư bản bất biến nếu:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 48,
    answers: [
      {
        idx: 0,
        title: "Mua thêm máy móc mới",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Giảm số lượng lao động thuê mướn",
      },
      {
        isKey: true,
        title: "Tăng sử dụng vật liệu tái sinh, tái chế",
        idx: 2,
      },
      {
        idx: 3,
        title: "Sử dụng công nghệ hiện đại",
        isKey: false,
      },
      {
        isKey: false,
        idx: 4,
        title: "Giảm chi phí cho lao động",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Giá trị thặng dư là giá trị tương ứng với:",
    idx: 49,
    answers: [
      {
        idx: 0,
        title: "Phần đóng góp của ông chủ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Phần lao động không được trả công của công nhân",
        idx: 1,
      },
      {
        idx: 2,
        title: "Phần lao động được trả công của công nhân",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tỷ lệ thuận với tổng giá cả",
      },
      {
        title: "Tỷ lệ nghịch với tổng giá cả",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tỷ lệ nghịch với tốc độ lưu thông của tiền",
      },
      {
        isKey: false,
        idx: 3,
        title: "A và B",
      },
      {
        title: "A và C",
        isKey: true,
        idx: 4,
      },
    ],
    title:
      "Theo quy luật lưu thông tiền tệ, số lượng tiền cần thiết cho lưu thông:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 50,
  },
  {
    answers: [
      {
        title: "Số tiền người chủ tích lũy được",
        isKey: false,
        idx: 0,
      },
      {
        title: "Số tiền do bán hàng hóa mang lại",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Số tiền người chủ tư bản vay được",
        isKey: false,
      },
      {
        isKey: false,
        title: "Số tiền có trong tay chủ tư bản",
        idx: 3,
      },
      {
        isKey: true,
        idx: 4,
        title: "Tư bản biểu hiện dưới hình thái tiền tệ",
      },
    ],
    idx: 51,

    title: "Tư bản tiền tệ là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Giá trị của hàng hóa SLĐ:",
    answers: [
      {
        idx: 0,
        title: "Do LĐXHCT tạo ra",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Biểu hiện qua giá trị các TLSH cần thiết của người lao động",
      },
      {
        title: "Thể hiện ở năng lực lao động của người lao động",
        isKey: false,
        idx: 2,
      },
      {
        title: "A và B",
        idx: 3,
        isKey: true,
      },
      {
        title: "B và C",
        isKey: false,
        idx: 4,
      },
    ],
    idx: 52,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "H – T – H",
        isKey: false,
      },
      {
        idx: 1,
        title: "T – H – T",
        isKey: false,
      },
      {
        idx: 2,
        title: "H – T – H’",
        isKey: false,
      },
      {
        idx: 3,
        title: "T – H – T’",
        isKey: true,
      },
      {
        idx: 4,
        title: "Không có công thức nào",
        isKey: false,
      },
    ],

    idx: 53,
    title:
      "Trong số các công thức sau đây, công thức nào được gọi là công thức chung của tư bản:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 54,
    title: "Chức năng thanh toán của tiền được hiểu là:",

    answers: [
      {
        title: "Tiền phục vụ mục đích mua – bán chịu hàng hóa",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Có thể vay mượn nhau bằng tiền và thanh toán bằng tiền",
      },
      {
        isKey: false,
        title: "Dùng tiền để trả cho các chi phí giao dịch",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "A và B",
      },
      {
        idx: 4,
        title: "B và C",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Kéo dài thời gian lao động thặng dư",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Rút ngắn thời gian lao động cần thiết",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Rút ngắn thời gian lao động cần thiết và tăng thời gian lao động thặng dư tương ứng",
      },
      {
        isKey: false,
        title: "Rút ngắn thời gian lao động thặng dư",
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "A hoặc B",
      },
    ],

    idx: 55,
    title: "Giá trị thặng dư tương đối được sản xuất bằng cách:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 56,
    answers: [
      {
        isKey: false,
        title: "Độ dài của ngày lao động",
        idx: 0,
      },
      {
        idx: 1,
        title: "Mức độ bóc lột lao động làm thuê",
        isKey: false,
      },
      {
        title: "Quy mô bóc lột lao động làm thuê",
        isKey: true,
        idx: 2,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Khối lượng GTTD phản ánh:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tiền vàng và vàng thoi",
        idx: 0,
      },
      {
        title: "Tiền bạc và bạc nén",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Tiền giấy",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "B và C",
      },
      {
        title: "A và B",
        idx: 4,
        isKey: true,
      },
    ],

    idx: 57,
    title: "Người ta có thể cất trữ tiền dưới dạng:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "GTSD đặc biệt của hàng hóa SLĐ là:",
    answers: [
      {
        isKey: false,
        title: "Bù đắp hao phí về giá trị của SLĐ",
        idx: 0,
      },
      {
        title: "Tạo ra giá trị tăng thêm",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Kết hợp với các TLSX để sản xuất sản phẩm",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 58,
  },
  {
    title: "Giá trị của hàng hóa SLĐ có đặc điểm:",
    idx: 59,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title:
          "Bao gồm các TLSH nhằm bảo đảm nhu cầu tối thiểu của người lao động",
        isKey: false,
      },
      {
        idx: 1,
        title: "Không phụ thuộc hoàn cảnh lịch sử, cụ thể",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bao gồm cả các chi phí đào tạo và nâng cao tay nghề lao động",
      },
      {
        idx: 3,
        title: "A, B và C",
        isKey: false,
      },
      {
        isKey: true,
        idx: 4,
        title: "A và C",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Mục đích vận động của tư bản là:",
    idx: 60,
    answers: [
      {
        title: "Hàng hóa phong phú hơn về mẫu mã",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Hàng hóa tốt hơn về giá trị sử dụng",
        isKey: false,
      },
      {
        idx: 2,
        title: "Tăng sức cạnh tranh của hàng hóa",
        isKey: false,
      },
      {
        title: "Tăng thêm giá trị",
        isKey: true,
        idx: 3,
      },
      {
        title: "Tăng thêm hàng hóa",
        isKey: false,
        idx: 4,
      },
    ],
  },
  {
    title: "Giá trị SLĐ:",
    answers: [
      {
        isKey: true,
        title: "Được tạo ra trong thời gian lao động cần thiết",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Được tạo ra trong thời gian lao động thặng dư",
      },
      {
        isKey: false,
        title: "Các phương án trên đều đúng",
        idx: 2,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 61,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tư bản là:",
    idx: 62,
    answers: [
      {
        title: "Số tiền đầu tư của nhà tư bản",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Giá trị nhà xưởng và máy móc của người chủ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Số vốn bằng tiền của nhà tư bản",
      },
      {
        idx: 3,
        isKey: true,
        title: "Giá trị mang lại GTTD",
      },
      {
        title: "Số TLSX mà nhà tư bản sử dụng",
        idx: 4,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Giá trị SLĐ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giá trị nguyên, vật liệu",
      },
      {
        idx: 2,
        isKey: false,
        title: "Giá trị các TLSX",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 63,
    title: "Giá trị thặng dư là phần giá trị vượt trội so với:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Sai",
        isKey: false,
      },
      {
        title: "Đúng",
        isKey: true,
        idx: 1,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 64,

    title:
      "Mâu thuẫn của công thức chung thể hiện ở chỗ: giá trị tăng thêm trong lưu thông, lại không thể tăng thêm trong lưu thông.",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "600 C + 400 V + 400 M",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "600 C + 400 V + 100 M",
      },
      {
        idx: 2,
        title: "400 C + 600 V + 400 M",
        isKey: false,
      },
    ],

    title:
      "Một tư bản có tổng bằng 1000, đầu tư theo cấu tạo hữu cơ 3/2 và đạt tỷ suất GTTD bằng 100%. Cơ cấu sản xuất của tư bản này là:",
    idx: 65,
  },
  {
    title: "Cấu tạo hữu cơ được tính bằng cách:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "So sánh giá trị máy móc, thiết bị và giá trị SLĐ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "So sánh giá trị tư bản bất biến và giá trị tư bản khả biến",
        isKey: true,
      },
      {
        isKey: false,
        title: "So sánh giá trị tư bản bất biến và toàn bộ tư bản",
        idx: 2,
      },
      {
        title: "So sánh giá trị nguyên, vật liệu và giá trị SLĐ",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "So sánh giá trị SLĐ và toàn bộ tư bản",
      },
    ],
    idx: 66,
  },
  {
    title: "Tư bản trực tiếp tạo ra GTTD là:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tư bản bất biến",
      },
      {
        title: "Tư bản khả biến",
        idx: 1,
        isKey: true,
      },
      {
        title: "Cả 2 phương án trên đều đúng",
        isKey: false,
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 67,
  },
  {
    title: "Mua – bán hàng hóa SLĐ có thể dựa trên cơ sở:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 68,
    answers: [
      {
        title: "Giá trị của SLĐ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Thỏa thuận của người chủ và người lao động",
      },
      {
        idx: 2,
        title: "Quan hệ cung – cầu trên thị trường lao động",
        isKey: false,
      },
      {
        idx: 3,
        title: "Các quy định của Chính phủ",
        isKey: false,
      },
      {
        title: "Tất cả các phương án trên",
        isKey: true,
        idx: 4,
      },
    ],
  },
  {
    idx: 69,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Xã hội quy định phải có tiền",
      },
      {
        title: "Ý muốn của những người trao đổi hàng hóa",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thuộc tính tự nhiên của vật làm tiền",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mọi người cần tiền để tích trữ của cải",
      },
      {
        idx: 4,
        title: "Yêu cầu của trao đổi ở một trình độ cao nhất định",
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tiền xuất hiện là do:",
  },
  {
    idx: 70,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tăng 20%",
      },
      {
        title: "Tăng 25%",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tăng 30%",
      },
      {
        isKey: false,
        idx: 3,
        title: "Không xác định được",
      },
      {
        idx: 4,
        isKey: false,
        title: "Giảm 30%",
      },
    ],
    title:
      "Nếu tỷ suất GTTD tăng 50% và khối lượng giá trị SLĐ giảm 20% thì khối lượng GTTD sẽ:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tăng lên 200%",
        idx: 0,
      },
      {
        idx: 1,
        title: "Tăng lên 250%",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tăng lên 100%",
      },
      {
        title: "Tăng lên 400%",
        isKey: true,
        idx: 3,
      },
      {
        title: "Giảm xuống 100%",
        idx: 4,
        isKey: false,
      },
    ],
    idx: 71,
    title:
      "Giả sử một ngày lao động có 10 giờ không thay đổi, trong đó 4 giờ là thời gian lao động cần thiết. Nếu rút ngắn TGLĐCT xuống còn 2 giờ thì tỷ suất GTTD sẽ:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Giá trị thặng dư có nguồn gốc từ:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Sản xuất",
      },
      {
        idx: 1,
        title: "Sản xuất và lưu thông",
        isKey: false,
      },
      {
        idx: 2,
        title: "Lưu thông",
        isKey: false,
      },
    ],
    idx: 72,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Chi phí tư bản khả biến giảm",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chi phí tư bản bất biến tang",
      },
      {
        isKey: false,
        idx: 2,
        title: "Chi phí tư bản khả biến tang",
      },
      {
        idx: 3,
        title: "Chi phí tư bản bất biến giảm",
        isKey: false,
      },
      {
        title: "Chi phí tư bản bất biến tăng nhanh hơn chi phí tư bản khả biến",
        isKey: true,
        idx: 4,
      },
    ],
    idx: 73,
    title: "Cấu tạo hữu cơ tăng khi:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Tỷ suất GTTD tăng 20% và khối lượng giá trị SLĐ tăng 20% sẽ làm cho khối lượng GTTD:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tăng 20%",
      },
      {
        isKey: false,
        title: "Tăng 40%",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Tăng 44%",
      },
      {
        title: "Không xác định được",
        idx: 3,
        isKey: false,
      },
      {
        title: "Không thay đổi",
        idx: 4,
        isKey: false,
      },
    ],

    idx: 74,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 75,
    answers: [
      {
        idx: 0,
        title: "2/4 hay 1/2",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "1/4",
      },
      {
        isKey: false,
        idx: 2,
        title: "4/2 hay 2/1",
      },
      {
        isKey: false,
        idx: 3,
        title: "1/1",
      },
      {
        title: "4/1",
        idx: 4,
        isKey: true,
      },
    ],
    title:
      "Một tư bản có giá trị 1000, đầu tư cho TLSX hết 800; thuê SLĐ hết 200. Cấu tạo hữu cơ của tư bản này bằng:",
  },
  {
    answers: [
      {
        title: "Phản ánh trình độ phát tiển của kỹ thuật sản xuất",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Phản ánh mức độ bóc lột lao động làm thuê",
        idx: 1,
      },
      {
        idx: 2,
        title: "Phản ánh mức độ sinh lợi của tư bản",
        isKey: false,
      },
    ],
    idx: 76,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Cấu tạo hữu cơ của tư bản:",
  },
  {
    title: "Giá trị thặng dư được tạo bởi:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Người chủ tư bản",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Người chủ tư bản và người lao động làm thuê",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Người lao động làm thuê",
      },
    ],

    idx: 77,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đúng",
      },
      {
        title: "Sai",
        idx: 1,
        isKey: true,
      },
    ],
    idx: 78,

    title:
      "Mâu thuẫn của công thức chung thể hiện ở chỗ: giá trị vừa tăng thêm vừa không tăng thêm.",
  },
  {
    title: "Tư bản sản xuất là tư bản:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 79,
    answers: [
      {
        title: "Tồn tại dưới hình thái TLSX",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tồn tại dưới hình thái các yếu tố sản xuất",
        isKey: true,
      },
      {
        title: "Hình thành trong sản xuất",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tồn tại dưới hình thái SLĐ",
        idx: 3,
        isKey: false,
      },
      {
        title: "Đầu tư vào máy móc, thiết bị",
        idx: 4,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tiền:",

    idx: 80,
    answers: [
      {
        isKey: false,
        title: "Là một vật",
        idx: 0,
      },
      {
        idx: 1,
        title: "Biểu thị mối quan hệ xã hội",
        isKey: false,
      },
      {
        isKey: false,
        title: "Chỉ liên quan đến những người sản xuất và trao đổi hàng hóa",
        idx: 2,
      },
      {
        title: "A và B",
        idx: 3,
        isKey: true,
      },
      {
        idx: 4,
        isKey: false,
        title: "A và C",
      },
    ],
  },
  {
    title: "Hàng hóa SLĐ là một phạm trù:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 81,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Gắn với mọi phương thức sản xuất xã hội",
      },
      {
        idx: 1,
        title: "Vĩnh viễn",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chỉ gắn với phương thức sản xuất TBCN",
      },
      {
        idx: 3,
        isKey: false,
        title: "Lịch sử",
      },
      {
        isKey: false,
        idx: 4,
        title: "Có từ chế độ nô lệ",
      },
      {
        isKey: true,
        title: "F. C và D",
        idx: 5,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Có thể thay đổi hình thái",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Có khả năng tăng thêm giá trị trong sản xuất",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Được cộng thêm giá trị trong sản xuất",
      },
      {
        title: "Có thể mang giá trị lớn hơn",
        isKey: false,
        idx: 3,
      },
      {
        title: "Tồn tại dưới hình thái các TLSX",
        idx: 4,
        isKey: false,
      },
    ],
    title: "Tư bản khả biến là tư bản:",

    idx: 82,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Đưa tiền vào lưu thông",
        idx: 0,
      },
      {
        title: "Chuyển tiền từ nước này sang nước khác",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Dùng tiền làm trung gian trong trao đổi hàng hóa",
      },
      {
        title: "Dùng tiền để trang trải việc mua nguyên, vật liệu",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Tiền được chuyển từ tay người này sang tay người khác",
      },
    ],
    title: "Chức năng phương tiện lưu thông của tiền có nghĩa là:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 83,
  },
  {
    title:
      "Ngày lao động 10 giờ, trong đó một nửa là thời gian lao động cần thiết. Người lao động được trả 8$ một ngày, mua được 2 kg thịt gà. Khi năng suất lao động trong ngành chăn nuôi tăng làm giá thịt gà giảm còn 3.2$/kg và người lao động vẫn được trả công bảo đảm mua được 2 kg thịt gà như trước. TGLĐCT lúc này sẽ:",

    idx: 84,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Không thay đổi",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tăng lên thành 6 giờ",
      },
      {
        isKey: false,
        title: "Giảm xuống còn 3.2 giờ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Giảm xuống còn 2 giờ",
        isKey: false,
      },
      {
        idx: 4,
        title: "Giảm xuống còn 4 giờ",
        isKey: true,
      },
    ],
  },
  {
    title: "Tiền:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 85,
    answers: [
      {
        idx: 0,
        title: "Do Nhà nước tạo ra",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Vận động độc lập với nền sản xuất hàng hóa",
      },
      {
        isKey: false,
        idx: 2,
        title: "Không phản ánh QHSX của xã hội",
      },
      {
        title: "Phản ánh QHSX của xã hội",
        isKey: true,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Được những người trao đổi hàng hóa thỏa thuận lựa chọn",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giảm 40%",
      },
      {
        isKey: true,
        title: "Giảm 4%",
        idx: 1,
      },
      {
        idx: 2,
        title: "Không thay đổi",
        isKey: false,
      },
      {
        title: "Tăng 10%",
        idx: 3,
        isKey: false,
      },
      {
        isKey: false,
        idx: 4,
        title: "Không xác định được",
      },
    ],
    idx: 86,
    title:
      "Tỷ suất GTTD tăng 20% và khối lượng giá trị SLĐ giảm 20% sẽ làm cho khối lượng GTTD:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Người lao động bị tách khỏi các TLSX",
        isKey: false,
      },
      {
        title: "Người chủ muốn mua SLĐ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Người lao động tự do về thân thể",
        isKey: false,
        idx: 2,
      },
      {
        title: "Người lao động muốn bán SLĐ",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        isKey: true,
        title: "A và C",
      },
      {
        idx: 5,
        title: "F. A và D",
        isKey: false,
      },
    ],

    title: "Điều kiện để SLĐ trở thành hàng hóa là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 87,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cả GTSD và giá trị đều đặc biệt",
      },
      {
        title: "Giá trị đặc biệt",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "GTSD đặc biệt",
      },
    ],
    title: "Hàng hóa SLĐ có:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 88,
  },
  {
    idx: 89,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Phản ánh mối quan hệ chủ - thợ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Không phản ánh mối quan hệ sản xuất",
      },
      {
        idx: 2,
        title:
          "Phản ánh mối quan hệ bóc lột lao động làm thuê của người chủ tư bản",
        isKey: true,
      },
    ],
    title: "Giá trị thặng dư:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 90,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "60%",
      },
      {
        title: "250%",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "150%",
      },
      {
        title: "40%",
        isKey: false,
        idx: 3,
      },
      {
        title: "Không xác định được",
        isKey: false,
        idx: 4,
      },
    ],

    title:
      "Giả sử một ngày lao động có 10 giờ, trong đó thời gian lao động cần thiết là 4 giờ. Tỷ suất GTTD là:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 91,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cả ở GTSD và giá trị của hàng hóa đặc biệt",
      },
      {
        isKey: true,
        idx: 1,
        title: "GTSD của hàng hóa đặc biệt",
      },
      {
        isKey: false,
        title: "Giá trị của hàng hóa đặc biệt",
        idx: 2,
      },
    ],
    title: "Có thể giải thích nguyên nhân của giá trị tăng thêm ở:",
  },
  {
    title: "Tỷ suất GTTD là tương quan so sánh giữa:",
    answers: [
      {
        title: "Thời gian lao động cần thiết và thời gian của ngày lao động",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Thời gian lao động thặng dư và thời gian lao động cần thiết",
      },
      {
        idx: 2,
        isKey: false,
        title: "Thời gian lao động thặng dư và thời gian của ngày lao động",
      },
    ],
    idx: 92,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Máy móc, thiết bị",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Nhà xưởng, kho hàng",
        isKey: false,
      },
      {
        title: "Nguyên, vật liệu",
        isKey: false,
        idx: 2,
      },
      {
        title: "A, B và C",
        isKey: true,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "B và C",
      },
    ],
    title: "Các bộ phận sau đây được xếp vào tư bản bất biến:",

    idx: 93,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sai",
      },
      {
        idx: 1,
        isKey: true,
        title: "Đúng",
      },
    ],
    idx: 94,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nhận định sau đúng hay sai: “Giá trị hàng hóa SLĐ bao gồm cả các chi phí để nuôi con cái của người lao động”.",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 95,
    answers: [
      {
        title: "GTTD và giá trị SLĐ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Giá trị SLĐ và giá trị TLSX",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Giá trị SLĐ và vốn của người chủ",
        isKey: false,
      },
    ],
    title: "Tỷ suất GTTD là tương quan so sánh giữa:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Trong thời gian lao động cần thiết",
        idx: 0,
      },
      {
        title: "Trong thời gian lao động thặng dư",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Trong cả ngày lao động",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Giá trị thặng dư được tạo ra:",
    idx: 96,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Giá trị sử dụng của hàng hóa SLĐ",
      },
      {
        idx: 1,
        title: "Giá trị của hàng hóa SLĐ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Cả 2 phương án trên đều đúng",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 97,

    title: "Giá trị thăng dư phát sinh từ:",
  },
  {
    title: "Tư bản có thể tồn tại dưới các hình thái:",
    idx: 98,
    answers: [
      {
        isKey: false,
        title: "Tư bản tiền tệ",
        idx: 0,
      },
      {
        title: "Tư bản sản xuất",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tư bản hàng hóa",
      },
      {
        title: "A, B và C",
        isKey: false,
        idx: 3,
      },
      {
        isKey: true,
        title: "A hoặc B hoặc C",
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 99,

    answers: [
      {
        idx: 0,
        title: "Tư bản bất biến",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tư bản khả biến",
      },
      {
        title: "Giá trị thặng dư",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "A và B",
      },
      {
        idx: 4,
        isKey: true,
        title: "A, B và C",
      },
    ],
    title: "Các bộ phận sau đây được tính trong giá trị hàng hóa:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tư bản bất biến là bộ phận của tư bản sản xuất:",
    idx: 100,

    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Mà giá trị được chuyển nguyên vẹn, không tăng thêm trong sản xuất",
      },
      {
        isKey: false,
        idx: 1,
        title: "Không thay đổi hình thái",
      },
      {
        idx: 2,
        isKey: false,
        title: "Không tham gia sản xuất GTTD",
      },
      {
        isKey: false,
        idx: 3,
        title: "Tồn tại dưới hình thái SLĐ",
      },
      {
        idx: 4,
        isKey: false,
        title: "Có giá trị không đổi",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hao mòn công cụ lao động",
      },
      {
        isKey: false,
        idx: 1,
        title: "Khấu hao nhà xưởng, công trình phục vụ",
      },
      {
        title: "Tiêu hao nguyên, vật liệu, nhiên liệu",
        isKey: false,
        idx: 2,
      },
      {
        title: "A và B",
        isKey: false,
        idx: 3,
      },
      {
        title: "A, B và C",
        isKey: true,
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Khi tính giá trị tư bản bất biến, có thể cộng các khoản sau đây:",

    idx: 101,
  },
  {
    idx: 102,
    title: "Hàng hóa tiền:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Xuất hiện một cách ngẫu nhiên",
      },
      {
        idx: 1,
        isKey: false,
        title: "Không phải là sản phẩm của lao động",
      },
      {
        title: "Có cả giá trị sử dụng và giá trị đặc biệt",
        isKey: false,
        idx: 2,
      },
      {
        title: "Có giá trị đặc biệt",
        idx: 3,
        isKey: false,
      },
      {
        title: "Có giá trị sử dụng đặc biệt",
        idx: 4,
        isKey: true,
      },
    ],
  },
  {
    idx: 103,
    title:
      "Cấu tạo hữu cơ của tư bản là 3/2, tỷ suất tích lũy bằng 60%, tổng GTTD là 400. TBBB phụ thêm và TBKB phụ thêm lần lượt là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        title: "144 và 96",
        isKey: true,
      },
      {
        title: "240 và 160",
        isKey: false,
        idx: 1,
      },
      {
        title: "160 và 240",
        isKey: false,
        idx: 2,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Sự tiết kiệm của người chủ tư bản",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Sự đóng góp của người chủ và người lao động",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Giá trị thăng dư",
      },
    ],
    title: "Nguồn gốc của tích lũy tư bản là:",
    idx: 104,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tỷ lệ giữa TBBB phụ thêm và tổng tư bản",
        idx: 0,
      },
      {
        title: "Tỷ lệ giữa GTTD để tích lũy và tổng số GTTD",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Tỷ lệ giữa GTTD để tích lũy và tổng tư bản",
        idx: 2,
      },
      {
        title: "Tỷ lệ giữa GTTD để tích lũy và GTTD để tiêu dùng",
        idx: 3,
        isKey: false,
      },
      {
        title: "Tỷ lệ giữa TBBB phụ thêm và TBKB phụ thêm",
        isKey: false,
        idx: 4,
      },
    ],
    title: "Tỷ suất tích lũy của tư bản là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 105,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 106,

    title:
      "Cơ cấu sản xuất của tư bản là: 4.000 C + 1.000 V + 2.000 M. Giả sử tư bản dành 1600 GTTD để tích lũy, trong đó phân chia cho TBBB phụ thêm 1500 và TBKB phụ thêm 100. Sau tích lũy, cấu tạo hữu cơ chung của tư bản:",
    answers: [
      {
        idx: 0,
        title: "Không thay đổi",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Giảm xuống 3/1",
      },
      {
        isKey: true,
        idx: 2,
        title: "Tăng lên 5/1",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tiền trả công được tạo ra bởi:",
    idx: 107,
    answers: [
      {
        isKey: false,
        title: "Người chủ tư bản",
        idx: 0,
      },
      {
        isKey: false,
        title: "Quỹ trả công của người chủ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Người lao động",
      },
    ],
  },
  {
    title:
      "Tư bản ứng trước bằng 2000, cấu tạo hữu cơ của tư bản bằng 4/1, tỷ suất GTTD 100% và tỷ suất tích lũy bằng 60%. Có thể xác định tư bản tích lũy, TBBB phụ thêm và TBKB phụ thêm lần lượt là:",
    idx: 108,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "800, 400 và 160",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "240, 192 và 48",
      },
      {
        isKey: false,
        title: "400, 240 và 160",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "600, 400 và 160",
      },
      {
        isKey: false,
        title: "400, 200 và 160",
        idx: 4,
      },
    ],
  },
  {
    answers: [
      {
        title: "Mua TLSX bổ sung",
        idx: 0,
        isKey: false,
      },
      {
        title: "Mua TLSH bổ sung",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Mua SLĐ bổ sung",
      },
      {
        isKey: false,
        title: "A và B",
        idx: 3,
      },
      {
        idx: 4,
        title: "A và C",
        isKey: true,
      },
    ],
    idx: 109,
    title: "Tư bản tích lũy được sử dụng để:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 110,
    answers: [
      {
        title: "Tiền công thực tế giảm 4%",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tiền công thực tế tăng 0.5%",
        idx: 1,
      },
      {
        idx: 2,
        title: "Tiền công thực tế giảm 5%",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Tiền công thực tế tăng 4%",
      },
      {
        idx: 4,
        title: "Tiền công thực tế tăng 5%",
        isKey: false,
      },
    ],
    title:
      "Nếu giá cả TLSH tăng 25% mà tiền công danh nghĩa tăng 30%, có thể dự đoán:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Cơ sở của tiền công là:",
    answers: [
      {
        title: "Sự thỏa thuận giữa người chủ và lao động",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Các TLSH cần thiết của người lao động",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Mức sống của người lao động",
      },
    ],

    idx: 111,
  },
  {
    idx: 112,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        title: "Giữ nguyên 400",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tăng lên 500",
      },
      {
        idx: 2,
        title: "Tăng lên 600",
        isKey: true,
      },
    ],
    title:
      "Tổng GTTD là 600, trong đó phần tích lũy là 400 và phần tiêu dùng là 200. Nếu tổng GTTD tăng lên 900, với mọi điều kiện khác không đổi, tư bản tích lũy sẽ:",
  },
  {
    idx: 113,

    title: "Khi cầu lao động vượt cung lao động, có thể dự đoán:",
    answers: [
      {
        idx: 0,
        title: "Tiền công giảm xuống",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tiền công giảm xuống mức thấp nhất",
      },
      {
        idx: 2,
        title: "Tiền công tăng lên",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tiền công đạt mức cao nhất",
      },
      {
        title: "Tiền công không thay đổi",
        idx: 4,
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tư bản khả biến phụ thêm thể hiện bằng:",

    idx: 114,
    answers: [
      {
        isKey: false,
        title: "Số nguyên, vật liệu bổ sung",
        idx: 0,
      },
      {
        isKey: false,
        title: "Số TLSH bổ sung",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Số SLĐ bổ sung",
      },
      {
        title: "Số TLSX bổ sung",
        idx: 3,
        isKey: false,
      },
      {
        idx: 4,
        isKey: false,
        title: "Số tiền công bổ sung",
      },
    ],
  },
  {
    title: "Tiền công theo thời gian:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 115,
    answers: [
      {
        idx: 0,
        title: "Do thời gian lao động cần thiết quy định",
        isKey: false,
      },
      {
        title: "Tỷ lệ thuận với thời gian lao động",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Tỷ lệ nghịch với thời gian lao động",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Tư bản ứng trước bằng 500, sản xuất khối lượng GTTD bằng 200. Nếu tích lũy với tỷ suất tích lũy bằng 60%, tư bản sẽ lớn lên thành:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "680",
      },
      {
        isKey: true,
        idx: 1,
        title: "620",
      },
      {
        idx: 2,
        isKey: false,
        title: "700",
      },
      {
        idx: 3,
        title: "800",
        isKey: false,
      },
      {
        idx: 4,
        title: "580",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 116,
  },
  {
    idx: 117,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giá cả hàng hóa SLĐ",
      },
      {
        title: "Giá cả lao động",
        isKey: false,
        idx: 1,
      },
      {
        title: "Giá cả TLSH của người lao động",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "A hoặc B",
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "A và C",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Biểu hiện của tiền công trên thị trường là:",
  },
  {
    idx: 118,
    title:
      "Khi tỷ suất GTTD tăng gấp đôi, với mọi điều kiện khác không đổi, có thể dự đoán:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Quy mô tích lũy của tư bản tăng gấp đôi",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Quy mô tích lũy của tư bản tăng hơn 2 lần",
      },
      {
        idx: 2,
        title: "Quy mô tích lũy của tư bản không thay đổi",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Giả sử phân cách thu nhập giữa tư bản và lao động đang là 12/1. Do tích lũy tư bản mở rộng, thu nhập của tư bản tăng 40% và thu nhập của lao động tăng 20%. Tỷ lệ cách biệt về thu nhập giữa tư bản và lao động bây giờ là:",
    idx: 119,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "14/1",
      },
      {
        idx: 1,
        isKey: false,
        title: "13/1",
      },
      {
        idx: 2,
        title: "16/1",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Do sự thỏa thuận giữa người chủ và lao động",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Biểu hiện bằng số tiền trả cho giá trị SLĐ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Do người chủ trả cho lao động",
      },
      {
        isKey: false,
        title: "Lên xuống theo cung – cầu của thị trường",
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Do người lao động yêu cầu người chủ trả",
      },
    ],
    idx: 120,
    title: "Tiền công danh nghĩa là tiền công:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Tích lũy đồng thời của nhiều tư bản",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tích lũy trong phạm vi từng tư bản cá biệt",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Tích lũy bằng sự liên kết giữa các tư bản",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 121,
    title: "Tích tụ tư bản là:",
  },
  {
    title: "Tiền công thực tế là tiền công:",
    answers: [
      {
        isKey: false,
        title: "Được người chủ trả thực tế",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Biểu hiện bằng số TLSH mua được bằng tiền công danh nghĩa",
      },
      {
        isKey: false,
        idx: 2,
        title: "Được người chủ đồng ý trả thêm",
      },
      {
        isKey: false,
        idx: 3,
        title: "Do Chính phủ quy định trong thực tế",
      },
      {
        title: "Bảo đảm mức sống thực tế của lao động",
        isKey: false,
        idx: 4,
      },
    ],
    idx: 122,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "2.5 kg thịt gà",
      },
      {
        title: "6 kg thịt gà",
        isKey: false,
        idx: 1,
      },
      {
        title: "0.4 kg thịt gà",
        isKey: false,
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 123,
    title:
      "Giả sử tiền công danh nghĩa là 10$/ ngày. Nếu giá thịt gà bằng 4 $/ kg thì tiền công thực tế một ngày bằng:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tư bản tích lũy tăng gấp đôi",
      },
      {
        isKey: false,
        title: "TBBB phụ thêm tăng gấp đôi",
        idx: 1,
      },
      {
        isKey: false,
        title: "TBKB phụ thêm tăng gấp đôi",
        idx: 2,
      },
      {
        title: "A, B và C",
        idx: 3,
        isKey: true,
      },
      {
        isKey: false,
        idx: 4,
        title: "B và C",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title:
      "Khi tư bản ứng trước tăng gấp đôi, với mọi điều kiện cho trước khác không đổi, có thể dự đoán:",
    idx: 124,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Quan hệ cung – cầu về lao động",
        isKey: false,
      },
      {
        idx: 1,
        title: "Giá trị SLĐ",
        isKey: false,
      },
      {
        title: "Phản ứng của lao động với giới chủ",
        isKey: false,
        idx: 2,
      },
      {
        title: "A và B",
        idx: 3,
        isKey: false,
      },
      {
        idx: 4,
        isKey: true,
        title: "A, B và C",
      },
    ],

    title: "Những nhân tố ảnh hưởng đến tiền công là:",
    idx: 125,
  },
  {
    idx: 126,
    answers: [
      {
        idx: 0,
        title: "Tích tụ tư bản",
        isKey: false,
      },
      {
        title: "Tập trung tư bản",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Cả 2 phương án trên đều đúng",
      },
    ],
    title: "Tư bản có thể tích lũy bằng con đường:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Khi khối lượng GTTD giảm một nửa, với mọi điều kiện khác không đổi, có thể dự đoán:",
    answers: [
      {
        title: "Quy mô tích lũy của tư bản giảm một nửa",
        isKey: true,
        idx: 0,
      },
      {
        title: "Quy mô tích lũy của tư bản giảm hơn một nửa",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Quy mô tích lũy của tư bản không thay đổi",
        isKey: false,
      },
    ],
    idx: 127,
  },
  {
    idx: 128,
    title: "Khi cung lao động vượt cầu lao động, có thể dự đoán:",
    answers: [
      {
        title: "Tiền công đạt mức cao nhất",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tiền công giảm xuống",
      },
      {
        title: "Tiền công không thay đổi",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tiền công giảm xuống mức thấp nhất",
      },
      {
        idx: 4,
        isKey: false,
        title: "Tiền công lên cao",
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Bản chất của tiền công là:",
    answers: [
      {
        title: "Số tiền người lao động đòi hỏi",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Số tiền người chủ thỏa thuận với người lao động",
      },
      {
        title: "Biểu hiện bằng tiền của giá trị hàng hóa SLĐ",
        isKey: true,
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 129,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tập trung tư bản có thể diễn ra thông qua con đường:",

    answers: [
      {
        title: "Tự nguyện sáp nhập",
        idx: 0,
        isKey: false,
      },
      {
        title: "Thôn tính lẫn nhau",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Mua - bán giữa các tư bản",
      },
      {
        idx: 3,
        isKey: false,
        title: "A và B",
      },
      {
        title: "A, B hoặc C",
        idx: 4,
        isKey: true,
      },
    ],
    idx: 130,
  },
  {
    answers: [
      {
        title: "600 và 400",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "600 và 100",
        isKey: false,
      },
      {
        title: "500 và 400",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "400 và 100",
        idx: 3,
      },
      {
        isKey: true,
        title: "500 và 100",
        idx: 4,
      },
    ],
    idx: 131,
    title:
      "Tổng số GTTD của tư bản bằng 1.000, trong đó dành 600 để tích lũy và 400 để tiêu dùng. Để tích lũy, chủ tư bản dùng 500 mua TLSX bổ sung và 100 thuê lao động bổ sung. Tư bản bất biến phụ thêm và tư bản khả biến phụ thêm lần lượt là:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Giảm từ 3 – 2 xuống 1 – 1",
        isKey: false,
      },
      {
        idx: 1,
        title: "Tăng từ 2 – 3 lên 1 – 1",
        isKey: true,
      },
      {
        title: "Không thay đổi",
        isKey: false,
        idx: 2,
      },
    ],
    title:
      "Với mọi điều kiện cho trước không đổi, tỷ suất tích lũy tăng từ 40% lên 50% sẽ làm cho tỷ lệ tích lũy – tiêu dùng:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 132,
  },
  {
    idx: 133,
    title:
      "Tổng tư bản bằng 1200, cấu tạo hữu cơ bằng 5/1, tỷ suất GTTD bằng 200%, tỷ suất tích lũy bằng 75%. Tư bản bất biến phụ thêm và tư bản khả biến phụ thêm lần lượt bằng:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "600 và 100",
        idx: 0,
      },
      {
        title: "300 và 100",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "1000 và 200",
      },
      {
        idx: 3,
        title: "400 và 200",
        isKey: false,
      },
      {
        idx: 4,
        isKey: true,
        title: "250 và 50",
      },
    ],
  },
  {
    answers: [
      {
        title: "Không thay đổi",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Giảm xuống",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Tăng lên",
      },
    ],

    title: "Khi tăng tích lũy, cấu tạo hữu cơ của tư bản:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 134,
  },
  {
    title: "Tiền công theo sản phẩm:",
    idx: 135,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tỷ lệ thuận với số lượng sản phẩm",
      },
      {
        title: "Trả theo giá trị sản phẩm",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tỷ lệ nghịch với số lượng sản phẩm",
        idx: 2,
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 136,
    answers: [
      {
        idx: 0,
        title: "700, 500 và 175",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "700, 525 và 175",
      },
      {
        isKey: false,
        title: "575, 525 và 175",
        idx: 2,
      },
      {
        idx: 3,
        title: "600, 450 và 150",
        isKey: true,
      },
      {
        isKey: false,
        idx: 4,
        title: "475, 375 và 175",
      },
    ],
    title:
      "Tỷ suất tích lũy bằng 50%, tư bản tích lũy bằng 400, trong đó 300 là TBBB phụ thêm và 100 là TBKB phụ thêm. Khi tỷ suất tích lũy tăng lên 75%, với mọi điều kiện khác không đổi, có thể dự đoán tư bản tích lũy, TBBB phụ thêm và TBKB phụ thêm lần lượt là:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Tổng số GTTD của tư bản bằng 500, trong đó dành 300 cho tích lũy và 200 để tiêu dùng. Tỷ suất tích lũy của tư bản bằng:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 137,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "40%",
      },
      {
        idx: 1,
        title: "25%",
        isKey: false,
      },
      {
        isKey: true,
        title: "60%",
        idx: 2,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tiền công thực tế tăng 1%",
      },
      {
        title: "Tiền công thực tế giảm 40%",
        idx: 1,
        isKey: true,
      },
      {
        title: "Tiền công thực tế tăng 10%",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tiền công thực tế giảm 10%",
        idx: 3,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tiền công thực tế giảm 1%",
        idx: 4,
      },
    ],
    idx: 138,
    title:
      "Nếu tiền công danh nghĩa giảm 25% và giá cả TLSH tăng 25%, có thể dự đoán:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 139,
    answers: [
      {
        title: "Sử dụng hết GTTD để tiêu dùng",
        isKey: false,
        idx: 0,
      },
      {
        title: "Sử dụng hết GTTD để tích lũy",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Chia GTTD thành phần tích lũy và phần tiêu dùng",
        idx: 2,
      },
    ],
    title: "Muốn có tích lũy tư bản, người chủ tư bản phải:",
  },
  {
    idx: 140,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: true,
        title: "Tiền công thực tế giảm xuống",
        idx: 0,
      },
      {
        title: "Tiền công thực tế tăng lên",
        isKey: false,
        idx: 1,
      },
    ],
    title:
      "Khi tiền công danh nghĩa không đổi mà giá cả TLSH tăng lên, có thể dự đoán:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Lao động nghèo khổ hơn",
        idx: 0,
      },
      {
        title: "Phân cách giàu - nghèo giữa tư bản và lao động tăng lên",
        idx: 1,
        isKey: true,
      },
      {
        title: "Lao động giàu có lên",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tư bản giàu có lên",
      },
    ],
    title: "Tích lũy tư bản mở rộng sẽ dẫn tới kết quả:",
    idx: 141,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Tiền công theo thời gian đòi hỏi phải kiểm soát:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 142,

    answers: [
      {
        title: "Năng suất lao động",
        isKey: false,
        idx: 0,
      },
      {
        title: "Cường độ lao động",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Cả 2 phương án trên đều đúng",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Chi phí cho TBBB phụ thêm tăng nhanh hơn chi phí cho TBKB phụ thêm",
      },
      {
        idx: 1,
        title: "Chi phí cho tư bản khả biến phụ thêm tăng",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chi phí cho TBKB phụ thêm tăng",
      },
      {
        idx: 3,
        title: "Chi phí cho TBBB tăng",
        isKey: false,
      },
    ],
    idx: 143,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Khi tích lũy tăng, cấu tạo hữu cơ của tư bản tăng là do:",
  },
  {
    title: "Tập trung tư bản là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Tích lũy thông qua việc kết hợp của nhiều tư bản",
        isKey: true,
      },
      {
        idx: 1,
        title: "Tích lũy bằng GTTD của từng nhà tư bản",
        isKey: false,
      },
      {
        title: "Tích lũy xảy ra đối với những tư bản lớn",
        isKey: false,
        idx: 2,
      },
    ],
    idx: 144,
  },
  {
    answers: [
      {
        title: "300",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tăng lên 750",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "450",
        isKey: true,
      },
    ],

    idx: 145,
    title:
      "Giả sử tỷ suất GTTD là 100%, tổng GTTD là 500, trong đó dành 300 để tích lũy và 200 để tiêu dùng. Nếu tỷ suất GTTD tăng lên thành 150%, với mọi điều kiện khác không đổi, tư bản tích lũy sẽ:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 146,

    title: "Tỷ suất tích lũy bằng 60%. Tỷ lệ tích lũy – tiêu dùng là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "4 – 1",
        isKey: false,
      },
      {
        title: "3 – 2",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "5 – 1",
      },
    ],
  },
  {
    title:
      "Khi tiền công danh nghĩa tăng mà giá cả TLSH không thay đổi, có thể dự đoán:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tiền công thực tế giảm xuống",
      },
      {
        title: "Tiền công thực tế không thay đổi",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tiền công thực tế tăng lên",
      },
    ],
    idx: 147,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Số tiền công bổ sung",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Số nguyên, vật liệu bổ sung",
      },
      {
        title: "Số TLSX bổ sung",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Số TLSH bổ sung",
      },
      {
        isKey: false,
        title: "Số máy móc bổ sung",
        idx: 4,
      },
    ],
    idx: 148,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Tư bản bất biến phụ thêm là tư bản thể hiện bằng:",
  },
  {
    title: "Tích lũy tư bản là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Tiết kiệm tư bản đầu tư",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tư bản hóa GTTD",
      },
      {
        isKey: false,
        idx: 2,
        title: "Gom góp một số tư bản đủ lớn",
      },
      {
        isKey: false,
        idx: 3,
        title: "",
      },
    ],
    idx: 149,
  },
  {
    title: "Công thức xác định TNQD là:",

    idx: 150,
    answers: [
      {
        title: "I (M) + II (M)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "I (C + V) + II (C + V)",
      },
      {
        idx: 2,
        isKey: false,
        title: "I (C) + II (C)",
      },
      {
        title: "I (C + M) + II (C + M)",
        idx: 3,
        isKey: false,
      },
      {
        idx: 4,
        isKey: true,
        title: "I (V + M) + II (V + M)",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Để tăng tốc độ chu chuyển của tư bản, cần phải:",

    idx: 151,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tiết kiệm chi phí tư bản",
      },
      {
        isKey: false,
        idx: 1,
        title: "Tăng chi phí tư bản",
      },
      {
        idx: 2,
        title: "Giảm thời gian sản xuất và thời gian lưu thông",
        isKey: true,
      },
    ],
  },
  {
    idx: 152,
    title: "Thời gian chu chuyển của tư bản là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thời gian sản xuất",
      },
      {
        idx: 1,
        isKey: true,
        title: "Tổng của thời gian sản xuất và thời gian lưu thông",
      },
      {
        isKey: false,
        title: "Thời gian lưu thông trừ thời gian sản xuất",
        idx: 2,
      },
      {
        isKey: false,
        title: "Thời gian sản xuất trừ thời gian lưu thông",
        idx: 3,
      },
      {
        title: "Thời gian lưu thông",
        isKey: false,
        idx: 4,
      },
    ],
  },
  {
    title: "Thực chất của lưu thông tư bản xã hội là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: true,
        title: "Trao đổi TLSX của khu vực I và TLSH của khu vực II",
        idx: 0,
      },
      {
        title: "Trao đổi tư bản giữa hai khu vực I và II",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Trao đổi sản phẩm trong mỗi khu vực I và II",
        idx: 2,
      },
    ],
    idx: 153,
  },
  {
    idx: 154,

    answers: [
      {
        isKey: false,
        title: "I (M) + II (M)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "I (V + M) = II (V + M)",
      },
      {
        idx: 2,
        title: "I (C) + II (C)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "I (C + V ) + II (C + V)",
      },
      {
        isKey: true,
        title: "I (C + V + M) + II (C + V + M)",
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Công thức xác định TSPXH là:",
  },
  {
    answers: [
      {
        isKey: true,
        title: "Sản xuất ra TLSX",
        idx: 0,
      },
      {
        title: "Sản xuất ra GTTD",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Sản xuất ra tư liệu sinh hoạt",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 155,

    title: "Khu vực I của nền sản xuất xã hội là khu vực:",
  },
  {
    idx: 156,
    answers: [
      {
        isKey: false,
        title: "Trụ sở, văn phòng",
        idx: 0,
      },
      {
        title: "Công trình phục vụ sản xuất",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Chất phụ gia",
        isKey: false,
      },
      {
        idx: 3,
        title: "A và B",
        isKey: true,
      },
      {
        title: "B và C",
        isKey: false,
        idx: 4,
      },
    ],
    title: "Có thể xếp bộ phận nào sau đây vào thành phần tư bản cố định:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Tỷ lệ nghịch với tốc độ chu chuyển của tư bản",
        isKey: false,
      },
      {
        title: "Không phụ thuộc tốc độ chu chuyển của tư bản",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tỷ lệ thuận với tốc độ chu chuyển của tư bản",
      },
    ],
    idx: 157,
    title: "Khối lượng GTTD:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tổng GTTD của cả hai khu vực I và II",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tổng nhu cầu TLSX của hai khu vực I và II",
      },
      {
        idx: 2,
        title: "Tổng giá trị sản xuất của cả hai khu vực I và II",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tổng nhu cầu TLTD của cả hai khu vực I và II",
      },
      {
        isKey: false,
        title: "Tổng giá trị mới của cả hai khu vực I và II",
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tổng sản phẩm xã hội (TSPXH) là:",

    idx: 158,
  },
  {
    title: "Khối lượng GTTD:",
    idx: 159,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tỷ lệ thuận với thời gian chu chuyển của tư bản",
      },
      {
        isKey: true,
        idx: 1,
        title: "Tỷ lệ nghịch với thời gian chu chuyển của tư bản",
      },
      {
        isKey: false,
        title: "Không phụ thuộc thời gian chu chuyển của tư bản",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tái sản xuất theo quy mô thay đổi qua từng năm",
      },
      {
        isKey: true,
        title: "Tái sản xuất theo quy mô không thay đổi qua từng năm",
        idx: 1,
      },
      {
        title: "Tái sản xuất để duy trì quy mô tối thiểu",
        idx: 2,
        isKey: false,
      },
    ],
    title: "Tái sản xuất giản đơn là:",

    idx: 160,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Khối lượng GTTD:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tỷ lệ thuận với số vòng chu chuyển của tư bản",
      },
      {
        isKey: false,
        title: "Không phụ thuộc số vòng chu chuyển của tư bản",
        idx: 1,
      },
      {
        title: "Tỷ lệ nghịch với số vòng chu chuyển của tư bản",
        idx: 2,
        isKey: false,
      },
    ],

    idx: 161,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 162,
    answers: [
      {
        idx: 0,
        title: "Giảm thời gian vận chuyển",
        isKey: false,
      },
      {
        title: "Giảm thời gian mua – bán trực tiếp",
        isKey: false,
        idx: 1,
      },
      {
        title: "Giảm thời gian đóng gói, bảo quản",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "A và B",
      },
      {
        title: "Cả A, B và C",
        idx: 4,
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Để giảm thời gian lưu thông, cần phải:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Không thay đổi hình thái hiện vật",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Trực tiếp sản xuất ra GTTD",
      },
      {
        idx: 2,
        title: "Có thể dịch chuyển vị trí",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Chuyển hết giá trị vào sản phẩm trong quá trình sản xuất",
      },
    ],
    idx: 163,

    title: "Tư bản lưu động là tư bản:",
  },
  {
    idx: 164,
    title: "Có thể xếp bộ phận nào sau đây vào thành phần của tư bản lưu động:",

    answers: [
      {
        isKey: false,
        title: "Dụng cụ đo lường",
        idx: 0,
      },
      {
        title: "Công cụ lao động",
        isKey: false,
        idx: 1,
      },
      {
        title: "Nguyên liệu",
        isKey: true,
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 165,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Tổng giá tri mới của cả hai khu vực I và II",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tổng GTTD của cả hai khu vực I và II",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tổng giá trị tư bản khả biến của cả hai khu vực I và II",
      },
      {
        idx: 3,
        title: "Tổng nhu cầu tiêu dùng của cả hai khu vực I và II",
        isKey: false,
      },
      {
        title: "Tổng giá trị TLSX của cả hai khu vực I và II",
        idx: 4,
        isKey: false,
      },
    ],
    title: "Thu nhập quốc dân (TNQD) là:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Bằng với nhu cầu về TLSX của khu vực II",
        isKey: true,
      },
      {
        isKey: false,
        title: "Bằng với GTTD của khu vực II",
        idx: 1,
      },
      {
        title: "Bằng với nhu cầu TLSH của khu vực II",
        idx: 2,
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 166,

    title: "Trong TSXGĐ, nhu cầu về TLSH của khu vực I phải:",
  },
  {
    title: "Khu vực II của nền sản xuất xã hội là khu vực:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 167,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Sản xuất ra tư liệu sinh hoạt",
      },
      {
        isKey: false,
        title: "Sản xuất ra máy móc",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sản xuất ra tư bản khả biến",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "I (V + M) &gt; II (V + M)",
      },
      {
        title: "I (V + M) &gt; II (C)",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "I (C) = II (V + M)",
      },
      {
        isKey: false,
        idx: 3,
        title: "I (C + V ) &gt; II (C + V)",
      },
      {
        title: "I (V + M ) &lt; II (C)",
        isKey: false,
        idx: 4,
      },
    ],

    title: "Điều kiện cơ bản của TSXMR là:",
    idx: 168,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Nhiêu liệu",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Vật liệu và vật liệu phụ",
      },
      {
        idx: 2,
        title: "Nguyên liệu",
        isKey: false,
      },
      {
        title: "Sức lao động",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        title: "Máy móc, thiết bị và nhà xưởng",
        isKey: true,
      },
    ],
    idx: 169,
    title: "Có thể xếp bộ phận nào sau đây vào thành phần của tư bản cố định:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Tỷ lệ nghịch với thời gian chu chuyển",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Tỷ lệ thuận với thời gian chu chuyển",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tỷ lệ nghịch với tốc độ chu chuyển",
      },
    ],

    title: "Số vòng chu chuyển của tư bản:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 170,
  },
  {
    idx: 171,
    answers: [
      {
        isKey: false,
        title: "Giảm thời gian lao động",
        idx: 0,
      },
      {
        idx: 1,
        title: "Giảm thời gian gián đoạn lao động",
        isKey: false,
      },
      {
        title: "Giảm thời gian dự trữ sản xuất",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Cả A, B và C",
      },
      {
        isKey: false,
        title: "A và B",
        idx: 4,
      },
    ],

    title: "Để giảm thời gian sản xuất, cần phải:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Trong khu vực II, có thể thực hiện trao đổi nội bộ đối với phần giá trị ứng với:",
    idx: 172,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Nhu cầu tư bản bất biến",
      },
      {
        idx: 1,
        isKey: true,
        title: "Nhu cầu tư liệu sinh hoạt",
      },
      {
        idx: 2,
        title: "Nhu cầu TLSX",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Bằng với nhu cầu về TLSX của khu vực I",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Bằng với nhu cầu về TLSH của khu vực I",
      },
      {
        idx: 2,
        title: "Bằng với GTTD của khu vực I",
        isKey: false,
      },
    ],
    title: "Trong TSXMR, nhu cầu về TLSX của khu vực II phải:",

    idx: 173,
  },
  {
    title: "Tái sản xuất mở rộng là tái sản xuất trong đó:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 174,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "GTTD được tiêu dùng hết",
      },
      {
        idx: 1,
        title: "Tổng giá trị sản xuất và quy mô sử dụng tăng lên",
        isKey: true,
      },
      {
        isKey: false,
        title: "Chỉ có quy mô sử dụng SLĐ tăng lên",
        idx: 2,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "I (C + M) = II (C + M)",
      },
      {
        title: "I (C) = II (C)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "I (C + V) = II (V + M)",
      },
      {
        isKey: true,
        idx: 3,
        title: "I (V + M ) = II (C)",
      },
      {
        isKey: false,
        title: "I (V + M) = II (V + M)",
        idx: 4,
      },
    ],

    title: "Điều kiện cơ bản của TSXGĐ là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 175,
  },
  {
    idx: 176,
    title: "Tư bản cố định là tư bản:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Chuyển giá trị từng phần vào sản phẩm trong quá trình sản xuất",
        idx: 0,
      },
      {
        title: "Có giá trị không đổi",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Không thay đổi hình thái trong sản xuất",
        idx: 2,
      },
      {
        title: "Không dịch chuyển vị trí",
        idx: 3,
        isKey: false,
      },
      {
        title: "A và C",
        isKey: true,
        idx: 4,
      },
    ],
  },
  {
    title: "Có thể xếp bộ phận nào sau đây vào thành phần của tư bản lưu động:",

    idx: 177,
    answers: [
      {
        title: "Vật liệu phụ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Chất phụ gia",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sức lao động",
      },
      {
        isKey: true,
        idx: 3,
        title: "A, B và C",
      },
      {
        idx: 4,
        isKey: false,
        title: "Không có bộ phận nào",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 178,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Khối lượng tư bản ứng trước:",
    answers: [
      {
        title: "Tỷ lệ thuận với tốc độ chu chuyển của tư bản",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Không phụ thuộc tốc độ chu chuyển của tư bản",
        idx: 1,
      },
      {
        isKey: true,
        title: "Tỷ lệ nghịch với tốc độ chu chuyển của tư bản",
        idx: 2,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: true,
        title: "Nhu cầu TLSX",
        idx: 0,
      },
      {
        title: "Nhu cầu tư liệu tiêu dùng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nhu cầu tư bản khả biến",
      },
    ],
    title:
      "Trong khu vực I, có thể thực hiện trao đổi nội bộ đối với phần giá trị ứng với:",
    idx: 179,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Giá trị tư bản",
        idx: 0,
      },
      {
        isKey: true,
        title: "Giá trị",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giá cả",
      },
    ],

    idx: 180,
    title:
      "Trong điều kiện có lợi nhuận bình quân, giá cả sản xuất là sự chuyển hóa của:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Giả sử có 2 ngành sản xuất cùng đầu tư một số tư bản bằng 1.000. Tỷ suất lợi nhuận đạt được ở ngành I là 20 %, ở ngành II là 30 %. Tỷ suất lợi nhuận bình quân của tư bản bằng:",

    idx: 181,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "10%",
      },
      {
        isKey: true,
        title: "25%",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "50%",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title:
      "Nhận định sau đúng hay sai: “Tư bản cho vay là một loại hàng hóa đặc biệt”.",
    idx: 182,
    answers: [
      {
        title: "Đúng",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Sai",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Địa tô phản ánh mối quan hệ của các giai cấp:",
    answers: [
      {
        isKey: false,
        title: "Chủ tư bản và lao động làm thuê",
        idx: 0,
      },
      {
        title: "Chủ đất và lao động làm thuê",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chủ đất và chủ tư bản",
      },
      {
        isKey: true,
        idx: 3,
        title: "Cả chủ đất, chủ tư bản và lao động làm thuê",
      },
    ],
    idx: 183,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sai",
      },
      {
        idx: 1,
        isKey: true,
        title: "Đúng",
      },
    ],
    idx: 184,
    title:
      "Nhận định sau đúng hay sai: “Lợi nhuận thương nghiệp có nguồn gốc từ sản xuất”.",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Lợi nhuận thương nghiệp có được là do:",
    idx: 185,
    answers: [
      {
        title: "Mua rẻ, bán đắt",
        idx: 0,
        isKey: false,
      },
      {
        title: "Lưu thông mang lại",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Tư bản sản xuất chia lại",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Giá cả hàng hóa thấp hơn giá trị của nó",
        isKey: false,
        idx: 0,
      },
      {
        title: "Giá cả hàng hóa cao hơn giá trị của nó",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Giá cả hàng hóa bằng giá trị của nó",
      },
    ],
    title: "Lợi nhuận và GTTD bằng nhau trong trường hợp:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 186,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 187,
    title:
      "Nhận định sau đúng hay sai: “Lợi nhuận bình quân là lợi nhuận là lợi nhuận được tính căn cứ theo tỷ suất lợi nhuận bình quân”.",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Đúng",
      },
      {
        isKey: false,
        title: "Sai",
        idx: 1,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Một số người có tư bản nhàn rỗi",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Một số người có nhu cầu về tư bản để sản xuất, kinh doanh",
        isKey: false,
      },
      {
        title: "Có sự vận động của Chính phủ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "A và B",
        isKey: true,
      },
      {
        title: "A, B và C",
        isKey: false,
        idx: 4,
      },
    ],
    idx: 188,

    title: "Điều kiện xuất hiện tư bản cho vay là:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 189,
    title: "Địa tô chênh lệch II phát sinh do:",
    answers: [
      {
        idx: 0,
        title: "Kết quả của việc đầu tư cải tạo đất",
        isKey: true,
      },
      {
        idx: 1,
        title: "Vị trí thuận lợi của đất",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Độ màu mỡ tự nhiên của đất",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 190,
    title: "Địa tô phát sinh từ:",
    answers: [
      {
        idx: 0,
        title: "Quyền lực của người chủ đất",
        isKey: false,
      },
      {
        idx: 1,
        title: "Giá trị của đất",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Sản xuất nông nghiệp",
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Tỷ suất lợi nhuận có xu hướng giảm theo thời gian cùng với việc mở rộng tích lũy tư bản.",
    answers: [
      {
        title: "Nguyên nhân là do:",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tư bản đầu tư ngày càng giảm",
      },
      {
        idx: 2,
        title: "Đầu tư vào tư bản bất biến ngày càng nhiều một cách tương đối",
        isKey: false,
      },
      {
        idx: 3,
        title: "Đầu tư vào tư bản khả biến ngày càng ít một cách tương đối",
        isKey: false,
      },
      {
        title: "A và B",
        isKey: false,
        idx: 4,
      },
      {
        isKey: true,
        idx: 5,
        title: "B và C",
      },
    ],
    idx: 191,
  },
  {
    title: "Tư bản thương nghiệp hoạt động trong lĩnh vực:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Lưu thông",
        isKey: true,
        idx: 0,
      },
      {
        title: "Sản xuất",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Công nghiệp",
        idx: 2,
      },
    ],
    idx: 192,
  },
  {
    answers: [
      {
        title: "Đúng",
        isKey: true,
        idx: 0,
      },
      {
        title: "Sai",
        idx: 1,
        isKey: false,
      },
    ],

    idx: 193,
    title:
      "Nhận định sau đúng hay sai: “Lợi tức là giá cả của hàng hóa tư bản cho vay”.",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 194,
    answers: [
      {
        idx: 0,
        title: "Chủ tư bản kinh doanh nông nghiệp",
        isKey: false,
      },
      {
        title: "Lao động làm thuê",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chủ đất",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "B và C",
      },
      {
        isKey: true,
        title: "A, B và C",
        idx: 4,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Trong nông nghiệp tồn tại các giai cấp:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 195,
    title: "Tư bản cho vay biểu hiện dưới hình thức nào sau đây:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tín dụng thương mại",
      },
      {
        isKey: false,
        idx: 1,
        title: "Tín dụng ngân hàng",
      },
      {
        isKey: false,
        idx: 2,
        title: "Mua – bán chứng khoán",
      },
      {
        title: "A và B",
        isKey: true,
        idx: 3,
      },
      {
        idx: 4,
        title: "A, B và C",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 196,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Thấp hơn GTTD",
      },
      {
        idx: 1,
        title: "Cao hơn GTTD",
        isKey: false,
      },
      {
        title: "Bằng GTTD",
        idx: 2,
        isKey: false,
      },
    ],
    title: "Khi cung hàng hóa lớn hơn cầu hàng hóa, lợi nhuận thu được sẽ:",
  },
  {
    idx: 197,

    title:
      "Nhận định sau đúng hay sai: “Tỷ suất lợi nhuận thường lớn hơn hoặc bằng tỷ suất GTTD” ?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Sai",
      },
      {
        title: "Đúng",
        isKey: false,
        idx: 1,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Thu lợi nhuận siêu ngạch",
        idx: 0,
      },
      {
        title: "Giảm giá bán lẻ để cạnh tranh",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Tiết kiệm chi phí lưu thông",
        idx: 2,
      },
      {
        title: "A, B và C",
        isKey: true,
        idx: 3,
      },
      {
        title: "A và C",
        idx: 4,
        isKey: false,
      },
    ],
    title: "Tư bản thương nghiệp chu chuyển nhanh có tác dụng:",
    idx: 198,
  },
  {
    title: "Tỷ suất lợi nhuận bình quân hình thành là do:",
    answers: [
      {
        isKey: false,
        title: "Sự thỏa thuận giữa các nhà tư bản với nhau",
        idx: 0,
      },
      {
        isKey: true,
        title: "Cạnh tranh tự do và di chuyển tư bản giữa các ngành khác nhau",
        idx: 1,
      },
      {
        isKey: false,
        title: "Quy luật giá trị tác động",
        idx: 2,
      },
    ],
    idx: 199,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "25.000 đ",
      },
      {
        idx: 1,
        title: "14.000 đ",
        isKey: false,
      },
      {
        title: "11.000 đ",
        isKey: false,
        idx: 2,
      },
    ],
    idx: 200,
    title:
      "Giả sử một cổ phiếu có mệnh giá 10.000 đ, tỷ suất lợi tức 10%. Nếu lãi suất ngân hàng là 4% thì cổ phiếu này có thể mua – bán theo giá:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Tỷ suất lợi nhuận là tỷ lệ phần trăm khi so sánh lợi nhuận với:",
    answers: [
      {
        isKey: true,
        title: "Toàn bộ tư bản",
        idx: 0,
      },
      {
        idx: 1,
        title: "Tư bản khả biến",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tư bản bất biến",
      },
    ],
    idx: 201,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Giá cả sản xuất bằng:",

    idx: 202,
    answers: [
      {
        isKey: false,
        title: "Giá cả bình quân của sản xuất",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chi phí tư bản cộng lợi nhuận của ngành",
      },
      {
        title: "Chi phí tư bản cộng lợi nhuận bình quân",
        idx: 2,
        isKey: true,
      },
    ],
  },
  {
    title: "Chức năng của tư bản cho vay là:",
    idx: 203,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Kinh doanh tiền tệ",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kinh doanh dịch vụ",
      },
      {
        isKey: false,
        title: "Kinh doanh hàng hóa",
        idx: 2,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 204,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lợi nhuận siêu ngạch trên đất trung bình",
      },
      {
        idx: 1,
        isKey: false,
        title: "Lợi nhuận siêu ngạch trên đất tốt",
      },
      {
        title:
          "Lợi nhuận siêu ngạch của nông nghiệp so với lợi nhuận bình quân chung",
        isKey: true,
        idx: 2,
      },
    ],
    title: "Lượng địa tô tuyệt đối phụ thuộc vào:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sai",
      },
      {
        isKey: true,
        title: "Đúng",
        idx: 1,
      },
    ],
    title:
      "Nhận định sau đúng hay sai: “Tỷ suất lợi nhuận là sự chuyển hóa của tỷ suất GTTD” ?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 205,
  },
  {
    idx: 206,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        title: "20%",
        idx: 0,
        isKey: true,
      },
      {
        title: "15%",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "25%",
      },
    ],
    title:
      "Một tư bản sản xuất bỏ vốn 800, sản xuất được hàng hóa có giá trị 1.000. Một tư bản thương nghiệp bỏ vốn 200 để bán hàng cho tư bản sản xuất. Tư bản sản xuất bán hàng theo giá 960 cho tư bản thương nghiệp thì tỷ suất lợi nhuận bình quân của cả hai tư bản là:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tham dự việc chia phần lợi nhuận với tư bản sản xuất",
      },
      {
        title: "Tham gia bình quân hóa tỷ suất lợi nhuận với tư bản sản xuất",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Thu được lợi nhuận nhiều hơn tư bản sản xuất",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "A, B và C",
      },
      {
        isKey: true,
        title: "A và B",
        idx: 4,
      },
    ],
    idx: 207,
    title: "Tư bản thương nghiệp:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Đất tốt",
        isKey: false,
      },
      {
        title: "Đất xấu",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đất trung bình",
      },
      {
        idx: 3,
        isKey: false,
        title: "A và B",
      },
      {
        isKey: true,
        idx: 4,
        title: "A và C",
      },
    ],
    title: "Địa tô chênh lệch là địa tô thu được trên đất nào sau đây:",
    idx: 208,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Cao hơn GTTD",
      },
      {
        isKey: false,
        idx: 1,
        title: "Bằng GTTD",
      },
      {
        isKey: false,
        idx: 2,
        title: "Thấp hơn GTTD",
      },
    ],
    idx: 209,

    title: "Khi cầu hàng hóa lớn hơn cung hàng hóa, lợi nhuận thu được sẽ:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Giá mua quyền sử dụng tư bản cho vay",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Giá mua quyền sở hữu tư bản cho vay",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Giá thỏa thuận giữa người cho vay và người môi giới",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 210,
    title: "Giá cả của tư bản cho vay là:",
  },
  {
    answers: [
      {
        title: "Con đẻ của toàn bộ tư bản",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Con đẻ của tư bản khả biến",
      },
      {
        title: "Con đẻ của tư bản bất biến",
        idx: 2,
        isKey: false,
      },
    ],
    idx: 211,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Lợi nhuận được coi là:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Do hiệu quả của tư bản đầu tư",
      },
      {
        title: "Cải tạo đất đai",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Do điều kiện tự nhiên (độ màu mỡ, vị trí xa gần) của đất",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 212,
    title: "Địa tô chênh lệch I phát sinh do:",
  },
  {
    idx: 213,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Tỷ suất lợi nhuận bình quân",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Thời hạn vay",
        idx: 1,
      },
      {
        title: "Độ rủi ro",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "A và B",
      },
      {
        title: "A, B và C",
        idx: 4,
        isKey: true,
      },
    ],
    title: "Tỷ suất lợi tức phụ thuộc:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Làm giảm giá trị của hàng hóa",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Không tạo ra GTTD cho hàng hóa",
        isKey: true,
      },
      {
        isKey: false,
        title: "Tạo ra GTTD cho hàng hóa",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Làm giảm GTTD trong hàng hóa",
      },
    ],
    title: "Tư bản thương nghiệp:",

    idx: 214,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Lợi nhuận siêu ngạch",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lợi nhuận dự tính của đất",
      },
      {
        idx: 2,
        isKey: false,
        title: "Lợi nhuận bình quân",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Về bản chất, địa tô TBCN là:",
    idx: 215,
  },
  {
    idx: 216,
    answers: [
      {
        idx: 0,
        title: "Là phần nâng giá bán của người bán",
        isKey: false,
      },
      {
        isKey: false,
        title: "Là phần thưởng của người mua dành cho người bán",
        idx: 1,
      },
      {
        isKey: true,
        title: "Là một phần của GTTD tạo ra trong sản xuất",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Lợi nhuận thương nghiệp:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đất tốt",
      },
      {
        title: "Đất xấu",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Đất trung bình",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "A và B",
      },
      {
        isKey: true,
        idx: 4,
        title: "A, B và C",
      },
    ],
    idx: 217,
    title: "Địa tô tuyệt đối là địa tô thu được trên đất nào sau đây:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        isKey: false,
        title: "Người môi giới cho vay",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Người cho vay",
      },
      {
        title: "Người đi vay",
        idx: 2,
        isKey: false,
      },
    ],
    idx: 218,
    title: "Quyền sở hữu tư bản cho vay thuộc về ai?",
  },
  {
    idx: 219,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cao hơn GTTD",
      },
      {
        idx: 1,
        title: "Thấp hơn GTTD",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Bằng GTTD",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Khi giá cả hàng hóa thấp hơn giá trị, lợi nhuận sẽ:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "1.240",
      },
      {
        idx: 1,
        title: "1.120",
        isKey: false,
      },
      {
        idx: 2,
        title: "1.200",
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 220,
    title:
      "Tư bản sản xuất bỏ vốn 1.000 đầu tư theo cơ cấu: 800 C + 200 V + 240 M. Tư bản thương nghiệp bỏ vốn 200 để bán hàng cho tư bản sản xuất. Để đạt tỷ suất lợi nhuận bình quân 20%, giá bán buôn của tư bản sản xuất cho tư bản thương nghiệp phải bằng:",
  },
  {
    answers: [
      {
        title: "Đúng",
        idx: 0,
        isKey: true,
      },
      {
        title: "Sai",
        idx: 1,
        isKey: false,
      },
    ],
    idx: 221,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nhận định sau đúng hay sai: “Không có sự san bằng tỷ suất lợi nhuận trong nông nghiệp là do sự cản trở của độc quyền sở hữu và độc quyền kinh doanh đất”.",
  },
  {
    idx: 222,
    answers: [
      {
        title: "Đúng",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Sai",
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nhận định sau đúng hay sai: “Lợi nhuận thương nghiệp độc lập với GTTD”.",
  },
  {
    answers: [
      {
        idx: 0,
        title: "10%",
        isKey: false,
      },
      {
        title: "35%",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "70%",
      },
    ],
    idx: 223,

    title:
      "Giả sử 2 ngành sản xuất cùng đầu tư một lượng tư bản bằng 1.000. Ngành I thu được lợi nhuận bằng 300, ngành II thu được lợi nhuận bằng 400. Tỷ suất lợi nhuận bình quân bằng:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Tỷ suất lợi tức là tỷ lệ phần trăm khi so sánh:",
    answers: [
      {
        isKey: false,
        title: "Lợi tức và tư bản ứng trước",
        idx: 0,
      },
      {
        title: "Lợi tức và lợi nhuận bình quân",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Lợi tức và GTTD",
      },
      {
        title: "Lợi tức và tư bản cho vay",
        isKey: true,
        idx: 3,
      },
      {
        isKey: false,
        title: "Lợi tức và lợi nhuận sản xuất",
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 224,
  },
  {
    idx: 225,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Phần thưởng của người mua dành cho người bán",
        idx: 0,
        isKey: false,
      },
      {
        title: "Phần mà người bán cộng thêm vào giá cả hàng hóa",
        idx: 1,
        isKey: false,
      },
      {
        title: "Chênh lệch giữa giá bán hàng hóa và chi phí sản xuất tư",
        idx: 2,
        isKey: true,
      },
    ],
    title: "Lợi nhuận là:",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Quyền sở hữu tách rời quyền sử dụng",
      },
      {
        title: "GTSD không xác định",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Mua – bán dựa trên GTSD",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 226,
    title: "Tính chất đặc biệt của hàng hóa tư bản cho vay là:",
  },
  {
    title: "Lượng lợi nhuận:",
    answers: [
      {
        isKey: false,
        title: "Luôn lớn hơn lượng GTTD",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Luôn luôn bằng lượng GTTD",
      },
      {
        idx: 2,
        isKey: true,
        title: "Có thể không ăn khớp với lượng GTTD",
      },
      {
        title: "Không có quan hệ gì với lượng GTTD",
        idx: 3,
        isKey: false,
      },
      {
        idx: 4,
        title: "Luôn nhỏ hơn lượng GTTD",
        isKey: false,
      },
    ],
    idx: 227,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Nhận định sau đúng hay sai: “Đất đai không phải là hàng hóa và không có giá trị vì không phải là sản phẩm của lao động”.",
    idx: 228,
    answers: [
      {
        isKey: false,
        title: "Sai",
        idx: 0,
      },
      {
        title: "Đúng",
        isKey: true,
        idx: 1,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Tư bản thương nghiệp:",
    idx: 229,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Không tham gia sản xuất hàng hóa",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Không tạo thêm giá trị cho hàng hóa",
      },
      {
        title: "Làm tăng thêm giá trị cho hàng hóa",
        isKey: false,
        idx: 2,
      },
      {
        title: "A và B",
        idx: 3,
        isKey: true,
      },
      {
        idx: 4,
        title: "A và C",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tỷ lệ lao động sống so với lao động quá khứ",
      },
      {
        idx: 1,
        title: "Mức độ sinh lợi của tư bản",
        isKey: true,
      },
      {
        title: "Mức độ bóc lột lao động làm thuê",
        isKey: false,
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Tỷ suất lợi nhuận phản ánh:",
    idx: 230,
  },
  {
    idx: 231,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Nguồn gốc thật sự của địa tô là:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "SLĐ làm thuê",
      },
      {
        title: "Tư bản đầu tư của người chủ tư bản",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Năng lực của đất đai",
      },
    ],
  },
  {
    idx: 232,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Kinh doanh dịch vụ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Kinh doanh yếu tố sản xuất",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Kinh doanh hàng hóa",
      },
    ],
    title: "Chức năng của tư bản thương nghiệp là:",
  },
  {
    title: "Quyền sử dụng tư bản cho vay thuộc về ai?",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Người môi giới cho vay",
      },
      {
        title: "Người cho vay",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Người đi vay",
      },
    ],
    idx: 233,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Do mua rẻ bán đắt mà có",
      },
      {
        isKey: true,
        idx: 1,
        title: "Có nguồn gốc từ sản xuất",
      },
      {
        isKey: false,
        title: "Được sinh ra trong lưu thông",
        idx: 2,
      },
    ],
    idx: 234,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Lợi nhuận:",
  },
  {
    title: "Lượng địa tô chênh lệch phụ thuộc vào:",

    idx: 235,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Lợi nhuận siêu ngạch của đất trung bình",
      },
      {
        idx: 1,
        isKey: true,
        title: "Lợi nhuận siêu ngạch của đất tốt so với đất xấu hơn",
      },
      {
        isKey: false,
        title: "Lợi nhuận siêu ngạch của nông nghiệp so với công nghiệp",
        idx: 2,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Chủ tư bản kinh doanh nông nghiệp",
        idx: 0,
      },
      {
        isKey: false,
        title: "Lao động làm thuê",
        idx: 1,
      },
      {
        idx: 2,
        title: "Chủ đất",
        isKey: false,
      },
      {
        isKey: false,
        title: "B và C",
        idx: 3,
      },
      {
        title: "A, B và C",
        idx: 4,
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Trong nông nghiệp tồn tại các giai cấp:",
    idx: 236,
  },
  {
    idx: 237,
    title:
      "Tư bản sản xuất chia lại lợi nhuận cho tư bản thương nghiệp bằng cách:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Bán hàng theo giá bán buôn",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Phân chia theo tỷ lệ thỏa thuận",
        isKey: false,
      },
      {
        isKey: false,
        title: "Chuyển tiền mặt",
        idx: 2,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 238,
    title: "Tư bản cho vay là tư bản hoạt động trong lĩnh vực:",

    answers: [
      {
        isKey: false,
        title: "Sản xuất",
        idx: 0,
      },
      {
        title: "Lưu thông",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Công nghiệp",
      },
    ],
  },
  {
    answers: [
      {
        title: "Tỷ lệ thuận với địa tô",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tỷ lệ thuận với lãi suất tiền gửi",
        idx: 1,
        isKey: false,
      },
      {
        title: "Tỷ lệ nghịch với lãi suất tiền gửi",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "A và C",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 239,
    title: "Giá cả đất đai:",
  },
  {
    title: "Thực chất của lợi nhuận là:",
    idx: 240,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sự chuyển hóa của giá trị SLĐ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Sự chuyển hóa của tiền công của chủ tư bản",
      },
      {
        isKey: true,
        title: "Sự chuyển hóa của GTTD trong thực tế",
        idx: 2,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 241,

    answers: [
      {
        title: "Sản xuất",
        isKey: true,
        idx: 0,
      },
      {
        title: "Lưu thông",
        idx: 1,
        isKey: false,
      },
      {
        title: "Khả năng tự nhiên của tiền",
        idx: 2,
        isKey: false,
      },
    ],
    title: "Lợi tức cho vay có nguồn gốc từ:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Tư bản thương nghiệp là tư bản:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Là một bộ phận của tư bản công nghiệp",
        idx: 0,
        isKey: false,
      },
      {
        title: "Hình thành độc lập",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xuất hiện trước tư bản công nghiệp",
      },
      {
        idx: 3,
        isKey: false,
        title: "Được tách ra từ tư bản công nghiệp",
      },
      {
        idx: 4,
        title: "A và D",
        isKey: true,
      },
    ],
    idx: 242,
  },
  {
    idx: 243,
    answers: [
      {
        idx: 0,
        title: "Tiết kiệm chi phí lưu thông chung của xã hội",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Thúc đẩy tuần hoàn và chu chuyển của tư bản sản xuất",
      },
      {
        isKey: false,
        idx: 2,
        title: "Làm tăng giá trị của hàng hóa",
      },
      {
        idx: 3,
        title: "A, B và C",
        isKey: false,
      },
      {
        title: "A và B",
        idx: 4,
        isKey: true,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Chu chuyển nhanh của tư bản thương nghiệp có tác động:",
  },
  {
    idx: 244,
    answers: [
      {
        title: "10%",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "10 lần",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "100%",
      },
    ],

    title:
      "Một người cho vay 1.000 và đòi người vay phải trả lợi tức 100. Tỷ suất lợi tức là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Lợi nhuận siêu ngạch tồn tại phổ biến trong nông nghiệp vì:",
    idx: 245,
    answers: [
      {
        title: "Độc quyền của người thuê đất",
        isKey: false,
        idx: 0,
      },
      {
        title: "Độc quyền của chủ đất",
        idx: 1,
        isKey: false,
      },
      {
        title: "Cả 2 phương án trên",
        idx: 2,
        isKey: true,
      },
    ],
  },
  {
    idx: 246,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Do khát vọng giải phóng dân tộc",
      },
      {
        idx: 1,
        title:
          "Là kết quả của sự thâm nhập Chủ nghĩa Marx - Lenin vào phong trào công nhân và phong trào yêu nước chân chính",
        isKey: true,
      },
      {
        isKey: false,
        title: "Do phong trào yêu nước phát triển mạnh mẽ",
        idx: 2,
      },
      {
        isKey: false,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],
    title: "Ở Việt Nam, Đảng cộng sản ra đời",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 247,
    title: "Đảng cộng sản là",
    answers: [
      {
        title: "Sự kết hợp của Chủ nghĩa Marx vào phong trào công nhân",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Là nhân tố đảm bảo thực hiện thắng lợi sứ mệnh lịch sử của giai cấp công nhân",
      },
      {
        isKey: false,
        title: "Biểu hiện sự trưởng thành của giai cấp công nhân",
        idx: 2,
      },
      {
        title: "Các phương án đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: "quá trình phát triển của LLSX có tính xã hội hóa ngày càng cao",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "thành phần kinh tế tư bản tư nhân",
      },
      {
        isKey: false,
        idx: 2,
        title: "quá trình phát triển của nền công nghiệp cơ khí",
      },
      {
        idx: 3,
        isKey: false,
        title: "quá trình phát triển của xã hội",
      },
    ],
    idx: 248,
    title:
      "Hãy chọn 1 cụm từ phù hợp để hoàn chỉnh câu sau: “Giai cấp công nhân là một tập đoàn xã hội ổn định, hình thành và phát triển cùng với ………, trực tiếp và gián tiếp tham gia vào quá trình sản xuất và tái sản xuất ra của cải xã hội.”",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 249,
    title:
      "Điều kiện chủ quan quyết định nhất đối với thắng lợi của Cách mạng XHCN là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        title: "Liên minh giữa công nhân, nông dân và trí thức",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Mâu thuẫn giữa LLSX và QHSX",
        isKey: false,
      },
      {
        idx: 2,
        title: "Sự xuất hiện của Đảng cộng sản trong phong trào công nhân",
        isKey: true,
      },
      {
        title: "Mâu thuẫn giữa tư sản và vô sản đến đỉnh điểm",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 250,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Về vị trí trong QHSX TBCN, giai cấp công nhân là",
    answers: [
      {
        idx: 0,
        title: "Là những người không có TLSX",
        isKey: false,
      },
      {
        title:
          "Phải bán sức lao động của mình cho nhà tư bản và bị bóc lột giá trị thặng dư",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Là giai cấp đối kháng với giai cấp tư sản",
      },
      {
        isKey: true,
        idx: 3,
        title: "Các phương án đều đúng",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thành lập nhà nước chuyên chính vô sản",
      },
      {
        idx: 1,
        title: "Xác lập vai trò lãnh đạo của giai cấp công nhân",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Xóa bỏ giai cấp, xóa bỏ tận gốc chế độ người bóc lột người, giải phóng nhân loại",
        idx: 2,
      },
      {
        title: "Xác lập vai trò lãnh đạo của Đảng cộng sản",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Mục tiêu Sứ mệnh lịch sử của giai cấp công nhân là gì?",
    idx: 251,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 252,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Trên cơ sở thực tiễn cách mạng, lí luận khoa học của Chủ nghĩa Marx – Lenin đưa ra đường lối chiến lược sách lược đúng đắn",
      },
      {
        idx: 1,
        title:
          "Tuyên truyền giác ngộ giai cấp công nhân và nhân dân lao động – biến lí luận cách mạng thành thực tiễn cách mạng",
        isKey: false,
      },
      {
        title:
          "Xây dựng lực lượng cách mạng của quần chúng nhân dân lao động dưới sự lãnh đạo của Đảng cộng sản để tiến hành cách mạng XHCN",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Đảng cộng sản lãnh đạo giai cấp công nhân thực hiện Sứ mệnh lịch sử của giai cấp công nhân bằng cách nào?",
  },
  {
    title: "Hình thái kinh tế xã hội CSCN bắt đầu từ khi nào?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 253,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Từ khi Đảng cộng sản ra đời",
      },
      {
        title: "Từ khi chính quyền thuộc về tay giai cấp công nhân",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Từ khi chế độ công hữu về TLSX xuất hiện",
        idx: 2,
      },
      {
        idx: 3,
        title: "Từ khi giai cấp công nhân thực hiện sứ mệnh lịch sử của mình",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Là giai cấp bị áp bức",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Là giai cấp chiếm đa số trong dân cư",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Là giai cấp lao động trong nền sản xuất công nghiệp có trình độ kĩ thuật và công nghệ hiện đại",
      },
      {
        isKey: false,
        idx: 3,
        title: "Là giai cấp thống trị dưới CNTB",
      },
    ],
    title: "Giai cấp công nhân là gì?",

    idx: 254,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Không làm thay đổi bản chất giai cấp công nhân",
      },
      {
        isKey: false,
        title:
          "Làm thay đổi địa vị kinh tế xã hội của giai cấp công nhân trong CNTB",
        idx: 1,
      },
      {
        title: "Đã làm thay đổi bản chất giai cấp công nhân",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Làm thay đổi bản chất của giai cấp tư sản",
        isKey: false,
      },
    ],

    title: "Những thay đổi của giai cấp công nhân ngày nay",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 255,
  },
  {
    answers: [
      {
        title:
          "Giai cấp công nhân phải tập hợp các tầng lớp nhân dân lao động thành lực lượng cách mạng mạnh mẽ để xây dựng thành công Hình thái kinh tế - xã hội CSCN",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Xây dựng thành công Hình thái kinh tế - xã hội CSCN, xóa bỏ tận gốc chế độ người bóc lột người",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Giai cấp công nhân trở thành giai cấp lãnh đạo xã hội",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Giành chính quyền từ tay các giai cấp bóc lột, thiết lập chính quyền của mình",
      },
    ],
    idx: 256,
    title: "Mục tiêu của giai đoạn thứ nhất của cuộc cách mạng XHCN là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 257,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dựa trên cơ sở khoa học của Chủ nghĩa Duy vật lịch sử",
      },
      {
        title:
          "Kết quả phân tích khoa học về sự vận động xã hội theo Học thuyết về hình thái kinh tế xã hội",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Dựa trên sự phân tích khoa học về hình thái kinh tế - xã hội TBCN",
      },
      {
        title: "Tất cả các phương án trên đều đúng",
        isKey: true,
        idx: 3,
      },
    ],

    title:
      "Dự báo của K.Marx và F.Engels về sự ra đời Hình thái kinh tế xã hội cộng sản chủ nghĩa như một xu hướng tất yếu của lịch sử loài người là",
  },
  {
    answers: [
      {
        title: "Là giai cấp tiên tiến nhất thời đại ngày nay",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Là giai cấp có tính cách mạng triệt để nhất",
      },
      {
        isKey: false,
        idx: 2,
        title: "Có bản chất quốc tế",
      },
      {
        isKey: true,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],
    idx: 258,
    title: "Đặc điểm chính trị - xã hội của giai cấp công nhân?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 259,
    title:
      "Ngày nay xu hướng “trí thức hóa” giai cấp công nhân ngày càng tăng là do",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Toàn cầu hóa kinh tế quy định",
      },
      {
        title: "Tiến bộ của khoa học và công nghệ trong LLSX quy định",
        isKey: true,
        idx: 1,
      },
      {
        title: "Sự thay đổi cơ cấu ngành nghề",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Giai cấp tư sản đã thay đổi phương thúc bóc lột",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Mục tiêu của giai đoạn thứ hai của cuộc cách mạng XHCN là:",
    answers: [
      {
        title:
          "Xây dựng thành công Hình thái kinh tế - xã hội CSCN, xóa bỏ tận gốc chế độ người bóc lột người",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Giai cấp công nhân trở thành giai cấp lãnh đạo xã hội",
      },
      {
        title:
          "Giành chính quyền từ tay các giai cấp bóc lột, thiết lập chính quyền của mình",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Giai cấp công nhân phải tập hợp các tầng lớp nhân dân lao động thành lực lượng cách mạng mạnh mẽ để xây dựng thành công Hình thái kinh tế - xã hội CSCN",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 260,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 261,

    title: "Quá trình thực hiện sứ mệnh lịch sử của giai cấp công nhân là",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Quá trình lâu dài diễn ra theo 2 giai đoạn",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Giai đoạn đầu giai cấp công nhân phải tự tổ chức chính đảng của mình, tiến hành cuộc cách mạng giành chính quyền từ tay các giai cấp bóc lột",
      },
      {
        idx: 2,
        title:
          "Giai đoạn thứ hai, giai cấp công nhân thiết lập chính quyền của mình, sử dụng nó làm công cụ để xây dựng CNXH thành công",
        isKey: false,
      },
      {
        title: "Các phương án đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Mục tiêu cuối cùng của Sứ mệnh lịch sử của giai cấp công nhân là gì?",

    idx: 262,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giành chính quyền từ tay giai cấp tư sản",
      },
      {
        idx: 1,
        isKey: false,
        title: "Thiết lập chính quyền của giai cấp công nhân",
      },
      {
        isKey: false,
        title:
          "Xóa bỏ tận gốc chế độ người bóc lột người trên phạm vi toàn thế giới",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Xây dựng thành công Hình thái kinh tế - xã hội cộng sản chủ nghĩa nhằm xóa bỏ tận gốc chế độ người bóc lột người trên phạm vi toàn thế giới",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Là những người không có TLSX",
        idx: 0,
      },
      {
        title:
          "Trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại và có tính xã hội hóa cao",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Là giai cấp đối kháng với giai cấp tư sản",
        idx: 2,
      },
      {
        isKey: false,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],
    idx: 263,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Về phương thức lao động, giai cấp công nhân là",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Ba giai đoạn",
        idx: 0,
        isKey: false,
      },
      {
        title: "Bốn giai đoạn",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Hai giai đoạn",
      },
      {
        isKey: false,
        idx: 3,
        title: "Năm giai đoạn",
      },
    ],

    title:
      "Sự ra đời Hình thái kinh tế xã hội CSCN theo dự báo của Marx và Engels gồm mấy giai đoạn?",
    idx: 264,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Giai cấp công nhân nhận thức được vị trí và vai trò của mình",
        isKey: false,
      },
      {
        idx: 1,
        title: "Tiếp thu lí luận của Chủ nghĩa Marc – Lenin",
        isKey: false,
      },
      {
        title: "Phong trào công nhân là một phong trào chính trị",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Sự ra đời của Đảng cộng sản trong phong trào công nhân",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Trình độ tự giác của giai cấp công nhân thể hiện?",

    idx: 265,
  },
  {
    answers: [
      {
        title: "nguyên nhân",
        idx: 0,
        isKey: false,
      },
      {
        title: "mục tiêu",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "công cụ",
      },
      {
        isKey: false,
        title: "kết quả",
        idx: 3,
      },
    ],
    title:
      "Nhà nước XHCN là …………… để giai cấp công nhân hoàn thành Sứ mệnh lịch sử của mình.",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 266,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 267,
    title: "Giai cấp công nhân vừa là …………… vừa là ………. của Cách mạng XHCN",
    answers: [
      {
        title: "chủ thể/ sản phẩm",
        isKey: false,
        idx: 0,
      },
      {
        title: "giai cấp tiên phong/ lực lượng cơ bản",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "giai cấp lãnh đạo/ động lực chủ yếu",
        idx: 2,
      },
      {
        title: "lực lượng cơ bản/ giai cấp tiền phong",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title: "Thực hiện sứ mệnh lịch sử của giai cấp công nhân",

    answers: [
      {
        idx: 0,
        title: "Là quá trình lâu dài diễn ra theo 2 giai đoạn",
        isKey: false,
      },
      {
        isKey: false,
        title: "Là 1 cuộc cách mạng xã hội",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nhằm mục tiêu xóa bỏ tận gốc chế độ người bóc lột người",
      },
      {
        idx: 3,
        title: "Các phương án đều đúng",
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 268,
  },
  {
    title: "Giai cấp công nhân là giai cấp có tính tổ chức kỉ luật cao vì",
    idx: 269,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        title: "Họ là người bị bóc lột nặng nề nhất",
        isKey: false,
      },
      {
        isKey: false,
        title: "Họ là người lao động tạo ra của cải vật chất cho xã hội",
        idx: 1,
      },
      {
        idx: 2,
        title: "Họ là người lao động trong dây chuyền của nền đại công nghiệp",
        isKey: true,
      },
      {
        isKey: false,
        title: "Họ là người tạo ra giá trị thặng dư",
        idx: 3,
      },
    ],
  },
  {
    idx: 270,
    title:
      "Sứ mệnh lịch sử của giai cấp công nhân xuất hiện một cách ….…….. song để biến khả năng thành hiện thực phải thông qua nhân tố ………… đó là việc thành lập Đảng cộng sản",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "ngẫu nhiên/ tất nhiên",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "chủ quan/ khách quan",
      },
      {
        title: "khách quan/ chủ quan",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "tất nhiên/ ngẫu nhiên",
      },
    ],
  },
  {
    idx: 271,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Xã hội CSCN là giai đoạn ………. của hình thái kinh tế xã hội CSCN. Trong giai đoạn này việc phân phối dựa trên nguyên tắc ……..",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "cao/ làm theo năng lực, hưởng theo nhu cầu",
      },
      {
        isKey: false,
        title: "thấp/ làm theo năng lực, hưởng theo lao động",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "cao/ làm theo năng lực, hưởng theo lao động",
      },
      {
        idx: 3,
        isKey: false,
        title: "thấp/ làm theo năng lực, hưởng theo nhu cầu",
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Họ không có TLSX, muốn tồn tại họ phải bán sức lao động của mình như 1 hàng hóa cho nhà tư bản",
      },
      {
        title: "Họ phải gắn lao động của mình với TLSX của nhà tư bản",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Lao động của họ tạo ra giá trị thặng dư",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Các phương án đều đúng",
      },
    ],
    idx: 272,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Marx gọi giai cấp công nhân là “giai cấp vô sản” vì",
  },
  {
    title:
      "Xã hội XHCN là giai đoạn ………. của hình thái kinh tế xã hội CSCN. Trong giai đoạn này việc phân phối dựa trên nguyên tắc ……..",
    idx: 273,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "cao/ làm theo năng lực, hưởng theo lao động",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "thấp/ làm theo năng lực, hưởng theo nhu cầu",
        isKey: false,
      },
      {
        title: "thấp/ làm theo năng lực, hưởng theo lao động",
        isKey: true,
        idx: 2,
      },
      {
        title: "cao/ làm theo năng lực, hưởng theo nhu cầu",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 274,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giai cấp công nhân",
      },
      {
        idx: 1,
        title: "Sứ mệnh lịch sử của giai cấp công nhân",
        isKey: true,
      },
      {
        idx: 2,
        title: "Chuyên chính vô sản",
        isKey: false,
      },
      {
        isKey: false,
        title: "Xã hội chủ nghĩa",
        idx: 3,
      },
    ],
    title: "Phạm trù cơ bản nhất của chủ nghĩa xã hội khoa học là:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Ngày nay giai cấp công nhân phải bán sức lao động chủ yếu là",
    answers: [
      {
        title: "Lao động chân tay",
        isKey: false,
        idx: 0,
      },
      {
        title: "Lao động trí óc",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Cả lao động chân tay và lao động trí óc với giá trị lao động ngày càng lớn",
        idx: 2,
      },
      {
        isKey: false,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 275,
  },
  {
    idx: 276,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Điền từ còn thiếu vào chỗ trống trong câu sau “Với một Đảng cộng sản chân chính thì sự lãnh đạo của đảng cũng chính là ……………., giai cấp công nhân thực hiện sự lãnh đạo của mình thông qua Đảng cộng sản”",

    answers: [
      {
        isKey: false,
        title: "sự lãnh đạo của số ít đối với số đông",
        idx: 0,
      },
      {
        title: "sự lãnh đạo của giai cấp công nhân",
        idx: 1,
        isKey: true,
      },
      {
        title: "vai trò của lãnh tụ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "sự lãnh đạo tập thể",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Đại diện cho nền đại công nghiệp/ đại diện cho QHSX đương thời",
        isKey: false,
      },
      {
        idx: 1,
        title: "Đại diện cho LLSX tiên tiến/ có lợi ích gắn với PTSX XHCN",
        isKey: true,
      },
      {
        title:
          "Đại diện cho QHSX TBCN / có lợi ích gắn với nền đại công nghiệp",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Đại diện cho LLSX tiên tiến/ đại diện cho QHSX đương thời",
      },
    ],
    title: "Hai thuộc tính cơ bản của giai cấp công nhân là",
    idx: 277,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 278,

    title: "Vai trò của Đảng cộng sản?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Lãnh đạo giai cấp công nhân thực hiện Sứ mệnh lịch sử của mình",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Dựa trên lí luận của Chủ nghĩa Marx – Lenin và thực tiễn cách mạng mà đề ra đường lối, mục tiêu cách mạng đúng đắn",
        isKey: false,
      },
      {
        title:
          "Tuyên truyền, giác ngộ giai cấp công nhân và nhân dân lao động – biến lí luận cách mạng thành phong trào cách mạng",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Các phương án đều đúng",
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        isKey: false,
        title: "Là con đẻ của nền đại công nghiệp",
        idx: 0,
      },
      {
        isKey: false,
        title: "Là những người vô sản",
        idx: 1,
      },
      {
        title: "Là giai cấp cách mạng nhất",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các phương án đều đúng",
      },
    ],
    title: "Dưới CNTB, giai cấp công nhân",
    idx: 279,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Họ là người lao động tạo ra của cải vật chất cho xã hội",
      },
      {
        idx: 1,
        title:
          "Họ là người lao động trong lĩnh vực công nghiệp có trình độ ngày càng hiện đại – gắn với LLSX tiên tiến",
        isKey: true,
      },
      {
        title: "Họ là người tạo ra giá trị thặng dư",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Họ là người bị bóc lột nặng nề nhất",
      },
    ],

    title: "Giai cấp công nhân là giai cấp tiên tiến nhất vì",
    idx: 280,
  },
  {
    idx: 281,
    title: "Về phương thức lao động, công nhân là những người",

    answers: [
      {
        isKey: false,
        title: "Lao đông sản xuất ra của cải vật chất cho xã hội",
        idx: 0,
      },
      {
        title:
          "Trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại và có tính xã hội hóa cao",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Gián tiếp điều khiển máy móc hiện đại",
      },
      {
        title: "Trực tiếp vận hành máy móc thiết bị",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Phong trào công nhân từ khi có Đảng cộng sản chỉ nhằm những mục tiêu kinh tế",
      },
      {
        title:
          "Sự đời của Đảng cộng sản làm cho chủ nghĩa Marx thâm nhập vào phong trào công nhân",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Sự thâm nhập của Chủ nghĩa Marx vào phong trào công nhân dẫn đến sự ra đời của Đảng cộng sản",
        idx: 2,
      },
      {
        isKey: false,
        title: "Đảng cộng sản là liên hiệp của các giai cấp hữu sản",
        idx: 3,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Hãy chọn 1 phương án đúng",
    idx: 282,
  },
  {
    idx: 283,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Xóa bỏ chế độ TBCN",
      },
      {
        title: "Giải phóng giai cấp mình và giải phóng toàn nhân loại",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Xây dựng thành công Hình thái kinh tế - xã hội Cộng sản chủ nghĩa",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các phương án đều đúng",
      },
    ],
    title: "Nội dung Sứ mệnh lịch sử của giai cấp công nhân là gì?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "phong trào yêu nước chân chính",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "phong trào Cần Vương",
      },
      {
        isKey: false,
        title: "phong trào dân chủ",
        idx: 2,
      },
      {
        idx: 3,
        title: "chủ nghĩa yêu nước",
        isKey: false,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Điền từ còn thiếu vào chỗ trống trong câu sau “Đảng cộng sản Việt nam ra đời là sản phẩm của sự kết hợp của chủ nghĩa Marx – Lenin với phong trào công nhân và ………….”",
    idx: 284,
  },
  {
    title:
      "Cách mạng XHCN là ………….. thực hiện sứ mệnh lịch sử của giai cấp công nhân.",
    answers: [
      {
        isKey: false,
        title: "kết quả",
        idx: 0,
      },
      {
        idx: 1,
        title: "mục tiêu",
        isKey: false,
      },
      {
        idx: 2,
        title: "phương thức",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "con đường",
      },
    ],
    idx: 285,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Đường lối cách mạng của đảng cộng sản được xây dựng trên cơ sở nào?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lí luận khoa học của Chủ nghĩa Marx – Lenin",
      },
      {
        title:
          "Nhu cầu của thực tiễn cách mạng ở mỗi nước trong những thời gian nhất đinh",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Lí luận khoa học của Chủ nghĩa Marx – Lenin và nhu cầu thực tiễn cách mạng",
        isKey: true,
      },
      {
        title: "Phương pháp luận khoa học của Chủ nghĩa Marx – Lenin",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 286,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 287,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Cuộc cách mạng XHCN lần đầu tiên nổ ra và thắng lợi ở đâu?",
    answers: [
      {
        isKey: false,
        title: "Việt Nam",
        idx: 0,
      },
      {
        title: "Nga",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Pháp",
      },
      {
        idx: 3,
        isKey: false,
        title: "Trung Quốc",
      },
    ],
  },
  {
    answers: [
      {
        title: "Đường lối, chủ trương",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Hiến pháp, Pháp luật",
        idx: 1,
      },
      {
        title: "Thuyết phục, nêu gương",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tất cả các phương án trên đều đúng",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 288,
    title: "Nhà nước XHCN thực hiện chức năng quản lí xã hội của mình bằng:",
  },
  {
    idx: 289,
    answers: [
      {
        title: "mục tiêu/ động lực/ quá trình xây dựng CNXH",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "nguyên nhân/ kết quả/ quá trình xây dựng CNXH",
      },
      {
        idx: 2,
        isKey: false,
        title: "động lực/ nguyên nhân/ cách mạng XHCN",
      },
      {
        idx: 3,
        isKey: false,
        title: "Các phương án trên đều sai",
      },
    ],

    title:
      "Dân chủ XHCN vừa là .......... vừa là ............... của ..................",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Liên minh về chính trị",
      },
      {
        idx: 1,
        isKey: false,
        title: "Liên minh về kinh tế",
      },
      {
        isKey: false,
        idx: 2,
        title: "Liên minh trong lĩnh vực văn hóa tư tưởng",
      },
      {
        idx: 3,
        isKey: true,
        title: "Các phương án đều đúng",
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nội dung liên minh giữa giai cấp công nhân với nông dân và các tầng lớp lao động khác bao gồm:",
    idx: 290,
  },
  {
    title: "Ở Việt Nam, quá độ lên CNXH bỏ qua chế độ TBCN có nghĩa là",
    idx: 291,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Bỏ qua toàn bộ hình thái kinh tế xã hội TBCN",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bỏ qua QHSX TBCN trong cơ sở hạ tầng",
      },
      {
        isKey: true,
        title: "Bỏ qua vai trò thống trị của giai cấp tư sản trong KTTT",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Các phương án đều sai",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Hệ giá trị phản ánh trình độ tiến bộ xã hội",
      },
      {
        isKey: false,
        title: "Là 1 trong 2 mặt bản chất của nhà nước (Dân chủ/ Chuyên chính)",
        idx: 1,
      },
      {
        title:
          "Là kết quả của cuộc đấu tranh chống áp bức bóc lột, bất công của nhân dân lao động",
        isKey: false,
        idx: 2,
      },
      {
        title: "Các phương án đều đúng",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 292,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Dân chủ là gì?",
  },
  {
    title: "Nguyên nhân sâu xa của cách mạng xã hội chủ nghĩa là:",
    answers: [
      {
        idx: 0,
        title:
          "Mâu thuẫn giữa LLSX có tính xã hội hóa ngày càng cao với QHSX dựa trên sở hữu tư nhân TBCN về TLSX",
        isKey: true,
      },
      {
        title: "Do phong trào công nhân phát triển",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Do sự phát triển của giai cấp công nhân",
        idx: 2,
      },
      {
        title: "Mâu thuẫn giữa tư sản và vô sản",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 293,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 294,
    answers: [
      {
        isKey: false,
        title:
          "Là tổ chức thông qua đó Đảng của giai cấp công nhân thực hiện vai trò lãnh đạo của mình đối với toàn xã hội",
        idx: 0,
      },
      {
        isKey: false,
        title: "Là bộ phận của kiến trúc thượng tầng XHCN",
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Là nhà nước kiểu mới của giai cấp công nhân và nhân dân lao động",
        idx: 2,
      },
      {
        title: "Các phương án đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
    title: "Nhà nước XHCN là gì?",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Là hình thức chuyên chính vô sản được thực hiện trong thời kì quá độ lên CNXH",
      },
      {
        title: "Là bộ phận của kiến trúc thượng tầng XHCN",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Là nhà nước kiểu mới của giai cấp công nhân và nhân dân lao động",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 295,
    title: "Nhà nước XHCN là gì?",
  },
  {
    idx: 296,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Mục tiêu cuối cùng của cuộc cách mạng XHCN là gì?",
    answers: [
      {
        title: "Xóa bỏ chế độ tư hữu",
        idx: 0,
        isKey: false,
      },
      {
        title: "Giải phóng con người, giải phóng xã hội",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giành chính quyền về tay giai cấp công nhân",
      },
      {
        idx: 3,
        title: "Xóa bỏ chế độ TBCN",
        isKey: false,
      },
    ],
  },
  {
    idx: 297,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Giai cấp tư sản",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Giai cấp công nhân",
      },
      {
        isKey: false,
        title: "Tầng lớp trí thức",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Giai cấp nông dân",
      },
    ],
    title: "Cuộc cách mạng dân chủ tư sản kiểu mới do giai cấp nào lãnh đạo?",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Đó là 1 tất yếu khách quan, nhằm tạo ra lực lượng cách mạng",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Là liên minh giai cấp để tiến tới xóa bỏ giai cấp",
      },
      {
        title: "Đó là liên minh lâu dài trong suốt quá trình cách mạng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các phương án đều đúng",
      },
    ],
    idx: 298,
    title:
      "Để giành thắng lợi trong cách mạng XHCN, giai cấp công nhân phải liên minh chặt chẽ với giai cấp nông dân và các tầng lớp lao động khác vì:",
  },
  {
    answers: [
      {
        title: "Quyền làm chủ của nhân dân",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Một chế độ xã hội trong đó quyền lực thuộc về nhân dân",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Mục tiêu của sự phát triển xã hội",
      },
      {
        isKey: true,
        title: "Các phương án đều đúng",
        idx: 3,
      },
    ],

    title: "Dân chủ XHCN là",
    idx: 299,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 300,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Đảm bảo quyền lãnh đạo của giai cấp công nhân",
      },
      {
        idx: 1,
        title: "Đảm bảo nguyên tắc tự nguyện",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kết hợp đúng đắn các lợi ích",
      },
      {
        title: "Tất cả các phương án đều đúng",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Nguyên tắc nào quyết định sự vững chắc của khối liên minh công nông và các tầng lớp lao động khác là gì?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Đặc trưng nào sau đây không phải là đặc trưng của Nhà nước XHCN?",
    answers: [
      {
        title:
          "Là công cụ thực hiện quyền lực của nhân dân dưới sự lãnh đạo của Đảng cộng sản",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Là Nhà nước nửa nhà nước",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Có 2 mặt bạo lực trấn áp và tổ chức xây dựng trong đó tổ chức và xây dựng là chức năng cơ bản",
      },
      {
        idx: 3,
        title: "Là công cụ chuyên chính của số ít đối với số đông",
        isKey: true,
      },
    ],
    idx: 301,
  },
  {
    answers: [
      {
        title: "Giai cấp công nhân",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Giai cấp tư sản",
      },
      {
        isKey: false,
        idx: 2,
        title: "Giai cấp nông dân",
      },
      {
        isKey: false,
        title: "Tầng lớp trí thức",
        idx: 3,
      },
    ],
    title: "Cuộc cách mạng XHCN do giai cấp nào lãnh đạo?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 302,
  },
  {
    title: "Dân chủ XHCN có cơ sở kinh tế là?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Chế độ công hữu về TLSX chủ yếu",
        isKey: true,
      },
      {
        title: "Sự kết hợp hài hòa các lợi ích",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nhân dân tham gia vào công việc của nhà nước",
      },
      {
        idx: 3,
        title: "Quyền lực nhà nước thuộc về nhân dân",
        isKey: false,
      },
    ],
    idx: 303,
  },
  {
    idx: 304,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title: "Nội dung của cách mạng XHCN trên lĩnh vực chính trị là:",
    answers: [
      {
        isKey: false,
        title: "Phát triển kinh tế, nâng cao đời sống nhân dân",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Đưa nhân dân lao động lên địa vị làm chủ xã hội",
      },
      {
        isKey: false,
        title: "Nâng cao trình độ văn hóa cho nhân dân",
        idx: 2,
      },
      {
        idx: 3,
        title: "Giành chính quyền từ tay các giai cấp thống trị",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Là công cụ thực hiện quyền lực của nhân dân dưới sự lãnh đạo của Đảng cộng sản",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Là chuyên chính cách mạng của giai cấp vô sản",
      },
      {
        idx: 2,
        isKey: false,
        title: "Là nhà nước “nửa nhà nước”",
      },
      {
        idx: 3,
        isKey: true,
        title: "Là công cụ chuyên chính của 1 giai cấp",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nhà nước XHCN giống các nhà nước trước đây trong lịch sử ở đặc trưng nào sau đây",
    idx: 305,
  },
  {
    idx: 306,
    title:
      "Cơ sở khách quan của việc xây dựng khối liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác trong cách mạng XHCN là",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        title: "Họ đều là người lao động, đều bị áp bức bóc lột",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Do sự gắn bó tự nhiên giữa nông nghiệp với công nghiệp và các ngành dịch vụ cho sản xuất",
      },
      {
        idx: 2,
        title: "Họ đều có nhu cầu giải phóng mình và giải phóng xã hội",
        isKey: false,
      },
      {
        idx: 3,
        title: "Các phương án đều đúng",
        isKey: true,
      },
    ],
  },
  {
    title: "Phạm trù dân chủ xuất hiện khi nào?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 307,
    answers: [
      {
        title: "Từ khi có giai cấp công nhân",
        isKey: false,
        idx: 0,
      },
      {
        title: "Từ khi có xã hội loài người",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Từ khi có Đảng cộng sản",
      },
      {
        idx: 3,
        title: "Từ khi có nhà nước",
        isKey: true,
      },
    ],
  },
  {
    title: "Nhà nước XHCN có chức năng nào sau đây?",

    idx: 308,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lãnh đạo toàn bộ xã hội",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Tập hợp, đoàn kết mọi tầng lớp nhân dân tham gia vào sự nghiệp cách mạng XHCN",
      },
      {
        isKey: true,
        title: "Tổ chức và quản lí mọi hoạt động của xã hội bằng pháp luật",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Các phương án đều đúng",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title:
      "Trong 2 giai đoạn của quá trình thực hiện sứ mệnh lịch sử của giai cấp công nhân, chính quyền nhà nước là",
    idx: 309,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Mục tiêu của giai đoạn 2/ công cụ của giai đoạn 1",
      },
      {
        isKey: true,
        idx: 1,
        title: "Mục tiêu của giai đoạn 1/ công cụ của giai đoạn 2",
      },
      {
        title:
          "Đều là phương tiện để tiến hành cách mạng của giai cấp công nhân",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mục tiêu của cả 2 giai đoạn",
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title:
      "Giai cấp công nhân có khả năng đoàn kết với các giai cấp và tầng lớp lao động khác vì:",
    idx: 310,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Giai cấp công nhân là giai cấp đại diện cho PTSX mới của thời đại",
      },
      {
        idx: 1,
        title: "Họ đều mâu thuẫn với giai cấp tư sản",
        isKey: false,
      },
      {
        title: "Họ đều bị bóc lột giá trị thặng dư",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Họ có lợi ích cơ bản thống nhất với nhau",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "Xuất phát từ mong muốn chủ quan của Đảng cộng sản",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Xã hội XHCN là 1 tất yếu của lịch sử",
      },
      {
        title:
          "Là sự lựa chọn phù hợp với quy luật khách quan của lịch sử, phù hợp với lợi ích của nhân dân lao động và lợi ích của dân tộc Việt Nam",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Các phương án đều đúng",
      },
    ],

    idx: 311,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Ở Việt Nam, lựa chọn sự quá độ đi lên CNXH bỏ qua chế độ TBCN là một tất yếu vì:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Đó là 1 tất yếu khách quan, nhằm tạo ra lực lượng cách mạng",
        isKey: false,
      },
      {
        title: "Là liên minh giai cấp để tiến tới xóa bỏ giai cấp",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Đó là liên minh lâu dài trong suốt quá trình cách mạng",
      },
      {
        title: "Các phương án đều đúng",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Để giành thắng lợi trong cách mạng XHCN, giai cấp công nhân phải liên minh chặt chẽ với giai cấp nông dân và các tầng lớp lao động khác vì:",
    idx: 312,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Đảng cộng sản",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Nhà nước XHCN",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các đoàn thể của nhân dân",
      },
      {
        idx: 3,
        title: "Mặt trận tổ quốc",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 313,
    title:
      "Tổ chức nào đóng vai trò trụ cột trong hệ thống chính trị ở nước ta hiện nay?",
  },
  {
    title:
      "Dân chủ XHCN khác căn bản các nền dân chủ trước đây ở đặc điểm nào?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Là nền dân chủ rộng rãi của giai cấp công nhân và nhân dân lao động",
      },
      {
        isKey: false,
        idx: 1,
        title: "Không mang tính giai cấp",
      },
      {
        title: "Thuần túy",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phi lịch sử",
      },
    ],

    idx: 314,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Phương thức xây dựng nền văn hoá xã hội chủ nghĩa là",

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Tăng cường và giữ vững vai trò chủ đạo của hệ tư tưởng của giai cấp công nhân",
      },
      {
        title:
          "Nâng cao vai trò lãnh đạo của Đảng và vai trò quản lí của nhà nước XHCN về văn hóa",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Kế thừa những giá trị truyền thống và tiếp thu những tinh hoa văn hóa nhân loại thông qua hoạt động văn hóa của quần chúng nhân dân",
        idx: 2,
        isKey: false,
      },
      {
        title: "Các phương án đều đúng",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 315,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title:
          "Toàn bộ những giá trị vật chất và tinh thần do con người sáng tạo ra trong quá trình hoạt động thực tiễn",
        idx: 0,
        isKey: false,
      },
      {
        title: "Là biểu hiện trình độ phát triển của xã hội",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Có tính giai cấp, có tính kế thừa",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các phương án đều đúng",
      },
    ],
    idx: 316,
    title: "Văn hóa là gì?",
  },
  {
    title: "Ở Việt nam hiện nay có bao nhiêu dân tộc anh em cùng sinh sống?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 317,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "56",
      },
      {
        idx: 1,
        isKey: false,
        title: "52",
      },
      {
        title: "54",
        isKey: true,
        idx: 2,
      },
      {
        title: "45",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Phan Chu Trinh",
        idx: 0,
      },
      {
        idx: 1,
        title: "Hồ Chí Minh",
        isKey: true,
      },
      {
        idx: 2,
        title: "Lý Thường Kiệt",
        isKey: false,
      },
      {
        idx: 3,
        title: "Phan Bội Châu",
        isKey: false,
      },
    ],
    title:
      "Câu nói “Muốn cứu nước giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản” là của ai?",
    idx: 318,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Tính tích cực của đạo đức tôn giáo",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tính khoa học",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Tính tiêu cực",
        idx: 2,
      },
      {
        title: "Tính hoang đường",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 319,
    title:
      "Luận điểm “Tôn giáo là thuốc phiện của nhân dân” (K.Marx) nói đến tính chất nào của tôn giáo?",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hai khái niệm độc lập",
      },
      {
        title: "Là hai khái niệm tách rời nhau",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Dân tộc là bộ phận của quốc gia",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Đều chỉ những cộng đồng người cụ thể",
      },
    ],
    title: "Theo quan điểm của Chủ nghĩa Marx – Lenin, Dân tộc và quốc gia là",
    idx: 320,
  },
  {
    title:
      "Việc xem xét và giải quyết vấn đề tôn giáo phải phân biệt hai mặt chính trị và tư tưởng của tôn giáo vì",
    answers: [
      {
        isKey: false,
        title:
          "Mặt tư tưởng là biểu hiện nhu cầu tín ngưỡng của nhân dân – cần được tôn trọng",
        idx: 0,
      },
      {
        title:
          "Mặt chính trị của tôn giáo thường bị các thế lực thù địch lợi dụng để chống phá sự nghiệp xây dựng CNXH – cần nhận dạng đúng bản chất của các hiện tượng cụ thể",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Xử lí các vấn đề tôn giáo phải trên cơ sở pháp luật",
      },
      {
        isKey: true,
        title: "Các phương án trên đều đúng",
        idx: 3,
      },
    ],

    idx: 321,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 322,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Tư tưởng “Liên hiệp công nhân tất cả các dân tộc” trong cương lĩnh dân tộc của Chủ nghĩa Marx – Lenin thể hiện",
    answers: [
      {
        title: "Vai trò lãnh đạo của giai cấp công nhân",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Bản chất quốc tế của giai cấp công nhân",
      },
      {
        isKey: false,
        title: "Tính tiên phong của giai cấp công nhân",
        idx: 2,
      },
      {
        idx: 3,
        title: "Sự đoàn kết của giai cấp công nhân",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Lợi ích lâu dài và cơ bản của dân tộc và lợi ích giai cấp công nhân là thống nhất với nhau",
      },
      {
        title: "Vì lợi ích dân tộc",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Lợi ích của giai cấp công nhân",
        isKey: false,
      },
      {
        title: "Lợi ích của Đảng cộng sản",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 323,
    title:
      "Quan điểm của Chủ nghĩa Marx – Lenin cho rằng Xem xét và giải quyết vấn đề dân tộc phải đứng vững trên lập trường giai cấp công nhân vì",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 324,
    title: "Quan điểm của Chủ nghĩa Marx – Lenin cho rằng",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tôn giáo chỉ có tính tiêu cực mà thôi",
      },
      {
        title: "Tôn giáo đối lập với CNXH",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Tôn giáo còn tồn tại lâu dài và trong quá trình xây dựng XHCN tôn giáo cũng có những thay đổi. Phải thực hiện đoàn kết tôn giáo, tôn trọng tự do tín ngưỡng của nhân dân để tiến hành xây dựng XHCN",
      },
      {
        idx: 3,
        title:
          "Tôn giáo sẽ mất đi khi giai cấp công nhân có chính quyền trong tay",
        isKey: false,
      },
    ],
  },
  {
    idx: 325,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sự phản ánh hư ảo hiện thực",
      },
      {
        title: "Là “tiếng thở dài của chúng sinh bị áp bức”",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Bộ phận đời sống tinh thần của nhân dân",
        idx: 2,
      },
      {
        idx: 3,
        title: "Các phương án đều đúng",
        isKey: true,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Theo quan điểm của chủ nghĩa Marx - Lenin, tôn giáo là",
  },
  {
    title: "Tìm phương án sai: Lối sống XHCN là",
    answers: [
      {
        title: "Một đặc trưng của văn hóa XHCN",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tự phát, hình thành trong quá trình sống của con người",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Thể hiện trong nhân cách, hành vi của con người mới XHCN",
      },
      {
        isKey: false,
        title: "Một đặc điểm của con người XHCN",
        idx: 3,
      },
    ],
    idx: 326,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Cách mạng tháng 8/1945 thành công",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tham gia tích cực vào ASEAN, APEC, WTO...",
        isKey: false,
      },
      {
        title:
          "Kháng chiến chống Mĩ thắng lợi – Chiến dịch Hồ Chí Minh toàn thắng 30/4/1975",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tất cả các phương án trên đều đúng",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 327,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Quá trình cách mạng Việt Nam đã thể hiện hai xu hướng của vấn đề dân tộc như thế nào?",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Văn hóa XHCN không có những đặc trưng nào sau đây",
    answers: [
      {
        title: "Có tính nhân dân rộng rãi và tính dân tộc sâu sắc",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Hệ tư tưởng của giai cấp công nhân là nội dung cốt lõi",
        isKey: false,
      },
      {
        idx: 2,
        title: "Hình thành và phát triển tự giác",
        isKey: false,
      },
      {
        isKey: true,
        title: "Xa rời ý thức hệ của giai cấp công nhân",
        idx: 3,
      },
    ],

    idx: 328,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các dân tộc hoàn toàn bình đẳng",
      },
      {
        title: "Các dân tộc được quyền tự quyết",
        isKey: false,
        idx: 1,
      },
      {
        title: "Liên hiệp công nhân tất cả các dân tộc lại",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả các phương án đều đúng",
      },
    ],
    idx: 329,
    title: "Nội dung cương lĩnh dân tộc của Chủ nghĩa Marx – Lenin bao gồm:",
  },
  {
    idx: 330,
    title: "Tôn giáo có hai mặt là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nhu cầu tinh thần của nhân dân và tín ngưỡng",
      },
      {
        title: "Đạo đức và hướng thiện",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Khoa học và tính cực",
      },
      {
        isKey: true,
        idx: 3,
        title: "Chính trị và tư tưởng",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nội dung cơ bản của quá trình xây dựng nền văn hóa xã hội chủ nghĩa là gì?",
    answers: [
      {
        title: "Phát huy nguồn lực con người",
        isKey: false,
        idx: 0,
      },
      {
        title: "Nâng cao dân trí, hình thành đội ngũ trí thức của XH mới",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Xây dựng lối sống mới XHCN",
      },
      {
        isKey: false,
        title: "Xây dựng gia đình văn hóa mới",
        idx: 3,
      },
      {
        isKey: true,
        title: "Các phương án trên đều đúng",
        idx: 4,
      },
    ],
    idx: 331,
  },
  {
    idx: 332,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        title: "Bảo vệ chủ quyền và lợi ích dân tộc",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Đoàn kết các dân tộc",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Đứng vững trên lập trường giai cấp công nhân",
      },
      {
        isKey: false,
        idx: 3,
        title: "Xác lập quyền bình đẳng giữa các dân tộc",
      },
    ],
    title:
      "Nguyên tắc cơ bản của chủ nghĩa Marx - Lenin trong việc giải quyết vấn đề dân tộc là",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Dự báo của Lenin về hai xu hướng phát triển của vấn đề dân tộc là",
    answers: [
      {
        title:
          "Các dân tộc ý thức về chủ quyền của mình đấu tranh giành quyền độc lập dân tộc",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Các dân tộc liên kết lại với nhau vì lợi ích, vì sự phát triển của dân tộc mình",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các dân tộc đối thoại với nhau trong quan hệ ngoại giao",
      },
      {
        isKey: true,
        title: "A và B",
        idx: 3,
      },
    ],

    idx: 333,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sự phân bố đan xen lẫn nhau",
      },
      {
        idx: 1,
        isKey: false,
        title: "Đa dạng về bản sắc văn hóa",
      },
      {
        idx: 2,
        title: "Chênh lệch về trình độ phát triển kinh tế",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tinh thần đoàn kết, hòa hợp dân tộc",
      },
    ],
    idx: 334,
    title:
      "Đặc trưng quan trọng nhất của quan hệ giữa các dân tộc ở Việt nam là",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 335,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quyết định lĩnh vực sản xuất",
      },
      {
        idx: 1,
        title: "Quyết định lĩnh vực tiêu thụ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Định ra giá cả độc quyền nhằm thu lợi nhuận độc quyền cao",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "A, B và C",
      },
      {
        title: "B và C",
        idx: 4,
        isKey: false,
      },
    ],

    title: "Độc quyền là sự liên minh giữa các doanh nghiệp có khả năng:",
  },
  {
    answers: [
      {
        title: "Phát triển nền nông nghiệp truyền thống",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Vừa phát triển kinh tế, vừa từng bước nâng cao đời sống nhân dân",
      },
      {
        title: "Ưu tiên cho nhiệm vụ phát triển quốc phòng, bảo vệ đất nước",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Phát triển kinh tế hiện đại trước, sau đó giải quyết vấn đề nâng cao đời sống nhân dân",
        idx: 3,
      },
      {
        idx: 4,
        title: "Hướng nền kinh tế đến mô hình thị trường tự do",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 336,
    title:
      "Nội dung nào sau đây phản ánh đặc trưng về mục tiêu của nền kinh tế thị trường định hướng XHCN ở VN:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Nhu cầu vốn lớn và cạnh tranh gay gắt",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tiến bộ KHKT và công nghệ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các cuộc khủng hoảng kinh tế và thay đổi cơ cấu sản xuất",
      },
      {
        isKey: false,
        idx: 3,
        title: "Sự phát triển của hệ thống tín dụng",
      },
      {
        isKey: true,
        idx: 4,
        title: "Tất cả các nguyên nhân trên",
      },
    ],
    title: "Độc quyền hình thành do các nguyên nhân:",
    idx: 337,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 338,

    title: "Tư bản độc quyền nhà nước là:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quá trình Nhà nước bị độc quyền hóa theo lối tư bản",
      },
      {
        title: "Sự thể hiện sức mạnh của Nhà nước so với tư bản độc quyền",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Sự liên kết giữa tư bản tư nhân và tư bản nhà nước",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Sự chiếm hữu của Nhà nước đối với các tư bản độc quyền",
      },
      {
        title: "Sự liên kết sức mạnh giữa tư bản độc quyền và Nhà nước",
        idx: 4,
        isKey: true,
      },
    ],
  },
  {
    idx: 339,
    title: "Những hình thức biểu hiện cụ thể của tư bản độc quyền nhà nước là:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Kết hợp về mặt nhân sự giữa bộ máy nhà nước và tư bản độc quyền",
      },
      {
        idx: 1,
        title: "Hình thành và phát triển sở hữu nhà nước",
        isKey: false,
      },
      {
        title: "Hình thành và phát triển khu vực kinh tế nhà nước",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "A, B và C",
        idx: 3,
      },
      {
        title: "B và C",
        isKey: false,
        idx: 4,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 340,
    title:
      "Kết luận nào sau đây thể hiện rõ bản chất của tư bản độc quyền nhà nước:",
    answers: [
      {
        title: "Tư bản độc quyền phải phục vụ lợi ích của Nhà nước",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Nhà nước đứng ngoài lĩnh vực kinh tế",
        isKey: false,
      },
      {
        isKey: true,
        title: "Nhà nước phụ thuộc và bảo vệ lợi ích của tư bản độc quyền",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Nhà nước không sở hữu tài sản và không có khu vực kinh tế của riêng mình",
        idx: 3,
      },
    ],
  },
  {
    title: "Tư bản tài chính là sự liên minh:",
    answers: [
      {
        title:
          "Giữa các độc quyền sản xuất và các độc quyền thương nghiệp với nhau",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Giữa Nhà nước và các độc quyền ngân hàng với nhau",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Giữa các độc quyền tư bản công nghiệp với nhau",
      },
      {
        title: "Giữa các độc quyền ngân hàng với nhau",
        isKey: false,
        idx: 3,
      },
      {
        title: "Giữa các độc quyền ngân hàng và độc quyền công nghiệp với nhau",
        isKey: true,
        idx: 4,
      },
    ],
    idx: 341,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    answers: [
      {
        title: "Thị trường thế giới là thống nhất",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Hình thành xu hướng liên kết thị trường từng hàng hóa riêng biệt",
        isKey: false,
      },
      {
        title: "Thị trường tồn tại độc lập trong từng nước tư bản",
        isKey: false,
        idx: 2,
      },
      {
        title: "Thị trường thế giới do một số nước khống chế",
        idx: 3,
        isKey: false,
      },
      {
        isKey: true,
        idx: 4,
        title: "Thị trường thế giới bị phân chia bởi các độc quyền tư bản lớn",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 342,
    title: "Trong điều kiện của CNTB độc quyền:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tăng nhanh năng suất lao động xã hội",
      },
      {
        isKey: false,
        title: "Giảm sút năng suất lao động xã hội",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Làm tăng sự phân hóa giàu – nghèo trong xã hội",
      },
      {
        idx: 3,
        isKey: true,
        title: "A và C",
      },
      {
        isKey: false,
        title: "B và C",
        idx: 4,
      },
    ],
    idx: 343,
    title: "Độc quyền có thể gây ra những tác động nào sau đây:",
  },
  {
    title:
      "Tác động nào sau đây được thể hiện trong điều kiện thống trị của tư bản độc quyền nhà nước:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Nhà nước không có khả năng thực hiện chính sách thực dân hóa",
      },
      {
        idx: 1,
        isKey: false,
        title: "Nhà nước không tham gia đầu tư vào các lĩnh vực kinh tế",
      },
      {
        idx: 2,
        title:
          "Nhà nước chỉ điều tiết bằng các chính sách trong lĩnh vực xã hội",
        isKey: false,
      },
      {
        idx: 3,
        title: "Mâu thuẫn xã hội ngày càng gay gắt",
        isKey: true,
      },
      {
        idx: 4,
        title: "Nhà nước chỉ điều tiết kinh tế bằng luật pháp và chính sách",
        isKey: false,
      },
    ],
    idx: 344,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Những khả năng nào sau đây xảy ra do tác động của độc quyền:",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tạo sức mạnh kinh tế cho sản xuất lớn phát triển",
      },
      {
        title:
          "Tạo khả năng cho việc phát triển nghiên cứu và ứng dụng các thành tựu của KHKT và công nghệ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Kìm hãm tiến bộ kỹ thuật nhằm duy trì vị thế độc quyền",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "B và C",
        idx: 3,
      },
      {
        title: "A, B và C",
        isKey: true,
        idx: 4,
      },
    ],
    idx: 345,
  },
  {
    idx: 346,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Những tác động nào sau đây được coi là tác động tích cực về mặt kinh tế của CNTB:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Nâng cao mức sống vật chất và tinh thần của người dân",
      },
      {
        idx: 1,
        isKey: false,
        title: "Thúc đẩy quá trình quốc tế hóa và toàn cầu hóa nền kinh tế",
      },
      {
        title: "Thúc đẩy lực lượng sản xuất phát triển",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "A và B",
        idx: 3,
      },
      {
        title: "B và C",
        idx: 4,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Mâu thuẫn giữa tư bản và lao động",
      },
      {
        idx: 1,
        isKey: false,
        title: "Mâu thuẫn giữa cá nhân và nhà nước",
      },
      {
        idx: 2,
        title: "Mâu thuẫn giữa cạnh tranh và độc quyền",
        isKey: false,
      },
      {
        idx: 3,
        title: "Mâu thuẫn giữa con người với thiên nhiên",
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 347,

    title: "Mâu thuẫn nào sau đây thể hiện giới hạn lịch sử của CNTB:",
  },
  {
    idx: 348,
    answers: [
      {
        title: "Xã hội hóa nền sản xuất",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Xây dựng hệ thống bảo hiểm và phúc lợi xã hội cho người lao động",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Làm hình thành nền kinh tế quốc tế hóa và toàn cầu hóa",
      },
      {
        title: "Thúc đẩy quá trình phát triển của lực lượng sản xuất xã hội",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Phát triển nền kinh tế thị trường hiện đại",
      },
    ],
    title:
      "Những tác động nào sau đây có thể coi là tác động tích cực về mặt xã hội của CNTB:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    title: "Xuất khẩu tư bản là:",
    answers: [
      {
        isKey: false,
        title: "Xuất khẩu hàng hóa giữa các nước tư bản",
        idx: 0,
      },
      {
        title: "Xuất khẩu vốn ra nước ngoài nhằm tìm kiếm lợi nhuận cao",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Xuất khẩu kỹ thuật và công nghệ giữa các nước tư bản",
        isKey: false,
      },
      {
        idx: 3,
        title: "Xuất khẩu tiền tệ giữa các nước tư bản",
        isKey: false,
      },
    ],

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 349,
  },
  {
    idx: 350,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Sự điều tiết kinh tế của nhà nước ở tầm vĩ mô",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Quyền lực lớn của nhà nước trong việc chi phối quá trình cạnh tranh của các độc quyền",
      },
      {
        idx: 2,
        title: "Sự lấn át của kinh tế nhà nước so với khu vực kinh tế tư nhân",
        isKey: false,
      },
      {
        idx: 3,
        title: "Sự chiếm hữu tài sản lớn của nhà nước trong nền kinh tế",
        isKey: false,
      },
      {
        title: "Sự mở rộng quy mô khu vực kinh tế nhà nước",
        idx: 4,
        isKey: false,
      },
    ],
    title: "Biểu hiện đặc trưng nhất của tư bản độc quyền nhà nước là:",
  },
  {
    idx: 351,
    title: "Trong hoạt động của tư bản tài chính:",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tư bản ngân hàng phụ thuộc tư bản công nghiệp",
      },
      {
        idx: 1,
        isKey: false,
        title: "Tư bản công nghiệp có khả năng chi phối nền kinh tế",
      },
      {
        isKey: true,
        title: "Tư bản công nghiệp phụ thuộc tư bản ngân hàng",
        idx: 2,
      },
      {
        title: "Tư bản ngân hàng độc lập với tư bản công nghiệp",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Độc quyền bắt đầu xuất hiện trong khoảng thời gian:",

    idx: 352,
    answers: [
      {
        title: "Đầu thế kỷ XIX",
        idx: 0,
        isKey: false,
      },
      {
        title: "Đầu thế kỷ XVIII",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Cuối thế kỷ XIX - Đầu thế kỷ XX",
      },
      {
        isKey: false,
        title: "Cuối thế kỷ XVIII",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 353,
    title:
      "Nội dung nào sau đây thể hiện rõ nhất đặc trưng của nền kinh tế thị trường định hướng XHCN ở VN:",

    answers: [
      {
        idx: 0,
        title: "Phát triển kinh tế và xây dựng quốc phòng vững mạnh",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Khuyến khích các chủ thể kinh tế làm giàu hợp pháp",
      },
      {
        isKey: false,
        idx: 2,
        title: "Tăng trưởng kinh tế cao và liên tục",
      },
      {
        isKey: true,
        title:
          "Phát triển kinh tế và xây dựng xã hội công bằng, dân chủ, văn minh",
        idx: 3,
      },
      {
        idx: 4,
        title:
          "Đẩy mạnh xuất khẩu hàng hóa ra nước ngoài và hội nhập kinh tế quốc tế",
        isKey: false,
      },
    ],
  },
  {
    idx: 354,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    title:
      "Những nội dung nào sau đây ứng với đặc điểm của kinh tế thị trường định hướng XHCN ở Việt Nam:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Vận hành theo cơ chế thị trường, hướng tới mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
      },
      {
        isKey: false,
        title: "Vận hành theo cơ chế kế hoạch hóa tập trung",
        idx: 1,
      },
      {
        isKey: false,
        title: "Có sự điều tiết của Nhà nước do Đảng cộng sản lãnh đạo",
        idx: 2,
      },
      {
        title: "A và B",
        isKey: false,
        idx: 3,
      },
      {
        isKey: true,
        idx: 4,
        title: "A và C",
      },
    ],
  },
  {
    idx: 355,
    title: "Cách mạng công nghiệp lần thứ nhất có những đặc điểm nào sau đây:",

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bắt đầu ở Mỹ trong khoảng giữa thế kỷ XVII",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Diễn ra ở nước Anh, sau đó lan sang các nước châu Âu trong khoảng giữa thế kỷ XVIII – giữa thế kỷ XIX",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Dựa trên tiền đề là các phát minh thoi dệt máy, máy hơi nước, lò luyện kim kiểu mới, phương tiện vận tải mới như tàu thủy, tàu hỏa…",
      },
      {
        isKey: false,
        title: "A, B và C",
        idx: 3,
      },
      {
        title: "B và C",
        idx: 4,
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        title: "Theo các nguyên tắc của kinh tế thị trường",
        idx: 0,
      },
      {
        title: "Theo các chính sách của Nhà nước",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Thông qua các tổ chức xã hội",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả các phương án trên",
      },
    ],
    title:
      "Quan hệ lợi ích kinh tế được thực hiện bằng phương thức nào sau đây:",

    idx: 356,
  },
  {
    idx: 357,
    title:
      "Nội dung nào sau đây không liên quan đến vấn đề hoàn thiện thể chế kinh tế thị trường định hướng XHCN ở VN:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        isKey: false,
        title: "Hoàn thiện thể chế phát triển đồng bộ các loại thị trường",
        idx: 0,
      },
      {
        isKey: true,
        title: "Hoàn thiện thể chế xây dựng nền quốc phòng toàn dân",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hoàn thiện thể chế phát triển động bộ các yếu tố thị trường",
      },
      {
        isKey: false,
        idx: 3,
        title: "Hoàn thiện thể chế phát triển quan hệ kinh tế quốc tế",
      },
      {
        title: "Hoàn thiện thể chế sở hữu và các thành phần kinh tế",
        isKey: false,
        idx: 4,
      },
    ],
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 358,
    title:
      "Cùng nhằm điều chỉnh hoạt động của con người, song sự khác biệt cơ bản giữa thể chế nói chung và thể chế kinh tế thuộc về:",
    answers: [
      {
        title: "Đối tượng điều chỉnh",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Lĩnh vực điều chỉnh",
      },
      {
        title: "Thời hạn điều chỉnh",
        idx: 2,
        isKey: false,
      },
      {
        title: "Quy mô điều chỉnh",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        title: "Phạm vi điều chỉnh",
        idx: 4,
      },
    ],
  },
  {
    idx: 359,
    answers: [
      {
        idx: 0,
        title: "A.Đúng",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Sai",
      },
    ],
    title:
      "Nội dung “Thể chế hóa đầy đủ và bảo đảm về mặt luật pháp các quyền về tài sản của mọi chủ thể kinh tế” là nội dung của việc hoàn thiện thể chế về sở hữu và các thành phần kinh tế.",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Xây dựng cơ sở vật chất – kỹ thuật cho nền sản xuất lớn hiện đại",
      },
      {
        isKey: false,
        idx: 1,
        title: "VN chưa trải qua giai đoạn phát triển TBCN",
      },
      {
        title: "Nhu cầu bảo vệ chủ quyền lãnh thổ và an ninh xã hội",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả các phương án trên",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Những lý do nào sau làm cho quá trình công nghiệp hóa, hiện đại hóa ở VN trở thành tất yếu khách quan:",
    idx: 360,
  },
  {
    idx: 361,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Khi nói về các tác động tiêu cực của hội nhập kinh tế quốc tế, điều nào sau đây là không đúng:",
    answers: [
      {
        isKey: false,
        title: "Tình trạng ô nhiễm môi trường gia tăng",
        idx: 0,
      },
      {
        isKey: false,
        title: "Tạo ra sự phụ thuộc ngày càng lớn vào nền kinh tế thế giới",
        idx: 1,
      },
      {
        title: "Nguy cơ chảy máu tài nguyên, chảy máu chất xám ra nước ngoài",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Nguy cơ làm tăng sự bất bình đẳng với các nền kinh tế lớn",
      },
      {
        idx: 4,
        title:
          "Làm tăng khả năng cạnh tranh của hàng hóa và dịch vụ trong nước",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title: "Hoàn thiện chính sách thúc đẩy tăng trưởng kinh tế",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Hoàn thiện chính sách bảo đảm tính chất bình đẳng và công bằng về cơ hội hưởng thụ cho các thành viên xã hội",
      },
      {
        title:
          "Hoàn thiện chính sách chủ động hội nhập kinh tế quốc tế và tham gia toàn cầu hóa",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả các phương án trên",
        isKey: true,
        idx: 3,
      },
    ],

    title:
      "Hoàn thiện thể chế kinh tế thị trường ở VN bao gồm những nội dung nào sau đây:",
    idx: 362,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 363,
    answers: [
      {
        title: "Thúc đẩy sản xuất theo dây chuyền đồng loạt",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Chế tạo ô tô hàng loạt",
        isKey: false,
      },
      {
        idx: 2,
        title: "Phát triển các công nghệ hiện đại trong xây dựng và giao thông",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Thay thế lao động thủ công bằng lao động máy móc, kỹ thuật thủ công bằng kỹ thuật cơ khí",
      },
      {
        idx: 4,
        isKey: false,
        title: "Biến nông nghiệp nhỏ thành nông nghiệp lớn",
      },
    ],
    title: "Nội dung cơ bản của cách mạng công nghiệp lần thứ nhất là:",
  },
  {
    idx: 364,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        title: "Chủ động tham gia các liên kết khu vực và liên kết quốc tế",
        idx: 0,
        isKey: false,
      },
      {
        title: "Xây dựng chiến lược và lộ trình hội nhập kinh tế quốc tế",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Nâng cao nhận thức về cơ hội và thách thức của hội nhập kinh tế quốc tế",
        idx: 2,
      },
      {
        title:
          "Hoàn thiện thể chế kinh tế và hệ thống luật pháp tương thích với quá trình hội nhập",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        isKey: true,
        title: "Tăng cường nhập khẩu lao động từ nước ngoài",
      },
    ],
    title:
      "Nội dung nào sau đây không nằm trong phương hướng nâng cao hiệu quả của hội nhập kinh tế quốc tế ở VN:",
  },
  {
    title:
      "Nhân tố nào sau đây không phải là tiền đề cho quá trình công nghiệp hóa:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 365,
    answers: [
      {
        title: "Thể chế chính trị",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Khả năng sử dụng kỹ thuật và công nghệ mới",
      },
      {
        idx: 2,
        title: "Nguồn nhân lực",
        isKey: false,
      },
      {
        isKey: false,
        title: "Khả năng tạo vốn",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Các cuộc cách mạng công nghiệp nói chung mang lại những tác động tích cực nào sau đây:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    idx: 366,
    answers: [
      {
        isKey: false,
        title: "Thúc đẩy lực lượng sản xuất phát triển nhanh chóng",
        idx: 0,
      },
      {
        title: "Hoàn thiện các quan hệ sản xuất xã hội",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Thay đổi mạnh mẽ các phương thức quản trị sản xuất và quản lý xã hội",
      },
      {
        title: "Tất cả các phương án trên",
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
        title: "Sự hài lòng của con người về một vấn đề cụ thể nào đó",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Sự phát triển về chất lượng các dịch vụ thỏa mãn nhu cầu vật chất của con người",
      },
      {
        isKey: false,
        title: "Tổng hợp các nhu cầu mà con người mong muốn đạt tới",
        idx: 2,
      },
      {
        idx: 3,
        title: "Sự quan tâm của Nhà nước tới nhu cầu của con người",
        isKey: false,
      },
      {
        isKey: true,
        title: "Sự thỏa mãn nhu cầu của con người",
        idx: 4,
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 367,

    title: "Lợi ích là một phạm trù phản ánh:",
  },
  {
    answers: [
      {
        title:
          "Tạo môi trường thuận lợi cho các chủ thể tìm kiếm lợi ích hợp pháp",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Giải quyết các mâu thuẫn phát sinh về lợi ích giữa các chủ thể kinh tế",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Hướng dẫn các doanh nghiệp và cá nhân tìm kiếm cách thức đạt được lợi ích của mình",
      },
      {
        title: "Điều hòa lợi ích giữa các cá nhân, doanh nghiệp và xã hội",
        isKey: false,
        idx: 3,
      },
      {
        isKey: false,
        idx: 4,
        title: "Kiểm soát, ngăn chặn các lợi ích bất hợp pháp",
      },
    ],
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 368,

    title:
      "Nội dung nào sau đây không thuộc vai trò của Nhà nước trong việc bảo đảm sự hài hòa các quan hệ lợi ích kinh tế:",
  },
  {
    answers: [
      {
        isKey: true,
        title:
          "Bản chất của lợi ích kinh tế phản ánh mục đích và động cơ hoạt động kinh tế",
        idx: 0,
      },
      {
        title: "Quy mô hoạt động càng lớn, lợi ích kinh tế đạt được càng lớn",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Lợi ích kinh tế do các lợi ích khác của con người chi phối",
        idx: 2,
      },
      {
        title: "Lợi ích kinh tế vận động độc lập với chủ thể kinh tế",
        idx: 3,
        isKey: false,
      },
      {
        isKey: false,
        idx: 4,
        title:
          "Để đạt lợi ích kinh tế, chủ thể kinh tế không nhất thiết phải hoạt động kinh tế",
      },
    ],
    idx: 369,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title: "Khi nói về lợi ích kinh tế, điều nào sau đây là đúng:",
  },
  {
    answers: [
      {
        title: "Quan hệ giữa các cơ quan chức năng của Nhà nước với nhau",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Quan hệ giữa chủ doanh nghiệp này với chủ doanh nghiệp khác",
      },
      {
        idx: 2,
        isKey: false,
        title: "Quan hệ giữa chủ doanh nghiệp và người lao động",
      },
    ],
    idx: 370,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Quan hệ nào sau đây không thuộc biểu hiện cụ thể của quan hệ lợi ích kinh tế:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Lợi nhuận là biểu hiện trực tiếp lợi ích kinh tế của người chủ doanh nghiệp",
      },
      {
        isKey: false,
        title:
          "Tiền công là biểu hiện trực tiếp lợi ích kinh tế của người lao động",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Lợi ích kinh tế là động lực trực tiếp của hoạt động kinh tế",
      },
      {
        isKey: true,
        idx: 3,
        title: "Nhà nước là một chủ thể đứng ngoài lợi ích kinh tế",
      },
      {
        idx: 4,
        isKey: false,
        title: "A, B và C",
      },
    ],

    idx: 371,
    title: "Khi nói về lợi ích kinh tế, điều nào sau đây là không đúng:",
  },
  {
    idx: 372,

    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Làm thay đổi tận gốc tư duy của con người về mọi lĩnh vực",
      },
      {
        idx: 1,
        isKey: false,
        title: "Dựa trên tiền đề kỹ thuật số",
      },
      {
        isKey: false,
        idx: 2,
        title: "Diễn ra từ cuối thế kỷ XX và hiện nay vẫn đang tiếp diễn",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Diễn ra ở tất cả các nước, không phân biệt nước giàu – nước nghèo, nước hiện đại – nước lạc hậu",
      },
      {
        idx: 4,
        isKey: true,
        title: "Diễn ra trong khoảng cuối thế kỷ XX – Đầu thế kỷ XXI",
      },
    ],
    title:
      "Điều nào sau đây không đúng khi nói về cuộc Cách mạng công nghiệp lần thứ tư:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    idx: 373,
    answers: [
      {
        idx: 0,
        title:
          "Diễn ra trong khoảng đầu thế kỷ XX, dựa trên tiền đề phát minh ra máy bay",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Diễn ra trong khoảng đầu thập niên 60 của thế kỷ XX – Cuối thế kỷ XX",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Phát minh máy tính điện tử và công nghệ thông tin làm thay đổi toàn bộ kỹ thuật sản xuất và phương pháp quản lý",
      },
      {
        isKey: false,
        idx: 3,
        title: "A và C",
      },
      {
        idx: 4,
        isKey: true,
        title: "B và C",
      },
    ],

    title: "Cách mạng công nghiệp lần thứ ba:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Chế tạo và sử dụng động cơ đốt trong",
      },
      {
        title: "Sản xuất giấy và kỹ thuật in ấn hiện đại",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Chế tạo ô tô",
        idx: 2,
      },
      {
        idx: 3,
        title: "Sử dụng các phương pháp luyện kim tiên tiến",
        isKey: false,
      },
      {
        isKey: true,
        title: "Phát minh máy tính điện tử",
        idx: 4,
      },
    ],
    idx: 374,
    title:
      "Tác động nào dưới đây không diễn ra trong cách mạng công nghiệp lần thứ hai:",
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
  },
  {
    idx: 375,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hoàn thiện pháp luật về đất đai",
      },
      {
        isKey: false,
        idx: 1,
        title: "Hoàn thiện pháp luật về sử dụng tài sản công",
      },
      {
        title:
          "Hoàn thiện pháp luật về quản lý, khai thác tài nguyên thiên nhiên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Tất cả các phương án trên",
        idx: 3,
      },
    ],

    title:
      "Việc hoàn thiện thể chế về sở hữu và các thành phần kinh tế bao gồm những nội dung nào sau đây:",
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    title:
      "Nội dung nào sau đây không phản ánh đặc trưng của cách mạng công nghiệp:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các phát minh đột phá về kỹ thuật và công nghệ",
      },
      {
        isKey: false,
        title: "Sự phát triển nhảy vọt về chất của các tư liệu lao động",
        idx: 1,
      },
      {
        isKey: false,
        title: "Năng suát lao động tăng nhanh chóng",
        idx: 2,
      },
      {
        isKey: true,
        title: "Bộ máy nhà nước thay đổi",
        idx: 3,
      },
      {
        isKey: false,
        title: "Thay đổi căn bản về phân công lao động xã hội",
        idx: 4,
      },
    ],

    idx: 376,
  },
  {
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",

    answers: [
      {
        idx: 0,
        title:
          "Xu thế khách quan của quá trình quốc tế hóa và toàn cầu hóa lôi cuốn",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Phù hợp với con đường thoát khỏi nghèo nàn, lạc hậu",
      },
      {
        idx: 2,
        title: "Tận dụng được các thành tựu tiến bộ của thế giới về mọi mặt",
        isKey: false,
      },
      {
        title: "Mở rộng thị trường cho hàng hóa và dịch vụ của VN",
        idx: 3,
        isKey: false,
      },
      {
        isKey: true,
        idx: 4,
        title: "Tất cả các lý do trên",
      },
    ],
    idx: 377,
    title: "Hội nhập kinh tế quốc tế là một tất yếu khách quan đối với VN vì:",
  },
  {
    title:
      "Khi nói về các tác động tích cực của hội nhập kinh tế quốc tế, điều nào sau đây là không đúng:",

    idx: 378,
    practiceCode: "kinh-te-chinh-tri-mac-lenin-03",
    answers: [
      {
        title: "Tình trạng ô nhiễm môi trường gia tăng",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tạo ra sự phụ thuộc ngày càng lớn vào nền kinh tế thế giới",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Làm tăng khả năng cạnh tranh của hàng hóa và dịch vụ trong nước",
        isKey: true,
      },
      {
        title: "Nguy cơ chảy máu tài nguyên, chảy máu chất xám ra nước ngoài",
        isKey: false,
        idx: 3,
      },
      {
        idx: 4,
        isKey: false,
        title: "Nguy cơ làm tăng sự bất bình đẳng với các nền kinh tế lớn",
      },
    ],
  },
];

export default questions;
