import { QuestionRequest } from "../../models/multiple-question";

const questions: QuestionRequest[] = [
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",

    title:
      "Cho lược đồ Cơ Sở Dữ liệu sau:\nNhanVien ( MaNV, HoNV, TenNV, DiaChi, ThanhPho )\nKhachHang( MaKH, TenKH, DiaChi, ThanhPho, SoDu, GioiHanTinDung)\nHoaDon( MaHD, NgayLapHoaDon, MaKH, MaNV)\nChiTietHoaDon (MaHD, MaSP, SoLuong,GiaBan )\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc)\nDựa vào lược đồ Cơ Sở Dữ liệu trên, Tạo câu truy vấn để liệt kê danh sách các sản phẩm có giá từ 50000 đến 100000?",
    answers: [
      {
        title: "Select * From SanPham Where GiaGoc>=50000",
        isKey: false,
        idx: 0,
      },
      {
        title: "Select * From SanPham Where GiaGoc<=100000",
        idx: 1,
        isKey: false,
      },
      {
        title: "Select * From SanPham Where GiaGoc between 50000 and 100000",
        idx: 2,
        isKey: true,
      },
      {
        title: "Select * From SanPham Where GiaGoc in(50000,100000)",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 0,
  },
  {
    bonus: "",
    idx: 1,

    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ Cơ sở dữ liệu sau:\nSINHVIEN(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop)\nLOP(MaLop, TenLop, MaKhoa, GVCN)\nKETQUA(MaSV, MaMH, LanThi, Diem)\nMONHOC(MaMH, TenMH, SoTinChi)\nLiệt kê danh sách các sinh viên gồm (MaSV, HoSV, TenSV) có điểm thi môn CSDL cao nhất?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Select K.MaSV, HoSV, TenSV\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV And MaMH='CSDL' And Diem>=ALL\n(Select Diem From KetQua where MaMH ='CSDL')",
      },
      {
        title:
          "Select K.MaSV, HoSV, TenSV\nFrom SinhVien S, ketqua K\nWhere S.MASV=K.MASV And MaMH='CSDL' And Diem=\n(Select max(Diem)From ketqua where MaMH ='CSDL')",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title:
          "Select top 1 with ties K.MaSV, HoSV, TenSV\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV And MaMH='CSDL'\norder by diem desc",
        idx: 2,
      },
      {
        title: "Tất cả các phương án trên.",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Select * From SanPham\nWhere GiaGoc>(Select Avg(GiaGoc) From SanPham)",
      },
      {
        idx: 1,
        title:
          "Select * From SanPham\nWhere GiaGoc>(Select Avg(GiaGoc) From SanPham\nGroup by MaSP)",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Select * From SanPham\nWhere GiaGoc> Avg(GiaGoc)",
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Select * From SanPham\nGroup by MaSP\nHaving GiaGoc> Avg(GiaGoc)",
      },
    ],
    idx: 2,
    bonus: "",
    title:
      "Cho lược đồ CSDL sau:\nNhanVien (MaNV, HoNV, TenNV, DiaChi, ThanhPho)\nKhachHang (MaKH, TenKH, DiaChi, ThanhPho, SoDu, GioiHanTinDung)\nHoaDon (MaHD, NgayLapHoaDon, MaKH, MaNV)\nChiTietHoaDon (MaHD, MaSP, SoLuong,GiaBan)\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc)\nDựa vào lược đồ Cơ Sở Dữ liệu trên, Liệt kê ra sản phẩm có giá lớn hơn giá trung bình cuả các sản phẩm?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại, ngày nhập học, mã môn học)\nMôn học(Mã môn học, tên môn học, thời lượng) Khoá chính là Mã môn học\nVới: khoá chính cuả bảng học viên là Mã học viên và khoá chính cuả bảng môn học là Mã môn học.",
      },
      {
        title:
          "Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại, ngày nhập học,Mã môn học)\nMôn học(Mã môn học, tên môn học, thời lượng, Mã học viên)\nVới: khoá chính cuả bảng học viên là Mã học viên, Mã môn học và khoá chính của bảng môn học là Mã môn học, Mã học viên",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title:
          'Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại)\nMôn học(Mã môn học, tên môn học, thời lượng)\nHọc Viên Mon Hoc(Mã học viên, Mã môn học)\nVới: khoá chính cuả bảng "Học Viên" là Mã học viên\nKhoá chính cuả bảng "Môn học" là Mã môn học.\nKhoá chính cuả bảng "Học Viên Mon Hoc" là Mã học viên, Mã môn học.',
      },
      {
        isKey: false,
        title:
          "Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại)\nMôn học(Mã môn học, tên môn học, thời lượng, Mã học viên)\nVới: khoá chính cuả bảng học viên là Mã học viên và khoá chính cuả bảng môn học là Mã môn học.",
        idx: 3,
      },
    ],
    bonus: "",
    idx: 3,
    practiceCode: "co-so-du-lieu-01",

    title:
      "Cho mô hình thực thể kết hợp (Mô hình ER) như hình bên.\n\nHãy chuyển từ mô hình ER sang lược đồ Cơ sở dữ liệu?",
  },
  {
    idx: 4,
    practiceCode: "co-so-du-lieu-01",
    title:
      "_____ của một thực thể trở thành các cột trong một bảng cơ sở dữ liệu",
    bonus: "",

    answers: [
      {
        idx: 0,
        title: "Các thuộc tính",
        isKey: true,
      },
      {
        idx: 1,
        title: "Các bộ (tuple)",
        isKey: false,
      },
      {
        idx: 2,
        title: "Các file dữ liệu",
        isKey: false,
      },
      {
        isKey: false,
        title: "Các biểu đồ E-R",
        idx: 3,
      },
    ],
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    title:
      "_____ là sự ngăn chặn người dùng không có quyền được truy cập cơ sở dữ liệu.",

    idx: 5,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Tính độc lập của dữ liệu",
      },
      {
        title: "Ràng buộc về tính nguyên vẹn",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Tình trạng dư thừa",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Bảo mật",
      },
    ],
  },
  {
    title: "_____ phổ biến bao gồm Access, Oracle, DB2, và SQL Server.",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Các biểu đồ E-R",
      },
      {
        title: "Các DBA",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Các file dữ liệu",
      },
      {
        title: "Các DBMS",
        idx: 3,
        isKey: true,
      },
    ],
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    idx: 6,
  },
  {
    bonus: "",
    title: "Ba loại quan hệ 2 ngôi là:",
    practiceCode: "co-so-du-lieu-01",
    idx: 7,
    answers: [
      {
        title: "1:1, 1:N, N:M",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Entity, class, instance.",
      },
      {
        isKey: false,
        title: "Unique, non-unique, associated.",
        idx: 2,
      },
      {
        isKey: false,
        title: "Tất cả đều sai.",
        idx: 3,
      },
    ],
  },
  {
    bonus: "",
    title:
      "Bạn đang thiết kế một mô hình cơ sở dữ liệu để quản lý sinh viên. Mỗi sinh viên có thể học nhiều hơn một lớp, mỗi lớp có nhiều sinh viên nhưng chỉ được 1 giáo viên dạy. Bạn có 3 thực thể Lớp, Sinh viên, giáo viên trong cơ sở dữ liệu. Dạng quan hệ nào sau đây phải có trong quan hệ giữa Sinh viên và lớp học?",
    idx: 8,

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Một - Nhiều",
      },
      {
        idx: 1,
        isKey: true,
        title: "Nhiều - Nhiều",
      },
      {
        title: "Một - Một",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Không - Nhiều",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "Cơ sở dữ liệu",
        idx: 0,
      },
      {
        title: "Các file",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Các thực thể",
      },
      {
        title: "Các thuộc tính",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 9,

    title: "Các bảng tính, tài liệu, và trang Web được lưu trong _____.",
    bonus: "",
  },
  {
    idx: 10,
    title: "Các bộ dữ liệu trong một quan hệ phải có tính chất:",
    bonus: "",
    answers: [
      {
        title: "Tất cả các bộ dữ liệu phải khác nhau",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Với hai bộ dữ liệu bất kỳ, chúng phải khác nhau trên một hoặc nhiều cột",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "Mỗi quan hệ phải có khóa",
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả các phương án trên.",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    bonus: "",

    title: "Các mối kết hợp có trong mô hình là (Hình bên)?\n",
    idx: 11,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        title: "NH N VIÊN, QUẢN LÝ TRỰC TIẾP, QUẢN LÝ, THAM GIA, THUỘC",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "NH N VIÊN, LĨNH VỰC,QUẢN LÝ, THAM GIA, THUỘC",
      },
      {
        idx: 2,
        title: "QUẢN LÝ, QUẢN LÝ TRỰC TIẾP, THAM GIA, THUỘC",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều sai",
      },
    ],
  },
  {
    title: "Các yếu tố cơ bản nào được sử dụng trong mô hình E-R?",
    answers: [
      {
        isKey: false,
        title: "Thực thể",
        idx: 0,
      },
      {
        title: "Các thuộc tính tương ứng của thực thể",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Các mối kết hợp giữa các thực thể",
      },
      {
        title: "Tất cả các phương án trên.",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 12,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 13,
    title: "Các yếu tố liên quan đến thuộc tính của đối tượng là?",
    answers: [
      {
        title: "Tên gọi của thuộc tính",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "Miền giá trị của thuộc tính",
        isKey: false,
      },
      {
        idx: 2,
        title: "Kiểu dữ liệu của thuộc tính",
        isKey: false,
      },
      {
        isKey: true,
        title: "Tất cả các phương án trên",
        idx: 3,
      },
    ],
    bonus: "",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    title: "Cách nhanh nhất để xác định số dòng trong một bảng là:",
    answers: [
      {
        isKey: false,
        title: "Tạo một kịch bản đưa ra danh sách và hiển thị mỗi dòng.",
        idx: 0,
      },
      {
        isKey: true,
        title: "Dựa vào số lớn nhất của ID có trong bảng.",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Sử dụng hàm count để đếm trong câu truy vấn.",
      },
      {
        title: "Dựa vào thuộc tính trong bảng.",
        isKey: false,
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
        title: "SELECT",
      },
      {
        title: "INDEX",
        idx: 1,
        isKey: false,
      },
      {
        title: "GRANT",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "REVOKE",
        isKey: true,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 15,
    title:
      "Câu lệnh nào sau đây sẽ tước quyền của người dùng đối với cơ sở dữ liệu?",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        title:
          'Danh sách gồm tất cả các cột trong bảng Customer mà mỗi dòng đều có nhãn khách hàng(Cust_Type) là "best".',
        isKey: true,
        idx: 0,
      },
      {
        title:
          'Danh sách gồm cột có cột tên là "*" trong bảng Customer mà mỗi dòng đều có nhãn khách hàng là "best".',
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          'Danh sách gồm tất cả các cột có một dấu "*" trong bảng Customer.',
        isKey: false,
      },
      {
        isKey: false,
        title:
          'Danh sách gồm tất cả các cột trong bảng Customer mà mỗi dòng đều có nhãn khách hàng là "*".',
        idx: 3,
      },
    ],
    bonus: "",
    idx: 16,
    title:
      'Câu lệnh SQL sau đây làm gì?\nSelect * From Customer Where Cust_Type = "Best"',
  },
  {
    idx: 17,
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    answers: [
      {
        title: "SELECT DISTINCT ProductID FROM order_details",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "SELECT UNIQUE ProductID FROM order_details",
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "SELECT ProductID FROM order_details",
      },
      {
        isKey: false,
        title: "SELECT ProductID FROM order_details ONLY ONCE",
        idx: 3,
      },
    ],
    title:
      "Câu lệnh truy vấn nào sau đây cho kết quả là cột ProductID trong Table Oder_detail, mỗi ProductID chỉ hiễn thị một lần?",
  },
  {
    bonus: "",
    title:
      "Câu lệnh truy vấn nào sau đây dùng để xác định các Productname có ProductID là 10, 11 hoặc 42?",
    answers: [
      {
        title: "SELECT ProductName FROM products WHERE ProductID IN (10,11,42)",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "SELECT ProductName FROM products WHERE ProductID = (10,11,42)",
        idx: 1,
      },
      {
        title: "SELECT ProductName FROM products WHERE ProductID IS (10,11,42)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "SELECT ProductName FROM products WHERE ProductID IN 10 OR 11 OR 42",
        isKey: false,
      },
    ],
    idx: 18,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Câu lệnh truy vấn nào sau đây dùng để xác định standard prices nhỏ nhất trong table product_v",
    bonus: "",

    answers: [
      {
        title: "select standard_price from min(product_v)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title:
          "select standard_price from product_v where standard_price = min",
        isKey: false,
      },
      {
        idx: 2,
        title: "select min(standard_price) from product_v",
        isKey: true,
      },
      {
        title:
          "select min(standard_price) from product_v where standard_price = min(standard_price)",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 19,
  },
  {
    practiceCode: "co-so-du-lieu-01",

    idx: 20,
    title: "Câu lệnh truy vấn nào sau đây là sai cú pháp?",
    bonus: "",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "SELECT ProductName FROM products WHERE (UnitPrice < 10) , (UnitsInStock > 5)",
      },
      {
        idx: 1,
        title:
          "SELECT ProductName FROM products WHERE (UnitPrice < 10) OR NOT (UnitsInStock > 5)",
        isKey: false,
      },
      {
        isKey: false,
        title:
          "SELECT ProductName FROM products WHERE UnitPrice < 10 OR UnitsInStock > 5",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "SELECT ProductName FROM products WHERE UnitPrice < 10 AND UnitsInStock > 5",
        isKey: false,
      },
    ],
  },
  {
    title: "Câu lệnh truy vấn nào sau đây là sai?",
    answers: [
      {
        idx: 0,
        title: "SELECT * FROM emp WHERE empid = 493945",
        isKey: false,
      },
      {
        idx: 1,
        title: "SELECT empid FROM emp",
        isKey: false,
      },
      {
        idx: 2,
        title: "SELECT empid FROM emp WHERE empid= 493945",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "SELECT empid WHERE empid = 56949 AND lastname = 'SMITH'",
      },
    ],
    bonus: "",
    idx: 21,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        title:
          "Trong một môi trường hướng file, phi cơ sở dữ liệu, dữ liệu thường bị tách thành một vài hệ thống rời rạc, mỗi hệ thống có một tập hợp các file riêng.",
        isKey: true,
        idx: 0,
      },
      {
        title:
          "Dữ liệu người dùng không thể được kết hợp và chia sẻ giữa những người dùng có quyền.",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Những người dùng cơ sở dữ liệu không nên truy cập cùng thông tin.",
      },
      {
        idx: 3,
        title: "Thường có thể loại bỏ tình trạng dư thừa.",
        isKey: false,
      },
    ],
    idx: 22,
    title: "Câu nào dưới đây đúng?",
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 23,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "Delete table Khachhang",
        idx: 0,
      },
      {
        isKey: true,
        title: "Drop table Khachhang",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Cả 2 phương án: 1 và 2",
      },
      {
        idx: 3,
        title: "Remove table KhachHang",
        isKey: false,
      },
    ],
    title:
      "Câu nào sau đây dùng để xoá bảng KhachHang ra khỏi một lược đồ cơ sở dữ liệu?",

    bonus: "",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quan hệ, bộ và thuộc tính",
      },
      {
        idx: 1,
        isKey: false,
        title: "Bảng, dòng và cột",
      },
      {
        idx: 2,
        title: "Tập tin, mẫu tin và trường",
        isKey: false,
      },
      {
        isKey: true,
        title: "Tất cả đều đúng",
        idx: 3,
      },
    ],
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    title: "Cấu trúc của một mô hình quan hệ được định nghĩa bởi:",

    idx: 24,
  },
  {
    title: "Câu truy vấn nào sau đây chứa một lỗi?",
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 25,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SELECT * FROM emp WHERE empid = 493945;",
      },
      {
        idx: 1,
        isKey: false,
        title: "SELECT empid FROM emp WHERE empid= 493945;",
      },
      {
        idx: 2,
        title: "SELECT empid WHERE empid = 56949 AND lastname = 'SMITH';",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "SELECT empid FROM emp;",
      },
    ],
  },
  {
    answers: [
      {
        title: "H Y->I Z",
        idx: 0,
        isKey: true,
      },
      {
        title: "K Z->H I",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title: "H K->Y H",
      },
      {
        title: "K->H",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 26,
    title:
      "Cho lược đồ quan hệ D(H, K, I, Y, Z) và tập phụ thuộc hàm C={H K->I Z, K->Y , Y->H }. Phụ thuộc hàm nào sau đây không được suy diễn từ C:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "SELECT *\nFROM NhanVien\nORDER BY Luong DESC;",
        idx: 0,
      },
      {
        idx: 1,
        title: "SELECT top 1 *\nFROM NhanVien\nORDER BY Luong;",
        isKey: false,
      },
      {
        title: "SELECT top 1 *\nFROM NhanVien\nORDER BY Luong DESC;",
        idx: 2,
        isKey: true,
      },
      {
        title: "SELECT top 1 *\nFROM NhanVien;",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",

    title:
      "Cho 1 bảng với cấu trúc sau: NhanVien(MaNV, TenNV, Luong, NgayBatDauVaoLam), Tạo câu truy vấn SQL để tìm nhân viên có lương cao nhất",
    bonus: "",
    idx: 27,
  },
  {
    idx: 28,
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho 1 bảng với cấu trúc sau: NhanVien(MaNV, TenNV, Luong, NgayBatDauVaoLam), Tạo câu truy vấn SQL để tìm tất cả các nhân viên bắt đầu vào làm việc trong năm 2005?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SELECT *\nFROM NhanVien\nWHERE NgayBatDauVaoLam=2005;",
      },
      {
        isKey: false,
        title: "SELECT *\nFROM NhanVien\nWHERE NgayBatDauVaoLam>='01/01/2005';",
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "SELECT *\nFROM NhanVien\nWHERE year(NgayBatDauVaoLam)=2005;",
      },
      {
        isKey: false,
        idx: 3,
        title: "SELECT *\nFROM NhanVien\nWHERE NgayBatDauVaoLam< '01/01/2006';",
      },
    ],
  },
  {
    idx: 29,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    title:
      "Cho 1 bảng với cấu trúc sau: NhanVien(MaNV, TenNV, Luong, NgayBatDauVaoLam). Tạo câu truy vấn SQL để tìm tất cả các nhân viên mà có ký tự đầu cuả tên là 'S'?",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SELECT *\nFROM NhanVien\nWHERE TenNV IN ['S'];",
      },
      {
        title: "SELECT *\nFROM NhanVien\nWHERE TenNV LIKE 'S%';",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "SELECT *\nFROM TenNV\nWHERE NhanVien LIKE 'S*';",
      },
      {
        idx: 3,
        title: "SELECT EmpNo\nFROM NhanVien\nWHERE TenNV LIKE 'S';",
        isKey: false,
      },
    ],
  },
  {
    bonus: "",

    idx: 30,
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho 2 bảng sau:\nPhongBan(MaPB,TenPB,TruongPhong,DonVi, ViTri)\nNhanVien(MaNV, HoTen, MaPB,CongViec, NamSinh,Luong)\nTạo truy vấn để liệt kê danh sách các phòng ban và họ tên trưởng phòng cuả phòng ban đó. Danh sách gồm MaPB, MaNV, HoTen.",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Select n.MaPB, MaNV, Tennv\nFrom nhanvien n,phongban p\nWhere n.manv=p.truongphong",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Select n.MaPB, MaNV, Tennv\nFrom nhanvien n,phongban p\nWhere n.mapb=p.mapb",
      },
      {
        idx: 2,
        title:
          "Select n.MaPB, MaNV, Tennv\nFrom nhanvien n,phongban p\nWhere n.mapb=p.mapb\nGroup by n.MaPB, MaNV, Tennv",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Select n.MaPB, MaNV, Tennv\nFrom nhanvien n,phongban p\nWhere n.mapb=p.mapb\nOrder by n.MaPB",
      },
    ],
  },
  {
    idx: 31,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Select DonGia from SanPham where DonGia = min;",
      },
      {
        isKey: true,
        idx: 1,
        title: "Select min(DonGia) from SanPham;",
      },
      {
        isKey: false,
        idx: 2,
        title: "Select min(DonGia) from SanPham where DonGia = min(DonGia);",
      },
      {
        isKey: false,
        idx: 3,
        title: "Select DonGia from SanPham where DonGia = min(DonGia);",
      },
    ],
    title:
      "Cho bảng SanPham(MaSP, TenSP, DonGia) có khóa chính là [MaSP]. Tạo câu truy vấn để xem giá thấp nhất trong bảng SanPham là bao nhiêu?",
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        title: "Alter table DonHang Add Primary Key (MaDH,MaSP)",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Alter table DonHang Add Primary Key (DonHang,MaDH,MaSP)",
        idx: 1,
      },
      {
        title: "Alter table DonHang Add Primary (MaDH,MaSP)",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title: "Alter table DonHang Add Key (MaDH,MaSP)",
        isKey: false,
      },
    ],
    title:
      "Cho bảng sau:\nDonHang(MaDH,MaSP,SoLuong,GiaBan)\nĐể tạo khoá chính cho bảng Donhang (khoá chính gồm 2 Field là MaDH và MaSP).\nCâu nào sau đây là đúng?",
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    idx: 32,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Select sum(MaSP) From SanPham\nWhere NhomHang='HW'",
      },
      {
        title: "Select Count(*) From SanPham\nWhere NhomHang='HW'",
        isKey: true,
        idx: 1,
      },
      {
        title: "Select Count From SanPham\nWhere NhomHang='HW'",
        isKey: false,
        idx: 2,
      },
      {
        title: "Select Count * From SanPham\nWhere NhomHang='HW'",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Cho bảng sau:\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc, SoLuongTon)\nCho biết có bao nhiêu sản phẩm thuộc nhóm hàng 'HW'?",
    idx: 33,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Select * From SanPham",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title: "Select * From SanPham\nWhere KhoHang=3 and SoLuongTon>30",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Select * From SanPham\nWhere KhoHang=3 or SoLuongTon>30",
      },
      {
        title:
          "Select sum(MaSP) as SLTon From SanPham\nWhere KhoHang=3\nGroup by MaSP\nHaving SLTon>30",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Cho bảng sau:\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc, SoLuongTon)\nLiệt kê danh sách các sản phẩm chưá trong kho số 3 và có Số Lượng Tồn lớn hơn 30?",

    bonus: "",
    idx: 34,
  },
  {
    title:
      "Cho bảng sau:\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc, SoLuongTon)\nLiệt kê danh sách các sản phẩm không chưá trong kho số 3?",
    practiceCode: "co-so-du-lieu-01",
    idx: 35,

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Select * From SanPham\nWhere KhoHang<>3",
      },
      {
        title: "Select * From SanPham\nWhere KhoHang!=3",
        isKey: false,
        idx: 1,
      },
      {
        title: "Cả 2 phương án: 1 và 2",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Select * From SanPham\nhere KhoHang not in 3",
        isKey: false,
      },
    ],
    bonus: "",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 36,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Select * From SinhVien\nWhere SoDu like 100000 and 500000",
      },
      {
        isKey: true,
        idx: 1,
        title: "Select * From SinhVien\nWhere SoDu Between 100000 and 500000",
      },
      {
        idx: 2,
        title: "Select * From SinhVien\nWhere SoDu in 100000 and 500000",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Select * From SinhVien\nWhere SoDu Having 100000 and 500000",
      },
    ],
    title:
      "Cho bảng sau:\nSinhVien(MaSV,MaKhoaHoc,SoDu)\nLiệt kê danh sách các sinh viên có số dư trong tài khoản lớn hơn bằng 100000 và nhỏ hơn bằng 500000?",
    bonus: "",
  },
  {
    title:
      "Cho bảng SinhVien(MaSV,TenSV,ChuyenNganh) với khóa chính là [Masv, ChuyenNganh]. Các sinh viên có thể học nhiều chuyên ngành khác nhau. Tạo câu truy vấn liệt kê danh sách các sinh viên không thuộc chuyên ngành CNTT.",
    idx: 37,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "SELECT * FROM SinhVien HAVING ChuyenNganh <> 'CNTT\"",
      },
      {
        idx: 1,
        title:
          "SELECT * FROM SinhVien GROUP BY ChuyenNganh HAVING ChuyenNganh <> 'CNTT\"",
        isKey: false,
      },
      {
        title:
          "SELECT * FROM SinhVien WHERE MaSV NOT IN (SELECT MaSV FROM SinhVien WHERE ChuyenNganh = 'CNTT')",
        idx: 2,
        isKey: true,
      },
      {
        title:
          "SELECT * FROM SinhVien WHERE MaSV NOT IN (SELECT MaSV FROM SinhVien Having ChuyenNganh = 'CNTT')",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Câu lệnh trên bị lỗi.",
      },
      {
        isKey: false,
        title:
          "Trả về danh sách gồm MaSV, ChuyenNganh của các sinh viên có thành phố là VungTau.",
        idx: 1,
      },
      {
        idx: 2,
        title: "Trả về một bảng gồm các chuyên ngành của từng sinh viên.",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Trả về 1 dòng gồm MaSV, ChuyenNganh của sinh viên có thành phố là VungTau.",
        isKey: false,
      },
    ],
    title:
      "Cho bảng SinhVien(MaSV,TenSV,ThanhPho,ChuyenNganh) với khóa chính là [Masv, ChuyenNganh]. Các sinh viên có thể học nhiều chuyên ngành khác nhau.\nCho câu lệnh SELECT của SQL sau:\nSelect MaSV, ChuyenNganh From SinhVien\nGROUP BY MaSV, ChuyenNganh\nHAVING ThanhPho='VungTau'\nChọn câu trả lời đúng?",

    idx: 38,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    idx: 39,
    answers: [
      {
        isKey: true,
        title: "Phụ thuộc bắc cầu.",
        idx: 0,
      },
      {
        title: "Phụ thuộc riêng phần.",
        idx: 1,
        isKey: false,
      },
      {
        title: "Phụ thuộc đầy đủ.",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Phụ thuộc hàm hiển nhiên.",
      },
    ],
    practiceCode: "co-so-du-lieu-01",

    title:
      "Cho bảng T(P,O,C) và các phụ thuộc hàm sau: P->O, P->C, C->O. Loại phụ thuộc hàm tồn tại trong lược đồ CSDL trên:",
    bonus: "",
  },
  {
    title:
      "Cho bảng TT {Q , I , C , E , B } và tập phụ thuộc hàm sau:Q -> E,B; E -> I,C; Q,C -> I;\nBao đóng của {I E B} là:",
    answers: [
      {
        isKey: true,
        title: "{I C E B}",
        idx: 0,
      },
      {
        isKey: false,
        title: "{B E C Q}",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "{Q E I C}",
      },
      {
        title: "{Q I C E}",
        idx: 3,
        isKey: false,
      },
    ],
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
    idx: 40,
  },
  {
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    idx: 41,
    answers: [
      {
        idx: 0,
        title: "{Q K J U H}",
        isKey: true,
      },
      {
        isKey: false,
        title: "{K J U H}",
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "{Q K U H}",
      },
      {
        title: "{Q K J U}",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Cho bảng TT {Q , K , J , U , H } và tập phụ thuộc hàm sau: Q -> U,H; U -> K,J; Q,J -> K;\nBao đóng của {Q U} là:",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 42,
    title:
      "Cho bảng TT {V , S , J , A , E , D , N } và tập phụ thuộc hàm sau: V, S -> D, N; E -> V , S, J; J, D -> A, N; A, N,J -> D; V, N, S -> E;\nBao đóng của {V S} là",
    bonus: "",
    answers: [
      {
        isKey: true,
        title: "{V S J A N E D}",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "{V S J N E D}",
      },
      {
        title: "{V S J A N E}",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "{V J A N E D}",
        idx: 3,
      },
    ],
  },
  {
    title:
      "Cho bảng Z(U, B, Q, T, A) và tập phụ thuộc hàm sau: H={ U->B Q; Q T->A; U Q-A; B->T; A->U B }\nCó 4 khóa dự tuyển trong Z là:",
    practiceCode: "co-so-du-lieu-01",
    idx: 43,

    answers: [
      {
        idx: 0,
        isKey: true,
        title: "U; BQ; Q T; A",
      },
      {
        title: "T; Q U; T U; Q",
        isKey: false,
        idx: 1,
      },
      {
        title: "Q; U B; Q T ; A",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "T; B Q U; Q T ; U A",
      },
    ],
    bonus: "",
  },
  {
    title:
      "Cho bảng:\nNhanVien\nMaNV TenNV\n1 An\n2 Hoa\nCho câu truy vấn sau SELECT * FROM NhanVien, thứ tự các dòng trả về sẽ dựa trên?",
    answers: [
      {
        isKey: false,
        title: "Không có thứ tự.",
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Thứ tự dựa trên khóa chính.",
      },
      {
        title: "Theo giá trị của cột MaNV, rồi đến cột TenNV",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Dựa vào thứ tự của các dòng khi chèn vào bảng, dòng nào chèn trước sẽ xếp trước.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    idx: 44,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Danh sách các customer_name và telephone của tất cả các khách hàng có trong bảng customers.",
      },
      {
        isKey: true,
        idx: 1,
        title:
          "Danh sách các customer_name và telephone của tất cả các khách hàng đang sống ở Boston, New York hoặc Denver.",
      },
      {
        idx: 2,
        title:
          "Danh sách các customer_name của tất cả các khách hàng đang sống ở Boston, New York hoặc Denver.",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title:
          "Danh sách các customer_name và telephone của tất cả các khách hàng đang sống ở Boston và New York và Denver.",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 45,
    title:
      "Cho biết kết quả của câu truy vấn bằng SQL sau?\nSelect customer_name, telephone\nfrom customers\nwhere city in (‘Boston’,’New York’,’Denver’);",
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    idx: 46,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Danh sách các item_no và description của tất cả các món mà có trọng lượng (weight) nhỏ hơn 100.",
      },
      {
        title:
          "Danh sách các item_no của tất cả các món mà có trọng lượng từ 101 đến 199..",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        title: "Danh sách của tất cả các món mà có trọng lượng lớn hơn 200.",
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Danh sách các item_no và description của tất cả các món mà có trọng lượng từ 101 đến 199..",
        isKey: true,
      },
    ],

    title:
      "Cho biết kết quả của câu truy vấn bằng SQL sau?\nSelect item_no, description\nfrom item\nwhere weight > 100 and weight < 200;",
  },
  {
    idx: 47,
    bonus: "",

    answers: [
      {
        title: "Trả về giá trị nhỏ nhất của cột MoTaSanPham.",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Câu lệnh trên bị lỗi.",
      },
      {
        isKey: false,
        title: "Không có câu nào đúng.",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title:
          "Trả về dòng có ký tự chữ cái đầu tiên theo thứ tự abc của cột MoTaSanPham trong bảng SanPham.",
      },
    ],
    title:
      "Cho biết kết quả của câu truy vấn bằng SQL sau?\nSelect min(MoTaSanPham)\nfrom SanPham;",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 48,

    title:
      "Cho biết kết quả của câu truy vấn bằng SQL sau?\nSelect sum(DonGia) as TongDonGia\nfrom SanPham\nwhere LoaiSanPham = ‘Cotton’;",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Trả về tổng đơn giá của tất cả các sản phẩm mà có lọai sản phẩm là Cotton.",
      },
      {
        idx: 1,
        isKey: false,
        title: "Trả về tổng đơn giá của tất cả các sản phẩm.",
      },
      {
        title: "Trả về đơn giá của bất kỳ sản phẩm nào có trong bảng SanPham.",
        idx: 2,
        isKey: false,
      },
      {
        title:
          'Trả về đơn giá của sản phẩm đầu tiên mà có lọai sản phẩm là "Cotton" trong bảng SanPham.',
        idx: 3,
        isKey: false,
      },
    ],
    bonus: "",
  },
  {
    title:
      "Cho các bảng sau:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho câu truy vấn SQL sau:\nSELECT TenSV, AVG(Diem)\nFROM SinhVien s,KetQua k\nWHERE s.MaSV=k.MaSV\nGROUP BY TenSV\nHAVING avg(Diem) >70\nKết quả nào sau đây là đúng cho câu truy vấn trên?",

    answers: [
      {
        title: "Câu truy vấn trên không đúng cú pháp.",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Câu truy vấn trên trả về tên sinh viên và điểm trung bình cuả sinh viên đó.",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Câu truy vấn trên trả về Tên của những sinh viên có điểm trung bình lớn hơn 70.",
        isKey: true,
      },
      {
        idx: 3,
        title: "Tất cả đều sai.",
        isKey: false,
      },
    ],
    idx: 49,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    idx: 50,
    bonus: "",
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Update SanPham set DonGia= DonGia * 1.1 where DatHang.MaKH = 'C01';",
      },
      {
        idx: 1,
        title:
          "Update SanPham, DatHang set SanPham.DonGia = SanPham.DonGia * 10% where DatHang.MaKH = 'C01';",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Update SanPham set DonGia = 1.1 * DonGia where MaSP in (select MaSP from DatHang where MaKH = 'C01');",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Update SanPham set DonGia = 0.1 * DonGia where MaSP in (select MaSP from DatHang where MaKH = 'C01');",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho các bảng sau:\nKhachHang (MaKH, TenKH, ThanhPho)\nSanPham(MaSP, TenSP, SoLuong, DonGia)\nDaiLy (MaDL, TenDL, ThanhPho, HueHong)\nDatHang (MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien).\nChọn câu lệnh SQL để giải quyết câu truy vấn sau:\nTăng giá cuả mỗi sản phẩm trong bảng SanPham lên 10% cho tất cả các sản phẩm mà khách hàng 'C01' đặt mua.",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 51,
    bonus: "",
    answers: [
      {
        idx: 0,
        title:
          "Select TenKH from KhachHang where MaKH in (select MaKH from DatHang where MaSP = 'P02' OR MaDL = 'A04')",
        isKey: true,
      },
      {
        idx: 1,
        title:
          "Select TenKH from KhachHang where MaKH in (select o1.MaKH from DatHang o1, DatHang o2 Where o1.MaSP = 'P02' and o2.MaDL = 'A04' and o1.MaSP = o2.MaSP);",
        isKey: false,
      },
      {
        idx: 2,
        title:
          "Select TenKH from KhachHang c, DatHang o1, DatHang o2 where c.MaKH = o1.MaKH and c.MaKH = o2.MaKH and MaSP = 'P02' and MaDL = 'A04';",
        isKey: false,
      },
      {
        title:
          "Select TenKH from KhachHang c, DatHang o1, DatHang o2 where MaSP = 'P02' and MaDL = 'A04';",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Cho các bảng sau:\nKhachHang (MaKH, TenKH, ThanhPho)\nSanPham(MaSP, TenSP, SoLuong, DonGia)\nDaiLy (MaDL, TenDL, ThanhPho, HueHong)\nDatHang (MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien)\nChọn câu lệnh SQL để giải quyết câu query sau.\nLiệt kê danh sách tên các khách hàng đặt mua sản phẩm 'P02' hoặc đặt mua thông qua đaị lý 'A04'.",
  },
  {
    title:
      "Cho các lựơc đồ quan hệ sau:\nNhaCungCap(MaNCC,TenNCC,ThanhPho)\nSanPham(MaSP,TenSP,Mau)\nCungCap(MaNCC,MaSP,SoLuong)\nHãy cho biết ý nghĩa của lệnh truy vấn sau:\nSelect TenNCC\nFrom NhaCungCap X\nWhere Not Exists\n(Select *\nFrom CungCap Y\nWhere X.MaNCC = Y.MaNCC)",

    bonus: "",
    idx: 52,
    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Trả về tên cuả nhà cung cấp mà không tồn tại trong cơ sở dữ liệu.",
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Trả về tên cuả nhà cung cấp mà không cung cấp bất kỳ sản phẩm nào.",
      },
      {
        isKey: false,
        title:
          "Trả về tên cuả nhà cung cấp mà không cung cấp tất cả các sản phẩm.",
        idx: 2,
      },
      {
        title: "Không có phương án nào.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    bonus: "",
    idx: 53,
    title:
      "Cho các phụ thuộc hàm (H I -> D, D -> P) của lược đồ quan hệ N(H I D P), phụ thuộc hàm H -> P có thể được suy ra nhờ vào:",

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Luật phản xạ",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Luật thêm vào",
      },
      {
        isKey: false,
        idx: 2,
        title: "Luật bắc cầu",
      },
      {
        isKey: true,
        title: "Tất cả điều sai.",
        idx: 3,
      },
    ],
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    idx: 54,

    answers: [
      {
        isKey: false,
        title: "Z là khóa của lược đồ quan hệ B",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Không có câu nào đúng",
      },
      {
        idx: 2,
        title: "Q C là khóa của lược đồ quan hệ B ồ",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Z Q là khóa của lược đồ quan hệ B",
      },
    ],
    title:
      "Cho các phụ thuộc hàm sau F= (Z Q -> A N C, Z -> C), của lược đồ quan hệ B = (Z,Q,A,N,C) ta có thể suy ra:",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Luật phản xạ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Luật thêm vào",
      },
      {
        title: "Luật bắc cầu",
        isKey: false,
        idx: 2,
      },
      {
        title: "Tất cả điều sai",
        idx: 3,
        isKey: true,
      },
    ],

    title:
      "Cho các phụ thuộc hàm{B Q -> L, L -> H} của lược đồ quan hệ S(B Q L H), phụ thuộc hàm B -> H có thể được suy ra nhờ vào:",
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 55,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    answers: [
      {
        isKey: true,
        title: "Câu truy vấn trên bị lỗi.",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Câu truy vấn trên trả về danh sách tất cả các tên môn học.",
      },
      {
        title:
          "Câu truy vấn trên trả về danh sách tất cả các tên môn học mà sinh viên học có điểm lớn hơn 70.",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Câu truy vấn trên trả về danh sách tất cả các tên môn học mà sinh viên học có điểm trung bình lớn hơn 70.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 56,

    title:
      "Cho CSDL gồm các bảng sau:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho câu truy vấn SQL sau:\nSELECT TenMH\nFROM MonHoc s,KetQua k\nWHERE s.MaMH=k.MaMH\nGROUP BY TenMH\nHAVING Diem >70\nChọn câu trả lời đúng?",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 57,
    bonus: "",
    title:
      "Cho CSDL gồm các bảng sau:\nKhachHang(MaKH, TenKH, ThanhPho)\nSanPham(MaSP, TenSP, SoLuong, DonGia)\nDaiLy (MaDL, TenDL, ThanhPho, HueHong)\nDatHang (MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien)\nChọn câu lệnh SQL để giải quyết câu truy vấn sau:\nLiệt kê danh sách tên các khách hàng mua sản phẩm 'P02'",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Select TenKH from KhachHang c, DatHang o where o.MaSP = 'P02';",
      },
      {
        title: "Select TenKH from KhachHang c where DatHang.MaSP = 'P02';",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Select TenKH from KhachHang c, DatHang o where c.MaKH = o.MaKH and o.MaSP = 'P02';",
      },
      {
        idx: 3,
        isKey: false,
        title: "Select TenKH from SanPham where MaSP = 'P02';",
      },
    ],
  },
  {
    bonus: "",
    title:
      "Cho CSDL gồm các bảng sau:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho 2 câu truy vấn SQL sau:\nSELECT MaSV\nFROM SinhVien\nWHERE MaSV not in (Select MaSV from KetQua where MaMH='CSDL')\nSELECT MaSV\nFROM SinhVien s\nWHERE not exists (Select MaSV from KetQua d where MaMH='CSDL' and s.masv=d.masv)\nChọn câu trả lời đúng?",
    idx: 58,

    answers: [
      {
        idx: 0,
        title:
          "Câu truy vấn thứ nhất sẽ trả về số bộ nhiều hơn câu truy vấn thứ hai.",
        isKey: false,
      },
      {
        title:
          "Câu truy vấn thứ nhất sẽ trả về số bộ ít hơn câu truy vấn thứ hai.",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Cả hai câu truy vấn trên cho cùng một kết quả.",
        idx: 2,
      },
      {
        idx: 3,
        title: "Câu truy vấn thứ hai bị lỗi.",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title:
      "Cho CSDL gồm các bảng sau:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho câu truy vấn SQL sau:\nSELECT TenSV\nFROM SinhVien s,KetQua k\nWHERE s.MaSV =k.MaSV\nand Diem is null\nChọn câu trả lời đúng?",
    idx: 59,

    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Câu truy vấn trên không hợp lệ.",
      },
      {
        isKey: false,
        title: "Nếu sinh viên nào bị trùng tên thì không in ra được kết quả.",
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Câu truy vấn trên trả về danh sách các tên sinh viên mà chưa có cho điểm của một hoặc vài môn học nào đó.",
        isKey: true,
      },
      {
        title:
          "Câu truy vấn trên trả về danh sách các tên sinh viên mà chưa có cho điểm tất cả các môn học nào đó.",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 60,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Câu truy vấn trên bị lỗi, không thể thực hiện được.",
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Câu truy vấn trên trả về danh sách các tên sinh viên và điểm trung bình của từng sinh viên đó.",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Câu truy vấn trên trả về danh sách các tên sinh viên và điểm của từng môn học.",
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều sai.",
      },
    ],
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho CSDL gồm các bảng sau:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho câu truy vấn SQL sau:\nSELECT TenSV,Avg(Diem)\nFROM SinhVien s,KetQua k\nWHERE s.MaSV =k.MaSV\nChọn câu trả lời đúng?",
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Câu truy vấn thứ nhất sẽ trả về số bộ nhiều hơn câu truy vấn thứ hai.",
        isKey: true,
      },
      {
        title:
          "Câu truy vấn thứ nhất sẽ trả về số bộ ít hơn câu truy vấn thứ hai.",
        isKey: false,
        idx: 1,
      },
      {
        title: "Cả hai câu truy vấn trên cho cùng một kết quả.",
        idx: 2,
        isKey: false,
      },
      {
        title: "Câu truy vấn thứ hai bị lỗi, không thể thực thi được.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 61,

    title:
      "Cho CSDL gồm các bảng:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho 2 câu truy vấn SQL sau:\n\nSELECT MaSV\nFROM SinhVien\nWHERE MaSV not in (Select MaSV from KetQua where MaMH='CSDL')\n\nSELECT MaSV\nFROM SinhVien\nWHERE not exists (Select MaSV from KetQua where MaMH='CSDL' )\nChọn câu trả lời đúng?",
  },
  {
    idx: 62,

    bonus: "",
    answers: [
      {
        idx: 0,
        title: "Danh sách các tên môn học có trên 5 sinh viên học.",
        isKey: false,
      },
      {
        isKey: true,
        title:
          "Trả về tên môn học và số sinh viên tham gia học. Mỗi môn học có nhiều hơn 5 sinh viên học và có điểm lớn hơn 40.",
        idx: 1,
      },
      {
        isKey: false,
        title: "Câu truy vấn trên bị lỗi.",
        idx: 2,
      },
      {
        isKey: false,
        title:
          "Danh sách các tên môn học có trên 5 sinh viên học mà có điểm lớn hơn 40.",
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho CSDL gồm các bảng:\nSinhVien(MaSV,TenSV,DiaChi,MaKhoaHoc)\nKetQua(MaSV,MaMH,Diem)\nMonHoc(MaMH,TenMH)\nCho câu truy vấn SQL sau:\nSELECT TenMH, count(*)\nFROM MonHoc s,KetQua k\nWHERE s.MaMH=k.MaMH\nAnd Diem>40\nAnd k.MaMH in(Select MaMH From KetQua Group by MaMH Having count(*)>5)\nGROUP BY TenMH\nChọn câu trả lời đúng?",
  },
  {
    title:
      "cho hai quan hệ C (N, W) và A (W, D) và các câu query sau: \nP:\nSELECT N\nFROM C, A\nWHERE C.W=A.W;\n\nvà\nT:\nSELECT N\nFROM C\nWHERE W in\n(SELECT W From A);\nCâu nào sau đây là đúng?",
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    idx: 63,
    answers: [
      {
        title: "P và T trả về kết quả như nhau.",
        idx: 0,
        isKey: false,
      },
      {
        title: "P và T trả về kết quả khác nhau.",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        title: "Kết quả cuả P luôn luôn chứa kết quả cuả T.",
        idx: 2,
      },
      {
        title: "Kết quả cuả T luôn luôn chứa kết quả cuả P.",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    idx: 64,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "{P} -->{Z, X, E}",
      },
      {
        title: "{Z} -->{Z}",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "{E}-->{Z}",
      },
      {
        title: "{P} --> {P}",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Cho lược đồ B(P, Z, X, E) đạt BCNF, có khóa chính là P. Phụ thuộc hàm nào sau đây không là của B?",
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title:
      "Cho lược đồ Cơ Sở Dữ liệu sau:\nNhanVien ( MaNV, HoNV, TenNV, DiaChi, ThanhPho )\nKhachHang( MaKH, TenKH, DiaChi, ThanhPho, SoDu, GioiHanTinDung)\nHoaDon( MaHD, NgayLapHoaDon, MaKH, MaNV)\nChiTietHoaDon (MaHD, MaSP, SoLuong,GiaBan )\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc)\nDựa vào lược đồ Cơ Sở Dữ liệu trên,Hãy liệt kê tất cả các thông tin Khách hàng có giới hạn tín dụng là 7500.",
    answers: [
      {
        title: "SELECT MaNV WHERE GioiHanTinDung=7500",
        isKey: false,
        idx: 0,
      },
      {
        title: "SELECT KhachHang WHERE GioiHanTinDung=’7500’",
        idx: 1,
        isKey: false,
      },
      {
        title: "SELECT * From KhachHang WHERE GioiHanTinDung=7500",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "SELECT MaKH WHERE GioiHanTinDung=7500",
      },
    ],

    idx: 65,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    idx: 66,
    title:
      "Cho lược đồ Cơ sở dữ liệu sau:\nSinhVien(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop)\nLop(MaLop, TenLop, MaKhoa, GVCN)\nKetQua(MaSV, MaMH, LanThi, Diem)\nMonHoc(MaMH, TenMH, SoTinChi)\nLiệt kê danh sách các sinh viên có điểm điểm trung bình cao nhất. Danh sách gồm (MaSV, HoSV, TenSV,DiemTrungBinh)?",

    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "Select Top 1 K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem)\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV\nGroup by K.MaSV, HoSV, TenSV",
      },
      {
        title:
          "Select K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem)\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV\nAnd DiemTrungBinh>=ALL(Select Avg(Diem) From KetQua Group by MaSV )",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Select K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem)\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV\nAnd DiemTrungBinh>=ALL(Select Avg(Diem) From KetQua Group by MaSV )\nGroup by K.MaSV, HoSV, TenSV",
      },
      {
        title:
          "Select K.MaSV, HoSV, TenSV,DiemTrungBinh=Avg(Diem)\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV\nGroup by K.MaSV, HoSV, TenSV\nHaving avg(diem)>=ALL(Select Avg(Diem) From KetQua Group by MaSV )",
        isKey: true,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ Cơ sở dữ liệu sau:\nSinhVien(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop)\nLop(MaLop, TenLop, MaKhoa, GVCN)\nKetQua(MaSV, MaMH, LanThi, Diem)\nMonHoc(MaMH, TenMH, SoTinChi)\nTạo query để tính sỉ số thực trên từng lớp. Danh sách bao gồm: MaLop, TenLop và SiSo ?",
    idx: 67,
    answers: [
      {
        title:
          "Select S.Malop,TenLop,SiSo=Sum(MaSV)\nFrom Lop L, SinhVien S\nGroup by S.Malop,TenLop",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title:
          "Select S.Malop,TenLop,SiSo=Sum(MaSV)\nFrom Lop L, SinhVien S\nWhere L.Malop=S.MaLop\nGroup by S.Malop,TenLop",
      },
      {
        title:
          "Select S.Malop,TenLop,SiSo=Count(MaSV)\nFrom Lop L, SinhVien S\nWhere L.Malop=S.MaLop\nGroup by S.Malop,TenLop",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Select S.Malop,TenLop,SiSo=Count(SinhVien)\nFrom Lop L, SinhVien S\nWhere L.Malop=S.MaLop\nGroup by S.Malop,TenLop",
        idx: 3,
        isKey: false,
      },
    ],
    bonus: "",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",

    title:
      "Cho lược đồ Cơ sở dữ liệu sau:\nSinhVien(MaSV, HoSV, TenSV, Phai, NgaySinh, DiaChi, DienThoai, MaLop)\nLop(MaLop, TenLop, MaKhoa, GVCN)\nKetQua(MaSV, MaMH, LanThi, Diem)\nMonHoc(MaMH, TenMH, SoTinChi)\nLiệt kê danh sách các sinh viên gồm (MaSV, HoSV, TenSV) đăng ký ít nhất là 3 môn học.",
    answers: [
      {
        title:
          "Select K.MaSV, HoSV, TenSV\nFrom SinhVien S, KetQua K\nWhere S.MASV=K.MASV And count(MaMH)>=3",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K\nWhere S.MaSV=K.MaSV\nHaving count(MaMH)>=3",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title:
          "Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K\nWhere S.MaSV=K.MaSV\nGroup by K.MaSV, HoSV, TenSV\nHaving count(MaMH)>=3",
      },
      {
        isKey: false,
        title:
          "Select K.MaSV, HoSV, TenSV From SinhVien S, KetQua K\nWhere S.MASV=K.MASV And count(MaMH)>=3\nGroup by K.MaSV, HoSV, TenSV",
        idx: 3,
      },
    ],
    idx: 68,
  },
  {
    bonus: "",
    answers: [
      {
        title:
          "Select TenSP from SanPham where MaSP in (select MaSP from DatHang where\nMaKH = 'c01' and MaKH = 'c02');",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Select TenSP from SanPham where MaSP in (select o1.MaSP from DatHang o1,\nDatHang o2 where o1.MaKH = 'c01' and o2.MaKH = 'c02' and o1.MaSP =o2.MaSP);",
      },
      {
        idx: 2,
        title:
          "Select TenSP from SanPham p, DatHang o1, DatHang o2 where p.MaSP =o1.MaSP and p.MaSP = o2.MaSP;",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title:
          "Select distinct TenSP from SanPham p, DatHang o1, DatHang o2 where p.MaSP = o1.MaSP and p.MaSP = o2.MaSP and o1.MaKH <> o2.MaKH;",
      },
    ],
    idx: 69,
    title:
      "Cho lược đồ CSDL gồm các bảng sau:\nKhachHang(MaKH, TenKH, ThanhPho)\nSanPham(MaSP, TenSP, SoLuong, DonGia)\nDaiLy (MaDL, TenDL, ThanhPho, HueHong)\nDatHang(MaDH, NgayDH, MaKH, MaDL, MaSP, SoLuong, ThanhTien)\n\nChọn câu lệnh SQL để giải quyết câu truy vấn sau.\nLiệt kê tên các sản phẩm mà có từ hai khách hàng trở lên đặt hàng.",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 70,
    bonus: "",
    answers: [
      {
        title: "Select * From SanPham\nWhere GiaGoc=Max(GiaGoc)",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title:
          "Select * From SanPham\nWhere GiaGoc=(Select Max(GiaGoc) From SanPham)",
      },
      {
        idx: 2,
        isKey: false,
        title: "Select Top 1 * From SanPham\nOrder by GiaGoc",
      },
      {
        idx: 3,
        title: "Tất cả các phương án trên là đúng.",
        isKey: false,
      },
    ],
    title:
      "Cho lược đồ CSDL sau:\nNhanVien ( MaNV, HoNV, TenNV, DiaChi, ThanhPho )\nKhachHang( MaKH, TenKH, DiaChi, ThanhPho, SoDu, GioiHanTinDung)\nHoaDon( MaHD, NgayLapHoaDon, MaKH, MaNV)\nChiTietHoaDon (MaHD, MaSP, SoLuong,GiaBan )\nSanPham(MaSP,MoTa, NhomHang, KhoHang,GiaGoc)\nDựa vào lược đồ Cơ Sở Dữ liệu trên, Liệt kê ra sản phẩm có giá lớn nhất?",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    idx: 71,
    answers: [
      {
        idx: 0,
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
      },
      {
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Dạng chuẩn 1(1NF)",
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
      },
    ],
    title:
      "Cho lược đồ quan hệ R(patient, consultant, hospital, address, date, time) với Khoa chính: (patient, consultant). Xác định dạng chuẩn cao nhất của R?",
  },
  {
    idx: 72,
    bonus: "",
    title:
      "Cho lược đồ quan hệ gồm:\nNhaCungCap(MaNCC,TenNCC,ThanhPho)\nHangHoa(MaHang,TenHang,MauSac)\nCungUng(MaNCC,MaHang,SoLuong)\nDùng SQL để tạo câu truy vấn sau: Liệt kê danh sách gồm MaHang,TenHang và số nhà cung cấp đến từ Atlanta mà cung cấp các sản phẩm có số lượng >100?",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title:
          "Select Y.MaHang, Y.TenHang, Count(*)\nFrom NhaCungCap X, HangHoa Y, CungUng Z\nWhere X.MaNCC = Z.MaNCC and Z.MaHang = Y.MaHang\nand X.ThanhPho= 'Atlanta' and Z.SoLuong > 100;",
        idx: 0,
      },
      {
        title:
          "Select Y.MaHang, Y.TenHang, Count(*)\nFrom NhaCungCap X, HangHoa Y, CungUng Z\nWhere X.MaNCC = Z.MaNCC and Z.MaHang = Y.MaHang and X.ThanhPho= 'Atlanta'\nGroup by Y.MaHang, Y.TenHang\nHaving Count(*) > 100\nOrder by Y.MaHang ;",
        isKey: false,
        idx: 1,
      },
      {
        title:
          "Select Y.MaHang, Y.TenHang, Count(*)\nFrom NhaCungCap X, HangHoa Y, CungUng Z\nWhere X.MaNCC = Z.MaNCC and Z.MaHang = Y.MaHang\nand X.ThanhPho= 'Atlanta' and Z.SoLuong > 100\nGroup by Y.MaHang, Y.TenHang\nOrder by Y.MaHang ;",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "Select Y.MaHang, Y.TenHang, Count(*)\nFrom NhaCungCap X, HangHoa Y, CungUng Z\nWhere X.MaNCC = Z.MaNCC and Z.MaHang = Y.MaHang\nand X.ThanhPho= 'Atlanta' and Z.SoLuong > 100\nOrder by Y.MaHang ;",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Cho lược đồ quan hệ gồm:\nNhaCungCap(MaNCC,TenNCC,ThanhPho)\nHangHoa(MaHang,TenHang,MauSac)\nCungUng(MaNCC,MaHang,SoLuong)\nTạo câu truy vấn SQL để tìm các sản phẩm được cung ứng bởi tất cả các nhà cung cấp.",
    bonus: "",
    idx: 73,
    answers: [
      {
        title:
          "Select MaHang From CungUng\nGroup By MaHang Having Count(*) = (Select Max(Count(*)) From CungUng Group By MaHang)",
        idx: 0,
        isKey: false,
      },
      {
        title:
          "Select Max(X.MaHang) From CungUng X, NhaCungCap Y\nWhere X.MaNCC = Y.MaNCC",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "Select P.MaHang From HangHoa P, CungUng S\nWhere P.MaHang = S.MaHang",
        isKey: false,
        idx: 2,
      },
      {
        title:
          "Select MaHang From CungUng\nGroup By MaHang Having Count(*) = (Select Count(*) From NhaCungCap)",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Select MaHang,sum(SoLuong) From CungUng Group By MaHang;",
      },
      {
        title:
          "Select MaNCC, MaHang, sum(SoLuong) From HangHoa H, CungUng C\nWhere H.MaHang = C.MaHang\nGroup by MaNCC, MaHang;",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Select MaHang,SoLuong From CungUng;",
        isKey: false,
      },
      {
        idx: 3,
        title: "Select sum(SoLuong) From CungUng;",
        isKey: false,
      },
    ],

    idx: 74,
    title:
      "Cho lược đồ quan hệ gồm:\nNhaCungCap(MaNCC,TenNCC,ThanhPho)\nHangHoa(MaHang,TenHang,MauSac)\nCungUng(MaNCC,MaHang,SoLuong)\nTạo câu truy vấn SQL để tính tổng số lượng của từng sản phẩm đã cung ứng?",
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    idx: 75,
    title:
      "Cho lược đồ quan hệ gồm:\nPhongBan(MaPB,TenPB,NganSach)\nNhanVien(MaNV,TenNV,ThanhPho,Luong,MaPB)\nDùng SQL để tạo câu truy vấn sau: Liệt kê tên các phòng ban có ngân sách ít hơn tổng tiền lương của các nhân viên làm việc trong phòng ban đó?",

    answers: [
      {
        idx: 0,
        isKey: false,
        title:
          "Select TenPB From PhongBan P, NhanVien N\nWhere N.MaPB=P.MaPB AND NganSach <Luong",
      },
      {
        title:
          "Select TenPB From PhongBan P\nWhere NganSach< (Select sum(Luong) From NhanVien N Where N.MaPB = P.MaPB)",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        title:
          "Select TenPB From PhongBan\nWhere NganSach< (Select sum(Luong) From NhanVien)",
        isKey: false,
      },
      {
        title:
          "Select TenPB From PhongBan P, NhanVien N\nWhere N.MaPB=P.MaPB AND NganSach <(Select sum(Luong) From NhanVien Group By MaPB)",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    answers: [
      {
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
      },
    ],
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ Q(A,B,C,D) và tập phụ thuộc hàm F={AB->C, B->D,BC->A}. Hỏi Q đạt dạng chuẩn nào?",
    idx: 76,
  },
  {
    idx: 77,

    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ Q(A,B,C,D) và tập phụ thuộc hàm F={AB->C, D->B,C->ABD}. Hỏi Q đạt dạng chuẩn nào?",
    bonus: "",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ Q(A,B,C,D) và tập phụ thuộc hàm F={AB->CD, B->C,C->D}. Phụ thuộc hàm nào là dư thừa?",

    bonus: "",
    answers: [
      {
        idx: 0,
        title: "AB->CD",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "B->C",
      },
      {
        idx: 2,
        isKey: false,
        title: "C->D",
      },
      {
        isKey: false,
        title: "Không có phụ thuộc hàm dư thừa",
        idx: 3,
      },
    ],
    idx: 78,
  },
  {
    idx: 79,
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        isKey: false,
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ Q(A,B,C,D,E,G) và tập phụ thuộc hàm F={A->BC, C->DE,E- >G}. Hỏi Q đạt dạng chuẩn nào?",
    bonus: "",
  },
  {
    title:
      "Cho lược đồ quan hệ Q(A,B,C,D,E,G,H) và tập phụ thuộc hàm F={A->BC,D->E,H- >G}. Hỏi Q đạt dạng chuẩn nào?",

    answers: [
      {
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
        idx: 2,
      },
      {
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 80,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
  },
  {
    idx: 81,
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ Q(A,B,C,D,E,G,H) và tập phụ thuộc hàm F={C->AB,D->E,B- >G}. Hỏi Q đạt dạng chuẩn nào?",
    answers: [
      {
        idx: 0,
        title: "Dạng chuẩn 1 (1NF)",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
      },
    ],
    bonus: "",
  },
  {
    bonus: "",
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
        isKey: true,
      },
    ],

    title:
      "Cho lược đồ quan hệ Q(A,B,C,D,E,I) và tập phụ thuộc hàm F={ACD->EBI, CE->AD}. Hỏi Q đạt dạng chuẩn nào?",
    idx: 82,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 83,
    title:
      "Cho lược đồ quan hệ Q(C,S,Z) và tập phụ thuộc hàm F={CS->Z,Z->C}. Hỏi Q đạt dạng chuẩn nào?",
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Dạng chuẩn 1 (1NF)",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
      },
      {
        isKey: true,
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
      },
    ],
  },
  {
    bonus: "",
    answers: [
      {
        title: "AB->GH",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        title: "A->G",
        idx: 1,
      },
      {
        idx: 2,
        title: "B->I",
        isKey: false,
      },
      {
        title: "A->I",
        isKey: false,
        idx: 3,
      },
    ],

    practiceCode: "co-so-du-lieu-01",
    idx: 84,
    title:
      "Cho lược đồ quan hệ R và tập các phụ thuộc hàm F={AB->E, AG->I, BE->I, E->G, GI->H}. Phụ thuộc hàm nào sau đây được suy ra từ F?",
  },
  {
    answers: [
      {
        title: "A->BC",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "B->D",
      },
      {
        title: "AB->D",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Không có phụ thuộc hàm dư thừa",
      },
    ],
    bonus: "",
    idx: 85,
    title:
      "Cho lược đồ quan hệ R(A,B,C,D) và tập phụ thuộc hàm F={A->BC, B->D,AB->D}. Phụ thuộc hàm nào là dư thưà?",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "K->AQO",
      },
      {
        isKey: true,
        idx: 1,
        title: "B->KQO",
      },
      {
        isKey: false,
        title: "A->QO",
        idx: 2,
      },
      {
        title: "K->B",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    idx: 86,
    title:
      "Cho lược đồ quan hệ R(B,K,Q,A,O) với tập phụ thuộc hàm F={BK->QO, K->A, A- >B}.\nPhụ thuộc hàm nào sau đây không được dẫn xuất ra từ F?",
  },
  {
    title:
      "Cho lược đồ quan hệ R(Emp#,Dept#,City) và khóa K(Emp#,Dept#), tập phụ thuộc hàm F:\nF = {Emp# -> City, Emp# -> Dept#, Dept# -> City, Emp#,Dept# -> City},\nTập phụ thuộc hàm nào sau đây là phủ tối thiểu của F?",
    practiceCode: "co-so-du-lieu-01",
    bonus: "",

    answers: [
      {
        title: "{Emp#, Dept# -> City, Emp# -> Dept}",
        isKey: false,
        idx: 0,
      },
      {
        title: "{Emp# -> Dept#, Dept# -> City}",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "{Emp# -> City, Dept# -> City}",
        idx: 2,
      },
      {
        isKey: false,
        title: "{Emp# -> City, Emp# -> Dept#}",
        idx: 3,
      },
    ],
    idx: 87,
  },
  {
    idx: 88,
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ R(I,V,H,P,O,F,M) với tập phụ thuộc hàm F={IV->FM, O->IVH, HF->PM, HPM->F, IVM->O}.\nBao đóng của {I V} là:",
    bonus: "",

    answers: [
      {
        title: "{I H P M O F}",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "{I V H P M O F}",
      },
      {
        idx: 2,
        isKey: false,
        title: "{I V H M O F}",
      },
      {
        title: "{I V H P M O}",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    idx: 89,
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    title:
      "Cho lược đồ quan hệ R(J, F, Z, G) với tập phụ thuộc hàm F={J F->Z G, F Z->J G}. Bao đóng của {J F} là:",
    answers: [
      {
        idx: 0,
        title: "{J F Z}",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "{G J Z}",
      },
      {
        title: "{J F G}",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        title: "{F Z J G}",
        idx: 3,
      },
    ],
  },
  {
    idx: 90,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "B",
      },
      {
        idx: 1,
        title: "W, R",
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "N",
      },
      {
        title: "C",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ R(N,W,R,B,C) với tập phụ thuộc hàm F={N->W, W->R, N->B, C->N, B->C}. Tập thuộc tính nào sau đây không phải là khóa?",
    bonus: "",
  },
  {
    idx: 91,
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: true,
        title: "G, I",
        idx: 0,
      },
      {
        idx: 1,
        title: "F",
        isKey: false,
      },
      {
        isKey: false,
        title: "P",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "O",
      },
    ],

    title:
      "Cho lược đồ quan hệ R(P, G, I, F, O) với tập phụ thuộc hàm F={P->G, G->I, GI->P, P->F, O->P, F->O}. Tập thuộc tính nào sau đây không phải là khóa?",
  },
  {
    idx: 92,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "VZ->V",
      },
      {
        idx: 1,
        title: "VY->WZ",
        isKey: true,
      },
      {
        title: "ZW->YF",
        idx: 2,
        isKey: false,
      },
      {
        title: "Z->F",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Cho lược đồ quan hệ R(V,Z,W,Y,F) với tập phụ thuộc hàm F={UX->VB, X->N, N->U}. Phụ thuộc hàm nào sau đây không được suy diễn từ F:",
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "{W B A}",
      },
      {
        idx: 1,
        title: "{W B A K}",
        isKey: false,
      },
      {
        title: "{W B F K A}",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "{W B A F}",
      },
    ],
    idx: 93,
    title:
      "Cho lược đồ quan hệ R(W,B,F,K,A) với tập phụ thuộc hàm F={WB->F, FK->A, F->W, A->K}. Bao đóng của tập thuộc tính {W, B, A} đối với F là:",
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 94,
    answers: [
      {
        isKey: true,
        title: "TacGia,NhaXB -> NhaXB",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "TacGia -> NhaXB",
      },
      {
        idx: 2,
        isKey: false,
        title: "TenSach-> TacGia",
      },
      {
        isKey: false,
        title: "NamXB -> NhaXB",
        idx: 3,
      },
    ],
    bonus: "",
    title:
      "Cho lược đồ quan hệ sau: Sach(TenSach,TacGia,NamXB,NhaXB) Chúng ta có thể suy ra phụ thuộc hàm:",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 95,
    title:
      "Cho mô hình thực thể kết hợp (Mô hình ER) như hình bên.\n\nHãy chuyển từ mô hình ER sang lược đồ Cơ sở dữ liệu?",
    bonus: "",
    answers: [
      {
        isKey: true,
        idx: 0,
        title:
          "Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học, mã môn học)\nMôn học(Mã môn học, tên môn học, thời lượng) Khóa chính là Mã môn học\nVới: khoá chính của bảng học viên là Mã học viên và khoá chính của bảng môn học là Mã môn học.",
      },
      {
        isKey: false,
        idx: 1,
        title:
          "Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học,Mã môn học)\nMôn học(Mã môn học, tên môn học, thời lượng, Mã học viên)\nVới: khóa chính của bảng học viên là Mã học viên, Mã môn học\nvà khóa chính của bảng môn học là Mã môn học, Mã học viên.",
      },
      {
        idx: 2,
        title:
          "Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học)\nMôn học(Mã môn học, tên môn học, thời lượng)\nGhiDanh(Mã học viên, Mã môn học)\nVới: khoá chính của bảng học viên là Mã học viên và khoá chính của bảng môn học là Mã môn học.",
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học)\nMôn học(Mã học viên, tên môn học, thời lượng, Mã học viên)\nVới: khóa chính của bảng học viên là Mã học viên và khoá chính của bảng môn học là Mã môn học.",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: false,
      },
      {
        title: "BCNF",
        isKey: false,
        idx: 2,
      },
      {
        title: "3NF",
        idx: 3,
        isKey: true,
      },
    ],
    title:
      "Cho quan hệ student(sno, sname, cname, cno) với tập các khóa của student K={ (sno, cno),(sname, cname)}. Xác định dạng chuẩn cao nhất của student:",

    bonus: "",
    idx: 96,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho quan hệ (A,B,C), nếu A -> B, A -> C, và B -> C , câu nào sau đây đúng?",
    bonus: "",
    idx: 97,

    answers: [
      {
        isKey: true,
        title: "Quan hệ không ở dạng chuẩn 2NF",
        idx: 0,
      },
      {
        idx: 1,
        title: "B là 1 khóa chính",
        isKey: false,
      },
      {
        idx: 2,
        title: "C là 1 định danh",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Quan hệ giữa A và B là 1 khóa chính",
      },
    ],
  },
  {
    idx: 98,
    bonus: "",
    answers: [
      {
        idx: 0,
        title: "Select MaNCC From CungUng;",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Select MaNCC From CungUng Order by MaNCC;",
      },
      {
        isKey: false,
        title: "Select * From CungUng;",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Select Distinct MaNCC From CungUng;",
      },
    ],

    title:
      "Cho quan hệ CungUng(MaNCC,MaHang,SoLuong)\ncâu truy vấn SQL nào sao đây tương đương với phép chiếu (project) trong đại số quan hệ dựa trên cột MaNCC?",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Select MaNCC From CungUng;",
      },
      {
        isKey: false,
        idx: 1,
        title: "Select * From CungUng;",
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Select Distinct S1.MaNCC From CungUng S1, CungUng S2 Where S1.SoLuong > S2.SoLuong;",
      },
      {
        idx: 3,
        title: "Select Distinct MaNCC From CungUng Where SoLuong> 35;",
        isKey: true,
      },
    ],
    idx: 99,
    title:
      "Cho quan hệ CungUng(MaNCC,MaHang,SoLuong)\nCâu truy vấn SQL nào sao đây tương ứng với phép chiếu (project) và phép chọn (selection) trong đại số quan hệ?",
  },
  {
    title:
      "Cho quan hệ R([F,Z],C,K,S) ít nhất là đạt dạng chuẩn 3. Phụ thuộc hàm nào sau đây bị vi phạm?",
    idx: 100,
    answers: [
      {
        title: "FC->S",
        isKey: false,
        idx: 0,
      },
      {
        title: "CK->S",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "FZ->C",
      },
      {
        title: "FZ->K",
        idx: 3,
        isKey: false,
      },
    ],
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Check",
      },
      {
        title: "Alter",
        isKey: false,
        idx: 1,
      },
      {
        title: "Distinct ",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Specific",
      },
    ],

    title:
      "Để giới hạn số dòng bị trùng trong câu truy vấn, Từ khóa nào nào sao đây được sử dụng trong câu lệnh Select?",
    idx: 101,
  },
  {
    answers: [
      {
        idx: 0,
        title: "product",
        isKey: false,
      },
      {
        title: "intersection",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "union ",
      },
      {
        idx: 3,
        title: "difference",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title: "Để lấy tất cả các dòng trong hai Table A và B ta dùng toán tử?",
    bonus: "",
    idx: 102,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    answers: [
      {
        title: "ALTER DATABASE",
        isKey: false,
        idx: 0,
      },
      {
        title: "ALTER TABLE",
        isKey: true,
        idx: 1,
      },
      {
        title: "ALTER COLUMN",
        isKey: false,
        idx: 2,
      },
      {
        title: "Lựa chọn khác",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 103,

    title: "Để sửa đổi cấu trúc của bảng ta sử dụng lệnh:",
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    title: "Để tạo bảng CSDL ta sử dụng lệnh:",
    answers: [
      {
        isKey: false,
        title: "CREATE DATABASE",
        idx: 0,
      },
      {
        isKey: true,
        title: "CREATE TABLE",
        idx: 1,
      },
      {
        idx: 2,
        title: "ALTER TABLE",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lựa chọn khác",
      },
    ],
    idx: 104,
  },
  {
    answers: [
      {
        isKey: false,
        title: "DELETE",
        idx: 0,
      },
      {
        title: "CHANGE",
        isKey: false,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "SELECT",
      },
      {
        title: "UPDATE",
        isKey: true,
        idx: 3,
      },
    ],
    title:
      "Để thay đổi dữ liệu hiện thời trong một bảng, bạn sẽ sử dụng lệnh _____.",
    bonus: "",
    idx: 105,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    idx: 106,
    title:
      "Đếm (Count), Tổng (Sum), Trung bình (Avg), Tối đa (Max), và Tối thiểu (Min) là một số trong các hàm thống kê (statistics) sẵn có hoặc các hàm _____ có thể được sử dụng trong một truy vấn.",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Accumulated (tổng)",
      },
      {
        isKey: false,
        title: "Allowed (được phép)",
        idx: 1,
      },
      {
        isKey: false,
        title: "Primary (chính)",
        idx: 2,
      },
      {
        isKey: true,
        title: "Aggregate (gộp nhóm)",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 107,
    title:
      "Điều kiện nào sau đây trong một quan hệ luôn luôn đạt dạng chuẩn 2 (2NF)",
    bonus: "",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Nếu có phụ thuộc bắc cầu.",
      },
      {
        idx: 1,
        isKey: true,
        title: "Nếu tất cả các khóa của quan hệ này chỉ gồm một thuộc tính.",
      },
      {
        idx: 2,
        isKey: false,
        title: "Nếu chỉ có một khóa.",
      },
      {
        title: "Nếu tất cả các phụ thuộc hàm là riêng phần.",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    bonus: "",
    idx: 108,
    title: "Điều kiện để 2 bảng có thể kết (join) với nhau là:",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Hai bảng phải có cùng số cột.",
      },
      {
        isKey: false,
        idx: 1,
        title: "Hai bảng phải có chung giá trị trong các dòng.",
      },
      {
        isKey: true,
        title: "Hai bảng phải có chung ít nhất một cột.",
        idx: 2,
      },
      {
        title: "Hai bảng phải có khóa chính.",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Quan hệ",
      },
      {
        title: "Bộ dữ liệu",
        idx: 1,
        isKey: true,
      },
      {
        title: "Lược đồ quan hệ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lựa chọn khác",
      },
    ],
    title: "Dữ liệu mô tả đầy đủ về một đối tượng gọi là?",

    idx: 109,
    bonus: "",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    bonus: "",
    title:
      "Giả sử bảng Employee có n dòng dữ liệu (n>1). Hãy cho biết kết quả lệnh truy vấn sau có bao nhiêu dòng?\nSELECT e1.name, e2.name\nFROM employee e1, employee e2",
    idx: 110,
    answers: [
      {
        idx: 0,
        title: "0",
        isKey: false,
      },
      {
        idx: 1,
        title: ">n",
        isKey: true,
      },
      {
        title: "n",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "< n",
      },
    ],
  },
  {
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
    idx: 111,
    title:
      "Giả sử lược đồ quan hệ R(A,B,C,D) đạt 3NF. Phụ thuộc hàm nào sau đây là không thuộc tâp phụ thuộc hàm F của R?",
    answers: [
      {
        idx: 0,
        title: "BC->D",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "C->D",
      },
      {
        isKey: false,
        title: "C->C",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Cả 3 lựa chọn trên",
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",

    bonus: "",
    answers: [
      {
        title: "K, W->U",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title: "U, I->Z",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Lựa chọn khác",
      },
      {
        isKey: false,
        idx: 3,
        title: "K, W->I",
      },
    ],
    idx: 112,
    title:
      "Giả sử quan hệ R([K, W], U ,I, Z) đạt 3NF. Phụ thuộc hàm nào sau đây là sai?",
  },
  {
    title:
      "Hai thực thể kết hợp với nhau theo mối kết hợp 1-n (không có phát sinh thuộc tính trong mối kết hợp) thì khi chuyển sang quan hệ số quan hệ sẽ là?",
    answers: [
      {
        idx: 0,
        title: "2",
        isKey: true,
      },
      {
        title: "3",
        idx: 1,
        isKey: false,
      },
      {
        title: "1",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều sai",
      },
    ],

    bonus: "",
    idx: 113,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title:
      "Hai thực thể kết hợp với nhau theo mối kết hợp n-n thì khi chuyển sang quan hệ số quan hệ sẽ là?",
    bonus: "",

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "2",
      },
      {
        idx: 1,
        title: "3",
        isKey: true,
      },
      {
        title: "1",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả đều sai",
      },
    ],
    idx: 114,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 115,
    title: "Hàm dùng để tính tổng các giá trị của cột kiểu number là:",
    bonus: "",
    answers: [
      {
        idx: 0,
        title: "ADD",
        isKey: false,
      },
      {
        title: "TOTAL",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "AVERAGE",
        isKey: false,
      },
      {
        title: "SUM",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    idx: 116,
    bonus: "",

    title:
      "Hàm nào sau đây dùng để tính tổng các giá trị của cột thuộc kiểu number?",
    answers: [
      {
        title: "TOTAL",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "SUM",
      },
      {
        title: "ADD",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "AVERAGE",
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 117,

    answers: [
      {
        idx: 0,
        title:
          'Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học, mã môn học)\nMôn học(Mã môn học, tên môn học, thời lượng)\nVới: khoá chính của bảng học viên là Mã học viên\nKhoá chính của bảng "Môn học" là Mã môn học\nKhoá chính của bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học',
        isKey: false,
      },
      {
        title:
          'Học Viên (Mã học viên, tên học viên, điạ chỉ, ngày sinh, số điện thoại)\nMôn học(Mã môn học, tên môn học, thời lượng)\nPhiếu Ghi Danh(Mã học viên,Mã môn học,Ngày nhập học )\nVới: khoá chính của bảng "Học Viên" là Mã học viên\nKhoá chính của bảng "Môn học" là Mã môn học\nKhoá chính của bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học',
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title:
          'Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học, Mã môn học)\nMôn học(Mã môn học, tên môn học, thời lượng)\nGhiDanh(Mã học viên, Mã môn học)\nVới: khoá chính của bảng học viên là Mã học viên\nKhoá chính của bảng "Môn học" là Mã môn học\nKhoá chính của bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học',
      },
      {
        idx: 3,
        title:
          'Học Viên (Mã học viên, tên học viên, địa chỉ, ngày sinh, số điện thoại, ngày nhập học)\nMôn học(Mã môn học, tên môn học, thời lượng, Mã học viên)\nVới: khóa chính của bảng học viên là Mã học viên\nKhoá chính của bảng "Môn học" là Mã môn học\nKhoá chính của bảng "Phiếu Ghi Danh" là Mã học viên, Mã môn học',
        isKey: false,
      },
    ],
    title:
      "Hãy chuyển từ mô hình ER sang lược đồ Cơ sở dữ liệu?\nVới mô hình thực thể kết hợp (Mô hình ER) như hình bên.",
    bonus: "",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        title: "Thực thể",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: true,
        title: "Thuộc tính",
      },
      {
        title: "Quan hệ",
        isKey: false,
        idx: 2,
      },
      {
        title: "Lựa chọn khác",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Họ tên, ngày sinh, số CMND của một người là ví dụ cho:",
    idx: 118,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        isKey: false,
        title: "5",
        idx: 0,
      },
      {
        idx: 1,
        title: "6",
        isKey: true,
      },
      {
        title: "7",
        idx: 2,
        isKey: false,
      },
      {
        title: "4",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 119,
    title:
      "Khi chuyển mô hình ERD ở trên sang mô hình quan hệ thì số quan hệ là? (hình bên)\n\n",
  },
  {
    idx: 120,
    title:
      "Khi chuyển sang mô hình quan hệ mối kết hợp giữa NH N VIÊN và DỰ ÁN thì sẽ có số quan hệ là? (Hình bên)\n\n",
    answers: [
      {
        idx: 0,
        title: "3",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "2",
      },
      {
        isKey: false,
        idx: 2,
        title: "4",
      },
      {
        title: "5",
        idx: 3,
        isKey: false,
      },
    ],

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 121,
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        idx: 0,
        title: "3",
        isKey: false,
      },
      {
        title: "6",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "4",
      },
      {
        idx: 3,
        title: "5",
        isKey: false,
      },
    ],
    title:
      "Khi chuyển sang mô hình quan hệ toàn bộ mô hình ERD ở trên thì sẽ có số quan hệ là (Hình bên)?\n\n",
  },
  {
    title:
      "Khi hai hoặc nhiều bảng kết với nhau thì có bao nhiêu lần từ khóa WHERE được dùng?",

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Mỗi bảng 1 lần. n bảng sẽ có n từ khóa WHERE được sử dụng.",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Hai.",
      },
      {
        title: "Một.",
        isKey: true,
        idx: 2,
      },
      {
        title: "Tất cả đều sai.",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 122,
  },
  {
    title:
      "Khi mỗi một thuộc tính không khoá đều được xác định bởi cả khoá chính, thì quan hệ này ít nhất cũng thuộc dạng chuẩn sau:",
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        isKey: false,
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyee-Codd (BCNF)",
        idx: 3,
      },
    ],
    idx: 123,

    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Số bộ trong quan hệ.",
      },
      {
        title: "Số byte trong một bộ.",
        idx: 1,
        isKey: false,
      },
      {
        title: "Số thuộc tính trong quan hệ.",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Số quan hệ trong Cơ sở dữ liệu.",
        idx: 3,
      },
    ],
    title:
      "Khi ta nói đến một quan hệ gồm có n-bộ (tuple), n ở đây có nghĩa là:",

    idx: 124,
  },
  {
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        idx: 0,
        title: "Ràng buộc tham chiếu khóa ngoại",
        isKey: true,
      },
      {
        title: "Ràng buộc kiểu con",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Ràng buộc khóa ngoại",
      },
      {
        title: "ràng buộc khóa chính",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 125,
    title: "Khi tạo một khóa ngoại, chúng ta cũng tạo một?",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    idx: 126,
    title:
      "Khi thực hiện câu lệnh SQL để xóa cấu trúc của một bảng, điều gì xảy ra đối với dữ liệu chứa trong bảng đó?",
    answers: [
      {
        title:
          "Nếu bảng bị xóa là bảng cha, thì dữ liệu sẽ được đưa vào bảng con tương ứng.",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title:
          "Nếu bảng bị xóa là bảng con, thì dữ liệu sẽ đưa vào bảng cha tương ứng.",
        idx: 1,
      },
      {
        title:
          "Không thể xóa được. Chỉ xóa được cấu trúc của bảng khi tất cả dữ liệu trong bảng đó đã bị xóa.",
        idx: 2,
        isKey: false,
      },
      {
        title: "Dữ liệu trong bảng đó cũng bị xóa theo.",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Khoá _____ của một bảng là cột hoặc một tập hợp các cột mà các cột này chỉ xác định một dòng đã cho trong bảng đó.",
    idx: 127,

    answers: [
      {
        title: "Primary (chính)",
        idx: 0,
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Secondary (phụ)",
      },
      {
        title: "Foreign (ngoại)",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Minor (nhỏ)",
      },
    ],
  },
  {
    idx: 128,
    title:
      "Khoá được định nghiã trên một thuộc tính hoặc một tập thuộc tính như sau:",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "Là một tập hợp nhỏ nhất các thuộc tính",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Bao đóng chưá tất cả các thuộc tính cuả bảng đó",
      },
      {
        isKey: true,
        title:
          "Là tập hợp nhỏ nhất các thuộc tính mà nó xác định được tất cả các thuộc tính còn lại trong bảng đó.",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title:
          "Nó xác định giá trị cuả tất cả các thuộc tính còn lại trong bảng.",
      },
    ],
  },
  {
    answers: [
      {
        title: "Câu lệnh Delete sẽ lỗi do không có dòng nào được xóa.",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        title:
          "Câu lệnh Delete sẽ thông báo cho người sử dụng nhập điều kiện để xóa.",
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Câu lệnh Delete sẽ xóa tất cả các mẩu tin trong bảng.",
      },
      {
        idx: 3,
        title: "Câu lệnh Delete sẽ lỗi do sai cú pháp.",
        isKey: false,
      },
    ],
    idx: 129,
    practiceCode: "co-so-du-lieu-01",
    title: "Không có mệnh đề Where trong một câu lệnh Delete có ảnh hưởng gì?",
  },
  {
    title: "Ký hiệu X->Y được đọc là?",
    practiceCode: "co-so-du-lieu-01",
    idx: 130,
    answers: [
      {
        idx: 0,
        title: "X xác định Y",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Y phụ thuộc X",
      },
      {
        title: "Cả 2 phương án: 1 và 2",
        isKey: true,
        idx: 2,
      },
      {
        title: "Lựa chọn khác",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    title:
      "Ký tự nào sau đây được dùng để thay thế cho tất cả các cột trong mệnh đề SELECT:",
    practiceCode: "co-so-du-lieu-01",
    idx: 131,

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "&",
      },
      {
        idx: 1,
        isKey: false,
        title: "@",
      },
      {
        title: "#",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "*",
        isKey: true,
      },
    ],
  },
  {
    idx: 132,

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Add foreign key MaPB to table NhanVien",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "Insert MaPB into table NhanVien",
      },
      {
        title: "Create foreign key (MaPB) references NhanVien",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        title:
          "Alter table NhanVien add foreign key (MaPB) references PhongBan(MaPB)",
        isKey: true,
      },
    ],
    title: "Lệnh nào sau đây được dùng để thiết lập khóa ngoại:",
  },
  {
    title:
      "Cho bảng NhanVien(MaNV, HoTenNV, MaPB, Luong). Liệt kê danh sách tất cả các nhân viên và được sắp xếp giảm dần theo lương?",
    idx: 133,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "SELECT * FROM NhanVien SORT BY Luong DESCENDING;",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "SELECT * FROM NhanVien IN ORDER OF Luong;",
      },
      {
        title: "SELECT * FROM NhanVien ORDER BY Luong DESC;",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "SELECT * FROM NhanVien ORDER BY Luong;",
      },
    ],
  },
  {
    answers: [
      {
        title: "Thiết kế hàm",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Thiết kế cơ sở dữ liệu",
      },
      {
        idx: 2,
        title: "Thiết kế modul",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Thiết kế thủ tục",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 134,
    title: "Lược đồ ER giúp chúng ta trong việc?",
  },
  {
    answers: [
      {
        title: "Một tập hợp các bộ.",
        isKey: false,
        idx: 0,
      },
      {
        isKey: true,
        title:
          "Tập hợp tất cả các thuộc tính cần quản lý cuả một đối tượng cùng với mối quan hệ giữa chúng.",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Một tập hợp giá trị dữ liệu.",
      },
      {
        idx: 3,
        title: "Mô hình thực thể kết hợp.",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 135,
    title: "Lược đồ quan hệ (Relation Schema) là:",
  },
  {
    title: "Lược đồ quan hệ R đạt dạng chuẩn 3 nếu:",
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        title:
          "R đạt dạng chuẩn 2 và mọi thuộc tính không khoá cuả R đều không phụ thuộc bắc cầu vào khoá chính.",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Mỗi thuộc tính không khoá cuả R đều phụ thuộc đầy đủ vào khoá",
      },
      {
        title: "Tất cuả các thuộc tính cuả R có miền giá trị.",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "R chứa chỉ 3 khoá.",
      },
    ],
    idx: 136,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title: "Mệnh đề FROM trong ngôn ngữ truy vấn dữ liệu SQL có tác dụng:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giới hạn số dòng trong kết quả",
      },
      {
        title: "Thiết lập điều kiện",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Xác định nguồn dữ liệu trong truy vấn",
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Lựa chọn khác",
      },
    ],
    idx: 137,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Mệnh đề gì để giới hạn giá trị đã thống kê của một cột nào đó cho lớn hơn một giá trị cho trước? Kết quả thống kê là các giá trị có thuộc tính là số.",
    idx: 138,
    answers: [
      {
        title: "SELECT",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        title: "GROUP BY",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "HAVING",
      },
      {
        isKey: false,
        title: "WHERE",
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        title: "Select",
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Where",
      },
      {
        isKey: false,
        idx: 2,
        title: "Find",
      },
      {
        idx: 3,
        title: "Having",
        isKey: true,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 139,
    title:
      "Mệnh đề nào sau đây được dùng để đặt điều kiện chọn nhóm trong câu lệnh truy vấn dữ liệu:",
  },
  {
    title: "Mệnh đề nào sau đây được dùng để nhập dữ liệu vào bảng publishers",
    idx: 140,
    answers: [
      {
        isKey: false,
        idx: 0,
        title:
          "insert into publishers data ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')",
      },
      {
        title:
          "insert into publishers entities ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')",
        idx: 1,
        isKey: false,
      },
      {
        title:
          "insert into publishers values ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')",
        isKey: true,
        idx: 2,
      },
      {
        title:
          "insert into publishers tuples ('0010', 'Pragmatics', '4 4th ln.', 'Chicago', 'IL')",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title: "Mệnh đề nào trong câu truy vấn giới hạn số cột sẽ trả về?",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "SELECT",
      },
      {
        isKey: false,
        title: "ORDER BY",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "FROM",
      },
      {
        idx: 3,
        title: "WHERE",
        isKey: false,
      },
    ],
    idx: 141,
  },
  {
    title:
      "Mệnh đề Order By trong câu lệnh SQL dùng để sắp sếp dữ liệu kết quả truy vấn. Ta có những phương pháp sắp xếp nào?",

    answers: [
      {
        isKey: false,
        title: "ACS/DECS",
        idx: 0,
      },
      {
        isKey: true,
        title: "ASC/DESC",
        idx: 1,
      },
      {
        title: "ABS/DESC",
        idx: 2,
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lựa chọn khác",
      },
    ],
    idx: 142,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 143,

    title: "Mệnh đề SELECT trong ngôn ngữ truy vấn dữ liệu SQL có tác dụng:",
    answers: [
      {
        title: "Giới hạn số dòng trong kết quả",
        isKey: false,
        idx: 0,
      },
      {
        title: "Giới hạn số cột trong kết quả",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        idx: 2,
        title: "Thiết lập điều kiện",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lựa chọn khác",
      },
    ],
  },
  {
    title: "Mệnh đề WHERE trong ngôn ngữ truy vấn dữ liệu SQL có tác dụng:",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Giới hạn số cột trong kết quả",
      },
      {
        idx: 1,
        title: "Thiết lập điều kiện",
        isKey: true,
      },
      {
        isKey: false,
        title: "Xác định nguồn dữ liệu trong truy vấn",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Lựa chọn khác",
      },
    ],

    practiceCode: "co-so-du-lieu-01",
    idx: 144,
  },
  {
    title:
      "Mô hình chuẩn để thiết kế hệ thống thông tin là mô hình nào sau đây?",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        title: "Mô hình E-R",
        isKey: true,
      },
      {
        idx: 1,
        isKey: false,
        title: "Mô hình dữ liệu quan hệ",
      },
      {
        idx: 2,
        title: "Lựa chọn khác",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Tất cả lựa chọn trên",
      },
    ],
    idx: 145,
  },
  {
    idx: 146,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Mô hình thực thể mối kết hợp",
      },
      {
        idx: 1,
        title: "Mô hình dữ liệu quan hệ",
        isKey: true,
      },
      {
        title: "Cả hai mô hình trên",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "Lựa chọn khác",
        idx: 3,
      },
    ],

    title:
      "Mô hình dữ liệu sử dụng trong các hệ quản trị cơ sở dữ liệu là mô hình nào?",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title: "Mối kết hợp “Quản lý trực tiếp” được gọi là (Hình bên)?\n\n",
    idx: 147,

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        title: "Mối kết hợp được sinh ra từ một mối kết hợp khác",
        isKey: false,
      },
      {
        idx: 1,
        title: "Nhiều mối kết hợp khác nhau trên một cặp thực thể",
        isKey: false,
      },
      {
        isKey: true,
        idx: 2,
        title: "Mối kết hợp đệ qui",
      },
      {
        isKey: false,
        title: "Tất cả đều sai",
        idx: 3,
      },
    ],
  },
  {
    title: "Mối kết hợp “Quản lý trực tiếp” là mối kết hợp (Hình bên)",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "1-0",
      },
      {
        title: "0-n",
        idx: 1,
        isKey: false,
      },
      {
        isKey: true,
        title: "1-1",
        idx: 2,
      },
      {
        idx: 3,
        title: "1-n",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",

    idx: 148,
  },
  {
    practiceCode: "co-so-du-lieu-01",

    title: "Mối kết hợp “Quản lý” là mối kết hợp (Hình bên)?\n\n",
    idx: 149,
    answers: [
      {
        isKey: false,
        title: "0-1",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "0-n",
      },
      {
        isKey: false,
        idx: 2,
        title: "1-1",
      },
      {
        title: "1-n",
        isKey: true,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "1-n",
      },
      {
        isKey: false,
        idx: 1,
        title: "n-1",
      },
      {
        isKey: false,
        title: "1-1",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "n-n",
      },
    ],

    title: "Mối kết hợp “Tham gia” là mối kết hợp (Hình bên)?\n\n",
    idx: 150,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "1-1",
        isKey: false,
      },
      {
        idx: 1,
        title: "1-n",
        isKey: true,
      },
      {
        title: "n-n",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title: "n-1",
        idx: 3,
      },
    ],
    title: "Mối kết hợp “Thuộc” là mối kết hợp (Hình bên)?\n\n",

    idx: 151,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 152,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "1-1",
        idx: 0,
      },
      {
        title: "1-n",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "n-n",
      },
      {
        idx: 3,
        isKey: true,
        title: "Tất cả đều sai",
      },
    ],
    title:
      "Mối kết hợp giữa hai thực thể NH N VIÊN và LĨNH VỰC là mối kết hợp(Hình bên)\n\n",
  },
  {
    idx: 153,
    answers: [
      {
        title: "1-1",
        isKey: false,
        idx: 0,
      },
      {
        title: "1-n",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "n-n",
      },
      {
        title: "0-n",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Mối kết hợp giữa hai thực thể SINH VIÊN và MÔN HỌC được diễn giải như sau: mỗi sinh viên phải đăng ký ít nhất một môn học và có thể đăng ký nhiều môn. Mỗi môn học có thể có nhiều sinh viên đăng ký, nhưng có thể không có sinh viên nào đăng ký. Như vậy mối kết hợp giữa SINH VIÊN và MÔN HỌC là ?",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 154,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "1-n",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "1-1",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "n-1",
      },
      {
        idx: 3,
        title: "n-n",
        isKey: true,
      },
    ],
    title: "Mối kết hợp giữa SÁCH và TÁC GIẢ là mối kết hợp? (hình bên)\n\n",
  },
  {
    title: "Một lược đồ quan hệ đạt BCNF thì sẽ đạt chuẩn:",
    idx: 155,
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        idx: 0,
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
      {
        idx: 2,
        title: "Cả 2 phương án: 1 và 2",
        isKey: true,
      },
      {
        idx: 3,
        title: "Lựa chọn khác",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Một _____ có thể gán các mật khẩu cho những người dùng có quyền, và chỉ những người dùng đó mới có thể truy cập cơ sở dữ liệu khi nhập mật khẩu được chấp nhận.",
    idx: 156,
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        title: "DBA",
        idx: 0,
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "người thiết kế cơ sở dữ liệu",
      },
      {
        title: "Switchboard (bảng mạch chuyển đổi)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "biểu đồ E-R",
        isKey: false,
      },
    ],
  },
  {
    idx: 157,

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "ít hơn n dòng.",
      },
      {
        isKey: false,
        title: "Nhiều hơn n dòng.",
        idx: 1,
      },
      {
        title: "Không có dòng nào cả.",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "n dòng",
      },
    ],
    title:
      "Một bảng có một khoá duy nhất (unique key). Một câu truy vấn thực hiện một phép kết bằng trên bảng này với chính nó thông qua khoá này. Bảng này có n dòng. Một dòng có giá trị khoá là rỗng (null). Kết quả cuả câu truy vấn trả về bao nhiêu dòng?",
  },
  {
    idx: 158,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: true,
        title: "Ít hơn n dòng.",
        idx: 0,
      },
      {
        isKey: false,
        title: "Không có dòng nào",
        idx: 1,
      },
      {
        title: "n dòng",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Nhiều hơn n dòng.",
      },
    ],
    title:
      "Một bảng có một khoá duy nhất. Một câu truy vấn thực hiện thao tác kết trên bảng sử dụng khoá này. Bảng có n hàng. Một hàng có 1 giá trị cuả khoá là rỗng ('null') . Query trả về kết quả là bao nhiêu dòng?",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Không có sự lặp lại các thuộc tính và các nhóm trị.",
      },
      {
        idx: 1,
        isKey: false,
        title: "Không rỗng.",
      },
      {
        isKey: false,
        idx: 2,
        title:
          "Không rỗng và toàn bộ các thuộc tính cuả mọi bộ đều mang giá trị đơn.",
      },
      {
        isKey: false,
        title: "Không rỗng và chỉ chứa các trị nguyên tố.",
        idx: 3,
      },
    ],
    idx: 159,
    title: "Một bảng đạt dạng chuẩn 1 (1NF):",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    title: "Một bảng đạt dạng chuẩn 3 (3NF):",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Toàn bộ các thuộc tính cuả mọi bộ đều mang giá trị đơn.",
      },
      {
        title: "Không phụ thuộc bắc cầu.",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "tất cả các lựa chọn trên.",
      },
      {
        title:
          "Tất cả các thuộc tính không khoá đều phụ thuộc đầy đủ vào khoá chính",
        idx: 3,
        isKey: false,
      },
    ],
    idx: 160,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 161,
    practiceCode: "co-so-du-lieu-01",

    title: "Một bảng đạt dạng chuẩn BC (BCNF) nếu:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Không có phụ thuộc hàm bắc cầu",
      },
      {
        title: "Bảng này đạt dạng chuẩn 3",
        idx: 1,
        isKey: false,
      },
      {
        title: "Bảng này đạt dạng chuẩn 2",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title:
          "Mỗi phụ thuộc hàm đều có phiá bên trái cuả phụ thuộc hàm là siêu khoá",
        isKey: true,
      },
    ],
  },
  {
    idx: 162,

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Nó không chứa các nhóm lặp",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Nó không chứa một khoá ngoại",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "Nó không chứa một khoá chính",
      },
      {
        idx: 3,
        isKey: false,
        title: "Nó không chứa các khoá dự tuyển.",
      },
    ],
    title:
      "Một bảng đạt dạng chuẩn thứ nhất (1NF) nếu _____. 1. Nó không chứa các nhóm lặ",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    idx: 163,
    title:
      "Một bảng mà không có sự lặp lại ở một nhóm trị, với khoá chính chỉ có một thuộc tính, và có một phụ thuộc bắc cầu vi phạm. Vậy bảng này ở dạng chuẩn nào?",
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        isKey: true,
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
      },
      {
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
      },
      {
        idx: 3,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        isKey: false,
      },
    ],
  },
  {
    idx: 164,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        title: "Tình trạng dư thừa",
        isKey: false,
      },
      {
        title: "Tính nguyên vẹn",
        isKey: true,
        idx: 1,
      },
      {
        title: "Tính độc lập của dữ liệu",
        idx: 2,
        isKey: false,
      },
      {
        title: "Thiết kế cơ sở dữ liệu",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Một cơ sở dữ liệu có _____ nếu dữ liệu trong nó thoả mãn tất cả các ràng buộc về tính nguyên vẹn nhất định.",
  },
  {
    idx: 165,
    answers: [
      {
        idx: 0,
        title: "quan hệ",
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "khóa",
      },
      {
        isKey: true,
        title: "khóa ngoại",
        idx: 2,
      },
      {
        title: "khóa dự tuyển",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Một cột không là khóa chính trong lược đồ quan hệ này mà là khóa chính trong lược đồ quan hệ khác gọi là:",
  },
  {
    answers: [
      {
        isKey: true,
        idx: 0,
        title: "Không phải là một phần của khoá chính.",
      },
      {
        isKey: false,
        title: "Là một phần của khoá chính.",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Nằm trong dạng chuẩn 1 (1NF)",
      },
      {
        idx: 3,
        isKey: false,
        title: "Nằm trong dạng chuẩn 2 (2NF)",
      },
    ],

    practiceCode: "co-so-du-lieu-01",
    title: "Một cột không phải là cột khoá nếu nó _____.",
    idx: 166,
  },
  {
    idx: 167,
    title: "Một field dùng để định danh 1 dòng dữ liệu trong bảng gọi là?",

    answers: [
      {
        title: "Định danh query",
        isKey: false,
        idx: 0,
      },
      {
        title: "Khóa chính",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Dòng",
        idx: 2,
      },
      {
        isKey: false,
        title: "Tiêu đề",
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title: "Một giá trị 'null' được gán vào một thuộc tính nào đó hàm ý là:",
    idx: 168,
    answers: [
      {
        isKey: false,
        title: "Thuộc tính đó là khoá chính hoặc khoá ngoại.",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Thuộc tính giới hạn ràng buộc cơ sở dữ liệu.",
      },
      {
        isKey: true,
        idx: 2,
        title: "Giá trị thực không quan trọng ở thời điểm hiện tại.",
      },
      {
        isKey: false,
        title:
          "Giá trị cuả thuộc tính này chỉ có người thiết kế CSDL mới biết.",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 169,
    answers: [
      {
        title: "Phải quy định những đặc điểm nổi bậc cuả một từ điển dữ liệu.",
        idx: 0,
        isKey: false,
      },
      {
        title: "Cung cấp các dịch vụ phục hồi và xử lý dữ liệu.",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Tất cả điều đúng",
        isKey: true,
      },
      {
        title: "Cung cấp miền giá trị để lưu trữ dữ liệu.",
        isKey: false,
        idx: 3,
      },
    ],

    title: "Một hệ quản trị cơ sở dữ liệu là phần mềm:",
  },
  {
    idx: 170,
    title: "Một kết hợp giữa các thực thể được gọi là một _____.",
    answers: [
      {
        isKey: true,
        title: "mối quan hệ",
        idx: 0,
      },
      {
        title: "Ràng buộc về tính nguyên vẹn",
        idx: 1,
        isKey: false,
      },
      {
        title: "Cơ sở dữ liệu",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        title: "File dữ liệu",
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title:
      "Một khoá tối tiểu mà có thể thay thế cho khoá chính của một bảng được gọi là gì?",

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        title: "Khoá chính",
        isKey: false,
      },
      {
        title: "Khoá dự tuyển",
        isKey: true,
        idx: 1,
      },
      {
        title: "Khoá ngoại",
        isKey: false,
        idx: 2,
      },
      {
        title: "Thuộc tính khoá",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 171,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 172,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "master query.",
      },
      {
        idx: 1,
        title: "subquery.",
        isKey: true,
      },
      {
        title: "multi-query.",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "superquery.",
      },
    ],
    title:
      "Một loại query được đặc trong mệnh đề WHERE hoặc HAVING cuả một câu Query khác được gọi là:",
  },
  {
    idx: 173,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        idx: 1,
        isKey: true,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],

    title:
      "Một lược đồ quan hệ có khóa là một thuộc tính thì ít nhất là đạt chuẩn:",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 174,

    answers: [
      {
        idx: 0,
        title: "Dạng chuẩn 1 (1NF)",
        isKey: true,
      },
      {
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
        idx: 1,
      },
      {
        title: "BCNF",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Các lựa chọn trên đều đúng",
      },
    ],
    title: "Một lược đồ quan hệ đạt 2NF thì sẽ đạt chuẩn:",
  },
  {
    answers: [
      {
        isKey: false,
        title: "BCNF",
        idx: 0,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "Cả 2 phương án: 1 và 2",
        idx: 2,
      },
      {
        title: "Lựa chọn khác",
        isKey: false,
        idx: 3,
      },
    ],
    title: "Một lược đồ quan hệ đạt 3NF thì sẽ đạt chuẩn:",
    idx: 175,

    practiceCode: "co-so-du-lieu-01",
  },
  {
    title: "Một lược đồ quan hệ gồm:",
    idx: 176,
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        title: "Tập hợp các giá trị",
        idx: 0,
        isKey: false,
      },
      {
        title: "Tập hợp các bộ dữ liệu",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Tên lược đồ và các thuộc tính của nó",
      },
      {
        idx: 3,
        title: "Lựa chọn khác",
        isKey: false,
      },
    ],
  },
  {
    title:
      "Một lược đồ quan hệ mà các thuôc tính đều mang giá trị đơn thì sẽ đạt chuẩn:",
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
      },
      {
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 177,
  },
  {
    idx: 178,
    title:
      "Một lược đồ quan hệ mà các thuộc tính không khóa đều phụ thuộc đầy đủ vào khóa thì sẽ đạt chuẩn:",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: true,
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title:
      "Một lược đồ quan hệ mà các thuộc tính không khóa không phụ thuộc bắc cầu vào khóa thì sẽ đạt chuẩn:",
    idx: 179,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        idx: 1,
        isKey: false,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        idx: 3,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",

    title: "Một nhân viên quản lý một nhân viên khác là ví dụ tốt nhất của?",
    idx: 180,
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Thực thể phụ thuộc",
      },
      {
        isKey: false,
        title: "Quan hệ ba ngôi",
        idx: 1,
      },
      {
        title: "Quan hệ một ngôi",
        idx: 2,
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Quan hệ hai ngôi",
      },
    ],
  },
  {
    idx: 181,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: true,
        title: "một cỡ file lớn hơn",
        idx: 0,
      },
      {
        idx: 1,
        title: "Khiến cho dữ liệu bị phụ thuộc",
        isKey: false,
      },
      {
        title: "Tính nguyên vẹn bị giảm",
        isKey: false,
        idx: 2,
      },
      {
        title: "Năng suất giảm",
        idx: 3,
        isKey: false,
      },
    ],
    title: "Một nhược điểm của một hệ thống cơ sở dữ liệu là _____.",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Mô hình E-R",
      },
      {
        idx: 1,
        title: "Mô hình dữ liệu quan hệ",
        isKey: false,
      },
      {
        isKey: false,
        title: "Mô hình dữ liệu mạng, phân cấp, hướng đối tượng",
        idx: 2,
      },
      {
        title: "Tất cả các phương án trên.",
        isKey: true,
        idx: 3,
      },
    ],
    title: "Một số mô hình dữ liệu sử dụng cho hệ thống cơ sở dữ liệu là?",
    idx: 182,
  },
  {
    idx: 183,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Là thành phần cuả một khoá ngoại",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Là một giá trị đơn",
      },
      {
        isKey: true,
        idx: 2,
        title: "Là thành phần cuả ít nhất một khoá dự tuyển.",
      },
      {
        isKey: false,
        title: "Là thành phần cuả khoá chính.",
        idx: 3,
      },
    ],
    title: "Một thuộc tính nguyên tố là một thuộc tính mà:",
  },
  {
    title: "Một truy vấn làm thay đổi dữ liệu là một truy vấn _____.",
    idx: 184,
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        isKey: false,
        title: "Addition (thêm)",
        idx: 0,
      },
      {
        isKey: true,
        idx: 1,
        title: "Update (cập nhật)",
      },
      {
        title: "Update (cập nhật)",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        title: "Select (lựa chọn)",
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Không bảo toàn thông tin.",
      },
      {
        isKey: false,
        idx: 1,
        title: "Mất dữ liệu.",
      },
      {
        isKey: true,
        title: "Bảo toàn thông tin.",
        idx: 2,
      },
      {
        isKey: false,
        title: "Tất cả đều sai.",
        idx: 3,
      },
    ],

    idx: 185,
    title:
      "Nếu có các phụ thuộc hàm sau (A->B, B->C) trong lược đồ CSDL R(A,B) và S(B,C) thì phép kết giữa R và S sẽ:",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        isKey: true,
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
      },
      {
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
      },
      {
        isKey: false,
        title: "Tất cả các câu đều sai.",
        idx: 3,
      },
    ],
    idx: 186,

    title:
      "Nếu không có thuộc tính không khóa nào là không phụ thuộc vào một phần của khóa chính, thì quan hệ đó phải ở dạng chuẩn:",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title:
      "Nếu lược đồ R(A,B,C), có phụ thuộc hàm A->B và B->C. Thuộc tính nào mang ý nghĩa quyết định?",
    answers: [
      {
        title: "B, C",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "A, B",
      },
      {
        title: "A",
        idx: 2,
        isKey: true,
      },
      {
        title: "A, B, C",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 187,
  },
  {
    answers: [
      {
        title: "2",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        title: "5",
        idx: 1,
      },
      {
        title: "4 ",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "3",
        idx: 3,
      },
    ],
    idx: 188,

    title:
      "Nếu một lược đồ quan hệ có 5 thuộc tính, khóa của lược đồ gồm 3 thuộc tính. Khi đó ta sẽ có bao nhiêu siêu khóa:",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 189,

    practiceCode: "co-so-du-lieu-01",
    title:
      "Nếu NK->ME là một phụ thuộc hàm của lược đồ quan hệ H(N,K,M,E), thì:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "NK là khóa của H",
      },
      {
        title: "NK là khóa chính của H",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        isKey: true,
        title: "Không thể tồn tại 2 bộ trong H mà có cùng giá trị của N và K",
      },
      {
        title: "Tất cả các câu đều đúng",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title:
          "Phép kết tự nhiên giữa R1, R2, ..., Rn sẽ trả về số bộ bằng với số bộ của quan hệ R ban đầu",
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Mỗi quan hệ R1, R2, ...,Rn đều đạt dạng chuẩn 3NF",
      },
      {
        isKey: true,
        idx: 2,
        title:
          "Phép kết tự nhiên giữa R1, R2, ..., Rn sẽ trả về số bộ nhiều hơn số bộ của quan hệ R ban đầu",
      },
      {
        idx: 3,
        isKey: false,
        title: "Không có câu nào đúng",
      },
    ],
    title:
      "Nếu quan hệ R được phân rã thành {R1, R2, R3, …,Rn} và sự phân rã này bảo toàn thông tin thì:",
    idx: 190,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Quan hệ",
        isKey: true,
        idx: 0,
      },
      {
        title: "Phân cấp",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Mạng",
        idx: 2,
      },
      {
        isKey: false,
        idx: 3,
        title: "Hướng đối tượng",
      },
    ],
    idx: 191,
    title:
      "Người sử dụng có thể hiểu được một cơ sở dữ liệu thông qua một tập hợp các bảng, đó gọi là mô hình gì?",
  },
  {
    idx: 192,
    answers: [
      {
        idx: 0,
        title: "Giảm thiểu sự bất thường khi thêm hoặc xoá dữ liệu",
        isKey: false,
      },
      {
        isKey: false,
        title: "Giảm thiểu sự bất thường khi cập nhật dữ liệu",
        idx: 1,
      },
      {
        title: "Giảm thiểu dư thừa dữ liệu",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả điều đúng",
      },
    ],
    title: "Nguyên tắc chỉ đạo trong thiết kế CSDL là:",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Giảm thiểu sự bất thường khi thêm hoặc xoá dữ liệu.",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Giảm thiểu sự bất thường khi cập nhật dữ liệu.",
      },
      {
        isKey: false,
        title: "Giảm thiểu dư thừa dữ liệu.",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả điều đúng.",
      },
    ],

    title: "Nguyên tắc chỉ đạo trong việc chuẩn hoá CSDL:",
    idx: 193,
  },
  {
    answers: [
      {
        title: "Khả năng quản lý dữ liệu",
        isKey: false,
        idx: 0,
      },
      {
        title: "Khả năng truy xuất dữ liệu",
        idx: 1,
        isKey: false,
      },
      {
        title: "Quản lý giao tác",
        idx: 2,
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "Tất cả các phương án trên",
      },
    ],

    practiceCode: "co-so-du-lieu-01",
    title:
      "Những đặc tính cơ bản để phân biệt DBMS với các hệ thống lập trình khác?",
    idx: 194,
  },
  {
    answers: [
      {
        title: "DBMS",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Database",
      },
      {
        title: "CPU",
        idx: 2,
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Hard drive",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Nơi có thể lưu trữ dữ liệu của các ứng dụng. Trong hệ thống CSDL gọi là:",
    idx: 195,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    title: "Phát biểu nào sau đây không phải là một lược đồ quan hệ?",
    idx: 196,
    answers: [
      {
        idx: 0,
        title: "Y(D, E, F)",
        isKey: false,
      },
      {
        idx: 1,
        title: "Z(J, K(L, M))",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "X(B, C)",
      },
      {
        idx: 3,
        title: "W(A)",
        isKey: false,
      },
    ],
  },
  {
    idx: 197,
    title:
      "Phép toán nào sau đây trong đại số quan hệ yêu cầu tất cả các bảng phải có cùng tập thuộc tính?",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title:
          "Phép kết (Join), Phép chiếu (Projection), Phép kết tự nhiên (natural join)",
        idx: 0,
      },
      {
        title:
          "Phép chia (Division), Phép giao (Intersection), Phép nhân(Multiplication)",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: false,
        title:
          "Phép chia (Division), Phép giao (Intersection), Phép trừ (Minus)",
      },
      {
        title: "Phép hợp (Union), Phép giao (Intersection), Phép trừ (Minus)",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "DELETE (Phép Xoá)",
      },
      {
        idx: 1,
        title: "PROJECT (Phép chiếu)",
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "INTERSECT (Phép giao)",
      },
      {
        title: "Union (Phép hợp)",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Phép toán nào trong đại số học (algebra) bao gồm từ OVER, tiếp đó là một danh sách các cột?",
    idx: 198,
  },
  {
    idx: 199,
    title:
      "Phép toán nào trong đại số học quan hệ lấy một tập hợp con dọc của một bảng?",
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "SELECT",
      },
      {
        title: "DELETE",
        idx: 1,
        isKey: false,
      },
      {
        title: "PROGRAM",
        isKey: false,
        idx: 2,
      },
      {
        title: "PROJECT (Phép chiếu)",
        idx: 3,
        isKey: true,
      },
    ],
  },
  {
    idx: 200,
    answers: [
      {
        title: "Union (Phép hợp)",
        idx: 0,
        isKey: false,
      },
      {
        title: "Difference (Phép trừ)",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "Product (Phép tích Descartes)",
        isKey: true,
      },
      {
        isKey: false,
        title: "Intersection (Phép giao)",
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Phép toán nào trong đại số quan hệ được sử dụng để lấy một tập kết hợp gồm mọi dòng trong bảng thứ nhất với mọi dòng trong bảng thứ hai.",
  },
  {
    idx: 201,
    title:
      "Quan hệ (Relation), bộ (Tuple), thuộc tính (Attribute) thì đồng nghĩa tương ứng theo thứ tự sau:",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Bảng (Table), cột(column), dòng(row)",
      },
      {
        idx: 1,
        isKey: false,
        title: "Mẫu tin (Record), tập tin (File), trường(Field)",
      },
      {
        idx: 2,
        title: "Tập tin (File), mẫu tin (record), trường (field)",
        isKey: true,
      },
      {
        idx: 3,
        title: "Dòng(row), cột(column) và giá trị (Value).",
        isKey: false,
      },
    ],

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 202,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Một khoá chính",
      },
      {
        isKey: false,
        idx: 1,
        title: "Một thuộc tính duy nhất",
      },
      {
        isKey: false,
        title: "Một miền giá trị",
        idx: 2,
      },
      {
        title: "Một quan hệ với hai khoá ngoại",
        idx: 3,
        isKey: true,
      },
    ],
    practiceCode: "co-so-du-lieu-01",

    title:
      "Quan hệ nhiều-nhiều (n-n) trong lược đồ ERD có thể được trình bày trong mô hình quan hệ bởi:",
  },
  {
    title: "Ràng buộc CHECK có thể được cài đặt trong câu lệnh nào sau đây?",
    idx: 203,
    answers: [
      {
        title: "Create table",
        isKey: false,
        idx: 0,
      },
      {
        title: "Alter table",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        isKey: true,
        title: "Cả 2 phương án: 1 và 2",
      },
      {
        idx: 3,
        title: "Drop table",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Ràng buộc khóa ngoại (Foreign keys)",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        title: "Ràng buộc miền giá trị (Check Constraint)",
        idx: 1,
      },
      {
        idx: 2,
        title: "Ràng buộc khóa chính (Primary keys)",
        isKey: true,
      },
      {
        title: "Ràng buộc NOT NULL",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Ràng buộc tòan vẹn nào sao đây sẽ tự động tạo ra một chỉ mục (index) khi được định nghĩa?",

    idx: 204,
  },
  {
    idx: 205,
    practiceCode: "co-so-du-lieu-01",
    title:
      "SinhVien (MaSV, HoSV, TenSV, DiaChi, ThanhPho,MaVung)\n\nDựa vào lược đồ quan hệ trên, Liệt kê danh sách các sinh viên có tên bắt đầu là N?",
    answers: [
      {
        title: "Select * From SinhVien\nWhere TenSV like 'N%'",
        isKey: false,
        idx: 0,
      },
      {
        isKey: false,
        idx: 1,
        title: "Select * From SinhVien\nWhere left(TenSV,1)= 'N",
      },
      {
        idx: 2,
        title:
          "Select * From SinhVien Where TenSV in (select tensv from SinhVien\nWhere tensv like 'N%' )",
        isKey: false,
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
        title: "Select * From SinhVien",
        isKey: false,
        idx: 0,
      },
      {
        title: "Select * From SinhVien\nWhere MaSV between 1100 and 1200",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "Select SinhVien\nWhere MaSV between 1100 and 1200",
      },
      {
        isKey: false,
        title: "Select Masv From SinhVien\nWhere MaSV >=1100",
        idx: 3,
      },
    ],
    idx: 206,
    title:
      "SinhVien (MaSV, HoSV, TenSV, DiaChi, ThanhPho,MaVung)\nDựa vào lược đồ quan hệ trên, Liệt kê tất cả các thông tin cuả sinh viên mà có mã sinh viên từ 1100 đến 1200?",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 207,
    title:
      "SinhVien (MaSV, HoSV, TenSV, DiaChi, ThanhPho,MaVung)\nDựa vào lược đồ quan hệ trên, thay đổi mã vùng cuả của sinh viên ở Tp.HCM thành 08?",
    answers: [
      {
        idx: 0,
        title: "Update SinhVien\nSet MaVung='08'\nWhere ThanhPho='Tp.HCM'",
        isKey: true,
      },
      {
        isKey: false,
        idx: 1,
        title: "Update MaVung='08'\nWhere ThanhPho='Tp.HCM'",
      },
      {
        idx: 2,
        title: "Update SinhVien\nWhere ThanhPho='Tp.HCM' And MaVung='08'",
        isKey: false,
      },
      {
        isKey: false,
        idx: 3,
        title: "Tất cả các phương án trên",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dữ liệu và thông tin về bản chất là hoàn toàn giống nhau",
      },
      {
        title: "Dữ liệu được lưu trữ ở mức thô, thông tin là đã được qua xử lý",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        isKey: false,
        title: "Không có sự phân biệt giữa dữ liệu và thông tin",
      },
      {
        title: "Lựa chọn khác",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Sự phân biệt giữa dữ liệu và thông tin nào sau đây là chính xác nhất?",
    idx: 208,

    practiceCode: "co-so-du-lieu-01",
  },
  {
    answers: [
      {
        idx: 0,
        title: "Quan hệ",
        isKey: true,
      },
      {
        idx: 1,
        title: "Bộ dữ liệu",
        isKey: false,
      },
      {
        title: "Lược đồ quan hệ",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "Lựa chọn khác",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 209,

    title:
      "Sự thể hiện (Bảng hai chiều) của lược đồ quan hệ Q tại thời điểm bất kỳ gọi là?",
  },
  {
    title: "Tạo lập một Cơ Sở dữ liệu là quá trình:",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Cấu trúc Cơ Sở dữ liệu",
      },
      {
        isKey: false,
        idx: 1,
        title: "Xử lý Cơ Sở dữ liệu",
      },
      {
        idx: 2,
        isKey: true,
        title: "Thiết kế Cơ Sở dữ liệu",
      },
      {
        title: "Truy vấn Cơ Sở dữ liệu",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 210,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Quan hệ",
      },
      {
        idx: 1,
        isKey: false,
        title: "Bộ dữ liệu",
      },
      {
        idx: 2,
        isKey: true,
        title: "Lược đồ quan hệ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lựa chọn khác",
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Tập tất cả các thuộc tính của đối tượng cùng với các mối liên hệ giữa chúng gọi là?",
    idx: 211,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 212,
    title: "Tất cả các hàm sau đây được xây dựng sẳn trong SQL, ngoại trừ:",

    answers: [
      {
        title: "COUNT",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "TOTAL",
      },
      {
        title: "AVG",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "MIN",
        isKey: false,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",

    title:
      "Phép toán nào sau đây, chỉ có hiệu lực khi thực hiện trên các quan hệ trong cùng lược đồ CSDL",
    answers: [
      {
        title: "Intersection (Phép giao)",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        title: "Không có phương án nào",
        isKey: false,
      },
      {
        title: "Equi-Join (Phép kết bằng)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Cartesian product (Tích Descartes)",
        isKey: false,
        idx: 3,
      },
    ],
    idx: 213,
  },
  {
    answers: [
      {
        title: "Khoá ngoại.",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "Khoá dự tuyển và khoá chính.",
      },
      {
        idx: 2,
        isKey: false,
        title: "Khoá chính",
      },
      {
        isKey: false,
        title: "Khoá dự tuyển",
        idx: 3,
      },
    ],
    title:
      "Thuộc tính mà xác định duy nhất một bộ trong một quan hệ được gọi là:",
    practiceCode: "co-so-du-lieu-01",

    idx: 214,
  },
  {
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "union (Phép hợp)",
      },
      {
        title: "Intersection (Phép giao)",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        idx: 2,
        title: "product (Phép tích)",
      },
      {
        title: "difference (Phép trừ)",
        idx: 3,
        isKey: false,
      },
    ],
    title:
      "Phép toán nào sau đây dùng để lấy các dòng dữ liệu có trong cả hai Table A và B",
    idx: 215,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 216,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "=",
      },
      {
        title: "as",
        idx: 1,
        isKey: true,
      },
      {
        title: "&",
        idx: 2,
        isKey: false,
      },
      {
        title: "->",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Trong câu lệnh truy vấn dữ liệu, để đặt bí danh (alias) cho bảng, cột ta sử dụng từ khóa gì?",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    title:
      "Trong câu lệnh truy vấn dữ liệu, mệnh đề nào dùng để giới hạn số cột?",
    answers: [
      {
        title: "Select",
        isKey: true,
        idx: 0,
      },
      {
        isKey: false,
        title: "From",
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Where",
      },
      {
        idx: 3,
        title: "Having",
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    idx: 217,
  },
  {
    idx: 218,

    title: "Trong lệnh cập nhật dữ liệu, nếu ta không dùng mệnh đề WHERE thì:",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Sẽ không thực hiện lệnh cập nhật",
      },
      {
        idx: 1,
        isKey: false,
        title: "Chỉ một số dòng được cập nhật",
      },
      {
        title: "Không có dòng nào được cập nhật",
        isKey: false,
        idx: 2,
      },
      {
        isKey: true,
        title: "Tất cả các dòng sẽ được cập nhật",
        idx: 3,
      },
    ],
  },
  {
    idx: 219,
    practiceCode: "co-so-du-lieu-01",

    title:
      "Trong mô hình dữ liệu quan hệ, các đặc trưng riêng của đối tượng được gọi là?",
    answers: [
      {
        title: "Thuộc tính",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "đặc trưng riêng",
      },
      {
        isKey: false,
        idx: 2,
        title: "quan hệ",
      },
      {
        isKey: false,
        idx: 3,
        title: "Lựa chọn khác",
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "DECIMAL (7,3)",
        isKey: false,
      },
      {
        idx: 1,
        title: "DECIMAL (4,3)",
        isKey: false,
      },
      {
        title: "DECIMAL (7,4)",
        isKey: true,
        idx: 2,
      },
      {
        isKey: false,
        title: "DECIMAL (8,3)",
        idx: 3,
      },
    ],

    idx: 220,
    title:
      "Trong SQL để định nghĩa một số DECIMAL có tối đa 7 số, có 4 chữ số thập phân. Ta khai báo:",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    title: "Trong SQL, tên bảng (Table Name) phải duy nhất",
    answers: [
      {
        title: "cho tất cả các người sử dụng",
        isKey: false,
        idx: 0,
      },
      {
        title: "trong phạm vi của một database",
        idx: 1,
        isKey: true,
      },
      {
        title: "cho tất cả các database",
        isKey: false,
        idx: 2,
      },
      {
        isKey: false,
        title:
          "trong tất cả các bảng mà được tạo ra bởi một người sử dụng nào đó",
        idx: 3,
      },
    ],
    idx: 221,
  },
  {
    answers: [
      {
        title: "Một bảng gồm 1 cột A có 3 dòng (a1), (a1) và (a2) ồ",
        isKey: true,
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Một bảng gồm 1 cột B và 2 dòng (b1) và (b2)",
      },
      {
        idx: 2,
        title: "Một bảng gồm 1 cột A có 3 dòng (a1), (a1) và (a4)",
        isKey: false,
      },
      {
        idx: 3,
        isKey: false,
        title: "Một bảng gồm 1 cột A có 5 dòng (a1), (a1), (a2), (a2) và (a2)",
      },
    ],
    title:
      "Xét hai quan hệ R và S. Hãy cho biết kết quả của lệnh truy vấn sau:\nSelect A From R Where B = ANY (Select B From S)\nR\nA B C\n-----------\na1 b1 c1\na1 b2 c2\na2 b1 c1\na2 b3 c2\na2 b3 c3\na4 b3 c3\nS\nB C\n---------\nb1 c1\nb2 c2\nb4 c3\nb5 c2",
    practiceCode: "co-so-du-lieu-01",

    idx: 222,
  },
  {
    title:
      "Xét lược đồ quan hệ R(T,V,X,P,K) với tập phụ hàm F={T V - >X, X P - >K, X - >T, K ->P} .Bao đóng của tậpf {T, V, K} là:",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "{T V K P}",
        isKey: false,
        idx: 0,
      },
      {
        title: "{T V X P K}",
        isKey: true,
        idx: 1,
      },
      {
        title: "{T V K X}",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "{T V K}",
        isKey: false,
      },
    ],
    idx: 223,
  },
  {
    answers: [
      {
        title: "I",
        isKey: false,
        idx: 0,
      },
      {
        title: "A X",
        isKey: false,
        idx: 1,
      },
      {
        idx: 2,
        title: "I A",
        isKey: true,
      },
      {
        title: "lựa chọn khác",
        idx: 3,
        isKey: false,
      },
    ],

    title:
      "Xét lược đồ quan hệ R = (I ,A,N,G,X) với tập phụ thuộc hàm F= {I A -> N G X , I -> X} .Khóa của R là:",
    practiceCode: "co-so-du-lieu-01",
    idx: 224,
  },
  {
    title:
      "Xét lược đồ quan hệ R(A,B,C,D) với tập phụ hàm F={A->BC, B->D}. Gỉa sử tập khóa K={A}. R sẽ đạt thấp nhất là dạng chuẩn nào?",

    idx: 225,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        isKey: true,
        idx: 1,
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    answers: [
      {
        idx: 0,
        title: "Dạng chuẩn 1 (1NF)",
        isKey: false,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: false,
      },
      {
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
        isKey: true,
      },
      {
        idx: 3,
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],
    idx: 226,

    title:
      "Xét lược đồ quan hệ R(A,B,C,D) với tập phụ hàm F={A->BCD}. Gỉa sử tập khóa K={A}. R sẽ đạt thấp nhất là dạng chuẩn nào?",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 227,
    answers: [
      {
        isKey: true,
        title: "B V K, C V K và V K M",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "B V M, C V K và V K M",
      },
      {
        idx: 2,
        isKey: false,
        title: "V K, B Kvà V K M",
      },
      {
        title: "B V, C K và V M",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Xét quan hệ R với tâp thuộc tính B C V K M. Với tập phụ thuộc hàm: B->C, C V->M và M K->B. Hãy xác định tất cả các khóa của R",
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 228,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        idx: 2,
        title: "Lựa chọn khác",
        isKey: false,
      },
      {
        idx: 3,
        isKey: true,
        title: "Dạng chuẩn 1 (1NF)",
      },
    ],

    title:
      "Xét quan hệ R(A B C D E F H) với tập phụ thuộc hàm: A -> D, AE -> H, DF -> BC, E -> C, H -> E\nPhân rã R thành 3 quan hệ: (AD) (EC) (ABEFH). Phép phân rã đạt chuẩn:",
  },
  {
    idx: 229,
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        idx: 1,
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
      {
        idx: 2,
        isKey: true,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        isKey: false,
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
    title:
      "Xét quan hệ student(sno, sname, cname, cno). Gỉa sử các khóa của Student là (sno, cno) , (sname, cname) .\nXác định dạng chuẩn của student:",
  },
  {
    title:
      "Xét R(A,B,C) với tập phụ thuộc hàm F={A->BC; A->C; B->C}. Phụ thuộc hàm nào trrong F là dư thừa?",
    idx: 230,
    answers: [
      {
        title: "A->BC",
        isKey: false,
        idx: 0,
      },
      {
        idx: 1,
        isKey: true,
        title: "A->C",
      },
      {
        idx: 2,
        title: "B->C",
        isKey: false,
      },
      {
        isKey: false,
        title: "Lựa chọn khác",
        idx: 3,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 231,
    title:
      "Xét R(A,B,C,D) có khóa chính là A, là 2NF nhưng không đạt 3NF. Phụ thuộc hàm nào sau đây là không đúng:",
    answers: [
      {
        title: "B->C",
        isKey: false,
        idx: 0,
      },
      {
        title: "A->B",
        idx: 1,
        isKey: false,
      },
      {
        title: "C->A",
        isKey: true,
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "A->C",
      },
    ],

    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 232,
    answers: [
      {
        title: "J -> C",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "Q J -> G",
      },
      {
        isKey: true,
        idx: 2,
        title: "E Q-> C",
      },
      {
        title: "E -> J",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Xét R(E,J,C,Q,G). Phụ thuộc hàm sau đây trong tập F= {E -> J; E Q -> C; Q J -> G; J -> C} là dư thừa:",

    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",

    title:
      "Xét R(K,G,B,H,Z,C) Với tập phụ thuộc hàm F={K -> G, K -> B, B H -> Z, B H -> C, G -> Z}. Phụ thuộc hàm nào sau đây không được suy ra từ F?",
    idx: 233,
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "K -> Z",
      },
      {
        isKey: false,
        title: "B H -> Z C",
        idx: 1,
      },
      {
        idx: 2,
        title: "K H -> C",
        isKey: false,
      },
      {
        isKey: true,
        idx: 3,
        title: "G -> B H",
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",

    idx: 234,
    answers: [
      {
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
        idx: 0,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        isKey: true,
        idx: 1,
      },
      {
        idx: 2,
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        isKey: false,
        idx: 3,
      },
    ],
    title:
      "Xét R{K , O , U , F , T } với tập phụ thuộc hàm F={ K -> F,T ;F-> O,U; K,U -> O }. Xác định dạng chuẩn của R?",
  },
  {
    title:
      "Cho lược đồ quan hệ NhanVien(MaNV, HoTenNV, Luong, MaPB, NguoiQL, NgaySinh) và tập phụ thuộc hàm {MaNV->HoTenNV, Luong, MaPB, MaTruongPhong, NgaySinh; MaPB->MaTruongPhong}.\nXác định dạng chuẩn cao nhất cuả bảng nhân viên.",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: true,
      },
      {
        idx: 2,
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
      },
      {
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        idx: 3,
        isKey: false,
      },
    ],

    idx: 235,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    idx: 236,

    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: false,
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
        isKey: true,
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        idx: 3,
      },
    ],
    title:
      "Cho lược đồ quan hệ R(A,B,C,D) và tập phụ thuộc hàm F={AB->C,D->B,C->ABD}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.",
  },
  {
    answers: [
      {
        idx: 0,
        isKey: true,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
      },
      {
        idx: 3,
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],
    title:
      "Cho lược đồ quan hệ R(A,B,C,D,E,H) và tập phụ thuộc hàm F={A->E,C->D,E- >DH}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.",

    practiceCode: "co-so-du-lieu-01",
    idx: 237,
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        isKey: false,
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],
    idx: 238,
    title:
      "Cho lược đồ quan hệ R(A,B,C,D,E,I) và tập phụ thuộc hàm F={ACD->EBI,CE- >AD}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.",
  },
  {
    idx: 239,
    title:
      "Cho lược đồ quan hệ R(B,F,D,H,I) và tập phụ thuộc hàm T={B->HI,H->FD,BD->F}. Tìm bao đóng cuả tập thuộc tính {BH}.",
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        idx: 0,
        title: "{FDHI}",
      },
      {
        isKey: false,
        title: "{BFDH}",
        idx: 1,
      },
      {
        title: "{BFDHI}",
        isKey: true,
        idx: 2,
      },
      {
        title: "{BFHI}",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    answers: [
      {
        title: "L",
        isKey: false,
        idx: 0,
      },
      {
        title: "B",
        idx: 1,
        isKey: false,
      },
      {
        isKey: false,
        title: "H",
        idx: 2,
      },
      {
        idx: 3,
        isKey: true,
        title: "Tất cả các phương án trên đều là khoá",
      },
    ],
    title:
      "Cho lược đồ quan hệ R(B,P,V,L,H) và tập phụ thuộc hàm F={B->P, P->V, PV->B,B- >L,H->B, L->H}.\nTập thuộc tính nào sau đây không phải là khoá?",
    idx: 240,
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        title: "{CAMI}",
        isKey: false,
      },
      {
        isKey: true,
        idx: 1,
        title: "{AMIZ}",
      },
      {
        title: "{CIAM}",
        isKey: false,
        idx: 2,
      },
      {
        idx: 3,
        title: "{ZIMC}",
        isKey: false,
      },
    ],
    idx: 241,
    title:
      "Cho lược đồ quan hệ R(C,A,M,I,Z) và tập phụ thuộc hàm T={C->IZ,I->AM,CM->A}. Tìm bao đóng cuả tập thuộc tính {AIZ}.",
  },
  {
    idx: 242,
    practiceCode: "co-so-du-lieu-01",
    title:
      "Cho lược đồ quan hệ R(C,F,O,A,K) và tập phụ thuộc hàm T={C->AK,A->FO,CO- >F}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.",

    answers: [
      {
        title: "Dạng chuẩn 1 (1NF)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        idx: 1,
        isKey: true,
      },
      {
        isKey: false,
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
      },
      {
        isKey: false,
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",

    answers: [
      {
        title: "SJ->WN",
        idx: 0,
        isKey: false,
      },
      {
        idx: 1,
        isKey: false,
        title: "S->N",
      },
      {
        idx: 2,
        isKey: false,
        title: "ES->E ",
      },
      {
        idx: 3,
        isKey: true,
        title: "EW->JN",
      },
    ],
    idx: 243,
    title:
      "Cho lược đồ quan hệ R(E,S,J,W,N) và tập phụ thuộc hàm F={ES->JN, S->W, W- >E}. Phụ thuộc hàm nào sau đây không được suy diễn ra từ tập F?",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    idx: 244,
    title:
      "Cho lược đồ quan hệ R(F,B,K,C,I) và tập phụ thuộc hàm T={FB->KI, B->C, C->F}. Phụ thuộc hàm nào sau đây không được suy diễn ra từ tập T?",
    answers: [
      {
        idx: 0,
        title: "FC->KI",
        isKey: true,
      },
      {
        idx: 1,
        title: "B->I",
        isKey: false,
      },
      {
        isKey: false,
        idx: 2,
        title: "BK->CI",
      },
      {
        title: "FB->F",
        idx: 3,
        isKey: false,
      },
    ],
  },
  {
    title:
      "Cho lược đồ quan hệ R(G,M,V,N,H,P) và tập phụ thuộc hàm F={G->M,G->N, G->H, G->P , M->V, NHP->M}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R.",
    practiceCode: "co-so-du-lieu-01",
    idx: 245,

    answers: [
      {
        title: "Dạng chuẩn 1 (1NF)",
        isKey: false,
        idx: 0,
      },
      {
        title: "Dạng chuẩn 2 (2NF)",
        isKey: true,
        idx: 1,
      },
      {
        title: "Dạng chuẩn 3 (3NF)",
        idx: 2,
        isKey: false,
      },
      {
        title: "Dạng chuẩn Boyce-Codd (BCNF)",
        isKey: false,
        idx: 3,
      },
    ],
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        isKey: false,
        title: "QN->CH",
        idx: 0,
      },
      {
        title: "IC->NH",
        isKey: true,
        idx: 1,
      },
      {
        isKey: false,
        title: "IQ->I",
        idx: 2,
      },
      {
        idx: 3,
        title: "Q->H",
        isKey: false,
      },
    ],

    title:
      "Cho lược đồ quan hệ R(I,Q,N,C,H) và tập phụ thuộc hàm F={IQ->NH, Q->C, C->I}. Phụ thuộc hàm nào sau đây không được suy diễn ra từ tập F?",
    idx: 246,
  },
  {
    idx: 247,
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        idx: 0,
        isKey: false,
        title: "Dạng chuẩn 1 (1NF)",
      },
      {
        isKey: false,
        idx: 1,
        title: "Dạng chuẩn 2 (2NF)",
      },
      {
        idx: 2,
        isKey: true,
        title: "Dạng chuẩn 3 (3NF)",
      },
      {
        idx: 3,
        isKey: false,
        title: " 4. Dạng chuẩn Boyce-Codd (BCNF)",
      },
    ],

    title:
      "Cho lược đồ quan hệ R(N,G,P,M) và tập phụ thuộc hàm F={NGP->M, M->P}. Xác định dạng chuẩn cao nhất cuả lược đồ quan hệ R",
  },
  {
    idx: 248,
    title:
      "Cho lược đồ quan hệ R(S,G,F,Y,N) và tập phụ thuộc hàm T={S->G, G->F, GF->S,S- >Y,S->N,N->S}.\nTập thuộc tính nào sau đây không phải là khoá?",

    answers: [
      {
        isKey: false,
        idx: 0,
        title: "N",
      },
      {
        title: "GF",
        isKey: false,
        idx: 1,
      },
      {
        isKey: true,
        idx: 2,
        title: "Y",
      },
      {
        title: "S",
        idx: 3,
        isKey: false,
      },
    ],
    practiceCode: "co-so-du-lieu-01",
  },
  {
    practiceCode: "co-so-du-lieu-01",
    answers: [
      {
        title: "MIN",
        idx: 0,
        isKey: false,
      },
      {
        isKey: false,
        idx: 1,
        title: "MAX",
      },
      {
        isKey: false,
        title: "COUNT",
        idx: 2,
      },
      {
        isKey: true,
        idx: 3,
        title: "Average",
      },
    ],
    idx: 249,
    title:
      "SQL cung cấp một số các hàm thống kê theo nhóm. Hàm nào sau đây không có trong SQL?",
  },
];

export default questions;
