import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:9191/api/members';

// Hàm lấy danh sách thành viên với hỗ trợ phân trang
export const listMembers = (page = 0, size = 4) => {
    // Sử dụng `params` để truyền tham số phân trang
    return axios.get(REST_API_BASE_URL, {
        params: {
            page: page,
            size: size
        }
    });
};