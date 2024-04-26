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
        for (let i= 0; i<list.length; i++){
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
    const arr2 = arr1.map(num => num*2);
    console.log(arr2);

    const doubleArr = (arr) => {
        const result = arr.map(x => x*2);
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