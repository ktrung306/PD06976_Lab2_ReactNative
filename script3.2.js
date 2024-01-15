// Bai3
//Promise được thực hiện với giá trị 'foo' sau độ trễ 2 giây
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    },2000);
});
//Promise từ chối do'lỗi' sau độ trễ 2 giây.
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    },2000);
});

//getList sử dụng async await được xem là một Promise.
const getList = async () => await fetch('https://jsonplaceholder.typicode.com/todos/1');

// sử dụng Promise.allSettled
// sử dụng then, catch, finally để log ra màn hình
Promise.allSettled([firstPromise, secondPromise, getList])
    .then(results => {
        console.log('Tất cả các promise đã hoàn thành công.');
        console.log(results);
    })
    .catch(error => {
        console.error('Promise thất bại.', error);
    })
    .finally(() => {
        console.log('Promise hoàn thành.');
    });

