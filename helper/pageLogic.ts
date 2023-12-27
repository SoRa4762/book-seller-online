let currentPage = 1;
let totalPage = 10;

let pageNumber: number[] = [];

for (let i = currentPage - 3; i <= currentPage + 3; i++) {
  if (i < 1) continue; //skip hte rest code and start from the start with a new value of i
  if (i > totalPage) break;
  debugger; // to debug from browser's console
  pageNumber.push(i);
}

console.log(pageNumber);
