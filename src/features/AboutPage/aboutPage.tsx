import React from "react";
import classes from "./aboutPage.module.css";
import CustomLink from "../../components/CustomLink";
import demo01 from "../../static/img/demo_01.png";
import demo02 from "../../static/img/demo_02.png";
import demo03 from "../../static/img/demo_03.png";
import demo04 from "../../static/img/demo_04.png";
import demo05 from "../../static/img/demo_05.png";
import demo06 from "../../static/img/demo_06.png";
import demo07 from "../../static/img/demo_07.png";
import demo08 from "../../static/img/demo_08.png";
import demo09 from "../../static/img/demo_09.png";
import demo10 from "../../static/img/demo_10.png";
import demo11 from "../../static/img/demo_11.png";
import demo12 from "../../static/img/demo_12.png";
import demo13 from "../../static/img/demo_13.png";
import demo14 from "../../static/img/demo_14.png";
import demo15 from "../../static/img/demo_15.png";
import demo16 from "../../static/img/demo_16.png";
import demo17 from "../../static/img/demo_17.png";
import demo18 from "../../static/img/demo_18.png";
import demo19 from "../../static/img/demo_19.png";
import demo20 from "../../static/img/demo_20.png";
import demo21 from "../../static/img/demo_21.png";

function AboutPage() {
  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>Xin chào các bạn sinh viên,</h3>
      <div>
        <CustomLink to={"/"}>PTIT Quizz</CustomLink> được tạo ra để phục vụ các
        bạn sinh viên trong việc ôn tập các môn thi trắc nghiệm. Nếu có bất kỳ
        thắc mắc hay đóng góp, hãy liên hệ với chúng tôi qua{" "}
        <a
          href={"https://www.facebook.com/gradeptit"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          Facebook Page Grade Ptit
        </a>{" "}
        hoặc email{" "}
        <a
          href={"mailto:gradeptit@gmail.com?subject=Feedback to Gradeptit"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          gradeptit@gmail.com
        </a>
      </div>
      <h3 className={classes.heading}>Các tính năng chính của Grade Ptit:</h3>
      <ul>
        <li>
          <b>Ôn thi trắc nghiệm:</b> Với giao diện dễ sử dụng, phù hợp với việc
          ôn thi của sinh viên và ngân hàng môn học, câu hỏi được cập nhật
          thường xuyên, PTIT Quizz dần trở thành công cụ ôn thi trắc nghiệm phổ
          biến với các bạn sinh viên..{" "}
          <CustomLink to={"/"}>Ôn thi trắc nghiệm</CustomLink>
          <div className={classes.imageContainer}>
            <img src={demo01} alt={"Danh sách môn học phong phú"} />
            <span className={classes.label}>Danh sách môn học phong phú</span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo02}
              alt={"Các thiết lập phong phú phù hợp cho mọi nhu cầu"}
            />
            <span className={classes.label}>
              Các thiết lập phong phú phù hợp cho mọi nhu cầu
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo03} alt={"Luyện tập bộ câu hỏi theo chương"} />
            <span className={classes.label}>
              Luyện tập bộ câu hỏi theo chương
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo04}
              alt={
                "Đề thi được phân chia theo chương, phân nhóm được các cụm kiến thức"
              }
            />
            <span className={classes.label}>
              Đề thi được phân chia theo chương, phân nhóm được các cụm kiến
              thức
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo05}
              alt={
                "Có 2 kiểu ôn tập là tuần tự từng câu hỏi và hiển thị toàn bộ câu hỏi"
              }
            />
            <span className={classes.label}>
              Có 2 kiểu ôn tập là tuần tự từng câu hỏi và hiển thị toàn bộ câu
              hỏi
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo06}
              alt={"Thiết lập thời gian làm bài tối đa cho mỗi câu hỏi"}
            />
            <span className={classes.label}>
              Thiết lập thời gian làm bài tối đa cho mỗi câu hỏi
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo07}
              alt={
                "Bật tắt chế độ hiển thị đáp án khi hết thời gian hoặc khi người dùng đã chọn đáp án"
              }
            />
            <span className={classes.label}>
              Bật tắt chế độ hiển thị đáp án khi hết thời gian hoặc khi người
              dùng đã chọn đáp án
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo08}
              alt={'Bật tắt chức năng xáo trộn câu hỏi, giảm tỉ lệ "học vẹt"'}
            />
            <span className={classes.label}>
              Bật tắt chức năng xáo trộn câu hỏi, giảm tỉ lệ "học vẹt"
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo09}
              alt={"Bật tắt chế độ hiển thị thông báo kết quả của từng câu hỏi"}
            />
            <span className={classes.label}>
              Bật tắt chế độ hiển thị thông báo kết quả của từng câu hỏi
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo10}
              alt={"Thiết lập thời gian tự động chuyển sang câu hỏi khác"}
            />
            <span className={classes.label}>
              Thiết lập thời gian tự động chuyển sang câu hỏi khác
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo11}
              alt={
                "Hiển thị lịch sử luyện tập, dễ dàng xem lại bài làm trong quá khứ"
              }
            />
            <span className={classes.label}>
              Hiển thị lịch sử luyện tập, dễ dàng xem lại bài làm trong quá khứ
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo12}
              alt={"Tính năng xem trước danh sách câu hỏi trước khi làm bài"}
            />
            <span className={classes.label}>
              Tính năng xem trước danh sách câu hỏi trước khi làm bài
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo13}
              alt={"Có thể xem trước đáp án khi cần tra cứu, học thuộc"}
            />
            <span className={classes.label}>
              Có thể xem trước đáp án khi cần tra cứu, học thuộc
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo14} alt={"Chức năng ôn luyện từng câu hỏi đơn lẻ"} />
            <span className={classes.label}>
              Chức năng ôn luyện từng câu hỏi đơn lẻ. Đây là ví dụ khi người
              dùng chọn đáp án bị sai và đang có thiết lập hiển thị thông báo,
              tự động chuyển câu hỏi.
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo15}
              alt={"Thanh điều kiển của chế độ luyện tập từng câu"}
            />
            <span className={classes.label}>
              Thanh điều kiển của chế độ luyện tập từng câu, hiện thị số thứ tự
              của câu hỏi, tổng số câu, thời gian còn lại của từng câu và nút
              tạm dừng đếm ngược thời gian
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo16}
              alt={"Một ví dụ khác khi người dùng chọn đáp án đúng"}
            />
            <span className={classes.label}>
              Một ví dụ khác khi người dùng chọn đáp án đúng
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo17}
              alt={
                "Đề thi được phân chia theo chương, phân nhóm được các cụm kiến thức"
              }
            />
            <span className={classes.label}>
              Màn hình hiển thị kết quả luyện tập. Bao gồm các thông tin số câu
              đúng/sai và tỉ lệ đúng/sai
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo18}
              alt={
                "Các câu trả lời sai sẽ được đánh dấu bằng viền và nền màu đỏ"
              }
            />
            <span className={classes.label}>
              Các câu trả lời sai sẽ được đánh dấu bằng viền và nền màu đỏ
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo19}
              alt={
                "Các câu trả lời đúng sẽ được đánh dấu bằng viền và nền màu xanh"
              }
            />
            <span className={classes.label}>
              Các câu trả lời đúng sẽ được đánh dấu bằng viền và nền màu xanh
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo20} alt={"Chế độ ôn tập hiển thị toàn bộ câu hỏi"} />
            <span className={classes.label}>
              Chế độ ôn tập hiển thị toàn bộ câu hỏi. Người dùng sẽ chọn đáp án
              của tất cả các câu, sau đó nhấn kết thúc để nộp bài
            </span>
          </div>
          <div className={classes.imageContainer}>
            <img
              src={demo21}
              alt={
                "Đề thi được phân chia theo chương, phân nhóm được các cụm kiến thức"
              }
            />
            <span className={classes.label}>
              Thanh điều kiển chế độ hiển thị toàn bộ câu hỏi, bao gồm tổng số
              câu, thời gian làm bài và nút tạm dừng đồng hồ đếm thời gian
            </span>
          </div>
        </li>
      </ul>
      <h3>
        PTIT Quizz Team rất hân hạnh chào đón các bạn ghé thăm. Chúc các bạn có
        những trải nghiệm thật tuyệt vời trên trang!
      </h3>
    </div>
  );
}

export default AboutPage;
