# Windows 98/XP Portfolio - Retro Desktop Experience

A fully functional and visually authentic portfolio website built with Next.js, React, and GSAP, designed to mimic a vintage Windows 98/XP operating system.

![Windows 98 Portfolio](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![GSAP](https://img.shields.io/badge/GSAP-Latest-green?style=flat-square)

## ✨ Features

- 🖥️ **Authentic Windows 98/XP UI** - Pixel-perfect recreation of the classic Windows interface
- 🪟 **Interactive Windows** - Draggable, resizable windows with minimize, maximize, and close controls
- 🎨 **GSAP Animations** - Smooth open/close animations and transitions
- 📄 **Resume Viewer** - Microsoft Word-style document viewer
- 📁 **Projects Explorer** - Windows File Explorer-style project showcase
- 💻 **Terminal Skills** - Command Prompt with animated typing effect displaying technical skills
- ✉️ **Contact Form** - Classic Windows message dialog for getting in touch
- 🎯 **Desktop Icons** - Double-click to open applications
- ⏰ **Live Taskbar** - Functional Start menu, quick launch, and system tray with live clock
- 🎭 **Window Management** - Full z-index management for window focus

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository** (or use the existing project):
```bash
cd windows-portfolio
```

2. **Install dependencies**:
```bash
npm install
```

The following packages are already installed:
- `next` - Next.js framework
- `react` & `react-dom` - React library
- `gsap` - Animation library for smooth window transitions
- `typescript` - TypeScript support

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
windows-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main desktop environment
│   └── globals.css         # Global styles and Windows 98 theme
├── components/
│   ├── Taskbar.tsx         # Bottom taskbar with Start menu
│   ├── DesktopIcon.tsx     # Desktop icon component
│   ├── Window.tsx          # Draggable window component with GSAP
│   └── apps/
│       ├── ResumeViewer.tsx      # Word-style resume viewer
│       ├── ProjectsExplorer.tsx  # File Explorer-style projects
│       ├── TerminalSkills.tsx    # CMD-style skills display
│       └── ContactForm.tsx       # Contact form dialog
├── public/
│   ├── images/             # Desktop wallpapers and icons
│   └── cursors/            # Custom Windows cursors
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Resume Content** - Edit `components/apps/ResumeViewer.tsx`:
   - Update name, contact info, work experience, education, and skills

2. **Projects** - Edit `components/apps/ProjectsExplorer.tsx`:
   - Modify the `projects` array with your own projects
   - Add project descriptions, technologies, and links

3. **Skills** - Edit `components/apps/TerminalSkills.tsx`:
   - Update the `skillsData` object with your technical skills
   - Adjust proficiency percentages

4. **Contact Info** - Edit `components/apps/ContactForm.tsx`:
   - Update email, LinkedIn, and GitHub links

### Styling

- **Desktop Background**: Modify the gradient in `app/globals.css` under `body` selector
- **Window Colors**: Adjust title bar colors in `.title-bar` class
- **Taskbar**: Customize in `.taskbar` class

### Add New Applications

1. Create a new component in `components/apps/`
2. Add the window type to `desktopIcons` array in `app/page.tsx`
3. Add a case in the `renderWindowContent` switch statement

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **GSAP** - Animation library for smooth window transitions
- **Custom Drag Implementation** - Native mouse event handling for window dragging
- **98.css** - Windows 98 CSS framework (imported via CDN)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Features Breakdown

### Window Management
- Open multiple windows simultaneously
- Drag windows to reposition
- Minimize, maximize, and close controls
- Z-index management for window focus
- GSAP animations for smooth open/close

### Desktop Icons
- Double-click to open applications
- Visual selection feedback
- Hover effects

### Taskbar
- Start menu with application launcher
- Quick launch icons
- Active window indicators
- Live system clock
- System tray icons

### Applications

#### 📄 Resume Viewer
- Microsoft Word 97/2000 style interface
- Menu bar and toolbar
- Professional resume layout
- Scrollable content

#### 📁 Projects Explorer
- Windows File Explorer interface
- Sidebar navigation
- Project folders with details
- Technology tags
- Live demo and GitHub links

#### 💻 Terminal Skills
- Command Prompt style
- Animated typing effect
- Progress bars for skills
- Categorized skill display

#### ✉️ Contact Form
- Classic Windows dialog style
- Form validation
- Success message
- Contact information display

## 🌐 SEO Optimization

The portfolio includes:
- Proper meta tags and descriptions
- Semantic HTML structure
- Optimized page titles
- Responsive design
- Fast load times

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by Windows 98/XP operating systems
- 98.css for the retro styling framework
- GSAP for smooth animations

## 📧 Contact

For questions or feedback, please use the contact form in the portfolio or reach out via:
- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourname
- GitHub: github.com/yourname

---

Built with ❤️ using Next.js and nostalgia for the good old days of Windows 98!
