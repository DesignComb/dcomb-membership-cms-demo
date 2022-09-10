export default {
  methods: {
    createCsvFile(memberData) {
      let date = new Date
      let ymd = date.toISOString().slice(0, 10).replace(/-/g, "");
      let blob = new Blob([memberData]);
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'members' + ymd + '.csv';
      link.click();
    }
  }
}

//隨機產生資料
// function getRandomData() {
//   let header = "第一欄,第二欄,第三欄,第四欄,第五欄\n";
//   let data = "";
//   for (let i = 0; i < 50; i++) {
//     for (let j = 0; j < 5; j++) {
//       if(j>0){
//         data = data + ",";
//       }
//       data = data + "Item" + i + "_" + j;
//     }
//     data = data + "\n";
//   }
//   return header+data;
// }
