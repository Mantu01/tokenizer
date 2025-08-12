# 🧠  Tokenizer

A character-based tokenization application built with Next.js , featuring bidirectional text-to-token and token-to-text conversion capabilities.

## ✨ Features

- **🔤 Text Tokenization**: Convert any text input into numerical tokens
- **🔢 Token Decoding**: Convert token arrays back to readable text
- **🌍 Extended Character Support**: Handles ASCII, extended Latin characters, and special symbols
- **📊 Character Mapping Viewer**: Interactive display of all character-to-token mappings
- **📱 Responsive Design**: Modern, mobile-friendly interface with glassmorphism effects
- **⚡ Real-time Processing**: Instant conversion with loading states and error handling
- **📋 Copy & Download**: Export results in multiple formats
- **🎨 Consistent Theming**: Unified color scheme and design system

## 🚀 Live Demo

[View the live application](tokenizer-inky.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Architecture**: Component-based with server/client separation

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Server component entry point
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Header.tsx         # Application header
│   ├── ModeToggle.tsx     # Mode switching buttons
│   ├── InputSection.tsx   # Input forms
│   ├── OutputSection.tsx  # Results display
│   ├── StatsSection.tsx   # Statistics panel
│   ├── ViewMappingButton.tsx # Character mapping button
│   ├── CharacterMappingModal.tsx # Character mapping modal
│   └── TokenizerInterface.tsx # Main interface component
└── utils/                 # Utility functions
    ├── constants.ts       # Design system constants
    └── tokenizer.ts       # Core tokenization logic
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tokenizer.git
   cd tokenizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### Text to Token Conversion
1. Select "Text → Token" mode
2. Enter your text in the input field
3. Click "Tokenize Text"
4. View the generated token array in the output section

### Token to Text Conversion
1. Select "Token → Text" mode
2. Enter tokens in array format: `[1, 2, 3]`
3. Click "Convert to Text"
4. View the decoded text in the output section

### Character Mapping
- Click "View Character Mapping" to see all character-to-token mappings
- Browse through the interactive grid of characters and their token IDs
- Each mapping shows the character, token number, and Unicode code

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Geist](https://vercel.com/font)

## 📞 Support

If you have any questions or need help:

- 📧 Email: your-email@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/tokenizer/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/yourusername/tokenizer/discussions)

---

**Made with ❤️ by [Mantu Kumar]**
