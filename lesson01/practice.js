{
    //Bài 1
    console.log('Bài 1');
    let a = 4;
    const calcSquareNumber = (num) => num ** 2;

    console.log(calcSquareNumber(a));
}

{
    //Bài 2
    //  Viết một arrow function để kiểm tra xem một chuỗi có chứa một từ khóa cụ thể hay không
    // - Input: Chuỗi: "Hello world!", Từ khóa: "world"
    // - Output: function(‘Hello world’, ’world’) -> true
    console.log('Bài 2');

    const phrase = 'Hello World';
    const findKeyWordInString = (phrase, keyword) => {
        // ở trong string, js cung cấp một phương thức: includes() để kiểm tra xem có chứa 1 thứ gì đó
        // chuyển text thành LowerCase hoặc UpperCase
        return phrase.toLowerCase().includes(keyword.toLowerCase());
    }
    console.log(findKeyWordInString(phrase, 'world'));

}

{
    //Bài 3
    //     Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi
    // - Input: Mảng chuỗi: ["one", "two", "three"], Tiền tố: "number: "
    // - Output: function(["one", "two", "three"],’number’) 
    //             -> ["number: one", "number: two", "number: three"]
    console.log('Bài 3');

    const addPrefix = (list, prefix) => {
        for (let i = 0; i < list.length; i++) {
            list[i] = `${prefix}: ${list[i]}`;
        }
        console.log(list);
    }
    const arr = ["one", "two", "three"];
    const prefix = 'number';
    addPrefix(arr, prefix);
}

{
    //Bài 4
    console.log('Bài 4');

    const arr1 = [1, 2, 3, 4];
    const arr2 = arr1.map(num => num * 2);
    console.log(arr2);

    const doubleArr = (arr) => {
        const result = arr.map(x => x * 2);
        console.log(result);
    }
    doubleArr([1, 2, 3, 4]);
}

{
    //Bài 5
    console.log('Bài 5');
    //filter có cách dùng giống y hệt map() với chức năng lọc ra các phần tử thoả mãn logic
    const sortArr = (arr) => {
        const resultOddNumber = arr.filter(x => x % 2 !== 0);
        const resultEvenNumber = arr.filter(x => x % 2 === 0);
        console.log(resultOddNumber);
        console.log(resultEvenNumber);
    }

    sortArr([1, 2, 3, 4]);

}

{
    //Bài 6
    console.log('Bài 6');
    //Tính tổng số công làm việc của các nhân viên trong mảng 
    const employees = [
        { id: 1, name: "John", workingDays: 22 },
        { id: 2, name: "Jane", workingDays: 20 },
        { id: 3, name: "Mark", workingDays: 25 },
    ];

    const totalWorkingDays = (arr) => {
        let total = 0;
        arr.forEach(employee => {
            total += employee.workingDays;
        });
        console.log(total);
    }
    totalWorkingDays(employees);

}

{
    //Bài 7
    console.log('Bài 7');
    //Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 4000 },
        { id: 3, name: "Mark", salary: 3000 },
    ];
    const findMaxSalary = (arr) => {
        let maxSalary = arr[0];
        for (let i = 0; i < arr.length; i++) {
            arr[i].salary > maxSalary.salary ? maxSalary = arr[i] : maxSalary
        };
        console.log(maxSalary);
    }
    findMaxSalary(employees);
    //method find: trả về kết quả là 1 phần tử thoả mãn điều kiện find
    //cách khác
    //1- lấy ra tất cả các mức lương với vị trí tương ứng
    //2- tìm kiếm giá trị lớn nhất
    //3- tìm kiếm vị trí của giá trị đó
    //4- lấy thông tin nhân viên tương ứng vị trí
    const findMaxSalary2 = (arr) => {
        const listSalary = arr.map((item)=> item.salary)
        const MAX = Math.max(...listSalary);
        const indexOfMax = listSalary.findIndex((item)=>{
            // method findIndex trả về vị trí của phần tử thoả mãn điều kiện
            return item === MAX;
        });
        console.log(arr[indexOfMax]);
    };
    findMaxSalary2(employees);

}

{
    //Bài 8
    console.log('Bài 8');
    //Tìm nhân viên làm việc chăm chỉ nhất
    const employees = [
        { id: 1, name: "John", workingDays: 22, lateDays: 2 },
        { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
        { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
    ];

    const findHardWorkingEmployee = (arr) => {
        let hardWorkingEmployee = arr[0];
        arr.forEach(employee => {
            employee.workingDays > hardWorkingEmployee.workingDays ? hardWorkingEmployee = employee : hardWorkingEmployee
        })
        console.log(`Nhân viên làm việc chăm chỉ nhất là: `, hardWorkingEmployee);
    };
    findHardWorkingEmployee(employees);
}

{
    // Bài 9
    console.log(`Bài 9`);
    //Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên là key và danh sách các nhân viên có cùng tên là value
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 3000 },
        { id: 4, name: "John", salary: 2200 },
        { id: 5, name: "Mark", salary: 2200 },
    ];

    const groupEmployeesByName = (employees) => {
        return employees.reduce((grouped, employee) => {
            grouped[employee.name] = (grouped[employee.name] || []).concat(employee);
            return grouped;
        }, {});
    }
    const groupedEmployees = groupEmployeesByName(employees);
    console.log(groupedEmployees);
}

{
    //Bài 10
    console.log(`Bài 10`);
    //Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên.
    // Tính hiệu suất của mỗi nhân viên bằng cách chia số công làm việc cho mức lương,
    // sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.
    const employees = [
        { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
        { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
        { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
    ];


    const findMaxPerforEmployee = (arr) => {
        let maxPerformEmployee = arr[0];
        let calcMaxPerformEmployee = maxPerformEmployee.workingDays / maxPerformEmployee.salary;
        arr.forEach(employee => {
            let perform = employee.workingDays / employee.salary;
            perform > calcMaxPerformEmployee ? maxPerformEmployee = employee : maxPerformEmployee;
        })
        console.log(maxPerformEmployee);
    };
    findMaxPerforEmployee(employees);

}

{
    //Bài 11
    console.log(`Bài 11`);
    // Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên.
    // Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc,
    // và số lượng nhân viên nằm trong mốc đó.
    const employees = [
        { id: 1, name: "John", workingDays: 20 },
        { id: 2, name: "Jane", workingDays: 22 },
        { id: 3, name: "Mark", workingDays: 20 },
        { id: 4, name: "Sam", workingDays: 24 },
        { id: 5, name: "Lucy", workingDays: 22 },
    ];
    const createEmployeeHistogram = (employees) => {
        const histogram = {};
        employees.forEach((employee) => {
            const workingDays = employee.workingDays;
            if (histogram[workingDays]) {
                histogram[workingDays]++;
            } else {
                histogram[workingDays] = 1;
            };
        });
        console.log(histogram);
    };
    createEmployeeHistogram(employees);
}

{
    //Bài 12
    console.log(`Bài 12`);
    // Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về
    // tên, email, số công làm việc, số công đi làm muộn, và mức lương của nhân viên.
    // Tạo một danh sách các đối tượng mới trong đó mỗi đối tượng chứa tên nhân viên,
    // email và thông tin tổng hợp về số công làm việc và đi làm muộn dưới dạng một object con.
    const employees = [
        { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
        { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
        { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
    ];
    const newArrayInfor = (arr) => {
        const newArray = arr.map(employee => {
            return {
                name: employee.name,
                email: employee.email,
                workInfor: {
                    workingDays: employee.workingDays,
                    lateDays: employee.lateDays,
                }
            }
        });
        console.log(newArray);
    };
    newArrayInfor(employees);
}

{
    //Bài 13
    console.log(`Bài 13`);
    // Quản lý danh sách công việc

    // Yêu cầu:
    //     1. Viết hàm thực thi thêm một công việc mới
    //     2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
    //     3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A

    let tasks = [
        { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
        { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
        { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
    ];

}

console.log('===SPREAD AND REST===');
const arrNumber = [1, 2, 3, 4, 5];
const arr = [...arrNumber];
console.log(arr);

const student = {
    name: 'Thuan',
    eat: 'vegetable'
}

const listStudent = { ...student };
console.log(listStudent);

console.log('=====REST====');
//in ra hết tất cả các giá trị được truyền vào trong tham số của hàm testRest
function testRest(index1, index2, ...args) {
    console.log(args);
}

testRest(1, 2, 3, 4, 5);

console.log('===DESTRUCTURING===');

const cars = ["BMW","Volvo","Saab","Ford","Fiat","Audi"];
cars.map((item) => {
    console.log(item);
});
