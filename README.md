# SHPE-Berea Website 💙

The official website for the Society of Hispanic Professional Engineers (SHPE) chapter at Berea College.

## About

This website serves as the digital home for SHPE-Berea, showcasing our mission to empower Hispanic students in STEM fields through community, professional development, and cultural pride. Built with modern web technologies, the site provides information about our organization, membership benefits, leadership team, and ways to get involved.

## Features

- **Responsive Design**: Mobile-first approach using Bootstrap 5.2.3
- **Hero Section**: Dynamic carousel showcasing community moments and events
- **Membership Information**: Interactive accordion with details about joining SHPE
- **Team Profiles**: Current and past leadership boards with LinkedIn integration
- **Social Integration**: Links to Instagram, email, and Berea Engage
- **Smooth Navigation**: Sticky navbar with automatic collapse on mobile devices

## Project Structure

```
SHPEBerea.github.io/
├── index.html              # Main landing page
├── past-members.html       # Past leadership archive
├── style.css              # Custom styles and theming
├── script.js              # JavaScript for mobile navigation
├── package.json           # Node.js dependencies
├── resources.txt          # Development resources and credits
└── images/
    ├── leadership23-24/   # 2023-2024 board photos
    ├── leadership25-26/   # 2025-2026 board photos
    └── slideshow/         # Carousel images
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with modern features
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5.2.3** - Responsive framework
- **Font Awesome 6.5.1** - Icon library
- **Google Fonts (Dosis)** - Typography

## Key Sections

### Home Page (index.html)
- **About**: Mission statement and photo carousel
- **Membership**: Benefits, registration process, and pricing tiers
- **Team**: Current 2025-2026 leadership board
- **Footer**: Social media links and contact information

### Past Leadership (past-members.html)
- Founding Board 2023-2024 members
- Special recognition for faculty advisor Dr. Julian Viera

## Styling

The website uses a consistent color scheme defined in style.css:
- **Primary Blue**: `#001F5B` (SHPE brand color)
- **Accent Orange**: `#FD652F` (SHPE brand color)
- **Light Background**: `#f8f9fa`
- **White**: `#ffffff`

Custom components include:
- `.hero-section` - Gradient background landing area
- `.team-card` - Hoverable member profile cards
- `.btn-primary-custom` - Branded call-to-action buttons
- `.section-heading` - Styled headings with orange underline

## JavaScript Functionality

script.js implements:
- Automatic navbar collapse on mobile after link clicks
- Smooth scrolling behavior
- Bootstrap carousel integration

## Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for development)

## Contributing

We welcome contributions from the SHPE-Berea community!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Adding New Board Members

To add a new leadership member to index.html:

```html
<div class="card team-card">
  <img src="images/leadership25-26/member-name.jpg" class="card-img-top" alt="Member Name">
  <div class="card-body">
    <a href="https://www.linkedin.com/in/member-profile/" target="_blank" class="linkedin-icon">
      <i class="fab fa-linkedin"></i>
    </a>
    <h5 class="card-title">Position Title</h5>
    <p class="card-text"><strong>Member Name</strong></p>
    <p class="card-text"><small class="text-muted">Class of 20XX • Major</small></p>
  </div>
</div>
```

## Contact

- **Email**: [SHPE_BereaCollege1@outlook.com](mailto:SHPE_BereaCollege1@outlook.com)
- **Instagram**: [@shpe_berea](https://www.instagram.com/shpe_berea/)
- **Berea Engage**: [SHPE-Berea Chapter](https://berea.campuslabs.com/engage/organization/shpe-berea)

## Credits

- **Original Creater**: Belu (Belen Saavedra)
- **Current Maintainer**: AGB (America Gaona Borges)
- **Faculty Advisor**: Dr. Julian Viera

## License

This project is open source and available for the SHPE-Berea community.

---

**Familia in STEM 💙**

*Empowering Hispanic students at Berea College since 2023*