function doGet() {
  return HtmlService.createHtmlOutputFromFile('ecology');
}
function getJSONdata(){
  var fileId = '1KRIFGhR1Vh9Y56F-TPFdXjqsQPiOfEp3';  //2023鳥類資料表.csv @ 計畫執行/都計
  var file = DriveApp.getFileById(fileId);
  var csvContent = file.getBlob().getDataAsString();
  var csvData = Utilities.parseCsv(csvContent); // 將 CSV 內容轉換為二維陣列
  
  var geoJSON = {
    "type": "FeatureCollection",
    "features": []
  };
  for (var i = 1; i < 50; i++) {
    var row = csvData[i];

    var feature = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [parseFloat(row[8]), parseFloat(row[9])]
      },
      "properties": {
        'ID': row[0],
        'ID_num': row[1],
        'Site': row[2],
        'Weather': row[3],
        'Y': row[4],
        'M': row[5],
        'D': row[6],
        '時段': row[7],
        'Location_x': row[8],
        'Location_y': row[9],
        'H': row[10],
        'M': row[11],
        'S': row[12],
        'Sp.': row[13],
        '#': row[14],
        'Ht': row[15],
        'Dis': row[16],
        'Dir': row[17],
        'Ha1': row[18],
        'MH2': row[19],
        'Wa3': row[20],
        'Sl(°)4': row[21],
        'C(%)5': row[22],
        'U(%)6': row[23],
        'Ar (%)': row[24],
        'So (%)': row[25],
        'Wa (%)': row[26],
        'El (%)': row[27],
        'Be7': row[28],
        'Note': row[29]
        // 有點噁但打都打完了...隨便
      }
    };

    geoJSON.features.push(feature);
  }
  

  var bird = {"type":"FeatureCollection", "features": [
  {"type":"Feature","geometry":{"type":"Point","coordinates":[120.4023642,23.00799173]},"properties":{"ID":"2021041101002","ID_num":2,"Site":"草圣農路 (南168與南162-1之間)","Weather":"晴朗","Y":2021,"M":4,"D":11,"時段":1,"Location_x":23.00799173,"Location_y":120.4023642,"H":6,"M_1":7,"S":"NA","Sp.":"竹雞","#":3,"Ht":"0","Dis":"10","Dir":"-","Ha1":"2","MH2":"1","Wa3":"0","Sl(°)4":"20","C(%)5":"100","U(%)6":"70","Ar (%)":"0","So (%)":"30","Wa (%)":"0","El (%)":"0","Be7":"2","Note":"NA"}},
  {"type":"Feature","geometry":{"type":"Point","coordinates":[120.4025549,23.00759201]},"properties":{"ID":"2021041101003","ID_num":3,"Site":"草圣農路 (南168與南162-1之間)","Weather":"晴朗","Y":2021,"M":4,"D":11,"時段":1,"Location_x":23.00759201,"Location_y":120.4025549,"H":6,"M_1":11,"S":"NA","Sp.":"白頭翁","#":2,"Ht":"19","Dis":"10","Dir":"-","Ha1":"1","MH2":"8","Wa3":"0","Sl(°)4":"-","C(%)5":"50","U(%)6":"60","Ar (%)":"20","So (%)":"20","Wa (%)":"0","El (%)":"0","Be7":"2","Note":"NA"}},
  {"type":"Feature","geometry":{"type":"Point","coordinates":[120.4026873,23.00718741]},"properties":{"ID":"2021041101004","ID_num":4,"Site":"草圣農路 (南168與南162-1之間)","Weather":"晴朗","Y":2021,"M":4,"D":11,"時段":1,"Location_x":23.00718741,"Location_y":120.4026873,"H":6,"M_1":12,"S":"NA","Sp.":"綠繡眼","#":1,"Ht":"6","Dis":"8","Dir":"SE","Ha1":"1","MH2":"8","Wa3":"0","Sl(°)4":"-","C(%)5":"NA","U(%)6":"NA","Ar (%)":"NA","So (%)":"NA","Wa (%)":"0","El (%)":"0","Be7":"5","Note":"NA"}},
  {"type":"Feature","geometry":{"type":"Point","coordinates":[120.4027402,23.0072069]},"properties":{"ID":"2021041101005","ID_num":5,"Site":"草圣農路 (南168與南162-1之間)","Weather":"晴朗","Y":2021,"M":4,"D":11,"時段":1,"Location_x":23.0072069,"Location_y":120.4027402,"H":6,"M_1":17,"S":"NA","Sp.":"白腰鵲鴝","#":1,"Ht":"6","Dis":"10","Dir":"-","Ha1":"1","MH2":"8","Wa3":"0","Sl(°)4":"-","C(%)5":"70","U(%)6":"80","Ar (%)":"0","So (%)":"20","Wa (%)":"0","El (%)":"0","Be7":"7","Note":"NA"}},
  {"type":"Feature","geometry":{"type":"Point","coordinates":[120.4028356,23.0068608]},"properties":{"ID":"2021041101006","ID_num":6,"Site":"草圣農路 (南168與南162-1之間)","Weather":"晴朗","Y":2021,"M":4,"D":11,"時段":1,"Location_x":23.0068608,"Location_y":120.4028356,"H":6,"M_1":17,"S":"NA","Sp.":"赤腹松鼠","#":1,"Ht":"3","Dis":"15","Dir":"S","Ha1":"1","MH2":"8","Wa3":"0","Sl(°)4":"-","C(%)5":"70","U(%)6":"80","Ar (%)":"0","So (%)":"20","Wa (%)":"0","El (%)":"0","Be7":"5","Note":"NA"}},
  {"type":"Feature","geometry":{"type":"Point","coordinates":[120.4031533,23.00637332]},"properties":{"ID":"2021041101007","ID_num":7,"Site":"草圣農路 (南168與南162-1之間)","Weather":"晴朗","Y":2021,"M":4,"D":11,"時段":1,"Location_x":23.00637332,"Location_y":120.4031533,"H":6,"M_1":22,"S":"NA","Sp.":"小彎嘴","#":3,"Ht":"15","Dis":"10","Dir":"SW","Ha1":"1"}}]};
  // 顯示轉換後的 GeoJSON
  Logger.log(typeof(geoJSON) == typeof(bird));
  Logger.log(geoJSON);

  return geoJSON;
}

function testing(){
  geoJSON = getJSONdata2();
  geoJSON.features.map(function(feature){
    Logger.log(feature.geometry.coordinates[0]);
    }
  )
}