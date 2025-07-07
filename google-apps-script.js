// Google Apps Script for Newsletter Subscriptions
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = new Date();
    
    // Validate email
    if (!email || !isValidEmail(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          message: 'Invalid email address'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get or create the spreadsheet
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Check if email already exists
    const existingEmails = sheet.getRange('A:A').getValues().flat();
    if (existingEmails.includes(email)) {
      return ContentService
        .createTextOutput(JSON.stringify({
          result: 'error',
          message: 'Email already subscribed'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add the new subscription
    sheet.appendRow([
      email,
      timestamp.toISOString(),
      timestamp.toLocaleDateString(),
      timestamp.toLocaleTimeString(),
      'Active',
      'Website Subscription'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Successfully subscribed to newsletter!'
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    console.error('Error processing subscription:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        message: 'An error occurred while processing your subscription'
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      result: 'success',
      message: 'Newsletter subscription service is running'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSpreadsheet() {
  const spreadsheetName = 'Slayyin Newsletter Subscriptions';
  
  // Try to find existing spreadsheet
  const files = DriveApp.getFilesByName(spreadsheetName);
  
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.openById(file.getId());
  } else {
    // Create new spreadsheet
    const spreadsheet = SpreadsheetApp.create(spreadsheetName);
    const sheet = spreadsheet.getActiveSheet();
    
    // Set up headers
    sheet.getRange('A1:F1').setValues([[
      'Email',
      'Timestamp (ISO)',
      'Date',
      'Time',
      'Status',
      'Source'
    ]]);
    
    // Format headers
    sheet.getRange('A1:F1').setFontWeight('bold');
    sheet.getRange('A1:F1').setBackground('#4285f4');
    sheet.getRange('A1:F1').setFontColor('white');
    
    // Set column widths
    sheet.setColumnWidth(1, 250); // Email
    sheet.setColumnWidth(2, 200); // Timestamp
    sheet.setColumnWidth(3, 120); // Date
    sheet.setColumnWidth(4, 120); // Time
    sheet.setColumnWidth(5, 100); // Status
    sheet.setColumnWidth(6, 150); // Source
    
    return spreadsheet;
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Confirmation email function removed - only storing emails in sheet

// Test function (run this to test the setup)
function testSetup() {
  const testData = {
    email: 'test@example.com'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log('Test result:', result.getContent());
}

// Function to get subscription statistics
function getSubscriptionStats() {
  try {
    const spreadsheet = getOrCreateSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    const totalSubscriptions = data.length - 1; // Exclude header row
    const activeSubscriptions = data.filter(row => row[4] === 'Active').length;
    
    console.log('Total subscriptions:', totalSubscriptions);
    console.log('Active subscriptions:', activeSubscriptions);
    
    return {
      total: totalSubscriptions,
      active: activeSubscriptions
    };
  } catch (error) {
    console.error('Error getting stats:', error);
    return { total: 0, active: 0 };
  }
} 