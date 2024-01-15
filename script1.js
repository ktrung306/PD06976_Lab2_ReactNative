//Bài 1
const class1 = [ {
    mssv: 'PS0000',
    name: 'Nguyen Van A',
    avgPoint: 8.9,
    avgTraningPoint: 7,
    status: 'pass',
    }, {
    mssv: 'PS0001',
    name: 'Nguyen Van B',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'pass',
    }
    ];
    const class2 = [ {
    mssv: 'PS0002',
    name: 'Nguyen Van C',
    avgPoint: 4.9,
    avgTraningPoint: 10,
    status: 'failed',
    }, {
    mssv: 'PS0003',
    name: 'Nguyen Van D',
    avgPoint: 10,
    avgTraningPoint: 10,
    status: 'pass',
    },
    {
    mssv: 'PS0004',
    name: 'Nguyen Van E',
    avgPoint: 10,
    avgTraningPoint: 2,
    status: 'pass',
    },
    ]    

    // gộp 2 mảng lại và lọc ra những sinh viên có status failed
const allStudent = class1.concat(class2).filter(student => student?.status !== 'failed');
console.log(allStudent);

//Tạo hàm để sắp xếp mảng các đối tượng được chỉ định 
function sortBy(field) {
    return function(a, b) {
      return (a[field] < b[field]) - (a[field] > b[field])
    };
  }
//Danh sách sinh viên có điểm số từ cao xuống thấp.
const listStudentByavgPoint = [...allStudent];
listStudentByavgPoint.sort(sortBy('avgPoint'));
console.log(listStudentByavgPoint);
//Danh sách sinh viên có điểm rèn luyện từ cao xuống thấp.
const avgTraningPoint = [...allStudent];
avgTraningPoint.sort(sortBy('avgTraningPoint'));
console.log(avgTraningPoint);
// Lấy ra ong vàng
const ongVang = listStudentByavgPoint.filter((ongvang,index) => index === 0);
console.log(ongVang);