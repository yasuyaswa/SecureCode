const code1El = document.getElementById('code1');
const code2El = document.getElementById('code2');
const resultEl = document.getElementById('result');
const outputEl = document.getElementById('output');
const statusIcon = document.getElementById('statusIcon');
const statusText = document.getElementById('statusText');
const copiedEl = document.getElementById('copied');
const copyBtn = document.getElementById('copyBtn');
const charCountEl = document.getElementById('charCount');

// Update character count on input
code1El.addEventListener('input', () => {
  const count = code1El.value.length;
  charCountEl.textContent = count === 1 ? '1 character' : `${count} characters`;
});

/* Status helpers */
function setSuccess(message = "Success") {
  statusIcon.textContent = "✅";
  statusText.textContent = message;
  resultEl.classList.remove("invalid");
  resultEl.classList.add("success");
}

function setInvalid(type = "error") {
  statusIcon.textContent = type === "warn" ? "⚠️" : "❌";
  statusText.textContent = type === "warn" ? "Check the input" : "Invalid input";
  resultEl.classList.remove("success");
  resultEl.classList.add("invalid");
}

/* Main logic - converts C# program logic to JavaScript */
function generateSecretCode(code1, code2) {
    let secretCode = '';

    // Process first code (string)
    // Convert each character to ASCII, subtract 96, then apply modulo logic
    for (let char of code1) {
        let asciiValue = char.charCodeAt(0);
        let t = asciiValue - 96;
        
        if (t < 10) {
            secretCode += t;
        } else {
            t = t % 10;
            secretCode += t;
        }
    }

    // Process second code (number)
    code2 = parseInt(code2);
    
    if (code2 > 5) {
        let x = code2 * 2;
        if (x < 100) {
            secretCode += x;
        } else {
            x = x - 100;
            if (x < 10) {
                secretCode += '0' + x;
            } else {
                secretCode += x;
            }
        }
    } else {
        let y = code2 * 2;
        secretCode += '0' + y;
    }

    return secretCode;
}

/* Process */
function process() {
  const code1 = code1El.value.trim();
  const code2 = code2El.value.trim();

  resultEl.hidden = true;

  if (!code1 || !code2) {
    setInvalid("warn");
    resultEl.hidden = false;
    return;
  }

  if (isNaN(code2)) {
    setInvalid("error");
    resultEl.hidden = false;
    return;
  }

  const numCode2 = parseInt(code2);
  if (numCode2 < 0 || numCode2 > 100) {
    setInvalid("warn");
    statusText.textContent = "Number must be 0-100";
    resultEl.hidden = false;
    return;
  }

  try {
    const secretCode = generateSecretCode(code1, code2);
    setSuccess("Code generated!");
    outputEl.textContent = secretCode;
    copyBtn.disabled = false;
    resultEl.hidden = false;
  } catch (err) {
    setInvalid("error");
    resultEl.hidden = false;
  }
}

/* Copy */
function copy() {
  if (!outputEl.textContent) return;
  navigator.clipboard.writeText(outputEl.textContent);
  
  // Visual feedback
  copyBtn.textContent = 'Copied!';
  copiedEl.style.display = "inline";
  
  setTimeout(() => {
    copyBtn.innerHTML = '<span class="action-icon">📋</span><span>Copy</span>';
    copiedEl.style.display = "none";
  }, 2000);
}

/* Reset */
function resetAll() {
  code1El.value = "";
  code2El.value = "";
  charCountEl.textContent = "0 characters";
  outputEl.textContent = "";
  resultEl.hidden = true;
  statusIcon.textContent = "";
  statusText.textContent = "";
  copiedEl.style.display = "none";
  copyBtn.disabled = true;
}

// Keyboard shortcuts
document.addEventListener('keypress', function(e) {
  if (e.key === 'Enter' && (e.target === code1El || e.target === code2El)) {
    process();
  }
});

// Ctrl+Enter to generate
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    process();
  }
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  copyBtn.disabled = true;
});
