# Secret Code Generator

A web-based secret code generator that converts two inputs into an encoded secret code. This application is built with vanilla JavaScript, HTML, and CSS and is ready to deploy on GitHub Pages.

## Features

- **User-Friendly Interface**: Clean, modern UI with gradient background
- **Input Validation**: Validates user inputs before processing
- **Real-time Generation**: Instantly generates secret codes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **No Backend Required**: Runs entirely in the browser

## How It Works

The application implements the following logic:

1. **First Code (Text Input)**:
   - Converts each character to its ASCII value
   - Subtracts 96 from each ASCII value
   - If result < 10, outputs as-is
   - If result ≥ 10, takes modulo 10 and outputs

2. **Second Code (Number Input)**:
   - Multiplies the input by 2
   - If result < 100, outputs it directly
   - If result ≥ 100, subtracts 100 and formats with leading zero if < 10
   - Special case: if input ≤ 5, outputs formatted with leading zero

## Usage

1. Enter a string in the "First Code" field (e.g., "abc")
2. Enter a number in the "Second Code" field (e.g., 7)
3. Click "Generate Secret Code"
4. The generated secret code will be displayed

### Example

- First Code: `abc`
- Second Code: `7`
- Result: `123114` (abc → 1,2,3 and 7*2=14)

## Deployment to GitHub Pages

### Method 1: Using Your Existing Repository

1. **Create or use your GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Secret Code Generator"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Save

4. **Access your site**:
   - Visit: `https://your-username.github.io/your-repo-name`

### Method 2: User/Organization Pages

If you want to deploy at `your-username.github.io`:

1. Create a repository named `your-username.github.io`
2. Push your files to the `main` branch
3. Your site will be available at `https://your-username.github.io`

## File Structure

```
.
├── index.html      # Main HTML file
├── style.css       # CSS styling
├── script.js       # JavaScript logic
└── README.md       # Documentation
```

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## License

This project is open source and available for personal and educational use.

## Author Notes

This web application is a conversion of the original C# console application, maintaining the same logic while providing a modern, user-friendly web interface suitable for deployment on GitHub Pages.
