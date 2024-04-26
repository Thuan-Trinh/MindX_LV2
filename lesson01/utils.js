
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