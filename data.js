// data.js - Dữ liệu địa điểm du lịch 6 tỉnh miền Tây
// Cấu trúc: id, ten, tinh_thanh, chi_phi (VNĐ), thoi_gian (giờ - cố định 24h = 1 ngày), hinh_anh, thuoc_tinh (1-10)

const DEFAULT_PLACES = [
  // ============ TÂY NINH (7 địa điểm) ============
  {
    id: 1,
    ten: "Núi Bà Đen",
    tinh_thanh: "Tây Ninh",
    chi_phi: 800000,
    thoi_gian: 24,
    hinh_anh: "images/nui-ba-den.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 7,
      van_hoa: 8,
      am_thuc: 6,
      kham_pha: 8,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 9,
      khach_san: 6
    }
  },
  {
    id: 2,
    ten: "Tòa Thánh Cao Đài",
    tinh_thanh: "Tây Ninh",
    chi_phi: 500000,
    thoi_gian: 24,
    hinh_anh: "images/toa-thanh-cao-dai.jpg",
    thuoc_tinh: {
      thien_nhien: 5,
      nghi_duong: 6,
      van_hoa: 10,
      am_thuc: 7,
      kham_pha: 7,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 10,
      khach_san: 5
    }
  },
  {
    id: 3,
    ten: "Khu Du lịch Hồ Dầu Tiếng",
    tinh_thanh: "Tây Ninh",
    chi_phi: 600000,
    thoi_gian: 24,
    hinh_anh: "images/ho-dau-tieng.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 8,
      van_hoa: 5,
      am_thuc: 7,
      kham_pha: 6,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 7,
      khach_san: 7
    }
  },
  {
    id: 4,
    ten: "Vườn Quốc Gia Lò Gò - Xa Mát",
    tinh_thanh: "Tây Ninh",
    chi_phi: 700000,
    thoi_gian: 24,
    hinh_anh: "images/lo-go-xa-mat.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 7,
      van_hoa: 6,
      am_thuc: 6,
      kham_pha: 9,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 9,
      khach_san: 5
    }
  },
  {
    id: 5,
    ten: "Khu Di tích Địa đạo Củ Chi",
    tinh_thanh: "Tây Ninh",
    chi_phi: 650000,
    thoi_gian: 24,
    hinh_anh: "images/dia-dao-cu-chi.jpg",
    thuoc_tinh: {
      thien_nhien: 6,
      nghi_duong: 5,
      van_hoa: 10,
      am_thuc: 7,
      kham_pha: 9,
      gia_dinh: 8,
      cap_doi: 6,
      chup_anh: 8,
      khach_san: 5
    }
  },
  {
    id: 6,
    ten: "Chùa Bà Đen",
    tinh_thanh: "Tây Ninh",
    chi_phi: 550000,
    thoi_gian: 24,
    hinh_anh: "images/chua-ba-den.jpg",
    thuoc_tinh: {
      thien_nhien: 7,
      nghi_duong: 7,
      van_hoa: 9,
      am_thuc: 6,
      kham_pha: 7,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 8,
      khach_san: 6
    }
  },
  {
    id: 7,
    ten: "Khu Du lịch Suối Tiên",
    tinh_thanh: "Tây Ninh",
    chi_phi: 900000,
    thoi_gian: 24,
    hinh_anh: "images/suoi-tien-tay-ninh.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 8,
      van_hoa: 5,
      am_thuc: 7,
      kham_pha: 7,
      gia_dinh: 10,
      cap_doi: 8,
      chup_anh: 8,
      khach_san: 7
    }
  },
  
  // ============ ĐỒNG THÁP (6 địa điểm) ============
  {
    id: 8,
    ten: "Vườn Quốc Gia Tràm Chim",
    tinh_thanh: "Đồng Tháp",
    chi_phi: 850000,
    thoi_gian: 24,
    hinh_anh: "images/tram-chim.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 8,
      van_hoa: 6,
      am_thuc: 7,
      kham_pha: 9,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 9,
    ten: "Làng Hoa Sa Đéc",
    tinh_thanh: "Đồng Tháp",
    chi_phi: 600000,
    thoi_gian: 24,
    hinh_anh: "images/lang-hoa-sa-dec.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 7,
      van_hoa: 7,
      am_thuc: 8,
      kham_pha: 6,
      gia_dinh: 9,
      cap_doi: 10,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 10,
    ten: "Khu di tích Xẻo Quít",
    tinh_thanh: "Đồng Tháp",
    chi_phi: 700000,
    thoi_gian: 24,
    hinh_anh: "images/xeo-quit.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 8,
      van_hoa: 6,
      am_thuc: 7,
      kham_pha: 8,
      gia_dinh: 8,
      cap_doi: 9,
      chup_anh: 10,
      khach_san: 5
    }
  },
  {
    id: 11,
    ten: "Chợ Nổi Sa Đéc",
    tinh_thanh: "Đồng Tháp",
    chi_phi: 500000,
    thoi_gian: 24,
    hinh_anh: "images/cho-noi-sa-dec.jpg",
    thuoc_tinh: {
      thien_nhien: 6,
      nghi_duong: 6,
      van_hoa: 9,
      am_thuc: 9,
      kham_pha: 8,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 9,
      khach_san: 5
    }
  },
  {
    id: 12,
    ten: "Đồng Sen Tháp Mười",
    tinh_thanh: "Đồng Tháp",
    chi_phi: 650000,
    thoi_gian: 24,
    hinh_anh: "images/dong-sen-thap-muoi.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 8,
      van_hoa: 7,
      am_thuc: 8,
      kham_pha: 7,
      gia_dinh: 9,
      cap_doi: 9,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 13,
    ten: "Khu Du lịch Gáo Giồng",
    tinh_thanh: "Đồng Tháp",
    chi_phi: 750000,
    thoi_gian: 24,
    hinh_anh: "images/gao-giong.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 9,
      van_hoa: 6,
      am_thuc: 9,
      kham_pha: 7,
      gia_dinh: 10,
      cap_doi: 8,
      chup_anh: 8,
      khach_san: 8
    }
  },
  
  // ============ VĨNH LONG (5 địa điểm) ============
  {
    id: 14,
    ten: "Cù Lao An Bình",
    tinh_thanh: "Vĩnh Long",
    chi_phi: 800000,
    thoi_gian: 24,
    hinh_anh: "images/cu-lao-an-binh.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 9,
      van_hoa: 8,
      am_thuc: 9,
      kham_pha: 8,
      gia_dinh: 9,
      cap_doi: 9,
      chup_anh: 9,
      khach_san: 7
    }
  },
  {
    id: 15,
    ten: "Chợ Nổi Cái Bè",
    tinh_thanh: "Vĩnh Long",
    chi_phi: 600000,
    thoi_gian: 24,
    hinh_anh: "images/cho-noi-cai-be.jpg",
    thuoc_tinh: {
      thien_nhien: 7,
      nghi_duong: 6,
      van_hoa: 9,
      am_thuc: 10,
      kham_pha: 9,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 9,
      khach_san: 5
    }
  },
  {
    id: 16,
    ten: "Vườn Cây Trái Vĩnh Long",
    tinh_thanh: "Vĩnh Long",
    chi_phi: 550000,
    thoi_gian: 24,
    hinh_anh: "images/vuon-cay-trai.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 8,
      van_hoa: 7,
      am_thuc: 10,
      kham_pha: 7,
      gia_dinh: 10,
      cap_doi: 8,
      chup_anh: 8,
      khach_san: 6
    }
  },
  {
    id: 17,
    ten: "Đảo Bình Hòa Phước",
    tinh_thanh: "Vĩnh Long",
    chi_phi: 700000,
    thoi_gian: 24,
    hinh_anh: "images/dao-binh-hoa-phuoc.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 9,
      van_hoa: 6,
      am_thuc: 8,
      kham_pha: 7,
      gia_dinh: 9,
      cap_doi: 9,
      chup_anh: 9,
      khach_san: 7
    }
  },
  {
    id: 18,
    ten: "Khu Du lịch Sinh thái Cồn Sơn",
    tinh_thanh: "Vĩnh Long",
    chi_phi: 750000,
    thoi_gian: 24,
    hinh_anh: "images/con-son.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 8,
      van_hoa: 7,
      am_thuc: 9,
      kham_pha: 8,
      gia_dinh: 10,
      cap_doi: 8,
      chup_anh: 8,
      khach_san: 7
    }
  },
  
  // ============ AN GIANG (6 địa điểm) ============
  {
    id: 19,
    ten: "Núi Sam",
    tinh_thanh: "An Giang",
    chi_phi: 700000,
    thoi_gian: 24,
    hinh_anh: "images/nui-sam.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 7,
      van_hoa: 9,
      am_thuc: 8,
      kham_pha: 8,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 9,
      khach_san: 7
    }
  },
  {
    id: 20,
    ten: "Chùa Bà Chúa Xứ",
    tinh_thanh: "An Giang",
    chi_phi: 600000,
    thoi_gian: 24,
    hinh_anh: "images/chua-ba-chua-xu.jpg",
    thuoc_tinh: {
      thien_nhien: 7,
      nghi_duong: 7,
      van_hoa: 10,
      am_thuc: 8,
      kham_pha: 7,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 9,
      khach_san: 6
    }
  },
  {
    id: 21,
    ten: "Rừng Tràm Trà Sư (An Giang)",
    tinh_thanh: "An Giang",
    chi_phi: 750000,
    thoi_gian: 24,
    hinh_anh: "images/tra-su-an-giang.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 9,
      van_hoa: 6,
      am_thuc: 7,
      kham_pha: 9,
      gia_dinh: 8,
      cap_doi: 9,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 22,
    ten: "Thiền Viện Trúc Lâm Phương Nam",
    tinh_thanh: "An Giang",
    chi_phi: 550000,
    thoi_gian: 24,
    hinh_anh: "images/truc-lam-phuong-nam.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 9,
      van_hoa: 10,
      am_thuc: 7,
      kham_pha: 6,
      gia_dinh: 8,
      cap_doi: 9,
      chup_anh: 9,
      khach_san: 7
    }
  },
  {
    id: 23,
    ten: "Chợ Nổi Long Xuyên",
    tinh_thanh: "An Giang",
    chi_phi: 500000,
    thoi_gian: 24,
    hinh_anh: "images/cho-noi-long-xuyen.jpg",
    thuoc_tinh: {
      thien_nhien: 6,
      nghi_duong: 6,
      van_hoa: 9,
      am_thuc: 10,
      kham_pha: 8,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 9,
      khach_san: 5
    }
  },
  {
    id: 24,
    ten: "Khu Du lịch Núi Cấm",
    tinh_thanh: "An Giang",
    chi_phi: 800000,
    thoi_gian: 24,
    hinh_anh: "images/nui-cam.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 7,
      van_hoa: 8,
      am_thuc: 7,
      kham_pha: 9,
      gia_dinh: 8,
      cap_doi: 8,
      chup_anh: 9,
      khach_san: 6
    }
  },
  
  // ============ CÀ MAU (5 địa điểm) ============
  {
    id: 25,
    ten: "Mũi Cà Mau",
    tinh_thanh: "Cà Mau",
    chi_phi: 900000,
    thoi_gian: 24,
    hinh_anh: "images/mui-ca-mau.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 8,
      van_hoa: 7,
      am_thuc: 8,
      kham_pha: 9,
      gia_dinh: 9,
      cap_doi: 9,
      chup_anh: 10,
      khach_san: 7
    }
  },
  {
    id: 26,
    ten: "Rừng U Minh Hạ",
    tinh_thanh: "Cà Mau",
    chi_phi: 750000,
    thoi_gian: 24,
    hinh_anh: "images/u-minh-ha.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 8,
      van_hoa: 6,
      am_thuc: 7,
      kham_pha: 10,
      gia_dinh: 8,
      cap_doi: 8,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 27,
    ten: "Chợ Nổi Năm Căn",
    tinh_thanh: "Cà Mau",
    chi_phi: 600000,
    thoi_gian: 24,
    hinh_anh: "images/cho-noi-nam-can.jpg",
    thuoc_tinh: {
      thien_nhien: 7,
      nghi_duong: 6,
      van_hoa: 9,
      am_thuc: 10,
      kham_pha: 8,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 9,
      khach_san: 5
    }
  },
  {
    id: 28,
    ten: "Khu Du lịch Hòn Đá Bạc",
    tinh_thanh: "Cà Mau",
    chi_phi: 700000,
    thoi_gian: 24,
    hinh_anh: "images/hon-da-bac.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 8,
      van_hoa: 6,
      am_thuc: 8,
      kham_pha: 8,
      gia_dinh: 9,
      cap_doi: 9,
      chup_anh: 9,
      khach_san: 7
    }
  },
  {
    id: 29,
    ten: "Khu Bảo tồn Đất Ngập Nước Vườn Quốc Gia U Minh Hạ",
    tinh_thanh: "Cà Mau",
    chi_phi: 800000,
    thoi_gian: 24,
    hinh_anh: "images/vqg-u-minh-ha.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 7,
      van_hoa: 6,
      am_thuc: 7,
      kham_pha: 10,
      gia_dinh: 8,
      cap_doi: 8,
      chup_anh: 10,
      khach_san: 6
    }
  },
  
  // ============ CẦN THƠ (6 địa điểm) ============
  {
    id: 30,
    ten: "Chợ Nổi Cái Răng",
    tinh_thanh: "Cần Thơ",
    chi_phi: 650000,
    thoi_gian: 24,
    hinh_anh: "images/cho-noi-cai-rang.jpg",
    thuoc_tinh: {
      thien_nhien: 7,
      nghi_duong: 6,
      van_hoa: 10,
      am_thuc: 10,
      kham_pha: 9,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 10,
      khach_san: 7
    }
  },
  {
    id: 31,
    ten: "Nhà Cổ Bình Thủy",
    tinh_thanh: "Cần Thơ",
    chi_phi: 550000,
    thoi_gian: 24,
    hinh_anh: "images/nha-co-binh-thuy.jpg",
    thuoc_tinh: {
      thien_nhien: 6,
      nghi_duong: 7,
      van_hoa: 10,
      am_thuc: 8,
      kham_pha: 7,
      gia_dinh: 8,
      cap_doi: 9,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 32,
    ten: "Cồn Sơn",
    tinh_thanh: "Cần Thơ",
    chi_phi: 600000,
    thoi_gian: 24,
    hinh_anh: "images/con-son-can-tho.jpg",
    thuoc_tinh: {
      thien_nhien: 8,
      nghi_duong: 8,
      van_hoa: 7,
      am_thuc: 9,
      kham_pha: 8,
      gia_dinh: 10,
      cap_doi: 8,
      chup_anh: 8,
      khach_san: 7
    }
  },
  {
    id: 33,
    ten: "Bảo Tàng Cần Thơ",
    tinh_thanh: "Cần Thơ",
    chi_phi: 500000,
    thoi_gian: 24,
    hinh_anh: "images/bao-tang-can-tho.jpg",
    thuoc_tinh: {
      thien_nhien: 5,
      nghi_duong: 6,
      van_hoa: 10,
      am_thuc: 7,
      kham_pha: 8,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 8,
      khach_san: 6
    }
  },
  {
    id: 34,
    ten: "Vườn Cò Bằng Lăng",
    tinh_thanh: "Cần Thơ",
    chi_phi: 700000,
    thoi_gian: 24,
    hinh_anh: "images/vuon-co-bang-lang.jpg",
    thuoc_tinh: {
      thien_nhien: 10,
      nghi_duong: 8,
      van_hoa: 7,
      am_thuc: 7,
      kham_pha: 8,
      gia_dinh: 9,
      cap_doi: 8,
      chup_anh: 10,
      khach_san: 6
    }
  },
  {
    id: 35,
    ten: "Khu Du lịch Sinh thái Mỹ Khánh",
    tinh_thanh: "Cần Thơ",
    chi_phi: 800000,
    thoi_gian: 24,
    hinh_anh: "images/my-khanh.jpg",
    thuoc_tinh: {
      thien_nhien: 9,
      nghi_duong: 9,
      van_hoa: 7,
      am_thuc: 9,
      kham_pha: 8,
      gia_dinh: 10,
      cap_doi: 9,
      chup_anh: 9,
      khach_san: 8
    }
  }
];

// Khởi tạo dữ liệu trong localStorage
function initializeData() {
  const existingData = localStorage.getItem('places');
  
  if (!existingData) {
    localStorage.setItem('places', JSON.stringify(DEFAULT_PLACES));
    console.log('Đã khởi tạo 35 địa điểm du lịch 6 tỉnh miền Tây');
  } else {
    console.log('Dữ liệu đã tồn tại trong localStorage');
  }
}

// Lấy danh sách địa điểm từ localStorage
function getPlaces() {
  const data = localStorage.getItem('places');
  return data ? JSON.parse(data) : DEFAULT_PLACES;
}

// Lưu danh sách địa điểm vào localStorage
function savePlaces(places) {
  localStorage.setItem('places', JSON.stringify(places));
}

// Thêm địa điểm mới
function addPlace(place) {
  const places = getPlaces();
  const maxId = places.length > 0 ? Math.max(...places.map(p => p.id)) : 0;
  place.id = maxId + 1;
  places.push(place);
  savePlaces(places);
  return place;
}

// Cập nhật địa điểm
function updatePlace(id, updatedPlace) {
  const places = getPlaces();
  const index = places.findIndex(p => p.id === id);
  
  if (index !== -1) {
    places[index] = { ...places[index], ...updatedPlace, id: id };
    savePlaces(places);
    return places[index];
  }
  return null;
}

// Xóa địa điểm
function deletePlace(id) {
  const places = getPlaces();
  const filteredPlaces = places.filter(p => p.id !== id);
  
  if (filteredPlaces.length < places.length) {
    savePlaces(filteredPlaces);
    return true;
  }
  return false;
}

// Lấy địa điểm theo ID
function getPlaceById(id) {
  const places = getPlaces();
  return places.find(p => p.id === id);
}

// Reset về dữ liệu mặc định
function resetToDefault() {
  localStorage.setItem('places', JSON.stringify(DEFAULT_PLACES));
  console.log('Đã reset về 35 địa điểm mặc định');
}

// Khởi tạo dữ liệu khi file được load
initializeData();