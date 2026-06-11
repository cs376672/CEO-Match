// ==========================================
// Google Apps Script (Code.gs)
// 구글 시트 메뉴 -> 확장 프로그램 -> Apps Script 에 복사하여 붙여넣으세요.
// ==========================================

const SHEET_NAME = "Users"; // 시트 탭 이름

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // 첫 행 헤더 작성
    sheet.appendRow(["Timestamp", "ID", "Password", "Name", "Gender", "Consent"]);
    sheet.getRange("A1:F1").setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  // CORS 문제 방지를 위해 text/plain 으로 오는 JSON 문자열 파싱
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Invalid JSON format" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const action = data.action;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: "Sheet not found. Run setup() first." }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const allData = sheet.getDataRange().getValues();
  // 사용자가 헤더를 삭제할 수 있으므로 전체 데이터를 대상으로 검색합니다.
  const rows = allData;

  let response = { success: false, message: "Unknown action" };

  try {
    if (action === "check_id") {
      const idExists = rows.some(row => String(row[1]).toLowerCase() === String(data.id).toLowerCase());
      if (idExists) {
        response = { success: false, message: "이미 존재하는 아이디입니다." };
      } else {
        response = { success: true, message: "사용 가능한 아이디입니다." };
      }
    } 
    else if (action === "signup") {
      if (String(data.id).toLowerCase() === String(data.password).toLowerCase()) {
        response = { success: false, message: "아이디와 비밀번호는 같을 수 없습니다." };
      } else {
        const idExists = rows.some(row => String(row[1]).toLowerCase() === String(data.id).toLowerCase());
        if (idExists) {
          response = { success: false, message: "이미 존재하는 아이디입니다." };
        } else {
          // [Timestamp, ID, Password, Name, Gender, Consent]
          sheet.appendRow([
            new Date(),
            data.id,
            data.password,
            data.name,
            data.gender,
            data.consent
          ]);
          response = { success: true, message: "회원가입이 완료되었습니다." };
        }
      }
    }
    else if (action === "login") {
      const user = rows.find(row => String(row[1]).toLowerCase() === String(data.id).toLowerCase());
      if (!user) {
        response = { success: false, message: "존재하지 않는 아이디입니다." };
      } else if (String(user[2]) !== String(data.password)) {
        response = { success: false, message: "비밀번호가 일치하지 않습니다." };
      } else {
        response = { success: true, message: "로그인 성공!", userName: user[3] };
      }
    }
    else if (action === "find_pw") {
      const user = rows.find(row => String(row[1]).toLowerCase() === String(data.id).toLowerCase() && String(row[3]) === String(data.name));
      if (!user) {
        response = { success: false, message: "입력하신 정보와 일치하는 계정이 없습니다." };
      } else {
        response = { success: true, message: "비밀번호 찾기 성공", password: user[2] };
      }
    }
    else if (action === "save_result") {
      let resultsSheet = ss.getSheetByName("Results");
      if (!resultsSheet) {
        resultsSheet = ss.insertSheet("Results");
        resultsSheet.appendRow(["Timestamp", "ID", "TestType", "Result"]);
        resultsSheet.getRange("A1:D1").setFontWeight("bold");
        resultsSheet.setFrozenRows(1);
      }
      resultsSheet.appendRow([new Date(), data.id, data.testType, data.resultValue]);
      response = { success: true, message: "결과 저장 성공" };
    }
  } catch (err) {
    response = { success: false, message: "Server Error: " + err.message };
  }

  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// OPTIONS 요청 처리 (CORS preflight 처리, 일부 환경에서 필요)
function doOptions(e) {
  return ContentService.createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
