import React from "react";
import classes from "./aboutPage.module.css";
import CustomLink from "../../components/CustomLink";
import demo01 from "../../static/img/demo_01.png";
import demo02 from "../../static/img/demo_02.png";
import demo03 from "../../static/img/demo_03.png";
import demo05 from "../../static/img/demo_05.png";
import demo06 from "../../static/img/demo_06.png";
import demo07 from "../../static/img/demo_07.png";
import demo08 from "../../static/img/demo_08.png";
import demo09 from "../../static/img/demo_09.png";
import demo10 from "../../static/img/demo_10.png";
import demo11 from "../../static/img/demo_11.png";
import demo12 from "../../static/img/demo_12.png";

function AboutPage() {
  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>Xin chào các bạn sinh viên,</h3>
      <div>
        <CustomLink to={"/"}>Grade Ptit</CustomLink> được tạo ra để phục vụ mục
        đích tính toán, ước lượng điểm số, GPA, CGPA/CPA của các bạn sinh viên.
        Chúng tôi đang phát triển một số tính năng mới và không ngừng cải thiện
        chất lượng của các tính năng hiện có. Nếu có bất kỳ thắc mắc hay đóng
        góp, hãy liên hệ với chúng tôi qua{" "}
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
          <b>Công cụ tính GPA, CPA và ước lượng điểm:</b> Với mỗi kịch bản điểm
          số, có thể nhập điểm số hiện tại và điểm số đã cải thiện (hoặc sẽ cải
          thiện trong tương lai). Từ đó tính ra được điểm trung bình của các học
          kỳ và điểm CGPA/CPA trước và sau cải thiện. Đặt mục tiêu Đặt mục tiêu
          đạt được bằng khá/giỏi/xuất sắc. Hiển thị biểu đồ điểm để sinh viên dễ
          quan sát sự thay đổi của điểm số qua các kỳ.{" "}
          <CustomLink to={"/gpa-cpa-learning-plan"}>
            Công cụ tính GPA và CPA
          </CustomLink>
          <div className={classes.imageContainer}>
            <img src={demo01} alt={"Công cụ tính GPA, CPA"} />
            <span className={classes.label}>Sơ đồ điểm qua các học kỳ</span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo02} alt={"Công cụ tính GPA, CPA"} />
            <span className={classes.label}>Màn hình chính của chức năng</span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo03} alt={"Giao diện thêm mới môn học"} />
            <span className={classes.label}>Giao diện thêm mới môn học</span>
          </div>
        </li>
        <li>
          <b>Đặt mục tiêu:</b> Thiết lập mục tiêu bằng Giỏi/Khá/Xuất sắc và tính
          toán điểm cải thiện cần đạt được.{" "}
          <CustomLink to={"/file-view"}>Chức năng đặt mục tiêu</CustomLink>
          <div className={classes.imageContainer}>
            <img
              src={demo06}
              alt={"Chức năng import điểm dành riêng chi sinh viên PTIT"}
            />
            <span className={classes.label}>Chức năng đặt mục tiêu</span>
          </div>
        </li>
        <li>
          <b>Tính điểm tổng kết (GPA):</b> tính toán bằng điểm thành phần và cấu
          trúc điểm của môn học.{" "}
          <CustomLink to={"/calc-point"}>Tính điểm tổng kết</CustomLink>
          <div className={classes.imageContainer}>
            <img src={demo08} alt={"Chức năng tính điểm tổng kết môn"} />
            <span className={classes.label}>
              Chức năng tính điểm tổng kết môn học
            </span>
          </div>
        </li>
        <li>
          <b>Chuyển đổi điểm hệ 10 sang hệ 4:</b> chuyển đổi điểm số từ thang 10
          sang thang 4, có thể lựa chọn cấu trúc thang điểm phù hợp với trường
          đại học của bạn.{" "}
          <CustomLink to={"/calc-point"}>
            Chuyển đổi điểm hệ 10 sang 4
          </CustomLink>
          <div className={classes.imageContainer}>
            <img src={demo07} alt={"Chức năng chuyển đổi điểm hệ 10 sang 4"} />
            <span className={classes.label}>
              Chức năng chuyển đổi điểm hệ 10 sang 4
            </span>
          </div>
        </li>
        <li>
          <b>
            Chức năng Tính toán, ước lượng điểm số tối ưu cho sinh viên PTIT:
          </b>{" "}
          Điền sẵn thông tin các học kỳ theo khóa học và ngành học của PTIT. Hơn
          thế nữa các bạn sinh viên PTIT có thể import điểm thông qua file điểm
          được xuất từ hệ thống quản lý đạo tạo, không mất nhiều thời gian để
          nhập điểm bằng tay.{" "}
          <CustomLink to={"/file-view"}>
            Tính toán, ước lượng điểm số
          </CustomLink>
          <div className={classes.imageContainer}>
            <img
              src={demo05}
              alt={"Chức năng import điểm dành riêng chi sinh viên PTIT"}
            />
            <span className={classes.label}>
              Chức năng import điểm rành riêng cho sinh viên PTIT
            </span>
          </div>
        </li>
        <li>
          <b>Ôn thi trắc nghiệm:</b> Với giao diện dễ sử dụng, phù hợp với việc
          ôn thi của sinh viên và ngân hàng môn học, câu hỏi được cập nhật
          thường xuyên, Grade Ptit dần trở thành công cụ ôn thi trắc nghiệm phổ
          biến với các bạn sinh viên..{" "}
          <CustomLink to={"/find-file"}>Ôn thi trắc nghiệm</CustomLink>
          <div className={classes.imageContainer}>
            <img src={demo09} alt={"Danh sách môn học phong phú"} />
            <span className={classes.label}>Danh sách môn học phong phú</span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo10} alt={"Thiết lập đơn giản"} />
            <span className={classes.label}>Thiết lập đơn giản</span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo11} alt={"Giao diện ôn luyện tinh tế"} />
            <span className={classes.label}>Giao diện ôn luyện tinh tế</span>
          </div>
          <div className={classes.imageContainer}>
            <img src={demo12} alt={"Xem lại kết quả luyện tập"} />
            <span className={classes.label}>Xem lại kết quả luyện tập</span>
          </div>
        </li>
      </ul>
      <h3 className={classes.heading}>Thông tin cập nhật:</h3>
      <ul>
        <li>
          - <b>13/7/2023:</b> Cập nhật danh sách môn học của các ngành D19 -
          Truyền thông đa phương tiện và D19 - Công nghệ kỹ thuật điện, điện tử
          - Kỹ thuật điện tử máy tính.
        </li>
        <li>
          - <b>2/9/2023:</b> Thêm chức năng nhân bản hồ sơ.
        </li>
        <li>
          - <b>3/9/2023:</b> Nâng cấp giao diện và sửa một số lỗi hiển thị.
        </li>
        <li>
          - <b>4/9/2023:</b> Thêm chức năng đồng bộ môn học.
        </li>
        <li>
          - <b>4/9/2023:</b> Thêm chức năng import điểm từ file excel.
        </li>
        <li>
          - <b>10/9/2023:</b> Thêm chức năng chỉnh sửa môn học.
        </li>
        <li>
          - <b>11/9/2023:</b> Thêm chức năng thêm môn học cho 1 học kỳ và xoá
          môn học.
        </li>
        <li>
          - <b>15/9/2023:</b> Thêm hiển thị biểu đồ điểm ở màn hình tính toán
          điểm CGPA/CPA.
        </li>
        <li>
          - <b>6/5/2024:</b> Ra mắt app Grade PTIT - Quản lý điểm. Bổ sung các
          ngành học của khóa D23, giao diện đẹp hơn, tốc độ phản hồi nhanh hơn
          và có chức năng ôn thu trắc nghiệm, giúp các bạn sinh viên ôn tập các
          môn thi trắc nghiệm ở trường.{" "}
          <CustomLink
            to={
              "https://play.google.com/store/apps/details?id=com.ducju.gradeptit"
            }
          >
            Tải app Grade Tool
          </CustomLink>
        </li>
        <li>
          - <b>14/5/2024:</b> Bổ sung tính năng chuyển đổi điểm hệ 10 sang hệ 4.{" "}
          <CustomLink to={"/convert-10-to-4"}>
            Chuyển đổi điểm hệ 10 sang hệ 4
          </CustomLink>
        </li>
        <li>
          - <b>1/6/2024:</b> Bổ sung tính năng tính GPA/CPA mà không cần đăng
          nhập, phù hợp cho các bạn sinh viên ở tất cả các trường đại học.{" "}
          <CustomLink to={"/gpa-cpa-learning-plan"}>
            Công cụ tính GPA và CPA
          </CustomLink>
        </li>
      </ul>
      <h3>
        Grade Ptit Team rất hân hạnh chào đón các bạn ghé thăm. Chúc các bạn có
        những trải nghiệm thật tuyệt vời trên trang!
      </h3>
    </div>
  );
}

export default AboutPage;
