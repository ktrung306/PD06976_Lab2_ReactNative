//Bai2: Data input
const oldData = [
        {code: 'ab', name : 'Son môi'},
        {code: 'ac', name : 'Sửa rửa mặt'},
        {code: null, name : null},
        {code: null, name : ''},  
];

// sử dụng Phương thức filter để lọc giá trị null, undefined
const newdata = oldData.filter(data => (data?.code && data?.name) !== null || undefined);
console.log(newdata);

// chuyển đổi dữ liệu từ mảng đã lọc sang object để tối ưu hoá
// tìm kiếm sản phẩm bằng key
const outputObject = newdata.reduce((acc,curr)=> {
  return  {...acc,[curr?.code] : curr}
} ,{});
console.log(outputObject);

// in ra thong tin mỹ phẩm có mã ab
for(key in outputObject){
    if(key =='ab') {
        console.log(outputObject[key]);
    }
}