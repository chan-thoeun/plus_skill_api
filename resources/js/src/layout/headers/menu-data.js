const menu_data = [
    {
        title: 'Home',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'EduBlink Education', link: '/', hot: true },
            { title: 'Distant Learning', link: '/home-distant-learning' },
            { title: 'University', link: '/home-university' },
            { title: 'Online Academy', link: '/home-online-academy' },
            { title: 'Kitchen Coach', link: '/home-kitchen' },
            { title: 'Yoga Instructor', link: '/home-yoga-instructor' },
            { title: 'Kindergarten', link: '/home-kindergarten' },
            { title: 'Modern Schooling', link: '/home-modern-schooling', new: true },
            { title: 'Landing Demo', link: '/landing-demo' }
        ]
    },
    {
        title: 'Courses',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Course Style 1', link: '/course-style-1' },
            { title: 'Course Style 2', link: '/course-style-2' },
            { title: 'Course Style 3', link: '/course-style-3' },
            { title: 'Course Style 4', link: '/course-style-4' },
            { title: 'Course Style 5', link: '/course-style-5' },
            { title: 'Course Details 1', link: '/course-details' },
            { title: 'Course Details 2', link: '/course-details-2' },
            { title: 'Course Details 3', link: '/course-details-3' }
        ]
    },
    {
        title: 'Blog',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Blog Standard', link: '/blog-standard' },
            { title: 'Blog Masonry', link: '/blog-masonry' },
            { title: 'Blog List', link: '/blog-list' },
            { title: 'Blog Details', link: '/blog-details' }
        ]
    },
    {
        title: 'Contact',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Contact Us', link: '/contact-us' },
            { title: 'Contact Me', link: '/contact-me' }
        ]
    }
]

export default menu_data;