// 1.สร้าง google sheet 
// 2.กำหนดให้มีชื่อ และวันเกิด ในคอลัม 1-2 ตามลำดับ
// 3.ใช้คำสั่ง split เพื่อแยกค่าวัน/เดือน/ปี ออกจากกัน
// 4.ใช้คำสั่ง today เพื่อสร้างค่าวันปัจจุบัน ในแถวที่ 1 คอลัม 10
// 5.ใช้คำสั่ง split เพื่อแยกค่าวัน/เดือน/ปี ออกจากกัน  
// 6.ใช้คำสั่ง todaytaxt เพื่อสร้างข้อความของวันปัจจุบันใน  ในแถวที่ 1 คอลัม 16





function birthday() {

  var sheet = SpreadsheetApp.getActiveSheet();    // การทำให้ sheet เปิดใช้งาน
  var data = sheet.getDataRange().getValues();    // การดึงค่าจากช่วงข้อมูลทั้งหมด
  var today = data[0][15];                        // แสดงค่าข้อความวันนี้  ในตำแหน่ง แถว 1 คอลัม 16
  var date = data[0][10];                          // การระบุวันปัจจุบัน   ในตำแหน่ง แถว 1 คอลัม 11
  var month = data[0][11];                          // การระบุเดือนปัจจุบัน   ในตำแหน่ง แถว 1 คอลัม 12
  var picURL = 'https://img.freepik.com/free-vector/beautiful-flying-colorful-balloons-happy-birthday-watercolor-background_1035-20642.jpg?w=2000'  // url ของรูปภาพที่ต้องการส่ง
  var token = ["Pa5x1ksQhj24zue2il4WkYKSCQqw9Uoy1HDF6HStAXu"]; // ***ใส่ token ของกลุ่ม Line ที่ใช้งาน***
  var all_mes = ''                                // กำหนดค่าข้อความเริ่มต้นเป็นค่าว่าง 

  for (var i=1;i<data.length;++i){                // สร้าง loop เรียงลำดับ โดยเริ่มจาก 1
    var row = data[i];                            // กำหนดค่าเริ่มต้นให้ row วน loop ตาม i เช่น รอบที่ 1 จะเริ่มแถว 1 
    var name = row[0];                            // กำหนดค่าชื่อ อยู่ที่คอลัมที่ 1 
    var date_now = row[2];                        // กำหนดวันเกิด อยู่ที่คอลัมที่ 3
    var month_now = row[3];                       // กำหนดเดือนเกิด อยู่ที่คอลัมที่ 4
 

    if(date == date_now){                         // สร้างการตรวจสอบเงื่อนไข ว่าให้วันปัจจุบันตรงกันวันเกิด
      if (month == month_now) {                   // สร้างการตรวจสอบเงื่อนไข ว่าให้เดือนปัจจุบันตรงกันเดือนเกิด

          all_mes += '👉🏻 ' + name + '\n';         // นำข้อความ all_mes มาวนรับค่าหากเงื่อนไขเป็นจริงไปเรื่อยๆ 

      }    
    }
  
       var message = ' 🎈🎈🎈 Happy Birth Day 🎈🎈🎈 ' + '\n' + '\n' +'   เนื่องในโอกาสวันที่ ' + today + ' เป็นวันที่ตรงกับวันคล้ายวันเกิดของบุคลากร สคร.8 ดังนี้ ' + '\n'+ '\n' + all_mes +'\n'  + 'ขอให้ท่านมีสุขภาพร่างกายแข็งแรง ร่ำรวย และมีความสุขมากๆครับ/ค่ะ' + '\n' +'__________________' + '\n' + '💕💕💕 สคร.8 องค์กรแห่งความสุข 💕💕💕';        // สร้างข้อความที่จะส่งมาใส่ค่าตัวแปรวันที่ และตัวแปรชื่อคนที่เกิดวันนี้

  }

    if(all_mes != '') {                       // สร้างเงื่อนไขตรวจสอบว่าข้อความ all_mes ไม่เป็นค่าว่างหรือไม่ (มีข้อมูลที่นำมาใส่ในตัวแปร) ถ้าใช่ให้ส่งไลน์แจ้งเตือน

      var formData = {                        // สร้างตัวแปรเพื่อส่งภาพ
       'message' : message,                   // ข้อความที่ต้องการส่ง
       'imageThumbnail': picURL,              // ตัวแปรที่มี link ภาพ
       'imageFullsize' : picURL               // ตัวแปรที่มี link ภาพ
      
       }
    
    var options = {                           // สร้างตัวแปรเพื่อส่งไลน์
      "method" : "post",
       "payload" : formData,                  // ชื่อตัวแปร
       "headers" : {"Authorization" : "Bearer " + token}      // Token
      
       };

    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options)     // เรียกตัวแปรที่จะส่ง

    }



  


  SpreadsheetApp.flush();       // แสดงการทำงาน

Logger.log(all_mes);            // แสดงค่าข้อความ
Logger.log(message);            // แสดงค่าข้อความ

  
}

