import { QuestionRequest } from "../../models/multiple-question";

const question: QuestionRequest[] = [
  {
    idx: 0,

    answers: [
      {
        isKey: true,
        title: "Cải thiện quyền quản lý và kiểm soát nguồn lực của PM",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Có hơn một người tham gia quản lý dự án",
      },
      {
        isKey: false,
        title: "Truyền thông dễ dàng hơn",
        idx: 2,
      },
      {
        title: "Báo cáo dễ dàng hơn.",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "4 giám đốc dự án (PM) ngồi ăn trưa với nhau và thảo luận về dự án của họ. phần lớn thời gian họ phàn nàn về việc quản lys và điều hành dự án khó khăn như thế nào. Một số lời phàn nàn là về các cổ đông và các thay đổi mà họ tạo ra cho dự án. Người khác thì phàn nàn về sự khó khăn trong việc thúc đẩy nhân viên hợp tác và làm việc. 1 người PM muốn tập trung vào tất cả các lợi ích của ma trận tổ chức mà họ đều làm ra. Anh ta sẽ đề cập tới vấn đề nào?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "2 PM vừa nhận ra họ đang ở trong một ma trận tổ chức yếu và quyền lực của họ trong vai trò là PM bị hạn chế. Một người nhận ra anh ta thật sự là người giải quyết công việc dự án (project expediter), người còn lại nhận ra rằng anh ta là điều phối viên của dự án (project coordinator). Vậy người tiến hành và điều phối viên của dự án khác nhau ntn?",
    answers: [
      {
        title:
          "Người giải quyết công việc dự án không thể đưa ra các quyết định",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Người giải quyết công việc dự án có thể đưa ra nhiều quyết định hơn điều phối viên dự án",
      },
      {
        isKey: false,
        idx: 2,
        title: "Người giải quyết công việc báo cáo cho quản lý cấp cao hơn",
      },
      {
        isKey: false,
        title: "Người giải quyết công việc có một số thẩm quyền riêng",
        idx: 3,
      },
    ],
    idx: 1,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Báo cáo cho một vài thủ trưởng",
      },
      {
        title: "Không có sự trung thành đối với dự án",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Báo cáo với người quản lý có trách nhiệm và thẩm quyền (functional manager)",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Thường xuyên có mặt trong dự án, không có phòng ban chức năng (will not always have a home)",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 2,
    title:
      "Trong một tổ chức hướng dự án (tổ chức trong đó k có các công việc thường nhật mà toàn là dự án), đội dự án có đặc điểm gì:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Tổ chức bao gồm các phòng ban chức năng.",
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Ma trận. đối với tổ chức loại này, thành viên đội dự án phải báo cáo với 2 thủ trưởng: 1 là PM và quản lý bộ phận chức năng.",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tổ chức mà PM là người giải quyết công việc",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tổ chức mà PM là người điều hành",
      },
    ],
    title:
      "Một PM đang cố gắng hoàn thành dự án phát triển phần mềm, nhưng không thể tập trung và quan tâm nhiều tới dự án. Nguồn nhân lực được tập trng vào hoàn thành các công việc liên quan tới các tiến trình sản xuất phần mềm, và PM có ít thẩm quyền để phân công nguồn lực một cách hợp lý. Loại hình tổ chức nào mà người PM này đang làm việc?",
    idx: 3,
  },
  {
    answers: [
      {
        title: "Đơn giản",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Truyền thông mở và thúc đẩy",
      },
      {
        title: "Phức tạp",
        isKey: true,
        idx: 2,
      },
      {
        title: "Khó tự động hóa",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 4,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM có ít kinh nghiệm quản lý dự án. Nhưng anh ta được phân công làm PM cho một dự án mới. do anh ta sẽ làm việc trong một tổ chức ma trận (matrix organization) để hoàn thành dự án của mình, anh ta có thể trông đợi việc truyền thông trong dự án của mình có đặc điểm:",
  },
  {
    idx: 5,

    title:
      "2 nhân viên trong đội dự án đang nói chuyện với nhau và phàn nàn về việc rất nhiều người đang yêu cầu nhân viên đó phải làm một số việc. nếu anh ta làm việc trong một tổ chức bao gồm các phòng ban chức năng (functional organization), ai sẽ có quyền để đưa ra chỉ dẫn cho các thành viên dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Người quản lý dự án PM",
      },
      {
        title: "Người quản lý bộ phận chức năng functional manager",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Đội dự án",
        isKey: false,
      },
      {
        title: "Ma trận kiểm soát chặt tight matrix",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Ai có nhiều thẩm quyền nhất trong một tổ chức hướng dự án (projectized organization)",

    idx: 6,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Người quản lý dự án PM",
        isKey: true,
      },
      {
        isKey: false,
        title: "Người quản lý bộ phận chức năng functional manager",
        idx: 1,
      },
      {
        title: "Đội dự án",
        idx: 2,
        isKey: false,
      },
      {
        title: "Đội dự án đều có quyền như nhau",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title: "Tính chất nào dưới đây không phải là tính chất của một dự án",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tạm thời",
      },
      {
        isKey: false,
        title: "Có thời gian bắt đầu và kết thúc xác định",
        idx: 1,
      },
      {
        title: "Có các hoạt động liên quan tới nhau",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Lặp lại công việc dự án mỗi tháng. (repeat itself every month)",
      },
    ],
    idx: 7,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Các bên liên quan quản lý dự án ngoại trừ việc:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title:
          "Đưa cho các bên liên quan một ít $ (giving stakeholders extras)",
        idx: 0,
      },
      {
        isKey: false,
        title: "Xác định các bên liên quan",
        idx: 1,
      },
      {
        isKey: false,
        title: "Xác định yêu cầu của các bên liên quan",
        idx: 2,
      },
      {
        isKey: false,
        title: "Quản lý các mong đợi của các bên liên quan",
        idx: 3,
      },
    ],
    idx: 8,
  },
  {
    idx: 9,
    answers: [
      {
        idx: 0,
        title: "Sự chú ý việc quản lý vào quản lý phạm vi",
        isKey: false,
      },
      {
        isKey: false,
        title: "Lập kế hoạch quản lý ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Trách nhiệm của người giải quyết công việc dự án",
      },
      {
        idx: 3,
        isKey: false,
        title: "Một sự thay đổi hệ thống điều khiển.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một người quản lý và giám đốc kĩ thuật thảo luận về một thay đổi trong gói công việc chính. Sau khi thảo luận, người quản lý liên lạc với bạn và yêu cầu bạn hoàn thành các thủ tục giấy tờ để thực hiện việc thay đổi đó. Đây là ví dụ về:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 10,

    answers: [
      {
        isKey: false,
        title:
          "Đưa ra lời khuyên cho các bên có liên quan rằng PM sẽ giữ lại các điều khoản này trong truyền thông trong dự án.",
        idx: 0,
      },
      {
        title:
          "Cung cấp một danh sách các điều khoản mới và định nghĩa của nó ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Thông báo cho phòng quản lý dự án",
      },
      {
        isKey: false,
        title:
          "Chắc chắn rằng PM sẽ duy trì thẩm quyền của mình như một người quản lý dự án, mặc dù PM và các bên có liên quan là bạn.",
        idx: 3,
      },
    ],
    title:
      "Dự án đang trong quá trình lập kế hoạch nhóm. 3 bên có liên quan yêu cầu giám đốc dự án cung cấp một số thông tin về phương pháp quản lý dự án mới của công ty, phương pháp này lấy từ đâu và tại sao nó lại khác biệt với cách họ quản lý các dự án. 3 bên có liên quan đều là bạn của người quản lý dự án, toàn bộ nhóm dự án đều đã làm việc với nhau trong nhiều năm. Dự án sử dụng một vài điều khoản mới như “hành động hiệu chỉnh” (corective action), điều này làm cho một số bên có liên quan lo lắng, họ không chắc chắn nếu cách thức quản lý dự án sẽ thay đổi cùng với các điều khoản mới. người quản lý dự án nên làm gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 11,
    title:
      "Một PM đang quản lý dự án thứ 2 của mình. Dự án đã bắt đầu được 1 tháng sau khi dự án thứ nhất bắt đầu. dự án đầu tiên của PM này là một dự án nhỏ, tuy nhiên đang mở rộng từng ngày. Mỗi ngày trôi qua, người PM này bắt đầu cảm thấy cần sự giúp đỡ. Gần đây, anh ta đã nghe có tin rằng năm ngoái cũng có một dự án gần giống với dự án thứ 2 của anh ta. Anh ta nên làm gì? ",
    answers: [
      {
        title: "Liên lạc với người PM của dự án kia và yêu cầu hỗ trợ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Sử dụng bản ghi và hướng dẫn từ phòng quản lý dự án",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Chờ đợi xem nếu dự án bị ảnh hưởng bởi sự mở rộng phạm vi dự án",
      },
      {
        title:
          "Chắc chắn rằng phạm vi dự án phải được các bên có liên quan đồng ý và phê duyệt",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Dự án đang tiến hành tốt, ngoại trừ số lượng các thay đổi đã được tạo ra. Dự án được thực hiện và chia ra 7 ban khác nhau trong công ty và sẽ cải thiện đáng kể hiệu năng của các phòng ban này khi nó được thực hiện. có 14 quy trình quản lý dự án được lựa chọn để sử dụng trong dự án này. PM là một chuyên gia kĩ thuật và được training về truyền thông và quản lý nhân lực. điều nào dưới đây là nguyên nhân của vấn đề của dự án (số lượng các thay đổi)? ",
    idx: 12,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "PM không được huấn luyện để hiểu rõ môi trường công ty",
      },
      {
        title:
          "Dự án nên được giám sát quản lý nhiều hơn để có kết quả tốt và đem lại lợi nhuận cho công ty",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dự án nên sử dụng thêm nhiều tiến trình quản lý dự án hơn",
      },
      {
        isKey: true,
        title: "Một vài bên liên quan chưa được xác định",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Không kết hợp phương pháp luận",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Là khác biệt trong từng ngành sản xuất khác nhau",
      },
      {
        isKey: false,
        idx: 2,
        title: "Có thể sinh ra nhiều dự án khác nhau",
      },
      {
        isKey: false,
        title: "Miêu tả các hành động quản lý dự án",
        idx: 3,
      },
    ],
    idx: 13,
    title:
      "Vòng đời dự án và vòng đời sản phẩm khác nhau. Trong vòng đời dự án có đặc điểm gì khác khi so sánh với vòng đời sản phẩm? ",
  },
  {
    idx: 14,
    title:
      "Các bên có liên quan có thể được xác định trong quy trình nào của việc quản lý dự án? ",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Khởi tạo, lên kế hoạch, thực thi, kiểm soát và kết thúc dự án",
      },
      {
        idx: 1,
        isKey: false,
        title: "Khởi tạo và lên kế hoạch",
      },
      {
        isKey: false,
        idx: 2,
        title: "Lên kế hoạch và kiểm soát",
      },
      {
        idx: 3,
        isKey: false,
        title: "Kiểm soát và kết thúc",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 15,

    title:
      "Trong quản lý dự án, ta chỉ quản lý bởi mục tiêu làm việc khi nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Được hỗ trợ quản lý (it's supported by management)",
        isKey: true,
      },
      {
        idx: 1,
        title: "Các luật được viết ra",
        isKey: false,
      },
      {
        title: "Dự án không ảnh hưởng tới mục tiêu chung",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dự án bao gồm mục tiêu dự án trong tôn chỉ dự án",
      },
    ],
  },
  {
    title:
      'Người quản lý của bạn quyết định rằng tất cả các đơn hàng (orders) đều được coi như trong dự án (treated as "project") và người PM sẽ cập nhật các đơn hàng này hàng ngày, giải quyết các vấn đề và chắc chắn rằng khách hàng chính thức chấp nhận sản phẩm trong vòng 30 ngày. Doanh thu từ 1 đơn hàng riêng lẻ có thể dao động từ 100$ tới 150000$. PM không yêu cần phải lập kế hoạch và chỉ cần cung cấp trạng thái đơn hàng hàng ngày. Bạn xác định tình huống này như thế nào? ',
    answers: [
      {
        title:
          "Do mỗi đơn hàng là một sự cố gắng tạm thời nên mỗi đơn hàng đều là một dự án",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Đây là việc quản lý chương trình cho đến khi có nhiều dự án kéo theo",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Đây là công việc định kỳ (recurring process)",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Doanh thu của các đơn hàng trên 100000$ sẽ được coi như một dự án và sẽ kéo theo các hoạt động quản lý dự án",
      },
    ],
    idx: 16,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Khởi tạo",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Trước quy trình quản lý dự án",
      },
      {
        isKey: true,
        idx: 2,
        title: "Lập kế hoạch",
      },
      {
        idx: 3,
        isKey: false,
        title: "Thực thi",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong giai đoạn (quy trình - process) nào của vòng đời dự án mà tài liệu ngân sách chi tiết được viết ra? ",

    idx: 17,
  },
  {
    title:
      "Tôn chỉ dự án được viết ra trong giai đoạn nào của vòng đời dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "Thực thi",
        idx: 0,
      },
      {
        isKey: false,
        title: "Lập kế hoạch",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kết thúc",
      },
      {
        isKey: true,
        title: "Khởi tạo",
        idx: 3,
      },
    ],
    idx: 18,
  },
  {
    idx: 19,
    answers: [
      {
        idx: 0,
        title: "Bắt đầu xác định rủi ro",
        isKey: false,
      },
      {
        isKey: false,
        title: "Bắt đầu lặp lại hành động",
        idx: 1,
      },
      {
        isKey: true,
        title: "Xác định các yêu cầu truyền thông",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Làm sơ đồ Gantt",
      },
    ],
    title:
      "Đội dự án vừa hoàn thành lịch khởi tạo dự án (initial project schedule) và ngân sách dự án. Việc phải làm tiếp theo là: ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 20,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ngân sách dự án",
      },
      {
        title: "Bảng phân rã công việc WBS",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Kế hoạch quản lý dự án",
      },
      {
        title: "Bảng đánh giá rủi ro chi tiết",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Lịch làm việc chi tiết của dự án có thể được tạo ra sau khi đã có: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 21,
    title:
      "Người nên được kiểm soát dự án trong quá trình lập kế hoạch dự án là: ",
    answers: [
      {
        title: "Người quản lý dự án PM",
        isKey: true,
        idx: 0,
      },
      {
        title: "Nhân viên dự án",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giám đốc bộ phận chức năng",
      },
      {
        isKey: false,
        title: "Nhà tài trợ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong giai đoạn khởi tạo dự án, văn bản nào dưới đây KHÔNG cần thiết: ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Các quy trình của công ty",
      },
      {
        idx: 1,
        isKey: false,
        title: "Văn hóa của công ty",
      },
      {
        isKey: false,
        title: "Các bảng phân rã công việc đã có trước đó WBS",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tuyên bố phạm vi dự án",
      },
    ],
    idx: 22,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Bắt đầu hoàn thành gói công việc",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hoàn thành phê chuẩn phạm vi dự án",
      },
      {
        idx: 2,
        isKey: false,
        title: "Bắt đầu kết hợp điều khiển thay đổi",
      },
      {
        isKey: true,
        idx: 3,
        title: "Bắt đầu tạo ra các kế hoạch quản lý",
      },
    ],
    title:
      "Nhà tài trợ dự án vừa cung cấp bản tuyên bố phạm vi dự án sơ bộ. việc phải làm tiếp theo là: ",
    idx: 23,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Các ràng buộc về lịch trình dự án mức cao được xác định trong giai đoạn nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 24,

    answers: [
      {
        title: "Khởi tạo",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lập kế hoạch",
      },
      {
        isKey: false,
        title: "Thực thi",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Kiểm soát",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hiểu rõ kinh nghiệm của nhà tài trợ trong các dự án trước",
      },
      {
        isKey: true,
        title: "Tạo ra danh sách hoạt động (activity list)",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chắc chắn rằng phạm vi dự án đã được xác định",
      },
      {
        isKey: false,
        idx: 3,
        title: "Hoàn thành quản lý rủi ro và ma trận trách nhiệm",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bảng phân rã công việc WBS và từ điển WBS đều được hoàn thành. Đội dự án bắt đầu xác định các rủi ro. Nhà tài trợ liên lạc với PM để yêu cầu làm ma trận trách nhiệm. dự án có ngân sách là 100000$ với 14 nhân lực đến từ 3 quốc gia. Dự án có một rủi ro nhỏ và PM đã quản lý rất nhiều dự án giống dự án này. Việc phải làm tiếp theo là: ",
    idx: 25,
  },
  {
    idx: 26,

    answers: [
      {
        title:
          "Chắc chắn nên có tuyên bố phạm vi dự án sơ bộ đã hoàn thành và sau đó tiến hành làm WBS",
        isKey: false,
        idx: 0,
      },
      {
        title: "Tạo danh sách hoạt động trước khi tạo ra sơ đồ mạng",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Có tài liệu về các rủi ro đã biết trước khi làm các giả thuyết và ước tính sâu hơn",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Hoàn thiện kế hoạch quản lý chất lượng trước khi quyết định đơn vị đo chất lượng",
      },
    ],
    title:
      "Một PM không có nhiều thời gian để lên kế hoạch trước khi ngày bắt buộc khởi động dự án đang tới. Do đó anh ta muốn lập kế hoạch hiệu quả nhất có thể. Anh ta nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 27,
    title:
      "PM chắc chắn rằng sản phẩm của dự án phải hoàn thiện theo kế hoạch quản lý dự án. Anh ta đang ở giai đoạn nào của dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Lên kế hoạch",
        isKey: false,
        idx: 0,
      },
      {
        title: "Thực thu",
        idx: 1,
        isKey: false,
      },
      {
        title: "Kiểm soát",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Kết thúc",
        isKey: true,
      },
    ],
  },
  {
    title:
      "Một PM nhận được cuộc gọi từ nhân viên dự án, thông báo rằng đã có sự khác nhau giữa tốc độ của một hệ thống trong dự án và tốc độ đề ra. PM ngạc nhiên bởi vì quản lý hiệu năng không được xác định trong giai đoạn lập kế hoạch. Nếu PM sau đó có thể ước tính được khi nào sẽ có phản hồi của sự khác nhau này, thì anh ta đang ở giai đoạn nào của quản lý dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Khởi tạo",
      },
      {
        isKey: false,
        title: "Thực thi",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Kiểm soát",
      },
      {
        title: "Kết thúc",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 28,
  },
  {
    idx: 29,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Hành động hiệu chỉnh",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kết hợp điều khiển thay đổi",
      },
      {
        title: "Kiểm soát",
        isKey: true,
        idx: 2,
      },
      {
        title: "Kết thúc dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một nhân viên dự án thông báo cho PM rằng hoạt động bao gồm một gói công việc hiện nay không còn thích hợp nữa. điều này là tốt nhất cho PM khi anh ta đang ở trong một phần nào của giai đoạn phát triển dự án? ",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Kết thúc",
        idx: 0,
      },
      {
        isKey: false,
        title: "Kiểm soát",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Thực thi",
      },
      {
        title: "Khởi tạo",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 30,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Trong buổi họp đội dự án, một nhân viên dự án hỏi về đơn vị đo đạc nào được sử dụng trong dự án để kiểm soát hiệu năng. nhân viên này cảm thấy một vài thước đo có liên quan tới công việc của anh ta đang không chính xác. Dự án được xem xét tốt nhất trong phần nào của giai đoạn phát triển dự án? ",
  },
  {
    idx: 31,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong khi hoàn thành gói công việc, nhà tài trợ yêu cầu PM báo cáo dự án đang được diễn tiến ntn. Trong quá trình chuẩn bị báo cáo, PM yêu cầu tất cả nhân viên dự án họ đã làm được bao nhiêu % công việc của mình. Có một nhân viên rất khó khăn trong việc quản lý từ đầu. khi trả lời câu hỏi của PM, anh ta nói rằng chưa hoàn thành gì cả. Mệt mỏi vì được trả lời như vậy, PM báo cáo với thủ trưởng của đội dự án là các nhân viên không có tinh thần hợp tác. Vấn đề thật sự ở đây là gì? ",
    answers: [
      {
        idx: 0,
        title: "PM không có đủ nguồn lực cho dự án",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "PM không tạo ra hệ thống tưởng thưởng xứng đáng cho nhân viên để nâng cao tinh thần hợp tác của họ ",
        idx: 1,
      },
      {
        title:
          "PM nên có buổi họp với thủ trưởng của đội dự án khi lần đầu tiên nhân viên dự án có vấn đề ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "PM không có gói công việc",
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Sự kết hợp hiệu quả (effective project integration) thường yêu cầu phải nhấn mạnh vào: ",
    idx: 32,
    answers: [
      {
        isKey: false,
        title: "Sự nghiệp cá nhân của mỗi thành viên dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Cập nhật liên tục kế hoạch quản lý dự án",
      },
      {
        title: "Truyền thông hiệu quả được xem như công cụ giao tiếp chính",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Kiểm soát sản phẩm",
        idx: 3,
      },
    ],
  },
  {
    idx: 33,
    answers: [
      {
        idx: 0,
        title: "Tối ưu hóa",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Toàn vẹn",
      },
      {
        title: "Tích hợp, kết hợp",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Sự khác biệt",
        idx: 3,
      },
    ],
    title:
      "Sự cần thiết của……… là một trong những hiệu quả mạnh mẽ chính cho việc truyền thông trong dự án: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title:
          "Ước lượng, vòng đời chi phí (life cycle costing) và lên kế hoạch dự án",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Quản lý rủi ro, ước lượng và rút ra bài học",
        isKey: false,
      },
      {
        title:
          "Lên kế hoạch quản lý dự án, ước lượng và lập báo cáo trạng thái",
        idx: 2,
        isKey: false,
      },
      {
        title: "Ước lượng, quản lý rủi ro và lên kế hoạch dự án",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 34,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Mô tả nào dưới đây là chính xác nhất về việc sử dụng các thông tin lịch sử từ các dự án đã có: ",
  },
  {
    title:
      "Khi có sự thay đổi, PM tốt nhất nên hướng sự tập trung của mình vào: ",
    idx: 35,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Tạo thay đổi",
        idx: 0,
      },
      {
        idx: 1,
        title: "Theo dõi và ghi lại các thay đổi",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thông báo với nhà tài trợ về các thay đổi",
      },
      {
        title: "Ngăn chặn các thay đổi không cần thiết",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: "Giúp đỡ cho công việc lên kế hoạch",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Giúp đỡ ngăn chặn các thay đổi không cần thiết đối với mục tiêu dự án",
      },
      {
        title: "Xác định các ràng buộc không cần thiết trong dự án",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Giúp kế hoạch quản lý dự án thực hiện tốt",
      },
    ],

    idx: 36,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Vai trò của nhà tài trợ trong dự án là: ",
  },
  {
    idx: 37,

    title:
      "Điều nào KHÔNG phải là một thành phần của hệ thống kiểm soát thay đổi hiệu quả? ",
    answers: [
      {
        title: "Các thủ tục",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Các tiêu chuẩn cho báo cáo",
      },
      {
        isKey: false,
        idx: 2,
        title: "Các buổi họp",
      },
      {
        title: "Các bài học rút ra",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: ". Quản lý mỗi công việc sẽ được ai làm",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Quản lý thời gian làm việc và chuỗi công việc nào được làm",
        idx: 1,
      },
      {
        idx: 2,
        title: "Quản lý mỗi công việc sẽ được làm xong tại thời điểm nào",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          " Quản lý ai mỗi công việc sẽ được ai làm và bao giờ hoàn thành công việc và khi nào làm công việc đó để công việc và nhân viên có thể tương tác với công việc và nhân viên khác",
      },
    ],
    idx: 38,
    title: "Một hệ thống cấp phép được dùng để làm gì? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Người quản lý dự án PM",
        idx: 0,
      },
      {
        idx: 1,
        title: "Đội dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Nhà tài trợ ",
      },
      {
        isKey: false,
        title: "Các bên có liên quan",
        idx: 3,
      },
    ],
    title:
      "Một dự án bị yêu cầu thay đổi trong tôn chỉ dự án. Ai có trách nhiệm chính để quyết định nếu như các thay đổi này là cần thiết? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 39,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Người quản lý dự án PM",
        isKey: true,
      },
      {
        idx: 1,
        title: "Đội dự án",
        isKey: false,
      },
      {
        idx: 2,
        title: "Nhà tài trợ ",
        isKey: false,
      },
      {
        title: "Các bên có liên quan",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Ai thực hiện việc tích hợp dự án? ",
    idx: 40,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Giúp đội dự án quen với dự án",
        idx: 0,
        isKey: false,
      },
      {
        title: "Đặt tất cả các phần của dự án vào một chỉnh thể liên kết",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đặt tất cả các phần của dự án vào một chương trình",
      },
      {
        title:
          "Làm cho tất cả các thành viên dự án làm việc cùng nhau trong một chỉnh thể liên kết",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Điều nào dưới đây mô tả đúng nhất vai trò của PM như một người kết hợp dự án (integrator)",
    idx: 41,
  },
  {
    idx: 42,
    title:
      "Việc phê chuẩn các hành động hiệu chỉnh là đầu vào của (được thực hiện trước)",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Kiểm soát phạm vi và thẩm tra phạm vi (scope verification)",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Trực tiếp và thi hành quản lý dự án và kiểm soát tích hợp thay đổi",
      },
      {
        isKey: false,
        title: "Phát triển kế hoạch dự án và phát triển tôn chỉ dự án",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phát triển kế hoạch dự án và lên lịch cho việc phát triển",
      },
    ],
  },
  {
    idx: 43,
    title:
      "Một bên có liên quan đặc biệt có tiếng trong việc tạo ra thay đổi trong dự án. Cách PM tiếp cận với bên có liên quan này tại thời điểm bắt đầu dự án nào là tốt nhất trong tình huống này? ",
    answers: [
      {
        isKey: false,
        title:
          "Nói không với anh ta 1 vài lần để khuyên ngăn anh ta tạo ra nhiều thay đổi",
        idx: 0,
      },
      {
        title: "Kéo anh ta vào dự án càng sớm càng tốt",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Nói chuyện với thủ trưởng của anh ta để tìm cách đưa anh ta sang 1 dự án khác",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Nói với anh ta không nên tham gia vào các bên có liên quan của dự án này.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 44,
    title:
      "Bạn là 1 PM mới chưa có kinh nghiệm gì. Bạn được yêu cầu lên kế hoạch cho một dự án mới. trong tình huống này, trong quá trình lập kế hoạch, tốt nhất bạn nên dựa vào gì để có cơ hội thành công? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Trực giác và hiểu biết cá nhân",
        idx: 0,
        isKey: false,
      },
      {
        title: "Phân tích của các bên có liên quan",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thông tin lịch sử từ các dự án đã có ",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Quản lý cấu hình",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Một bản in từ phần mềm quản lý dự án",
      },
      {
        idx: 1,
        isKey: false,
        title: "Một biểu đồ đoạn (a bar chart)",
      },
      {
        idx: 2,
        title:
          "Quản lý rủi ro, nhân viên, quy trình cải thiện và các kế hoạch quản lý khác",
        isKey: true,
      },
      {
        idx: 3,
        title: "Phạm vi dự án",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 45,
    title: "Điều nào dưới đây mô tả đúng nhất về kế hoạch quản lý dự án? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Float",
      },
      {
        title: "Resources",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Cost",
      },
      {
        isKey: true,
        title: "Schedule",
        idx: 3,
      },
    ],
    idx: 46,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "You are taking over a project and determine the following: activity B has an early finish (EF) of day 3, a late finish (LF) of day 6, and an early start (ES) of day 2. Activity L is being done by a hard-to-get resource. The cost performance index (CPI) is 1.1 and the schedule performance index (SPI) is 0.8. based on this information what would you be more concerned about? ",
  },
  {
    idx: 47,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Thông qua cách tiếp cận vòng đời dự án vào dự án của mình",
      },
      {
        idx: 1,
        title:
          "Xây dựng các bài học thu được qua mỗi giai đoạn phát triển dự án",
        isKey: false,
      },
      {
        title: "Xây dựng các kế hoạch công việc cụ thể cho từng gói công việc",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Xây dựng bản mô tả sản phẩm của dự án",
      },
    ],
    title:
      "Người PM trước của dự án của bạn đã quản lý dự án mà không có tổ chức dự án. Có sự thiếu hụt trong kiểm soát quản lý và không có sản phẩm chuyển giao nào được xác định rõ. Lựa chọn nào dưới đây là tốt nhất cho bạn để tổ chức dự án tốt hơn? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang kiểm soát dự án trong giai đoạn lên kế hoạch và phát hiện ra có 6 cá nhân đã ký vào tôn chỉ dự án. Điều nào dưới đây có liên quan nhất với bạn? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Ai sẽ là thành viên của ban kiểm soát thay đổi",
      },
      {
        isKey: true,
        idx: 1,
        title: "Dùng nhiều thời gian hơn để quản lý cấu hình",
      },
      {
        idx: 2,
        isKey: false,
        title: "Có một nhà tài trợ dự án riêng",
      },
      {
        isKey: false,
        title: "Xác định cấu trúc báo cáo",
        idx: 3,
      },
    ],
    idx: 48,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Tôn chỉ dự án cho một dự án của được phê chuẩn để lê kế hoạch và bạn vừa được phân công là PM. Nhận ra rằng lên kế hoạch dự án là nỗ lực xuyên suốt dự án, việc nào sau đây bạn nên kết hợp nhất? ",
    answers: [
      {
        idx: 0,
        title: "Tạo bảng WBS và định nghĩa hành động",
        isKey: true,
      },
      {
        isKey: false,
        title: "Ước tính thời gian hành động và xây dựng lịch làm việc",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Lên kế hoạch nhân sự và ước tính chi phí ",
      },
      {
        title: "Ước tính chi phí và tính toán ngân sách",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 49,
  },
  {
    idx: 50,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Xác định các thay đổi",
      },
      {
        idx: 1,
        title: "Sử dụng bảng WBS",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Thực hiện các hành động hiệu chỉnh",
      },
      {
        isKey: true,
        idx: 3,
        title: "Xây dựng một hệ thống kiểm soát dự án.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Tất cả các điều dưới đây đều là một phần của quản lý và thực thi quản lý dự án, ngoại trừ: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Một đội chức năng suốt toàn bộ dự án ở mức độ cao, là điển hình của sự sáng tạo và trách nhiệm",
      },
      {
        title:
          "Một đội hỗn loạn lúc ban đầu, nhưng sau đó sẽ trở nên gắn kết và làm việc hiệu quả ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Một đội không thực sự có hiệu quả, nhưng luôn làm việc cùng nhau do môi trường làm việc mà PM đem lại",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Một đội có hiệu năng thấp, nhuệ khí thấp, dễ xung đột và tốc độ thay thế nhân viên cao",
        isKey: true,
      },
    ],
    idx: 51,

    title:
      "Một PM được trang bị để lãnh đạo một dự án kỹ thuật cao trong khu vực với những người ít thông thạo về lĩnh vực này. PM ủy quyền xây dựng lịch làm việc, ước tính chi phí, lựa chọn hành động và phân công hành động cho nhiều thành viên trong đội dự án, và chỉ làm việc như người xem xét và điều phối các hoạt động của dự án. Kết quả của cách tiếp cận này giống như: ",
  },
  {
    title:
      "Bạn đang trong quá trình thực hiện các thay đổi quan trọng cho một sản phẩm đã có, khi bạn biết rằng nguồn lực đã hứa vào lúc khởi động dự án hiện tại đang không có thì điều tốt nhất bạn nên làm là gì? ",
    answers: [
      {
        title:
          ". Chỉ ra làm thế nào mà các nguồn lực đã được cam kết cho dự án của bạn lúc ban đầu",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Lập lại kế hoạch dự án mà không có các nguồn lực đó ",
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Giải thích, trình bày ảnh hưởng nếu nguồn nhân lực đã cam kết không có. ",
        isKey: true,
      },
      {
        title: "Phá dự án, k làm nữa",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 52,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 53,

    answers: [
      {
        title:
          "Một bên có liên quan không được liên quan thỏa đáng trong dự án (not adequately involved)",
        idx: 0,
        isKey: true,
      },
      {
        title:
          "Tôn chỉ dự án và kế hoạch dự án không được giải thích kỹ lưỡng hoặc không được xem xét lại một cách đầy đủ từ phía khách hàng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Hợp đồng truyền thông không đầy đủ và không cung cấp các thông tin yêu cầu cho các bên có liên quan",
        isKey: false,
      },
      {
        idx: 3,
        title: "Nhà tài trợ dự án không cung cấp đầy đủ cho dự án",
        isKey: false,
      },
    ],
    title:
      "Bạn được phân công để quản lý việc phát triển của website đầu tiên của một tổ chức. website này sẽ rất phức tạp và có tính tương tác cao, và đội dự án của bạn cũng như khách hàng chưa có kinh nghiệm gì trong việc phát triển website. Thời hạn bàn giao sản phẩm rất gấp gáp. Bất kỳ một sự chậm trễ nào sẽ tiêu tốn tiền của công ty bạn cũng như khách hàng. Bạn có một nhà tài trợ dự án và có bản hợp đồng bàn giao, tôn chỉ dự án và kế hoạch quản lý dự án đều đã có chữ ký. Bên phía khách hàng đã giữ lại đầy đủ các thông báo của quá trình thực hiện dự án thông qua báo cáo trạng thái và biên bản họp. dự án đang trong đúng lịch trình, trong ngân sách và việc xem xét lại cuối cùng (chỉ mang tính hình thức) cũng đã được lên lịch. Đột nhiên, bạn nghe rằng toàn bộ nỗ lực có thể bị hủy bởi vì sản phẩm đang phát triển là hoàn toàn không được chấp nhận. điều gì là nguyên nhân của vấn đề này? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 54,
    title:
      "PM nhận được 1 thay đổi từ khách hàng và thay đổi này không ảnh hưởng tới lịch hoạt động của dự án và dễ dàng để hoàn thành. PM nên làm gì đầu tiên? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thực hiện thay đổi càng sớm càng tốt",
      },
      {
        isKey: false,
        title: "Liên lạc với nhà tài trợ để được sự cho phép",
        idx: 1,
      },
      {
        isKey: false,
        title: "Liên lạc với ban kiểm soát thay đổi",
        idx: 2,
      },
      {
        idx: 3,
        title: "Ước tính các thành phần khác trong tam giác ràng buộc.",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Công ty của bạn vừa trúng thầu một dự án lớn. dự án sẽ bắt đầu trong vòng 3 tháng và có trị giá 2000000$. Bạn đang là PM của một dự án đã có. Điều đầu tiên bạn nên làm là gì sau khi nghe tin về dự án mới? ",
    idx: 55,
    answers: [
      {
        title:
          "Hỏi ban điều hành công ty về nguồn nhân lực mà dự án mới sẽ sử dụng",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Nâng mức nguồn lực cho dự án của bạn",
      },
      {
        title: "Dừng, phá bỏ dự án của bạn (crash your project)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Hỏi ban điều hành công ty xem dự án mới có ảnh hưởng tới dự án của bạn hay không",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 56,
    title:
      "Bạn là PM vừa được phân công để kiểm soát một dự án (người PM cũ của dự án này vừa rời khỏi công ty). Người PM cũ nói với bạn rằng dự án đang trong đúng lịch trình, nhưng chỉ khi anh ta thúc giục liên tục các nhân viên làm việc. điều đầu tiên bạn sẽ làm trong cương vị 1 PM mới là: ",
    answers: [
      {
        isKey: false,
        title: "Kiểm tra trạng thái rủi ro",
        idx: 0,
      },
      {
        isKey: false,
        title: "Kiểm tra chi phí hiệu năng",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Xác định chiến lược quản lý ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Nói với đội dự án về mục tiêu của bạn",
      },
    ],
  },
  {
    answers: [
      {
        title: "Thảo luận vấn đề khách hàng đưa ra với đội dự án",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tính toán lại các ràng buộc (baseline)",
        isKey: false,
      },
      {
        title: "Thương lượng lại hợp đồng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Gặp khách hàng để trao đổi",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 57,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn được phân công làm PM của một dự án đang được thực hiện. dự án vẫn đang thực hiện trong ranh giới các ràng buộc, tuy nhiên khách hàng k hài lòng với hiệu năng của dự án. Điều đầu tiên bạn nên làm là gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 58,

    title:
      "Một PM biết được rằng các hành động hiệu chỉnh vừa được 1 nhân viên dự án thực hiện, nhưng chưa được ghi lại. người PM này nên làm gì tiếp theo? ",
    answers: [
      {
        title: "Báo cáo vi phạm với giám đốc chức năng",
        isKey: false,
        idx: 0,
      },
      {
        title: "Làm sáng tỏ lý do đằng sau hành động của nhân viên đó ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Thêm hành động hiệu chỉnh này vào bản ghi (historical record)",
      },
      {
        title: "Tìm xem ai đã gây ra vấn đề này (ai đã thực hiện hiệu chỉnh)",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Dồn lịch thực hiện để hoàn thành đúng thời hạn (recover the 2 weeks)",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Cắt giảm phạm vi để hoàn thành đúng hạn, bù lại 2 tuần thêm vào",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tham khảo ý kiến nhà tài trợ trước khi có bất kỳ hành động nào",
      },
      {
        title:
          "Hỏi ý kiến (or khuyên bảo - advise) khách hàng về ảnh hưởng của sự thay đổi",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 59,

    title:
      "Yêu cầu của khách hàng thay đổi thông số của sản phẩm sẽ làm thời gian thực hiện dự án tăng thêm 2 tuần. người PM nên làm gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong quá trình thực thi dự án, PM xác định có một thay đổi về nguyên vật liệu cho dự án là cần thiết. PM triệu tập 1 cuộc họp để lên kế hoạch thực hiện thay đổi này. Đây là một ví dụ về: ",
    idx: 60,

    answers: [
      {
        title: "Quản lý bằng mục tiêu",
        isKey: false,
        idx: 0,
      },
      {
        title: "Sự thiếu hụt hệ thống kiểm soát thay đổi",
        idx: 1,
        isKey: true,
      },
      {
        title: "Quan hệ giữa các thành viên dự án được đánh giá tốt",
        isKey: false,
        idx: 2,
      },
      {
        title: "Sự thiếu hụt một bảng WBS rõ ràng",
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
        title:
          "Hỏi nhân viên đó làm thế nào để xác định sự cần thiết của chức năng này",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Tổ chức họp để xem xét lại công việc đã hoàn thành của nhân viên này",
      },
      {
        idx: 2,
        title: "Tìm kiếm các chức năng thêm vào khác",
        isKey: false,
      },
      {
        title:
          "Hỏi nhân viên đó làm thế nào anh ta biết được rằng không ảnh hưởng tới thời gian, chi phí hay chất lượng của dự án",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 61,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án đang phát triển tốt khi tất cả các thay đổi bất ngờ từ các bên có liên quan. Sau khi các thay đổi đã được xác định, PM dành thời gian với tất cả các bên có liên quan để tìm ra tại sao lại có thay đổi và xem xét có thêm thay đổi nữa hay không. Công việc dự án tạm lắng xuống khi một nhân viên tình cờ đề cập với PM rằng anh ta đã thêm chức năng vào sản phẩm của dự án mà không làm ảnh hưởng tới thời gian, chi phí hay chất lượng của dự án. PM nên làm gì đầu tiên? ",
  },
  {
    idx: 62,

    answers: [
      {
        title: "Gặp các bên có liên quan",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Gặp đội dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Thương lượng lại về phần còn lại của hợp đồng",
      },
      {
        isKey: true,
        idx: 3,
        title: "Theo sau hệ thống kiểm soát thay đổi",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang quản lý một hợp đồng có giá sẵn (fixed price contract). Cô ấy nghĩ rằng một thay đổi lớn từ yêu cầu của khách hàng sẽ ảnh hưởng tới lịch trình dự án. Cô ấy nên làm gì đầu tiên? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Thay đổi thành phần A từ thành phần B. thành phần A có chi phí cao hơn nhưng có vòng đời chi phí ít hơn B",
        idx: 0,
      },
      {
        title:
          "Thay đổi nguồn lực C thành nguồn lực B để hoàn thành hành động A. nguồn lực B có nhiều nhân viên có kinh nghiệm hơn",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Di chuyển hành động B và H để thực hiện cùng lúc, và chấp nhận tăng 30% rủi ro mà 5 nguồn lực cần thiết sẽ được thêm vào sau đó ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Bỏ một kiểm tra từ kế hoạch quản lý dự án",
        idx: 3,
      },
    ],
    idx: 63,

    title:
      "Trong khi hoàn thành một dự án, một PM nhận ra rằng anh ta cần giảm bớt chi phí dự án. Sau khi nghiên cứu các lựa chọn của mình, anh ta thực hiện thay đổi dưới đây. Lựa chọn nào sẽ làm giảm chi phí dự án? ",
  },
  {
    title:
      "Dự án này được tuyên bố (chartered?) để xác định cách thức mới để mở rộng vòng đời sản phẩm của một sản phẩm của công ty bậc trung. Người PM tới từ một ban kỹ thuật và đội dự án là từ ban sản phẩm và ban tiếp thị. Tuyên bố phạm vi dự án sơ bộ và kế hoạch dự án đã hoàn thành khi một bên có liên quan thông báo với đội dự án là: có một cách tốt hơn để hoàn thành một gói công việc. họ cung cấp văn bản xem xét kỹ thuật từ ban của họ, văn bản này chứng minh cách thức mới để hoàn thành công việc sẽ thực sự nhanh hơn cách thức cũ. PM đã từng có kinh nghiệm tương tự với phòng ban này trong dự án khác, và hi vọng là sẽ xảy ra trong dự án này. PM nên làm gì đầu tiên? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 64,

    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Liên hệ với phòng ban và phàn nàn về sự thiếu hụt thời hạn cuối cùng (deadline) cho đệ trình phạm vi (submission of scope)",
      },
      {
        isKey: true,
        title:
          "Tìm kiếm xem thay đổi về lịch trình này sẽ ảnh hưởng tới chi phí để hoàn thành gói dự án và chất lượng sản phẩm của gói dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Xem xét nếu có một cách để thay đổi từ môi trường ma trận từ một tổ chức chức năng để loại trừ tất cả các sự can thiệp từ các phòng ban khác",
      },
      {
        title: "Hỏi phòng ban đó nếu họ có các thay đổi nào khác",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 65,
    title:
      "Kết thúc hợp đồng và kết thúc quản lý giống nhau ở chỗ chúng đều có liên quan tới",

    answers: [
      {
        title: "Xác minh, thẩm tra sản phẩm",
        idx: 0,
        isKey: true,
      },
      {
        title: "Buổi họp khởi động dự án",
        idx: 1,
        isKey: false,
      },
      {
        title: "Hoạt động quản lý chất lượng",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Việc tạo ra kế hoạch xác minh phạm vi",
        isKey: false,
      },
    ],
  },
  {
    idx: 66,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Tài liệu lưu trữ của dự án",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tôn chỉ dự án",
      },
      {
        title: "Kế hoạch quản lý dự án",
        isKey: false,
        idx: 2,
      },
      {
        title: "Kế hoạch phân tích rủi ro",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Đầu ra của kết thúc quản lý là sự tạo ra: ",
  },
  {
    title:
      "Tất cả các điều sau đều diễn ra trong khi kết thúc dự án, ngoại trừ: ",
    idx: 67,

    answers: [
      {
        idx: 0,
        title: "Các bài học thu được",
        isKey: false,
      },
      {
        isKey: false,
        title: "Sự chấp nhận chính thức",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giảm sử dụng nguồn lực",
      },
      {
        isKey: true,
        idx: 3,
        title: "Phân tích lợi ích chi phí thực hiện",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 68,
    title: "Dự án không được hoàn thành trừ phi: ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Phạm vi dự án được hoàn thành, kết thúc việc quản lý được hoàn thành và các hóa đơn được thanh toán",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Có sự chấp nhận chính thức, và bất kỳ yêu cầu khác nào cho kết thúc dự án đã được ghi rõ trong hợp đồng đều được đáp ứng",
      },
      {
        idx: 2,
        isKey: false,
        title: "Khách hàng hài lòng và hóa đơn cuối cùng được thanh toán",
      },
      {
        title: "Hoàn thiện các bài học rút ra.",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Bạn đang làm việc trong một dự án phát triển phần mềm mới và sử dụng hơn 230 nhân lực. cuối cùng, tất cả phạm vi đã hoàn thành. Điều nên làm bây giờ là (it's would be best to)",
    answers: [
      {
        title: "Tổ chức một buổi tiệc cho đội dự án",
        idx: 0,
        isKey: false,
      },
      {
        title: "Chắc chắn rằng dự án được tích hợp với các dự án khác",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Bắt đầu tập trung vào dự án riêng của bạn",
        idx: 2,
      },
      {
        title: "Phân tích xem dự án thành công hay thất bại.",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 69,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Xác định các rủi ro",
        isKey: false,
      },
      {
        title: "Ước lượng các gói công việc",
        isKey: false,
        idx: 1,
      },
      {
        title: "Ước lượng chi tiết các nguồn lực",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Yêu cầu về kinh doanh cho dự án",
      },
    ],
    title: "Tôn chỉ dự án bao gồm điều nào sau đây? ",

    idx: 70,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một PM đang cố gắng để thuyết phục ban lãnh đạo sử dụng quản lý dự án và quyết định bắt đầu cái thiện việc quản lý dự án của công ty bằng cách sử dụng tôn chỉ dự án. Điều nào dưới đây mô tả chính xác nhất tại sao tôn chỉ dự án có thể giúp PM này: ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tôn chỉ dự án mô tả chi tiết cần phải hoàn thành cái gì",
      },
      {
        isKey: false,
        title: "Tôn chỉ dự án liệt kê tên của toàn bộ đội dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tôn chỉ dự án mang lại quyền lực cho PM",
      },
      {
        isKey: false,
        idx: 3,
        title: "Tôn chỉ dự án mô tả lịch sử dự án",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 71,
  },
  {
    idx: 72,
    answers: [
      {
        title: "Tối ưu hóa ràng buộc",
        idx: 0,
        isKey: true,
      },
      {
        title: "Cách tiếp cận cạnh tranh",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Thông số đo đạc lợi ích",
        idx: 2,
      },
      {
        title: "Phân tích ảnh hưởng",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Lập trình theo độ dài (linear programming) là một ví dụ của loại hình tiêu chuẩn lựa chọn dự án nào? ",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Xây dựng quy trình kiểm soát thay đổi tích hợp",
        idx: 0,
      },
      {
        isKey: true,
        title:
          "Chỉ ra cho quản lý của bạn biết ảnh hưởng của việc thi hành mà không được phê duyệt",
        idx: 1,
      },
      {
        isKey: false,
        title: "Tập trung vào hoàn thành dự án đã được ký trong tôn chỉ dự án",
        idx: 2,
      },
      {
        idx: 3,
        title: "Bắt đầu làm việc chỉ trong các chuỗi hành động then chốt",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn vừa làm xong tôn chỉ dự án nhưng chưa được phê duyệt. quản lý của bạn và thủ trưởng của anh ta yêu cầu dự án phải bắt đầu ngay lập tức. Điều nào dưới đây là tốt nhất để thực hiện? ",
    idx: 73,
  },
  {
    idx: 74,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Tạo ra mục tiêu dự án và phát triển tuyên bố phạm vi dự án sơ bộ",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Ước tính lại lịch trình dự án với đầu vào (input) từ phòng kỹ thuật",
      },
      {
        idx: 2,
        title:
          "Thực hiện xác minh phạm vi đối với công việc mới với sự giúp đỡ của các bên có liên quan",
        isKey: false,
      },
      {
        isKey: false,
        title: "Xác định các thay đổi cụ thể đối với công việc đã có",
        idx: 3,
      },
    ],
    title:
      "Phòng kỹ thuật vừa phát hiện ra một vấn đề với hệ thống tính toán chi phí và đã yêu cầu phòng hệ thống để phân tích điều gì sai và sửa chữa nó. Bạn là một PM đang làm việc với chương trình tính toán chi phí trong một dự án khác. Ban lãnh đạo đã xác định yêu cầu thay đổi đối với ban kiểm soát thay đổi là thêm vào dự án của bạn một công việc mới. dự án đã có của bạn có hiệu suất chi phí (CPI) là 1.2 và chỉ số thực hiện theo lịch (SPI) là 1.3 nên bạn cần thêm phòng để thêm công việc mà không làm chậm trễ dự án của bạn hay làm tăng chi phí của dự án này. Sau một vài phân tích, bạn xác định rằng công việc mới và công việc đã có không ảnh hưởng lẫn nhau và có thể làm đồng thời. 2 công việc yêu cầu các kỹ năng khác nhau. Điều tốt nhất nên làm là: ",
  },
  {
    answers: [
      {
        title: "Xác minh phạm vi",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kế hoạch phản ứng rủi ro",
      },
      {
        title: "Kế hoạch quản lý nhân viên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Các bài học rút ra",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 75,
    title:
      "Toàn bộ các công việc kỹ thuật trong dự án đã hoàn thành. Điều nào phải hoàn thành tiếp? ",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Ước tính chi phí một cách có hệ thống về các thành phần của WBS",
        isKey: false,
      },
      {
        idx: 1,
        title: "Cung cấp sự chứng minh dự án (project justification)",
        isKey: false,
      },
      {
        title: "Xác định mức độ cho mỗi thành phần",
        isKey: true,
        idx: 2,
      },
      {
        title: "Sử dụng nó trong phần mềm quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 76,
    title: "Một hệ thống đánh số của WBS cho phép các nhân viên dự án: ",
  },
  {
    answers: [
      {
        title: "Đội dự án",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "PM",
        isKey: false,
      },
      {
        title: "Khách hàng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Các bên có liên quan",
        idx: 3,
      },
    ],
    title:
      "WBS có thể được suy nghĩ tốt nhất như một sự viện trợ hiệu quả cho truyền thông……. ",

    idx: 77,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Điều nào dưới đây là thuộc tính chính của xác minh phạm vi? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hoàn thành nhiều kế hoạch quản lý phạm vi dự án",
      },
      {
        idx: 1,
        title: "Sự chấp nhận của khách hàng về sản phẩm bàn giao của dự án",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Sự cải thiện ước lượng lịch trình",
      },
      {
        idx: 3,
        isKey: false,
        title: "Sự cải thiện của hệ thống thông tin quản lý dự án",
      },
    ],
    idx: 78,
  },
  {
    answers: [
      {
        title: "Từ điển WBS",
        idx: 0,
        isKey: true,
      },
      {
        title: "Danh sách hoạt động",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tuyên bố phạm vi dự án sơ bộ ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kế hoạch quản lý phạm vi dự án",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong giai đoạn thực thi, một nhân viên dự án hỏi người PM do anh ta không chắc chắn mình phải thực hiện công việc nào trong dự án. Tài liệu nào dưới đây chứa bản mô tả chi tiết của các gói công việc? ",
    idx: 79,
  },
  {
    title: "Tuyên bố phạm vi dự án được tạo ra trong giai đoạn nào của dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "Khởi tạo",
        idx: 0,
      },
      {
        isKey: true,
        title: "Lên kế hoạch",
        idx: 1,
      },
      {
        title: "Thực thi",
        idx: 2,
        isKey: false,
      },
      {
        title: "Kiểm soát",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 80,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Không thay đổi",
        isKey: false,
      },
      {
        idx: 1,
        title: "Giảm xuống",
        isKey: false,
      },
      {
        title: "Giảm xuống sau đó tăng lên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Tăng lên",
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 81,
    title:
      "Chương trình được lên kế hoạch nhiều năm trước khi có một giới thiệu lớn của công nghệ mới. trong khi lên kế hoạch cho dự án mới để bắt đầu trong chương trình này, PM đã mở rộng kế hoạch quản lý phạm vi dự án do dự án trở nên phức tạp hơn. Mức độ không chắc chắn trong phạm vi là: ",
  },
  {
    title:
      "Một kế hoạch quản lý dự án nên thực tế để sử dụng quản lý dự án. Phương pháp nào dưới đây là tốt nhất để có được một kế hoạch quản lý dự án có tính thực tế? ",
    answers: [
      {
        idx: 0,
        title:
          " Nhà tài trợ tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ PM",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Các giám đốc chức năng tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ PM",
        idx: 1,
      },
      {
        title:
          "PM tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ nhà quản lý cấp cao",
        isKey: false,
        idx: 2,
      },
      {
        title: "PM tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ đội dự án",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 82,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 83,
    answers: [
      {
        title: "Truyền thông với khách hàng",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Chỉ ra lịch và ngày cho mỗi gói công việc",
        isKey: false,
      },
      {
        isKey: false,
        title: "Chỉ ra các giám đốc chức năng cho mỗi nhân viên dự án",
        idx: 2,
      },
      {
        title: "Chỉ ra yêu cầu kinh doanh cho dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một PM mới được các chuyên gia quản lý dự án có kinh nghiệm cố vấn. anh ta thấy rằng thật khó để tìm đủ thời gian quản lý dự án do dự án và phạm vi sản phẩm đang ngày càng phức tạp. các chuyên gia đề cập tới các công cụ đơn giản cho quản lý dự án như WBS, có thể được sử dụng trong quá trình thực hiện dự án để giúp đỡ việc quản lý. Vậy WBS dùng để làm gì? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Quy trình quản lý thay đổi",
      },
      {
        isKey: true,
        title: "Quản lý phạm vi",
        idx: 1,
      },
      {
        isKey: false,
        title: "Phân tích chất lượng",
        idx: 2,
      },
      {
        isKey: false,
        title: "Phân tích phạm vi",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Trong buổi họp với đội dự án, một nhân viên đề nghị tăng phạm vi to hơn phạm vi trong tôn chỉ dự án. PM chỉ ra rằng đội dự án cần tập trung vào hoàn thành tất cả công việc và chỉ công việc được yêu cầu. đây là một ví dụ về: ",
    idx: 84,
  },
  {
    idx: 85,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Cuối dự án (at the end of project)",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đầu dự án (at the beginning of project)",
      },
      {
        isKey: true,
        title: "Ở cuối mỗi pha của dự án",
        idx: 2,
      },
      {
        title: "Trong giai đoạn lập kế hoạch",
        isKey: false,
        idx: 3,
      },
    ],

    title: "Khi nào thì xác minh phạm vi nên được hoàn thành: ",
  },
  {
    answers: [
      {
        title:
          "Gặp đội dự án để xác định nếu thay đổi này có thể phải thực hiện",
        idx: 0,
        isKey: false,
      },
      {
        title: "Hỏi khách hàng về mô tả thay đổi này",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Giải thích rằng thay đổi không thể thực hiện vào thời điểm này của dự án",
      },
      {
        title: "Thông báo với ban lãnh đạo",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 86,
    title:
      "Dự án đã gần như hoàn thành. Dự án có biến động về lịch trong là 300 và biến động chi phí là -900. Tất cả đã được hoàn thành và đáp ứng yêu cầu chất lượng ngoại trừ việc giám định kiểm soát chất lượng. Tất cả các mục trong nhật ký vấn đề (issue log) đều được giải quyết. Khá nhiều nguồn lực đã được giải phóng. Nhà tài trợ tổ chức một buổi gặp mặt để xác minh sản phẩm khi khách hàng thông báo với PM rằng họ muốn một thay đổi chính đối với phạm vi dự án. PM nên làm gì? ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Nói với học rằng WBS sẽ ngăn chặn các công việc từ không tốt tới tốt (from slipping to the crack)",
      },
      {
        idx: 1,
        title: "Nói với họ rằng WBS không cần thiết",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Nói với họ rằng WBS là yêu cầu bắt buộc nếu dự án kéo theo những hợp đồng",
      },
      {
        isKey: false,
        title: "Nói với họ rằng WBS là cách duy nhất để xác định rủi ro.",
        idx: 3,
      },
    ],

    idx: 87,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn vừa tham gia vào phòng quản lý dự án sau 5 năm làm việc trong dự án. Một trong những điều bạn muốn giới thiệu với công ty là sự cần thiết của bảng WBS. Một vài PM đã tức giận do bạn đang đòi hỏi họ phải làm thêm việc. Điều nào dưới đây là tốt nhất khi bạn muốn thuyết phục họ sử dụng WBS? ",
  },
  {
    answers: [
      {
        isKey: false,
        title: "A bar chart (biểu đồ đoạn)",
        idx: 0,
      },
      {
        title: "Team buy in",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: " C. Các hoạt động",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Một danh sách các rủi ro",
      },
    ],

    idx: 88,
    title:
      "Một PM mới vừa xin bạn lời khuyên để tạo ra bảng WBS. Sau khi bạn giải thích quy trình cho anh ta, anh ta hỏi bạn rằng nên sử dụng phần mềm nào để lập bảng WBS và anh ta nên làm gì với nó khi anh ta hoàn thành. Bạn sẽ trả lời rằng bức hình (picture) không phải là kế quả giá trị nhất của việc tạo bảng WBS, đó là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 89,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cho đến khi nó có kết thúc hợp lý",
      },
      {
        idx: 1,
        title: "Cho đến khi không thể chia nhỏ hơn về mặt logic",
        isKey: false,
      },
      {
        isKey: true,
        title: "Cho đến khi công việc được làm bởi 1 người",
        idx: 2,
      },
      {
        idx: 3,
        title: "Cho đến khi nó có thể ước tính một cách thực tế",
        isKey: false,
      },
    ],
    title:
      "Để quản lý dự án một cách hiệu quả, công việc nên được chia nhỏ ra. Điều nào dưới đây KHÔNG mô tả cách chia công việc nhỏ tới mức nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 90,
    title:
      "Một PM có thể sẽ sử dụng…………… để chắc chắn rằng đội dự án biết rõ công việc nào được bao gồm trong mỗi gói công việc của họ?",
    answers: [
      {
        title: " Tuyên bố phạm vi dự án",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Phạm vi sản phẩm",
        isKey: false,
      },
      {
        isKey: true,
        title: "Từ điển WBS",
        idx: 2,
      },
      {
        title: "Lịch trình",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Tạo ra tuyên bố phạm vi dự án",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Chắc chắn rằng tất cả các bên có liên quan đã có đầu vào trong phạm vi (có tham gia)",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Phân tích rủi ro dự án",
      },
      {
        isKey: false,
        idx: 3,
        title: "Bắt đầu thực hiện kế hoạch quản lý dự án",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      " Một PM vừa được phân công cho 1 dự án mới và được đưa cho tôn chỉ dự án và tuyên bố phạm vi dự án sơ bộ. Điều đầu tiên anh ta nên làm là gì? ",
    idx: 91,
  },
  {
    answers: [
      {
        title: "Xác minh phạm vi",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kiểm soát chất lượng",
      },
      {
        isKey: false,
        title: "Báo cáo hiệu năng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát chi phí",
      },
    ],

    idx: 92,
    title:
      "Pha xây dựng của một sản phẩm phần mềm mới sắp hoàn thành. Pha tiếp theo là kiểm thử và cài đặt (implementation). Theo lịch trình, dự án chỉ còn 2 tuần nữa. PM nên làm gì truwóc khi chuyển sang pha cuối cùng",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 93,
    title:
      " Bạn đang quản lý một dự án 6 tháng và tổ chức họp mặt 1 tuần 2 lần với các bên có liên quan tới dự án. Sau 5.5 tháng làm việc, dự án vẫn theo đúng lịch trình và ngân sách, nhưng các bên có liên quan không hài lòng với sản phẩm thu được. Tình huống này sẽ làm chậm 1 tháng để hoàn thành dự án. Quy trình quan trọng nhất để ngăn chặn tình huống này là: ",

    answers: [
      {
        title: "Kiểm soát rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        title: "Kiểm soát lịch trình",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Lên kế hoạch phạm vi",
      },
      {
        title: "Kiểm soát phạm v",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Tất cả các điều dưới đây đều là một phần của đường chuẩn phạm vi (scope baseline) ngoại trừ:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Kế hoạch quản lý phạm vi dự án",
      },
      {
        idx: 1,
        title: "Tuyên bố phạm vi dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bảng WBS",
      },
      {
        idx: 3,
        title: "Từ điện WBS",
        isKey: false,
      },
    ],
    idx: 94,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 95,
    title:
      " Một trong các bên liên quan của dự án liên lạc với PM để thảo luận vài mở rộng về phạm vi mà họ muốn thêm vào dự án. PM hỏi về văn bản chi tiết và các hoạt động trong quy trình quản lý phạm vi. Khi phạm vi yêu cầu đã hoàn tất, PM nên làm gì tiếp theo?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Hỏi bên có liên quan nếu họ mong chờ thêm thay đổi",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Hoàn thành kiểm soát thay đổi tích hợp (integrated change control)",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Chắc chắn rằng ảnh hưởng của thay đổi đã được các bên có liên quan hiểu rõ ",
      },
      {
        title:
          "Tìm ra nguyên nhân gốc rễ tại sao phạm vi lại không được khám phá ra trong khi lập kế hoạch dự án. thành khi kiểm soát phạm vi chưa hoàn thành",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 96,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Để quản lý lịch trình, một PM phân tích lại dự án để dự đoán trước thời gian thực hiện dự án. Cô ấy phân tích chuỗi hành động với độ linh hoạt lịch trình ít nhất, đây là kỹ thuật gì? ",
    answers: [
      {
        isKey: true,
        title: "Phương pháp đường tới hạn (critical path method)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sơ đồ dòng (flowchart)",
      },
      {
        title: "Sơ đồ ưu tiên",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "WBS",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Một thành phần (or phụ thuộc - dependency) yêu cầu thiết kế phải hoàn thành trước khi sản xuất bắt đầu. Đây là ví dụ của: ",
    idx: 97,
    answers: [
      {
        title: "Thành phần rời rạc",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Thành phần ngoại cảnh",
      },
      {
        idx: 2,
        isKey: true,
        title: "Thành phần bắt buộc",
      },
      {
        title: "Thành phần phạm vi",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 98,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Quan hệ logic",
        idx: 0,
      },
      {
        title: "Các đường then chốt",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Cân bằng tài nguyên",
      },
      {
        idx: 3,
        title: "Quá trình hoặc trạng thái",
        isKey: true,
      },
    ],
    title:
      "Biểu đồ đoạn (bar charts) giải thích điều nào tốt hơn là sơ đồ mạng?",
  },
  {
    title:
      " Nếu ước tính lạc quan nhất (optimistic estimate) cho 1 hoạt động là 12 ngày, và ước tính bi quan nhất là 18 ngày, độ lệch tiêu chuẩn của hành động này là bn?",
    answers: [
      {
        idx: 0,
        title: "1",
        isKey: true,
      },
      {
        title: "1.3",
        isKey: false,
        idx: 1,
      },
      {
        title: "6",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "3",
      },
    ],
    idx: 99,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Phương pháp giải quyết vấn đề bằng cách đánh giá kinh nghiệm (heuristic) được miêu tả tốt nhất là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Một công cụ điều khiển",
      },
      {
        idx: 1,
        title: "Phương pháp lên lịch trình",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Công cụ lên kế hoạch",
      },
      {
        title: "Quy tắc tự đặt ra (rule of thumb)",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 100,
  },
  {
    answers: [
      {
        title:
          "Khối lượng thời gian một hành động có thể trễ mà không làm chậm tiến độ dự án",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Khối lượng thời gian một hành động có thể trễ mà không làm chậm ngày bắt đầu của hành động tiếp theo",
      },
      {
        isKey: true,
        idx: 2,
        title: "Thời gian chờ đợi",
      },
      {
        isKey: false,
        title:
          " Sản phẩm của 2 hướng thành công tiên tiến và lạc hậu??? (the product of a forward and backward pass)",
        idx: 3,
      },
    ],
    idx: 101,

    title: "Độ trễ có nghĩa là gì (lag means)",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "WBS",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Sơ đồ mạng",
        isKey: true,
      },
      {
        title: "Biểu đồ đoạn (bar chart)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tôn chỉ dự án",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "Công cụ quản lý dự án nào tốt nhất để xác định thời gian dài nhất thực hiện 1 dự án?",
    idx: 102,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title:
          "Đường tới hạn có thể lướt qua a dummy (k biết nên dịch là cái gì J) a critical path can run over a dummy)",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chỉ có thể có 1 đg then chốt",
      },
      {
        isKey: false,
        title:
          "Sơ đồ mạng sẽ thay đổi mỗi khi thời gian kết thúc dự án thay đổi",
        idx: 2,
      },
      {
        title: "Một dự án không bao giờ có trễ tiêu cực (negative float?)",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Điều nào dưới đây là đúng?",
    idx: 103,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Ngắn hơn khoảng thời gian tồn tại của hoạt động dài ngày nhất",
      },
      {
        idx: 1,
        title: " Ngắn hơn khoảng thời gian của hoạt động đại diện của nó",
        isKey: false,
      },
      {
        title: "Không có khoảng thời gian tồn tại",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Có cùng khoảng thời gian tồn tại giống hoạt động đại diện của nó",
      },
    ],
    title: " Khoảng thời gian tồn tại của một điểm mốc là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 104,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "không có quan hệ gì cả",
      },
      {
        idx: 1,
        title: "độ lệch tiêu chuẩn cho biết nếu ước tính là chính xác",
        isKey: false,
      },
      {
        title: "độ lệch tiêu chuẩn cho biết độ không chắc chắn của ước tính",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "độ lệch tiêu chuẩn cho biết nếu ước tính có bao gồm cả phần thêm (đệm vào - pad) vào",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Điều nào dưới đây mô tả tốt nhất về quan hệ giữa độ lệch tiêu chuẩn và rủi ro? ",
    idx: 105,
  },
  {
    idx: 106,

    answers: [
      {
        title: "Có được các dấu hiệu của rủi ro kéo theo trong dự án",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Ước tính độ dài của hoạt động",
        idx: 1,
      },
      {
        title: " Mô phỏng thứ tự xảy ra của các hoạt động",
        isKey: false,
        idx: 2,
      },
      {
        title: " Chứng minh cho ban lãnh đạo rằng cần thêm nhân viên dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Phân tích Monte Carlo được dùng để làm gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Độ trễ của một hoạt động được quyết định bởi",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 107,
    answers: [
      {
        title: "Việc thực hiện phân tích Monte Carlo",
        idx: 0,
        isKey: false,
      },
      {
        title: "Thời gian chờ đợi giữa các hoạt động",
        isKey: false,
        idx: 1,
      },
      {
        title: "Độ trễ của việc quyết định",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Việc quyết định khối lượng thời gian một hoạt động có thể bị chậm lại bởi sự chậm trễ trong đường tới hạn",
      },
    ],
  },
  {
    idx: 108,

    title:
      "Một dự án có 3 đường tới hạn. Điều nào dưới đây mô tả đúng nhất ảnh hưởng của các đường tới hạn này tới dự án? ",
    answers: [
      {
        isKey: false,
        title: "Làm cho dự án dễ quản lý hơn",
        idx: 0,
      },
      {
        isKey: true,
        title: "Làm gia tăng rủi ro của dự án",
        idx: 1,
      },
      {
        title: "Yêu cầu nhiều nhân lực hơn",
        idx: 2,
        isKey: false,
      },
      {
        title: "Làm dự án tốn kém hơn",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thực hiện phân tích Monte Carlo",
      },
      {
        idx: 1,
        isKey: false,
        title: " Xúc tiến dự án (fast track the project)",
      },
      {
        idx: 2,
        isKey: true,
        title: "Thực hiện cân bằng nguồn tài nguyên",
      },
      {
        idx: 3,
        title: "Phân tích vòng đời chi phí",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nếu thời gian và chi phí dự án không quan trọng như số lượng các nguồn lực sử dụng trong 1 tháng, việc tốt nhất để làm trong các việc dưới đây là: ",
    idx: 109,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lên kế hoạch dự án",
      },
      {
        isKey: false,
        idx: 1,
        title: "Báo cáo với thành viên đội dự án",
      },
      {
        idx: 2,
        isKey: true,
        title: "Báo cáo với ban lãnh đạo",
      },
      {
        isKey: false,
        idx: 3,
        title: "Phân tích rủi ro",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Khi nào đồ thị điểm mốc (milestone chart) được sử dụng thay cho sơ đồ đoạn (bar chart)? ",
    idx: 110,
  },
  {
    idx: 111,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Kế hoạch quản lý dự án của bạn làm lịch trình dự án khá tốn thời gian. Nếu sơ đồ mạng của dự án không thay đổi nhưng bạn có thêm các nguồn nhân lực, điều tốt nhất nên làm là:",

    answers: [
      {
        title: "Xúc tiến dự án",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Cấp lại các nguồn lực",
        isKey: false,
      },
      {
        isKey: true,
        title: "Hủy dự án (crash)",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích Monte Carlo",
      },
    ],
  },
  {
    idx: 112,
    title:
      " Phương pháp sơ đồ ưu tiên khác với phương pháp sơ đồ mũi tên ở chỗ sơ đồ ưu tiên có đặc điểm: ",

    answers: [
      {
        isKey: false,
        title: " Có thể sử dụng PERT",
        idx: 0,
      },
      {
        title: " Có 4 quan hệ giữa các hành động",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title:
          "Chỉ có quan hệ finish-to-finish (A F2F B tức là B không thể kết thúc trc khi A kết thúc)",
        isKey: false,
      },
      {
        title: "Có thể sử dụng các hành động k đúng (dummy activities)",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Nói với nhà quản lý cấp cao rằng đường tới hạn của dự án không cho phép dự án hoàn thành trước hạn",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Nói với thủ trưởng của bạn",
      },
      {
        title: " Gặp đội dự án và tìm kiếm lựa chọn để hủy hoặc xúc tiến dự án",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "Làm việc cật lực và nhìn vào trạng thái dự án trong tháng tới. ",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Điều nào dưới đây là tốt nhất để thực hiện cố gắng hoàn thành một dự án trước 2 ngày? ",
    idx: 113,
  },
  {
    title:
      " Trong nỗ lực hoàn thành dự án trước hạn, PM tìm kiếm chi phí liên kết với việc hủy từng hoạt động. Cách tiếp cận tốt nhất để hủy hoạt động sẽ bao gồm tìm kiếm trong:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Ảnh hưởng rủi ro của việc hủy từng hoạt động",
      },
      {
        title: " Quan điểm của khách hàng đối với từng hoạt động bị hủy",
        isKey: false,
        idx: 1,
      },
      {
        title:
          " Quan điểm của thủ trưởng về hoạt động nào bị hủy, hoạt động nào được làm tiếp",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: " Các giai đoạn trong vòng đời dự án mà hoạt động đó xảy ra",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 114,
  },
  {
    title:
      ". Một PM đang cố gắng để sắp xếp tất cả các hành động trong dự án và đã xác định được: hoạt động 1 có thể thực hiện ngay lập tức và ước tính sẽ kéo dài trong 1 tuần. Hoạt động 2 sẽ bắt đầu sau khi hoạt động 1 hoàn thành và ước tính kéo dài trong 4 tuần. Hoạt động 3 có thể bắt đầu sau khi hoạt động 2 hoàn thành và ước tính kéo dài trong 5 tuần. Hoạt động 4 có thể bắt đầu sau khi hoạt động 1 hoàn thành và ước tính kéo dài trong 8 tuần. Hoạt động 3 và 4 phải được hoàn thành trước khi kết thúc dự án. Vậy đường tới hạncủa dự án này kéo dài trong bao lâu? ",
    answers: [
      {
        title: "10",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "11",
      },
      {
        isKey: false,
        title: "14",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "8",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 115,
  },
  {
    title:
      "Dựa vào dữ liệu của câu hỏi trên, nếu hoạt động 4 kéo dài trong 10 tuần, đường tới hạn của dự án sẽ kéo dài trong bao lâu? ",
    answers: [
      {
        idx: 0,
        title: "10",
        isKey: false,
      },
      {
        title: "11",
        idx: 1,
        isKey: true,
      },
      {
        title: "14",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "8",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 116,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 117,
    answers: [
      {
        title: "Sắp xếp các hành động (activity sequencing)",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Xây dựng lịch trình",
      },
      {
        title: "Định nghĩa phạm vi",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tạo ra tôn chỉ dự án",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      " Điều nào dưới đây bao gồm việc hỏi đội dự án về thời gian ước tính cho hoạt động của họ và có được sự đồng ý (reaching agreement)trong lịch cho mỗi hoạt động?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cắt giảm phạm vi dự án",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Gặp ban lãnh đạo và nói với họ rằng thời với hạn yêu cầu không thể hoàn thành kịp dự án",
      },
      {
        isKey: false,
        idx: 2,
        title: "Làm việc thêm ngoài giờ",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Xác định các lựa chọn để dồn lịch và giới thiệu chúng với ban lãnh đạo như một lựa chọn khuyến nghị.",
      },
    ],
    idx: 118,
    title:
      "Một PM đang trong giai đoạn thực thi của một dự án xây dựng lớn khi anh khám phá ra thời gian cần thiết để hoàn thành dự án dài hơn thời gian hiện có. Điều tốt nhất nên làm là gì?",
  },
  {
    answers: [
      {
        title:
          "Đội dự án không tạo ra ước tính và việc ước tính sẽ tốn thời gian nếu sử dụng phương pháp này",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: " Đội dự án không tạo ra ước tính và sơ đồ mạng k được sử dụng",
      },
      {
        isKey: false,
        idx: 2,
        title: " Ước tính quá tốt thời gian và nên được ban lãnh đạo tạo ra",
      },
      {
        title:
          "Ước lượng dự án nên giống với ngày yêu cầu hoàn thành của khách hàng",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 119,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong khi lên kế hoạch dự án, bạn ước tính thời gian cần thiết cho mỗi hoạt động và thêm ước tính để tạo ra ước lượng dự án. Bạn cam kết hoàn thành dự án đúng hạn. Trong tình huống này, điều gì Sai? ",
  },
  {
    title:
      " Trong khi định nghĩa hoạt động, một nhân viên xác định rằng 1 hoạt động cần được thực hiện. Tuy nhiên, 1 nhân viên khác tin rằng hoạt động đó không phải là 1 phần của dự án như anh ta hiểu trong tuyên bố phạm vi dự án. PM tốt nhất nên làm gì?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 120,
    answers: [
      {
        idx: 0,
        title: " Cố gắng xây dựng sự đồng thuận trong đội dự án",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: " Thực hiện quyết định cá nhân",
      },
      {
        isKey: true,
        idx: 2,
        title: "Hỏi nhà tài trợ về thông tin chi tiết",
      },
      {
        idx: 3,
        title: "Hỏi quản lý cấp cao về thông tin chi tiết",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Bạn là 1 PM ở Mỹ, phát triển dự án phần mềm 5,000,000$. Trong khi làm việc với đội dự án để xây dựng sơ đồ mạng, bạn chú ý một chuỗi các hoạt động có thể được thực hiện song song nhưng phải hoàn thành trong một thứ tụ riêng biệt. Loại hoạt động nào của phương pháp sắp xếp thứ tự hoạt động được yêu cầu cho những hoạt động này?",
    answers: [
      {
        title: "Phương pháp sơ đồ ưu tiên",
        isKey: true,
        idx: 0,
      },
      {
        title: " Phương pháp sơ đồ mũi tên",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Phương pháp đường tới hạn",
      },
      {
        isKey: false,
        title: " Phương pháo sơ đồ toán tử ",
        idx: 3,
      },
    ],
    idx: 121,
  },
  {
    title:
      "Bạn là 1 PM ở Mỹ, phát triển dự án phần mềm 5,000,000$. Trong khi làm việc với đội dự án để xây dựng sơ đồ mạng, dữ liệu xây dựng của bạn cho thấy chất lượng có thể dc cải thiện nếu mô hình dữ liệu được quản lý cấp cao phê chuẩn trước khi chuyển sang thành phần thiết kế khác. Họ hỗ trợ đề nghị này với một bài báo từ một tạp chí phần mềm hàng đầu. Mô tả nào dưới đây là tốt nhất với loại đầu vào này? (với loại hỗ trợ này)",
    idx: 122,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Phụ thuộc (or thành phần - dependency) bắt buộc",
      },
      {
        title: "Phụ thuộc tùy ý",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Phụ thuộc ngoại cảnh",
        isKey: false,
      },
      {
        title: "Heuristic - phương pháp đánh giá kinh nghiệm",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Hoạt động Start-B",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hoạt động A-D",
      },
      {
        idx: 2,
        isKey: true,
        title: "Hoạt động E-End",
      },
      {
        idx: 3,
        isKey: false,
        title: "Hoạt động C-E",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 123,
    title:
      "Dựa vào bảng sau, nếu bạn cần làm ngắn thời gian thực hiện dự án, bạn sẽ giảm thời gian cho hoạt động nào? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Đường tới hạn là 67 giờ",
      },
      {
        idx: 1,
        title: "Đường tới hạn thay đổi: Start, B, D, End",
        isKey: false,
      },
      {
        title: "Đường tới hạn thay đổi thành Start, A, C, E, F, End",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Đường tới hạn tăng lên 12h",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 124,
    title:
      ". Bạn có một dự án với các hoạt động sau: hoạt động A kéo dài 40 giờ và có thể bắt đầu sau khi bắt đầu dự án. Hoạt động B kéo dài 25 giờ và nên bắt đầu sau khi bắt đầu dự án. Hoạt động C phải bắt đầu sau khi hoạt động A và kéo dài trong 35 giờ. Hoạt động D phải bắt đầu sau hoạt động B và C và kéo dài 30 giờ. Hoạt động E phải bắt đầu sau hoạt động C và kéo dài 10 giờ. Hoạt động F và D là các hoạt động cuối cùng của dự án. Điều nào dưới đây là đúng nếu hoạt động B thực sự kéo dài trong 37 giờ? ",
  },
  {
    title:
      "Một PM vừa nhận được ước tính thời gian hoạt động từ đội dự án. Anh ta cần điều nào dưới đây để hoàn thành xây dựng lịch trình? ",
    idx: 125,
    answers: [
      {
        isKey: false,
        title: " Thay đổi các yêu cầu",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hệ thống kiểm soát thay đổi lịch trình",
      },
      {
        title: ". Đề nghị các hành động hiệu chỉnh",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Thời gian dự trù ",
        isKey: true,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang kiểm soát một dự án từ một PM khác trong giai đoạn lập kế hoạch. Nếu PM mới muốn xem kế hoạch của ng PM cũ để quản lý thay đổi lịch trình, tốt nhất nên xem xét văn bản nào? ",
    answers: [
      {
        idx: 0,
        title: " Kế hoạch quản lý truyền thông",
        isKey: false,
      },
      {
        idx: 1,
        title: " Kế hoạch quản lý dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: " Kế hoạch quản lý nhân lực",
      },
      {
        idx: 3,
        isKey: true,
        title: "Kế hoạch quản lý lịch trình, thời gian",
      },
    ],

    idx: 126,
  },
  {
    title:
      " Một PM đang sử dụng ước tính thời gian trung bình có điều chỉnh để thực hiện phân tích lịch trình mạng. Loại hình phân tích toán học nào được sử dụng? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phương pháp đường tới hạn",
      },
      {
        isKey: true,
        title: "PERT",
        idx: 1,
      },
      {
        idx: 2,
        title: "Monte Carlo",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Cân bằng nguồn lực",
      },
    ],
    idx: 127,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 128,
    title:
      " WBS, ước tính cho từng gói công việc, và sơ đồ mạng đều đã hoàn thành. Người PM nên làm gì tiếp theo?",

    answers: [
      {
        isKey: false,
        title: "Sắp xếp các hành động",
        idx: 0,
      },
      {
        idx: 1,
        title:
          " Xác minh rằng phạm vi chuẩn đã có (verify that they have the correct scope)",
        isKey: false,
      },
      {
        isKey: true,
        title: " Tạo ra lịch trình sơ bộ và lấy phê chuẩn từ đội dự án",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: " Hoàn thành quản lý rủi ro",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 129,

    answers: [
      {
        title: "Tạo ra danh sách hành động",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bắt đầu làm bảng WBS",
      },
      {
        isKey: false,
        title: "Hoàn thành lịch trình",
        idx: 2,
      },
      {
        title: "Nén lịch trình (compress)",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Một dự án phát triển sản phẩm mới có 4 cấp (level) trong bảng WBS và dc xếp chuỗi sử dụng phương pháp sơ đồ mũi tên. Ước tính thời gian hoạt động đã có. Điều tiếp theo nên làm là gì?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Bắt đầu kiểm soát lịch trình",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Bắt đầu ước tính nguồn lực hành động (activity resource estimating)",
      },
      {
        isKey: false,
        title: "Ước tính tương tự lịch trình",
        idx: 2,
      },
      {
        title: " Có được sự phê chuẩn",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 130,
    title:
      "Bạn là một PM cho một dự án phát triển sản phẩm mới có 4 cấp trong bảng WBS, và được sắp xếp bằng phương pháp sơ đồ mũi tên. Ước tính thời gian đã được nén và một lịch trình đã được tạo ra. Hành động quản lý thời gian nào nên được làm tiếp theo?",
  },
  {
    idx: 131,
    title:
      "Một nhân viên từ phòng nghiên cứu phát triển nói với bạn rằng công việc của cô ấy quá sáng tạo để cung cấp cho bạn một ước tính riêng có sẵn cho hoạt động. bạn phải quyết định sử dụng giờ lao động từ dự án trước để dự đoán cho tương lai. Đây là một ví dụ về:",

    answers: [
      {
        title: "Ước tính thông số",
        idx: 0,
        isKey: true,
      },
      {
        title: "Ước tính 3 điểm (three point)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: " Ước tính tương tự",
        isKey: false,
      },
      {
        title: "Phân tích Monte Carlo",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " An activity has an early start (ES) of day 3, a late start (LS) of day 13, an early finish (EF) of day 9, and a late finish (LF) of day 19. The activity:",
    idx: 132,
    answers: [
      {
        title: "Is on the critical path (đường tới hạn)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Has a lag",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Is progressing well",
        isKey: false,
      },
      {
        idx: 3,
        title: "Is not on the critical path",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Cắt giảm nguồn lực từ một hoạt động",
      },
      {
        idx: 1,
        isKey: true,
        title: "Thực hiện nhiều hoạt động đồng thời",
      },
      {
        idx: 2,
        title:
          "Di chuyển nguồn lực từ phụ thuộc được ưu tiên sang các phụ thuộc khác",
        isKey: false,
      },
      {
        idx: 3,
        title: "Bỏ một hoạt động ra khỏi dự án",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 133,
    title:
      " Dự án được tính toán để hoàn thành 4 ngày sau ngày hoàn thành mong đợi (desired completion date). Bạn không có nguồn lực nào khác. Dự án có rủi ro thấp, tỷ lệ chi phí có lợi (benefit cost ratio) được mong đợi là 1.6 và các phụ thuộc được ưu tiên. Trong tình huống này, điều tốt nhất nên làm là gì?",
  },
  {
    idx: 134,
    answers: [
      {
        isKey: true,
        title: "PM",
        idx: 0,
      },
      {
        title: "Nhà quản lý cấp cao",
        idx: 1,
        isKey: false,
      },
      {
        title: "Nhà tài trợ dự án",
        idx: 2,
        isKey: false,
      },
      {
        title: "Quản lý của ban quản lý dự án",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM của một công ty xây dựng nhỏ có một dự án với chi phí là 130000$ với thời hạn hơn 6 tuần. Theo lịch của cô ấy, dự án nên có chi phí 60000$ đến bây giờ. Tuy nhiên, hiện tại dự án đã chi ra 90000$. Dự án đang đi chậm lịch trình do ước tính gốc không đúng. Ai sẽ có trách nhiệm chính để giải quyết vấn đề này?",
  },
  {
    idx: 135,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Tổ chức của bạn có một thời gian khó khăn trong quản lý toàn bộ các dự án. Bạn dc đề nghị để giúp nhà quản lý cấp cao hiểu vấn đề này. Loại báo cáo nào sẽ giúp công cấp thông tin tóm tắt cho nhà quản lý cấp cao?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Ước tính chi phí chi tiết",
      },
      {
        title: "Kế hoạch quản lý dự án",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sơ đồ đoạn (bar chart)",
      },
      {
        title: "Báo cáo điểm mốc",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    title:
      " Sắp xếp lại các nguồn lực để có hằng số tài nguyên được sử dụng mỗi tháng được gọi là:",
    idx: 136,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Crashing",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Floating",
      },
      {
        isKey: true,
        idx: 2,
        title: "Leveling",
      },
      {
        idx: 3,
        isKey: false,
        title: "Fast tracking",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Đánh giá sẽ gần hơn với công việc sẽ thực sự yêu cầu",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Nó được dựa vào việc hiểu chi tiết yêu cầu công việc",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Nó mang lại cho đội dự án việc hiểu rõ mong đợi của ban lãnh đạo",
      },
      {
        idx: 3,
        isKey: false,
        title: "Nó giúp PM xác định nếu dự án hoàn thành đúng lịch trình",
      },
    ],
    idx: 137,
    title: " Điều nào dưới đây là một lợi ích của một đánh giá dự án tương tự?",
  },
  {
    idx: 138,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Trong giai đoạn thực hiện dự án, một số lượng lớn thay đổi đã được thực hiện. Người PM nên làm gì? ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "PChờ đợi đến khi tất cả thay đổi được biết và làm một lịch trình mới",
      },
      {
        idx: 1,
        title:
          "Thực hiện phê chuẩn các thay đổi nếu cần, nhưng giữ lại đường chuẩn lịch trình (baseline)",
        isKey: true,
      },
      {
        isKey: false,
        title: " Chỉ thực hiện thay đổi được ban lãnh đạo phê chuẩn",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Nói chuyện với ban lãnh đạo trước khi thực hiện bất kỳ thay đổi nào",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Chia cho SPI",
        idx: 0,
      },
      {
        title: "Nhân với SPI",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nhân với CPI",
      },
      {
        title: "Chia cho CPI",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 139,
    title:
      "Cách thông thường để tính toán ước tính tại điểm hoàn thành (EAC) là lấy chi phí tài thời điểm hoàn thành (BAC) và:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: " Chi phí hoàn thành công việc",
        idx: 0,
      },
      {
        idx: 1,
        title: " Giá trị của công việc được thực hiện",
        isKey: false,
      },
      {
        idx: 2,
        title: " Tổng chi phí dự kiến tại thời điểm hoàn thành dự án.",
        isKey: true,
      },
      {
        idx: 3,
        title: " Chi phí sẽ hoàn thành công việc (what it will cost)",
        isKey: false,
      },
    ],

    title: " Ước tính tại điểm hoàn thành EAC là đánh giá định kỳ của:",
    idx: 140,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 141,
    title:
      "Nếu giá trị thu được (EV-earned value) là 350, chi phí thực tế(AC-actual value) là 400, giá trị dự tính (PV-planned value) là 325, chi phí phát sinh (CV-cost varience) là bao nhiêu?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "350",
      },
      {
        idx: 1,
        isKey: false,
        title: "-75",
      },
      {
        isKey: false,
        title: "400",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "-50",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: " Sự mất cân bằng kép là gì?",
    idx: 142,
    answers: [
      {
        isKey: false,
        title: "Khấu hao",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sự giảm theo đường thẳng",
      },
      {
        isKey: true,
        title: "Sự giảm nhanh chóng",
        idx: 2,
      },
      {
        title: "Dự toán (or chi phí) vòng đời (life cycle costing)",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 143,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Ước lượng tương tự là gì?",
    answers: [
      {
        isKey: false,
        title: "Sử dụng kĩ thuật ước lượng từ dưới lên (bottom-up)",
        idx: 0,
      },
      {
        title: "Đc sử dụng thường xuyên nhất trong giai đoạn thực thi dự án",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Sử dụng kĩ thuật ước lượng từ trên xuống (top-down)",
      },
      {
        idx: 3,
        title: "Sử dụng chi phí chi tiết thực tế trong quá khứ",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chi phí cố định (fixed cost)",
      },
      {
        idx: 1,
        title: "Chi phí ngầm (sunk cost)",
        isKey: false,
      },
      {
        idx: 2,
        title: "Giá trị thực (net present value NPV)",
        isKey: false,
      },
      {
        title: "Chi phí cơ hội",
        isKey: true,
        idx: 3,
      },
    ],

    idx: 144,
    title: "Chi phí của việc lựa chọn 1 dự án và từ bỏ dự án khác được gọi là:",
  },
  {
    idx: 145,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điểm chính nổi bật của đánh giá vòng đời là:",

    answers: [
      {
        idx: 0,
        title: "Chi phí ước tính cài đặt",
        isKey: false,
      },
      {
        title: "Ước tính chi phí của thực hiện và bảo trì",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Xem xét chi phí cài đặt khi lên kế hoạch chi phí dự án",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Xem xét chi phí thực hiện và bảo trì khi lập quyết định trong dự án",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Hỏi mỗi nhân viên dự án đã hoàn thành được bao nhiêu % công việc và báo cáo trong báo cáo tiến trình hàng tháng",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Tính toán giá trị thu được EV và sử dụng thông số và các tính toán khác để báo cáo hiệu năng đã thực hiện và dự đoán hiệu năng tương lai",
      },
      {
        idx: 2,
        title:
          "Sử dụng luật 50/50 và chắc chắn rằng chi phí vòng đời là ít hơn chi phí dự án",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Tập trung vào khối lượng sử dụng tháng trước và chi tiêu tháng tiếp theo",
        isKey: false,
      },
    ],

    title:
      "Việc đo hiệu suất chi phí tốt nhất nên được thực hiện theo cách nào dưới đây?",
    idx: 146,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 147,
    answers: [
      {
        idx: 0,
        title:
          "Vào thời điểm này, chúng ta mong đời tổng chi phí dự án hơn 89% so với kế hoạch",
        isKey: false,
      },
      {
        title:
          " Khi dự án hoàn thành chúng ta sẽ sử dụng 89% hơn so với kế hoạch",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dự án chỉ thực hiện 89% so với kế hoạch",
      },
      {
        title: " Dự án chỉ nhận được 89% chi phí so với kế hoạch đầu tư",
        idx: 3,
        isKey: true,
      },
    ],
    title: "Chỉ số thực hiện chi phí CPI là 0.89 nghĩa là:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bạn đang chi tiêu quá ngân sách",
      },
      {
        isKey: false,
        idx: 1,
        title: "Bạn đang đi nhanh hơn kế hoạch",
      },
      {
        idx: 2,
        title:
          " Bạn đang chỉ thực hiện 76% của tỷ lệ ban đầu của kế hoạch (the rate originally planned)",
        isKey: true,
      },
      {
        isKey: false,
        title: "Bạn đang chỉ thực hiện 24% của tỷ lệ ban đầu của kế hoạch",
        idx: 3,
      },
    ],
    idx: 148,
    title: " Chỉ số thực hiện lịch trình SPI là 0.76 nghĩa là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "PA. WBS",
        isKey: false,
      },
      {
        title: "Sơ đồ mạng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các rủi ro",
      },
      {
        idx: 3,
        title: "Thủ tục kiểm soát thay đổi",
        isKey: true,
      },
    ],
    idx: 149,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điều nào dưới đây không cần thiết khi đưa ra ước tính dự án?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Điều nào dưới đây là một ví dụ của ước tính tham số? ",
    answers: [
      {
        idx: 0,
        title: "Dollar per module",
        isKey: true,
      },
      {
        idx: 1,
        title: "Điểm nút học được (learning bend)",
        isKey: false,
      },
      {
        title: "Bottom-up",
        idx: 2,
        isKey: false,
      },
      {
        title: "CPM",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 150,
  },
  {
    idx: 151,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lên kế hoạch",
      },
      {
        title: "Kết thúc",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Thực thi",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Khởi tạo",
      },
    ],

    title:
      "Một phác thảo ước tính độ lớn được thực hiện trong giai đoạn nào của dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Từ -75% tới 25%",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Từ -10% tới 15%",
      },
      {
        idx: 2,
        title: "Từ 10% tới -25% ",
        isKey: false,
      },
      {
        idx: 3,
        title: "-từ -5% tới 10%",
        isKey: false,
      },
    ],
    title:
      "Chi phí thực tế nên gần (how close) với ước lượng ngân sách cuối cùng ntn?",
    idx: 152,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Giá trị thực NPV",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tỷ lệ chi phí lợi ích (benefit cost ratio BCR)",
      },
      {
        isKey: false,
        title: "Thời gian thu hồi vốn đầu tư",
        idx: 2,
      },
      {
        title: "Luật lợi nhuận giảm dần.",
        idx: 3,
        isKey: true,
      },
    ],

    idx: 153,
    title:
      "Nhân tố nào không nên được xem xét khi lựa chọn giữa 2 dự án để đảm nhận (undertake)?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 154,

    title:
      "Nếu dự án A có giá trị thực NPV là 30000$ và dự án B có giá trị thực NPV là 50000$, chi phí cơ hội là gì khi lựa chọn dự án B",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "23000$",
      },
      {
        idx: 1,
        title: "30000$",
        isKey: true,
      },
      {
        title: "20000$",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "50000$",
        isKey: false,
      },
    ],
  },
  {
    title: "Loại chi phí đào tạo đội dự án là:",
    answers: [
      {
        isKey: true,
        title: "Trực tiếp",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "NPV",
      },
      {
        title: "Gián tiếp",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Cố định",
      },
    ],
    idx: 155,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Chi phí biến động",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Chi phí cố định",
        isKey: true,
      },
      {
        title: "Chi phí hoạt động (overhead costs)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Chi phí cơ hội",
        isKey: false,
      },
    ],
    title: "Chi phí thiết lập dự án là một ví dụ về:",
    idx: 156,
  },
  {
    answers: [
      {
        title: "Nhiều giá trị hơn từ phân tích chi phí",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Quyền quản lý với việc mua vào của dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đội để mua vào dự án",
      },
      {
        idx: 3,
        isKey: true,
        title: "Một cách ít tốn kém hơn để làm cùng một công việc",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 157,

    title: " Phân tích giá trị được thực hiện để thu được cái gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 158,
    answers: [
      {
        isKey: false,
        title: "Đội dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Người mua",
      },
      {
        title: "Người bán",
        idx: 2,
        isKey: true,
      },
      {
        title: "Ban lãnh đạo",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Ai có rủi ro về chi phí trong hợp đồng giá cố định? ",
  },
  {
    answers: [
      {
        isKey: true,
        title: " Giá trị thu được EV",
        idx: 0,
      },
      {
        idx: 1,
        title: "Giá trị dự tính PV (planned value)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "TChi phí thực tế AC",
      },
      {
        idx: 3,
        title: "Chi phí phát sinh CV (cost variance)",
        isKey: false,
      },
    ],

    idx: 159,
    title:
      "Điều nào dưới đây thể hiện giá trị ước tính của công việc đã hoàn thành thực tế?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 160,
    title:
      " Bạn có 4 dự án và phải chọn 1. Dự án A đang được thực hiện hơn 6 năm và có giá trị thực NPV là 70000$. Dự án B đang được thực hiện hơn 3 năm và có NPV là 30000$. Dự án C đang được thực hiện hơn 5 năm và có NPV là 40000$. Dự án D đang dc thực hiện hơn 1 năm và NPV là 60000$. Bạn sẽ chọn dự án nào?",
    answers: [
      {
        isKey: true,
        title: "Dự án A",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dự án B",
      },
      {
        isKey: false,
        title: "Dự án C",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dự án D",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Dự án A",
      },
      {
        title: "Dự án B",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Dự án C",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Dự án D",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án A có tỷ suất hoàn vốn nội bộ (internal rate of return -IRR) là 21%. Dự án B có IRR= 7%. Dự án C có IRR= 31%. Dự án D có IRR= 19%. Dự án tốt nhất là: ",
    idx: 161,
  },
  {
    idx: 162,
    answers: [
      {
        idx: 0,
        title: "Dự án A với NPV là 95000$",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Dự án B với NPV là 120000$",
      },
      {
        title: "Dự án C với NPV là 20000$",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dự án D với NPV là -30000$",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      " Là một PM, bạn được giới thiệu các thông tin sau về giá trị thực NPV của một vài dự án. Bạn sẽ lựa chọn dự án nào trong số các dự án dưới đây?",
  },
  {
    title:
      "Công ty của bạn có thể chấp nhận 1 trong 3 dự án sau: dự án A có NPV là 30000$ và cần 6 năm để hoàn thành, dự án B có NPV là 60000$ và cần 3 năm để hoàn thành, dự án C có NPV là 90000$ và cần 4 năm để hoàn thành. Dựa vào các thông tin trên, bạn sẽ chọn dự án nào để thực hiện?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "3 dự án có giá trị như nhau",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Dự án A",
      },
      {
        idx: 2,
        isKey: false,
        title: "Dự án B",
      },
      {
        title: "Dự án C",
        idx: 3,
        isKey: true,
      },
    ],

    idx: 163,
  },
  {
    idx: 164,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đề nghị thay đổi đối với chi phí dự án",
      },
      {
        idx: 1,
        isKey: false,
        title: "Có buổi họp với ban lãnh đạo để xem nên làm gì",
      },
      {
        isKey: true,
        idx: 2,
        title: "Hỏi người bán về các thông tin hỗ trợ",
      },
      {
        title: "Từ chối mọi hành động sai",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Người bán nói với bạn rằng các hoạt động của bạn gây ra việc tăng chi phí của họ. bạn nên làm gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 165,
    title:
      "Dự đoán chi phí chỉ ra rằng bạn sẽ bị vượt quá chi phí vào giai đoạn cuối của dự án. Bạn nên làm gì?",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Loại trừ các rủi ro trong ước tính và ước tính lại",
      },
      {
        isKey: false,
        idx: 1,
        title: "Gặp nhà tài trợ để tìm ra công việc nào nên được làm sớm hơn",
      },
      {
        isKey: false,
        idx: 2,
        title: "Cắt giảm chất lượng",
      },
      {
        title: "Giảm phạm vi",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một dự án phát triển cửa hàng mới yêu cầu việc mua bán của nhiều thiết bị, máy móc và đồ đạc. Phòng ban có trách nhiệm cho việc phát triển vừa tập trung quy trình mua bán bên ngoài và tiêu chuẩn hóa hệ thống đặt hàng mới. Những thủ tục trên có trong tài liệu nào?",
    idx: 166,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tuyên bố phạm vi dự án",
      },
      {
        title: "WBS",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Kế hoạch quản lý nhân lực",
        isKey: false,
      },
      {
        idx: 3,
        title: "Chính sách của tổ chức",
        isKey: true,
      },
    ],
  },
  {
    title:
      "Vào giai đoạn đầu của dự án, bạn có buổi thảo luận với nhà tài trợ về các kỹ thuật ước lượng nên được sử dụng. Bạn muốn có đánh giá của chuyên gia, nhưng nhà tài trợ phản đối và muốn dùng ước tính tương tự. Tốt nhất nên làm gì?",
    answers: [
      {
        idx: 0,
        title: "Đồng ý với ước tính tương tự như một đánh giá của chuyên gia",
        isKey: true,
      },
      {
        title: "Đề nghị đánh giá vòng đời như một thỏa hiệp",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Xác định tại sao nhà tài trợ muốn một ước tính chính xác như thế",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Cố gắng thuyết phục nhà tài trợ đồng { các đánh giá của chuyên gia do nó chính xác hơn",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 167,
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Ngân sách dự án có thể được tìm thấy trong tôn chỉ dự án mới vừa hoàn thành",
        idx: 0,
      },
      {
        title:
          "Ngân sách dự án và đường chuẩn sẽ không được kết thúc và được chấp nhận cho đến khi giai đoạn lên kế hoạch hoàn tất",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          " Kế hoạch quản lý dự án sẽ không bao gồm ngân sách dự án và đường chuẩn, đây là một dự án nhỏ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          " Có thể hoàn thành một ước tính trước khi kế hoạch quản lý dự án được tạo ra",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 168,
    title:
      " Bạn vừa hoàn thành giai đoạn khởi tạo của một dự án nhỏ và đang bước sang giai đoạn lên kế hoạch khi một bên có liên quan tới dự án hỏi bạn về ngân sách dự án và đường chuẩn chi phí (cost baseline). Bạn nên nói gì? ",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Quản lý chi phí",
        isKey: false,
      },
      {
        idx: 1,
        title: "Ước tính chi phí",
        isKey: false,
      },
      {
        isKey: true,
        title: "Dự thảo ngân sách",
        idx: 2,
      },
      {
        isKey: false,
        title: "Kiểm soát chi phí",
        idx: 3,
      },
    ],
    idx: 169,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " PM được chỉ định ước tính chi phí chung để chia nhỏ các hoạt động để thiết lập một đường chuẩn cho việc đo đạc hiệu năng dự án. Đây là quy trình gì?",
  },
  {
    idx: 170,
    title:
      " Bạn được hỏi để chuẩn bị ngân sách để hoàn thành một dự án. Dự án này vừa bắt đầu năm ngoái và bị hoãn trong 6 tháng. Điều nào dưới đây không có trong ngân sách?",
    answers: [
      {
        title: "Chi phí cố định",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Chi phí ngầm",
        idx: 1,
      },
      {
        idx: 2,
        title: "Chi phí trực tiếp",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí biến động (VC - variable costs)",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Dự án A với tỷ lệ chi phí lợi ích là 0.8, không có tôn chỉ dự án, có 4 nguồn lực",
      },
      {
        idx: 1,
        title:
          ". Dự án B với NPV là 60000$, 12 nguồn lực, và chi phí biến động giữa 1000$ tới 2000$ một tháng",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Dự án C với chi phí cơ hội là 300000$, không có hệ thống kiểm soát dự án, tỷ suất hoàn vốn nội bộ IRR là 12%",
        idx: 2,
      },
      {
        isKey: false,
        title: "Dự án D với chi phí gián tiếp là 20000$ và 13 nguồn lực",
        idx: 3,
      },
    ],
    idx: 171,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Để cung cấp một dự án mới cho phòng ban của mình, bạn cần di chuyển tài nguyên từ một dự án sang một dự án khác. Do phòng ban của bạn đang làm việc hết công suất, di chuyển tài nguyên sẽ chăncs chắn trì hoãn dự án mà bạn chuyển tài nguyên. Điều này làm ảnh hưởng tiêu cực ít nhất đến dự án nào dưới đây ếu bạn di chuyển tài nguyên từ dự án này? ",
  },
  {
    answers: [
      {
        title: "Phạm vi dự án đã thay đổi",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Một nhà cung cấp không kinh doanh nữa và một nhà cung cấp khác cần được tìm thấy",
      },
      {
        title: " Các thiết bị thêm vào cần thiết phải mua",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Hoạt động đường giới hạn thực hiện lâu hơn và cần nhiều giờ lao động để hoàn thành",
      },
    ],
    title:
      "Một dự án sản xuất có chỉ số thực hiện lịch trình SPI là 0.89 và chỉ số thực hiện chi phí CPI là 0.91. Thông thường, giải thích nào tốt nhất cho tình huống này?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 172,
  },
  {
    idx: 173,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Chi phí ước tính được nên được sử dụng để đo CPI",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "SPI nên được sử dụng, k phải CPI",
      },
      {
        idx: 2,
        title: "Ước tính từ dưới lên nên được sử dụng",
        isKey: true,
      },
      {
        title: "Thông tin lịch sử không được tính đến",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "Mặc dù các bên có liên quan nghĩ rằng có đủ tiền trong ngân sách, dự án thực hiện được 1 nửa và CPI là 0.7. Để xác định nguyên nhân cốt lõi, các bên có liên quan kiểm tra dự án và phát hiện ra ngân sách chi phí dự án đã bị ước tính một cách tương tự. mặc dù các ước tính hoạt động thêm vào ước tính dự án, các bên có liên quan nghĩ rằng có gì đó bị bỏ sót trong khi hoàn thành ước tính. Điều bị bỏ sót ấy là gì?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 174,
    answers: [
      {
        isKey: true,
        title: "Dự án A",
        idx: 0,
      },
      {
        title: "Dự án B",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dự án C",
      },
      {
        isKey: false,
        title: "Dự án D",
        idx: 3,
      },
    ],
    title:
      "Bạn là một PM của công ty tư vấn lớn. cấp trên của bạn vừa hỏi ý kiến của bạn trong một quyết định về dự án nào công ty nên theo đuổi. Dự án A có tỷ suất hoàn vốn nội bộ IRR là 12%. Dự án B được dự đoán có tỷ lệ chi phí lợi ích BCR là 1.3. Dự án C có chi phí cơ hội là 75000$. Dự án D có thời gian thu hồi vốn là 6 tháng. Bạn sẽ chọn dự án nào?",
  },
  {
    answers: [
      {
        title: "Schedule",
        idx: 0,
        isKey: true,
      },
      {
        title: "Float",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Cost",
      },
      {
        isKey: false,
        title: "The number of available resources",
        idx: 3,
      },
    ],

    idx: 175,
    title:
      " You are about to take over a project from another project manager and find out the following information about the project. Activity Z has an early start ES of day 15 and a late start LS of day 20. Activity Z is a difficult activity. Cost performance index CPI is 1.1. Schedule performance index SPI is 0.8. There are 11 stakeholders on the project. Based on this information, which of the following would you be the Most concerned about?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 176,
    title: " Sự khác nhau giữa đường chuẩn chi phí và ngân sách chi phí là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Quản lý tài nguyên dự trữ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dự trữ phát sinh",
      },
      {
        idx: 2,
        isKey: false,
        title: "Ước tính chi phí dự án",
      },
      {
        isKey: false,
        title: "Tài khoản chi phí (cost account?)",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Bạn cung cấp ước tính chi phí dự án cho nhà tài trợ dự án. Anh ta không hài lòng với ước tính, do anh ta nghĩ rằng giá có thể thấp hơn. Anh ta bảo bạn cắt giảm 15% ước tính dự án. Bạn nên làm gì?",
    idx: 177,
    answers: [
      {
        isKey: false,
        title:
          "Bắt đầu dự án và liên tục tiết kiệm chi phí dự án (look for cost saving)",
        idx: 0,
      },
      {
        idx: 1,
        title: "Nói với đội dự án để cắt giảm 15% từ ước tính của họ ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: " Thông báo với nhà tài trợ về các hoạt động bị cắt giảm",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Thêm các nguồn tài nguyên với chi phí theo giờ thấp (low hourly rates)",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 178,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Khi một sản phẩm hay dịch vụ hoàn tất và đáp ứng yêu cầu của khách hàng tức là:",

    answers: [
      {
        idx: 0,
        title: "Chất lượng hoàn thiện",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chi phí của chất lượng là cao",
      },
      {
        isKey: false,
        idx: 2,
        title: "Chi phí của chất lượng là thấp",
      },
      {
        idx: 3,
        isKey: false,
        title: " Khách hàng trả giá thấp nhất cho sản phẩm",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phân tích kiểm soát chất lượng",
      },
      {
        title: "Phân tích không quan trọng",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Phân tích tiêu chuẩn chất lượng",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích tính thống nhất",
      },
    ],
    title:
      " Khái niệm của mức độ chất lượng tối ưu có thể đạt được tại điểm mà doanh thu tăng lên từ sự cải tiến sản phẩm bằng với chi phí tăng để bảo đảm nó. Câu này liên quan đến:",
    idx: 179,
  },
  {
    title:
      "Ai có trách nhiệm cuối cùng trong việc quản lý chất lượng trong dự án?",
    idx: 180,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kỹ sư dự án",
      },
      {
        idx: 1,
        title: "PM",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Giám đốc quản lý chất lượng",
      },
      {
        idx: 3,
        title: "Nhân viên dự án",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 181,

    answers: [
      {
        idx: 0,
        title: "Kiểm soát chất lượng thực hiện",
        isKey: false,
      },
      {
        title: "Đảm bảo chất lượng thực hiện",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Lên kế hoạch quản lý",
      },
      {
        title: "Phân tính biến động",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Một đội đang sử dụng sơ đồ xương cá để giúp xác định tiêu chuẩn chất lượng nào sẽ được sử dụng trong dự án. Họ đang ở trong quy trình quản lý chất lượng nào?",
  },
  {
    answers: [
      {
        title:
          "Chất lượng được cải thiện dẫn đến gia tăng hiệu suất, tăng hiệu quả chi phí và giảm chi phí rủi ro.",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Chất lượng được cải thiện dẫn đến tăng hiệu suất, giảm hiệu quả chi phí và tăng chi phí rủi ro",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Chất lượng được cải thiện dẫn đến tăng hiệu suất, tăng hiệu quả chi phí và tăng chi phí rủi ro",
        isKey: false,
      },
      {
        title:
          "Chất lượng được cải thiện dẫn đến tăng hiệu suất, giảm hiệu quả chi phí và giảm chi phí rủi ro",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một người quản lý chú ý tới một PM đang tổ chức họp với một vài nhân viên đội dự án và một vài bên có liên quan tới dự án để thảo luận chất lượng dự án. Lịch trình dự án sẽ được nén lại và CPI là 1.1. Họ đã làm việc chăm chỉ trong dự án, đội dự án được thưởng theo hệ thống thưởng của PM và đây là một đội vững chắc. người quản lý đưa ra giả thuyết là PM không có đủ thời gian để tổ chức họp về chất lượng khi lịch trình không được nén. Điều nào dưới đây mô tả đúng nhất về việc người quản lý này đã sai?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 182,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 183,
    answers: [
      {
        isKey: false,
        title:
          "Xác định làm thế nào để tăng hiệu quả tổ chức thực hiện hỗ trợ dự án",
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Cung cấp những điều căn bản để xem thành công và thất bại của dự án",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Là tính chất đặc biệt cho dự án nào được thiết kế và kiểm thử ",
      },
      {
        isKey: false,
        title: "Là tiêu chuẩn mục tiêu phải thỏa mãn",
        idx: 3,
      },
    ],

    title: "Từ góc độ dự án, thuộc tính của chất lượng: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Chất lượng là",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thỏa mãn và vượt quá kỳ vọng của khách hàng",
      },
      {
        isKey: false,
        title: "Thêm vào một vài thứ để làm khách hàng thỏa mãn",
        idx: 1,
      },
      {
        isKey: true,
        title: "Là đơn vị đo xem dự án có thỏa mãn yêu cầu không.",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Làm theo mục tiêu của ban lãnh đạo",
      },
    ],

    idx: 184,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Giám định",
        isKey: false,
      },
      {
        idx: 1,
        title: "Phân tích quy trình",
        isKey: true,
      },
      {
        title: "Sơ đồ Pareto",
        idx: 2,
        isKey: false,
      },
      {
        title: "Sơ đồ xương cá",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 185,
    title: "Điều nào dưới đây không phải là đảm bảo chất lượng? ",
  },
  {
    title: "Sơ đồ Pareto giúp PM",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 186,
    answers: [
      {
        idx: 0,
        title: "Tập trung vào vấn đề then chốt để cải thiện chất lượng",
        isKey: true,
      },
      {
        isKey: false,
        title: "Tập trung vào suy nghĩ khuyến khích (stimulate thinking)",
        idx: 1,
      },
      {
        idx: 2,
        title: "Khám phá kết quả mong muốn trong tương lai",
        isKey: false,
      },
      {
        idx: 3,
        title: "Xác định nếu một quá trình ra ngoài kiểm soát",
        isKey: false,
      },
    ],
  },
  {
    idx: 187,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Một sơ đồ điều khiển giúp PM",
    answers: [
      {
        title: "Tập trung vào vấn đề then chốt nhất để cải thiện chất lượng",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tập trung vào suy nghĩ tích khuyến khích (stimulate thinking)",
        isKey: false,
        idx: 1,
      },
      {
        title: "Khám phá kết quả mong muốn trong tương lai",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Xác định nếu một quá trình đang hoạt động trong tập các giới hạn",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    title: "Kiểm thử toàn bộ tập hợp sẽ: (testing the entire population would)",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Mất nhiều thời gian",
      },
      {
        idx: 1,
        isKey: false,
        title: "Cung cấp nhiều thông tin hơn mong muốn",
      },
      {
        idx: 2,
        isKey: false,
        title: "Loại trừ lẫn nhau",
      },
      {
        title: "Chỉ ra nhiều khuyết điểm",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 188,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Làm lại (rework)",
        isKey: false,
      },
      {
        isKey: true,
        title: "Đào tạo chất lượng",
        idx: 1,
      },
      {
        title: "Loại bỏ (scrap)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí bảo hành",
      },
    ],
    idx: 189,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Điều nào dưới đây không phải là ví dụ về chi phí không phù hợp? ",
  },
  {
    idx: 190,
    title: "Độ lệch tiêu chuẩn là một thước đo có tính chất: ",
    answers: [
      {
        title: "Far the estimate is from the highest estimate",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Far the measurement is from the mean",
      },
      {
        title: "Correct the sample is",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Much time remains in the project",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "What percentage of the total distribution are 3 sigma from the mean equal to? ",
    answers: [
      {
        idx: 0,
        title: "68.26%",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "99.99%",
      },
      {
        idx: 2,
        isKey: false,
        title: "95.46%",
      },
      {
        idx: 3,
        isKey: true,
        title: "99.73%",
      },
    ],
    idx: 191,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Xác định các hoạt động dự án có tuân theo chính sách của tổ chức hay không",
      },
      {
        title: "Xcá định sự không hiệu quả và các chính sách không hiệu quả",
        isKey: false,
        idx: 1,
      },
      {
        title: "Sửa chữa các khiếm khuyết được xác định",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Xcá nhận việc thực hiện của các yêu cầu thay đổi đã được phê chuẩn",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      " Điều nào dưới đây không phải là thành phần của kiểm tra chất lượng?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 192,
  },
  {
    idx: 193,
    answers: [
      {
        title: "Thực hiện bản thiết kế thử nghiệm",
        isKey: false,
        idx: 0,
      },
      {
        title: "Điều chỉnh sơ đồ để phản ánh điểm trung bình mới",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Tìm một nguyên nhân khác có thể (assignable cause)",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Chẳng có gì. Đây là luật 7 và không được từ chối.",
      },
    ],
    title:
      " Một sơ đồ điều khiển chỉ ra 7 điểm dữ liệu trong một đường thẳng ở cùng 1 bên của điểm trung bình. Điều gì nên được hoàn thành?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "45%",
      },
      {
        isKey: false,
        idx: 1,
        title: "10%",
      },
      {
        idx: 2,
        isKey: false,
        title: "12%",
      },
      {
        title: "0%",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang quản lý một dự án và đang trong môi trường đúng thời hạn. Điều này sẽ yêu cầu nhiều chú { hơn, do lượng hàng tồn kho trong môi trường này là:",
    idx: 194,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Sơ đồ Ishikawa giúp:",
    idx: 195,
    answers: [
      {
        isKey: false,
        title: "Đặt thông tin vào đúng thứ tự ưu tiên",
        idx: 0,
      },
      {
        idx: 1,
        title: "Khám phá đầu ra quá khứ(explore past outcomes)",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chỉ ra trách nhiệm của đội dự án",
      },
      {
        idx: 3,
        isKey: false,
        title: "Chỉ ra trách nhiệm chức năng",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title:
          " A. Chi phí là quan trọng nhất, sau đó là chất lượng, cuối cùng là lịch trình",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: " B. Chất lượng là quan trọng hơn lịch trình và chi phí",
      },
      {
        title:
          " C. Lịch trình là quan trọng nhất, sau đó là chất lượng, cuối cùng là chi phí",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: " Điều này nên được quyết định tùy mỗi dự án",
        isKey: true,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong khi lập kế hoạch dự án, điều nào thông thường sẽ có ưu tiên nhất, chất lượng, chi phí hay lịch trình? ",
    idx: 196,
  },
  {
    idx: 197,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phân tích chất lượng",
      },
      {
        title: "Thực hiện đảm bảo chất lượng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Thực hiện kiểm soát chất lượng",
        idx: 2,
      },
      {
        idx: 3,
        title: "Lên kế hoạch chất lượng",
        isKey: true,
      },
    ],
    title:
      "Một PM đang sử dụng sơ đồ nhân quả với đội dự án để quyết định các nhân tốt biến đổi sẽ được kết nối ntn với các vấn đề tiềm năng.PM sẽ làm việc trong phần nào của quá trình quản lý chất lượng dự án?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Kế hoạch quản lý chất lượng",
        idx: 0,
        isKey: true,
      },
      {
        title: "Chính sách chất lượng",
        isKey: false,
        idx: 1,
      },
      {
        title: "Sơ đồ kiểm soát",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kế hoạch quản lý dự án",
      },
    ],

    title:
      "Một PM và đội từ một công ty thiết kế thiết bị đường sắt đang giao nhiệm vụ để thiết kế thiết bị tải đá vào ô tô đường sắt. thiết kế cho phép 2% số đã bị đổ, tổng số lượng lên tới 2 tấn hao hụt mỗi ngày. Người PM nên dẫn chứng kiểm soát chất lượng, đảm bả chất lượng và cải tiến chất lượng trong văn bản nào??",
    idx: 198,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title:
          "Đội dự án đang tạo thêm lợi ích cho khách hàng nhưng k được trả thêm tiền (gold plating)",
        idx: 0,
        isKey: true,
      },
      {
        title: " B. Những nỗ lực này không nên được hoàn thành trong khi họp",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          " C. Chẳng có gì sai. Đây là cách để thỏa mãn và vượt quá yêu cầu của khách hàng",
      },
      {
        idx: 3,
        isKey: false,
        title: " Chẳng có gì sai. PM đang kiểm soát dc tình huống này",
      },
    ],
    idx: 199,
    title:
      "Trong khi họp đội dự án, đội dự án thêm vào phạm vi đặc biệt của công việc thêm do họ xác định rằng nó sẽ làm lợi cho khách hàng. Điều gì là sai trong tình huống này",
  },
  {
    idx: 200,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Đội dự án vừa tạo ra kế hoạch mô tả cách họ thực hiện chính sách chất lượng. Nó giải quyết cấu trúc hướng tổ chức, trách nhiệm, thủ tục và các thông tin khác về kế hoạch cho chất lượng. nếu thay đổi này trong quá trình thực hiện dự án, kế hoạch nào dưới đây sẽ thay đổi theo? ",
    answers: [
      {
        idx: 0,
        title: "Đảm bảo chất lượng",
        isKey: false,
      },
      {
        title: "Quản lý chất lượng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Quản lý dự án",
        idx: 2,
      },
      {
        idx: 3,
        title: "Kiểm soát chất lượng",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 201,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " A. Một phần của giám định ISO 9000",
      },
      {
        title: "Để kiểm tra nếu khách hàng đang theo sát quy trình chất lượng.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: " C. Để xác định các chính sách không phù hợp",
      },
      {
        isKey: false,
        idx: 3,
        title: "Để kiểm tra tính chính xác nếu chi phí được đội dự án xem xét",
      },
    ],
    title:
      " Bạn là một PM cho một dự án hệ thống thông tin lớn khi một người từ phòng chất lượng đến và nói về bắt đầu kiểm tra chất lượng dự án của bạn. Đội dự án, đã chịu áp lực phải hoàn thành dự án nhanh nhất có thể, cảm thấy khó chịu về kiểm tra này. Bạn nên giải thích với đội rằng mục đích của kiểm tra chất lượng là:",
  },
  {
    title:
      "Bạn đang trong dự án xây dựng thiết bị mới. Các kết cấu đã được đặt vào vị trí và các ống dẫn nhiệt cũng sẽ được đặt đúng chỗ, khi đó người quản lý cấp cao thông báo với bạn rằng anh ta đang lo lắng dự án không đáp ứng được tiêu chuẩn chất lượng. Bạn nên làm gì trong tình huống này? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 202,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          " A. Cam đoan với người quản lý cấp cao rằng trong khi lên kế hoạch chất lượng đã xác định dự án sẽ đáp ứng được tiêu chuẩn chất lượng",
      },
      {
        idx: 1,
        isKey: false,
        title: "Ước tính tương tự sẽ có kết quả trong tương lai",
      },
      {
        isKey: false,
        title: " C. Đào tạo đội đảm bảo chất lượng",
        idx: 2,
      },
      {
        title:
          " Kiểm tra kết quả từ các kế hoạch quản lý chất lượng trong quá khứ",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title: "Kiểm tra chất lượng",
        isKey: true,
      },
      {
        title: "Lấy mẫu thống kê ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Biểu đồ Pareto",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Phân tích xu hướng",
      },
    ],
    title:
      " Bạn được hỏi để lựa chọn công cụ và kỹ thuật để thực hiện chương trình đảm bảo chất lượng để bổ sung cho các hoạt động kiểm soát chất lượng đã có. Bạn nên chọn điều nào dưới đây?",
    idx: 203,
  },
  {
    title:
      " Dự án cài đặt phần mềm mới đang thực hiện. PM đang làm việc với phòng ban đảm bảo chất lượng để cải thiện sự tin tưởng của mọi người rằng dự án sẽ đáp ứng các tiêu chuẩn chất lượng. điều nào dưới đây họ phải có trước khi bắt đầu quá trình này?",

    answers: [
      {
        idx: 0,
        title: "Các vấn đề chất lượng",
        isKey: false,
      },
      {
        title: "Cải thiện chất lượng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Hệ thống đo đạc kiểm soát chất lượng",
      },
      {
        idx: 3,
        title: "Làm lại công việc (rework)",
        isKey: false,
      },
    ],
    idx: 204,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 205,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Dự án bạn đang làm việc có gia tăng chi phí hiệu quả, tăng hiệu suất và tăng tinh thần, chí khí(morale). Điều gì có thể là nguyên nhân cho các thay đổi này? ",
    answers: [
      {
        isKey: false,
        title: "Mục tiêu dự án được đáp ứng khi thực hiện",
        idx: 0,
      },
      {
        isKey: true,
        title: "Tăng chất lượng",
        idx: 1,
      },
      {
        title: "Ban lãnh đạo tập trung vào chính sách ngăn chặn",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Tưởng thưởng (reward) cho nỗ lực của các các nhân",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: " A. Kết hợp thực hiện các gói công việc",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: " B. Xác định các tiêu chuẩn chất lượng",
        idx: 1,
      },
      {
        title: " C. Bắt đầu xác định rủi ro",
        idx: 2,
        isKey: false,
      },
      {
        title: "Thực hiện kế hoạch quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một PM vừa đảm nhiệm dự án từ một PM khác trong giai đoạn thực thi dự án. Người PM trước đó đã tạo ra ngân sách dự án, xác định các yêu cầu truyền thông và đang chuẩn bị hoàn thành gói công việc. Người PM mới nên làm điều gì tiếp theo? ",
    idx: 206,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án đang phải đối mặt với 1 thay đổi lớn đối với sản phẩm đầu ra. Nếu PM phải quyết định tiêu chuẩn chất lượng nào là có liên quan tới thay đổi, PM sẽ",

    idx: 207,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Quản lý chất lượng",
      },
      {
        isKey: false,
        idx: 1,
        title: "Thực hiện đảm bảo chất lượng",
      },
      {
        isKey: true,
        title: "Lên kế hoạch chất lượng",
        idx: 2,
      },
      {
        idx: 3,
        title: "Thực hiện kiểm soát chất lượng",
        isKey: false,
      },
    ],
  },
  {
    idx: 208,

    answers: [
      {
        title: "Dự án không đủ tiêu chuẩn thành công",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Dự án không thành công vì nó thực hiện thêm những điều khách hàng muốn mà k được trả thêm tiền (gold plating)",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Dự án không thành công do khách hàng hài lòng nghĩa là họ phải trả thêm tiền cho công việc",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Dự án thành công do đội đã có cơ hội học các vùng chức năng mới và khách hàng hài lòng",
      },
    ],
    title:
      "Vào cuối dự án, PM xác định dự án sẽ thêm 4 vùng chức năng và 3 vùng hiệu năng. Khách hàng bày tỏ sự hài lòng với dự án. Sự thành công của dự án có nghĩa là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 209,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thực hiện đảm bảo chất lượng",
      },
      {
        title: "Kiểm soát dự án",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thực hiện kiểm soát chất lượng",
        idx: 2,
        isKey: true,
      },
      {
        title: "Lên kế hoạch chất lượng",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Trong giai đoạn thực thi dự án, một nhân viên đội dự án thông báo với PM rằng một gói công việc không đáp ứng được tiêu chuẩn chất lượng, và cô ta tin rằng gói công việc này không thể đáp ứng được. PM họp với các bên có liên quan để phân tích tình huống. PM này đang ở trong quy trình quản lý chất lượng nào? ",
  },
  {
    answers: [
      {
        title: "Thời gian trễ trong các đường khác",
        isKey: false,
        idx: 0,
      },
      {
        title: "Sự xuất hiện đường tời hạn mới. ",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Các nguồn lực được chỉ định cho các nhiệm vụ khác trên đường tới hạn",
      },
      {
        title: "Nhiệm vụ dài nhất còn lại trong kế hoạch",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "PM chú ý rằng các hoạt động dự án đang được hoàn thành bởi 1 phòng ban đều làm việc không đáng kể so với kế hoạch. Đến thời hạn, không có hoạt động hay gói công việc nào đi đúng đường tới hạn, cũng như nó ảnh hưởng tới kế hoạch chuỗi tới hạn. PM khó chịu vì vấn đề này. Khi 4/5 hoạt động trong đường tới hạn phải được phòng ban này thực hiện. sau khi gọi 3 cuộc, cuối cùng, PM quyết định trái với người lãnh đạo của phòng ban này và xác định điều gì đang xảy ra. Cuộc hội thoại này lâu do cả 2 nói 2 ngôn ngữ khác nhau và họ cố gắng giao tiếp bằng tiếng Pháp (ngôn ngữ chung). Để giúp việc giao tiếp đơn giản hơn, PM thường xuyên yêu cầu người lãnh đạo của phòng ban này nhắc lại những gì đã nói. Anh ta nói với nhân viên của mình tuân theo chính sách của công ty và yêu cầu 2 mức kiểm thử. Trong quá trình hội thoại, anh ta cũng nhận xét khiến cho người PM tin rằng chính sách bao gồm quá nhiều công việc. Đây là lần thứ 4 PM nghe những nhận xét như thế. PM nên làm gì tốt nhất?",
    idx: 210,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Tạo ra kế hoạch quản lý truyền thông tốt hơn và yêu cầu chỉ một ngôn ngữ chính thức trong dự án và phải có người dịch ngay lập tức",
      },
      {
        idx: 1,
        title:
          "Liên lạc với ai đó trong phòng ban, người này cũng nói ngôn ngữ mẹ đẻ của PM tốt để xác nhận ý kiến của người lãnh đạo phòng ban đó ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tìm xem nếu hành động tiếp theo có nên ước tính lại không",
      },
      {
        title:
          "Làm việc với hiệu quả gia tăng của tổ chức thực hiện bằng cách khuyến khi sự cải thiện của chính sách bằng cách sử dụng các câu hỏi",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 211,
    title:
      "Điều chỉnh các nhiệm vụ được phân bổ khác nhau trong dự án để duy trì khối lượng nguồn lực phù hợp được gọi là:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Biểu đồ Pareto",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kỹ thuật giải quyết xung đột",
      },
      {
        idx: 2,
        isKey: true,
        title: "Sơ đồ xương cá ",
      },
      {
        title: "Phân tích xu hướng",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 212,
    title:
      " Một PM bị tràn ngập với các vấn đề trong dự án của anh ấy. Anh ta xác định nguyên nhân gốc rễ của vấn đề theo thứ tự để xác định nên tập trung vào đâu. Công cụ nào dưới đây là tốt nhất để anh ta sử dụng? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 213,

    answers: [
      {
        isKey: false,
        title: "Biểu đồ tần số",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sơ đồ Pareto",
      },
      {
        idx: 2,
        isKey: false,
        title: "Sơ đồ Ishikawa",
      },
      {
        title: "Sơ đồ điều khiển",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Là một PM, bạn đang chuẩn bị phương pháp để quản lý chất lượng. Bạn đang tìm kiếm phương pháp có thể chứng minh mối quan hệ giữa các sự kiện và kết quả kéo theo. Bạn muốn sử dụng một phương pháp để mô hình các sự kiện này và là nguyên nhân cho ảnh hưởng xấu tới chất lượng. Bạn sẽ sử dụng sơ đồ nào dưới đây để đạt được mục đích của mình? ",
  },
  {
    title: "Tất cả những điều sau đều là sức mạnh xuất phát từ PM, ngoại trừ: ",

    idx: 214,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Luật chính thống (formal)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Hệ thống thưởng (reward)",
      },
      {
        idx: 2,
        title: "Hệ thống phạt (penalty)",
        isKey: false,
      },
      {
        title: "Chuyên môn (expert)",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    title: "Điểm cao nhất trong hệ thống phân cấp sự cần thiết Maslow là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 215,

    answers: [
      {
        idx: 0,
        title: "Thỏa mãn sinh lý (physiological satisfaction)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đạt được sự sống còn",
      },
      {
        isKey: false,
        title: "Kết hợp",
        idx: 2,
      },
      {
        isKey: true,
        title: "Lòng tự trọng",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 216,
    title: " Hiệu ứng hào quang (halo affect) liên quan tới xu hướng: ",
    answers: [
      {
        idx: 0,
        title: "Thúc đẩy từ bên trong",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: " B. Giấu đi thứ tốt nhất (hide the best)",
      },
      {
        isKey: true,
        idx: 2,
        title:
          " C. Chuyển nhân viên sang phòng quản lý dự án do họ làm tốt trong chuyên môn của họ ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          " Chuyển nhân viên sang phòng quản lý dự án do họ được đào tạo về quản lý dự án",
      },
    ],
  },
  {
    title:
      "Một chướng ngại vật đối với đội dự án trong một tổ chức hướng ma trận là: ",
    idx: 217,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Việc tổ chức đội dự án là tập trung vào chuyên môn",
      },
      {
        title:
          "Các thành viên của đội đang mượn các nguồn lực và khó động viên",
        isKey: true,
        idx: 1,
      },
      {
        title: "Đội đang quá tập trung",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Đội quá lớn và khó kiểm soát",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Tự hỏi ai sẽ là người sử dụng khả năng (or định giá - evaluation) của họ ",
      },
      {
        title: "Làm việc cho nhiều thủ trưởng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Phát triển trách nhiệm",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tính toán lợi ích biên khi làm việc trong nhiều dự án",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 218,
    title:
      " Các điều dưới đây là mối quan tâm đặc trưng của thành viên đội dự án hướng ma trận (matrixed team members), ngoại trừ:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Vũ lực (forcing)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Hòa nhã làm ổn thỏa (smoothing)",
      },
      {
        isKey: false,
        title: "Thỏa hiệp",
        idx: 2,
      },
      {
        isKey: true,
        title: "Giải quyết vấn đề",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Điều nào dưới đây trong kỹ thuật giải quyết mâu thuẫn sẽ sinh ra giải pháp lâu dài nhất",

    idx: 219,
  },
  {
    idx: 220,

    title:
      "Loại hình tổ chức nào là tốt nhất trong việc quản lý độ phức tạp của dự án liên quan đến các nỗ lực bên ngoài?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tổ chức hướng dự án (projectized-org)",
      },
      {
        title: "Tổ chức hướng chức năng (functional-org)",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tổ chức theo đường (line-org)",
      },
      {
        idx: 3,
        isKey: true,
        title: "Tổ chức theo ma trận (matrix-org)",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Tính cách cá nhân",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Các nguồn lực",
        idx: 1,
      },
      {
        idx: 2,
        title: "Chi phí ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Việc quản lý ",
      },
    ],
    idx: 221,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nguyên nhân thông thường của xung đột trong dự án là lịch trình, các ưu tiên của dự án và:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giải quyết vấn đề ",
      },
      {
        idx: 1,
        title: "Vũ lực",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Sự rút lui (withdrawal).",
      },
      {
        isKey: false,
        title: "Thỏa hiệp",
        idx: 3,
      },
    ],
    idx: 222,

    title:
      "Kỹ thuật giải quyết mâu thuẫn nào được PM sử dụng khi anh ta noi: “tôi k thể giải quyết vấn đề ngay lúc này”?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Biểu đồ nguồn lực nào chỉ ra điều mà ma trận gán trách nhiệm không có? ",
    answers: [
      {
        title: "Thời gian",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Hoạt động",
        idx: 1,
      },
      {
        title: "Tương giao",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Người phụ trách mỗi hoạt động",
        idx: 3,
      },
    ],
    idx: 223,
  },
  {
    title:
      "Bạn được phân công làm PM cho một dự án truyền thông lớn. Dự án được hoàn thành trong 1 năm và đã đi được nửa đường. Đội dự án bao gồm 5 người bán và 20 nhân viên của công ty bạn. Bạn muốn biết ai là người có trách nhiệm với công việc trong dự án. Bạn sẽ tìm thấy các thông tin này ở đâu?",
    idx: 224,
    answers: [
      {
        title: "Ma trận gán trách nhiệm",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sơ đồ nguồn tài nguyên",
      },
      {
        idx: 2,
        isKey: false,
        title: "Sơ đồ đường (bar chart)",
      },
      {
        title: "Sơ đồ tổ chức dự án",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "PM",
      },
      {
        isKey: true,
        title: "Giám đốc chức năng",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đội dự án",
      },
      {
        idx: 3,
        title: "Nhà tài trợ dự án",
        isKey: false,
      },
    ],
    title:
      "Trong giai đoạn lập kế hoạch dự án ở một tổ chức hướng ma trận, PM xác định rằng sẽ cần thêm nguồn nhân lực. PM sẽ yêu cầu các nguồn lực này từ: ",

    idx: 225,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM phải công bố lịch trình dự án. Các hoạt động, ngày bắt đầu, kết thúc và các nguồn lực đã được xác định. Người PM nên làm gì tiếp theo?",
    idx: 226,

    answers: [
      {
        title:
          "Phân phối lịch trình dự án dựa theo kế hoạch quản lý truyền thông",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Xác nhận sự có sẵn của các nguồn lực",
      },
      {
        idx: 2,
        title:
          "Tinh chỉnh kế hoạch quản lý dự án để phản ảnh các thông tin chi phí chính xác hơn",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Công bố sơ đồ đoạn giải thích đường thời gian (timeline)",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong mỗi buổi họp đội dự án, PM hỏi mỗi thành viên đội dự án mô tả công việc họ đang làm và PM phân công các công việc mới cho mỗi thành viên. Thời gian kéo dài của buổi họp tăng do có nhiều công việc khác nhau được phân công. Điều này có thể xảy ra do tất cả các nguyên nhân dưới đây, ngoại trừ:",
    answers: [
      {
        title: "Sự thiếu bảng WBS",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Sự thiếu ma trận gán trách nhiệm",
      },
      {
        title: "Sự thiếu cân bằng nguồn lực",
        isKey: true,
        idx: 2,
      },
      {
        title: "Sự thiếu liên quan của đội dự án trong khi lập kế hoạch dự án",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 227,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 228,
    answers: [
      {
        title: "Ám chỉ (referent)",
        idx: 0,
        isKey: false,
      },
      {
        title: "Chuyên môn (expert)",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Hình phạt (penalty)",
        isKey: false,
      },
      {
        title: "Luật chính thức (formal)",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Bạn là một PM đứng đầu một dự án liên chức năng trong môi trường ma trận yếu. không có thành viên nào trong đội dự án báo cáo với bạn một cách hữu dụng và bạn không có khả năng để trực tiếp tưởng thưởng cho sự làm việc của họ. dự án khó, kéo theo ràng buộc nghiêm ngặt về thời gian và các thách thức trong quản lý chất lượng. Loại hình sức mạnh quản lý dự án nào dưới đây sẽ có hiệu quả nhất trong tình huống này? ",
  },
  {
    title:
      " Một nhân viên dự án không làm việc tốt trong dự án do cô ấy thiếu kinh nghiệm trong công việc phát triển hệ thống. không có sẵn ai có đủ điều kiện để làm việc này. Đối với PM, giải pháp nào là tốt nhất?",
    answers: [
      {
        isKey: false,
        title:
          "Tham khảo ý kiến các giám đốc chức năng để xác định động cơ hoàn thành dự án cho thành viên đội dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thay người mới có nhiều kỹ năng hơn để phát triển công việc. ",
      },
      {
        title: "Sắp xếp để nhân viên này được đào tạo",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Cấp phát một vài nguồn lịch trình dự trữ ",
      },
    ],
    idx: 229,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một PM vừa tìm ra nhà thầu phụ chính của dự án luôn luôn chậm tiến độ công việc. nhân viên dự án có trách nhiệm với phần này của dự án không có tiến triển tốt với nhà thầu phụ này. Để giải quyết vấn đề, người PM nói rằng:”cả 2 người phải từ bỏ một số thứ để giải quyết vấn đề này”. Phương pháp giải quyết vấn đề nào mà PM đang sử dụng?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Đối đầu",
      },
      {
        idx: 1,
        title: "Thỏa hiệp",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Sự hòa nhã làm ổn thỏa (smoothing)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Giao tiếp",
      },
    ],

    idx: 230,
  },
  {
    title:
      "Một dự án có một vài đội. Đội C đã một lần không kịp deadline trong quá khứ. Điều này là nguyên nhân khiến đội D phải hủy đường tới hạn một vài lần. Với tư cách là ng lãnh đạo của đội D, bạn nhận được thông tin rằng deadline tiếp theo có thể sẽ không kịp. bạn nên gặp và trao đổi với:",
    answers: [
      {
        title: "Người quản lý của đội D",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chỉ riêng PM",
      },
      {
        isKey: false,
        title: "PM và ban lãnh đạo",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "PM và đội trưởng đội C",
      },
    ],
    idx: 231,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 232,
    title:
      " Dự án mới làm hứng khởi cả PM và đội dự án. Đây là lần đầu tiên người PM được phân công vai trò là PM. Đội có cảm giác họ có khả năng hoàn thành công việc mà chưa bao giờ làm trước đó. Đội gồm 29 người góp phần mô tả sản phẩm và đội gồm 9 chuyên gia nhiều kinh nghiệm chuyên môn. Trong quá trình lên kế hoạch, 3 nhân viên có chuyên môn cao đã không đồng ý về phạm vi của 2 sản phẩm. một ng chỉ ra rằng bản nháp WBS nên thêm 2 gói công việc. một người nói rằng gói công việc liên quan không nên được thực hiện. người thứ 3 đồng ý với 2 người trên. PM nên giải quyết xung đột này ntn? ",
    answers: [
      {
        title:
          "PM nên lắng nghe sự khác biệt trong quan điểm, xác định lựa chọn tốt nhất và thực hiện nó ",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "PM nên trì hoãn các thảo luận, gặp gỡ riêng từng người và xác định cách tiếp cận tốt nhất.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "PM nên lắng nghe sự khác biệt trong quan điểm, khuyến khích các thảo luận logic và tạo điều kiện cho thỏa thuận",
        isKey: true,
      },
      {
        title:
          "PM nên giúp đội dự án tập trung vào khía cạnh thích hợp trong ý kiến của họ và xây dựng sự thống nhất bằng cách sử dụng kỹ thuật",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Dự án vừa bắt đầu và bao gồm nhân lực từ 14 phòng ban khác nhau. Tôn chỉ dự án được ký bởi một người và bao gồm hơn 30 yêu cầu chính phải được đáp ứng trong dự án. Nhà tài trợ thông báo với PM rằng SPI phải được giữ trong khoảng 0.95 và 1.1. một vài phút điều tra dẫn đến xác định được 34 bên có liên quan, và mục tiêu lịch trình đã có ràng buộc. PM vừa mới được tuyển dụng. loại quyền lực quản lý dự án nào dưới đây là tốt nhất để giúp PM có được sự hợp tác từ những người khác?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 233,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Luật chính thức",
      },
      {
        idx: 1,
        isKey: false,
        title: "Tư vấn, tham khảo (referent)",
      },
      {
        idx: 2,
        title: "Luật phạt",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chuyên môn",
      },
    ],
  },
  {
    idx: 234,
    title:
      " PM đang cố gắng giải quyết tranh chấp giữa 2 nhân viên dự án. Một ng nói rằng hệ thống nên được tích hợp trước khi kiểm thử, và người còn lại có ý kiến rằng ủng hộ việc mỗi hệ thống nên được kiểm thử trước khi tích hợp. Dự án bao gồm hơn 30 người, và 12 hệ thống cần phải tích hợp. nhà tài trợ yêu cầu rằng việc tích hợp phải được thực hiện đúng thời điểm. tuyên bố nào của PM là tốt nhất để giải quyết mâu thuẫn này? ",
    answers: [
      {
        isKey: false,
        title: "Làm theo cách của PM",
        idx: 0,
      },
      {
        title: "Mọi người hãy bình tĩnh để hoàn thành công việc",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Hãy giải quyết vấn đề này một lần nữa vào tuần sau khi mọi người đều bình tĩnh",
      },
      {
        title:
          "Hãy thực hiện các kiểm thử giới hạn trước khi thực hiện và kết thúc kiểm thử sau khi cài đặt",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 235,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đội dự án",
      },
      {
        title: "Người quản lý cấp cao",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Khách hàng",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Nhà tài trợ",
      },
    ],
    title:
      "Một PM đang trong giai đoạn thực thi dự án khi một bên có liên quan đề nghị một thay đổi lớn. thay đổi này sẽ dẫn đến sửa chữa lớn lần thứ 3 của dự án. Vào cùng thời điểm, PM khám phá ra một gói công việc lớn của được hoàn thành do một thủ trưởng đã chuyển nhân viên của anh ta sang một dự án khác có mức độ ưu tiên cao hơn. Ai là người thích hợp nhất để PM xác định các vấn đề này cùng? ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Lấy hướng dẫn được dịch bởi một bên tin cậy và nhiều kinh nghiệm",
      },
      {
        idx: 1,
        title:
          "Tìm kiếm cho các ảnh hưởng về chất lượng của việc dịch sai hướng dẫn đổ móng",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Làm đội dự án chú ý tới vấn đề này và hỏi họ tìm kiếm các lỗi khác của bản dịch",
      },
      {
        title:
          "Thông báo với nhà tài trợ về vấn đề trong báo cáo dự án tiếp theo.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 236,
    title:
      "Làm việc trong một dự án đang thực hiện khi PM chợt nghe 2 nhân viên cãi nhau về tập hợp các hướng dẫn. PM điều tra và khám phá rằng các hướng dẫn cho việc xây dựng móng bên tông đang được đổ được dịch sai giữa 2 ngôn ngữ khác nhau đang được sử dụng trong dự án. Điều nào dưới đây là tốt nhất đối với PM để làm đầu tiên? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Kỹ thuật giải quyết xung đột có thể được sử dụng trong dự án bao gồm: đối đầu, làm bình lặng (smoothing), vũ lực và: ",

    answers: [
      {
        idx: 0,
        title: "Rút lui (withdrawing)",
        isKey: true,
      },
      {
        title: "Trực tiếp",
        idx: 1,
        isKey: false,
      },
      {
        title: "Tổ chức (organizing)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Kiểm soát",
        idx: 3,
      },
    ],
    idx: 237,
  },
  {
    title:
      "Việc thực hiện dự án có CPI=1.03 và SPI=1. Có 14 nhân viên và mỗi nhân viên đều có đầu vào trong kế hoạch quản lý dự án cuối cùng. Khách hàng đồng ý 3 sản phẩm bàn giao hoàn thành cho đến nay mà k có phàn nàn và ma trận gán trách nhiệm không thay đổi từ khi dự án bắt đầu. dự án đang được hoàn thành trong môi trường ma trận và không có hợp đồng nào thêm vào dự án. Nhà tài trợ hài lòng với trạng thái của dự án, một nhân viên luôn phàn nàn về việc công việc dự án của anh ta khá tốn thời gian. Điều nào dưới đây là tốt nhất cho PM thực hiện?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 238,

    answers: [
      {
        title: "Xem xét lại hệ thống thưởng của dự án",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Cố gắng cải thiện hiệu năng lịch trình của dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Gặp khách hàng để cố gắng kéo dài tiến độ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Giành lấy văn bản chấp nhận chính thức từ khách hàng",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Hỏi nhà tài trợ nếu các thông tin cần thiết nên được gửi trong báo cáo hơn là nhà tài trợ tham gia vào buổi họp",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Thông báo với đội ai muốn được vắng mặt buổi họp về nguyên tắc của truyền thông trong các buổi họp như thế này",
      },
      {
        title:
          "Tạo ra một luật mới cho các buổi họp và thông báo tới đội dự án",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Chuẩn bị bài tập xây dựng đội mà kéo theo tất cả các thành viên trong đội tham gia",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 239,

    title:
      "Dự án đang được thử thách quản lý. Mỗi người bị thúc giục để hoàn thành dự án đúng thời hạn. Không may, sự căng thẳng tăng lên đến nỗi mỗi cuộc họp đội dự án đều trở thành chiến trường cãi nhau và có rất ít công việc được hoàn thành trong buổi họp. một nhân viên yêu cầu được vắng mặt trong các buổi họp tiếp theo, vì mng làm anh ta bực mình. Trong khi đó, nhà tài trợ yêu cầu được tham dự để hiểu rõ hơn dự án đang được thực hiện ntn và các vấn đề liên quan để hoàn thành dự án, và khách hàng bắt đầu thảo luận về thêm phạm vi vào dự án. Trong tình huống này, PM tốt nhất nên làm gì? ",
  },
  {
    idx: 240,
    answers: [
      {
        title: "Làm thế nào để mỗi nhân viên thực hiện công việc trong dự án",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Một ước tính của sự hiệu quả của đội trong dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nỗ lực xây dựng đội dự án",
      },
      {
        title: "Giảm tỷ lệ doanh thu nhân viên",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Đánh giá hiệu quả dự án khác với hành động đánh giá hiệu năng đội dự án ở chỗ đánh giá hiệu quả dự án tập trung vào:",
  },
  {
    idx: 241,
    title:
      "Một PM có 1 vấn đề phức tạp để giải quyết và tạo quyết định về cái gì cần thiết để làm. Một vài tháng sau, vấn đề lại xuất hiện trở lại. PM đã KHÔNG làm gì trước đó?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Phân tích rủi ro đúng cách",
        idx: 0,
      },
      {
        idx: 1,
        title: "Xác nhận rằng quyết định đã giải quyết vấn đề ",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Có sự phê chuẩn của nhà tài trợ dự án trong quyết định đó ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Sử dụng sơ đồ Ishikawa",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 242,
    answers: [
      {
        idx: 0,
        title: "PM không hiểu nguyên lý Herzberg",
        isKey: true,
      },
      {
        idx: 1,
        title:
          "Dự án đang chi tiêu ít hơn nó nên tiêu tốn, PM nên bắt đầu theo dõi chi phí một cách cẩn thận",
        isKey: false,
      },
      {
        isKey: false,
        title: "Xem xét lại hiệu năng nên có để tìm thêm các điều chỉnh khác",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "PM nên sử dụng sự đánh giá tốt để xác định các thay đổi quan trọng",
      },
    ],
    title:
      " CPI=1.02, tỷ lệ chi phí lợi ích là 1.7 và vòng cuối cùng xem xét lại hiệu năng đã được xác định là cần thêm một vài điều chỉnh. Đội dự án chuyển địa điểm sang tòa nhà mới khi dự án bắt đầu. mỗi người nhận xét rằng họ đã phấn khích thế nào khi họ được sử dụng thiết bị mới. nhà tài trợ cung cấp các hỗ trợ thích đáng cho dự án và một vài rủi ro không xác định đã xảy ra. Trong nỗ lực để cải thiện hiệu năng, PM spends part of the project budget on new chairs for the team members and adss the term “senior” to each team member's job title. Điều nào dưới đây là đúng khi nói về dự án này của PM? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn vừa tìm ra một nhà thầu phụ chính cho dự án của bạn đã cung cấp hàng chậm tiến độ. Nhà thầu phụ này tiếp cận với bạn và yêu cầu tiếp tục chấp nhận hàng sẽ bị chậm nhưng sẽ được giảm 1 phần giá thành. Lời mời chào này là một ví dụ về:",
    answers: [
      {
        idx: 0,
        title: "Đối đầu",
        isKey: false,
      },
      {
        isKey: true,
        title: "Thỏa hiệp",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Làm bình lặng (smoothing)",
      },
      {
        title: "Vũ lực",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 243,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 244,
    answers: [
      {
        title: "Ngôn ngữ, lời nói (verbal)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Văn bản (written)",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chính thức (formal)",
      },
      {
        title: "Phi ngôn ngữ (nonverbal)",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      " Phần lớn sử dụng của truyền thông ……………… phần lớn giống như giúp đỡ trong giải quyết các vấn đề phức tạp",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 245,

    title:
      " Bảng WBS có thể là một giúp đỡ hiệu quả cho truyền thông trong các tìnhhuống nào?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Trong nội bộ đội dự án",
      },
      {
        isKey: false,
        title: "Trong nội bộ tổ chức",
        idx: 1,
      },
      {
        isKey: false,
        title: "Ngoài nội bộ với khách hàng",
        idx: 2,
      },
      {
        idx: 3,
        title: "Trong và ngoài nội bộ dự án",
        isKey: true,
      },
    ],
  },
  {
    idx: 246,
    title: " Điều nào dưới đây giống với kết quả của truyền thông khối nhất?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Dự án bị chậm tiến độ ",
      },
      {
        title: "Tăng thêm mức độ tin cậy",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Xảy ra các mâu thuẫn",
        isKey: true,
      },
      {
        title: "Người quản trị cấp trung không hài lòng",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Truyền thông thường được nâng cao khi người gửi……………… người nhận:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nói chuyện",
      },
      {
        isKey: false,
        title: "Sử dụng ngôn ngữ cơ thể khi nói chuyện",
        idx: 1,
      },
      {
        idx: 2,
        title: "Nói chuyện 1 cách chậm rãi",
        isKey: false,
      },
      {
        title: "Chỉ ra các quan điểm có liên quan",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 247,
  },
  {
    idx: 248,
    answers: [
      {
        isKey: false,
        title: "Các mối nguy hại được loại bỏ",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Khách hàng yêu cầu các công việc thêm vào nhưng không có trong hợp đồng",
      },
      {
        isKey: false,
        title:
          "Dự án có lịch trình k đúng thời hạn và bao gồm thay đổi đường tới hạn",
        idx: 2,
      },
      {
        title: "Dự án vượt quá kinh phí",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Sự phù hợp của văn bản chính thức với khách hàng được yêu cầu khi:",
  },
  {
    answers: [
      {
        title: "Văn bản truyền thông chính thức",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lời nói (verbal) truyền thông chính thức",
      },
      {
        idx: 2,
        isKey: false,
        title: "Văn bản truyền thông không chính thức",
      },
      {
        idx: 3,
        isKey: true,
        title: "Lời nói truyền thông không chính thức",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 249,

    title:
      "Một PM có vấn đề với hiệu năng của đội dự án. Loại hình truyền thông nào sẽgiúp PM xác định vấn đề? ",
  },
  {
    idx: 250,
    title: "Truyền thông bên dưới hợp đồng nên hướng về:",
    answers: [
      {
        idx: 0,
        title: "Văn bản truyền thông chính thức",
        isKey: true,
      },
      {
        isKey: false,
        title: "Lời nói (verbal) truyền thông chính thức",
        idx: 1,
      },
      {
        idx: 2,
        title: "Văn bản truyền thông không chính thức",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lời nói truyền thông không chính thức",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Văn bản truyền thông chính thứct. ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Lời nói (verbal) truyền thông chính thức",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Văn bản truyền thông không chính thức",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lời nói truyền thông không chính thứ",
      },
    ],

    idx: 251,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Báo cáo trạng thái dự án là ví dụ về loại hình truyền thông nào?",
  },
  {
    answers: [
      {
        title: "Ít quan trọng",
        idx: 0,
        isKey: false,
      },
      {
        title: "Rất quan trọng",
        idx: 1,
        isKey: true,
      },
      {
        title:
          "Quan trọng chỉ khi mục tiêu chi phí và lịch trình được kéo theo",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Quan trọng chỉ khi chắc rằng bạn muốn thương lượng thành công",
      },
    ],
    title:
      "Khi một PM đang bận thương lượng, kỹ năng truyền thông bằng phi ngôn ngữ là ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 252,
  },
  {
    title:
      "Một dự án lớn về viễn thông trong 1 năm đã đi được nửa đường khi bạn tiếp quản vị trí PM từ 1 ng khác. Dự án kéo theo 3 người bán khác nhau và một đội dự án gồm 30 người. bạn muôn xem các yêu cầu truyền thông dự án và kỹ thuật nào được sử dụng để giúp đỡ trong truyền thông. Bạn sẽ tìm thấy nó ở đâu? ",
    idx: 253,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kế hoạch quản lý dự án",
      },
      {
        title: "Kế hoạch phân phối thông tin",
        idx: 1,
        isKey: false,
      },
      {
        title: "Sơ đồ đoạn (bar chart)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Kế hoạch quản lý truyền thông",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 254,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Xác định tại sao bên có liên quan đó không nhận được thông tin và cho anh ta biếtkhi nó đã được công bố",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Hỏi giám đốc chức năng xem tại sao bên có liên quan không hiểu trách nhiệmcủa mình",
      },
      {
        idx: 2,
        title:
          "Xem xét lại kế hoạch quản lý truyền thông và thực hiện sửa lại nếu cần thiết",
        isKey: true,
      },
      {
        idx: 3,
        title:
          "Xác định tình huống trong buổi họp ủy ban hướng dẫn lần tới để những ngườicòn lại không bỏ sót các thông tin thay đổi được công bố. ",
        isKey: false,
      },
    ],
    title:
      "Thông tin dự án đã được phân phối dựa theo kế hoạch quản lý truyền thông. Một vài sản phẩm của dự án đã thay đổi tuân theo kế hoạch quản lý dự án. Một bên có liên quan tỏ ra ngạc nhiên với PM khi nghe thấy các thay đổi đã được công bố về sản phẩm dự án. Tất cả các bên có liên quan đều nhận được thông báo về thay đổi. PM nên làm gì? ",
  },
  {
    title:
      "Truyền thông là chìa khóa thành công của dự án. Với tư cách là PM, bạn có 3 bên có liên quan cần phải giao tiếp. bạn có 6 kênh truyền thông. Một bên có liên quan mới được thêm vào và bạn cũng phải giao tiếp với anh ta. Như vậy có bao nhiêu kênh truyền thông bạn đang có bi h?",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "7",
      },
      {
        isKey: true,
        title: "10",
        idx: 1,
      },
      {
        idx: 2,
        title: "12",
        isKey: false,
      },
      {
        idx: 3,
        title: "16",
        isKey: false,
      },
    ],
    idx: 255,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Điều gì đã được nói ra và khi nào",
      },
      {
        isKey: false,
        title: "Điều gì đã được nói ra, ai nói và thời gian nói",
        idx: 1,
      },
      {
        idx: 2,
        title: "Cách nói riêng của mỗi người và điều gì đã được nói ra",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Mức độ và tông giọng của mỗi người (nói từ từ hay quát vào mặt nhau J) ) vàcách nói riêng của mỗi người. ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " 2 nhân viên đang cãi nhau về điều gì cần làm để hoàn thành gói công việc.Nếu PM muốn biết chuyện gì đang xảy ra, cô ấy nên chú ý nhất vào:",
    idx: 256,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Lời nói không chính thức",
        idx: 0,
      },
      {
        isKey: true,
        title: "Văn bản chính thức",
        idx: 1,
      },
      {
        isKey: false,
        title: "Lời nói chính thức",
        idx: 2,
      },
      {
        title: "Văn bản không chính thức",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 257,
    title:
      "Một PM có một đội dự án bao gồm các nhân viên từ 4 quốc gia. Dự án rất quan trọng đối với công ty, và PM có liên quan tới thành công của dự án. Thời gian của dự án là chấp nhận được. Loại phương pháp truyền thông nào anh ta nên sử dụng?",
  },
  {
    idx: 258,
    answers: [
      {
        idx: 0,
        title: "Thông tin lịch sử ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Sử dụng các nhà cung cấp bên ngoài. ",
        idx: 1,
      },
      {
        title: "Các quy trình kiểm soát thay đổi. ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Các yêu cầu mức độ kỹ năng nguồn nhân lực",
        idx: 3,
      },
    ],
    title:
      "Nhân tố nào có ảnh hưởng lớn nhất tới chi phí lao động theo ước tính trên đơn vị cho dự án. ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 259,
    title:
      "Buổi họp tiến trình dự án không diễn ra tốt đẹp. mọi người nói tất cả mọi lúc, có nhiều ngừoi không tham gia vào và có nhiều chủ đề được thảo luận ngẫu nhiên. Luật nào dưới đây cho buổi họp hiệu quả đã không được tuân theo? ",
    answers: [
      {
        title:
          "Sự tập trung lịch sự và cân nhắc của mỗi cá nhân, sự điều khiển ai sẽ được nói",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Lịch trình buổi họp",
        idx: 1,
      },
      {
        isKey: false,
        title: "Họp có mục đích, với những người phù hợp tham gia vào buổi họp",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Tạo ra và công bố một vấn đề và một tập các luật để điều khiển buổi họp",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn vừa được phân công là PM cho một dự án sản xuất lớn. dự án 1 năm này đã thực hiện được 1 nửa. nó kéo theo 5 người bán và 20 thành viên trong công ty tham gia vào đội dự án. Bạn muốn xem xét lại thật nhanh dự án đang tiến triển tới đâu. Báo cáo nào dưới đây là có ích nhất để tìm những thông tin như vậy?",
    idx: 260,
    answers: [
      {
        title: "Trạng thái công việc (work status)",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tiến trình (progress)",
        idx: 1,
        isKey: true,
      },
      {
        title: "Dự báo (forecast)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Truyền thông",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 261,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: " A. Yêu cầu nhân viên lặp lại những gì PM nói",
      },
      {
        title:
          "Xem xét lại danh sách thông tin liên lạc của tất cả các bên có liên quan",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Yêu cầu nhân viên tìm kiếm các yêu cầu thay đổi",
        idx: 2,
      },
      {
        title: "Xem xét lại lịch họp sắp tới",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một nhân viên đang tham quan nhà máy sản xuất của một trong những nhà cung cấp. Điều nào dưới đây là quan trọng nhất phải làm trong bất kỳ cuộc gọi nào mà PM sẽ gọi cho anh ta?",
  },
  {
    idx: 262,
    answers: [
      {
        title:
          "Chắc chắn rằng các bên có liên quan nhìn thấy PM đang tình cờ nghe và yêu cầu họ chuyển các câu hỏi cho PM bằng văn bản",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Thuyết trình với tất cả các bên có liên quan về trạng thái của dự án",
      },
      {
        idx: 2,
        title:
          "Gửi cho 2 bên có liên quan này bản copy về nhật ký vấn đề (issue log) và hỏi xem có nhận xét gì nữa không",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Sắp xếp 1 cuộc họp với cả 2 bên có liên quan này để nghe họ nói về bất kỳ vấn đề liên quan nào mà họ có. ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM tình cờ nghe được cuộc hội thoại giữa 2 bên có liên quan đang nói về sự không hài lòng của họ về ảnh hưởng của dự án tới phòng ban của họ. bên có liên quan A hỏi dự án đang đúng tiến độ không và bên B trả lời là 1.05. bên A hỏi PM có biết sự liên quan của việc này tới bên B không, bên B trả lời anh ta không chắc chắn. Điều tốt nhất là PM nên làm là gì?",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "PM chỉ quản lý các dự án có mức độ ưu tiên thấp và anh ta phải nén lịch trình, cho thấy anh ta không đủ kỹ năng để làm việc trong phòng quản lý dự án",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Nhật ký lỗi không nên được sử dụng trong những dự án có quy mô này, cho thấy PM không đủ kiến thức để làm việc trong phòng quản lý dự án",
      },
      {
        idx: 2,
        title:
          "PM không thu hút hiệu quả các bên có liên quan, cho thấy anh ta không đủ kiến thức để làm việc trong phòng quản lý dự án",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "PM có 2 nguồn lực then chốt trong đội của mình và vẫn cần phải làm lại tôn chỉ dự án, cho thấy anh ta không đủ kỷ luật để làm việc trong phòng quản lý dự án",
      },
    ],
    idx: 263,
    title:
      "Một PM đã quản lý 4 dự án cho công ty và đang được cân nhắc để tham gia vào phòng quản lý dự án. Đây là những điều đã rút ra được sau quá trình đáng giá năng lực của anh ta: dự án đầu tiên của PM này có biến động chi phí CV = -500, sử dụng 2 nguồn lực then chốt, cần phải làm lại tôn chỉ dự án trong giai đoạn thực thi và được xếp hạng ưu tiên thứ 14 trong công ty. Dự án thứ 2 kết thúc với biến động lịch trình là +100, được hoàn thành với lịch trình nén rộng (vastly compressed schedule) và nhận được thư giới thiệu từ nhà tài trợ, nhưng sản phẩm của dự án không được sử dụng. Dự án thứ 3 có số lượng thay đổi hơn 23% so với dự kiến, có SPI=0.90 và 35 mục trong nhật ký vấn đề (issue log) khi dự án hoàn thành. Mỗi dự án có ngân sách chi phi là 1000$ và khoảng 20 tới 28% thay đổi nhiều hơn so với các dự án khác cùng quy mô. Phòng quản lý dự án quyết định không cân nhắc người PM này vào phòng nữa. Điều nào dưới đây mô tả tốt nhất tại sao PM lại không được vào?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "PM tập trung vào yêu cầu của nhà tài trợ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Ban lãnh đạo chức năng không được tính đến trong kế hoạch quản lý truyền thông",
        isKey: true,
      },
      {
        idx: 2,
        title:
          "Hoạt động tiếp sau nên được theo dõi, không phải hoạt động trước đó",
        isKey: false,
      },
      {
        isKey: false,
        title: "Những người cần thiết không được mời đến buổi tiệc quan trọng",
        idx: 3,
      },
    ],

    title:
      "Mọi thứ đang hoạt động tốt trong giai đoạn giữa của một dự án. Hệ thống cấp phép công việc cho phép mọi người biết thời gian bắt đầu công việc và nhật ký lỗi đã giúp theo dõi các yêu cầu của các bên có liên quan. Tỷ suất chi phí có ích được cải thiện và nhà tài trợ bày tỏ sự đánh giá cao của mình cho những nỗ lực của đội dự án bằng cách tổ chức một buổi tiệc quan trọng cho đội. PM đã nhận được 1 cuộc gọi từ 1 thành viên dự án nói rằng kết quả từ việc hoàn thành hoạt động trước đã bị chậm 2 ngày. lý do nào dưới đây là tốt nhất giải thích tại sao điều này xảy ra?",
    idx: 264,
  },
  {
    idx: 265,
    answers: [
      {
        isKey: false,
        title:
          "Các nhân viên dự án ngay lập tức cố gắng giải quyết hoạt động đang gặp vấn đề",
        idx: 0,
      },
      {
        title: "Điều tra xem tại sao lịch trình dự án lại gấp gáp",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tìm xem ai có thể thay thế 3 nhân viên đó",
      },
      {
        idx: 3,
        title: "Tạo nhật ký lỗi",
        isKey: true,
      },
    ],
    title:
      " Có nhiều gói công việc đã hoàn thành tốt đẹp trong dự án và nhà tài trợ đã có một vài sự đánh giá cao cho sự cải thiện. Dự án đang trong đúng lịch trình để đáp ứng hạn chót gấp gáp (aggressive schedule) khi hành động sau của hoạt động đường tới hạn gặp phải một trở ngại lớn (suffer a major setback). Hoạt động này có 14 ngày trễ (14days of float) và được 4 ng hoàn thành. Có 2 nhân viên khác có kỹ năng trợ giúp hoạt động này, nếu cần thiết. PM nhận được 1 cuộc gọi rằng 3 nhân viên khác đang cố gắng rời khỏi dự án do họ không cảm thấy rằng dự án có thể thành công. Khi PM tiếp tục theo đuổi vấn đề này, cô ấy khám phá ra rằng những nhân viên này có vấn đề mà chưa được xác định trc đó. Điều nào dưới đây là tốt nhất để cải thiện dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 266,
    answers: [
      {
        title:
          "Ghi lại những ấn tượng sâu sắc của buổi tiệc vào các bài học thu được từ dự án",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Xem lại phương pháp phân phối thông tin trong dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Tổ chức một buổi họp với tất cả các bên có liên quan để thảo luận các mối bận tâm của họ ",
      },
      {
        isKey: false,
        title:
          "Chắc chắn rằng ban lãnh đạo có bản copy của kế hoạch quản lý truyền thông đểanh ta có thể nhớ những mối bận tâm này nên được gửi tới PM",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án có 13 nhân viên và chịu ảnh hưởng từ 15 phòng ban trong tổ chức. Do dự án đã hoàn thành được 20% thời hạn dự án và có báo cáo hiệu năng thành công từ 5 phòng ban, PM tổ chức 1 buổi tiệc. PM mời các bên có liên quan từ tất cả các phòng ban, cung cấp những đánh giá tốt về một cơ hội truyền thông phi chính thức để truyền tải những điều tốt tới những phòng ban chưa tham gia vào dự án. Tại buổi tiệc, PM đi 1 vòng để khám phá và tìm các thông tin có liên quan tới 1 trng những phòng ban đang nói về việc thiết lập nhiều buổi họp chính thức hơn trong dự án. Điều tốt nhất PM nên làm đầu tiên là:",
  },
  {
    answers: [
      {
        title: "Liên lạc với PM ngay lập tức để cung cấp cho PM lịch trình",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Thêm các thông tin này vào báo cáo lần tới của anh ta",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Yêu cầu vấn đề này được thêm vào nhật ký lỗi của dự án",
      },
      {
        isKey: true,
        title: "Khuyến nghị hành động hiệu chỉnh",
        idx: 3,
      },
    ],
    idx: 267,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án lớn đang thực hiện khi một nhân viên đội dự án xem lại báo cáo trạng thái dự án. Anh ta thấy rằng dự án hiện tại đang thực hiện chậm lịch trình. Khi tìm kiếm sâu hơn, anh ta chú ý rằng sự chậm trễ là nguyên nhân của hoạt động của anh ta bị dời lịch trong thời gian anh ra nước ngoài và không thể thực hiện được hoạt động này. Đây là mối bận tâm lớn do anh ta cam kết dự án sẽ thành công và anh ta không muốn là nguyên nhân của sự chậm trễ hơn của dự án. Điều tốt nhất nên làm là gì?",
  },
  {
    idx: 268,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Giữ một file về những yêu cầu nào chưa được bao gồm trong dự án",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Chắc chắn rằng quy trình kiểm soát thay đổi không được sử dụng như một phươngtiện để thêm vào những yêu cầu vào dự án",
      },
      {
        idx: 2,
        title: "Duy trì nhật ký lỗi",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Tổ chức các buổi họp với các bên có liên quan để vượt qua những công việcìnhchưa được thêm vào dự án",
        idx: 3,
      },
    ],
    title:
      "Dự án của bạn đang có một thời gian khó khăn trong việc có được phê chuẩn chính thức của kế hoạch quản lý dự án do có nhiều yêu cầu của các bên có liên quan chưa được phê chuẩn để liên quan trong dự án. Các bên có liên quan cãi nhau và làm chậm tiến độ dự án khi họ cứ tổ chức buổi họp này tới buổi họp khác về các yêu cầu của họ. Dự án cuối cùng cũng được phê chuẩn và đã bắt đầu từ 6 tháng trước. Tất cả những điều sau sẽ là những hành động ngăn chặn tốt, ngoại trừ:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Sử dụng ngôn ngữ truyền đạt cụ thể (paralingual communication)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Thêm vào nhật ký lỗi sau cuộc gọi đó",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chú ý nhiều hơn để quyết định yêu cầu truyền thông",
      },
      {
        idx: 3,
        isKey: true,
        title: "Phản hồi lại trong quá trình truyền thông.",
      },
    ],
    title:
      "PM đang hi vọng một sản phẩm sẽ được đệ trình (submit) bằng email từ một nhân viên vào ngày hôm nay. Vào cuối ngày, PM liên lạc với nhân viên đó để thông báo rằng PM chưa nhận được email. Nhân viên này xin lỗi và nói rằng anh ra không thể email về sản phẩm, và nó sẽ được gửi thông qua thư thay vì email. Nhân viên này tiếp tục giải thích rằng anh ta đã thông báo với PM điều này sẽ xảy ra trong một cuộc điện thoại khi PM đang du lịch. PM nói:”chúng ta có nói chuyện không khi mà tôi đã nói với anh là tôi không nghe thấy anh nói gì vì sóng yếu?” người nhân viên trả lời: “Có”. Điều gì sẽ ngăn chặn vấn đề này?",
    idx: 269,
  },
  {
    idx: 270,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Các thông tin lịch sử cho các dự án trong tương lai",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lên kế hoạch ghi lại bản ghi lịch sử cho dự án hiện tại",
      },
      {
        title: "Thông báo cho đội dự án về những gì PM đã làm",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Thông báo cho đội dự án về kế hoạch quản lý dự án",
      },
    ],
    title:
      "Các thủ tục công ty bao gồm việc tạo ra văn bản các bài học thu được. điều nào dưới đây là tốt nhất khi sử dụng các bài học thu được??",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Các bài học thu được, được hoàn thành tốt nhất bởi:",
    idx: 271,
    answers: [
      {
        isKey: false,
        title: "PM",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đội dự án",
      },
      {
        title: "Nhà tài trợ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các bên có liên quan",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Sự kiện rủi ro",
        idx: 0,
      },
      {
        idx: 1,
        title: "Xác suất rủi ro",
        isKey: false,
      },
      {
        title: "Số tiền rủi ro (amout at stake)",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí bảo hiểm",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Tất cả những điều sau đều là nhân tố trong đánh giá rủi ro dự án, ngoại trừ: ",
    idx: 272,
  },
  {
    idx: 273,
    title:
      "Nếu một dự án có 60% cơ hội kiếm được 100000$ và có 40% cơ hội mất 100000$, giá trị tiền tệ dự kiến cho dự án là: ",
    answers: [
      {
        title: "Thu được 100000$ ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Mất đi 60000$ ",
      },
      {
        idx: 2,
        isKey: true,
        title: "Thu được 20000$ ",
      },
      {
        isKey: false,
        title: "Mất đi 40000$",
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Cho rằng 2 đầu của dải các ước tính trung bình là +/-3sigma, dải ước tính nào dưới đây bao gồm ít rủi ro nhất? ",

    idx: 274,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "30 ngày, cộng trừ 5 ngày",
      },
      {
        idx: 1,
        title: "Từ 22-30 ngày",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Optimistic=26days, most likely=30days, pessimistic=33days",
      },
      {
        title: "28 ngày",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Sự kiện rủi ro nào dưới đây gây trở ngại cho việc đạt tới mục tiêu lịch thực hiện dự án nhất? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chậm trễ trong việc có được các phê chuẩn được yêu cầu",
      },
      {
        isKey: false,
        idx: 1,
        title: "Tăng đáng kể chi phí mua nguyên vật liệu",
      },
      {
        idx: 2,
        isKey: true,
        title: "Tranh chấp hợp đồng sinh ra các yêu sách tăng thanh toán",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Cuộc họp đã được lên kế hoạch để xem lại việc thực hiện k đúng thời hạn",
      },
    ],
    idx: 275,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nếu 1 rủi ro có 20% cơ hội xảy ra trong 1 tháng cho trước, và dự án dự kiến kéo dài 5 tháng, xác suất mà sự kiện rủi ro này sẽ xảy ra trong tháng thứ 4 của dự án là bn? ",
    idx: 276,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ít hơn 1% ",
      },
      {
        title: "20%",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "60% ",
        isKey: true,
      },
      {
        title: "80%",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 277,

    answers: [
      {
        isKey: false,
        title: " Giá trị rủi ro",
        idx: 0,
      },
      {
        title:
          " Giá trịhiện tại (present value- giá trịhiện tại của dòng tiền mặt sẽ đem lại lượng giá trịquay vòng vốn đầu tưnhất định trong tương lai",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Giá trịtiền tệ dự kiến",
      },
      {
        isKey: false,
        idx: 3,
        title: "Ngân sách ngẫu nhiên",
      },
    ],
    title:
      "Nếu một sự kiện rủi ro có 90% cơ hội xảy ra, và hậu qua là 10000$, tương ứng với 90000$ là:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Các rủi ro sẽ được xcá định trong các quá trình quản lýrủi ro nào?",

    idx: 278,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phân tích định lượng rủi ro và xác định rủi ro",
      },
      {
        title: "Xác định rủi ro và kiểm soát rủi ro",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Xác định rủi ro và kiểm soát rủi ro",
      },
      {
        title: "Xác định rủi ro",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Ghi lại chúng cho các thông tin lịch sử để sử dụng trong các dự án kháC",
        idx: 0,
      },
      {
        title: " Ghi lại chúng và xem lại trong quá trình thực hiện dựán",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title:
          " Ghi lại chúng và đểsang một bên vì chúng đã có trong kếhoạch đối phó với sự kiện ngẫu nhiên",
        isKey: false,
      },
      {
        idx: 3,
        title: "Ghi lại chúng và đưa cho khách hàng",
        isKey: false,
      },
    ],
    idx: 279,
    title:
      " Điều gì nên được hoàn thành với những rủi ro trong danh sách theo dõi (watchlist)",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Các thông tin lịch sự",
      },
      {
        idx: 1,
        isKey: false,
        title: "Các bài học rút ra",
      },
      {
        title: " WBS",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Báo cáo trạng thái dựán",
        isKey: true,
      },
    ],
    idx: 280,

    title:
      "Tất cảnhững điều sau luôn là đầu vào cho quá trình quản lýrủi ro, ngoại trừ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 281,
    title: "Khả năng chấp nhận rủi ro được xác định đểgiúp: ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Đội dự án xếp loại được các rủi ro dựán",
      },
      {
        idx: 1,
        title: "PM ước tính dự án",
        isKey: false,
      },
      {
        title: "Đội dự án lên lịch trình dựán.",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Ban lãnh đạo biết được những người quản lý khác sẽ hành động trong dự án ntn",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các điều kiện và điều khoản trong hợp đồng được tạo ra",
      },
      {
        idx: 1,
        title: "Kế hoạch quản lý dự án được thay đổi",
        isKey: false,
      },
      {
        title: "Kế hoạch quản lý truyền thông được thay đổi",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Tôn chỉ dự án được thay đổi",
        idx: 3,
      },
    ],

    title:
      "Tất cảnhững điều sau có 1 kết quảchung của quản lýrủi ro, ngoại trừ ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 282,
  },
  {
    title:
      " Bảo hiểm mua bán được xem xét tốt nhất nhưlà một ví dụvềloại rủi ro nào?",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sách dự án",
      },
      {
        title: "Bảng kê công việc (SOW)",
        idx: 1,
        isKey: true,
      },
      {
        title: "Tài liệu vai trò và trách nhiệm. ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Sách chỉ dẫn các thủ tục và chính sách của công ty",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 283,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "Cơ sở định lượng",
        idx: 0,
      },
      {
        title: "Cơ sở số học",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Cơ sở định tính",
      },
      {
        isKey: false,
        idx: 3,
        title: "Cơ sở kinh tế",
      },
    ],
    idx: 284,
    title:
      "Bạn đang thấy rằng thật khó để ước lượng chính xác chi phí sẽ ảnh hưởng bởi rủi ro. Bạn nên ước lượng với:",
  },
  {
    title: "Đầu ra của kếhoạch đối phó rủi ro (risk response planning) là: ",
    answers: [
      {
        title: " Số dư Rủi ro",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Các rủi ro được xác định",
      },
      {
        idx: 2,
        title: "Danh sách ưu tiên của các rủi ro",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: " Các ảnh hưởng được xác định",
      },
    ],
    idx: 285,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: " Xác định rủi ro",
        isKey: false,
      },
      {
        title: "Phân tích định lượng rủi ro",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Kế hoạch đối phó rủi ro",
        isKey: false,
      },
      {
        title: "Kiểm soát rủi ro",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      " Việc khắc phục (workaround) được xác định trong quá trình quản lýrủi ro nào? ",

    idx: 286,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 287,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Trong quá trình quản lýrủi ro nào là nhân tốxác định chuyển giao một loại rủi ro (risk made)",
    answers: [
      {
        isKey: false,
        title: " Xác định rủi ro",
        idx: 0,
      },
      {
        title: "Phân tích định lượng rủi ro",
        isKey: false,
        idx: 1,
      },
      {
        title: "Kế hoạch đối phó rủi ro",
        idx: 2,
        isKey: true,
      },
      {
        title: "Kiểm soát rủi ro",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM vừa hoàn thành kế hoạch đối phó rủi ro cho 1 dựán kỹ thuật có kinh phí 387000$. Điều nào dưới đây anh ta nên làm tiếp theo? ",
    idx: 288,
    answers: [
      {
        idx: 0,
        title: " Xác định tỷlệ rủi ro tổng thể cho toàn dựán",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Bắt đầu phân tích rủi ro và chỉra trong phác thảo dựán (project drawing)",
      },
      {
        title: "Thêm các gói công việc vào bảng WBS",
        idx: 2,
        isKey: true,
      },
      {
        title: "Tổ chức đánh giá lại rủi ro dự án",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Ước lượng xu hướng trong phân tích rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        title: "Xác định các yếu tốkích hoạt rủi ro (triggers)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Cung cấp ma trận tỷlệ rủi ro tiêu chuẩn",
        isKey: true,
      },
      {
        title: "Tạo ra kếhoạch dựphòng",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 289,
    title:
      "Một PM hỏi nhiều bên có liên quan đểxác định xác suất và ảnh hưởng của một sốrủi ro. Anh ta sau đó đã phân tích các giảthuyết. Anh ta đang chuyển sang bước tiếp theo của quản lýrủi ro. Dựa vào các thông tin trên, PM đã QUÊN không làm gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Mô phỏng rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        title: "Làm giảm, làm nhẹ rủi ro",
        isKey: false,
        idx: 1,
      },
      {
        title: "Xếp hạng rủi ro tổng thể cho dự án",
        isKey: false,
        idx: 2,
      },
      {
        title: "Kéo theo các bên có liên quan tới dựán",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Một PM tập hợp đội dựán lại, xác định 56 rủi ro trong dựán, xác định các yếu tốkích hoạt rủi ro, xếp hạng trong ma trận mức độrủi ro, kiểm tra các giảthiết và ước lượng chất lượng dữliệu sửdụng. Đội dựán vẫn tiếp tục chuyển sang quá trình quản lýrủi ro. PM đã quên không làm gì? ",

    idx: 290,
  },
  {
    title:
      "Bạn là một PM cho một dựán xây dựng của một nhà máy sản xuất lớn mới và chưa từng làm trước đó. Chi phí dựán được ước tính là 30.000.000$ và sẽsửdụng 3 người bán. Một khi bắt đầu, dựán không thểxóa bỏ, và sẽcó một phí tổn lớn trong thiết bịvà nhà máy. Là PM của dựán này, điều quan trọng nhất phải thật cẩn thận là: ",

    idx: 291,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Xem xét lại tất cả đề nghịchi phí từ người bán. ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Kiểm tra ngân sách dự phòng.",
      },
      {
        title: "Hoàn thành tôn chỉ dự án",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: " Thực hiện xác định các rủi ro. ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: " Chấp nhận rủi ro",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: " Tiếp tục điều tra để làm giảm nhẹ rủi ro",
      },
      {
        isKey: false,
        title: "Tìm kiếm cách đểtránh rủi ro",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tìm kiếm cách để chuyển rủi ro (transfer the risk)",
      },
    ],
    idx: 292,
    title:
      "Trong khi lên kếhoạch quản lýrủi ro, đội của bạn đã đưa ra 434 rủi ro và 16 nguyên nhân chính của các rủi ro này. Dựán là dựán cuối cùng trong chuỗi các dự án mà đội sẽlàm việc cùng nhau. Nhà tài trợrất khuyến khích và một khối lượng lớn thời gian đã được đầu tư đểchắc chắn tôn chỉdựán đã hoàn thành và được ký bởi tất cảcác bên có liên quan chính. Trong giai đoạn lập kếhoạch dựán, đội không đưa ra một cách thức hiệu quả đểlàm giảm hoặc thoát rủi ro. Nó không phải là công việc đểcó thểthuê ngoài hay bịloại bỏ. Giải pháp tốt nhất là: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một PM đang định lượng rủi ro cho dựán của cô ấy. Cô ấy có nhiều chuyên môn bên ngoài, nhưng giá nhưcó thểsửdụng bên trong dựán. Điều này có thể được thực hiện ntn? ",
    answers: [
      {
        title: "Sử dụng phân tích Monte Carlo sử dụng Internet như một công cụ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Áp dụng phương pháp đường tới hạn",
        isKey: false,
      },
      {
        idx: 2,
        title: " Xác định các tùy chọn cho các hành động sửa lỗi khuyến nghị ",
        isKey: false,
      },
      {
        title: "Áp dụng kỹ thuật Delphi",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 293,
  },
  {
    idx: 294,
    answers: [
      {
        title: "Một bài báo từ tạp chí mạng PM",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tuyên bố phạm vi dự án từ giai đoạn lên kế hoạch dự án",
      },
      {
        title: "Kế hoạch nguồn lực từ giai đoạn lên kế hoạch dự án",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Một cuộc nói chuyện với 1 nhân viên từ1 dựán tương tự đã thất bại trong quá khứ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một PM nhiều kinh nghiệm vừa bát đầu làm việc trong một tổchức hợp nhất công nghệthông tin lớn. Quản lýcủa cô ấy cung cấp cho cô ta một bản nháp tôn chỉdựán và ngay lập tức yêu cầu cô ấy cung cấp phân tích vềrủi ro trong dựán. Điều nào dưới đây là tốt nhất có thể giúp đỡ PM? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nhân viên đội dự án",
      },
      {
        title: "Nhà tài trợ dự án",
        isKey: true,
        idx: 1,
      },
      {
        title:
          "Những cá nhân có trách nhiệm với các chính sách và mẫu biểu quản lý rủi ro",
        isKey: false,
        idx: 2,
      },
      {
        title: "Các bên có liên quan chính",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 295,
    title:
      "Bạn được trang bịnhưmột người quản lýcủa một dựán lớn, mới và phức tạp. do dựán này là then chốt trong kinh doanh và rất rõ ràng (visible), các nhà quản lý cấp cao nói với bạn phân tích rủi ro dựán và chuẩn bịchiến lược đáp ứng rủi ro càng sớm càng tốt. Tổchức có quy trình quản lýrủi ro mà rất ít khi được sửdụng, và có lịch sửnắm bắt rủi ro kém. Điểm mốc đầu tiên của dựán là trong vòng 2 tuần nữa. Trong khi chuẩn bịkếhoạch đối phó rủi ro, đầu vào từ đâu thông thường là ít quan trọng nhất trong sốcác đáp án sau:",
  },
  {
    answers: [
      {
        isKey: false,
        title: " Bảo hành mua bán",
        idx: 0,
      },
      {
        idx: 1,
        title: "Lên kế hoạch cho quỹ dự phònG",
        isKey: false,
      },
      {
        title: " Kiểm soát thời tiẾT và có kếhoạch đối phó với sựngẫu nhiên",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lên lịch cho việc triển khai ngoài mùa mưa bão",
      },
    ],
    idx: 296,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang trong quá trình thực hiện một dựán 2 năm đểtriển khai các văn phòng dọc theo đất nước. một cơn bão gây ra mất điện khi việc nâng cấp đã gần hoàn thành. Khi có điện trởlại, toàn bộ báo cáo dựán và dữliệu lịch sử đã mất mà không có cách nào lấy lại được. Điều gì nên làm để giảm nhẹ rủi ro này? ",
  },
  {
    title:
      "Một dựán phát triển hệthống đang gần tới ngày kết thúc, một rủi ro không xác định trước đây đã được khám phá ra. Điều này có khảnăng ảnh hưởng tới khả năng tổng thểcủa dựán đểgiao sản phẩm. điều nên làm tiếp theo là gì? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Báo động cho nhà tài trợdựán vềcác ảnh hưởng tiền năng tới chi phí, phạm vi, lịch trình",
      },
      {
        title: "Định tính rủi ro",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: " Làm giảm nhẹ rủi ro bằng cách xây dựng kếhoạch đối phó rủi ro",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Xây dựng việc khắc phục không nằm trong kếhoạch với rủi ro đang xảy ra (wordaround)",
      },
    ],
    idx: 297,
  },
  {
    idx: 298,
    title:
      "CPI=0.6, SPI=0.71. Dựán có 625 gói công việc và đang được hoàn thành trong giai đoạn hơn 4 năm. Nhân viên đội dựán rất thiếu kinh nghiệm và dựán nhận được ít hỗtrợcho các kếhoạch thích hợp. Điều nào dưới đây là tốt nhất đểthực hiện? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: " Cập nhật xác định rủi ro và phân tích",
        idx: 0,
        isKey: true,
      },
      {
        title: "Dành nhiều thời gian hơn để cải thiện ước tính chi phí.",
        idx: 1,
        isKey: false,
      },
      {
        title: "Loại bỏcàng nhiều gói công việc càng tốt",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: " Tổ chức lại ma trận gán trách nhiệm",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title:
          "Thêm khoản dựphòng vào dựán đểxem xét các rủi ro mới và thông báo với ban lãnh đạo",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Ghi lại các mục rủi ro và tính toán giá trịtiền tệdựkiến dựa trên xác suất và ảnh hưởng từ kết quả của việc xảy ra rủi ro. ",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Xác định các sự kiện rủi ro và các chi phí liên quan, sau đó thêm các chi phí này vào ngân sách dựán như một khoản dự phòng. ",
      },
      {
        idx: 3,
        title:
          "Thêm 10% chi phí của sự bất ngờvào ngân sách dựán và thông báo với khách hàng",
        isKey: false,
      },
    ],
    idx: 299,
    title:
      " Trong khi chuẩn bịkếhoạch đối phó rủi ro, bạn xác định thêm 1 vài rủi ro. Bạn nên làm gì? ",
  },
  {
    answers: [
      {
        title: " Kế hoạch quản lý rủi ro",
        isKey: true,
        idx: 0,
      },
      {
        title: "Kế hoạch định lượng rủi ro",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Kế hoạch đối phó rủi ro",
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát rủi ro",
      },
    ],
    title:
      " Bạn vừa được phân công làm PM cho một dựán truyền thông mới và đang bắt đầu vào giai đoạn thứ2 của dựán. Có khá nhiều rủi ro xuất hiện trong dựán, nhưng không có ai ước tính chúng để đánh giá khoảng kết quảcó thểxảy ra. Điều gì cần được hoàn thành?",

    idx: 300,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title:
          "Lấy thêm nhiều thông tin xem làm thếnào nhân viên đó xác định được rủi ro, do bạn đã thực hiện phân tích chi tiết và không xác định được rủi ro này",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Không quan tâm tới rủi ro, do các rủi ro đã được xác định trong giai đoạn lên kế hoạch dựán",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thông báo với khách hàng vềrủi ro này",
        idx: 2,
        isKey: false,
      },
      {
        title: "Phân tích rủi ro này",
        idx: 3,
        isKey: true,
      },
    ],

    idx: 301,
    title:
      "Trong giai đoạn thực thi dựán, một nhân viên xác định một rủi ro không có trong sổghi. Bạn nên làm gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong giai đoạn thực thi dựán, một vấn đềlớn xảy ra mà không có trong sổ ghi rủi ro. Bạn nên làm gì đầu tiên? ",
    idx: 302,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Tạo một bản đối phó với rủi ro không nằm trong kếhoạch (create a workaround)",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Ước tính lại quy trình xác định rủi ro",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tìm kiếm cho các hậu quảkhông mong đợi của vấn đềnày",
      },
      {
        idx: 3,
        title: "Nói với ban lãnh đạo",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Tính đến giá trịtiền tệ dự kiến của rủi ro trong ước tính chi phí mới",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Nói với khách hàng về ảnh hưởng của thay đổi",
        idx: 1,
      },
      {
        idx: 2,
        title: "Phân tích ảnh hưởng của thay đổi cùng với đội dự án",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: " Thay đổi kếhoạch quản lý rủi ro",
      },
    ],
    title:
      "Khách hàng yêu cầu thực hiện 1 thay đổi dựán mà sẽgia tăng rủi ro của dự án. Điều nào dưới đây bạn nên làm trước tất cảmọi người? ",
    idx: 303,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 304,

    title: " Điều nào dưới đây là tính chất quan trọng của kỹthuật Delphi?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Sự kết luận từ các bản ghi lịch sử từ các dự án đã thực hiện trước đó ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Ý kiến chuyên gia",
      },
      {
        title: "Quá trình phân tích theo cấp bậc",
        isKey: false,
        idx: 2,
      },
      {
        title: " Cách tiếp cận từ dưới lên. ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dựán có 1 vài vấn đề, nhưng vẫn trong khảnăng kiểm soát. Vào những tháng cuối của dựán, phần lớn các khoản dựphòng đã được sửdụng và phần lớn các ảnh hưởng tiêu cực của các sựkiện được dựbáo trước đều đã xảy ra. Có 4 hoạt động còn sót lại và 2 hoạt động trong số đó nằm trên đường tới hạn. Ban lãnh đạo đã thông báo với PM rằng công ty thích hoàn thành dựán sớm hơn 2 tuần theo lịch để nhận được thêm lợi nhuận. Đểphản hồi lại, PM gửi một yêu cầu đềxuất cho 1 vài công việc đội dựán chuẩn bịlàm, với hi vọng một công ty khác sẽhoàn thành công việc nhanh hơn. PM tốt nhất nên cốgắng đểlàm việc với",
    idx: 305,
    answers: [
      {
        isKey: false,
        title: "Khoản dự phòng",
        idx: 0,
      },
      {
        title: " Các cơ hội. ",
        isKey: true,
        idx: 1,
      },
      {
        title: "Xác minh phạm vi",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Các nguy cơ. ",
        idx: 3,
      },
    ],
  },
  {
    title: "Một khi đã ký, hợp đồng là ràng buộc pháp lý trừ phi",
    idx: 306,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Một bên không thể thực hiện",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Một bên không đủ khả năng tài chính cho phần công việc của họ ",
      },
      {
        title: "Vi phạm luật pháp",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title:
          "Hợp đồng được tuyên bốlà vô hiệu lực thông qua luật sư của 1 trong 2 bên",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Với một hợp đồng rõ ràng, một người bán hoàn thành công việc được chỉrõ, nhưng người mua không hài lòng với kết quả. Hợp động sẽ được xem xét để:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 307,
    answers: [
      {
        title: "Vô hiệu hóa (null and void)",
        idx: 0,
        isKey: false,
      },
      {
        title: "Không hoàn thành. ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Hoàn thành",
        idx: 2,
        isKey: true,
      },
      {
        title: "Từ bỏ ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Tài liệu thầu được thiết kếtốt có thểlàm đơn giản quá việc so sánh của việc phản ứng (response)",
      },
      {
        idx: 1,
        title:
          "Tài liệu thầu phải nghiêm ngặt và không có tính mềm dẻo đểcho phép các ý kiến, đềnghịcủa người mua được cân nhắc",
        isKey: false,
      },
      {
        title: "Nói chung, tài liệu thầu không nên bao gồm tiêu chuẩn ước tính",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Tài liệu thầu được thiết kế tốt không bao gồm hợp đồng tuyên bốcông việc",
      },
    ],
    idx: 308,

    title: "Tuyên bố nào liên quan tới tài liệu thầu là đúng?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giảm giá thành từ người mua",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giúp người bán kiểm soát chi phí ",
      },
      {
        isKey: true,
        title: "Đồng bộ hóa các mục tiêu",
        idx: 2,
      },
      {
        title:
          "Giảm rủi ro từ người bán bằng cách chuyển rủi ro sang phía người mua",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một PM cho người bán được ban lãnh đạo của cô ấy nói rằng dựán nên làm điều gì có thể đểthưởng tiền ưu đãi. Mục tiêu chính của các điều khoản ưu đãi trong hợp đồng là ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 309,
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Một hợp đồng giá cố định (fixed) sẽlàm giảm sựcần thiết phải kiểm soát thay đổi",
        isKey: false,
      },
      {
        idx: 1,
        title: "Các thay đổi hiếm khi cung cấp lợi ích thực cho dựán",
        isKey: false,
      },
      {
        title: " Các hợp đồng nên bao gồm các thủ tục phù hợp với các thay đổi",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Các thông số càng chi tiết sẽloại trừ các nguyên nhân thay đổi",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 310,

    title: "Tuyên bố nào dưới đây về kiểm soát thay đổi là đúng? ",
  },
  {
    idx: 311,
    title:
      " Một thủtục kiểm tra của hợp đồng có thểhoàn trảchi phí (cost reimbursable CR) xác định báo giá cao đã được thực hiện. Nếu hợp đồng không chỉrõ các hành động hiệu chỉnh, người mua nên: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: " Tiếp tục thực hiện trả tiền cho dự án",
      },
      {
        title: "Trả 1 nửa cho đến khi vấn đề được khắc phục",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Vô hiệu hóa hợp đồng và bắt đầu các hành động pháp lý đểthu hồi khoản thanh toán vượt quá ",
      },
      {
        isKey: false,
        title: "Thay đổi hợp đồng đểyêu cầu nhiều kiểm tra thường xuyên hơn",
        idx: 3,
      },
    ],
  },
  {
    title: "Mục tiêu chính của thương lượng đàm phán hợp đồng là: ",
    answers: [
      {
        idx: 0,
        title: "Có thêm nhiều hơn từ bên kia",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: " Bảo vệmối quan hệ ",
      },
      {
        title:
          "Có được sự quay vòng tiền tệ cao nhất (highest monetary return). ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Xác định mục tiêu và gắn bó với mục tiêu đó ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 312,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một người bán đang thực hiện hợp đồng hoàn trảchi phí CR khi người mua quyết định sẽmởrộng phạm vi dịch vụvà thay đổi thành hợp đồng giá cố định (fixed price FP). Tất cảcác điều dưới đây là lựa chọn của người bán, ngoại trừ ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Hoàn thành công việc lúc đầu trong hoàn trảchi phí cơbản và sau đó thương lượng 1 giá sẵn đối với các công việc thêm vào",
      },
      {
        idx: 1,
        title: "Hoàn thành công việc lúc đầu và từchối các công việc thêm vào",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Thương lượng một hợp đồng giá cố định bao gồm tất cảcác công việc",
        idx: 2,
      },
      {
        idx: 3,
        title: "Bắt đầu một hợp đồng mới",
        isKey: true,
      },
    ],

    idx: 313,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Kếhoạch kýhợp đồng",
      },
      {
        isKey: false,
        title: "Quản lýhợp đồng",
        idx: 1,
      },
      {
        title: "Yêu cầu trảlời từngười bán (request seller responses)",
        idx: 2,
        isKey: true,
      },
      {
        title: "Kếhoạch mua bán và những thứthu lại được",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 314,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Hội nghịcác nhà thầu là một phần của: ",
  },
  {
    idx: 315,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hợp đồng tuyên bố công việc. ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Sự chấp nhận",
      },
      {
        isKey: true,
        idx: 2,
        title: "Địa chỉ của người bán",
      },
      {
        isKey: false,
        idx: 3,
        title: "Chữ ký của người mua. ",
      },
    ],
    title: " Tất cảnhững điều dưới đây phải có đểcó một hợp đồng, ngoại trừ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "PM chỉcó vai trò không quan trọng",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "PM nên là người thương lượng đàm phán. ",
      },
      {
        isKey: true,
        idx: 2,
        title: " PM nên cung cấp sựhiểu biết rõ vềrủi ro của dự án. ",
      },
      {
        isKey: false,
        title:
          "PM nên nói với người quản lýhợp đồng làm thếnào đểcó thể đảm trách được quá trình ký kết hợp đồng.",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Điều nào dưới đây mô tả đúng nhất vai trò của PM trong quá trình kýkết hợp đồng?",
    idx: 316,
  },
  {
    title: "Đâu là một trong những mục tiêu chính trong quá trình thương lượng",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: ". Có được mức giá hợp lý(a fair and reasonable price)). ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Thương lượng một mức giá theo dựtoán của người bán",
        isKey: false,
      },
      {
        title: "Chắc chắn rằng tất cảcác rủi ro của dựán được mô tả kỹ lưỡng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Chắc chắn rằng đã có một kếhoạch quản lýtruyền thông hiệu quả ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 317,
  },
  {
    title:
      "Hành động nào dưới đây xảy ra trong khi lên kế hoạch cho việc thu mua? ",

    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Quyết định làm hay bán (make-or-buy)",
      },
      {
        isKey: false,
        title: "Trảlời câu hỏi của người bán vềcác tài liệu thầu",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tạo ra các điều kiện và điều khoản trong hợp đồng",
      },
      {
        title: "Tạo ra các yêu cầu vềcác tài liệu đềnghịhoặc tài liệu thầu",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 318,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Điều nào dưới đây là tốt nhất cho PM thực hiện trong phần yêu cầu hồi đáp từ người bán của hoạt động quản lýhợp đồng",

    answers: [
      {
        title: "Ước tính các rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        title: "Xác nhận rằng sự quy thuận (submittal) đã được gửi.",
        idx: 1,
        isKey: false,
      },
      {
        title: "Xác nhận rằng các thay đổi với hợp đồng đã được thực hiện",
        isKey: false,
        idx: 2,
      },
      {
        title: "Trảlời câu hỏi của khách hàng vềtài liệu thầu",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 319,
  },
  {
    answers: [
      {
        title: "Đội dựán đã chắc chắn người bán không cắt giảm phạm vi",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tất cả các chi phí được lập hóa đơn sẽ được kiểm tra",
      },
      {
        isKey: false,
        title: "Chỉcó thểtăng tối đa 10% nếu có chi phí bất ngờ vượt quá ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí chỉnhận được từngười bán khi dựán hoàn thành",
      },
    ],
    idx: 320,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Nhà tài trợ đang lo lắng vềngười bán phát sinh thêm lợi nhuận trong hợp đồng chi phí cộng phí cố định (cost plus fixed fee CPFF). Mỗi tháng người bán yêu cầu PM đệtrình các tính toán CPI và một phân tích của chi phí đểhoàn thành. PM giải thích với nhà tài trợ rằng các khoản lợi nhuận phát sinh không nên phải bận tâm trong dựán này do: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: ". Không xác định",
      },
      {
        isKey: false,
        title:
          "Là 1 phần trong thương lượng liên quan trong việc chi trảmọi hóa đơn",
        idx: 1,
      },
      {
        title: "Áp dụng như một mục hàng trong mọi hóa đơn",
        isKey: false,
        idx: 2,
      },
      {
        title: "Đc xác định với các bên khác vào cuối dự án",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 321,
    title: " Trong một hợp đồng giá cố định, lệphí hay lợi nhuận là",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 322,
    title:
      "Một dựán thực hiện theo hợp đồng có thểhoàn lại chi phí cuối cùng đã sắp kết thúc. Người mua phải nhớphải làm gì",
    answers: [
      {
        isKey: false,
        title: " Giảm mức độrủi ro của dự án",
        idx: 0,
      },
      {
        title: "Kiểm tra sự đồng thuận với giá của người bán",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: " Ước tính lệphí anh ta phải trả ",
      },
      {
        isKey: false,
        title: " Chắc chắn rằng người bán không thêm nguồn lực nào",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Giám đốc dự án đang xây dựng kế hoạch cho dự án. Giám đốc dự án đã xác định các nhiệm vụ và chỉ định nguồn lực thích hợp. Công cụ được sử dụng thông báo rằng một vài nguồn lực được phân bổ xong. Bước tiếp theo của giám đốc dự án sẽ là gì? ",
    answers: [
      {
        idx: 0,
        title: "Di chuyển các nguồn lực. ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Yêu cầu thêm nguồn lực. ",
      },
      {
        isKey: true,
        title: "Điều chỉnh nguồn lực",
        idx: 2,
      },
      {
        title: "Dự thảo ngân sách ngoài giờ ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 323,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Giám đốc dự án đã khám phá vấn đề với môđun thống kê của dự án. Các số đo đã được ghi rõ cho các đơn vị của của Mỹ nhưng các nhà lập trình nước ngoài sử dụng các đơn vị quốc tế. Vấn đề này có thể tránh được ở chỗ nào trong dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 324,
    answers: [
      {
        title: "Lập kế hoạch dự án",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kiểm thử dự án. ",
      },
      {
        idx: 2,
        title: "Kiểm soát dự án. ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Quay vòng dự án",
      },
    ],
  },
  {
    title:
      "Giám đốc dự án được chỉ định cho một dự án lớn đã và đang được thực hiện một số lần. Đội dự án vừa hoàn tất giai đoạn thiết kế của dự án và đang tiến hành trong giai đoạn triển khai. Tại điểm này, thay đổi nào có thể xẩy ra mà không phải gánh chịu rủi ro của việc tiến hành lại toàn bộ giai đoạn thiết kế? ",
    answers: [
      {
        title: "Phạm vi",
        isKey: false,
        idx: 0,
      },
      {
        title: "Nhiệm vụ ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thiết kế chi tiết",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Ngày tháng chuyển giao",
        idx: 3,
      },
    ],
    idx: 325,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Thông báo với khách hàng rằng thay đổi phạm vi là không được phép. ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Trình yêu cầu thay đổi lên Ban quản lý thay đổi. ",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Triển khai các thay đổi theo yêu cầu ngay lập tức. ",
      },
      {
        idx: 3,
        title: "Thiết kế lại toàn bộ dự án từ vạch xuất phát. ",
        isKey: false,
      },
    ],
    idx: 326,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Giám đốc dự án được khách hàng đề nghị thực hiện những thay đổi quan trọng cho dự án. Những thay đổi này không được chú tâm trong Tài liệu thiết kế hay Phạm vi dự án. Cách tốt nhất để giám đốc dự án đáp lại yêu cầu là gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 327,
    answers: [
      {
        title: ". Chi phí rủi ro nhỏhơn",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chi phí rủi ro cao hơn.",
      },
      {
        idx: 2,
        isKey: false,
        title: "Chỉcó ít rủi ro. ",
      },
      {
        isKey: false,
        title: "Rủi ro được chia đều cho tất cảcác bên. ",
        idx: 3,
      },
    ],
    title:
      "Nhà tài trợvà PM đang thảo luận loại hợp đồng nào mà PM lên kếhoạch sử dụng trong dựán. Người bán chỉra rằng tổchức thực hiện đã dành ra nhiều tiền để thuê đội ngũthiết kế để đưa ra bản thiết kế. PM lo lắng rằng rủi ro từngười mua sẽ ít nhất có thể. Một lợi thếtừhợp đồng giá cô định cho người bán là ",
  },
  {
    title:
      "Nhưmột phần của hệthống quản lýsổsách, bạn đang cốgắng chắc chắn rằng toàn bộhồsơtừhợp đồng đã được ghi lại và ghi vào bản mục lục. Điều nào dưới đây bạn không nên lo lắng? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 328,
    answers: [
      {
        title: "Sự đềnghị(proposal)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: " Tuyên bốcông việc",
      },
      {
        title: " Các điều khoản và điều kiện",
        idx: 2,
        isKey: false,
      },
      {
        title: " Quá trình thương lượng",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Người xấu, người tốt (good guy, bad guy)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Trì hoãn",
      },
      {
        isKey: true,
        idx: 2,
        title: "Thời hạn cuối cùng (deadline)",
      },
      {
        idx: 3,
        isKey: false,
        title: " Các yêu cầu quá khích (extreme demands).",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang ởtrong một thương lượng phức tạp khi bên kia nói:”chúng tôi cần hoàn thành trong 1h do tôi phải đón máy bay”. Người này đang sửdụng chiến lược thương lượng nào?",
    idx: 329,
  },
  {
    idx: 330,
    title: " Điều nào dưới đây là một lợi thếcủa hợp đồng tập trung?",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cho phép việc truy cập dễdàng hơn đểkýhợp đồng chuyên môn",
      },
      {
        title: "Gia tăng chuyên môn của cônt ty trong việc kýhợp đồng",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: " Trung thành hơn với dựán.",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          " Cho phép 1 người có hợp đồng có thểlàm việc trong một dựán riêng (allow a contracts person to work on a single project)",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Hợp đồng giá cố định",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hợp đồng chi phí cộng phí cố định",
      },
      {
        title: " Hợp đồng thời gian và nguyên vật liệu",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: " Hợp đồng đơn đặt hàng (purchase order",
        idx: 3,
      },
    ],
    idx: 331,
    title:
      " Với loại hợp đồng nào dưới đây, người bán có liên quan nhiều nhất tới phạm vi dựán? ",
  },
  {
    title:
      "Công ty của bạn có một việc khẩn cấp và cần các công việc hợp đồng hoàn thành càng sớm càng tốt. Với tình huống này, điều nào dưới đây là có ích nhất để thêm vào hợp đồng? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: " Một tuyên bốhợp đồng làm việc",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: " Các yêu cầu mà trong đó các hợp đồng con có thểsửdụng",
        isKey: false,
      },
      {
        idx: 2,
        title: " Các ưu đãi",
        isKey: true,
      },
      {
        idx: 3,
        title: " Một điều khoản không thểbào chữa (a force majeure clause)",
        isKey: false,
      },
    ],

    idx: 332,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Kếhoạch thu mua",
      },
      {
        isKey: false,
        idx: 1,
        title: " Kếhoạch kýhợp đồng",
      },
      {
        isKey: false,
        title: " Yêu cầu trảlời người bán",
        idx: 2,
      },
      {
        title: " Lựa chọn người bán.",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Trong phần nào của quá trình kýhợp đồng mà việc thương lượng hợp đồng diễn ra? ",

    idx: 333,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Đội dựán đang cãi nhau vềngười bán tiềm năng mà chấp nhận các đềnghị. Một nhân viên dự án tranh luận vềmột người bán tin cậy trong khi 1 nhân viên khác muốn dựán được trao cho một người bán khác. Đội dựán đang ởtrong phần nào của quá trình quản lýthu mua? ",
    idx: 334,
    answers: [
      {
        title: "Kếhoạch thu mua",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Kếhoạch kýhợp đồng",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: " Yêu cầu trảlời người bán",
      },
      {
        title: "Lựa chọn người bán. ",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: "Quản trịhợp đồng",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: " Kếhoạch thu mua",
        isKey: true,
      },
      {
        isKey: false,
        title: " Yêu cầu trảlời người bán",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: " Lựa chọn người bán",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 335,
    title:
      " Đội dựán dường nhưthích tranh luận: họ đã tranh luận vềmọi thứ. Thật may là PM đã thiết lập 1 hệthống kiểm tra và các buổi họp xây dựng đội mà sẽgiúp đỡ và khuyến khích đội dựán hợp tác nhiều hơn với nhau. Điều mới nhất họtranh luận là họnên tựhoàn thành gói công việc của mình hay thuê ngoài. Họ đang ở trong quá trình nào của việc quản lýthu mua?",
  },
  {
    idx: 336,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kếhoạch thu mua",
      },
      {
        title: "Kếhoạch kýhợp đồng",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: " Yêu cầu trảlời người bán",
      },
      {
        idx: 3,
        title: "Lựa chọn người bán. ",
        isKey: false,
      },
    ],
    title:
      " Một PM đang tạo ra các yêu cầu đềnghị(request for proposal RFP). Anh ấy đang ởtrong quá trình nào của việc quản lýthu mua? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn là 1 PM, người quản lý chương trình đến đểgiúp đỡvềgiá thầu cho dự án mới nhất của cô ấy. bạn muốn bảo vệcông ty của bạn khỏi các rủi ro tài chính. Bạn đã có định nghĩa phạm vi giới hạn. Loại hình hợp đồng nào là tốt nhất đểlựa chọn? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Hợp đồng giá cố định",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Hợp đồng chi phí cộng phần trăm chi phí (cost plus percent of cost CPPC)",
        isKey: false,
        idx: 1,
      },
      {
        title: " Hợp đồng thời gian và nguyên vật liệu",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: " Hợp đồng chi phí cộng phí cố định CPFF",
      },
    ],
    idx: 337,
  },
  {
    answers: [
      {
        isKey: false,
        title:
          " Không đúng, do cả2 bên phải tuân theo với những gì họ đã đồng ý",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: " Đúng, do đó là một lời đềnghị",
      },
      {
        isKey: true,
        idx: 2,
        title:
          " Nhìn chung là đúng, do cả2 bên chỉyêu cầu thực hiện những gì ghi trong hợp đồng. ",
      },
      {
        isKey: false,
        idx: 3,
        title: " Nhìn chung là sai, do tất cảhợp đồng phải được tôn trọng",
      },
    ],
    idx: 338,
    title:
      "Thương lượng giữa 2 bên đang trởnên phức tạp, nên bên A làm một vài ghi chép mà cả2 bên đều kývào. Tuy nhiên, khi công việc hoàn thành, bên B khẳng định rằng họkhông yêu cầu cung cấp một hạng mục mà cả2 bên đều đồng { trong quá trình thương lượng, do nó không có trong hợp đồng tiếp theo. Trong trường hợp này, bên B:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Dựán của bạn vừa được xúc tiến và bạn đang tìm kiếm một nhà thầy phụ để hoàn thiện mạng lưới nhanh chóng. Không có thời gian để đưa ra yêu cầu cho các đềnghị(RFP) nên bạn chọn sửdụng một công ty bạn đã sửdụng nhiều lần đểphát triển phần mềm. Mối bận tâm chính trong tình huống này là ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 339,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sựthông đồng giữa các nhà thầu phụ",
      },
      {
        isKey: true,
        title: " Trình độchuyên môn của các nhà thầu",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: " Tiêu chuẩn đánh giá của các nhà thầu",
      },
      {
        isKey: false,
        title: " Tổchức hội nghịnhà thầu.",
        idx: 3,
      },
    ],
  },
  {
    idx: 340,

    title:
      "PM và nhà tài trợdựán đang thảo luận vềchi phí dựán và khi nào tốt đểcông ty của họtham gia vào dựán hoặc thuê một công ty khác làm việc này. Nếu họhỏi ýkiến của bạn, bạn nên nói rằng công ty nên tựlàm dựán này sẽtốt hơn nếu như:",
    answers: [
      {
        idx: 0,
        title: "Có quá nhiều dữliệu độc quyền",
        isKey: true,
      },
      {
        title: "Công ty có chuyên môn nhưng k sẵn có nhân lực",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: " Công ty không cần kiểm soát công việc",
      },
      {
        isKey: false,
        idx: 3,
        title: " Các nguồn lực của công ty là giới hạn",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 341,
    title:
      "Sau rất nhiều hứng thú và các công việc nặng nhọc, hợp đồng tuyên bốcông việc cho dựán đã hoàn thành. Ngay cảkhi có được sự đồng ýrằng hợp đồng tuyên bố công việc đã hoàn thành, PM vẫn lo lắng khi nào xác định thật sựtất cảcác yêu cầu của người mua. PM tham dựhội nghịcác nhà thầu. Anh ta hỏi bạn lời khuyên nên làm gì tiếp trong cuộc họp hội nghị. Lời khuyên nào là tốt nhất bạn có thểgiúp đỡ anh ta?:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title:
          "Bạn không cần phải tham gia vào hội nghị, người quản lýhội nghịsẽlàm việc đó ",
        idx: 0,
      },
      {
        title: "Chắc chắn rằng bạn không thương lượng phạm vi dựán",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title:
          " Chắc chắn bạn đã cho toàn bộngười bán đủthời gian đểtrảlời câu hỏi. họ không muốn trảlời câu hỏi khi đối thủcạnh tranh của họcũng có mặt trong hội nghị. ",
      },
      {
        title:
          " Đểnhà tài trợdựán điều khiển hội nghịvà bạn sẽ đóng vai trò “người tốt” trong hội nghị. ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 342,
    title:
      "Một người bán được thưởng một hợp đồng đểxây dựng một đường ống. các điều khoản và điều kiện trong hợp đồng yêu cầu kếhoạch công việc được đưa ra đểngười mua phê duyệt trước khi bắt đầu công việc, nhưng người bán không cung cấp được kếhoạch công việc. điều nào dưới đây là tốt nhất cho PM của người bán để thực hiện",

    answers: [
      {
        title: " Đưa ra một văn bản có mục đích (file a letter of intent)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          " Xác dựng kếhoạch công việc và đưa ra cho người bán đểlàm công việc được trôi chảy (move thing along)",
        idx: 1,
      },
      {
        title: " Đưa ra một văn bản mặc định (default letter)",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Yêu cầu người bán ngừng làm việc cho tới khi kếhoạch công việc được chuẩn bị.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Kết thúc hợp đồng khác với kết thúc hoạt động quản trị ởchỗ, kết thúc hợp đồng",

    idx: 343,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Xảy ra trước khi kết thúc các hoạt động quản trị ",
      },
      {
        idx: 1,
        isKey: false,
        title: " Là điều duy nhất liên quan tới khách hàng",
      },
      {
        title: " Bao gồm cảthu hồi tài sản (return of property)",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: " Có thểhoàn thành nhiều hơn 1 lần trong mỗi hợp đồng",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn vừa bắt đầu quản trịmột hợp đồng khi ban lãnh đạo quyết định chấm dứt hợp đồng. bạn nên làm gì trước tiên?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quay lại yêu cầu sựtrảlời của người bán",
      },
      {
        isKey: false,
        title: "Quay lại đểlên kếhoạch hợp đồng. ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: " Hoàn thành việc quản lýhợp đồng (contract admin). ",
      },
      {
        isKey: true,
        title: " Đến giai đoạn kết thúc hợp đồng.",
        idx: 3,
      },
    ],
    idx: 344,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 345,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Các tài liệu hợp đồng",
      },
      {
        isKey: false,
        idx: 1,
        title: "Kiểm tra hợp đồng",
      },
      {
        isKey: true,
        idx: 2,
        title: "Các tiêu chuẩn đánh giá ",
      },
      {
        isKey: false,
        title: "Kế hoạch quản lý hợp đồng",
        idx: 3,
      },
    ],
    title:
      "Đội dự án đang tranh luận về người bán sắp tới, người đã đệ trình các đề nghị (submit proposals). Một nhân viên tranh luận về một người bán tin cậy, trong khi một nhân viên khác muốn một nguòi bán khác sẽ có dự án. Điều tốt nhất mà PM nên nhắc nhở đội của mình tập trung vào trong quá trình tìm ra lựa chọn là: ",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tiêu chuẩn thực hiện quản lý dự án của công ty",
        idx: 0,
      },
      {
        title: "Sự trung thành với dự án (loyalty)",
        idx: 1,
        isKey: false,
      },
      {
        title: "Kinh nghiệm",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Quyền được truy cập cho những người khác với những chuyên môn tương tự",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Tổ chức đang cố gắng quyết định có nên chia phòng ban quản lý hợp đồng và phân công trách nhiệm ký kết hợp đồng cho một phòng ban có trách nhiệm trực tiếp với dự án hay không. Một chuyên gia về hợp đồng không thực sự muốn có sự chia tách này do họ sẽ mất……………………… trong môi trường phân tán việc ký kết hợp đồng (or phi tập trung- decentralized)",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 346,
  },
  {
    title:
      "Trong giai đoạn thực thi dự án, các nhân viên đội dự án bàn giao sản phẩm của dự án cho người bán. Tuy nhiên, người bán từ chối những sản phẩm này, tuyên bố rằng nó không đáp ứng yêu cầu ở trang 300 của tài liệu đặc tả chi tiết kỹ thuật. bạn đã xem lại tài liệu và cũng đồng {. Điều tốt nhất nên làm là gì? ",
    idx: 347,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giải thích rằng hợp đồng đã sai và nên được thay đổi",
      },
      {
        idx: 1,
        title: "Đưa ra yêu cầu thay đổi",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Xem lại các yêu vầu và gặp nhân viên chịu trách nhiệm với việc này để xem lại từ điển WBS",
        idx: 2,
      },
      {
        idx: 3,
        title: "Họp đội dự án để xem xét lại yêu cầu ở trang 300",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Loại hợp đồng nào bạn KHÔNG muốn sử dụng nếu bạn không đủ nhân lực để kiểm tra các hóa đơn? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 348,

    answers: [
      {
        idx: 0,
        title: "Hợp đồng chi phí cộng phí cố định (CPFF)",
        isKey: true,
      },
      {
        title: "Hợp đồng thời gian và nguyên vật liệu (TM)",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Hợp đồng giá cố định (FP)",
      },
      {
        idx: 3,
        title:
          "Hợp đồng khuyến mại giá cố định (FPIF-fixed price incentive fee)",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Một PM mới đang bắt đầu tạo ra bản hợp đồng tuyên bố công việc. Một bên có liên quan muốn thêm 1 vài hạng mục vào bản hợp đồng tuyên bố công việc. Một bên có liên quan khác chỉ muốn mô tả các yêu cầu chức năng. dự án rất quan trọng với công ty của PM, nhưng một người bán sẽ làm việc này. Bạn sẽ khuyên PM này điều gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 349,
    answers: [
      {
        isKey: false,
        title:
          "Bản hợp đồng tuyên bố công việc nên chung chung (general) để cho phép người bán có quyết định của riêng mình",
        idx: 0,
      },
      {
        title:
          "Bản hợp đồng tuyên bố công việc nên chung chung để cho phép các hiệu chỉnh sau này",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Bản hợp đồng tuyên bố công việc nên chi tiết để cho phép các hiệu chỉnh sau này",
      },
      {
        title:
          "Bản hợp đồng tuyên bố công việc nên càng chi tiết càng tốt cho loại dự án",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    idx: 350,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một khách hàng đưa cho bạn bản hợp đồng tuyên bố công việc cho một dự án 8 tháng khá phức tạp và có 1 vài điểm chưa biết. Khách hàng yêu cầu bạn chỉ làm việc (just “get it done”) và chỉ muốn gặp bạn vào cuối tháng thứ 8 khi bạn bàn giao dự án hoàn thiện. trong tình huống này, điều tốt nhất nên làm là: ",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Hoàn thành dự án như được yêu cầu, nhưng thỉnh thoảng xác minh phạm vi với khách hàng trong suốt dự án",
      },
      {
        title:
          "Hoàn thành dự án chỉ trong 8 tháng mà không hề liên lạc với khách hàng trong khoảng thời gian này",
        idx: 1,
        isKey: false,
      },
      {
        title: "Hỏi ban lãnh đạo để thỉnh thoảng xác nhận với khách hàng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Hoàn thành dự án, nhưng ghi lại rằng khách hàng không muốn liên lạc",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Xem xét lại từ điển WBS thật kỹ lưỡng, tìm kiếm các mô tả chưa hoàn tất",
      },
      {
        idx: 1,
        title:
          "Xem xét lại tôn chỉ dự án thật kỹ lưỡng, kiểm tra các lỗ hổng nghiệp vụ ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Làm thêm một công việc kỹ lưỡng về lên kế hoạch hợp đồng",
      },
      {
        title: "Chú { thêm vào ban lãnh đạo các bên có liên quan",
        idx: 3,
        isKey: true,
      },
    ],

    idx: 351,
    title:
      "Gần cuối dự án cuối cùng của bạn, một nhóm các bên có liên quan muốn thêm các yêu cầu vào khi họ biết rằng họ sẽ bị ảnh hưởng từ dự án của bạn. điều này sẽ là một rắc rối do bạn không bao gồm thời gian và chi phí trong kế hoạch quản lý dự án cho những yêu cầu kiểu này. Điều tốt nhất bạn nên làm đề ngăn chặn những vấn đề này trong các dự án sắp tới là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án phát triển phần mềm không phát triển tốt. có hơn 30 bên có liên quan, và không ai đồng ý với mục tiêu dự án. Một bên có liên quan tin rằng dự án có thể có được 30% cải thiện trong khi một bên khác tin rằng có thể lên tới 50%. PM thì là 10% cải thiện là thực tế hơn. Cách giải quyết tốt nhất là: ",
    answers: [
      {
        title:
          "Tiếp tục phát triển dự án và tìm kiếm thêm thông tin sau đó để giải quyết vấn đề ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lấy số liệu trung bình và sử dụng làm mục tiêu",
      },
      {
        title: "Thực hiện một phân tích khả thi",
        idx: 2,
        isKey: true,
      },
      {
        title: "Hỏi nhà tài trợ để có quyết định cuối cùng",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 352,
  },
  {
    title:
      "Một đội dự án đã hoàn thành, và khách hàng đã chấp nhận, phạm vi dự án đã hoàn thành. Tuy nhiên, các bài học rút ra do phòng ban quản lý dự án yêu cầu vẫn chưa dc hoàn thành. Trạng thái của dự án là ntn? ",
    idx: 353,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dự án chưa hoàn thành do dự án cần phải lên kế hoạch lại",
      },
      {
        title:
          "Dự án chưa hoàn thành cho tới khi toàn bộ dự án và sản phẩm bàn giao là hoàn thành và được chấp nhận",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Dự án là hoàn thành do khách hàng đã chấp nhận sản phẩm bàn giao",
      },
      {
        isKey: false,
        title:
          "Dự án hoàn thành do dự án đã đến ngày kết thúc (reach the due date)",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        title: "Liên lạc với người quản lý của bạn",
        idx: 0,
      },
      {
        title:
          "Đặt khoản chi đó vào một tài khoản của bên thứ 3 (escrow account) để làm bằng chứng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Che giấu khoản chi này trong phần tập trung chi phí lớn nhất sẵn có (the largest cost center available)",
        isKey: false,
      },
      {
        title: "Từ chối khoản chi này",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 354,
    title:
      "Bạn đang ở giai đoạn giữa dự án của một sản phẩm mới phát triển cho 1công ty công khai giao dịch, bạn biết được người PM trước đã chi trả 3000000$ mà không được phê chuẩn theo chính sách công ty. Thật may mắn, CPI=1.2. bạn nên làm gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong cuộc họp với một vài bên có liên quan, PM được yêu cầu thêm công việc vào phạm vi dự án. PM đã sử dụng thông tin phù hợp với dự án trước khi tôn chỉ dự án được ký và nhớ rằng nhà tài trợ đã từ chối rõ ràng các khoản vốn cho phạm vi được đề cập bởi các bên có liên quan. Điều tốt nhất mà PM nên làm là: ",
    answers: [
      {
        isKey: false,
        title: "Cho nhà tài trợ biết các yêu cầu của các bên có liên quan",
        idx: 0,
      },
      {
        title: "Đánh giá ảnh hướng của các phạm vi thêm vào",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Nói với các bên có liên quan rằng không thể thêm phạm vi",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thêm công việc nếu còn thời gian trong lịch trình dự án",
      },
    ],

    idx: 355,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Từ chối đề cập vấn đề này với nhân viên đó nhưng vẫn tiếp tục theo dõi các hành động của cô ta. ",
      },
      {
        idx: 1,
        title: "Thông báo với thủ trưởng của bạn về vấn đề này",
        isKey: false,
      },
      {
        title: "Nói chuyện về việc này với thủ trưởng của cô ta",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Nói chuyện về việc này với cô ấy",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Khi kiểm tra lịch của một nhân viên để lên lịch họp, bạn nhìn thấy cô ấy đã đặt lịch gặp với 1 bên có liên quan chính nhưng bạn đã không được thông báo. Cách thăm dò tốt nhất là: ",
    idx: 356,
  },
  {
    title:
      "PM đang có một thời gian khó khăn khi giữ cho dự án phát triển đúng lịch trình. Dự án yêu cầu 220 người để hoàn thành. Tất cả các vấn đề của dự án đã được giải quyết và PM hài lòng, SPI=0.67, CPI=1.26, có 23 hoạt động trong đường tới hạn và độ dài PERT của dự án là 26. Trong điều kiện này, báo cáo trạng thái hàng tháng nên báo cáo rằng: ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dự án vẫn hoạt động tốt",
      },
      {
        idx: 1,
        isKey: false,
        title: "Dự án sẽ bị chậm tiến độ ",
      },
      {
        isKey: false,
        title: "Chi phí dự án thấp hơn ngân sách",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các vấn đề và các tùy chọn",
      },
    ],
    idx: 357,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: true,
        title:
          "Hủy cuôc họp và lên lịch họp lại sau khi báo cáo đã được sửa chữa",
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Tới buổi họp và nói với mọi người tham gia là có lỗi trong báo cáo",
        isKey: false,
      },
      {
        title:
          "Bắt buộc nhân viên phải thuyết trình và những người tham gia khác im lặng tìm lỗi",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Hủy cuộc họp và tự viết lại báo cáo",
      },
    ],
    title:
      "Nhân viên của bạn đã chậm 3 ngày so với lịch báo cáo. 5 phút trước khi cuộc họp mà chủ đề của báo cáo sẽ được thảo luận thì cô ấy mới đưa cho bạn báo cáo. Bạn nhận thấy có 1 vài lỗi nghiêm trọng trong đó, bạn nên làm gì? ",
    idx: 358,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một người quản lý có trách nhiệm cho 1 dự án có được sự hỗ trợ từ người lãnh đạo cấp cao. Từ khi bắt đầu, bạn đã không đồng ý với ng quản lý này về việc dự án nên tiến hàng ntn và các sản phẩm bàn giao là gì. Bạn và cô ấy đã bất đồng quan điểm rất nhiều vấn đề trong quá khứ. Phòng ban của bạn được giao nhiệm vụ cung cấp 1 vài gói công việc quan trọng do dự án. Bạn nên làm gì? ",

    answers: [
      {
        isKey: true,
        title: "Cung cấp cho cô ta những gì cô ấy cần",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Thông báo với quản lý của bạn về mối lo âu về sự hỗ trợ của cô ấy",
      },
      {
        idx: 2,
        title:
          "Nói chuyện với cô ta vào lúc bắt đầu dự án và cố gắng mô tả tại sao bạn phản đối và tìm ra 1 cách để giải quyết vấn đề ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Hỏi để được thoát ra khỏi dự án",
        idx: 3,
      },
    ],
    idx: 359,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 360,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Không trả do đó là tiền hối lộ ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Loại trừ công việc",
      },
      {
        title: "Trả khoản phí ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Không trả phí nếu đấy không phải là 1 phần của ước lượng dự án",
      },
    ],
    title:
      "Một dự án lớn và phức tạp về xây dựng trong một công ty nc ngoài yêu cầu sự kết hợp để di chuyển các thiết bị yêu cầu qua 1 con phố đông đúc. Để chắc chắn thiết bị được vận chuyển an toàn, các mối liên hệ của bạn ở nc này thông báo rằng bạn phải trả cho các cảnh sát địa phương 1 khoản để thuận tiện cho việc vận chuyển. bạn nên làm gì? ",
  },
  {
    title:
      "Một cuộc thương lượng lớn với 1 nhà thầu phụ tiềm năng đã được lên lịch vào ngày mai, bạn phát hiện ra có 1 cơ hội tốt mà dự án sẽ bị hoãn. Bạn nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 361,

    answers: [
      {
        idx: 0,
        title: "Không giành nhiều thời gian chuẩn bị cho cuộc thương lượng",
        isKey: false,
      },
      {
        title: "Cắt giảm thời gian thương lượng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Chỉ thương lượng các hạng mục chunhs",
        isKey: false,
      },
      {
        title: "Hoãn cuộc thương lượng",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 362,
    title:
      "Bạn được phân công quản lý 1 dự án đã hoàn thành được 1 nửa theo lịch trình. Sau đánh giá bao quát, bạn phát hiện ra dự án đang đi chậm hơn lịch trình (far behind schedule), và dự án có thể sẽ kéo dài gấp đôi thời gian ước tính ban đầu của PM trước. tuy nhiên, nhà tài trợ đã được nói là dự án đang đúng lịch trình. Hành đông tốt nhất là: ",
    answers: [
      {
        idx: 0,
        title:
          "Cố gắng cấu trúc lại lịch trình để đáp ứng với thời hạn cuối cùng của dự án",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Báo cáo đánh giá của bạn với nhà tài trợ ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Chuyển lại dự án cho PM cũ ",
      },
      {
        title:
          "Tiếp tục thực hiện với lịch trình được PM cũ lên kế hoạch và báo cáo điều này vào điểm mốc bị lỡ đầu tiên (first missed milestone)",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Bạn đang đi được ½ chặng đường qua 1 buổi giới thiệu máy bay mạng lớn (major network rollout). Có 300 địa điểm trong US và 20 ở UK. Một người bán phần mềm vừa phát hành một phần mềm lớn nâng cao chất lượng cho 1 vài thiết bị được cài đặt. việc nâng cao chất lượng cung cấp cho khách hàng chức năng họ yêu cầu mà không có sẵn tại thời điểm dự án bắt đầu. trong điều kiệnnày, hành động nào là tốt nhất? ",

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Tiếp tục theo kế hoạch, khách hàng của bạn sẽ không yêu cầu thay đổi",
      },
      {
        title:
          "Thông báo với khách hàng về việc nâng cao chất lượng và ảnh hưởng của nó tới thời gian và các chức năng của dự án",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Cài đặt thay đổi và điều chỉnh lịch trình nếu cần thiết vì nó hỗ trợ yêu cầu đầu tiên của khách hàng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Cài đặt thay đổi đối với các địa điểm còn lại và tiếp tục theo lịch trình",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 363,
  },
  {
    idx: 364,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang làm việc trong dự án nghiên cứu và phát triển, khách hàng yêu cầu bạn bao gồm một thành phần đặc biệt vào dự án. Bạn biết rằng nó có nghĩa là thêm công việc, và bạn k muốn có sự vượt quá nguồn dự trữ có sẵn. bạn nên làm gì? ",

    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Xóa gói công việc có mức ưu tiên thấp hơn để dành thời gian và nguồn dự trữ có sẵn",
      },
      {
        title:
          "Sử dụng nguồn dự trữ từ khoản dành riêng ngẫu nhiên để bù đắp chi phí ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Tuân theo quy trình kiểm soát thay đổi hợp đồng",
        isKey: true,
      },
      {
        isKey: false,
        title: "Yêu cầu thêm nguồn dự trữ từ nhà tài trợ",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Gặp người quản lý chương trình",
      },
      {
        idx: 1,
        title: "Xây dựng kế hoạch kiểm soát rủi ro",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thảo luận vấn đề với thủ trường của bạn",
      },
      {
        idx: 3,
        title: "Gặp người PM kia",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 365,
    title:
      "Bạn là PM cho 1 trong nhiều dự án trong 1 chương trình lớn và quan trọng. tại buổi họp quan trọng, bạn chú ý rằng một PM khác đã báo cáo dự án của cô ấy đúng lịch trình. Tìm kiếm trong dự án của bạn khoảng 1 vài tuần trc, bạn nhớ rằng nhiều sản phẩm bàn giao từ dự án khác đã bị chậm trễ. Bạn nên làm gì? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lên kế hoạch lại để có được 35% cải thiện thời gian giải lao",
      },
      {
        title:
          "Giảm ước tính và ghi lại thay đổi trong kế hoạch phản ứng rủi ro",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Cung cấp một ước tính chính xác của chi phí thực tế và cố gắng chứng minh nó ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Gặp đội dự án để xác định bạn có thể tiết kiệm 10% ở đâu",
      },
    ],

    title:
      "Bạn luôn được ban lãnh đạo yêu cầu cắt giảm ước tính dự án 10% sau khi bạn đưa nó cho họ. phạm vi của dự án mới là k rõ ràng và có hơn 30 bên có liên quan. Ban lãnh đạo mong muốn giảm thời gian giải lao 25% như 1 kết quả của dự án. Điều nào dưới đây là hành động tốt nhất trong tình huống này? ",
    idx: 366,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 367,
    title:
      "Nhân viên của bạn đã chậm 3 ngày so với lịch báo cáo. 5 phút trước khi cuộc họp mà chủ đề của báo cáo sẽ được thảo luận thì cô ấy mới đưa cho bạn báo cáo. Bạn thấy có 1 vài lỗi nghiêm trọng trong báo cáo. Điều này có thể ngăn chặn ntn? ",

    answers: [
      {
        title: "Yêu cầu các nhân viên cập nhật định kỳ ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Huấn luyện và cố vấn cho nhân viên",
      },
      {
        isKey: false,
        title: "Chắc chắn nhân viên có khả năng làm công việc",
        idx: 2,
      },
      {
        title:
          "Hoãn buổi họp sớm hơn do bạn không có thời gian xem lại báo cáo",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án đang đi được nửa đường khi bạn phát hiện có 1 ng bán phần mềm cho dự án của bạn có khó khăn lớn trong việc giữ nhân viên do bất đồng lao động. nhiều dự án khác trong công ty của bạn cũng sử dụng các dịch vụ của công ty. Bạn nên làm gì? ",
    idx: 368,
    answers: [
      {
        idx: 0,
        title: "Cố gắng giữ yêu cầu của họ trong dự án của bạn",
        isKey: false,
      },
      {
        title: "Nói với các PM khác trong công ty về vấn đề lao động",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Liên lạc với công ty và hỏi ý kiến rằng bạn sẽ hủy công việc của họ trong dự án trừ phi họ giải quyết được vấn đề bất đồng lao động",
      },
      {
        title: "Kết thúc công việc kinh doanh với công ty này",
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
        title: "Duy trì sự bí mật của thông tin bảo mật của khách hàng",
      },
      {
        isKey: true,
        title: "Xác định tính hợp pháp của các thủ tục công ty",
        idx: 1,
      },
      {
        title:
          "Chắc chắn rằng một xung đột về lợi ích không làm ảnh hưởng tới tính hợp pháp lợi ích của khách hàng",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Cung cấp kết quả chính xác và trung thực trong ước tính chi phí",
      },
    ],
    title: "Điều nào dưới đây KHÔNG phải là trách nhiệm của PM",

    idx: 369,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 370,
    answers: [
      {
        idx: 0,
        title:
          "Phát hành (release) thông tin, nhưng xóa hết những liên quan tới danh tính của khách hàng",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Chỉ cung cấp những thông tin quan trọng (or cần thiết? - high-level)",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Liên lạc với khách hàng của bạn và tìm kiếm sự cho phép để cung cấp các thông tin của họ ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Cung cấp thông tin",
      },
    ],
    title:
      "Để hoàn thành công việc trong dự án của bạn, bạn đã được cung cấp các thông tin bí mật từ tất cả khách hàng của bạn. một trường đại học liên lạc với bạn để nhờ giúp đỡ trong nghiên cứu của họ. sự giúp đỡ như vậy sẽ đòi hỏi bạn cung cấp cho công ty 1 vài dữ liệu khách hàng từ file của bạn. bạn nên làm gì? ",
  },
  {
    idx: 371,
    title:
      "Ban lãnh đạo đã hứa với bạn 1 phần phí ưu đãi từ khách hàng nếu bạn hoàn thành dự án sớm hạn. trong khi hoàn thành 1 sản phẩm bàn giao quan trọng, đội của bạn thông báo rằng sản phẩm đã đáp ứng các yêu cầu trong hợp đồng nhưng không cung cấp chức năng mà khách hàng cần. nếu sản phẩm bàn giao muộn, dự án không thể hoàn thành sớm hạn. bạn nên làm gì / ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Cung cấp sản phẩm như nó vốn thế(provide the deliverable as it is)",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Thông báo với khách hàng về tình hình và tìm ra giải pháp chung có thể chấp nhận được",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Bắt đầu biên tập 1 danh sách các nguyên nhân chậm trễ do khách hàng để chuẩn bị cho thương lượng",
      },
      {
        title:
          "Cắt giảm các hoạt động khác theo cách mà sẽ không bị chú { để cung cấp nhiều thời gian hơn để sửa sản phẩm bàn giao",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Phát triển các tùy chọn để có được ngày quan trọng",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thay đổi ngày quan trọng",
      },
      {
        isKey: false,
        title: "Xóa 1 vài thảo luận về thời gian theo báo cáo trang thái dự án",
        idx: 2,
      },
      {
        idx: 3,
        title: "Huấn luyện đội về sự cần thiết để có được ngày quan trọng",
        isKey: false,
      },
    ],
    title:
      "Bạn vừa phát hiện ra 1 lỗi trong kế hoạch cài đặt mà sẽ ngăn cản 1 cuộc họp quan trọng (milestone date). điều tốt nhất bạn nên làm là: ",
    idx: 372,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thay đổi tiêu chuẩn chất lượng phù hợp với mức độ có thể có ",
      },
      {
        title:
          " B. Liệt kê trong báo cáo rằng bê tông đơn giản là”đáp ứng yêu cầu của chúng tôi” ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chắc chắn rằng số bê tông còn lại sẽ đạt tiêu chuẩn",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Báo cáo về chất lượng kém và cố gắng tìm 1 giải pháp",
        isKey: true,
      },
    ],
    title:
      "Trong khi kiểm tra độ bền của bêtông được đổ trong dự án của bạn, bạn phát hiện ra hơn 35% bê tông không đáp ứng được tiêu chuẩn chất lượng của công ty bạn. bạn cảm thấy chắc chắn rằng bê tông sẽ hoạt động tốt, và bạn k nghĩ rằng bê tông cần đáp ứng các tiêu chuẩn chất lượng. bạn nên làm gì? ",
    idx: 373,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn là PM cho 1 dự án đa quốc gia mới và đội dự án của bạn bao gồm nhân viên đến từ 4 quốc gia. Phần lớn nhân viên chưa bao h làm việc trong 1 dự án kiểu như thế này, nhưng dự án có sự hỗ trợ lớn từ ban lãnh đạo cấp cao. Điều tốt nhất để chắc chắn rằng sự khác biệt văn hóa không ảnh hưởng tới dự án là: ",

    idx: 374,
    answers: [
      {
        idx: 0,
        title:
          "Dành thêm 1 khoảng thời gian để tạo WBS và chắc chắn nó hoàn thành",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Là một PM, chắc chắn bạn chọn từ ngữ cẩn thận khi bạn giao tiếp",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Yêu cầu 1 người trong mỗi buổi họp mô tả những điều đặc biệt về văn hóa của họ ",
      },
      {
        title: "Mã hóa cẩn thận tất cả các giao tiếp của PM",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án có ngân sách eo hẹp khi bạn bắt đầu thương lượng với 1 người bán về thiết bị. người bán nói với bạn rằng giá của thiết bị này là cố định. Ng quản lý của bạn nói với bạn thương lượng giá cả với người bán. Hành động nào là tốt nhất",
    answers: [
      {
        title: "Thực hiện nỗ lực cam kết tốt để tìm cách giảm giá ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Hoãn thương lượng cho tới khi bạn thuyết phục được ng quản lý của bạn thay đổi quyết định",
      },
      {
        isKey: false,
        title: "Vẫn thương lượng, nhưng chỉ về những khía cạnh khác của dự án",
        idx: 2,
      },
      {
        title: "Hủy thương lượng",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 375,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 376,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nói với ng quản lý của bạn",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Hoàn thành các bài tập xây dựng đội dự án và mời đại diện khách hàng tham dự ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Thay đổi đường lịch trình cơ bản",
      },
      {
        isKey: true,
        title: "Gặp khách hàng để tìm ra chi tiết (uncover detail)",
        idx: 3,
      },
    ],

    title:
      "Bạn đang làm việc trong 1 dự án xây dựng lớn đang thực hiện trong đường giới hạn. các nguồn lực được sử dụng từ từ(remain steady), thủ trưởng của bạn vừa thưởng bạn vì nỗ lực của bạn. một thành viên đội dự án trở về từ 1 cuộc họp với khách hàng và nói với bạn rằng khách hàng không hài lòng với việc thực hiện dự án. Điều đầu tiên bạn nên làm là: ",
  },
  {
    idx: 377,
    title:
      "Một PM phát hiện một khuyết điểm trong sản phẩm mà phải bàn giao cho khách hàng hôm nay. PM biết khách hàng k có hiểu biết kĩ thuật để chú ý tới khuyết điểm này. Sản phẩm đáp ứng các yêu cầu của hợp đồng, nhưng không đáp ứng tiêu chuẩn chất lượng của PM. PM nên làm gì trong tình huống này? ",
    answers: [
      {
        title: "Đưa ra sản phẩm và lấy sự chấp nhận chính thức từ khách hàng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Ghi lại vấn đề trong các bài học thu được để các dự án trong tương lai sẽ không mắc phải vấn đề đó nữa",
        idx: 1,
      },
      {
        isKey: true,
        title: "Thảo luận vấn đề với khách hàng",
        idx: 2,
      },
      {
        isKey: false,
        title: "Thông báo với khách hàng sản phẩm sẽ bị chậm trễ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Chắc chắn công ty có đủ khả năng để hoàn thành dự án",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Đáp ứng yêu cầu thời gian của ban lãnh đạo",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chi phí của công việc thầu lại",
      },
      {
        title: "Các điều khoản và điều kiện hợp đồng",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Ban lãnh đạo nói với 1 PM để thầu lại một phần của dự án cho 1 công ty mà ban lãnh đạo đã làm việc nhiều lần. trong tình huống này, PM nên bận tâm lớn nhất về: ",
    idx: 378,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Thay đổi lịch trình các công việc để thực hiện thời gian muộn hơn so với lịch trình cũ để khách hàng có thêm nguồn vốn",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Bắt đầu kết thúc các hoạt động quản trị ",
      },
      {
        title: "Dừng công việc",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Cắt giảm nhân sự 1 phần đội dự án (release part of the team)",
        idx: 3,
      },
    ],
    idx: 379,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Khách hàng trong một dự án nói với PM rằng anh ta đã hết tiền chi trả cho dự án. PM nên làm gì đầu tiên? ",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Ban kiểm soát thay đổi",
        isKey: true,
      },
      {
        title: "Ban ký hợp đồng/pháp lý ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "PM",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lãnh đạo cấp cao",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 380,
    title:
      "Bạn là PM cho 1 dự án lớn trong hợp đồng với chính phủ. Hợp đồng 2 năm, nhiều triệu $ đã được ký 6 tháng trước. bạn không được kéo theo trong thương lượng hợp đồng hay thiết lập các thủ tục cho việc quản lý các thay đổi, nhưng bạn đang tràn ngập với các thay đổi từ khách hàng và từ những người trong tổ chức của bạn. thông thường, ai sẽ có trách nhiệm cho việc xem xét chính thức các thay đổi lớn đối với dự án/hợp đồng? ",
  },
  {
    title:
      "Phòng kĩ thuật muốn mục tiêu dự án cải thiện 10%. Phòng IT muốn nguồn lực của phòng k bị sử dụng nhiều hơn 5% vào dự án. Ban lãnh đạo, cũng là thủ trưởng của bạn, muốn đội dự án giảm thuế pháp lý (tax liability). Điều tốt nhất bạn nên làm là: ",

    answers: [
      {
        title: "Xây dựng 1 kế hoạch đáp ứng tất cả các mục tiêu trên",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Mọi người cùng bàn bạc và đồng ý 1 mục tiêu",
        isKey: false,
      },
      {
        title:
          "Tính đến mục tiêu của phòng kỹ thuật và phòng IT nhưng đáp ứng ít đối với mục tiêu của ban lãnh đạo (holding a further meeting)",
        idx: 2,
        isKey: true,
      },
      {
        title: "Chỉ tính đến mục tiêu của ban lãnh đạo.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 381,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Điều chỉnh các nhiệm vụ được phân bổ khác nhau trong dự án để duy trì khối lượng nguồn lực phù hợp được gọi là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title:
          "Tạo ra kế hoạch quản lý truyền thông tốt hơn và yêu cầu chỉ một ngôn ngữ chính thức trong dự án và phải có người dịch ngay lập tức ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Liên lạc với ai đó trong phòng ban, người này cũng nói ngôn ngữ mẹ đẻ của PM tốt để xác nhận ý kiến của người lãnh đạo phòng ban đó ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Tìm xem nếu hành động tiếp theo có nên ước tính lại không ",
      },
      {
        idx: 3,
        title:
          "Làm việc với hiệu quả gia tăng của tổ chức thực hiện bằng cách khuyến khi sự cải thiện của chính sách bằng cách sử dụng các câu hỏi ",
        isKey: true,
      },
    ],
    idx: 382,
  },
  {
    idx: 383,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nhân tố nào có ảnh hưởng lớn nhất tới chi phí lao động theo ước tính trên đơn vị cho dự án. ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thông tin lịch sử ",
      },
      {
        title: "Sử dụng các nhà cung cấp bên ngoài. ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Các quy trình kiểm soát thay đổi. ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Các yêu cầu mức độ kỹ năng nguồn nhân lực",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Di chuyển các nguồn lực. ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Yêu cầu thêm nguồn lực. ",
      },
      {
        isKey: true,
        idx: 2,
        title: "Điều chỉnh nguồn lực ",
      },
      {
        idx: 3,
        title: "Dự thảo ngân sách ngoài giờ ",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Giám đốc dự án đang xây dựng kế hoạch cho dự án. Giám đốc dự án đã xác định các nhiệm vụ và chỉ định nguồn lực thích hợp. Công cụ được sử dụng thông báo rằng một vài nguồn lực được phân bổ xong. Bước tiếp theo của giám đốc dự án sẽ là gì? ",

    idx: 384,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 385,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Lập kế hoạch dự án",
      },
      {
        title: "Kiểm thử dự án. ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kiểm soát dự án. ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Quay vòng dự án",
      },
    ],

    title:
      "Giám đốc dự án đã khám phá vấn đề với môđun thống kê của dự án. Các số đo đã được ghi rõ cho các đơn vị của của Mỹ nhưng các nhà lập trình nước ngoài sử dụng các đơn vị quốc tế. Vấn đề này có thể tránh được ở chỗ nào trong dự án?",
  },
  {
    title:
      "Giám đốc dự án được chỉ định cho một dự án lớn đã và đang được thực hiện một số lần. Đội dự án vừa hoàn tất giai đoạn thiết kế của dự án và đang tiến hành trong giai đoạn triển khai. Tại điểm này, thay đổi nào có thể xẩy ra mà không phải gánh chịu rủi ro của việc tiến hành lại toàn bộ giai đoạn thiết kế? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 386,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phạm vi ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Nhiệm vụ ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Thiết kế chi tiết ",
      },
      {
        isKey: true,
        title: "Ngày tháng chuyển giao ",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Thông báo với khách hàng rằng thay đổi phạm vi là không được phép. ",
        idx: 0,
      },
      {
        title: "Trình yêu cầu thay đổi lên Ban quản lý thay đổi. ",
        isKey: true,
        idx: 1,
      },
      {
        title: "Triển khai các thay đổi theo yêu cầu ngay lập tức. ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Thiết kế lại toàn bộ dự án từ vạch xuất phát. ",
        isKey: false,
      },
    ],
    title:
      "Giám đốc dự án được khách hàng đề nghị thực hiện những thay đổi quan trọng cho dự án. Những thay đổi này không được chú tâm trong Tài liệu thiết kế hay Phạm vi dự án. Cách tốt nhất để giám đốc dự án đáp lại yêu cầu là gì? ",
    idx: 387,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 388,
    answers: [
      {
        idx: 0,
        title: "Người sử dụng",
        isKey: false,
      },
      {
        title: "Giám đốc dự án",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nhà tài trợ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Kỹ sư cao cấp",
      },
    ],
    title: "Ai có trách nhiệm chuẩn bị báo cáo đánh giá sau triển khai?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn đang quản lý đội kỹ thuật là những người lao động bán thời gian. Phần lớn những người lao động này là sinh viên và có những cam kết khác trong suốt năm học. Năm ngoái bạn đã chậm trễ trong một vài dự án bởi vì bạn đã sắp xếp các dự án được hoàn tất trong suốt kỳ thi tốt nghiệp của sinh viên. Hiện nay bạn đang bắt đầu thực hiện một kế hoạch cho các dự án sắp tới và có thời hạn cuối cùng khác trong suốt giai đoạn thi tốt nghiệp. Bạn nên làm gì để ngăn chặn xung đột này?",
    idx: 389,
    answers: [
      {
        isKey: false,
        title: "Sử dụng các nguồn lực khác trong suốt giai đoạn thi tốt nghiệp",
        idx: 0,
      },
      {
        isKey: true,
        title: "Sử dụng nhiều nguồn lực hơn và rút ngắn lịch trình dự án",
        idx: 1,
      },
      {
        title:
          "Thuê thêm sinh viên để trợ giúp trong suốt giai đoạn thi tốt nghiệp",
        isKey: false,
        idx: 2,
      },
      {
        title: "Sắp xếp dự án được hoàn tất sau giai đoạn thi tốt nghiệp",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Nhà tài trợ dự án",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Giám đốc dự án",
      },
      {
        isKey: false,
        title: "Lãnh đạo đội xây dựng",
        idx: 2,
      },
      {
        isKey: true,
        title: "Đại diện của những người dùng cuối",
        idx: 3,
      },
    ],
    idx: 390,
    title:
      "Bạn đang xây dựng phạm vi công việc cho một dự án sẽ sử dụng các nguồn lực kỹ thuật giới hạn. Thay đổi đã được một trong số các nguồn lực kỹ thuật yêu cầu để điều chỉnh màn ảnh đầu vào của người dùng. Cá nhân nào phải phê chuẩn yêu cầu này?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 391,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Xác nhận hệ thống quản lý thay đổi đang vận hành thích hợp",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Tiến hành xây dựng đội ngũ với tất cả các đối tượng liên quan dự án",
      },
      {
        idx: 2,
        isKey: true,
        title: "Xác nhận các nhu cầu và kỳ vọng của khách hàng. ",
      },
      {
        title: "Chuẩn bị kế hoạch hành động hiệu chỉnh",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Bạn được bổ nhiệm là giám đốc dự án của một dự án hiện tại. Bạn đã từng ở công ty một vài năm nhưng không nằm trong phạm vi dự án này đang diễn ra. Kế hoạch quản lý dự án được đặt đúng chỗ. Dự án không vượt quá một vài ngưỡng cửa thay đổi nào đó. Khách hàng không vui với trạng thái dự án. Trong các hành động sau đây thì hành động ban đầu tốt nhất là gì? ",
  },
  {
    answers: [
      {
        isKey: true,
        title: "Thay đổi phạm vi dự án",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Mất sự hỗ trợ của nhà tài trợ",
      },
      {
        idx: 2,
        title: "Thay đổi ngân quỹ dự án.",
        isKey: false,
      },
      {
        title: "Thay đổi lịch trình dự án",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là giám đốc một dự án đã bắt đầu cách đây 4 tháng. Dự án đã được bảo vệ khoảng một năm bởi phó chủ tịch bộ phận nhưng việc quản lý tài chính và trách nhiệm của nhà tài trợ đã được giao phó cho một trong những trưởng bộ phận. Một vài giám đốc khác cũng nằm trong danh sách phê chuẩn các tài liệu dự án chính. Tài liệu dự án ban đầu đã được hoàn tất và phê duyệt và dự án nằm trong lịch trình. Các yêu cầu đã được xác định, lập tài liệu và đệ trình để được sự chấp thuận trách nhiệm của nhà tài trợ. Những phê duyệt theo yêu cầu đã nhận được vào cuối ngày được phân bổ theo vòng phê duyệt. Tuy nhiên phê duyệt của một giám đốc phụ thuộc vào việc thêm ba yêu cầu quan trọng. Các yêu cầu này không lường trước được trong phạm vi dự án ban đầu cũng không phải chúng được khám phá trong suốt giai đoạn phân tích yêu cầu. Rủi ro nào bạn chắc chắn cần phải chú trọng nhất? ",
    idx: 392,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các hoạt động đang tiếp diễn",
      },
      {
        title: "Số giờ đã dùng hết",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Công việc đã được hoàn tất",
      },
      {
        title: "Theo đúng lịch trình",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 393,
    title:
      "Bạn nhận được hoá đơn từ nhà thầu của mình trong hợp đồng giá cố định với lịch trình phải trả gắn liền với việc hoàn tất các mốc quan trọng. Điều gì là quan trọng nhất để duyệt. ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn sẽ tìm các thủ tục và chính sách xác định truyền thông thực tiễn nhất có thể chấp nhận được đối với một dự án tích cực ở đâu? ",
    answers: [
      {
        title: "Sách dự án ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Bảng kê công việc (SOW) ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Tài liệu vai trò và trách nhiệm. ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Sách chỉ dẫn các thủ tục và chính sách của công ty",
        idx: 3,
      },
    ],
    idx: 394,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Dự án hoàn tất khoảng 20%",
        idx: 0,
      },
      {
        title: "Dự án hoàn tất khoảng 30%",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dự án hoàn tất khoảng 25%",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Các ước tính nỗ lực còn lại và dữ liệu hoàn tất dự định cần được tập hợp để có ước tính chính xác về trạng thái dự án",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 395,
    title:
      "Bạn tiếp quản một dự án đang được tiến hành khoảng ba tháng. Giám đốc dự án trước yêu cầu đội dự án cung cấp các ước tính hàng tuần trong tiến trình thực hiện. Kế hoạch dự án chỉ ra 5 giai đoạn và 1.000 nhiệm vụ. Giai đoạn đầu tiên đã kết thúc và có 800 nhiệm vụ chưa hoàn thành. Trong số 800 nhiệm vụ chưa hoàn thành thì có 200 nhiệm vụ đã hoàn thành 50%. Phát biểu nào về trạng thái dự án là đúng? ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Ước lượng kỹ thuật cần thiết khi dữ liệu không đầy đủ, các mối quan hệ không được biết hoặc thiếu định nghĩa về sản phẩm. ",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Ước lượng theo tham số tương đối đơn giản và ít tốn kém để xây dựng",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Ước lượng tương tự hệ thống phụ vốn đã chính xác hơn các phương pháp khác. ",
      },
      {
        title:
          "Ước lượng ý kiến chuyên gia bị hạn chế đối với kỹ thuật ổn định. ",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Báo cáo về phương pháp ước lượng nào là đúng? ",
    idx: 396,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 397,
    title:
      "Biểu đồ lịch, lịch trình mốc quan trọng và biểu đồ Gantt là toàn bộ ví dụ minh hoạ cho: ",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quản lý rủi ro ",
      },
      {
        idx: 1,
        title: "Xác định giá trị dự án",
        isKey: false,
      },
      {
        title: "Vai trò của các đối tượng liên quan dự án ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Lập lịch trình theo ước tính và trình tự chuỗi công việc ",
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
        title: "Giám đốc dự án, đội dự án, các giám đốc cao cấp và khách hàng ",
      },
      {
        isKey: false,
        title:
          "Giám đốc cao cấp, giám đốc chức năng, khách hàng và nhà tài trợ",
        idx: 1,
      },
      {
        isKey: true,
        title:
          "Giám đốc dự án, khách hàng, tổ chức thực hiện và các nhà tài trợ ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Giám đốc dự án, giám đốc chức năng, khách hàng và giám đốc cao cấp ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Bốn đối tượng liên quan chính trong mỗi dự án? ",
    idx: 398,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 399,

    title: "Bước đầu tiên trong giai đoạn hoàn thiện dự án là: ",
    answers: [
      {
        isKey: false,
        title: "Hoàn thiện hợp đồng. ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Chấp thuận người sử dụng",
      },
      {
        idx: 2,
        isKey: false,
        title: "Tài liệu cuối cùng. ",
      },
      {
        isKey: false,
        title: "Những bài học thu được ",
        idx: 3,
      },
    ],
  },
  {
    title: "Các đánh giá sau hợp đồng quan trọng bởi vì: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 400,

    answers: [
      {
        idx: 0,
        title:
          "Chúng được yêu cầu về mặt pháp lý trong nhiều quyền hạn xét xử ",
        isKey: false,
      },
      {
        idx: 1,
        title: "Thù lao gắn liền với hiệu quả của nhà thầu",
        isKey: false,
      },
      {
        idx: 2,
        title: "Chúng xác lập cơ sở lịch sử cho sự lựa chọn của nhà thầu ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Hầu hết các hợp đồng đều yêu cầu chúng ",
      },
    ],
  },
  {
    answers: [
      {
        title: "Cấu trúc chi tiết công việc ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Quy định công việc.",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bảng kê công việc. ",
      },
      {
        title: "Kế hoạch dự án công việc. ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 401,

    title: "Các gói công việc được mô tả trong: ",
  },
  {
    idx: 402,
    answers: [
      {
        title:
          "Phân tích về kiến trúc hệ thống, thiết kế và đường triển khai cho từng yêu cầu. ",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Quản lý về thay đổi trong các yêu cầu, kiến trúc, thiết kế và mã nguồn.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Các hoạt động theo dõi lỗi, kiểm tra đơn vị, đánh giá kỹ thuật, kiểm tra tích hợp và kiểm tra hệ thống.",
      },
      {
        idx: 3,
        title:
          "Quyết định mở rộng và nới lỏng các phần của hệ thống có thể được sử dụng cho các hệ thống khác. ",
        isKey: false,
      },
    ],
    title: "Các kế hoạch bảo đảm chất lượng phải bao gồm: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 403,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Rút lui, thoả hiệp, kiểm soát và ép buộc ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Kiểm soát, ép buộc, dàn xếp, rút lui",
        idx: 1,
        isKey: false,
      },
      {
        title: "Đối đầu, thoả hiệp, dàn xếp, quản lý. ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Dàn xếp, đối đầu, ép buộc và rút lui. ",
      },
    ],
    title:
      "Các kỹ thuật giải quyết xung đột có thể được dùng trong dự án bao gồm: ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Giai đoạn lập kế hoạch ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giai đoạn thực thi ",
      },
      {
        title: "Giai đoạn hoàn thiện ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Giai đoạn xây dựng ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 404,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Các nhà tài trợ dự án có ảnh hưởng lớn nhất đến phạm vi, chất lượng, thời đoạn và chi phí của dự án trong suốt giai đoạn nào? ",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Đội ngũ thành viên dự án, nhân viên điều hành công ty bạn, nhân viên điều hành của khách hàng và các trưởng bộ phận chức năng của công ty bạn",
        isKey: false,
      },
      {
        title:
          "Đội ngũ thành viên dự án, các nhà tài trợ, nhân viên điều hành của công ty bạn và nhân viên điều hành của khách hàng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Đội ngũ thành viên dự án, các nhà cung cấp, đại diện từ công ty của khách hàng là người sẽ sử dụng phần có thể chuyển giao",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Đội ngũ thành viên dự án, nhà tài trợ, nhà cung cấp, đại diện từ công ty của khách hàng là người sẽ sử dụng phần có thể chuyển giao và các trưởng bộ phận chức năng của công ty bạn",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 405,
    title:
      "Các nhóm nào sau đây xác định rõ nhất ai là các đối tượng liên quan trong dự án? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 406,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giám đốc dự án thực hiện tất cả các ước tính. ",
      },
      {
        title: "Kết hợp ước tính của từng cá nhân ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Giành được các ước tính chuyên môn. ",
      },
      {
        title: "Không có cách nào xác định thời đoạn ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Cách thức thích hợp nhất để xác định thời đoạn dự án trước khi thực thi là gì?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Cái nào được chi tiết hoá trong tài liệu lập kế hoạch dự án đối với giám đốc sự án? ",
    answers: [
      {
        title: "Hiệu suất sẽ được đánh giá như thế nào ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Các chứng nhận kỹ thuật được tổ chức ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Lịch trình nghỉ ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tên của đội ngũ thành viên dự án ",
      },
    ],
    idx: 407,
  },
  {
    answers: [
      {
        title: "Kế hoạch dự án với các nguồn lực đã được phân bổ ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Quy định dự án ",
      },
      {
        title: "WBS (Cấu trúc chi tiết công việc). ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Liệt kê nhiệm vụ ",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 408,
    title: "Cái nào sau đây là sản phẩm của quy trình khởi tạo dự án? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Đổi dữ liệu về số tiền phải trả cho nhân viên vào tháng 12. ",
      },
      {
        idx: 1,
        isKey: true,
        title: "Để số tiền phải trả cho nhân viên sau ngày 31 tháng 11.",
      },
      {
        title: "So sánh với số tiền phải trả cho nhân viên trong ba tháng. ",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Để số tiền phải trả cho nhân viên với độ chính xác 100% trong tháng 1. ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Căn cứ vào báo cáo phạm vi và các giả định dự án được chỉ ra trong triển lãm thì điều gì phải được hoàn tất đầu tiên? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 409,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Vượt quá yêu cầu. ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thay đổi đối với yêu cầu. ",
      },
      {
        idx: 2,
        title: "Đảm bảo tính phù hợp cho các yêu cầu. ",
        isKey: true,
      },
      {
        title: "Các yêu cầu quản lý chất lượng. ",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 410,
    title:
      '"Chi phí chất lượng" là một khái niệm quản lý dự án bao gồm chi phí: ',
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 411,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Chi phí tất yếu ",
      },
      {
        isKey: true,
        title: "Chi phí cố định ",
        idx: 1,
      },
      {
        title: "Chi phí biến động ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Chi phí không được dự kiến ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Chi phí thuê phòng sẽ được dùng cho cuộc họp dự án là ví dụ minh hoạ cho loại chi phí nào? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Tránh rủi ro ",
        isKey: false,
      },
      {
        title: "Chuyển giao rủi ro. ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Giảm thiểu rủi ro ",
      },
      {
        idx: 3,
        title: "Chấp thuận rủi ro. ",
        isKey: false,
      },
    ],
    idx: 412,
    title:
      "Chiến lược phản ứng rủi ro nhằm làm giảm khả năng hay ảnh hưởng của những sự kiện rủi ro bất lợi tới ngưỡng cửa chấp thuận được gọi là:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Duyệt ảnh hưởng của các yêu cầu thay đổi. ",
      },
      {
        idx: 1,
        title: "Đưa ra yêu cầu thay đổi. ",
        isKey: false,
      },
      {
        title: "Trình bày những lợi ích quản lý cao nhất ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Xác định những phạm vi mới của công việc dự án. ",
        idx: 3,
      },
    ],
    title: "Chức năng chính của ban quản lý thay đổi là: ",
    idx: 413,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Tích hợp dự án ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Giao diện khách ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Thiết kế hệ thống ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Đảm bảo chất lượng ",
        isKey: false,
      },
    ],

    title: "Chức năng nòng cốt của giám đốc dự án là gì? ",
    idx: 414,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Dự án chậm hơn lịch trình do xung đột giữa các thành viên. Sau khi giải quyết xung đột, để đáp ứng được ngày tháng chuyển giao thì giám đốc dự án nên xem xét",

    idx: 415,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Phân chia lại nguồn lực. ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Khiển trách về việc chuyển giao muộn trong đội ngũ thành viên. ",
        idx: 1,
      },
      {
        title: "Điều chỉnh nguồn lực. ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Tối ưu hoá lịch trình. ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Thay đổi phạm vi các đặc tính của khách hàng để chuyển giao sản phẩm vào ngày tháng chuyển giao đã hứa",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Thông báo cho khách hàng về việc trễ hạn và tìm kiếm sự ủng hộ thích hợp bằng tài liệu. ",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Tuân theo quy trình thay đổi được phác thảo trong quy định dự án ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Khi dự án nằm trong giới hạn kinh phí thì bạn chẳng phải làm gì cả. ",
      },
    ],
    idx: 416,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án được thực hiện tốt theo kinh phí; tuy nhiên để đáp ứng các phần chuyển giao của khách hàng thì ngày tháng chuyển giao tới khách hàng sẽ bị muộn hơn 2 tuần. Không có nguồn lực phụ phân công cho dự án. Giám đốc dự án nên làm gì?",
  },
  {
    idx: 417,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Báo cáo trạng thái đến kỳ hạn ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Các quyết định đi hay không đi ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Cuộc họp kiểm soát thay đổi ",
      },
      {
        title: "Ngày tháng cho người sử dụng ký kết hoàn tất theo kế hoạch ",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Đánh giá điểm kiểm soát trong kế hoạch dự án chỉ ra: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Để rút ngắn thời đoạn dự án, các nguồn lực phải được thêm vào các nhiệm vụ trong đường tới hạn. Khi đó kế hoạch nên được nhận cho:",

    answers: [
      {
        title: "Thời gian trễ trong các đường khác",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Sự xuất hiện đường tời hạn mới. ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Các nguồn lực được chỉ định cho các nhiệm vụ khác trên đường tới hạn ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Nhiệm vụ dài nhất còn lại trong kế hoạch ",
      },
    ],
    idx: 418,
  },
  {
    answers: [
      {
        title: "Tăng tốc nguồn lực ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Tải nguồn lực ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Tối ưu hoá nguồn lực ",
        isKey: false,
      },
      {
        title: "Điều chỉnh nguồn lực ",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Điều chỉnh lịch trình nhiệm vụ để triển khai nguồn nhân lực hiệu quả hơn được gọi là: ",
    idx: 419,
  },
  {
    idx: 420,

    answers: [
      {
        isKey: false,
        title: "Kế hoạch quản lý ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Các yêu cầu nguồn lực ",
        isKey: true,
      },
      {
        idx: 2,
        title: "Quy định dự án ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kế hoạch chi phí ",
      },
    ],
    title:
      "Điều gì sau đây cần để xây dựng một ước tính chi phí dự án chi tiết? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Sự ủng hộ của đối tượng liên quan dự án ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Kiểm thử sản phẩm ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Đào tạo người sử dụng. ",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Chấp thuận người sử dụng ",
      },
    ],
    title: "Điều gì sau đây được tính vào mục tiêu của giai đoạn hoàn thiện? ",
    idx: 421,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 422,
    title:
      "Điều gì sau đây nên được tính đến trong định nghĩa phạm vi và quy định dự án? ",
    answers: [
      {
        isKey: false,
        title: "Phương pháp luận mã chuẩn ",
        idx: 0,
      },
      {
        idx: 1,
        title: "WBS (Cấu trúc chi tiết công việc). ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "CPM (Phương pháp đường tới hạn). ",
      },
      {
        title: "Tiêu chí hoàn tất. ",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    title: "Điều kiện hợp lý để bắt đầu yêu cầu thay đổi phạm vi dự án là gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 423,
    answers: [
      {
        isKey: false,
        title: "Vấn đề chuyển giao nhà cung cấp",
        idx: 0,
      },
      {
        isKey: false,
        title: "Không giữ đúng thời hạn lịch trình dự án. ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Vấn đề dự án chưa được giải quyết ",
        idx: 2,
      },
      {
        title: "Yêu cầu mới do các đối tượng liên quan dự án đưa ra. ",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Điều nào sau đây là kết quả có hiệu lực của quy trình quản lý thay đổi? ",
    answers: [
      {
        title: "Giảm tới mức tối thiểu sự mất mát năng suất trong suốt dự án ",
        isKey: true,
        idx: 0,
      },
      {
        title:
          "Cấm hoàn toàn bất cứ sự thay đổi phạm vi nào trong suốt toàn bộ dự án ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Khuyến khích thay đổi thường xuyên trong suốt vòng đời dự án ",
        idx: 2,
      },
      {
        isKey: false,
        title: "Cân bằng giữa rủi ro và chi phí dự án ",
        idx: 3,
      },
    ],
    idx: 424,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tạo điều kiện thuận lợi cho quy trình lập kế hoạch nguồn lực. ",
      },
      {
        idx: 1,
        title: "Cung cấp thông tin biến động cho nhà tài trợ dự án ",
        isKey: true,
      },
      {
        title:
          "Tạo điều kiện thuận lợi tăng cường phối hợp giữa các đội ngũ thành viên ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Đưa ra cơ chế nhằm quản lý các mức độ kỳ vọng của nhà tài trợ dự án. ",
        isKey: false,
      },
    ],

    idx: 425,
    title:
      " Điều quan trọng để giám đốc dự án truyền đạt các thay đổi chính trong dự án cho các nhà tài trợ dự án duyệt và phê chuẩn bởi vì truyền thông này",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Đội dự án đang tiến hành hoàn tất định nghĩa phạm vi và đang trình bày báo cáo phạm vi về những yêu cầu thay đổi của khách hàng và nhà tài trợ. Với vai trò là giám đốc dự án thì phương pháp tiếp cận tốt nhất là gì?",
    idx: 426,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Lắng nghe yêu cầu và chỉ ra các nguồn lực thêm vào sẽ được yêu cầu để hoàn tất dự án vào cùng thời hạn",
      },
      {
        title:
          "Chấp nhận thay đổi và rời khỏi đó để qua trở lại với báo cáo phạm vi đã thay đổi. ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chỉ ra rằng thời gian chuyển giao cho dự án sẽ được kéo dài. ",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Phác thảo những ảnh hưởng của thay đổi trong việc đáp ứng các mục tiêu của dự án sử dụng các ví dụ minh hoạ thay đổi phạm vi, thời gian và chi phí.",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "UAT (Kiểm thử chấp thuận người sử dụng). ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Mođun ",
      },
      {
        idx: 2,
        title: "Đơn vị. ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Hệ thống. ",
      },
    ],
    idx: 427,
    title:
      "Đội dự án gần đi tới phần cuối cùng của việc xây dựng và sẵn sàng kiểm thử toàn bộ ứng dụng. Họ sẽ thực hiện loại hình kiểm thử nào?",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Quay vòng ",
      },
      {
        isKey: true,
        title: "Hoàn thiện. ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chấp thuận. ",
      },
      {
        title: "Duyệt. ",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 428,
    title: "Giai đoạn quan trọng cuối cùng của dự án là gì? ",
  },
  {
    idx: 429,

    answers: [
      {
        title:
          "Thiếu chuyên môn với tư cách là kỹ sư mạng trong việc chuẩn bị tài liệu kỹ thuật. ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Thiếu những chỉ dẫn được xác định trong thư điện tử tạo ra công việc ngoài phạm vi.",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Theo sự phân bổ nguồn lực đối với kỹ sư mạng.",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Lãnh đạo bộ phận của kỹ sư mạng phân bổ theo thời gian kỹ sư mạng cần để hoàn tất nhiệm vụ đã định",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Giám đốc công nghệ thông tin gửi cho kỹ sư mạng trong đội dự án ma trận của anh ta một bức thư điện tử yêu cầu anh ta chuẩn bị báo cáo kỹ thuật chi tiết cho theo một số chỉ dẫn được đưa ra trong thư điện tử. Một tuần sau, giám đốc bộ phận của kỹ sư mạng đến chỗ giám đốc dự án để phàn nàn rằng kỹ sư phải mất 45 giờ để chuẩn bị một bản báo cáo dài 80 trang. Giám đốc dự án trình bày sơ qua là anh ta nghĩ bản báo cáo sẽ chỉ dài 4 trang. Vấn đề chính có thể gây ra xung đột này là gì?",
  },
  {
    idx: 430,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Đội dự án và các nhà tài trợ. ",
      },
      {
        title: "Văn phòng dự án và đội dự án. ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Đội dự án và khách hàng. ",
        idx: 2,
      },
      {
        title: "Các đối tượng liên quan dự án và đội dự án ",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Giám đốc dự án công nghệ thông tin được chuyển giao quy định dự án và tài liệu phạm vi phác hoạ mọi khía cạnh của dự án mới đã được công ty phê chuẩn. Giám đốc dự án công nghệ thông tin mang tài liệu này tới cuộc họp bắt đầu dự án. Trong những lựa chọn dưới đây, hãy chọn ra lựa chọn tốt nhất xem ai nên nhận tài liệu này. ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Trước lịch trình khoảng 4.000$ cho một tuần. ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Trước lịch trình khoảng 2.000$ cho một tuần. ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Sau lịch trình khoảng 4.000$ cho một tuần. ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Sau lịch trình khoảng 2.000$ cho một tuần. ",
      },
    ],

    title:
      "Giám đốc dự án công nghệ thông tin thông báo biến động lịch trình vào một trong số cáckết quả chuyển giao của dự án. BCWP (Chi phí dự toán của việc đã thực hiện) là 7.000$, ACWP (Chi phí thực của việc đã thực hiện) là 9.000$ và BCWS (Chi phí dự toán của việc đã xếp lịch) là 11.000$ cho một tuần. Dựa vào toàn bộ số lượng này thì dự án",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 431,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Giám đốc dự án đang trải qua bất đồng giữa nhà cung cấp và đội dự án. Bằng việc điều tra tình hình, giám đốc dự án đã thấy rằng nhà tài trợ đã tăng giá cả ban đầu đã được nhất trí trong hợp đồng do nhu cầu thị trường. Phương hướng hành động nào là tốt nhất để giải quyết xung đột này? ",
    idx: 432,

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Giải thích sự thoả thuận về giá cả trong hợp đồng và ảnh hưởng sẽ gây ra trong dự án, đồng thời thông báo cho các đối tượng liên quan dự án",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Giải thích với nhà cung cấp rằng họ đang vi phạm hợp đồng và bạn lập kế hoạch tìm kiếm những hành động pháp lý. ",
      },
      {
        isKey: false,
        title:
          "Thảo luận với nhà cung cấp quy trình thực hiện trật tự thay đổi để tăng giá cảc ",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Thảo luận với nhà cung cấp về sự thoả thuận giá cả và ảnh hưởng đối với dự án, ",
        isKey: true,
      },
    ],
  },
  {
    idx: 433,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Giám đốc dự án phần mềm kế toán mới đã được thông báo trong suốt giai đoạn triển khai rằng phần mềm có xu hướng hỏng hóc. Đây là dấu hiệu của chất lượng xấu trong: ",

    answers: [
      {
        isKey: false,
        title: "Thiết kế",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Quản lý.",
      },
      {
        title: "Khái niệm. ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Kiểm thử. ",
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
        title: "Bằng ảnh hưởng về tài chính. ",
      },
      {
        isKey: false,
        title: "Bằng ảnh hưởng đường thời gian. ",
        idx: 1,
      },
      {
        title: "Bằng toàn bộ ảnh hưởng lên dự án. ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Bằng các ưu tiên về thực thi. ",
        idx: 3,
      },
    ],
    idx: 434,
    title: "Giám đốc dự án ưu tiên rủi ro như thế nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 435,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Trong suốt quá trình xây dựng kế hoạch dự án. ",
      },
      {
        isKey: false,
        title: "Khi kết thúc dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Trong suốt dự án",
      },
      {
        idx: 3,
        isKey: false,
        title: "Khi phê duyệt kế hoạch truyền thông. ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Khi nào kết quả của kế hoạch truyền thông nên được duyệt? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sau khi kiểm thử chấp thuận sản phẩm diễn ra. ",
      },
      {
        title: "Ngay khi thiếu sót được phát hiện ra. ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Bất cứ thời điểm nào trong suốt vòng đời dự án trước khi chuyển giao như đã được xác định trong kế hoạch dự án.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Khi nào thì các quyết định thiếu sót xẩy ra trong vòng đời dự án?",
    idx: 436,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Trong quá trình kiểm thử phần có thể chuyển gia",
        idx: 0,
        isKey: false,
      },
      {
        title: "Khi phần có thể chuyển giao đang được xây dựng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Sau khi phần có thể chuyển giao được xây dựng ",
        idx: 2,
      },
      {
        isKey: true,
        title: "Trong khi xác định yêu cầu của phần có thể chuyển giao",
        idx: 3,
      },
    ],
    idx: 437,
    title:
      "Khi nào thì đánh giá chất lượng của phần có thể chuyển giao dự án được xác định?",
  },
  {
    title:
      "Khi thẩm quyền phê chuẩn sửa đổi phạm vi được đặt ra, giám đốc dự án nên ",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hỏi ý kiến nhà tài trợ dự án",
      },
      {
        idx: 1,
        isKey: true,
        title: "Duyệt quy định dự án gốc",
      },
      {
        title: "Tham khảo kế hoạch dự án thay đổi ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Ra quyết định dựa trên sơ đồ tổ chức của công ty",
        isKey: false,
      },
    ],
    idx: 438,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: true,
        title:
          "Giám sát các kết quả của dự án cụ thể để xác định xem liệu chúng có tuân theo các chuẩn chất lượng liên quan hay không",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đánh giá toàn bộ kết quả dự án trên cơ sở đều đặn",
      },
      {
        isKey: false,
        idx: 2,
        title: "Hoạt động để tăng tính hiệu lực và hiệu suất của dự án. ",
      },
      {
        title: "Xác định các chuẩn chất lượng nào liên quan tới dự án.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 439,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Kiểm soát chất lượng là: ",
  },
  {
    idx: 440,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Kỹ thuật nào sau đây được dùng để theo dõi rủi ro dự án? ",
    answers: [
      {
        isKey: true,
        title: "Ma trận xác suất và ảnh hưởng",
        idx: 0,
      },
      {
        idx: 1,
        title: "Biểu đồ Pareto",
        isKey: false,
      },
      {
        title: "Biểu đồ R. ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Phân tích PERT (Kỹ thuật duyệt và đánh giá dự án). ",
      },
    ],
  },
  {
    title:
      "Kỹ thuật truyền đạt nào sau đây sẽ cải thiện tốt nhất cách hiểu của các đối tượng liên quan về dự án? ",
    idx: 441,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Thư điện tử về việc thực thi cho tất cả nhân viên về những mục tiêu dự án và các kết quả mong muốn",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Các cuộc họp điều hành với các đối tượng liên quan để giải thích những mục tiêu dự án và các kết quả mong muốn",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Các cuộc họp toà thị chính với đội dự án cung cấp thông tin và các đối tượng liên quan có khả năng đề nghị các câu hỏi",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Những phản kháng của đối tượng liên quan trong đội quản lý dự án. ",
      },
    ],
  },
  {
    idx: 442,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Lập kế hoạch tổ chức. ",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Xây dựng kinh phí",
      },
      {
        idx: 2,
        isKey: false,
        title: "Xác định đối tượng liên quan dự án. ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lập kế hoạch nguồn lực ",
      },
    ],
    title: "kế hoạch truyền thông dự án thường liên quan chặt chẽ với: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 443,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Kế hoạch dự án. ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Quy định dự án. ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Kế hoạch truyền thống. ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Cấu trúc chi tiết công việc (WBS)",
      },
    ],
    title:
      "đội ngũ thành viên, các nhiệm vụ theo lịch trình và kế hoạch đào tạo là bộ phận của... ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Phát triển nhân sự chủ chốt ",
        isKey: false,
      },
      {
        idx: 1,
        title: "Lãnh đạo các chuyên gia về kỹ thuật. ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Giao thiệp với khách hàng/ nhà tài trợ. ",
        idx: 2,
      },
      {
        title: "Phân tích các kỹ năng",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 444,
    title:
      "chọn đội ngũ không chỉ là chức năng tìm kiếm những người là chuyên gia kỹ thuật hay hành chính. Nhà tài trợ dự án chỉ đạo một dự án có tính minh bạch cao sẽ mong đợi gì ở một giám đốc dự án?",
  },
  {
    idx: 445,
    answers: [
      {
        title: '"Hãy bỏ phiếu về việc này". ',
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          '"Ý tưởng này không hoạt động đối với đối thủ cạnh tranh, vậy tại sao chúng ta nghĩ là nó sẽ hoạt động ở đây?" ',
        isKey: true,
      },
      {
        idx: 2,
        title: '"Các nghiên cứu điểm chuẩn cho thấy điều gì?" ',
        isKey: false,
      },
      {
        title:
          '"Ý tưởng có thể thực hiện được nhưng chúng ta có thể phải thực hiện một vài thay đổi nhỏ".',
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Lựa chọn đội ngũ thành viên đúng (hay sai) có thể ảnh hưởng đến tinh thần, thời gian cũng như chất lượng. Dựa vào những trích dẫn bên dưới, ai sẽ là người ít khả năng nhất mà giám đốc dự án thêm vào đội dự án. ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Ma trận gán trách nhiệm là công cụ quản lý dự án dùng để: ",
    answers: [
      {
        title: "Bảo đảm đội ngũ thành viên hiểu được vai trò cụ thể của họ ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Xây dựng cấu trúc chi tiết công việc dựa vào nguồn lực sẵn có. ",
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Xác lập tính giá trị của các thành viên dự án để thực hiện công việc trong dự án. ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Mô tả cấu trúc tổ chức của dự án. ",
        isKey: false,
      },
    ],
    idx: 446,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title:
          "Sắp xếp mục tiêu của nhà thầu và mục tiêu của người mua cho phù hợp. ",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Giảm rủi ro cho nhà thầu",
      },
      {
        isKey: false,
        idx: 2,
        title: "Kiểm soát các chi phí của nhà thầu. ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Giảm chi phí cho người mua. ",
      },
    ],
    title:
      "Mặc dù có nhiều tác dụng phụ nhưng mục tiêu chính của các điều khoản khuyến khích trong giao tiếp là:",
    idx: 447,
  },
  {
    idx: 448,
    title:
      "Mặc dù những thay đổi nhỏ có thể được hút vào trong dự án mà không cần điều chỉnh phạm vi nhưng tổ chức nào sau đây nên chú trọng tới những thay đổi quan trọng đối với phạm vi?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nhà quản lý hợp đồng. ",
      },
      {
        title: "Ban quản lý thay đổi",
        isKey: true,
        idx: 1,
      },
      {
        title: "Giám đốc chất lượng ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Giám đốc chức năng.",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Chấp thuận rủi ro. ",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Chấp thuận rủi ro. ",
      },
      {
        title: "Chuyển giao rủi ro ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Giảm thiểu rủi ro",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 449,
    title:
      "Một công ty quyết định không cạnh tranh trong một gói thầu. Lý do được giám đốc đưa ra là cơ hội hoàn tất dự án trong khung thời gian dự định là rất mong manh. Đây là chiến lược giải quyết rủi ro nào?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 450,
    title:
      "Một giám đốc dự án công nghệ thông tin được lựa chọn cho dự án gói phần mềm với một thời hạn cuối cùng và các yêu cầu chất lượng cụ thể. Khách hàng nhấn mạnh một vài lần xem chất lượng phần mềm quan trọng như thế nào và họ đã giới hạn nhân viên hỗ trợ kỹ thuật. Giám đốc dự án công nghệ thông tin nhận thấy rằng chất lượng là vô cùng quan trọng. Hoạt động cơ bản nào của cơ cấu có thể được triển khai để đảm bảo rằng chất lượng chắc chắn đạt được nhất?",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Lập kế hoạch thành dự án ",
      },
      {
        title: "Xây dựng cơ cấu cẩn thận để kiểm tra chất lượng. ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Cố gắng để thực hiện công việc tốt nhất có thể. ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tiến hành các hoạt động xoay quanh chất lượng.",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 451,
    title: "Một giám đốc dự án thành công vừa là một giám đốc vừa là một: ",
    answers: [
      {
        isKey: false,
        title: "Chuyên gia về kỹ thuật",
        idx: 0,
      },
      {
        isKey: false,
        title: "Đối tượng liên quan dự án. ",
        idx: 1,
      },
      {
        title: "Nhà lãnh đạo. ",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Nhà tài trợ",
        idx: 3,
      },
    ],
  },
  {
    idx: 452,
    title: "Một nhiệm vụ của ban quản lý dự án là gì? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Cung cấp hỗ trợ quản lý dự án ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Cung cấp sự trợ giúp với việc hoàn tất các nhiệm vụ ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Cung cấp sự giám sát và chỉ đạo ",
        isKey: false,
      },
      {
        title: "Đưa ra phân tích lợi nhuận chi phí cho giám đốc dự án ",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Xem xét kỹ lưỡng ",
        isKey: false,
      },
      {
        idx: 1,
        title: "Phân tích xu hướng. ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kiểm định chất lượng",
      },
      {
        idx: 3,
        isKey: true,
        title: "Lập kế hoạch. ",
      },
    ],

    idx: 453,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một trong các quy trình nào sau đây là quan trọng nhất để đáp ứng các mục tiêu quản lý chất lượng? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Cho phép người phát triển triển khai gợi ý về phương pháp tiếp cận mới được đề xuất. ",
        idx: 0,
      },
      {
        title:
          "Nói với người phát triển rằng tham gia các chuẩn là điều bắt buộc và do đó các chuẩn hợp nhất phải được tuân theo. ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Tổ chức cuộc họp của người phát triển đội dự án để cho phép đội xác định liệu cách tiếp cận mới được giới thiệu có nên được chấp nhận đối với dự án hay không",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Gặp mặt với người chịu trách nhiệm về các chuẩn phát triển hợp nhất và với các chuyên gia về nội dung chuyên ngành để đạt được quyết định thay đổi chuẩn hoặc đạt được sự miễn chuẩn cho dự án",
      },
    ],
    idx: 454,

    title:
      "Một trong những người phát triển trong dự án của bạn bất đồng với các chuẩn phát triển hợp nhất hiện tại và tin tưởng rằng phương pháp tiếp cận nhiệm vụ khác tốt hơn. Bạn không có chuyên môn kỹ thuật để đưa ra ý kiến có giá trị về việc liệu người phát triển có phương pháp tiếp cận tốt hơn hay không. Bạn nên làm gì?",
  },
  {
    title: "Mục nào thể hiện mốc quan trọng? ",
    idx: 455,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Nhà tài trợ điều hành ký kết hoàn tất các yêu cầu ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tập hợp đội ngũ thành viên.",
      },
      {
        idx: 2,
        isKey: false,
        title: "Mua trang thiết bị cơ sở hạ tầngg",
      },
      {
        title: "Phần mềm đã hoàn tất việc kiểm thử chấp thuận người dùng. ",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nếu dự án của bạn có 5 đội ngũ thành viên thì bạn có bao nhiêu kênh truyền thông? ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "5 ",
      },
      {
        title: "6",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "10",
        idx: 2,
      },
      {
        title: "25",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 456,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Người điều hành cao cấp của công ty bạn muốn cập nhật lịch trình dự án hàng tháng. Bạn sẽ gửi cái nào sau đây cho người điều hành? ",
    answers: [
      {
        isKey: true,
        title: "Biểu đồ mốc quan trọng",
        idx: 0,
      },
      {
        idx: 1,
        title: "Lược đồ mạng theo tỉ lệ thời gian",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Lược đồ hoạt động mũi tên",
      },
      {
        idx: 3,
        isKey: false,
        title: "Biểu đồ PERT (Kỹ thuật duyệt và đánh giá chương trình). ",
      },
    ],
    idx: 457,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Thúc đẩy vấn đề trong tổ chức ",
        idx: 0,
      },
      {
        title: "Thúc đẩy vấn đề trong tổ chức",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Thêm những người mới vào đội để cân bằng khối lượng công việc. ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Làm việc với đội ngũ thành viên còn lại để đáp ứng các mục tiêu ",
      },
    ],

    title:
      "Người lãnh đạo của đội được thăng chức trở thành quyền giám đốc dự án trong khi giám đốc đang nghỉ việc riêng. Một vài đội ngũ thành viên khác không được nói về thay đổi tổ chức này và không muốn tham gia vào đội nữa. Giám đốc dự án đã nói với các đội ngũ thành viên này một vài lần và không giải quyết được vấn đề. Quyền giám đốc dự án nên làm gì tiếp theo? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 458,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Cả nguồn tài chính và kết quả dự án. ",
      },
      {
        title: "Không phải nguồn tài chính cũng không phải kết quả dự án. ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Nguồn tài chính chứ không phải kết quả. ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Kết quả dự án chứ không phải nguồn tài chính. ",
        isKey: false,
      },
    ],
    title: "Nhà tài trợ dự án chịu trách nhiệm về",

    idx: 459,
  },
  {
    answers: [
      {
        title: "Lập mô hình theo tham số ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Ước lượng tương tự.",
        isKey: true,
      },
      {
        isKey: false,
        title: "Ước lượng ngẫu nhiên",
        idx: 2,
      },
      {
        idx: 3,
        title: "Ước lượng dưới lên. ",
        isKey: false,
      },
    ],
    title:
      "Nhà tài trợ dự án đề nghị bạn chuẩn bị một ước tính chi phí cho dự án viễn thông. Có một lượng thông tin phạm vi chi tiết bị hạn chế. Tuy nhiên dự án tương tự như dự án đã được công ty bạn hoàn tất cách đây hai năm. Bạn nên sử dụng kỹ thuật ước lượng nào trong tình huống này?",
    idx: 460,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Chi phí nhiệm vụ. ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Khả năng về nguồn lực",
        isKey: true,
        idx: 1,
      },
      {
        title: "Thông tin lịch sử. ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Những người đi trước và người thành công ",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 461,
    title:
      "Nhân tố nào ảnh hưởng lớn nhất tới thời đoạn thực tế của các nhiệm vụ dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 462,
    title: "Nhiệm vụ cần thiết trong việc chuẩn bị ở giai đoạn hoàn thiện là",
    answers: [
      {
        title: "Duyệt dự án",
        idx: 0,
        isKey: false,
      },
      {
        title: "Đánh giá rủi ro. ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Kiểm soát thay đổi",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Quản lý cấu hình. ",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 463,
    title:
      "Như một bộ phận của định nghĩa phạm vi tổng thể và lập kế hoạch dự án trong giai đoạn khởi tạo của dự án, quy định dự án và bảng kê công việc yêu cầu giám đốc dự án phải: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title:
          " Nghiên cứu các quy định cụ thể của ngành về ảnh hưởng trong dự án ",
        idx: 0,
        isKey: true,
      },
      {
        title:
          "Đạt được sự nhất trí của đội ngũ thành viên về nhiệm vụ và thời đoạn ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xây dựng cấu trúc chi tiết công việc một cách chi tiết",
      },
      {
        idx: 3,
        title: "Tính đến các dự phòng cho những điều chưa biết",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Đưa nó cho quản lý cấp cao hơn.",
        idx: 0,
      },
      {
        title: "Tách vấn đề thành những vấn đề nhỏ theo lôgíc",
        idx: 1,
        isKey: true,
      },
      {
        title: "Đặt cơ sở lịch trình dự án",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thực hiện quản lý rủi ro. ",
      },
    ],
    title:
      "Những vấn đề còn tồn tại lâu dài đã bắt đầu dính líu và ảnh hưởng tới nhiều người, do đó tạo ra nhiều sự phụ thuộc. Giám đốc dự án tốt nhất nên xử lý tình huống này như thếnào? ",
    idx: 464,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 465,

    title:
      "Phạm vi của dự án vượt quá kinh phí bởi vì các mục được mua đắt hơn so với dự liệu ban đầu. Lượng dư thừa này sẽ vượt quá tổng kinh phí cho dự án. Giám đốc dự án nên làm gì?",
    answers: [
      {
        idx: 0,
        title: "Không thay đổi kinh phí",
        isKey: false,
      },
      {
        title: "Tiếp cận các đối tượng liên quan dự án để tăng kinh phí",
        idx: 1,
        isKey: true,
      },
      {
        title: "Giảm các chi phí phạm vi để không vượt quá kinh phí. ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Điều chỉnh các mục kinh phí để thu hút các chi phí vượt quá",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Phạm vi dự án do khách hàng yêu cầu sau khi chấp thuận thiết kế có khả năng ảnh hưởng tới một số thành phần của dự án. Điều gì sau đây là câu trả lời tốt nhất của giám đốc dự án?",
    idx: 466,
    answers: [
      {
        title: "Thuyết phục khách hàng hoãn thay đổi",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Ước tính ảnh hưởng tới chi phí và lịch trình và phê duyệt trước khi tiến hành",
        idx: 1,
      },
      {
        title:
          "Đưa ra những thay đổi then chốt bất chấp chi phí và ảnh hưởng của nó, đồng thời thông báo cho ban quản lý thay đổ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Thực hiện phân tích ảnh hưởng chi tiết tới chi phí và lịch trình, đồng thời triệu tập một cuộc họp đội dự án",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phản ứng giảm thiểu rủi ro",
      },
      {
        isKey: true,
        title: "Phản ứng nhanh",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Phản ứng hoạt động hiệu chỉnh",
      },
      {
        title: "Phản ứng dự phòng ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 467,
    title:
      "Phản ứng với sự kiện rủi ro không được xác định trước về việc xẩy ra của nó được gọi là:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Chất lượng của các phần có thể chuyển giao",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Số lượng đội ngũ thành viên. ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Những hạn chế về kinh phí. ",
        isKey: false,
      },
      {
        title: "Quy trình quản lý chưa được giải quyết. ",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 468,
    title:
      "Phần nào của tài liệu lập kế hoạch dự án được dùng để kiểm soát bùng phát phạm vi?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Phát biểu nào về kiểm thử chấp thuận người dùng là đúng? ",
    idx: 469,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Kiểm thử người dùng tạo cơ hội cho người dùng cải thiện nhu cầu của họ",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Kiểm thử người dùng nên chứng tỏ rằng hệ thống vận hành các yêu cầu đã được xác định. ",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Kiểm thử người dùng nên được thực hiện như một phần của giai đoạn đào tạo triển khai hệ thống. ",
      },
      {
        title:
          "Kiểm thử người dùng tạo cơ hội tốt để nhận biết các sai sót trong mã đã được xây dựng. ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Nhiệm vụ cần thiết trong việc chuẩn bị ở giai đoạn hoàn thiện là",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Duyệt dự án",
      },
      {
        isKey: false,
        title: "Đánh giá rủi ro. ",
        idx: 1,
      },
      {
        title: "Kiểm soát thay đổi",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Quản lý cấu hình. ",
      },
    ],
    idx: 470,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Các mốc quan trọng được xác lập trong kế hoạch và không nên xê dịch",
        isKey: false,
      },
      {
        title:
          "Mốc quan trọng là mục tiêu được xác lập lại bất cứ khi nào đường tới hạn dự án thay đổi.",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Dự án nên được lập kế hoạch tính đến các điểm quyết định làm hay không làm dựa vào và bắt đầu bằng việc hoàn tất các kết quả chuyển giao chính",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Hoàn tất giai đoạn phân tích hệ thống xác định nhiều yêu cầu hơn so với mong đợi ban đầu, không nên gây ra một số thay đổi tới kinh phí dự án.",
      },
    ],
    idx: 471,
    title:
      "Phát biểu nào mô tả cơ sở thực tế để xác lập và dự liệu mục tiêu dự án? ",
  },
  {
    title: "Phát biểu nào sau đây mô tả tốt nhất ước lượng dưới lên?",
    idx: 472,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Đó là phương pháp đơn giản nhất để ước tính chi phí trong một dự án với nhiều điểm tương đồng với các dự án thành công khác",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Nó đòi hỏi người lập kế hoạch phải sử dụng càng nhiều chi tiết càng tốt nhằm phân chia dự án thành các gói công việc đủ nhỏ để cho phép ước tính chi phí chính xác",
      },
      {
        title:
          "Nó có thể được mô tả bề ngoài trong Kỹ thuật duyệt và đánh giá chương trình hoặc sơ đồ Gantt. ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Nó đòi hỏi một hoạt động hay sự kiện riêng lẻ có sự phụ thuộc lẫn nhau đối với người tiền nhiệm, người thành công cũng như các hoạt động hay sự kiện song song",
      },
    ],
  },
  {
    idx: 473,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kế hoạch truyền thông.",
      },
      {
        isKey: false,
        idx: 1,
        title: "Kế hoạch quản lý thay đổi phạm vi. ",
      },
      {
        title: "Kế hoạch quản lý đội ngũ. ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Kế hoạch phát triển đào tạo",
        idx: 3,
      },
    ],
    title:
      "Phương pháp hiệu quả nhất trong việc xây dựng đội dự án trong tổ chức ma trận là tuân theo",
  },
  {
    answers: [
      {
        title: "Giải quyết vấn đề",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Ép buộc ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thoả hiệp",
      },
      {
        isKey: false,
        title: "Rút lui ",
        idx: 3,
      },
    ],

    title: "Phương pháp nào giải quyết xung đột hiệu quả? ",
    idx: 474,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Phương pháp nào là cách tiếp cận hiệu quả để xây dựng ước tính thời đoạn nhiệm vụ dự án? ",

    answers: [
      {
        title: "Ý kiến chuyên gia",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Kỹ thuật giá trị",
      },
      {
        idx: 2,
        title: "Ước lượng ngẫu nhiên",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Ước lượng trên xuống",
      },
    ],
    idx: 475,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Phương pháp thích hợp nhất để quyết định liệu rủi ro xác định có được cụ thể hoá hay không là gì?",
    answers: [
      {
        isKey: false,
        title: "Xây dựng kế hoạch quản lý rủi ro",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dùng phân tích độ nhạy cảm. ",
      },
      {
        isKey: true,
        title: "Xác định xem liệu dấu hiệu rủi ro có đạt được hay không",
        idx: 2,
      },
      {
        title: "Duyệt sổ ghi vấn đề.PQST ",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 476,
  },
  {
    answers: [
      {
        title: "Cải thiện liên tục",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Tăng cường kiểm tra xem xét",
      },
      {
        idx: 2,
        isKey: false,
        title: "Quản lý chất lượng thống kê",
      },
      {
        isKey: false,
        title: "Quy trình cấp chứng chỉ ISO 9000",
        idx: 3,
      },
    ],
    idx: 477,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Phương pháp tiếp cận để cải thiện chất lượng nào sau đây có khả năng tạo ra các kết quả tích cực ít nhất?",
  },
  {
    idx: 478,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Môi trường sản xuất sản phẩm",
      },
      {
        title: "Các nhiệm vụ đa chức năng",
        isKey: false,
        idx: 1,
      },
      {
        title: "Các hoạt động duy nhất",
        isKey: false,
        idx: 2,
      },
      {
        title: "Các phần có thể chuyển giao bị ràng buộc thời gian",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "111Quản lý dự án là phương pháp tiếp cận quản lý được ưa ưu tiên hơn ngoại trừ đối với",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 479,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Không liên quan tới ",
      },
      {
        title: "Là đầu vào ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Tương tự như ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Tích hợp với ",
        isKey: true,
      },
    ],
    title:
      "Quy trình để thay đổi điều khoản hợp đồng .............hệ thống quản lý thay đổi dự án.",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
    idx: 480,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Sản phẩm ",
      },
      {
        title: "Công cụ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chức năng ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Đầu vào ",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Tại sao giám đốc dự án cần có một nhà tài trợ điều hành? ",
    answers: [
      {
        isKey: false,
        title: "Để giữ đội dự án tập trung vào công việc",
        idx: 0,
      },
      {
        idx: 1,
        title: "Để cung cấp sự giúp đỡ bí mật với cam kết và hỗ trợ về tổ chức",
        isKey: true,
      },
      {
        isKey: false,
        title: "Để ký kết hoàn tất trong các yêu cầu người dùng",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Để đàm phán hợp đồng với các nhà cung cấp bên ngoài",
      },
    ],
    idx: 481,
  },
  {
    title: "Tại sao giám đốc dự án muốn tăng tốc dự án? ",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Rút ngắn thời đoạn dự án ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giảm bớt rủi ro dự án. ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Giảm các chi phí dự án ",
      },
      {
        title: "Tăng hiệu suất của đội. ",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 482,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Tại sao ký kết hoàn tất người sử dụng là một phần của kế hoạch quản lý chất lượng? ",

    idx: 483,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Để đảm bảo rằng dự án tuân theo mong muốn về ràng buộc kinh phí của người sử dụng ",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Để đảm bảo rằng dự án tuân theo mong muốn của người sử dụng bởi vì nó liên quan tới chất lượng sản phẩm",
        isKey: true,
      },
      {
        title:
          "Ký kết hoàn tất người sử dụng không phải là một phần của kế hoạch quản lý chất lượng",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Để đảm bảo rằng người sử dụng không đệ trình yêu cầu thay đổi muộn trong dự án. ",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Tại sao việc điều hoà chi phí cho các nhiệm vụ dự án theo ước tính so với chi phí thực lại ",
    idx: 484,
    answers: [
      {
        isKey: false,
        title: "Đó là một công cụ quản lý chất lượng",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Đó là phần phân tích biến động chi phí chủ yếu",
      },
      {
        isKey: false,
        title:
          "Nó cung cấp nguồn vào chủ yếu cho quy trình lập kế hoạch thu mua",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Nó tạo điều kiện thuận lợi cho việc lưu trữ thông tin lịch sử cho sơ đồ kế toán",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 485,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Biểu đồ luồng dữ liệu",
      },
      {
        title: "Tần số. ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "PERT (Kỹ thuật duyệt và đánh giá dự án). ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Thủ tục ký kết hoàn tất. ",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Thành phần nào là bộ phận của kế hoạch truyền thông hiệu quả? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 486,
    title:
      "Thông thường tài liệu được sửa đổi nhiều nhất trong các dự án là gì? ",
    answers: [
      {
        isKey: false,
        title: "Kế hoạch dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Sổ ghi vấn đề",
      },
      {
        isKey: false,
        title: "Tài liệu chấp thuận cuối cùng",
        idx: 2,
      },
      {
        title: "Sổ ghi yêu cầu thay đổi",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Tỉ lệ chi phí dự toán của việc đã thực hiện với chi phí dự toán của việc đã xếp lịch (BCWP/BCWS) được gọi là: ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 487,
    answers: [
      {
        title: "Tỉ lệ đường tới hạn (CR). ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Biến động chi phí (CV) ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Hiệu suất chi phí (CPI). ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Hiệu suất lịch trình (SPI). ",
        isKey: true,
      },
    ],
  },
  {
    title: "Tiêu chí nào là quan trọng để nhắc đến trong tài liệu phạm vi? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kinh phí",
      },
      {
        idx: 1,
        title: "Hoàn tất",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chất lượng",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lịch trình",
      },
    ],

    idx: 488,
  },
  {
    idx: 489,
    answers: [
      {
        title: "Bằng truyền thông miệng và viết",
        isKey: true,
        idx: 0,
      },
      {
        title: "Qua báo cáo trạng thái hàng tuần",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thông qua chuỗi yêu cầu chính thức",
      },
      {
        isKey: false,
        idx: 3,
        title: "Theo các hình thức mẫu được phê chuẩn",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong các dự án công nghệ thông tin, truyền thông giữa giám đốc dự án và đội ngũ thành viên dự án là hình thức",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Lập kế hoạch lại",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Duy trì",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Kiểm soát thay đổi phạm vi dự án mới",
      },
      {
        title: "Quản lý cấu hình",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 490,
    title:
      "Trong các giai đoạn lập kế hoạch, tiền cần phải được dự thảo ngân sách cho một trong những điều nào sau đây sau các nhiệm vụ hoàn thiện?",
  },
  {
    answers: [
      {
        title: "Trên xuống",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Dưới lên",
      },
      {
        title: "Kinh phí",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân bổ ngân sách",
      },
    ],
    idx: 491,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong các ước lượng dưới đây, ước lượng nào phản ánh chính xác nhất chi phí thựccủa dự án",
  },
  {
    idx: 492,
    title:
      "Trong cấu trúc tổ chức nào sau đây, giám đốc dự án có quyền lực ít nhất?",
    answers: [
      {
        idx: 0,
        title: "Tổ chức dự án",
        isKey: false,
      },
      {
        idx: 1,
        title: "Tổ chức ma trận mạng",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tổ chức ma trận yếu",
      },
      {
        idx: 3,
        title: "Tổ chức theo chức năng",
        isKey: true,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong khi tiến hành duyệt dự án hàng tuần, bạn nhận thấy rằng dự án đã chi tiêu quá khả năng. Bạn nên làm gì để xác định phạm vi đng chi tiêu nhiều hơn so với kinh phí dự toán?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 493,
    answers: [
      {
        title: "Tính toán tổng chi phí dự án (TCP)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Tính toán biến động chi phí (CV) cho từng phạm vi",
      },
      {
        title: "Tính toán biến động lịch trình (SV) cho từng phạm vi",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Kiểm tra biểu đồ Gantt và so sánh tiến trình của từng nhiệm vụ ",
      },
    ],
  },
  {
    idx: 494,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Ưu tiên lịch trình bằng nhau nhưng ưu tiên cao hơn chi phí",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Ưu tiên cao hơn chi phí và lịch trình",
      },
      {
        title: "Ưu tiên chi phí bằng nhau nhưng ưu tiên cao hơn lịch trình",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Ưu tiên chi phí và lịch trình bằng nhau",
        isKey: true,
      },
    ],
    title: "Trong một dự án thì thông thường chất lượng nên là của:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong quá trình triển khai nghiệp vụ điện tử, giám đốc dự án thông báo rằng các đội ngũ thành viên khác nhau không làm việc cùng nhau tốt. Vì thế nên dự án phải chịu sự trì hoãn rất lâu. Giám đốc dự án nên làm gì? ",

    idx: 495,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Xác định lại vai trò và trách nhiệm của đội ngũ thành viên",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Ngồi với các đội ngũ thành viên liên quan để thảo luận sự ảnh hưởng lẫn nhau giữa họ. ",
      },
      {
        isKey: false,
        title: "Thúc đẩy các đội ngũ thành viên hợp tác ",
        idx: 2,
      },
      {
        isKey: false,
        title: "Thưởng cho các đội ngũ thành viên làm việc cùng nhau tốt ",
        idx: 3,
      },
    ],
  },
  {
    idx: 496,
    title:
      "Trong số tất cả các xung đột có thể xẩy ra trong dự án thì xung đột nào là bất lợi nhất đối với kết quả và hiệu suất của đội? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Các xung đột trong hội đồng ",
      },
      {
        isKey: false,
        title: "Những mâu thuẫn cá nhân",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các thoả hiệp về kỹ thuật",
      },
      {
        isKey: false,
        title: "Xung đột lịch trình",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 497,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Tiếp tục cuộc họp muộn hơn thời gian theo lịch trình cho tới khi vấn đề được giải quyết",
      },
      {
        title:
          "Tiếp tục cuộc họp theo chính sách giải quyết xung đột của công ty",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Kết thúc cuộc họp đúng giờ, điều tra vấn đề một cách kỹ lưỡng và chú trọng vào vấn đề trong cuộc họp dự án hàng tuần tiếp theo",
      },
      {
        idx: 3,
        title:
          "Kết thúc cuộc họp đúng giờ và sắp xếp cuộc họp khác để giải quyết vấn đề",
        isKey: true,
      },
    ],

    title:
      "Trong suốt cuộc họp của đội dự án hàng tuần theo lịch trình, vấn đề nổi lên không thể giải quyết được trong khung thời gian của cuộc họp theo lịch trình. Nếu vấn đề này không được giải quyết thì nó có thể làm cho dự án bị tạm ngừng. Hoạt động nào tốt nhất mà giám đốc dự án nên tuân theo để giải quyết vấn đề này?",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Không để ý đến các rủi ro bất kỳ không nằm trên đường tới hạn",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Liệt kê tất cả các ràng buộc của dự án",
      },
      {
        isKey: true,
        title:
          "Phân tích khả năng mỗi rủi ro có thể xẩy ra và ảnh hưởng tiềm ẩn của từng rủi ro",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Sử dụng phương pháp luận kỹ thuật duyệt và đánh giá chương trình để ưu tiên rủi ro",
        idx: 3,
      },
    ],
    idx: 498,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong suốt giai đoạn xây dựng dự án, đội dự án đã xác định số lượng rủi ro có thể ảnh hưởng tới chất lượng của kết quả. Trước khi xây dựng kế hoạch phản ứng rủi ro, đội dự án nên:",
  },
  {
    title:
      "Trong suốt quá trình xây dựng dự án đã được phê duyệt, giám đốc dự án nhận thấy rằng phạm vi dự án không được xác định hợp lý, làm tăng lượng kinh phí đáng kể và trễ hạn các phần có thể chuyển giao. Giám đốc dự án yêu cầu một cuộc họp với các đối tượng liên quan dự án để thông báo cho họ về sự chênh lệch phạm vi theo yêu cầu.Giám đốc dự án nên tiếp cận tốt nhất biến động phạm vi cho dự án này như thế nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Chuẩn bị cấu trúc chi tiết công việc mới chỉ ra thời gian yêu cầu cho việc hoàn tất dự án và kinh phí theo yêu cầu mới",
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Thông báo cho các đối tượng liên quan dự án về sự thay đổi kinh phí và lịch trình theo yêu cầu, giảm bớt các chi phí phụ với một kế hoạch dự phòng đúng chỗ và nhận được sự phê duyệt bằng văn bản cho những thay đổi yêu cầu",
        isKey: true,
      },
      {
        title:
          "Thông báo cho các đối tượng liên quan dự án về thời gian và kinh phí theo yêu cầu cần để hoàn tất dự án cùng với các minh chứng về mặt tài chính như Phân tích giá trị thu được, ROI (Hoàn trả đầu tư) và biến động lịch trình",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Xác định biến động chi phí và lịch trình và đề nghị phê chuẩn những thay đổi theo yêu cầu. ",
        isKey: false,
      },
    ],
    idx: 499,
  },
  {
    answers: [
      {
        title: "Thời điểm nào đó yêu cầu thay đổi được xét duyệt",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Khi chi phí vượt quá độ biến động cho phép theo kinh phí",
      },
      {
        idx: 2,
        title: "Khi không có sự lựa chọn khả thi",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Khi khách hàng đồng ý thay đổi",
      },
    ],

    title:
      "Trong tình huống nào giám đốc dự án được yêu cầu phải gửi một yêu cầu thay đổi tới nhà tài trợ và các đối tượng liên quan dự án",
    idx: 500,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Vai trò của giám đốc dự án trong dự án là gì? ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cung cấp nguồn lực cho dự án",
      },
      {
        title: "Quản lý mối quan hệ giữa các thành viên trong đội",
        idx: 1,
        isKey: true,
      },
      {
        title: "Hoàn tất nhiệm vụ được giao",
        isKey: false,
        idx: 2,
      },
      {
        title: "Xác định toàn bộ ưu tiên của dự án trong tổ chức",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 501,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Cung cấp nguồn lực cho dự án",
        idx: 0,
      },
      {
        idx: 1,
        title: "Đề nghị những thay đổi yêu cầu",
        isKey: false,
      },
      {
        isKey: false,
        title: "Giải quyết các xung đột trong đội",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát kinh phí dự án",
      },
    ],
    title: "Vai trò của giám đốc đường lối trong kế hoạch dự án là gì?",
    idx: 502,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Việc giải quyết khuyết điểm diễn ra khi nào trong vòng đời dự án? ",
    idx: 503,
    answers: [
      {
        title: "Trước mỗi mốc quan trọng ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Sau cuộc kiểm thử chấp thuận sản phẩm diễn ra",
      },
      {
        idx: 2,
        isKey: false,
        title: "Ngay khi khuyết điểm được tìm ra",
      },
      {
        title:
          "Bất kỳ thời điểm nào trong suốt vòng đời dự án trước khi chuyển giao như đã được xác định trong kế hoạch dự án",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Bố trí nhân viên lãnh đạo và giá trị sẽ ảnh hưởng tới chất lượng của dự án công việc",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Tối ưu hoá chi phí hay đẩy nhanh chi phí trong đường tới hạn cao hơn so với chi phí cho bất kỳ hoạt động dự án khác nào",
        idx: 1,
        isKey: true,
      },
      {
        title:
          "Các hoạt động trên đường tới hạn không có bất kỳ thời gian khoảng trễ nào",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Ngày tháng bắt đầu phải được tính toán bằng cách thực hiện công việc ngược từ kết thúc rồi tới bắt đầu",
        isKey: false,
      },
    ],
    title:
      "Xác định và quản lý đường tới hạn là yếu tố sống còn đối với sự thành công của dự án bởi vì:",
    idx: 504,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Bỏ qua nó, nó sẽ biến mất",
        idx: 0,
      },
      {
        idx: 1,
        title: "Thông báo với sếp",
        isKey: false,
      },
      {
        title: "Cho khách hàng biết về điều đó và nói về các lựa chọn",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Gặp gỡ toàn đội và xác định cách thay thế",
        isKey: true,
      },
    ],
    idx: 505,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn nhận được thông báo rằng một thành phần trọng yếu bạn mua cho dự án của mình bị trễ. Điều tốt nhất nên làm là:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chu trình học tập",
      },
      {
        idx: 1,
        isKey: false,
        title: "Luật giảm dần",
      },
      {
        title: "Luật 80/20",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Ước lượng chi phí theo tham số",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 506,
    title:
      "Kinh nghiệm chỉ ra rằng mỗi khi bạn tăng gấp đôi việc sản xuất cửa, giá cho mỗi đơn vị giảm xuống theo phần trăm. Dựa vào điều này, công ty xác định rằng việc sản xuất 3000 cửa sẽ mất 21 000 USTrường hợp này mô tả:",
  },
  {
    idx: 507,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phân tích kiểm soát chất lượng",
      },
      {
        isKey: true,
        idx: 1,
        title: "Phân tích giới hạn",
      },
      {
        title: "Phân tích chuẩn chất lượng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Phân tích thích nghi",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Khái niệm của “ mức chất lượng tối ưu được đạt tới tại điểm mà sự gia tăng lợi nhuận từ việc cải thiện sản phẩm bằng với chi phí tăng để đảm bảo nó” được rút ra từ:",
  },
  {
    idx: 508,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Các yêu cầu thay đổi đã được đưa ra",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Các yêu cầu thay đổi đã xuất hiện",
      },
      {
        title:
          "Ước lượng chi phí và thời gian có thể được phát triển cho mỗi công việc tại mức chi tiết đó",
        idx: 2,
        isKey: true,
      },
      {
        title: "Mỗi công việc đã được liệt kê trong từ điển WBS",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Tiến trình phân rã các sản phẩm bàn giao thành các phần nhỏ hơn, mà dễ quản lý hơn được hoàn tất khi: ",
  },
  {
    title:
      "Trong một ma trận tổ chức, việc phổ biến thông tin có vẻ như là hiệu quả nhất khi:",
    idx: 509,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Luồng thông tin theo cả chiều dọc và ngang",
        isKey: true,
      },
      {
        idx: 1,
        title: "Luông thông tin được đơn giản hóa",
        isKey: false,
      },
      {
        idx: 2,
        title: "Có một logic gắn liền trong loại ma trận được lựa chọn",
        isKey: false,
      },
      {
        idx: 3,
        title: "Các quản lý dự án và quản lý chức năng công bố ",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Tại nhóm tiến trình quản lý dự án nào bản chi tiết kinh phí được đưa ra?",
    idx: 510,
    answers: [
      {
        idx: 0,
        title: "Initiating (khởi tạo)",
        isKey: false,
      },
      {
        title:
          "Before the project management process (trước tiến trình quản lý dự án)",
        idx: 1,
        isKey: false,
      },
      {
        title: "Planning (lên kế hoạch)",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Executing (thực thi)",
        idx: 3,
      },
    ],
  },
  {
    title: "Tôn chỉ dự án được tạo ra trong nhóm tiến trình nào?",
    idx: 511,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Executing",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Planning",
      },
      {
        isKey: false,
        title: "Closing (kết thúc dự án)",
        idx: 2,
      },
      {
        isKey: true,
        title: "Initiating",
        idx: 3,
      },
    ],
  },
  {
    title:
      "3.Đội dự án đã hoàn thành lập lịch khởi tạo và kinh phí, việc tiếp theo phải thực hiện là?",
    answers: [
      {
        idx: 0,
        title: "begin risk identification (tiến hành xác định rủi ro)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "begin interations (tiến hành lặp lại)",
      },
      {
        title:
          "determine communication requirements (xác định các yêu cầu truyền thông)",
        idx: 2,
        isKey: true,
      },
      {
        title: "create a bar (Grantt) chart (xây dựng bảng Grantt)",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 512,
  },
  {
    idx: 513,

    answers: [
      {
        idx: 0,
        title: "project budget (kinh phí dự án)",
        isKey: false,
      },
      {
        idx: 1,
        title: "WBS",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Project management plan (kế hoạch quản lý dự án)",
      },
      {
        isKey: false,
        idx: 3,
        title: "Detailed risk assessment (đánh giá chi tiết rủi ro)",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bản lập lịch chi tiết cho dự án chỉ được thực hiện sau khi hoàn thành cái gì sau đây?",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "PM",
      },
      {
        title: "Team member ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Fuctional manager (quản lý chức năng)",
      },
      {
        title: "Sponsor (nhà tài trợ)",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 514,
    title:
      "Người điều khiển dự án trong quá trình lập kế hoạch quản lý dự án là?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 515,
    title:
      "Điều nào sau đây KHÔNG phải là đầu vào cho nhóm tiến trình khởi tạo?",
    answers: [
      {
        title: "company processes ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "the company culture",
      },
      {
        title: "historical WBSs (các WBS trước đó)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "project scope statement (báo cáo phạm vi dự án)",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "begin to complete work packages (bắt đầu hoàn thành các gói công việc)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "complete scope verification (hoàn thành thẩm tra phạm vi)",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "start itegration change control (bắt đầu kiểm soát thay đổi tích hợp)",
      },
      {
        isKey: false,
        title:
          "Start to create management plans (bắt đầu xây dựng các kế hoạch quản lý)",
        idx: 3,
      },
    ],
    title:
      "Nhà tài trợ dự án vừa đưa ra bản báo cáo sơ bộ về phạm vi dự án, việc tiếp theo phải thực hiện là?",

    idx: 516,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 517,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "initiating",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "planning",
        idx: 1,
      },
      {
        isKey: false,
        title: "executing",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "monitoring and controlling (giám sát và kiểm soát)",
      },
    ],
    title:
      "Những ràng buộc lập lịch cấp cao vừa được xác định, vậy bạn đang ở trong nhóm tiến trình nào?",
  },
  {
    answers: [
      {
        title:
          "understand the experience ò the sponsor on similar projects (hiểu về kinh nghiệm của nhà tài trợ trong những dự án tương tự)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "create an activity list (xây dựng bảng hoạt động)",
      },
      {
        idx: 2,
        title:
          "make sure the project scope í defined (chắc chắn rằng phạm vi dự án đã được xác định)",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "complete risk management and issue the responsibility assignment matrix (hoàn thành quản lý rủi ro và phát hành ma trận gán trách nhiệm)",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "WBS và WBS dictionary đã được hoàn thành. Đội dự án đang bắt tay vào xác định các rủi ro. Nhà tài trợ liên hệ với giám đốc dự án, yêu cầu phải có ma trậm gán trách nhiệm. dự án có ngân sách là 100.000 đô na và đặt tại 3 quốc gia với nhân số 14 người. Có một số rủi ro được dự đoán đối với dự án này và giám đốc dự án đã quản lý rất nhiều dự án tương tự. Điều tiếp theo nên làm là?",
    idx: 518,
  },
  {
    answers: [
      {
        isKey: true,
        title:
          "Đảm bảo rằng bạn đã hoàn thành bản báo cáo phạm vi dự án sơ bộ và sau đó bắt đầu làm WBS",
        idx: 0,
      },
      {
        title: "tạo một danh sách hoạt động trước khi tạo một sơ đồ network",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "lập tài liệu về tất cả các rủi ro đã biết trước khi lập tài liệu về các giả tưởng ở mức cao",
      },
      {
        idx: 3,
        title:
          "D.hoàn tất kế hoạch quản lý chất lượng trước khi xác định ma trận chất lượng",
        isKey: false,
      },
    ],
    title:
      "Giám đốc dự án không có nhiều thời gian dành cho việc lên kế hoạch trước ngày bắt đầu dự án (cố định, bắt buộc). bởi vậy anh ta muốn thực hiện giai đoạn lên kế hoạch một cách hiệu quả nhất có thể. Điều nào sau đây nên được thực hiện?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 519,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Những ràng buộc lập lịch cấp cao vừa được xác định, vậy bạn đang ở trong nhóm tiến trình nào?",
    idx: 520,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "initiating",
      },
      {
        isKey: false,
        idx: 1,
        title: "planning",
      },
      {
        isKey: false,
        idx: 2,
        title: "executing",
      },
      {
        idx: 3,
        isKey: false,
        title: "monitoring and controlling (giám sát và kiểm soát)",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "planning",
      },
      {
        idx: 1,
        isKey: false,
        title: "executing ",
      },
      {
        title: "monitoring and controlling",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "closing (giám sát và kiểm soát)",
        isKey: true,
      },
    ],
    idx: 521,
    title:
      "Giám đốc dự án chắc chắn rằng sản phẩn của dự án đã được hoàn thành theo như bản kế hoạch quản lý dự án. Vậy anh ta đang ở trong giai đoạn nào của tiến trình quản lý dự án?",
  },
  {
    answers: [
      {
        title: "initiating",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "executing",
      },
      {
        isKey: false,
        title: "monitoring and controlling",
        idx: 2,
      },
      {
        isKey: false,
        title: "closing (giám sát và kiểm soát)",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 522,

    title:
      "Giám đốc dự án nhận được 1 cuộc gọi từ một thành viên đội, lưu ý anh ra rằng có mâu thuẫn giữa tốc độ của hệ thống trong dự án và tốc độ mong muốn (hoặc tốc độ đề ra). Nếu giám đốc dự án sau đó đánh giá xem mâu thuẫn đó có cần phải đối phó hay không, thì anh ta đang ở trong pha nào của tiến trình quản lý dự án?",
  },
  {
    idx: 523,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "corrective action",
      },
      {
        title: "integrated change control",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "monitoring and controlling",
        idx: 2,
      },
      {
        title: "project closing",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một thanh viên đội dự án lưu ý PM rằng các hoạt động bao gồm một gói công việc là không còn phù hợp. vậy tốt nhất PM nên thuộc phần nào của tiến trình quản lý dự án?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong cuộc họp đội dự án, một thành viên hỏi về phép đo sẽ được sử dụng cho việc đánh giá hiệu năng dự án. Thành viên này cảm thấy một số phương pháp liên quan tới các hoạt động mà anh ta được giao là không đúng. Pha tốt nhất mà dự án nên ở vào lúc này là?",
    answers: [
      {
        title: "closing",
        isKey: false,
        idx: 0,
      },
      {
        title: "planning",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "executing",
        isKey: true,
      },
      {
        title: "initiating",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 524,
  },
  {
    answers: [
      {
        title:
          "the project manager did not get buy-in from the manager for the resources on the project",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "the project did not create and adequate reward system for team members to improve their cooperation ",
        idx: 1,
      },
      {
        isKey: false,
        title:
          "the project manager should have had a meeting with the team member’s boss the first time the team member caused trouble.",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "The project manager does not have work packages.",
      },
    ],
    idx: 525,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong quá trình hoàn thành các gói công việc, nhà tài trợ yêu cầu PM báo cáo về tiến độ dự án. Để chuẩn bị cho bản báo cáo, PM yêu cầu các thành viên thông báo lại phần trăm hoàn thành công việc của họ. Trong đội có một thành viên “khó bảo”. Trả lời lại yêu cầu của PM, anh ta hỏi lại: “Phần trăm hoàn thành của cái gì cơ?”. Mệt mỏi với những câu kiểu như vậy, PM báo cáo lại với sếp của thành viên đó rằng anh ta có thái độ hợp tác. Điều nào sau đây mới là vấn đề thực sự?",
  },
  {
    answers: [
      {
        title: "Sản phẩm ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Công cụ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Chức năng ",
        isKey: false,
      },
      {
        title: "Đầu vào ",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 526,
    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "A.Quá trình phát triển của cá nhân từng thành viên trong đội ",
        isKey: false,
        idx: 0,
      },
      {
        title: "B.Cập nhật đúng lúc về kế hoạch quản lý dự án",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "C.Hiệu quả truyền thông tại key interface points",
      },
      {
        isKey: true,
        title: "D.Kiểm soát sản phẩm",
        idx: 3,
      },
    ],
    idx: 527,
    title: "Tích hợp dự án hiệu quả thường đòi hỏi một yếu tố quan trọng sau:",
  },
  {
    title: "Vấn đề về .... là 1 vấn đề chính cho truyền thông trong 1 dự án",
    idx: 528,
    answers: [
      {
        title: "A.Tối ưu hóa (optimization)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "B.Nhất quán (integrity)",
      },
      {
        title: "C.Tích hợp (integration)",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "D.Sự khác biệt (differentiation)",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Vấn đề nào dưới đây mô tả tốt nhất việc sử dụng các tài liệu lịch sử từ các dự án trước",

    idx: 529,
    answers: [
      {
        isKey: false,
        title: "A.Ước lượng, chi phí vòng đời và kế hoạch dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "B.Quản lý rủi ro, ước lượng và khởi tạo các buổi training",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "C.Kế hoạch quản lý dự án, ước luợng và khởi tạo 1 bản báo cáo trạng thái",
      },
      {
        title: "D.Ước lượng, quản lý rủi ro và kế hoạch dự án",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 530,
    answers: [
      {
        title: "A.Thực hiện thay đổi ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "B.Theo dõi và ghi lại thay đổi",
      },
      {
        idx: 2,
        title: "C.Thông báo cho nhà tài trợ về những thay đổi ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "D.Ngăn chặn những thay đổi không cần thiết",
      },
    ],

    title: "Khi có sự thay đổi, người PM cần chú ý tới:",
  },
  {
    idx: 531,
    title: "Vai trò của nhà tài trợ trong 1 dự án là:",
    answers: [
      {
        isKey: false,
        title: "A.Giúp thực thi kế hoạch dự án",
        idx: 0,
      },
      {
        title:
          "B.Giúp ngăn chặn những thay đổi không cần thiết để thực thi dự án",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "C.Xác định những ràng buộc không cần thiết của dự án",
      },
      {
        title: "D.Góp phần đưa ra kế hoạch quản lý dự án cuối cùng",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Tất cả những yếu tố sau đây là những phần của 1 hệ thống điều khiển kiếm soát thay đổi:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "A.Phương pháp (Procedures)",
      },
      {
        isKey: false,
        title: "B.Tiêu chuẩn về báo cáo ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "C.Meetings ",
      },
      {
        isKey: true,
        title: "D.Các buổi training (Lessons learned)",
        idx: 3,
      },
    ],
    idx: 532,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Một hệ thống ủy quyền có thể được:",
    answers: [
      {
        idx: 0,
        title: "A.Quản lý người mà làm từng hoạt động",
        isKey: false,
      },
      {
        title: "B.Quản lý thời gian và quản lý chuỗi các công việc",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "C.Quản lý khi từng hoạt động hoàn thành",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "D.Quản lý người làm từng hoạt động và khi hoạt động hoàn thành.",
        idx: 3,
      },
    ],

    idx: 533,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án bị cản trở bời những thay đổi tới điều lệ dự án. Người mà có trách nhiệm quyết định xem những thay đổi này là cần thiết không?",
    idx: 534,

    answers: [
      {
        title: "A.Project manager",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "B.Trưởng nhóm",
        isKey: false,
      },
      {
        title: "C.Nhà tài trợ",
        idx: 2,
        isKey: true,
      },
      {
        title: "D.Các bên liên quan (stakeholders) ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title: "Tích hợp là công việc của: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 535,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "A.PM",
      },
      {
        idx: 1,
        title: "B.Trưởng nhóm",
        isKey: false,
      },
      {
        idx: 2,
        title: "C.Nhà tài trợ ",
        isKey: false,
      },
      {
        title: "D.Các bên liên quan (stakeholders)",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Những vấn nào sau đây mô tả chính xác nhất vai trò của PM trong việc tích hơp?",
    idx: 536,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "A.Giúp thành viên trong đội trở thành 1 gia đình",
      },
      {
        isKey: true,
        title: "B.Gộp tất cả các phần của dự án thành 1 thể liên kết",
        idx: 1,
      },
      {
        isKey: false,
        title: "C.Gộp tất cả các phần của dự án thành 1 chương trình",
        idx: 2,
      },
      {
        title: "D.Họp mặt tất cả các thành viên tạo sự dính kết",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "A.Điều khiển phạm vi và xác minh phạm vi",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          "B.Chỉ đạo, quản lý thực hiện dự án và kiểm soát sự thay đổi tích hợp",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "C.Phát triển kế hoạch quản lý dự án và phát triển điều lệ dự án",
      },
      {
        title: "D.Phát triển ké hoạch quản lý dự án và lược đồ phát triển",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 537,
    title: "Các công việc chấp thuận thay đổi là 1 đầu vào:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 538,
    title:
      "Bạn là 1 PM mới mà trước đây chưa bao giờ bạn quản lý 1 dự án nào. Bạn đã được yêu cầu lên kế hoạch 1 dự án mới. Điều gì là tốt nhất trong tình hình này dựa vào ______ quá trình lập kế hoạch để cải thiện cơ hội thành công",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "A.Sự hiểu biết và training của bạn ",
      },
      {
        idx: 1,
        isKey: false,
        title: "B.Phân tích các bên liên quan",
      },
      {
        title: "C.Thông tin về lịch sử",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "D.Quản lý cấu hình",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Vấn đề gì là tốt nhất mô tả 1 kế hoạch quản lý dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "A.Dữ liệu đưa ra từ quản lý dự án phần mềm",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "B.Một biểu đồ",
      },
      {
        idx: 2,
        title: "C.Kế hoạch quản lý rủi ro, tiến trình, một số kế hoạch khác...",
        isKey: true,
      },
      {
        idx: 3,
        title: "D.Phạm vi dự án",
        isKey: false,
      },
    ],
    idx: 539,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Gặp gỡ bên liên quan ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Gặp gỡ đội",
      },
      {
        title: "Thương lượng các phần còn lại của hợp đồng",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Theo dõi hệ thống kiếm soát thay đổi",
      },
    ],

    title:
      "Một PM quản lí một hợp đồng giá cố định. Cố ấy nghĩ rằng đây là một khách hàng lớn- các yêu cầu thay đổi có thể ảnh hưởng tới kế hoạch của dự án. Cô ấy nên làm điều gì đầu tiên? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 540,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Thay đổi thành phần A từ thành phần B. Thành phần A có giá khá cao cho việc mua bán, nhưng lại có giá các vòng đời thấp hơn B",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Thay đổi công việc A hoàn thiện bởi tài nguyên B thay vì tài nguyên C. Tài nguyên B có nhân viên kinh nghiệm hơn",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Các công việc B và H xảy ra đồng thời, và chấp nhận rủi ro tăng lên 30%.",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Loại bỏ test khỏi kế hoạch quản lí dự án",
      },
    ],
    idx: 541,

    title:
      "Khi hoàn thành xong một dự án, PM nhận thấy rằng a ấy cần giảm bớt chi phí của dự án. Sau khi xem xét các lựa chọn của anh ấy, a ấy quyết định đưa ra các lựa chọn sau. Với sự lựa chọn nào làm giảm bớt chi phí của dự án?",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Liên hệ với các bộ phận và phàn nàn một lần nữa về thời hạn báo cáo phạm vi",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Tìm cách thay đổi kế hoạch sẽ làm thay đổi giá để hoàn thành gói công việc và chất lượng của sản phẩm của gói công việc",
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Nếu có cách thay đổi từ môi trường ma trận sang tổ chức chức năng sẽ làm giảm bớt sự trở ngại từ các bộ phận khác",
        idx: 2,
      },
      {
        idx: 3,
        title: "Yêu cầu các bộ phận nếu họ có bất kì sự thay đổi nào khác",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án này là điều lệ để xác định cách thức mới để kéo dài tuổi thọ sản phẩm của một trong những công ty vừa - sản xuất sản phẩm. PM này được đưa ra từ bộ phận kỹ thuật và đội đến từ quản lý sản phẩm, các ngành Maketing. Các dự án báo cáo sơ bộ phạm vi và quy hoạch của dự án được hoàn thành khi các bên liên quan thông báo cho đội rằng đó là cách tốt đển hoàn thành một gói công việc. Họ thậm chí còn cung cấp một văn bản đánh giá kỹ thuật từ bộ phận của họ chứng minh rằng cách mới để hoàn thành các gói công việc thực sự sẽ được nhanh hơn so với cách cũ. Người quản lí có kinh nghiệm tương đương với các bộ phận khác của anh ấy trong những dự án khác, và mong điều này diễn ra trong dự án lần này. PM nên làm điều gì đầu tiên",

    idx: 542,
  },
  {
    title:
      "Kết thúc hợp đồng cũng tương tự như kết thúc quản lí tại nơi nào mà chúng đều liên quan tới:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 543,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Xác minh sản phẩm",
      },
      {
        idx: 1,
        title: "kickhôngff meeting",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Họat động đảm bảo chất lượng",
      },
      {
        idx: 3,
        isKey: false,
        title: "Lập kế hoạch xác định phạm vi",
      },
    ],
  },
  {
    idx: 544,

    title: "Đầu ra của kết thúc quản lý được tạo bởi",
    answers: [
      {
        isKey: true,
        title: "Lưu trữ dự án",
        idx: 0,
      },
      {
        idx: 1,
        title: "Các điều lệ của dự án",
        isKey: false,
      },
      {
        title: "Kế hoạch quản lí dự án",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Kế hoạch phân tích rủi ro",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Các điều nào sẽ xảy ra trong suốt quá trình đóng dự án EXCEPT",
    answers: [
      {
        idx: 0,
        title: "Đưa ra các bài học kinh nghiệm",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sự thừa nhận chính thức.",
      },
      {
        title: "Giảm sử dụng tài nguyên",
        idx: 2,
        isKey: false,
      },
      {
        title: "Thực hiện việc phân tích chi phí có lợi ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 545,
  },
  {
    answers: [
      {
        title:
          "Phạm vi dự án hoàn thiện, kết thúc quản lý và nhận được thanh toán",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Chính thức thừa nhận, và các yêu cầu khác đối với dự án kết thúc như trong hợp đồng được đáp ứng",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Khách hàng hài lòng và cuối cùng nhận được thanh toán",
      },
      {
        idx: 3,
        isKey: false,
        title: "Hoàn thành các bài học kinh nghiệm",
      },
    ],
    idx: 546,
    title: "Một dự án chưa được hoàn thiện cho đến khi:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 547,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Một bữa tiệc cho các thành viên. ",
        idx: 0,
      },
      {
        isKey: false,
        title: "Chắc chắn rằng dự án này được tích hợp với các dự án khác",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bắt đầu tập trung vào các dự án khác của bạn",
      },
      {
        isKey: true,
        title: "Phân tích thành công hay thất bại của dự án",
        idx: 3,
      },
    ],

    title:
      "Bạn đã làm việc trong một dự án phát triển phần mềm rất lớn, nó cần tới hơn 230 người. Cuối cùng, tất cả các phạm vi đã thực hiện xong, nó sẽ tốt cho:",
  },
  {
    answers: [
      {
        title: "Xác định những rủi ro",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Ước lượng các gói công việc.",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Ước lượng chi tiết tài nguyên",
      },
      {
        isKey: true,
        title: "Các nhu cầu kinh doanh của dự án.",
        idx: 3,
      },
    ],
    idx: 548,

    title: "Điều nào sau đây bao gồm các điều lệ dự án",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 549,
    answers: [
      {
        title: "Nó mô tả chi tiết những điều gì cần phải làm",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Nó đưa ra một danh sách gồm các thành viên của đội",
      },
      {
        title: "Nó cung cấp cho cơ quan của PM đó",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Nó mô tả lịch sử của dự án",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang cố gắng thuyết phục quản lí sử dụng quản lí dự án và đã quyết định cải thiện quản lý dự án của công ty bằng cách đạt được một điều lệ dự án. Với điều nào sau đây mô tả tại sao điều lệ dự án có thể giúp người PM đó: ",
  },
  {
    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 550,
    answers: [
      {
        title: "Sản phẩm ",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Công cụ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chức năng ",
      },
      {
        title: "Đầu vào ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Hạn chế tối ưu hóa",
        isKey: true,
      },
      {
        title: "Gần như tương đối",
        idx: 1,
        isKey: false,
      },
      {
        title: "Phép đo có lợi",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Phân tích các tác động",
        idx: 3,
      },
    ],

    title:
      "Các dòng chương trình là một ví dụ loại nào của tiêu chuẩn lựa chọn dự án:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 551,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Cài đặt một quá trình điều khiển thay đổi phối hợp",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title:
          "Chỉ cho người quản lí của bạn thấy sự tác động của hành động mà không được tán thành.",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tập trung vào hoàn thành dự án mà có dấu hiệu điều lệ dự án",
      },
      {
        title: "Làm việc trên những điểm tích cực của sự phê bình đó",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Bạn đã tạo các điều lệ dự án nhưng lại không được tán thành. Người quản lí bạn và cấp trên của anh ấy yêu cầu dự án phải bắt đầu ngay lập tức. Điều nào sau đây là tốt nhất để làm",
    idx: 552,
  },
  {
    answers: [
      {
        title: "Xác minh phạm vi",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Kế hoạch đáp trả rủi ro",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kế hoạch quản lí các bộ phận",
      },
      {
        isKey: true,
        idx: 3,
        title: "Bài học kinh nghiệm",
      },
    ],
    idx: 553,
    title:
      "Các công việc chuyên môn đã hoàn thành xong. Những phần nào cần hoàn thành",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Một hế thống số WBS cho phép các nhân viên dự án.",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tính toán chi phí của các phần tử trong WBS",
      },
      {
        title: "Cung cấp việc chỉnh sửa dự án",
        idx: 1,
        isKey: false,
      },
      {
        title: "Xác định các mức cái mà các phần từ được tìm thấy",
        idx: 2,
        isKey: true,
      },
      {
        title: "Sử dụng nó trong quản lý phần mềm",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 554,
  },
  {
    title: "WBS có thể được sử dụng hiệu quả nhất với:",
    answers: [
      {
        title: "Đội",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Quản lý dự án",
      },
      {
        isKey: false,
        title: "Khách hàng",
        idx: 2,
      },
      {
        isKey: true,
        title: "Các bên liên quan",
        idx: 3,
      },
    ],
    idx: 555,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Thuộc tính khóa trong việc đánh giá phạm vi.",
    idx: 556,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Việc hoàn thành kế hoạch phạm vi dự án",
        idx: 0,
        isKey: false,
      },
      {
        title: "Khách hàng chấp nhận các sản phẩm bàn giao của dự án",
        idx: 1,
        isKey: true,
      },
      {
        title: "Cải tiến việc đánh giá lập lịch",
        idx: 2,
        isKey: false,
      },
      {
        title: "Cải tiến hệ thống thông tin quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Trong suốt giai doạn thực thi của dự án 1 thành viên của đội dự án đến gặp PM, bởi vì anh ấy không chắc về công việc mà mình phải làm để hoàn thành dự án. Tài liệu nào chứa chi tiết về mô tả công việc",
    answers: [
      {
        title: "Tài liệu WBS",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Danh sách các hoạt động",
        idx: 1,
      },
      {
        isKey: false,
        title: "Phát biểu phạm vi dư án",
        idx: 2,
      },
      {
        idx: 3,
        title: "Kế hoạch quản lý phạm vi dự án",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 557,
  },
  {
    idx: 558,

    title:
      "Phát biểu phạm vi dự án được tạo ỏ trong tiến trình nào của quản lý dự án",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Khởi tạo",
      },
      {
        title: "Lập kế hoạch",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Thực thi",
        idx: 2,
      },
      {
        idx: 3,
        title: "Giám sát và quản lý",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một chương trình được lên kế hoạch từ năm trước Và có giới thiệu 1 công nghệ mới đồ sộ. Trong khi lên kế hoạch thực hiện dự án tiếp theo để bắt đầu chương trình này .PM đã mở rộng kế hoạch quản lý phạm vi dự án bởi vì dự án đó trở nên phức tạp, mức độ không chắc chắn trong dự án:",
    answers: [
      {
        title: "Được giữ nguyên như cũ",
        idx: 0,
        isKey: true,
      },
      {
        title: "Giảm",
        idx: 1,
        isKey: false,
      },
      {
        title: "Giảm sau đó tăng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Tăng",
        idx: 3,
      },
    ],
    idx: 559,
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Nhà tài trợ vạch ra kế hoạch quản lý dự án dựa trên đầu vào từ người quản lý dự án",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Quản lý chức năng được tạo ra trong kế hoạch quản lý dự án dựa trên đầu vào từ người quản lý dự án",
      },
      {
        isKey: false,
        title:
          "Quản lý dự án tạo ra kế hoạch quản lý dự án dựa trên đầu vào từ ngượi quản lý cấp cao hơn",
        idx: 2,
      },
      {
        title:
          "Quản lý dự án tạo ra kế hoạch quản lý dự án dựa trên đầu vào là từ đội dự án",
        isKey: true,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 560,
    title:
      "Kế hoạch quản lý dự án nên bị hiện thực trong việc quản lý dự án. Phương pháp nào sau đây để đạt được tính hiện thực trong việc quản lý dự án",
  },
  {
    idx: 561,

    title:
      "Một người quản lý dự án mới đang được cố vấn bởi 1 chuyên gia có nhiều năm kinh nghiệm trong việc quản lý dự án(PMP). Người quản lý dự án nhận thấy thật khó khăn để có đủ thời gian trong việc quản lý dự án bởi vì sản phẩm và phạm vi của dự án thì đang được chi tiết hóa. Sự cố vấn của PMP cái mà là công cụ cơ bản cho việc quản lý dự án, như là cấu trúc phân rã công việc, có thể sử dụng trong suốt quá trình thực thi dự án để hỗ trợ dự án. Theo như trên thì khi nào WBS được sử dụng?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Giao tiếp với khách hàng ",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Chỉ ra ngày thực hiện cho mỗi gói công việc",
      },
      {
        idx: 2,
        isKey: false,
        title: "Chỉ ra các chức năng quản lý cho mỗi thành viên của đội dự án",
      },
      {
        idx: 3,
        isKey: false,
        title: "Chỉ ra nghiệp vụ cần thiết cho dự án",
      },
    ],
  },
  {
    answers: [
      {
        title: "Tiến trình quản lý thay đổi",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Quản lý phạm vi",
      },
      {
        idx: 2,
        title: "Phân tích chất lượng",
        isKey: false,
      },
      {
        idx: 3,
        title: "Phân rã phạm vi",
        isKey: false,
      },
    ],

    title:
      "Trong suốt cuộc họp của đội dự án, 1 thành viên của đội đề nghị mở rộng phạm vi dự án cái mà dựa trên phạm vị trong tôn chỉ của dự án. Đầu ra của quản lý dự án cái mà đội dự án cần tập trung để hoàn thành tất cả công việc và chỉ các công việc yêu cầu. Đó là ví dụ của",
    idx: 562,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 563,
    title: "Khi nào sự kiểm tra phạm vi dự án nên được hoàn thành?",
    answers: [
      {
        title: "Cuối của dự án",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Bắt đầu dự án",
      },
      {
        idx: 2,
        title: "Cuối mỗi pha của dự án",
        isKey: true,
      },
      {
        idx: 3,
        title: "Trong suốt tiến trình lập kế hoạch",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một dự án thì gần như đã hoàn thành xong.Dự án không đúng với tiến độ 300(đơn vị thời gian) và không đúng với chi phí là 900(đơn vị chi phí).Nhưng một trong những kiểm tra quản lý chất lượng đã hoàn thành và những yêu cầu về chất lượng của các thành phần đã được đáp ứng.Tất cả chất lượng trong bản ghi chất lượng đã được giải quyết.Nhà tài trợ gọi để chuẩn bị 1 cuộc họp xác minh sản phẩm khi khách hàng thông báo muốn thực hiện 1 thay đổi lớn trong phạm vi dự án.Việc nên làm:",
    idx: 564,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Cần nhóm họp với nhóm dự án để xem sự thay đổi có thể được thực hiện không",
      },
      {
        title: "Yêu cầu khách hàng đưa ra 1 miêu tả về sự thay đổi",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Giải thích cho khách hàng rằng thay đổi không thể được thực hiện tại thời điểm này trong quá trình này",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Báo tin cho người quản lý",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Nói cho họ biết rằng nó sẽ ngăn chặn việc vượt qua của crack",
      },
      {
        title: "Nói cho họ rằng nó không cần thiết",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Nói cho họ răng nó cần thiết nếu dự án có liên quan đến hợp đồng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Nói cho họ biết đó là cách duy nhất để xác định rủi ro",
        isKey: false,
      },
    ],

    title:
      "Bạn vừa tham gia văn phòng quản lý dự án sau 5 năm làm việc trong các dự án.một trong nhưng điều bạn muốn giới thiệu với công ty của bạn là cần phải làm các WBS.Một vài người PM đang tức giận mà bạn yêu cầu họ làm thêm WBS.Việc nào sau đây là tốt nhất để nói cho các PM để thuyết phục họ sử dụng WBS",
    idx: 565,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một quản lý dự án mới yêu cầu bạn cho lời khuyên về việc tạo 1 WBS.Sau khi bạn giải thích các quá trình với ông ấy,ông ấy yêu câu bạn những phần mềm nào ông ấy nên sử dụng để tạo WBS và ông ấy cần làm gì khi hoàn thành việc tạo nó.Bạn nên trả lời đó không phải những miêu tả về kết quả của việc tạo 1 vWBS. Mà đó là:",

    idx: 566,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "A bar char",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Team buy in",
      },
      {
        idx: 2,
        isKey: false,
        title: "Các hoạt động ",
      },
      {
        isKey: false,
        title: "Danh sách các rủi ro",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cho đến khi có 1 kết luận có ý nghĩ ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Cho đến khi nó không thể chia nhỏ hơn nữa",
      },
      {
        title: "Cho đến khi nó có thể được thực hiện bởi 1 người",
        isKey: true,
        idx: 2,
      },
      {
        title: "Cho đến khi nó có thể ước lượng thực tế",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Để quản lý 1 dự án có hiệu quả,công việc nên được chia ra thành các cặp nhỏ.những điều nào sau đây không miêu tả chia nhỏ công việc đến khi nào:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 567,
  },
  {
    title:
      "Một người quản lý dự án có thể sử dụng……………để đảm bảo rằng đội dự án biết rõ nhưng công việc gì nằm trong các gói công việc của từng người",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 568,

    answers: [
      {
        title: "Tuyên bố phạm vi dự án",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Phạm vi sản phẩm",
      },
      {
        isKey: true,
        title: "Từ điển WBS",
        idx: 2,
      },
      {
        title: "Một lịch trình",
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
        title: "Tạo 1 tuyên bố về phạm vi dự án",
      },
      {
        title:
          "Xác nhận rằng tất cả các bên liên quan đã có đầu vào nằm trong phạm vi dự án",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Phân tích rủi ro dự án",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Bắt đầu công việc với 1 kế hoạch quản lý dự án",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 569,

    title:
      "Một người quản lý dự án được giao 1 dự án mới và được báo cáo sơ bộ phạm vi dự án và project charter.Điểu đàu tiên người PM cần phải làm là :",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 570,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Xác định phạm vi",
      },
      {
        idx: 1,
        title: "Kiểm soát chất lượng",
        isKey: false,
      },
      {
        isKey: false,
        title: "Báo cáo hiệu suất",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Kiểm soát chi phí",
      },
    ],
    title:
      "Giai đoạn xây dựng 1 sản phẩm phần mềm mới thì gần hoàn thành.giai đoạn tiếp theo là kiểm tra và thực thi.dự án thì sớm hơn so với lịch trình là 2 tuần.Cái gì quản lý dự án cần quan tâm nhất trước khi chuyển sang giai đoạn cuối cùng:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giám sát và kiểm soát rủi ro",
      },
      {
        title: "Kiểm soát tiến độ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Lên kế hoạch phạm vi",
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát phạm vi",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      ": Bạn đang quản lý 1 dự án trong 6 tháng và có tổ chức họp với các bên liên quan 2 tuần 1 lần.sau 5 tháng rưỡi của công việc,dự án đúng tiến độ và ngân sách nhưng các bên liên quan không hài lòng với tình hình sản phẩm.Tính trạng này sẽ trì hoãn dự án hoàn thành thêm 1 tháng.Điều quan trọng nhất có thể dùng để ngăn chặn tình trạng này là:",
    idx: 571,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Kế hoạch quản lý phạm vi dự án",
        idx: 0,
      },
      {
        title: "Tuyên bố phạm vi dự án",
        isKey: false,
        idx: 1,
      },
      {
        title: "WBS",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Từ điển WBS",
      },
    ],
    title:
      "Tất cả những điều nào sau đây nằm trong baseline của phạm vi dự án, ngoại trừ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 572,
  },
  {
    idx: 573,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một trong những bên liên quan của dự án liên hệ với PM để thảo luận về việc mở rộng phạm vi dự án.Người quản lý dự án yêu cầu chi tiết phải được viết ra và sau đó làm việc với các tiến trình kiểm soát phạm vi.Nguời quản lý dự án nên làm gì tiếp theo sau khi đánh giá về yêu cầu phạm vi đã được hoàn thành..",
    answers: [
      {
        title: "Yêu cầu bên liên quan nếu có nhiều thay đổi hơn dự kiến",
        idx: 0,
        isKey: false,
      },
      {
        title: "Hoàn thành việc kiểm soát thay đổi tích hợp",
        idx: 1,
        isKey: true,
      },
      {
        title:
          "Đảm bảo rằng các tác động của những thay đổi có thể hiểu được bởi các bên liên quan",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Tìm ra nguyên nhân chính tại sao phạm vi không được phát hiện trong quá trình lập kế hoạch dự án",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phụ thuộc tùy ý",
      },
      {
        title: "Phụ thuộc bên ngoài",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Phụ thuộc bắt buộc",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phụ thuộc phạm vi",
      },
    ],
    title:
      "Phụ thuộc mà yêu cầu giai đoạn thiết kế phải được hoàn thành trước khi triển khai có thể bắt đầu là loại phụ thuộc nào ?",
    idx: 574,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Cái nào dưới đây thường được mô tả bởi biểu đồ thanh (hay là biểu đồ Gantt) thì sẽ tốt hơn là sơ đồ mạng:",
    idx: 575,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Những mối quan hệ mang tính logic",
        idx: 0,
        isKey: false,
      },
      {
        title: "Đường thiết yếu",
        idx: 1,
        isKey: false,
      },
      {
        title: "Điều phối tài nguyên",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Tiến độ hay trạng thái",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Công cụ kiểm soát",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Phương thức lập lịch",
      },
      {
        title: "Công cụ lên kế hoạch",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Quy tắc ngón tay cái ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title: "Heuristics được miêu tả như là :",
    idx: 576,
  },
  {
    title:
      "Nếu như đánh giá lạc quan cho 1 hoạt động là 12 ngày, và đánh giá bi quan là 18 ngày, vậy độ lệch chuẩn của hoạt động này là bao nhiêu :",
    idx: 577,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "1 ",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "1.3",
      },
      {
        title: "6",
        isKey: false,
        idx: 2,
      },
      {
        title: "3",
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
        title:
          "Lượng thời gian một nhiệm vụ có thể bị trì hoãn mà không trì hoãn ngày hoàn thành dự án",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Lượng thời gian một nhiệm vụ có thể bị trì hoãn mà không trì hoãn ngày bắt đầu đầu của nhiệm vụ kế tiếp nó",
      },
      {
        title: "Thời gian chờ",
        idx: 2,
        isKey: true,
      },
      {
        title: "Sản phẩm của hướng truyền đi của hướng ngược lại, ",
        isKey: false,
        idx: 3,
      },
    ],

    title: "Lag có nghĩa là : ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 578,
  },
  {
    title: "Cái nào sau đây đúng ",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "1 đường thiết yếu có thể chạy trên mô hình giả",
      },
      {
        idx: 1,
        title: "Chỉ có thể có 1 đường thiết yếu ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Biểu đồ mạng sẽ thay đổi mỗi khi thời gian kết thúc thay đổi",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "1 dự án không bao giờ có trễ phủ định",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 579,
  },
  {
    title:
      "Cái nào dưới đây là công cụ quản lý dự án tốt nhất để xác định khoảng thời gian dài nhất mà dự án cần để thực hiện",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 580,
    answers: [
      {
        title: "WBS",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Biểu đồ mạng",
        isKey: true,
      },
      {
        title: "Biểu đồ thanh(Gantt)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tôn chỉ dự án",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ngắn hơn thời gian của 1 hoạt động dài nhất",
      },
      {
        idx: 1,
        isKey: false,
        title: "Ngắn hơn hoạt động mà nó biểu đạt",
      },
      {
        idx: 2,
        isKey: true,
        title: "Không có khoảng thời gian",
      },
      {
        title: "Bằng thời gian hoạt động mà nó biểu đạt",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 581,
    title: "Khoảng thời gian của 1 milestone là gì ?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Câu nào dưới đây miêu tả chuẩn nhất về mối quan hệ giữa độ sai số chuẩn và rủi ro",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Không gì cả",
      },
      {
        idx: 1,
        title: "Sai số chuẩn nói cho bạn biết nếu như đánh giá chính xác",
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Sai số chuẩn nói cho bạn biết thế nào là sự đánh giá không chính xác",
        isKey: true,
      },
      {
        title: "Sai số chuẩn cho bạn biết đánh giá bao gồm một bộ đệm",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 582,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 583,
    answers: [
      {
        title: "Nhận được một dấu hiệu của rủi ro trong dự án",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Đánh giá độ dài hoạt động",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Mô phỏng thứ tự các hành động xảy ra",
      },
      {
        isKey: false,
        idx: 3,
        title: "Chứng tỏ cho quản lí thấy them một nhân viên là điều cần thiết",
      },
    ],
    title: "Monter Carol được sử dụng cho",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Biểu diễn phân tích Monter Carlo",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thời gian chờ cho các hành động",
      },
      {
        title: "Xác định độ trễ",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Xác định số lượng thời gian hoạt động có thể bị trì hoãn trước khi nó chậm trễ con đường quyết định",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Sự nổi lên của một hành động được xác định bởi:",
    idx: 584,
  },
  {
    title:
      "Một dự án có 3 con đường quan trọng. Đáp án nào sau đây miêu tả đúng nhất về tác động của nó đến dự án?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 585,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nó làm cho nó dễ quản lí hơn",
      },
      {
        idx: 1,
        title: "Nó làm gia tăng rủi ro cho dự án",
        isKey: true,
      },
      {
        title: "Nó yêu cầu nhiều người ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Nó làm cho nó đắt hơn",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Nếu như thời gian và giá tiền không quan trọng như số tài nguyên sử dụng mỗi tháng, Chọn câu nào dưới đây là giải pháp tốt nhất để thực hiện?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thực hiện phân tích Monter Carlo",
      },
      {
        isKey: false,
        idx: 1,
        title: "Nhanh chóng theo dõi dự án",
      },
      {
        title: "Thực hiện cân bằng nguồn tài nguyên",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích chi phí các vòng đời",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 586,
  },
  {
    title:
      "Khi nào một biểu đồ cột mốc(milestone) sẽ sử dụng thay vì một biểu đồ thanh(Chart)",
    idx: 587,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lập kế hoạc một dự án",
      },
      {
        idx: 1,
        title: "Báo cáo các thành viên trong nhóm",
        isKey: false,
      },
      {
        isKey: true,
        title: "Báo cáo quản lí",
        idx: 2,
      },
      {
        idx: 3,
        title: "Phân tích rủi ro ",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Nhanh chóng theo dõi dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Cân bằng nguồn tài nguyên",
      },
      {
        idx: 2,
        title: "Phá hủy dự án",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích Monte Carlo",
      },
    ],
    idx: 588,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Kết quả lập kế hoạch lập quản lập quản lí trong lịch trinh dự án đó quá dài. Nếu như sơ đồ hệ thống dự án không thể thay đổi nhưng bạn thêm nguồn tài nguyên con người. Điều tốt nhất cần làm là gì?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điều tốt nhất cần làm để hoàn thành một dự án xong trước 2 ngày:",
    idx: 589,

    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Nói với người quản lí rằng con đường quan trọng của dự án không cho phép dự án kết thúc sớm",
      },
      {
        title: "Nói với ông chủ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Gặp gõ nhóm làm việc và tìm kiếm lựa chọn để phá hủy hoặc nhanh chóng theo dõi con đường quan trọng",
      },
      {
        title:
          "Làm việc chăm chỉ và theo dõi trạng thái của dự án trong tháng tới",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "nguy cơ tác động của việc phá vỡ(crashing) từng hoạt động",
        isKey: true,
      },
      {
        title:
          "ý kiến của khách hàng trong đó có hoạt động dẫn đến sụp đổ(to crash).",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Ý kiến của ông chủ trong đó các hoạt động dẫn đến sụp đổ và trật tự trong đó",
      },
      {
        idx: 3,
        title:
          "Giai đoạn vòng đời dự án trong đó hoạt động này là được dự định.",
        isKey: false,
      },
    ],

    idx: 590,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong nỗ lực để hoàn thành dự án nhanh hơn, người quản lý dự án xem xét các chi phí liên quan việc phá hỏng(crashing) từng hoạt động. Cách tiếp cận TỐT NHẤT để phá vỡ(crashing) cũng sẽ bao gồm xem xét:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Hoạt động sắp xếp",
      },
      {
        isKey: true,
        idx: 1,
        title: "Lịch trình phát triển",
      },
      {
        idx: 2,
        title: "Phạm vi định nghĩa",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tạo điều lệ dự án",
        idx: 3,
      },
    ],
    title:
      "Điều nào sau đây bao gồm yêu cầu các thành viên về dự toán thời gian cho các hoạt động của mình và thống nhất về lịch cho mỗi hoạt động?",
    idx: 591,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một người quản lý dự án đang đứng giữa quá trình thực hiện của một dự án xây dựng rất lớn khi ông phát hiện ra rằng thời gian cần thiết để hoàn thành dự án dài hơn thời gian có sẵn. Điều tốt nhất để làm là gì?",
    answers: [
      {
        idx: 0,
        title: "Cắt giảm phạm vi sản phẩm",
        isKey: false,
      },
      {
        title:
          "Gặp mặt quản lý và nói với họ rằng thời hạn yêu cầu không thể được đáp ứng",
        isKey: false,
        idx: 1,
      },
      {
        title: "Làm việc thêm giờ",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Xác định các tùy chọn cho việc nén lịch và quản lý ở hiện tại trở thành các tùy chọn được đề nghị của bạn ",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 592,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 593,
    answers: [
      {
        title:
          "Các đội không tạo ra các ước tính và các ước tính quá dài khi sử dụng phương thức đó",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Các đội không tạo ra các ước tính và sơ đồ mạng lưới không được sử dụng.",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Uớc tính quá dài và cần được tạo ra bởi quản lý",
        idx: 2,
      },
      {
        title:
          "Ước lượng thời gian hoàn thành dự án giống với thời gian mà khách hàng yêu cầu ",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Trong quá trình lập kế hoạch dự án, bạn ước tính thời gian cần thiết cho mỗi hoạt động và sau đó thêm các ước tính để tạo ra các ước lượng dự án. Bạn cam kết hoàn thành dự án vào ngày này. Điều gì là Sai với kịch bản này",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong định nghĩa hoạt động, một thành viên trong nhóm xác định một hoạt động cần phải được hoàn thành. Tuy nhiên, một thành viên khac trong nhóm tin tưởng rằng hoạt động này không phải là một phần của dự án như ông giải thích tuyên bố phạm vi dự án. Điều tốt nhất người quản lý dự án cần làm là gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cố gắng xây dựng một sự đồng thuận của đội",
      },
      {
        isKey: false,
        idx: 1,
        title: "Thực hiện các quyết định của mình",
      },
      {
        title: "Hãy hỏi các nhà tài trợ để làm rõ",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Yêu cầu quản lý cao cấp để làm rõ",
      },
    ],

    idx: 594,
  },
  {
    title:
      "Bạn là một người quản lý dự án trong một dự án phát triển phần mềm 5.000.000 USD . Trong khi làm việc với nhóm dự án của bạn để phát triển một sơ đồ mạng, bạn nhận thấy một loạt các hoạt động có thể được làm việc song song, nhưng phải hoàn thành theo một trình tự cụ thể. Điều gì là cần thiết cho hoạt đồng này?",
    answers: [
      {
        isKey: true,
        title: "Phương pháp lập sơ đồ ưu tiên",
        idx: 0,
      },
      {
        isKey: false,
        title: "Phương pháp biểu đồ mũi tên",
        idx: 1,
      },
      {
        idx: 2,
        title: "Phương pháp đường dẫn quan trọng",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phương pháp lập biểu hoạt động",
      },
    ],
    idx: 595,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một giám đốc dự án nhận một dự án của một giám đốc dự án khác trong quá trình lập kế hoạch.Nếu giám đốc mới muốn thấy giám đốc trước lập kế hoạch cho sụ thay đổi lịch trình thì cách tốt nhất nên chọn là ",
    answers: [
      {
        idx: 0,
        title: "Kế hoạch quản lý giao tiếp",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Kế hoạch quản lý dự án",
      },
      {
        isKey: false,
        idx: 2,
        title: "Kế hoạch quản lý nhân lực",
      },
      {
        title: "Kế hoạch quản lý lịch trình",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 596,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 597,
    title:
      "Bạn đang quản lý dự án trong một dự án 5.000.000 USD phát triển phần mềm. Trong khi làm việc với nhóm dự án của bạn để phát triển một sơ đồ mạng, kiến trúc sư dữ liệu của bạn cho thấy chất lượng có thể được cải thiện nếu các mô hình dữ liệu được phê duyệt quản lý cấp cao trước khi chuyển sang yếu tố thiết kế khác. họ ủng hộ đề nghị này với một bài viết từ một tạp chí phát triển phần mềm hàng đầu. Điều nào sau đây mô tả những gì TỐT NHẤT kiểu này được gọi là đầu vào?",
    answers: [
      {
        idx: 0,
        title: "Bắt buộc phụ thuộc",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "tùy ý phụ thuộc",
      },
      {
        title: "bên ngoài phụ thuộc",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Heuristic",
        isKey: true,
      },
    ],
  },
  {
    title:
      "Một giám đốc dự án ước lượng tỉme trung bình để giải quyết phân tích mạng lịch trình .Loại phân tích nào sau đây dc sử dụng ?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tạo phương thức đường dẫn",
      },
      {
        title: "PERT",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Monte Carlo",
      },
      {
        isKey: false,
        idx: 3,
        title: "Sự cân bằng nguồn tài nguyên ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 598,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một sản phẩm phát triển mới có 4 cấp độ trong việc phân rã công việc và được sử dụng theo phương pháp mô hình mũi tên. Hoạt động ước tính thời gian đã được nhận. công việc vần làm tiếp theo là ",
    answers: [
      {
        idx: 0,
        title: "Tạo chuỗi các hoạt động",
        isKey: false,
      },
      {
        title: "Bắt đầu phân rã công việc",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Hoàn thành lập lịch",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Compress the schedule",
      },
    ],

    idx: 599,
  },
  {
    idx: 600,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn là người quản lí dự án cho việc phát triển một sản phẩm dự án mới có 4 cấp độ trong lược đồ phân rã công việc, và được xắp xếp theo mô hình mũi tên. Thời gian dự đoán được nén và một lượ đồ được tạo ra. Hoạt động quản lí thời gian nên làm gì tiếp theo",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Bắt đầu kiểm soát lịch trình",
      },
      {
        title: "Bắt đầu ước tính nguồn hoạt động",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tương tự ước tính tiến độ",
      },
      {
        isKey: true,
        idx: 3,
        title: "Đạt được sự chấp thuận",
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        title: "Ước lượng tham số",
        idx: 0,
      },
      {
        title: "Ước lượng 3 điểm",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Ước lượng tương đồng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "phân tích Monte Carlo ",
      },
    ],

    title:
      "Một thành viên trong nhóm nghiên cứu và phát triển nói với bạn rằng công việc của cô là quá sáng tạo để cung cấp cho bạn một ước tính đơn cố định cho hoạt động này. Bạn quyết định sử dụng những giờ lao động từ cả các dự án trong quá khứ đến dự đoán tương lai. Đây là một ví dụ trong đó những điều nào sau đây?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 601,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 602,
    answers: [
      {
        title: "đang trên con đường thiết yếu ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "đã tụt hậu",
      },
      {
        isKey: false,
        title: "đang tiến triển tốt",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "không phải trên đường thiết yếu",
      },
    ],
    title:
      "1 hoạt động có một khởi đầu sớm (ES) vào ngày 3, một sự khởi đầu cuối (LS) trong ngày 13, một kết thúc sớm (EF) trong ngày 9 và kết thúc một cuối (LF) trong ngày 19.Hoạt động này:",
  },
  {
    answers: [
      {
        title: "Cắt các nguồn lực từ 1 hoạt động ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Thực hiện các hoạt động đồng thời nhiều hơn",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Di chuyển các nguồn lực từ các phụ thuộc ưu tiên cho các phụ thuộc bên ngoài",
      },
      {
        idx: 3,
        isKey: false,
        title: "Hủy bỏ một hoạt động của dự án",
      },
    ],
    title:
      "Dự án được tính toán để được hoàn thành bốn ngày kể từ ngày hoàn thành mong muốn. Bạn không có quyền truy cập đến các tài nguyên bổ sung. Dự án này là rủi ro thấp, chi phí tỷ lệ lợi ích (BCR) dự kiến sẽ được 1.6, và các phụ thuộc được ưu tiên. Trong hoàn cảnh này, những gì sẽ là điều TỐT NHẤT để làm ?",
    idx: 603,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 604,
    title:
      "Một quản lý dự án cho một công ty xây dựng nhỏ có một dự án đã được ngân sách cho $ 130K trong khoảng thời gian sáu tuần. Theo lịch trình của cô, dự án cần phải có chi phí $ 60K cho đến nay. Tuy nhiên, nó có giá $ 90k cho đến nay. Dự án cũng chậm tiến độ, bởi vì các ước lượng ban đầu không chính xác. Ai có trách nhiệm CHÍNH để giải quyết vấn đề này?",
    answers: [
      {
        title: "PM",
        idx: 0,
        isKey: true,
      },
      {
        title: "Lãnh đạo cấp cao ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nhà tài trợ",
      },
      {
        isKey: false,
        title: "Giám đốc văn phòng quản lý dự án",
        idx: 3,
      },
    ],
  },
  {
    idx: 605,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Crashing (phá vỡ)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Floating (làm nổi) ",
      },
      {
        idx: 2,
        title: "Leveling (san lấp) ",
        isKey: true,
      },
      {
        title: "Fast tracking (theo dõi nhanh)",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Sắp xếp lại các nguồn lực để cấp nguồn liên tục được duy trì được gọi là:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ước lượng sẽ gần hơn với công việc thực tế yêu cầu.",
      },
      {
        isKey: false,
        idx: 1,
        title: "Nó được dựa vào hiểu biết chi tiết những gì công việc yêu cầu ",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Nó giúp các thành viên trong đội hiểu những gì mà người quản lý cần ",
      },
      {
        idx: 3,
        title:
          "Nó giúp người quản lý xác định xem có phù hợp với lịch hay là không.",
        isKey: false,
      },
    ],
    idx: 606,
    title: "Cái nào dưới đây là lợi ích của ước lượng tương đồng",
  },
  {
    idx: 607,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một trong những cách phổ biến để tính ước lượng tại thời điểm hoàn thành (EAC-Estimate At Completion) là lấy ngân sách tại thời điểm kết thúc (BAC-Budget At Completion) và",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "chia cho SPI ",
      },
      {
        isKey: false,
        idx: 1,
        title: "nhân với SPI",
      },
      {
        title: "nhân với CPI ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "chia cho CPI",
      },
    ],
  },
  {
    title:
      "Ước lượng tại thời điểm hoàn thành (EAC-Estimate At Completion) là một ước lượng định kỳ của:",
    answers: [
      {
        isKey: false,
        title: "chi phí của công việc đã hoàn thành ",
        idx: 0,
      },
      {
        isKey: false,
        title: "giá trị của công việc đã thực hiện ",
        idx: 1,
      },
      {
        isKey: true,
        title: "tổng chi phí dự kiến tại thời điểm hoàn thành dự án",
        idx: 2,
      },
      {
        title: "là những chi phí để kết thúc công việc",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 608,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Nếu giá trị kiếm được (EV-Earned value) = 350, chi phí thực tế (AC- Actual Cost) = 400, giá trị theo kế hoạch (PV-Planned Value) = 325, thì sai khác về chi phí (CV-Cost Variance) là bao nhiêu?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "350 ",
      },
      {
        isKey: false,
        title: "-75",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "400 ",
      },
      {
        idx: 3,
        isKey: true,
        title: "-50",
      },
    ],

    idx: 609,
  },
  {
    title: "Khấu hao giảm dần (double declining balance) là một hình thức: ",

    idx: 610,
    answers: [
      {
        idx: 0,
        title: "khấu hao giảm",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "khấu hao theo đường thẳng",
      },
      {
        title: "khấu hao nhanh",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "chi phí vòng đời",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 611,
    title: "Ước lượng tương tự (Analogous estimating): ",
    answers: [
      {
        isKey: false,
        title: "sử dụng kĩ thuật ước lượng từ dưới lên",
        idx: 0,
      },
      {
        title:
          "được sử dụng khá thường xuyên trong suốt quá trình thực hiện của dự án; ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "sử dụng kĩ thuật ước lượng từ trên xuống",
      },
      {
        isKey: false,
        title: "sử dụng các chi phí thực tế chi tiết trong lịch sử ",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chi phí cố định ",
      },
      {
        idx: 1,
        isKey: false,
        title: "chi phí bị sụt (Suck cost), ",
      },
      {
        isKey: false,
        title: "giá trị hiện tại thuần (NPV-net present value); ",
        idx: 2,
      },
      {
        title: "chi phí cơ hội.",
        idx: 3,
        isKey: true,
      },
    ],

    idx: 612,
    title:
      "Chi phí của việc lựa chọn một trong những dự án và bỏ qua những cái khác được gọi là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Mục tiêu chính của chi phí theo chu trình sống (life cycle costing) là để:",
    idx: 613,

    answers: [
      {
        idx: 0,
        title: "ước tính chi phí lắp đặt, ",
        isKey: false,
      },
      {
        title: "ước tính chi phí vận hành và bảo dưỡng; ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "xem xét chi phí lắp đặt khi lập kế hoạch chi phí dự án; ",
      },
      {
        isKey: true,
        title:
          "xem xét chi phí vận hành và bảo dưỡng trong việc thực hiện quyết định dự án",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Yêu cầu một phần trăm hoàn thành từ mỗi thành viên trong nhóm và lập báo cáo về chúng trong báo cáo tiến độ hàng tháng",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Tính toán giá trị thu được và sử dụng các chỉ số và các tính toán khác để báo cáo hiệu suất trong quá khứ và dự báo hiệu suất trong tương lai; ",
      },
      {
        idx: 2,
        title:
          "Sử dụng quy tắc 50/50 và đảm bảo rằng chi phí theo chu trình sống phải nhỏ hơn chi phí dự án; ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Tập trung vào số tiền chi tiêu tháng trước và những khoản chi gì sẽ được dùng đến cho tháng tiếp theo",
      },
    ],
    title:
      "Việc tính toán hiệu suất chi phí được thực hiện TỐT NHẤT thông qua điều nào dưới đây? ",
    idx: 614,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "tại thời điểm này, chúng ta hy vọng dự án tổng cộng chi tiêu hơn 89% so với kế hoạch, ",
      },
      {
        isKey: false,
        title:
          "khi dự án hoàn thành chúng ta đã tiêu hết hơn 89 phần trăm so với kế hoạch, ",
        idx: 1,
      },
      {
        title: "dự án mới chỉ tiến hành được 89 phần trăm theo kế hoạch",
        idx: 2,
        isKey: false,
      },
      {
        title: "dự án chỉ nhận được 89 cent cho mỗi 1$ vốn đầu tư.",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 615,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một chỉ số hiệu suất chi phí (CPI-cost performance index) là 0,89 có nghĩa là: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "bạn đang vượt quá ngân sách, ",
        idx: 0,
        isKey: false,
      },
      {
        title: "bạn đang thực hiện trước thời hạn",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "bạn mới chỉ thực hiện được 76 phần trăm của mức kế hoạch ban đầu,",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "bạn mới chỉ thực hiện được 24 phần trăm của mức kế hoạch ban đầu",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 616,
    title:
      "Một chỉ số năng suất thời gian (SPI-schedule performance index) bằng 0,76 có nghĩa là: ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "WBS",
      },
      {
        title: "sơ đồ mạng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "các rủi ro",
      },
      {
        idx: 3,
        title: "quy trình kiểm soát thay đổi",
        isKey: true,
      },
    ],
    idx: 617,

    title:
      "Điều nào sau đây là không cần thiết để đưa ra một ước lượng dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 618,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Sản phẩm ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Công cụ",
        idx: 1,
      },
      {
        title: "Chức năng ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Đầu vào ",
      },
    ],

    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
  },
  {
    answers: [
      {
        title: "Dollar/module ",
        idx: 0,
        isKey: true,
      },
      {
        title: "Learning bend",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Từ dưới lên",
        idx: 2,
      },
      {
        isKey: false,
        title: "CPM.",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 619,
    title: "Cái nào sau đây là ví dụ của một ước lượng theo tham số? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 620,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Lập kế hoạch dự án ",
      },
      {
        isKey: true,
        idx: 1,
        title: "Kết thúc dự án",
      },
      {
        title: "Thực thi dự án",
        isKey: false,
        idx: 2,
      },
      {
        title: "Khởi tạo dự án",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "Một ước tính độ lớn mức thô (rough order of magnitude estimate) được thực hiện trong giai đoạn nào của nhóm tiến trình quản lý dự án?",
  },
  {
    title:
      "Dự toán ngân sách cuối cùng nên gần với chi phí thực tế như thế nào?",

    idx: 621,
    answers: [
      {
        isKey: false,
        title: "Từ -75% đến 25%;",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Từ -10% đến 15%",
      },
      {
        isKey: false,
        title: "Từ 10% đến -25%;",
        idx: 2,
      },
      {
        title: "Từ -5% đến 10%.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 622,
    title:
      "Yếu tố nào sẽ KHÔNG được xem xét khi lựa chọn giữa hai dự án để thực hiện? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Giá trị hiện tại thuần (NPV), ",
        idx: 0,
      },
      {
        title: "Tỷ lệ phí tổn-lợi ích (BCR)",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thời gian hoàn vốn",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Luật về mức thu lợi giảm dần",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title: "23000$ ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "30000$",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "20000$",
      },
      {
        title: "50000$",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 623,
    title:
      "Nếu dự án A có giá trị hiện tại dòng (NPV) là 30.000$ và dự án B có NPV là 50.000$, chi phí cơ hội nếu dự án B được chọn là bao nhiêu?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 624,
    answers: [
      {
        idx: 0,
        title: "Trực tiếp (Direct) ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "NPV",
      },
      {
        idx: 2,
        title: "Gián tiếp (Indirect)",
        isKey: false,
      },
      {
        title: "Cố định",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Loại chi phí nào là chi phí đào tạo đội dự án?",
  },
  {
    title: "Các chi phí thành lập dự án là một ví dụ của",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Chi phí có thể thay đổi được",
        isKey: false,
      },
      {
        idx: 1,
        title: "Chí phí cố định",
        isKey: true,
      },
      {
        idx: 2,
        title: "Toàn bộ chi phí ( overhead costs)",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí cơ hội",
      },
    ],
    idx: 625,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Có thêm giá trị từ phân tích chi phí",
      },
      {
        isKey: false,
        title: "Quản lý mua vào dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đội dự án mua vào dự án",
      },
      {
        isKey: true,
        idx: 3,
        title: "Có cách ít tốn kém khi làm cùng một việc",
      },
    ],
    idx: 626,
    title: "Thực hiện phân tích giá trị để:",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Đội dự án ",
      },
      {
        title: "Người mua",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Người bán",
      },
      {
        isKey: false,
        title: "Người quản lý",
        idx: 3,
      },
    ],
    idx: 627,
    title:
      "Ai sẽ phải chịu rủi ro chi phí trong hợp đồng giá cố định (fixed price-FP)?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Điều nào sau đây diễn tả giá trị được ước lượng của công việc thực tế được hoàn thành",

    idx: 628,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Giá trị kiếm được (Earned value - EV)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Giá trị lên kế hoạch được (Planned value - PV)",
      },
      {
        idx: 2,
        isKey: false,
        title: "Chi phí thực tế (Actual cost - AC)",
      },
      {
        idx: 3,
        title: "Sự thay đổi chi phí (Cost variance - CV)",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 629,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Sản phẩm ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Công cụ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Chức năng ",
      },
      {
        isKey: false,
        title: "Đầu vào ",
        idx: 3,
      },
    ],
    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 630,

    answers: [
      {
        isKey: true,
        title: "Dự án A ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Dự án B",
        isKey: false,
      },
      {
        isKey: false,
        title: "Dự án C",
        idx: 2,
      },
      {
        title: "Dự án D",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Bạn phải chọn thực hiện một trong 4 dự án sau. Dự án A sẽ được thực hiện trong khoảng 6 năm và giá trị hiện tại dòng (NPV) là 70000$. Dự án B là 3 năm và 30000$. Dự án C là 5 năm và 40000$. Dự án D là 1 năm và 60000$. Bạn chọn dự án nào?",
  },
  {
    answers: [
      {
        title: "Dự án A",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Dự án B",
      },
      {
        idx: 2,
        isKey: true,
        title: "Dự án C",
      },
      {
        isKey: false,
        idx: 3,
        title: "Dự án D",
      },
    ],
    idx: 631,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "dự án A có một tỉ suất hoàn vốn nội bộ (IRR) là 21%. Dự án B có IRR là 7%. Dự án C có IRR là 31%. Dự án D có IRR là 19%. Dự án nào là dự án tốt nhất?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 632,
    title:
      "Công ty của bạn có thể chấp nhận 1 trong 3 dự án. Dự án A với NPV là 30,000$ và sẽ hoàn thành trong 6 năm. Dự án B có NPV là 60,000$ và hoàn thành trong 3 năm. Dự án C có NPV là 90,000$ và sẽ hoàn thành trong 4 năm. Trên cơ sở những thông tin đã có, bạn chọn dự án nào?",
    answers: [
      {
        title: "Dự án A",
        idx: 0,
        isKey: false,
      },
      {
        title: "Dự án B",
        idx: 1,
        isKey: false,
      },
      {
        title: "Dự án C",
        isKey: true,
        idx: 2,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Dự án A với NPV là 95,000$",
        isKey: false,
      },
      {
        title: "Dự án B với NPV là 120,000$",
        idx: 1,
        isKey: true,
      },
      {
        title: "Dự án C với NPV là 20,000$",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dự án D với NPV là -30,000$",
      },
    ],

    title:
      "Là 1 PM, bạn hiện có 1 số thông tin về NPV( phân tích giá trị thực) của 1 vài dự án. Dự án nào bạn lựa chọn là tốt nhất",
    idx: 633,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 634,
    title:
      "Người bán nói với bạn về những hoạt động mà kết quả của nó có thể làm tăng chi phí. Bạn cần:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Đề nghị thay đổi chi phí dự án",
        idx: 0,
      },
      {
        title: "Có 1 cuộc gặp mặt người quản lý để tìm ra cách làm",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Nói với người bán bạn cần hỗ trợ thêm thông tin",
        idx: 2,
      },
      {
        title: "Từ chối những hành động sai trái",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 635,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Loại bỏ những rủi ro trong ước lượng và ước lượng lại",
      },
      {
        title: "Gặp nhà đầu tư để tìm ra các công việc có thể thay thế được",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Giảm chất lượng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Giảm phạm vi dự án",
      },
    ],
    title:
      "Chi phí mà bạn ước tính ban đầu chỉ ra rằng bạn có thể sẽ phải trả 1 khoản chi phí lớn hơn vào cuối dự án. Bạn nên làm gì?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 636,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phát biểu phạm vi dự án",
      },
      {
        idx: 1,
        title: "WBS",
        isKey: false,
      },
      {
        idx: 2,
        title: "Kế hoạch quản lý nhân viên",
        isKey: false,
      },
      {
        idx: 3,
        title: "Chính sách tổ chức",
        isKey: true,
      },
    ],
    title:
      "1 cửa hàng mới phát triển dự án yêu cầu phải mua các trang thiết bị khác nhau, máy móc và thiết bị. Trách nhiệm của gian hang để phát triển tập trung …. Trong tài liệu có thủ tục mới",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 637,

    title:
      "Đầu tiên trong chu trình dự án của bạn, bạn có 1 cuộc thảo luận với nhà đầu tư về việc ước lượng những công nghệ sẽ được sử dụng. Bạn muốn có 1 cái nhìn tổng quát nhưng nhà đầu tư tranh cãi về những ước lượng tương tự. ý kiến nào tốt nhất: ",
    answers: [
      {
        title: "Đồng ý với những ước lượng tương tự đó và coi nó như …",
        isKey: true,
        idx: 0,
      },
      {
        title: "Đề nghị ước lượng chi phí chu trình dự án như 1 thỏa hiệp",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xác định rõ tại sao nhà đầu tư muốn nó là ước lượng chính xác ",
      },
      {
        isKey: false,
        title:
          "Thuyết phục nhà đầu tư tìm 1 cách tiếp cận khác vì có nhìu cách khác chính xác hơn.",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn cần phải hoàn thành tiến trình khởi tạo của 1 dự án nhỏ và có thể thay đổi trong suốt quá trình lập kế hoạch khi các bên liên quan của dự án hỏi bạn về chi phí của dự án và đường chi phí cơ sở. Bạn cần nói với họ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title:
          "Ngân sách dự án có thể được đưa ra trong tôn chỉ của dự án, cái cần phải hoàn thành ngay.",
        idx: 0,
      },
      {
        title:
          "Ngân sách dự án và đường chi phí cơ sở sẽ không thể hoàn thành và chấp nhận trừ khi tiến trình lập kế hoạch được hoàn thành",
        isKey: true,
        idx: 1,
      },
      {
        title:
          "Kế hoạch quản lý dự án sẽ không bao gồm ngân sách của dự án và đường chi phí cơ sở; đó là 1 dự án nhỏ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Nó không thể xảy ra hay hoàn thành việc ước lượng trước khi kế hoạch quản lý dự án được tạo ra.",
        isKey: false,
      },
    ],
    idx: 638,
  },
  {
    title:
      "Tiến trình quản lý dự án bao gồm toàn bộ việc ước lượng chi phí cho tất cả các hoạt động riêng lẻ và thiết lập 1 đường cơ sở để đảm bảo rằng dự án được thực hiện. Đó là tiến trình: ",
    answers: [
      {
        title: "Quản lý chi phí ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Ước lượng chi phí",
        isKey: false,
      },
      {
        title: "Ngân sách chi phí",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Điều khiển chi phí",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 639,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Chi phí cố định",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Chi phí chìm",
        isKey: true,
      },
      {
        isKey: false,
        title: "Chi phí trực tiếp",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chi phí biến động",
      },
    ],
    idx: 640,
    title:
      "Bạn được yêu cầu chuẩn bị kinh phí để hoàn thành một dự án được khởi động từ năm ngoái và đã hoãn 6 tháng.Tất cả những điều sau đây sẽ được bao gồm trong ngân sách, ngoại trừ:",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Dự án A với tỉ lệ lợi nhuận trên chi phí là 0,8 , không có điều kệ dự án và bốn nguồn tài nguyên",
      },
      {
        title:
          "Dự án B với giá trị hiện tại thuần là 60000 USD, 12 nguồn tài nguyên và có chi phí biến động từ 1000USD đến 2000USd trên 1 tháng",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Dự án C với chi phí cơ hội là 300000USD, không hệ thống điều khiển dự án, và suất lợi tức nội là 12 %",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Dự án D với chi phí gián tiếp là 20000USD và 12 nguồn tài nguyên",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Để cung cấp 1 dự án mới trong bộ phận của bạn, bạn cần phải chuyển tài nguyên từ 1 dư án sang dự án khác, Vì bộ phận của bạn đang làm việc năng xuất, việc chuyển tài nguyên từ dự án nào chắc chắn sẽ làm trì hoãn dự án đó. Nó sẽ gây ra những tác động tiêu cực nhất nếu bạn chuyển tài nguyên từ dự án sau :",

    idx: 641,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án sản xuất có chỉ số tiến độ thực hiện (SPI) là 0,89 và chỉ số chi phí thực hiện (CPI) là 0,91, Nói chung đâu là giải thích tốt nhất vì sao lại xảy ra tình trạng trên:",

    idx: 642,
    answers: [
      {
        isKey: false,
        title: "Phạm vi đã bị thay đổi.",
        idx: 0,
      },
      {
        title:
          "Một nhà cung cấp đã không thể kinh doanh và cần phải tìm 1 nhà cung cấp khác",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Trang thiết bị bổ sung phải được mua",
      },
      {
        idx: 3,
        title:
          "Con đường hoạt động động quan trọng đã mất nhiều thời gian và cần nhiều hơn số giờ lao động để hoàn thành",
        isKey: true,
      },
    ],
  },
  {
    idx: 643,

    answers: [
      {
        idx: 0,
        title:
          "Chi phí dự toán cần được sử dụng để tính chỉ số chi phí thực hiện (CPI)",
        isKey: false,
      },
      {
        title: "Cần phải sử dụng SPI chứ không phải CPI",
        idx: 1,
        isKey: false,
      },
      {
        title: "Phương pháp dự toán từ dưới lên lẽ ra phải được sử dụng",
        isKey: true,
        idx: 2,
      },
      {
        title: "Lịch sử vừa qua đã không được đưa vào tài khoản",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Mặc dù các bên liên quan nghĩ rằng đã có đủ tiền trong ngân sách, một nửa thông qua chỉ số chi phí thực hiện dự án (CPI) là 0,7. Để xác định nguyên nhân gốc rễ, một vài bên liên quan tiến hành kiểm toán dự án và phát hiện ra ngân sách chi phí dự án được ước tính một cách tương tự. Tất cả các hoạt động dự toán làm tăng dự toán của dự án. Các bên liên quan nghĩ có gì đó đã bị bỏ quên trong quá trình hoàn thành ước tính dự án. Điều nào dưới đây mô tả những gì đã bị bỏ quên :",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title: "Đạt được (hoàn thành) chất lượng",
        isKey: true,
      },
      {
        title: "Chi phí chất lượng cao",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Chi phí chất lượng thấp",
        isKey: false,
      },
      {
        title: "Khách hàng trả giá thấp nhất",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Khi sản phẩm hoặc dịch vụ hoàn toàn đáp ứng được yêu cầu của khách hàng ",
    idx: 644,
  },
  {
    title:
      "Câu sau đây đề cập đến phần gì:”khái niệm về mức chất lượng tối ưu đạt được tại điểm mà nguồn thu tăng lên từ cải tiến sản phẩm bằng với chi phí gia tăng để đảm bảo (secure) nó”:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "Phân tích kiểm soát chất lượng ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Phân tích bên lề",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Phân tích chất lượng tiêu chuẩn",
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích sự phù hợp (conformance analysis) ",
      },
    ],
    idx: 645,
  },
  {
    answers: [
      {
        title: "Kĩ sư dự án ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Giám đốc dự án",
      },
      {
        idx: 2,
        title: "Người quản lí chất lượng (quality manager)",
        isKey: false,
      },
      {
        isKey: false,
        title: "Thành viên đội dự án",
        idx: 3,
      },
    ],
    idx: 646,

    title:
      "Người chịu trách nhiệm cuối cùng về quản lí chất lượng dự án là ai?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 647,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một team đang sử dụng sơ đồ xương cá để xác định những tiêu chuẩn chất lượng sẽ được sử dụng trong dự án. Phần nào của tiến trình quản lí chất lượng nằm trong đó:",
    answers: [
      {
        title: "Thực hiện kiểm soát chất lượng",
        isKey: false,
        idx: 0,
      },
      {
        title: "Thực hiện đảm bảo chất lượng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Lên kế hoạch chất lượng",
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích thay đổi",
      },
    ],
  },
  {
    title: "Từ quan điểm dự án, thuộc tính chất lượng:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Xác định hiệu quả tổ chức thực hiện hỗ trợ dự án",
      },
      {
        idx: 1,
        title:
          "Cung cấp những hướng dẫn về thành công hoặc thất bại cơ bản của một dự án",
        isKey: false,
      },
      {
        idx: 2,
        title: "Là điểm đặc biệt mà sản phẩm được thiết kế và kiểm thử",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Là tiêu chí khách quan phải được đáp ứng",
      },
    ],
    idx: 648,
  },
  {
    title: "Chất lượng là:",
    idx: 649,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Đáp ứng và vượt mong đợi của khách hàng",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tính năng thêm vào để cho khách hàng vui",
      },
      {
        idx: 2,
        title: "Mức độ mà dự án yêu cầu",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "phù hợp với mục tiêu quản lí",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Sự kiểm tra, kiểm duyệt",
      },
      {
        isKey: true,
        title: "Phân tích tiến trình",
        idx: 1,
      },
      {
        title: "Biểu đồ pareto",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Lược đồ xương cá",
        idx: 3,
      },
    ],
    idx: 650,
    title: "Tất cả các ví dụ sau đây không đảm bảo chất lượng ngoại trừ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Tập trung vào các vấn đề quan trọng nhất để đảm bảo chất lượng",
        idx: 0,
      },
      {
        idx: 1,
        title: "Tập trung vào kích thích tư duy",
        isKey: false,
      },
      {
        title: "Khám phá kết quả mong muốn trong tương lai",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Xác định tiến trình đang hoạt động trong giới hạn",
      },
    ],
    idx: 651,
    title: "Một biểu đồ kiểm soát giúp giám đốc dự án:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Kiểm thử toàn bộ sẽ",
    idx: 652,
    answers: [
      {
        idx: 0,
        title: "Tốn nhiều thời gian ",
        isKey: true,
      },
      {
        idx: 1,
        title: "Cung cấp nhiều thông tin hơn mong đợi",
        isKey: false,
      },
      {
        isKey: false,
        title: "Loại trừ lẫn nhau",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Chỉ ra nhiều lỗi (nhược điểm)",
      },
    ],
  },
  {
    title: "Sau đây là các ví dụ có chi phí không phù hợp ngoại trừ:",
    answers: [
      {
        idx: 0,
        title: "Làm lại",
        isKey: false,
      },
      {
        idx: 1,
        title: "Đào tạo chất lượng",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Loại bỏ",
      },
      {
        title: "Chi phí bảo hành",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 653,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Xác định các hoạt động của dự án thực hiện theo chính sách của tổ chức",
        isKey: false,
      },
      {
        title: "Xác định chính sách kém hiệu quả và không hiệu quả",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Xác nhận sửa chữa các khiếm khuyết ",
      },
      {
        title: "Xác nhận thực hiện tiếp cận các yêu cầu thay đổi",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 654,
    title:
      "Tất cả các câu dưới đây đều là một phần của đánh giá chất lượng ngoại trừ:",
  },
  {
    idx: 655,
    title: "Biểu đồ kiểm soát chỉ ra 7 điểm trong một hàng.Để làm gì ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thể hiện kinh nghiệm thiết kế",
      },
      {
        idx: 1,
        title: "Điều chỉnh biểu đồ cho tương ứng với giá trị mới",
        isKey: false,
      },
      {
        title: "tìm ra nguyên nhân ",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "không gì cả. Đây chỉ là qui tắc 7 điều , có thể bỏ qua",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Khi lên kế hoạch cho dự án của mình , bạn đặt yếu tố nào lên hàng đầu :chất lượng , chi phí hay lịch hoàn thành?",
    idx: 656,

    answers: [
      {
        title:
          "chi phí quan trọng nhất , tiếp đến là chất lượng , lịch thực hiện xếp sau cùng ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "chất lượng quan trọng nhất , hơn chi phí và lịch thực hiện",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "lịch thực hiện ( thời gian) quan trọng nhất , rồi đến chất lượng , chi phí xếp cuối",
      },
      {
        title: "tùy thuộc vào từng dự án",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "phân tích chất lượng ",
        isKey: false,
      },
      {
        title: "thực hiện bảo đảm chất lượng",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "kiểm soát chất lượng",
        idx: 2,
      },
      {
        title: "lên kế hoạch quản lí chất lượng ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Giám đốc dự án dùng biểu đồ phân tích nhân quả để xác định các nhân tố có thể gây rủi ro. Giám đốc dự án có liên hệ tới phần nào trong tiến trình quản lí chất lượng ?",
    idx: 657,
  },
  {
    idx: 658,
    title:
      "Một giám đốc dự án cùng đội ngũ làm việc từ một công ty thiết kế trang thiết bị đường sắt được yêu cầu thiết kế một loại máy để chất đá từ đường ray lên xe. Người ta cho phép máy làm rơi 2% đá trong quá trình vận hành, trên tổng số hơn 2 tấn đá rơi trên đường ray mỗi ngày.Giám đốc dự án sẽ sử dụng tài liệu nào để minh chứng cho kiểm soát chất lượng,bảo đảm chất lượng, cải tiến chất lượng trong dự án này ?",
    answers: [
      {
        isKey: true,
        title: "kế hoạch quản lí chất lượng ",
        idx: 0,
      },
      {
        title: "điều khoản bảo đảm chất lượng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "các biểu đồ kiểm soát ",
      },
      {
        title: "kế hoạch quản lí dự án",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong những cuộc họp của đội dự án,đội bổ sung những khía cạnh cụ thể của các công việc phát sinh vào dự án vì điều đó có lợi cho khách hàng. Trường hợp này sai ở điểm nào?",
    idx: 659,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        title:
          "đội dự án làm việc thừa thãi , vượt quá chỉ tiêu ban đầu của dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "những nỗ lực kiểu này không nên được thực hiện trong các buổi họp",
      },
      {
        idx: 2,
        title:
          "không có gì. Đây là cách để đáp ứng hoặc thỏa mãn vượt mức mong đợi của khách hàng",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "không sao. Giám đốc dự án sẽ kiểm soát mọi thứ trong tình huống này",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Đội dự án đã tạo một kế hoạch mô tả cách họ thực thi các điều khoản đảm bảo chất lượng.Nội dung chủ yếu liên quan tới cấu trúc của tổ chức,trách nhiệm , các thủ tục và các thông tin khác về kế hoạch quản lí chất lượng. Nếu nó thay đổi trong quá trình thực hiện dự án , điều nào dưới đây cũng sẽ thay đổi ?",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "bảo đảm chất lượng",
      },
      {
        idx: 1,
        title: "quản lí chất lượng",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "quản lí dự án ",
      },
      {
        idx: 3,
        title: "kiểm soát chất lượng",
        isKey: false,
      },
    ],
    idx: 660,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "đáp ứng chuẩn ISO 9000",
      },
      {
        idx: 1,
        title:
          "kiểm tra xem khách hàng có làm đúng theo tiến trình chất lượng không",
        isKey: false,
      },
      {
        title: "xác định các chính sách không hiệu quả và k hiệu quả",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "kiểm tra xem có bảo đảm yếu tố chi phí không",
      },
    ],
    idx: 661,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn là giám đốc dự án cho một hệ thống thông tin . Một ng từ ban quản lí chất lượng dự án tới yêu cầu kiểm toán chất lượng của dự án.đội dự án vì áp lực công việc mà phản đối việc này.Bạn nên giải thích với họ mục đích của việc kiểm tra chất lượng là:",
  },
  {
    title:
      "Bạn đang thực hiện dự án xây dựng.Kiến trúc khối thép và cáp điện khiến giám đốc chương trình tỏ ý lo lắng sẽ không đáp ứng được các tiêu chuẩn chất lượng.bạn sẽ làm gì trong trường hợp này?",
    idx: 662,
    answers: [
      {
        title:
          "bảo đảm với giám đốc chương trình là trong quá trình lên kế hoạch quản lí chất lượng , chất lượng đã đáp ứng được tiêu chuẩn ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "ước lượng kết quả từ dự án tương tự",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "lập đội quản lí chất lượng ",
      },
      {
        isKey: false,
        idx: 3,
        title: "kiểm tra kết quả của kế hoạch quản lí chất lượng",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn được yêu cầu lựa chọn công cụ và kĩ thuật để thực thi một chương trình bảo đảm chất lượng để bổ sung thêm 1 số hoạt động kiểm soát chất lượng.bạn sẽ lựa chọn gì ?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "kiểm tra chất lượng ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "thử mẫu thổng kê",
        isKey: false,
      },
      {
        title: "biểu đồ pareto",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "phân tích xu hướng",
      },
    ],
    idx: 663,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Sản phẩm ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Công cụ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Chức năng ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Đầu vào ",
      },
    ],

    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 664,
  },
  {
    title:
      "Dự án vận hành một phần mềm mới đang được tiến hành.Giám đốc dự án làm việc với bộ phận đảm bảo chất lượng để khiến họ tin rằng dự án đáp ứng các tiêu chuẩn chất lượng.Việc nào PHẢI thực hiện trước khi có tiến trình này ?",

    idx: 665,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "kiểm lại các vấn đề về chất lượng ",
      },
      {
        isKey: false,
        idx: 1,
        title: "cải tiến chất lượng",
      },
      {
        idx: 2,
        isKey: true,
        title: "có cơ chế đảm bảo chất lượng",
      },
      {
        idx: 3,
        title: "tái thực hiện",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Mục tiêu dự án song hành với tổ chức thực hiện ",
      },
      {
        isKey: true,
        idx: 1,
        title: "chất lượng tăng ",
      },
      {
        idx: 2,
        title: "dự án tập trung vào việc giảm chi phí",
        isKey: false,
      },
      {
        title: "tặng thưởng cho những nỗ lực cá nhân",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 666,

    title:
      "Dự án bạn đang tiến hành đang tăng hiệu quả về chi phí , tăng năng suất , tăng tinh thần làm việc. Lý do dẫn tới điều đó ?",
  },
  {
    idx: 667,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "kết hợp thực hiện các gói công việc",
      },
      {
        isKey: true,
        idx: 1,
        title: "xác định tiêu chuẩn chất lượng ",
      },
      {
        title: "bắt đầu xác định rủi ro",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "thực hiện kế hoạch quản lí dự án",
        isKey: false,
      },
    ],
    title:
      "Giám đốc dự án mới đảm nhận dự án từ giám đốc dự án cũ trong thời gian thực hiện dự án.Giám đốc dự án tiền nhiệm đã tạo ngân sách dự án , xác định các yêu cầu truyền thông và đi dần tới hoàn thiện gói công việc. Vị giám đốc dự án mới cần làm gì tiếp theo?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 668,
    title:
      "Một dự án đang đối mặt với thay đổi lớn tới các sản phẩm chuyển giao của nó.Nếu giám đốc dự án có liên quan tới việc xác định tiêu chuẩn chất lượng nào tương ứng với thay đổi đó thì nghĩa là giám đốc dự án có liên quan tới :",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "việc quản lí chất lượng",
      },
      {
        title: "đảm bảo chất lượng",
        idx: 1,
        isKey: false,
      },
      {
        title: "lên kế hoạch quản lí chất lượng ",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "kiểm soát chất lượng",
      },
    ],
  },
  {
    idx: 669,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "dự án tuyệt đối thành công",
        idx: 0,
        isKey: false,
      },
      {
        title: "dự án không thành công vì vượt quá chỉ tiêu ban đầu ",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "dự án không thành công vì khách hàng vui khi họ phải trả tiền thêm cho công việc",
      },
      {
        isKey: false,
        title:
          "dự án thành công vì đội dự án có cơ hội học hỏi thêm các lĩnh vực chức năng mới và khách hàng thì hài lòng.",
        idx: 3,
      },
    ],
    title:
      "Khi dự án kết thúc , giám đốc dự án xác định là dự án có thêm 4 chức năng và thêm 3 mục công việc. Khách hàng rất hài lòng. So với “ thành công của 1 dự án “ , điều này có nghĩa thế nào ?",
  },
  {
    title:
      "Trong quá trình thực hiện dự án , một thành viên của đội dự án thông tin cho giám đốc dự án là các gói công việc không đáp ứng được yêu cầu chất lượng. Giám đốc dự án đã gặp gỡ tất cả những người có liên quan tới vấn đề này để phân tích .phần nào trong tiến trình quản lí chất lượng mà giám đốc dự án có liên quan tới ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 670,

    answers: [
      {
        title: "thực hiện đảm bảo chất lượng",
        isKey: false,
        idx: 0,
      },
      {
        title: "kiểm soát dự án",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "kiểm soát chất lượng ",
        idx: 2,
      },
      {
        title: "lên kế hoạch quản lí chất lượng",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 671,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Hình thức ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Khen thưởng",
      },
      {
        isKey: false,
        title: "Hình phạt ",
        idx: 2,
      },
      {
        title: "Chuyên gia",
        isKey: true,
        idx: 3,
      },
    ],

    title:
      "Những mẫu sức mạnh nào sau đây được dẫn xuất ra từ sự loại trừ vị trí (của) giám đốc dự án?",
  },
  {
    title: "Điểm cao nhất của hệ thống phân cấp nhu cầu của Maslow là gì ?",
    answers: [
      {
        title: "Sự thỏa mãn sinh lý học ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đạt được sự tồn tại",
      },
      {
        isKey: false,
        idx: 2,
        title: "Cần thiết cho sự kết hợp ",
      },
      {
        title: "Sự tự trọng",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 672,
  },
  {
    idx: 673,

    title: "Các “halo effect”(hiệu ứng hào quang) có xu hướng tới :",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thúc đẩy từ bên trong",
      },
      {
        title: "Sự thuê tốt nhất",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Chuyển ng vào trong quản lý dự án bởi vì họ giỏi về mặt kỹ thuật ",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Chuyển ng vào trong quản lý dự án bởi vì họ có sự đào tạo về quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 674,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Sự tổ chức đội là kỹ thuật tập trung ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Thành viên đội có thể lấy từ nguồn và có thể khó thúc đẩy",
        idx: 1,
        isKey: true,
      },
      {
        title: "Các đội cũng được tập trung",
        isKey: false,
        idx: 2,
      },
      {
        title: "Các đội quá lớn vì thế khó có thể giải quyết",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Một chướng ngại cho đội dự án trong một tổ chức ma trận là :",
  },
  {
    title: "Cái gì liên quan tới thành viên đội tổ chức ma trận EXCEPT?",
    answers: [
      {
        title: "Tự hỏi ai sẽ là người giải quyết sự đánh giá của họ ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Phục vụ nhiều ông chủ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Phát triển cam kết ",
      },
      {
        title: "Tính toán lợi ích khi làm việc trên nhiều dự án",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 675,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 676,
    title:
      "Loại hình tổ chức nào là tốt nhất cho việc quản lý các dự án phức tạp liên quan tới các nỗ lực liên nghành?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Projectized",
      },
      {
        idx: 1,
        isKey: false,
        title: "chức năng",
      },
      {
        title: "dòng ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: " ma trận",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Cưỡng bức",
        idx: 0,
        isKey: false,
      },
      {
        title: "Làm mịn",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thỏa hiệp ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Giải quyết vấn đề",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 677,

    title:
      "Cái đối lập với kỹ thuật quyết định sẽ tạo ra giải pháp cuối cùng nhất là ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 678,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Con người ",
      },
      {
        isKey: true,
        idx: 1,
        title: "Các tài nguyên",
      },
      {
        idx: 2,
        isKey: false,
        title: "chi phí ",
      },
      {
        idx: 3,
        title: "Quản lý ",
        isKey: false,
      },
    ],
    title:
      "các nguyên nhân phổ biến nhất của cuộc xung đột trong một dự án kế hoạch,độ ưu tiên của dự án và:",
  },
  {
    title:
      'những kỹ thuật giải quyết xung đột nào được một quản lý dự án sử dụng khi anh ta nói, "Tôi không thể giải quyết vấn đề này ngay bây giờ!"',
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "giải quyết vấn đề ",
      },
      {
        isKey: false,
        title: "Bắt buộc",
        idx: 1,
      },
      {
        title: "Sự rút đi",
        isKey: true,
        idx: 2,
      },
      {
        title: "Sự thỏa hiệp",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 679,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "a. thời gian",
        isKey: true,
      },
      {
        title: ". hoạt động",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "mối quan hệ ",
        idx: 2,
      },
      {
        idx: 3,
        title: "người phụ trách của mỗi hoạt động ",
        isKey: false,
      },
    ],
    title:
      "Cái gì mà 1 biểu đồ tài nguyên chỉ ra mà 1 ma trận phân công trách nhiệm không chỉ ra ?",

    idx: 680,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "bạn vừa được chỉ định làm quản lý dự án cho một dự án viễn thông lớn. Dự án này một năm thực hiện được khoảng 1 nửa . Các nhóm dự án bao gồm 5 người bán hàng và 20 nhân viên của công ty bạn. Bạn muốn hiểu xem ai có trách nhiệm làm gì trong dự án. Bạn sẽ tìm thấy thông tin đó ở đâu ?",
    answers: [
      {
        title: "ma trận phân công trách nhiệm",
        idx: 0,
        isKey: true,
      },
      {
        title: "biểu đồ tài nguyên",
        idx: 1,
        isKey: false,
      },
      {
        title: "biểu đồ thanh ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Sơ đồ tổ chức dự án",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 681,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 682,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phân bố kế hoạch dự án dựa theo kế hoạch quản lí giao tiếp",
      },
      {
        title: "Xác nhận tính sẵn có của nguồn tài nguyên",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Cải tiến kế hoạch quản lí dự án để phản ánh thông tin giá cả chính xác hơn",
      },
      {
        title: "Công bố biểu đồ minh họa đường thời gian",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Người quản lí dự án công bố kế hoạch dự án.Các hoạt động,thời gian bắt đầu,thời gian kết thúc ,tài nguyên được nhận biết.PM nên làm gì tiếp theo?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "trong quá trình lập kế hoạch dự án trong một tổ chức ma trận, người quản lý dự án xác định cần phải bổ sung thêm tài nguyên con người . Từ đó ông sẽ yêu cầu các nguồn lực này từ ai??",
    idx: 683,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "quản lý dự án",
      },
      {
        isKey: true,
        title: "chức năng quản lý",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "đội ",
      },
      {
        idx: 3,
        isKey: false,
        title: "nhà tài trợ dự án ",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong mỗi cuộc họp của dự án,PM hỏi mỗi thành viên trong đội để miêu tả công việc mỗi người làm,PM giao cho mọi người công việc mới.Độ dài của các cuộc họp sẽ tăng lên bởi vì rất nhiều các công việc được gán..Những nguyên nhân nào sau đây sẽ xảy ra loai trừ?",

    answers: [
      {
        title: "thiếu WBS",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "thiếu ma trận gán công việc phản hồi",
      },
      {
        title: "thiếu cấp bậc nguồn tài nguyên",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "thiếu các đội trong kế hoạch dự án",
      },
    ],
    idx: 684,
  },
  {
    title:
      "Bạn là PM lãnh đạo đội dự án cross-functional trong điều kiện ma trận yếu.Các thành viên báo cáo cho bạn các hàm,bạn không trực tiếp thưởng cho họ.Dự án rất khó khăn,những ràng buộc thời gian dày đặc,khó khăn về tiêu chuẩn chất lượng.Những loại năng lực nào của PM sau đây ảnh hưởng nhất tới vấn đề này?",

    answers: [
      {
        idx: 0,
        title: "Sự liên quan ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Chuyên môn",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Hình phạt ",
      },
      {
        title: "Chính thức",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 685,
  },
  {
    title:
      "Thành viên của đội không thực hiện tốt trong dự án,vì cô ấy không có kinh nghiệm trong việc phát triển hệ thống.Không ai nói rõ công việc để làm.Giải pháp tôt nhất của PM là gì?",
    idx: 686,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Hỏi ý kiến quản lí chức năng động viên sự hoàn thành dự án cho các thành viên trong đội",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Giành được tài nguyên mới có kĩ năng hơn trong việc phát triển",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Sắp xếp các thành viên trong đôi để đào tạo lại",
      },
      {
        title: "Chỉ định lưu trữ kế hoạch dự án",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "PM mới tìm được 1 bản hợp đồng con cho dự án của cô ấy.Thành viên trong dự án phản hồi các phần của dự án không theo bản hợp đồng.Để giải quyết vấn đề này,PM nói:”bạn sẽ từ bỏ 1 vài thứ để giải quyết vấn đề này”.Phương pháp giải quyết xung đột nào cô ấy sẽ sử dụng?",
    answers: [
      {
        idx: 0,
        title: "Sự đương đầu",
        isKey: false,
      },
      {
        isKey: true,
        title: "Sự thỏa hiệp",
        idx: 1,
      },
      {
        title: "Sự san bằng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Giao tiếp",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 687,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Quản lí đội D ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "gặp mình quản lí dự án",
      },
      {
        title: "quản lí và quản lí dự án ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "quản lí dự án và lãnh đạo đội C",
        isKey: true,
      },
    ],
    title:
      "Dự án có 1 vài đội,đội C làm lỡ mất deadline trong quá khứ.Nguyên nhân do đội D phá vỡ những chỉ trích từ những lần trước.Là người lãnh đạo đội D,ban nhận văn bản của deadline sắp tới cũng bị lỡ,bạn nên gặp:",
    idx: 688,
  },
  {
    idx: 689,
    title:
      "Giám đốc và cả đội dự án đều mong chờ dự án mới.Đây là nhiệm vụ quản lý dự án đầu tiên.Đội dự án cảm thấy họ sẽ có khả năng hoàn thành công việc mà họ chưa được làm trước đây bao giờ.Có 29 người góp phần để miêu tả sản phẩm và đội dự án có 9 chuyên gia nhiều kinh nghiệm trong lĩn vực của họ.Đi qua một phần kế hoạch ,ba nhóm của đội ngũ kỹ thuật đang bất đồng ý kiến về phạm vi của hai phát biểu.Một nhóm chỉ vào WBS dự thảo và nói rằng các gói công việc cần được bổ sung thêm.Một nhóm nói rằng các gói công việc đặc biệt không nên được làm.Thành viên trong nhóm thứ ba đồng ý với cả 2 nhóm trên,Giám đốc dự án tốt nhất nên giải quyết xung đột như thế nào?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Anh ta nên lắng nghe các quan điểm khác nhau,xác định lựa chọn tốt nhất,và thực hiện sự lựa chọn đó. ",
        isKey: false,
      },
      {
        title:
          "Anh ta nên hoãn lại các cuộc thảo luận,gặp gỡ các cá nhân và xác định phương pháp tốt nhất.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Anh ta nên lắng nghe các quan điểm khác nhau,động viên thảo luận hợp lý,và tạo điều kiện thuận lợi cho một thỏa thuận.",
      },
      {
        title:
          "Anh ta sẽ giúp các nhóm tập trung vào khía cạnh thích hợp với quan điểm của họ,và xây dựng sự thống nhất bằng cách giảm bớt sự căng thẳng và xây dựng nhóm tiêu điểm chung.",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Dự án vừa được bắt đầu và gồm 14 người ở những ban khác nhau.Hợp đồng được kí bởi một người và gồm hơn 30 yêu cầu chính phải được đáp ứng trên dự án.Các nhà tài trợ thông báo cho người quản lý dự án răng SPI phải được giữ giữa 0,95 và 1,1.Vài phút khảo sát kết quả của 34 người giữ tiền đặt cọc và các mục tiêu tiến độ của dự án bị hạn chế.Một giám đốc dự án vừa mới được thuê.Loại quyền lực quản lý dự án nào sau đây tốt nhất giúp giám đốc dự án đạt được sự hợp tác của những người khác?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 690,

    answers: [
      {
        idx: 0,
        title: "Chính thức",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Ám chỉ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Hình phạt ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Chuyên gia ",
      },
    ],
  },
  {
    title:
      "Giám đốc dự án đang cố gắng hòa giải cuộc tranh luận giữa 2 nhóm thành viên.Một nhóm nói hệ thống nên được tích hợp trước khi kiểm thử và nhóm còn lại cho rằng mỗi hệ thống nên được kiểm thử trước khi tích hợp.Dự án gồm hơn 30 người,và có 12 hệ thống cần được tích hợp.Các nhà tài trợ đang yêu cầu việc tích hợp phải xảy ra cùng một thời gian.Ý kiến tốt nhất của giám dự án có thể làm để giải quyết xung đột là gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 691,
    answers: [
      {
        title: "Làm theo cách của tôi ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Chúng ta hãy bình tĩnh và hoàn thành công việc",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Hãy giải quyết điều này một lần nữa vào tuần tới sau khi tất cả chúng ta bình tĩnh ",
      },
      {
        isKey: true,
        title:
          "Chúng ta hãy làm kiểm thử có giới hạn trước khi tích hợp và hoàn thành kiểm thử sau khi tích hợp",
        idx: 3,
      },
    ],
  },
  {
    idx: 692,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nhóm",
      },
      {
        isKey: false,
        title: "Quản lý cấp cao",
        idx: 1,
      },
      {
        title: "Khách hàng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Nhà tài trợ ",
      },
    ],
    title:
      "Một dự án là ở giữa các quá trình thực hiện khi một bên liên quan đề xuất một sự thay đổi mới.Sự thay đổi này sẽ gây ra 3 sự đại tu chính của dự án.Cúng lúc,giám đốc dự án phát hiện ra rằng một gói công việc chính đã không hoàn thành vì thành viên trưởng nhóm đã chuyển đến một dự án có mức ưu tiên cao hơn.Người nào sau đây tốt nhất cho giám đốc dự án để giải quyết những vấn đề này?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Sản phẩm ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Công cụ",
      },
      {
        idx: 2,
        title: "Chức năng ",
        isKey: false,
      },
      {
        title: "Đầu vào ",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 693,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
  },
  {
    idx: 694,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Đưa những chỉ dẫn được dịch bởi một bên có kinh nghiệm hơn ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Tìm các tác động bản dịch chất lượng kém hướng dẫn cho các móng",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Đưa vấn đề đến sự chú ý của nhóm và yêu cầu họ xem xét các vần đề dịch thuật khác",
      },
      {
        isKey: false,
        title:
          "Thông báo cho các nhà tài trợ các vấn đề trong bản báo cáo dự án tiếp theo",
        idx: 3,
      },
    ],
    title:
      "Khi làm việc trên các dự án đang được tiến hành ,giám đốc dự án nghe được 2 nhân viên tranh cãi về một bộ tài liệu hướng dẫn.Giám đốc dự án điều tra và phát hiện ra rằng bộ tài liệu cho việc xây dựng móng bê tông đang được đổ được dịch kém cỏi giữa những ngôn ngữ khác nhau đang sử dụng trên dự án.Điều nào sau đây là tốt nhất để giám đốc dự án làm trước tiên?",
  },
  {
    title:
      "Kỹ thuật giải quyết xung đột có thể được sử dụng trong một dự án bao gồm đương đầu,làm nhẵn,sự bắt buộc và ",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Rút lui ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Hướng dẫn",
      },
      {
        title: "Tổ chức ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Điều khiển ",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 695,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 696,
    answers: [
      {
        idx: 0,
        title: "Thu hồi/Rút lui ",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chỉ đạo",
      },
      {
        isKey: false,
        idx: 2,
        title: "Tổ chức ",
      },
      {
        isKey: false,
        title: "Tổ chức ",
        idx: 3,
      },
    ],
    title:
      "Kỹ thuật giải quyết xung đột có thể được sử dụng trong một dự án bao gồm đối đầu, thương lượng, bắt buộc và",
  },
  {
    title:
      "Có một dự án được thử thách để quản lý.Mối người được thúc đẩy hoàn thành dự án trong một khoảng thời gian.Nhưng đáng tiếc, căng thẳng đã xảy ra đên độ các buổi hpj nhóm đều la hét,hỗn loạn và ít công việc được thực hiện trong suốt buổi họp .Một thành viên của nhóm yêu cầu được xin lỗi trong các buổi họp nhóm trong tương lai.Như tất cả đang lật đổ anh ấy.Trong lúc ấy ,nhà tài trợ đã yêu cầu tham dự cuộc họp nhóm trên để hiểu rõ hơn cách thực hiên dự án và các khach hàng đã bắt đầu thảo luận về việc thêm pham vi dự án!trong tinh huông này điều gì là tốt nhất cho PM",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 697,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Yêu cầu các nhà tài trợ nếu các thông tin cần thiết có thể gửi trong một báo cáo hơn là có ông ta tham dự ",
      },
      {
        isKey: false,
        title:
          "Thông báo cho các thành viên trong nhóm,nhưng người được miễn cacs buổi họp các giai trị truyền thông giông như trong cuộc họp",
        idx: 1,
      },
      {
        title:
          "tạo ra các quy tắc nền tảng cho cuộc họp và giới thiệu nó đến nhóm ",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Tổ chức thực hiện xây dựng nhóm có liên quan tới tất cả các thành viên trong nhóm ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 698,
    answers: [
      {
        isKey: true,
        title:
          "Làm thế nào để 1 thành viên trong nhóm cá nhân được thực hiên trong dự án ",
        idx: 0,
      },
      {
        title: "1 đánh giá hiệu quả của đội dự án",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "1 nhóm nổ lực xây dựng ",
        idx: 2,
      },
      {
        title: "Giảm tỉ lệ doanh thu nhân viên ",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Các hoat động đánh giá dự án khác nhau từ các đội đánh giá trong dự án biểu diển sự đánh giá tập trung trong",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phân tích rủi ro/nguy cơ chính xác ",
      },
      {
        title: "Chứng thực rằng quyết định đã giải quyết được vấn đề",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nhà tài trọ đã phê duyệt quyết định",
      },
      {
        title: "Sử dụng biểu đố Ishikawa",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 699,
    title:
      "Một PM có 1 vân đề phức tạp phải giải quyết và đưa quyết định về những j cần thiết để thực hiện.Một vài tháng sau vấn đề lại được nổi lên.PM chắc chắn đã không làm:",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Đối chất ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Thỏa hiệp",
      },
      {
        idx: 2,
        isKey: false,
        title: "Thương lượng ",
      },
      {
        title: "Bắt buộc ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn phát hiên ra rằng nhà thầu phụ chính cho dự án thường xuyeencung cấp các gói thầu muộn.Nhà thầu phụ tiếp cận bạn và hỏi bạn tiếp tục chập nhận phân phối muộn để đổi lầy việc giảm chi phí dự án.Đây là một ví dụ của",
    idx: 700,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bằng lời nói",
      },
      {
        title: "Bằng văn bản",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Chính thức",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Không lời ",
      },
    ],
    idx: 701,
    title:
      "Mở rộng sử dụng giao tiếp……. rất có thể trợ giúp giải quyết các vấn để phức tạp",
  },
  {
    answers: [
      {
        title: "Nội bộ trong nhóm dự án ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Nội bộ trong tổ chức",
        isKey: false,
      },
      {
        idx: 2,
        title: "Giao tiếp bên ngoài với khách hàng",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Cả giao tiếp trong và ngoài dự án",
      },
    ],

    title: "WBS có thể hỗ trợ hiệu quả cho giao tiếp trong trường hợp nào?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 702,
  },
  {
    title: "Chặn giao tiếp cho kết quả tốt nhất trong trường hợp",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 703,

    answers: [
      {
        title: "dự án bị trì hoãn",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "mức độ tin tưởng được tăng cường",
      },
      {
        isKey: true,
        idx: 2,
        title: "xung đột xảy ra ",
      },
      {
        idx: 3,
        isKey: false,
        title: "quản lý cấp trên không hài lòng",
      },
    ],
  },
  {
    idx: 704,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "giao tiếp thường được tăng cường khi bên gửi………..bên nhận",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "nói chuyện với",
      },
      {
        title:
          "thể hiện thái độ (bằng những chuyển động của cơ thể như khuôn mặt) khi nói chuyện với",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "nói chậm với",
      },
      {
        title: "thể hiện sự quan tâm đến quan điểm của",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "sai sót được phát hiện",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "khách hàng yều cầu thêm công việc không có trong hợp đồng",
      },
      {
        idx: 2,
        title:
          "dự án có một lịch trượt bao gồm những thay đổi quan trọng trong dự án",
        isKey: false,
      },
      {
        isKey: false,
        title: "dự án có chi phí vượt quá cho phép",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 705,
    title: "văn bản chính thức tương ứng cho khách hàng được yêu cầu khi",
  },
  {
    idx: 706,
    answers: [
      {
        title: "giao tiếp viết hình thức",
        idx: 0,
        isKey: false,
      },
      {
        title: "giao tiếp bằng lời nói hình thức ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "giao tiếp viết không hình thức",
        idx: 2,
      },
      {
        idx: 3,
        title: "giao tiếp bằng lời nói không hình thức",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "một giám đốc dự án có một vấn đề với một thành viên trong đội dự án. Đâu là giao tiếp tốt nhất để giải quyết vấn đề này?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "giao tiếp bằng hợp đồng nên hướng tới",
    idx: 707,

    answers: [
      {
        title: "giao tiếp viết chính thức",
        idx: 0,
        isKey: true,
      },
      {
        title: "giao tiếp lời nói chính thức",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "giao tiếp viết không chính thức",
      },
      {
        isKey: false,
        idx: 3,
        title: "giao tiếp lời nói không chính thức",
      },
    ],
  },
  {
    title:
      "bản báo cáo tình trạng của dự án là một ví dụ của hình thức giao tiếp ?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "giao tiếp viết chính thức",
      },
      {
        isKey: false,
        title: "giao tiếp lời nói chính thức",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "giao tiếp viết không chính thức",
      },
      {
        title: "giao tiếp lời nói không chính thức",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 708,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "ít quan trọng",
        idx: 0,
      },
      {
        title: "tầm quan trọng lớn",
        idx: 1,
        isKey: true,
      },
      {
        title: "chỉ quan trọng khi bao gồm cả chi phí và thời hạn dự án",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "chỉ quan trọng để đảm bảo tham gia thảo luận",
      },
    ],
    title:
      "khi một giám đốc dự án tham gia đàm phán, kỹ năng giao tiếp không bằng lời nói trong trường hợp:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 709,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 710,
    title:
      "Dự án truyền thông 1 năm đã đi được nửa đoạn đường khi bạn thay thế chỗ giám đốc dự án trước. Dự án kéo theo 3 khách hàng khác nhau và đội dự án 30 người. Bạn muốn biết được các yêu cầu truyền thông và loại công nghệ nào được sử dụng để hỗ trợ trong truyền thông dự án. Bạn tìm ở đâu những thông tin đó",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kế hoạch quản lý dự án",
      },
      {
        title: "Kế hoạch phân phối thông tin ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Biểu đồ cột",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Kế hoạch quản lý truyền thông",
      },
    ],
  },
  {
    idx: 711,
    title:
      "Dự án truyền thông 1 năm đã đi được nửa đoạn đường khi bạn thay thế chỗ giám đốc dự án trước. Dự án kéo theo 3 khách hàng khác nhau và đội dự án 30 người. Bạn muốn biết được các yêu cầu truyền thông và loại công nghệ nào được sử dụng để hỗ trợ trong truyền thông dự án. Bạn tìm ở đâu những thông tin đó",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Kế hoạch quản lý dự án",
      },
      {
        isKey: false,
        idx: 1,
        title: "Kế hoạch phân phối thông tin",
      },
      {
        title: "Biểu đồ cột ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Kế hoạch quản lý truyền thông",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 712,

    title:
      "Thông tin dự án được phân phối dựa theo kế hoạch quản lý truyền thông. Một số sản phẩm bàn giao dự án bị thay đối tương ứng với kế hoạch quản lý dự án. Một nhà tài trợ đã biểu thị sự ngạc nhiên với giám đốc dự án đối với sự thay đổi sản phẩm bàn giao đã công bố trước đó. Tất cả các nhà tài trợ khác đều nhận được sự liên lạc bao gồm sự thông báo thay đổi. Giám đốc dự án nên làm gì?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Xác định tại sao bên tài trợ không nhận thông tin và cho nhà tài trợ đó biết thông tin được công bố",
      },
      {
        title:
          "Hỏi nhà quản lý chức năng tại sao nhà tài trợ đó không biết về trách nhiệm của họ.",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Xem xét kế hoạch quản lý truyền thông và kiểm tra lị nếu cần thiết",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "Đánh dấu địa điểm lần tới tổ chức họp mặt để các nhà tài trợ khác không bị lỡ mất các thay đổi được công bố",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "7 ",
      },
      {
        idx: 1,
        isKey: true,
        title: "10",
      },
      {
        isKey: false,
        title: "12 ",
        idx: 2,
      },
      {
        title: "16 ",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 713,

    title:
      "Truyền thông là chìa khóa sự thành công của dự án. Với tư cách là một giám đốc dự án, bạn có 3 nhà tài trợ mà bạn phải liên lạc. Bạn có 6 kênh truyền thông. Một nhà tài trợ mới của bạn mới tham gia nên bạn phải liên lạc với họ. Có bao nhiêu kênh mà bạn có hiện giờ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Đang nói gì và khi nào ",
        isKey: false,
      },
      {
        title: "Đang nói gì, ai nói và khi nào trong ngày",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sự lịch sự và họ nói những gì",
      },
      {
        title: "Độ cao và âm của giọng, và sự lịch sự ",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Hai người tranh luận với nhau cái gì cần thiết để hoàn tất gói công việc. Nếu giám đốc dự án muốn biết cái gì đang diễn ra, cô ấy phải chú ý nhiều nhất vào:",
    idx: 714,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giao ước không hình thức ",
      },
      {
        idx: 1,
        isKey: true,
        title: "Văn bản hình thức",
      },
      {
        title: "Giao ước hình thức",
        isKey: false,
        idx: 2,
      },
      {
        title: "Văn bản không hình thức",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 715,

    title:
      "Giám đốc dự án có một đội dự án bao gồm người đến từ 4 quốc gia. Dự án rất quan trọng cho công ty, và giám đốc dự án quan tâm đến sự thành công của nó. Độ dài lịch làm việc của dự án có thể chấp nhận được. Loại phương pháp truyền thông nào mà anh ta nên sử dụng?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Chứng tỏ sự nhã nhặn và sự chú ý lẫn nhau, điều khiển ai được cho phép để nói",
        isKey: false,
      },
      {
        idx: 1,
        title: "Lịch họp ở mức nâng cao",
        isKey: false,
      },
      {
        title: "Có một mục đích cho cuộc họp, với sự phục vụ đúng người",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Tạo và công bố đề tài thảo luận và tập hợp các luật, quy định để điều khiển của họp mặt",
        isKey: true,
      },
    ],

    idx: 716,
    title:
      "Tình trạng cuộc họp dự án không tốt lắm. Mọi người đang nói cùng một lúc, có nhiều người không tham gia và có nhiều đề tài được tranh luận một cách hỗn độn. Quy tắc nào dưới đây cho các cuộc họp có hiểu quả ?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 717,

    title:
      "Bạn được phân công làm giám đốc dự án cho một dự án sản xuất lớn. Dự án một năm đã hoàn thành một nửa. Nó kéo theo 5 khách hàng khác nhau và 20 thành viên của công ty bạn trong đội dự án. Bạn muốn nhanh chóng xem xét dự án đang đứng ở đâu. Loại báo cáo nào duới đây có hữu ích nhất trong việc tìm thông tin như vậy?",
    answers: [
      {
        idx: 0,
        title: "Tình trạng công việc",
        isKey: false,
      },
      {
        title: "Tiến độ",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Dự báo",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Truyền thông",
      },
    ],
  },
  {
    idx: 718,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Hỏi xem thành viên đội dự án phản hồi lại điều mà giám đốc dự án nói. ",
        isKey: true,
        idx: 0,
      },
      {
        title:
          "Xem xét lại danh sách thông tin liên lạc của tất cả các nhà tài trợ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hỏi các thành viên đội dự án xem có thay đổi yêu cầu không",
      },
      {
        isKey: false,
        idx: 3,
        title: "Xem xét lại lịch cuộc họp sắp tới",
      },
    ],
    title:
      "Đội dự án đang đi thăm nhà máy sản xuất của một trong số các nhà cung cấp. Điều nào dưới đây là điều quan trọng nhất cần thực hiện trong bất kỳ cuộc gọi điện thoại cho giám đốc dự án , được thực hiện bởi thành viên đội dự án?",
  },
  {
    idx: 719,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Để cho A và B biết được PM nghe được cuộc nói chuyện này và hỏi họ để giải quyết trực tiếp bất kỳ câu hỏi nào ",
      },
      {
        isKey: false,
        title:
          "tổ chức một buổi gặp mặt có tất cả những bên liên quan để thông báo về tình trạng hiện tại của dự án",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "gửi cho A, B một bản sao của các bản ghi và đề nghị họ viết comments",
      },
      {
        title:
          "tổ chức một buổi gặp mặt với A, B để cho phép họ nói lên những vấn đề của họ",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Một giám đốc dự án (PM) nghe được một cuộc nói chuyện giữa 2 bên liên quan – những người đang nói về sự không vui của họ cùng với những ảnh hưởng trên bộ phận của họ, A nói: nếu dự án này thực hiện đúng thời gian và B trả lời: SPI là 1.05. bên A hỏi nếu PM của dự án biết được sự liên quan của B. B trả lời : “anh ta không dảm bảo”. trong trường hợp này, PM cần làm gì là tốt nhất?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Sản phẩm ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Công cụ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chức năng ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Đầu vào ",
      },
    ],
    idx: 720,
    title:
      "Sự tương ứng, những thay đổi hợp đồng và các yêu cầu phải trả là ......của quản lý hợp đồng",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 721,
    title:
      "một giám đốc dự án (PM) được giao nhiệm vụ quản lý 4 dự án của công ty và đang được xem xét để tham vào nhóm quản lý văn phòng của dự án. Sau đây là quá trình công việc của anh ta. Dự án đầu tiên có sự sai lệch chi phí là -500, được dùng 2 tài nguyên quan trọng, cần thiết để làm lại các phần của dự án trong quá trình thực hiện dự án và có thứ tự ưu tiên thứ 14 của công ty. Dự án thứ 2 kết thúc với sai lệch thời hạn là +100, được hoàn thành với sự rút ngắn thời hạn ban đầu và nhận được một lá thư khen ngợi từ nhà tài trợ, nhưng sản phẩm của dự án không dùng được. dự án thứ 3 có hơn 23% thay đổi so với dự kiến, có một SPI là 0.90 và 25 tệp mở trong vấn để đăng nhập khi dự án đã hoàn thành.Mỗi dự án có kinh phí là 1.000$ và có từ 20% đến 28% thay đổi so với dự kiến. mô tả nào sau đây tốt nhất để giải thích tại sao điều này lại xảy ra?",

    answers: [
      {
        title:
          "Giám đốc dư án chỉ được quản lý dự án mức ưu tiên thấp và anh ta đã rút ngắn thời hạn và điều này thể hiện anh ta không có kỹ năng làm việc trong việc quản lý văn phòng của dự án",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Các vấn đề đăng nhập không nên được dùng trong dự án quy mô như thế này, thể hiện anh ta không có kỹ năng là một giám đốc dự án",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Một PM làm việc không hiệu quả (bao gồm cả các bên liên quan), thể hiện rằng anh ta không có kiến thức trong quản lý dự án",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Giám đốc dự án có 2 tài nguyên quan trọng trong đội ngũ của họ và vẫn cần lặp lại các giai đoạn trong quá trình thực hiện dự án, thể hiện rằng anh ta khôn có kỹ năng trong quản lý văn phòng của dự án ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Người quản lí dự án tập trung vào các yêu cấu của khach hàng",
        isKey: false,
        idx: 0,
      },
      {
        title: "Quản lí chức năng không bao gồm kế hoạch quản lí truyền thông",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Hoạt động của người thành công nên được xem xét,không phải là nhừng người tiền nhiệm ",
      },
      {
        title: "Người không được cho vào mốc quan trọng",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 722,

    title:
      "Trong quá trình thực hiên dự án ,mọi thứ đang thực hiện đúng theo yêu cầu.Hệ thống ủy quyền làm việc cho phép mọi người biêt khi nào cần bắt đầu công việc và việc đăng nhập giúp mọi người theo dõi yêu cầu các bên liên quan.Tỉ lệ lợi nhuận được cải thiện và các nhà tài trợ đưa ra đánh giá nỗ lực của họ cho mỗi thành viên trong đội bằng các mốc lưu trữ.Người quản lí dự án đưa ra ý kiến cho các thàn thành viên để thu được kết quả từ việc hoàn thành của người công việc của họ là sau 2 ngày.Câu nào là đúng nhất trong các câu sau.",
  },
  {
    title:
      "Có nhiều gói công việc kết thúc thành công trong dự án và khách hàng đưa ra 1số tiêu chuẩn để đánh giá.Dự án dựa trên lịch trình đã đế ra khi khi các kế hoạch hoạt động quan trọng bị trở ngại.Chỉ còn 4 người cho dự án.Có 2 thành viên khác được chuyển sang nếu cần. Người quản lí dự án nhận 3 thành viên khácmà họ đang cố gắng được chuyển vào dự án bởi vì họ thấy dự án không có khả năng thành công.Khi người quản lí theo du án này thì họ nghiên cứu để các thành viên đó giao tiếp mà không cần có dịa chỉ.Câu nào đúng nhất ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "Có các nhân viên túc trực để giúp đỡ khi gặp khó khăn",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Điều tra lý do tại sao tiến độ dự án là tích cực",
      },
      {
        title: "Xem ai có thể thay thế 3 thành viên đó",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Tạo ra một vấn đề đăng nhập mới",
      },
    ],
    idx: 723,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án có 13 thành viên và có ảnh hưởng tới 15 bộ phận trong công ty. Đến giờ dự án được hoàn thành 20% và có bản ghi thực thi thành công từ 5 bộ phận ảnh hưởng, PM tổ chức party để ăn mừng. PM mời đến party những bên liên quan chủ chốt trong dự án để cho họ thấy được thnafh quả đạt được.Tại party đó, PM cố gắng gặp gỡ thêm các đối tác có thể giúp cho dự án thành công hơn. Anh ta vô tình nghe được một quản lý trong số các bộ phận đang nói về việc thiết lập các buổi gặp mặt thường xuyên hơn trong dự án, điều tốt nhất mà PM nên làm đầu tiên là:",

    idx: 724,
    answers: [
      {
        isKey: false,
        title: "ghi lại hiệu quả của buổi party này ",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "xem lại các phương pháp phân phối thông tin trong dự án",
      },
      {
        idx: 2,
        title:
          "tổ chức một buổi họp mặt cho các bên liên quan để bàn về vấn đề nà ",
        isKey: false,
      },
      {
        title:
          "đảm bảo rằng người quản lý này đã có một bản copy về kế hoạch giao tiếp, vì thế anh ta nên nghĩ đến việc gửi ý kiến này đến PM",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 725,
    answers: [
      {
        idx: 0,
        title:
          "liên lạc với PM của dự án để cung cấp anh ta cùng thời hạn của mình",
        isKey: false,
      },
      {
        title: "bao gồm thông tin trên bản ghi kế tiếp của anh ta",
        idx: 1,
        isKey: false,
      },
      {
        title: "yêu cầu vấn đề này được thêm vào các vấn đề của dự án",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "đề nghị hành động khắc phục",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "một dự án lớn đang tiến hành khi một trong các thành viên của nhóm xem lại bản báo cáo về trạng thái của dự án. Anh ta thấy rằng, hiện tại dự án đang muộn so với thực tế, khi anh ta xem bản báo cáo thêm, anh ta nhận ra rằng việc chậm trễ này sẽ gây ra là do một trong những hoạt động tiếp theo của anh ta là sẽ ra nước ngoài và không thể làm việc công việc của mình. Đây là một vấn đề quan tâm rất lớn vì anh ta rất hy vọng là dự án thành công và anh ta không muốn là nguyên nhân cho sự chậm trễ của dự án. Đâu là cách giải quyết tốt nhất?",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "giữ lại một file lưu trữ những yêu cầu không có trong dự án.",
      },
      {
        title: "đảm bảo rằng quá trình điều khiển thay đổi không được ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "duy trì một giải pháp",
      },
      {
        idx: 3,
        title:
          "giữ buổi gặp gỡ với những bên liên quan nói về những công việc không bao gồm trong dự án",
        isKey: true,
      },
    ],
    title:
      "dự án của bạn có một thời gian khó khăn nhận được phê duyệt của kế hoạch quản lý dự án vì có một số bên liên quan mà yêu cầu của họ không được phê duyệt trong dự án. Những bên liên quan này đã tổ chức và tổ chức lên dự án trong khi họ tổ chức buổi gặp mặt sau khi gặp gỡ về các các yêu cầu của họ. Dự án này cuối cùng được phê duyệt và công việc được bắt đầu 6 tháng trước. tất cả những phát biểu nên được dự phòng để thực thi TRỪ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 726,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "giao tiếp song song",
      },
      {
        isKey: false,
        title: "Thêm vào bản ghi sau cuộc điện thoại",
        idx: 1,
      },
      {
        isKey: false,
        title: "Chú ý tốt hơn đến việc xác định yêu cầu giao tiếp",
        idx: 2,
      },
      {
        isKey: true,
        title: "phản hồi trong truyền thông",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 727,
    title:
      "PM đang mong đợi một giải pháp được gửi từ e-mail của một thành viên trong hôm nay. Vào cuối ngày, PM này liên lạc với thành viên của đội vì chưa nhận được thư. Nhân viên này xin lỗi và nói là anh ta không thể gửi thư, và nó sẽ được gửi qua mail. Nhân viên này giải thích rằng anh ta đã thông báo với PM về sự việc này trong suốt cuộc điện thoại trong khi PM đang đi du lịch và PM không thể nghe rõ vì sóng ở đó yếu, điều gì có thể tránh được vấn đề này?",
  },
  {
    answers: [
      {
        title: "bản ghi lịch sử cho các dự án tương lai.",
        isKey: true,
        idx: 0,
      },
      {
        title: "bản ghi kế hoạch cho các dự án hiện tại",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "thông báo cho đội dự án về những gì PM đã làm được",
        isKey: false,
      },
      {
        isKey: false,
        title: "thông báo cho đội dự án về kế hoạch quản lý dự án ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "những thủ tục của công ty yêu cầu tạo ra một tài liệu. phát biểu nào sau đây tốt nhất để dùng cho quản lý giao tiếp?",
    idx: 728,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "PM ",
        isKey: false,
      },
      {
        title: "đội ngũ của dự án",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nhà tài trợ ",
      },
      {
        isKey: true,
        idx: 3,
        title: "các bên liên quan",
      },
    ],

    title: "Chương này (quản lý giao tiếp) được hoàn thành tốt nhất bởi:",
    idx: 729,
  },
  {
    idx: 730,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Tất cả những điều sau là những yếu tố việc đánh giá rủi ro của dự án, Ngoại trừ ?",
    answers: [
      {
        title: "Risk event ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Risk probability (tần suất xảy ra rủi ro)",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Amount at stake (vốn đầu tư)",
        isKey: false,
      },
      {
        title: "Insurance premiums (phí bảo hiểm)",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        title: "Lãi 100000 ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Mất 60000",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Lãi 20000",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mất 40000",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nếu 1 dự án có 60% cơ hội lãi 100.000$ và 40% mất 100000$, thì dự kiến giá trị tiền tệ cho dự án là: ",
    idx: 731,
  },
  {
    title:
      "Giả sử khoảng ước tính là +/-3 sigma từ phần chính, trong các khoảng ước tính dưới đây, khoảng nào chứa ít rủi ro nhất ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 732,
    answers: [
      {
        title: "30 ngày, +/- 5 ngày ",
        idx: 0,
        isKey: false,
      },
      {
        title: "22-30 days",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Tốt nhất = 26 ngày, rất có thể là = 30 ngày, tồi nhất = 33 ngà",
        idx: 2,
      },
      {
        title: "Khoảng 28 ngày ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Trường hợp nào trong các rủi ro có thể gây cản trở tới tiến độ của dự án ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 733,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Trễ trong việc chấp nhận các yêu cầu hiện tại ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Chi phí mua nguyên vật liệu tăng đáng kể ",
      },
      {
        idx: 2,
        title: "Tranh chấp hợp đồng làm tăng các khoản thanh toán ",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Không giữ đúng thời gian các cuộc họp xem xét lại kế hoạch đã triển khai ",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Nhỏ hơn 1% ",
        idx: 0,
        isKey: false,
      },
      {
        title: "20%",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "60% ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "80%",
      },
    ],

    idx: 734,
    title:
      "Nếu khả năng xảy ra rủi ro trong 1 tháng là 20%, và dự án kéo dài 5 tháng, xác suất có thể xảy ra rủi ro trong tháng thứ 4 của dự án là ?",
  },
  {
    idx: 735,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giá trị rủi ro ",
      },
      {
        isKey: false,
        title: "Giá trị hiện tại ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "giá trị tiền tệ đã được loại trừ",
      },
      {
        isKey: false,
        title: "Ngân sách dự phòng ",
        idx: 3,
      },
    ],
    title:
      "Nếu khả năng xảy ra rủi ro là 90% và thiệt hại có thể là 10000$, thì 9000$ là gì ?",
  },
  {
    title: "Các rủi ro có thể được xác định trong tiến trình quản lý rủi ro ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 736,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Phân tích định lượng rủi ro và xác định rủi ro ",
      },
      {
        title: "Xác định rủi ro, theo dõi và kiểm soát rủi ro ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Phân tích định lượng rủi ro, theo dõi và kiểm soát rủi ro ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Xác định rủi ro",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 737,

    title: "Nên làm gì với những rủi ro có trong danh sách theo dõi ?",
    answers: [
      {
        title: "Sử dụng các tài liệu trước của các dự án khác ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Sử dụng tài liệu đó và xem lại trong thời gian thực hiện dự án",
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Bỏ chúng sang 1 bên vì họ đã phủ sẵn trong các kế hoạch dự phòng của bạn ",
        idx: 2,
      },
      {
        idx: 3,
        title: "document thêm và đưa chúng cho khách hàng ",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "The team rank the project risks (đội dự án sắp xếp mức độ các rủi ro của dự án)",
        isKey: true,
      },
      {
        title: "PM ước tính dự án",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "The team schedule the project(cho đội lập lịch cho dự án)",
      },
      {
        isKey: false,
        title:
          "Quản lý dự án có thể biết các PM khác hoạt động trong dự án như thế nào?",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Risk tolerance được xác định để giúp đỡ:",

    idx: 738,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thông tin lịch sử",
      },
      {
        idx: 1,
        isKey: false,
        title: "Bài học kinh nghiệm ",
      },
      {
        title: "Wbs ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Báo cáo trạng thái dự án ",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Tất cả các cái dưới đây là đầu vào cho tiến trình quản lý rủi ro, Ngoại trừ: ",

    idx: 739,
  },
  {
    answers: [
      {
        title: "Tạo ra các điều khoản hợp động và các điều kiện ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Thay đổi kế hoạch quản lý dự án ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Thay đổi ké hoạch quản lý giao tiếp ",
        isKey: false,
      },
      {
        title: "Thay đổi project charter ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Tất các cac ý sau là các kết quả chung của quản lý rủi ro, Ngoại trừ ?",
    idx: 740,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 741,
    answers: [
      {
        title: "Mitigation (giảm nhẹ)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Transfer(chuyển giao)",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Acceptance(chấp nhận)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Avoidance(tránh né)",
        idx: 3,
      },
    ],
    title: "Mua bảo hiểm là ví dụ rõ ràng nhất về rủi ro:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 742,
    answers: [
      {
        title: "số lượng ban đầu ",
        idx: 0,
        isKey: false,
      },
      {
        title: "con số ban đầu",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "chất lượng ban đầu",
      },
      {
        isKey: false,
        title: "kinh tế ban đầu ",
        idx: 3,
      },
    ],
    title:
      "Bạn đag gặp khó khăn trong việc tính toán ước lượng chính xác chi phí rủi ro, Bạn nên đánh giá về :",
  },
  {
    idx: 743,
    answers: [
      {
        idx: 0,
        title: "Rủi ro còn lại ",
        isKey: true,
      },
      {
        title: "Các rủi ro đã xác định ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Danh sách các rủi ro ưu tiên ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Các ảnh hưởng đã xác định ",
      },
    ],

    title: "Đầu ra của kế hoạch đáp ứng rủi ro: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 744,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Cách giải quyết rủi ro được xác định trong lúc nào ở tiến trình quản lý rủi ro ?",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Xác định rủi ro ",
      },
      {
        title: "Phân tích định tính rủi ro C.Lập ké hoạch đáp ứng rủi ro ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Lập ké hoạch đáp ứng rủi ro ",
        isKey: false,
      },
      {
        title: "Theo dõi và kiểm soát rủi ro ",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    idx: 745,
    answers: [
      {
        idx: 0,
        title: "Xác định rủi ro",
        isKey: false,
      },
      {
        isKey: false,
        title: "Phân tích định tính rủi ro ",
        idx: 1,
      },
      {
        isKey: true,
        title: "Lập kế hoạch đáp ứng rủi ro ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Theo dõi và kiểm soát rủi ro ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Trong quá trình quản lý rủi ro, việc xác định để chuyển giao 1 rủi ro được làm khi nào ?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Xác định tổng thể chỉ số rủi ro của dự án ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Bắt đầu phân tích rủi ro ",
      },
      {
        isKey: true,
        idx: 2,
        title: "Thêm các gói công việc vào trong WBS",
      },
      {
        isKey: false,
        idx: 3,
        title: "Đánh giá lại rủi ro của dự án",
      },
    ],
    title:
      "1 PM vừa hoàn thành kế hoạch đáp ứng rủi ro cho 1 dự án 387000$.Công việc tiếp theo anh ấy cần làm là gì ?",

    idx: 746,
  },
  {
    idx: 747,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "1 Pm hỏi các bên liên quan về việc xác định tần suất và ảnh hưởng của cá rủi ro.Sau đó, anh ấy phân tích các giả thuyết và chuyển sang bước tiếp theo của quản lý rủi ro.Dựa trên thông tin này, PM này đã quên làm gì ?",

    answers: [
      {
        title: "Tính toán xu hướng trong phân tích rủi ro ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Xác định triggers ",
      },
      {
        idx: 2,
        isKey: true,
        title: "Cung cấp 1 chuẩn về ma trận chỉ số rủi ro ",
      },
      {
        title: "Tạo kế hoạch dự phòng ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "PM tập hợp đội dự án, xác định 56 rủi ro trong dự án, xác định được cái gì sẽ kích hoạt các rủi ro, ma trận chỉ số rủi ro, kiểm tra các giả định và đánh giá chất lượng dữ liệu sử dụng.Team tiếp tục chuyển qua tiến trình quản lý rủi ro.PM đó đã quên làm gì ",

    answers: [
      {
        idx: 0,
        title: "Simulation (mô phỏng)",
        isKey: false,
      },
      {
        idx: 1,
        title: "Giảm nhẹ rủi ro ",
        isKey: false,
      },
      {
        title: "Giảm nhẹ rủi ro ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Sự tham gia của các bên liên quan khác",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 748,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Xem xét tất cả các đề xuất chi phí từ đầu tư",
      },
      {
        title: "Kiểm tra ngân sách dự phòng ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hoàn thiện project charter ",
      },
      {
        isKey: true,
        title: "Thực hiện xác định các rủi ro ",
        idx: 3,
      },
    ],

    idx: 749,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là 1 PM cho dự án xây dựng 1 nhà máy mới, mà trước đó bạn chưa làm bao giờ. Chi phí dự án ước tính là 30.000.000$ và có thể có 3 người đầu tư vào.Khi bắt đầu, dự án không thể hủy bỏ, sẽ có chi phí lớn về nhà máy và thiết bị.Với tư cách là PM , bạn phải cẩn thận ?",
  },
  {
    answers: [
      {
        title: "Chấp nhận rủi ro",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tiếp tục điều tra để giảm bớt rủi ro",
      },
      {
        idx: 2,
        isKey: false,
        title: "Tìm cách để giảm rủi ro",
      },
      {
        idx: 3,
        title: "Tìm cách để chuyển rủi ro",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong kế hoạch quản lí rủi ro.đôi của bạn phát hiện ra 434 rủi ro và 16 nguyên nhân chính của các rủi ro đó.Dự án là khâu cuối cùng của một loạt các dự án mà nhóm làm việc với nhau.Nhà tài trợ rất ủng hộ và nhiều lần dành nhiều thời gian để đảm bảo dự án được hoàn thành và ký bởi các bên liên quan Trong kế hoạch dự án,nhóm không thể phát hiện ra cách tốt nhất để làm giảm bớt hay đảm bảo chống lại rủi ro.Đó không phải là công việc mà có thể thuê ở bên ngoài được và cũng không thể xóa bỏ được.Cách giải quyết tốt nhất là gì? ",
    idx: 750,
  },
  {
    idx: 751,
    title:
      "Người quản lí dự án sẽ xác định rủi ro trong dự án của họ.Một vài rủi ro vượt ngoài mong đợi của họ,nhưng họ vẫn mong rủi ro đó nằm trong các rủi ro đã được liệt kê trước đó.Điều này có thể thực hiện như thế nào?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Sử dụng phân tích Monte Carlo sử dụng Internet như một công cụ ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Áp dụng phương pháp đường giới hạn",
        idx: 1,
      },
      {
        isKey: false,
        title: "Xác định tùy chọn cho các hoạt động đúng đắn được khuyến cáo ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Áp dụng kỹ thuật Delphi",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Một bài báo từ tạp chí PMNetword ",
        idx: 0,
      },
      {
        title: "Bản báo cáo phạm vi của dự án từ quá trình lập kế hoạch dự án",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bản kế hoạch tài nguyên từ quá trình lập kế hoạch dự án ",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Một cuộc trao đổi với các thành viên từ các dự án tương tự bị thất bại trong quá khứ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 752,
    title:
      "Một nhà quản lí dự án có kinh nghiệm chỉ bắt đầu công việc cho một máy tích phân (Integrator)công nghệ thông tin lớn.Người quản lí của họ cung cấp cho họ một bản nháp tôn chỉ dự án và ngay lập tức hỏi cô đưa ra phân tích rủi ro của dự án.Cái nào sau đây sẽ giúp đỡ tốt nhất cho sự cố gắng này",
  },
  {
    title:
      "Bạn được bổ nhiệm làm giám đốc của một dự án mới, qui mô lớn và phức tạp. Bởi vì dự án này bussiness-critical( nghiệp vụ quan trọng)và rất rõ ràng,những người quản lí yêu cầu bạn phải phân tích rủi ro của dự án và chuẩn bị chiến lược đáp ứng cho họ càng sớm càng tốt.Những tổ chức có chiến lược quản lí rủi ro thường ít khi được sử dụng hoặc được tuân theo và có một lịch sử của việc quản lí rủi ro tồi.Mốc đầu tiên của dự án trong vòng 2 tuần.Trong việc chuẩn bị kế hoạch đáp ứng rủi ro đầu vào từ cái nào dưới đây thường ít quan trọng nhất:",

    answers: [
      {
        isKey: true,
        title: "Người đỡ đầu của dự án",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Các thành viên dự án ",
      },
      {
        title:
          "Người chịu trách nhiệm cho biểu mẫu và chiến lược quản lí rủi ro",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Các bên liên quan chủ chốt",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 753,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang thực hiện một dự án trong vòng 2 năm để triển khai một công nghệ mới tới lĩnh vực văn phòng trên toàn quốc. Một cơn bão gây ra sự mất điện khi quá trình hoàn thiện dự án gần hoàn tất. Khi có điện trở lại, toàn bộ báo cáo và dữ liệu lịch sử của dự án bị mất mà không có cách nào khôi phục lại. Điều nào nên làm để giảm bớt rủi ro đó?",
    idx: 754,
    answers: [
      {
        idx: 0,
        title: "Mua bảo hiểm dự án",
        isKey: false,
      },
      {
        isKey: false,
        title: "Lập kế hoạch dự trữ kinh phí",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Theo dõi thời tiết và có chiến lược đối phó với các sự việc bất ngờ ",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lên kế hoạch cài đặt dự án ngoài mùa mưa bão ",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án triển khai hệ thống rất gần tới lúc hoàn thành thì phát hiện ra một rủi ro không được xác định trước.Điều này có khả năng làm ảnh hưởng tới việc giao dự án đúng hạn.Điều nào nên làm tiếp theo:",
    answers: [
      {
        idx: 0,
        title: "Làm rõ rủi ro ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Cảnh báo người đỡ đầu của dự án về việc ảnh hưởng tới chi phí phạm vi và kế hoạch dự án",
      },
      {
        isKey: false,
        title:
          "Làm nhẹ rủi ro này bằng cách phát triển kế hoạch đáp ứng rủi ro ",
        idx: 2,
      },
      {
        title: "Phát triển giải pháp thay thế",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 755,
  },
  {
    idx: 756,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Chỉ số hiệu năng chi phí(CPI) của một dự án là 0,6 và chỉ số hiệu năng kế hoạch(SPI) là 0,71.Dự án này có 625 gói công việc và được hoàn thành trong kỳ hạn 4 năm.Các thành viên trong nhóm rất thiếu kinh nghiệm và dự án nhận được rất ít hỗ trợ cho việc lập kế hoạch đúng đắn.Điều nào tốt nhất nên làm ở dưới đây:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Cập nhật bản phân tích và xác định rủi ro ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Dành nhiều thời gian tăng chi phí ước lượng",
      },
      {
        isKey: false,
        title: "Chuyển đổi những gói công việc có thể ",
        idx: 2,
      },
      {
        title: "Tổ chức lại ma trận phân công trách nhiệm ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 757,
    answers: [
      {
        title:
          "Thêm các lưu trữ cho dự án để giảm thiểu các rủi ro mới và quản lí thông báo ",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Ghi lại các loại rủi ro và tính toán giá trị tiền được kì vọng dựa trên xác suất và ảnh hưởng từ các sự kiện xảy ra",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Xác định các sự kiện rủi ro và chi phí kết hợp sau đó thêm chi phí đó vào kinh phí của dự án như là một sự dự trù",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Thêm ngẫu nhiên10% vào kinh phí của dự án và thông báo cho khách hàng ",
      },
    ],
    title:
      "Trong quá trình chuẩn bị đáp ứng rủi ro của bạn để bạn xác định các rủi ro truyền thống.Bạn nên làm gì?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Lập kế hoạch quản lí rủi ro ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Phân tích định lượng rủi ro",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Lập kế hoạch đáp ứng rủi ro ",
      },
      {
        title: "Điều khiển và theo dõi rủi ro ",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 758,
    title:
      "Bạn được phân công làm giám đốc dự án cho một dự án truyền thông mà dự án đó đang được thực hiện tới pha thứ hai. Điều đó sẽ làm xuất hiện nhiều rủi ro của dự án mà không ai ước tính được hậu quả có thể xảy ra của dự án.Điều gì có thể làm:",
  },
  {
    idx: 759,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong quá trình thực hiện dự án,một thành viên phát hiện ra rủi mà không nằm trong các rủi ro được xác định.Bạn nên làm gì",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Thêm thông tin về việc làm thế nào thành viên dự án phát hiện ra rủi ro vì bạn đã thực hiện phân tích chi tiết mà không phát hiện ra rủi ro này.",
      },
      {
        isKey: false,
        title:
          "2Xem nhẹ rủi ro này, vì các rủi ro đã được xác định trong quá trình lập kế hoạch.",
        idx: 1,
      },
      {
        idx: 2,
        title: "Thông báo cho khách hàng ",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Phân tích rủi ro này ",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Tạo giải pháp thay thế",
      },
      {
        isKey: false,
        title: "Ước lượng lại tiến trình xác định rủi ro",
        idx: 1,
      },
      {
        isKey: false,
        title: "Tìm kiếm bất cứ tác động không mong muốn nào của vấn đề. ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Thông báo với quản lý.",
      },
    ],
    idx: 760,
    title:
      "Trong quá trình thực hiện dự án xảy ra vấn đề chính mà không nằm trong những vấn đề xác định trước đó.Bạn nên làm gì đầu tiên",
  },
  {
    idx: 761,

    title:
      "Khách hàng yêu cầu thay đổi dự án mà nó có thể làm tăng thêm rủi ro của dự án.Điều nào sau đây bạn nên làm trước tất cả những cái khác",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Phân tích ảnh hưởng của sự thay đổi với nhóm dự án",
      },
      {
        title:
          "Tính đến các giá trị tiền được mong đợi của rủi ro trong ước lượng chi phí mới.",
        isKey: false,
        idx: 1,
      },
      {
        title: "Nói với khách hàng về những ảnh hưởng của thay đổi này",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thay đổi kế hoạch quản lí rủi ro ",
      },
    ],
  },
  {
    idx: 762,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Phép ngoại suy từ dữ liệu lịch sử từ các dự án trước ",
      },
      {
        idx: 1,
        title: "Quan điểm của chuyên gia",
        isKey: false,
      },
      {
        title: "Tiến trình phân cấp phân tích ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Cách tiếp cận từ dưới lên",
      },
    ],
    title: "Điều nào sau đây là đặc tính chính của kỹ thuật Delphi",
  },
  {
    title:
      "Một dự án sinh ra một số vấn đề, nhưng bây giờ có vẻ đã kiểm soát được. Trong những tháng cuối của dự án gần như tất cả các dự trữ đã được sử dụng hết và hầu hết các tác động tiêu cực của sự kiện đó đã được dự đoán có xảy ra.Nó chỉ có bốn hoạt động trái và hai trong số đó nằm trên đường tới hạn.Quản lí quan trọng bây giờ thông báo cho người quản lý dự án rằng nếu có thể vì lợi ích tốt nhất của tổ chức thực hiện để hoàn thành dự án trước hai tuần sớm hơn dự kiến để nhận được một phản ứng profit.In bổ sung, quản lý dự án gửi các yêu cầu đề nghị cho một số tha làm việc nhóm đã được đi làm, với hy vọng rằng một công ty khác có thể b có thể làm người quản lý công việc dự án nhanh chóng.Người quản lí dự án có thể được nói cho là cố gắng để làm việc với: CÂU NÀY DỊCH THẤY CHUỐI NHƯNG CHẲNG BIẾT DỊCH NTN CHO XUÔI CẢ Trung ạ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Cơ hội",
      },
      {
        isKey: false,
        idx: 1,
        title: "Dự trữ",
      },
      {
        idx: 2,
        title: "Phạm vi kiểm tra ",
        isKey: false,
      },
      {
        title: "Sự đe dọa",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 763,
  },
  {
    answers: [
      {
        title: "Hợp đồng vi phạm luật ứng dụng",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Nhóm không thể thực hiện",
        isKey: false,
      },
      {
        title: "Nhóm không đủ chi phí thực hiện 1 phần dự án",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Hợp đồng bị tuyên bố vô hiệu bởi luật sư của hai bên ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một khi đã ký,một hợp đồng sẽ có ràng buộc pháp lý và không thể hủy trừ khi:",
    idx: 764,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bị vô hiệu",
      },
      {
        title: "Không hoàn thành",
        idx: 1,
        isKey: false,
      },
      {
        title: "Hoàn thành ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Bị miễn",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Với một hợp đồng rõ ràng về công việc,người bán đã hoàn thành công việc theo quy định nhưng người mua lại không hài lòng với kết quả.Hợp đồng được xem là:",
    idx: 765,
  },
  {
    title:
      "Tất cả các điều sau đây liên quan đến hồ sơ dự thầu là sai , ngoại trừ ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Hồ sơ dự thầu được thiết kế tốt tương ứng với sự đáp lại ( theo ý hiểu là hồ sơ dự thầu được thiết kế tốt thì sẽ có kết quả tốt )",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Hồ sơ dự thầu phải nghiêm ngặt và không cho phép xem xét đề nghị của người bán",
        isKey: false,
      },
      {
        title:
          "Nói chung,hồ sơ dự thầu không nên bao gồm những tiêu chuẩn đánh giá.",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Hồ sơ dự thầu được thiết kế tốt sẽ không bao gồm 1 hợp đồng rõ ràng về công việc ",
        isKey: false,
      },
    ],
    idx: 766,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Cấp trên của giám đốc dự án bên bán nói với cô ấy rằng dự án sẽ làm bất cứ điều gì có thể để được trao tiền thưởng.Mục đích chính của điều khoản ưu đãi trong hợp đồng là:",
    idx: 767,
    answers: [
      {
        title: "Giảm giá cho người mua ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Giúp người bán điều chỉnh được giá",
      },
      {
        idx: 2,
        isKey: true,
        title: "Thống nhất các mục đích. ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Giảm nguy cơ của người bán bằng cách chia bớt nguy cơ sang cho người mua ",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 768,

    answers: [
      {
        idx: 0,
        title: "Hợp đồng phải bao gồm các thủ tục để phù hợp với thay đổi ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Nhiều thông số kỹ thuật chi tiết sẽ làm giảm nguyên nhân của sự thay đổi",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "1 hợp đồng đã được điều chỉnh giá sẽ giảm tối thiểu việc kiểm soát thay đổi ",
      },
      {
        title: "Thay đổi ít khi cung cấp lợi ích thực sự cho dự án",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Tất cả các điều sau đây về kiểm soát thay đổi là sai , ngoại trừ ",
  },
  {
    answers: [
      {
        isKey: true,
        title: "Tiếp thục thực hiện thanh toán dự án",
        idx: 0,
      },
      {
        title: "Không trả tiền cho đến khi vấn đề đúng đắn",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Vô hiệu hóa hợp đồng và sử dụng hành động pháp lý thu hồi khoản tiền trả dư ",
        idx: 2,
      },
      {
        title: "Thay đổi hợp đồng để yêu cầu kiểm toán thường xuyên hơn ",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một kiểm toán thông thường của 1 hợp đồng hoàn trả chi phí xác định rằng các cản trở đã được giải quyết.nếu hợp đồng không xác định các hoạt động chính xác,người mua nên:",
    idx: 769,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 770,
    title: "Đối tượng chính của 1 hợp đồng đàm phán thì",

    answers: [
      {
        title: "Bảo vệ quan hệ ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Nhận được nhiều nhận từ phía bên kia",
      },
      {
        title: "Nhận được lợi tức cao nhất",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Định nghĩa các đối tượng và xoáy sâu vào chúng ",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Bắt đầu lại với 1 bản hợp đồng mới",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Hoàn thành công việc ban đầu với mức giá hoàn trả cơ bản và sau đó đám phán về giá đã fix cho các công việc thêm vào",
      },
      {
        isKey: false,
        title: "Hoàn thành công việc ban đầu và từ chối thêm công việc",
        idx: 2,
      },
      {
        title:
          "Đàm phán 1 bản hợp đồng giá xác định(fix) cái chứa đựng tất cả công việc",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 771,
    title:
      "Một người bán đang làm việc với 1 bản hợp đồng hoàn trả chi phí khi khách hàng quyết định họ muốn mở rộng phạm vi dịch vụ thay đổi giá của hợp đồng đã fix.Đây là những lựa chọn người bán nên dùng,ngoại trừ:",
  },
  {
    idx: 772,
    title: "Các nhà thầu được biết đến như là 1 phần của",
    answers: [
      {
        idx: 0,
        title: "Yêu cầu người bán trả lời ",
        isKey: true,
      },
      {
        idx: 1,
        title: "hợp đồng dự án",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "hợp đồng quản lý ",
      },
      {
        title: "Kế hoạch mua sắm và mua lại",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Tất cả những yếu tố sau đây phải có trong 1 bản hợp đồng ngoại trừ:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Địa chỉ của người bán ",
      },
      {
        idx: 1,
        title: "Tuyên bố hợp đồng làm việc",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các điểu khoản chấp nhận",
      },
      {
        title: "Chữ ký của người mua ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 773,
  },
  {
    idx: 774,
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Giám đốc dự án nên cung cấp một sự hiểu biết về các rủi ro của dự án",
      },
      {
        title: "Giám đốc dự án chỉ có vai trò nhỏ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Giám đốc dự án nên là người đàm phán ",
      },
      {
        isKey: false,
        title:
          "Giám đốc dự án nên nói cho quản lí về hợp đồng tiến trình làm hợp đồng như thế nào ",
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Điều nào sau đây mô tả chính xác nhất vai trò của PM trong tiến trình kí hợp đồng?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 775,

    answers: [
      {
        idx: 0,
        title: "Đạt được giá cả chấp nhận được và hợp lí ",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đàm phán giá cả dưới ước lượng của người bán",
      },
      {
        title: "Đảm bảo tất cả rủi ro của dự án được vạch ra rõ ràng",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Đảm bảo có một quản lí kết nối hợp lí được thực hiện",
        idx: 3,
      },
    ],
    title: "Đâu là đối tượng chìa khóa (then chốt) trong đàm phán ",
  },
  {
    answers: [
      {
        title: "Chọn hay mua các quyết định",
        isKey: true,
        idx: 0,
      },
      {
        title: "Trả lời câu hỏi của người bán hàng về hồ sơ đấu thầu",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Lập điều khoản và điều kiện hợp đồng",
        idx: 2,
      },
      {
        isKey: false,
        title: "Lập yêu cầu đề xuất hoặc tài liệu đầu thầu ",
        idx: 3,
      },
    ],
    title: "Hoạt động nào sau đây xảy ra trong trong kế hoạch mua bán",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 776,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Trả lời các câu hỏi của người bán hàng về hồ sơ đấu giá ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: " Đánh giá các rủi ro",
      },
      {
        isKey: false,
        idx: 2,
        title: "Xác nhận sự đồng thuận đã được gửi đi ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Xác nhận những thay đổi về hợp đồng đã được thực hiện ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 777,

    title:
      "Điều nào sau đây là tốt nhất cho một giám đốc dự án cho đáp ứng yêu cầu của người bán hàng trong quá trình quản lí mua bán?",
  },
  {
    title:
      "Nhà tài trợ lo lắng về người bán hàng nhận được thêm nguồn lợi trên trị giá cộng thểm phí cố định (CPFF) hợp đồng. Mỗi tháng ng bán hàng yêu cầu giám đốc dự án cung cấp một bản tính toán CPI và một bản phân tích chi phí để hoàn thành. Giám đốc dự án giải thích cho nhà tài trợ rằng lợi nhuận thêm không đáng lo trong dự án này vì?",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Mội hóa đơn chi phí điều được xem xét",
      },
      {
        isKey: false,
        title: "Chỉ có thể có 10% gia tăng nếu có việc vượt quá chi phí",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đội dự án đảm bảo người bán hàng không giảm giới hạn dự án",
      },
      {
        isKey: false,
        title: "Phí chỉ nhận được bởi người bán hàng khi dự án hoàn thành",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 778,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Không biết ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Phần bàn bạc liên quan trong việc trả tất cả các hóa đơn",
      },
      {
        idx: 2,
        isKey: false,
        title: "Coi như là đơn vị cho mỗi hóa đơn ",
      },
      {
        isKey: false,
        title: "Xác định với các nhóm khác khi kết thúc dự án",
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 779,
    title: "Một hợp đồng giá cố định thì phí hoặc lợi nhuận là",
  },
  {
    title:
      "Một dự án thực hiện dưới một hợp đồng chí phí có thể trả lại cuối cùng đã vào giai đoạn kết thúc. Người mua phải nhớ ",
    answers: [
      {
        title: "Xem xét sự đồng thuận chi phí của người bán ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Giảm mức rủi ro dự án",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Đánh giá phí đang trả",
      },
      {
        title: "Đảm bảo người bán hàng không được thêm nguồn lực ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 780,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 781,

    answers: [
      {
        title: "Chi phí rủi ro là thấp hơn ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Chi phí rủi ro là cao hơn",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Có một chút rủi ro",
      },
      {
        idx: 3,
        title: "Rủi ro được chia sẻ bởi tất cả các bên",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nhà tài trợ và giám đốc dự án đang bàn bạc kiểu hợp đồng sẽ sử dụng trong dự án. Người mua chỉ ra rằng tổ chức thực hiện sử dụng nhiều tiền cho việc thuê đội thiết kế làm việc. Giám đốc dự án quan tâm để rủi ro của người mua sao cho tối thiểu nhất. Một thuận lợi của hợp đồng giá cố định cho người mua là ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Như một phần của hệ thống lưu giữ, bạn cố gắng đảm bảo mọi bản ghi từ mua bán được hồ sơ hóa và được đánh chỉ số.Điều nào sau đây bạn không phải lo lắng",
    answers: [
      {
        title: "Tiến trình đàm phán ",
        idx: 0,
        isKey: true,
      },
      {
        title: "Yêu cầu",
        idx: 1,
        isKey: false,
      },
      {
        title: "Phát biểu bài toán ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Điều khoản và điều kiện",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 782,
  },
  {
    title:
      "Bạn đang ở giữa một cuộc đàm phán phức tạp khi các nhóm khác nói “Chúng ta cần hoàn thành trong 1h bởi vì tôi phải kịp h máy bay”. Người đó đang sử dụng chiến thuật đàm phán nào sau đây",
    answers: [
      {
        idx: 0,
        title: "Hạn cuối ",
        isKey: true,
      },
      {
        title: "good guy,bad guy",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Yêu cầu cực đại ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Làm trễ",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 783,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "tăng giám định của công ty trong việc kí kết",
      },
      {
        idx: 1,
        title: "cho phép truy cập dễ dàng hơn cho việc kí hợp đồng",
        isKey: false,
      },
      {
        title: "đem lại sự tin tưởng lớn hơn trong việc kí kết",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "cho phép một contracts person làm việc trong một dự án",
      },
    ],
    title: "Cái nào sau đây là ưu điểm của việc kí kết tập trung",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 784,
  },
  {
    idx: 785,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "giá cố định ",
      },
      {
        title: "hợp đồng cộng vốn vào phí cố định",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "thời gian và nguyên liệu",
      },
      {
        isKey: false,
        idx: 3,
        title: "đơn đặt hàng",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Với loại hợp đồng nào thì người bán liên quan phần lớn đến phạm vi dự án?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "công ty của bạn gặp phải một sự cố và cần phải thực hiện kí hợp đồng càng sớm càng tốt. Trong số những tình huống sau, cái nào sẽ hữu ích để thêm vào hợp đồng?",
    answers: [
      {
        title: "các ưu đãi",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "1 báo cáo công việc theo hợp đồng rõ ràng",
      },
      {
        isKey: false,
        title: "các yêu cầu mà nhà thầu phụ có thể được sử dụng",
        idx: 2,
      },
      {
        title: "một điều khoản bất khả kháng",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 786,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 787,
    answers: [
      {
        isKey: true,
        title: "lựa chọn người bán ",
        idx: 0,
      },
      {
        title: "kế hoạch mua và mua lại",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "kế hoạch kí kết ",
      },
      {
        isKey: false,
        idx: 3,
        title: "yêu cầu các phản hổi của người bán ",
      },
    ],
    title:
      "Việc đàm phán hợp đồng sẽ diễn ra trong phần nào của tiến trình mua bán ?",
  },
  {
    idx: 788,
    answers: [
      {
        isKey: true,
        title: "lựa chọn người bán",
        idx: 0,
      },
      {
        title: "kế hoạch mua và mua lại",
        idx: 1,
        isKey: false,
      },
      {
        title: "kế hoạch kí kết ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "yêu cầu phản hồi của người bán ",
      },
    ],

    title:
      "Nhóm dự án đang tranh cãi về người bán hàng tiềm năng, người mà đã gửi các đề nghị. Một thành viên của nhóm thì bênh vực cho một người bán hàng nào đó trong khi những người còn lại muốn dự án được trao cho một người bán khác. Phần nào của tiến trình mua bán thực hiện việc này ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "nhóm dự án có vẻ như đã tranh cãi về bất cứ thứ gì mà họ đã thảo luận. May mắn là người quản lý dự án đã thiết lập một hệ thống khen thưởng và các buổi họp xây dựng nhóm, cái mà sẽ giúp đỡ và khuyến khích nhóm hợp tác hơn. Cái gần đây nhất họ tranh cãi với nhau là về việc : phần nào trong tiến trình mua bán phải được cho vào?",
    idx: 789,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        title: "kế hoạch mua và mua lại ",
        idx: 0,
      },
      {
        title: "quản lý hợp đồng",
        idx: 1,
        isKey: false,
      },
      {
        title: "yêu cầu phản hồi của người bán",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "lựa chon người bán ",
      },
    ],
  },
  {
    answers: [
      {
        title: "Kế hoạch lên hợp đồng ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Kế hoạch mua sắm và mua lại",
        idx: 1,
      },
      {
        title: "Yêu cầu người bán trả lời",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lựa chọn người bán ",
      },
    ],
    title:
      "Quản lý dự án thì nằm trog việc tạo ra 1 yêu cầu đề nghị(RFP).Trong quy trình mua sắm thì anh ta nằm trong:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 790,
  },
  {
    title:
      "Quản lý chương trình của bạn đã gặp bạn,PM để cần giúp đỡ về giá thầu cho 1 dự án mới của anh ta.Bạn muốn bảo vệ công ty của bạn khỏi những rủi ro về tài chính.Bạn giới hạn trong việc định nghĩa phạm vi.Kiểu hợp đồng tốt nhất bạn nên chọn là:",

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Cost plus fixed fee(CPFF):chi phí+phí cố định ",
      },
      {
        title: "Fixed price(FP):hợp đồng đã có giá định trước",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Cost plus percent of cost(CPPC):chi phí+phần trăm chi phí",
        isKey: false,
      },
      {
        isKey: false,
        title: "Time and material:thời gian và nguyên liệu ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 791,
  },
  {
    idx: 792,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "thường thì đúng,bời vì cả 2 bên chỉ yêu cầu thực hiện những gì có trong hợp đồng",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "không đúng bởi vì cả 2 bên phải tuân theo những gì họ đã thống nhất",
      },
      {
        isKey: false,
        idx: 2,
        title: "đúng bởi vì đó là 1 cung cấp ",
      },
      {
        title: "thường không đúng,bởi vì các thống nhất phải được duy trì ",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Đàm phán giữa 2 bên đang trở nên phức tạp hơn.vì vây phía bên A làm 1 vài điều khoản để cho cả 2 bên ký.Ngoài ra,khi công việc đang được thực hiện,bên B mong muốn rằng họ không bị yêu cầu phải cung cấp thêm item mà họ cùng đống ý trong quá trình đàm phán.bời vì nó không nằm trong bản hợp đồng tiếp theo.Trong trường hợp này bên B là:",
  },
  {
    idx: 793,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        title: "Nhà thầu phụ có trình độ chuyên môn",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "thông đồng giữa nhà thầu phụ",
      },
      {
        title: "Nhà thầu phụ là tiêu chuẩn đánh giá",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "tổ chức một hội nghị nhà thầu",
      },
    ],
    title:
      "dự án của bạn vừa mới được nhanh chóng được vạch ra và bạn đang tìm kiếm một nhà thầu phụ để hoàn thành hợp tác nhanh chóng .không có thời gian để ra yêu cầu đề nghị , vì vậy bạn chọn một công ty mà trước đây bạn đã hợp tác nhiều lần cho phát triển phần mềm .một mối quan tâm chính trong vấn đề này là :",
  },
  {
    answers: [
      {
        isKey: true,
        title: "có rất nhiều dữ liệu độc quyền",
        idx: 0,
      },
      {
        isKey: false,
        title: "bạn có chuyên môn mà bạn không có nhân lực có sẵn",
        idx: 1,
      },
      {
        title: "bạn không cần phải kiểm soát công việc ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "nguồn tài nguyên của công ty bạn đang quá tải ",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "quản lý dự án và nhà tài trợ dự án đang thảo luận các chi phí dự án và cho dù đó là tốt hơn nếu công ty riêng của họ làm chủ một phần của dự án hoặc thuê một công ty khác để làm việc. nếu họ hỏi ý kiến của bạn, bạn có thể nói nó sẽ là tốt hơn để làm một mình nếu:",
    idx: 794,
  },
  {
    idx: 795,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "đảm bảo cung cấp cho tất cả các người bán hàng đủ thời gian để đặt câu hỏi. họ có thể không muốn đặt câu hỏi trong khi đối thủ cạnh tranh của họ đang ở trong phòng",
      },
      {
        title:
          "bạn không cần phải tham dự phiên họp này. người quản lý sẽ duy trì nó",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "đảm bảo rằng bạn thương lượng phạm vi dự án",
        idx: 2,
      },
      {
        title:
          "để cho các nhà tài trợ dự án xử lý các cuộc họp để bạn có thể là mắt xích quan trọng trong phiên đàm phán",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "sau khi hứng thú nhiều và công việc khó khăn, các tuyên bố hợp đồng làm việc cho dự án hoàn thành. ngay cả sau khi đạt được thỏa thuận rằng các tuyên bố hợp đồng công việc được hoàn tất, người quản lý dự án vẫn còn quan tâm đến việc nó thực sự làm cho tất cả các người mua là cần thiết. quản lý dự án để tham dự hội nghị nhà thầu. ông ta hỏi và cho lời khuyên về những việc cần làm trong phiên này. mà sau đây là lời khuyên tốt nhất bạn có thể cho anh ta?",
  },
  {
    title:
      "Người bán hàng nhận thấy một hợp đồng để xây dựng một đường thẳng. Mỗi giai đoạn và điều kiện yêu cầu nó là kế hoạch làm việc được cấp phát để chấp nhận ưu tiên cho khách hàng để bắt đầu làm việc, tuy nhiên người bán hàng mắc phải một lỗi. Điều mà khách hàng cần phải làm là:",
    answers: [
      {
        idx: 0,
        title: "Cấp cho một thư ngỏ mặc định",
        isKey: true,
      },
      {
        title: "Sắp xếp một thư ngỏ ý",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Lập kế hoạch làm việc và cấp phát cho khách hàng để di chuyển những thứ theo",
        idx: 2,
      },
      {
        isKey: false,
        title: "Ngừng việc bán hàng cho đến khi lập một kế hoạch sửa chữa.",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 796,
  },
  {
    title:
      "Hợp đồng kết thúc khác với quản trị việc kết thúc trong hợp đồng đó là ",
    answers: [
      {
        title: "Xảy ra trước khi quản lý việc kết thúc ",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Chỉ bao gồm duy nhất bao gồm khách hang",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Bao gồm sự trở về các thuộc tính",
      },
      {
        title: "Có thể kết thúc nhiều hơn mỗi một hợp đồng",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 797,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn phải bắt đầu quản lí một hợp đồng, khi bạn muỗn kết thúc một hợp đồng, điều bạn cần làm đầu tiền là ",
    answers: [
      {
        title: "Đi đến hợp đồng kết thúc ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Quay trở lại hỏi xem phản ứng của người bán hang",
        idx: 1,
      },
      {
        idx: 2,
        title: "Quay trở lại kế hoạch hợp đồng",
        isKey: false,
      },
      {
        title: "Kết thúc quản lí hợp đồng",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 798,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "đánh giá tiêu chuẩn",
      },
      {
        idx: 1,
        isKey: false,
        title: "mua sắm tài liệu",
      },
      {
        idx: 2,
        title: "kiểm toán việc mua sắm ",
        isKey: false,
      },
      {
        title: "kế hoạch quản lý mua sắm ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 799,
    title:
      "Nhóm dự án đang tranh cãi về những người bán tiềm năng biết đã gửi đề xuất.Mỗi nhóm thành viên lập luận cho một người bán nhất định, trong khi một thành viên trong nhóm muốn dự án sẽ được trao cho người bán khác nhau. Điều TỐT NHẤT người quản lý dự án này cần phải nhắc nhở các nhóm để tập trung vào để thực hiện lựa chọn là:",
  },
  {
    title:
      "Tổ chức thực hiện thì đang cố gắng để quyết định phân chia các bộ phận ký kết hợp đồng và giao trách nhiệm cho bộ phận trực tiếp chịu trách nhiệm về hợp đồng chuyên nghiệpcủa dự án. Một hợp đồng chuyên nghiệp có thể không muốn phân chia này xảy ra bởi vì họ sẽ mất ...trong một môi trường ký hợp đồng phân cấp",
    answers: [
      {
        title: "tiếp cận với những người khác với chuyên môn tương tự ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Tiêu chuẩn hóa công ty quản lý dự án thực hành",
        isKey: false,
      },
      {
        title: "trung thành với dự án ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "kinh nghiệm ",
        idx: 3,
      },
    ],
    idx: 800,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong suốt quá trình thực hiện dự án,các thành viên trong đội dự án của bạn cung cấp 1 dự án cung cấp sản phẩm cho người mua.Ngoài ra,nguời mua từ chối sản phẩm,nói rằng không đáp ứng yêu cầu trên 300 trang trong xác định kĩ thuật.Bạn đã xem lại tài liệu và tìm thấy cái bạn đồng ý.Điều tốt nhất nên làm:",

    idx: 801,
    answers: [
      {
        title:
          "Xem lại các yêu cầu và gặp các thành viên trong nhóm đáp ứng để xem lại từ điển WBS ",
        idx: 0,
        isKey: true,
      },
      {
        title: "Giải thích rằng hợp đồng lỗi và có thể được thay đổi",
        isKey: false,
        idx: 1,
      },
      {
        title: "Vấn đề 1 thay đổi hóa đơn(issue a change order) ",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Triệu tập 1 cuộc họp trong đội để xem xét lại yêu cầu ở trang 300",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Kiểu hợp đồng nào bẹn không muốn sử dụng nếu bạn không đủ nguời để kiểm toán các hóa đơn:",
    idx: 802,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Cost plus fixed fee(CPFF)(chi phí+phí cố định)",
      },
      {
        isKey: false,
        title: "Time and material(TnM)(thời gian và vật chất)",
        idx: 1,
      },
      {
        isKey: false,
        title: "Fixed price(FP):đã định sẵn tiền",
        idx: 2,
      },
      {
        title:
          "Fixed price incentive fee(FPIF):giá cố định khuyến khích thêm phí",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Bản hợp đồng SOW nên chi tiết hóa như cần thiết cho kiểu của dự án",
        isKey: true,
      },
      {
        title:
          "Bản hợp đồng SOW nói chung nên cho phép người bán làm theo những quyết định của riêng họ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Bản hợp đồng SOW nói chung nên cho phép làm rõ sau này ",
      },
      {
        title: "Bản hợp đồng SOW nên chi tiết việc cho phép làm rõ sau này ",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 803,
    title:
      "Một quản lý dự án mới đang chuẩn bị tạo 1 bản hợp đồng SOW.1 bên liên quan muốn thêm 1 vài item vào hợp đồng SOW.Một bên liên quan khác chỉ muốn miêu tả các yêu cầu chức năng.Dự án này quan trọng cho công ty của PM. Nhưng 1 người bán sẽ làm công việc này.Bạn nên đưa ra cho PM lời khuyên nào:",
  },
  {
    idx: 804,
    answers: [
      {
        isKey: false,
        title:
          "Xem lại từ điển WBS kỹ lưỡng, tìm kiếm các mô tả chưa hoàn thiện. ",
        idx: 0,
      },
      {
        title:
          "Xem lại tôn chỉ dự án một cách kỹ lưỡng hơn, rà soát các trường hợp nghiệp vụ để phát hiện các lỗ hổng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Lập kế hoạch hợp đồng kỹ lưỡng hơn",
      },
      {
        title: "Quan tâm nhiều hơn đến quản lý các bên liên quan",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Vào gần thời điểm cuối cùng của dự án trước của ban, các yêu cầu mới được đòi hỏi bởi một nhóm các stakeholder (các bên liên quan) khi họ nhận thấy họ sẽ bị tác động bởi dự án của bạn. Điều này trở thành một vấn đề bởi bạn không lường trước thòi gian và chi phí trong kế hoạch quản lý dự án cho các yêu cầu này. Điều tốt nhất bạn có thể làm để ngăn chặn vấn đề tương tự trong tương lại là",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 805,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Thực hiện phân tích khả thi",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Tiếp tục dự án và tìm kiếm nhiều thông tin hơn sau này để giải quyết vấn đề này.",
      },
      {
        isKey: false,
        title: "Lấy trung bình các con số và coi đó là mục tiêu. ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Hỏi ý kiến nhà tài trợ để đưa ra quyết định cuối cùng. ",
      },
    ],
    title:
      "Một dự án phát triển phần mềm đang diễn ra không tốt. Có hơn 30 người tham gia và không ai thống nhất về các mục tiêu của dự án. Một người tin rằng dự án cho thể đạt được mức độ cải thiện là 30% trong khi người khác lại tin rằng 50% là điều có thể. Quản lý dự án nghĩ % mức độ cải thiện sản phẩm phải thực tế hơn. Hành động TỐT NHẤT là ?",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Dự án chưa hoàn thành cho tới khi dự án và các sản phẩm bàn giao được hoàn thành và được chấp nhận ",
        isKey: true,
      },
      {
        title:
          "Dự án đã hoàn thành vì khách hàng đã chấp nhận các sản phẩm bàn giao",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dự án chưa hoàn thành vì dự án cần được lên kế hoạch lại ",
      },
      {
        idx: 3,
        title: "Dự án đã hoàn thành vì dự án đã đến này cam kết ",
        isKey: false,
      },
    ],
    title:
      "Một đội dự án đã hoàn thiện, và khách hàng đã chấp nhận phạm vi hoàn chỉnh của dự án. Tuy nhiên, các bài học rút ra được yêu cầu bởi project management office chưa được hoàn thiện. Trạng thái của dự án là gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 806,
  },
  {
    title:
      "Bạn đang ở trong (giữa) công đoạn phát triển một sản phẩm mới cho công ty mình thì bạn phát hiện ra rằng người quản lý trước đã chi trả 3 triệu USD không được thông qua theo các chính sách của công ty. May mắn thay, chỉ số năng suất chi phí CPI của dự án là 1,2. Bạn nên làm gì",
    idx: 807,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Liên hệ với người quản lý của mình",
      },
      {
        idx: 1,
        title: "Đặt khoản chi trong một tài khoản giao kèo (??)",
        isKey: false,
      },
      {
        idx: 2,
        title: "Chôn vùi, che giấu chi phí ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Từ chối khoản chi ",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 808,
    answers: [
      {
        title: "Nói với stakeholder rằng phạm vi không thể thêm được nữa",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Cho nhà tài trợ biết về yêu cầu của stakeholder(các người liên quan)",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đánh giá tác động của việc mở rộng phạm vi",
      },
      {
        title:
          "Thêm các công việc nếu thời gian còn cho phép trong lịch trình dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Trong một cuộc họp với một số bên liên quan của dự án, quản lý dự án được đề nghị thêm công việc và phạm vi dự án. Người quản lý dự án đã trao đổi về dự án trước khi tôn chỉ của dự án được ký và anh ta nhớ rằng nhà tài trợ của dự án đặc biệt từ chối không chi thêm tiền cho phạm vi được đưa ra bởi những n gười ngày. Điều TỐT NHẤT mà người quản lý dự án nên làm là:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Khi kiểm tra lịch của một thành viên nhóm để sắp xếp một buổi họp, bạn thấy cô ấy đã lên lịch gặp với một “key stakeholder ” (một người quan trọng tham gia vào dự án) khác mà bạn không được thông báo. Chiến lược tốt nhất sẽ là :",
    answers: [
      {
        title: "Đề cập với các thành viên nhóm ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Ngăn không đề cập tới điều này cho các thành viên của đội nhưng tiếp tục tquan sát các hoạt động của cô ấy",
      },
      {
        idx: 2,
        title: "Thông báo cho sếp bạn về điều này ",
        isKey: false,
      },
      {
        title: "Đề cập điều này với trưởng nhóm",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 809,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 810,
    title:
      "Người quản lý dự án đang gặp có một thời gian khó khăn để giữ lịch trình dự án trong tầm theo dõi. Dự án cần 220 người để hoàn thành. Tất cả các vấn đề của dự án đã được giải quết theo sự hài lòng (yêu cầu) của PM, chỉ số năng suất thời gian SPI hiện tại là 0.67, và chỉ số năng suất chi phí CPI là 1.26, có 23 hoạt động trên đường thiết yếu (critical path)và khoảng thòi gian PERT là 26. Trong hoàn cảnh này, báo cáo tình trạng hàng tháng nên báo cáo:",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Các vấn đề và các lựa chọn ",
      },
      {
        title: "Dự án đang tiền hành tốt",
        isKey: false,
        idx: 1,
      },
      {
        title: "Dự án sẽ chậm tiến độ ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Chi phí dự án dưới ngân sách",
      },
    ],
  },
  {
    idx: 811,
    title:
      "Nhân viên của bạn chậm 3 ngày để đưa báo cáo. 5 phút trước cuộc họp nơi mà chủ đề của báo cáo sẽ được bàn luận, cô ấy đưa bạn báo cáo. Bạn nhận thấy có nhưng sai sót nghiêm trọng trong đó. Bạn nên làm gì?",
    answers: [
      {
        title: "Hủy cuộc họp và lên lịch lại khi bản báo cáo được sửa ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Tới cuộc họp và nói cho các khán giả các lỗi trong báo cáo",
        idx: 1,
      },
      {
        title:
          "Bắt nhân viên thực hiện buổi thuyết trình và giữ im lặng như các người tham dự khác tìm các lỗi ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Hủy cuộc họp và tự viết lại báo cáo ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một người quản lý chịu trách nhiệm cho một dự án mà có sự hỗ trợ bởi một người quản lý cao cấp. Ngay từ đầu, bạn đã bất đồng với người quản lý đó về việc dự án nên tiến hành thế nào và các sản phẩm bàn giao sẽ ra sao. Bạn và cô ấy bất đồng nhiều vấn đề trong qua khứ. Phòng của bạn được giao nhiệm vụ cung cấp một số gói quan trọng trong dự án. Bạn sẽ làm gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 812,

    answers: [
      {
        title: "Cung cấp cho cô ấy thứ mà cô ta cần ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Thông tin cho người quản lý của bạn về những quan tâm, lo lắng để tìm sự hỗ trợ của cô ta",
      },
      {
        idx: 2,
        title:
          "Ngồi xuống với người quản lý lúc bắt đầu dự án và cố gắng giải thích, mô tả lý do bạn phản đối dự án và tìm ra cách để giải quyết vấn đề ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Đề nghị được chuyển ra khỏi dự án",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 813,
    answers: [
      {
        idx: 0,
        title: "Trả phí ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Không trả xu nào bởi vì nó là đút lót",
      },
      {
        isKey: false,
        title: "Hủy bỏ công việc",
        idx: 2,
      },
      {
        title:
          "Không trả phí nếu nó không phai là một phần trong ước lượng của dự án ",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Một dự án xây dựng lớn và phức tạp tại nước ngoài đòi hỏi phải chuyển các thiết bị qua các đường phố đông đúc của thành phố. Để đảm bảo là các thiết bị được vận chuyển thành công, người liên lạc ở quốc gia đó thông báo cho bạn rằng bạn sẽ phải trả phí cho việc điều phối giao thông. Bạn nên làm gì?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Cho biết việc nâng cấp của khách hàng và tác động đến thời gian của dự án và các chức năng ",
      },
      {
        isKey: false,
        title:
          "Tiếp tục lập kế hoạch, khách hàng của bạn không yêu cầu sự thay đổi",
        idx: 1,
      },
      {
        title:
          "Thực thi sự thay đổi và lập lịch là cần thiết bởi vì điều này yêu cầu sự hỗ trợ của khách hàng ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Thực thi sự thay đổi để duy trì các site và tiếp tục với công việc lập lịch ",
      },
    ],
    title:
      "Bạn phải làm việc qua mạng. Có 30 chi nhánh trên ở Mỹ và 20 ở Anh. Một người bán phần mềm có 1 sản phẩm được nâng cấp cho các thiết bị đang được cài đặt. Việc nâng cấp sẽ cung cấp cho khách hàng với các chức năng mà họ yêu cầu, cái mà không có sẵn tại thời điểm bắt đầu của dự án. Hành động tốt nhất trong các trường hợp dưới đây",

    idx: 814,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 815,

    answers: [
      {
        isKey: true,
        title: "Theo dõi tiến trình kiểm soát sự thay đổi của hợp đồng",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Xóa 1 ưu tiên mức dưới trong gói công việc để có nhiều thời gian và có sẵn vốn",
      },
      {
        idx: 2,
        isKey: false,
        title: "Sử dụng ngân sách từ việc dự trữ để bổ sung cho chi phí",
      },
      {
        isKey: false,
        title: "Yêu cầu nhiều ngân sách từ nhà tài trợ ",
        idx: 3,
      },
    ],
    title:
      "Bạn làm công việc phát triển và nghiên cứu dự án.Khi khách hàng của bạn hỏi bạn về các thành phẩn cơ bản trong dự án. Bạn biết đó là giới thiệu một công việc mới và nó vượt quá quỹ hiện có. Ban nên làm gì.",
  },
  {
    idx: 816,
    title:
      "Bạn là quản lý dự án cho một hoặc nhiều dự án trong 1 chương trình lớn và quan trọng. Tại một cuộc họp ở mức cao, bạn chú ý rằng những người quản ly dự án khác đã báo cáo về dự án của cô ấy theo như lập lịch. Quay lại với dự án của bạn từ vài tuần trước bạn nhớ có nhiều sản phẩm bàn giao từ các dự án khác cái mà chuyển đển muộn. Bạn nên làm gì.?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Gặp gỡ các quản lý dự án khác ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Gặp người quản lý chương trình",
        isKey: false,
      },
      {
        title: "Xây dựng một kế hoạch quản lý rủi ro ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Thảo luận với ông chủ của bạn ",
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Cung cấp 1 sự ước lượng chính xác về giá thực tế và khả năng hỗ trợ ",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Lập lại kế hoạch để cố gắng đạt 35% để cải thiện thời gian lãng phí",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Giảm việc ước lượng và chú ý sự thay đổi trong kế hoạch quản lý rủi ro ",
      },
      {
        isKey: false,
        title:
          "Gặp gỡ cả đội dự án để xác định bạn có thể tiết kiệm 10% thời gian bằng cách nào",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 817,
    title:
      "Bạn luôn phải người quản lý của bạn để giảm việc ước lượng dự án của bạn là gần 10% sau khi bạn nhận nó từ người quản lý. Phạm vi của dự án mới của bạn là không sáng tỏ và có 30 bên liên quan. Quản lý mong đợi giảm 25% thời gian lãng phí trong dự án. Bạn chọn hành động nào tốt nhất trong tình huống này.",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 818,
    title:
      "Nhân viên của bạn có 3 ngày đi muộn với 1 báo cáo. Cô ấy đi vào phòng họp nơi mà báo cáo được thảo luận và tay bạn có 1 bản copy từ 5 phút trước khi chủ đề được thảo luận. Bạn thông báo có 1 vài lỗi nghiêm trọng trong báo cáo. Làm thế nào để ngăn ngừa điều này?",
    answers: [
      {
        isKey: true,
        title:
          "Hủy cuộc họp sớm bởi vì bạn không có 1 sự thay đổi nào để xem lại báo cáo",
        idx: 0,
      },
      {
        isKey: false,
        title: "Yêu cầu cập nhật lại từ nhân viên",
        idx: 1,
      },
      {
        title: "Huấn luyện và cố vấn cho các nhân viên ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Chắc chắn rằng nhân viên có đủ khả năng để làm việc",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Nói với quản lý dự án khác trong công ty bạn về vấn đề nội bộ này",
        idx: 0,
        isKey: true,
      },
      {
        title: "Cố gắng giữ yêu cầu của mọi người trong dự án",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Contact với công ty và đưa ra lời khuyên cái bạn sẽ hủy công việc đó trong dự án trừ khi công ty đã thỏa thuận về việc tranh luận nội bộ(khó dịch quá)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dừng việc kinh doanh với công ty",
      },
    ],
    idx: 819,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn ở trong dự án khi bạn phát hiện ra phần mềm của người bán cho công ty bạn có nhiều khó khăn cho nhân viên và dẫn đến cuộc tranh luận nội bộ. Nhiều dự án trong công ty bạn cũng sử dụng dịch vụ trên. Bạn nên làm gì?",
  },
  {
    answers: [
      {
        title: "Sự kiện rủi ro ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Xác suất rủi ro ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Số tiền rủi ro (amout at stake) ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Chi phí bảo hiểm",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Tất cả những điều sau đều là nhân tố trong đánh giá rủi ro dự án, ngoại trừ: ",

    idx: 820,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nếu một dự án có 60% cơ hội kiếm được 100000$ và có 40% cơ hội mất 100000$, giá trị tiền tệ dự kiến cho dự án là: ",
    idx: 821,
    answers: [
      {
        isKey: false,
        title: "Thu được 100000$ ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Mất đi 60000$ ",
        isKey: false,
      },
      {
        title: "Thu được 20000$ ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "Mất đi 40000$",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Cho rằng 2 đầu của dải các ước tính trung bình là +/-3sigma, dải ước tính nào dưới đây bao gồm ít rủi ro nhất? ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "30 ngày, cộng trừ 5 ngày ",
      },
      {
        title: "Từ 22-30 ngày ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Optimistic=26days, most likely=30days, pessimistic=33days ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "28 ngày",
      },
    ],
    idx: 822,
  },
  {
    title:
      "Sự kiện rủi ro nào dưới đây gây trở ngại cho việc đạt tới mục tiêu lịch thực hiện dự án nhất? ",
    idx: 823,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Chậm trễ trong việc có được các phê chuẩn được yêu cầu ",
        idx: 0,
      },
      {
        title: "Tăng đáng kể chi phí mua nguyên vật liệu ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tranh chấp hợp đồng sinh ra các yêu sách tăng thanh toán ",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Cuộc họp đã được lên kế hoạch để xem lại việc thực hiện k đúng thời hạn",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Ít hơn 1% ",
        idx: 0,
      },
      {
        idx: 1,
        title: "20%",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "60% ",
      },
      {
        isKey: false,
        title: "80%",
        idx: 3,
      },
    ],
    idx: 824,

    title:
      "Nếu 1 rủi ro có 20% cơ hội xảy ra trong 1 tháng cho trước, và dự án dự kiến kéo dài 5 tháng, xác suất mà sự kiện rủi ro này sẽ xảy ra trong tháng thứ 4 của dự án là bn? ",
  },
  {
    title:
      "Nếu một sự kiện rủi ro có 90% cơ hội xảy ra, và hậu qua là 10000$, tương  ứng với 90000$ là:",

    idx: 825,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: " Giá trị rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        title:
          " Giá trịhiện tại ( present value- giá trịhiện tại của dòng tiền mặt sẽ đem lại  lượng giá trịquay vòng vốn đầu tưnhất định trong tương lai",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Giá trịtiền tệ dự kiến",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Ngân sách ngẫu nhiên",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Phân tích định lượng rủi ro và xác định rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Xác định rủi ro và kiểm soát rủi ro",
        isKey: true,
      },
      {
        title: "Xác định rủi ro và kiểm soát rủi ro",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Xác định rủi ro",
        idx: 3,
      },
    ],
    title: "Các rủi ro sẽ được xcá định trong các quá trình quản lýrủi ro nào?",
    idx: 826,
  },
  {
    title:
      " Điều gì nên được hoàn thành với những rủi ro trong danh sách theo dõi  (watchlist) ",

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Ghi lại chúng cho các thông tin lịch sử để sử dụng trong các dự án kháC",
      },
      {
        idx: 1,
        isKey: true,
        title: " Ghi lại chúng và xem lại trong quá trình thực hiện dựán",
      },
      {
        title:
          " Ghi lại chúng và đểsang một bên vì chúng đã có trong kếhoạch đối phó với sự kiện ngẫu nhiên",
        idx: 2,
        isKey: false,
      },
      {
        title: "Ghi lại chúng và đưa cho khách hàng",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 827,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 828,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các thông tin lịch sự",
      },
      {
        idx: 1,
        isKey: false,
        title: "Các bài học rút ra",
      },
      {
        isKey: false,
        title: " WBS ",
        idx: 2,
      },
      {
        title: "Báo cáo trạng thái dựán",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Tất cảnhững điều sau luôn là đầu vào cho quá trình quản lýrủi ro, ngoại trừ:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 829,
    answers: [
      {
        idx: 0,
        title: "Đội dự án xếp loại được các rủi ro dựán",
        isKey: true,
      },
      {
        isKey: false,
        title: "PM ước tính dự án",
        idx: 1,
      },
      {
        isKey: false,
        title: "Đội dự án lên lịch trình dựán.",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Ban lãnh đạo biết được những người quản lý khác sẽ hành động trong dự án ntn",
      },
    ],
    title: "Khả năng chấp nhận rủi ro được xác định đểgiúp: ",
  },
  {
    idx: 830,
    title:
      "Tất cảnhững điều sau có 1 kết quảchung của quản lýrủi ro, ngoại trừ ",

    answers: [
      {
        isKey: false,
        title: "Các điều kiện và điều khoản trong hợp đồng được tạo ra",
        idx: 0,
      },
      {
        idx: 1,
        title: "Kế hoạch quản lý dự án được thay đổi",
        isKey: false,
      },
      {
        idx: 2,
        title: "Kế hoạch quản lý truyền thông được thay đổi",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tôn chỉ dự án được thay đổi",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 831,
    title:
      " Bảo hiểm mua bán được xem xét tốt nhất nhưlà một ví dụvềloại rủi ro nào?",

    answers: [
      {
        isKey: false,
        title: "Sách dự án ",
        idx: 0,
      },
      {
        title: "Bảng kê công việc (SOW) ",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Tài liệu vai trò và trách nhiệm. ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Sách chỉ dẫn các thủ tục và chính sách của công ty",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cơ sở định lượng",
      },
      {
        isKey: false,
        idx: 1,
        title: "Cơ sở số học",
      },
      {
        idx: 2,
        isKey: true,
        title: "Cơ sở định tính",
      },
      {
        title: "Cơ sở kinh tế",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Bạn đang thấy rằng thật khó để ước lượng chính xác chi phí sẽ ảnh hưởng bởi  rủi ro. Bạn nên ước lượng với:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 832,
  },
  {
    idx: 833,
    title: "Đầu ra của kếhoạch đối phó rủi ro (risk response planning) là: ",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: " Số dư Rủi ro ",
      },
      {
        title: "Các rủi ro được xác định",
        isKey: false,
        idx: 1,
      },
      {
        title: "Danh sách ưu tiên của các rủi ro",
        isKey: false,
        idx: 2,
      },
      {
        title: " Các ảnh hưởng được xác định  ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      " Việc khắc phục(workaround) được xác định trong quá trình quản lýrủi ro nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 834,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Xác định rủi ro ",
      },
      {
        idx: 1,
        title: "Phân tích định lượng rủi ro",
        isKey: false,
      },
      {
        title: "Kế hoạch đối phó rủi ro ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Kiểm soát rủi ro ",
        isKey: true,
      },
    ],
  },
  {
    idx: 835,

    title:
      "Trong quá trình quản lýrủi ro nào là nhân tốxác định chuyển giao một loại  rủi ro (risk made) ",
    answers: [
      {
        isKey: false,
        title: " Xác định rủi ro ",
        idx: 0,
      },
      {
        isKey: false,
        title: "Phân tích định lượng rủi ro",
        idx: 1,
      },
      {
        isKey: true,
        title: "Kế hoạch đối phó rủi ro ",
        idx: 2,
      },
      {
        title: "Kiểm soát rủi ro ",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một PM vừa hoàn thành kế hoạch đối phó rủi ro cho 1 dựán kỹ thuật có kinh  phí 387000$. Điều nào dưới đây anh ta nên làm tiếp theo?  ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Xác định tỷlệ rủi ro tổng thể cho toàn dựán ",
      },
      {
        title:
          "Bắt đầu phân tích rủi ro và chỉra trong phác thảo dựán (project drawing)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Thêm các gói công việc vào bảng WBS  ",
      },
      {
        title: "Tổ chức đánh giá lại rủi ro dự án  ",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 836,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Ước lượng xu hướng trong phân tích rủi ro",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Xác định các yếu tốkích hoạt rủi ro (triggers)",
        isKey: false,
      },
      {
        title: "Cung cấp ma trận tỷlệ rủi ro tiêu chuẩn",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tạo ra kếhoạch dựphòng ",
      },
    ],
    title:
      "Một PM hỏi nhiều bên có liên quan đểxác định xác suất và ảnh hưởng của  một sốrủi ro. Anh ta sau đó đã phân tích các giảthuyết. Anh ta đang chuyển sang  bước tiếp theo của quản lýrủi ro. Dựa vào các thông tin trên, PM đã QUÊN không  làm gì?  ",
    idx: 837,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Mô phỏng rủi ro ",
        idx: 0,
      },
      {
        isKey: false,
        title: "Làm giảm, làm nhẹ rủi ro",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xếp hạng rủi ro tổng thể cho dự án",
      },
      {
        title: "Kéo theo các bên có liên quan tới dựán ",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Một PM tập hợp đội dựán lại, xác định 56 rủi ro trong dựán, xác định các  yếu tốkích hoạt rủi ro, xếp hạng trong ma trận mức độrủi ro, kiểm tra các giảthiết  và ước lượng chất lượng dữliệu sửdụng. Đội dựán vẫn tiếp tục chuyển sang quá  trình quản lýrủi ro. PM đã quên không làm gì? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 838,
  },
  {
    idx: 839,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Xem xét lại tất cả đề nghịchi phí từ người bán. ",
        idx: 0,
      },
      {
        title: "Kiểm tra ngân sách dự phòng.",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Hoàn thành tôn chỉ dự án",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: " Thực hiện xác định các rủi ro. ",
      },
    ],

    title:
      "Bạn là một PM cho một dựán xây dựng của một nhà máy sản xuất lớn mới và  chưa từng làm trước đó. Chi phí dựán được ước tính là 30.000.000$ và sẽsửdụng 3  người bán. Một khi bắt đầu, dựán không thểxóa bỏ, và sẽcó một phí tổn lớn trong  thiết bịvà nhà máy. Là PM của dựán này, điều quan trọng nhất phải thật cẩn thận  là: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 840,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: " Chấp nhận rủi ro ",
      },
      {
        title: " Tiếp tục điều tra để làm giảm nhẹ rủi ro",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tìm kiếm cách đểtránh rủi ro ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Tìm kiếm cách để chuyển rủi ro (transfer the risk) ",
      },
    ],
    title:
      "Trong khi lên kếhoạch quản lýrủi ro, đội của bạn đã đưa ra 434 rủi ro và 16  nguyên nhân chính của các rủi ro này. Dựán là dựán cuối cùng trong chuỗi các dự  án mà đội sẽlàm việc cùng nhau. Nhà tài trợrất khuyến khích và một khối lượng  lớn thời gian đã được đầu tư đểchắc chắn tôn chỉdựán đã hoàn thành và được k{ bởi  tất cảcác bên có liên quan chính. Trong giai đoạn lập kếhoạch dựán, đội không  đưa ra một cách thức hiệu quả đểlàm giảm hoặc thoát rủi ro. Nó không phải là  công việc đểcó thểthuê ngoài hay bịloại bỏ. Giải pháp tốt nhất là:   ",
  },
  {
    idx: 841,
    answers: [
      {
        title: "Sử dụng phân tích Monte Carlo sử dụng Internet như một công cụ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Áp dụng phương pháp đường tới hạn ",
        idx: 1,
      },
      {
        isKey: false,
        title: " Xác định các tùy chọn cho các hành động sửa lỗi khuyến nghị ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Áp dụng kỹ thuật Delphi",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang định lượng rủi ro cho dựán của cô ấy. Cô ấy có nhiều chuyên  môn bên ngoài, nhưng giá nhưcó thểsửdụng bên trong dựán. Điều này có thể được  thực hiện ntn? ",
  },
  {
    title:
      "Một PM nhiều kinh nghiệm vừa bát đầu làm việc trong một tổchức hợp nhất  công nghệthông tin lớn. Quản lýcủa cô ấy cung cấp cho cô ta một bản nháp tôn  chỉdựán và ngay lập tức yêu cầu cô ấy cung cấp phân tích vềrủi ro trong dựán.  Điều nào dưới đây là tốt nhất có thể giúp đỡ PM? ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Một bài báo từ tạp chí mạng PM",
      },
      {
        title: "Tuyên bố phạm vi dự án từ giai đoạn lên kế hoạch dự án",
        isKey: false,
        idx: 1,
      },
      {
        title: "Kế hoạch nguồn lực từ giai đoạn lên kế hoạch dự án",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Một cuộc nói chuyện với 1 nhân viên từ1 dựán tương tự đã thất bại trong quá  khứ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 842,
  },
  {
    title:
      "Bạn được trang bịnhưmột người quản lýcủa một dựán lớn, mới và phức tạp.  do dựán này là then chốt trong kinh doanh và rất rõ ràng (visible), các nhà quản lý cấp cao nói với bạn phân tích rủi ro dựán và chuẩn bịchiến lược đáp ứng rủi ro  càng sớm càng tốt. Tổchức có quy trình quản lýrủi ro mà rất ít khi được sửdụng, và  có lịch sửnắm bắt rủi ro kém. Điểm mốc đầu tiên của dựán là trong vòng 2 tuần  nữa. Trong khi chuẩn bịkếhoạch đối phó rủi ro, đầu vào từ đâu thông thường là ít  quan trọng nhất trong sốcác đáp án sau:",
    answers: [
      {
        isKey: false,
        title: "Nhân viên đội dự án   ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Nhà tài trợ dự án ",
      },
      {
        title:
          "Những cá nhân có trách nhiệm với các chính sách và mẫu biểu quản lý rủi ro",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Các bên có liên quan chính ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 843,
  },
  {
    idx: 844,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: " Bảo hành mua bán",
        isKey: false,
      },
      {
        idx: 1,
        title: "Lên kế hoạch cho quỹ dự phònG ",
        isKey: false,
      },
      {
        isKey: true,
        title: " Kiểm soát thời tiẾT và có kếhoạch đối phó với sựngẫu nhiên ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lên lịch cho việc triển khai ngoài mùa mưa bão  ",
      },
    ],
    title:
      "Bạn đang trong quá trình thực hiện một dựán 2 năm đểtriển khai các văn  phòng dọc theo đất nước. một cơn bão gây ra mất điện khi việc nâng cấp đã gần  hoàn thành. Khi có điện trởlại, toàn bộ báo cáo dựán và dữliệu lịch sử đã mất mà  không có cách nào lấy lại được. Điều gì nên làm để giảm nhẹ rủi ro này?   ",
  },
  {
    idx: 845,
    answers: [
      {
        idx: 0,
        title:
          "Báo động cho nhà tài trợdựán vềcác ảnh hưởng tiền năng tới chi phí, phạm vi,  lịch trình ",
        isKey: false,
      },
      {
        title: "Định tính rủi ro",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title:
          " Làm giảm nhẹ rủi ro bằng cách xây dựng kếhoạch đối phó rủi ro ",
        isKey: false,
      },
      {
        title:
          "Xây dựng việc khắc phục không nằm trong kếhoạch với rủi ro đang xảy ra  (wordaround)",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dựán phát triển hệthống đang gần tới ngày kết thúc, một rủi ro không  xác định trước đây đã được khám phá ra. Điều này có khảnăng ảnh hưởng tới khả năng tổng thểcủa dựán đểgiao sản phẩm. điều nên làm tiếp theo là gì?    ",
  },
  {
    answers: [
      {
        isKey: true,
        title: " Cập nhật xác định rủi ro và phân tích ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dành nhiều thời gian hơn để cải thiện ước tính chi phí.",
      },
      {
        isKey: false,
        title: "Loại bỏcàng nhiều gói công việc càng tốt   ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: " Tổ chức lại ma trận gán trách nhiệm  ",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "CPI=0.6, SPI=0.71. Dựán có 625 gói công việc và đang được hoàn thành trong  giai đoạn hơn 4 năm. Nhân viên đội dựán rất thiếu kinh nghiệm và dựán nhận  được ít hỗtrợcho các kếhoạch thích hợp. Điều nào dưới đây là tốt nhất đểthực  hiện? ",
    idx: 846,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 847,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Thêm khoản dựphòng vào dựán đểxem xét các rủi ro mới và thông báo với  ban lãnh đạo  ",
      },
      {
        title:
          "Ghi lại các mục rủi ro và tính toán giá trịtiền tệdựkiến dựa trên xác suất và ảnh  hưởng từ kết quả của việc xảy ra rủi ro.  ",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Xác định các sự kiện rủi ro và các chi phí liên quan, sau đó thêm các chi phí này  vào ngân sách dựán như một khoản dự phòng.  ",
      },
      {
        title:
          "Thêm 10% chi phí của sự bất ngờvào ngân sách dựán và thông báo với khách  hàng ",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      " Trong khi chuẩn bịkếhoạch đối phó rủi ro, bạn xác định thêm 1 vài rủi ro.  Bạn nên làm gì?     ",
  },
  {
    answers: [
      {
        title: " Kế hoạch quản lý rủi ro   ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Kế hoạch định lượng rủi ro ",
        idx: 1,
      },
      {
        title: "Kế hoạch đối phó rủi ro",
        isKey: false,
        idx: 2,
      },
      {
        title: "Kiểm soát rủi ro  ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      " Bạn vừa được phân công làm PM cho một dựán truyền thông mới và đang bắt  đầu vào giai đoạn thứ2 của dựán. Có khá nhiều rủi ro xuất hiện trong dựán,  nhưng không có ai ước tính chúng để đánh giá khoảng kết quảcó thểxảy ra. Điều  gì cần được hoàn thành?",

    idx: 848,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Lấy thêm nhiều thông tin xem làm thếnào nhân viên đó xác định được rủi ro, do  bạn đã thực hiện phân tích chi tiết và không xác định được rủi ro này  ",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Không quan tâm tới rủi ro, do các rủi ro đã được xác định trong giai đoạn lên kế hoạch dựán  ",
      },
      {
        idx: 2,
        title: "Thông báo với khách hàng vềrủi ro này  ",
        isKey: false,
      },
      {
        title: "Phân tích rủi ro này",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Trong giai đoạn thực thi dựán, một nhân viên xác định một rủi ro không có  trong sổghi. Bạn nên làm gì?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 849,
  },
  {
    title:
      "Trong giai đoạn thực thi dựán, một vấn đềlớn xảy ra mà không có trong sổ ghi rủi ro. Bạn nên làm gì đầu tiên?    ",
    answers: [
      {
        title:
          "Tạo một bản đối phó với rủi ro không nằm trong kếhoạch (create a  workaround)  ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        title: "Ước tính lại quy trình xác định rủi ro  ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tìm kiếm cho các hậu quảkhông mong đợi của vấn đềnày  ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Nói với ban lãnh đạo   ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 850,
  },
  {
    title:
      "Khách hàng yêu cầu thực hiện 1 thay đổi dựán mà sẽgia tăng rủi ro của dự án. Điều nào dưới đây bạn nên làm trước tất cảmọi người?   ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 851,
    answers: [
      {
        idx: 0,
        title:
          "Tính đến giá trịtiền tệ dự kiến của rủi ro trong ước tính chi phí mới  ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Nói với khách hàng về ảnh hưởng của thay đổi ",
      },
      {
        isKey: true,
        title: "Phân tích ảnh hưởng của thay đổi cùng với đội dự án  ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: " Thay đổi kếhoạch quản lý rủi ro",
      },
    ],
  },
  {
    idx: 852,

    answers: [
      {
        isKey: false,
        title:
          "Sự kết luận từ các bản ghi lịch sử từ các dự án đã thực hiện trước đó   ",
        idx: 0,
      },
      {
        title: "Ý kiến chuyên gia   ",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Quá trình phân tích theo cấp bậc  ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: " Cách tiếp cận từ dưới lên.  ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Điều nào dưới đây là tính chất quan trọng của kỹthuật Delphi?",
  },
  {
    idx: 853,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Khoản dự phòng",
      },
      {
        isKey: true,
        idx: 1,
        title: " Các cơ hội. ",
      },
      {
        title: "Xác minh phạm vi ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Các nguy cơ.   ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một dựán có 1 vài vấn đề, nhưng vẫn trong khảnăng kiểm soát. Vào những  tháng cuối của dựán, phần lớn các khoản dựphòng đã được sửdụng và phần lớn các  ảnh hưởng tiêu cực của các sựkiện được dựbáo trước đều đã xảy ra. Có 4 hoạt động  còn sót lại và 2 hoạt động trong số đó nằm trên đường tới hạn. Ban lãnh đạo đã  thông báo với PM rằng công ty thích hoàn thành dựán sớm hơn 2 tuần theo lịch để nhận được thêm lợi nhuận. Đểphản hồi lại, PM gửi một yêu cầu đềxuất cho 1 vài  công việc đội dựán chuẩn bịlàm, với hi vọng một công ty khác sẽhoàn thành  công việc nhanh hơn. PM tốt nhất nên cốgắng đểlàm việc với",
  },
  {
    idx: 854,
    title: "Một khi đã k{, hợp đồng là ràng buộc pháp lý trừ phi   ",
    answers: [
      {
        idx: 0,
        title: "Một bên không thể thực hiện  ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Một bên không đủ khả năng tài chính cho phần công việc của họ  ",
      },
      {
        isKey: true,
        idx: 2,
        title: "Vi phạm luật pháp   ",
      },
      {
        title:
          "Hợp đồng được tuyên bốlà vô hiệu lực thông qua luật sư của 1 trong 2 bên  ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Với một hợp đồng rõ ràng, một người bán hoàn thành công việc được chỉrõ,  nhưng người mua không hài lòng với kết quả. Hợp động sẽ được xem xét để:",
    idx: 855,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Vô hiệu hóa (null and void)",
      },
      {
        title: "Không hoàn thành.   ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Hoàn thành  ",
        idx: 2,
        isKey: true,
      },
      {
        title: "Từ bỏ ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 856,
    title: "Tuyên bố nào liên quan tới tài liệu thầu là đúng?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Tài liệu thầu được thiết kếtốt có thểlàm đơn giản quá việc so sánh của việc phản  ứng (response)  ",
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Tài liệu thầu phải nghiêm ngặt và không có tính mềm dẻo đểcho phép các ý kiến, đềnghịcủa người mua được cân nhắc  ",
        idx: 1,
      },
      {
        title:
          "Nói chung, tài liệu thầu không nên bao gồm tiêu chuẩn ước tính   ",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Tài liệu thầu được thiết kế tốt không bao gồm hợp đồng tuyên bốcông việc  ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 857,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Giảm giá thành từ người mua  ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Giúp người bán kiểm soát chi phí  ",
      },
      {
        title: "Đồng bộ hóa các mục tiêu   ",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "Giảm rủi ro từ người bán bằng cách chuyển rủi ro sang phía người mua   ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một PM cho người bán được ban lãnh đạo của cô ấy nói rằng dựán nên làm điều  gì có thể đểthưởng tiền ưu đãi. Mục tiêu chính của các điều khoản ưu đãi trong  hợp đồng là    ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Một hợp đồng giá cố định (fixed) sẽlàm giảm sựcần thiết phải kiểm soát thay  đổi  ",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Các thay đổi hiếm khi cung cấp lợi ích thực cho dựán ",
      },
      {
        idx: 2,
        isKey: true,
        title:
          " Các hợp đồng nên bao gồm các thủ tục phù hợp với các thay đổi   ",
      },
      {
        isKey: false,
        title:
          "Các thông số càng chi tiết sẽloại trừ các nguyên nhân thay đổi  ",
        idx: 3,
      },
    ],
    title: "Tuyên bố nào dưới đây về kiểm soát thay đổi là đúng?    ",
    idx: 858,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: " Tiếp tục thực hiện trả tiền cho dự án",
      },
      {
        idx: 1,
        title: "Trả 1 nửa cho đến khi vấn đề được khắc phục  ",
        isKey: false,
      },
      {
        title:
          "Vô hiệu hóa hợp đồng và bắt đầu các hành động pháp l{ đểthu hồi khoản thanh  toán vượt quá  ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Thay đổi hợp đồng đểyêu cầu nhiều kiểm tra thường xuyên hơn ",
        idx: 3,
      },
    ],
    idx: 859,
    title:
      " Một thủtục kiểm tra của hợp đồng có thểhoàn trảchi phí (cost reimbursable  CR) xác định báo giá cao đã được thực hiện. Nếu hợp đồng không chỉrõ các hành  động hiệu chỉnh, người mua nên:   ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Mục tiêu chính của thương lượng đàm phán hợp đồng là:     ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Có thêm nhiều hơn từ bên kia",
      },
      {
        title: " Bảo vệmối quan hệ   ",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Có được sự quay vòng tiền tệ cao nhất(highest monetary return).    ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Xác định mục tiêu và gắn bó với mục tiêu đó   ",
        isKey: false,
      },
    ],
    idx: 860,
  },
  {
    idx: 861,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title:
          "Hoàn thành công việc lúc đầu trong hoàn trảchi phí cơbản và sau đó thương  lượng 1 giá sẵn đối với các công việc thêm vào",
        idx: 0,
      },
      {
        title:
          "Hoàn thành công việc lúc đầu và từchối các công việc thêm vào   ",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Thương lượng một hợp đồng giá cố định bao gồm tất cảcác công việc  ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Bắt đầu một hợp đồng mới ",
      },
    ],
    title:
      "Một người bán đang thực hiện hợp đồng hoàn trảchi phí CR khi người mua  quyết định sẽmởrộng phạm vi dịch vụvà thay đổi thành hợp đồng giá cố định  (fixed price FP). Tất cảcác điều dưới đây là lựa chọn của người bán, ngoại trừ   ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Kếhoạch kýhợp đồng ",
      },
      {
        isKey: false,
        title: "Quản lýhợp đồng   ",
        idx: 1,
      },
      {
        title: "Yêu cầu trảlời từngười bán(request seller responses) ",
        idx: 2,
        isKey: true,
      },
      {
        title: "Kếhoạch mua bán và những thứthu lại được ",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Hội nghịcác nhà thầu là một phần của:    ",

    idx: 862,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 863,
    answers: [
      {
        title: "Hợp đồng tuyên bố công việc.  ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Sự chấp nhận  ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Địa chỉ của người bán   ",
      },
      {
        idx: 3,
        title: "Chữ ký của người mua.   ",
        isKey: false,
      },
    ],
    title: " Tất cảnhững điều dưới đây phải có đểcó một hợp đồng, ngoại trừ:",
  },
  {
    answers: [
      {
        title: "PM chỉcó vai trò không quan trọng",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "PM nên là người thương lượng đàm phán.   ",
      },
      {
        isKey: true,
        title: " PM nên cung cấp sựhiểu biết rõ vềrủi ro của dự án. ",
        idx: 2,
      },
      {
        title:
          "PM nên nói với người quản lýhợp đồng làm thếnào đểcó thể đảm trách được quá  trình k{ kết hợp đồng.",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Điều nào dưới đây mô tả đúng nhất vai trò của PM trong quá trình kýkết hợp  đồng?",
    idx: 864,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 865,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: ". Có được mức giá hợp lý(a fair and reasonable price)). ",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thương lượng một mức giá theo dựtoán của người bán",
      },
      {
        title: "Chắc chắn rằng tất cảcác rủi ro của dựán được mô tả kỹ lưỡng  ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Chắc chắn rằng đã có một kếhoạch quản lýtruyền thông hiệu quả   ",
        isKey: false,
      },
    ],
    title: "Đâu là một trong những mục tiêu chính trong quá trình thương lượng",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 866,
    answers: [
      {
        isKey: true,
        title: "Quyết định làm hay bán (make-or-buy) ",
        idx: 0,
      },
      {
        title: "Trảlời câu hỏi của người bán vềcác tài liệu thầu   ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tạo ra các điều kiện và điều khoản trong hợp đồng    ",
      },
      {
        idx: 3,
        title: "Tạo ra các yêu cầu vềcác tài liệu đềnghịhoặc tài liệu thầu",
        isKey: false,
      },
    ],
    title:
      "Hành động nào dưới đây xảy ra trong khi lên kế hoạch cho việc thu mua? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Ước tính các rủi ro ",
      },
      {
        idx: 1,
        title: "Xác nhận rằng sự quy thuận (submittal) đã được gửi.",
        isKey: false,
      },
      {
        title: "Xác nhận rằng các thay đổi với hợp đồng đã được thực hiện ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Trảlời câu hỏi của khách hàng vềtài liệu thầu",
      },
    ],
    title:
      "Điều nào dưới đây là tốt nhất cho PM thực hiện trong phần yêu cầu hồi đáp từ người bán của hoạt động quản lýhợp đồng",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 867,
  },
  {
    idx: 868,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      " Nhà tài trợ đang lo lắng vềngười bán phát sinh thêm lợi nhuận trong hợp  đồng chi phí cộng phí cố định (cost plus fixed fee CPFF). Mỗi tháng người bán yêu  cầu PM đệtrình các tính toán CPI và một phân tích của chi phí đểhoàn thành. PM  giải thích với nhà tài trợ rằng các khoản lợi nhuận phát sinh không nên phải bận  tâm trong dựán này do:  ",
    answers: [
      {
        title: "Đội dựán đã chắc chắn người bán không cắt giảm phạm vi ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tất cả các chi phí được lập hóa đơn sẽ được kiểm tra ",
        idx: 1,
        isKey: true,
      },
      {
        title: "Chỉcó thểtăng tối đa 10% nếu có chi phí bất ngờ vượt quá    ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Chi phí chỉnhận được từngười bán khi dựán hoàn thành   ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 869,
    answers: [
      {
        idx: 0,
        title: ". Không xác định  ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Là 1 phần trong thương lượng liên quan trong việc chi trảmọi hóa đơn  ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Áp dụng như một mục hàng trong mọi hóa đơn     ",
      },
      {
        isKey: false,
        title: "Đc xác định với các bên khác vào cuối dự án   ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Trong một hợp đồng giá cố định, lệphí hay lợi nhuận là",
  },
  {
    title:
      "Một dựán thực hiện theo hợp đồng có thểhoàn lại chi phí cuối cùng đã sắp  kết thúc. Người mua phải nhớphải làm gì",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 870,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Giảm mức độrủi ro của dự án",
      },
      {
        title: "Kiểm tra sự đồng thuận với giá của người bán",
        isKey: true,
        idx: 1,
      },
      {
        title: " Ước tính lệphí anh ta phải trả ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: " Chắc chắn rằng người bán không thêm nguồn lực nào  ",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Di chuyển các nguồn lực.  ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Yêu cầu thêm nguồn lực.   ",
        idx: 1,
      },
      {
        isKey: true,
        title: "Điều chỉnh nguồn lực   ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Dự thảo ngân sách ngoài giờ   ",
        isKey: false,
      },
    ],

    idx: 871,
    title:
      "Giám đốc dự án đang xây dựng kế hoạch cho dự án. Giám đốc dự án đã xác định các nhiệm vụ và chỉ định nguồn lực thích hợp. Công cụ được sử dụng thông báo rằng một vài nguồn lực được phân bổ xong. Bước tiếp theo của giám đốc dự án sẽ là gì? ",
  },
  {
    idx: 872,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Giám đốc dự án đã khám phá vấn đề với môđun thống kê của dự án. Các số đo đã được ghi rõ cho các đơn vị của của Mỹ nhưng các nhà lập trình nước ngoài sử dụng các đơn vị quốc tế. Vấn đề này có thể tránh được ở chỗ nào trong dự án?",
    answers: [
      {
        idx: 0,
        title: "Lập kế hoạch dự án",
        isKey: true,
      },
      {
        title: "Kiểm thử dự án.  ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kiểm soát dự án.   ",
      },
      {
        idx: 3,
        title: "Quay vòng dự án",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Giám đốc dự án được chỉ định cho một dự án lớn đã và đang được thực hiện một số lần. Đội dự án vừa hoàn tất giai đoạn thiết kế của dự án và đang tiến hành trong giai đoạn triển khai. Tại điểm này, thay đổi nào có thể xẩy ra mà không phải gánh chịu rủi ro của việc tiến hành lại toàn bộ giai đoạn thiết kế? ",
    idx: 873,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Phạm vi ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Nhiệm vụ ",
      },
      {
        title: "Thiết kế chi tiết  ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Ngày tháng chuyển giao ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Thông báo với khách hàng rằng thay đổi phạm vi là không được phép. ",
      },
      {
        title: "Trình yêu cầu thay đổi lên Ban quản lý thay đổi.  ",
        isKey: true,
        idx: 1,
      },
      {
        title: "Triển khai các thay đổi theo yêu cầu ngay lập tức. ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Thiết kế lại toàn bộ dự án từ vạch xuất phát. ",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Giám đốc dự án được khách hàng đề nghị thực hiện những thay đổi quan trọng cho dự án. Những thay đổi này không được chú tâm trong Tài liệu thiết kế hay Phạm vi dự án. Cách tốt nhất để giám đốc dự án đáp lại yêu cầu là gì? ",
    idx: 874,
  },
  {
    answers: [
      {
        isKey: true,
        title: ". Chi phí rủi ro nhỏhơn ",
        idx: 0,
      },
      {
        title: "Chi phí rủi ro cao hơn.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chỉcó ít rủi ro. ",
      },
      {
        isKey: false,
        title: "Rủi ro được chia đều cho tất cảcác bên. ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 875,
    title:
      "Nhà tài trợvà PM đang thảo luận loại hợp đồng nào mà PM lên kếhoạch sử dụng trong dựán. Người bán chỉra rằng tổchức thực hiện đã dành ra nhiều tiền để thuê đội ngũthiết kế để đưa ra bản thiết kế. PM lo lắng rằng rủi ro từngười mua sẽ ít nhất có thể. Một lợi thếtừhợp đồng giá cô định cho người bán là ",
  },
  {
    title:
      "Nhưmột phần của hệthống quản lýsổsách, bạn đang cốgắng chắc chắn rằng  toàn bộhồsơtừhợp đồng đã được ghi lại và ghi vào bản mục lục. Điều nào dưới  đây bạn không nên lo lắng? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Sự đềnghị(proposal)",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: " Tuyên bốcông việc",
      },
      {
        idx: 2,
        isKey: false,
        title: " Các điều khoản và điều kiện  ",
      },
      {
        idx: 3,
        title: " Quá trình thương lượng ",
        isKey: true,
      },
    ],
    idx: 876,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn đang ởtrong một thương lượng phức tạp khi bên kia nói:”chúng tôi cần  hoàn thành trong 1h do tôi phải đón máy bay”. Người này đang sửdụng chiến lược  thương lượng nào?",
    answers: [
      {
        idx: 0,
        title: "Người xấu, người tốt (good guy, bad guy) ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Trì hoãn ",
        idx: 1,
      },
      {
        title: "Thời hạn cuối cùng (deadline) ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "  Các yêu cầu quá khích (extreme demands).",
      },
    ],
    idx: 877,
  },
  {
    idx: 878,
    answers: [
      {
        isKey: false,
        title: "Cho phép việc truy cập dễdàng hơn đểkýhợp đồng chuyên môn ",
        idx: 0,
      },
      {
        title: "Gia tăng chuyên môn của cônt ty trong việc kýhợp đồng ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: " Trung thành hơn với dựán.",
        isKey: false,
      },
      {
        idx: 3,
        title:
          " Cho phép 1 người có hợp đồng có thểlàm việc trong một dựán riêng (allow a  contracts person to work on a single project)",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Điều nào dưới đây là một lợi thếcủa hợp đồng tập trung?",
  },
  {
    title:
      " Với loại hợp đồng nào dưới đây, người bán có liên quan nhiều nhất tới phạm  vi dựán?  ",
    idx: 879,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Hợp đồng giá cố định ",
      },
      {
        title: "Hợp đồng chi phí cộng phí cố định ",
        idx: 1,
        isKey: false,
      },
      {
        title: "  Hợp đồng thời gian và nguyên vật liệu",
        isKey: false,
        idx: 2,
      },
      {
        title: " Hợp đồng đơn đặt hàng (purchase order ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Công ty của bạn có một việc khẩn cấp và cần các công việc hợp đồng hoàn  thành càng sớm càng tốt. Với tình huống này, điều nào dưới đây là có ích nhất để thêm vào hợp đồng? ",
    idx: 880,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title: " Một tuyên bốhợp đồng làm việc",
        isKey: false,
      },
      {
        title: " Các yêu cầu mà trong đó các hợp đồng con có thểsửdụng",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: " Các ưu đãi ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "  Một điều khoản không thểbào chữa (a force majeure clause)",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong phần nào của quá trình kýhợp đồng mà việc thương lượng hợp đồng  diễn ra?  ",
    answers: [
      {
        idx: 0,
        title: " Kếhoạch thu mua",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: " Kếhoạch kýhợp đồng",
      },
      {
        title: " Yêu cầu trảlời người bán ",
        idx: 2,
        isKey: false,
      },
      {
        title: "  Lựa chọn người bán.",
        isKey: true,
        idx: 3,
      },
    ],

    idx: 881,
  },
  {
    title:
      " Đội dựán đang cãi nhau vềngười bán tiềm năng mà chấp nhận các đềnghị.  Một nhân viên dự án tranh luận vềmột người bán tin cậy trong khi 1 nhân viên  khác muốn dựán được trao cho một người bán khác. Đội dựán đang ởtrong phần  nào của quá trình quản lýthu mua? ",
    idx: 882,
    answers: [
      {
        isKey: false,
        title: "Kếhoạch thu mua ",
        idx: 0,
      },
      {
        isKey: false,
        title: "Kếhoạch kýhợp đồng ",
        idx: 1,
      },
      {
        title: " Yêu cầu trảlời người bán  ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Lựa chọn người bán. ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 883,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quản trịhợp đồng ",
      },
      {
        title: " Kếhoạch thu mua",
        idx: 1,
        isKey: true,
      },
      {
        title: " Yêu cầu trảlời người bán",
        isKey: false,
        idx: 2,
      },
      {
        title: " Lựa chọn người bán ",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Đội dựán dường nhưthích tranh luận: họ đã tranh luận vềmọi thứ. Thật may  là PM đã thiết lập 1 hệthống kiểm tra và các buổi họp xây dựng đội mà sẽgiúp đỡ và khuyến khích đội dựán hợp tác nhiều hơn với nhau. Điều mới nhất họtranh  luận là họnên tựhoàn thành gói công việc của mình hay thuê ngoài. Họ đang ở trong quá trình nào của việc quản lýthu mua?",
  },
  {
    idx: 884,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Một PM đang tạo ra các yêu cầu đềnghị(request for proposal RFP). Anh ấy  đang ởtrong quá trình nào của việc quản lýthu mua?  ",
    answers: [
      {
        title: "Kếhoạch thu mua ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Kếhoạch kýhợp đồng ",
        isKey: true,
        idx: 1,
      },
      {
        title: " Yêu cầu trảlời người bán  ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Lựa chọn người bán. ",
        isKey: false,
      },
    ],
  },
  {
    idx: 885,

    title:
      "Bạn là 1 PM, người quản lý chương trình đến đểgiúp đỡvềgiá thầu cho dự án mới nhất của cô ấy. bạn muốn bảo vệcông ty của bạn khỏi các rủi ro tài chính.  Bạn đã có định nghĩa phạm vi giới hạn. Loại hình hợp đồng nào là tốt nhất đểlựa  chọn? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Hợp đồng giá cố định ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Hợp đồng chi phí cộng phần trăm chi phí (cost plus percent of cost CPPC) ",
      },
      {
        title: " Hợp đồng thời gian và nguyên vật liệu ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: " Hợp đồng chi phí cộng phí cố định CPFF",
      },
    ],
  },
  {
    title:
      "Thương lượng giữa 2 bên đang trởnên phức tạp, nên bên A làm một vài ghi  chép mà cả2 bên đều kývào. Tuy nhiên, khi công việc hoàn thành, bên B khẳng  định rằng họkhông yêu cầu cung cấp một hạng mục mà cả2 bên đều đồng { trong  quá trình thương lượng, do nó không có trong hợp đồng tiếp theo. Trong trường  hợp này, bên B:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          " Không đúng, do cả2 bên phải tuân theo với những gì họ đã đồng ý",
        isKey: false,
        idx: 0,
      },
      {
        title: " Đúng, do đó là một lời đềnghị",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title:
          " Nhìn chung là đúng, do cả2 bên chỉyêu cầu thực hiện những gì ghi trong hợp  đồng.  ",
      },
      {
        isKey: false,
        idx: 3,
        title: "  Nhìn chung là sai, do tất cảhợp đồng phải được tôn trọng",
      },
    ],
    idx: 886,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 887,

    title:
      "Dựán của bạn vừa được xúc tiến và bạn đang tìm kiếm một nhà thầy phụ để hoàn thiện mạng lưới nhanh chóng. Không có thời gian để đưa ra yêu cầu cho các  đềnghị(RFP) nên bạn chọn sửdụng một công ty bạn đã sửdụng nhiều lần đểphát  triển phần mềm. Mối bận tâm chính trong tình huống này là ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sựthông đồng giữa các nhà thầu phụ",
      },
      {
        title: " Trình độchuyên môn của các nhà thầu ",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: " Tiêu chuẩn đánh giá của các nhà thầu ",
        idx: 2,
      },
      {
        title: " Tổchức hội nghịnhà thầu.",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 888,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Có quá nhiều dữliệu độc quyền ",
      },
      {
        isKey: false,
        title: "Công ty có chuyên môn nhưng k sẵn có nhân lực  ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "  Công ty không cần kiểm soát công việc ",
      },
      {
        isKey: false,
        idx: 3,
        title: " Các nguồn lực của công ty là giới hạn ",
      },
    ],
    title:
      "PM và nhà tài trợdựán đang thảo luận vềchi phí dựán và khi nào tốt đểcông  ty của họtham gia vào dựán hoặc thuê một công ty khác làm việc này. Nếu họhỏi  ýkiến của bạn, bạn nên nói rằng công ty nên tựlàm dựán này sẽtốt hơn nếu như:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Sau rất nhiều hứng thú và các công việc nặng nhọc, hợp đồng tuyên bốcông  việc cho dựán đã hoàn thành. Ngay cảkhi có được sự đồng ýrằng hợp đồng tuyên bố công việc đã hoàn thành, PM vẫn lo lắng khi nào xác định thật sựtất cảcác yêu  cầu của người mua. PM tham dựhội nghịcác nhà thầu. Anh ta hỏi bạn lời khuyên  nên làm gì tiếp trong cuộc họp hội nghị. Lời khuyên nào là tốt nhất bạn có thểgiúp  đỡ anh ta?:",
    answers: [
      {
        title:
          "Bạn không cần phải tham gia vào hội nghị, người quản lýhội nghịsẽlàm việc  đó ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Chắc chắn rằng bạn không thương lượng phạm vi dựán ",
      },
      {
        idx: 2,
        isKey: true,
        title:
          " Chắc chắn bạn đã cho toàn bộngười bán đủthời gian đểtrảlời câu hỏi. họ không muốn trảlời câu hỏi khi đối thủcạnh tranh của họcũng có mặt trong hội  nghị.  ",
      },
      {
        isKey: false,
        title:
          " Đểnhà tài trợdựán điều khiển hội nghịvà bạn sẽ đóng vai trò “người tốt” trong  hội nghị. ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 889,
  },
  {
    title:
      "Một người bán được thưởng một hợp đồng đểxây dựng một đường ống. các  điều khoản và điều kiện trong hợp đồng yêu cầu kếhoạch công việc được đưa ra  đểngười mua phê duyệt trước khi bắt đầu công việc, nhưng người bán không cung  cấp được kếhoạch công việc. điều nào dưới đây là tốt nhất cho PM của người bán để thực hiện",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 890,
    answers: [
      {
        isKey: false,
        title: " Đưa ra một văn bản có mục đích (file a letter of intent) ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          " Xác dựng kếhoạch công việc và đưa ra cho người bán đểlàm công việc được trôi  chảy (move thing along)",
      },
      {
        idx: 2,
        title: " Đưa ra một văn bản mặc định (default letter) ",
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Yêu cầu người bán ngừng làm việc cho tới khi kếhoạch công việc được chuẩn bị.",
        idx: 3,
      },
    ],
  },
  {
    idx: 891,
    title:
      "Kết thúc hợp đồng khác với kết thúc hoạt động quản trị ởchỗ, kết thúc hợp  đồng",
    answers: [
      {
        isKey: true,
        title: "Xảy ra trước khi kết thúc các hoạt động quản trị ",
        idx: 0,
      },
      {
        idx: 1,
        title: " Là điều duy nhất liên quan tới khách hàng  ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: " Bao gồm cảthu hồi tài sản (return of property) ",
      },
      {
        idx: 3,
        isKey: false,
        title: " Có thểhoàn thành nhiều hơn 1 lần trong mỗi hợp đồng",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn vừa bắt đầu quản trịmột hợp đồng khi ban lãnh đạo quyết định chấm dứt  hợp đồng. bạn nên làm gì trước tiên?",
    idx: 892,
    answers: [
      {
        isKey: false,
        title: "Quay lại yêu cầu sựtrảlời của người bán",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Quay lại đểlên kếhoạch hợp đồng. ",
      },
      {
        isKey: false,
        idx: 2,
        title: " Hoàn thành việc quản lýhợp đồng(contract admin). ",
      },
      {
        isKey: true,
        title: " Đến giai đoạn kết thúc hợp đồng.",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Đội dự án đang tranh luận về người bán sắp tới, người đã đệ trình các đề nghị (submit proposals). Một nhân viên tranh luận về một người bán tin cậy, trong khi một nhân viên khác muốn một nguòi bán khác sẽ có dự án. Điều tốt nhất mà PM nên nhắc nhở đội của mình tập trung vào trong quá trình tìm ra lựa chọn là: ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Các tài liệu hợp đồng ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Kiểm tra hợp đồng ",
        isKey: false,
      },
      {
        title: "Các tiêu chuẩn đánh giá ",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Kế hoạch quản lý hợp đồng",
        isKey: false,
      },
    ],
    idx: 893,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tiêu chuẩn thực hiện quản lý dự án của công ty ",
      },
      {
        title: "Sự trung thành với dự án (loyalty) ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Kinh nghiệm ",
        isKey: false,
      },
      {
        title:
          "Quyền được truy cập cho những người khác với những chuyên môn tương tự",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Tổ chức đang cố gắng quyết định có nên chia phòng ban quản lý hợp đồng và phân công trách nhiệm ký kết hợp đồng cho một phòng ban có trách nhiệm trực tiếp với dự án hay không. Một chuyên gia về hợp đồng không thực sự muốn có sự chia tách này do họ sẽ mất……………………… trong môi trường phân tán việc ký kết hợp đồng(or phi tập trung- decentralized) ",

    idx: 894,
  },
  {
    title:
      "Trong giai đoạn thực thi dự án, các nhân viên đội dự án bàn giao sản phẩm của dự án cho người bán. Tuy nhiên, người bán từ chối những sản phẩm này, tuyên bố rằng nó không đáp ứng yêu cầu ở trang 300 của tài liệu đặc tả chi tiết kỹ thuật. bạn đã xem lại tài liệu và cũng đồng {. Điều tốt nhất nên làm là gì? ",

    idx: 895,
    answers: [
      {
        title: "Giải thích rằng hợp đồng đã sai và nên được thay đổi ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đưa ra yêu cầu thay đổi ",
      },
      {
        title:
          "Xem lại các yêu vầu và gặp nhân viên chịu trách nhiệm với việc này để xem lại từ điển WBS ",
        isKey: true,
        idx: 2,
      },
      {
        title: "Họp đội dự án để xem xét lại yêu cầu ở trang 300",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Hợp đồng chi phí cộng phí cố định (CPFF) ",
        isKey: true,
      },
      {
        title: "Hợp đồng thời gian và nguyên vật liệu (TM) ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Hợp đồng giá cố định (FP) ",
        isKey: false,
      },
      {
        title:
          "Hợp đồng khuyến mại giá cố định (FPIF-fixed price incentive fee)",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 896,
    title:
      "Loại hợp đồng nào bạn KHÔNG muốn sử dụng nếu bạn không đủ nhân lực để kiểm tra các hóa đơn? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM mới đang bắt đầu tạo ra bản hợp đồng tuyên bố công việc. Một bên có liên quan muốn thêm 1 vài hạng mục vào bản hợp đồng tuyên bố công việc. Một bên có liên quan khác chỉ muốn mô tả các yêu cầu chức năng. dự án rất quan trọng với công ty của PM, nhưng một người bán sẽ làm việc này. Bạn sẽ khuyên PM này điều gì? ",
    answers: [
      {
        idx: 0,
        title:
          "Bản hợp đồng tuyên bố công việc nên chung chung(general) để cho phép người bán có quyết định của riêng mình ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Bản hợp đồng tuyên bố công việc nên chung chung để cho phép các hiệu chỉnh sau này ",
      },
      {
        isKey: false,
        title:
          "Bản hợp đồng tuyên bố công việc nên chi tiết để cho phép các hiệu chỉnh sau này ",
        idx: 2,
      },
      {
        title:
          "Bản hợp đồng tuyên bố công việc nên càng chi tiết càng tốt cho loại dự án",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 897,
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Hoàn thành dự án như được yêu cầu, nhưng thỉnh thoảng xác minh phạm vi với khách hàng trong suốt dự án ",
      },
      {
        title:
          "Hoàn thành dự án chỉ trong 8 tháng mà không hề liên lạc với khách hàng trong khoảng thời gian này ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Hỏi ban lãnh đạo để thỉnh thoảng xác nhận với khách hàng ",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Hoàn thành dự án, nhưng ghi lại rằng khách hàng không muốn liên lạc",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một khách hàng đưa cho bạn bản hợp đồng tuyên bố công việc cho một dự án 8 tháng khá phức tạp và có 1 vài điểm chưa biết. Khách hàng yêu cầu bạn chỉ làm việc (just “get it done”) và chỉ muốn gặp bạn vào cuối tháng thứ 8 khi bạn bàn giao dự án hoàn thiện. trong tình huống này, điều tốt nhất nên làm là: ",

    idx: 898,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Gần cuối dự án cuối cùng của bạn, một nhóm các bên có liên quan muốn thêm các yêu cầu vào khi họ biết rằng họ sẽ bị ảnh hưởng từ dự án của bạn. điều này sẽ là một rắc rối do bạn không bao gồm thời gian và chi phí trong kế hoạch quản lý dự án cho những yêu cầu kiểu này. Điều tốt nhất bạn nên làm đề ngăn chặn những vấn đề này trong các dự án sắp tới là: ",

    answers: [
      {
        isKey: false,
        title:
          "Xem xét lại từ điển WBS thật kỹ lưỡng, tìm kiếm các mô tả chưa hoàn tất ",
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Xem xét lại tôn chỉ dự án thật kỹ lưỡng, kiểm tra các lỗ hổng nghiệp vụ ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Làm thêm một công việc kỹ lưỡng về lên kế hoạch hợp đồng ",
        idx: 2,
      },
      {
        title: "Chú { thêm vào ban lãnh đạo các bên có liên quan",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 899,
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Tiếp tục phát triển dự án và tìm kiếm thêm thông tin sau đó để giải quyết vấn đề ",
        idx: 0,
      },
      {
        title: "Lấy số liệu trung bình và sử dụng làm mục tiêu ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thực hiện một phân tích khả thi ",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Hỏi nhà tài trợ để có quyết định cuối cùng",
        isKey: false,
      },
    ],
    idx: 900,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Dự án phát triển phần mềm không phát triển tốt. có hơn 30 bên có liên quan, và không ai đồng ý với mục tiêu dự án. Một bên có liên quan tin rằng dự án có thể có được 30% cải thiện trong khi một bên khác tin rằng có thể lên tới 50%. PM thì là 10% cải thiện là thực tế hơn. Cách giải quyết tốt nhất là: ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dự án chưa hoàn thành do dự án cần phải lên kế hoạch lại ",
      },
      {
        isKey: true,
        title:
          "Dự án chưa hoàn thành cho tới khi toàn bộ dự án và sản phẩm bàn giao là hoàn thành và được chấp nhận ",
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Dự án là hoàn thành do khách hàng đã chấp nhận sản phẩm bàn giao ",
        idx: 2,
      },
      {
        title:
          "Dự án hoàn thành do dự án đã đến ngày kết thúc (reach the due date)",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Một đội dự án đã hoàn thành, và khách hàng đã chấp nhận, phạm vi dự án đã hoàn thành. Tuy nhiên, các bài học rút ra do phòng ban quản lý dự án yêu cầu vẫn chưa dc hoàn thành. Trạng thái của dự án là ntn? ",
    idx: 901,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn đang ở giai đoạn giữa dự án của một sản phẩm mới phát triển cho 1công ty công khai giao dịch, bạn biết được người PM trước đã chi trả 3000000$ mà không được phê chuẩn theo chính sách công ty. Thật may mắn, CPI=1.2. bạn nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 902,
    answers: [
      {
        title: "Liên lạc với người quản lý của bạn ",
        idx: 0,
        isKey: true,
      },
      {
        title:
          "Đặt khoản chi đó vào một tài khoản của bên thứ 3 (escrow account) để làm bằng chứng ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Che giấu khoản chi này trong phần tập trung chi phí lớn nhất sẵn có (the largest cost center available) ",
      },
      {
        title: "Từ chối khoản chi này",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 903,

    answers: [
      {
        title: "Cho nhà tài trợ biết các yêu cầu của các bên có liên quan ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đánh giá ảnh hướng của các phạm vi thêm vào ",
      },
      {
        isKey: true,
        title: "Nói với các bên có liên quan rằng không thể thêm phạm vi ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Thêm công việc nếu còn thời gian trong lịch trình dự án",
        isKey: false,
      },
    ],
    title:
      "Trong cuộc họp với một vài bên có liên quan, PM được yêu cầu thêm công việc vào phạm vi dự án. PM đã sử dụng thông tin phù hợp với dự án trước khi tôn chỉ dự án được k{ và nhớ rằng nhà tài trợ đã từ chối rõ ràng các khoản vốn cho phạm vi được đề cập bởi các bên có liên quan. Điều tốt nhất mà PM nên làm là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 904,
    answers: [
      {
        title:
          "Từ chối đề cập vấn đề này với nhân viên đó nhưng vẫn tiếp tục theo dõi các hành động của cô ta. ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Thông báo với thủ trưởng của bạn về vấn đề này ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nói chuyện về việc này với thủ trưởng của cô ta ",
      },
      {
        isKey: true,
        idx: 3,
        title: "Nói chuyện về việc này với cô ấy",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Khi kiểm tra lịch của một nhân viên để lên lịch họp, bạn nhìn thấy cô ấy đã đặt lịch gặp với 1 bên có liên quan chính nhưng bạn đã không được thông báo. Cách thăm dò tốt nhất là: ",
  },
  {
    title:
      "PM đang có một thời gian khó khăn khi giữ cho dự án phát triển đúng lịch trình. Dự án yêu cầu 220 người để hoàn thành. Tất cả các vấn đề của dự án đã được giải quyết và PM hài lòng, SPI=0.67, CPI=1.26, có 23 hoạt động trong đường tới hạn và độ dài PERT của dự án là 26. Trong điều kiện này, báo cáo trạng thái hàng tháng nên báo cáo rằng: ",

    answers: [
      {
        idx: 0,
        title: "Dự án vẫn hoạt động tốt ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Dự án sẽ bị chậm tiến độ ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Chi phí dự án thấp hơn ngân sách ",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Các vấn đề và các tùy chọn",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 905,
  },
  {
    title:
      "Nhân viên của bạn đã chậm 3 ngày so với lịch báo cáo. 5 phút trước khi cuộc họp mà chủ đề của báo cáo sẽ được thảo luận thì cô ấy mới đưa cho bạn báo cáo. Bạn nhận thấy có 1 vài lỗi nghiêm trọng trong đó, bạn nên làm gì? ",
    idx: 906,
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Hủy cuôc họp và lên lịch họp lại sau khi báo cáo đã được sửa chữa ",
      },
      {
        isKey: false,
        title:
          "Tới buổi họp và nói với mọi người tham gia là có lỗi trong báo cáo ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Bắt buộc nhân viên phải thuyết trình và những người tham gia khác im lặng tìm  lỗi ",
      },
      {
        title: "Hủy cuộc họp và tự viết lại báo cáo",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Cung cấp cho cô ta những gì cô ấy cần ",
        isKey: true,
        idx: 0,
      },
      {
        title:
          "Thông báo với quản lý của bạn về mối lo âu về sự hỗ trợ của cô ấy ",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Nói chuyện với cô ta vào lúc bắt đầu dự án và cố gắng mô tả tại sao bạn phản đối và tìm ra 1 cách để giải quyết vấn đề ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Hỏi để được thoát ra khỏi dự án",
      },
    ],
    title:
      "Một người quản lý có trách nhiệm cho 1 dự án có được sự hỗ trợ từ người lãnh đạo cấp cao. Từ khi bắt đầu, bạn đã không đồng ý với ng quản lý này về việc dự án nên tiến hàng ntn và các sản phẩm bàn giao là gì. Bạn và cô ấy đã bất đồng quan điểm rất nhiều vấn đề trong quá khứ. Phòng ban của bạn được giao nhiệm vụ cung cấp 1 vài gói công việc quan trọng do dự án. Bạn nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 907,
  },
  {
    title:
      "Một dự án lớn và phức tạp về xây dựng trong một công ty nc ngoài yêu cầu sự kết hợp để di chuyển các thiết bị yêu cầu qua 1 con phố đông đúc. Để chắc chắn thiết bị được vận chuyển an toàn, các mối liên hệ của bạn ở nc này thông báo rằng bạn phải trả cho các cảnh sát địa phương 1 khoản để thuận tiện cho việc vận chuyển. bạn nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Không trả do đó là tiền hối lộ ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Loại trừ công việc ",
      },
      {
        isKey: true,
        idx: 2,
        title: "Trả khoản phí ",
      },
      {
        title: "Không trả phí nếu đấy không phải là 1 phần của ước lượng dự án",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 908,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Không giành nhiều thời gian chuẩn bị cho cuộc thương lượng ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Cắt giảm thời gian thương lượng ",
      },
      {
        title: "Chỉ thương lượng các hạng mục chunhs ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Hoãn cuộc thương lượng",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 909,
    title:
      "Một cuộc thương lượng lớn với 1 nhà thầu phụ tiềm năng đã được lên lịch vào ngày mai, bạn phát hiện ra có 1 cơ hội tốt mà dự án sẽ bị hoãn. Bạn nên làm gì? ",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Cố gắng cấu trúc lại lịch trình để đáp ứng với thời hạn cuối cùng của dự án ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Báo cáo đánh giá của bạn với nhà tài trợ ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Chuyển lại dự án cho PM cũ ",
      },
      {
        idx: 3,
        title:
          "Tiếp tục thực hiện với lịch trình được PM cũ lên kế hoạch và báo cáo điều này vào điểm mốc bị lỡ đầu tiên (first missed milestone)",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 910,
    title:
      "Bạn được phân công quản lý 1 dự án đã hoàn thành được 1 nửa theo lịch trình. Sau đánh giá bao quát, bạn phát hiện ra dự án đang đi chậm hơn lịch trình(far behind schedule), và dự án có thể sẽ kéo dài gấp đôi thời gian ước tính ban đầu của PM trước. tuy nhiên, nhà tài trợ đã được nói là dự án đang đúng lịch trình. Hành đông tốt nhất là: ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Tiếp tục theo kế hoạch, khách hàng của bạn sẽ không yêu cầu thay đổi ",
      },
      {
        title:
          "Thông báo với khách hàng về việc nâng cao chất lượng và ảnh hưởng của nó tới thời gian và các chức năng của dự án ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Cài đặt thay đổi và điều chỉnh lịch trình nếu cần thiết vì nó hỗ trợ yêu cầu đầu tiên của khách hàng ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Cài đặt thay đổi đối với các địa điểm còn lại và tiếp tục theo lịch trình",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn đang đi được ½ chặng đường qua 1 buổi giới thiệu máy bay mạng lớn (major network rollout). Có 300 địa điểm trong US và 20 ở UK. Một người bán phần mềm vừa phát hành một phần mềm lớn nâng cao chất lượng cho 1 vài thiết bị được cài đặt. việc nâng cao chất lượng cung cấp cho khách hàng chức năng họ yêu cầu mà không có sẵn tại thời điểm dự án bắt đầu. trong điều kiệnnày, hành động nào là tốt nhất? ",
    idx: 911,
  },
  {
    idx: 912,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn đang làm việc trong dự án nghiên cứu và phát triển, khách hàng yêu cầu bạn bao gồm một thành phần đặc biệt vào dự án. Bạn biết rằng nó có nghĩa là thêm công việc, và bạn k muốn có sự vượt quá nguồn dự trữ có sẵn. bạn nên làm gì? ",
    answers: [
      {
        idx: 0,
        title:
          "Xóa gói công việc có mức ưu tiên thấp hơn để dành thời gian và nguồn dự trữ có sẵn ",
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Sử dụng nguồn dự trữ từ khoản dành riêng ngẫu nhiên để bù đắp chi phí ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tuân theo quy trình kiểm soát thay đổi hợp đồng ",
      },
      {
        title: "Yêu cầu thêm nguồn dự trữ từ nhà tài trợ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn là PM cho 1 trong nhiều dự án trong 1 chương trình lớn và quan trọng. tại buổi họp quan trọng, bạn chú ý rằng một PM khác đã báo cáo dự án của cô ấy đúng lịch trình. Tìm kiếm trong dự án của bạn khoảng 1 vài tuần trc, bạn nhớ rằng nhiều sản phẩm bàn giao từ dự án khác đã bị chậm trễ. Bạn nên làm gì? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Gặp người quản l{ chương trình ",
      },
      {
        idx: 1,
        title: "Xây dựng kế hoạch kiểm soát rủi ro ",
        isKey: false,
      },
      {
        title: "Thảo luận vấn đề với thủ trường của bạn ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Gặp người PM kia",
      },
    ],
    idx: 913,
  },
  {
    answers: [
      {
        title: "Lên kế hoạch lại để có được 35% cải thiện thời gian giải lao ",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Giảm ước tính và ghi lại thay đổi trong kế hoạch phản ứng rủi ro ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Cung cấp một ước tính chính xác của chi phí thực tế và cố gắng chứng minh nó ",
      },
      {
        isKey: false,
        title: "Gặp đội dự án để xác định bạn có thể tiết kiệm 10% ở đâu",
        idx: 3,
      },
    ],
    title:
      "Bạn luôn được ban lãnh đạo yêu cầu cắt giảm ước tính dự án 10% sau khi bạn đưa nó cho họ. phạm vi của dự án mới là k rõ ràng và có hơn 30 bên có liên quan. Ban lãnh đạo mong muốn giảm thời gian giải lao 25% như 1 kết quả của dự án. Điều nào dưới đây là hành động tốt nhất trong tình huống này? ",
    idx: 914,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Nhân viên của bạn đã chậm 3 ngày so với lịch báo cáo. 5 phút trước khi cuộc họp mà chủ đề của báo cáo sẽ được thảo luận thì cô ấy mới đưa cho bạn báo cáo. Bạn thấy có 1 vài lỗi nghiêm trọng trong báo cáo. Điều này có thể ngăn chặn ntn? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Yêu cầu các nhân viên cập nhật định kz ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Huấn luyện và cố vấn cho nhân viên ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Chắc chắn nhân viên có khả năng làm công việc ",
      },
      {
        title:
          "Hoãn buổi họp sớm hơn do bạn không có thời gian xem lại báo cáo",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 915,
  },
  {
    idx: 916,

    answers: [
      {
        isKey: false,
        title: "Cố gắng giữ yêu cầu của họ trong dự án của bạn ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Nói với các PM khác trong công ty về vấn đề lao động ",
      },
      {
        isKey: false,
        title:
          "Liên lạc với công ty và hỏi ý kiến rằng bạn sẽ hủy công việc của họ trong dự án trừ phi họ giải quyết được vấn đề bất đồng lao động ",
        idx: 2,
      },
      {
        title: "Kết thúc công việc kinh doanh với công ty này",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án đang đi được nửa đường khi bạn phát hiện có 1 ng bán phần mềm cho dự án của bạn có khó khăn lớn trong việc giữ nhân viên do bất đồng lao động. nhiều dự án khác trong công ty của bạn cũng sử dụng các dịch vụ của công ty. Bạn nên làm gì? ",
  },
  {
    answers: [
      {
        title: "Duy trì sự bí mật của thông tin bảo mật của khách hàng ",
        idx: 0,
        isKey: false,
      },
      {
        title: "Xác định tính hợp pháp của các thủ tục công ty ",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Chắc chắn rằng một xung đột về lợi ích không làm ảnh hưởng tới tính hợp pháp lợi ích của khách hàng ",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Cung cấp kết quả chính xác và trung thực trong ước tính chi phí",
        idx: 3,
      },
    ],
    idx: 917,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điều nào dưới đây KHÔNG phải là trách nhiệm của PM ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Phát hành(release) thông tin, nhưng xóa hết những liên quan tới danh tính của khách hàng ",
      },
      {
        isKey: false,
        title:
          "Chỉ cung cấp những thông tin quan trọng ( or cần thiết? – high-level) ",
        idx: 1,
      },
      {
        isKey: true,
        title:
          "Liên lạc với khách hàng của bạn và tìm kiếm sự cho phép để cung cấp các thông tin của họ ",
        idx: 2,
      },
      {
        title: "Cung cấp thông tin",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 918,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Để hoàn thành công việc trong dự án của bạn, bạn đã được cung cấp các thông tin bí mật từ tất cả khách hàng của bạn. một trường đại học liên lạc với bạn để nhờ giúp đỡ trong nghiên cứu của họ. sự giúp đỡ như vậy sẽ đòi hỏi bạn cung cấp cho công ty 1 vài dữ liệu khách hàng từ file của bạn. bạn nên làm gì? ",
  },
  {
    answers: [
      {
        title:
          "Cung cấp sản phẩm như nó vốn thế( provide the deliverable as it is) ",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Thông báo với khách hàng về tình hình và tìm ra giải pháp chung có thể chấp nhận được ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Bắt đầu biên tập 1 danh sách các nguyên nhân chậm trễ do khách hàng để chuẩn bị cho thương lượng ",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Cắt giảm các hoạt động khác theo cách mà sẽ không bị chú { để cung cấp nhiều thời gian hơn để sửa sản phẩm bàn giao",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Ban lãnh đạo đã hứa với bạn 1 phần phí ưu đãi từ khách hàng nếu bạn hoàn thành dự án sớm hạn. trong khi hoàn thành 1 sản phẩm bàn giao quan trọng, đội của bạn thông báo rằng sản phẩm đã đáp ứng các yêu cầu trong hợp đồng nhưng không cung cấp chức năng mà khách hàng cần. nếu sản phẩm bàn giao muộn, dự án không thể hoàn thành sớm hạn. bạn nên làm gì / ",
    idx: 919,
  },
  {
    idx: 920,
    title:
      "Bạn vừa phát hiện ra 1 lỗi trong kế hoạch cài đặt mà sẽ ngăn cản 1 cuộc họp quan trọng(milestone date). điều tốt nhất bạn nên làm là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Phát triển các tùy chọn để có được ngày quan trọng ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Thay đổi ngày quan trọng ",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Xóa 1 vài thảo luận về thời gian theo báo cáo trang thái dự án ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Huấn luyện đội về sự cần thiết để có được ngày quan trọng",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 921,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong khi kiểm tra độ bền của bêtông được đổ trong dự án của bạn, bạn phát hiện ra hơn 35% bê tông không đáp ứng được tiêu chuẩn chất lượng của công ty bạn. bạn cảm thấy chắc chắn rằng bê tông sẽ hoạt động tốt, và bạn k nghĩ rằng bê tông cần đáp ứng các tiêu chuẩn chất lượng. bạn nên làm gì? ",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Thay đổi tiêu chuẩn chất lượng phù hợp với mức độ có thể có       ",
      },
      {
        idx: 1,
        title:
          " B. Liệt kê trong báo cáo rằng bê tông đơn giản là”đáp ứng yêu cầu của chúng tôi” ",
        isKey: false,
      },
      {
        title: "Chắc chắn rằng số bê tông còn lại sẽ đạt tiêu chuẩn ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Báo cáo về chất lượng kém và cố gắng tìm 1 giải pháp",
      },
    ],
  },
  {
    title:
      "Bạn là PM cho 1 dự án đa quốc gia mới và đội dự án của bạn bao gồm nhân viên đến từ 4 quốc gia. Phần lớn nhân viên chưa bao h làm việc trong 1 dự án kiểu như thế này, nhưng dự án có sự hỗ trợ lớn từ ban lãnh đạo cấp cao. Điều tốt nhất để chắc chắn rằng sự khác biệt văn hóa không ảnh hưởng tới dự án là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Dành thêm 1 khoảng thời gian để tạo WBS và chắc chắn nó hoàn thành ",
        isKey: false,
      },
      {
        title:
          "Là một PM, chắc chắn bạn chọn từ ngữ cẩn thận khi bạn giao tiếp ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Yêu cầu 1 người trong mỗi buổi họp mô tả những điều đặc biệt về văn hóa của họ ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Mã hóa cẩn thận tất cả các giao tiếp của PM",
      },
    ],
    idx: 922,
  },
  {
    title:
      "Một dự án có ngân sách eo hẹp khi bạn bắt đầu thương lượng với 1 người bán về thiết bị. người bán nói với bạn rằng giá của thiết bị này là cố định. Ng quản lý của bạn nói với bạn thương lượng giá cả với người bán. Hành động nào là tốt nhất/ ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 923,
    answers: [
      {
        isKey: true,
        title: "Thực hiện nỗ lực cam kết tốt để tìm cách giảm giá ",
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Hoãn thương lượng cho tới khi bạn thuyết phục được ng quản lý của bạn thay đổi quyết định ",
        isKey: false,
      },
      {
        title: "Vẫn thương lượng, nhưng chỉ về những khía cạnh khác của dự án ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Hủy thương lượng",
      },
    ],
  },
  {
    title:
      "Bạn đang làm việc trong 1 dự án xây dựng lớn đang thực hiện trong đường giới hạn. các nguồn lực được sử dụng từ từ(remain steady), thủ trưởng của bạn vừa thưởng bạn vì nỗ lực của bạn. một thành viên đội dự án trở về từ 1 cuộc họp với khách hàng và nói với bạn rằng khách hàng không hài lòng với việc thực hiện dự án. Điều đầu tiên bạn nên làm là: ",

    idx: 924,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Nói với ng quản lý của bạn ",
      },
      {
        idx: 1,
        title:
          "Hoàn thành các bài tập xây dựng đội dự án và mời đại diện khách hàng tham dự ",
        isKey: false,
      },
      {
        title: "Thay đổi đường lịch trình cơ bản ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Gặp khách hàng để tìm ra chi tiết (uncover detail)",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 925,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đưa ra sản phẩm và lấy sự chấp nhận chính thức từ khách hàng ",
      },
      {
        isKey: false,
        title:
          "Ghi lại vấn đề trong các bài học thu được để các dự án trong tương lai sẽ không mắc phải vấn đề đó nữa ",
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Thảo luận vấn đề với khách hàng ",
      },
      {
        isKey: false,
        title: "Thông báo với khách hàng sản phẩm sẽ bị chậm trễ",
        idx: 3,
      },
    ],
    title:
      "Một PM phát hiện một khuyết điểm trong sản phẩm mà phải bàn giao cho khách hàng hôm nay. PM biết khách hàng k có hiểu biết kĩ thuật để chú ý tới khuyết điểm này. Sản phẩm đáp ứng các yêu cầu của hợp đồng, nhưng không đáp  ứng tiêu chuẩn chất lượng của PM. PM nên làm gì trong tình huống này? ",
  },
  {
    title:
      "Ban lãnh đạo nói với 1 PM để thầu lại một phần của dự án cho 1 công ty mà ban lãnh đạo đã làm việc nhiều lần. trong tình huống này, PM nên bận tâm lớn nhất về: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 926,

    answers: [
      {
        idx: 0,
        title: "Chắc chắn công ty có đủ khả năng để hoàn thành dự án ",
        isKey: true,
      },
      {
        title: "Đáp ứng yêu cầu thời gian của ban lãnh đạo ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Chi phí của công việc thầu lại ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Các điều khoản và điều kiện hợp đồng",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Thay đổi lịch trình các công việc để thực hiện thời gian muộn hơn so với lịch trình cũ để khách hàng có thêm nguồn vốn ",
      },
      {
        title: "Bắt đầu kết thúc các hoạt động quản trị ",
        idx: 1,
        isKey: true,
      },
      {
        title: "Dừng công việc ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Cắt giảm nhân sự 1 phần đội dự án(release part of the team)",
      },
    ],
    title:
      "Khách hàng trong một dự án nói với PM rằng anh ta đã hết tiền chi trả cho dự án. PM nên làm gì đầu tiên? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 927,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Ban kiểm soát thay đổi ",
      },
      {
        title: "Ban ký hợp đồng/pháp lý ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "PM ",
      },
      {
        title: "Lãnh đạo cấp cao",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Bạn là PM cho 1 dự án lớn trong hợp đồng với chính phủ. Hợp đồng 2 năm, nhiều triệu $ đã được k{ 6 tháng trước. bạn không được kéo theo trong thương lượng hợp đồng hay thiết lập các thủ tục cho việc quản l{ các thay đổi, nhưng bạn đang tràn ngập với các thay đổi từ khách hàng và từ những người trong tổ chức của bạn. thông thường, ai sẽ có trách nhiệm cho việc xem xét chính thức các thay đổi lớn đối với dự án/hợp đồng? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 928,
  },
  {
    idx: 929,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Phòng kĩ thuật muốn mục tiêu dự án cải thiện 10%. Phòng IT muốn nguồn lực của phòng k bị sử dụng nhiều hơn 5% vào dự án. Ban lãnh đạo, cũng là thủ trưởng của bạn, muốn đội dự án giảm thuế pháp l{ (tax liability). Điều tốt nhất bạn nên làm là: ",

    answers: [
      {
        isKey: false,
        title: "Xây dựng 1 kế hoạch đáp ứng tất cả các mục tiêu trên ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Mọi người cùng bàn bạc và đồng ý 1 mục tiêu ",
        isKey: false,
      },
      {
        title:
          "Tính đến mục tiêu của phòng kỹ thuật và phòng IT nhưng đáp ứng ít đối với mục tiêu của ban lãnh đạo(holding a further meeting) ",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Chỉ tính đến mục tiêu của ban lãnh đạo.",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "Cải thiện quyền quản lý và kiểm soát nguồn lực của PM ",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Có hơn một người tham gia quản lý dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Truyền thông dễ dàng hơn",
      },
      {
        title: "Báo cáo dễ dàng hơn.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "4 giám đốc dự án(PM) ngồi ăn trưa với nhau và thảo luận về dự án của họ. phần lớn thời gian họ phàn nàn về việc quản l{ và điều hành dự án khó khăn như thế nào. Một số lời phàn nàn là về các cổ đông và các thay đổi mà họ tạo ra cho dự án. Người khác thì phàn nàn về sự khó khăn trong việc thúc đẩy nhân viên hợp tác và làm việc. 1 người PM muốn tập trung vào tất cả các lợi ích của ma trận tổ chức mà họ đều làm ra. Anh ta sẽ đề cập tới vấn đề nào?",
    idx: 930,
  },
  {
    title:
      "2 PM vừa nhận ra họ đang ở trong một ma trận tổ chức yếu và quyền lực của họ trong vai trò là PM bị hạn chế. Một người nhận ra anh ta thật sự là người giải quyết công việc dự án (project expediter), người còn lại nhận ra rằng anh ta là điều phối viên của dự án (project coordinator). Vậy người tiến hành và điều phối viên của dự án khác nhau ntn?",
    idx: 931,

    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Người giải quyết công việc dự án không thể đưa ra các quyết định",
      },
      {
        isKey: false,
        title:
          "Người giải quyết công việc dự án có thể đưa ra nhiều quyết định hơn điều phối viên dự án",
        idx: 1,
      },
      {
        title: "Người giải quyết công việc báo cáo cho quản lý cấp cao hơn",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Người giải quyết công việc có một số thẩm quyền riêng",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Báo cáo cho một vài thủ trưởng",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Không có sự trung thành đối với dự án",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Báo cáo với người quản lý có trách nhiệm và thẩm quyền (functional manager)",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Thường xuyên có mặt trong dự án, không có phòng ban chức năng(will not always have a home)",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 932,
    title:
      "Trong một tổ chức hướng dự án (tổ chức trong đó k có các công việc thường nhật mà toàn là dự án), đội dự án có đặc điểm gì:",
  },
  {
    title:
      "Một PM đang cố gắng hoàn thành dự án phát triển phần mềm, nhưng không thể tập trung và quan tâm nhiều tới dự án. Nguồn nhân lực được tập trng vào hoàn thành các công việc liên quan tới các tiến trình sản xuất phần mềm, và PM có ít thẩm quyền để phân công nguồn lực một cách hợp lý. Loại hình tổ chức nào mà người PM này đang làm việc?",
    idx: 933,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Tổ chức bao gồm các phòng ban chức năng.",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Ma trận. đối với tổ chức loại này, thành viên đội dự án phải báo cáo với 2 thủ trưởng: 1 là PM và quản lý bộ phận chức năng.",
      },
      {
        isKey: false,
        title: "Tổ chức mà PM là người giải quyết công việc",
        idx: 2,
      },
      {
        title: "Tổ chức mà PM là người điều hành",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Một PM có ít kinh nghiệm quản lý dự án. Nhưng anh ta được phân công làm PM cho một dự án mới. do anh ta sẽ làm việc trong một tổ chức ma trận (matrix organization) để hoàn thành dự án của mình, anh ta có thể trông đợi việc truyền thông trong dự án của mình có đặc điểm:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Đơn giản",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Truyền thông mở và thúc đẩy",
        idx: 1,
      },
      {
        title: "Phức tạp",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Khó tự động hóa",
      },
    ],
    idx: 934,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "2 nhân viên trong đội dự án đang nói chuyện với nhau và phàn nàn về việc rất nhiều người đang yêu cầu nhân viên đó phải làm một số việc. nếu anh ta làm việc trong một tổ chức bao gồm các phòng ban chức năng (functional organization), ai sẽ có quyền để đưa ra chỉ dẫn cho các thành viên dự án?",
    answers: [
      {
        title: "Người quản lý dự án PM",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Người quản lý bộ phận chức năng functional manager",
      },
      {
        isKey: false,
        idx: 2,
        title: "Đội dự án",
      },
      {
        isKey: false,
        title: "Ma trận kiểm soát chặt tight matrix",
        idx: 3,
      },
    ],
    idx: 935,
  },
  {
    title:
      "Ai có nhiều thẩm quyền nhất trong một tổ chức hướng dự án (projectized organization)",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Người quản lý dự án PM",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Người quản lý bộ phận chức năng functional manager",
      },
      {
        idx: 2,
        isKey: false,
        title: "Đội dự án",
      },
      {
        title: "Đội dự án đều có quyền như nhau",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 936,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 937,
    title: "Tính chất nào dưới đây không phải là tính chất của một dự án",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tạm thời",
      },
      {
        idx: 1,
        title: "Có thời gian bắt đầu và kết thúc xác định",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Có các hoạt động liên quan tới nhau",
      },
      {
        title: "Lặp lại công việc dự án mỗi tháng. (repeat itself every month)",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    title: "Các bên liên quan quản lý dự án ngoại trừ việc:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Đưa cho các bên liên quan một ít $ (giving stakeholders extras)",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Xác định các bên liên quan ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Xác định yêu cầu của các bên liên quan ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Quản l{ các mong đợi của các bên liên quan",
      },
    ],
    idx: 938,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một người quản l{ và giám đốc kĩ thuật thảo luận về một thay đổi trong gói công việc chính. Sau khi thảo luận, người quản lý liên lạc với bạn và yêu cầu bạn hoàn thành các thủ tục giấy tờ để thực hiện việc thay đổi đó. Đây là ví dụ về:",
    answers: [
      {
        title: "Sự chú ý việc quản lý vào quản lý phạm vi",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Lập kế hoạch quản lý ",
      },
      {
        idx: 2,
        isKey: true,
        title: "Trách nhiệm của người giải quyết công việc dự án ",
      },
      {
        isKey: false,
        title: "Một sự thay đổi hệ thống điều khiển.",
        idx: 3,
      },
    ],
    idx: 939,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Đưa ra lời khuyên cho các bên có liên quan rằng PM sẽ giữ lại các điều khoản này trong truyền thông trong dự án.",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Cung cấp một danh sách các điều khoản mới và định nghĩa của nó ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Thông báo cho phòng quản lý dự án ",
      },
      {
        title:
          "Chắc chắn rằng PM sẽ duy trì thẩm quyền của mình như một người quản lý dự án, mặc dù PM và các bên có liên quan là bạn.",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      "Dự án đang trong quá trình lập kế hoạch nhóm. 3 bên có liên quan yêu cầu  giám đốc dự án cung cấp một số thông tin về phương pháp quản lý dự án mới của công ty, phương pháp này lấy từ đâu và tại sao nó lại khác biệt với cách họ quản lý các dự án. 3 bên có liên quan đều là bạn của người quản lý dự án, toàn bộ nhóm dự án đều đã làm việc với nhau trong nhiều năm. Dự án sử dụng một vài điều khoản mới như “hành động hiệu chỉnh” (corective action), điều này làm cho một số bên có liên quan lo lắng, họ không chắc chắn nếu cách thức quản lý dự án sẽ thay đổi cùng với các điều khoản mới. người quản lý dự án nên làm gì? ",
    idx: 940,
  },
  {
    idx: 941,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang quản lý dự án thứ 2 của mình. Dự án đã bắt đầu được 1 tháng sau khi dự án thứ nhất bắt đầu. dự án đầu tiên của PM này là một dự án nhỏ, tuy nhiên đang mở rộng từng ngày. Mỗi ngày trôi qua, người PM này bắt đầu cảm thấy cần sự giúp đỡ. Gần đây, anh ta đã nghe có tin rằng năm ngoái cũng có một dự án gần giống với dự án thứ 2 của anh ta. Anh ta nên làm gì? ",
    answers: [
      {
        idx: 0,
        title: "Liên lạc với người PM của dự án kia và yêu cầu hỗ trợ",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Sử dụng bản ghi và hướng dẫn từ phòng quản lý dự án ",
      },
      {
        title:
          "Chờ đợi xem nếu dự án bị ảnh hưởng bởi sự mở rộng phạm vi dự án ",
        idx: 2,
        isKey: false,
      },
      {
        title:
          "Chắc chắn rằng phạm vi dự án phải được các bên có liên quan đồng ý và phê duyệt",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Dự án đang tiến hành tốt, ngoại trừ số lượng các thay đổi đã được tạo ra. Dự án được thực hiện và chia ra 7 ban khác nhau trong công ty và sẽ cải thiện đáng kể hiệu năng của các phòng ban này khi nó được thực hiện. có 14 quy trình quản lý dự án được lựa chọn để sử dụng trong dự án này. PM là một chuyên gia kĩ thuật và được training về truyền thông và quản lý nhân lực. điều nào dưới đây là nguyên nhân của vấn đề của dự án (số lượng các thay đổi)? ",
    answers: [
      {
        title: "PM không được huấn luyện để hiểu rõ môi trường công ty",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Dự án nên được giám sát quản lý nhiều hơn để có kết quả tốt và đem lại lợi nhuận cho công ty ",
      },
      {
        title: "Dự án nên sử dụng thêm nhiều tiến trình quản lý dự án hơn ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Một vài bên liên quan chưa được xác định",
      },
    ],
    idx: 942,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 943,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Vòng đời dự án và vòng đời sản phẩm khác nhau. Trong vòng đời dự án có đặc điểm gì khác khi so sánh với vòng đời sản phẩm? ",
    answers: [
      {
        title: "Không kết hợp phương pháp luận",
        isKey: false,
        idx: 0,
      },
      {
        title: "Là khác biệt trong từng ngành sản xuất khác nhau ",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Có thể sinh ra nhiều dự án khác nhau ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Miêu tả các hành động quản lý dự án",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 944,

    answers: [
      {
        title: "Khởi tạo, lên kế hoạch, thực thi, kiểm soát và kết thúc dự án",
        idx: 0,
        isKey: true,
      },
      {
        title: "Khởi tạo và lên kế hoạch ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Lên kế hoạch và kiểm soát ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Kiểm soát và kết thúc",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Các bên có liên quan có thể được xác định trong quy trình nào của việc quản lý dự án ? ",
  },
  {
    idx: 945,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong quản lý dự án, ta chỉ quản lý bởi mục tiêu làm việc khi nào? ",
    answers: [
      {
        isKey: true,
        title: "Được hỗ trợ quản lý (it’s supported by management)",
        idx: 0,
      },
      {
        isKey: false,
        title: "Các luật được viết ra ",
        idx: 1,
      },
      {
        title: "Dự án không ảnh hưởng tới mục tiêu chung ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Dự án bao gồm mục tiêu dự án trong tôn chỉ dự án",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Người quản lý của bạn quyết định rằng tất cả các đơn hàng(orders) đều được coi như trong dự án (treated as ‘project’) và người PM sẽ cập nhật các đơn hàng này hàng ngày, giải quyết các vấn đề và chắc chắn rằng khách hàng chính thức chấp nhận sản phẩm trong vòng 30 ngày. Doanh thu từ 1 đơn hàng riêng lẻ có thể dao động từ 100$ tới 150000$. PM không yêu cần phải lập kế hoạch và chỉ cần cung cấp trạng thái đơn hàng hàng ngày. Bạn xác định tình huống này như thế nào? ",
    idx: 946,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Do mỗi đơn hàng là một sự cố gắng tạm thời nên mỗi đơn hàng đều là một dự án",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Đây là việc quản l{ chương trình cho đến khi có nhiều dự án kéo theo ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Đây là công việc định kz(recurring process) ",
      },
      {
        title:
          "Doanh thu của các đơn hàng trên 100000$ sẽ được coi như một dự án và sẽ kéo theo các hoạt động quản lý dự án",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Trong giai đoạn (quy trình - process) nào của vòng đời dự án mà tài liệu ngân sách chi tiết được viết ra? ",
    idx: 947,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Khởi tạo",
      },
      {
        isKey: false,
        idx: 1,
        title: "Trước quy trình quản lý dự án ",
      },
      {
        isKey: true,
        title: "Lập kế hoạch ",
        idx: 2,
      },
      {
        title: "Thực thi",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 948,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thực thi",
      },
      {
        idx: 1,
        title: "Lập kế hoạch ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Kết thúc ",
      },
      {
        isKey: true,
        title: "Khởi tạo",
        idx: 3,
      },
    ],
    title:
      "Tôn chỉ dự án được viết ra trong giai đoạn nào của vòng đời dự án? ",
  },
  {
    title:
      "Đội dự án vừa hoàn thành lịch khởi tạo dự án (initial project schedule) và ngân sách dự án. Việc phải làm tiếp theo là: ",

    idx: 949,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Bắt đầu xác định rủi ro",
        isKey: false,
        idx: 0,
      },
      {
        title: "Bắt đầu lặp lại hành động ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Xác định các yêu cầu truyền thông ",
        isKey: true,
      },
      {
        isKey: false,
        title: "Làm sơ đồ Gantt",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Lịch làm việc chi tiết của dự án có thể được tạo ra sau khi đã có: ",
    answers: [
      {
        title: "Ngân sách dự án",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Bảng phân rã công việc WBS ",
      },
      {
        title: "Kế hoạch quản lý dự án ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Bảng đánh giá rủi ro chi tiết",
        isKey: false,
      },
    ],
    idx: 950,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Người nên được kiểm soát dự án trong quá trình lập kế hoạch dự án là: ",
    answers: [
      {
        title: "Người quản lý dự án PM",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Nhân viên dự án ",
        isKey: false,
      },
      {
        title: "Giám đốc bộ phận chức năng ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Nhà tài trợ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 951,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 952,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong giai đoạn khởi tạo dự án, văn bản nào dưới đây KHÔNG cần thiết: ",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các quy trình của công ty",
      },
      {
        title: "Văn hóa của công ty ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Các bảng phân rã công việc đã có trước đó WBS ",
      },
      {
        idx: 3,
        title: "Tuyên bố phạm vi dự án",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title: "Bắt đầu hoàn thành gói công việc",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hoàn thành phê chuẩn phạm vi dự án ",
      },
      {
        isKey: false,
        title: "Bắt đầu kết hợp điều khiển thay đổi ",
        idx: 2,
      },
      {
        title: "Bắt đầu tạo ra các kế hoạch quản lý",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Nhà tài trợ dự án vừa cung cấp bản tuyên bố phạm vi dự án sơ bộ. việc phải làm tiếp theo là: ",
    idx: 953,
  },
  {
    answers: [
      {
        title: "Khởi tạo",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Lập kế hoạch ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Thực thi ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Kiểm soát",
        isKey: false,
      },
    ],
    idx: 954,
    title:
      "Các ràng buộc về lịch trình dự án mức cao được xác định trong giai đoạn nào? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "Hiểu rõ kinh nghiệm của nhà tài trợ trong các dự án trước",
        idx: 0,
      },
      {
        isKey: true,
        title: "Tạo ra danh sách hoạt động (activity list) ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Chắc chắn rằng phạm vi dự án đã được xác định ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Hoàn thành quản lý rủi ro và ma trận trách nhiệm",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bảng phân rã công việc WBS và từ điển WBS đều được hoàn thành. Đội dự án bắt đầu xác định các rủi ro. Nhà tài trợ liên lạc với PM để yêu cầu làm ma trận trách nhiệm. dự án có ngân sách là 100000$ với 14 nhân lực đến từ 3 quốc gia. Dự án có một rủi ro nhỏ và PM đã quản lý rất nhiều dự án giống dự án này. Việc phải làm tiếp theo là: ",
    idx: 955,
  },
  {
    title:
      "Một PM không có nhiều thời gian để lên kế hoạch trước khi ngày bắt buộc khởi động dự án đang tới. Do đó anh ta muốn lập kế hoạch hiệu quả nhất có thể. Anh ta nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 956,
    answers: [
      {
        title:
          "Chắc chắn nên có tuyên bố phạm vi dự án sơ bộ đã hoàn thành và sau đó tiến hành làm WBS",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Tạo danh sách hoạt động trước khi tạo ra sơ đồ mạng ",
      },
      {
        title:
          "Có tài liệu về các rủi ro đã biết trước khi làm các giả thuyết và ước tính sâu hơn ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Hoàn thiện kế hoạch quản lý chất lượng trước khi quyết định đơn vị đo chất lượng",
        idx: 3,
      },
    ],
  },
  {
    title:
      "PM chắc chắn rằng sản phẩm của dự án phải hoàn thiện theo kế hoạch quản lý dự án. Anh ta đang ở giai đoạn nào của dự án? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Lên kế hoạch",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Thực thu ",
      },
      {
        title: "Kiểm soát ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Kết thúc",
        idx: 3,
      },
    ],

    idx: 957,
  },
  {
    answers: [
      {
        title: "Khởi tạo",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Thực thi ",
        idx: 1,
      },
      {
        isKey: true,
        title: "Kiểm soát ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Kết thúc",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một PM nhận được cuộc gọi từ nhân viên dự án, thông báo rằng đã có sự khác nhau giữa tốc độ của một hệ thống trong dự án và tốc độ đề ra. PM ngạc nhiên bởi vì quản lý hiệu năng không được xác định trong giai đoạn lập kế hoạch. Nếu PM sau đó có thể ước tính được khi nào sẽ có phản hồi của sự khác nhau này, thì anh ta đang ở giai đoạn nào của quản lý dự án? ",
    idx: 958,
  },
  {
    title:
      "Một nhân viên dự án thông báo cho PM rằng hoạt động bao gồm một gói công việc hiện nay không còn thích hợp nữa. điều này là tốt nhất cho PM khi anh ta đang ở trong một phần nào của giai đoạn phát triển dự án? ",
    idx: 959,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Hành động hiệu chỉnh",
        isKey: false,
      },
      {
        idx: 1,
        title: "Kết hợp điều khiển thay đổi ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Kiểm soát ",
        isKey: true,
      },
      {
        isKey: false,
        title: "Kết thúc dự án",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Trong buổi họp đội dự án, một nhân viên dự án hỏi về đơn vị đo đạc nào được sử dụng trong dự án để kiểm soát hiệu năng. nhân viên này cảm thấy một vài thước đo có liên quan tới công việc của anh ta đang không chính xác. Dự án được xem xét tốt nhất trong phần nào của giai đoạn phát triển dự án? ",
    answers: [
      {
        title: "Kết thúc",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Kiểm soát ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Thực thi ",
      },
      {
        title: "Khởi tạo",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 960,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "PM không có đủ nguồn lực cho dự án",
        idx: 0,
      },
      {
        title:
          "PM không tạo ra hệ thống tưởng thưởng xứng đáng cho nhân viên để nâng cao tinh thần hợp tác của họ ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "PM nên có buổi họp với thủ trưởng của đội dự án khi lần đầu tiên nhân viên dự án có vấn đề ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "PM không có gói công việc",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 961,
    title:
      "Trong khi hoàn thành gói công việc, nhà tài trợ yêu cầu PM báo cáo dự án đang được diễn tiến ntn. Trong quá trình chuẩn bị báo cáo, PM yêu cầu tất cả nhân viên dự án họ đã làm được bao nhiêu % công việc của mình. Có một nhân viên rất khó khăn trong việc quản lý từ đầu. khi trả lời câu hỏi của PM, anh ta nói rằng chưa hoàn thành gì cả. Mệt mỏi vì được trả lời như vậy, PM báo cáo với thủ trưởng của đội dự án là các nhân viên không có tinh thần hợp tác. Vấn đề thật sự ở đây là gì? ",
  },
  {
    title:
      "Sự kết hợp hiệu quả (effective project integration) thường yêu cầu phải nhấn mạnh vào: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Sự nghiệp cá nhân của mỗi thành viên dự án",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Cập nhật liên tục kế hoạch quản lý dự án ",
        isKey: false,
      },
      {
        title: "Truyền thông hiệu quả được xem như công cụ giao tiếp chính ",
        isKey: true,
        idx: 2,
      },
      {
        title: "Kiểm soát sản phẩm",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 962,
  },
  {
    title:
      "Sự cần thiết của……… là một trong những hiệu quả mạnh mẽ chính cho việc truyền thông trong dự án: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Tối ưu hóa",
        idx: 0,
        isKey: false,
      },
      {
        title: "Toàn vẹn ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Tích hợp, kết hợp ",
      },
      {
        title: "Sự khác biệt",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 963,
  },
  {
    title:
      "Mô tả nào dưới đây là chính xác nhất về việc sử dụng các thông tin lịch sử từ các dự án đã có: ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Ước lượng, vòng đời chi phí (life cycle costing) và lên kế hoạch dự án",
      },
      {
        isKey: false,
        idx: 1,
        title: "Quản lý rủi ro, ước lượng và rút ra bài học ",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Lên kế hoạch quản lý dự án, ước lượng và lập báo cáo trạng thái ",
      },
      {
        title: "Ước lượng, quản lý rủi ro và lên kế hoạch dự án",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 964,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Tạo thay đổi",
        isKey: false,
      },
      {
        title: "Theo dõi và ghi lại các thay đổi ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thông báo với nhà tài trợ về các thay đổi ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Ngăn chặn các thay đổi không cần thiết",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Khi có sự thay đổi, PM tốt nhất nên hướng sự tập trung của mình vào: ",
    idx: 965,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Giúp đỡ cho công việc lên kế hoạch",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Giúp đỡ ngăn chặn các thay đổi không cần thiết đối với mục tiêu dự án ",
      },
      {
        isKey: false,
        title: "Xác định các ràng buộc không cần thiết trong dự án ",
        idx: 2,
      },
      {
        title: "Giúp kế hoạch quản lý dự án thực hiện tốt",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 966,

    title: "Vai trò của nhà tài trợ trong dự án là: ",
  },
  {
    title:
      "Điều nào KHÔNG phải là một thành phần của hệ thống kiểm soát thay đổi hiệu quả? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 967,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các thủ tục",
      },
      {
        isKey: false,
        idx: 1,
        title: "Các tiêu chuẩn cho báo cáo ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Các buổi họp ",
      },
      {
        idx: 3,
        isKey: true,
        title: "Các bài học rút ra",
      },
    ],
  },
  {
    idx: 968,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: ". Quản lý mỗi công việc sẽ được ai làm",
      },
      {
        isKey: true,
        idx: 1,
        title: "Quản lý thời gian làm việc và chuỗi công việc nào được làm ",
      },
      {
        title: "Quản lý mỗi công việc sẽ được làm xong tại thời điểm nào ",
        isKey: false,
        idx: 2,
      },
      {
        title:
          " Quản lý ai mỗi công việc sẽ được ai làm và bao giờ hoàn thành công việc và khi nào làm công việc đó để công việc và nhân viên có thể tương tác với công việc và nhân viên khác",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Một hệ thống cấp phép được dùng để làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 969,
    answers: [
      {
        title: "Người quản lý dự án PM",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Đội dự án ",
      },
      {
        isKey: true,
        idx: 2,
        title: "Nhà tài trợ ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Các bên có liên quan",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án bị yêu cầu thay đổi trong tôn chỉ dự án. Ai có trách nhiệm chính để quyết định nếu như các thay đổi này là cần thiết? ",
  },
  {
    title: "Ai thực hiện việc tích hợp dự án? ",

    idx: 970,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Người quản lý dự án PM",
      },
      {
        isKey: false,
        idx: 1,
        title: "Đội dự án ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Nhà tài trợ ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Các bên có liên quan",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 971,
    answers: [
      {
        title: "Giúp đội dự án quen với dự án",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Đặt tất cả các phần của dự án vào một chỉnh thể liên kết ",
      },
      {
        idx: 2,
        title: "Đặt tất cả các phần của dự án vào một chương trình ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Làm cho tất cả các thành viên dự án làm việc cùng nhau trong một chỉnh thể liên kết",
      },
    ],
    title:
      "Điều nào dưới đây mô tả đúng nhất vai trò của PM như một người kết hợp dự án (integrator) ",
  },
  {
    title:
      "Việc phê chuẩn các hành động hiệu chỉnh là đầu vào của (được thực hiện trước) ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Kiểm soát phạm vi và thẩm tra phạm vi (scope verification)",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Trực tiếp và thi hành quản lý dự án và kiểm soát tích hợp thay đổi ",
      },
      {
        title: "Phát triển kế hoạch dự án và phát triển tôn chỉ dự án ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Phát triển kế hoạch dự án và lên lịch cho việc phát triển",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 972,
  },
  {
    title:
      "Một bên có liên quan đặc biệt có tiếng trong việc tạo ra thay đổi trong dự án. Cách PM tiếp cận với bên có liên quan này tại thời điểm bắt đầu dự án nào là tốt nhất trong tình huống này? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Nói không với anh ta 1 vài lần để khuyên ngăn anh ta tạo ra nhiều thay đổi",
      },
      {
        idx: 1,
        isKey: true,
        title: "Kéo anh ta vào dự án càng sớm càng tốt ",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Nói chuyện với thủ trưởng của anh ta để tìm cách đưa anh ta sang 1 dự án khác ",
      },
      {
        title:
          "Nói với anh ta không nên tham gia vào các bên có liên quan của dự án này.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 973,
  },
  {
    idx: 974,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Trực giác và hiểu biết cá nhân",
      },
      {
        title: "Phân tích của các bên có liên quan ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Thông tin lịch sử từ các dự án đã có ",
        isKey: true,
      },
      {
        idx: 3,
        title: "Quản lý cấu hình",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là 1 PM mới chưa có kinh nghiệm gì. Bạn được yêu cầu lên kế hoạch cho một dự án mới. trong tình huống này, trong quá trình lập kế hoạch, tốt nhất bạn nên dựa vào gì để có cơ hội thành công? ",
  },
  {
    title: "Điều nào dưới đây mô tả đúng nhất về kế hoạch quản lý dự án? ",
    idx: 975,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Một bản in từ phần mềm quản lý dự án",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Một biểu đồ đoạn (a bar chart) ",
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Quản lý rủi ro, nhân viên, quy trình cải thiện và các kế hoạch quản lý khác ",
      },
      {
        isKey: false,
        title: "Phạm vi dự án",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 976,
    title:
      "You are taking over a project and determine the following: activity B has an early finish(EF) of day 3, a late finish(LF) of day 6, and an early start(ES) of day 2. Activity L is being done by a hard-to-get resource. The cost performance index (CPI) is 1.1 and the schedule performance index(SPI) is 0.8. based on this information what would you be more concerned about? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Float",
      },
      {
        isKey: false,
        title: "Resources ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Cost ",
        idx: 2,
      },
      {
        isKey: true,
        title: "Schedule",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Người PM trước của dự án của bạn đã quản lý dự án mà không có tổ chức dự án. Có sự thiếu hụt trong kiểm soát quản lý và không có sản phẩm chuyển giao nào được xác định rõ. Lựa chọn nào dưới đây là tốt nhất cho bạn để tổ chức dự án tốt hơn? ",
    answers: [
      {
        title: "Thông qua cách tiếp cận vòng đời dự án vào dự án của mình",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Xây dựng các bài học thu được qua mỗi giai đoạn phát triển dự án ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Xây dựng các kế hoạch công việc cụ thể cho từng gói công việc ",
      },
      {
        idx: 3,
        title: "Xây dựng bản mô tả sản phẩm của dự án",
        isKey: false,
      },
    ],
    idx: 977,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Ai sẽ là thành viên của ban kiểm soát thay đổi",
        isKey: false,
      },
      {
        isKey: true,
        title: "Dùng nhiều thời gian hơn để quản lý cấu hình ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Có một nhà tài trợ dự án riêng ",
      },
      {
        isKey: false,
        title: "Xác định cấu trúc báo cáo",
        idx: 3,
      },
    ],
    idx: 978,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Bạn đang kiểm soát dự án trong giai đoạn lên kế hoạch và phát hiện ra có 6 cá nhân đã k{ vào tôn chỉ dự án. Điều nào dưới đây có liên quan nhất với bạn? ",
  },
  {
    title:
      "Tôn chỉ dự án cho một dự án của được phê chuẩn để lê kế hoạch và bạn vừa được phân công là PM. Nhận ra rằng lên kế hoạch dự án là nỗ lực xuyên suốt dự án, việc nào sau đây bạn nên kết hợp nhất? ",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tạo bảng WBS và định nghĩa hành động",
      },
      {
        title: "Ước tính thời gian hành động và xây dựng lịch làm việc ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Lên kế hoạch nhân sự và ước tính chi phí ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Ước tính chi phí và tính toán ngân sách",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 979,
  },
  {
    idx: 980,
    title:
      "Tất cả các điều dưới đây đều là một phần của quản lý và thực thi quản lý dự án,  ngoại trừ: ",
    answers: [
      {
        idx: 0,
        title: "Xác định các thay đổi",
        isKey: false,
      },
      {
        title: "Sử dụng bảng WBS ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Thực hiện các hành động hiệu chỉnh ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Xây dựng một hệ thống kiểm soát dự án.",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một PM được trang bị để lãnh đạo một dự án kỹ thuật cao trong khu vực với những người ít thông thạo về lĩnh vực này. PM ủy quyền xây dựng lịch làm việc, ước tính chi phí, lựa chọn hành động và phân công hành động cho nhiều thành viên trong đội dự án, và chỉ làm việc như người xem xét và điều phối các hoạt động của dự án. Kết quả của cách tiếp cận này giống như: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title:
          "Một đội chức năng suốt toàn bộ dự án ở mức độ cao, là điển hình của sự sáng tạo và trách nhiệm",
        isKey: false,
      },
      {
        title:
          "Một đội hỗn loạn lúc ban đầu, nhưng sau đó sẽ trở nên gắn kết và làm việc hiệu quả ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Một đội không thực sự có hiệu quả, nhưng luôn làm việc cùng nhau do môi trường làm việc mà PM đem lại ",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Một đội có hiệu năng thấp, nhuệ khí thấp, dễ xung đột và tốc độ thay thế nhân viên cao",
        isKey: true,
      },
    ],
    idx: 981,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 982,
    title:
      "Bạn đang trong quá trình thực hiện các thay đổi quan trọng cho một sản phẩm đã có, khi bạn biết rằng nguồn lực đã hứa vào lúc khởi động dự án hiện tại đang không có thì điều tốt nhất bạn nên làm là gì? ",
    answers: [
      {
        idx: 0,
        title:
          ". Chỉ ra làm thế nào mà các nguồn lực đã được cam kết cho dự án của bạn lúc ban đầu",
        isKey: false,
      },
      {
        isKey: false,
        title: "Lập lại kế hoạch dự án mà không có các nguồn lực đó ",
        idx: 1,
      },
      {
        title:
          "Giải thích, trình bày ảnh hưởng nếu nguồn nhân lực đã cam kết không có. ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Phá dự án, k làm nữa",
      },
    ],
  },
  {
    idx: 983,
    title:
      "Bạn được phân công để quản lý việc phát triển của website đầu tiên của một tổ chức. website này sẽ rất phức tạp và có tính tương tác cao, và đội dự án của bạn cũng như khách hàng chưa có kinh nghiệm gì trong việc phát triển website. Thời hạn bàn giao sản phẩm rất gấp gáp. Bất kz một sự chậm trễ nào sẽ tiêu tốn $ của công ty bạn cũng như khách hàng. Bạn có một nhà tài trợ dự án và có bản hợp đồng bàn giao, tôn chỉ dự án và kế hoạch quản lý dự án đều đã có chữ ký. Bên phía khách hàng đã giữ lại đầy đủ các thông báo của quá trình thực hiện dự án thông qua báo cáo trạng thái và biên bản họp. dự án đang trong đúng lịch trình, trong ngân sách và việc xem xét lại cuối cùng(chỉ mang tính hình thức) cũng đã được lên lịch. Đột nhiên, bạn nghe rằng toàn bộ nỗ lực có thể bị hủy bởi vì sản phẩm đang phát triển là hoàn toàn không được chấp nhận. điều gì là nguyên nhân của vấn đề này? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Một bên có liên quan không được liên quan thỏa đáng trong dự án(not adequately involved)",
      },
      {
        title:
          "Tôn chỉ dự án và kế hoạch dự án không được giải thích kỹ lưỡng hoặc không được xem xét lại một cách đầy đủ từ phía khách hàng ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title:
          "Hợp đồng truyền thông không đầy đủ và không cung cấp các thông tin yêu cầu cho các bên có liên quan ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Nhà tài trợ dự án không cung cấp đầy đủ cho dự án",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Thực hiện thay đổi càng sớm càng tốt",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Liên lạc với nhà tài trợ để được sự cho phép ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Liên lạc với ban kiểm soát thay đổi ",
        idx: 2,
      },
      {
        isKey: true,
        title: "Ước tính các thành phần khác trong tam giác ràng buộc.",
        idx: 3,
      },
    ],
    title:
      "PM nhận được 1 thay đổi từ khách hàng và thay đổi này không ảnh hưởng tới lịch hoạt động của dự án và dễ dàng để hoàn thành. PM nên làm gì đầu tiên? ",

    idx: 984,
  },
  {
    idx: 985,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Công ty của bạn vừa trúng thầu một dự án lớn. dự án sẽ bắt đầu trong vòng 3 tháng và có trị giá 2000000$. Bạn đang là PM của một dự án đã có. Điều đầu tiên bạn nên làm là gì sau khi nghe tin về dự án mới? ",
    answers: [
      {
        isKey: false,
        title:
          "Hỏi ban điều hành công ty về nguồn nhân lực mà dự án mới sẽ sử dụng",
        idx: 0,
      },
      {
        isKey: false,
        title: "Nâng mức nguồn lực cho dự án của bạn ",
        idx: 1,
      },
      {
        title: "Dừng, phá bỏ dự án của bạn(crash your project) ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title:
          "Hỏi ban điều hành công ty xem dự án mới có ảnh hưởng tới dự án của bạn hay không",
        idx: 3,
      },
    ],
  },
  {
    idx: 986,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Kiểm tra trạng thái rủi ro",
      },
      {
        title: "Kiểm tra chi phí hiệu năng ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Xác định chiến lược quản lý ",
      },
      {
        idx: 3,
        title: "Nói với đội dự án về mục tiêu của bạn",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là PM vừa được phân công để kiểm soát một dự án(người PM cũ của dự án này vừa rời khỏi công ty). Người PM cũ nói với bạn rằng dự án đang trong đúng lịch trình, nhưng chỉ khi anh ta thúc giục liên tục các nhân viên làm việc. điều đầu tiên bạn sẽ làm trong cương vị 1 PM mới là: ",
  },
  {
    answers: [
      {
        title: "Thảo luận vấn đề khách hàng đưa ra với đội dự án",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tính toán lại các ràng buộc (baseline) ",
      },
      {
        title: "Thương lượng lại hợp đồng ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Gặp khách hàng để trao đổi",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 987,
    title:
      "Bạn được phân công làm PM của một dự án đang được thực hiện. dự án vẫn đang thực hiện trong ranh giới các ràng buộc, tuy nhiên khách hàng k hài lòng với hiệu năng của dự án. Điều đầu tiên bạn nên làm là gì? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Báo cáo vi phạm với giám đốc chức năng",
      },
      {
        idx: 1,
        title: "Làm sáng tỏ l{ do đằng sau hành động của nhân viên đó ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Thêm hành động hiệu chỉnh này vào bản ghi (historical record) ",
        isKey: true,
      },
      {
        title: "Tìm xem ai đã gây ra vấn đề này(ai đã thực hiện hiệu chỉnh)",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 988,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM biết được rằng các hành động hiệu chỉnh vừa được 1 nhân viên dự án thực hiện, nhưng chưa được ghi lại. người PM này nên làm gì tiếp theo? ",
  },
  {
    title:
      "Yêu cầu của khách hàng thay đổi thông số của sản phẩm sẽ làm thời gian thực hiện dự án tăng thêm 2 tuần. người PM nên làm gì? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Dồn lịch thực hiện để hoàn thành đúng thời hạn (recover the 2 weeks)",
      },
      {
        isKey: false,
        title:
          "Cắt giảm phạm vi để hoàn thành đúng hạn, bù lại 2 tuần thêm vào ",
        idx: 1,
      },
      {
        title:
          "Tham khảo ý kiến nhà tài trợ trước khi có bất kz hành động nào ",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Hỏi ý kiến (or khuyên bảo - advise) khách hàng về ảnh hưởng của sự thay đổi",
        idx: 3,
      },
    ],
    idx: 989,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 990,
    title:
      "Trong quá trình thực thi dự án, PM xác định có một thay đổi về nguyên vật liệu cho dự án là cần thiết. PM triệu tập 1 cuộc họp để lên kế hoạch thực hiện thay đổi này. Đây là một ví dụ về: ",
    answers: [
      {
        isKey: false,
        title: "Quản lý bằng mục tiêu",
        idx: 0,
      },
      {
        isKey: true,
        title: "Sự thiếu hụt hệ thống kiểm soát thay đổi ",
        idx: 1,
      },
      {
        title: "Quan hệ giữa các thành viên dự án được đánh giá tốt ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Sự thiếu hụt một bảng WBS rõ ràng",
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
        title:
          "Hỏi nhân viên đó làm thế nào để xác định sự cần thiết của chức năng này",
      },
      {
        title:
          "Tổ chức họp để xem xét lại công việc đã hoàn thành của nhân viên này ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Tìm kiếm các chức năng thêm vào khác ",
        idx: 2,
      },
      {
        title:
          "Hỏi nhân viên đó làm thế nào anh ta biết được rằng không ảnh hưởng tới thời gian, chi phí hay chất lượng của dự án",
        idx: 3,
        isKey: true,
      },
    ],

    idx: 991,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án đang phát triển tốt khi tất cả các thay đổi bất ngờ từ các bên có liên quan. Sau khi các thay đổi đã được xác định, PM dành thời gian với tất cả các bên có liên quan để tìm ra tại sao lại có thay đổi và xem xét có thêm thay đổi nữa hay không. Công việc dự án tạm lắng xuống khi một nhân viên tình cờ đề cập với PM rằng anh ta đã thêm chức năng vào sản phẩm của dự án mà không làm ảnh hưởng tới thời gian, chi phí hay chất lượng của dự án. PM nên làm gì đầu tiên? ",
  },
  {
    idx: 992,
    answers: [
      {
        title: "Gặp các bên có liên quan",
        idx: 0,
        isKey: false,
      },
      {
        title: "Gặp đội dự án ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thương lượng lại về phần còn lại của hợp đồng ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Theo sau hệ thống kiểm soát thay đổi",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang quản lý một hợp đồng có giá sẵn (fixed price contract). Cô ấy nghĩ rằng một thay đổi lớn từ yêu cầu của khách hàng sẽ ảnh hưởng tới lịch trình dự án. Cô ấy nên làm gì đầu tiên? ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Thay đổi thành phần A từ thành phần B. thành phần A có chi phí cao hơn nhưng có vòng đời chi phí ít hơn B",
      },
      {
        idx: 1,
        title:
          "Thay đổi nguồn lực C thành nguồn lực B để hoàn thành hành động A. nguồn lực B có nhiều nhân viên có kinh nghiệm hơn ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Di chuyển hành động B và H để thực hiện cùng lúc, và chấp nhận tăng 30% rủi ro mà 5 nguồn lực cần thiết sẽ được thêm vào sau đó ",
      },
      {
        isKey: true,
        idx: 3,
        title: "Bỏ một kiểm tra từ kế hoạch quản lý dự án",
      },
    ],

    title:
      "Trong khi hoàn thành một dự án, một PM nhận ra rằng anh ta cần giảm bớt chi phí dự án. Sau khi nghiên cứu các lựa chọn của mình, anh ta thực hiện thay đổi dưới đây. Lựa chọn nào sẽ làm giảm chi phí dự án? ",
    idx: 993,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Liên hệ với phòng ban và phàn nàn về sự thiếu hụt thời hạn cuối cùng(deadline) cho đệ trình phạm vi(submission of scope)",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Tìm kiếm xem thay đổi về lịch trình này sẽ ảnh hưởng tới chi phí để hoàn thành gói dự án và chất lượng sản phẩm của gói dự án ",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Xem xét nếu có một cách để thay đổi từ môi trường ma trận từ một tổ chức chức năng để loại trừ tất cả các sự can thiệp từ các phòng ban khác ",
      },
      {
        title: "Hỏi phòng ban đó nếu họ có các thay đổi nào khác",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 994,
    title:
      "Dự án này được tuyên bố (chartered?) để xác định cách thức mới để mở rộng vòng đời sản phẩm của một sản phẩm của công ty bậc trung. Người PM tới từ một ban kỹ thuật và đội dự án là từ ban sản phẩm và ban tiếp thị. Tuyên bố phạm vi dự án sơ bộ và kế hoạch dự án đã hoàn thành khi một bên có liên quan thông báo với đội dự án là: có một cách tốt hơn để hoàn thành một gói công việc. họ cung cấp văn bản xem xét kỹ thuật từ ban của họ, văn bản này chứng minh cách thức mới để hoàn thành công việc sẽ thực sự nhanh hơn cách thức cũ. PM đã từng có kinh nghiệm tương tự với phòng ban này trong dự án khác, và hi vọng là sẽ xảy ra trong dự án này. PM nên làm gì đầu tiên? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Xác minh, thẩm tra sản phẩm",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Buổi họp khởi động dự án ",
      },
      {
        title: "Hoạt động quản lý chất lượng ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Việc tạo ra kế hoạch xác minh phạm vi",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 995,
    title:
      "Kết thúc hợp đồng và kết thúc quản lý giống nhau ở chỗ chúng đều có liên quan tới ",
  },
  {
    idx: 996,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Tài liệu lưu trữ của dự án",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "Tôn chỉ dự án ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Kế hoạch quản lý dự án ",
        isKey: false,
      },
      {
        title: "Kế hoạch phân tích rủi ro",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Đầu ra của kết thúc quản lý là sự tạo ra: ",
  },
  {
    title:
      "Tất cả các điều sau đều diễn ra trong khi kết thúc dự án, ngoại trừ: ",
    idx: 997,

    answers: [
      {
        title: "Các bài học thu được",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sự chấp nhận chính thức ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Giảm sử dụng nguồn lực ",
      },
      {
        idx: 3,
        isKey: true,
        title: "Phân tích lợi ích chi phí thực hiện",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 998,
    title: "Dự án không được hoàn thành trừ phi: ",

    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Phạm vi dự án được hoàn thành, kết thúc việc quản l{ được hoàn thành và các hóa đơn được thanh toán",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Có sự chấp nhận chính thức, và bất kz yêu cầu khác nào cho kết thúc dự án đã được ghi rõ trong hợp đồng đều được đáp ứng ",
      },
      {
        title: "Khách hàng hài lòng và hóa đơn cuối cùng được thanh toán ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Hoàn thiện các bài học rút ra.",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Tổ chức một buổi tiệc cho đội dự án",
      },
      {
        idx: 1,
        isKey: false,
        title: "Chắc chắn rằng dự án được tích hợp với các dự án khác ",
      },
      {
        isKey: false,
        title: "Bắt đầu tập trung vào dự án riêng của bạn ",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Phân tích xem dự án thành công hay thất bại.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 999,
    title:
      "Bạn đang làm việc trong một dự án phát triển phần mềm mới và sử dụng hơn 230 nhân lực. cuối cùng, tất cả phạm vi đã hoàn thành. Điều nên làm bây giờ là (it’s would be best to) ",
  },
  {
    idx: 1000,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Tôn chỉ dự án bao gồm điều nào sau đây? ",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Xác định các rủi ro",
      },
      {
        idx: 1,
        title: "Ước lượng các gói công việc ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Ước lượng chi tiết các nguồn lực ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Yêu cầu về kinh doanh cho dự án",
      },
    ],
  },
  {
    answers: [
      {
        title: "Tôn chỉ dự án mô tả chi tiết cần phải hoàn thành cái gì",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Tôn chỉ dự án liệt kê tên của toàn bộ đội dự án ",
      },
      {
        idx: 2,
        title: "Tôn chỉ dự án mang lại quyền lực cho PM ",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tôn chỉ dự án mô tả lịch sử dự án",
      },
    ],

    title:
      "Một PM đang cố gắng để thuyết phục ban lãnh đạo sử dụng quản lý dự án và quyết định bắt đầu cái thiện việc quản lý dự án của công ty bằng cách sử dụng tôn chỉ dự án. Điều nào dưới đây mô tả chính xác nhất tại sao tôn chỉ dự án có thể giúp PM này: ",
    idx: 1001,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Lập trình theo độ dài (linear programming) là một ví dụ của loại hình tiêu chuẩn lựa chọn dự án nào? ",
    idx: 1002,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Tối ưu hóa ràng buộc",
      },
      {
        idx: 1,
        title: "Cách tiếp cận cạnh tranh ",
        isKey: false,
      },
      {
        idx: 2,
        title: "Thông số đo đạc lợi ích ",
        isKey: false,
      },
      {
        title: "Phân tích ảnh hưởng",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1003,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Xây dựng quy trình kiểm soát thay đổi tích hợp",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Chỉ ra cho quản lý của bạn biết ảnh hưởng của việc thi hành mà không được phê duyệt ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Tập trung vào hoàn thành dự án đã được k{ trong tôn chỉ dự án ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Bắt đầu làm việc chỉ trong các chuỗi hành động then chốt",
      },
    ],
    title:
      "Bạn vừa làm xong tôn chỉ dự án nhưng chưa được phê duyệt. quản lý của bạn và thủ trưởng của anh ta yêu cầu dự án phải bắt đầu ngay lập tức. Điều nào dưới đây là tốt nhất để thực hiện? ",
  },
  {
    idx: 1004,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Phòng kỹ thuật vừa phát hiện ra một vấn đề với hệ thống tính toán chi phí và đã yêu cầu phòng hệ thống để phân tích điều gì sai và sửa chữa nó. Bạn là một PM đang làm việc với chương trình tính toán chi phí trong một dự án khác. Ban lãnh đạo đã xác định yêu cầu thay đổi đối với ban kiểm soát thay đổi là thêm vào dự án của bạn một công việc mới. dự án đã có của bạn có hiệu suất chi phí (CPI) là 1.2 và chỉ số thực hiện theo lịch (SPI) là 1.3 nên bạn cần thêm phòng để thêm công  việc mà không làm chậm trễ dự án của bạn hay làm tăng chi phí của dự án này. Sau một vài phân tích, bạn xác định rằng công việc mới và công việc đã có không ảnh hưởng lẫn nhau và có thể làm đồng thời. 2 công việc yêu cầu các kỹ năng khác nhau. Điều tốt nhất nên làm là: ",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Tạo ra mục tiêu dự án và phát triển tuyên bố phạm vi dự án sơ bộ",
      },
      {
        isKey: false,
        title:
          "Ước tính lại lịch trình dự án với đầu vào(input) từ phòng kỹ thuật ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Thực hiện xác minh phạm vi đối với công việc mới với sự giúp đỡ của các bên có liên quan ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Xác định các thay đổi cụ thể đối với công việc đã có",
      },
    ],
  },
  {
    idx: 1005,
    title:
      "Toàn bộ các công việc kỹ thuật trong dự án đã hoàn thành. Điều nào phải hoàn thành tiếp? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Xác minh phạm vi",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Kế hoạch phản ứng rủi ro ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Kế hoạch quản lý nhân viên ",
      },
      {
        idx: 3,
        title: "Các bài học rút ra",
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Ước tính chi phí một cách có hệ thống về các thành phần của WBS",
      },
      {
        title: "Cung cấp sự chứng minh dự án (project justification) ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Xác định mức độ cho mỗi thành phần ",
        isKey: true,
      },
      {
        title: "Sử dụng nó trong phần mềm quản lý dự án",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 1006,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Một hệ thống đánh số của WBS cho phép các nhân viên dự án: ",
  },
  {
    title:
      "WBS có thể được suy nghĩ tốt nhất như một sự viện trợ hiệu quả cho truyền thông……. ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1007,
    answers: [
      {
        isKey: false,
        title: "Đội dự án",
        idx: 0,
      },
      {
        title: "PM ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Khách hàng ",
      },
      {
        title: "Các bên có liên quan",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    idx: 1008,

    answers: [
      {
        title: "Hoàn thành nhiều kế hoạch quản lý phạm vi dự án",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Sự chấp nhận của khách hàng về sản phẩm bàn giao của dự án ",
        isKey: true,
      },
      {
        title: "Sự cải thiện ước lượng lịch trình ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Sự cải thiện của hệ thống thông tin quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điều nào dưới đây là thuộc tính chính của xác minh phạm vi? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Từ điển WBS",
      },
      {
        isKey: false,
        idx: 1,
        title: "Danh sách hoạt động ",
      },
      {
        isKey: false,
        title: "Tuyên bố phạm vi dự án sơ bộ ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kế hoạch quản lý phạm vi dự án",
      },
    ],
    idx: 1009,
    title:
      "Trong giai đoạn thực thi, một nhân viên dự án hỏi người PM do anh ta không chắc chắn mình phải thực hiện công việc nào trong dự án. Tài liệu nào dưới đây chứa bản mô tả chi tiết của các gói công việc? ",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Khởi tạo",
      },
      {
        title: "Lên kế hoạch ",
        idx: 1,
        isKey: true,
      },
      {
        title: "Thực thi ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát",
      },
    ],

    idx: 1010,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Tuyên bố phạm vi dự án được tạo ra trong giai đoạn nào của dự án? ",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Không thay đổi",
      },
      {
        idx: 1,
        title: "Giảm xuống ",
        isKey: false,
      },
      {
        title: "Giảm xuống sau đó tăng lên ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tăng lên",
      },
    ],
    title:
      "Chương trình được lên kế hoạch nhiều năm trước khi có một giới thiệu lớn của công nghệ mới. trong khi lên kế hoạch cho dự án mới để bắt đầu trong chương trình này, PM đã mở rộng kế hoạch quản lý phạm vi dự án do dự án trở nên phức tạp hơn. Mức độ không chắc chắn trong phạm vi là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1011,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          " Nhà tài trợ tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ PM",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Các giám đốc chức năng tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ PM ",
      },
      {
        title:
          "PM tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ nhà quản lý cấp cao ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "PM tạo ra kế hoạch quản lý dự án dựa vào đầu vào từ đội dự án",
      },
    ],
    title:
      "Một kế hoạch quản lý dự án nên thực tế để sử dụng quản lý dự án. Phương pháp nào dưới đây là tốt nhất để có được một kế hoạch quản lý dự án có tính thực tế? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1012,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM mới được các chuyên gia quản lý dự án có kinh nghiệm cố vấn. anh ta thấy rằng thật khó để tìm đủ thời gian quản lý dự án do dự án và phạm vi sản phẩm đang ngày càng phức tạp. các chuyên gia đề cập tới các công cụ đơn giản cho quản lý dự án như WBS, có thể được sử dụng trong quá trình thực hiện dự án để giúp đỡ việc quản lý. Vậy WBS dùng để làm gì? ",

    idx: 1013,
    answers: [
      {
        idx: 0,
        title: "Truyền thông với khách hàng",
        isKey: true,
      },
      {
        isKey: false,
        title: "Chỉ ra lịch và ngày cho mỗi gói công việc ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Chỉ ra các giám đốc chức năng cho mỗi nhân viên dự án ",
        isKey: false,
      },
      {
        idx: 3,
        title: "Chỉ ra yêu cầu kinh doanh cho dự án",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1014,

    title:
      "Trong buổi họp với đội dự án, một nhân viên đề nghị tăng phạm vi to hơn phạm vi trong tôn chỉ dự án. PM chỉ ra rằng đội dự án cần tập trung vào hoàn thành tất cả công việc và chỉ công việc được yêu cầu. đây là một ví dụ về: ",
    answers: [
      {
        title: "Quy trình quản l{ thay đổi",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Quản lý phạm vi ",
      },
      {
        isKey: false,
        title: "Phân tích chất lượng ",
        idx: 2,
      },
      {
        title: "Phân tích phạm vi",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 1015,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cuối dự án (at the end of project)",
      },
      {
        idx: 1,
        isKey: false,
        title: "Đầu dự án (at the beginning of project) ",
      },
      {
        title: "Ở cuối mỗi pha của dự án ",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Trong giai đoạn lập kế hoạch",
      },
    ],
    title: "Khi nào thì xác minh phạm vi nên được hoàn thành: ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1016,
    answers: [
      {
        idx: 0,
        title:
          "Gặp đội dự án để xác định nếu thay đổi này có thể phải thực hiện",
        isKey: false,
      },
      {
        title: "Hỏi khách hàng về mô tả thay đổi này ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Giải thích rằng thay đổi không thể thực hiện vào thời điểm này của dự án ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thông báo với ban lãnh đạo",
      },
    ],

    title:
      "Dự án đã gần như hoàn thành. Dự án có biến động về lịch trong là 300 và biến động chi phí là -900. Tất cả đã được hoàn thành và đáp ứng yêu cầu chất lượng ngoại  trừ việc giám định kiểm soát chất lượng. Tất cả các mục trong nhật ký vấn đề (issue log) đều được giải quyết. Khá nhiều nguồn lực đã được giải phóng. Nhà tài trợ tổ chức một buổi gặp mặt để xác minh sản phẩm khi khách hàng thông báo với PM rằng họ muốn một thay đổi chính đối với phạm vi dự án. PM nên làm gì? ",
  },
  {
    idx: 1017,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn vừa tham gia vào phòng quản lý dự án sau 5 năm làm việc trong dự án. Một trong những điều bạn muốn giới thiệu với công ty là sự cần thiết của bảng WBS. Một vài PM đã tức giận do bạn đang đòi hỏi họ phải làm thêm việc. Điều nào dưới đây là tốt nhất khi bạn muốn thuyết phục họ sử dụng WBS? ",
    answers: [
      {
        idx: 0,
        isKey: true,
        title:
          "Nói với học rằng WBS sẽ ngăn chặn các công việc từ không tốt tới tốt (from slipping to the crack)",
      },
      {
        idx: 1,
        isKey: false,
        title: "Nói với họ rằng WBS không cần thiết ",
      },
      {
        idx: 2,
        title:
          "Nói với họ rằng WBS là yêu cầu bắt buộc nếu dự án kéo theo những hợp đồng ",
        isKey: false,
      },
      {
        title: "Nói với họ rằng WBS là cách duy nhất để xác định rủi ro.",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Một PM mới vừa xin bạn lời khuyên để tạo ra bảng WBS. Sau khi bạn giải thích quy trình cho anh ta, anh ta hỏi bạn rằng nên sử dụng phần mềm nào để lập bảng WBS và anh ta nên làm gì với nó khi anh ta hoàn thành. Bạn sẽ trả lời rằng bức hình (picture) không phải là kế quả giá trị nhất của việc tạo bảng WBS, đó là: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "A bar chart (biểu đồ đoạn)",
      },
      {
        isKey: true,
        idx: 1,
        title: "Team buy in ",
      },
      {
        idx: 2,
        isKey: false,
        title: " C. Các hoạt động ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Một danh sách các rủi ro",
      },
    ],
    idx: 1018,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Để quản lý dự án một cách hiệu quả, công việc nên được chia nhỏ ra. Điều nào dưới đây KHÔNG mô tả cách chia công việc nhỏ tới mức nào? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Cho đến khi nó có kết thúc hợp lý",
      },
      {
        title: "Cho đến khi không thể chia nhỏ hơn về mặt logic ",
        idx: 1,
        isKey: false,
      },
      {
        title: "Cho đến khi công việc được làm bởi 1 người ",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Cho đến khi nó có thể ước tính một cách thực tế",
      },
    ],
    idx: 1019,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1020,
    title:
      "Một PM có thể sẽ sử dụng…………… để chắc chắn rằng đội dự án biết rõ công việc nào được bao gồm trong mỗi gói công việc của họ?",
    answers: [
      {
        idx: 0,
        title: " Tuyên bố phạm vi dự án ",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Phạm vi sản phẩm ",
      },
      {
        title: "Từ điển WBS ",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Lịch trình",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "Tạo ra tuyên bố phạm vi dự án",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "Chắc chắn rằng tất cả các bên có liên quan đã có đầu vào trong phạm vi(có tham gia) ",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Phân tích rủi ro dự án ",
      },
      {
        idx: 3,
        title: "Bắt đầu thực hiện kế hoạch quản lý dự án ",
        isKey: false,
      },
    ],
    idx: 1021,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Một PM vừa được phân công cho 1 dự án mới và được đưa cho tôn chỉ dự án và tuyên bố phạm vi dự án sơ bộ. Điều đầu tiên anh ta nên làm là gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Pha xây dựng của một sản phẩm phần mềm mới sắp hoàn thành. Pha tiếp theo là kiểm thử và cài đặt(implementation). Theo lịch trình, dự án chỉ còn 2 tuần nữa. PM nên làm gì truwóc khi chuyển sang pha cuối cùng",
    answers: [
      {
        isKey: true,
        title: "Xác minh phạm vi ",
        idx: 0,
      },
      {
        title: "Kiểm soát chất lượng",
        idx: 1,
        isKey: false,
      },
      {
        title: "Báo cáo hiệu năng ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Kiểm soát chi phí",
        isKey: false,
      },
    ],

    idx: 1022,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Kế hoạch quản lý phạm vi dự án ",
      },
      {
        title: "Tuyên bố phạm vi dự án ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Bảng WBS",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Từ điện WBS",
      },
    ],
    idx: 1023,
    title:
      "Tất cả các điều dưới đây đều là một phần của đường chuẩn phạm vi (scope baseline) ngoại trừ:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      " Một trong các bên liên quan của dự án liên lạc với PM để thảo luận vài mở rộng về phạm vi mà họ muốn thêm vào dự án. PM hỏi về văn bản chi tiết và các hoạt động trong quy trình quản lý phạm vi. Khi phạm vi yêu cầu đã hoàn tất, PM nên làm gì tiếp theo?",

    answers: [
      {
        isKey: false,
        title: "Hỏi bên có liên quan nếu họ mong chờ thêm thay đổi ",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Hoàn thành kiểm soát thay đổi tích hợp (integrated change control) ",
      },
      {
        title:
          "Chắc chắn rằng ảnh hưởng của thay đổi đã được các bên có liên quan hiểu rõ ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Tìm ra nguyên nhân gốc rễ tại sao phạm vi lại không được khám phá ra trong khi lập kế hoạch dự án. thành khi kiểm soát phạm vi chưa hoàn thành",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1024,
  },
  {
    idx: 1025,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Phương pháp đường tới hạn (critical path method) ",
      },
      {
        isKey: false,
        title: "Sơ đồ dòng (flowchart)",
        idx: 1,
      },
      {
        title: "Sơ đồ ưu tiên ",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "WBS ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Để quản lý lịch trình, một PM phân tích lại dự án để dự đoán trước thời gian thực hiện dự án. Cô ấy phân tích chuỗi hành động với độ linh hoạt lịch trình ít  nhất, đây là kỹ thuật gì? ",
  },
  {
    answers: [
      {
        title: "Thành phần rời rạc ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Thành phần ngoại cảnh",
        isKey: false,
      },
      {
        isKey: true,
        title: "Thành phần bắt buộc",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thành phần phạm vi ",
      },
    ],

    idx: 1026,
    title:
      " Một thành phần (or phụ thuộc - dependency) yêu cầu thiết kế phải hoàn thành trước khi sản xuất bắt đầu. Đây là ví dụ của: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Quan hệ logic",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Các đường then chốt",
      },
      {
        isKey: false,
        idx: 2,
        title: "Cân bằng tài nguyên",
      },
      {
        title: "Quá trình hoặc trạng thái",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Biểu đồ đoạn (bar charts) giải thích điều nào tốt hơn là sơ đồ mạng?",
    idx: 1027,
  },
  {
    answers: [
      {
        title: "1",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "1.3",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "6",
      },
      {
        title: "3",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      " Nếu ước tính lạc quan nhất(optimistic estimate) cho 1 hoạt động là 12 ngày, và ước tính bi quan nhất là 18 ngày, độ lệch tiêu chuẩn của hành động này là bn?",
    idx: 1028,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1029,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Một công cụ điều khiển",
      },
      {
        title: "Phương pháp lên lịch trình",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Công cụ lên kế hoạch",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Quy tắc tự đặt ra (rule of thumb)",
      },
    ],
    title:
      " Phương pháp giải quyết vấn đề bằng cách đánh giá kinh nghiệm (heuristic) được miêu tả tốt nhất là:",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title:
          "Khối lượng thời gian một hành động có thể trễ mà không làm chậm tiến độ dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Khối lượng thời gian một hành động có thể trễ mà không làm chậm ngày bắt đầu của hành động tiếp theo",
      },
      {
        isKey: true,
        idx: 2,
        title: "Thời gian chờ đợi",
      },
      {
        isKey: false,
        idx: 3,
        title:
          " Sản phẩm của 2 hướng thành công tiên tiến và lạc hậu??? (the product of a forward and backward pass)",
      },
    ],
    title: "Độ trễ có nghĩa là gì (lag means)",
    idx: 1030,
  },
  {
    idx: 1031,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "WBS ",
      },
      {
        title: "Sơ đồ mạng",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Biểu đồ đoạn (bar chart)",
      },
      {
        title: "Tôn chỉ dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Công cụ quản lý dự án nào tốt nhất để xác định thời gian dài nhất thực hiện 1 dự án?",
  },
  {
    idx: 1032,

    title: "Điều nào dưới đây là đúng?",
    answers: [
      {
        title:
          "Đường tới hạn có thể lướt qua a dummy(k biết nên dịch là cái gì J) a critical path can run over a dummy)",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Chỉ có thể có 1 đg then chốt",
        idx: 1,
      },
      {
        title:
          "Sơ đồ mạng sẽ thay đổi mỗi khi thời gian kết thúc dự án thay đổi",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Một dự án không bao giờ có trễ tiêu cực (negative float?)",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: " Ngắn hơn khoảng thời gian tồn tại của hoạt động dài ngày nhất",
        idx: 0,
      },
      {
        isKey: false,
        title: " Ngắn hơn khoảng thời gian của hoạt động đại diện của nó",
        idx: 1,
      },
      {
        isKey: true,
        title: "Không có khoảng thời gian tồn tại",
        idx: 2,
      },
      {
        title:
          "Có cùng khoảng thời gian tồn tại giống hoạt động đại diện của nó",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 1033,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Khoảng thời gian tồn tại của một điểm mốc là:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "không có quan hệ gì cả",
        idx: 0,
      },
      {
        idx: 1,
        title: "độ lệch tiêu chuẩn cho biết nếu ước tính là chính xác",
        isKey: false,
      },
      {
        title: "độ lệch tiêu chuẩn cho biết độ không chắc chắn của ước tính",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "độ lệch tiêu chuẩn cho biết nếu ước tính có bao gồm cả phần thêm(đệm vào - pad) vào",
      },
    ],
    title:
      "Điều nào dưới đây mô tả tốt nhất về quan hệ giữa độ lệch tiêu chuẩn và rủi ro? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1034,
  },
  {
    idx: 1035,
    title: "Phân tích Monte Carlo được dùng để làm gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Có được các dấu hiệu của rủi ro kéo theo trong dự án",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Ước tính độ dài của hoạt động",
      },
      {
        idx: 2,
        title: " Mô phỏng thứ tự xảy ra của các hoạt động",
        isKey: false,
      },
      {
        title: " Chứng minh cho ban lãnh đạo rằng cần thêm nhân viên dự án",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 1036,
    answers: [
      {
        title: "Việc thực hiện phân tích Monte Carlo",
        idx: 0,
        isKey: false,
      },
      {
        title: "Thời gian chờ đợi giữa các hoạt động",
        idx: 1,
        isKey: false,
      },
      {
        title: "Độ trễ của việc quyết định",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Việc quyết định khối lượng thời gian một hoạt động có thể bị chậm lại bởi sự chậm trễ trong đường tới hạn",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Độ trễ của một hoạt động được quyết định bởi",
  },
  {
    answers: [
      {
        title: "Làm cho dự án dễ quản lý hơn ",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Làm gia tăng rủi ro của dự án",
        idx: 1,
      },
      {
        title: "Yêu cầu nhiều nhân lực hơn",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Làm dự án tốn kém hơn",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một dự án có 3 đường tới hạn. Điều nào dưới đây mô tả đúng nhất ảnh hưởng của các đường tới hạn này tới dự án? ",
    idx: 1037,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1038,
    title:
      "Nếu thời gian và chi phí dự án không quan trọng như số lượng các nguồn lực sử dụng trong 1 tháng, việc tốt nhất để làm trong các việc dưới đây là:    ",
    answers: [
      {
        isKey: false,
        title: "Thực hiện phân tích Monte Carlo ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: " Xúc tiến dự án (fast track the project)",
      },
      {
        idx: 2,
        isKey: true,
        title: "Thực hiện cân bằng nguồn tài nguyên ",
      },
      {
        idx: 3,
        title: "Phân tích vòng đời chi phí",
        isKey: false,
      },
    ],
  },
  {
    title:
      " Khi nào đồ thị điểm mốc(milestone chart) được sử dụng thay cho sơ đồ đoạn (bar chart)?    ",

    idx: 1039,
    answers: [
      {
        idx: 0,
        title: "Lên kế hoạch dự án ",
        isKey: false,
      },
      {
        title: "Báo cáo với thành viên đội dự án",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Báo cáo với ban lãnh đạo",
      },
      {
        isKey: false,
        idx: 3,
        title: "Phân tích rủi ro",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Kế hoạch quản lý dự án của bạn làm lịch trình dự án khá tốn thời gian. Nếu sơ đồ mạng của dự án không thay đổi nhưng bạn có thêm các nguồn nhân lực, điều tốt nhất nên làm là:",
    answers: [
      {
        title: "Xúc tiến dự án ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Cấp lại các nguồn lực",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Hủy dự án (crash) ",
      },
      {
        idx: 3,
        title: "Phân tích Monte Carlo",
        isKey: false,
      },
    ],
    idx: 1040,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1041,
    answers: [
      {
        title: " Có thể sử dụng PERT",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: " Có 4 quan hệ giữa các hành động ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Chỉ có quan hệ finish-to-finish (A F2F B tức là B không thể kết thúc trc khi A kết thúc) ",
      },
      {
        title: "Có thể sử dụng các hành động k đúng (dummy activities)",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      " Phương pháp sơ đồ ưu tiên khác với phương pháp sơ đồ mũi tên ở chỗ sơ đồ ưu tiên có đặc điểm:   ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Nói với nhà quản lý cấp cao rằng đường tới hạn của dự án không cho phép dự án hoàn thành trước hạn ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Nói với thủ trưởng của bạn",
      },
      {
        idx: 2,
        isKey: true,
        title:
          " Gặp đội dự án và tìm kiếm lựa chọn để hủy hoặc xúc tiến dự án ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Làm việc cật lực và nhìn vào trạng thái dự án trong tháng tới. ",
      },
    ],

    idx: 1042,
    title:
      " Điều nào dưới đây là tốt nhất để thực hiện cố gắng hoàn thành một dự án trước 2 ngày? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Trong nỗ lực hoàn thành dự án trước hạn, PM tìm kiếm chi phí liên kết với việc hủy từng hoạt động. Cách tiếp cận tốt nhất để hủy hoạt động sẽ bao gồm tìm kiếm trong:",
    answers: [
      {
        title: "Ảnh hưởng rủi ro của việc hủy từng hoạt động ",
        isKey: true,
        idx: 0,
      },
      {
        title: " Quan điểm của khách hàng đối với từng hoạt động bị hủy ",
        idx: 1,
        isKey: false,
      },
      {
        title:
          " Quan điểm của thủ trưởng về hoạt động nào bị hủy, hoạt động nào được làm tiếp",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: " Các giai đoạn trong vòng đời dự án mà hoạt động đó xảy ra",
        idx: 3,
      },
    ],
    idx: 1043,
  },
  {
    idx: 1044,

    title:
      ". Một PM đang cố gắng để sắp xếp tất cả các hành động trong dự án và đã xác định được: hoạt động 1 có thể thực hiện ngay lập tức và ước tính sẽ kéo dài trong 1 tuần. Hoạt động 2 sẽ bắt đầu sau khi hoạt động 1 hoàn thành và ước tính kéo dài  trong 4 tuần. Hoạt động 3 có thể bắt đầu sau khi hoạt động 2 hoàn thành và ước tính kéo dài trong 5 tuần. Hoạt động 4 có thể bắt đầu sau khi hoạt động 1 hoàn thành và ước tính kéo dài trong 8 tuần. Hoạt động 3 và 4 phải được hoàn thành trước khi kết thúc dự án. Vậy đường tới hạncủa dự án này kéo dài trong bao lâu?   ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "10 ",
        idx: 0,
      },
      {
        idx: 1,
        title: "11 ",
        isKey: false,
      },
      {
        idx: 2,
        title: "14",
        isKey: false,
      },
      {
        title: "8",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 1045,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title: "10 ",
        isKey: false,
      },
      {
        isKey: true,
        title: "11",
        idx: 1,
      },
      {
        title: "14",
        isKey: false,
        idx: 2,
      },
      {
        title: "8",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Dựa vào dữ liệu của câu hỏi trên, nếu hoạt động 4 kéo dài trong 10 tuần, đường tới hạn của dự án sẽ kéo dài trong bao lâu?   ",
  },
  {
    answers: [
      {
        title: "Sắp xếp các hành động (activity sequencing)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Xây dựng lịch trình",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Định nghĩa phạm vi",
      },
      {
        isKey: false,
        idx: 3,
        title: "Tạo ra tôn chỉ dự án",
      },
    ],
    title:
      " Điều nào dưới đây bao gồm việc hỏi đội dự án về thời gian ước tính cho hoạt động của họ và có được sự đồng ý (reaching agreement)trong lịch cho mỗi hoạt động?",
    idx: 1046,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1047,

    answers: [
      {
        title: "Cắt giảm phạm vi dự án",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Gặp ban lãnh đạo và nói với họ rằng thời với hạn yêu cầu không thể hoàn thành kịp dự án",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Làm việc thêm ngoài giờ",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Xác định các lựa chọn để dồn lịch và giới thiệu chúng với ban lãnh đạo như một lựa chọn khuyến nghị.",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang trong giai đoạn thực thi của một dự án xây dựng lớn khi anh khám phá ra thời gian cần thiết để hoàn thành dự án dài hơn thời gian hiện có. Điều tốt nhất nên làm là gì?",
  },
  {
    idx: 1048,
    title:
      "Trong khi lên kế hoạch dự án, bạn ước tính thời gian cần thiết cho mỗi hoạt động và thêm ước tính để tạo ra ước lượng dự án. Bạn cam kết hoàn thành dự án đúng hạn. Trong tình huống này, điều gì Sai?    ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Đội dự án không tạo ra ước tính và việc ước tính sẽ tốn thời gian nếu sử dụng phương pháp này",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: " Đội dự án không tạo ra ước tính và sơ đồ mạng k được sử dụng ",
      },
      {
        title: " Ước tính quá tốt thời gian và nên được ban lãnh đạo tạo ra  ",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Ước lượng dự án nên giống với ngày yêu cầu hoàn thành của khách hàng ",
      },
    ],
  },
  {
    title:
      " Trong khi định nghĩa hoạt động, một nhân viên xác định rằng 1 hoạt động cần được thực hiện. Tuy nhiên, 1 nhân viên khác tin rằng hoạt động đó không phải là 1  phần của dự án như anh ta hiểu trong tuyên bố phạm vi dự án. PM tốt nhất nên làm gì?",
    idx: 1049,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: " Cố gắng xây dựng sự đồng thuận trong đội dự án",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: " Thực hiện quyết định cá nhân",
      },
      {
        isKey: true,
        idx: 2,
        title: "Hỏi nhà tài trợ về thông tin chi tiết ",
      },
      {
        title: "Hỏi quản lý cấp cao về thông tin chi tiết",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1050,
    title:
      " Bạn là 1 PM ở Mỹ, phát triển dự án phần mềm 5,000,000$. Trong khi làm việc với đội dự án để xây dựng sơ đồ mạng, bạn chú ý một chuỗi các hoạt động có thể được thực hiện song song nhưng phải hoàn thành trong một thứ tụ riêng biệt. Loại hoạt động nào của phương pháp sắp xếp thứ tự hoạt động được yêu cầu cho những hoạt động này?",
    answers: [
      {
        title: "Phương pháp sơ đồ ưu tiên",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: " Phương pháp sơ đồ mũi tên ",
      },
      {
        idx: 2,
        title: "Phương pháp đường tới hạn ",
        isKey: false,
      },
      {
        title: " Phương pháo sơ đồ toán tử  ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: " Phụ thuộc (or thành phần - dependency) bắt buộc ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "Phụ thuộc tùy ý",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Phụ thuộc ngoại cảnh   ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Heuristic – phương pháp đánh giá kinh nghiệm  ",
      },
    ],

    idx: 1051,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là 1 PM ở Mỹ, phát triển dự án phần mềm 5,000,000$. Trong khi làm việc với đội dự án để xây dựng sơ đồ mạng, dữ liệu xây dựng của bạn cho thấy chất lượng có thể dc cải thiện nếu mô hình dữ liệu được quản lý cấp cao phê chuẩn trước khi chuyển sang thành phần thiết kế khác. Họ hỗ trợ đề nghị này với một bài báo từ một tạp chí phần mềm hàng đầu. Mô tả nào dưới đây là tốt nhất với loại đầu vào này? (với loại hỗ trợ này)   ",
  },
  {
    idx: 1052,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Hoạt động Start-B",
      },
      {
        idx: 1,
        title: "Hoạt động A-D ",
        isKey: false,
      },
      {
        title: "Hoạt động E-End   ",
        isKey: true,
        idx: 2,
      },
      {
        title: "Hoạt động C-E  ",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dựa vào bảng sau, nếu bạn cần làm ngắn thời gian thực hiện dự án, bạn sẽ giảm thời gian cho hoạt động nào?   ",
  },
  {
    title:
      ". Bạn có một dự án với các hoạt động sau: hoạt động A kéo dài 40 giờ và có thể bắt đầu sau khi bắt đầu dự án. Hoạt động B kéo dài 25 giờ và nên bắt đầu sau khi bắt đầu dự án. Hoạt động C phải bắt đầu sau khi hoạt động A và kéo dài trong 35 giờ. Hoạt động D phải bắt đầu sau hoạt động B và C và kéo dài 30 giờ. Hoạt động E phải bắt đầu sau hoạt động C và kéo dài 10 giờ. Hoạt động F và D là các hoạt động cuối cùng của dự án. Điều nào dưới đây là đúng nếu hoạt động B thực sự kéo dài trong 37 giờ?   ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Đường tới hạn là 67 giờ",
      },
      {
        idx: 1,
        title: "Đường tới hạn thay đổi: Start, B, D, End",
        isKey: false,
      },
      {
        title: "Đường tới hạn thay đổi thành Start, A, C, E, F, End",
        isKey: true,
        idx: 2,
      },
      {
        title: "Đường tới hạn tăng lên 12h",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1053,
  },
  {
    idx: 1054,

    title:
      "Một PM vừa nhận được ước tính thời gian hoạt động từ đội dự án. Anh ta cần điều nào dưới đây để hoàn thành xây dựng lịch trình?    ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Thay đổi các yêu cầu",
      },
      {
        isKey: false,
        title: "Hệ thống kiểm soát thay đổi lịch trình ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: ". Đề nghị các hành động hiệu chỉnh",
      },
      {
        title: "Thời gian dự trù ",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: " Kế hoạch quản lý truyền thông",
      },
      {
        idx: 1,
        title: " Kế hoạch quản lý dự án",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: " Kế hoạch quản lý nhân lực ",
      },
      {
        isKey: true,
        idx: 3,
        title: "Kế hoạch quản lý lịch trình, thời gian",
      },
    ],
    idx: 1055,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đang kiểm soát một dự án từ một PM khác trong giai đoạn lập kế hoạch. Nếu PM mới muốn xem kế hoạch của ng PM cũ để quản l{ thay đổi lịch trình, tốt nhất nên xem xét văn bản nào?   ",
  },
  {
    answers: [
      {
        title: "Phương pháp đường tới hạn",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "PERT",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Monte Carlo ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Cân bằng nguồn lực",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1056,
    title:
      " Một PM đang sử dụng ước tính thời gian trung bình có điều chỉnh để thực hiện phân tích lịch trình mạng. Loại hình phân tích toán học nào được sử dụng?   ",
  },
  {
    answers: [
      {
        title: "Sắp xếp các hành động",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          " Xác minh rằng phạm vi chuẩn đã có (verify that they have the correct scope) ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: " Tạo ra lịch trình sơ bộ và lấy phê chuẩn từ đội dự án ",
      },
      {
        idx: 3,
        title: " Hoàn thành quản lý rủi ro",
        isKey: false,
      },
    ],
    title:
      "  WBS, ước tính cho từng gói công việc, và sơ đồ mạng đều đã hoàn thành. Người PM nên làm gì tiếp theo?",

    idx: 1057,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1058,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tạo ra danh sách hành động",
      },
      {
        title: "Bắt đầu làm bảng WBS",
        idx: 1,
        isKey: false,
      },
      {
        title: "Hoàn thành lịch trình",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Nén lịch trình (compress)",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một dự án phát triển sản phẩm mới có 4 cấp (level) trong bảng WBS và dc xếp chuỗi sử dụng phương pháp sơ đồ mũi tên. Ước tính thời gian hoạt động đã có. Điều tiếp theo nên làm là gì?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bắt đầu kiểm soát lịch trình",
      },
      {
        isKey: false,
        title:
          "Bắt đầu ước tính nguồn lực hành động (activity resource estimating)",
        idx: 1,
      },
      {
        title: "Ước tính tương tự lịch trình",
        isKey: false,
        idx: 2,
      },
      {
        title: " Có được sự phê chuẩn",
        idx: 3,
        isKey: true,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là một PM cho một dự án phát triển sản phẩm mới có 4 cấp trong bảng WBS, và được sắp xếp bằng phương pháp sơ đồ mũi tên. Ước tính thời gian đã được nén và một lịch trình đã được tạo ra. Hành động quản lý thời gian nào nên được làm tiếp theo?",
    idx: 1059,
  },
  {
    title:
      "Một nhân viên từ phòng nghiên cứu phát triển nói với bạn rằng công việc của cô ấy quá sáng tạo để cung cấp cho bạn một ước tính riêng có sẵn cho hoạt động. bạn phải quyết định sử dụng giờ lao động từ dự án trước để dự đoán cho tương lai. Đây là một ví dụ về:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Ước tính thông số",
      },
      {
        isKey: false,
        idx: 1,
        title: "Ước tính 3 điểm (three point)",
      },
      {
        isKey: false,
        title: " Ước tính tương tự",
        idx: 2,
      },
      {
        title: "Phân tích Monte Carlo",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 1060,
  },
  {
    title:
      " An activity has an early start(ES) of day 3, a late start (LS) of day 13, an early finish(EF) of day 9, and a late finish(LF) of day 19. The activity:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Is on the critical path(đường tới hạn)",
        isKey: false,
      },
      {
        title: "Has a lag",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Is progressing well",
        isKey: false,
      },
      {
        idx: 3,
        title: "Is not on the critical path",
        isKey: true,
      },
    ],
    idx: 1061,
  },
  {
    answers: [
      {
        isKey: false,
        title: " Cắt giảm nguồn lực từ một hoạt động",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Thực hiện nhiều hoạt động đồng thời ",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Di chuyển nguồn lực từ phụ thuộc được ưu tiên sang các phụ thuộc khác",
      },
      {
        title: "Bỏ một hoạt động ra khỏi dự án",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Dự án được tính toán để hoàn thành 4 ngày sau ngày hoàn thành mong đợi (desired completion date). Bạn không có nguồn lực nào khác. Dự án có rủi ro thấp, tỷ lệ chi phí có lợi (benefit cost ratio) được mong đợi là 1.6 và các phụ thuộc được ưu tiên. Trong tình huống này, điều tốt nhất nên làm là gì?",
    idx: 1062,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "PM ",
      },
      {
        title: "Nhà quản lý cấp cao",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Nhà tài trợ dự án",
        isKey: false,
      },
      {
        idx: 3,
        title: "Quản lý của ban quản lý dự án",
        isKey: false,
      },
    ],

    title:
      "Một PM của một công ty xây dựng nhỏ có một dự án với chi phí là 130000$ với thời hạn hơn 6 tuần. Theo lịch của cô ấy, dự án nên có chi phí 60000$ đến bây giờ. Tuy nhiên, hiện tại dự án đã chi ra 90000$. Dự án đang đi chậm lịch trình do ước tính gốc không đúng. Ai sẽ có trách nhiệm chính để giải quyết vấn đề này?",
    idx: 1063,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Tổ chức của bạn có một thời gian khó khăn trong quản lý toàn bộ các dự án. Bạn dc đề nghị để giúp nhà quản lý cấp cao hiểu vấn đề này. Loại báo cáo nào sẽ giúp công cấp thông tin tóm tắt cho nhà quản lý cấp cao?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Ước tính chi phí chi tiết",
      },
      {
        isKey: false,
        title: "Kế hoạch quản lý dự án",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Sơ đồ đoạn (bar chart) ",
      },
      {
        idx: 3,
        isKey: true,
        title: "Báo cáo điểm mốc ",
      },
    ],
    idx: 1064,
  },
  {
    answers: [
      {
        isKey: false,
        title: "Crashing",
        idx: 0,
      },
      {
        idx: 1,
        title: "Floating ",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Leveling",
      },
      {
        isKey: false,
        title: "Fast tracking ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1065,

    title:
      " Sắp xếp lại các nguồn lực để có hằng số tài nguyên được sử dụng mỗi tháng được gọi là:",
  },
  {
    idx: 1066,
    title: " Điều nào dưới đây là một lợi ích của một đánh giá dự án tương tự?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Đánh giá sẽ gần hơn với công việc sẽ thực sự yêu cầu",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Nó được dựa vào việc hiểu chi tiết yêu cầu công việc",
        idx: 1,
      },
      {
        title:
          "Nó mang lại cho đội dự án việc hiểu rõ mong đợi của ban lãnh đạo",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Nó giúp PM xác định nếu dự án hoàn thành đúng lịch trình",
      },
    ],
  },
  {
    title:
      " Trong giai đoạn thực hiện dự án, một số lượng lớn thay đổi đã được thực hiện. Người PM nên làm gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1067,
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "PChờ đợi đến khi tất cả thay đổi được biết và làm một lịch trình mới",
      },
      {
        isKey: true,
        title:
          "Thực hiện phê chuẩn các thay đổi nếu cần, nhưng giữ lại đường chuẩn lịch trình (baseline)",
        idx: 1,
      },
      {
        title: " Chỉ thực hiện thay đổi được ban lãnh đạo phê chuẩn ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Nói chuyện với ban lãnh đạo trước khi thực hiện bất kỳ thay đổi nào",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Cách thông thường để tính toán ước tính tại điểm hoàn thành(EAC) là lấy chi phí tài thời điểm hoàn thành(BAC) và:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chia cho SPI",
      },
      {
        isKey: false,
        idx: 1,
        title: "Nhân với SPI",
      },
      {
        isKey: false,
        title: "Nhân với CPI",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Chia cho CPI",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1068,
  },
  {
    idx: 1069,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: " Chi phí hoàn thành công việc",
      },
      {
        isKey: false,
        title: " Giá trị của công việc được thực hiện",
        idx: 1,
      },
      {
        title: " Tổng chi phí dự kiến tại thời điểm hoàn thành dự án.",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: " Chi phí sẽ hoàn thành công việc(what it will cost)",
        idx: 3,
      },
    ],
    title: " Ước tính tại điểm hoàn thành EAC là đánh giá định kỳ của:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1070,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Nếu giá trị thu được(EV-earned value) là 350, chi phí thực tế(AC-actual value) là 400, giá trị dự tính(PV-planned value) là 325, chi phí phát sinh(CV-cost varience) là bao nhiêu?",
    answers: [
      {
        isKey: false,
        title: "350 ",
        idx: 0,
      },
      {
        isKey: false,
        title: "-75",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "400",
      },
      {
        idx: 3,
        title: "-50",
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: " Sự mất cân bằng kép là gì?",
    idx: 1071,

    answers: [
      {
        title: "Khấu hao",
        idx: 0,
        isKey: false,
      },
      {
        title: "Sự giảm theo đường thẳng",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Sự giảm nhanh chóng",
      },
      {
        title: "Dự toán(or chi phí) vòng đời (life cycle costing)",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title: " Ước lượng tương tự là gì?",
    idx: 1072,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Sử dụng kĩ thuật ước lượng từ dưới lên(bottom-up)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Đc sử dụng thường xuyên nhất trong giai đoạn thực thi dự án",
      },
      {
        isKey: true,
        idx: 2,
        title: "Sử dụng kĩ thuật ước lượng từ trên xuống(top-down)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Sử dụng chi phí chi tiết thực tế trong quá khứ",
      },
    ],
  },
  {
    title: "Chi phí của việc lựa chọn 1 dự án và từ bỏ dự án khác được gọi là:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Chi phí cố định (fixed cost)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Chi phí ngầm(sunk cost)",
      },
      {
        idx: 2,
        isKey: false,
        title: "Giá trị thực (net present value NPV)",
      },
      {
        isKey: true,
        idx: 3,
        title: "Chi phí cơ hội",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1073,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điểm chính nổi bật của đánh giá vòng đời là:",

    idx: 1074,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Chi phí ước tính cài đặt",
      },
      {
        title: "Ước tính chi phí của thực hiện và bảo trì",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xem xét chi phí cài đặt khi lên kế hoạch chi phí dự án",
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Xem xét chi phí thực hiện và bảo trì khi lập quyết định trong dự án ",
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Hỏi mỗi nhân viên dự án đã hoàn thành được bao nhiêu % công việc và báo cáo trong báo cáo tiến trình hàng tháng",
      },
      {
        title:
          "Tính toán giá trị thu được EV và sử dụng thông số và các tính toán khác để báo cáo hiệu năng đã thực hiện và dự đoán hiệu năng tương lai",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Sử dụng luật 50/50 và chắc chắn rằng chi phí vòng đời là ít hơn chi phí dự án",
      },
      {
        isKey: false,
        title:
          "Tập trung vào khối lượng sử dụng tháng trước và chi tiêu tháng tiếp theo",
        idx: 3,
      },
    ],

    title:
      "Việc đo hiệu suất chi phí tốt nhất nên được thực hiện theo cách nào dưới đây?",
    idx: 1075,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Vào thời điểm này, chúng ta mong đời tổng chi phí dự án hơn 89% so với kế hoạch ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          " Khi dự án hoàn thành chúng ta sẽ sử dụng 89% hơn so với kế hoạch",
        idx: 1,
      },
      {
        title: "Dự án chỉ thực hiện 89% so với kế hoạch",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: " Dự án chỉ nhận được 89% chi phí so với kế hoạch đầu tư",
      },
    ],
    idx: 1076,
    title: "Chỉ số thực hiện chi phí CPI là 0.89 nghĩa là:",
  },
  {
    title: " Chỉ số thực hiện lịch trình SPI là 0.76 nghĩa là: ",

    idx: 1077,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Bạn đang chi tiêu quá ngân sách",
      },
      {
        title: "Bạn đang đi nhanh hơn kế hoạch",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          " Bạn đang chỉ thực hiện 76% của tỷ lệ ban đầu của kế hoạch (the rate originally planned)",
        isKey: true,
      },
      {
        title: "Bạn đang chỉ thực hiện 24% của tỷ lệ ban đầu của kế hoạch",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "PA. WBS",
      },
      {
        title: "Sơ đồ mạng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các rủi ro ",
      },
      {
        idx: 3,
        title: "Thủ tục kiểm soát thay đổi",
        isKey: true,
      },
    ],

    idx: 1078,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điều nào dưới đây không cần thiết khi đưa ra ước tính dự án?",
  },
  {
    title: "Điều nào dưới đây là một ví dụ của ước tính tham số? ",
    idx: 1079,
    answers: [
      {
        idx: 0,
        title: "Dollar per module",
        isKey: true,
      },
      {
        title: "Điểm nút học được( learning bend)",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Bottom-up ",
      },
      {
        idx: 3,
        title: "CPM",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Lên kế hoạch",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Kết thúc ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Thực thi",
      },
      {
        idx: 3,
        isKey: true,
        title: "Khởi tạo",
      },
    ],
    title:
      "Một phác thảo ước tính độ lớn được thực hiện trong giai đoạn nào của dự án?",
    idx: 1080,
  },
  {
    answers: [
      {
        idx: 0,
        title: "Từ -75% tới 25%",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "Từ -10% tới 15%",
      },
      {
        title: "Từ 10% tới -25% ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Từ -5% tới 10%",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1081,

    title:
      "Chi phí thực tế nên gần(how close) với ước lượng ngân sách cuối cùng ntn?",
  },
  {
    title:
      "Nhân tố nào không nên được xem xét khi lựa chọn giữa 2 dự án để đảm nhận(undertake)?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giá trị thực NPV",
      },
      {
        title: "Tỷ lệ chi phí lợi ích ( benefit cost ratio BCR)",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Thời gian thu hồi vốn đầu tư",
        idx: 2,
      },
      {
        idx: 3,
        title: "Luật lợi nhuận giảm dần.",
        isKey: true,
      },
    ],
    idx: 1082,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Nếu dự án A có giá trị thực NPV là 30000$ và dự án B có giá trị thực NPV là 50000$, chi phí cơ hội là gì khi lựa chọn dự án B",

    idx: 1083,
    answers: [
      {
        idx: 0,
        title: "23000$",
        isKey: false,
      },
      {
        title: "30000$",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "20000$",
      },
      {
        isKey: false,
        title: "50000$",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1084,
    answers: [
      {
        isKey: true,
        title: "Trực tiếp",
        idx: 0,
      },
      {
        idx: 1,
        title: "NPV",
        isKey: false,
      },
      {
        isKey: false,
        title: "Gián tiếp",
        idx: 2,
      },
      {
        title: "Cố định",
        isKey: false,
        idx: 3,
      },
    ],

    title: "Loại chi phí đào tạo đội dự án là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title: "Chi phí thiết lập dự án là một ví dụ về:",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Chi phí biến động",
      },
      {
        title: "Chi phí cố định",
        isKey: true,
        idx: 1,
      },
      {
        title: "Chi phí hoạt động (overhead costs)",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Chi phí cơ hội",
      },
    ],
    idx: 1085,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1086,
    title: "Phân tích giá trị được thực hiện để thu được cái gì?",
    answers: [
      {
        isKey: false,
        title: "Nhiều giá trị hơn từ phân tích chi phí",
        idx: 0,
      },
      {
        title: "Quyền quản lý với việc mua vào của dự án",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Đội để mua vào dự án",
        isKey: false,
      },
      {
        idx: 3,
        title: "Một cách ít tốn kém hơn để làm cùng một công việc",
        isKey: true,
      },
    ],
  },
  {
    title: "Ai có rủi ro về chi phí trong hợp đồng giá cố định? ",
    idx: 1087,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Đội dự án",
      },
      {
        isKey: false,
        title: "Người mua ",
        idx: 1,
      },
      {
        title: "Người bán",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Ban lãnh đạo",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Điều nào dưới đây thể hiện giá trị ước tính của công việc đã hoàn thành thực tế?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        idx: 0,
        title: " Giá trị thu được EV",
        isKey: true,
      },
      {
        title: "Giá trị dự tính PV(planned value) ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "TChi phí thực tế AC",
      },
      {
        title: "Chi phí phát sinh CV( cost variance)",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 1088,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title: "Dự án A",
        idx: 0,
      },
      {
        title: "Dự án B",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Dự án C",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dự án D",
      },
    ],
    title:
      " Bạn có 4 dự án và phải chọn 1. Dự án A đang được thực hiện hơn 6 năm và có giá trị thực NPV là 70000$. Dự án B đang được thực hiện hơn 3 năm và có NPV là 30000$. Dự án C đang được thực hiện hơn 5 năm và có NPV là 40000$. Dự án D đang dc thực hiện hơn 1 năm và NPV là 60000$. Bạn sẽ chọn dự án nào?",
    idx: 1089,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Dự án A ",
      },
      {
        title: "Dự án B",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Dự án C",
      },
      {
        idx: 3,
        title: "Dự án D",
        isKey: false,
      },
    ],
    title:
      "Dự án A có tỷ suất hoàn vốn nội bộ (internal rate of return –IRR) là 21%. Dự án B có IRR= 7%. Dự án C có IRR= 31%. Dự án D có IRR= 19%. Dự án tốt nhất là: ",
    idx: 1090,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Dự án A với NPV là 95000$",
        isKey: false,
      },
      {
        isKey: true,
        title: "Dự án B với NPV là 120000$",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Dự án C với NPV là 20000$",
      },
      {
        title: "Dự án D với NPV là -30000$",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 1091,
    title:
      " Là một PM, bạn được giới thiệu các thông tin sau về giá trị thực NPV của một vài dự án. Bạn sẽ lựa chọn dự án nào trong số các dự án dưới đây?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "3 dự án có giá trị như nhau",
      },
      {
        idx: 1,
        title: "Dự án A",
        isKey: false,
      },
      {
        isKey: false,
        title: "Dự án B",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Dự án C",
      },
    ],

    idx: 1092,
    title:
      "Công ty của bạn có thể chấp nhận 1 trong 3 dự án sau: dự án A có NPV là 30000$ và cần 6 năm để hoàn thành, dự án B có NPV là 60000$ và cần 3 năm để hoàn thành, dự án C có NPV là 90000$ và cần 4 năm để hoàn thành. Dựa vào các thông tin trên, bạn sẽ chọn dự án nào để thực hiện?",
  },
  {
    title:
      "Người bán nói với bạn rằng các hoạt động của bạn gây ra việc tăng chi phí của họ. bạn nên làm gì?",
    idx: 1093,

    answers: [
      {
        idx: 0,
        title: "Đề nghị thay đổi đối với chi phí dự án",
        isKey: false,
      },
      {
        isKey: false,
        title: "Có buổi họp với ban lãnh đạo để xem nên làm gì",
        idx: 1,
      },
      {
        isKey: true,
        title: "Hỏi người bán về các thông tin hỗ trợ",
        idx: 2,
      },
      {
        title: "Từ chối mọi hành động sai ",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Dự đoán chi phí chỉ ra rằng bạn sẽ bị vượt quá chi phí vào giai đoạn cuối của dự án. Bạn nên làm gì?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1094,
    answers: [
      {
        isKey: true,
        title: "Loại trừ các rủi ro trong ước tính và ước tính lại",
        idx: 0,
      },
      {
        isKey: false,
        title: "Gặp nhà tài trợ để tìm ra công việc nào nên được làm sớm hơn",
        idx: 1,
      },
      {
        title: "Cắt giảm chất lượng",
        idx: 2,
        isKey: false,
      },
      {
        title: "Giảm phạm vi",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 1095,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án phát triển cửa hàng mới yêu cầu việc mua bán của nhiều thiết bị, máy móc và đồ đạc. Phòng ban có trách nhiệm cho việc phát triển vừa tập trung quy trình mua bán bên ngoài và tiêu chuẩn hóa hệ thống đặt hàng mới. Những thủ tục trên có trong tài liệu nào?",
    answers: [
      {
        isKey: false,
        title: "Tuyên bố phạm vi dự án",
        idx: 0,
      },
      {
        title: "WBS",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kế hoạch quản lý nhân lực",
      },
      {
        isKey: true,
        idx: 3,
        title: "Chính sách của tổ chức",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1096,
    title:
      "Vào giai đoạn đầu của dự án, bạn có buổi thảo luận với nhà tài trợ về các kỹ thuật ước lượng nên được sử dụng. Bạn muốn có đánh giá của chuyên gia, nhưng nhà tài trợ phản đối và muốn dùng ước tính tương tự. Tốt nhất nên làm gì?",
    answers: [
      {
        isKey: true,
        title: "Đồng ý với ước tính tương tự như một đánh giá của chuyên gia",
        idx: 0,
      },
      {
        title: "Đề nghị đánh giá vòng đời như một thỏa hiệp",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Xác định tại sao nhà tài trợ muốn một ước tính chính xác như thế",
      },
      {
        title:
          "Cố gắng thuyết phục nhà tài trợ đồng { các đánh giá của chuyên gia do nó chính xác hơn",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title:
          "Ngân sách dự án có thể được tìm thấy trong tôn chỉ dự án mới vừa hoàn thành",
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Ngân sách dự án và đường chuẩn sẽ không được kết thúc và được chấp nhận cho đến khi giai đoạn lên kế hoạch hoàn tất ",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title:
          " Kế hoạch quản lý dự án sẽ không bao gồm ngân sách dự án và đường chuẩn, đây là một dự án nhỏ",
      },
      {
        isKey: false,
        idx: 3,
        title:
          " Có thể hoàn thành một ước tính trước khi kế hoạch quản lý dự án được tạo ra",
      },
    ],

    idx: 1097,
    title:
      " Bạn vừa hoàn thành giai đoạn khởi tạo của một dự án nhỏ và đang bước sang giai đoạn lên kế hoạch khi một bên có liên quan tới dự án hỏi bạn về ngân sách dự án và đường chuẩn chi phí (cost baseline). Bạn nên nói gì? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      " PM được chỉ định ước tính chi phí chung để chia nhỏ các hoạt động để thiết lập  một đường chuẩn cho việc đo đạc hiệu năng dự án. Đây là quy trình gì?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Quản lý chi phí",
      },
      {
        title: "Ước tính chi phí",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "Dự thảo ngân sách",
        idx: 2,
      },
      {
        isKey: false,
        title: "Kiểm soát chi phí",
        idx: 3,
      },
    ],
    idx: 1098,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Chi phí cố định",
      },
      {
        idx: 1,
        isKey: true,
        title: "Chi phí ngầm",
      },
      {
        isKey: false,
        title: "Chi phí trực tiếp",
        idx: 2,
      },
      {
        title: "Chi phí biến động (VC – variable costs)",
        isKey: false,
        idx: 3,
      },
    ],

    title:
      " Bạn được hỏi để chuẩn bị ngân sách để hoàn thành một dự án. Dự án này vừa bắt đầu năm ngoái và bị hoãn trong 6 tháng. Điều nào dưới đây không có trong ngân sách?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1099,
  },
  {
    title:
      "Để cung cấp một dự án mới cho phòng ban của mình, bạn cần di chuyển tài nguyên từ một dự án sang một dự án khác. Do phòng ban của bạn đang làm việc hết công suất, di chuyển tài nguyên sẽ chăncs chắn trì hoãn dự án mà bạn chuyển tài nguyên. Điều này làm ảnh hưởng tiêu cực ít nhất đến dự án nào dưới đây ếu bạn di chuyển tài nguyên từ dự án này? ",
    idx: 1100,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        title:
          "Dự án A với tỷ lệ chi phí lợi ích là 0.8, không có tôn chỉ dự án, có 4 nguồn lực",
        idx: 0,
      },
      {
        title:
          ". Dự án B với NPV là 60000$, 12 nguồn lực, và chi phí biến động giữa 1000$ tới 2000$ một tháng",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Dự án C với chi phí cơ hội là 300000$, không có hệ thống kiểm soát dự án, tỷ suất hoàn vốn nội bộ IRR là 12%",
        isKey: false,
      },
      {
        title: "Dự án D với chi phí gián tiếp là 20000$ và 13 nguồn lực",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 1101,
    answers: [
      {
        idx: 0,
        title: "Phạm vi dự án đã thay đổi",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Một nhà cung cấp không kinh doanh nữa và một nhà cung cấp khác cần được tìm thấy",
      },
      {
        title: " Các thiết bị thêm vào cần thiết phải mua",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Hoạt động đường giới hạn thực hiện lâu hơn và cần nhiều giờ lao động để hoàn thành",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một dự án sản xuất có chỉ số thực hiện lịch trình SPI là 0.89 và chỉ số thực hiện chi phí CPI là 0.91. Thông thường, giải thích nào tốt nhất cho tình huống này?",
  },
  {
    title:
      "Mặc dù các bên có liên quan nghĩ rằng có đủ tiền trong ngân sách, dự án thực hiện được 1 nửa và CPI là 0.7. Để xác định nguyên nhân cốt lõi, các bên có liên quan kiểm tra dự án và phát hiện ra ngân sách chi phí dự án đã bị ước tính một cách tương tự. mặc dù các ước tính hoạt động thêm vào ước tính dự án, các bên có liên quan nghĩ rằng có gì đó bị bỏ sót trong khi hoàn thành ước tính. Điều bị bỏ sót ấy là gì?",
    answers: [
      {
        idx: 0,
        title: "Chi phí ước tính được nên được sử dụng để đo CPI",
        isKey: false,
      },
      {
        isKey: false,
        title: "SPI nên được sử dụng, k phải CPI",
        idx: 1,
      },
      {
        title: "Ước tính từ dưới lên nên được sử dụng",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Thông tin lịch sử không được tính đến",
      },
    ],

    idx: 1102,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn là một PM của công ty tư vấn lớn. cấp trên của bạn vừa hỏi ý kiến của bạn trong một quyết định về dự án nào công ty nên theo đuổi. Dự án A có tỷ suất hoàn vốn nội bộ IRR là 12%. Dự án B được dự đoán có tỷ lệ chi phí lợi ích BCR là 1.3. Dự án C có chi phí cơ hội là 75000$. Dự án D có thời gian thu hồi vốn là 6 tháng. Bạn sẽ chọn dự án nào?",
    idx: 1103,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Dự án A",
      },
      {
        title: "Dự án B",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Dự án C",
      },
      {
        isKey: false,
        title: "Dự án D",
        idx: 3,
      },
    ],
  },
  {
    title:
      " You are about to take over a project from another project manager and find out the following information about the project. Activity Z has an early start ES of day 15 and a late start LS of day 20. Activity Z is a difficult activity. Cost performance index CPI is 1.1. Schedule performance index SPI is 0.8. There are 11 stakeholders on the project. Based on this information, which of the following would you be the Most concerned about?",
    answers: [
      {
        title: "Schedule",
        isKey: true,
        idx: 0,
      },
      {
        title: "Float",
        isKey: false,
        idx: 1,
      },
      {
        title: "Cost",
        isKey: false,
        idx: 2,
      },
      {
        title: "The number of available resources",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1104,
  },
  {
    title: " Sự khác nhau giữa đường chuẩn chi phí và ngân sách chi phí là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1105,
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Quản lý tài nguyên dự trữ",
      },
      {
        title: "Dự trữ phát sinh",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Ước tính chi phí dự án",
        idx: 2,
      },
      {
        idx: 3,
        title: "Tài khoản chi phí (cost account?)",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title:
          "Bắt đầu dự án và liên tục tiết kiệm chi phí dự án(look for cost saving)",
        isKey: false,
      },
      {
        isKey: false,
        title: "Nói với đội dự án để cắt giảm 15% từ ước tính của họ ",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: " Thông báo với nhà tài trợ về các hoạt động bị cắt giảm",
      },
      {
        title:
          "Thêm các nguồn tài nguyên với chi phí theo giờ thấp ( low hourly rates)",
        isKey: false,
        idx: 3,
      },
    ],

    idx: 1106,
    title:
      "Bạn cung cấp ước tính chi phí dự án cho nhà tài trợ dự án. Anh ta không hài lòng với ước tính, do anh ta nghĩ rằng giá có thể thấp hơn. Anh ta bảo bạn cắt giảm 15% ước tính dự án. Bạn nên làm gì?",
  },
  {
    idx: 1107,
    title:
      " Khi một sản phẩm hay dịch vụ hoàn tất và đáp ứng yêu cầu của khách hàng tức là:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Chất lượng hoàn thiện",
      },
      {
        title: "Chi phí của chất lượng là cao",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chi phí của chất lượng là thấp",
      },
      {
        idx: 3,
        isKey: false,
        title: " Khách hàng trả giá thấp nhất cho sản phẩm",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Khái niệm của mức độ chất lượng tối ưu có thể đạt được tại điểm mà doanh thu tăng lên từ sự cải tiến sản phẩm bằng với chi phí tăng để bảo đảm nó. Câu này liên  quan đến:",
    answers: [
      {
        title: "Phân tích kiểm soát chất lượng",
        isKey: false,
        idx: 0,
      },
      {
        title: "Phân tích không quan trọng",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Phân tích tiêu chuẩn chất lượng",
        idx: 2,
      },
      {
        isKey: false,
        title: "Phân tích tính thống nhất",
        idx: 3,
      },
    ],
    idx: 1108,
  },
  {
    idx: 1109,
    title:
      " Bạn đang quản lý một dự án 6 tháng và tổ chức họp mặt 1 tuần 2 lần với các bên có liên quan tới dự án. Sau 5.5 tháng làm việc, dự án vẫn theo đúng lịch trình và ngân sách, nhưng các bên có liên quan không \t hài lòng với sản phẩm thu được. Tình huống này sẽ làm chậm 1 tháng để hoàn thành dự án. Quy trình quan trọng nhất để ngăn chặn tình huống này là: ",
    answers: [
      {
        isKey: false,
        title: "Kiểm soát rủi ro ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Kiểm soát lịch trình",
        isKey: false,
      },
      {
        title: "Lên kế hoạch phạm vi ",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Kiểm soát phạm v",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1110,
    title:
      "Ai có trách nhiệm cuối cùng trong việc quản lý chất lượng trong dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Kỹ sư dự án",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "PM",
        isKey: true,
      },
      {
        idx: 2,
        title: "Giám đốc quản lý chất lượng",
        isKey: false,
      },
      {
        idx: 3,
        title: "Nhân viên dự án",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1111,
    answers: [
      {
        title: "Kiểm soát chất lượng thực hiện",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Đảm bảo chất lượng thực hiện",
        idx: 1,
      },
      {
        title: "Lên kế hoạch quản lý",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Phân tính biến động",
        isKey: false,
      },
    ],
    title:
      " Một đội đang sử dụng sơ đồ xương cá để giúp xác định tiêu chuẩn chất lượng nào sẽ được sử dụng trong dự án. Họ đang ở trong quy trình quản lý chất lượng nào?",
  },
  {
    title:
      "Một người quản lý chú ý tới một PM đang tổ chức họp với một vài nhân viên đội dự án và một vài bên có liên quan tới dự án để thảo luận chất lượng dự án. Lịch trình dự án sẽ được nén lại và CPI là 1.1. Họ đã làm việc chăm chỉ trong dự án, đội dự án được thưởng theo hệ thống thưởng của PM và đây là một đội vững chắc. người quản l{ đưa ra giả thuyết là PM không có đủ thời gian để tổ chức họp về chất lượng khi lịch trình không được nén. Điều nào dưới đây mô tả đúng nhất về việc người quản l{ này đã sai?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: true,
        title:
          "Chất lượng được cải thiện dẫn đến gia tăng hiệu suất, tăng hiệu quả chi phí và giảm chi phí rủi ro.",
        idx: 0,
      },
      {
        title:
          "Chất lượng được cải thiện dẫn đến tăng hiệu suất, giảm hiệu quả chi phí và tăng chi phí rủi ro",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Chất lượng được cải thiện dẫn đến tăng hiệu suất, tăng hiệu quả chi phí và tăng chi phí rủi ro",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Chất lượng được cải thiện dẫn đến tăng hiệu suất, giảm hiệu quả chi phí và giảm chi phí rủi ro",
        idx: 3,
      },
    ],
    idx: 1112,
  },
  {
    idx: 1113,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title:
          "Xác định làm thế nào để tăng hiệu quả tổ chức thực hiện hỗ trợ dự án",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Cung cấp những điều căn bản để xem thành công và thất bại của dự án",
      },
      {
        idx: 2,
        isKey: true,
        title: "Là tính chất đặc biệt cho dự án nào được thiết kế và kiểm thử ",
      },
      {
        isKey: false,
        title: "Là tiêu chuẩn mục tiêu phải thỏa mãn",
        idx: 3,
      },
    ],

    title: "Từ góc độ dự án, thuộc tính của chất lượng: ",
  },
  {
    idx: 1114,
    title: "Chất lượng là",
    answers: [
      {
        isKey: false,
        title: "Thỏa mãn và vượt quá kz vọng của khách hàng",
        idx: 0,
      },
      {
        title: "Thêm vào một vài thứ để làm khách hàng thỏa mãn",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Là đơn vị đo xem dự án có thỏa mãn yêu cầu không.",
      },
      {
        idx: 3,
        isKey: false,
        title: "Làm theo mục tiêu của ban lãnh đạo",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Giám định",
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Phân tích quy trình",
      },
      {
        title: "Sơ đồ Pareto",
        isKey: false,
        idx: 2,
      },
      {
        title: "Sơ đồ xương cá",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 1115,
    title: "Điều nào dưới đây không phải là đảm bảo chất lượng? ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Sơ đồ Pareto giúp PM",
    answers: [
      {
        title: "Tập trung vào vấn đề then chốt để cải thiện chất lượng ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Tập trung vào suy nghĩ khuyến khích (stimulate thinking)",
        idx: 1,
        isKey: false,
      },
      {
        title: "Khám phá kết quả mong muốn trong tương lai ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Xác định nếu một quá trình ra ngoài kiểm soát",
        isKey: false,
      },
    ],

    idx: 1116,
  },
  {
    title: "Một sơ đồ điều khiển giúp PM",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Tập trung vào vấn đề then chốt nhất để cải thiện chất lượng",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Tập trung vào suy nghĩ tích khuyến khích (stimulate thinking)",
        isKey: false,
      },
      {
        isKey: false,
        title: "Khám phá kết quả mong muốn trong tương lai",
        idx: 2,
      },
      {
        title:
          "Xác định nếu một quá trình đang hoạt động trong tập các giới hạnn",
        isKey: true,
        idx: 3,
      },
    ],

    idx: 1117,
  },
  {
    answers: [
      {
        isKey: true,
        title: "Mất nhiều thời gian ",
        idx: 0,
      },
      {
        isKey: false,
        title: "Cung cấp nhiều thông tin hơn mong muốn",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Loại trừ lẫn nhau",
      },
      {
        idx: 3,
        title: "Chỉ ra nhiều khuyết điểm ",
        isKey: false,
      },
    ],

    idx: 1118,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Kiểm thử toàn bộ tập hợp sẽ: (testing the entire population would) ",
  },
  {
    title: " Điều nào dưới đây không phải là ví dụ về chi phí không phù hợp? ",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Làm lại (rework) ",
      },
      {
        isKey: true,
        title: "Đào tạo chất lượng",
        idx: 1,
      },
      {
        idx: 2,
        title: "Loại bỏ (scrap)",
        isKey: false,
      },
      {
        title: "Chi phí bảo hành",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 1119,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1120,
    title: "Độ lệch tiêu chuẩn là một thước đo có tính chất: ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Far the estimate is from the highest estimate ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Far the measurement is from the mean",
        idx: 1,
      },
      {
        title: "Correct the sample is",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Much time remains in the project ",
      },
    ],
  },
  {
    idx: 1121,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "What percentage of the total distribution are 3 sigma from the mean equal to? ",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "68.26%",
      },
      {
        isKey: false,
        idx: 1,
        title: "99.99%",
      },
      {
        idx: 2,
        title: "95.46%",
        isKey: false,
      },
      {
        title: "99.73%",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    answers: [
      {
        title:
          "Xác định các hoạt động dự án có tuân theo chính sách của tổ chức hay không",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Xcá định sự không hiệu quả và các chính sách không hiệu quả",
        isKey: false,
      },
      {
        isKey: true,
        title: "Sửa chữa các khiếm khuyết được xác định",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Xcá nhận việc thực hiện của các yêu cầu thay đổi đã được phê chuẩn",
        idx: 3,
      },
    ],
    title:
      " Điều nào dưới đây không phải là thành phần của kiểm tra chất lượng?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1122,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "  Một sơ đồ điều khiển chỉ ra 7 điểm dữ liệu trong một đường thẳng ở cùng 1 bên của điểm trung bình. Điều gì nên được hoàn thành?",
    answers: [
      {
        idx: 0,
        title: "Thực hiện bản thiết kế thử nghiệm",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Điều chỉnh sơ đồ để phản ánh điểm trung bình mới",
      },
      {
        idx: 2,
        isKey: true,
        title: "Tìm một nguyên nhân khác có thể (assignable cause)",
      },
      {
        title: "Chẳng có gì. Đây là luật 7 và không được từ chối.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 1123,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "45%",
      },
      {
        idx: 1,
        isKey: false,
        title: "10%",
      },
      {
        title: "12%",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "0%",
        idx: 3,
      },
    ],
    idx: 1124,
    title:
      "Bạn đang quản lý một dự án và đang trong môi trường đúng thời hạn. Điều này sẽ yêu cầu nhiều chú { hơn, do lượng hàng tồn kho trong môi trường này là:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1125,
    title: "Sơ đồ Ishikawa giúp:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Đặt thông tin vào đúng thứ tự ưu tiên ",
        idx: 0,
      },
      {
        title: "Khám phá đầu ra quá khứ(explore past outcomes)",
        idx: 1,
        isKey: true,
      },
      {
        title: "Chỉ ra trách nhiệm của đội dự án ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Chỉ ra trách nhiệm chức năng ",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1126,
    title:
      "Trong khi lập kế hoạch dự án, điều nào thông thường sẽ có ưu tiên nhất, chất lượng, chi phí hay lịch trình? ",
    answers: [
      {
        idx: 0,
        title:
          " A. Chi phí là quan trọng nhất, sau đó là chất lượng, cuối cùng là lịch trình",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: " B. Chất lượng là quan trọng hơn lịch trình và chi phí",
      },
      {
        title:
          " C. Lịch trình là quan trọng nhất, sau đó là chất lượng, cuối cùng là chi phí",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: " Điều này nên được quyết định tùy mỗi dự án",
      },
    ],
  },
  {
    idx: 1127,
    answers: [
      {
        isKey: false,
        title: "Phân tích chất lượng",
        idx: 0,
      },
      {
        idx: 1,
        title: "Thực hiện đảm bảo chất lượng",
        isKey: false,
      },
      {
        title: "Thực hiện kiểm soát chất lượng",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Lên kế hoạch chất lượng",
        idx: 3,
      },
    ],
    title:
      "Một PM đang sử dụng sơ đồ nhân quả với đội dự án để quyết định các nhân tốt biến đổi sẽ được kết nối ntn với các vấn đề tiềm năng.PM sẽ làm việc trong phần nào của quá trình quản lý chất lượng dự án?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1128,
    answers: [
      {
        idx: 0,
        title: "Kế hoạch quản lý chất lượng  ",
        isKey: true,
      },
      {
        isKey: false,
        title: "Chính sách chất lượng",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sơ đồ kiểm soát ",
      },
      {
        title: "Kế hoạch quản lý dự án",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một PM và đội từ một công ty thiết kế thiết bị đường sắt đang giao nhiệm vụ để thiết kế thiết bị tải đá vào ô tô đường sắt. thiết kế cho phép 2% số đã bị đổ, tổng số lượng lên tới 2 tấn hao hụt mỗi ngày. Người PM nên dẫn chứng kiểm soát chất lượng, đảm bả chất lượng và cải tiến chất lượng trong văn bản nào??",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong khi họp đội dự án, đội dự án thêm vào phạm vi đặc biệt của công việc  thêm do họ xác định rằng nó sẽ làm lợi cho khách hàng. Điều gì là sai trong tình huống này     ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1129,

    answers: [
      {
        idx: 0,
        title:
          "Đội dự án đang tạo thêm lợi ích cho khách hàng nhưng k được trả thêm tiền (gold plating)",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: " B. Những nỗ lực này không nên được hoàn thành trong khi họp",
      },
      {
        isKey: false,
        title:
          "  C. Chẳng có gì sai. Đây là cách để thỏa mãn và vượt quá yêu cầu của khách hàng",
        idx: 2,
      },
      {
        isKey: false,
        title: " Chẳng có gì sai. PM đang kiểm soát dc tình huống này",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Đội dự án vừa tạo ra kế hoạch mô tả cách họ thực hiện chính sách chất lượng. Nó giải quyết cấu trúc hướng tổ chức, trách nhiệm, thủ tục và các thông tin khác về kế hoạch cho chất lượng. nếu thay đổi này trong quá trình thực hiện dự án, kế hoạch nào dưới đây sẽ thay đổi theo?    ",
    idx: 1130,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đảm bảo chất lượng ",
      },
      {
        idx: 1,
        title: "Quản lý chất lượng",
        isKey: false,
      },
      {
        idx: 2,
        title: "Quản lý dự án ",
        isKey: true,
      },
      {
        isKey: false,
        title: "Kiểm soát chất lượng",
        idx: 3,
      },
    ],
  },
  {
    idx: 1131,
    answers: [
      {
        title: " A. Một phần của giám định ISO 9000 ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Để kiểm tra nếu khách hàng đang theo sát quy trình chất lượng.",
        idx: 1,
        isKey: false,
      },
      {
        title: " C. Để xác định các chính sách không phù hợp",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Để kiểm tra tính chính xác nếu chi phí được đội dự án xem xét ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Bạn là một PM cho một dự án hệ thống thông tin lớn khi một người từ phòng chất lượng đến và nói về bắt đầu kiểm tra chất lượng dự án của bạn. Đội dự án, đã chịu áp lực phải hoàn thành dự án nhanh nhất có thể, cảm thấy khó chịu về kiểm tra này. Bạn nên giải thích với đội rằng mục đích của kiểm tra chất lượng là:",
  },
  {
    answers: [
      {
        title:
          " A. Cam đoan với người quản lý cấp cao rằng trong khi lên kế hoạch chất lượng đã xác định dự án sẽ đáp ứng được tiêu chuẩn chất lượng ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Ước tính tương tự sẽ có kết quả trong tương lai ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: " C. Đào tạo đội đảm bảo chất lượng",
        idx: 2,
      },
      {
        title:
          " Kiểm tra kết quả từ các kế hoạch quản lý chất lượng trong quá khứ",
        idx: 3,
        isKey: true,
      },
    ],
    idx: 1132,
    title:
      "Bạn đang trong dự án xây dựng thiết bị mới. Các kết cấu đã được đặt vào vị trí và các ống dẫn nhiệt cũng sẽ được đặt đúng chỗ, khi đó người quản lý cấp cao thông báo với bạn rằng anh ta đang lo lắng dự án không đáp ứng được tiêu chuẩn chất lượng. Bạn nên làm gì trong tình huống này?   ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "Kiểm tra chất lượng",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Lấy mẫu thống kê ",
      },
      {
        idx: 2,
        title: "Biểu đồ Pareto  ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Phân tích xu hướng  ",
      },
    ],
    title:
      " Bạn được hỏi để lựa chọn công cụ và kỹ thuật để thực hiện chương trình đảm bảo chất lượng để bổ sung cho các hoạt động kiểm soát chất lượng đã có. Bạn nên chọn điều nào dưới đây?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1133,
  },
  {
    idx: 1134,
    title:
      " Dự án cài đặt phần mềm mới đang thực hiện. PM đang làm việc với phòng  ban đảm bảo chất lượng để cải thiện sự tin tưởng của mọi người rằng dự án sẽ đáp ứng các tiêu chuẩn chất lượng. điều nào dưới đây họ phải có trước khi bắt đầu quá trình này?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        isKey: false,
        title: "Các vấn đề chất lượng ",
        idx: 0,
      },
      {
        idx: 1,
        title: "Cải thiện chất lượng ",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Hệ thống đo đạc kiểm soát chất lượng ",
      },
      {
        title: "Làm lại công việc (rework) ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 1135,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Dự án bạn đang làm việc có gia tăng chi phí hiệu quả, tăng hiệu suất và tăng tinh thần, chí khí(morale). Điều gì có thể là nguyên nhân cho các thay đổi này?   ",
    answers: [
      {
        idx: 0,
        title: "Mục tiêu dự án được đáp ứng khi thực hiện ",
        isKey: false,
      },
      {
        idx: 1,
        title: "Tăng chất lượng ",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Ban lãnh đạo tập trung vào chính sách ngăn chặn ",
      },
      {
        title: "Tưởng thưởng (reward) cho nỗ lực của các các nhân  ",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM vừa đảm nhiệm dự án từ một PM khác trong giai đoạn thực thi dự án. Người PM trước đó đã tạo ra ngân sách dự án, xác định các yêu cầu truyền thông và đang chuẩn bị hoàn thành gói công việc. Người PM mới nên làm điều gì tiếp theo?   ",
    answers: [
      {
        idx: 0,
        title: " A. Kết hợp thực hiện các gói công việc ",
        isKey: false,
      },
      {
        idx: 1,
        title: " B. Xác định các tiêu chuẩn chất lượng",
        isKey: true,
      },
      {
        title: " C. Bắt đầu xác định rủi ro ",
        idx: 2,
        isKey: false,
      },
      {
        title: "Thực hiện kế hoạch quản lý dự án ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 1136,
  },
  {
    idx: 1137,
    answers: [
      {
        title: "Quản lý chất lượng   ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thực hiện đảm bảo chất lượng ",
      },
      {
        title: "Lên kế hoạch chất lượng  ",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Thực hiện kiểm soát chất lượng  ",
      },
    ],

    title:
      "Một dự án đang phải đối mặt với 1 thay đổi lớn đối với sản phẩm đầu ra. Nếu PM phải quyết định tiêu chuẩn chất lượng nào là có liên quan tới thay đổi, PM sẽ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1138,
    title:
      "Vào cuối dự án, PM xác định dự án sẽ thêm 4 vùng chức năng và 3 vùng hiệu năng. Khách hàng bày tỏ sự hài lòng với dự án. Sự thành công của dự án có nghĩa là:",

    answers: [
      {
        idx: 0,
        title: "Dự án không đủ tiêu chuẩn thành công",
        isKey: false,
      },
      {
        title:
          "Dự án không thành công vì nó thực hiện thêm những điều khách hàng muốn mà k được trả thêm tiền (gold plating)",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Dự án không thành công do khách hàng hài lòng nghĩa là họ phải trả thêm tiền cho công việc",
      },
      {
        isKey: false,
        title:
          "Dự án thành công do đội đã có cơ hội học các vùng chức năng mới và khách hàng hài lòng ",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thực hiện đảm bảo chất lượng",
      },
      {
        isKey: false,
        idx: 1,
        title: "Kiểm soát dự án",
      },
      {
        isKey: true,
        idx: 2,
        title: "Thực hiện kiểm soát chất lượng",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lên kế hoạch chất lượng ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Trong giai đoạn thực thi dự án, một nhân viên đội dự án thông báo với PM rằng một gói công việc không đáp ứng được tiêu chuẩn chất lượng, và cô ta tin rằng gói công việc này không thể đáp ứng được. PM họp với các bên có liên quan để phân  tích tình huống. PM này đang ở trong quy trình quản lý chất lượng nào?   ",
    idx: 1139,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thời gian trễ trong các đường khác",
      },
      {
        isKey: true,
        title: "Sự xuất hiện đường tời hạn mới.   ",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Các nguồn lực được chỉ định cho các nhiệm vụ khác trên đường tới hạn  ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Nhiệm vụ dài nhất còn lại trong kế hoạch  ",
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1140,
    title:
      "PM chú ý rằng các hoạt động dự án đang được hoàn thành bởi 1 phòng ban đều làm việc không đáng kể so với kế hoạch. Đến thời hạn, không có hoạt động hay gói công việc nào đi đúng đường tới hạn, cũng như nó ảnh hưởng tới kế hoạch chuỗi tới hạn. PM khó chịu vì vấn đề này. Khi 4/5 hoạt động trong đường tới hạn phải được phòng ban này thực hiện. sau khi gọi 3 cuộc, cuối cùng, PM quyết định trái với người lãnh đạo của phòng ban này và xác định điều gì đang xảy ra. Cuộc hội thoại này lâu do cả 2 nói 2 ngôn ngữ khác nhau và họ cố gắng giao tiếp bằng tiếng Pháp(ngôn ngữ chung). Để giúp việc giao tiếp đơn giản hơn, PM thường xuyên yêu cầu người lãnh đạo của phòng ban này nhắc lại những gì đã nói. Anh ta nói với nhân viên của mình tuân theo chính sách của công ty và yêu cầu 2 mức kiểm thử. Trong quá trình hội thoại, anh ta cũng nhận xét khiến cho người PM tin rằng chính sách bao gồm quá nhiều công việc. Đây là lần thứ 4 PM nghe những nhận xét như thế. PM nên làm gì tốt nhất?",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Tạo ra kế hoạch quản lý truyền thông tốt hơn và yêu cầu chỉ một ngôn ngữ chính thức trong dự án và phải có người dịch ngay lập tức  ",
      },
      {
        isKey: false,
        title:
          "Liên lạc với ai đó trong phòng ban, người này cũng nói ngôn ngữ mẹ đẻ của PM tốt để xác nhận ý kiến của người lãnh đạo phòng ban đó  ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Tìm xem nếu hành động tiếp theo có nên ước tính lại không   ",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Làm việc với hiệu quả gia tăng của tổ chức thực hiện bằng cách khuyến khi sự cải thiện của chính sách bằng cách sử dụng các câu hỏi  ",
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1141,

    title:
      "Điều chỉnh các nhiệm vụ được phân bổ khác nhau trong dự án để duy trì khối lượng nguồn lực phù hợp được gọi là:",
  },
  {
    title:
      " Một PM bị tràn ngập với các vấn đề trong dự án của anh ấy. Anh ta xác định nguyên nhân gốc rễ của vấn đề theo thứ tự để xác định nên tập trung vào đâu. Công cụ nào dưới đây là tốt nhất để anh ta sử dụng?   ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Biểu đồ Pareto",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Kỹ thuật giải quyết xung đột ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Sơ đồ xương cá ",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Phân tích xu hướng  ",
      },
    ],
    idx: 1142,
  },
  {
    title:
      "Là một PM, bạn đang chuẩn bị phương pháp để quản lý chất lượng. Bạn đang tìm kiếm phương pháp có thể chứng minh mối quan hệ giữa các sự kiện và kết quả kéo theo. Bạn muốn sử dụng một phương pháp để mô hình các sự kiện này và là nguyên nhân cho ảnh hưởng xấu tới chất lượng. Bạn sẽ sử dụng sơ đồ nào dưới đây để đạt được mục đích của mình?   ",
    idx: 1143,
    answers: [
      {
        idx: 0,
        title: "Biểu đồ tần số",
        isKey: false,
      },
      {
        title: "Sơ đồ Pareto  ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Sơ đồ Ishikawa ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Sơ đồ điều khiển  ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Tất cả những điều sau đều là sức mạnh xuất phát từ PM, ngoại trừ:   ",

    answers: [
      {
        title: "Luật chính thống (formal)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Hệ thống thưởng (reward) ",
        idx: 1,
      },
      {
        idx: 2,
        title: "Hệ thống phạt(penalty)  ",
        isKey: false,
      },
      {
        title: "Chuyên môn(expert)  ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1144,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Thỏa mãn sinh lý (physiological satisfaction)",
      },
      {
        title: "Đạt được sự sống còn   ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Kết hợp ",
      },
      {
        idx: 3,
        isKey: true,
        title: "Lòng tự trọng   ",
      },
    ],
    idx: 1145,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title: "Điểm cao nhất trong hệ thống phân cấp sự cần thiết Maslow là:    ",
  },
  {
    answers: [
      {
        title: "Thúc đẩy từ bên trong",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: " B. Giấu đi thứ tốt nhất (hide the best) ",
        isKey: false,
      },
      {
        isKey: true,
        title:
          " C. Chuyển nhân viên sang phòng quản lý dự án do họ làm tốt trong chuyên môn của họ ",
        idx: 2,
      },
      {
        title:
          " Chuyển nhân viên sang phòng quản lý dự án do họ được đào tạo về quản lý dự án ",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 1146,

    title: " Hiệu ứng hào quang (halo affect) liên quan tới xu hướng:   ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Một chướng ngại vật đối với đội dự án trong một tổ chức hướng ma trận là:   ",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Việc tổ chức đội dự án là tập trung vào chuyên môn ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title:
          "Các thành viên của đội đang mượn các nguồn lực và khó động viên  ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Đội đang quá tập trung ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Đội quá lớn và khó kiểm soát",
      },
    ],
    idx: 1147,
  },
  {
    title:
      "  Các điều dưới đây là mối quan tâm đặc trưng của thành viên đội dự án hướng ma trận (matrixed team members), ngoại trừ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1148,
    answers: [
      {
        title:
          "Tự hỏi ai sẽ là người sử dụng khả năng(or định giá – evaluation) của họ ",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Làm việc cho nhiều thủ trưởng  ",
      },
      {
        isKey: false,
        title: "Phát triển trách nhiệm  ",
        idx: 2,
      },
      {
        isKey: true,
        title: "Tính toán lợi ích biên khi làm việc trong nhiều dự án  ",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Vũ lực (forcing)",
      },
      {
        title: "Hòa nhã làm ổn thỏa (smoothing)   ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thỏa hiệp ",
      },
      {
        title: "Giải quyết vấn đề",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 1149,
    title:
      "Điều nào dưới đây trong kỹ thuật giải quyết mâu thuẫn sẽ sinh ra giải pháp lâu dài nhất",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tổ chức hướng dự án (projectized-org)",
      },
      {
        title: "Tổ chức hướng chức năng(functional-org) ",
        isKey: false,
        idx: 1,
      },
      {
        title: "Tổ chức theo đường(line-org) ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Tổ chức theo ma trận(matrix-org)  ",
        isKey: true,
      },
    ],
    title:
      "Loại hình tổ chức nào là tốt nhất trong việc quản l{ độ phức tạp của dự án liên quan đến các nỗ lực bên ngoài?",
    idx: 1150,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Tính cách cá nhân ",
        isKey: false,
      },
      {
        isKey: true,
        title: "Các nguồn lực  ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Chi phí   ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Việc quản lý  ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nguyên nhân thông thường của xung đột trong dự án là lịch trình, các ưu tiên của dự án và:",
    idx: 1151,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giải quyết vấn đề ",
      },
      {
        title: "Vũ lực",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Sự rút lui (withdrawal).",
      },
      {
        isKey: false,
        title: "Thỏa hiệp",
        idx: 3,
      },
    ],
    title:
      "Kỹ thuật giải quyết mâu thuẫn nào được PM sử dụng khi anh ta noi: “tôi k thể giải quyết vấn đề ngay lúc này” ?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1152,
  },
  {
    idx: 1153,

    title:
      "Biểu đồ nguồn lực nào chỉ ra điều mà ma trận gán trách nhiệm không có? ",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Thời gian ",
      },
      {
        isKey: false,
        title: "Hoạt động  ",
        idx: 1,
      },
      {
        title: "Tương giao  ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Người phụ trách mỗi hoạt động ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Bạn được phân công làm PM cho một dự án truyền thông lớn. Dự án được hoàn thành trong 1 năm và đã đi được nửa đường. Đội dự án bao gồm 5 người bán và 20 nhân viên của công ty bạn. Bạn muốn biết ai là người có trách nhiệm với công việc trong dự án. Bạn sẽ tìm thấy các thông tin này ở đâu?",
    answers: [
      {
        title: "Ma trận gán trách nhiệm ",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Sơ đồ nguồn tài nguyên ",
      },
      {
        isKey: false,
        title: "Sơ đồ đường (bar chart)    ",
        idx: 2,
      },
      {
        title: "Sơ đồ tổ chức dự án   ",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 1154,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        title: "PM",
        isKey: false,
        idx: 0,
      },
      {
        title: "Giám đốc chức năng ",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Đội dự án   ",
      },
      {
        idx: 3,
        isKey: false,
        title: "Nhà tài trợ dự án  ",
      },
    ],
    idx: 1155,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Trong giai đoạn lập kế hoạch dự án ở một tổ chức hướng ma trận, PM xác định rằng sẽ cần thêm nguồn nhân lực. PM sẽ yêu cầu các nguồn lực này từ:  ",
  },
  {
    idx: 1156,
    title:
      "Một PM phải công bố lịch trình dự án. Các hoạt động, ngày bắt đầu, kết thúc và các nguồn lực đã được xác định. Người PM nên làm gì tiếp theo?",
    answers: [
      {
        title:
          "Phân phối lịch trình dự án dựa theo kế hoạch quản lý truyền thông  ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Xác nhận sự có sẵn của các nguồn lực   ",
        idx: 1,
        isKey: true,
      },
      {
        title:
          "Tinh chỉnh kế hoạch quản lý dự án để phản ảnh các thông tin chi phí chính xác hơn   ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Công bố sơ đồ đoạn giải thích đường thời gian (timeline)   ",
        isKey: false,
      },
    ],

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Trong mỗi buổi họp đội dự án, PM hỏi mỗi thành viên đội dự án mô tả công việc họ đang làm và PM phân công các công việc mới cho mỗi thành viên. Thời  gian kéo dài của buổi họp tăng do có nhiều công việc khác nhau được phân công. Điều này có thể xảy ra do tất cả các nguyên nhân dưới đây, ngoại trừ:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1157,

    answers: [
      {
        idx: 0,
        title: "Sự thiếu bảng WBS",
        isKey: false,
      },
      {
        isKey: false,
        title: "Sự thiếu ma trận gán trách nhiệm  ",
        idx: 1,
      },
      {
        title: "Sự thiếu cân bằng nguồn lực ",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        title: "Sự thiếu liên quan của đội dự án trong khi lập kế hoạch dự án",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "Ám chỉ (referent)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Chuyên môn (expert) ",
        idx: 1,
        isKey: true,
      },
      {
        title: "Hình phạt (penalty)  ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Luật chính thức (formal)",
      },
    ],
    title:
      "Bạn là một PM đứng đầu một dự án liên chức năng trong môi trường ma trận yếu. không có thành viên nào trong đội dự án báo cáo với bạn một cách hữu dụng và bạn không có khả năng để trực tiếp tưởng thưởng cho sự làm việc của họ. dự án khó, kéo theo ràng buộc nghiêm ngặt về thời gian và các thách thức trong quản lý chất lượng. Loại hình sức mạnh quản lý dự án nào dưới đây sẽ có hiệu quả nhất trong tình huống này? ",
    idx: 1158,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      " Một nhân viên dự án không làm việc tốt trong dự án do cô ấy thiếu kinh nghiệm trong công việc phát triển hệ thống. không có sẵn ai có đủ điều kiện để làm việc này. Đối với PM, giải pháp nào là tốt nhất ?",
    idx: 1159,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Tham khảo ý kiến các giám đốc chức năng để xác định động cơ hoàn thành dự án cho thành viên đội dự án ",
      },
      {
        isKey: false,
        idx: 1,
        title: "Thay người mới có nhiều kỹ năng hơn để phát triển công việc.  ",
      },
      {
        title: "Sắp xếp để nhân viên này được đào tạo ",
        isKey: true,
        idx: 2,
      },
      {
        title: "Cấp phát một vài nguồn lịch trình dự trữ ",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 1160,
    title:
      "Một dự án có một vài đội. Đội C đã một lần không kịp deadline trong quá khứ. Điều này là nguyên nhân khiến đội D phải hủy đường tới hạn một vài lần. Với tư cách là ng lãnh đạo của đội D, bạn nhận được thông tin rằng deadline tiếp theo có thể sẽ không kịp. bạn nên gặp và trao đổi với:",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        title: "Người quản lý của đội D ",
        isKey: false,
      },
      {
        title: "Chỉ riêng PM ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "PM và ban lãnh đạo  ",
      },
      {
        idx: 3,
        title: "PM và đội trưởng đội C ",
        isKey: true,
      },
    ],
  },
  {
    idx: 1161,
    answers: [
      {
        title:
          "PM nên lắng nghe sự khác biệt trong quan điểm, xác định lựa chọn tốt nhất và thực hiện nó ",
        isKey: false,
        idx: 0,
      },
      {
        title:
          "PM nên trì hoãn các thảo luận, gặp gỡ riêng từng người và xác định cách tiếp cận tốt nhất.",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "PM nên lắng nghe sự khác biệt trong quan điểm, khuyến khích các thảo luận logic và tạo điều kiện cho thỏa thuận",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "PM nên giúp đội dự án tập trung vào khía cạnh thích hợp trong ý kiến của họ và xây dựng sự thống nhất bằng cách sử dụng kỹ thuật ",
      },
    ],
    title:
      " Dự án mới làm hứng khởi cả PM và đội dự án. Đây là lần đầu tiên người PM được phân công vai trò là PM. Đội có cảm giác họ có khả năng hoàn thành công việc mà chưa bao giờ làm trước đó. Đội gồm 29 người góp phần mô tả sản phẩm và đội gồm 9 chuyên gia nhiều kinh nghiệm chuyên môn. Trong quá trình lên kế hoạch, 3 nhân viên có chuyên môn cao đã không đồng ý về phạm vi của 2 sản phẩm. một ng chỉ ra rằng bản nháp WBS nên thêm 2 gói công việc. một người nói rằng gói công việc liên quan không nên được thực hiện. người thứ 3 đồng ý với 2 người trên. PM nên giải quyết xung đột này ntn? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      "Dự án vừa bắt đầu và bao gồm nhân lực từ 14 phòng ban khác nhau. Tôn chỉ dự án được k{ bởi một người và bao gồm hơn 30 yêu cầu chính phải được đáp ứng trong dự án. Nhà tài trợ thông báo với PM rằng SPI phải được giữ trong khoảng 0.95 và 1.1. một vài phút điều tra dẫn đến xác định được 34 bên có liên quan, và mục tiêu lịch trình đã có ràng buộc. PM vừa mới được tuyển dụng. loại quyền lực quản lý dự án nào dưới đây là tốt nhất để giúp PM có được sự hợp tác từ những người khác?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    idx: 1162,
    answers: [
      {
        title: "Luật chính thức ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Tư vấn, tham khảo (referent) ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Luật phạt",
        idx: 2,
      },
      {
        title: "Chuyên môn",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1163,

    answers: [
      {
        idx: 0,
        title: "Làm theo cách của PM",
        isKey: false,
      },
      {
        idx: 1,
        title: "Mọi người hãy bình tĩnh để hoàn thành công việc",
        isKey: false,
      },
      {
        title:
          "Hãy giải quyết vấn đề này một lần nữa vào tuần sau khi mọi người đều bình tĩnh ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Hãy thực hiện các kiểm thử giới hạn trước khi thực hiện và kết thúc kiểm thử sau khi cài đặt",
      },
    ],
    title:
      " PM đang cố gắng giải quyết tranh chấp giữa 2 nhân viên dự án. Một ng nói rằng hệ thống nên được tích hợp trước khi kiểm thử, và người còn lại có ý kiến rằng ủng hộ việc mỗi hệ thống nên được kiểm thử trước khi tích hợp. Dự án bao gồm hơn 30 người, và 12 hệ thống cần phải tích hợp. nhà tài trợ yêu cầu rằng việc tích hợp phải được thực hiện đúng thời điểm. tuyên bố nào của PM là tốt nhất để giải quyết mâu thuẫn này? ",
  },
  {
    title:
      "Một PM đang trong giai đoạn thực thi dự án khi một bên có liên quan đề nghị một thay đổi lớn. thay đổi này sẽ dẫn đến sửa chữa lớn lần thứ 3 của dự án. Vào  cùng thời điểm, PM khám phá ra một gói công việc lớn của được hoàn thành do một thủ trưởng đã chuyển nhân viên của anh ta sang một dự án khác có mức độ ưu tiên cao hơn. Ai là người thích hợp nhất để PM xác định các vấn đề này cùng? ",
    idx: 1164,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Đội dự án",
      },
      {
        isKey: false,
        idx: 1,
        title: "Người quản lý cấp cao",
      },
      {
        isKey: false,
        idx: 2,
        title: "Khách hàng ",
      },
      {
        title: "Nhà tài trợ",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Làm việc trong một dự án đang thực hiện khi PM chợt nghe 2 nhân viên cãi nhau về tập hợp các hướng dẫn. PM điều tra và khám phá rằng các hướng dẫn cho việc xây dựng móng bên tông đang được đổ được dịch sai giữa 2 ngôn ngữ khác nhau đang được sử dụng trong dự án. Điều nào dưới đây là tốt nhất đối với PM để làm đầu tiên? ",
    answers: [
      {
        idx: 0,
        title:
          "Lấy hướng dẫn được dịch bởi một bên tin cậy và nhiều kinh nghiệm",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Tìm kiếm cho các ảnh hưởng về chất lượng của việc dịch sai hướng dẫn đổ móng",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Làm đội dự án chú ý tới vấn đề này và hỏi họ tìm kiếm các lỗi khác của bản dịch ",
      },
      {
        title:
          "Thông báo với nhà tài trợ về vấn đề trong báo cáo dự án tiếp theo.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 1165,
  },
  {
    idx: 1166,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Rút lui (withdrawing)",
      },
      {
        idx: 1,
        title: "Trực tiếp",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tổ chức(organizing)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Kiểm soát ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Kỹ thuật giải quyết xung đột có thể được sử dụng trong dự án bao gồm: đối đầu, làm bình lặng (smoothing), vũ lực và: ",
  },
  {
    idx: 1167,
    title:
      "Việc thực hiện dự án có CPI=1.03 và SPI=1. Có 14 nhân viên và mỗi nhân viên đều có đầu vào trong kế hoạch quản lý dự án cuối cùng. Khách hàng đồng ý 3 sản phẩm bàn giao hoàn thành cho đến nay mà k có phàn nàn và ma trận gán trách nhiệm không thay đổi từ khi dự án bắt đầu. dự án đang được hoàn thành trong môi trường ma trận và không có hợp đồng nào thêm vào dự án. Nhà tài trợ hài lòng với trạng thái của dự án, một nhân viên luôn phàn nàn về việc công việc dự án của anh ta khá tốn thời gian. Điều nào dưới đây là tốt nhất cho PM thực hiện?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Xem xét lại hệ thống thưởng của dự án",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Cố gắng cải thiện hiệu năng lịch trình của dự án",
      },
      {
        isKey: false,
        title: "Gặp khách hàng để cố gắng kéo dài tiến độ",
        idx: 2,
      },
      {
        idx: 3,
        title: "Giành lấy văn bản chấp nhận chính thức từ khách hàng",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Dự án đang được thử thách quản lý. Mỗi người bị thúc giục để hoàn thành dự án đúng thời hạn. Không may, sự căng thẳng tăng lên đến nỗi mỗi cuộc họp đội dự án đều trở thành chiến trường cãi nhau và có rất ít công việc được hoàn thành trong buổi họp. một nhân viên yêu cầu được vắng mặt trong các buổi họp tiếp theo, vì mng làm anh ta bực mình. Trong khi đó, nhà tài trợ yêu cầu được tham dự để hiểu rõ hơn dự án  đang được thực hiện ntn và các vấn đề liên quan để hoàn thành dự án, và khách hàng bắt đầu thảo luận về thêm phạm vi vào dự án. Trong tình huống này, PM tốt nhất nên làm gì?   ",
    idx: 1168,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Hỏi nhà tài trợ nếu các thông tin cần thiết nên được gửi trong báo cáo hơn là nhà tài trợ tham gia vào buổi họp",
      },
      {
        idx: 1,
        title:
          "Thông báo với đội ai muốn được vắng mặt buổi họp về nguyên tắc của truyền thông trong các buổi họp như thế này",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Tạo ra một luật mới cho các buổi họp và thông báo tới đội dự án",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Chuẩn bị bài tập xây dựng đội mà kéo theo tất cả các thành viên trong đội tham gia ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Làm thế nào để mỗi nhân viên thực hiện công việc trong dự án",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Một ước tính của sự hiệu quả của đội trong dự án ",
      },
      {
        title: "Nỗ lực xây dựng đội dự án ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Giảm tỷ lệ doanh thu nhân viên",
        isKey: false,
      },
    ],
    title:
      "Đánh giá hiệu quả dự án khác với hành động đánh giá hiệu năng đội dự án ở chỗ đánh giá hiệu quả dự án tập trung vào:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1169,
  },
  {
    title:
      "Một PM có 1 vấn đề phức tạp để giải quyết và tạo quyết định về cái gì cần thiết để làm. Một vài tháng sau, vấn đề lại xuất hiện trở lại. PM đã KHÔNG làm gì trước đó?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Phân tích rủi ro đúng cách ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Xác nhận rằng quyết định đã giải quyết vấn đề ",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Có sự phê chuẩn của nhà tài trợ dự án trong quyết định đó  ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Sử dụng sơ đồ Ishikawa",
      },
    ],

    idx: 1170,
  },
  {
    answers: [
      {
        title: "PM không hiểu nguyên lý Herzberg",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title:
          "Dự án đang chi tiêu ít hơn nó nên tiêu tốn, PM nên bắt đầu theo dõi chi phí một cách cẩn thận ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Xem xét lại hiệu năng nên có để tìm thêm các điều chỉnh khác",
      },
      {
        idx: 3,
        isKey: false,
        title:
          "PM nên sử dụng sự đánh giá tốt để xác định các thay đổi quan trọng",
      },
    ],
    title:
      " CPI=1.02, tỷ lệ chi phí lợi ích là 1.7 và vòng cuối cùng xem xét lại hiệu năng đã được xác định là cần thêm một vài điều chỉnh. Đội dự án chuyển địa điểm sang tòa nhà mới khi dự án bắt đầu. mỗi người nhận xét rằng họ đã phấn khích thế nào khi họ được sử dụng thiết bị mới. nhà tài trợ cung cấp các hỗ trợ thích đáng cho dự án và một vài rủi ro không xác định đã xảy ra. Trong nỗ lực để cải thiện hiệu năng, PM spends part of the project budget on new chairs for the team members and adss the term “senior” to each team member’s job title. Điều nào dưới đây là đúng khi nói về dự án này của PM? ",
    idx: 1171,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn vừa tìm ra một nhà thầu phụ chính cho dự án của bạn đã cung cấp hàng chậm tiến độ. Nhà thầu phụ này tiếp cận với bạn và yêu cầu tiếp tục chấp nhận hàng sẽ bị chậm nhưng sẽ được giảm 1 phần giá thành. Lời mời chào này là một ví dụ về:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Đối đầu ",
      },
      {
        isKey: true,
        idx: 1,
        title: "Thỏa hiệp ",
      },
      {
        idx: 2,
        isKey: false,
        title: "Làm bình lặng (smoothing)",
      },
      {
        idx: 3,
        title: "Vũ lực ",
        isKey: false,
      },
    ],
    idx: 1172,
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Ngôn ngữ, lời nói (verbal) ",
      },
      {
        title: "Văn bản (written)",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title: "Chính thức (formal) ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Phi ngôn ngữ (nonverbal) ",
        idx: 3,
      },
    ],

    title:
      " Phần lớn sử dụng của truyền thông ……………… phần lớn giống như giúp đỡ trong giải quyết các vấn đề phức tạp",
    idx: 1173,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    title:
      " Bảng WBS có thể là một giúp đỡ hiệu quả cho truyền thông trong các tìnhhuống nào?",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Trong nội bộ đội dự án ",
      },
      {
        title: "Trong nội bộ tổ chức",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Ngoài nội bộ với khách hàng",
      },
      {
        isKey: true,
        idx: 3,
        title: "Trong và ngoài nội bộ dự án",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1174,
  },
  {
    title: " Điều nào dưới đây giống với kết quả của truyền thông khối nhất?",
    answers: [
      {
        idx: 0,
        title: "Dự án bị chậm tiến độ  ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Tăng thêm mức độ tin cậy ",
      },
      {
        isKey: true,
        idx: 2,
        title: "Xảy ra các mâu thuẫn ",
      },
      {
        title: "Người quản trị cấp trung không hài lòng",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 1175,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1176,
    title: "Truyền thông thường được nâng cao khi người gửi……………… người nhận:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        title: "Nói chuyện ",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Sử dụng ngôn ngữ cơ thể khi nói chuyện ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Nói chuyện 1 cách chậm rãi ",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Chỉ ra các quan điểm có liên quan",
      },
    ],
  },
  {
    title: "Sự phù hợp của văn bản chính thức với khách hàng được yêu cầu khi:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các mối nguy hại được loại bỏ",
      },
      {
        idx: 1,
        title:
          "Khách hàng yêu cầu các công việc thêm vào nhưng không có trong hợp đồng ",
        isKey: true,
      },
      {
        title:
          "Dự án có lịch trình k đúng thời hạn và bao gồm thay đổi đường tới hạn ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Dự án vượt quá kinh phí",
        isKey: false,
      },
    ],

    idx: 1177,
  },
  {
    idx: 1178,
    title:
      "Một PM có vấn đề với hiệu năng của đội dự án. Loại hình truyền thông nào sẽgiúp PM xác định vấn đề? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "Văn bản truyền thông chính thức ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Lời nói (verbal) truyền thông chính thức ",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Văn bản truyền thông không chính thức ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Lời nói truyền thông không chính thức ",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Văn bản truyền thông chính thức ",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Lời nói (verbal) truyền thông chính thức ",
      },
      {
        isKey: false,
        idx: 2,
        title: "Văn bản truyền thông không chính thức",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lời nói truyền thông không chính thức ",
      },
    ],

    title: "Truyền thông bên dưới hợp đồng nên hướng về:",
    idx: 1179,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1180,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Văn bản truyền thông chính thứct. ",
      },
      {
        isKey: false,
        title: "Lời nói (verbal) truyền thông chính thức ",
        idx: 1,
      },
      {
        isKey: false,
        title: "Văn bản truyền thông không chính thức",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lời nói truyền thông không chính thứ",
      },
    ],

    title: "Báo cáo trạng thái dự án là ví dụ về loại hình truyền thông nào?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title: "Ít quan trọng",
        idx: 0,
      },
      {
        isKey: true,
        title: "Rất quan trọng",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Quan trọng chỉ khi mục tiêu chi phí và lịch trình được kéo theo",
      },
      {
        title: "Quan trọng chỉ khi chắc rằng bạn muốn thương lượng thành công ",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Khi một PM đang bận thương lượng, kỹ năng truyền thông bằng phi ngôn ngữ là ",

    idx: 1181,
  },
  {
    idx: 1182,

    title:
      "Một dự án lớn về viễn thông trong 1 năm đã đi được nửa đường khi bạn tiếp quản vị trí PM từ 1 ng khác. Dự án kéo theo 3 người bán khác nhau và một đội dự án gồm 30 người. bạn muôn xem các yêu cầu truyền thông dự án và kỹ thuật nào được sử dụng để giúp đỡ trong truyền thông. Bạn sẽ tìm thấy nó ở đâu? ",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Kế hoạch quản lý dự án ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Kế hoạch phân phối thông tin",
      },
      {
        isKey: false,
        title: "Sơ đồ đoạn (bar chart)",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Kế hoạch quản lý truyền thông",
      },
    ],
  },
  {
    idx: 1183,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Xác định tại sao bên có liên quan đó không nhận được thông tin và cho anh ta biếtkhi nó đã được công bố",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Hỏi giám đốc chức năng xem tại sao bên có liên quan không hiểu trách nhiệmcủa mình",
      },
      {
        isKey: true,
        title:
          "Xem xét lại kế hoạch quản lý truyền thông và thực hiện sửa lại nếu cần thiết",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Xác định tình huống trong buổi họp ủy ban hướng dẫn lần tới để những ngườicòn lại không bỏ sót các thông tin thay đổi được công bố. ",
        isKey: false,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Thông tin dự án đã được phân phối dựa theo kế hoạch quản lý truyền thông. Một vài sản phẩm của dự án đã thay đổi tuân theo kế hoạch quản lý dự án. Một bên có liên quan tỏ ra ngạc nhiên với PM khi nghe thấy các thay đổi đã được công bố về sản phẩm dự án. Tất cả các bên có liên quan đều nhận được thông báo về thay đổi. PM nên làm gì? ",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    answers: [
      {
        title: "7 ",
        idx: 0,
        isKey: false,
      },
      {
        title: "10",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "12",
        idx: 2,
      },
      {
        isKey: false,
        title: "16",
        idx: 3,
      },
    ],
    idx: 1184,
    title:
      "Truyền thông là chìa khóa thành công của dự án. Với tư cách là PM, bạn có 3 bên có liên quan cần phải giao tiếp. bạn có 6 kênh truyền thông. Một bên có liên quan mới được thêm vào và bạn cũng phải giao tiếp với anh ta. Như vậy có bao nhiêu kênh truyền thông bạn đang có bi h?",
  },
  {
    title:
      " 2 nhân viên đang cãi nhau về điều gì cần làm để hoàn thành gói công việc.Nếu PM muốn biết chuyện gì đang xảy ra, cô ấy nên chú ý nhất vào:",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Điều gì đã được nói ra và khi nào ",
      },
      {
        title: "Điều gì đã được nói ra, ai nói và thời gian nói ",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Cách nói riêng của mỗi người và điều gì đã được nói ra",
        isKey: false,
      },
      {
        title:
          "Mức độ và tông giọng của mỗi người(nói từ từ hay quát vào mặt nhau J) ) vàcách nói riêng của mỗi người. ",
        isKey: true,
        idx: 3,
      },
    ],
    idx: 1185,
  },
  {
    title:
      "Một PM có một đội dự án bao gồm các nhân viên từ 4 quốc gia. Dự án rất quan trọng đối với công ty, và PM có liên quan tới thành công của dự án. Thời gian của dự án là chấp nhận được. Loại phương pháp truyền thông nào anh ta nên sử dụng?",

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Lời nói không chính thức",
      },
      {
        title: "Văn bản chính thức",
        isKey: true,
        idx: 1,
      },
      {
        title: "Lời nói chính thức",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Văn bản không chính thức ",
      },
    ],
    idx: 1186,
  },
  {
    idx: 1187,

    answers: [
      {
        title: "Thông tin lịch sử ",
        isKey: false,
        idx: 0,
      },
      {
        title: "Sử dụng các nhà cung cấp bên ngoài.  ",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Các quy trình kiểm soát thay đổi. ",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Các yêu cầu mức độ kỹ năng nguồn nhân lực",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Nhân tố nào có ảnh hưởng lớn nhất tới chi phí lao động theo ước tính trên đơn vị cho dự án. ",
  },
  {
    title:
      "Buổi họp tiến trình dự án không diễn ra tốt đẹp. mọi người nói tất cả mọi lúc, có nhiều ngừoi không tham gia vào và có nhiều chủ đề được thảo luận ngẫu nhiên. Luật nào dưới đây cho buổi họp hiệu quả đã không được tuân theo? ",
    answers: [
      {
        isKey: false,
        title:
          "Sự tập trung lịch sự và cân nhắc của mỗi cá nhân, sự điều khiển ai sẽ được nói ",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Lịch trình buổi họp",
      },
      {
        idx: 2,
        title:
          "Họp có mục đích, với những người phù hợp tham gia vào buổi họp ",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Tạo ra và công bố một vấn đề và một tập các luật để điều khiển buổi họp ",
        idx: 3,
      },
    ],

    idx: 1188,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1189,
    answers: [
      {
        isKey: false,
        title: "Trạng thái công việc(work status)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Tiến trình (progress)",
      },
      {
        title: "Dự báo(forecast)",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Truyền thông  ",
        idx: 3,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Bạn vừa được phân công là PM cho một dự án sản xuất lớn. dự án 1 năm này đã thực hiện được 1 nửa. nó kéo theo 5 người bán và 20 thành viên trong công ty tham gia vào đội dự án. Bạn muốn xem xét lại thật nhanh dự án đang tiến triển tới đâu. Báo cáo nào dưới đây là có ích nhất để tìm những thông tin như vậy?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: " A. Yêu cầu nhân viên lặp lại những gì PM nói",
      },
      {
        title:
          "Xem xét lại danh sách thông tin liên lạc của tất cả các bên có liên quan ",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Yêu cầu nhân viên tìm kiếm các yêu cầu thay đổi",
      },
      {
        idx: 3,
        title: "Xem xét lại lịch họp sắp tới",
        isKey: false,
      },
    ],
    idx: 1190,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Một nhân viên đang tham quan nhà máy sản xuất của một trong những nhà cung cấp. Điều nào dưới đây là quan trọng nhất phải làm trong bất kz cuộc gọi nào mà PM sẽ gọi cho anh ta?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Chắc chắn rằng các bên có liên quan nhìn thấy PM đang tình cờ nghe và yêu cầu họ chuyển các câu hỏi cho PM bằng văn bản",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Thuyết trình với tất cả các bên có liên quan về trạng thái của dự án",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Gửi cho 2 bên có liên quan này bản copy về nhật ký vấn đề (issue log) và hỏi xem có nhận xét gì nữa không",
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Sắp xếp 1 cuộc họp với cả 2 bên có liên quan này để nghe họ nói về bất kz vấn đề liên quan nào mà họ có. ",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1191,
    title:
      "Một PM tình cờ nghe được cuộc hội thoại giữa 2 bên có liên quan đang nói về sự không hài lòng của họ về ảnh hưởng của dự án tới phòng ban của họ. bên có  liên quan A hỏi dự án đang đúng tiến độ không và bên B trả lời là 1.05. bên A hỏi PM có biết sự liên quan của việc này tới bên B không, bên B trả lời anh ta không chắc chắn. Điều tốt nhất là PM nên làm là gì?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM đã quản lý 4 dự án cho công ty và đang được cân nhắc để tham gia vào phòng quản lý dự án. Đây là những điều đã rút ra được sau quá trình đáng giá năng lực của anh ta: dự án đầu tiên của PM này có biến động chi phí CV = -500, sử dụng 2 nguồn lực then chốt, cần phải làm lại tôn chỉ dự án trong giai đoạn thực thi và được xếp hạng ưu tiên thứ 14 trong công ty. Dự án thứ 2 kết thúc với biến động lịch trình là +100, được hoàn thành với lịch trình nén rộng (vastly compressed schedule) và nhận được thư giới thiệu từ nhà tài trợ, nhưng sản phẩm của dự án không được sử dụng. Dự án thứ 3 có số lượng thay đổi hơn 23% so với dự kiến, có SPI=0.90 và 35 mục trong nhật ký vấn đề (issue log) khi dự án hoàn thành. Mỗi dự án có ngân sách chi phi là 1000$ và khoảng 20 tới 28% thay đổi nhiều hơn so với các dự án khác cùng quy mô. Phòng quản lý dự án quyết định không cân nhắc người PM này vào phòng nữa. Điều nào dưới đây mô tả tốt nhất tại sao PM lại không được vào?",
    answers: [
      {
        isKey: false,
        title:
          "PM chỉ quản lý các dự án có mức độ ưu tiên thấp và anh ta phải nén lịch trình, cho thấy anh ta không đủ kỹ năng để làm việc trong phòng quản lý dự án",
        idx: 0,
      },
      {
        title:
          "Nhật ký lỗi không nên được sử dụng trong những dự án có quy mô này, cho thấy PM không đủ kiến thức để làm việc trong phòng quản lý dự án",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "PM không thu hút hiệu quả các bên có liên quan, cho thấy anh ta không đủ kiến thức để làm việc trong phòng quản lý dự án ",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "PM có 2 nguồn lực then chốt trong đội của mình và vẫn cần phải làm lại tôn chỉ dự án, cho thấy anh ta không đủ kỷ luật để làm việc trong phòng quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 1192,
  },
  {
    answers: [
      {
        title: "PM tập trung vào yêu cầu của nhà tài trợ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Ban lãnh đạo chức năng không được tính đến trong kế hoạch quản lý truyền thông",
        isKey: true,
      },
      {
        idx: 2,
        title:
          "Hoạt động tiếp sau nên được theo dõi, không phải hoạt động trước đó",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Những người cần thiết không được mời đến buổi tiệc quan trọng",
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    idx: 1193,
    title:
      "Mọi thứ đang hoạt động tốt trong giai đoạn giữa của một dự án. Hệ thống cấp phép công việc cho phép mọi người biết thời gian bắt đầu công việc và nhật ký lỗi đã giúp theo dõi các yêu cầu của các bên có liên quan. Tỷ suất chi phí có ích được cải thiện và nhà tài trợ bày tỏ sự đánh giá cao của mình cho những nỗ lực của đội dự án bằng cách tổ chức một buổi tiệc quan trọng cho đội. PM đã nhận được 1 cuộc gọi từ 1 thành viên dự án nói rằng kết quả từ việc hoàn thành hoạt động trước đã bị chậm 2 ngày. L{ do nào dưới đây là tốt nhất giải thích tại sao điều này xảy ra?",
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      " Có nhiều gói công việc đã hoàn thành tốt đẹp trong dự án và nhà tài trợ đã có một vài sự đánh giá cao cho sự cải thiện. Dự án đang trong đúng lịch trình để đáp ứng hạn chót gấp gáp (aggressive schedule) khi hành động sau của hoạt động đường tới hạn gặp phải một trở ngại lớn (suffer a major setback). Hoạt động này có 14 ngày trễ (14days of float) và được 4 ng hoàn thành. Có 2 nhân viên khác có kỹ năng trợ giúp hoạt động này, nếu cần thiết. PM nhận được 1 cuộc gọi rằng 3 nhân viên khác đang cố gắng rời khỏi dự án do họ không cảm thấy rằng dự án có thể thành công. Khi PM tiếp tục theo đuổi vấn đề này, cô ấy khám phá ra rằng những nhân viên này có vấn đề mà chưa được xác định trc đó. Điều nào dưới đây là tốt nhất để cải thiện dự án?",

    idx: 1194,
    answers: [
      {
        isKey: false,
        title:
          "Các nhân viên dự án ngay lập tức cố gắng giải quyết hoạt động đang gặp vấn đề",
        idx: 0,
      },
      {
        idx: 1,
        title: "Điều tra xem tại sao lịch trình dự án lại gấp gáp",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Tìm xem ai có thể thay thế 3 nhân viên đó",
      },
      {
        idx: 3,
        isKey: true,
        title: "Tạo nhật ký lỗi ",
      },
    ],
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        isKey: false,
        title:
          "Ghi lại những ấn tượng sâu sắc của buổi tiệc vào các bài học thu được từ dự án",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Xem lại phương pháp phân phối thông tin trong dự án ",
      },
      {
        title:
          "Tổ chức một buổi họp với tất cả các bên có liên quan để thảo luận các mối bận tâm của họ ",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Chắc chắn rằng ban lãnh đạo có bản copy của kế hoạch quản lý truyền thông đểanh ta có thể nhớ những mối bận tâm này nên được gửi tới PM",
      },
    ],
    title:
      "Dự án có 13 nhân viên và chịu ảnh hưởng từ 15 phòng ban trong tổ chức. Do dự án đã hoàn thành được 20% thời hạn dự án và có báo cáo hiệu năng thành công từ 5 phòng ban, PM tổ chức 1 buổi tiệc. PM mời các bên có liên quan từ tất cả các phòng ban, cung cấp những đánh giá tốt về một cơ hội truyền thông phi chính thức để truyền tải những điều tốt tới những phòng ban chưa tham gia vào dự án. Tại buổi tiệc, PM đi 1 vòng để khám phá và tìm các thông tin có liên quan tới 1 trng những phòng ban đang nói về việc thiết lập nhiều buổi họp chính thức hơn trong dự án. Điều tốt nhất PM nên làm đầu tiên là:",
    idx: 1195,
  },
  {
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một dự án lớn đang thực hiện khi một nhân viên đội dự án xem lại báo cáo trạng thái dự án. Anh ta thấy rằng dự án hiện tại đang thực hiện chậm lịch trình. Khi tìm kiếm sâu hơn, anh ta chú ý rằng sự chậm trễ là nguyên nhân của hoạt động của anh ta bị dời lịch trong thời gian anh ra nước ngoài và không thể thực hiện được hoạt động này. Đây là mối bận tâm lớn do anh ta cam kết dự án sẽ thành công và anh ta không muốn là nguyên nhân của sự chậm trễ hơn của dự án. Điều tốt nhất nên làm là gì?",
    answers: [
      {
        isKey: false,
        title: "Liên lạc với PM ngay lập tức để cung cấp cho PM lịch trình",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Thêm các thông tin này vào báo cáo lần tới của anh ta  ",
      },
      {
        title: "Yêu cầu vấn đề này được thêm vào nhật ký lỗi của dự án",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "Khuyến nghị hành động hiệu chỉnh ",
        idx: 3,
      },
    ],
    idx: 1196,
  },
  {
    idx: 1197,
    answers: [
      {
        title:
          "Giữ một file về những yêu cầu nào chưa được bao gồm trong dự án",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          "Chắc chắn rằng quy trình kiểm soát thay đổi không được sử dụng như một phươngtiện để thêm vào những yêu cầu vào dự án ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Duy trì nhật ký lỗi",
        idx: 2,
      },
      {
        title:
          "Tổ chức các buổi họp với các bên có liên quan để vượt qua những công việcìnhchưa được thêm vào dự án",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",

    title:
      "Dự án của bạn đang có một thời gian khó khăn trong việc có được phê chuẩn chính thức của kế hoạch quản lý dự án do có nhiều yêu cầu của các bên có liên quan chưa được phê chuẩn để liên quan trong dự án. Các bên có liên quan cãi nhau và làm chậm tiến độ dự án khi họ cứ tổ chức buổi họp này tới buổi họp khác về các yêu cầu của họ. Dự án cuối cùng cũng được phê chuẩn và đã bắt đầu từ 6 tháng trước. Tất cả những điều sau sẽ là những hành động ngăn chặn tốt, ngoại trừ:",
  },
  {
    answers: [
      {
        title: "Sử dụng ngôn ngữ truyền đạt cụ thể (paralingual communication)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Thêm vào nhật ký lỗi sau cuộc gọi đó",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Chú ý nhiều hơn để quyết định yêu cầu truyền thông",
      },
      {
        idx: 3,
        title: "Phản hồi lại trong quá trình truyền thông.",
        isKey: true,
      },
    ],
    idx: 1198,
    title:
      "PM đang hi vọng một sản phẩm sẽ được đệ trình (submit) bằng email từ một nhân viên vào ngày hôm nay. Vào cuối ngày, PM liên lạc với nhân viên đó để thông báo rằng PM chưa nhận được email. Nhân viên này xin lỗi và nói rằng anh ra không thể email về sản phẩm, và nó sẽ được gửi thông qua thư thay vì email. Nhân viên này tiếp tục giải thích rằng anh ta đã thông báo với PM điều này sẽ xảy ra trong một cuộc điện thoại khi PM đang du lịch. PM nói:”chúng ta có nói chuyện không khi mà tôi đã nói với anh là tôi không nghe thấy anh nói gì vì sóng yếu?” người nhân viên trả lời: “Có”. Điều gì sẽ ngăn chặn vấn đề này?",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1199,
    answers: [
      {
        title: "Các thông tin lịch sử cho các dự án trong tương lai",
        idx: 0,
        isKey: true,
      },
      {
        title: "Lên kế hoạch ghi lại bản ghi lịch sử cho dự án hiện tại",
        isKey: false,
        idx: 1,
      },
      {
        title: "Thông báo cho đội dự án về những gì PM đã làm ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Thông báo cho đội dự án về kế hoạch quản lý dự án",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Các thủ tục công ty bao gồm việc tạo ra văn bản các bài học thu được. điều nào dưới đây là tốt nhất khi sử dụng các bài học thu được??",
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
  },
  {
    idx: 1200,

    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    title:
      "Một PM vừa tìm ra nhà thầu phụ chính của dự án luôn luôn chậm tiến độ công việc. nhân viên dự án có trách nhiệm với phần này của dự án không có tiến triển tốt với nhà thầu phụ này. Để giải quyết vấn đề, người PM nói rằng:”cả 2 người phải từ bỏ một số thứ để giải quyết vấn đề này”. Phương pháp giải quyết vấn đề nào mà PM đang sử dụng?",
    answers: [
      {
        title: "Đối đầu",
        idx: 0,
        isKey: false,
      },
      {
        isKey: true,
        title: "Thỏa hiệp",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Sự hòa nhã làm ổn thỏa (smoothing)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Giao tiếp ",
      },
    ],
  },
  {
    idx: 1201,
    practiceCode: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "PM",
      },
      {
        isKey: false,
        title: "Đội dự án ",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nhà tài trợ",
      },
      {
        title: "Các bên có liên quan",
        idx: 3,
        isKey: true,
      },
    ],
    title: "Các bài học thu được, được hoàn thành tốt nhất bởi:",
  },
];

export default question;
