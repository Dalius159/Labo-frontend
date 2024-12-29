const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// Tạo ứng dụng Express
const app = express();

// Cấu hình CORS để cho phép frontend React kết nối
app.use(cors());

// Tạo kết nối MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'mark',
  password: 'mark', // Đặt mật khẩu của bạn nếu có
  database: 'laboratoire', // Tên cơ sở dữ liệu
});

// Kiểm tra kết nối đến MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// API lấy dữ liệu từ MySQL
app.get('/api/members', (req, res) => {
    const page = parseInt(req.query.page) || 0;  // Trang hiện tại (default = 0)
    const size = parseInt(req.query.size) || 4;  // Số lượng bản ghi mỗi trang (default = 4)
    const offset = page * size;  // Tính toán OFFSET
  
    // Truy vấn lấy danh sách thành viên
    const dataQuery = `SELECT * FROM members LIMIT ${size} OFFSET ${offset}`;
  
    // Truy vấn đếm tổng số bản ghi
    const countQuery = `SELECT COUNT(*) AS total FROM members`;
  
    // Thực hiện cả hai truy vấn
    db.query(dataQuery, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data');
        } else {
            db.query(countQuery, (err, countResult) => {
            if (err) {
                res.status(500).send('Error retrieving total count');
            } else {
                const totalRecords = countResult[0].total;  // Tổng số bản ghi
                const totalPages = Math.ceil(totalRecords / size);  // Tính tổng số trang
    
                // Trả về kết quả dưới dạng JSON
                res.json({
                    members: results,
                    totalPages: totalPages,
                    currentPage: page,
                    totalRecords: totalRecords
                });
            }
            });
        }
    });
});
  

// Khởi động server tại cổng 9191
app.listen(9191, () => {
  console.log('Server running on http://localhost:9191');
});
