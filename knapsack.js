// knapsack.js - Thuật toán Knapsack 0/1 cho bài toán tìm địa điểm du lịch
// QUAN TRỌNG: Tối ưu bộ nhớ bằng cách chia ngân sách cho 100.000 (đơn vị: 100k VNĐ)

/**
 * Hệ số chuyển đổi ngân sách
 * Ví dụ: 5.000.000 VNĐ ÷ 100.000 = 50 đơn vị
 * Mục đích: Giảm kích thước bảng dp để tránh tràn bộ nhớ
 */
const SCALE_FACTOR = 100000;

/**
 * Tính điểm phù hợp của địa điểm dựa trên nhu cầu người dùng
 * @param {Object} place - Địa điểm du lịch
 * @param {Object} userPreferences - Nhu cầu người dùng (các thuộc tính từ 1-10)
 * @returns {number} - Điểm phù hợp (càng cao càng tốt)
 */
function calculatePlaceValue(place, userPreferences) {
  let totalValue = 0;
  let totalWeight = 0; // Tổng trọng số các thuộc tính
  
  // Duyệt qua từng thuộc tính trong nhu cầu người dùng
  for (let attr in userPreferences) {
    if (place.thuoc_tinh && place.thuoc_tinh[attr] !== undefined) {
      // Công thức: Giá trị = (Điểm của địa điểm) × (Mức độ quan tâm của người dùng)
      // Ví dụ: Địa điểm có thien_nhien=10, user muốn thien_nhien=8 → điểm = 10 × 8 = 80
      totalValue += place.thuoc_tinh[attr] * userPreferences[attr];
      totalWeight += userPreferences[attr];
    }
  }
  
  // Trả về điểm trung bình có trọng số
  // Nếu totalWeight = 0, trả về 0 để tránh chia cho 0
  return totalWeight > 0 ? totalValue / totalWeight : 0;
}

/**
 * Thuật toán Knapsack 0/1 (Quy hoạch động - Tối ưu bộ nhớ)
 * @param {Array} places - Danh sách các địa điểm du lịch
 * @param {number} maxBudget - Ngân sách tối đa (VNĐ)
 * @param {Object} userPreferences - Nhu cầu người dùng
 * @returns {Array} - Danh sách địa điểm được chọn
 */
function knapsack01(places, maxBudget, userPreferences) {
  const n = places.length; // Số lượng địa điểm
  
  // BƯỚC 1: Chuyển đổi chi phí sang đơn vị nhỏ hơn (100k VNĐ)
  // Ví dụ: 5.000.000 VNĐ → 50 đơn vị
  const scaledBudget = Math.floor(maxBudget / SCALE_FACTOR);
  
  console.log(`Ngân sách gốc: ${maxBudget.toLocaleString('vi-VN')} VNĐ`);
  console.log(`Ngân sách sau khi scale: ${scaledBudget} đơn vị (x100k VNĐ)`);
  
  // BƯỚC 2: Tính giá trị (value) cho mỗi địa điểm và scale chi phí
  const items = places.map(place => ({
    place: place,
    cost: Math.floor(place.chi_phi / SCALE_FACTOR),  // Chi phí đã scale
    originalCost: place.chi_phi,  // Chi phí gốc để hiển thị
    value: calculatePlaceValue(place, userPreferences) // Giá trị phù hợp
  }));
  
  // Lọc bỏ các địa điểm vượt ngân sách
  const affordableItems = items.filter(item => item.cost <= scaledBudget);
  
  if (affordableItems.length === 0) {
    console.log('Không có địa điểm nào phù hợp với ngân sách');
    return [];
  }
  
  const m = affordableItems.length;
  
  // BƯỚC 3: Khởi tạo bảng quy hoạch động
  // dp[i][w] = Giá trị tối đa khi xét i địa điểm đầu tiên với ngân sách w (đã scale)
  const dp = Array(m + 1).fill(null).map(() => Array(scaledBudget + 1).fill(0));
  
  console.log(`Kích thước bảng dp: ${m + 1} x ${scaledBudget + 1}`);
  
  // BƯỚC 4: Xây dựng bảng dp (bottom-up)
  for (let i = 1; i <= m; i++) {
    const currentItem = affordableItems[i - 1];
    
    for (let w = 0; w <= scaledBudget; w++) {
      // Trường hợp 1: KHÔNG chọn địa điểm thứ i
      dp[i][w] = dp[i - 1][w];
      
      // Trường hợp 2: CÓ chọn địa điểm thứ i (nếu đủ ngân sách)
      if (currentItem.cost <= w) {
        const valueWithItem = dp[i - 1][w - currentItem.cost] + currentItem.value;
        
        // Chọn phương án tốt hơn
        dp[i][w] = Math.max(dp[i][w], valueWithItem);
      }
    }
  }
  
  // BƯỚC 5: Truy vết để tìm các địa điểm được chọn
  // QUAN TRỌNG: Đảm bảo tổng chi phí KHÔNG VƯỢT QUÁ ngân sách
  const selectedPlaces = [];
  let remainingBudget = scaledBudget;
  
  // Duyệt ngược từ cuối bảng
  for (let i = m; i > 0; i--) {
    // Nếu giá trị tại dp[i][remainingBudget] khác dp[i-1][remainingBudget]
    // => Địa điểm thứ i đã được chọn
    if (dp[i][remainingBudget] !== dp[i - 1][remainingBudget]) {
      const selectedItem = affordableItems[i - 1];
      
      // KIỂM TRA QUAN TRỌNG: Chỉ thêm nếu KHÔNG vượt ngân sách
      if (selectedItem.cost <= remainingBudget) {
        selectedPlaces.push({
          ...selectedItem.place,
          diem_phu_hop: selectedItem.value.toFixed(2) // Điểm phù hợp
        });
        remainingBudget -= selectedItem.cost;
      }
    }
  }
  
  // BƯỚC 6: Kiểm tra lại tổng chi phí (double check)
  const totalCost = selectedPlaces.reduce((sum, place) => sum + place.chi_phi, 0);
  
  if (totalCost > maxBudget) {
    console.error('❌ LỖI: Tổng chi phí vượt ngân sách!');
    console.error(`Ngân sách: ${maxBudget}, Tổng chi phí: ${totalCost}`);
    
    // Loại bỏ địa điểm có chi phí cao nhất cho đến khi phù hợp
    selectedPlaces.sort((a, b) => b.chi_phi - a.chi_phi); // Sắp xếp giảm dần theo chi phí
    
    let currentTotal = totalCost;
    let i = 0;
    
    while (currentTotal > maxBudget && i < selectedPlaces.length) {
      currentTotal -= selectedPlaces[i].chi_phi;
      selectedPlaces.splice(i, 1); // Xóa địa điểm đắt nhất
    }
    
    console.log(`✅ Đã điều chỉnh: ${selectedPlaces.length} địa điểm, chi phí: ${currentTotal}`);
  }
  
  // Sắp xếp lại theo điểm phù hợp giảm dần
  selectedPlaces.sort((a, b) => parseFloat(b.diem_phu_hop) - parseFloat(a.diem_phu_hop));
  
  console.log(`✅ Đã chọn ${selectedPlaces.length} địa điểm`);
  console.log(`✅ Tổng chi phí: ${selectedPlaces.reduce((s, p) => s + p.chi_phi, 0).toLocaleString('vi-VN')} VNĐ`);
  
  return selectedPlaces;
}

/**
 * Hàm wrapper để gọi thuật toán Knapsack dễ dàng hơn
 * @param {Object} userInput - Thông tin người dùng nhập vào
 *   - ngan_sach: Ngân sách (VNĐ)
 *   - nhu_cau: Object chứa các thuộc tính (thien_nhien, nghi_duong, ...)
 *   - tinh_thanh: Lọc theo tỉnh (optional)
 * @returns {Object} - Kết quả gồm danh sách địa điểm và thông tin tổng hợp
 */
function findOptimalPlaces(userInput) {
  // Lấy danh sách địa điểm từ localStorage
  let places = getPlaces();
  
  // Kiểm tra dữ liệu đầu vào
  if (!places || places.length === 0) {
    return {
      success: false,
      message: "Không có dữ liệu địa điểm du lịch",
      danh_sach_dia_diem: []
    };
  }
  
  if (!userInput.ngan_sach || userInput.ngan_sach <= 0) {
    return {
      success: false,
      message: "Ngân sách không hợp lệ",
      danh_sach_dia_diem: []
    };
  }
  
  // Lọc theo tỉnh nếu có
  if (userInput.tinh_thanh && userInput.tinh_thanh !== 'all') {
    places = places.filter(p => p.tinh_thanh === userInput.tinh_thanh);
    console.log(`Đã lọc theo tỉnh: ${userInput.tinh_thanh} (${places.length} địa điểm)`);
  }
  
  // Chạy thuật toán Knapsack
  const selectedPlaces = knapsack01(
    places,
    userInput.ngan_sach,
    userInput.nhu_cau
  );
  
  if (selectedPlaces.length === 0) {
    return {
      success: false,
      message: "Không tìm thấy địa điểm phù hợp với ngân sách và nhu cầu của bạn. Hãy thử tăng ngân sách hoặc điều chỉnh nhu cầu.",
      danh_sach_dia_diem: []
    };
  }
  
  // Tính tổng chi phí và thời gian
  const tong_chi_phi = selectedPlaces.reduce((sum, place) => sum + place.chi_phi, 0);
  const tong_thoi_gian = selectedPlaces.reduce((sum, place) => sum + place.thoi_gian, 0);
  
  // KIỂM TRA CUỐI CÙNG: Đảm bảo không vượt ngân sách
  if (tong_chi_phi > userInput.ngan_sach) {
    console.error('❌ LỖI NGHIÊM TRỌNG: Tổng chi phí vượt ngân sách!');
    console.error(`Ngân sách: ${userInput.ngan_sach.toLocaleString('vi-VN')}`);
    console.error(`Tổng chi phí: ${tong_chi_phi.toLocaleString('vi-VN')}`);
    
    return {
      success: false,
      message: "Lỗi hệ thống: Thuật toán trả về kết quả vượt ngân sách. Vui lòng thử lại!",
      danh_sach_dia_diem: []
    };
  }
  
  return {
    success: true,
    danh_sach_dia_diem: selectedPlaces,
    tong_chi_phi: tong_chi_phi,
    tong_thoi_gian: tong_thoi_gian,
    ngan_sach_con_lai: userInput.ngan_sach - tong_chi_phi,
    so_luong_dia_diem: selectedPlaces.length
  };
}

/**
 * Demo thuật toán (dùng để test)
 */
function demoKnapsack() {
  console.log("=== DEMO THUẬT TOÁN KNAPSACK ===");
  
  // Ví dụ: Người dùng có ngân sách 7 triệu, thích thiên nhiên và thư giãn
  const userInput = {
    ngan_sach: 7000000,
    nhu_cau: {
      thien_nhien: 10,
      nghi_duong: 9,
      van_hoa: 5,
      am_thuc: 7,
      kham_pha: 6,
      gia_dinh: 8,
      cap_doi: 7,
      chup_anh: 8,
      khach_san: 7
    },
    tinh_thanh: 'all'
  };
  
  const result = findOptimalPlaces(userInput);
  
  if (result.success) {
    console.log("Ngân sách:", userInput.ngan_sach.toLocaleString('vi-VN'), "VNĐ");
    console.log("Số địa điểm tìm được:", result.so_luong_dia_diem);
    console.log("Tổng chi phí:", result.tong_chi_phi.toLocaleString('vi-VN'), "VNĐ");
    console.log("Còn lại:", result.ngan_sach_con_lai.toLocaleString('vi-VN'), "VNĐ");
    console.log("Tổng thời gian:", result.tong_thoi_gian, "giờ (1 ngày = 24 giờ)");
    
    // KIỂM TRA
    if (result.tong_chi_phi > userInput.ngan_sach) {
      console.error("❌ LỖI: Chi phí vượt ngân sách!");
    } else {
      console.log("✅ OK: Chi phí không vượt ngân sách");
    }
    
    console.log("\nDanh sách địa điểm được đề xuất:");
    
    result.danh_sach_dia_diem.forEach((place, index) => {
      console.log(`${index + 1}. ${place.ten} (${place.tinh_thanh}) - ${place.chi_phi.toLocaleString('vi-VN')} VNĐ - Điểm: ${place.diem_phu_hop}`);
    });
  } else {
    console.log("Lỗi:", result.message);
  }
}