import { Practice } from "../models/multiple-question";

const practices: Practice[] = [
  // an-toan-va-bao-mat-he-thong-thong-tin
  {
    code: "an-toan-va-bao-mat-he-thong-thong-tin-01",
    isHided: false,
    title: "Đề trắc nghiệm an toàn bảo mật hệ thống thông tin số 1",
    subjectCode: "an-toan-va-bao-mat-he-thong-thong-tin",
    description: "Cứ ôn là A+",
    numberOfQuestion: 209,
  },
  {
    code: "an-toan-va-bao-mat-he-thong-thong-tin-02",
    description: "Cứ ôn là A+",
    title: "Đề trắc nghiệm an toàn bảo mật hệ thống thông tin số 2",
    isHided: false,
    subjectCode: "an-toan-va-bao-mat-he-thong-thong-tin",
    numberOfQuestion: 297,
  },
  // kinh-te-chinh-tri-mac-lenin
  {
    code: "kinh-te-chinh-tri-mac-lenin-03",
    description: "Cứ ôn là A+",
    title: "Đề trắc nghiệm kinh tế chính trị Mác - Lênin số 3",
    numberOfQuestion: 379,
    subjectCode: "kinh-te-chinh-tri-mac-lenin",
    isHided: false,
  },
  {
    code: "kinh-te-chinh-tri-mac-lenin-04",
    subjectCode: "kinh-te-chinh-tri-mac-lenin",
    title: "Đề trắc nghiệm kinh tế chính trị Mác - Lênin số 4",
    isHided: false,
    numberOfQuestion: 100,
    description: "Cứ ôn là A+",
  },
  {
    code: "kinh-te-chinh-tri-mac-lenin-02",
    isHided: false,
    title: "Đề trắc nghiệm kinh tế chính trị Mác - Lênin số 2",
    numberOfQuestion: 100,
    subjectCode: "kinh-te-chinh-tri-mac-lenin",
    description:
      "Đề tổng hợp từ  Trường Đại học Kinh doanh và Công nghệ Hà nội",
  },
  {
    code: "kinh-te-chinh-tri-mac-lenin-700-cau",
    title: "Đề trắc nghiệm kinh tế chính trị MÁC – LÊNIN 700 câu",
    subjectCode: "kinh-te-chinh-tri-mac-lenin",
    description: "Cứ ôn là A+",
    isHided: false,
    numberOfQuestion: 684,
  },
  {
    code: "kinh-te-chinh-tri-mac-lenin-hubt",
    subjectCode: "kinh-te-chinh-tri-mac-lenin",
    isHided: false,
    description: "Cứ ôn là A+",
    title: "Đề trắc nghiệm kinh tế chính trị Mác - Lênin (HUBT)",
    numberOfQuestion: 101,
  },
  // co-so-du-lieu
  {
    code: "co-so-du-lieu-01",
    title: "Đề trắc nghiệm Cơ sở dữ liệu số 1",
    numberOfQuestion: 250,
    isHided: false,
    description: "Cứ ôn là A+",
    subjectCode: "co-so-du-lieu",
  },
  // tu-tuong-ho-chi-minh
  {
    code: "tu-tuong-ho-chi-minh-theo-chuong",
    isHided: false,
    chapters: [
      {
        numberOfQuestion: 70,
        idx: 0,
        title: "Tư tưởng Hồ Chí Minh chương 1",
        description:
          "Chương 1 là khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn Tư tưởng Hồ Chí Minh.",
      },
      {
        description:
          "Chương 2 gồm các ý chính như sau: Nguồn gốc hình thành tư tưởng Hồ Chí Minh, Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh, Giá trị tư tưởng Hồ Chí Minh",
        idx: 1,
        numberOfQuestion: 50,
        title: "Tư tưởng Hồ Chí Minh chương 2",
      },
      {
        description:
          "Chương 3 gồm các ý chính như sau: Thực chất vấn đề dân tộc và cách mạng giải phóng dân tộc trong tư tưởng Hồ Chí Minh, Sự kế thừa và phát triển của Hồ Chí Minh về vấn đề dân tộc và cách mạng giải phóng dân tộc.",
        numberOfQuestion: 50,
        idx: 2,
        title: "Tư tưởng Hồ Chí Minh chương 3",
      },
      {
        numberOfQuestion: 50,
        title: "Tư tưởng Hồ Chí Minh chương 4",
        idx: 3,
        description:
          "Chương 4 gồm các ý chính như sau: Tư tưởng Hồ Chí Minh và con đường đi lên chủ nghĩa xã hội tại Việt Nam, Cơ sở lý luận và thực tiễn hình thành tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội tại Việt Nam",
      },
      {
        idx: 4,
        numberOfQuestion: 50,
        description:
          "Chương 5 gồm các ý chính sau:Tư tưởng Hồ Chí Minh về độc lập dân tộc, Tư tưởng Hồ Chí Minh về đoàn kết quốc tế, Vận dụng tư tưởng Hồ Chí Minh về độc lập dân tộc và đoàn kết quốc tế trong thời đại hiện nay",
        title: "Tư tưởng Hồ Chí Minh chương 5",
      },
    ],
    author: "Sưu tầm",
    title: "Đề trắc nghiệm Tư tưởng Hồ Chí Minh theo chương",
    description: "Đề được tổ chức theo các chương, dễ dàng ôn tập hơn",
    subjectCode: "tu-tuong-ho-chi-minh",
    numberOfQuestion: 280,
  },
  // phuong-phap-luan-nghien-cuu-khoa-hoc
  {
    code: "phuong-phap-luan-nghien-cuu-khoa-hoc-01",
    description: "Cứ ôn là A+",
    isHided: false,
    subjectCode: "phuong-phap-luan-nghien-cuu-khoa-hoc",
    numberOfQuestion: 1202,
    title: "Đề trắc nghiệm phương pháp luận nghiên cứu khoa học số 1",
  },
  // an-toan-web-va-csdl
  {
    code: "an-toan-web-va-csdl-01",
    title: "Đề trắc nghiệm An toàn Web và CSDL số 1",
    isHided: false,
    author: "Tổng hợp qua Quizizz",
    subjectCode: "an-toan-web-va-csdl",
    description: "Cứ ôn là A+",
    numberOfQuestion: 170,
  },
  // mang-may-tinh
  {
    code: "mang-may-tinh-01-co-giai-thich",
    chapters: [
      {
        numberOfQuestion: 58,
        idx: 0,
        title: "Các khái niệm cơ bản",
      },
      {
        numberOfQuestion: 31,
        idx: 1,
        title: "Mô hình osi và mô hình TCP/IP",
      },
      {
        numberOfQuestion: 38,
        idx: 2,
        title: "Tầng ứng dụng",
      },
      {
        title: "Tầng giao vận",
        idx: 3,
        numberOfQuestion: 34,
      },
      {
        title: "Tầng mạng",
        numberOfQuestion: 57,
        idx: 4,
      },
      {
        idx: 5,
        title: "Tầng liên kết dữ liệu và tầng vật lý",
        numberOfQuestion: 45,
      },
      {
        idx: 6,
        title: "An toàn và bảo mật mạng",
        numberOfQuestion: 10,
      },
      {
        title: "Các công cụ mạng (liên quan đến phần thực hành môn học)",
        idx: 7,
        numberOfQuestion: 24,
      },
    ],
    author: "Huy Init",
    subjectCode: "mang-may-tinh",
    title: "Đề trắc nghiệm mạng máy tính số 1 có giải thích",
    description:
      "Câu hỏi và giải thích được tham khảo trên github của bạn Huy Init",
    numberOfQuestion: 300,
    isHided: false,
  },
  // phap-luat-dai-cuong
  {
    code: "phap-luat-dai-cuong-theo-chuong",
    author: "Sưu tầm",
    isHided: false,
    title: "Đề trắc nghiệm Pháp luật đại cương theo chương",
    numberOfQuestion: 470,
    subjectCode: "phap-luat-dai-cuong",
    description: "Đề được tổ chức theo các chương, dễ dàng ôn tập hơn",
    chapters: [
      {
        numberOfQuestion: 168,
        title: "Pháp luật đại cương chương 1",
        description:
          "Trong chương 1, chủ yếu là giới thiệu tổng quan về nội dung của Pháp luật đại cương. Người học sẽ được tìm hiểu nguồn gốc của nhà nước theo quan điểm Mác – Lênin và nguồn gốc pháp luật theo quan điểm Mác – Lênin.",
        idx: 0,
      },
      {
        numberOfQuestion: 122,
        title: "Pháp luật đại cương chương 2",
        description:
          "Sau khi đã giới thiệu về nguồn gốc của nhà nước cũng như pháp luật ở phần 1, phần 2 sẽ nêu lên khái quát chung về nhà nước và pháp luật nước ta. Nguồn gốc ra đời, bản chất, vai trò và cách thức hoạt động là những nội dung mà người học sẽ được tìm hiểu trong phần này.",
        idx: 1,
      },
      {
        numberOfQuestion: 48,
        idx: 2,
        title: "Pháp luật đại cương chương 3",
        description:
          "Phần 3 cung cấp nội dung về Bộ máy nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam. Người học được dạy về những vấn đề chung cũng như các nguyên tắc tổ chức và hoạt động của bộ máy nhà nước Việt Nam. Đồng thời cũng giới thiệu tổng quát về bộ máy chính trị và nhà nước trong hệ thống chính trị.",
      },
      {
        description:
          "Trong phần 4, bạn sẽ được học về hình thức pháp luật. Người học được tìm hiểu về khái niệm hình thức pháp luật và hệ thống văn bản quy phạm pháp luật ở Việt Nam.",
        title: "Pháp luật đại cương chương 4",
        idx: 3,
        numberOfQuestion: 33,
      },
      {
        title: "Pháp luật đại cương chương 5",
        idx: 4,
        description:
          "Nội dung chính của phần này là giới thiệu về vy phạm pháp luật và trách nhiệm pháp lý. Bên cạnh đó, người học còn được giới thiệu khái quát về pháp chế Xã Hội Chủ Nghĩa.",
        numberOfQuestion: 60,
      },
      {
        numberOfQuestion: 2,
        description:
          "Phần 6 trình bày về vi phạm pháp luật và trách nhiệm pháp lý khi vi phạm pháp luật.",
        idx: 5,
        title: "Pháp luật đại cương chương 6",
      },
      {
        title: "Pháp luật đại cương chương 7",
        description:
          "Trong phần này, người học được tìm hiểu về các ngành luật cơ bản trong hệ thống pháp luật Việt Nam. Cụ thể:\nLuật Hiến pháp.\nLuật hành chính.\nLuật hình sự.\nLuật tố tụng hình sự.\nLuật dân sự.\nLuật hôn nhân và gia đình.\nLuật thương mại.\nLuật lao động.\nLuật đất đai.",
        numberOfQuestion: 37,
        idx: 6,
      },
    ],
  },
];

export default practices;
