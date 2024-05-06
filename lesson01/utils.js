
// cách export 1
const calcPerSquare = (edge) => {
    return edge*4;
};

export {
    calcPerSquare
}

//cách export 2
export const calcAreaSquare = (edge) => {
    return edge*edge;
};

// cách export thứ 3: export default
const calcCerSquare = (edge) => {
    return edge*4;
};

export default calcCerSquare;


// Mảng và Object
// Mảng là một danh sách để lưu trữ các dữ liệu
const arr = [1, 2, 3, 4];

// Làm việc với mảng thì cần dựa vào vị trí các phần tử trong mảng
// - Thứ tự phần tử trong mảng luôn bắt đầu từ số 0
// - Vị trí cuối cùng của mảng = số lượng phần tử - 1
/*
DUYỆT MẢNG CẦN DÙNG VÒNG LẶP
*/



/*
OBJECT: bao gồm các cặp key: value
1. Được gọi là đối tượng chứa: thuộc tính (property), phương thức (method),...

const  student = {
    name: 'Thuan',
    eat: 'vegetable'
}

2. Làm việc với OBject thông qua key để lấy value
student.name hoặc student['name']

*/

//Spead & rest Operator
/*
SPEAD là trải phẳng tức là lấy hết toàn bộ dữ liệu ra bên ngoài

- Cả hai kĩ thuật này đều dùng chung 1 cú pháp là sử dụng dấu 3 chấm (...)
trước dữ liệu Array hoặc Object hoặc Set
NHƯNG kĩ thuật này sẽ luôn trả về kết quả là các giá trị bên trong của dữ liệu

REST: trải dấu 3 chám ở trước tham số trong function
-> có ý nghĩa là truyền vô hạn tham số vào function
-> kết quả là 
*/

/*
DESTRUCTURING: phá cấu trúc dữ liệu


*/