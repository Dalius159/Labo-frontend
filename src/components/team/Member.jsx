import React, {useEffect, useState} from 'react'
import '/src/assets/css/team/member.css'
import { listMembers } from '../../services/MemberService'

const Member = () => {

    const [members, setMembers] = useState([]);
    const [page, setPage] = useState(0);  // Trang hiện tại
    const [size, setSize] = useState(4);  // Số lượng bản ghi mỗi trang
    const [totalPages, setTotalPages] = useState(0);  // Tổng số trang

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await listMembers(page, size); // Gọi API với page và size
                setMembers(response.data.members);  // Cập nhật danh sách thành viên
                setTotalPages(response.data.totalPages); // Cập nhật tổng số trang
            } catch (error) {
                console.error("Error fetching members:", error); // Xử lý lỗi nếu có
            }
        };

        fetchMembers();
    }, [page, size]); // Chạy lại khi `page` hoặc `size` thay đổi

  return (
    <div>
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center"></div>
                    <div className="container">
                        <div className="row bootstrap snippets bootdeys">
                            <div className="col-md-9 col-sm-7">
                            <h2>Members</h2>
                            </div>
                            <div className="col-md-3 col-sm-5"> 
                                <form method="get" role="form" className="search-form-full"> 
                                    <div className="form-group"> 
                                        <input type="text" className="form-control" name="s" id="search-input" placeholder="Search..." /> 
                                        <i className="entypo-search"></i> 
                                    </div> 
                                </form> 
                            </div> 
                        </div>
                        {/* Render danh sách thành viên */}
                        {Array.isArray(members) && members.length > 0 ? (
                            members.map((member) => (
                                <div className="member-entry" key={member.id}>
                                    <a href="#" className="member-img">
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            className="img-rounded"
                                            alt="Avatar"
                                        />
                                        <i className="fas fa-forward"></i>
                                    </a>
                                    <div className="member-details">
                                        <h4>
                                            <a href="#">{member.first_name} {member.last_name}</a>
                                        </h4>
                                        <div className="row info-list">
                                            <div className="col-sm-4">
                                                <i className="fas fa-briefcase"></i> Co-Founder at <a href="#">Complete Tech</a>
                                            </div>
                                            <div className="col-sm-4">
                                                <i className="fab fa-twitter"></i> <a href="#">@{member.first_name}</a>
                                            </div>
                                            <div className="col-sm-4">
                                                <i className="fab fa-facebook"></i> <a href="#">fb.me/{member.first_name}</a>
                                            </div>
                                            <div className="col-sm-4 mt-2">
                                                <i className="fas fa-map-marker-alt"></i> <a href="#">Prishtina</a>
                                            </div>
                                            <div className="col-sm-4 mt-2">
                                                <i className="fas fa-envelope"></i> <a href="#">{member.email}</a>
                                            </div>
                                            <div className="col-sm-4 mt-2">
                                                <i className="fab fa-linkedin"></i> <a href="#">{member.first_name}{member.last_name}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No members found.</p>
                        )}

                        <nav aria-label="Page navigation" className="d-flex justify-content-center">
                        <ul className="pagination">
                            {/* Nút Previous */}
                            <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
                            <button 
                                className="page-link" 
                                onClick={() => setPage(page - 1)} 
                                disabled={page === 0}
                            >
                                Previous
                            </button>
                            </li>

                            {/* Nút số trang */}
                            {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={`page-item ${page === index ? "active" : ""}`}>
                                <button 
                                className="page-link" 
                                onClick={() => setPage(index)}
                                >
                                {index + 1}
                                </button>
                            </li>
                            ))}

                            {/* Nút Next */}
                            <li className={`page-item ${page === totalPages - 1 ? "disabled" : ""}`}>
                            <button 
                                className="page-link" 
                                onClick={() => setPage(page + 1)} 
                                disabled={page === totalPages - 1}
                            >
                                Next
                            </button>
                            </li>
                        </ul>
                        </nav>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Member